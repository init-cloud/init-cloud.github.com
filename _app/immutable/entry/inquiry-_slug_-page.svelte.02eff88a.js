import{S as x,i as L,s as S,k as _,q,a as k,L as C,l as d,m as g,r as w,h as c,c as A,I as E,n as m,p as u,C as h,b as I,K as y,F,y as H,z as T,A as z,g as B,d as K,B as M}from"../chunks/index.f096556f.js";import{n as N}from"../chunks/stores.17e679e5.js";import{i as O}from"../chunks/inquiries.7750480f.js";function P(r){let t,n,a,i,e,l,f;return{c(){t=_("style"),n=q(`body {
      overflow: hidden;
    }
    main {
      min-height: unset !important;
    }`),a=k(),i=_("section"),e=_("iframe"),l=q("로드 중…"),this.h()},l(s){const o=C("svelte-1ygl3i6",document.head);t=d(o,"STYLE",{});var p=g(t);n=w(p,`body {
      overflow: hidden;
    }
    main {
      min-height: unset !important;
    }`),p.forEach(c),o.forEach(c),a=A(s),i=d(s,"SECTION",{class:!0});var v=g(i);e=d(v,"IFRAME",{src:!0,title:!0,style:!0,frameborder:!0,marginheight:!0,marginwidth:!0});var b=g(e);l=w(b,"로드 중…"),b.forEach(c),v.forEach(c),this.h()},h(){E(e.src,f=r[0])||m(e,"src",f),m(e,"title",r[1]),u(e,"display","block"),u(e,"width","100vw"),u(e,"max-width","100%"),u(e,"height","calc(100vh - "+r[2]+"px)"),m(e,"frameborder","0"),m(e,"marginheight","0"),m(e,"marginwidth","0"),m(i,"class","svelte-17xyi0u")},m(s,o){h(document.head,t),h(t,n),I(s,a,o),I(s,i,o),h(i,e),h(e,l)},p(s,[o]){o&1&&!E(e.src,f=s[0])&&m(e,"src",f),o&2&&m(e,"title",s[1]),o&4&&u(e,"height","calc(100vh - "+s[2]+"px)")},i:y,o:y,d(s){c(t),s&&c(a),s&&c(i)}}}function R(r,t,n){let a;F(r,N,l=>n(2,a=l));let{iframe_url:i=""}=t,{title:e=""}=t;return r.$$set=l=>{"iframe_url"in l&&n(0,i=l.iframe_url),"title"in l&&n(1,e=l.title)},[i,e,a]}class Y extends x{constructor(t){super(),L(this,t,R,P,S,{iframe_url:0,title:1})}}function j(r){let t,n;return t=new Y({props:{title:r[0].title,iframe_url:r[0].iframe_link}}),{c(){H(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,i){z(t,a,i),n=!0},p:y,i(a){n||(B(t.$$.fragment,a),n=!0)},o(a){K(t.$$.fragment,a),n=!1},d(a){M(t,a)}}}function D(r,t,n){let{data:a}=t,i=O[a.slug];return r.$$set=e=>{"data"in e&&n(1,a=e.data)},[i,a]}class U extends x{constructor(t){super(),L(this,t,D,j,S,{data:1})}}export{U as default};
