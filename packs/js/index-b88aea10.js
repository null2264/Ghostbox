import{eq as M,q as m,r as p,ax as x,a as e,W as v,I,u as R,t as y,iS as E,iT as S,X as T,o as b}from"../index-7b6dea3f.js";import{S as k}from"./scrollable-list-41d623e7.js";import{A}from"./accordion-d3af7bf7.js";import{I as N}from"./instance-restrictions-12aa8e7f.js";import"./index-eb1d5dbf.js";import"./load-more-3d2f8230.js";import"./dots-vertical-68cbc8e2.js";const q="/packs/assets/caret-right-8d06c486.svg",w="/packs/assets/caret-down-3f1f97a7.svg";var B=M(),D=function(s){var n=s.host,a=m(function(d){return B(d,n)}),l=p.useState(!1),r=x(l,2),i=r[0],c=r[1],u=function(g){c(function(f){return!f}),g.preventDefault()};return e("div",{},void 0,e("a",{href:"#",className:"flex items-center gap-1 py-2.5 no-underline",onClick:u},void 0,e(I,{src:i?w:q}),e("div",{className:v({"line-through":a.getIn(["federation","reject"])})},void 0,a.get("host"))),e("div",{className:v({"h-0 overflow-hidden":!i,"h-auto":i})},void 0,e(N,{remoteInstance:a})))},o=b({heading:{id:"column.federation_restrictions",defaultMessage:"Federation Restrictions"},boxTitle:{id:"federation_restrictions.explanation_box.title",defaultMessage:"Instance-specific policies"},boxMessage:{id:"federation_restrictions.explanation_box.message",defaultMessage:"Normally servers on the Fediverse can communicate freely. {siteTitle} has imposed restrictions on the following servers."},emptyMessage:{id:"federation_restrictions.empty_message",defaultMessage:"{siteTitle} has not restricted any instances."},notDisclosed:{id:"federation_restrictions.not_disclosed_message",defaultMessage:"{siteTitle} does not disclose federation restrictions through the API."}}),W=function(){var s=R(),n=y(),a=p.useCallback(E(),[]),l=m(function(t){return a(t)}),r=m(function(t){return S(t)}),i=p.useState(!0),c=x(i,2),u=c[0],d=c[1],g=function(_){d(_)},f=r?o.emptyMessage:o.notDisclosed;return e(T,{label:s.formatMessage(o.heading)},void 0,e(A,{headline:s.formatMessage(o.boxTitle),expanded:u,onToggle:g},void 0,s.formatMessage(o.boxMessage,{siteTitle:n.title})),e("div",{className:"pt-4"},void 0,e(k,{emptyMessage:s.formatMessage(f,{siteTitle:n.title})},void 0,l.map(function(t){return e(D,{host:t},t)}))))};export{W as default};