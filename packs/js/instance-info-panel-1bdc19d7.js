import{a7 as u,b9 as p,N as g,eq as f,u as H,d as h,f as v,q as _,a as I,hN as P,hO as R,o as S}from"../index-180a7f7a.js";import{W as q}from"./widget-03b83226.js";import"./arrow-right-b75290c7.js";const d=t=>g(t).getIn(["remote_timeline","pinnedHosts"]),M=t=>(n,e)=>{const i=e(),s=d(i);return n(u(["remote_timeline","pinnedHosts"],p(s).add(t)))},A=t=>(n,e)=>{const i=e(),s=d(i);return n(u(["remote_timeline","pinnedHosts"],p(s).remove(t)))};var k=f(),c=S({pinHost:{id:"remote_instance.pin_host",defaultMessage:"Pin {host}"},unpinHost:{id:"remote_instance.unpin_host",defaultMessage:"Unpin {host}"}}),b=function(n){var e=n.host,i=H(),s=h(),l=v(),a=_(function(r){return k(r,e)}),o=l.getIn(["remote_timeline","pinnedHosts"]).includes(e),m=function(){s(o?A(e):M(e))};return a?I(q,{title:a.get("host"),onActionClick:m,actionIcon:o?P:R,actionTitle:i.formatMessage(o?c.unpinHost:c.pinHost,{host:e})}):null};export{b as default};
