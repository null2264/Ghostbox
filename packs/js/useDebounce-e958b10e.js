import{r as o}from"../index-8488ff45.js";const n=(e,t)=>{const[r,s]=o.useState(e);return o.useEffect(()=>{const u=setTimeout(()=>s(e),t);return()=>{clearTimeout(u)}},[e,t]),r};export{n as u};
