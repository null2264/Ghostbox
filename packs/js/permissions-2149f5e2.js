const n=1048576,o=(s,r)=>{const e=s.accounts_meta.get(s.me);if(!(e!=null&&e.role))return!0;const t=e.getIn(["role","permissions"]);return r?(t&r)===r:!0};export{n as P,o as h};
