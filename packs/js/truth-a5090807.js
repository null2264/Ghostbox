import{kv as t,l3 as c,N as n,cx as i,cu as o}from"../index-8f099bc3.js";const d=t.object({impression:t.string(),card:c,expires_at:t.string(),reason:t.string().catch("")}),h={getAds:async e=>{const s=e(),r=n(s);try{const{data:a}=await i.get("/api/v2/truth/ads?device=desktop",{headers:{"Accept-Language":t.string().catch("*").parse(r.get("locale"))}});return o(d).parse(a)}catch{}return[]}};export{h as default};