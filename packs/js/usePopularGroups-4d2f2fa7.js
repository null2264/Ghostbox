import{bl as i,g as p,bm as n,bn as l,bo as c,ko as m}from"../index-621b10ea.js";function b(){const t=i(),o=p(),{entities:e,...a}=n([c.GROUPS,"popular"],()=>t.get("/api/v1/truth/trends/groups"),{schema:l,enabled:o.groupsDiscovery}),{relationships:r}=m(["popular"],e.map(s=>s.id)),u=e.map(s=>({...s,relationship:r[s.id]||null}));return{...a,groups:u}}export{b as u};