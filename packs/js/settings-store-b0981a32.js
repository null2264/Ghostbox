import{u as F,d as T,f as k,q as x,r as f,ax as m,a as e,eM as D,cy as L,bG as U,bH as I,b_ as R,bK as j,ae as V,F as t,X as G,aj as H,ak as i,fX as n,o as q,a7 as B,f5 as X,_ as K,jf as z,jg as Q,br as W}from"../index-621b10ea.js";var Y=function(r){try{return JSON.parse(r),!0}catch{return!1}},v=q({heading:{id:"column.settings_store",defaultMessage:"Settings store"},advanced:{id:"developers.settings_store.advanced",defaultMessage:"Advanced settings"},hint:{id:"developers.settings_store.hint",defaultMessage:"It is possible to directly edit your user settings here. BE CAREFUL! Editing this section can break your account, and you will only be able to recover through the API."}}),$=function(){var r=F(),l=T(),a=k(),c=x(function(g){return g.settings}),N=f.useState(JSON.stringify(c,null,2)),p=m(N,2),S=p[0],b=p[1],A=f.useState(!0),_=m(A,2),M=_[0],y=_[1],J=f.useState(!1),w=m(J,2),C=w[0],h=w[1],O=function(u){var o=u.target,d=o.value;b(d),y(Y(d))},s=function(u,o){l(B(u,o,{showAlert:!0}))},P=function(u){var o=JSON.parse(S);h(!0),l(X({pleroma_settings_store:K({},z,o)})).then(function(d){l({type:Q,settings:o}),h(!1)}).catch(function(d){W.showAlertForError(d),h(!1)})};return f.useEffect(function(){b(JSON.stringify(c,null,2)),y(!0)},[c]),e(G,{label:r.formatMessage(v.heading),backHref:"/developers"},void 0,e(U,{onSubmit:P},void 0,e(I,{hintText:r.formatMessage(v.hint),errors:M?[]:["is invalid"]},void 0,e(R,{value:S,onChange:O,disabled:C,rows:12,isCodeEditor:!0})),e(j,{},void 0,e(V,{theme:"primary",type:"submit",disabled:!M||C},void 0,e(t,{id:"soapbox_config.save",defaultMessage:"Save"})))),e(D,{},void 0,e(L,{title:r.formatMessage(v.advanced)})),e(H,{},void 0,e(i,{label:e(t,{id:"preferences.fields.demo_label",defaultMessage:"Demo mode"}),hint:e(t,{id:"preferences.fields.demo_hint",defaultMessage:"Use the default Soapbox logo and color scheme. Useful for taking screenshots."})},void 0,e(n,{settings:a,settingPath:["demo"],onChange:s})),e(i,{label:e(t,{id:"preferences.notifications.advanced",defaultMessage:"Show all notification categories"})},void 0,e(n,{settings:a,settingPath:["notifications","quickFilter","advanced"],onChange:s})),e(i,{label:e(t,{id:"preferences.fields.unfollow_modal_label",defaultMessage:"Show confirmation dialog before unfollowing someone"})},void 0,e(n,{settings:a,settingPath:["unfollowModal"],onChange:s})),e(i,{label:e(t,{id:"preferences.fields.missing_description_modal_label",defaultMessage:"Show confirmation dialog before sending a post without media descriptions"})},void 0,e(n,{settings:a,settingPath:["missingDescriptionModal"],onChange:s})),e(i,{label:e(t,{id:"preferences.fields.reduce_motion_label",defaultMessage:"Reduce motion in animations"})},void 0,e(n,{settings:a,settingPath:["reduceMotion"],onChange:s})),e(i,{label:e(t,{id:"preferences.fields.underline_links_label",defaultMessage:"Always underline links in posts"})},void 0,e(n,{settings:a,settingPath:["underlineLinks"],onChange:s})),e(i,{label:e(t,{id:"preferences.fields.system_font_label",defaultMessage:"Use system's default font"})},void 0,e(n,{settings:a,settingPath:["systemFont"],onChange:s})),e(i,{label:e(t,{id:"preferences.fields.demetricator_label",defaultMessage:"Use Demetricator"}),hint:e(t,{id:"preferences.hints.demetricator",defaultMessage:"Decrease social media anxiety by hiding all numbers from the site."})},void 0,e(n,{settings:a,settingPath:["demetricator"],onChange:s}))))};export{$ as default};