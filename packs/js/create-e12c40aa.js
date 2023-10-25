import{u as Z,d as $,bb as ee,r as b,ax as h,a as e,bG as C,bH as c,F as n,bI as g,bK as T,ae as j,X as k,o as te,a3 as ae,y as R,b_ as E,jc as L,jd as re,je as se,_ as U}from"../index-621b10ea.js";function D(o,t){var a=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(p){return Object.getOwnPropertyDescriptor(o,p).enumerable})),a.push.apply(a,r)}return a}function F(o){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?D(Object(a),!0).forEach(function(r){U(o,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(a,r))})}return o}var m=te({heading:{id:"column.app_create",defaultMessage:"Create app"},namePlaceholder:{id:"app_create.name_placeholder",defaultMessage:"e.g. 'Soapbox'"},scopesPlaceholder:{id:"app_create.scopes_placeholder",defaultMessage:"e.g. 'read write follow'"}}),I={client_name:"",redirect_uris:"urn:ietf:wg:oauth:2.0:oob",scopes:"",website:""},oe=function(){var t=Z(),a=$(),r=ee(),p=r.account,q=b.useState(null),v=h(q,2),_=v[0],y=v[1],B=b.useState(null),w=h(B,2),S=w[0],O=w[1],H=b.useState(!1),x=h(H,2),K=x[0],d=x[1],N=b.useState(I),P=h(N,2),l=P[0],M=P[1],G=function(){var s=L(p);return a(re(l,s)).then(function(u){return y(u),u})},J=function(s){var u=L(p),V={client_id:s.client_id,client_secret:s.client_secret,redirect_uri:l.redirect_uris,grant_type:"client_credentials",scope:l.scopes};return a(se(V,u)).then(O)},z=function(){d(!0),G().then(J).then(function(){A(),d(!1)}).catch(function(s){console.error(s),d(!1)})},W=function(s,u){M(F(F({},l),{},U({},s,u)))},f=function(s){return function(u){W(s,u.target.value)}},X=function(){y(null),O(null),d(!1),M(I)},Y=function(){X(),A()},A=function(){window.scrollTo({top:0,behavior:"smooth"})},Q=function(){return e(k,{label:t.formatMessage(m.heading),backHref:"/developers"},void 0,e(C,{},void 0,e(ae,{},void 0,e(R,{size:"lg",weight:"medium"},void 0,e(n,{id:"app_create.results.explanation_title",defaultMessage:"App created successfully"})),e(R,{theme:"muted"},void 0,e(n,{id:"app_create.results.explanation_text",defaultMessage:"You created a new app and token! Please copy the credentials somewhere; you will not see them again after navigating away from this page."}))),e(c,{labelText:e(n,{id:"app_create.results.app_label",defaultMessage:"App"})},void 0,e(E,{value:JSON.stringify(_,null,2),rows:10,readOnly:!0,isCodeEditor:!0})),e(c,{labelText:e(n,{id:"app_create.results.token_label",defaultMessage:"OAuth token"})},void 0,e(E,{value:JSON.stringify(S,null,2),rows:10,readOnly:!0,isCodeEditor:!0})),e(T,{},void 0,e(j,{theme:"primary",type:"button",onClick:Y},void 0,e(n,{id:"app_create.restart",defaultMessage:"Create another"})))))};return _&&S?Q():e(k,{label:t.formatMessage(m.heading),backHref:"/developers"},void 0,e(C,{onSubmit:z},void 0,e(c,{labelText:e(n,{id:"app_create.name_label",defaultMessage:"App name"})},void 0,e(g,{type:"text",placeholder:t.formatMessage(m.namePlaceholder),onChange:f("client_name"),value:l.client_name,required:!0})),e(c,{labelText:e(n,{id:"app_create.website_label",defaultMessage:"Website"})},void 0,e(g,{type:"text",placeholder:"https://soapbox.pub",onChange:f("website"),value:l.website})),e(c,{labelText:e(n,{id:"app_create.redirect_uri_label",defaultMessage:"Redirect URIs"})},void 0,e(g,{type:"text",placeholder:"https://example.com",onChange:f("redirect_uris"),value:l.redirect_uris,required:!0})),e(c,{labelText:e(n,{id:"app_create.scopes_label",defaultMessage:"Scopes"})},void 0,e(g,{type:"text",placeholder:t.formatMessage(m.scopesPlaceholder),onChange:f("scopes"),value:l.scopes,required:!0})),e(T,{},void 0,e(j,{theme:"primary",type:"submit",disabled:K},void 0,e(n,{id:"app_create.submit",defaultMessage:"Create app"})))))};export{oe as default};