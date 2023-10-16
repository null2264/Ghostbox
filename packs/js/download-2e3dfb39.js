const c=(t,o)=>{const n=URL.createObjectURL(new Blob([t])),e=document.createElement("a");e.href=n,e.setAttribute("download",o),document.body.appendChild(e),e.click(),e.remove()};export{c as d};
