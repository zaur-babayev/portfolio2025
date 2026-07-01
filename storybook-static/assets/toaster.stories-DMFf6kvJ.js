import{j as s}from"./jsx-runtime-z8MfsBtr.js";import{r as f}from"./index-CSO71INO.js";import{a as I,T as y,c as M,d as B,e as C,b as U,f as b}from"./toast-BQ7XiDxR.js";import{B as S}from"./button-D1pt1-JN.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ASAYUyH5.js";import"./index-D-OUEn-9.js";import"./index-JkSAf3Sj.js";import"./index-B9Inf0ol.js";import"./index-CAvpFn2P.js";import"./utils-CytzSlOG.js";import"./createLucideIcon-BUhRAX8T.js";const R=1,N=1e6;let m=0;function P(){return m=(m+1)%Number.MAX_SAFE_INTEGER,m.toString()}const T=new Map,x=t=>{if(T.has(t))return;const e=setTimeout(()=>{T.delete(t),a({type:"REMOVE_TOAST",toastId:t})},N);T.set(t,e)},V=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,R)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case"DISMISS_TOAST":{const{toastId:o}=e;return o?x(o):t.toasts.forEach(r=>{x(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===o||o===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)}}},u=[];let l={toasts:[]};function a(t){l=V(l,t),u.forEach(e=>{e(l)})}function p({...t}){const e=P(),o=n=>a({type:"UPDATE_TOAST",toast:{...n,id:e}}),r=()=>a({type:"DISMISS_TOAST",toastId:e});return a({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:n=>{n||r()}}}),{id:e,dismiss:r,update:o}}function Y(){const[t,e]=f.useState(l);return f.useEffect(()=>(u.push(e),()=>{const o=u.indexOf(e);o>-1&&u.splice(o,1)}),[t]),{...t,toast:p,dismiss:o=>a({type:"DISMISS_TOAST",toastId:o})}}function h(){const{toasts:t}=Y();return s.jsxs(I,{children:[t.map(function({id:e,title:o,description:r,action:n,...k}){return s.jsxs(y,{...k,children:[s.jsxs("div",{className:"grid gap-1",children:[o&&s.jsx(M,{children:o}),r&&s.jsx(B,{children:r})]}),n,s.jsx(C,{})]},e)}),s.jsx(U,{})]})}h.__docgenInfo={description:"",methods:[],displayName:"Toaster"};const tt={title:"UI/Toaster",component:h,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[t=>s.jsxs("div",{className:"p-8",children:[s.jsx(t,{}),s.jsx(h,{})]})]},i={render:()=>s.jsx(S,{variant:"outline",onClick:()=>p({title:"Scheduled",description:"Your event has been created."}),children:"Show toast"})},c={render:()=>s.jsx(S,{variant:"outline",onClick:()=>p({title:"Token revoked",description:"The access token has been revoked.",action:s.jsx(b,{altText:"Undo",children:"Undo"})}),children:"Show toast with action"})},d={render:()=>s.jsx(S,{variant:"outline",onClick:()=>p({variant:"destructive",title:"Something went wrong",description:"Please try again later."}),children:"Show error toast"})};var A,v,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => toast({
    title: "Scheduled",
    description: "Your event has been created."
  })}>
      Show toast
    </Button>
}`,...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var _,O,g;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => toast({
    title: "Token revoked",
    description: "The access token has been revoked.",
    action: <ToastAction altText="Undo">Undo</ToastAction>
  })}>
      Show toast with action
    </Button>
}`,...(g=(O=c.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};var j,w,D;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => toast({
    variant: "destructive",
    title: "Something went wrong",
    description: "Please try again later."
  })}>
      Show error toast
    </Button>
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const et=["Default","WithAction","Destructive"];export{i as Default,d as Destructive,c as WithAction,et as __namedExportsOrder,tt as default};
