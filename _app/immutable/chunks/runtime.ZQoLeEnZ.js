const ne=()=>{};function V(e){for(var n=0;n<e.length;n++)e[n]()}function Re(e,n,t){if(e==null)return n(void 0),t&&t(void 0),ne;const u=e.subscribe(n,t);return u.unsubscribe?()=>u.unsubscribe():u}var re=Array.isArray,ze=Array.from,Ze=Object.keys,Ge=Object.assign,Je=Object.defineProperty,Se=Object.getOwnPropertyDescriptor;const Qe=1,We=2,Xe=4,$e=8,ge=64,ke=1,xe=4,Ie=8,en=["touchstart","touchmove","touchend"],fe=1,q=2,Y=4,j=8,O=16,C=64,D=128,y=256,v=512,L=1024,X=2048,G=4096,J=Y|j|O,ce=0,we=1,B=Symbol(),se=Symbol();let H=ce,K=!1,z=!1,d=[],x=[],$=[],M=0,A=null,c=null,_=null,h=0,S=null,k=!1,g=!1,F=!1,b=null,o=null,W=!1;function Z(e){const n=e||o;return n!==null&&n.r}function oe(e,n){return e===n}function Oe(e,n){return{c:null,e:oe,f:e,v:n,x:null}}function le(e,n,t){return{b:t,c:null,d:null,e:null,f:e,i:null,r:null,v:n,x:null,y:null}}function ie(e,n){const t=e.r;t===null?e.r=[n]:t.push(n)}function te(e){const n=e.f;if(n&v||e.v===B)return!0;if(n&L){const t=e.d;if(t!==null){const u=t.length;let r;for(r=0;r<u;r++){const f=t[r];if(f.f&L&&!te(f)){m(f,y);continue}if(f.f&v)if(f.f&q){if(ve(f,!0),e.f&v)return!0}else return!0}}}return!1}function _e(e){const n=e.i,t=_,u=h,r=S,f=A,s=b,l=o,E=F,T=(e.f&O)!==0,R=k;_=null,h=0,S=null,A=e,b=e.b,o=e.x,F=c===null&&(e.f&D)!==0,k=!1,T&&o?.u!=null&&o.u.e();try{let i;T?i=n(e.b):i=n();let a=e.d;if(_!==null){let p;if(U(e,h,!1),a!==null&&h>0)for(a.length=h+_.length,p=0;p<_.length;p++)a[h+p]=_[p];else e.d=a=_;if(!F)for(p=h;p<a.length;p++){const Q=a[p];Q.c===null?Q.c=[e]:Q.c.push(e)}}else a!==null&&h<a.length&&(U(e,h,!1),a.length=h);return i}finally{_=t,h=u,S=r,A=f,b=s,o=l,F=E,k=R}}function U(e,n,t){const u=e.d;if(u!==null){let r;for(r=n;r<u.length;r++){const f=u[r],s=f.c;let l=0;if(s!==null){l=s.length-1;const E=s.indexOf(e);E!==-1&&(l===0?f.c=null:(s[E]=s[l],s.pop()))}t&&l===0&&f.f&D&&(m(f,v),U(f,0,!0))}}}function de(e){const n=e.r;if(e.r=null,n!==null){let t;for(t=0;t<n.length;t++){const u=n[t];u.f&J?be(u):(U(u,0,!0),u.d=null)}}}function Ce(e,n){if(e!==null)throw n}function ae(e){if(e.f&G)return;const n=e.v,t=c;c=e;try{de(e),n!==null&&n();const r=_e(e);typeof r=="function"&&(e.v=r)}catch(r){const f=e.b;if(f!==null)Ce(f,r);else throw r}finally{c=t}const u=e.x;Z(u)&&e.f&j&&d.length>0&&Pe(u)}function pe(){if(M>100)throw new Error("ERR_SVELTE_TOO_MANY_UPDATES");M++}function w(e){const n=e.length;if(n>0){pe();let t;for(t=0;t<n;t++){const u=e[t],r=u.f;r&(G|X)||(te(u)?(m(u,y),ae(u)):r&L&&m(u,y))}e.length=0}}function De(){if(K=!1,M>101)return;const e=d,n=x;d=[],x=[],w(e),w(n),K||(M=0)}function N(e,n){const t=e.f;n?(ae(e),m(e,y)):(H===ce&&(K||(K=!0,queueMicrotask(De))),t&Y?x.push(e):d.push(e))}function he(){z=!1;const e=$.slice();$=[],V(e)}function nn(e){z||(z=!0,setTimeout(he,0)),$.push(e)}function Ne(){const e=[];for(let n=0;n<d.length;n++){const t=d[n];t.f&O&&t.x===o&&(e.push(t),d.splice(n,1),n--)}w(e)}function Pe(e){const n=[];for(let t=0;t<d.length;t++){const u=d[t];u.f&j&&u.x===e&&(n.push(u),d.splice(t,1),t--)}w(n)}function Ee(e){const n=H,t=d,u=x;try{pe();const r=[],f=[];H=we,d=r,x=f,w(t),w(u),e!==void 0&&e(),(d.length>0||f.length>0)&&Ee(),z&&he(),M=0}finally{H=n,d=t,x=u}}async function tn(){await Promise.resolve(),Ee()}function ve(e,n){const t=W;W=!0;const u=_e(e);W=t;const r=F||c===null&&e.f&D?v:y;m(e,r);const f=e.e;f(u,e.v)||(e.v=u,ue(e,v,n))}function un(e,n,t){let u=t[n];const r=u===void 0;r&&(u={store:null,last_value:null,value:me(B),unsubscribe:ne},t[n]=u),(r||u.store!==e)&&(u.unsubscribe(),u.store=e??null,u.unsubscribe=Fe(e,u.value));const f=I(u.value);return f===B?u.last_value:f}function Fe(e,n){return e==null?(ee(n,void 0),ne):Re(e,u=>{g=!0,ee(n,u),g=!1})}function rn(e){Ke(()=>{let n;for(n in e)e[n].unsubscribe()})}function I(e){const n=e.f;if(n&G)return e.v;if(A!==null&&!(A.f&C)&&!k){const t=(A.f&D)!==0,u=A.d;_===null&&u!==null&&u[h]===e&&!(t&&c!==null)?h++:_===null?_=[e]:e!==_[_.length-1]&&_.push(e),S!==null&&c!==null&&c.f&y&&S.includes(e)&&(m(c,v),N(c,!1))}return n&q&&te(e)&&ve(e,!1),e.v}function ee(e,n){return ye(e,n),n}function qe(e,n){const t=e.f;(t&X)!==0!==n&&(e.f^=X,!n&&t&J&&!(t&y)&&N(e,!1));const r=e.r;if(r!==null){let f;for(f=0;f<r.length;f++)qe(r[f],n)}}function ue(e,n,t){const u=Z(e.x),r=e.c;if(r!==null){const f=r.length;let s;for(s=0;s<f;s++){const l=r[s],E=l.f,T=(E&D)!==0,R=(E&v)!==0;R&&!T||(!t||!u)&&l===c||(m(l,n),(E&y||R&&T)&&(l.f&J?N(l,!1):ue(l,L,t)))}}}function ye(e,n){if(!k&&!g&&A!==null&&Z(e.x)&&A.f&q)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");if(e.f&fe&&!e.e(n,e.v)){const t=e.x;if(e.v=n,Z(t)&&c!==null&&c.c===null&&c.f&y&&(_!==null&&_.includes(e)?(m(c,v),N(c,!1)):S===null?S=[e]:S.push(e)),ue(e,v,!0),c===null&&d.length===0){const u=t?.u;if(u!=null){V(u.b);const r=je(()=>{be(r),V(u.a)})}}}}function be(e){const n=e.v,t=e.y,u=e.f;de(e),U(e,0,!0),e.i=e.r=e.y=e.x=e.b=e.v=e.d=e.c=null,m(e,G),t!==null&&(re(t)?V(t):t()),n!==null&&u&J&&n()}function Le(e){const n=c===null,t=n?q|D:q,u=le(t|y,B,b);return u.i=e,u.x=o,u.e=oe,n||ie(c,u),u}function Me(e){const n=Oe(fe|y,e);return n.x=o,n}function me(e){const n=Me(e);return n.e=Ae,n}function Ue(e){const n=k;try{return k=!0,e()}finally{k=n}}function P(e,n,t,u,r){const f=le(e|v,null,u);return f.i=n,f.x=o,r&&N(f,t),c!==null&&!(e&C)&&ie(c,f),f}function fn(){return c?(c.f&C)===0:!1}function Ye(e){if(c===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=c.f&O&&o!==null&&!o.m,t=P(Y,e,!1,b,!n);if(n){let u=o.e;u===null&&(u=o.e=[]),u.push(t)}return t}function cn(e){return P(Y,e,!1,b,!0)}function je(e){return P(Y|C,e,!1,b,!0)}function sn(e,n){return P(j|C,e,n,b,!0)}function on(e){if(c===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=c!==null&&(c.f&O)!==0;return P(j,()=>{const t=e();return Ne(),t},n,b,!0)}function ln(e,n=b,t=!1,u=!0){let r=O;return t&&(r|=C),P(r,e,u,n,!0)}function _n(e,n){let t=e.y;t===null?e.y=n:re(t)?t.push(n):e.y=[t,n]}const He=~(v|L|y);function m(e,n){e.f=e.f&He|n}function Ve(e){return typeof e=="object"&&e!==null&&typeof e.f=="number"}function Be(e){return typeof e=="object"&&e!==null&&e.t===se}function dn(e,n,t,u){var r=(t&ke)!==0,f=Se(e,n)?.set,s=e[n];s===void 0&&u!==void 0&&(t&Ie&&(u=u()),s=u,f&&f(s));var l=()=>{var i=e[n];return i!==void 0&&(u=void 0),i===void 0?u:i};if(!(t&xe))return l;if(f)return function(i){return arguments.length===1?(f(i),i):l()};var E=!1,T=me(s),R=Le(()=>{var i=l(),a=I(T);return E?(E=!1,a):T.v=i});return r||(R.e=Ae),function(i,a=!1){var p=I(R);return arguments.length>0?((a||(r?i!==p:Te(i,p)))&&(E=!0,ee(T,a?p:i),I(R)),i):p}}function Te(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Ae(e,n){return!Te(e,n)}function an(e,n=1){const t=I(e);return ye(e,t+n),t}function Ke(e){Ye(()=>()=>Ue(e))}function pn(e,n=!1){o={a:null,c:null,e:null,m:!1,p:o,s:e,r:n,u:null}}function hn(e){const n=o;if(n!==null){e!==void 0&&(n.a=e);const t=n.e;if(t!==null){n.e=null;for(let u=0;u<t.length;u++)N(t[u],!1)}o=n.p,n.m=!0}}function En(e,n){return{o:e,p:n,t:se}}function vn(e){return Ve(e)?I(e):Be(e)?e.o[e.p]:e}export{vn as A,Le as B,an as C,W as D,Xe as E,Se as F,fn as G,b as H,nn as I,qe as J,sn as K,je as L,V as M,cn as N,Ze as O,o as P,ze as Q,Ge as R,Ee as S,en as T,B as U,Ve as V,on as a,hn as b,pn as c,Je as d,Me as e,Ue as f,I as g,rn as h,un as i,be as j,re as k,_n as l,$e as m,ae as n,En as o,dn as p,Qe as q,ln as r,ee as s,tn as t,Ye as u,ye as v,Be as w,We as x,ge as y,me as z};
