import{cU as l,fd as c,dQ as v,fe as p,d1 as m,ff as C,fg as $,dE as d}from"../index-c9399634.js";var h=l,t=c,N=v,f=p,u=m,P=C,n=$,I=d,i=t&&t.prototype,g=!!t&&N(function(){i.finally.call({then:function(){}},function(){})});h({target:"Promise",proto:!0,real:!0,forced:g},{finally:function(r){var a=P(this,f("Promise")),o=u(r);return this.then(o?function(e){return n(a,r()).then(function(){return e})}:r,o?function(e){return n(a,r()).then(function(){throw e})}:r)}});if(u(t)){var s=f("Promise").prototype.finally;i.finally!==s&&I(i,"finally",s,{unsafe:!0})}