import{d as l,u as g,q as v,r as h,jp as p,a as e,aF as M,a2 as y,eM as C,cy as S,b2 as T,X as R,o as b,a3 as c,y as m,d9 as A,H,ae as _,aH as j,jq as q,jr as f}from"../index-621b10ea.js";var o=b({header:{id:"security.headers.tokens",defaultMessage:"Sessions"},revoke:{id:"security.tokens.revoke",defaultMessage:"Revoke"},revokeSessionHeading:{id:"confirmations.revoke_session.heading",defaultMessage:"Revoke current session"},revokeSessionMessage:{id:"confirmations.revoke_session.message",defaultMessage:"You are about to revoke your current session. You will be signed out."},revokeSessionConfirm:{id:"confirmations.revoke_session.confirm",defaultMessage:"Revoke"}}),w=function(t){var a=t.token,i=t.isCurrent,n=l(),r=g(),s=function(){n(i?j("CONFIRM",{icon:q,heading:r.formatMessage(o.revokeSessionHeading),message:r.formatMessage(o.revokeSessionMessage),confirm:r.formatMessage(o.revokeSessionConfirm),onConfirm:function(){n(f(a.id))}}):f(a.id))};return e("div",{className:"rounded-lg bg-gray-100 p-4 dark:bg-primary-800"},void 0,e(c,{space:2},void 0,e(c,{},void 0,e(m,{size:"md",weight:"medium"},void 0,a.app_name),a.valid_until&&e(m,{size:"sm",theme:"muted"},void 0,e(A,{value:a.valid_until,hour12:!0,year:"numeric",month:"short",day:"2-digit",hour:"numeric",minute:"2-digit"}))),e(H,{justifyContent:"end"},void 0,e(_,{theme:i?"danger":"primary",onClick:s},void 0,r.formatMessage(o.revoke)))))},x=function(){var t=l(),a=g(),i=v(function(s){return s.security.get("tokens").reverse()}),n=v(function(s){var d=s.auth.tokens.valueSeq().find(function(u){return u.me===s.auth.me});return d==null?void 0:d.id});h.useEffect(function(){t(p())},[]);var r=i?e("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2"},void 0,i.map(function(s){return e(w,{token:s,isCurrent:s.id===n},s.id)})):e(M,{});return e(R,{label:a.formatMessage(o.header),transparent:!0,withHeader:!1},void 0,e(y,{variant:"rounded"},void 0,e(C,{backHref:"/settings"},void 0,e(S,{title:a.formatMessage(o.header)})),e(T,{},void 0,r)))};export{x as default};