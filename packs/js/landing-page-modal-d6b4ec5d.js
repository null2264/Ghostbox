import{u as n,aY as u,el as v,a as e,A as m,y as c,W as p,ae as t,eB as f,bw as h,o as b}from"../index-621b10ea.js";const y="/packs/assets/lifebuoy-b82645ac.svg";var o=b({download:{id:"landing_page_modal.download",defaultMessage:"Download"},helpCenter:{id:"landing_page_modal.helpCenter",defaultMessage:"Help Center"},login:{id:"header.login.label",defaultMessage:"Log in"},register:{id:"header.register.label",defaultMessage:"Register"}}),C=function(r){var l=r.onClose,a=n(),d=u(),g=v(),s=g.isOpen,i=d.links;return e(h,{title:e(f,{alt:"Logo",className:"h-6 w-auto cursor-pointer"}),onClose:function(){return l("LANDING_PAGE")}},void 0,e("div",{className:"mt-4 divide-y divide-solid divide-gray-200 dark:divide-gray-800"},void 0,i.get("help")&&e("nav",{className:"mb-6 grid gap-y-8"},void 0,e("a",{href:i.get("help"),target:"_blank",className:"flex items-center space-x-3 rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-900/50"},void 0,e(m,{src:y,className:"h-6 w-6 shrink-0 text-gray-600 dark:text-gray-700"}),e(c,{weight:"medium"},void 0,a.formatMessage(o.helpCenter)))),e("div",{className:p("grid gap-4 pt-6",{"grid-cols-2":s,"grid-cols-1":!s})},void 0,e(t,{to:"/login",theme:"tertiary",block:!0},void 0,a.formatMessage(o.login)),s&&e(t,{to:"/signup",theme:"primary",block:!0},void 0,a.formatMessage(o.register)))))};export{C as default};