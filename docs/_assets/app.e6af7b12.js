import{r as e,m as t,n,i as o,w as a,o as r,a as s,b as i,h as c,c as l,d as h,e as u,f as p,F as d,g as m,j as f,k as g,l as w,p as v}from"./common-8f29f308.js";const b=Symbol();function y(){return function(){const e=o(b);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function S(e,t,n=!1){const o=document.getElementById("app").offsetTop,a=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(a){const e=a.offsetTop-o-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}function C(e,t){const n=Array.from(document.querySelectorAll("meta"));let o=!0;const r=e=>{o?o=!1:(n.forEach(e=>document.head.removeChild(e)),n.length=0,e&&e.length&&e.forEach(e=>{const t=function([e,t,n]){const o=document.createElement(e);for(const e in t)o.setAttribute(e,t[e]);n&&(o.innerHTML=n);return o}(e);document.head.appendChild(t),n.push(t)}))};a(()=>{const n=e.value,o=t.value,a=n&&n.title;document.title=(a?a+" | ":"")+o.title,r([["meta",{name:"description",content:o.description}],...o.head,...n&&n.frontmatter.head||[]])})}const _=Symbol(),E="undefined"!=typeof window;function I(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),E){const e="/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}_assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const L=new Set,T=()=>document.createElement("link");let j;const A=E&&(j=T())&&j.relList&&j.relList.supports&&j.relList.supports("prefetch")?e=>{const t=T();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const H={setup(){const e=y();return function(){if(!E)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const o=()=>{n&&n.disconnect(),n=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:o}=t;if(!L.has(o)){L.add(o);const e=I(o);A(e)}}})}),t(()=>{document.querySelectorAll(".vitepress-content a").forEach(e=>{const{target:t,hostname:o,pathname:a}=e;"_blank"!==t&&o===location.hostname&&(a!==location.pathname?n.observe(e):L.add(a))})})};r(o),s(o),i(()=>{n&&n.disconnect()})}(),()=>e.contentComponent?c(e.contentComponent):null}},P=u('<h1><a href="/" id="top" title="Michael Kurze (x1B, the escape sequence)">\\x1B</a><p class="sub-head"><em>the</em> escape sequence</p></h1><p class="intro"><a href="#x1B">Michael Kurze</a> (<a href="https://github.com/x1B" title="x1B on GitHub">GitHub</a>, <a href="https://twitter.com/0b11011" title="@0b11011 on twitter">twitter</a>), software engineer and open-source enthusiast.</p>',2);const k={render:function(e,t){return l(),h("header",null,[P])}},q={class:"imprint"},x=u('<h2 id="imprint">Contact, Imprint and Privacy Statement</h2><p> Although this is a personal website, the following legal information is included to ensure compliance with <a href="http://dejure.org/gesetze/TMG/5.html">§ 5 TMG</a> (German law), and <a href="https://de.wikipedia.org/wiki/Datenschutz-Grundverordnung">GDPR</a> requirements: </p><p class="imprint"> Verantwortlich für den Inhalt dieser Webseite ist <em>Michael Kurze</em>.<br><em>Horngasse 15, 52064 Aachen, Germany</em><br> E-Mail: <code>michael.codes__pm.me</code> (insert @ instead of __) </p><h4>Privacy Statement</h4><p class="privacy"> This site&#39;s contents are hosted by GitHub, Inc., San Francisco, USA, enabling them to collect IP addresses from visitors. Please refer to <a href="https://help.github.com/articles/github-privacy-statement/">the GitHub privacy statement</a> for details. </p><p class="privacy"> Other than this, I do not collect any personal data of visitors. This site <em>does not</em> use cookies. </p>',6);const G={render:function(e,t){return l(),h("footer",q,[x])}},M=u('<ul><li class="projects"><a href="#projects">Projects</a></li><li class="x1B"><a href="#x1B">About</a></li><li class="imprint"><a href="#imprint">Imprint</a></li></ul>',1);const B={render:function(e,t){return l(),h("nav",null,[M])}};var D={components:{SiteHeader:k,SiteFooter:G,SiteNav:B}};const $={class:"content"};D.render=function(e,t,n,o,a,r){const s=m("SiteHeader"),i=m("Content"),c=m("SiteFooter"),u=m("SiteNav");return l(),h(d,null,[p("main",$,[p(s),p(i),p(c)]),p(u)],64)};var N={Layout:D,NotFound:()=>"404 Not Found :("};function F(e,t){const n=function(e,t){t.sort((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length});for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}const O=f((R='{"lang":"en-US","title":"Michael Kurze (x1B, the escape sequence)","description":"personal website","base":"/","head":[["link",{"rel":"icon","href":"/icon/android-icon-192x192.png"}]],"themeConfig":{},"locales":{}}',g(JSON.parse(R))));var R;function z(e=y()){return w(()=>function(e,t){const n=F(e.locales||{},t)||{},o=F(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...o,locales:{}},locales:{}}}(O.value,e.path))}const U=N.NotFound||(()=>"404 Not Found");function W(){const o=f();let a,r=E;const s=function(o,a){const r=e({path:"/",contentComponent:null}),s="undefined"!=typeof window;function i(e){e=e||(s?location.href:"/");const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.href),s&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),c(e)}async function c(e,i=0){const c=new URL(e,"http://a.com"),l=r.path=c.pathname;try{let e=o(r);if("then"in e&&"function"==typeof e.then&&(e=await e),r.path===l){if(!e)throw new Error("Invalid route component: "+e);r.contentComponent=t(e),s&&n(()=>{if(c.hash&&!i){const e=document.querySelector(decodeURIComponent(c.hash));if(e)return void S(e,c.hash)}window.scrollTo(0,i)})}}catch(e){e.message.match(/fetch/)||console.error(e),r.path===l&&(r.contentComponent=a?t(a):null)}}return s&&(window.addEventListener("click",e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:o,hostname:a,pathname:r,hash:s,target:c}=t,l=window.location;"_blank"!==c&&o===l.protocol&&a===l.hostname&&(e.preventDefault(),r===l.pathname?s&&s!==l.hash&&(history.pushState(null,"",s),S(t,s,t.classList.contains("header-anchor"))):i(n))}},{capture:!0}),window.addEventListener("popstate",e=>{c(location.href,e.state&&e.state.scrollPosition||0)}),window.addEventListener("hashchange",e=>{e.preventDefault()})),{route:r,go:i}}(e=>{let t=I(e.path);if(r&&(a=t),(r||a===t)&&(t=t.replace(/\.js$/,".lean.js")),E)return r=!1,import(t).then(e=>(e.__pageData&&(o.value=g(JSON.parse(e.__pageData))),e.default));{const e=require(t);return o.value=JSON.parse(e.__pageData),e.default}},U),i=v(N.Layout);i.provide(b,s),i.provide(_,o),i.component("Content",H),i.component("Debug",()=>null);const c=z(s.route);return E&&C(o,c),Object.defineProperties(i.config.globalProperties,{$site:{get:()=>O.value},$siteByRoute:{get:()=>c.value},$page:{get:()=>o.value},$theme:{get:()=>c.value.themeConfig}}),N.enhanceApp&&N.enhanceApp({app:i,router:s,siteData:c}),{app:i,router:s}}if(E){const{app:e,router:t}=W();t.go().then(()=>{e.mount("#app")})}export{W as createApp};
