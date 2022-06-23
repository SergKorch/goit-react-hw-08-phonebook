"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[118],{5118:function(e,r,o){o.r(r),o.d(r,{default:function(){return m}});var t=o(885),n=o(3522),a=o(661),i=o(7542),l=o(3504),s=o(8542),c=o(8543),p=o(2791),d=o(9434),u=o(9176),h=o(184),m=function(){var e=(0,d.I0)(),r=(0,p.useState)(""),o=(0,t.Z)(r,2),m=o[0],v=o[1],y=(0,p.useState)(""),f=(0,t.Z)(y,2),g=f[0],x=f[1],Z=function(e){var r=e.target,o=r.name,t=r.value;switch(o){case"email":return v(t);case"password":return x(t);default:return}};return(0,h.jsx)("div",{children:(0,h.jsx)(n.lL,{children:(0,h.jsx)("form",{onSubmit:function(r){r.preventDefault(),e((0,u.Ib)({email:m,password:g}))},children:(0,h.jsxs)(a.Z,{sx:{maxWidth:400,mx:"auto",my:4,py:3,px:2,display:"flex",flexDirection:"column",gap:2},children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(i.C,{level:"h4",component:"h1",children:(0,h.jsx)("b",{children:"Welcome!"})}),(0,h.jsx)(i.C,{level:"body2",children:"Sign in to continue"})]}),(0,h.jsx)(s.Z,{onChange:Z,name:"email",type:"email",value:m,placeholder:"johndoe@email.com",label:"Email"}),(0,h.jsx)(s.Z,{onChange:Z,name:"password",type:"password",value:g,placeholder:"password",label:"Password"}),(0,h.jsx)(c.Z,{type:"submit",sx:{mt:1},children:"Log in"}),(0,h.jsx)(i.C,{endDecorator:(0,h.jsx)(l.OL,{to:"/register",children:"Sign up"}),fontSize:"sm",sx:{alignSelf:"center"},children:"Don't have an account?"})]})})})})}},7542:function(e,r,o){o.d(r,{C:function(){return C}});var t=o(3366),n=o(7462),a=o(2791),i=o(8182),l=o(7312),s=o(2982),c=o(2466),p=o(1911),d=["sx"];function u(e){var r,o=e.sx,a=function(e){var r={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(o){p.Gc[o]?r.systemProps[o]=e[o]:r.otherProps[o]=e[o]})),r}((0,t.Z)(e,d)),i=a.systemProps,l=a.otherProps;return r=Array.isArray(o)?[i].concat((0,s.Z)(o)):"function"===typeof o?function(){var e=o.apply(void 0,arguments);return(0,c.P)(e)?(0,n.Z)({},i,e):i}:(0,n.Z)({},i,o),(0,n.Z)({},l,{sx:r})}var h=o(4419),m=o(3393),v=o(9106),y=o(7225);function f(e){return(0,y.Z)("JoyTypography",e)}(0,o(5878).Z)("JoyTypography",["root","h1","h2","h3","h4","h5","h6","body1","body2","body3","noWrap","gutterBottom","startDecorator","endDecorator","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","variantPlain","variantOutlined","variantSoft","variantSolid"]);var g=o(184),x=["color","textColor"],Z=["className","component","gutterBottom","noWrap","level","levelMapping","children","endDecorator","startDecorator","variant"],b=a.createContext(!1),D=(0,m.Z)("span",{name:"JoyTypography",slot:"StartDecorator",overridesResolver:function(e,r){return r.startDecorator}})((function(e){var r,o=e.ownerState;return(0,n.Z)({display:"inline-flex",marginInlineEnd:"min(var(--Typography-gap, 0.25em), 0.5rem)"},"flex-start"===(null==(r=o.sx)?void 0:r.alignItems)&&{marginTop:"2px"})})),w=(0,m.Z)("span",{name:"JoyTypography",slot:"endDecorator",overridesResolver:function(e,r){return r.endDecorator}})((function(e){var r,o=e.ownerState;return(0,n.Z)({display:"inline-flex",marginInlineStart:"min(var(--Typography-gap, 0.25em), 0.5rem)"},"flex-start"===(null==(r=o.sx)?void 0:r.alignItems)&&{marginTop:"2px"})})),S=(0,m.Z)("span",{name:"JoyTypography",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(e){var r,o=e.theme,t=e.ownerState;return(0,n.Z)({"--Icon-fontSize":"1.25em",margin:0},t.nested?{display:"inline"}:{fontFamily:o.vars.fontFamily.body,display:"block"},(t.startDecorator||t.endDecorator)&&(0,n.Z)({display:"flex",alignItems:"center"},t.nested&&(0,n.Z)({display:"inline-flex"},t.startDecorator&&{verticalAlign:"bottom"})),t.level&&"inherit"!==t.level&&o.typography[t.level],t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.variant&&(0,n.Z)({paddingInline:"0.25em",marginInline:"-0.25em"},null==(r=o.variants[t.variant])?void 0:r[t.color]))})),j={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",display1:"h1",display2:"h2",body1:"p",body2:"p",body3:"span",body4:"span",body5:"span",inherit:"p"},C=a.forwardRef((function(e,r){var o=(0,v.Z)({props:e,name:"JoyTypography"}),s=o.color,c=o.textColor,p=(0,t.Z)(o,x),d=a.useContext(b),m=u((0,n.Z)({},p,{color:c})),y=m.className,C=m.component,I=m.gutterBottom,P=void 0!==I&&I,T=m.noWrap,W=void 0!==T&&T,k=m.level,B=void 0===k?"body1":k,_=m.levelMapping,N=void 0===_?{}:_,J=m.children,R=m.endDecorator,O=m.startDecorator,A=m.variant,E=void 0===A?s?"plain":void 0:A,L=(0,t.Z)(m,Z),z=s||(E?"neutral":void 0),F=d?e.level||"inherit":B,M=(0,n.Z)({},m,{level:F,className:y,component:C,color:z,gutterBottom:P,noWrap:W,nested:d,variant:E}),G=C||(d?"span":N[F]||j[F]||"span"),q=function(e){var r=e.gutterBottom,o=e.noWrap,t=e.level,n=e.color,a=e.variant,i={root:["root",t,r&&"gutterBottom",o&&"noWrap",n&&"color".concat((0,l.Z)(n)),a&&"variant".concat((0,l.Z)(a))],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,h.Z)(i,f,{})}(M);return(0,g.jsx)(b.Provider,{value:!0,children:(0,g.jsxs)(S,(0,n.Z)({as:G,ref:r,ownerState:M,className:(0,i.Z)(q.root,y)},L,{children:[O&&(0,g.jsx)(D,{ownerState:M,className:q.startDecorator,children:O}),J,R&&(0,g.jsx)(w,{ownerState:M,className:q.endDecorator,children:R})]}))})}))}}]);
//# sourceMappingURL=118.6e86e963.chunk.js.map