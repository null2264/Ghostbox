import{bb as r,bl as p,d,e$ as i,f0 as a,br as u}from"../index-7b6dea3f.js";const l=()=>{const{account:c}=r(),o=p(),s=d();return i(t=>o.patch("/api/v1/accounts/update_credentials",t),{onMutate(t){const e=c;return s(a({...c,...t})),{cachedAccount:e}},onSuccess(t){s(a(t.data)),u.success("Chat Settings updated successfully")},onError(t,e,n){u.error("Chat Settings failed to update."),s(a(n.cachedAccount))}})};export{l as u};