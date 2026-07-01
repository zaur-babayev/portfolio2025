import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as o}from"./index-CSO71INO.js";import{c as q,a as l,P as G,b as K}from"./index-JkSAf3Sj.js";import{u as J}from"./index-B9Inf0ol.js";import{c as F,A as Q,P as X,D as Y,C as Z,a as ee,R as te}from"./index-CkLNhH6u.js";import{c as re}from"./utils-CytzSlOG.js";import{B as M}from"./button-D1pt1-JN.js";import{c as oe}from"./createLucideIcon-BUhRAX8T.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ASAYUyH5.js";import"./index-D-OUEn-9.js";import"./index-CAvpFn2P.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],ae=oe("Play",ne);var H,S="HoverCard",[k,je]=q(S,[F]),R=F(),[se,j]=k(S),I=t=>{const{__scopeHoverCard:n,children:a,open:i,defaultOpen:s,onOpenChange:d,openDelay:m=700,closeDelay:f=300}=t,c=R(n),v=o.useRef(0),u=o.useRef(0),h=o.useRef(!1),p=o.useRef(!1),[x=!1,r]=K({prop:i,defaultProp:s,onChange:d}),C=o.useCallback(()=>{clearTimeout(u.current),v.current=window.setTimeout(()=>r(!0),m)},[m,r]),g=o.useCallback(()=>{clearTimeout(v.current),!h.current&&!p.current&&(u.current=window.setTimeout(()=>r(!1),f))},[f,r]),V=o.useCallback(()=>r(!1),[r]);return o.useEffect(()=>()=>{clearTimeout(v.current),clearTimeout(u.current)},[]),e.jsx(se,{scope:n,open:x,onOpenChange:r,onOpen:C,onClose:g,onDismiss:V,hasSelectionRef:h,isPointerDownOnContentRef:p,children:e.jsx(te,{...c,children:a})})};I.displayName=S;var B="HoverCardTrigger",z=o.forwardRef((t,n)=>{const{__scopeHoverCard:a,...i}=t,s=j(B,a),d=R(a);return e.jsx(Q,{asChild:!0,...d,children:e.jsx(X.a,{"data-state":s.open?"open":"closed",...i,ref:n,onPointerEnter:l(t.onPointerEnter,b(s.onOpen)),onPointerLeave:l(t.onPointerLeave,b(s.onClose)),onFocus:l(t.onFocus,s.onOpen),onBlur:l(t.onBlur,s.onClose),onTouchStart:l(t.onTouchStart,m=>m.preventDefault())})})});z.displayName=B;var ie="HoverCardPortal",[Ee,ce]=k(ie,{forceMount:void 0}),N="HoverCardContent",U=o.forwardRef((t,n)=>{const a=ce(N,t.__scopeHoverCard),{forceMount:i=a.forceMount,...s}=t,d=j(N,t.__scopeHoverCard);return e.jsx(G,{present:i||d.open,children:e.jsx(de,{"data-state":d.open?"open":"closed",...s,onPointerEnter:l(t.onPointerEnter,b(d.onOpen)),onPointerLeave:l(t.onPointerLeave,b(d.onClose)),ref:n})})});U.displayName=N;var de=o.forwardRef((t,n)=>{const{__scopeHoverCard:a,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:d,onInteractOutside:m,...f}=t,c=j(N,a),v=R(a),u=o.useRef(null),h=J(n,u),[p,x]=o.useState(!1);return o.useEffect(()=>{if(p){const r=document.body;return H=r.style.userSelect||r.style.webkitUserSelect,r.style.userSelect="none",r.style.webkitUserSelect="none",()=>{r.style.userSelect=H,r.style.webkitUserSelect=H}}},[p]),o.useEffect(()=>{if(u.current){const r=()=>{x(!1),c.isPointerDownOnContentRef.current=!1,setTimeout(()=>{var g;((g=document.getSelection())==null?void 0:g.toString())!==""&&(c.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",r),()=>{document.removeEventListener("pointerup",r),c.hasSelectionRef.current=!1,c.isPointerDownOnContentRef.current=!1}}},[c.isPointerDownOnContentRef,c.hasSelectionRef]),o.useEffect(()=>{u.current&&pe(u.current).forEach(C=>C.setAttribute("tabindex","-1"))}),e.jsx(Y,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:m,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:l(d,r=>{r.preventDefault()}),onDismiss:c.onDismiss,children:e.jsx(Z,{...v,...f,onPointerDown:l(f.onPointerDown,r=>{r.currentTarget.contains(r.target)&&x(!0),c.hasSelectionRef.current=!1,c.isPointerDownOnContentRef.current=!0}),ref:h,style:{...f.style,userSelect:p?"text":void 0,WebkitUserSelect:p?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),le="HoverCardArrow",ue=o.forwardRef((t,n)=>{const{__scopeHoverCard:a,...i}=t,s=R(a);return e.jsx(ee,{...s,...i,ref:n})});ue.displayName=le;function b(t){return n=>n.pointerType==="touch"?void 0:t()}function pe(t){const n=[],a=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;a.nextNode();)n.push(a.currentNode);return n}var me=I,fe=z,W=U;const E=me,$=fe,w=o.forwardRef(({className:t,align:n="center",sideOffset:a=4,...i},s)=>e.jsx(W,{ref:s,align:n,sideOffset:a,className:re("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...i}));w.displayName=W.displayName;w.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const Te={title:"UI/HoverCard",component:E,tags:["autodocs"],decorators:[t=>e.jsx("div",{className:"p-16",children:e.jsx(t,{})})]},y={render:()=>e.jsxs(E,{children:[e.jsx($,{asChild:!0,children:e.jsx(M,{variant:"ghost",children:"Hover for details"})}),e.jsx(w,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Now Playing"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Everything in its Right Place - Radiohead"})]})})]})},P={render:()=>e.jsxs(E,{children:[e.jsx($,{asChild:!0,children:e.jsx(M,{variant:"ghost",size:"icon","aria-label":"Play music",children:e.jsx(ae,{className:"h-4 w-4"})})}),e.jsx(w,{align:"end",className:"w-80",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Digital Synth"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Play a tune on my custom digital synthesizer"}),e.jsxs("div",{className:"mt-4 space-y-1",children:[e.jsx("p",{className:"text-xs font-semibold",children:"Audio Engine:"}),e.jsxs("div",{className:"text-xs text-muted-foreground space-y-1",children:[e.jsx("p",{children:"Tone.js PolySynth with Triangle8 oscillator"}),e.jsx("p",{children:"Dynamic filter envelope & compressor"}),e.jsx("p",{children:"Effects: Chorus + Reverb + Filter chain"})]})]})]})})]})};var T,D,O;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">Hover for details</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Now Playing</h4>
          <p className="text-sm text-muted-foreground">
            Everything in its Right Place - Radiohead
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
}`,...(O=(D=y.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var _,A,L;P.parameters={...P.parameters,docs:{...(_=P.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Play music">
          <Play className="h-4 w-4" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Digital Synth</h4>
          <p className="text-sm text-muted-foreground">
            Play a tune on my custom digital synthesizer
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-xs font-semibold">Audio Engine:</p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Tone.js PolySynth with Triangle8 oscillator</p>
              <p>Dynamic filter envelope & compressor</p>
              <p>Effects: Chorus + Reverb + Filter chain</p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
}`,...(L=(A=P.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const De=["Default","MusicPlayer"];export{y as Default,P as MusicPlayer,De as __namedExportsOrder,Te as default};
