import{r as o,fb as s}from"../index-c9399634.js";import{u as i}from"./header-picker-764956d5.js";function f(e={}){const[r,n]=o.useState();return{src:i(r)||(r===null?void 0:e.preview),file:r,onChange:async({target:{files:t}})=>{const a=t==null?void 0:t.item(0);a&&(typeof e.maxPixels=="number"?n(await s(a,e.maxPixels)):n(a))},onClear:()=>n(null)}}export{f as u};