import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const vertexShader = `
precision highp float;

attribute vec3 position;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float time;

#define PI  3.14159265359
#define PI2 6.28318530718

// FACTORS to stretching out the mesh
// from puffy shape up to strict platonic one
const int tetra_factor = 8;
const int octa_factor = 4;
const int cube_factor = 6;

// PLATONIC SDF's
float tetra(vec3 pos) {
  pos.xz = abs(pos.xz);
  vec3 n = normalize(vec3(0.0, sqrt(0.5), 1.0));
  float d = max(dot(pos, n.xyz), dot(pos, n.zyx * vec3(1.0, -1.0, 1.0)));

  for (int i = 0; i < tetra_factor; i++) d = sqrt(d);
    d -= 2.0;
  for (int i = 0; i < tetra_factor; i++) d = d * d;

  return d;
}

float octa(vec3 pos) {
  pos = abs(pos);
  vec3 n = normalize(vec3(1.0));
  float d = dot(pos, n);

  for (int i = 0; i < octa_factor; i++) d = sqrt(d);
    d -= 2.0;
  for (int i = 0; i < octa_factor; i++) d = d * d;

  return d;
}

float cube(vec3 pos) {
  pos = abs(pos);
  vec3 n = vec3(1.0, 0.0, 0.0);
  float d =    dot(pos, n.xyz);
    d = max(d, dot(pos, n.zxy));
    d = max(d, dot(pos, n.yzx));
  
  for (int i = 0; i < cube_factor; i++) d = sqrt(d);
    d -= 2.0;
  for (int i = 0; i < cube_factor; i++) d = d * d;

  return d;
}

// EASE TICK from linear to smooth-in-out
// with a pause on shape
const float t_unit = PI;
const float period = t_unit * 3.0;

float tickify(float t) {
  t = mod(t, t_unit) / t_unit;
  t = abs(4.0 * mod(t + 0.5, 1.0) - 2.0);
  t = min(t, 1.0);
  t = 0.5 - 0.5 * cos(t * PI);
  return t;
}

void main() {
  float tetrify = tickify(clamp(mod(time, period), 0.0, t_unit));
  float octify  = tickify(clamp(mod(time, period), t_unit, t_unit * 2.0));
  float cubify  = tickify(clamp(mod(time, period), t_unit * 2.0, t_unit * 3.0));

  vec3 tetra_pos = position * tetra(position) * 0.618;
  vec3 octa_pos  = position * octa(position)  * 0.8;
  vec3 cube_pos  = position * cube(position)  * 0.9;
  
  vec3 pos = position;
  pos = mix(pos, tetra_pos, tetrify);
  pos = mix(pos, octa_pos,  octify);
  pos = mix(pos, cube_pos,  cubify);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = 1.0;
}
`;

const fragmentShader = `
precision highp float;

uniform bool isDarkTheme;

void main() {
  vec3 color = isDarkTheme ? vec3(1.0) : vec3(0.1);
  gl_FragColor = vec4(color, 0.5);
}
`;

function getRandomSpherePoint() {
  const theta = Math.random() * Math.PI * 2.0;
  const phi = Math.acos(Math.random() * 2.0 - 1.0);

  const sinTheta = Math.sin(theta);
  const cosTheta = Math.cos(theta);
  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);

  const x = sinPhi * cosTheta;
  const y = sinPhi * sinTheta;
  const z = cosPhi;
  return [x, y, z];
}

