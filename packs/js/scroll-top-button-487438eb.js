import{f as F,R as n,r as a,ax as R,aP as H,q as J,O as K,cm as Q,a as e,A,b5 as I,y as q}from"../index-8f0cc4c0.js";const L="/packs/assets/arrow-up-6caf2ae2.svg";var X=function(r){var s=r.onClick,t=r.count,c=r.threshold,d=c===void 0?400:c,f=r.autoloadThreshold,m=f===void 0?50:f,v=r.timelineId,u=r.queuedItems,p=r.type,_=F(),i=n.useRef(null),M=a.useState(!1),h=R(M,2),T=h[0],w=h[1],S=_.get("autoloadTimelines")===!0,P=a.useState(!1),b=R(P,2),B=b[0],U=b[1],$=a.useCallback(H(),[]),G=J(function(o){var E=K();if(!u||!v||p!=="status")return E;var z=new Array;return E.withMutations(function(N){return u.forEach(function(D){if(N.size>=3){B||U(!0);return}var l=$(o,{id:D,contextType:v});l&&(z.includes(l.account.id)||(z.push(l.account.id),N.push(l)))})})}),k=n.useCallback(function(){return(document.scrollingElement||document.documentElement).scrollTop},[]),g=n.useCallback(function(){i.current&&clearTimeout(i.current),i.current=setTimeout(function(){t>0&&S&&k()<=m&&s(),i.current=null},250)},[S,m,s,t]),x=a.useCallback(Q(function(){k()>d?w(!0):w(!1)},150,{trailing:!0}),[d]),O=n.useCallback(function(){window.scrollTo({top:0})},[]),y=function(){setTimeout(O,10),s()};a.useEffect(function(){return window.addEventListener("scroll",x),function(){window.removeEventListener("scroll",x)}},[s]),a.useEffect(function(){g()},[g]);var j=n.useMemo(function(){return t>0&&T},[t,T]);if(!j)return null;var C="flex cursor-pointer items-center space-x-1.5 whitespace-nowrap rounded-full bg-primary-600 px-3 py-1.5 text-white transition-transform hover:scale-105 hover:bg-primary-700 active:scale-100";return typeof u>"u"?e("div",{className:"fixed left-1/2 top-20 z-50 -translate-x-1/2"},void 0,e("button",{className:C,onClick:y},void 0,e(A,{src:L,size:18}),e(I,{id:p==="status"?"timeline-ScrollToTop--new-posts-legacy":"timeline-ScrollToTop--new-notifications",vars:{count:t}},void 0,e(q,{theme:"inherit",size:"sm"},void 0,t)))):e("div",{className:"fixed left-1/2 top-20 z-50 -translate-x-1/2"},void 0,e("button",{className:C,onClick:y},void 0,e(A,{src:L,size:18}),e("div",{className:"flex"},void 0,G.map(function(o){return e("img",{src:o.account.avatar,className:"h-7 w-7 rounded-full border border-solid border-primary-600 bg-black not-first:-ml-3 not-first:rtl:-mr-3 not-first:rtl:ml-0",alt:o.account.username},o.id)})),e(I,{id:"timeline-ScrollToTop--new-posts",vars:{count:t}},void 0,e(q,{theme:"inherit",size:"sm"},void 0,t," New Post(s)"))))};export{X as S};
