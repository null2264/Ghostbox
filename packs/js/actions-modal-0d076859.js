import{a as t,e3 as y,W as l,F as A,e5 as M,e6 as R,R as g,H as k,az as I,I as $}from"../index-98ef4d81.js";var H=function(e){var o=e.status,c=e.actions,f=e.onClick,x=e.onClose,b=function(a,s){if(a===null)return t("li",{className:"dropdown-menu__separator"},"sep-".concat(s));var r=a.icon,u=r===void 0?null:r,n=a.text,v=a.meta,m=v===void 0?null:v,p=a.active,C=p===void 0?!1:p,_=a.href,i=_===void 0?"#":_,N=a.destructive,h=i==="#"?"button":"a",w=i==="#"?{onClick:f}:{href:i,rel:"noopener"};return t("li",{},"".concat(n,"-").concat(s),g.createElement(k,I({},w,{space:2.5,"data-index":s,className:l("w-full",{active:C,destructive:N}),element:h}),u&&t($,{title:n,src:u,role:"presentation",tabIndex:-1}),t("div",{},void 0,t("div",{className:l({"actions-modal__item-label":!!m})},void 0,n),t("div",{},void 0,m))))};return t(R,{defaultStyle:{top:100},style:{top:M(0)}},void 0,function(d){var a=d.top;return t("div",{className:"modal-root__modal actions-modal",style:{top:"".concat(a,"%")}},void 0,o&&t(y,{className:"actions-modal__status rounded-b-none",status:o,hideActions:!0}),t("ul",{className:l({"with-status":!!o})},void 0,c&&c.map(b),t("li",{className:"dropdown-menu__separator"}),t("li",{},void 0,t("button",{type:"button",onClick:x},void 0,t(A,{id:"lightbox.close",defaultMessage:"Cancel"})))))})};export{H as default};