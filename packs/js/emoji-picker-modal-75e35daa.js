import{a as o,l0 as d,F as c,e4 as r,e5 as m}from"../index-7b6dea3f.js";var v=function(e){var n=e.onPickEmoji,t=e.onClose,l=function(i){n(i),t()};return o(m,{defaultStyle:{top:100},style:{top:r(0)}},void 0,function(a){var i=a.top;return o("div",{className:"modal-root__modal actions-modal",style:{top:"".concat(i,"%")}},void 0,o("ul",{},void 0,o("li",{},void 0,o(d,{onPickEmoji:l,visible:!0,setVisible:function(){},update:function(){},dynamicWidth:!0,emojiSize:{size:34,buttonSize:46}})),o("li",{className:"dropdown-menu__separator"}),o("li",{},void 0,o("button",{type:"button",onClick:t},void 0,o(c,{id:"lightbox.close",defaultMessage:"Cancel"})))))})};export{v as default};