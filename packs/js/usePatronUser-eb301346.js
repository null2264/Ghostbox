import{bl as a,hH as o,bo as r,hI as i}from"../index-621b10ea.js";function c(t){const e=a(),{entity:n,...s}=o([r.PATRON_USERS,t||""],()=>e.get(`/api/patron/v1/accounts/${encodeURIComponent(t)}`),{schema:i,enabled:!!t});return{patronUser:n,...s}}export{c as u};