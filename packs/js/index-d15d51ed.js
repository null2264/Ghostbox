import{d as D,aC as G,aZ as T,q as u,b3 as F,r as L,ax as P,b4 as h,a as i,aF as _,X as m,aG as q,F as y,R as B,aH as x}from"../index-8e73ebc4.js";import{L as A}from"./load-more-7c38aeef.js";import{M as H}from"./media-item-d4079975.js";import"./volume-08f8a8f1.js";import"./es.array.last-index-of-9b7c05b3.js";var U=function(n){var c=n.maxId,v=n.onLoadMore,s=function(){v(c)};return i(A,{onClick:s})},J=function(){var n=D(),c=G(),v=c.username,s=T(v,{withRelationship:!0}),e=s.account,I=s.isLoading,$=s.isUnavailable,t=u(function(o){return F(o,e.id)}),l=u(function(o){var a;return(a=o.timelines.get("account:".concat(e==null?void 0:e.id,":media")))===null||a===void 0?void 0:a.isLoading}),f=u(function(o){var a;return(a=o.timelines.get("account:".concat(e==null?void 0:e.id,":media")))===null||a===void 0?void 0:a.hasMore}),w=u(function(o){var a;return(a=o.timelines.get("account:".concat(e==null?void 0:e.id,":media")))===null||a===void 0?void 0:a.next}),N=L.useState(323),p=P(N,2),O=p[0],S=p[1],E=function(a){a&&S(a.offsetWidth)},R=function(){f&&M(t.size>0?t.last().status.id:void 0)},M=function(a){e&&n(h(e.id,{url:w,maxId:a}))},k=function(a){a.preventDefault(),R()},z=function(a){if(a.type==="video")n(x("VIDEO",{media:a,status:a.status,account:a.account}));else{var d=a.status.media_attachments,r=d.findIndex(function(C){return C.id===a.id});n(x("MEDIA",{media:d,index:r,status:a.status}))}};if(L.useEffect(function(){e&&n(h(e.id))},[e==null?void 0:e.id]),I||!t&&l)return i(m,{},void 0,i(_,{}));if(!e)return i(q,{});var g=null;return f&&!(l&&t.size===0)&&(g=i(A,{className:"my-auto",visible:!l,onClick:k})),$?i(m,{},void 0,i("div",{className:"empty-column-indicator"},void 0,i(y,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"}))):i(m,{label:"".concat(e.display_name," (@").concat(e.acct,")"),transparent:!0,withHeader:!1},void 0,B.createElement("div",{role:"feed",className:"flex flex-wrap gap-2",ref:E},t.map(function(o,a){var d,r;return o===null?i(U,{maxId:a>0&&((r=t.get(a-1))===null||r===void 0?void 0:r.id)||null,onLoadMore:M},"more:"+((d=t.get(a+1))===null||d===void 0?void 0:d.id)):i("div",{className:"aspect-square",style:{width:Math.floor((O-4)/3)-4}},void 0,i(H,{attachment:o,onOpenMedia:z},"".concat(o.status.id,"+").concat(o.id)))}),!l&&t.size===0&&i("div",{className:"empty-column-indicator col-span-2 sm:col-span-3"},void 0,i(y,{id:"account_gallery.none",defaultMessage:"No media to show."})),g),l&&t.size===0&&i("div",{className:"slist__append"},void 0,i(_,{})))};export{J as default};