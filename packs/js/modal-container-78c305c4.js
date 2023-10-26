import{u as O,a as n,bw as R,o as v,aF as _,dV as T,dW as I,_ as u,dX as M,R as p,az as m,dY as N,hM as y,dZ as f,d_ as S,h_ as h,h$ as A,i0 as P,i1 as g,i2 as D,i3 as b,i4 as L,i5 as B,i6 as U,i7 as k,i8 as F,i9 as V,ia as w,ib as x,ic as Y,id as G,ie as H,ig as z,ih as $,ii as J,ij as K,ik as j,il as W,im as Z,io as q,ip as X,iq as Q,ir as ee,is as oe,it as ae,iu as re,iv as te,iw as se,ix as ne,iy as ie,iz as le,iA as de,iB as ce,iC as ue,ef as Me,ec as pe,bx as Ee}from"../index-c9399634.js";import{M as me}from"./modal-root-4f3372bd.js";var E=v({error:{id:"bundle_modal_error.message",defaultMessage:"Something went wrong while loading this modal."},retry:{id:"bundle_modal_error.retry",defaultMessage:"Try again"},close:{id:"bundle_modal_error.close",defaultMessage:"Close"}}),fe=function(a){var i=a.onRetry,e=a.onClose,r=O(),s=function(){i()};return n(R,{title:r.formatMessage(E.error),confirmationAction:e,confirmationText:r.formatMessage(E.close),secondaryAction:s,secondaryText:r.formatMessage(E.retry)})},Ce=function(){return n("div",{className:"modal-root__modal error-modal"},void 0,n("div",{className:"error-modal__body"},void 0,n(_,{})),n("div",{className:"error-modal__footer"},void 0,n("div",{},void 0,n("button",{className:"error-modal__nav"}))))};function Oe(o){var a=Re();return function(){var e=f(o),r;if(a){var s=f(this).constructor;r=Reflect.construct(e,arguments,s)}else r=e.apply(this,arguments);return S(this,r)}}function Re(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ve={ACCOUNT_MODERATION:h,ACCOUNT_NOTE:A,ACTIONS:P,BIRTHDAYS:g,BOOST:D,COMPARE_HISTORY:b,COMPONENT:L,COMPOSE:B,COMPOSE_EVENT:U,CONFIRM:k,CREATE_GROUP:F,DISLIKES:V,EDIT_ANNOUNCEMENT:w,EDIT_FEDERATION:x,EMBED:Y,EMOJI_PICKER:G,EVENT_MAP:H,EVENT_PARTICIPANTS:z,FAMILIAR_FOLLOWERS:$,FAVOURITES:J,HOTKEYS:K,JOIN_EVENT:j,LANDING_PAGE:W,LIST_ADDER:Z,LIST_EDITOR:q,MEDIA:X,MENTIONS:Q,MISSING_DESCRIPTION:ee,MUTE:oe,POLICY:ae,REACTIONS:re,REBLOGS:te,REPLY_MENTIONS:se,REPORT:ne,UNAUTHORIZED:ie,VERIFY_SMS:le,VIDEO:de},_e=function(o){T(i,o);var a=Oe(i);function i(){var e;I(this,i);for(var r=arguments.length,s=new Array(r),t=0;t<r;t++)s[t]=arguments[t];return e=a.call.apply(a,[this].concat(s)),u(M(e),"renderLoading",function(l){return function(){return["MEDIA","VIDEO","BOOST","CONFIRM","ACTIONS"].includes(l)?null:n(Ce,{})}}),u(M(e),"renderError",function(l){return p.createElement(fe,m({},l,{onClose:e.onClickClose}))}),u(M(e),"onClickClose",function(l){var d=e.props,c=d.onClose,C=d.type;c(C)}),e}return N(i,[{key:"getSnapshotBeforeUpdate",value:function(){return{visible:!!this.props.type}}},{key:"componentDidUpdate",value:function(r,s,t){var l=t.visible;l?document.body.classList.add("with-modals"):document.body.classList.remove("with-modals")}},{key:"render",value:function(){var r=this,s=this.props,t=s.type,l=s.props,d=!!t;return n(me,{onClose:this.onClickClose,type:t},void 0,d&&n(y,{fetchComponent:ve[t],loading:this.renderLoading(t),error:this.renderError,renderDelay:200},void 0,function(c){return p.createElement(c,m({},l,{onClose:r.onClickClose}))}))}}]),i}(p.PureComponent);const Te=o=>{const a=o.modals.last({modalType:null,modalProps:{}});return{type:a.modalType,props:a.modalProps}},Ie=o=>({onClose(a){switch(a){case"COMPOSE":o(pe());break;case"COMPOSE_EVENT":o(Me());break;case"REPORT":o(ue());break}o(Ee(a))}}),Se=ce(Te,Ie)(_e);export{Se as default};