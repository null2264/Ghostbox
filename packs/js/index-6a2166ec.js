import{d as n,j5 as c,j8 as i,a as p,aR as u}from"../index-7b6dea3f.js";var f=function(){var t=n(),r=c(),o=r.search,a=new URLSearchParams(o),e=[a.get("title"),a.get("text"),a.get("url")].filter(function(s){return s}).join(`

`);return e&&t(i("compose-modal",e)),p(u,{to:"/"})};export{f as default};