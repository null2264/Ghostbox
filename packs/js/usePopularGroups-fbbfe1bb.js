import{bl as i,g as p,bm as n,bn as l,bo as c,kn as m}from"../index-d17ecde2.js";function b(){const t=i(),a=p(),{entities:e,...o}=n([c.GROUPS,"popular"],()=>t.get("/api/v1/truth/trends/groups"),{schema:l,enabled:a.groupsDiscovery}),{relationships:r}=m(["popular"],e.map(s=>s.id)),u=e.map(s=>({...s,relationship:r[s.id]||null}));return{...o,groups:u}}export{b as u};
