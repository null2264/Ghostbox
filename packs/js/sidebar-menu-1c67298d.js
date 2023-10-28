import{u as K,d as V,r as Y,hP as U,g as W,q as g,b7 as Z,N as $,hQ as j,R as u,ax as J,hR as Q,a as e,W as p,aK as X,a6 as ee,a3 as x,L as ae,b6 as P,es as f,hS as te,b5 as se,n as oe,hT as ie,db as re,aJ as ne,K as le,hU as ce,hV as ue,hW as de,F as b,hX as ge,fU as q,hY as fe,fY as A,fV as ve,H as N,y as M,A as w,cR as me,hK as S,bY as ke,o as be,hZ as _e,eZ as he,h_ as pe}from"../index-98ef4d81.js";import{v as xe}from"./hash-746ab8b6.js";import{P as Me}from"./profile-stats-9f993bdb.js";import"./use_localization-b064feaa.js";const we="/packs/assets/filter-ea3a7ceb.svg";var i=be({preferences:{id:"navigation_bar.preferences",defaultMessage:"Preferences"},blocks:{id:"navigation_bar.blocks",defaultMessage:"Blocked users"},domainBlocks:{id:"navigation_bar.domain_blocks",defaultMessage:"Hidden domains"},mutes:{id:"navigation_bar.mutes",defaultMessage:"Muted users"},filters:{id:"navigation_bar.filters",defaultMessage:"Muted words"},followedTags:{id:"navigation_bar.followed_tags",defaultMessage:"Followed hashtags"},soapboxConfig:{id:"navigation_bar.soapbox_config",defaultMessage:"Soapbox config"},accountMigration:{id:"navigation_bar.account_migration",defaultMessage:"Move account"},accountAliases:{id:"navigation_bar.account_aliases",defaultMessage:"Account aliases"},logout:{id:"navigation_bar.logout",defaultMessage:"Logout"},bookmarks:{id:"column.bookmarks",defaultMessage:"Bookmarks"},lists:{id:"column.lists",defaultMessage:"Lists"},groups:{id:"column.groups",defaultMessage:"Groups"},events:{id:"column.events",defaultMessage:"Events"},invites:{id:"navigation_bar.invites",defaultMessage:"Invites"},developers:{id:"navigation.developers",defaultMessage:"Developers"},addAccount:{id:"profile_dropdown.add_account",defaultMessage:"Add an existing account"},followRequests:{id:"navigation_bar.follow_requests",defaultMessage:"Follow requests"},close:{id:"lightbox.close",defaultMessage:"Close"}}),o=function(a){var c=a.href,v=a.to,r=a.icon,_=a.text,m=a.onClick,n=e(N,{space:2,alignItems:"center"},void 0,e("div",{className:"relative inline-flex rounded-full bg-primary-50 p-2 dark:bg-gray-800"},void 0,e(w,{src:r,className:"h-5 w-5 text-primary-500"})),e(M,{tag:"span",weight:"medium",theme:"inherit"},void 0,_));return v?e(S,{className:"group rounded-full text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800",to:v,onClick:m},void 0,n):e("a",{className:"group rounded-full text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800",href:c,target:"_blank",onClick:m},void 0,n)},qe=function(){var a=K(),c=V(),v=Y.useCallback(U(),[]),r=W(),_=g(function(s){return s.me}),m=Z(_||void 0),n=m.account,O=g(function(s){return v(s)}),k=g(function(s){return s.sidebar.sidebarOpen}),T=g(function(s){return $(s)}),D=g(function(s){return s.user_lists.follow_requests.items.count()}),F=j(),H=u.useRef(null),B=u.useState(!1),C=J(B,2),R=C[0],y=C[1],t=function(){return c(_e())},d=function(){y(!1),t()},E=function(l){return function(h){h.preventDefault(),c(pe(l.id))}},I=function(l){l.preventDefault(),c(he())},z=function(l){l.preventDefault(),y(function(h){return!h})},G=function(l){return e("a",{href:"#",className:"block py-2",onClick:E(l)},l.id,e("div",{className:"pointer-events-none"},void 0,e(P,{account:l,showProfileHoverCard:!1,withRelationship:!1,withLinkToProfile:!1})))};return u.useEffect(function(){c(Q())},[]),n?e("div",{"aria-expanded":k,className:p({"z-[1000]":k,hidden:!k})},void 0,e("div",{className:"fixed inset-0 bg-gray-500/90 dark:bg-gray-700/90",role:"button",onClick:d}),e("div",{className:"fixed inset-0 z-[1000] flex"},void 0,e("div",{className:p({"flex flex-col flex-1 bg-white dark:bg-primary-900 -translate-x-full rtl:translate-x-full w-full max-w-xs":!0,"!translate-x-0":k})},void 0,u.createElement(X,{title:a.formatMessage(i.close),onClick:d,src:ee,ref:H,iconClassName:"h-6 w-6",className:"absolute right-0 top-0 -mr-11 mt-2 text-gray-600 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"}),e("div",{className:"relative h-full w-full overflow-auto overflow-y-scroll"},void 0,e("div",{className:"p-4"},void 0,e(x,{space:4},void 0,e(ae,{to:"/@".concat(n.acct),onClick:t},void 0,e(P,{account:n,showProfileHoverCard:!1,withLinkToProfile:!1})),e(Me,{account:n,onClickHandler:d}),e(x,{space:4},void 0,e(f,{}),e(o,{to:"/@".concat(n.acct),icon:te,text:e(se,{id:"account-Page--profile"},void 0,e("span",{},void 0,"Profile")),onClick:t}),(n.locked||D>0)&&e(o,{to:"/follow_requests",icon:oe,text:a.formatMessage(i.followRequests),onClick:t}),r.bookmarks&&e(o,{to:"/bookmarks",icon:ie,text:a.formatMessage(i.bookmarks),onClick:t}),r.groups&&e(o,{to:F,icon:re,text:a.formatMessage(i.groups),onClick:t}),r.lists&&e(o,{to:"/lists",icon:ne,text:a.formatMessage(i.lists),onClick:t}),r.events&&e(o,{to:"/events",icon:le,text:a.formatMessage(i.events),onClick:t}),T.get("isDeveloper")&&e(o,{to:"/developers",icon:ce,text:a.formatMessage(i.developers),onClick:t}),r.publicTimeline&&u.createElement(u.Fragment,null,e(f,{}),e(o,{to:"/timeline/local",icon:r.federating?ue:de,text:r.federating?e(b,{id:"tabs_bar.local",defaultMessage:"Local"}):e(b,{id:"tabs_bar.all",defaultMessage:"All"}),onClick:t}),r.federating&&e(o,{to:"/timeline/fediverse",icon:ge,text:e(b,{id:"tabs_bar.fediverse",defaultMessage:"Fediverse"}),onClick:t})),e(f,{}),e(o,{to:"/blocks",icon:q,text:a.formatMessage(i.blocks),onClick:t}),e(o,{to:"/mutes",icon:fe,text:a.formatMessage(i.mutes),onClick:t}),e(o,{to:"/settings/preferences",icon:A,text:a.formatMessage(i.preferences),onClick:t}),r.federating&&e(o,{to:"/domain_blocks",icon:q,text:a.formatMessage(i.domainBlocks),onClick:t}),(r.filters||r.filtersV2)&&e(o,{to:"/filters",icon:we,text:a.formatMessage(i.filters),onClick:t}),r.followedHashtagsList&&e(o,{to:"/followed_tags",icon:xe,text:a.formatMessage(i.followedTags),onClick:t}),n.admin&&e(o,{to:"/ghostbox/admin/config",icon:A,text:a.formatMessage(i.soapboxConfig),onClick:t}),e(f,{}),e(o,{to:"/logout",icon:ve,text:a.formatMessage(i.logout),onClick:I}),e(f,{}),e(x,{space:4},void 0,e("button",{type:"button",onClick:z,className:"py-1"},void 0,e(N,{alignItems:"center",justifyContent:"between"},void 0,e(M,{tag:"span"},void 0,e(b,{id:"profile_dropdown.switch_account",defaultMessage:"Switch accounts"})),e(w,{src:me,className:p("h-4 w-4 text-gray-900 transition-transform dark:text-gray-100",{"rotate-180":R})}))),R&&e("div",{className:"border-t-2 border-solid border-gray-100 dark:border-gray-800"},void 0,O.map(function(s){return G(s)}),e(S,{className:"flex items-center space-x-1 py-2",to:"/login/add",onClick:d},void 0,e(w,{className:"h-4 w-4 text-primary-500",src:ke}),e(M,{size:"sm",weight:"medium"},void 0,a.formatMessage(i.addAccount)))))))))),e("div",{"aria-hidden":!0,className:"w-14 shrink-0",onClick:d}))):null};export{qe as default};