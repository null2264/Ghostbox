import{R as t,r as m,aw as q,az as V,a as X,aF as G}from"../index-220d7bfb.js";var E;(function(e){e[e.UP=-1]="UP",e[e.DOWN=1]="DOWN"})(E||(E={}));function J(e){var r=getComputedStyle(e).overflowY;return e===document.scrollingElement&&r==="visible"?!0:!(r!=="scroll"&&r!=="auto")}function K(e,r){if(!J(e))return!1;if(r===E.DOWN){var a=e.scrollTop+e.clientHeight;return a<e.scrollHeight}if(r===E.UP)return e.scrollTop>0;throw new Error("unsupported direction")}function H(e,r){return K(e,r)?!0:e.parentElement==null?!1:H(e.parentElement,r)}function z(e,r){r===void 0&&(r={});var a=r.insertAt;if(!(!e||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",i.setAttribute("nonce",window.__webpack_nonce__),a==="top"&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Q=`.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px; }

.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #363636;
  animation-timing-function: cubic-bezier(0, 1, 1, 0); }

.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite; }

.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite; }

.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite; }

.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite; }

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0); }
  100% {
    transform: scale(1); } }

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1); }
  100% {
    transform: scale(0); } }

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0); }
  100% {
    transform: translate(19px, 0); } }
`;z(Q);var Z=function(){return t.createElement("div",{className:"lds-ellipsis"},t.createElement("div",null),t.createElement("div",null),t.createElement("div",null),t.createElement("div",null))},I=function(){return t.createElement("div",null,t.createElement("p",null,"↧  pull to refresh  ↧"))},ee=`.ptr,
.ptr__children {
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative; }

.ptr.ptr--fetch-more-treshold-breached .ptr__fetch-more {
  display: block; }

.ptr__fetch-more {
  display: none; }

/**
  * Pull down transition 
  */
.ptr__children,
.ptr__pull-down {
  transition: transform 0.2s cubic-bezier(0, 0, 0.31, 1); }

.ptr__pull-down {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  visibility: hidden; }
  .ptr__pull-down > div {
    display: none; }

.ptr--dragging {
  /**
    * Hide PullMore content is treshold breached
    */
  /**
    * Otherwize, display content
    */ }
  .ptr--dragging.ptr--pull-down-treshold-breached .ptr__pull-down--pull-more {
    display: none; }
  .ptr--dragging .ptr__pull-down--pull-more {
    display: block; }

.ptr--pull-down-treshold-breached {
  /**
    * Force opacity to 1 is pull down trashold breached
    */
  /**
    * And display loader
    */ }
  .ptr--pull-down-treshold-breached .ptr__pull-down {
    opacity: 1 !important; }
  .ptr--pull-down-treshold-breached .ptr__pull-down--loading {
    display: block; }

.ptr__loader {
  margin: 0 auto;
  text-align: center; }
