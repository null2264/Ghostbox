import{u as C,d as M,q as f,a as e,a6 as h,aa as v,bW as R,I as b,aG as I,o as L,eM as _,eN as w,M as x,r as N,eO as k,eP as q,eL as m,cy as g,B as E,F,bu as P}from"../index-851c1ca9.js";import{N as D}from"./new-list-form-c6dc06a6.js";var p=L({remove:{id:"lists.account.remove",defaultMessage:"Remove from list"},add:{id:"lists.account.add",defaultMessage:"Add to list"}}),S=function(s){var t=s.listId,l=C(),r=M(),o=f(function(d){return d.lists.get(t)}),u=f(function(d){return d.listAdder.lists.items.includes(t)}),c=function(){return r(_(t))},i=function(){return r(w(t))};if(!o)return null;var n;return u?n=e(v,{iconClassName:"h-5 w-5",src:h,title:l.formatMessage(p.remove),onClick:c}):n=e(v,{iconClassName:"h-5 w-5",src:R,title:l.formatMessage(p.add),onClick:i}),e("div",{className:"flex items-center gap-1.5 px-2 py-4 text-black dark:text-white"},void 0,e(b,{src:I}),e("span",{className:"grow"},void 0,o.title),n)},A=L({close:{id:"lightbox.close",defaultMessage:"Close"},subheading:{id:"lists.subheading",defaultMessage:"Your lists"},add:{id:"lists.new.create",defaultMessage:"Add List"}}),T=x([function(a){return a.lists}],function(a){return a&&a.toList().filter(function(s){return!!s}).sort(function(s,t){return s.title.localeCompare(t.title)})}),O=function(s){var t=s.accountId,l=s.onClose,r=C(),o=M(),u=f(function(i){return T(i).map(function(n){return n.id})});N.useEffect(function(){return o(k(t)),function(){o(q())}},[]);var c=function(){l("LIST_ADDER")};return e(P,{title:e(F,{id:"list_adder.header_title",defaultMessage:"Add or Remove from Lists"}),onClose:c},void 0,e(E,{id:t,withRelationship:!1}),e("br",{}),e(m,{},void 0,e(g,{title:r.formatMessage(A.add)})),e(D,{}),e("br",{}),e(m,{},void 0,e(g,{title:r.formatMessage(A.subheading)})),e("div",{},void 0,u.map(function(i){return e(S,{listId:i},i)})))};export{O as default};
