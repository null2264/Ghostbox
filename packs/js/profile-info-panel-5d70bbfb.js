import{cI as P,q as y,O as L,a as e,W as D,c9 as $,H as o,d as H,g as T,a8 as U,r as q,hB as E,b5 as x,y as m,R as k,L as C,cA as O,gS as W,aH as G,u as j,a3 as h,hC as w,hu as J,A as _,dd as V,hD as K,hE as Q,F as X,hF as Y,hG as Z,bO as ee,cg as ae,hH as te,cd as re}from"../index-fa7669bd.js";import{v as ie}from"./balloon-551f6642.js";import"./web.url.constructor-bdf886df.js";import{u as se}from"./usePatronUser-a8fc07bb.js";import{P as oe}from"./profile-field-5a45c2e1.js";import{P as ne}from"./profile-stats-a31eb3f0.js";import"./object-assign-7c29ece2.js";import"./use_localization-2883d128.js";var le=P(),ce=function(c){var r=c.accountIds,n=c.limit,a=n===void 0?3:n,g=y(function(i){return L(r.slice(0,a).map(function(s){return le(i,s)}).filter(function(s){return s}))});return e(o,{className:"relative","aria-hidden":!0},void 0,g.map(function(i,s){return e("div",{className:D("relative",{"-ml-3":s!==0}),style:{zIndex:a-s}},i.id,e($,{className:"ring-1 ring-white dark:ring-primary-900",src:i.avatar,size:20}))}))},de=P(),ue=function(c){var r=c.account,n=H(),a=y(function(d){return d.me}),g=T(),i=y(function(d){var t;return((t=d.user_lists.familiar_followers.get(r.id))===null||t===void 0?void 0:t.items)||U()}),s=y(function(d){return i.slice(0,2).map(function(t){return de(d,t)})});q.useEffect(function(){a&&g.familiarFollowers&&n(E(r.id))},[r.id]);var p=function(){n(G("FAMILIAR_FOLLOWERS",{accountId:r.id}))};if(i.size===0)return null;var b=function(){return k.createElement(k.Fragment,null,s.map(function(t){return!!t&&e(W,{accountId:t.id,inline:!0},void 0,e(C,{className:"mention inline-block",to:"/@".concat(t.acct)},void 0,e(o,{space:1,alignItems:"center",grow:!0},void 0,e(m,{size:"sm",theme:"primary",truncate:!0,dangerouslySetInnerHTML:{__html:t.display_name_html}}),t.verified&&e(O,{}))))}),i.size>2&&e(x,{id:"account-Status--familiar-followers-more",vars:{count:i.size-s.size}},void 0,e("span",{className:"cursor-pointer hover:underline",role:"presentation",onClick:p},void 0,"0 others you follow")))};return e(o,{space:2,alignItems:"center"},void 0,e(ce,{accountIds:i}),e(x,{id:"account-Status--familiar-followers",elems:{accounts:b()}},void 0,e(m,{theme:"muted",size:"sm"},void 0,"Followed by ","<accounts></accounts>")))},me=function(c){try{var r=new URL(c);return["http:","https:"].includes(r.protocol)}catch{return!1}},xe=function(c){var r,n,a=c.account,g=c.username,i=j(),s=se(a==null?void 0:a.url),p=s.patronUser,b=y(function(v){return v.me}),d=(a==null?void 0:a.id)===b,t=function(){return a!=null&&a.admin?e(w,{slug:"admin",title:"Admin"},"staff"):a!=null&&a.moderator?e(w,{slug:"moderator",title:"Moderator"},"staff"):null},z=function(){var u=a?ae(a):[];return u.map(function(l){return e(w,{slug:l,title:te(re(l))},l)})},A=function(){var u=z(),l=t(),I=(p==null?void 0:p.is_patron)===!0,f=[];return l&&f.push(l),I&&f.push(e(w,{slug:"patron",title:"Patron"},"patron")),[].concat(f,ee(u))},B=function(){var u,l=a==null||(u=a.pleroma)===null||u===void 0?void 0:u.birthday;if(!l)return null;var I=new Date(l),f=new Date,R=I.getDate()===f.getDate()&&I.getMonth()===f.getMonth();return e(o,{alignItems:"center",space:.5},void 0,e(_,{src:ie,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e(x,{id:"account-Birthday--"+(R?"celebration":"date"),vars:{date:l}},void 0,e(m,{size:"sm"},void 0,"Birthday")))};if(!a)return e("div",{className:"mt-6 min-w-0 flex-1 sm:px-2"},void 0,e(h,{space:2},void 0,e(h,{},void 0,e(o,{space:1,alignItems:"center"},void 0,e(m,{size:"sm",theme:"muted",direction:"ltr",truncate:!0},void 0,"@",g)))));var N=(r=(n=a.pleroma)===null||n===void 0?void 0:n.deactivated)!==null&&r!==void 0?r:!1,M=i.formatDate(a.created_at,{month:"long",year:"numeric"}),S=A();return e("div",{className:"mt-6 min-w-0 flex-1 sm:px-2"},void 0,e(h,{space:2},void 0,e(h,{},void 0,e(o,{space:1,alignItems:"center"},void 0,N?e(x,{id:"account-Status--deactivated"},void 0,e(m,{size:"lg",weight:"bold",truncate:!0},void 0,"Deactivated")):e(m,{size:"lg",weight:"bold",dangerouslySetInnerHTML:{__html:a.display_name_html},truncate:!0}),a.bot&&e(w,{slug:"bot",title:"Bot"}),S.length>0&&e(o,{space:1,alignItems:"center"},void 0,S)),e(o,{alignItems:"center",space:.5},void 0,e(J,{account:a}),a.locked&&e(x,{id:"account-Status--locked",attrs:{alt:!0}},void 0,e(_,{src:V,alt:"This account privacy status is set to locked. The owner manually reviews who can follow them.",className:"h-4 w-4 text-gray-600"})))),e(ne,{account:a}),a.note.length>0&&e(K,{size:"sm",dangerouslySetInnerHTML:{__html:a.note_emojified},truncate:!0}),e("div",{className:"flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-center"},void 0,a.local&&e(o,{alignItems:"center",space:.5},void 0,e(_,{src:Q,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e(m,{size:"sm"},void 0,e(X,{id:"account.member_since",defaultMessage:"Joined {date}",values:{date:M}}))),a.location?e(o,{alignItems:"center",space:.5},void 0,e(_,{src:Y,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e(m,{size:"sm"},void 0,a.location)):null,a.website?e(o,{alignItems:"center",space:.5},void 0,e(_,{src:Z,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e("div",{className:"max-w-[300px]"},void 0,e(m,{size:"sm",truncate:!0},void 0,me(a.website)?e("a",{className:"text-primary-600 hover:underline dark:text-accent-blue",href:a.website,target:"_blank"},void 0,a.website):a.website))):null,B()),d?null:e(ue,{account:a})),a.fields.length>0&&e(h,{space:2,className:"mt-4 xl:hidden"},void 0,a.fields.map(function(v,u){return e(oe,{field:v},u)})))};export{xe as default};
