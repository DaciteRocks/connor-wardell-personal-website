(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UTyF:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("Zttt"),l=n("wtQ5"),o=n("Wbzz"),m=n("vOnD"),d=m.b.div.withConfig({displayName:"styles__Timeline",componentId:"sc-1bzbpnm-0"})(["",";&:last-child{",";}"],{display:"flex",flexDirection:"column","@media (min-width: 640px)":{flexDirection:"row"},width:"100%",padding:"1rem",position:"relative",borderLeftWidth:"1px",borderColor:"#c3dafe"},{paddingBottom:"0"}),c=m.b.div.withConfig({displayName:"styles__Details",componentId:"sc-1bzbpnm-1"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"33.333333%"}}),s=m.b.div.withConfig({displayName:"styles__Content",componentId:"sc-1bzbpnm-2"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"66.666667%",marginTop:"0"},marginTop:"1rem"}),p=m.b.div.withConfig({displayName:"styles__Title",componentId:"sc-1bzbpnm-3"})(["",";"],{fontWeight:"600",marginTop:"0.75rem"}),u=m.b.div.withConfig({displayName:"styles__Subtitle",componentId:"sc-1bzbpnm-4"})(["",";"],{fontSize:"0.75rem"}),b=m.b.div.withConfig({displayName:"styles__Date",componentId:"sc-1bzbpnm-5"})(["",";width:fit-content;"],{fontSize:"0.75rem",borderWidth:"1px",borderColor:"#ed64a6",borderRadius:"9999px",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),f=m.b.span.withConfig({displayName:"styles__Point",componentId:"sc-1bzbpnm-6"})(["",";left:-6px;top:20px;"],{width:"0.75rem",height:"0.75rem",borderWidth:"1px",borderColor:"#c3dafe",backgroundColor:"#ebf4ff",borderRadius:"9999px",position:"absolute"}),h=function(e){var t=e.title,n=e.subtitle,a=e.content,r=e.startDate,l=e.endDate;return i.a.createElement(d,null,i.a.createElement(f,null),i.a.createElement(c,null,i.a.createElement(b,null,r," - ",l),i.a.createElement(p,null,t),i.a.createElement(u,null,n)),i.a.createElement(s,null,a))},w=n("OKcn"),g=n("q5BQ"),y=n("eFje"),E=function(){var e=Object(o.useStaticQuery)("4033427577"),t=e.markdownRemark,n=e.allMarkdownRemark,a=t.frontmatter,r=n.edges;return i.a.createElement(w.a,{section:!0},i.a.createElement(g.a,{title:a.title,subtitle:a.subtitle}),r.map((function(e){var t=e.node,n=t.id,a=t.html,r=t.frontmatter,l=r.company,o=r.position,m=r.startDate,d=r.endDate;return i.a.createElement(h,{key:n,title:l,subtitle:o,content:i.a.createElement(y.a,{content:a}),startDate:m,endDate:d})})))},_=function(){var e=Object(o.useStaticQuery)("2252611511"),t=e.markdownRemark,n=e.allMarkdownRemark,a=t.frontmatter,r=n.edges;return i.a.createElement(w.a,{section:!0},i.a.createElement(g.a,{title:a.title,subtitle:a.subtitle}),r.map((function(e){var t=e.node,n=t.id,a=t.html,r=t.frontmatter,l=r.university,o=r.degree,m=r.startDate,d=r.endDate;return i.a.createElement(h,{key:n,title:l,subtitle:o,content:i.a.createElement(y.a,{content:a}),startDate:m,endDate:d})})))},k=function(){var e=Object(o.useStaticQuery)("1723752325"),t=e.markdownRemark,n=e.allMarkdownRemark,a=t.frontmatter,r=n.edges;return i.a.createElement(w.a,{section:!0},i.a.createElement(g.a,{title:a.title,subtitle:a.subtitle}),r.map((function(e){var t=e.node,n=t.id,a=t.html,r=t.frontmatter,l=r.company,o=r.position,m=r.startDate,d=r.endDate;return i.a.createElement(h,{key:n,title:l,subtitle:o,content:i.a.createElement(y.a,{content:a}),startDate:m,endDate:d})})))},v=m.b.div.withConfig({displayName:"styles__ProgressBar",componentId:"xii7xq-0"})(["",";"],{padding:"0.75rem"}),x=m.b.div.withConfig({displayName:"styles__BarWrapper",componentId:"xii7xq-1"})(["",";"],{width:"100%",height:"0.5rem",backgroundColor:"#e2e8f0",borderRadius:"0.25rem",overflow:"hidden",marginTop:"0.25rem"}),C=m.b.div.withConfig({displayName:"styles__Bar",componentId:"xii7xq-2"})(["",";width:",";"],{height:"0.5rem",backgroundColor:"#f687b3"},(function(e){return e.percentage+"%"})),D=m.b.div.withConfig({displayName:"styles__Content",componentId:"xii7xq-3"})(["",";"],{width:"100%",display:"flex",justifyContent:"space-between"}),I=m.b.h3.withConfig({displayName:"styles__Title",componentId:"xii7xq-4"})(["",";"],{fontWeight:"600"}),N=m.b.h3.withConfig({displayName:"styles__Percentage",componentId:"xii7xq-5"})(["",";"],{fontWeight:"600"}),R=function(e){var t=e.title,n=e.percentage;return i.a.createElement(v,null,i.a.createElement(D,null,i.a.createElement(I,null,t),i.a.createElement(N,null,n,"%")),i.a.createElement(x,null,i.a.createElement(C,{percentage:n})))},z=m.b.div.withConfig({displayName:"styles__Skills",componentId:"sc-1ron6kj-0"})(["",";"],{display:"flex",flexWrap:"wrap",width:"100%"}),S=m.b.div.withConfig({displayName:"styles__Skill",componentId:"sc-1ron6kj-1"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"50%"}}),j=function(){var e=Object(o.useStaticQuery)("1174766746"),t=e.markdownRemark,n=e.allMarkdownRemark,a=t.frontmatter,r=n.edges;return i.a.createElement(w.a,{section:!0},i.a.createElement(g.a,{title:a.title,subtitle:a.subtitle,center:!0}),i.a.createElement(z,null,r.map((function(e){var t=e.node,n=t.id,a=t.frontmatter,r=a.title,l=a.percentage;return i.a.createElement(S,{key:n},i.a.createElement(R,{title:r,percentage:l}))}))))};t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"Resume"}),i.a.createElement(E,null),i.a.createElement("hr",null),i.a.createElement(_,null),i.a.createElement("hr",null),i.a.createElement(k,null),i.a.createElement("hr",null),i.a.createElement(j,null))}},eFje:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a);t.a=function(e){var t=e.content;return i.a.createElement("span",{className:"format-html",dangerouslySetInnerHTML:{__html:t}})}}}]);
//# sourceMappingURL=component---src-pages-resume-tsx-12295adf65c1d6a847e5.js.map