`;z(ee);var ne=function(e){var r=e.isPullable,a=r===void 0?!0:r,o=e.canFetchMore,i=o===void 0?!1:o,b=e.onRefresh,g=e.onFetchMore,C=e.refreshingContent,k=C===void 0?t.createElement(Z,null):C,D=e.pullingContent,U=D===void 0?t.createElement(I,null):D,L=e.children,M=e.pullDownThreshold,T=M===void 0?67:M,N=e.fetchMoreThreshold,R=N===void 0?100:N,A=e.maxPullDownDistance,P=A===void 0?95:A,F=e.resistance,W=F===void 0?1:F,j=e.backgroundColor,S=e.className,O=S===void 0?"":S,s=m.useRef(null),l=m.useRef(null),d=m.useRef(null),$=m.useRef(null),y=!1,w=!1,f=!1,h=0,p=0;m.useEffect(function(){if(!(!a||!l||!l.current)){var n=l.current;return n.addEventListener("touchstart",_,{passive:!0}),n.addEventListener("mousedown",_),n.addEventListener("touchmove",x,{passive:!1}),n.addEventListener("mousemove",x),window.addEventListener("scroll",B),n.addEventListener("touchend",v),n.addEventListener("mouseup",v),document.body.addEventListener("mouseleave",v),function(){n.removeEventListener("touchstart",_),n.removeEventListener("mousedown",_),n.removeEventListener("touchmove",x),n.removeEventListener("mousemove",x),window.removeEventListener("scroll",B),n.removeEventListener("touchend",v),n.removeEventListener("mouseup",v),document.body.removeEventListener("mouseleave",v)}}},[L,a,b,T,P,i,R]),m.useEffect(function(){var n;if(!((n=s)===null||n===void 0)&&n.current){var c=s.current.classList.contains("ptr--fetch-more-treshold-breached");c||i&&Y()<R&&g&&(s.current.classList.add("ptr--fetch-more-treshold-breached"),w=!0,g().then(u).catch(u))}},[i,L]);var Y=function(){if(!l||!l.current)return-1;var n=window.scrollY,c=l.current.scrollHeight;return c-n-window.innerHeight},u=function(){requestAnimationFrame(function(){l.current&&(l.current.style.overflowX="hidden",l.current.style.overflowY="auto",l.current.style.transform="unset"),d.current&&(d.current.style.opacity="0"),s.current&&(s.current.classList.remove("ptr--pull-down-treshold-breached"),s.current.classList.remove("ptr--dragging"),s.current.classList.remove("ptr--fetch-more-treshold-breached")),y&&(y=!1),w&&(w=!1)})},_=function(n){f=!1,n instanceof MouseEvent&&(h=n.pageY),window.TouchEvent&&n instanceof TouchEvent&&(h=n.touches[0].pageY),p=h,!(n.type==="touchstart"&&H(n.target,E.UP))&&(l.current.getBoundingClientRect().top<0||(f=!0))},x=function(n){if(f){if(window.TouchEvent&&n instanceof TouchEvent?p=n.touches[0].pageY:p=n.pageY,s.current.classList.add("ptr--dragging"),p<h){f=!1;return}n.cancelable&&n.preventDefault();var c=Math.min((p-h)/W,P);c>=T&&(f=!0,y=!0,s.current.classList.remove("ptr--dragging"),s.current.classList.add("ptr--pull-down-treshold-breached")),!(c>=P)&&(d.current.style.opacity=(c/65).toString(),l.current.style.overflow="visible",l.current.style.transform="translate(0px, "+c+"px)",d.current.style.visibility="visible")}},B=function(n){w||i&&Y()<R&&g&&(w=!0,s.current.classList.add("ptr--fetch-more-treshold-breached"),g().then(u).catch(u))},v=function(){if(f=!1,h=0,p=0,!y){d.current&&(d.current.style.visibility="hidden"),u();return}l.current&&(l.current.style.overflow="visible",l.current.style.transform="translate(0px, "+T+"px)"),b().then(u).catch(u)};return t.createElement("div",{className:"ptr "+O,style:{backgroundColor:j},ref:s},t.createElement("div",{className:"ptr__pull-down",ref:d},t.createElement("div",{className:"ptr__loader ptr__pull-down--loading"},k),t.createElement("div",{className:"ptr__pull-down--pull-more"},U)),t.createElement("div",{className:"ptr__children",ref:l},L,t.createElement("div",{className:"ptr__fetch-more",ref:$},t.createElement("div",{className:"ptr__loader ptr__fetch-more--loading"},k))))},te=["children","onRefresh"],le=function(r){var a=r.children,o=r.onRefresh,i=q(r,te),b=function(){return o?o():Promise.resolve()};return t.createElement(ne,V({onRefresh:b,pullingContent:t.createElement(t.Fragment,null),refreshingContent:o?X(G,{size:30,withText:!1}):t.createElement(t.Fragment,null),pullDownThreshold:67,maxPullDownDistance:95,resistance:2},i),t.createElement(t.Fragment,null,a))};export{le as P};
