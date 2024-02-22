import{p as N,m as $,c as W,g as H,l as _,o as v,ap as oe,aq as ue,b as ie,d as re,u as O,t as L,ar as se,as as ce,f as ve,a8 as de,a9 as me,ab as k,z as g,at as ge,R as Ee,ag as z,ai as A,au as Me,A as X,av as pe,ac as I,Y as F,aw as q,ax as he,af as fe,ay as D,az as ye,q as Y,aA as Ce,aB as Ie,L as Pe,aC as Ne,aD as He,aE as _e,y as Re,aF as Ae,aG as Le,aH as Ye,aI as De,aJ as $e,H as We,Z as ze}from"./index-4c6fc963.js";import{u as U}from"./ssrBoot-1ca997ca.js";const be=N({text:String,...$(),...W()},"VToolbarTitle"),we=H()({name:"VToolbarTitle",props:be(),setup(e,u){let{slots:a}=u;return _(()=>{const o=!!(a.default||a.text||e.text);return v(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[o&&v("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),Oe=[null,"prominent","default","comfortable","compact"],Se=N({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Oe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...oe(),...$(),...ue(),...ie(),...W({tag:"header"}),...re()},"VToolbar"),ae=H()({name:"VToolbar",props:Se(),setup(e,u){var i;let{slots:a}=u;const{backgroundColorClasses:o,backgroundColorStyles:l}=O(L(e,"color")),{borderClasses:t}=se(e),{elevationClasses:d}=ce(e),{roundedClasses:b}=ve(e),{themeClasses:S}=de(e),{rtlClasses:f}=me(),n=k(!!(e.extended||(i=a.extension)!=null&&i.call(a))),m=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),r=g(()=>n.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ge({VBtn:{variant:"text"}}),_(()=>{var h;const T=!!(e.title||a.title),w=!!(a.image||e.image),C=(h=a.extension)==null?void 0:h.call(a);return n.value=!!(e.extended||C),v(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,t.value,d.value,b.value,S.value,f.value,e.class],style:[l.value,e.style]},{default:()=>[w&&v("div",{key:"image",class:"v-toolbar__image"},[a.image?v(z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):v(Ee,{key:"image-img",cover:!0,src:e.image},null)]),v(z,{defaults:{VTabs:{height:A(m.value)}}},{default:()=>{var B,x,M;return[v("div",{class:"v-toolbar__content",style:{height:A(m.value)}},[a.prepend&&v("div",{class:"v-toolbar__prepend"},[(B=a.prepend)==null?void 0:B.call(a)]),T&&v(we,{key:"title",text:e.title},{text:a.title}),(x=a.default)==null?void 0:x.call(a),a.append&&v("div",{class:"v-toolbar__append"},[(M=a.append)==null?void 0:M.call(a)])])]}}),v(z,{defaults:{VTabs:{height:A(r.value)}}},{default:()=>[v(Me,null,{default:()=>[n.value&&v("div",{class:"v-toolbar__extension",style:{height:A(r.value)}},[C])]})]})]})}),{contentHeight:m,extensionHeight:r}}}),Xe=N({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Fe(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=u;let o=0;const l=X(null),t=k(0),d=k(0),b=k(0),S=k(!1),f=k(!1),n=g(()=>Number(e.scrollThreshold)),m=g(()=>pe((n.value-t.value)/n.value||0)),r=()=>{const i=l.value;!i||a&&!a.value||(o=t.value,t.value="window"in i?i.pageYOffset:i.scrollTop,f.value=t.value<o,b.value=Math.abs(t.value-n.value))};return I(f,()=>{d.value=d.value||t.value}),I(S,()=>{d.value=0}),F(()=>{I(()=>e.scrollTarget,i=>{var w;const T=i?document.querySelector(i):window;T&&T!==l.value&&((w=l.value)==null||w.removeEventListener("scroll",r),l.value=T,l.value.addEventListener("scroll",r,{passive:!0}))},{immediate:!0})}),q(()=>{var i;(i=l.value)==null||i.removeEventListener("scroll",r)}),a&&I(a,r,{immediate:!0}),{scrollThreshold:n,currentScroll:t,currentThreshold:b,isScrollActive:S,scrollRatio:m,isScrollingUp:f,savedScroll:d}}const qe=N({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Se(),...he(),...Xe(),height:{type:[Number,String],default:64}},"VAppBar"),ot=H()({name:"VAppBar",props:qe(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:a}=u;const o=X(),l=fe(e,"modelValue"),t=g(()=>{var B;const h=new Set(((B=e.scrollBehavior)==null?void 0:B.split(" "))??[]);return{hide:h.has("hide"),inverted:h.has("inverted"),collapse:h.has("collapse"),elevate:h.has("elevate"),fadeImage:h.has("fade-image")}}),d=g(()=>{const h=t.value;return h.hide||h.inverted||h.collapse||h.elevate||h.fadeImage||!l.value}),{currentScroll:b,scrollThreshold:S,isScrollingUp:f,scrollRatio:n}=Fe(e,{canScroll:d}),m=g(()=>e.collapse||t.value.collapse&&(t.value.inverted?n.value>0:n.value===0)),r=g(()=>e.flat||t.value.elevate&&(t.value.inverted?b.value>0:b.value===0)),i=g(()=>t.value.fadeImage?t.value.inverted?1-n.value:n.value:void 0),T=g(()=>{var x,M;if(t.value.hide&&t.value.inverted)return 0;const h=((x=o.value)==null?void 0:x.contentHeight)??0,B=((M=o.value)==null?void 0:M.extensionHeight)??0;return h+B});D(g(()=>!!e.scrollBehavior),()=>{Ce(()=>{t.value.hide?t.value.inverted?l.value=b.value>S.value:l.value=f.value||b.value<S.value:l.value=!0})});const{ssrBootStyles:w}=U(),{layoutItemStyles:C}=ye({id:e.name,order:g(()=>parseInt(e.order,10)),position:L(e,"location"),layoutSize:T,elementSize:k(void 0),active:l,absolute:L(e,"absolute")});return _(()=>{const h=ae.filterProps(e);return v(ae,Y({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":i.value,height:void 0,...w.value},e.style]},h,{collapse:m.value,flat:r.value}),a)}),{}}}),Ue=N({...Ie({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ut=H()({name:"VAppBarNavIcon",props:Ue(),setup(e,u){let{slots:a}=u;return _(()=>v(Pe,Y(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),it=H()({name:"VAppBarTitle",props:be(),setup(e,u){let{slots:a}=u;return _(()=>v(we,Y(e,{class:"v-app-bar-title"}),a)),{}}});const Ze=N({scrollable:Boolean,...$(),...W({tag:"main"})},"VMain"),rt=H()({name:"VMain",props:Ze(),setup(e,u){let{slots:a}=u;const{mainStyles:o}=Ne(),{ssrBootStyles:l}=U();return _(()=>v(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,l.value,e.style]},{default:()=>{var t,d;return[e.scrollable?v("div",{class:"v-main__scroller"},[(t=a.default)==null?void 0:t.call(a)]):(d=a.default)==null?void 0:d.call(a)]}})),{}}});function Ge(e){let{rootEl:u,isSticky:a,layoutItemStyles:o}=e;const l=k(!1),t=k(0),d=g(()=>{const f=typeof l.value=="boolean"?"top":l.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[f]:A(t.value)}:{top:o.value.top}]});F(()=>{I(a,f=>{f?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),q(()=>{window.removeEventListener("scroll",S)});let b=0;function S(){const f=b>window.scrollY?"up":"down",n=u.value.getBoundingClientRect(),m=parseFloat(o.value.top??0),r=window.scrollY-Math.max(0,t.value-m),i=n.height+Math.max(t.value,m)-window.scrollY-window.innerHeight,T=parseFloat(getComputedStyle(u.value).getPropertyValue("--v-body-scroll-y"))||0;n.height<window.innerHeight-m?(l.value="top",t.value=m):f==="up"&&l.value==="bottom"||f==="down"&&l.value==="top"?(t.value=window.scrollY+n.top-T,l.value=!0):f==="down"&&i<=0?(t.value=0,l.value="bottom"):f==="up"&&r<=0&&(T?l.value!=="top"&&(t.value=-r+T+m,l.value="top"):(t.value=n.top+r,l.value="top")),b=window.scrollY}return{isStuck:l,stickyStyles:d}}const Je=100,je=20;function le(e){const u=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*u}function ne(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let u=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const o=le(u),l=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);u+=(l-o)*Math.abs(l),a===e.length-1&&(u*=.5)}return le(u)*1e3}function Ke(){const e={};function u(l){Array.from(l.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new He(je))).push([l.timeStamp,t])})}function a(l){Array.from(l.changedTouches).forEach(t=>{delete e[t.identifier]})}function o(l){var f;const t=(f=e[l])==null?void 0:f.values().reverse();if(!t)throw new Error(`No samples for touch id ${l}`);const d=t[0],b=[],S=[];for(const n of t){if(d[0]-n[0]>Je)break;b.push({t:n[0],d:n[1].clientX}),S.push({t:n[0],d:n[1].clientY})}return{x:ne(b),y:ne(S),get direction(){const{x:n,y:m}=this,[r,i]=[Math.abs(n),Math.abs(m)];return r>i&&n>=0?"right":r>i&&n<=0?"left":i>r&&m>=0?"down":i>r&&m<=0?"up":Qe()}}}return{addMovement:u,endTouch:a,getVelocity:o}}function Qe(){throw new Error}function et(e){let{isActive:u,isTemporary:a,width:o,touchless:l,position:t}=e;F(()=>{window.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",x,{passive:!0})}),q(()=>{window.removeEventListener("touchstart",h),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",x)});const d=g(()=>["left","right"].includes(t.value)),{addMovement:b,endTouch:S,getVelocity:f}=Ke();let n=!1;const m=k(!1),r=k(0),i=k(0);let T;function w(c,s){return(t.value==="left"?c:t.value==="right"?document.documentElement.clientWidth-c:t.value==="top"?c:t.value==="bottom"?document.documentElement.clientHeight-c:R())-(s?o.value:0)}function C(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const y=t.value==="left"?(c-i.value)/o.value:t.value==="right"?(document.documentElement.clientWidth-c-i.value)/o.value:t.value==="top"?(c-i.value)/o.value:t.value==="bottom"?(document.documentElement.clientHeight-c-i.value)/o.value:R();return s?Math.max(0,Math.min(1,y)):y}function h(c){if(l.value)return;const s=c.changedTouches[0].clientX,y=c.changedTouches[0].clientY,V=25,p=t.value==="left"?s<V:t.value==="right"?s>document.documentElement.clientWidth-V:t.value==="top"?y<V:t.value==="bottom"?y>document.documentElement.clientHeight-V:R(),P=u.value&&(t.value==="left"?s<o.value:t.value==="right"?s>document.documentElement.clientWidth-o.value:t.value==="top"?y<o.value:t.value==="bottom"?y>document.documentElement.clientHeight-o.value:R());(p||P||u.value&&a.value)&&(n=!0,T=[s,y],i.value=w(d.value?s:y,u.value),r.value=C(d.value?s:y),S(c),b(c))}function B(c){const s=c.changedTouches[0].clientX,y=c.changedTouches[0].clientY;if(n){if(!c.cancelable){n=!1;return}const p=Math.abs(s-T[0]),P=Math.abs(y-T[1]);(d.value?p>P&&p>3:P>p&&P>3)?(m.value=!0,n=!1):(d.value?P:p)>3&&(n=!1)}if(!m.value)return;c.preventDefault(),b(c);const V=C(d.value?s:y,!1);r.value=Math.max(0,Math.min(1,V)),V>1?i.value=w(d.value?s:y,!0):V<0&&(i.value=w(d.value?s:y,!1))}function x(c){if(n=!1,!m.value)return;b(c),m.value=!1;const s=f(c.changedTouches[0].identifier),y=Math.abs(s.x),V=Math.abs(s.y);(d.value?y>V&&y>400:V>y&&V>3)?u.value=s.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||R()):u.value=r.value>.5}const M=g(()=>m.value?{transform:t.value==="left"?`translateX(calc(-100% + ${r.value*o.value}px))`:t.value==="right"?`translateX(calc(100% - ${r.value*o.value}px))`:t.value==="top"?`translateY(calc(-100% + ${r.value*o.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${r.value*o.value}px))`:R(),transition:"none"}:void 0);return{isDragging:m,dragProgress:r,dragStyles:M}}function R(){throw new Error}const tt=["start","end","left","right","top","bottom"],at=N({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>tt.includes(e)},sticky:Boolean,...oe(),...$(),..._e(),...ue(),...he(),...ie(),...W({tag:"nav"}),...re()},"VNavigationDrawer"),st=H()({name:"VNavigationDrawer",props:at(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,u){let{attrs:a,emit:o,slots:l}=u;const{isRtl:t}=me(),{themeClasses:d}=de(e),{borderClasses:b}=se(e),{backgroundColorClasses:S,backgroundColorStyles:f}=O(L(e,"color")),{elevationClasses:n}=ce(e),{displayClasses:m,mobile:r}=Re(e),{roundedClasses:i}=ve(e),T=Ae(),w=fe(e,"modelValue",null,E=>!!E),{ssrBootStyles:C}=U(),{scopeId:h}=Le(),B=X(),x=k(!1),M=g(()=>e.rail&&e.expandOnHover&&x.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),c=g(()=>Ye(e.location,t.value)),s=g(()=>!e.permanent&&(r.value||e.temporary)),y=g(()=>e.sticky&&!s.value&&c.value!=="bottom");D(()=>e.expandOnHover&&e.rail!=null,()=>{I(x,E=>o("update:rail",!E))}),D(()=>!e.disableResizeWatcher,()=>{I(s,E=>!e.permanent&&ze(()=>w.value=!E))}),D(()=>!e.disableRouteWatcher&&!!T,()=>{I(T.currentRoute,()=>s.value&&(w.value=!1))}),I(()=>e.permanent,E=>{E&&(w.value=!0)}),De(()=>{e.modelValue!=null||s.value||(w.value=e.permanent||!r.value)});const{isDragging:V,dragProgress:p,dragStyles:P}=et({isActive:w,isTemporary:s,width:M,touchless:L(e,"touchless"),position:c}),Z=g(()=>{const E=s.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):M.value;return V.value?E*p.value:E}),{layoutItemStyles:G,layoutItemScrimStyles:Te}=ye({id:e.name,order:g(()=>parseInt(e.order,10)),position:c,layoutSize:Z,elementSize:M,active:g(()=>w.value||V.value),disableTransitions:g(()=>V.value),absolute:g(()=>e.absolute||y.value&&typeof J.value!="string")}),{isStuck:J,stickyStyles:Ve}=Ge({rootEl:B,isSticky:y,layoutItemStyles:G}),j=O(g(()=>typeof e.scrim=="string"?e.scrim:null)),xe=g(()=>({...V.value?{opacity:p.value*.2,transition:"none"}:void 0,...Te.value}));ge({VList:{bgColor:"transparent"}});function Be(){x.value=!0}function ke(){x.value=!1}return _(()=>{const E=l.image||e.image;return v(We,null,[v(e.tag,Y({ref:B,onMouseenter:Be,onMouseleave:ke,class:["v-navigation-drawer",`v-navigation-drawer--${c.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":x.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":s.value,"v-navigation-drawer--active":w.value,"v-navigation-drawer--sticky":y.value},d.value,S.value,b.value,m.value,n.value,i.value,e.class],style:[f.value,G.value,P.value,C.value,Ve.value,e.style]},h,a),{default:()=>{var K,Q,ee,te;return[E&&v("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(K=l.image)==null?void 0:K.call(l,{image:e.image}):v("img",{src:e.image,alt:""},null)]),l.prepend&&v("div",{class:"v-navigation-drawer__prepend"},[(Q=l.prepend)==null?void 0:Q.call(l)]),v("div",{class:"v-navigation-drawer__content"},[(ee=l.default)==null?void 0:ee.call(l)]),l.append&&v("div",{class:"v-navigation-drawer__append"},[(te=l.append)==null?void 0:te.call(l)])]}}),v($e,{name:"fade-transition"},{default:()=>[s.value&&(V.value||w.value)&&!!e.scrim&&v("div",Y({class:["v-navigation-drawer__scrim",j.backgroundColorClasses.value],style:[xe.value,j.backgroundColorStyles.value],onClick:()=>w.value=!1},h),null)]})])}),{isStuck:J}}});export{st as V,ot as a,rt as b,it as c,ut as d};
