import{bl as n,av as f,bs as h,bt as g,bo as r,bm as m,bu as d}from"../index-c9399634.js";function v(s,e){const a=n(),{isLoggedIn:i}=f();function c(t){const p=t.map(b=>`id[]=${b}`).join("&");return a.get(`/api/v1/accounts/relationships?${p}`)}const{entityMap:u,...l}=h([r.RELATIONSHIPS,...s],e,c,{schema:g,enabled:i});return{relationships:u,...l}}function o(s,e,a={}){const{entities:i,...c}=m([r.ACCOUNTS,...s],e,{schema:d,enabled:a.enabled}),{relationships:u}=v(s,i.map(({id:t})=>t));return{accounts:i.map(t=>({...t,relationship:u[t.id]})),...c}}function S(){const s=n();return o(["blocks"],()=>s.get("/api/v1/blocks"))}function A(){const s=n();return o(["mutes"],()=>s.get("/api/v1/mutes"))}function E(s){const e=n();return o([s,"following"],()=>e.get(`/api/v1/accounts/${s}/following`),{enabled:!!s})}function L(s){const e=n();return o([s,"followers"],()=>e.get(`/api/v1/accounts/${s}/followers`),{enabled:!!s})}export{E as a,S as b,A as c,L as u};