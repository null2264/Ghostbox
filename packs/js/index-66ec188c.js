import{d as n,j8 as c,jb as i,a as p,aR as u}from"../index-c29ef263.js";var f=function(){var t=n(),r=c(),o=r.search,a=new URLSearchParams(o),e=[a.get("title"),a.get("text"),a.get("url")].filter(function(s){return s}).join(`

`);return e&&t(i("compose-modal",e)),p(u,{to:"/"})};export{f as default};
