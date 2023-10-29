import{u as v,d as m,q as c,a as e,a6 as k,ab as E,bY as R,B as _,H as M,o as f,eF as x,eG as N,bJ as w,ae as A,bH as T,cS as F,cT as L,I as y,W as H,eH as q,eI as D,eJ as B,r as P,eK as $,eL as z,eM as C,cz as p,F as J,bx as j}from"../index-8f099bc3.js";import{v as G}from"./backspace-c284aa0a.js";var S=f({remove:{id:"lists.account.remove",defaultMessage:"Remove from list"},add:{id:"lists.account.add",defaultMessage:"Add to list"}}),I=function(i){var t=i.accountId,o=v(),r=m(),n=c(function(a){return a.listEditor.accounts.items.includes(t)}),l=function(){return r(x(t))},d=function(){return r(N(t))},s;return n?s=e(E,{src:k,iconClassName:"h-5 w-5",title:o.formatMessage(S.remove),onClick:l}):s=e(E,{src:R,iconClassName:"h-5 w-5",title:o.formatMessage(S.add),onClick:d}),e(M,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,e("div",{className:"w-full"},void 0,e(_,{id:t,withRelationship:!1})),s)},K=f({title:{id:"lists.edit.submit",defaultMessage:"Change title"},save:{id:"lists.new.save_title",defaultMessage:"Save Title"}}),V=function(){var i=v(),t=m(),o=c(function(a){return a.listEditor.title}),r=c(function(a){return!a.listEditor.isChanged}),n=function(h){t(F(h.target.value))},l=function(h){h.preventDefault(),t(L(!1))},d=function(){t(L(!1))},s=i.formatMessage(K.save);return e(T,{onSubmit:l},void 0,e(M,{space:2},void 0,e(w,{outerClassName:"grow",type:"text",value:o,onChange:n}),e(A,{onClick:d,disabled:r},void 0,s)))},u=f({search:{id:"lists.search",defaultMessage:"Search among people you follow"},searchTitle:{id:"tabs_bar.search",defaultMessage:"Search"}}),W=function(){var i=v(),t=m(),o=c(function(s){return s.listEditor.suggestions.value}),r=function(a){t(q(a.target.value))},n=function(){t(D(o))},l=function(){t(B())},d=o.length>0;return e(T,{onSubmit:n},void 0,e(M,{space:2},void 0,e("label",{className:"relative grow"},void 0,e("span",{style:{display:"none"}},void 0,i.formatMessage(u.search)),e(w,{type:"text",value:o,onChange:r,placeholder:i.formatMessage(u.search)}),e("div",{role:"button",tabIndex:0,className:"search__icon",onClick:l},void 0,e(y,{src:G,"aria-label":i.formatMessage(u.search),className:H("svg-icon--backspace",{active:d})}))),e(A,{onClick:n},void 0,i.formatMessage(u.searchTitle))))},b=f({close:{id:"lightbox.close",defaultMessage:"Close"},changeTitle:{id:"lists.edit.submit",defaultMessage:"Change title"},addToList:{id:"lists.account.add",defaultMessage:"Add to list"},removeFromList:{id:"lists.account.remove",defaultMessage:"Remove from list"},editList:{id:"lists.edit",defaultMessage:"Edit list"}}),Q=function(i){var t=i.listId,o=i.onClose,r=v(),n=m(),l=c(function(a){return a.listEditor.accounts.items}),d=c(function(a){return a.listEditor.suggestions.items});P.useEffect(function(){return n($(t)),function(){n(z())}},[]);var s=function(){o("LIST_ADDER")};return e(j,{title:e(J,{id:"lists.edit",defaultMessage:"Edit list"}),onClose:s},void 0,e(C,{},void 0,e(p,{title:r.formatMessage(b.changeTitle)})),e(V,{}),e("br",{}),l.size>0&&e("div",{},void 0,e(C,{},void 0,e(p,{title:r.formatMessage(b.removeFromList)})),e("div",{className:"max-h-48 overflow-y-auto"},void 0,l.map(function(a){return e(I,{accountId:a},a)}))),e("br",{}),e(C,{},void 0,e(p,{title:r.formatMessage(b.addToList)})),e(W,{}),e("div",{className:"max-h-48 overflow-y-auto"},void 0,d.map(function(a){return e(I,{accountId:a},a)})))};export{Q as default};