import{u as v,d as m,q as c,a as e,a6 as k,ab as E,bX as R,B as _,H as M,o as f,eF as N,eG as x,bI as w,ae as A,bG as T,cS as y,cT as L,I as F,W as q,eH as D,eI as H,eJ as B,r as P,eK as $,eL as G,eM as C,cy as p,F as j,bw as z}from"../index-621b10ea.js";import{v as J}from"./backspace-c284aa0a.js";var S=f({remove:{id:"lists.account.remove",defaultMessage:"Remove from list"},add:{id:"lists.account.add",defaultMessage:"Add to list"}}),I=function(i){var t=i.accountId,o=v(),r=m(),n=c(function(a){return a.listEditor.accounts.items.includes(t)}),l=function(){return r(N(t))},d=function(){return r(x(t))},s;return n?s=e(E,{src:k,iconClassName:"h-5 w-5",title:o.formatMessage(S.remove),onClick:l}):s=e(E,{src:R,iconClassName:"h-5 w-5",title:o.formatMessage(S.add),onClick:d}),e(M,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,e("div",{className:"w-full"},void 0,e(_,{id:t,withRelationship:!1})),s)},K=f({title:{id:"lists.edit.submit",defaultMessage:"Change title"},save:{id:"lists.new.save_title",defaultMessage:"Save Title"}}),V=function(){var i=v(),t=m(),o=c(function(a){return a.listEditor.title}),r=c(function(a){return!a.listEditor.isChanged}),n=function(h){t(y(h.target.value))},l=function(h){h.preventDefault(),t(L(!1))},d=function(){t(L(!1))},s=i.formatMessage(K.save);return e(T,{onSubmit:l},void 0,e(M,{space:2},void 0,e(w,{outerClassName:"grow",type:"text",value:o,onChange:n}),e(A,{onClick:d,disabled:r},void 0,s)))},u=f({search:{id:"lists.search",defaultMessage:"Search among people you follow"},searchTitle:{id:"tabs_bar.search",defaultMessage:"Search"}}),W=function(){var i=v(),t=m(),o=c(function(s){return s.listEditor.suggestions.value}),r=function(a){t(D(a.target.value))},n=function(){t(H(o))},l=function(){t(B())},d=o.length>0;return e(T,{onSubmit:n},void 0,e(M,{space:2},void 0,e("label",{className:"relative grow"},void 0,e("span",{style:{display:"none"}},void 0,i.formatMessage(u.search)),e(w,{type:"text",value:o,onChange:r,placeholder:i.formatMessage(u.search)}),e("div",{role:"button",tabIndex:0,className:"search__icon",onClick:l},void 0,e(F,{src:J,"aria-label":i.formatMessage(u.search),className:q("svg-icon--backspace",{active:d})}))),e(A,{onClick:n},void 0,i.formatMessage(u.searchTitle))))},b=f({close:{id:"lightbox.close",defaultMessage:"Close"},changeTitle:{id:"lists.edit.submit",defaultMessage:"Change title"},addToList:{id:"lists.account.add",defaultMessage:"Add to list"},removeFromList:{id:"lists.account.remove",defaultMessage:"Remove from list"},editList:{id:"lists.edit",defaultMessage:"Edit list"}}),Q=function(i){var t=i.listId,o=i.onClose,r=v(),n=m(),l=c(function(a){return a.listEditor.accounts.items}),d=c(function(a){return a.listEditor.suggestions.items});P.useEffect(function(){return n($(t)),function(){n(G())}},[]);var s=function(){o("LIST_ADDER")};return e(z,{title:e(j,{id:"lists.edit",defaultMessage:"Edit list"}),onClose:s},void 0,e(C,{},void 0,e(p,{title:r.formatMessage(b.changeTitle)})),e(V,{}),e("br",{}),l.size>0&&e("div",{},void 0,e(C,{},void 0,e(p,{title:r.formatMessage(b.removeFromList)})),e("div",{className:"max-h-48 overflow-y-auto"},void 0,l.map(function(a){return e(I,{accountId:a},a)}))),e("br",{}),e(C,{},void 0,e(p,{title:r.formatMessage(b.addToList)})),e(W,{}),e("div",{className:"max-h-48 overflow-y-auto"},void 0,d.map(function(a){return e(I,{accountId:a},a)})))};export{Q as default};