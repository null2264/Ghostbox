import{bo as M,cE as S,cI as y,cJ as b,u as _,d as v,a as s,ab as C,a6 as I,H as f,o as p,N as w,iL as c,aH as x,iM as A,aw as R,q as r,W as m,b5 as E,cK as L,bT as N,c2 as P,R as H,az as k,Q as T,iN as j,r as q,iO as z,X as B,F}from"../index-7b6dea3f.js";import{S as O}from"./scrollable-list-41d623e7.js";import{P as W}from"./poll-preview-902144d0.js";import"./index-eb1d5dbf.js";import"./load-more-3d2f8230.js";import"./noop-495afcb0.js";var $=function(n,t){var a,e=n.me,d=(a=n.entities[M.ACCOUNTS])===null||a===void 0?void 0:a.store[e],u=S({account:d,content:t.text.replace(new RegExp(`
`,"g"),"<br>"),created_at:t.scheduled_at,id:t.id,in_reply_to_id:t.in_reply_to_id,media_attachments:t.media_attachments,poll:t.poll,sensitive:t.sensitive,uri:"/scheduled_statuses/".concat(t.id),url:"/scheduled_statuses/".concat(t.id),visibility:t.visibility});return y(b(u))},l=p({cancel:{id:"scheduled_status.cancel",defaultMessage:"Cancel"},deleteConfirm:{id:"confirmations.scheduled_status_delete.confirm",defaultMessage:"Cancel"},deleteHeading:{id:"confirmations.scheduled_status_delete.heading",defaultMessage:"Cancel scheduled post"},deleteMessage:{id:"confirmations.scheduled_status_delete.message",defaultMessage:"Are you sure you want to cancel this scheduled post?"}}),K=function(n){var t=n.status,a=_(),e=v(),d=function(){e(function(i,h){var g=w(h()).get("deleteModal");e(g?x("CONFIRM",{icon:A,heading:a.formatMessage(l.deleteHeading),message:a.formatMessage(l.deleteMessage),confirm:a.formatMessage(l.deleteConfirm),onConfirm:function(){return e(c(t.id))}}):c(t.id))})};return s(f,{justifyContent:"end"},void 0,s(C,{title:a.formatMessage(l.cancel),text:a.formatMessage(l.cancel),src:I,onClick:d}))},D=["statusId"],J=function(n){var t=n.statusId,a=R(n,D),e=r(function(u){var i=u.scheduled_statuses.get(t);return i?$(u,i):null});if(!e)return null;var d=e.account;return s("div",{className:m("status__wrapper","status__wrapper-".concat(e.visibility),{"status__wrapper-reply":!!e.in_reply_to_id}),tabIndex:0},void 0,s("div",{className:m("status","status-".concat(e.visibility),{"status-reply":!!e.in_reply_to_id}),"data-id":e.id},void 0,s("div",{className:"mb-4"},void 0,s(f,{justifyContent:"between",alignItems:"start"},void 0,s(E,{account:d,timestamp:e.created_at,futureTimestamp:!0,hideActions:!0},d.id))),s(L,{status:e}),s(N,{status:e,collapsable:!0}),e.media_attachments.size>0&&s(P,{media:e.media_attachments,sensitive:e.sensitive}),e.poll&&s(W,{pollId:e.poll}),H.createElement(K,k({status:e},a))))},Q=p({heading:{id:"column.scheduled_statuses",defaultMessage:"Scheduled Posts"}}),U=T(function(o){o(j())},300,{leading:!0}),se=function(){var n=_(),t=v(),a=r(function(i){return i.status_lists.get("scheduled_statuses").items}),e=r(function(i){return i.status_lists.get("scheduled_statuses").isLoading}),d=r(function(i){return!!i.status_lists.get("scheduled_statuses").next});q.useEffect(function(){t(z())},[]);var u=s(F,{id:"empty_column.scheduled_statuses",defaultMessage:"You don't have any scheduled statuses yet. When you add one, it will show up here."});return s(B,{label:n.formatMessage(Q.heading)},void 0,s(O,{scrollKey:"scheduled_statuses",hasMore:d,isLoading:typeof e=="boolean"?e:!0,onLoadMore:function(){return U(t)},emptyMessage:u},void 0,a.map(function(i){return s(J,{statusId:i},i)})))};export{se as default};