export function MorphingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    renderer: THREE.WebGLRenderer;
    points: THREE.Points;
    controls: OrbitControls;
    animationFrameId?: number;
  }>();
  const lastScrollY = useRef(0);
  const isHovered = useRef(false);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target === document.documentElement && mutation.attributeName === 'class') {
          const isDarkTheme = document.documentElement.classList.contains('dark');
          if (sceneRef.current?.points) {
            const material = sceneRef.current.points.material as THREE.RawShaderMaterial;
            material.uniforms.isDarkTheme.value = isDarkTheme;
            material.needsUpdate = true;
          }
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const parentRect = containerRef.current.parentElement?.getBoundingClientRect();
    if (!parentRect) return;

    const scene = new THREE.Scene();
    const aspect = parentRect.width / parentRect.height;
    const camera = new THREE.OrthographicCamera(-1 * aspect, aspect, 1, -1, 1, 10);
    camera.position.z = 5;
    camera.zoom = 0.5;
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(parentRect.width, parentRect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const count = 256 ** 2;
    const position = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const [x, y, z] = getRandomSpherePoint();
      position[i * 3 + 0] = x;
      position[i * 3 + 1] = y;
      position[i * 3 + 2] = z;
    }

    const points_geometry = new THREE.BufferGeometry();
    points_geometry.setAttribute("position", new THREE.BufferAttribute(position, 3));

    const isDarkTheme = document.documentElement.classList.contains('dark');

    const points_material = new THREE.RawShaderMaterial({
      uniforms: { 
        time: { value: 0 }, 
        isDarkTheme: { value: isDarkTheme } 
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    const points = new THREE.Points(points_geometry, points_material);
    scene.add(points);

    containerRef.current.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enablePan = false;

    sceneRef.current = { scene, camera, renderer, points, controls };

    let t = 0.01;
    let animationFrameId: number;
    let rotationSpeed = 0.01;
    let targetRotationSpeed = 0.01;
    
    function animate() {
      if (!sceneRef.current) return;
      
      const { points, controls, renderer, scene, camera } = sceneRef.current;

      rotationSpeed += (targetRotationSpeed - rotationSpeed) * 0.1;

      points.material.uniforms.time.value += t;
      points.rotateY(rotationSpeed);
      controls.update();
      renderer.render(scene, camera);

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      targetRotationSpeed = Math.min(Math.max(Math.abs(scrollDelta) * 0.001, 0.01), 0.1) * Math.sign(scrollDelta);
      
      if (!isHovered.current) {
        if (sceneRef.current?.controls) {
          sceneRef.current.controls.autoRotate = Math.abs(scrollDelta) < 1;
        }
      }
    }

    function handleMouseEnter() {
      isHovered.current = true;
      if (sceneRef.current?.controls) {
        const controls = sceneRef.current.controls;
        controls.autoRotate = false;
        controls.enableRotate = true;
      }
      containerRef.current!.style.cursor = 'grab';
    }

    function handleMouseLeave() {
      isHovered.current = false;
      if (sceneRef.current?.controls) {
        const controls = sceneRef.current.controls;
        controls.autoRotate = true;
        controls.enableRotate = false;
      }
      containerRef.current!.style.cursor = 'auto';
    }

    function handleMouseDown() {
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grabbing';
      }
    }

    function handleMouseUp() {
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grab';
      }
    }

    function handleResize() {
      if (!sceneRef.current || !containerRef.current) return;
      
      const parentRect = containerRef.current.parentElement?.getBoundingClientRect();
      if (!parentRect) return;

      const { camera, renderer } = sceneRef.current;
      const aspect = parentRect.width / parentRect.height;
      
      camera.left = -1 * aspect;
      camera.right = aspect;
      camera.updateProjectionMatrix();
      
      renderer.setSize(parentRect.width, parentRect.height);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    containerRef.current.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    containerRef.current.addEventListener('mousedown', handleMouseDown);
    containerRef.current.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
        containerRef.current.removeEventListener('mousedown', handleMouseDown);
        containerRef.current.removeEventListener('mouseup', handleMouseUp);
      }
      
      if (sceneRef.current) {
        cancelAnimationFrame(animationFrameId);
        const { renderer, scene, points } = sceneRef.current;
        
        scene.remove(points);
        points.geometry.dispose();
        (points.material as THREE.ShaderMaterial).dispose();
        
        renderer.dispose();
        if (containerRef.current?.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
      
      sceneRef.current = undefined;
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'auto' // Changed to allow interaction
      }}
      aria-hidden="true"
    />
  );
}
