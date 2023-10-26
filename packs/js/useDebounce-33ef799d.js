import{r as o}from"../index-3e9a931c.js";const n=(e,t)=>{const[r,s]=o.useState(e);return o.useEffect(()=>{const u=setTimeout(()=>s(e),t);return()=>{clearTimeout(u)}},[e,t]),r};export{n as u};
