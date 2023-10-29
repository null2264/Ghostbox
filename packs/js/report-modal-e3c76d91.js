import{u as L,q as u,bP as he,bQ as f,a as e,y as k,a3 as E,o as j,F,d as V,R as O,bR as be,r as p,bS as Se,bT as ye,bU as re,al as Z,bV as ke,g as Te,a8 as Me,ax as D,bW as ae,bI as q,H as J,bX as we,ae as $,bY as Ee,bZ as Re,b_ as xe,b$ as Ae,c0 as Ce,W as Y,c1 as Oe,_ as P,b7 as _e,b1 as Ne,c2 as He,bx as Ge,c3 as Fe,B as Ie,c4 as ee,c5 as ze,c6 as Pe,c7 as We,aj as Ue,ak as Be,A as qe,c8 as De,c9 as Le}from"../index-8f099bc3.js";import{G as je}from"./group-card-e7699832.js";import{v as Ve}from"./arrows-minimize-7c27a12c.js";import{n as Ye}from"./noop-6da3d1eb.js";import"./group-header-image-adfbef0f.js";var W=j({accountEntity:{id:"report.confirmation.entity.account",defaultMessage:"account"},groupEntity:{id:"report.confirmation.entity.group",defaultMessage:"group"},title:{id:"report.confirmation.title",defaultMessage:"Thanks for submitting your report."},content:{id:"report.confirmation.content",defaultMessage:"If we find that this {entity} is violating the {link} we will take further action on the matter."}}),se=e(F,{id:"shared.tos",defaultMessage:"Terms of Service"}),Qe=function(l){return e("a",{href:l,target:"_blank",className:"text-primary-600 hover:text-primary-800 hover:underline dark:text-accent-blue dark:hover:text-accent-blue"},void 0,se)},U=function(){var l=L(),i=u(function(a){return he(a).get("links")}),t=u(function(a){return a.reports.new.entityType}),o=t===f.GROUP?l.formatMessage(W.groupEntity):l.formatMessage(W.accountEntity);return e(E,{space:1},void 0,e(k,{weight:"semibold",tag:"h1",size:"xl"},void 0,l.formatMessage(W.title)),e(k,{},void 0,l.formatMessage(W.content,{entity:o,link:i.get("termsOfService")?Qe(i.get("termsOfService")):se})))},Xe=function(l){var i=l.id,t=l.disabled,o=V(),a=u(function(m){return m.statuses.get(i)}),x=u(function(m){return m.reports.new.status_ids.includes(i)}),s=function(b){return o(ke(i,b.target.checked))};if(!a||a.reblog)return null;var v;if(a.media_attachments.size>0){var R,M;if(!a.media_attachments.some(function(m){return m.type==="unknown"}))if(((R=a.media_attachments.get(0))===null||R===void 0?void 0:R.type)==="video"){var S=a.media_attachments.get(0);S&&(v=O.createElement(O.Fragment,null,e(p.Suspense,{},void 0,e(be,{preview:S.preview_url,blurhash:S.blurhash,src:S.url,alt:S.description,aspectRatio:S.meta.getIn(["original","aspect"]),width:239,height:110,inline:!0}))))}else if(((M=a.media_attachments.get(0))===null||M===void 0?void 0:M.type)==="audio"){var w=a.media_attachments.get(0);w&&(v=O.createElement(O.Fragment,null,e(p.Suspense,{},void 0,e(Se,{src:w.url,alt:w.description}))))}else v=O.createElement(O.Fragment,null,e(p.Suspense,{},void 0,e(ye,{media:a.media_attachments,height:110,onOpenMedia:Ye})))}return e("div",{className:"status-check-box"},void 0,e("div",{className:"status-check-box__status"},void 0,e(re,{status:a}),v),e("div",{className:"status-check-box-toggle"},void 0,e(Z,{checked:x,onChange:s,disabled:t})))},I=j({addAdditionalStatuses:{id:"report.otherActions.addAdditional",defaultMessage:"Would you like to add additional statuses to this report?"},addMore:{id:"report.otherActions.addMore",defaultMessage:"Add more"},furtherActions:{id:"report.otherActions.furtherActions",defaultMessage:"Further actions:"},hideAdditonalStatuses:{id:"report.otherActions.hideAdditional",defaultMessage:"Hide additional statuses"},otherStatuses:{id:"report.otherActions.otherStatuses",defaultMessage:"Include other statuses?"}}),Q=function(l){var i=l.account,t=V(),o=Te(),a=L(),x=u(function(g){return Me(g.timelines.get("account:".concat(i.id,":with_replies")).items).union(g.reports.new.status_ids)}),s=u(function(g){return g.reports.new.block}),v=u(function(g){return g.reports.new.forward}),R=!i.local&&o.federating,M=u(function(g){return g.reports.new.isSubmitting}),S=p.useState(!1),w=D(S,2),m=w[0],b=w[1],_=function(A){t(Re(A.target.checked))},N=function(A){t(xe(A.target.checked))};return p.useEffect(function(){t(ae())},[]),e(E,{space:4},void 0,o.reportMultipleStatuses&&e(E,{space:2},void 0,e(k,{tag:"h1",size:"xl",weight:"semibold"},void 0,a.formatMessage(I.otherStatuses)),e(q,{labelText:a.formatMessage(I.addAdditionalStatuses)},void 0,m?e(E,{space:2},void 0,e("div",{className:"divide-y divide-solid divide-gray-200 dark:divide-gray-800"},void 0,x.map(function(g){return e(Xe,{id:g},g)})),e("div",{},void 0,e($,{icon:Ve,theme:"tertiary",size:"sm",onClick:function(){return b(!1)}},void 0,a.formatMessage(I.hideAdditonalStatuses)))):e($,{icon:Ee,theme:"tertiary",size:"sm",onClick:function(){return b(!0)}},void 0,a.formatMessage(I.addMore)))),e(E,{space:2},void 0,e(k,{tag:"h1",size:"xl",weight:"semibold"},void 0,a.formatMessage(I.furtherActions)),e(q,{labelText:e(F,{id:"report.block_hint",defaultMessage:"Do you also want to block this account?"})},void 0,e(J,{space:2,alignItems:"center"},void 0,e(Z,{checked:s,onChange:_,id:"report-block"}),e(k,{theme:"muted",tag:"label",size:"sm",htmlFor:"report-block"},void 0,e(F,{id:"report.block",defaultMessage:"Block {target}",values:{target:"@".concat(i.acct)}})))),R&&e(q,{labelText:e(F,{id:"report.forward_hint",defaultMessage:"The account is from another server. Send a copy of the report there as well?"})},void 0,e(J,{space:2,alignItems:"center"},void 0,e(Z,{checked:v,onChange:N,id:"report-forward",disabled:M}),e(k,{theme:"muted",tag:"label",size:"sm",htmlFor:"report-forward"},void 0,e(F,{id:"report.forward",defaultMessage:"Forward to {target}",values:{target:we(i)}}))))))},X=j({placeholder:{id:"report.placeholder",defaultMessage:"Additional comments"},reasonForReporting:{id:"report.reason.title",defaultMessage:"Reason for reporting"}}),te=385,B=function(){var l=V(),i=L(),t=p.useRef(null),o=p.useState(!1),a=D(o,2),x=a[0],s=a[1],v=p.useState(!0),R=D(v,2),M=R[0],S=R[1],w=u(function(d){return d.reports.new.entityType}),m=u(function(d){return d.reports.new.comment}),b=u(function(d){return d.rules.items}),_=u(function(d){return d.reports.new.rule_ids}),N=b.length>0,g=function(h){l(Oe(h.target.value))},A=function(){if(t.current){var h=t.current,r=h.scrollTop,H=h.scrollHeight,z=h.clientHeight;r+z>H-24?s(!0):s(!1),r<24?S(!0):S(!1)}},C=function(h){var r="content";switch(w){case f.ACCOUNT:r="account";break;case f.STATUS:case f.CHAT_MESSAGE:r="content";break;case f.GROUP:r="group";break;default:r="content";break}return h.rule_type?h.rule_type===r:!0};return p.useEffect(function(){l(ae())},[]),p.useEffect(function(){if(b.length>0&&t.current){var d=t.current.clientHeight;d<=te&&s(!0)}},[b,t.current]),e(E,{space:4},void 0,N&&e(E,{space:2},void 0,e(k,{size:"xl",weight:"semibold",tag:"h1"},void 0,i.formatMessage(X.reasonForReporting)),e("div",{className:"relative"},void 0,O.createElement("div",{style:{maxHeight:te},className:"-space-y-px overflow-y-auto rounded-lg",onScroll:A,ref:t},b.filter(C).map(function(d,h){var r=_.includes(String(d.id));return e("button",{"data-testid":"rule-".concat(d.id),onClick:function(){return l(Ce(d.id))},className:Y({"relative border border-solid border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-primary-800/30 text-start w-full p-4 flex justify-between items-center cursor-pointer":!0,"rounded-tl-lg rounded-tr-lg":h===0,"rounded-bl-lg rounded-br-lg":h===b.length-1,"bg-gray-200 hover:bg-gray-200 dark:bg-primary-800/50":r})},h,e(E,{className:"mr-3"},void 0,e(k,{tag:"span",size:"sm",weight:"medium",theme:r?"primary":"default"},void 0,d.text),e(k,{tag:"span",theme:"muted",size:"sm"},void 0,d.subtext)),e("input",{name:"reason",type:"checkbox",value:d.id,checked:r,readOnly:!0,className:"h-4 w-4 rounded border-2 border-gray-300 text-primary-600 checked:bg-primary-500 focus:ring-primary-500 dark:border-gray-800 dark:bg-gray-900 dark:checked:bg-primary-500 dark:focus:ring-primary-500"}))})),e("div",{className:Y("pointer-events-none absolute inset-x-0 top-0 flex justify-center rounded-t-lg bg-gradient-to-b from-white pb-12 pt-8 transition-opacity duration-500 dark:from-gray-900",{"opacity-0":M,"opacity-100":!M})}),e("div",{className:Y("pointer-events-none absolute inset-x-0 bottom-0 flex justify-center rounded-b-lg bg-gradient-to-t from-white pb-8 pt-12 transition-opacity duration-500 dark:from-gray-900",{"opacity-0":x,"opacity-100":!x})}))),e(q,{labelText:i.formatMessage(X.placeholder)},void 0,e(Ae,{placeholder:i.formatMessage(X.placeholder),value:m,onChange:g})))},G,y=j({blankslate:{id:"report.reason.blankslate",defaultMessage:"You have removed all statuses from being selected."},done:{id:"report.done",defaultMessage:"Done"},next:{id:"report.next",defaultMessage:"Next"},submit:{id:"report.submit",defaultMessage:"Submit"},reportContext:{id:"report.chatMessage.context",defaultMessage:"When reporting a user’s message, the five messages before and five messages after the one selected will be passed along to our moderation team for context."},reportMessage:{id:"report.chatMessage.title",defaultMessage:"Report message"},reportGroup:{id:"report.group.title",defaultMessage:"Report Group"},cancel:{id:"common.cancel",defaultMessage:"Cancel"},previous:{id:"report.previous",defaultMessage:"Previous"}}),c=function(T){return T.ONE="ONE",T.TWO="TWO",T.THREE="THREE",T}(c||{}),Ze=(G={},P(G,f.ACCOUNT,{ONE:B,TWO:Q,THREE:U}),P(G,f.CHAT_MESSAGE,{ONE:B,TWO:Q,THREE:U}),P(G,f.STATUS,{ONE:B,TWO:Q,THREE:U}),P(G,f.GROUP,{ONE:B,TWO:null,THREE:U}),G),Je=function(l){var i=l.statusId,t=u(function(o){return o.statuses.get(i)});return t?e(E,{space:2,className:"rounded-lg bg-gray-100 p-4 dark:bg-gray-800"},void 0,e(Ie,{id:t.account,showProfileHoverCard:!1,withLinkToProfile:!1,timestamp:t.created_at,hideActions:!0}),e(re,{status:t,collapsable:!0}),t.media_attachments.size>0&&e(Fe,{media:t.media_attachments,sensitive:t.sensitive})):null},at=function(l){var i=l.onClose,t=V(),o=L(),a=u(function(n){return n.reports.new.account_id}),x=_e(a||void 0),s=x.account,v=u(function(n){return n.reports.new.entityType}),R=u(function(n){return n.reports.new.block}),M=u(function(n){return n.reports.new.isSubmitting}),S=u(function(n){return n.rules.items}),w=u(function(n){return n.reports.new.rule_ids}),m=u(function(n){return n.reports.new.status_ids}),b=u(function(n){return n.reports.new.chat_message}),_=u(function(n){return n.reports.new.group}),N=S.length>0,g=v===f.ACCOUNT,A=v===f.STATUS,C=v===f.GROUP,d=p.useState(c.ONE),h=D(d,2),r=h[0],H=h[1],z=function(){t(ze()).then(function(){return H(c.THREE)}).catch(function(ve){return t(Pe(ve))}),R&&s&&t(We(s.id))},ne=p.useCallback(function(){switch(m.size){case 0:return e("div",{className:"flex w-full items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-gray-800"},void 0,e(k,{theme:"muted"},void 0,o.formatMessage(y.blankslate)));default:return e(Je,{statusId:m.first()})}},[m.size]),oe=p.useMemo(function(){switch(r){case c.ONE:return o.formatMessage(y.cancel);default:return o.formatMessage(y.previous)}},[r]),ie=function(){switch(r){case c.ONE:i();break;case c.TWO:H(c.ONE);break}},ue=p.useMemo(function(){switch(r){case c.ONE:return C?o.formatMessage(y.submit):o.formatMessage(y.next);case c.TWO:return C?o.formatMessage(y.done):o.formatMessage(y.submit);case c.THREE:return o.formatMessage(y.done);default:return o.formatMessage(y.next)}},[r,C]),de=function(){switch(r){case c.ONE:C?z():H(c.TWO);break;case c.TWO:C?(t(ee()),i()):z();break;case c.THREE:t(ee()),i();break}},ce=function(){if(s)return e(E,{space:4},void 0,e(J,{alignItems:"center",space:4,className:"rounded-md border border-solid border-gray-400 p-4 dark:border-2 dark:border-gray-800"},void 0,e("div",{},void 0,e(Le,{src:s.avatar,className:"h-8 w-8"})),e("div",{className:"grow rounded-md bg-gray-200 p-4 dark:bg-primary-800"},void 0,e(k,{dangerouslySetInnerHTML:{__html:b==null?void 0:b.content}}))),e(Ue,{},void 0,e(Be,{label:e(qe,{src:De,className:"text-gray-600"})},void 0,e(k,{size:"sm"},void 0,o.formatMessage(y.reportContext)))))},le=function(){if(_)return e(je,{group:_})},ge=function(){switch(v){case f.STATUS:return ne();case f.CHAT_MESSAGE:return ce();case f.GROUP:return r===c.TWO?null:le();default:return null}},fe=function(){switch(v){case f.CHAT_MESSAGE:return o.formatMessage(y.reportMessage);case f.GROUP:return o.formatMessage(y.reportGroup);default:return e(F,{id:"report.target",defaultMessage:"Reporting {target}",values:{target:e("strong",{},void 0,"@",s==null?void 0:s.acct)}})}},pe=p.useMemo(function(){return r===c.THREE?!1:M||N&&w.isEmpty()||A&&m.size===0},[r,M,N,w,m.size,A]),me=p.useCallback(function(){switch(r){case c.ONE:return .33;case c.TWO:return .66;case c.THREE:return 1;default:return 0}},[r]);if(p.useEffect(function(){s!=null&&s.id&&t(Ne(s.id,{withReplies:!0,maxId:null}))},[s==null?void 0:s.id]),!s)return null;var K=Ze[v][r];return e(Ge,{title:fe(),onClose:i,cancelText:oe,cancelAction:r===c.THREE?void 0:ie,confirmationAction:de,confirmationText:ue,confirmationDisabled:pe,skipFocus:!0},void 0,e(E,{space:4},void 0,e(He,{progress:me()}),r!==c.THREE&&!g&&ge(),K&&e(K,{account:s})))};export{at as default};