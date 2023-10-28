import{d as V,bc as B,R as c,ax as k,f3 as re,a as e,b2 as T,a3 as d,y as l,F as t,c9 as Q,aF as X,W,A as H,bY as Z,ae as _,a2 as L,fb as ee,f5 as U,bs as I,o as Y,u as ae,bI as te,b$ as ie,f4 as oe,b5 as se,di as ne,bJ as de,t as le,hV as ue,b6 as ce,Q as ve,B as me,g as ge,H as pe,jn as fe,jo as be}from"../index-cc004e11.js";import{R as he}from"./index-c90595ee.js";import"./web.url.constructor-e8ba73a8.js";import{S as ye}from"./scrollable-list-7fc1e6e3.js";import{b as xe}from"./suggestions-542821de.js";import"./warning-07d0fac9.js";import"./object-assign-35295efc.js";import"./index-2fb81ed6.js";import"./load-more-75df5cb8.js";var Se=Y({error:{id:"onboarding.error",defaultMessage:"An unexpected error occurred. Please try again or skip this step."}}),we=function(h){var i=h.onNext,v=V(),u=B(),a=u.account,m=c.useRef(null),N=c.useState(),p=k(N,2),o=p[0],S=p[1],f=c.useState(!1),b=k(f,2),n=b[0],s=b[1],r=c.useState(!0),y=k(r,2),$=y[0],M=y[1],F=a?re(a.avatar):!1,z=function(){var g;(g=m.current)===null||g===void 0||g.click()},A=function(g){var x,w=16e4,R=(x=g.target.files)===null||x===void 0?void 0:x.item(0);R&&ee(R,w).then(function(C){var q=C?URL.createObjectURL(C):a==null?void 0:a.avatar;S(q),s(!0);var O=new FormData;O.append("avatar",R);var J=v(U(O));Promise.all([J]).then(function(){M(!1),s(!1),i()}).catch(function(E){var j;s(!1),M(!1),S(null),((j=E.response)===null||j===void 0?void 0:j.status)===422?I.error(E.response.data.error.replace("Validation failed: ","")):I.error(Se.error)})}).catch(console.error)};return e(L,{variant:"rounded",size:"xl"},void 0,e(T,{},void 0,e("div",{},void 0,e("div",{className:"-mx-4 mb-4 border-b border-solid border-gray-200 pb-4 dark:border-gray-900/50 sm:-mx-10 sm:pb-10"},void 0,e(d,{space:2},void 0,e(l,{size:"2xl",align:"center",weight:"bold"},void 0,e(t,{id:"onboarding.avatar.title",defaultMessage:"Choose a profile picture"})),e(l,{theme:"muted",align:"center"},void 0,e(t,{id:"onboarding.avatar.subtitle",defaultMessage:"Just have fun with it."})))),e("div",{className:"mx-auto sm:w-2/3 sm:pt-10 md:w-1/2"},void 0,e(d,{space:10},void 0,e("div",{className:"relative mx-auto rounded-full bg-gray-200"},void 0,a&&e(Q,{src:o||a.avatar,size:175}),n&&e("div",{className:"absolute inset-0 flex items-center justify-center rounded-full bg-white/80 dark:bg-primary-900/80"},void 0,e(X,{withText:!1})),e("button",{onClick:z,type:"button",className:W({"absolute bottom-3 right-2 p-1 bg-primary-600 rounded-full ring-2 ring-white dark:ring-primary-900 hover:bg-primary-700":!0,"opacity-50 pointer-events-none":n}),disabled:n},void 0,e(H,{src:Z,className:"h-5 w-5 text-white"})),c.createElement("input",{type:"file",className:"hidden",ref:m,onChange:A})),e(d,{justifyContent:"center",space:2},void 0,e(_,{block:!0,theme:"primary",type:"button",onClick:i,disabled:F&&$||n},void 0,n?e(t,{id:"onboarding.saving",defaultMessage:"Saving…"}):e(t,{id:"onboarding.next",defaultMessage:"Next"})),$&&e(_,{block:!0,theme:"tertiary",type:"button",onClick:i},void 0,e(t,{id:"onboarding.skip",defaultMessage:"Skip for now"}))))))))},K=Y({bioPlaceholder:{id:"onboarding.bio.placeholder",defaultMessage:"Tell the world a little about yourself…"},error:{id:"onboarding.error",defaultMessage:"An unexpected error occurred. Please try again or skip this step."}}),ke=function(h){var i,v,u=h.onNext,a=ae(),m=V(),N=B(),p=N.account,o=c.useState((i=p==null||(v=p.source)===null||v===void 0?void 0:v.note)!==null&&i!==void 0?i:""),S=k(o,2),f=S[0],b=S[1],n=c.useState(!1),s=k(n,2),r=s[0],y=s[1],$=c.useState([]),M=k($,2),F=M[0],z=M[1],A=function(){y(!0);var g=m(U({note:f}));Promise.all([g]).then(function(){y(!1),u()}).catch(function(x){var w;y(!1),((w=x.response)===null||w===void 0?void 0:w.status)===422?z([x.response.data.error.replace("Validation failed: ","")]):I.error(K.error)})};return e(L,{variant:"rounded",size:"xl"},void 0,e(T,{},void 0,e("div",{},void 0,e("div",{className:"-mx-4 mb-4 border-b border-solid border-gray-200 pb-4 dark:border-gray-800 sm:-mx-10 sm:pb-10"},void 0,e(d,{space:2},void 0,e(l,{size:"2xl",align:"center",weight:"bold"},void 0,e(t,{id:"onboarding.note.title",defaultMessage:"Write a short bio"})),e(l,{theme:"muted",align:"center"},void 0,e(t,{id:"onboarding.note.subtitle",defaultMessage:"You can always edit this later."})))),e(d,{space:5},void 0,e("div",{className:"mx-auto sm:w-2/3 sm:pt-10"},void 0,e(te,{hintText:e(t,{id:"onboarding.bio.hint",defaultMessage:"Max 500 characters"}),labelText:e(t,{id:"edit_profile.fields.bio_label",defaultMessage:"Bio"}),errors:F},void 0,e(ie,{onChange:function(g){return b(g.target.value)},placeholder:a.formatMessage(K.bioPlaceholder),value:f,maxLength:500}))),e("div",{className:"mx-auto sm:w-2/3 md:w-1/2"},void 0,e(d,{justifyContent:"center",space:2},void 0,e(_,{block:!0,theme:"primary",type:"submit",disabled:r,onClick:A},void 0,r?e(t,{id:"onboarding.saving",defaultMessage:"Saving…"}):e(t,{id:"onboarding.next",defaultMessage:"Next"})),e(_,{block:!0,theme:"tertiary",type:"button",onClick:u},void 0,e(t,{id:"onboarding.skip",defaultMessage:"Skip for now"}))))))))};const Ne="/packs/assets/confetti-ad45ba10.svg";var _e=function(h){var i=h.onComplete;return e(L,{variant:"rounded",size:"xl"},void 0,e(T,{},void 0,e(d,{space:2},void 0,e(H,{strokeWidth:1,src:Ne,className:"mx-auto h-16 w-16 text-primary-600 dark:text-primary-400"}),e(l,{size:"2xl",align:"center",weight:"bold"},void 0,e(t,{id:"onboarding.finished.title",defaultMessage:"Onboarding complete"})),e(l,{theme:"muted",align:"center"},void 0,e(t,{id:"onboarding.finished.message",defaultMessage:"We are very excited to welcome you to our community! Tap the button below to get started."}))),e("div",{className:"mx-auto pt-10 sm:w-2/3 md:w-1/2"},void 0,e(d,{justifyContent:"center",space:2},void 0,e(_,{block:!0,theme:"primary",onClick:i},void 0,e(t,{id:"onboarding.view_feed",defaultMessage:"View Feed"}))))))},Me=Y({error:{id:"onboarding.error",defaultMessage:"An unexpected error occurred. Please try again or skip this step."}}),Ce=function(h){var i=h.onNext,v=V(),u=B(),a=u.account,m=c.useRef(null),N=c.useState(),p=k(N,2),o=p[0],S=p[1],f=c.useState(!1),b=k(f,2),n=b[0],s=b[1],r=c.useState(!0),y=k(r,2),$=y[0],M=y[1],F=a?oe(a.header):!1,z=function(){var g;(g=m.current)===null||g===void 0||g.click()},A=function(g){var x,w=2073600,R=(x=g.target.files)===null||x===void 0?void 0:x.item(0);R&&ee(R,w).then(function(C){var q=C?URL.createObjectURL(C):a==null?void 0:a.header;S(q),s(!0);var O=new FormData;O.append("header",C);var J=v(U(O));Promise.all([J]).then(function(){M(!1),s(!1),i()}).catch(function(E){var j;s(!1),M(!1),S(null),((j=E.response)===null||j===void 0?void 0:j.status)===422?I.error(E.response.data.error.replace("Validation failed: ","")):I.error(Me.error)})}).catch(console.error)};return e(L,{variant:"rounded",size:"xl"},void 0,e(T,{},void 0,e("div",{},void 0,e("div",{className:"-mx-4 mb-4 border-b border-solid border-gray-200 pb-4 dark:border-gray-800 sm:-mx-10 sm:pb-10"},void 0,e(d,{space:2},void 0,e(l,{size:"2xl",align:"center",weight:"bold"},void 0,e(t,{id:"onboarding.header.title",defaultMessage:"Pick a cover image"})),e(l,{theme:"muted",align:"center"},void 0,e(t,{id:"onboarding.header.subtitle",defaultMessage:"This will be shown at the top of your profile."})))),e("div",{className:"mx-auto sm:w-2/3 sm:pt-10 md:w-1/2"},void 0,e(d,{space:10},void 0,e("div",{className:"rounded-lg border border-solid border-gray-200 dark:border-gray-800"},void 0,e("div",{role:"button",className:"relative flex h-24 items-center justify-center rounded-t-md bg-gray-200 dark:bg-gray-800"},void 0,o||(a==null?void 0:a.header)&&e(se,{id:"account-Header--banner",attrs:{alt:!0}},void 0,e(ne,{src:o||a.header,alt:"Profile header",className:"absolute inset-0 rounded-t-md object-cover"})),n&&e("div",{className:"absolute inset-0 flex items-center justify-center rounded-t-md bg-white/80 dark:bg-primary-900/80"},void 0,e(X,{withText:!1})),e("button",{onClick:z,type:"button",className:W({"absolute -top-3 -right-3 p-1 bg-primary-600 rounded-full ring-2 ring-white dark:ring-primary-900 hover:bg-primary-700":!0,"opacity-50 pointer-events-none":n}),disabled:n},void 0,e(H,{src:Z,className:"h-5 w-5 text-white"})),c.createElement("input",{type:"file",className:"hidden",ref:m,onChange:A})),e("div",{className:"flex flex-col px-4 pb-4"},void 0,a&&e(Q,{src:a.avatar,size:64,className:"-mt-8 mb-2 ring-2 ring-white dark:ring-primary-800"}),e(l,{weight:"bold",size:"sm"},void 0,a==null?void 0:a.display_name),e(l,{theme:"muted",size:"sm"},void 0,"@",a==null?void 0:a.username))),e(d,{justifyContent:"center",space:2},void 0,e(_,{block:!0,theme:"primary",type:"button",onClick:i,disabled:F&&$||n},void 0,n?e(t,{id:"onboarding.saving",defaultMessage:"Saving…"}):e(t,{id:"onboarding.next",defaultMessage:"Next"})),$&&e(_,{block:!0,theme:"tertiary",type:"button",onClick:i},void 0,e(t,{id:"onboarding.skip",defaultMessage:"Skip for now"}))))))))},G=Y({usernamePlaceholder:{id:"onboarding.display_name.placeholder",defaultMessage:"Eg. John Smith"},error:{id:"onboarding.error",defaultMessage:"An unexpected error occurred. Please try again or skip this step."}}),$e=function(h){var i=h.onNext,v=ae(),u=V(),a=B(),m=a.account,N=c.useState((m==null?void 0:m.display_name)||""),p=k(N,2),o=p[0],S=p[1],f=c.useState(!1),b=k(f,2),n=b[0],s=b[1],r=c.useState([]),y=k(r,2),$=y[0],M=y[1],F=o.trim(),z=F.length>0,A=!z||o.length>30,D=c.useMemo(function(){var x=30-o.length,w=x===1?"character remaining":"characters remaining";return"".concat(x," ").concat(w)},[o]),g=function(){s(!0);var w=u(U({display_name:o}));Promise.all([w]).then(function(){s(!1),i()}).catch(function(R){var C;s(!1),((C=R.response)===null||C===void 0?void 0:C.status)===422?M([R.response.data.error.replace("Validation failed: ","")]):I.error(G.error)})};return e(L,{variant:"rounded",size:"xl"},void 0,e(T,{},void 0,e("div",{},void 0,e("div",{className:"-mx-4 mb-4 border-b border-solid border-gray-200 pb-4 dark:border-gray-800 sm:-mx-10 sm:pb-10"},void 0,e(d,{space:2},void 0,e(l,{size:"2xl",align:"center",weight:"bold"},void 0,e(t,{id:"onboarding.display_name.title",defaultMessage:"Choose a display name"})),e(l,{theme:"muted",align:"center"},void 0,e(t,{id:"onboarding.display_name.subtitle",defaultMessage:"You can always edit this later."})))),e("div",{className:"mx-auto sm:w-2/3 sm:pt-10 md:w-1/2"},void 0,e(d,{space:5},void 0,e(te,{hintText:D,labelText:e(t,{id:"onboarding.display_name.label",defaultMessage:"Display name"}),errors:$},void 0,e(de,{onChange:function(w){return S(w.target.value)},placeholder:v.formatMessage(G.usernamePlaceholder),type:"text",value:o,maxLength:30})),e(d,{justifyContent:"center",space:2},void 0,e(_,{block:!0,theme:"primary",type:"submit",disabled:A||n,onClick:g},void 0,n?e(t,{id:"onboarding.saving",defaultMessage:"Saving…"}):e(t,{id:"onboarding.next",defaultMessage:"Next"})),e(_,{block:!0,theme:"tertiary",type:"button",onClick:i},void 0,e(t,{id:"onboarding.skip",defaultMessage:"Skip for now"}))))))))},Re=function(h){var i=h.onNext,v=B(),u=v.account,a=le();return e(L,{variant:"rounded",size:"xl"},void 0,e(T,{},void 0,e(d,{space:2},void 0,e(H,{strokeWidth:1,src:ue,className:"mx-auto h-16 w-16 text-primary-600 dark:text-primary-400"}),e(l,{size:"2xl",weight:"bold"},void 0,e(t,{id:"onboarding.fediverse.title",defaultMessage:"{siteTitle} is just one part of the Fediverse",values:{siteTitle:a.title}})),e(d,{space:4},void 0,e("div",{className:"border-b border-solid border-gray-200 pb-2 dark:border-gray-800 sm:pb-5"},void 0,e(d,{space:4},void 0,e(l,{theme:"muted"},void 0,e(t,{id:"onboarding.fediverse.message",defaultMessage:'The Fediverse is a social network made up of thousands of diverse and independently-run social media sites (aka "servers"). You can follow users — and like, repost, and reply to posts — from most other Fediverse servers, because they can communicate with {siteTitle}.',values:{siteTitle:a.title}})),e(l,{theme:"muted"},void 0,e(t,{id:"onboarding.fediverse.trailer",defaultMessage:"Because it is distributed and anyone can run their own server, the Fediverse is resilient and open. If you choose to join another server or set up your own, you can interact with the same people and continue on the same social graph."})))),u&&e("div",{className:"rounded-lg bg-primary-50 p-4 text-center dark:bg-gray-800"},void 0,e(ce,{account:u})),e(l,{theme:"muted"},void 0,e(t,{id:"onboarding.fediverse.its_you",defaultMessage:"This is you! Other people can follow you from other servers by using your full @-handle."})),e(l,{theme:"muted"},void 0,e(t,{id:"onboarding.fediverse.other_instances",defaultMessage:"When browsing your timeline, pay attention to the full username after the second @ symbol to know which server a post is from."})))),e("div",{className:"mx-auto pt-10 sm:w-2/3 md:w-1/2"},void 0,e(d,{justifyContent:"center",space:2},void 0,e(_,{block:!0,theme:"primary",onClick:i},void 0,e(t,{id:"onboarding.fediverse.next",defaultMessage:"Next"}))))))},Pe=function(h){var i=h.onNext,v=xe(),u=v.data,a=v.fetchNextPage,m=v.hasNextPage,N=v.isFetching,p=ve(function(){return N?null:a()},300),o=function(){return u?e("div",{className:"flex flex-col sm:pb-10 sm:pt-4"},void 0,e(ye,{isLoading:N,scrollKey:"suggestions",onLoadMore:p,hasMore:m,useWindowScroll:!1,style:{height:320}},void 0,u.map(function(n){return e("div",{className:"py-2"},n.account.id,e(me,{id:n.account.id,showProfileHoverCard:!1,withLinkToProfile:!1}))}))):null},S=function(){return e("div",{className:"my-2 rounded-lg bg-primary-50 p-8 text-center dark:bg-gray-800"},void 0,e(l,{},void 0,e(t,{id:"empty_column.follow_recommendations",defaultMessage:"Looks like no suggestions could be generated for you. You can try using search to look for people you might know or explore trending hashtags."})))},f=function(){return!u||u.length===0?S():o()};return e(L,{variant:"rounded",size:"xl"},void 0,e(T,{},void 0,e("div",{},void 0,e("div",{className:"-mx-4 mb-4 border-b border-solid border-gray-200 pb-4 dark:border-gray-800 sm:-mx-10 sm:pb-10"},void 0,e(d,{space:2},void 0,e(l,{size:"2xl",align:"center",weight:"bold"},void 0,e(t,{id:"onboarding.suggestions.title",defaultMessage:"Suggested accounts"})),e(l,{theme:"muted",align:"center"},void 0,e(t,{id:"onboarding.suggestions.subtitle",defaultMessage:"Here are a few of the most popular accounts you might like."})))),f(),e("div",{className:"mx-auto sm:w-2/3 md:w-1/2"},void 0,e(d,{},void 0,e(d,{justifyContent:"center",space:2},void 0,e(_,{block:!0,theme:"primary",onClick:i},void 0,e(t,{id:"onboarding.done",defaultMessage:"Done"})),e(_,{block:!0,theme:"tertiary",type:"button",onClick:i},void 0,e(t,{id:"onboarding.skip",defaultMessage:"Skip for now"}))))))))},Ee=function(){var h=V(),i=ge(),v=c.useState(0),u=k(v,2),a=u[0],m=u[1],N=function(r){m(r)},p=function(){m(function(r){return Math.max(0,r-1)})},o=function(){m(function(r){return Math.min(r+1,f.length-1)})},S=function(){h(be())},f=[e(we,{onNext:o}),e($e,{onNext:o}),e(ke,{onNext:o}),e(Ce,{onNext:o}),e(Pe,{onNext:o})];i.federating&&f.push(e(Re,{onNext:o})),f.push(e(_e,{onComplete:S}));var b=function(r){var y=r.key;switch(y){case"ArrowLeft":p();break;case"ArrowRight":o();break}},n=function(r){m(r)};return c.useEffect(function(){return document.addEventListener("keyup",b),function(){document.removeEventListener("keyup",b)}},[]),e("div",{"data-testid":"onboarding-wizard"},void 0,e(fe,{}),e("main",{className:"flex h-screen flex-col overflow-x-hidden"},void 0,e("div",{className:"flex h-full flex-col items-center justify-center"},void 0,e(he,{animateHeight:!0,index:a,onChangeIndex:N},void 0,f.map(function(s,r){return e("div",{className:"w-full max-w-[100vw] py-6 sm:mx-auto sm:max-w-lg md:max-w-2xl"},r,e("div",{className:W({"transition-opacity ease-linear":!0,"opacity-0 duration-500":a!==r,"opacity-100 duration-75":a===r})},void 0,s))})),e(pe,{space:3,alignItems:"center",justifyContent:"center",className:"relative"},void 0,f.map(function(s,r){return e("button",{tabIndex:0,onClick:function(){return n(r)},className:W({"w-5 h-5 rounded-full focus:ring-primary-600 focus:ring-2 focus:ring-offset-2":!0,"bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700/75 hover:bg-gray-400":r!==a,"bg-primary-600":r===a})},r)})))))};export{Ee as default};
