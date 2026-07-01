import{j as s}from"./jsx-runtime-z8MfsBtr.js";import{T as o,a as g,b as v,c as r,d as i,e as n,f as N}from"./toast-BQ7XiDxR.js";import"./index-C9rmetsa.js";import"./index-CSO71INO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ASAYUyH5.js";import"./index-D-OUEn-9.js";import"./index-JkSAf3Sj.js";import"./index-B9Inf0ol.js";import"./index-CAvpFn2P.js";import"./utils-CytzSlOG.js";import"./createLucideIcon-BUhRAX8T.js";const _={title:"UI/Toast",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[j=>s.jsxs(g,{children:[s.jsx("div",{className:"p-8",children:s.jsx(j,{})}),s.jsx(v,{})]})]},e={render:()=>s.jsxs(o,{open:!0,className:"static",children:[s.jsxs("div",{className:"grid gap-1",children:[s.jsx(r,{children:"Scheduled"}),s.jsx(i,{children:"Your event has been created."})]}),s.jsx(n,{})]})},t={render:()=>s.jsxs(o,{open:!0,className:"static",children:[s.jsxs("div",{className:"grid gap-1",children:[s.jsx(r,{children:"Copied"}),s.jsx(i,{children:"Token copied to clipboard."})]}),s.jsx(N,{altText:"Undo",children:"Undo"}),s.jsx(n,{})]})},a={render:()=>s.jsxs(o,{open:!0,variant:"destructive",className:"static",children:[s.jsxs("div",{className:"grid gap-1",children:[s.jsx(r,{children:"Error"}),s.jsx(i,{children:"Something went wrong."})]}),s.jsx(n,{})]})};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Toast open className="static">
      <div className="grid gap-1">
        <ToastTitle>Scheduled</ToastTitle>
        <ToastDescription>Your event has been created.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,m,T;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Toast open className="static">
      <div className="grid gap-1">
        <ToastTitle>Copied</ToastTitle>
        <ToastDescription>Token copied to clipboard.</ToastDescription>
      </div>
      <ToastAction altText="Undo">Undo</ToastAction>
      <ToastClose />
    </Toast>
}`,...(T=(m=t.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var u,x,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Toast open variant="destructive" className="static">
      <div className="grid gap-1">
        <ToastTitle>Error</ToastTitle>
        <ToastDescription>Something went wrong.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const y=["Default","WithAction","Destructive"];export{e as Default,a as Destructive,t as WithAction,y as __namedExportsOrder,_ as default};
