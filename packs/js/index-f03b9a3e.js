import{u as h,d as A,g as M,R as s,ax as i,fl as w,br as f,a as e,b2 as S,a3 as T,y as x,bG as D,bH as C,bI as F,bK as R,ae as _,eM as k,cy as H,a2 as I,o as L}from"../index-621b10ea.js";import"./es.promise.finally-501b8058.js";var a=L({passwordFieldLabel:{id:"security.fields.password.label",defaultMessage:"Password"},deleteHeader:{id:"security.headers.delete",defaultMessage:"Delete Account"},deleteText:{id:"security.text.delete",defaultMessage:"To delete your account, enter your password then click Delete Account. This is a permanent action that cannot be undone. Your account will be destroyed from this server, and a deletion request will be sent to other servers. It's not guaranteed that all servers will purge your account."},localDeleteText:{id:"security.text.delete.local",defaultMessage:"To delete your account, enter your password then click Delete Account. This is a permanent action that cannot be undone."},deleteSubmit:{id:"security.submit.delete",defaultMessage:"Delete Account"},deleteAccountSuccess:{id:"security.delete_account.success",defaultMessage:"Account successfully deleted."},deleteAccountFail:{id:"security.delete_account.fail",defaultMessage:"Account deletion failed."}}),P=function(){var t=h(),d=A(),m=M(),g=s.useState(""),l=i(g,2),o=l[0],c=l[1],p=s.useState(!1),r=i(p,2),b=r[0],u=r[1],v=s.useCallback(function(n){n.persist(),c(n.target.value)},[]),y=s.useCallback(function(){u(!0),d(w(o)).then(function(){c(""),f.success(t.formatMessage(a.deleteAccountSuccess))}).finally(function(){u(!1)}).catch(function(){c(""),f.error(t.formatMessage(a.deleteAccountFail))})},[o,d,t]);return e(I,{variant:"rounded"},void 0,e(k,{backHref:"/settings"},void 0,e(H,{title:t.formatMessage(a.deleteHeader)})),e(S,{},void 0,e(T,{space:4},void 0,e(x,{theme:"muted"},void 0,t.formatMessage(m.federating?a.deleteText:a.localDeleteText)),e(D,{onSubmit:y},void 0,e(C,{labelText:t.formatMessage(a.passwordFieldLabel)},void 0,e(F,{type:"password",name:"password",onChange:v,value:o})),e(R,{},void 0,e(_,{type:"submit",theme:"danger",disabled:b},void 0,t.formatMessage(a.deleteSubmit)))))))};export{P as default};