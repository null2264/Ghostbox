import{f as C,r as T,de as G,ax as j,a,di as q,dj as K,R as L,az as V,W as p,dk as z,I as g,dl as B}from"../index-98ef4d81.js";import{v as D}from"./volume-08f8a8f1.js";import"./es.array.last-index-of-dbc447ac.js";var Q=function(v){var e=v.attachment,y=v.onOpenMedia,d=C(),r=d.get("autoPlayGif"),h=d.get("showSensitiveMedia"),b=T.useState(G(e.status,h)),u=j(b,2),t=u[0],M=u[1],N=function(i){var s=i.target;c()&&s.play()},I=function(i){var s=i.target;c()&&(s.pause(),s.currentTime=0)},c=function(){return!r&&["gifv","video"].includes(e.type)},x=function(i){i.button===0&&!(i.ctrlKey||i.metaKey)&&(i.preventDefault(),t?y(e):M(!0))},m=e.status,w=m.spoiler_text||e.description,l="",_;if(e.type!=="unknown"){if(e.type==="image"){var P=Number(e.meta.getIn(["focus","x"]))||0,S=Number(e.meta.getIn(["focus","y"]))||0,k=(P/2+.5)*100,E=(S/-2+.5)*100;l=a(q,{src:e.preview_url,alt:e.description,style:{objectPosition:"".concat(k,"% ").concat(E,"%")},className:"h-full w-full overflow-hidden rounded-lg"})}else if(["gifv","video"].indexOf(e.type)!==-1){var n={};K()&&(n.playsInline=!0),r&&(n.autoPlay=!0),l=a("div",{className:p("media-gallery__gifv",{autoplay:r})},void 0,L.createElement("video",V({className:"media-gallery__item-gifv-thumbnail","aria-label":e.description,title:e.description,role:"application",src:e.url,onMouseEnter:N,onMouseLeave:I,loop:!0,muted:!0},n)),a("span",{className:"media-gallery__gifv__label"},void 0,"GIF"))}else if(e.type==="audio"){var f=e.remote_url||"",O=f.lastIndexOf("."),R=f.slice(O+1).toUpperCase();l=a("div",{className:"media-gallery__item-thumbnail"},void 0,a("span",{className:"media-gallery__item__icons"},void 0,a(g,{src:D})),a("span",{className:"media-gallery__file-extension__label"},void 0,R))}}return t||(_=a("span",{className:"media-gallery__item__icons"},void 0,a(g,{src:B}))),a("div",{className:"col-span-1"},void 0,a("a",{className:"media-gallery__item-thumbnail aspect-1",href:m.url,target:"_blank",onClick:x,title:w},void 0,a(z,{hash:e.blurhash,className:p("media-gallery__preview",{"media-gallery__preview--hidden":t})}),t&&l,!t&&_))};export{Q as M};