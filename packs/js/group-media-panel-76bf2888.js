import{d as y,r as v,ax as E,q as I,kR as S,O as G,kS as O,a as i,aF as k,F as c,y as D,aH as m}from"../index-3c55338e.js";import{W as F}from"./widget-f33bc65e.js";import{M as N}from"./media-item-3acc9706.js";import"./arrow-right-b75290c7.js";import"./volume-08f8a8f1.js";import"./es.array.last-index-of-aadc1929.js";var q=function(f){var r,e=f.group,s=y(),g=v.useState(!0),u=E(g,2),M=u[0],l=u[1],d=!!(e!=null&&(r=e.relationship)!==null&&r!==void 0&&r.member),n=e==null?void 0:e.locked,_=I(function(o){return e?S(o,e==null?void 0:e.id):G()}),x=function(a){if(a.type==="video")s(m("VIDEO",{media:a,status:a.status}));else{var t=a.getIn(["status","media_attachments"]),p=t.findIndex(function(h){return h.id===a.id});s(m("MEDIA",{media:t,index:p,status:a.status,account:a.account}))}};v.useEffect(function(){l(!0),e&&!e.deleted_at&&(d||!n)&&s(O(e.id)).then(function(){return l(!1)}).catch(function(){})},[e==null?void 0:e.id,d,n]);var A=function(){var a=_.slice(0,9);return a.isEmpty()?i(D,{size:"sm",theme:"muted"},void 0,i(c,{id:"media_panel.empty_message",defaultMessage:"No media found."})):i("div",{className:"grid grid-cols-3 gap-1"},void 0,a.map(function(t,p){return i(N,{attachment:t,onOpenMedia:x},"".concat(t.getIn(["status","id"]),"+").concat(t.id))}))};return n&&!d||e!=null&&e.deleted_at?null:i(F,{title:i(c,{id:"media_panel.title",defaultMessage:"Media"})},void 0,e&&i("div",{className:"w-full"},void 0,M?i(k,{}):A()))};export{q as default};
