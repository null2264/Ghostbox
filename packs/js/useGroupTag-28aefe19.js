import{bl as i,hG as o,kr as r,bo as u}from"../index-7b6dea3f.js";function p(t){const s=i(),{entity:a,...e}=o([u.GROUP_TAGS,t],()=>s.get(`/api/v1/tags/${t}`),{schema:r});return{...e,tag:a}}export{p as u};