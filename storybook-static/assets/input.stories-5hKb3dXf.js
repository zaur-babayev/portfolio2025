import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as I}from"./index-CSO71INO.js";import{c as N}from"./utils-CytzSlOG.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-CqkleIqs.js";const r=I.forwardRef(({className:a,type:h,...j},w)=>e.jsx("input",{type:h,className:N("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:w,...j}));r.displayName="Input";r.__docgenInfo={description:"",methods:[],displayName:"Input"};const S={title:"UI/Input",component:r,tags:["autodocs"],args:{placeholder:"Type something...",type:"text",disabled:!1},decorators:[a=>e.jsx("div",{className:"w-80",children:e.jsx(a,{})})]},s={},o={args:{disabled:!0,placeholder:"Disabled input"}},t={render:a=>e.jsxs("div",{className:"space-y-2 w-80",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),e.jsx(r,{id:"email",type:"email",placeholder:"you@example.com",...a})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-80",children:[e.jsx(r,{type:"text",placeholder:"Text"}),e.jsx(r,{type:"email",placeholder:"Email"}),e.jsx(r,{type:"password",placeholder:"Password"}),e.jsx(r,{type:"number",placeholder:"Number"}),e.jsx(r,{type:"file"})]})};var d,i,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,c,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled input"
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,x,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="space-y-2 w-80">
      <label htmlFor="email" className="text-sm font-medium">Email</label>
      <Input id="email" type="email" placeholder="you@example.com" {...args} />
    </div>
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,g,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 w-80">
      <Input type="text" placeholder="Text" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="file" />
    </div>
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const _=["Playground","Disabled","WithLabel","Types"];export{o as Disabled,s as Playground,l as Types,t as WithLabel,_ as __namedExportsOrder,S as default};
