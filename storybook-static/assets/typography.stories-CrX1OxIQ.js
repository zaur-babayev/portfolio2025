import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{c as o}from"./utils-CytzSlOG.js";import"./index-C9rmetsa.js";function N({title:s,description:t,label:r,className:S}){return e.jsxs("div",{className:o("space-y-4",S),children:[r&&e.jsx(d,{children:r}),e.jsx(c,{children:s}),t&&e.jsx(p,{children:t})]})}function c({children:s,className:t,...r}){return e.jsx("h2",{className:o("font-serif text-3xl md:text-4xl font-normal tracking-header",t),...r,children:s})}function d({children:s,className:t,...r}){return e.jsx("span",{className:o("text-sm font-medium text-muted-foreground uppercase tracking-wider",t),...r,children:s})}function p({children:s,className:t,...r}){return e.jsx("p",{className:o("text-xl text-muted-foreground max-w-2xl",t),...r,children:s})}N.__docgenInfo={description:"",methods:[],displayName:"SectionHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"H2",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};d.__docgenInfo={description:"",methods:[],displayName:"SectionLabel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};p.__docgenInfo={description:"",methods:[],displayName:"SectionDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};const j={title:"UI/Typography",component:N,tags:["autodocs"],parameters:{layout:"padded"}},i={args:{label:"About",title:"Designer, developer, and music maker",description:"I primarily design & make music. I can also code. A little. Here is a longer description to preview wrapping."}},a={args:{title:"Recent books I've read"}},n={args:{title:""},render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(d,{children:"Section Label"}),e.jsx(c,{children:"Heading (H2)"}),e.jsx(p,{children:"Section description text that sits under a heading and can wrap across multiple lines within a max width."})]})};var l,m,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "About",
    title: "Designer, developer, and music maker",
    description: "I primarily design & make music. I can also code. A little. Here is a longer description to preview wrapping."
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,x,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Recent books I've read"
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,f,H;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: ""
  },
  render: () => <div className="space-y-6">
      <SectionLabel>Section Label</SectionLabel>
      <H2>Heading (H2)</H2>
      <SectionDescription>
        Section description text that sits under a heading and can wrap across
        multiple lines within a max width.
      </SectionDescription>
    </div>
}`,...(H=(f=n.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};const T=["FullHeader","TitleOnly","Pieces"];export{i as FullHeader,n as Pieces,a as TitleOnly,T as __namedExportsOrder,j as default};
