import{q as n,a,cO as s,a3 as p}from"../index-98ef4d81.js";import{n as i}from"./noop-1953392b.js";var v=function(r){var t=r.pollId,e=n(function(o){return o.polls.get(t)});return e?a(p,{space:2},void 0,e.options.map(function(o,l){return a(s,{poll:e,option:o,index:l,showResults:!1,active:!1,onToggle:i},l)})):null};export{v as P};