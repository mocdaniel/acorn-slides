function On(e,n){const t=Object.create(null),l=e.split(",");for(let a=0;a<l.length;a++)t[l[a]]=!0;return n?a=>!!t[a.toLowerCase()]:a=>!!t[a]}function Zs(e){if(is(e)){const n={};for(let t=0;t<e.length;t++){const l=e[t],a=Gs(l)?hd(l):Zs(l);if(a)for(const r in a)n[r]=a[r]}return n}else{if(Gs(e))return e;if(xs(e))return e}}const ud=/;(?![^(]*\))/g,yd=/:([^]+)/,fd=/\/\*.*?\*\//gs;function hd(e){const n={};return e.replace(fd,"").split(ud).forEach(t=>{if(t){const l=t.split(yd);l.length>1&&(n[l[0].trim()]=l[1].trim())}}),n}function Ms(e){let n="";if(Gs(e))n=e;else if(is(e))for(let t=0;t<e.length;t++){const l=Ms(e[t]);l&&(n+=l+" ")}else if(xs(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function ts(e){if(!e)return null;let{class:n,style:t}=e;return n&&!Gs(n)&&(e.class=Ms(n)),t&&(e.style=Zs(t)),e}const md="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",gd="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Ad=On(md),_d=On(gd),Bd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dd=On(Bd);function zc(e){return!!e||e===""}const Zn=e=>Gs(e)?e:e==null?"":is(e)||xs(e)&&(e.toString===Jc||!us(e.toString))?JSON.stringify(e,Yc,2):String(e),Yc=(e,n)=>n&&n.__v_isRef?Yc(e,n.value):Mn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[l,a])=>(t[`${l} =>`]=a,t),{})}:Zc(n)?{[`Set(${n.size})`]:[...n.values()]}:xs(n)&&!is(n)&&!Xc(n)?String(n):n,Us=Object.freeze({}),gt=Object.freeze([]),he=()=>{},Qc=()=>!1,bd=/^on[^a-z]/,uo=e=>bd.test(e),Io=e=>e.startsWith("onUpdate:"),Ws=Object.assign,ma=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},vd=Object.prototype.hasOwnProperty,Bs=(e,n)=>vd.call(e,n),is=Array.isArray,Mn=e=>Xo(e)==="[object Map]",Zc=e=>Xo(e)==="[object Set]",us=e=>typeof e=="function",Gs=e=>typeof e=="string",ga=e=>typeof e=="symbol",xs=e=>e!==null&&typeof e=="object",Aa=e=>xs(e)&&us(e.then)&&us(e.catch),Jc=Object.prototype.toString,Xo=e=>Jc.call(e),_a=e=>Xo(e).slice(8,-1),Xc=e=>Xo(e)==="[object Object]",Ba=e=>Gs(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,So=On(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cd=On("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),sl=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},kd=/-(\w)/g,ze=sl(e=>e.replace(kd,(n,t)=>t?t.toUpperCase():"")),Ed=/\B([A-Z])/g,cn=sl(e=>e.replace(Ed,"-$1").toLowerCase()),Jn=sl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rn=sl(e=>e?`on${Jn(e)}`:""),Qt=(e,n)=>!Object.is(e,n),Bn=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},Ho=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Zt=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let ar;const si=()=>ar||(ar=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function No(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let _e;class ei{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=_e,!n&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}run(n){if(this.active){const t=_e;try{return _e=this,n()}finally{_e=t}}else No("cannot run an inactive effect scope.")}on(){_e=this}off(){_e=this.parent}stop(n){if(this.active){let t,l;for(t=0,l=this.effects.length;t<l;t++)this.effects[t].stop();for(t=0,l=this.cleanups.length;t<l;t++)this.cleanups[t]();if(this.scopes)for(t=0,l=this.scopes.length;t<l;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function fE(e){return new ei(e)}function wd(e,n=_e){n&&n.active&&n.effects.push(e)}function Sd(){return _e}function xd(e){_e?_e.cleanups.push(e):No("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Da=e=>{const n=new Set(e);return n.w=0,n.n=0,n},ni=e=>(e.w&wn)>0,ti=e=>(e.n&wn)>0,Fd=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=wn},Od=e=>{const{deps:n}=e;if(n.length){let t=0;for(let l=0;l<n.length;l++){const a=n[l];ni(a)&&!ti(a)?a.delete(e):n[t++]=a,a.w&=~wn,a.n&=~wn}n.length=t}},Rl=new WeakMap;let Nt=0,wn=1;const Ul=30;let pe;const Kn=Symbol("iterate"),Il=Symbol("Map key iterate");class ba{constructor(n,t=null,l){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,wd(this,l)}run(){if(!this.active)return this.fn();let n=pe,t=bn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=pe,pe=this,bn=!0,wn=1<<++Nt,Nt<=Ul?Fd(this):rr(this),this.fn()}finally{Nt<=Ul&&Od(this),wn=1<<--Nt,pe=this.parent,bn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pe===this?this.deferStop=!0:this.active&&(rr(this),this.onStop&&this.onStop(),this.active=!1)}}function rr(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let bn=!0;const oi=[];function tt(){oi.push(bn),bn=!1}function ot(){const e=oi.pop();bn=e===void 0?!0:e}function be(e,n,t){if(bn&&pe){let l=Rl.get(e);l||Rl.set(e,l=new Map);let a=l.get(t);a||l.set(t,a=Da()),li(a,{effect:pe,target:e,type:n,key:t})}}function li(e,n){let t=!1;Nt<=Ul?ti(e)||(e.n|=wn,t=!ni(e)):t=!e.has(pe),t&&(e.add(pe),pe.deps.push(e),pe.onTrack&&pe.onTrack(Object.assign({effect:pe},n)))}function pn(e,n,t,l,a,r){const c=Rl.get(e);if(!c)return;let i=[];if(n==="clear")i=[...c.values()];else if(t==="length"&&is(e)){const d=Zt(l);c.forEach((u,y)=>{(y==="length"||y>=d)&&i.push(u)})}else switch(t!==void 0&&i.push(c.get(t)),n){case"add":is(e)?Ba(t)&&i.push(c.get("length")):(i.push(c.get(Kn)),Mn(e)&&i.push(c.get(Il)));break;case"delete":is(e)||(i.push(c.get(Kn)),Mn(e)&&i.push(c.get(Il)));break;case"set":Mn(e)&&i.push(c.get(Kn));break}const p={target:e,type:n,key:t,newValue:l,oldValue:a,oldTarget:r};if(i.length===1)i[0]&&Hl(i[0],p);else{const d=[];for(const u of i)u&&d.push(...u);Hl(Da(d),p)}}function Hl(e,n){const t=is(e)?e:[...e];for(const l of t)l.computed&&cr(l,n);for(const l of t)l.computed||cr(l,n)}function cr(e,n){(e!==pe||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ws({effect:e},n)),e.scheduler?e.scheduler():e.run())}const Td=On("__proto__,__v_isRef,__isVue"),ai=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ga)),$d=el(),Pd=el(!1,!0),Rd=el(!0),Ud=el(!0,!0),ir=Id();function Id(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const l=ms(this);for(let r=0,c=this.length;r<c;r++)be(l,"get",r+"");const a=l[n](...t);return a===-1||a===!1?l[n](...t.map(ms)):a}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){tt();const l=ms(this)[n].apply(this,t);return ot(),l}}),e}function el(e=!1,n=!1){return function(l,a,r){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return n;if(a==="__v_raw"&&r===(e?n?fi:yi:n?ui:di).get(l))return l;const c=is(l);if(!e&&c&&Bs(ir,a))return Reflect.get(ir,a,r);const i=Reflect.get(l,a,r);return(ga(a)?ai.has(a):Td(a))||(e||be(l,"get",a),n)?i:Es(i)?c&&Ba(a)?i:i.value:xs(i)?e?Ve(i):se(i):i}}const Hd=ri(),Nd=ri(!0);function ri(e=!1){return function(t,l,a,r){let c=t[l];if(Sn(c)&&Es(c)&&!Es(a))return!1;if(!e&&(!Lo(a)&&!Sn(a)&&(c=ms(c),a=ms(a)),!is(t)&&Es(c)&&!Es(a)))return c.value=a,!0;const i=is(t)&&Ba(l)?Number(l)<t.length:Bs(t,l),p=Reflect.set(t,l,a,r);return t===ms(r)&&(i?Qt(a,c)&&pn(t,"set",l,a,c):pn(t,"add",l,a)),p}}function Ld(e,n){const t=Bs(e,n),l=e[n],a=Reflect.deleteProperty(e,n);return a&&t&&pn(e,"delete",n,void 0,l),a}function Gd(e,n){const t=Reflect.has(e,n);return(!ga(n)||!ai.has(n))&&be(e,"has",n),t}function Md(e){return be(e,"iterate",is(e)?"length":Kn),Reflect.ownKeys(e)}const ci={get:$d,set:Hd,deleteProperty:Ld,has:Gd,ownKeys:Md},ii={get:Rd,set(e,n){return No(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0},deleteProperty(e,n){return No(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}},Kd=Ws({},ci,{get:Pd,set:Nd}),Wd=Ws({},ii,{get:Ud}),va=e=>e,nl=e=>Reflect.getPrototypeOf(e);function _o(e,n,t=!1,l=!1){e=e.__v_raw;const a=ms(e),r=ms(n);t||(n!==r&&be(a,"get",n),be(a,"get",r));const{has:c}=nl(a),i=l?va:t?ka:Jt;if(c.call(a,n))return i(e.get(n));if(c.call(a,r))return i(e.get(r));e!==a&&e.get(n)}function Bo(e,n=!1){const t=this.__v_raw,l=ms(t),a=ms(e);return n||(e!==a&&be(l,"has",e),be(l,"has",a)),e===a?t.has(e):t.has(e)||t.has(a)}function Do(e,n=!1){return e=e.__v_raw,!n&&be(ms(e),"iterate",Kn),Reflect.get(e,"size",e)}function pr(e){e=ms(e);const n=ms(this);return nl(n).has.call(n,e)||(n.add(e),pn(n,"add",e,e)),this}function dr(e,n){n=ms(n);const t=ms(this),{has:l,get:a}=nl(t);let r=l.call(t,e);r?pi(t,l,e):(e=ms(e),r=l.call(t,e));const c=a.call(t,e);return t.set(e,n),r?Qt(n,c)&&pn(t,"set",e,n,c):pn(t,"add",e,n),this}function ur(e){const n=ms(this),{has:t,get:l}=nl(n);let a=t.call(n,e);a?pi(n,t,e):(e=ms(e),a=t.call(n,e));const r=l?l.call(n,e):void 0,c=n.delete(e);return a&&pn(n,"delete",e,void 0,r),c}function yr(){const e=ms(this),n=e.size!==0,t=Mn(e)?new Map(e):new Set(e),l=e.clear();return n&&pn(e,"clear",void 0,void 0,t),l}function bo(e,n){return function(l,a){const r=this,c=r.__v_raw,i=ms(c),p=n?va:e?ka:Jt;return!e&&be(i,"iterate",Kn),c.forEach((d,u)=>l.call(a,p(d),p(u),r))}}function vo(e,n,t){return function(...l){const a=this.__v_raw,r=ms(a),c=Mn(r),i=e==="entries"||e===Symbol.iterator&&c,p=e==="keys"&&c,d=a[e](...l),u=t?va:n?ka:Jt;return!n&&be(r,"iterate",p?Il:Kn),{next(){const{value:y,done:f}=d.next();return f?{value:y,done:f}:{value:i?[u(y[0]),u(y[1])]:u(y),done:f}},[Symbol.iterator](){return this}}}}function yn(e){return function(...n){{const t=n[0]?`on key "${n[0]}" `:"";console.warn(`${Jn(e)} operation ${t}failed: target is readonly.`,ms(this))}return e==="delete"?!1:this}}function Vd(){const e={get(r){return _o(this,r)},get size(){return Do(this)},has:Bo,add:pr,set:dr,delete:ur,clear:yr,forEach:bo(!1,!1)},n={get(r){return _o(this,r,!1,!0)},get size(){return Do(this)},has:Bo,add:pr,set:dr,delete:ur,clear:yr,forEach:bo(!1,!0)},t={get(r){return _o(this,r,!0)},get size(){return Do(this,!0)},has(r){return Bo.call(this,r,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:bo(!0,!1)},l={get(r){return _o(this,r,!0,!0)},get size(){return Do(this,!0)},has(r){return Bo.call(this,r,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=vo(r,!1,!1),t[r]=vo(r,!0,!1),n[r]=vo(r,!1,!0),l[r]=vo(r,!0,!0)}),[e,t,n,l]}const[jd,qd,zd,Yd]=Vd();function tl(e,n){const t=n?e?Yd:zd:e?qd:jd;return(l,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?l:Reflect.get(Bs(t,a)&&a in l?t:l,a,r)}const Qd={get:tl(!1,!1)},Zd={get:tl(!1,!0)},Jd={get:tl(!0,!1)},Xd={get:tl(!0,!0)};function pi(e,n,t){const l=ms(t);if(l!==t&&n.call(e,l)){const a=_a(e);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const di=new WeakMap,ui=new WeakMap,yi=new WeakMap,fi=new WeakMap;function su(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eu(e){return e.__v_skip||!Object.isExtensible(e)?0:su(_a(e))}function se(e){return Sn(e)?e:ol(e,!1,ci,Qd,di)}function nu(e){return ol(e,!1,Kd,Zd,ui)}function Ve(e){return ol(e,!0,ii,Jd,yi)}function ht(e){return ol(e,!0,Wd,Xd,fi)}function ol(e,n,t,l,a){if(!xs(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=a.get(e);if(r)return r;const c=eu(e);if(c===0)return e;const i=new Proxy(e,c===2?l:t);return a.set(e,i),i}function Wn(e){return Sn(e)?Wn(e.__v_raw):!!(e&&e.__v_isReactive)}function Sn(e){return!!(e&&e.__v_isReadonly)}function Lo(e){return!!(e&&e.__v_isShallow)}function Go(e){return Wn(e)||Sn(e)}function ms(e){const n=e&&e.__v_raw;return n?ms(n):e}function Ca(e){return Ho(e,"__v_skip",!0),e}const Jt=e=>xs(e)?se(e):e,ka=e=>xs(e)?Ve(e):e;function Ea(e){bn&&pe&&(e=ms(e),li(e.dep||(e.dep=Da()),{target:e,type:"get",key:"value"}))}function wa(e,n){e=ms(e),e.dep&&Hl(e.dep,{target:e,type:"set",key:"value",newValue:n})}function Es(e){return!!(e&&e.__v_isRef===!0)}function as(e){return hi(e,!1)}function Ye(e){return hi(e,!0)}function hi(e,n){return Es(e)?e:new tu(e,n)}class tu{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:ms(n),this._value=t?n:Jt(n)}get value(){return Ea(this),this._value}set value(n){const t=this.__v_isShallow||Lo(n)||Sn(n);n=t?n:ms(n),Qt(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:Jt(n),wa(this,n))}}function v(e){return Es(e)?e.value:e}const ou={get:(e,n,t)=>v(Reflect.get(e,n,t)),set:(e,n,t,l)=>{const a=e[n];return Es(a)&&!Es(t)?(a.value=t,!0):Reflect.set(e,n,t,l)}};function mi(e){return Wn(e)?e:new Proxy(e,ou)}class lu{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:l}=n(()=>Ea(this),()=>wa(this));this._get=t,this._set=l}get value(){return this._get()}set value(n){this._set(n)}}function gi(e){return new lu(e)}function au(e){Go(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=is(e)?new Array(e.length):{};for(const t in e)n[t]=cu(e,t);return n}class ru{constructor(n,t,l){this._object=n,this._key=t,this._defaultValue=l,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function cu(e,n,t){const l=e[n];return Es(l)?l:new ru(e,n,t)}var Ai;class iu{constructor(n,t,l,a){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ai]=!1,this._dirty=!0,this.effect=new ba(n,()=>{this._dirty||(this._dirty=!0,wa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=l}get value(){const n=ms(this);return Ea(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Ai="__v_isReadonly";function pu(e,n,t=!1){let l,a;const r=us(e);r?(l=e,a=()=>{console.warn("Write operation failed: computed value is readonly")}):(l=e.get,a=e.set);const c=new iu(l,a,r||!a,t);return n&&!t&&(c.effect.onTrack=n.onTrack,c.effect.onTrigger=n.onTrigger),c}const Vn=[];function xo(e){Vn.push(e)}function Fo(){Vn.pop()}function P(e,...n){tt();const t=Vn.length?Vn[Vn.length-1].component:null,l=t&&t.appContext.config.warnHandler,a=du();if(l)rn(l,t,11,[e+n.join(""),t&&t.proxy,a.map(({vnode:r})=>`at <${fl(t,r.type)}>`).join(`
`),a]);else{const r=[`[Vue warn]: ${e}`,...n];a.length&&r.push(`
`,...uu(a)),console.warn(...r)}ot()}function du(){let e=Vn[Vn.length-1];if(!e)return[];const n=[];for(;e;){const t=n[0];t&&t.vnode===e?t.recurseCount++:n.push({vnode:e,recurseCount:0});const l=e.component&&e.component.parent;e=l&&l.vnode}return n}function uu(e){const n=[];return e.forEach((t,l)=>{n.push(...l===0?[]:[`
`],...yu(t))}),n}function yu({vnode:e,recurseCount:n}){const t=n>0?`... (${n} recursive calls)`:"",l=e.component?e.component.parent==null:!1,a=` at <${fl(e.component,e.type,l)}`,r=">"+t;return e.props?[a,...fu(e.props),r]:[a+r]}function fu(e){const n=[],t=Object.keys(e);return t.slice(0,3).forEach(l=>{n.push(..._i(l,e[l]))}),t.length>3&&n.push(" ..."),n}function _i(e,n,t){return Gs(n)?(n=JSON.stringify(n),t?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?t?n:[`${e}=${n}`]:Es(n)?(n=_i(e,ms(n.value),!0),t?n:[`${e}=Ref<`,n,">"]):us(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=ms(n),t?n:[`${e}=`,n])}const Sa={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function rn(e,n,t,l){let a;try{a=l?e(...l):e()}catch(r){ll(r,n,t)}return a}function Se(e,n,t,l){if(us(e)){const r=rn(e,n,t,l);return r&&Aa(r)&&r.catch(c=>{ll(c,n,t)}),r}const a=[];for(let r=0;r<e.length;r++)a.push(Se(e[r],n,t,l));return a}function ll(e,n,t,l=!0){const a=n?n.vnode:null;if(n){let r=n.parent;const c=n.proxy,i=Sa[t];for(;r;){const d=r.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,c,i)===!1)return}r=r.parent}const p=n.appContext.config.errorHandler;if(p){rn(p,null,10,[e,c,i]);return}}hu(e,t,a,l)}function hu(e,n,t,l=!0){{const a=Sa[n];if(t&&xo(t),P(`Unhandled error${a?` during execution of ${a}`:""}`),t&&Fo(),l)throw e;console.error(e)}}let Xt=!1,Nl=!1;const te=[];let Ke=0;const At=[];let Me=null,gn=0;const Bi=Promise.resolve();let xa=null;const mu=100;function Ie(e){const n=xa||Bi;return e?n.then(this?e.bind(this):e):n}function gu(e){let n=Ke+1,t=te.length;for(;n<t;){const l=n+t>>>1;so(te[l])<e?n=l+1:t=l}return n}function al(e){(!te.length||!te.includes(e,Xt&&e.allowRecurse?Ke+1:Ke))&&(e.id==null?te.push(e):te.splice(gu(e.id),0,e),Di())}function Di(){!Xt&&!Nl&&(Nl=!0,xa=Bi.then(Ci))}function Au(e){const n=te.indexOf(e);n>Ke&&te.splice(n,1)}function bi(e){is(e)?At.push(...e):(!Me||!Me.includes(e,e.allowRecurse?gn+1:gn))&&At.push(e),Di()}function fr(e,n=Xt?Ke+1:0){for(e=e||new Map;n<te.length;n++){const t=te[n];if(t&&t.pre){if(Fa(e,t))continue;te.splice(n,1),n--,t()}}}function vi(e){if(At.length){const n=[...new Set(At)];if(At.length=0,Me){Me.push(...n);return}for(Me=n,e=e||new Map,Me.sort((t,l)=>so(t)-so(l)),gn=0;gn<Me.length;gn++)Fa(e,Me[gn])||Me[gn]();Me=null,gn=0}}const so=e=>e.id==null?1/0:e.id,_u=(e,n)=>{const t=so(e)-so(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Ci(e){Nl=!1,Xt=!0,e=e||new Map,te.sort(_u);const n=t=>Fa(e,t);try{for(Ke=0;Ke<te.length;Ke++){const t=te[Ke];if(t&&t.active!==!1){if(n(t))continue;rn(t,null,14)}}}finally{Ke=0,te.length=0,vi(e),Xt=!1,xa=null,(te.length||At.length)&&Ci(e)}}function Fa(e,n){if(!e.has(n))e.set(n,1);else{const t=e.get(n);if(t>mu){const l=n.ownerInstance,a=l&&oo(l.type);return P(`Maximum recursive updates exceeded${a?` in component <${a}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(n,t+1)}}let vn=!1;const ut=new Set;si().__VUE_HMR_RUNTIME__={createRecord:gl(ki),rerender:gl(bu),reload:gl(vu)};const Xn=new Map;function Bu(e){const n=e.type.__hmrId;let t=Xn.get(n);t||(ki(n,e.type),t=Xn.get(n)),t.instances.add(e)}function Du(e){Xn.get(e.type.__hmrId).instances.delete(e)}function ki(e,n){return Xn.has(e)?!1:(Xn.set(e,{initialDef:Kt(n),instances:new Set}),!0)}function Kt(e){return tp(e)?e.__vccOpts:e}function bu(e,n){const t=Xn.get(e);t&&(t.initialDef.render=n,[...t.instances].forEach(l=>{n&&(l.render=n,Kt(l.type).render=n),l.renderCache=[],vn=!0,l.update(),vn=!1}))}function vu(e,n){const t=Xn.get(e);if(!t)return;n=Kt(n),hr(t.initialDef,n);const l=[...t.instances];for(const a of l){const r=Kt(a.type);ut.has(r)||(r!==t.initialDef&&hr(r,n),ut.add(r)),a.appContext.optionsCache.delete(a.type),a.ceReload?(ut.add(r),a.ceReload(n.styles),ut.delete(r)):a.parent?al(a.parent.update):a.appContext.reload?a.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}bi(()=>{for(const a of l)ut.delete(Kt(a.type))})}function hr(e,n){Ws(e,n);for(const t in e)t!=="__file"&&!(t in n)&&delete e[t]}function gl(e){return(n,t)=>{try{return e(n,t)}catch(l){console.error(l),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let We,Lt=[],Ll=!1;function yo(e,...n){We?We.emit(e,...n):Ll||Lt.push({event:e,args:n})}function Ei(e,n){var t,l;We=e,We?(We.enabled=!0,Lt.forEach(({event:a,args:r})=>We.emit(a,...r)),Lt=[]):typeof window<"u"&&window.HTMLElement&&!(!((l=(t=window.navigator)===null||t===void 0?void 0:t.userAgent)===null||l===void 0)&&l.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Ei(r,n)}),setTimeout(()=>{We||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ll=!0,Lt=[])},3e3)):(Ll=!0,Lt=[])}function Cu(e,n){yo("app:init",e,n,{Fragment:Ss,Text:go,Comment:Js,Static:Oo})}function ku(e){yo("app:unmount",e)}const Gl=Oa("component:added"),wi=Oa("component:updated"),Eu=Oa("component:removed"),wu=e=>{We&&typeof We.cleanupBuffer=="function"&&!We.cleanupBuffer(e)&&Eu(e)};function Oa(e){return n=>{yo(e,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Su=Si("perf:start"),xu=Si("perf:end");function Si(e){return(n,t,l)=>{yo(e,n.appContext.app,n.uid,n,t,l)}}function Fu(e,n,t){yo("component:emit",e.appContext.app,e,n,t)}function Ou(e,n,...t){if(e.isUnmounted)return;const l=e.vnode.props||Us;{const{emitsOptions:u,propsOptions:[y]}=e;if(u)if(!(n in u))(!y||!(Rn(n)in y))&&P(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${Rn(n)}" prop.`);else{const f=u[n];us(f)&&(f(...t)||P(`Invalid event arguments: event validation failed for event "${n}".`))}}let a=t;const r=n.startsWith("update:"),c=r&&n.slice(7);if(c&&c in l){const u=`${c==="modelValue"?"model":c}Modifiers`,{number:y,trim:f}=l[u]||Us;f&&(a=t.map(m=>Gs(m)?m.trim():m)),y&&(a=t.map(Zt))}Fu(e,n,a);{const u=n.toLowerCase();u!==n&&l[Rn(u)]&&P(`Event "${u}" is emitted in component ${fl(e,e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${cn(n)}" instead of "${n}".`)}let i,p=l[i=Rn(n)]||l[i=Rn(ze(n))];!p&&r&&(p=l[i=Rn(cn(n))]),p&&Se(p,e,6,a);const d=l[i+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Se(d,e,6,a)}}function xi(e,n,t=!1){const l=n.emitsCache,a=l.get(e);if(a!==void 0)return a;const r=e.emits;let c={},i=!1;if(!us(e)){const p=d=>{const u=xi(d,n,!0);u&&(i=!0,Ws(c,u))};!t&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}return!r&&!i?(xs(e)&&l.set(e,null),null):(is(r)?r.forEach(p=>c[p]=null):Ws(c,r),xs(e)&&l.set(e,c),c)}function rl(e,n){return!e||!uo(n)?!1:(n=n.slice(2).replace(/Once$/,""),Bs(e,n[0].toLowerCase()+n.slice(1))||Bs(e,cn(n))||Bs(e,n))}let Ys=null,cl=null;function Mo(e){const n=Ys;return Ys=e,cl=e&&e.type.__scopeId||null,n}function hE(e){cl=e}function mE(){cl=null}function _(e,n=Ys,t){if(!n||e._n)return e;const l=(...a)=>{l._d&&xr(-1);const r=Mo(n);let c;try{c=e(...a)}finally{Mo(r),l._d&&xr(1)}return wi(n),c};return l._n=!0,l._c=!0,l._d=!0,l}let Ml=!1;function Ko(){Ml=!0}function Al(e){const{type:n,vnode:t,proxy:l,withProxy:a,props:r,propsOptions:[c],slots:i,attrs:p,emit:d,render:u,renderCache:y,data:f,setupState:m,ctx:g,inheritAttrs:B}=e;let D,S;const E=Mo(e);Ml=!1;try{if(t.shapeFlag&4){const V=a||l;D=Pe(u.call(V,V,y,r,m,f,g)),S=p}else{const V=n;p===r&&Ko(),D=Pe(V.length>1?V(r,{get attrs(){return Ko(),p},slots:i,emit:d}):V(r,null)),S=n.props?p:$u(p)}}catch(V){Vt.length=0,ll(V,e,1),D=C(Js)}let x=D,F;if(D.patchFlag>0&&D.patchFlag&2048&&([x,F]=Tu(D)),S&&B!==!1){const V=Object.keys(S),{shapeFlag:j}=x;if(V.length){if(j&7)c&&V.some(Io)&&(S=Pu(S,c)),x=He(x,S);else if(!Ml&&x.type!==Js){const K=Object.keys(p),G=[],ss=[];for(let ls=0,ds=K.length;ls<ds;ls++){const Y=K[ls];uo(Y)?Io(Y)||G.push(Y[2].toLowerCase()+Y.slice(3)):ss.push(Y)}ss.length&&P(`Extraneous non-props attributes (${ss.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),G.length&&P(`Extraneous non-emits event listeners (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return t.dirs&&(mr(x)||P("Runtime directive used on component with non-element root node. The directives will not function as intended."),x=He(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(mr(x)||P("Component inside <Transition> renders non-element root node that cannot be animated."),x.transition=t.transition),F?F(x):D=x,Mo(E),D}const Tu=e=>{const n=e.children,t=e.dynamicChildren,l=Fi(n);if(!l)return[e,void 0];const a=n.indexOf(l),r=t?t.indexOf(l):-1,c=i=>{n[a]=i,t&&(r>-1?t[r]=i:i.patchFlag>0&&(e.dynamicChildren=[...t,i]))};return[Pe(l),c]};function Fi(e){let n;for(let t=0;t<e.length;t++){const l=e[t];if(xn(l)){if(l.type!==Js||l.children==="v-if"){if(n)return;n=l}}else return}return n}const $u=e=>{let n;for(const t in e)(t==="class"||t==="style"||uo(t))&&((n||(n={}))[t]=e[t]);return n},Pu=(e,n)=>{const t={};for(const l in e)(!Io(l)||!(l.slice(9)in n))&&(t[l]=e[l]);return t},mr=e=>e.shapeFlag&7||e.type===Js;function Ru(e,n,t){const{props:l,children:a,component:r}=e,{props:c,children:i,patchFlag:p}=n,d=r.emitsOptions;if((a||i)&&vn||n.dirs||n.transition)return!0;if(t&&p>=0){if(p&1024)return!0;if(p&16)return l?gr(l,c,d):!!c;if(p&8){const u=n.dynamicProps;for(let y=0;y<u.length;y++){const f=u[y];if(c[f]!==l[f]&&!rl(d,f))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:l===c?!1:l?c?gr(l,c,d):!0:!!c;return!1}function gr(e,n,t){const l=Object.keys(n);if(l.length!==Object.keys(e).length)return!0;for(let a=0;a<l.length;a++){const r=l[a];if(n[r]!==e[r]&&!rl(t,r))return!0}return!1}function Uu({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Oi=e=>e.__isSuspense;function Iu(e,n){n&&n.pendingBranch?is(e)?n.effects.push(...e):n.effects.push(e):bi(e)}function Be(e,n){if(!zs)P("provide() can only be used inside setup().");else{let t=zs.provides;const l=zs.parent&&zs.parent.provides;l===t&&(t=zs.provides=Object.create(l)),t[e]=n}}function R(e,n,t=!1){const l=zs||Ys;if(l){const a=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return t&&us(n)?n.call(l.proxy):n;P(`injection "${String(e)}" not found.`)}else P("inject() can only be used inside setup() or functional components.")}function wt(e,n){return Ta(e,null,n)}const Co={};function Ks(e,n,t){return us(n)||P("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ta(e,n,t)}function Ta(e,n,{immediate:t,deep:l,flush:a,onTrack:r,onTrigger:c}=Us){n||(t!==void 0&&P('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),l!==void 0&&P('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=F=>{P("Invalid watch source: ",F,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=zs;let d,u=!1,y=!1;if(Es(e)?(d=()=>e.value,u=Lo(e)):Wn(e)?(d=()=>e,l=!0):is(e)?(y=!0,u=e.some(F=>Wn(F)||Lo(F)),d=()=>e.map(F=>{if(Es(F))return F.value;if(Wn(F))return Ln(F);if(us(F))return rn(F,p,2);i(F)})):us(e)?n?d=()=>rn(e,p,2):d=()=>{if(!(p&&p.isUnmounted))return f&&f(),Se(e,p,3,[m])}:(d=he,i(e)),n&&l){const F=d;d=()=>Ln(F())}let f,m=F=>{f=E.onStop=()=>{rn(F,p,4)}},g;if(to)if(m=he,n?t&&Se(n,p,3,[d(),y?[]:void 0,m]):d(),a==="sync"){const F=Ky();g=F.__watcherHandles||(F.__watcherHandles=[])}else return he;let B=y?new Array(e.length).fill(Co):Co;const D=()=>{if(E.active)if(n){const F=E.run();(l||u||(y?F.some((V,j)=>Qt(V,B[j])):Qt(F,B)))&&(f&&f(),Se(n,p,3,[F,B===Co?void 0:y&&B[0]===Co?[]:B,m]),B=F)}else E.run()};D.allowRecurse=!!n;let S;a==="sync"?S=D:a==="post"?S=()=>Xs(D,p&&p.suspense):(D.pre=!0,p&&(D.id=p.uid),S=()=>al(D));const E=new ba(d,S);E.onTrack=r,E.onTrigger=c,n?t?D():B=E.run():a==="post"?Xs(E.run.bind(E),p&&p.suspense):E.run();const x=()=>{E.stop(),p&&p.scope&&ma(p.scope.effects,E)};return g&&g.push(x),x}function Hu(e,n,t){const l=this.proxy,a=Gs(e)?e.includes(".")?Ti(l,e):()=>l[e]:e.bind(l,l);let r;us(n)?r=n:(r=n.handler,t=n);const c=zs;vt(this);const i=Ta(a,r.bind(l),t);return c?vt(c):qn(),i}function Ti(e,n){const t=n.split(".");return()=>{let l=e;for(let a=0;a<t.length&&l;a++)l=l[t[a]];return l}}function Ln(e,n){if(!xs(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Es(e))Ln(e.value,n);else if(is(e))for(let t=0;t<e.length;t++)Ln(e[t],n);else if(Zc(e)||Mn(e))e.forEach(t=>{Ln(t,n)});else if(Xc(e))for(const t in e)Ln(e[t],n);return e}function $i(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ho(()=>{e.isMounted=!0}),Ra(()=>{e.isUnmounting=!0}),e}const Ce=[Function,Array],Nu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ce,onEnter:Ce,onAfterEnter:Ce,onEnterCancelled:Ce,onBeforeLeave:Ce,onLeave:Ce,onAfterLeave:Ce,onLeaveCancelled:Ce,onBeforeAppear:Ce,onAppear:Ce,onAfterAppear:Ce,onAppearCancelled:Ce},setup(e,{slots:n}){const t=Je(),l=$i();let a;return()=>{const r=n.default&&$a(n.default(),!0);if(!r||!r.length)return;let c=r[0];if(r.length>1){let B=!1;for(const D of r)if(D.type!==Js){if(B){P("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}c=D,B=!0}}const i=ms(e),{mode:p}=i;if(p&&p!=="in-out"&&p!=="out-in"&&p!=="default"&&P(`invalid <transition> mode: ${p}`),l.isLeaving)return _l(c);const d=Ar(c);if(!d)return _l(c);const u=eo(d,i,l,t);bt(d,u);const y=t.subTree,f=y&&Ar(y);let m=!1;const{getTransitionKey:g}=d.type;if(g){const B=g();a===void 0?a=B:B!==a&&(a=B,m=!0)}if(f&&f.type!==Js&&(!In(d,f)||m)){const B=eo(f,i,l,t);if(bt(f,B),p==="out-in")return l.isLeaving=!0,B.afterLeave=()=>{l.isLeaving=!1,t.update.active!==!1&&t.update()},_l(c);p==="in-out"&&d.type!==Js&&(B.delayLeave=(D,S,E)=>{const x=Pi(l,f);x[String(f.key)]=f,D._leaveCb=()=>{S(),D._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return c}}},Lu=Nu;function Pi(e,n){const{leavingVNodes:t}=e;let l=t.get(n.type);return l||(l=Object.create(null),t.set(n.type,l)),l}function eo(e,n,t,l){const{appear:a,mode:r,persisted:c=!1,onBeforeEnter:i,onEnter:p,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:y,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:B,onAppear:D,onAfterAppear:S,onAppearCancelled:E}=n,x=String(e.key),F=Pi(t,e),V=(G,ss)=>{G&&Se(G,l,9,ss)},j=(G,ss)=>{const ls=ss[1];V(G,ss),is(G)?G.every(ds=>ds.length<=1)&&ls():G.length<=1&&ls()},K={mode:r,persisted:c,beforeEnter(G){let ss=i;if(!t.isMounted)if(a)ss=B||i;else return;G._leaveCb&&G._leaveCb(!0);const ls=F[x];ls&&In(e,ls)&&ls.el._leaveCb&&ls.el._leaveCb(),V(ss,[G])},enter(G){let ss=p,ls=d,ds=u;if(!t.isMounted)if(a)ss=D||p,ls=S||d,ds=E||u;else return;let Y=!1;const Ds=G._enterCb=Is=>{Y||(Y=!0,Is?V(ds,[G]):V(ls,[G]),K.delayedLeave&&K.delayedLeave(),G._enterCb=void 0)};ss?j(ss,[G,Ds]):Ds()},leave(G,ss){const ls=String(e.key);if(G._enterCb&&G._enterCb(!0),t.isUnmounting)return ss();V(y,[G]);let ds=!1;const Y=G._leaveCb=Ds=>{ds||(ds=!0,ss(),Ds?V(g,[G]):V(m,[G]),G._leaveCb=void 0,F[ls]===e&&delete F[ls])};F[ls]=e,f?j(f,[G,Y]):Y()},clone(G){return eo(G,n,t,l)}};return K}function _l(e){if(fo(e))return e=He(e),e.children=null,e}function Ar(e){return fo(e)?e.children?e.children[0]:void 0:e}function bt(e,n){e.shapeFlag&6&&e.component?bt(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function $a(e,n=!1,t){let l=[],a=0;for(let r=0;r<e.length;r++){let c=e[r];const i=t==null?c.key:String(t)+String(c.key!=null?c.key:r);c.type===Ss?(c.patchFlag&128&&a++,l=l.concat($a(c.children,n,i))):(n||c.type!==Js)&&l.push(i!=null?He(c,{key:i}):c)}if(a>1)for(let r=0;r<l.length;r++)l[r].patchFlag=-2;return l}function $s(e){return us(e)?{setup:e,name:e.name}:e}const _t=e=>!!e.type.__asyncLoader,fo=e=>e.type.__isKeepAlive,Gu={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=Je(),l=t.ctx;if(!l.renderer)return()=>{const E=n.default&&n.default();return E&&E.length===1?E[0]:E};const a=new Map,r=new Set;let c=null;t.__v_cache=a;const i=t.suspense,{renderer:{p,m:d,um:u,o:{createElement:y}}}=l,f=y("div");l.activate=(E,x,F,V,j)=>{const K=E.component;d(E,x,F,0,i),p(K.vnode,E,x,F,K,i,V,E.slotScopeIds,j),Xs(()=>{K.isDeactivated=!1,K.a&&Bn(K.a);const G=E.props&&E.props.onVnodeMounted;G&&ke(G,K.parent,E)},i),Gl(K)},l.deactivate=E=>{const x=E.component;d(E,f,null,1,i),Xs(()=>{x.da&&Bn(x.da);const F=E.props&&E.props.onVnodeUnmounted;F&&ke(F,x.parent,E),x.isDeactivated=!0},i),Gl(x)};function m(E){Bl(E),u(E,t,i,!0)}function g(E){a.forEach((x,F)=>{const V=oo(x.type);V&&(!E||!E(V))&&B(F)})}function B(E){const x=a.get(E);!c||x.type!==c.type?m(x):c&&Bl(c),a.delete(E),r.delete(E)}Ks(()=>[e.include,e.exclude],([E,x])=>{E&&g(F=>Gt(E,F)),x&&g(F=>!Gt(x,F))},{flush:"post",deep:!0});let D=null;const S=()=>{D!=null&&a.set(D,Dl(t.subTree))};return ho(S),Pa(S),Ra(()=>{a.forEach(E=>{const{subTree:x,suspense:F}=t,V=Dl(x);if(E.type===V.type){Bl(V);const j=V.component.da;j&&Xs(j,F);return}m(E)})}),()=>{if(D=null,!n.default)return null;const E=n.default(),x=E[0];if(E.length>1)return P("KeepAlive should contain exactly one component child."),c=null,E;if(!xn(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return c=null,x;let F=Dl(x);const V=F.type,j=oo(_t(F)?F.type.__asyncResolved||{}:V),{include:K,exclude:G,max:ss}=e;if(K&&(!j||!Gt(K,j))||G&&j&&Gt(G,j))return c=F,x;const ls=F.key==null?V:F.key,ds=a.get(ls);return F.el&&(F=He(F),x.shapeFlag&128&&(x.ssContent=F)),D=ls,ds?(F.el=ds.el,F.component=ds.component,F.transition&&bt(F,F.transition),F.shapeFlag|=512,r.delete(ls),r.add(ls)):(r.add(ls),ss&&r.size>parseInt(ss,10)&&B(r.values().next().value)),F.shapeFlag|=256,c=F,Oi(x.type)?x:F}}},Ri=Gu;function Gt(e,n){return is(e)?e.some(t=>Gt(t,n)):Gs(e)?e.split(",").includes(n):e.test?e.test(n):!1}function Mu(e,n){Ui(e,"a",n)}function Ku(e,n){Ui(e,"da",n)}function Ui(e,n,t=zs){const l=e.__wdc||(e.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(il(n,l,t),t){let a=t.parent;for(;a&&a.parent;)fo(a.parent.vnode)&&Wu(l,n,t,a),a=a.parent}}function Wu(e,n,t,l){const a=il(n,e,l,!0);pl(()=>{ma(l[n],a)},t)}function Bl(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Dl(e){return e.shapeFlag&128?e.ssContent:e}function il(e,n,t=zs,l=!1){if(t){const a=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...c)=>{if(t.isUnmounted)return;tt(),vt(t);const i=Se(n,t,e,c);return qn(),ot(),i});return l?a.unshift(r):a.push(r),r}else{const a=Rn(Sa[e].replace(/ hook$/,""));P(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const dn=e=>(n,t=zs)=>(!to||e==="sp")&&il(e,(...l)=>n(...l),t),Vu=dn("bm"),ho=dn("m"),ju=dn("bu"),Pa=dn("u"),Ra=dn("bum"),pl=dn("um"),qu=dn("sp"),zu=dn("rtg"),Yu=dn("rtc");function Qu(e,n=zs){il("ec",e,n)}function Ii(e){Cd(e)&&P("Do not use built-in directive ids as custom directive id: "+e)}function dl(e,n){const t=Ys;if(t===null)return P("withDirectives can only be used inside render functions."),e;const l=yl(t)||t.proxy,a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[c,i,p,d=Us]=n[r];c&&(us(c)&&(c={mounted:c,updated:c}),c.deep&&Ln(i),a.push({dir:c,instance:l,value:i,oldValue:void 0,arg:p,modifiers:d}))}return e}function Tn(e,n,t,l){const a=e.dirs,r=n&&n.dirs;for(let c=0;c<a.length;c++){const i=a[c];r&&(i.oldValue=r[c].value);let p=i.dir[l];p&&(tt(),Se(p,t,8,[e.el,i,e,n]),ot())}}const Kl="components",Zu="directives";function Hi(e,n){return Ni(Kl,e,!0,n)||e}const Ju=Symbol();function _r(e){return Ni(Zu,e)}function Ni(e,n,t=!0,l=!1){const a=Ys||zs;if(a){const r=a.type;if(e===Kl){const i=oo(r,!1);if(i&&(i===n||i===ze(n)||i===Jn(ze(n))))return r}const c=Br(a[e]||r[e],n)||Br(a.appContext[e],n);if(!c&&l)return r;if(t&&!c){const i=e===Kl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";P(`Failed to resolve ${e.slice(0,-1)}: ${n}${i}`)}return c}else P(`resolve${Jn(e.slice(0,-1))} can only be used in render() or setup().`)}function Br(e,n){return e&&(e[n]||e[ze(n)]||e[Jn(ze(n))])}function mo(e,n,t,l){let a;const r=t&&t[l];if(is(e)||Gs(e)){a=new Array(e.length);for(let c=0,i=e.length;c<i;c++)a[c]=n(e[c],c,void 0,r&&r[c])}else if(typeof e=="number"){Number.isInteger(e)||P(`The v-for range expect an integer value but got ${e}.`),a=new Array(e);for(let c=0;c<e;c++)a[c]=n(c+1,c,void 0,r&&r[c])}else if(xs(e))if(e[Symbol.iterator])a=Array.from(e,(c,i)=>n(c,i,void 0,r&&r[i]));else{const c=Object.keys(e);a=new Array(c.length);for(let i=0,p=c.length;i<p;i++){const d=c[i];a[i]=n(e[d],d,i,r&&r[i])}}else a=[];return t&&(t[l]=a),a}function le(e,n,t={},l,a){if(Ys.isCE||Ys.parent&&_t(Ys.parent)&&Ys.parent.isCE)return n!=="default"&&(t.name=n),C("slot",t,l&&l());let r=e[n];r&&r.length>1&&(P("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),b();const c=r&&Li(r(t)),i=H(Ss,{key:t.key||c&&c.key||`_${n}`},c||(l?l():[]),c&&e._===1?64:-2);return!a&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function Li(e){return e.some(n=>xn(n)?!(n.type===Js||n.type===Ss&&!Li(n.children)):!0)?e:null}const Wl=e=>e?sp(e)?yl(e)||e.proxy:Wl(e.parent):null,jn=Ws(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ht(e.props),$attrs:e=>ht(e.attrs),$slots:e=>ht(e.slots),$refs:e=>ht(e.refs),$parent:e=>Wl(e.parent),$root:e=>Wl(e.root),$emit:e=>e.emit,$options:e=>Ia(e),$forceUpdate:e=>e.f||(e.f=()=>al(e.update)),$nextTick:e=>e.n||(e.n=Ie.bind(e.proxy)),$watch:e=>Hu.bind(e)}),Ua=e=>e==="_"||e==="$",bl=(e,n)=>e!==Us&&!e.__isScriptSetup&&Bs(e,n),Gi={get({_:e},n){const{ctx:t,setupState:l,data:a,props:r,accessCache:c,type:i,appContext:p}=e;if(n==="__isVue")return!0;let d;if(n[0]!=="$"){const m=c[n];if(m!==void 0)switch(m){case 1:return l[n];case 2:return a[n];case 4:return t[n];case 3:return r[n]}else{if(bl(l,n))return c[n]=1,l[n];if(a!==Us&&Bs(a,n))return c[n]=2,a[n];if((d=e.propsOptions[0])&&Bs(d,n))return c[n]=3,r[n];if(t!==Us&&Bs(t,n))return c[n]=4,t[n];Vl&&(c[n]=0)}}const u=jn[n];let y,f;if(u)return n==="$attrs"&&(be(e,"get",n),Ko()),u(e);if((y=i.__cssModules)&&(y=y[n]))return y;if(t!==Us&&Bs(t,n))return c[n]=4,t[n];if(f=p.config.globalProperties,Bs(f,n))return f[n];Ys&&(!Gs(n)||n.indexOf("__v")!==0)&&(a!==Us&&Ua(n[0])&&Bs(a,n)?P(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ys&&P(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:e},n,t){const{data:l,setupState:a,ctx:r}=e;return bl(a,n)?(a[n]=t,!0):a.__isScriptSetup&&Bs(a,n)?(P(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):l!==Us&&Bs(l,n)?(l[n]=t,!0):Bs(e.props,n)?(P(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?(P(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in e.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:t}):r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:l,appContext:a,propsOptions:r}},c){let i;return!!t[c]||e!==Us&&Bs(e,c)||bl(n,c)||(i=r[0])&&Bs(i,c)||Bs(l,c)||Bs(jn,c)||Bs(a.config.globalProperties,c)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Bs(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};Gi.ownKeys=e=>(P("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Xu(e){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(jn).forEach(t=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,get:()=>jn[t](e),set:he})}),n}function sy(e){const{ctx:n,propsOptions:[t]}=e;t&&Object.keys(t).forEach(l=>{Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>e.props[l],set:he})})}function ey(e){const{ctx:n,setupState:t}=e;Object.keys(ms(t)).forEach(l=>{if(!t.__isScriptSetup){if(Ua(l[0])){P(`setup() return property ${JSON.stringify(l)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>t[l],set:he})}})}function ny(){const e=Object.create(null);return(n,t)=>{e[t]?P(`${n} property "${t}" is already defined in ${e[t]}.`):e[t]=n}}let Vl=!0;function ty(e){const n=Ia(e),t=e.proxy,l=e.ctx;Vl=!1,n.beforeCreate&&Dr(n.beforeCreate,e,"bc");const{data:a,computed:r,methods:c,watch:i,provide:p,inject:d,created:u,beforeMount:y,mounted:f,beforeUpdate:m,updated:g,activated:B,deactivated:D,beforeDestroy:S,beforeUnmount:E,destroyed:x,unmounted:F,render:V,renderTracked:j,renderTriggered:K,errorCaptured:G,serverPrefetch:ss,expose:ls,inheritAttrs:ds,components:Y,directives:Ds,filters:Is}=n,ks=ny();{const[Q]=e.propsOptions;if(Q)for(const cs in Q)ks("Props",cs)}if(d&&oy(d,l,ks,e.appContext.config.unwrapInjectedRef),c)for(const Q in c){const cs=c[Q];us(cs)?(Object.defineProperty(l,Q,{value:cs.bind(t),configurable:!0,enumerable:!0,writable:!0}),ks("Methods",Q)):P(`Method "${Q}" has type "${typeof cs}" in the component definition. Did you reference the function correctly?`)}if(a){us(a)||P("The data option must be a function. Plain object usage is no longer supported.");const Q=a.call(t,t);if(Aa(Q)&&P("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!xs(Q))P("data() should return an object.");else{e.data=se(Q);for(const cs in Q)ks("Data",cs),Ua(cs[0])||Object.defineProperty(l,cs,{configurable:!0,enumerable:!0,get:()=>Q[cs],set:he})}}if(Vl=!0,r)for(const Q in r){const cs=r[Q],gs=us(cs)?cs.bind(t,t):us(cs.get)?cs.get.bind(t,t):he;gs===he&&P(`Computed property "${Q}" has no getter.`);const Ps=!us(cs)&&us(cs.set)?cs.set.bind(t):()=>{P(`Write operation failed: computed property "${Q}" is readonly.`)},ge=T({get:gs,set:Ps});Object.defineProperty(l,Q,{enumerable:!0,configurable:!0,get:()=>ge.value,set:ne=>ge.value=ne}),ks("Computed",Q)}if(i)for(const Q in i)Mi(i[Q],l,t,Q);if(p){const Q=us(p)?p.call(t):p;Reflect.ownKeys(Q).forEach(cs=>{Be(cs,Q[cs])})}u&&Dr(u,e,"c");function Hs(Q,cs){is(cs)?cs.forEach(gs=>Q(gs.bind(t))):cs&&Q(cs.bind(t))}if(Hs(Vu,y),Hs(ho,f),Hs(ju,m),Hs(Pa,g),Hs(Mu,B),Hs(Ku,D),Hs(Qu,G),Hs(Yu,j),Hs(zu,K),Hs(Ra,E),Hs(pl,F),Hs(qu,ss),is(ls))if(ls.length){const Q=e.exposed||(e.exposed={});ls.forEach(cs=>{Object.defineProperty(Q,cs,{get:()=>t[cs],set:gs=>t[cs]=gs})})}else e.exposed||(e.exposed={});V&&e.render===he&&(e.render=V),ds!=null&&(e.inheritAttrs=ds),Y&&(e.components=Y),Ds&&(e.directives=Ds)}function oy(e,n,t=he,l=!1){is(e)&&(e=jl(e));for(const a in e){const r=e[a];let c;xs(r)?"default"in r?c=R(r.from||a,r.default,!0):c=R(r.from||a):c=R(r),Es(c)?l?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>c.value,set:i=>c.value=i}):(P(`injected property "${a}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[a]=c):n[a]=c,t("Inject",a)}}function Dr(e,n,t){Se(is(e)?e.map(l=>l.bind(n.proxy)):e.bind(n.proxy),n,t)}function Mi(e,n,t,l){const a=l.includes(".")?Ti(t,l):()=>t[l];if(Gs(e)){const r=n[e];us(r)?Ks(a,r):P(`Invalid watch handler specified by key "${e}"`,r)}else if(us(e))Ks(a,e.bind(t));else if(xs(e))if(is(e))e.forEach(r=>Mi(r,n,t,l));else{const r=us(e.handler)?e.handler.bind(t):n[e.handler];us(r)?Ks(a,r,e):P(`Invalid watch handler specified by key "${e.handler}"`,r)}else P(`Invalid watch option: "${l}"`,e)}function Ia(e){const n=e.type,{mixins:t,extends:l}=n,{mixins:a,optionsCache:r,config:{optionMergeStrategies:c}}=e.appContext,i=r.get(n);let p;return i?p=i:!a.length&&!t&&!l?p=n:(p={},a.length&&a.forEach(d=>Wo(p,d,c,!0)),Wo(p,n,c)),xs(n)&&r.set(n,p),p}function Wo(e,n,t,l=!1){const{mixins:a,extends:r}=n;r&&Wo(e,r,t,!0),a&&a.forEach(c=>Wo(e,c,t,!0));for(const c in n)if(l&&c==="expose")P('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=ly[c]||t&&t[c];e[c]=i?i(e[c],n[c]):n[c]}return e}const ly={data:br,props:Un,emits:Un,methods:Un,computed:Un,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:Un,directives:Un,watch:ry,provide:br,inject:ay};function br(e,n){return n?e?function(){return Ws(us(e)?e.call(this,this):e,us(n)?n.call(this,this):n)}:n:e}function ay(e,n){return Un(jl(e),jl(n))}function jl(e){if(is(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function re(e,n){return e?[...new Set([].concat(e,n))]:n}function Un(e,n){return e?Ws(Ws(Object.create(null),e),n):n}function ry(e,n){if(!e)return n;if(!n)return e;const t=Ws(Object.create(null),e);for(const l in n)t[l]=re(e[l],n[l]);return t}function cy(e,n,t,l=!1){const a={},r={};Ho(r,ul,1),e.propsDefaults=Object.create(null),Ki(e,n,a,r);for(const c in e.propsOptions[0])c in a||(a[c]=void 0);Vi(n||{},a,e),t?e.props=l?a:nu(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function iy(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function py(e,n,t,l){const{props:a,attrs:r,vnode:{patchFlag:c}}=e,i=ms(a),[p]=e.propsOptions;let d=!1;if(!iy(e)&&(l||c>0)&&!(c&16)){if(c&8){const u=e.vnode.dynamicProps;for(let y=0;y<u.length;y++){let f=u[y];if(rl(e.emitsOptions,f))continue;const m=n[f];if(p)if(Bs(r,f))m!==r[f]&&(r[f]=m,d=!0);else{const g=ze(f);a[g]=ql(p,i,g,m,e,!1)}else m!==r[f]&&(r[f]=m,d=!0)}}}else{Ki(e,n,a,r)&&(d=!0);let u;for(const y in i)(!n||!Bs(n,y)&&((u=cn(y))===y||!Bs(n,u)))&&(p?t&&(t[y]!==void 0||t[u]!==void 0)&&(a[y]=ql(p,i,y,void 0,e,!0)):delete a[y]);if(r!==i)for(const y in r)(!n||!Bs(n,y))&&(delete r[y],d=!0)}d&&pn(e,"set","$attrs"),Vi(n||{},a,e)}function Ki(e,n,t,l){const[a,r]=e.propsOptions;let c=!1,i;if(n)for(let p in n){if(So(p))continue;const d=n[p];let u;a&&Bs(a,u=ze(p))?!r||!r.includes(u)?t[u]=d:(i||(i={}))[u]=d:rl(e.emitsOptions,p)||(!(p in l)||d!==l[p])&&(l[p]=d,c=!0)}if(r){const p=ms(t),d=i||Us;for(let u=0;u<r.length;u++){const y=r[u];t[y]=ql(a,p,y,d[y],e,!Bs(d,y))}}return c}function ql(e,n,t,l,a,r){const c=e[t];if(c!=null){const i=Bs(c,"default");if(i&&l===void 0){const p=c.default;if(c.type!==Function&&us(p)){const{propsDefaults:d}=a;t in d?l=d[t]:(vt(a),l=d[t]=p.call(null,n),qn())}else l=p}c[0]&&(r&&!i?l=!1:c[1]&&(l===""||l===cn(t))&&(l=!0))}return l}function Wi(e,n,t=!1){const l=n.propsCache,a=l.get(e);if(a)return a;const r=e.props,c={},i=[];let p=!1;if(!us(e)){const u=y=>{p=!0;const[f,m]=Wi(y,n,!0);Ws(c,f),m&&i.push(...m)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!p)return xs(e)&&l.set(e,gt),gt;if(is(r))for(let u=0;u<r.length;u++){Gs(r[u])||P("props must be strings when using array syntax.",r[u]);const y=ze(r[u]);vr(y)&&(c[y]=Us)}else if(r){xs(r)||P("invalid props options",r);for(const u in r){const y=ze(u);if(vr(y)){const f=r[u],m=c[y]=is(f)||us(f)?{type:f}:Object.assign({},f);if(m){const g=kr(Boolean,m.type),B=kr(String,m.type);m[0]=g>-1,m[1]=B<0||g<B,(g>-1||Bs(m,"default"))&&i.push(y)}}}}const d=[c,i];return xs(e)&&l.set(e,d),d}function vr(e){return e[0]!=="$"?!0:(P(`Invalid prop name: "${e}" is a reserved property.`),!1)}function zl(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Cr(e,n){return zl(e)===zl(n)}function kr(e,n){return is(n)?n.findIndex(t=>Cr(t,e)):us(n)&&Cr(n,e)?0:-1}function Vi(e,n,t){const l=ms(n),a=t.propsOptions[0];for(const r in a){let c=a[r];c!=null&&dy(r,l[r],c,!Bs(e,r)&&!Bs(e,cn(r)))}}function dy(e,n,t,l){const{type:a,required:r,validator:c}=t;if(r&&l){P('Missing required prop: "'+e+'"');return}if(!(n==null&&!t.required)){if(a!=null&&a!==!0){let i=!1;const p=is(a)?a:[a],d=[];for(let u=0;u<p.length&&!i;u++){const{valid:y,expectedType:f}=yy(n,p[u]);d.push(f||""),i=y}if(!i){P(fy(e,n,d));return}}c&&!c(n)&&P('Invalid prop: custom validator check failed for prop "'+e+'".')}}const uy=On("String,Number,Boolean,Function,Symbol,BigInt");function yy(e,n){let t;const l=zl(n);if(uy(l)){const a=typeof e;t=a===l.toLowerCase(),!t&&a==="object"&&(t=e instanceof n)}else l==="Object"?t=xs(e):l==="Array"?t=is(e):l==="null"?t=e===null:t=e instanceof n;return{valid:t,expectedType:l}}function fy(e,n,t){let l=`Invalid prop: type check failed for prop "${e}". Expected ${t.map(Jn).join(" | ")}`;const a=t[0],r=_a(n),c=Er(n,a),i=Er(n,r);return t.length===1&&wr(a)&&!hy(a,r)&&(l+=` with value ${c}`),l+=`, got ${r} `,wr(r)&&(l+=`with value ${i}.`),l}function Er(e,n){return n==="String"?`"${e}"`:n==="Number"?`${Number(e)}`:`${e}`}function wr(e){return["string","number","boolean"].some(t=>e.toLowerCase()===t)}function hy(...e){return e.some(n=>n.toLowerCase()==="boolean")}const ji=e=>e[0]==="_"||e==="$stable",Ha=e=>is(e)?e.map(Pe):[Pe(e)],my=(e,n,t)=>{if(n._n)return n;const l=_((...a)=>(zs&&P(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ha(n(...a))),t);return l._c=!1,l},qi=(e,n,t)=>{const l=e._ctx;for(const a in e){if(ji(a))continue;const r=e[a];if(us(r))n[a]=my(a,r,l);else if(r!=null){P(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);const c=Ha(r);n[a]=()=>c}}},zi=(e,n)=>{fo(e.vnode)||P("Non-function value encountered for default slot. Prefer function slots for better performance.");const t=Ha(n);e.slots.default=()=>t},gy=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=ms(n),Ho(n,"_",t)):qi(n,e.slots={})}else e.slots={},n&&zi(e,n);Ho(e.slots,ul,1)},Ay=(e,n,t)=>{const{vnode:l,slots:a}=e;let r=!0,c=Us;if(l.shapeFlag&32){const i=n._;i?vn?Ws(a,n):t&&i===1?r=!1:(Ws(a,n),!t&&i===1&&delete a._):(r=!n.$stable,qi(n,a)),c=n}else n&&(zi(e,n),c={default:1});if(r)for(const i in a)!ji(i)&&!(i in c)&&delete a[i]};function Yi(){return{app:null,config:{isNativeTag:Qc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _y=0;function By(e,n){return function(l,a=null){us(l)||(l=Object.assign({},l)),a!=null&&!xs(a)&&(P("root props passed to app.mount() must be an object."),a=null);const r=Yi(),c=new Set;let i=!1;const p=r.app={_uid:_y++,_component:l,_props:a,_container:null,_context:r,_instance:null,version:Or,get config(){return r.config},set config(d){P("app.config cannot be replaced. Modify individual options instead.")},use(d,...u){return c.has(d)?P("Plugin has already been applied to target app."):d&&us(d.install)?(c.add(d),d.install(p,...u)):us(d)?(c.add(d),d(p,...u)):P('A plugin must either be a function or an object with an "install" function.'),p},mixin(d){return r.mixins.includes(d)?P("Mixin has already been applied to target app"+(d.name?`: ${d.name}`:"")):r.mixins.push(d),p},component(d,u){return Zl(d,r.config),u?(r.components[d]&&P(`Component "${d}" has already been registered in target app.`),r.components[d]=u,p):r.components[d]},directive(d,u){return Ii(d),u?(r.directives[d]&&P(`Directive "${d}" has already been registered in target app.`),r.directives[d]=u,p):r.directives[d]},mount(d,u,y){if(i)P("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{d.__vue_app__&&P("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=C(l,a);return f.appContext=r,r.reload=()=>{e(He(f),d,y)},u&&n?n(f,d):e(f,d,y),i=!0,p._container=d,d.__vue_app__=p,p._instance=f.component,Cu(p,Or),yl(f.component)||f.component.proxy}},unmount(){i?(e(null,p._container),p._instance=null,ku(p),delete p._container.__vue_app__):P("Cannot unmount an app that is not mounted.")},provide(d,u){return d in r.provides&&P(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`),r.provides[d]=u,p}};return p}}function Yl(e,n,t,l,a=!1){if(is(e)){e.forEach((f,m)=>Yl(f,n&&(is(n)?n[m]:n),t,l,a));return}if(_t(l)&&!a)return;const r=l.shapeFlag&4?yl(l.component)||l.component.proxy:l.el,c=a?null:r,{i,r:p}=e;if(!i){P("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const d=n&&n.r,u=i.refs===Us?i.refs={}:i.refs,y=i.setupState;if(d!=null&&d!==p&&(Gs(d)?(u[d]=null,Bs(y,d)&&(y[d]=null)):Es(d)&&(d.value=null)),us(p))rn(p,i,12,[c,u]);else{const f=Gs(p),m=Es(p);if(f||m){const g=()=>{if(e.f){const B=f?Bs(y,p)?y[p]:u[p]:p.value;a?is(B)&&ma(B,r):is(B)?B.includes(r)||B.push(r):f?(u[p]=[r],Bs(y,p)&&(y[p]=u[p])):(p.value=[r],e.k&&(u[e.k]=p.value))}else f?(u[p]=c,Bs(y,p)&&(y[p]=c)):m?(p.value=c,e.k&&(u[e.k]=c)):P("Invalid template ref type:",p,`(${typeof p})`)};c?(g.id=-1,Xs(g,t)):g()}else P("Invalid template ref type:",p,`(${typeof p})`)}}let Ft,Dn;function sn(e,n){e.appContext.config.performance&&Vo()&&Dn.mark(`vue-${n}-${e.uid}`),Su(e,n,Vo()?Dn.now():Date.now())}function en(e,n){if(e.appContext.config.performance&&Vo()){const t=`vue-${n}-${e.uid}`,l=t+":end";Dn.mark(l),Dn.measure(`<${fl(e,e.type)}> ${n}`,t,l),Dn.clearMarks(t),Dn.clearMarks(l)}xu(e,n,Vo()?Dn.now():Date.now())}function Vo(){return Ft!==void 0||(typeof window<"u"&&window.performance?(Ft=!0,Dn=window.performance):Ft=!1),Ft}function Dy(){const e=[];if(e.length){const n=e.length>1;console.warn(`Feature flag${n?"s":""} ${e.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Xs=Iu;function by(e){return vy(e)}function vy(e,n){Dy();const t=si();t.__VUE__=!0,Ei(t.__VUE_DEVTOOLS_GLOBAL_HOOK__,t);const{insert:l,remove:a,patchProp:r,createElement:c,createText:i,createComment:p,setText:d,setElementText:u,parentNode:y,nextSibling:f,setScopeId:m=he,insertStaticContent:g}=e,B=(h,A,k,$=null,O=null,M=null,z=!1,I=null,W=vn?!1:!!A.dynamicChildren)=>{if(h===A)return;h&&!In(h,A)&&($=X(h),fe(h,O,M,!0),h=null),A.patchFlag===-2&&(W=!1,A.dynamicChildren=null);const{type:U,ref:os,shapeFlag:es}=A;switch(U){case go:D(h,A,k,$);break;case Js:S(h,A,k,$);break;case Oo:h==null?E(A,k,$,z):x(h,A,k,z);break;case Ss:Ds(h,A,k,$,O,M,z,I,W);break;default:es&1?j(h,A,k,$,O,M,z,I,W):es&6?Is(h,A,k,$,O,M,z,I,W):es&64||es&128?U.process(h,A,k,$,O,M,z,I,W,vs):P("Invalid VNode type:",U,`(${typeof U})`)}os!=null&&O&&Yl(os,h&&h.ref,M,A||h,!A)},D=(h,A,k,$)=>{if(h==null)l(A.el=i(A.children),k,$);else{const O=A.el=h.el;A.children!==h.children&&d(O,A.children)}},S=(h,A,k,$)=>{h==null?l(A.el=p(A.children||""),k,$):A.el=h.el},E=(h,A,k,$)=>{[h.el,h.anchor]=g(h.children,A,k,$,h.el,h.anchor)},x=(h,A,k,$)=>{if(A.children!==h.children){const O=f(h.anchor);V(h),[A.el,A.anchor]=g(A.children,k,O,$)}else A.el=h.el,A.anchor=h.anchor},F=({el:h,anchor:A},k,$)=>{let O;for(;h&&h!==A;)O=f(h),l(h,k,$),h=O;l(A,k,$)},V=({el:h,anchor:A})=>{let k;for(;h&&h!==A;)k=f(h),a(h),h=k;a(A)},j=(h,A,k,$,O,M,z,I,W)=>{z=z||A.type==="svg",h==null?K(A,k,$,O,M,z,I,W):ls(h,A,O,M,z,I,W)},K=(h,A,k,$,O,M,z,I)=>{let W,U;const{type:os,props:es,shapeFlag:rs,transition:hs,dirs:bs}=h;if(W=h.el=c(h.type,M,es&&es.is,es),rs&8?u(W,h.children):rs&16&&ss(h.children,W,null,$,O,M&&os!=="foreignObject",z,I),bs&&Tn(h,null,$,"created"),es){for(const Rs in es)Rs!=="value"&&!So(Rs)&&r(W,Rs,null,es[Rs],M,h.children,$,O,q);"value"in es&&r(W,"value",null,es.value),(U=es.onVnodeBeforeMount)&&ke(U,$,h)}G(W,h,h.scopeId,z,$),Object.defineProperty(W,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(W,"__vueParentComponent",{value:$,enumerable:!1}),bs&&Tn(h,null,$,"beforeMount");const Ns=(!O||O&&!O.pendingBranch)&&hs&&!hs.persisted;Ns&&hs.beforeEnter(W),l(W,A,k),((U=es&&es.onVnodeMounted)||Ns||bs)&&Xs(()=>{U&&ke(U,$,h),Ns&&hs.enter(W),bs&&Tn(h,null,$,"mounted")},O)},G=(h,A,k,$,O)=>{if(k&&m(h,k),$)for(let M=0;M<$.length;M++)m(h,$[M]);if(O){let M=O.subTree;if(M.patchFlag>0&&M.patchFlag&2048&&(M=Fi(M.children)||M),A===M){const z=O.vnode;G(h,z,z.scopeId,z.slotScopeIds,O.parent)}}},ss=(h,A,k,$,O,M,z,I,W=0)=>{for(let U=W;U<h.length;U++){const os=h[U]=I?An(h[U]):Pe(h[U]);B(null,os,A,k,$,O,M,z,I)}},ls=(h,A,k,$,O,M,z)=>{const I=A.el=h.el;let{patchFlag:W,dynamicChildren:U,dirs:os}=A;W|=h.patchFlag&16;const es=h.props||Us,rs=A.props||Us;let hs;k&&$n(k,!1),(hs=rs.onVnodeBeforeUpdate)&&ke(hs,k,A,h),os&&Tn(A,h,k,"beforeUpdate"),k&&$n(k,!0),vn&&(W=0,z=!1,U=null);const bs=O&&A.type!=="foreignObject";if(U?(ds(h.dynamicChildren,U,I,k,$,bs,M),k&&k.type.__hmrId&&Wt(h,A)):z||gs(h,A,I,null,k,$,bs,M,!1),W>0){if(W&16)Y(I,A,es,rs,k,$,O);else if(W&2&&es.class!==rs.class&&r(I,"class",null,rs.class,O),W&4&&r(I,"style",es.style,rs.style,O),W&8){const Ns=A.dynamicProps;for(let Rs=0;Rs<Ns.length;Rs++){const Vs=Ns[Rs],Oe=es[Vs],rt=rs[Vs];(rt!==Oe||Vs==="value")&&r(I,Vs,Oe,rt,O,h.children,k,$,q)}}W&1&&h.children!==A.children&&u(I,A.children)}else!z&&U==null&&Y(I,A,es,rs,k,$,O);((hs=rs.onVnodeUpdated)||os)&&Xs(()=>{hs&&ke(hs,k,A,h),os&&Tn(A,h,k,"updated")},$)},ds=(h,A,k,$,O,M,z)=>{for(let I=0;I<A.length;I++){const W=h[I],U=A[I],os=W.el&&(W.type===Ss||!In(W,U)||W.shapeFlag&70)?y(W.el):k;B(W,U,os,null,$,O,M,z,!0)}},Y=(h,A,k,$,O,M,z)=>{if(k!==$){if(k!==Us)for(const I in k)!So(I)&&!(I in $)&&r(h,I,k[I],null,z,A.children,O,M,q);for(const I in $){if(So(I))continue;const W=$[I],U=k[I];W!==U&&I!=="value"&&r(h,I,U,W,z,A.children,O,M,q)}"value"in $&&r(h,"value",k.value,$.value)}},Ds=(h,A,k,$,O,M,z,I,W)=>{const U=A.el=h?h.el:i(""),os=A.anchor=h?h.anchor:i("");let{patchFlag:es,dynamicChildren:rs,slotScopeIds:hs}=A;(vn||es&2048)&&(es=0,W=!1,rs=null),hs&&(I=I?I.concat(hs):hs),h==null?(l(U,k,$),l(os,k,$),ss(A.children,k,os,O,M,z,I,W)):es>0&&es&64&&rs&&h.dynamicChildren?(ds(h.dynamicChildren,rs,k,O,M,z,I),O&&O.type.__hmrId?Wt(h,A):(A.key!=null||O&&A===O.subTree)&&Wt(h,A,!0)):gs(h,A,k,os,O,M,z,I,W)},Is=(h,A,k,$,O,M,z,I,W)=>{A.slotScopeIds=I,h==null?A.shapeFlag&512?O.ctx.activate(A,k,$,z,W):ks(A,k,$,O,M,z,W):Hs(h,A,W)},ks=(h,A,k,$,O,M,z)=>{const I=h.component=$y(h,$,O);if(I.type.__hmrId&&Bu(I),xo(h),sn(I,"mount"),fo(h)&&(I.ctx.renderer=vs),sn(I,"init"),Ry(I),en(I,"init"),I.asyncDep){if(O&&O.registerDep(I,Q),!h.el){const W=I.subTree=C(Js);S(null,W,A,k)}return}Q(I,h,A,k,O,M,z),Fo(),en(I,"mount")},Hs=(h,A,k)=>{const $=A.component=h.component;if(Ru(h,A,k))if($.asyncDep&&!$.asyncResolved){xo(A),cs($,A,k),Fo();return}else $.next=A,Au($.update),$.update();else A.el=h.el,$.vnode=A},Q=(h,A,k,$,O,M,z)=>{const I=()=>{if(h.isMounted){let{next:os,bu:es,u:rs,parent:hs,vnode:bs}=h,Ns=os,Rs;xo(os||h.vnode),$n(h,!1),os?(os.el=bs.el,cs(h,os,z)):os=bs,es&&Bn(es),(Rs=os.props&&os.props.onVnodeBeforeUpdate)&&ke(Rs,hs,os,bs),$n(h,!0),sn(h,"render");const Vs=Al(h);en(h,"render");const Oe=h.subTree;h.subTree=Vs,sn(h,"patch"),B(Oe,Vs,y(Oe.el),X(Oe),h,O,M),en(h,"patch"),os.el=Vs.el,Ns===null&&Uu(h,Vs.el),rs&&Xs(rs,O),(Rs=os.props&&os.props.onVnodeUpdated)&&Xs(()=>ke(Rs,hs,os,bs),O),wi(h),Fo()}else{let os;const{el:es,props:rs}=A,{bm:hs,m:bs,parent:Ns}=h,Rs=_t(A);if($n(h,!1),hs&&Bn(hs),!Rs&&(os=rs&&rs.onVnodeBeforeMount)&&ke(os,Ns,A),$n(h,!0),es&&ps){const Vs=()=>{sn(h,"render"),h.subTree=Al(h),en(h,"render"),sn(h,"hydrate"),ps(es,h.subTree,h,O,null),en(h,"hydrate")};Rs?A.type.__asyncLoader().then(()=>!h.isUnmounted&&Vs()):Vs()}else{sn(h,"render");const Vs=h.subTree=Al(h);en(h,"render"),sn(h,"patch"),B(null,Vs,k,$,h,O,M),en(h,"patch"),A.el=Vs.el}if(bs&&Xs(bs,O),!Rs&&(os=rs&&rs.onVnodeMounted)){const Vs=A;Xs(()=>ke(os,Ns,Vs),O)}(A.shapeFlag&256||Ns&&_t(Ns.vnode)&&Ns.vnode.shapeFlag&256)&&h.a&&Xs(h.a,O),h.isMounted=!0,Gl(h),A=k=$=null}},W=h.effect=new ba(I,()=>al(U),h.scope),U=h.update=()=>W.run();U.id=h.uid,$n(h,!0),W.onTrack=h.rtc?os=>Bn(h.rtc,os):void 0,W.onTrigger=h.rtg?os=>Bn(h.rtg,os):void 0,U.ownerInstance=h,U()},cs=(h,A,k)=>{A.component=h;const $=h.vnode.props;h.vnode=A,h.next=null,py(h,A.props,$,k),Ay(h,A.children,k),tt(),fr(),ot()},gs=(h,A,k,$,O,M,z,I,W=!1)=>{const U=h&&h.children,os=h?h.shapeFlag:0,es=A.children,{patchFlag:rs,shapeFlag:hs}=A;if(rs>0){if(rs&128){ge(U,es,k,$,O,M,z,I,W);return}else if(rs&256){Ps(U,es,k,$,O,M,z,I,W);return}}hs&8?(os&16&&q(U,O,M),es!==U&&u(k,es)):os&16?hs&16?ge(U,es,k,$,O,M,z,I,W):q(U,O,M,!0):(os&8&&u(k,""),hs&16&&ss(es,k,$,O,M,z,I,W))},Ps=(h,A,k,$,O,M,z,I,W)=>{h=h||gt,A=A||gt;const U=h.length,os=A.length,es=Math.min(U,os);let rs;for(rs=0;rs<es;rs++){const hs=A[rs]=W?An(A[rs]):Pe(A[rs]);B(h[rs],hs,k,null,O,M,z,I,W)}U>os?q(h,O,M,!0,!1,es):ss(A,k,$,O,M,z,I,W,es)},ge=(h,A,k,$,O,M,z,I,W)=>{let U=0;const os=A.length;let es=h.length-1,rs=os-1;for(;U<=es&&U<=rs;){const hs=h[U],bs=A[U]=W?An(A[U]):Pe(A[U]);if(In(hs,bs))B(hs,bs,k,null,O,M,z,I,W);else break;U++}for(;U<=es&&U<=rs;){const hs=h[es],bs=A[rs]=W?An(A[rs]):Pe(A[rs]);if(In(hs,bs))B(hs,bs,k,null,O,M,z,I,W);else break;es--,rs--}if(U>es){if(U<=rs){const hs=rs+1,bs=hs<os?A[hs].el:$;for(;U<=rs;)B(null,A[U]=W?An(A[U]):Pe(A[U]),k,bs,O,M,z,I,W),U++}}else if(U>rs)for(;U<=es;)fe(h[U],O,M,!0),U++;else{const hs=U,bs=U,Ns=new Map;for(U=bs;U<=rs;U++){const ae=A[U]=W?An(A[U]):Pe(A[U]);ae.key!=null&&(Ns.has(ae.key)&&P("Duplicate keys found during update:",JSON.stringify(ae.key),"Make sure keys are unique."),Ns.set(ae.key,U))}let Rs,Vs=0;const Oe=rs-bs+1;let rt=!1,tr=0;const xt=new Array(Oe);for(U=0;U<Oe;U++)xt[U]=0;for(U=hs;U<=es;U++){const ae=h[U];if(Vs>=Oe){fe(ae,O,M,!0);continue}let Ge;if(ae.key!=null)Ge=Ns.get(ae.key);else for(Rs=bs;Rs<=rs;Rs++)if(xt[Rs-bs]===0&&In(ae,A[Rs])){Ge=Rs;break}Ge===void 0?fe(ae,O,M,!0):(xt[Ge-bs]=U+1,Ge>=tr?tr=Ge:rt=!0,B(ae,A[Ge],k,null,O,M,z,I,W),Vs++)}const or=rt?Cy(xt):gt;for(Rs=or.length-1,U=Oe-1;U>=0;U--){const ae=bs+U,Ge=A[ae],lr=ae+1<os?A[ae+1].el:$;xt[U]===0?B(null,Ge,k,lr,O,M,z,I,W):rt&&(Rs<0||U!==or[Rs]?ne(Ge,k,lr,2):Rs--)}}},ne=(h,A,k,$,O=null)=>{const{el:M,type:z,transition:I,children:W,shapeFlag:U}=h;if(U&6){ne(h.component.subTree,A,k,$);return}if(U&128){h.suspense.move(A,k,$);return}if(U&64){z.move(h,A,k,vs);return}if(z===Ss){l(M,A,k);for(let es=0;es<W.length;es++)ne(W[es],A,k,$);l(h.anchor,A,k);return}if(z===Oo){F(h,A,k);return}if($!==2&&U&1&&I)if($===0)I.beforeEnter(M),l(M,A,k),Xs(()=>I.enter(M),O);else{const{leave:es,delayLeave:rs,afterLeave:hs}=I,bs=()=>l(M,A,k),Ns=()=>{es(M,()=>{bs(),hs&&hs()})};rs?rs(M,bs,Ns):Ns()}else l(M,A,k)},fe=(h,A,k,$=!1,O=!1)=>{const{type:M,props:z,ref:I,children:W,dynamicChildren:U,shapeFlag:os,patchFlag:es,dirs:rs}=h;if(I!=null&&Yl(I,null,k,h,!0),os&256){A.ctx.deactivate(h);return}const hs=os&1&&rs,bs=!_t(h);let Ns;if(bs&&(Ns=z&&z.onVnodeBeforeUnmount)&&ke(Ns,A,h),os&6)J(h.component,k,$);else{if(os&128){h.suspense.unmount(k,$);return}hs&&Tn(h,null,A,"beforeUnmount"),os&64?h.type.remove(h,A,k,O,vs,$):U&&(M!==Ss||es>0&&es&64)?q(U,A,k,!1,!0):(M===Ss&&es&384||!O&&os&16)&&q(W,A,k),$&&un(h)}(bs&&(Ns=z&&z.onVnodeUnmounted)||hs)&&Xs(()=>{Ns&&ke(Ns,A,h),hs&&Tn(h,null,A,"unmounted")},k)},un=h=>{const{type:A,el:k,anchor:$,transition:O}=h;if(A===Ss){h.patchFlag>0&&h.patchFlag&2048&&O&&!O.persisted?h.children.forEach(z=>{z.type===Js?a(z.el):un(z)}):w(k,$);return}if(A===Oo){V(h);return}const M=()=>{a(k),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(h.shapeFlag&1&&O&&!O.persisted){const{leave:z,delayLeave:I}=O,W=()=>z(k,M);I?I(h.el,M,W):W()}else M()},w=(h,A)=>{let k;for(;h!==A;)k=f(h),a(h),h=k;a(A)},J=(h,A,k)=>{h.type.__hmrId&&Du(h);const{bum:$,scope:O,update:M,subTree:z,um:I}=h;$&&Bn($),O.stop(),M&&(M.active=!1,fe(z,h,A,k)),I&&Xs(I,A),Xs(()=>{h.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve()),wu(h)},q=(h,A,k,$=!1,O=!1,M=0)=>{for(let z=M;z<h.length;z++)fe(h[z],A,k,$,O)},X=h=>h.shapeFlag&6?X(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),As=(h,A,k)=>{h==null?A._vnode&&fe(A._vnode,null,null,!0):B(A._vnode||null,h,A,null,null,null,k),fr(),vi(),A._vnode=h},vs={p:B,um:fe,m:ne,r:un,mt:ks,mc:ss,pc:gs,pbc:ds,n:X,o:e};let fs,ps;return n&&([fs,ps]=n(vs)),{render:As,hydrate:fs,createApp:By(As,fs)}}function $n({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Wt(e,n,t=!1){const l=e.children,a=n.children;if(is(l)&&is(a))for(let r=0;r<l.length;r++){const c=l[r];let i=a[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[r]=An(a[r]),i.el=c.el),t||Wt(c,i)),i.type===go&&(i.el=c.el),i.type===Js&&!i.el&&(i.el=c.el)}}function Cy(e){const n=e.slice(),t=[0];let l,a,r,c,i;const p=e.length;for(l=0;l<p;l++){const d=e[l];if(d!==0){if(a=t[t.length-1],e[a]<d){n[l]=a,t.push(l);continue}for(r=0,c=t.length-1;r<c;)i=r+c>>1,e[t[i]]<d?r=i+1:c=i;d<e[t[r]]&&(r>0&&(n[l]=t[r-1]),t[r]=l)}}for(r=t.length,c=t[r-1];r-- >0;)t[r]=c,c=n[c];return t}const ky=e=>e.__isTeleport,Bt=e=>e&&(e.disabled||e.disabled===""),Sr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ql=(e,n)=>{const t=e&&e.to;if(Gs(t))if(n){const l=n(t);return l||P(`Failed to locate Teleport target with selector "${t}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),l}else return P("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!t&&!Bt(e)&&P(`Invalid Teleport target: ${t}`),t},Ey={__isTeleport:!0,process(e,n,t,l,a,r,c,i,p,d){const{mc:u,pc:y,pbc:f,o:{insert:m,querySelector:g,createText:B,createComment:D}}=d,S=Bt(n.props);let{shapeFlag:E,children:x,dynamicChildren:F}=n;if(vn&&(p=!1,F=null),e==null){const V=n.el=D("teleport start"),j=n.anchor=D("teleport end");m(V,t,l),m(j,t,l);const K=n.target=Ql(n.props,g),G=n.targetAnchor=B("");K?(m(G,K),c=c||Sr(K)):S||P("Invalid Teleport target on mount:",K,`(${typeof K})`);const ss=(ls,ds)=>{E&16&&u(x,ls,ds,a,r,c,i,p)};S?ss(t,j):K&&ss(K,G)}else{n.el=e.el;const V=n.anchor=e.anchor,j=n.target=e.target,K=n.targetAnchor=e.targetAnchor,G=Bt(e.props),ss=G?t:j,ls=G?V:K;if(c=c||Sr(j),F?(f(e.dynamicChildren,F,ss,a,r,c,i),Wt(e,n,!0)):p||y(e,n,ss,ls,a,r,c,i,!1),S)G||ko(n,t,V,d,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const ds=n.target=Ql(n.props,g);ds?ko(n,ds,null,d,0):P("Invalid Teleport target on update:",j,`(${typeof j})`)}else G&&ko(n,j,K,d,1)}Qi(n)},remove(e,n,t,l,{um:a,o:{remove:r}},c){const{shapeFlag:i,children:p,anchor:d,targetAnchor:u,target:y,props:f}=e;if(y&&r(u),(c||!Bt(f))&&(r(d),i&16))for(let m=0;m<p.length;m++){const g=p[m];a(g,n,t,!0,!!g.dynamicChildren)}},move:ko,hydrate:wy};function ko(e,n,t,{o:{insert:l},m:a},r=2){r===0&&l(e.targetAnchor,n,t);const{el:c,anchor:i,shapeFlag:p,children:d,props:u}=e,y=r===2;if(y&&l(c,n,t),(!y||Bt(u))&&p&16)for(let f=0;f<d.length;f++)a(d[f],n,t,2);y&&l(i,n,t)}function wy(e,n,t,l,a,r,{o:{nextSibling:c,parentNode:i,querySelector:p}},d){const u=n.target=Ql(n.props,p);if(u){const y=u._lpa||u.firstChild;if(n.shapeFlag&16)if(Bt(n.props))n.anchor=d(c(e),n,i(e),t,l,a,r),n.targetAnchor=y;else{n.anchor=c(e);let f=y;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,u._lpa=n.targetAnchor&&c(n.targetAnchor);break}d(y,n,u,t,l,a,r)}Qi(n)}return n.anchor&&c(n.anchor)}const gE=Ey;function Qi(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const Ss=Symbol("Fragment"),go=Symbol("Text"),Js=Symbol("Comment"),Oo=Symbol("Static"),Vt=[];let Ue=null;function b(e=!1){Vt.push(Ue=e?null:[])}function Sy(){Vt.pop(),Ue=Vt[Vt.length-1]||null}let no=1;function xr(e){no+=e}function Zi(e){return e.dynamicChildren=no>0?Ue||gt:null,Sy(),no>0&&Ue&&Ue.push(e),e}function Z(e,n,t,l,a,r){return Zi(s(e,n,t,l,a,r,!0))}function H(e,n,t,l,a){return Zi(C(e,n,t,l,a,!0))}function xn(e){return e?e.__v_isVNode===!0:!1}function In(e,n){return n.shapeFlag&6&&ut.has(n.type)?(e.shapeFlag&=-257,n.shapeFlag&=-513,!1):e.type===n.type&&e.key===n.key}const xy=(...e)=>Fy(...e),ul="__vInternal",Ji=({key:e})=>e??null,To=({ref:e,ref_key:n,ref_for:t})=>e!=null?Gs(e)||Es(e)||us(e)?{i:Ys,r:e,k:n,f:!!t}:e:null;function s(e,n=null,t=null,l=0,a=null,r=e===Ss?0:1,c=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ji(n),ref:n&&To(n),scopeId:cl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:l,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ys};return i?(Na(p,t),r&128&&e.normalize(p)):t&&(p.shapeFlag|=Gs(t)?8:16),p.key!==p.key&&P("VNode created with invalid key (NaN). VNode type:",p.type),no>0&&!c&&Ue&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&Ue.push(p),p}const C=xy;function Fy(e,n=null,t=null,l=0,a=null,r=!1){if((!e||e===Ju)&&(e||P(`Invalid vnode type when creating vnode: ${e}.`),e=Js),xn(e)){const i=He(e,n,!0);return t&&Na(i,t),no>0&&!r&&Ue&&(i.shapeFlag&6?Ue[Ue.indexOf(e)]=i:Ue.push(i)),i.patchFlag|=-2,i}if(tp(e)&&(e=e.__vccOpts),n){n=ns(n);let{class:i,style:p}=n;i&&!Gs(i)&&(n.class=Ms(i)),xs(p)&&(Go(p)&&!is(p)&&(p=Ws({},p)),n.style=Zs(p))}const c=Gs(e)?1:Oi(e)?128:ky(e)?64:xs(e)?4:us(e)?2:0;return c&4&&Go(e)&&(e=ms(e),P("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,n,t,l,a,c,r,!0)}function ns(e){return e?Go(e)||ul in e?Ws({},e):e:null}function He(e,n,t=!1){const{props:l,ref:a,patchFlag:r,children:c}=e,i=n?ys(l||{},n):l;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Ji(i),ref:n&&n.ref?t&&a?is(a)?a.concat(To(n)):[a,To(n)]:To(n):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&is(c)?c.map(Xi):c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ss?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&He(e.ssContent),ssFallback:e.ssFallback&&He(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Xi(e){const n=He(e);return is(e.children)&&(n.children=e.children.map(Xi)),n}function o(e=" ",n=0){return C(go,null,e,n)}function _s(e="",n=!1){return n?(b(),H(Js,null,e)):C(Js,null,e)}function Pe(e){return e==null||typeof e=="boolean"?C(Js):is(e)?C(Ss,null,e.slice()):typeof e=="object"?An(e):C(go,null,String(e))}function An(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:He(e)}function Na(e,n){let t=0;const{shapeFlag:l}=e;if(n==null)n=null;else if(is(n))t=16;else if(typeof n=="object")if(l&65){const a=n.default;a&&(a._c&&(a._d=!1),Na(e,a()),a._c&&(a._d=!0));return}else{t=32;const a=n._;!a&&!(ul in n)?n._ctx=Ys:a===3&&Ys&&(Ys.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else us(n)?(n={default:n,_ctx:Ys},t=32):(n=String(n),l&64?(t=16,n=[o(n)]):t=8);e.children=n,e.shapeFlag|=t}function ys(...e){const n={};for(let t=0;t<e.length;t++){const l=e[t];for(const a in l)if(a==="class")n.class!==l.class&&(n.class=Ms([n.class,l.class]));else if(a==="style")n.style=Zs([n.style,l.style]);else if(uo(a)){const r=n[a],c=l[a];c&&r!==c&&!(is(r)&&r.includes(c))&&(n[a]=r?[].concat(r,c):c)}else a!==""&&(n[a]=l[a])}return n}function ke(e,n,t,l=null){Se(e,n,7,[t,l])}const Oy=Yi();let Ty=0;function $y(e,n,t){const l=e.type,a=(n?n.appContext:e.appContext)||Oy,r={uid:Ty++,vnode:e,type:l,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ei(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wi(l,a),emitsOptions:xi(l,a),emit:null,emitted:null,propsDefaults:Us,inheritAttrs:l.inheritAttrs,ctx:Us,data:Us,props:Us,attrs:Us,slots:Us,refs:Us,setupState:Us,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Xu(r),r.root=n?n.root:r,r.emit=Ou.bind(null,r),e.ce&&e.ce(r),r}let zs=null;const Je=()=>zs||Ys,vt=e=>{zs=e,e.scope.on()},qn=()=>{zs&&zs.scope.off(),zs=null},Py=On("slot,component");function Zl(e,n){const t=n.isNativeTag||Qc;(Py(e)||t(e))&&P("Do not use built-in or reserved HTML elements as component id: "+e)}function sp(e){return e.vnode.shapeFlag&4}let to=!1;function Ry(e,n=!1){to=n;const{props:t,children:l}=e.vnode,a=sp(e);cy(e,t,a,n),gy(e,l);const r=a?Uy(e,n):void 0;return to=!1,r}function Uy(e,n){var t;const l=e.type;{if(l.name&&Zl(l.name,e.appContext.config),l.components){const r=Object.keys(l.components);for(let c=0;c<r.length;c++)Zl(r[c],e.appContext.config)}if(l.directives){const r=Object.keys(l.directives);for(let c=0;c<r.length;c++)Ii(r[c])}l.compilerOptions&&Iy()&&P('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Ca(new Proxy(e.ctx,Gi)),sy(e);const{setup:a}=l;if(a){const r=e.setupContext=a.length>1?np(e):null;vt(e),tt();const c=rn(a,e,0,[ht(e.props),r]);if(ot(),qn(),Aa(c)){if(c.then(qn,qn),n)return c.then(i=>{Fr(e,i,n)}).catch(i=>{ll(i,e,0)});if(e.asyncDep=c,!e.suspense){const i=(t=l.name)!==null&&t!==void 0?t:"Anonymous";P(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Fr(e,c,n)}else ep(e,n)}function Fr(e,n,t){us(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:xs(n)?(xn(n)&&P("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=n,e.setupState=mi(n),ey(e)):n!==void 0&&P(`setup() should return an object. Received: ${n===null?"null":typeof n}`),ep(e,t)}let Jl;const Iy=()=>!Jl;function ep(e,n,t){const l=e.type;if(!e.render){if(!n&&Jl&&!l.render){const a=l.template||Ia(e).template;if(a){sn(e,"compile");const{isCustomElement:r,compilerOptions:c}=e.appContext.config,{delimiters:i,compilerOptions:p}=l,d=Ws(Ws({isCustomElement:r,delimiters:i},c),p);l.render=Jl(a,d),en(e,"compile")}}e.render=l.render||he}vt(e),tt(),ty(e),ot(),qn(),!l.render&&e.render===he&&!n&&(l.template?P('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):P("Component is missing template or render function."))}function Hy(e){return new Proxy(e.attrs,{get(n,t){return Ko(),be(e,"get","$attrs"),n[t]},set(){return P("setupContext.attrs is readonly."),!1},deleteProperty(){return P("setupContext.attrs is readonly."),!1}})}function np(e){const n=l=>{e.exposed&&P("expose() should be called only once per setup()."),e.exposed=l||{}};let t;return Object.freeze({get attrs(){return t||(t=Hy(e))},get slots(){return ht(e.slots)},get emit(){return(l,...a)=>e.emit(l,...a)},expose:n})}function yl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mi(Ca(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in jn)return jn[t](e)},has(n,t){return t in n||t in jn}}))}const Ny=/(?:^|[-_])(\w)/g,Ly=e=>e.replace(Ny,n=>n.toUpperCase()).replace(/[-_]/g,"");function oo(e,n=!0){return us(e)?e.displayName||e.name:e.name||n&&e.__name}function fl(e,n,t=!1){let l=oo(n);if(!l&&n.__file){const a=n.__file.match(/([^/\\]+)\.\w+$/);a&&(l=a[1])}if(!l&&e&&e.parent){const a=r=>{for(const c in r)if(r[c]===n)return c};l=a(e.components||e.parent.type.components)||a(e.appContext.components)}return l?Ly(l):t?"App":"Anonymous"}function tp(e){return us(e)&&"__vccOpts"in e}const T=(e,n)=>pu(e,n,to);function AE(){return Gy().slots}function Gy(){const e=Je();return e||P("useContext() called without active instance."),e.setupContext||(e.setupContext=np(e))}function st(e,n,t){const l=arguments.length;return l===2?xs(n)&&!is(n)?xn(n)?C(e,null,[n]):C(e,n):C(e,null,n):(l>3?t=Array.prototype.slice.call(arguments,2):l===3&&xn(t)&&(t=[t]),C(e,n,t))}const My=Symbol("ssrContext"),Ky=()=>{{const e=R(My);return e||P("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function vl(e){return!!(e&&e.__v_isShallow)}function Wy(){if(typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},t={style:"color:#b62e24"},l={style:"color:#9d288c"},a={header(y){return xs(y)?y.__isVue?["div",e,"VueInstance"]:Es(y)?["div",{},["span",e,u(y)],"<",i(y.value),">"]:Wn(y)?["div",{},["span",e,vl(y)?"ShallowReactive":"Reactive"],"<",i(y),`>${Sn(y)?" (readonly)":""}`]:Sn(y)?["div",{},["span",e,vl(y)?"ShallowReadonly":"Readonly"],"<",i(y),">"]:null:null},hasBody(y){return y&&y.__isVue},body(y){if(y&&y.__isVue)return["div",{},...r(y.$)]}};function r(y){const f=[];y.type.props&&y.props&&f.push(c("props",ms(y.props))),y.setupState!==Us&&f.push(c("setup",y.setupState)),y.data!==Us&&f.push(c("data",ms(y.data)));const m=p(y,"computed");m&&f.push(c("computed",m));const g=p(y,"inject");return g&&f.push(c("injected",g)),f.push(["div",{},["span",{style:l.style+";opacity:0.66"},"$ (internal): "],["object",{object:y}]]),f}function c(y,f){return f=Ws({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},y],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(m=>["div",{},["span",l,m+": "],i(f[m],!1)])]]:["span",{}]}function i(y,f=!0){return typeof y=="number"?["span",n,y]:typeof y=="string"?["span",t,JSON.stringify(y)]:typeof y=="boolean"?["span",l,y]:xs(y)?["object",{object:f?ms(y):y}]:["span",t,String(y)]}function p(y,f){const m=y.type;if(us(m))return;const g={};for(const B in y.ctx)d(m,B,f)&&(g[B]=y.ctx[B]);return g}function d(y,f,m){const g=y[m];if(is(g)&&g.includes(f)||xs(g)&&f in g||y.extends&&d(y.extends,f,m)||y.mixins&&y.mixins.some(B=>d(B,f,m)))return!0}function u(y){return vl(y)?"ShallowRef":y.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(a):window.devtoolsFormatters=[a]}const Or="3.2.45",Vy="http://www.w3.org/2000/svg",Hn=typeof document<"u"?document:null,Tr=Hn&&Hn.createElement("template"),jy={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,l)=>{const a=n?Hn.createElementNS(Vy,e):Hn.createElement(e,t?{is:t}:void 0);return e==="select"&&l&&l.multiple!=null&&a.setAttribute("multiple",l.multiple),a},createText:e=>Hn.createTextNode(e),createComment:e=>Hn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Hn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,l,a,r){const c=t?t.previousSibling:n.lastChild;if(a&&(a===r||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),t),!(a===r||!(a=a.nextSibling)););else{Tr.innerHTML=l?`<svg>${e}</svg>`:e;const i=Tr.content;if(l){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}n.insertBefore(i,t)}return[c?c.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function qy(e,n,t){const l=e._vtc;l&&(n=(n?[n,...l]:[...l]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function zy(e,n,t){const l=e.style,a=Gs(t);if(t&&!a){for(const r in t)Xl(l,r,t[r]);if(n&&!Gs(n))for(const r in n)t[r]==null&&Xl(l,r,"")}else{const r=l.display;a?n!==t&&(l.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(l.display=r)}}const Yy=/[^\\];\s*$/,$r=/\s*!important$/;function Xl(e,n,t){if(is(t))t.forEach(l=>Xl(e,n,l));else if(t==null&&(t=""),Yy.test(t)&&P(`Unexpected semicolon at the end of '${n}' style value: '${t}'`),n.startsWith("--"))e.setProperty(n,t);else{const l=Qy(e,n);$r.test(t)?e.setProperty(cn(l),t.replace($r,""),"important"):e[l]=t}}const Pr=["Webkit","Moz","ms"],Cl={};function Qy(e,n){const t=Cl[n];if(t)return t;let l=ze(n);if(l!=="filter"&&l in e)return Cl[n]=l;l=Jn(l);for(let a=0;a<Pr.length;a++){const r=Pr[a]+l;if(r in e)return Cl[n]=r}return n}const Rr="http://www.w3.org/1999/xlink";function Zy(e,n,t,l,a){if(l&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Rr,n.slice(6,n.length)):e.setAttributeNS(Rr,n,t);else{const r=Dd(n);t==null||r&&!zc(t)?e.removeAttribute(n):e.setAttribute(n,r?"":t)}}function Jy(e,n,t,l,a,r,c){if(n==="innerHTML"||n==="textContent"){l&&c(l,a,r),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const p=t??"";(e.value!==p||e.tagName==="OPTION")&&(e.value=p),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const p=typeof e[n];p==="boolean"?t=zc(t):t==null&&p==="string"?(t="",i=!0):p==="number"&&(t=0,i=!0)}try{e[n]=t}catch(p){i||P(`Failed setting prop "${n}" on <${e.tagName.toLowerCase()}>: value ${t} is invalid.`,p)}i&&e.removeAttribute(n)}function yt(e,n,t,l){e.addEventListener(n,t,l)}function Xy(e,n,t,l){e.removeEventListener(n,t,l)}function s8(e,n,t,l,a=null){const r=e._vei||(e._vei={}),c=r[n];if(l&&c)c.value=l;else{const[i,p]=e8(n);if(l){const d=r[n]=o8(l,a);yt(e,i,d,p)}else c&&(Xy(e,i,c,p),r[n]=void 0)}}const Ur=/(?:Once|Passive|Capture)$/;function e8(e){let n;if(Ur.test(e)){n={};let l;for(;l=e.match(Ur);)e=e.slice(0,e.length-l[0].length),n[l[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):cn(e.slice(2)),n]}let kl=0;const n8=Promise.resolve(),t8=()=>kl||(n8.then(()=>kl=0),kl=Date.now());function o8(e,n){const t=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=t.attached)return;Se(l8(l,t.value),n,5,[l])};return t.value=e,t.attached=t8(),t}function l8(e,n){if(is(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(l=>a=>!a._stopped&&l&&l(a))}else return n}const Ir=/^on[a-z]/,a8=(e,n,t,l,a=!1,r,c,i,p)=>{n==="class"?qy(e,l,a):n==="style"?zy(e,t,l):uo(n)?Io(n)||s8(e,n,t,l,c):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):r8(e,n,l,a))?Jy(e,n,l,r,c,i,p):(n==="true-value"?e._trueValue=l:n==="false-value"&&(e._falseValue=l),Zy(e,n,l,a))};function r8(e,n,t,l){return l?!!(n==="innerHTML"||n==="textContent"||n in e&&Ir.test(n)&&us(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Ir.test(n)&&Gs(t)?!1:n in e}const fn="transition",Ot="animation",op={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},c8=Ws({},Lu.props,op),Pn=(e,n=[])=>{is(e)?e.forEach(t=>t(...n)):e&&e(...n)},Hr=e=>e?is(e)?e.some(n=>n.length>1):e.length>1:!1;function i8(e){const n={};for(const Y in e)Y in op||(n[Y]=e[Y]);if(e.css===!1)return n;const{name:t="v",type:l,duration:a,enterFromClass:r=`${t}-enter-from`,enterActiveClass:c=`${t}-enter-active`,enterToClass:i=`${t}-enter-to`,appearFromClass:p=r,appearActiveClass:d=c,appearToClass:u=i,leaveFromClass:y=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=e,g=p8(a),B=g&&g[0],D=g&&g[1],{onBeforeEnter:S,onEnter:E,onEnterCancelled:x,onLeave:F,onLeaveCancelled:V,onBeforeAppear:j=S,onAppear:K=E,onAppearCancelled:G=x}=n,ss=(Y,Ds,Is)=>{mn(Y,Ds?u:i),mn(Y,Ds?d:c),Is&&Is()},ls=(Y,Ds)=>{Y._isLeaving=!1,mn(Y,y),mn(Y,m),mn(Y,f),Ds&&Ds()},ds=Y=>(Ds,Is)=>{const ks=Y?K:E,Hs=()=>ss(Ds,Y,Is);Pn(ks,[Ds,Hs]),Nr(()=>{mn(Ds,Y?p:r),nn(Ds,Y?u:i),Hr(ks)||Lr(Ds,l,B,Hs)})};return Ws(n,{onBeforeEnter(Y){Pn(S,[Y]),nn(Y,r),nn(Y,c)},onBeforeAppear(Y){Pn(j,[Y]),nn(Y,p),nn(Y,d)},onEnter:ds(!1),onAppear:ds(!0),onLeave(Y,Ds){Y._isLeaving=!0;const Is=()=>ls(Y,Ds);nn(Y,y),ap(),nn(Y,f),Nr(()=>{Y._isLeaving&&(mn(Y,y),nn(Y,m),Hr(F)||Lr(Y,l,D,Is))}),Pn(F,[Y,Is])},onEnterCancelled(Y){ss(Y,!1),Pn(x,[Y])},onAppearCancelled(Y){ss(Y,!0),Pn(G,[Y])},onLeaveCancelled(Y){ls(Y),Pn(V,[Y])}})}function p8(e){if(e==null)return null;if(xs(e))return[El(e.enter),El(e.leave)];{const n=El(e);return[n,n]}}function El(e){const n=Zt(e);return d8(n),n}function d8(e){typeof e!="number"?P(`<transition> explicit duration is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&P("<transition> explicit duration is NaN - the duration expression might be incorrect.")}function nn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function mn(e,n){n.split(/\s+/).forEach(l=>l&&e.classList.remove(l));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function Nr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let u8=0;function Lr(e,n,t,l){const a=e._endId=++u8,r=()=>{a===e._endId&&l()};if(t)return setTimeout(r,t);const{type:c,timeout:i,propCount:p}=lp(e,n);if(!c)return l();const d=c+"end";let u=0;const y=()=>{e.removeEventListener(d,f),r()},f=m=>{m.target===e&&++u>=p&&y()};setTimeout(()=>{u<p&&y()},i+1),e.addEventListener(d,f)}function lp(e,n){const t=window.getComputedStyle(e),l=g=>(t[g]||"").split(", "),a=l(`${fn}Delay`),r=l(`${fn}Duration`),c=Gr(a,r),i=l(`${Ot}Delay`),p=l(`${Ot}Duration`),d=Gr(i,p);let u=null,y=0,f=0;n===fn?c>0&&(u=fn,y=c,f=r.length):n===Ot?d>0&&(u=Ot,y=d,f=p.length):(y=Math.max(c,d),u=y>0?c>d?fn:Ot:null,f=u?u===fn?r.length:p.length:0);const m=u===fn&&/\b(transform|all)(,|$)/.test(l(`${fn}Property`).toString());return{type:u,timeout:y,propCount:f,hasTransform:m}}function Gr(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,l)=>Mr(t)+Mr(e[l])))}function Mr(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ap(){return document.body.offsetHeight}const rp=new WeakMap,cp=new WeakMap,y8={name:"TransitionGroup",props:Ws({},c8,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Je(),l=$i();let a,r;return Pa(()=>{if(!a.length)return;const c=e.moveClass||`${e.name||"v"}-move`;if(!A8(a[0].el,t.vnode.el,c))return;a.forEach(h8),a.forEach(m8);const i=a.filter(g8);ap(),i.forEach(p=>{const d=p.el,u=d.style;nn(d,c),u.transform=u.webkitTransform=u.transitionDuration="";const y=d._moveCb=f=>{f&&f.target!==d||(!f||/transform$/.test(f.propertyName))&&(d.removeEventListener("transitionend",y),d._moveCb=null,mn(d,c))};d.addEventListener("transitionend",y)})}),()=>{const c=ms(e),i=i8(c);let p=c.tag||Ss;a=r,r=n.default?$a(n.default()):[];for(let d=0;d<r.length;d++){const u=r[d];u.key!=null?bt(u,eo(u,i,l,t)):P("<TransitionGroup> children must be keyed.")}if(a)for(let d=0;d<a.length;d++){const u=a[d];bt(u,eo(u,i,l,t)),rp.set(u,u.el.getBoundingClientRect())}return C(p,null,r)}}},f8=y8;function h8(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function m8(e){cp.set(e,e.el.getBoundingClientRect())}function g8(e){const n=rp.get(e),t=cp.get(e),l=n.left-t.left,a=n.top-t.top;if(l||a){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${l}px,${a}px)`,r.transitionDuration="0s",e}}function A8(e,n,t){const l=e.cloneNode();e._vtc&&e._vtc.forEach(c=>{c.split(/\s+/).forEach(i=>i&&l.classList.remove(i))}),t.split(/\s+/).forEach(c=>c&&l.classList.add(c)),l.style.display="none";const a=n.nodeType===1?n:n.parentNode;a.appendChild(l);const{hasTransform:r}=lp(l);return a.removeChild(l),r}const Kr=e=>{const n=e.props["onUpdate:modelValue"]||!1;return is(n)?t=>Bn(n,t):n};function _8(e){e.target.composing=!0}function Wr(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const B8={created(e,{modifiers:{lazy:n,trim:t,number:l}},a){e._assign=Kr(a);const r=l||a.props&&a.props.type==="number";yt(e,n?"change":"input",c=>{if(c.target.composing)return;let i=e.value;t&&(i=i.trim()),r&&(i=Zt(i)),e._assign(i)}),t&&yt(e,"change",()=>{e.value=e.value.trim()}),n||(yt(e,"compositionstart",_8),yt(e,"compositionend",Wr),yt(e,"change",Wr))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:l,number:a}},r){if(e._assign=Kr(r),e.composing||document.activeElement===e&&e.type!=="range"&&(t||l&&e.value.trim()===n||(a||e.type==="number")&&Zt(e.value)===n))return;const c=n??"";e.value!==c&&(e.value=c)}},D8={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Vr=(e,n)=>t=>{if(!("key"in t))return;const l=cn(t.key);if(n.some(a=>a===l||D8[a]===l))return e(t)},ip={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Tt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:l}){!n!=!t&&(l?n?(l.beforeEnter(e),Tt(e,!0),l.enter(e)):l.leave(e,()=>{Tt(e,!1)}):Tt(e,n))},beforeUnmount(e,{value:n}){Tt(e,n)}};function Tt(e,n){e.style.display=n?e._vod:"none"}const b8=Ws({patchProp:a8},jy);let jr;function v8(){return jr||(jr=by(b8))}const _E=(...e)=>{const n=v8().createApp(...e);C8(n),k8(n);const{mount:t}=n;return n.mount=l=>{const a=E8(l);if(!a)return;const r=n._component;!us(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const c=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),c},n};function C8(e){Object.defineProperty(e.config,"isNativeTag",{value:n=>Ad(n)||_d(n),writable:!1})}function k8(e){{const n=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return n},set(){P("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const t=e.config.compilerOptions,l='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return P(l),t},set(){P(l)}})}}function E8(e){if(Gs(e)){const n=document.querySelector(e);return n||P(`Failed to mount app: mount target selector "${e}" returned null.`),n}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&P('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function w8(){Wy()}w8();const pp=Symbol("v-click-clicks"),dp=Symbol("v-click-clicks-elements"),S8=Symbol("v-click-clicks-order-map"),up=Symbol("v-click-clicks-disabled"),yp=Symbol("slidev-slide-scale"),N=Symbol("slidev-slidev-context"),x8=Symbol("slidev-route"),F8=Symbol("slidev-slide-context"),O8="slidev-vclick-target",BE="slidev-vclick-hidden",DE="slidev-vclick-fade",bE="slidev-vclick-hidden-explicitly",vE="slidev-vclick-current",CE="slidev-vclick-prior";function T8(e){return e=e??[],Array.isArray(e)?e:[e]}function $8(e,n){if(!e)return!1;const t=e.indexOf(n);return t>=0?(e.splice(t,1),!0):!1}function P8(...e){let n,t,l;e.length===1?(n=0,l=1,[t]=e):[n,t,l=1]=e;const a=[];let r=n;for(;r<t;)a.push(r),r+=l||1;return a}function R8(e){return e!=null}function U8(e,n){return Object.fromEntries(Object.entries(e).map(([t,l])=>n(t,l)).filter(R8))}const Mt={theme:"default",title:"From Dev to Prod with Acorn",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:!0,download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"dev-to-prod-with-acorn-2023",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"fade-out",class:"text-center"},Os=Mt,Cn=Os.aspectRatio??16/9,kn=Os.canvasWidth??980,La=Math.ceil(kn/Cn),Ga=T(()=>U8(Os.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function xe(e,n,t){Object.defineProperty(e,n,{value:t,writable:!0,enumerable:!1})}const lt=se({page:0,clicks:0});let I8=[],H8=[];xe(lt,"$syncUp",!0);xe(lt,"$syncDown",!0);xe(lt,"$paused",!1);xe(lt,"$onSet",e=>I8.push(e));xe(lt,"$onPatch",e=>H8.push(e));xe(lt,"$patch",async()=>!1);function fp(e,n,t=!1){const l=[];let a=!1,r=!1,c,i;const p=se(n);function d(m){l.push(m)}function u(m,g){clearTimeout(c),a=!0,p[m]=g,c=setTimeout(()=>a=!1,0)}function y(m){a||(clearTimeout(i),r=!0,Object.entries(m).forEach(([g,B])=>{p[g]=B}),i=setTimeout(()=>r=!1,0))}function f(m){let g;t?t&&window.addEventListener("storage",D=>{D&&D.key===m&&D.newValue&&y(JSON.parse(D.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",D=>y(D.data)));function B(){!t&&g&&!r?g.postMessage(ms(p)):t&&!r&&window.localStorage.setItem(m,JSON.stringify(p)),a||l.forEach(D=>D(p))}if(Ks(p,B,{deep:!0}),t){const D=window.localStorage.getItem(m);D&&y(JSON.parse(D))}}return{init:f,onPatch:d,patch:u,state:p}}const{init:kE,onPatch:EE,patch:wE,state:wl}=fp(lt,{page:1,clicks:0}),at=se({});let N8=[],L8=[];xe(at,"$syncUp",!0);xe(at,"$syncDown",!0);xe(at,"$paused",!1);xe(at,"$onSet",e=>N8.push(e));xe(at,"$onPatch",e=>L8.push(e));xe(at,"$patch",async()=>!1);const{init:SE,onPatch:G8,patch:hp,state:jo}=fp(at,{},!1),M8="modulepreload",K8=function(e){return"/"+e},qr={},et=function(n,t,l){if(!t||t.length===0)return n();const a=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=K8(r),r in qr)return;qr[r]=!0;const c=r.endsWith(".css"),i=c?'[rel="stylesheet"]':"";if(!!l)for(let u=a.length-1;u>=0;u--){const y=a[u];if(y.href===r&&(!c||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":M8,c||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),c)return new Promise((u,y)=>{d.addEventListener("load",u),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};var zr;const Ne=typeof window<"u",W8=e=>typeof e<"u",V8=Object.prototype.toString,lo=e=>typeof e=="function",xE=e=>typeof e=="number",mp=e=>typeof e=="string",FE=e=>V8.call(e)==="[object Object]",sa=()=>+Date.now(),jt=()=>{};Ne&&((zr=window==null?void 0:window.navigator)!=null&&zr.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function de(e){return typeof e=="function"?e():v(e)}function j8(e,n){function t(...l){return new Promise((a,r)=>{Promise.resolve(e(()=>n.apply(this,l),{fn:n,thisArg:this,args:l})).then(a).catch(r)})}return t}const gp=e=>e();function q8(e=gp){const n=as(!0);function t(){n.value=!1}function l(){n.value=!0}const a=(...r)=>{n.value&&e(...r)};return{isActive:Ve(n),pause:t,resume:l,eventFilter:a}}function z8(e){return e}function Y8(e,n){var t;if(typeof e=="number")return e+n;const l=((t=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",a=e.slice(l.length),r=parseFloat(l)+n;return Number.isNaN(r)?e:r+a}function Q8(e,n){let t,l,a;const r=as(!0),c=()=>{r.value=!0,a()};Ks(e,c,{flush:"sync"});const i=lo(n)?n:n.get,p=lo(n)?void 0:n.set,d=gi((u,y)=>(l=u,a=y,{get(){return r.value&&(t=i(),r.value=!1),l(),t},set(f){p==null||p(f)}}));return Object.isExtensible(d)&&(d.trigger=c),d}function Qe(e){return Sd()?(xd(e),!0):!1}function Z8(e){if(!Es(e))return se(e);const n=new Proxy({},{get(t,l,a){return v(Reflect.get(e.value,l,a))},set(t,l,a){return Es(e.value[l])&&!Es(a)?e.value[l].value=a:e.value[l]=a,!0},deleteProperty(t,l){return Reflect.deleteProperty(e.value,l)},has(t,l){return Reflect.has(e.value,l)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return se(n)}function Ap(e){return typeof e=="function"?T(e):as(e)}var J8=Object.defineProperty,X8=Object.defineProperties,sf=Object.getOwnPropertyDescriptors,Yr=Object.getOwnPropertySymbols,ef=Object.prototype.hasOwnProperty,nf=Object.prototype.propertyIsEnumerable,Qr=(e,n,t)=>n in e?J8(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,tf=(e,n)=>{for(var t in n||(n={}))ef.call(n,t)&&Qr(e,t,n[t]);if(Yr)for(var t of Yr(n))nf.call(n,t)&&Qr(e,t,n[t]);return e},of=(e,n)=>X8(e,sf(n));function lf(e){if(!Es(e))return au(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const t in e.value)n[t]=gi(()=>({get(){return e.value[t]},set(l){if(Array.isArray(e.value)){const a=[...e.value];a[t]=l,e.value=a}else{const a=of(tf({},e.value),{[t]:l});Object.setPrototypeOf(a,e.value),e.value=a}}}));return n}function Ma(e,n=!0){Je()?ho(e):n?e():Ie(e)}function OE(e){Je()&&pl(e)}function af(e,n=1e3,t={}){const{immediate:l=!0,immediateCallback:a=!1}=t;let r=null;const c=as(!1);function i(){r&&(clearInterval(r),r=null)}function p(){c.value=!1,i()}function d(){const u=de(n);u<=0||(c.value=!0,a&&e(),i(),r=setInterval(e,u))}if(l&&Ne&&d(),Es(n)||lo(n)){const u=Ks(n,()=>{c.value&&Ne&&d()});Qe(u)}return Qe(p),{isActive:c,pause:p,resume:d}}function rf(e,n,t={}){const{immediate:l=!0}=t,a=as(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function i(){a.value=!1,c()}function p(...d){c(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,e(...d)},de(n))}return l&&(a.value=!0,Ne&&p()),Qe(i),{isPending:Ve(a),start:p,stop:i}}function _p(e=!1,n={}){const{truthyValue:t=!0,falsyValue:l=!1}=n,a=Es(e),r=as(e);function c(i){if(arguments.length)return r.value=i,r.value;{const p=de(t);return r.value=r.value===p?de(l):p,r.value}}return a?c:[r,c]}var Zr=Object.getOwnPropertySymbols,cf=Object.prototype.hasOwnProperty,pf=Object.prototype.propertyIsEnumerable,df=(e,n)=>{var t={};for(var l in e)cf.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&Zr)for(var l of Zr(e))n.indexOf(l)<0&&pf.call(e,l)&&(t[l]=e[l]);return t};function uf(e,n,t={}){const l=t,{eventFilter:a=gp}=l,r=df(l,["eventFilter"]);return Ks(e,j8(a,n),r)}var yf=Object.defineProperty,ff=Object.defineProperties,hf=Object.getOwnPropertyDescriptors,qo=Object.getOwnPropertySymbols,Bp=Object.prototype.hasOwnProperty,Dp=Object.prototype.propertyIsEnumerable,Jr=(e,n,t)=>n in e?yf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,mf=(e,n)=>{for(var t in n||(n={}))Bp.call(n,t)&&Jr(e,t,n[t]);if(qo)for(var t of qo(n))Dp.call(n,t)&&Jr(e,t,n[t]);return e},gf=(e,n)=>ff(e,hf(n)),Af=(e,n)=>{var t={};for(var l in e)Bp.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&qo)for(var l of qo(e))n.indexOf(l)<0&&Dp.call(e,l)&&(t[l]=e[l]);return t};function _f(e,n,t={}){const l=t,{eventFilter:a}=l,r=Af(l,["eventFilter"]),{eventFilter:c,pause:i,resume:p,isActive:d}=q8(a);return{stop:uf(e,n,gf(mf({},r),{eventFilter:c})),pause:i,resume:p,isActive:d}}function we(e){var n;const t=de(e);return(n=t==null?void 0:t.$el)!=null?n:t}const ee=Ne?window:void 0,bp=Ne?window.document:void 0,Bf=Ne?window.navigator:void 0;function Ts(...e){let n,t,l,a;if(mp(e[0])||Array.isArray(e[0])?([t,l,a]=e,n=ee):[n,t,l,a]=e,!n)return jt;Array.isArray(t)||(t=[t]),Array.isArray(l)||(l=[l]);const r=[],c=()=>{r.forEach(u=>u()),r.length=0},i=(u,y,f)=>(u.addEventListener(y,f,a),()=>u.removeEventListener(y,f,a)),p=Ks(()=>we(n),u=>{c(),u&&r.push(...t.flatMap(y=>l.map(f=>i(u,y,f))))},{immediate:!0,flush:"post"}),d=()=>{p(),c()};return Qe(d),d}function Df(e,n,t={}){const{window:l=ee,ignore:a=[],capture:r=!0,detectIframe:c=!1}=t;if(!l)return;let i=!0,p;const d=m=>a.some(g=>{if(typeof g=="string")return Array.from(l.document.querySelectorAll(g)).some(B=>B===m.target||m.composedPath().includes(B));{const B=we(g);return B&&(m.target===B||m.composedPath().includes(B))}}),u=m=>{l.clearTimeout(p);const g=we(e);if(!(!g||g===m.target||m.composedPath().includes(g))){if(m.detail===0&&(i=!d(m)),!i){i=!0;return}n(m)}},y=[Ts(l,"click",u,{passive:!0,capture:r}),Ts(l,"pointerdown",m=>{const g=we(e);g&&(i=!m.composedPath().includes(g)&&!d(m))},{passive:!0}),Ts(l,"pointerup",m=>{if(m.button===0){const g=m.composedPath();m.composedPath=()=>g,p=l.setTimeout(()=>u(m),50)}},{passive:!0}),c&&Ts(l,"blur",m=>{var g;const B=we(e);((g=l.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(B!=null&&B.contains(l.document.activeElement))&&n(m)})].filter(Boolean);return()=>y.forEach(m=>m())}const bf=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function vf(...e){let n,t,l={};e.length===3?(n=e[0],t=e[1],l=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,t=e[0],l=e[1]):(n=e[0],t=e[1]):(n=!0,t=e[0]);const{target:a=ee,eventName:r="keydown",passive:c=!1}=l,i=bf(n);return Ts(a,r,d=>{i(d)&&t(d)},c)}function Cf(e={}){var n;const{window:t=ee}=e,l=(n=e.document)!=null?n:t==null?void 0:t.document,a=Q8(()=>null,()=>l==null?void 0:l.activeElement);return t&&(Ts(t,"blur",r=>{r.relatedTarget===null&&a.trigger()},!0),Ts(t,"focus",a.trigger,!0)),a}function Ao(e,n=!1){const t=as(),l=()=>t.value=Boolean(e());return l(),Ma(l,n),t}function ft(e,n={}){const{window:t=ee}=n,l=Ao(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const r=as(!1),c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},i=()=>{l.value&&(c(),a=t.matchMedia(Ap(e).value),r.value=a.matches,"addEventListener"in a?a.addEventListener("change",i):a.addListener(i))};return wt(i),Qe(()=>c()),r}const kf={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Ef=Object.defineProperty,Xr=Object.getOwnPropertySymbols,wf=Object.prototype.hasOwnProperty,Sf=Object.prototype.propertyIsEnumerable,sc=(e,n,t)=>n in e?Ef(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,xf=(e,n)=>{for(var t in n||(n={}))wf.call(n,t)&&sc(e,t,n[t]);if(Xr)for(var t of Xr(n))Sf.call(n,t)&&sc(e,t,n[t]);return e};function Ff(e,n={}){function t(i,p){let d=e[i];return p!=null&&(d=Y8(d,p)),typeof d=="number"&&(d=`${d}px`),d}const{window:l=ee}=n;function a(i){return l?l.matchMedia(i).matches:!1}const r=i=>ft(`(min-width: ${t(i)})`,n),c=Object.keys(e).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>r(p),enumerable:!0,configurable:!0}),i),{});return xf({greater(i){return ft(`(min-width: ${t(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return ft(`(max-width: ${t(i,-.1)})`,n)},smallerOrEqual(i){return ft(`(max-width: ${t(i)})`,n)},between(i,p){return ft(`(min-width: ${t(i)}) and (max-width: ${t(p,-.1)})`,n)},isGreater(i){return a(`(min-width: ${t(i,.1)})`)},isGreaterOrEqual(i){return a(`(min-width: ${t(i)})`)},isSmaller(i){return a(`(max-width: ${t(i,-.1)})`)},isSmallerOrEqual(i){return a(`(max-width: ${t(i)})`)},isInBetween(i,p){return a(`(min-width: ${t(i)}) and (max-width: ${t(p,-.1)})`)}},c)}function Of(e={}){const{navigator:n=Bf,read:t=!1,source:l,copiedDuring:a=1500,legacy:r=!1}=e,c=["copy","cut"],i=Ao(()=>n&&"clipboard"in n),p=T(()=>i.value||r),d=as(""),u=as(!1),y=rf(()=>u.value=!1,a);function f(){i.value?n.clipboard.readText().then(D=>{d.value=D}):d.value=B()}if(p.value&&t)for(const D of c)Ts(D,f);async function m(D=de(l)){p.value&&D!=null&&(i.value?await n.clipboard.writeText(D):g(D),d.value=D,u.value=!0,y.start())}function g(D){const S=document.createElement("textarea");S.value=D??"",S.style.position="absolute",S.style.opacity="0",document.body.appendChild(S),S.select(),document.execCommand("copy"),S.remove()}function B(){var D,S,E;return(E=(S=(D=document==null?void 0:document.getSelection)==null?void 0:D.call(document))==null?void 0:S.toString())!=null?E:""}return{isSupported:p,text:d,copied:u,copy:m}}function Tf(e){return JSON.parse(JSON.stringify(e))}const ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},na="__vueuse_ssr_handlers__";ea[na]=ea[na]||{};const $f=ea[na];function Pf(e,n){return $f[e]||n}function Rf(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Uf=Object.defineProperty,ec=Object.getOwnPropertySymbols,If=Object.prototype.hasOwnProperty,Hf=Object.prototype.propertyIsEnumerable,nc=(e,n,t)=>n in e?Uf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,tc=(e,n)=>{for(var t in n||(n={}))If.call(n,t)&&nc(e,t,n[t]);if(ec)for(var t of ec(n))Hf.call(n,t)&&nc(e,t,n[t]);return e};const Nf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Le(e,n,t,l={}){var a;const{flush:r="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,mergeDefaults:d=!1,shallow:u,window:y=ee,eventFilter:f,onError:m=K=>{console.error(K)}}=l,g=(u?Ye:as)(n);if(!t)try{t=Pf("getDefaultStorage",()=>{var K;return(K=ee)==null?void 0:K.localStorage})()}catch(K){m(K)}if(!t)return g;const B=de(n),D=Rf(B),S=(a=l.serializer)!=null?a:Nf[D],{pause:E,resume:x}=_f(g,()=>F(g.value),{flush:r,deep:c,eventFilter:f});return y&&i&&Ts(y,"storage",j),j(),g;function F(K){try{if(K==null)t.removeItem(e);else{const G=S.write(K),ss=t.getItem(e);ss!==G&&(t.setItem(e,G),y&&(y==null||y.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:ss,newValue:G,storageArea:t}))))}}catch(G){m(G)}}function V(K){const G=K?K.newValue:t.getItem(e);if(G==null)return p&&B!==null&&t.setItem(e,S.write(B)),B;if(!K&&d){const ss=S.read(G);return lo(d)?d(ss,B):D==="object"&&!Array.isArray(ss)?tc(tc({},B),ss):ss}else return typeof G!="string"?G:S.read(G)}function j(K){if(!(K&&K.storageArea!==t)){if(K&&K.key==null){g.value=B;return}if(!(K&&K.key!==e)){E();try{g.value=V(K)}catch(G){m(G)}finally{K?Ie(x):x()}}}}}function Lf(e){return ft("(prefers-color-scheme: dark)",e)}var Gf=Object.defineProperty,Mf=Object.defineProperties,Kf=Object.getOwnPropertyDescriptors,oc=Object.getOwnPropertySymbols,Wf=Object.prototype.hasOwnProperty,Vf=Object.prototype.propertyIsEnumerable,lc=(e,n,t)=>n in e?Gf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,jf=(e,n)=>{for(var t in n||(n={}))Wf.call(n,t)&&lc(e,t,n[t]);if(oc)for(var t of oc(n))Vf.call(n,t)&&lc(e,t,n[t]);return e},qf=(e,n)=>Mf(e,Kf(n));function TE(e,n={}){var t,l,a;const r=(t=n.draggingElement)!=null?t:ee,c=(l=n.handle)!=null?l:e,i=as((a=de(n.initialValue))!=null?a:{x:0,y:0}),p=as(),d=g=>n.pointerTypes?n.pointerTypes.includes(g.pointerType):!0,u=g=>{de(n.preventDefault)&&g.preventDefault(),de(n.stopPropagation)&&g.stopPropagation()},y=g=>{var B;if(!d(g)||de(n.exact)&&g.target!==de(e))return;const D=de(e).getBoundingClientRect(),S={x:g.clientX-D.left,y:g.clientY-D.top};((B=n.onStart)==null?void 0:B.call(n,S,g))!==!1&&(p.value=S,u(g))},f=g=>{var B;d(g)&&p.value&&(i.value={x:g.clientX-p.value.x,y:g.clientY-p.value.y},(B=n.onMove)==null||B.call(n,i.value,g),u(g))},m=g=>{var B;d(g)&&p.value&&(p.value=void 0,(B=n.onEnd)==null||B.call(n,i.value,g),u(g))};return Ne&&(Ts(c,"pointerdown",y,!0),Ts(r,"pointermove",f,!0),Ts(r,"pointerup",m,!0)),qf(jf({},lf(i)),{position:i,isDragging:T(()=>!!p.value),style:T(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var ac=Object.getOwnPropertySymbols,zf=Object.prototype.hasOwnProperty,Yf=Object.prototype.propertyIsEnumerable,Qf=(e,n)=>{var t={};for(var l in e)zf.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(e!=null&&ac)for(var l of ac(e))n.indexOf(l)<0&&Yf.call(e,l)&&(t[l]=e[l]);return t};function Zf(e,n,t={}){const l=t,{window:a=ee}=l,r=Qf(l,["window"]);let c;const i=Ao(()=>a&&"ResizeObserver"in a),p=()=>{c&&(c.disconnect(),c=void 0)},d=Ks(()=>we(e),y=>{p(),i.value&&a&&y&&(c=new ResizeObserver(n),c.observe(y,r))},{immediate:!0,flush:"post"}),u=()=>{p(),d()};return Qe(u),{isSupported:i,stop:u}}function Jf(e,n={}){const{immediate:t=!0,window:l=ee}=n,a=as(!1);let r=0,c=null;function i(u){if(!a.value||!l)return;const y=u-r;e({delta:y,timestamp:u}),r=u,c=l.requestAnimationFrame(i)}function p(){!a.value&&l&&(a.value=!0,c=l.requestAnimationFrame(i))}function d(){a.value=!1,c!=null&&l&&(l.cancelAnimationFrame(c),c=null)}return t&&p(),Qe(d),{isActive:Ve(a),pause:d,resume:p}}function Xf(e,n={width:0,height:0},t={}){const{window:l=ee,box:a="content-box"}=t,r=T(()=>{var p,d;return(d=(p=we(e))==null?void 0:p.namespaceURI)==null?void 0:d.includes("svg")}),c=as(n.width),i=as(n.height);return Zf(e,([p])=>{const d=a==="border-box"?p.borderBoxSize:a==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(l&&r.value){const u=we(e);if(u){const y=l.getComputedStyle(u);c.value=parseFloat(y.width),i.value=parseFloat(y.height)}}else if(d){const u=Array.isArray(d)?d:[d];c.value=u.reduce((y,{inlineSize:f})=>y+f,0),i.value=u.reduce((y,{blockSize:f})=>y+f,0)}else c.value=p.contentRect.width,i.value=p.contentRect.height},t),Ks(()=>we(e),p=>{c.value=p?n.width:0,i.value=p?n.height:0}),{width:c,height:i}}const rc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function sh(e,n={}){const{document:t=bp,autoExit:l=!1}=n,a=e||(t==null?void 0:t.querySelector("html")),r=as(!1);let c=rc[0];const i=Ao(()=>{if(t){for(const B of rc)if(B[1]in t)return c=B,!0}else return!1;return!1}),[p,d,u,,y]=c;async function f(){i.value&&(t!=null&&t[u]&&await t[d](),r.value=!1)}async function m(){if(!i.value)return;await f();const B=we(a);B&&(await B[p](),r.value=!0)}async function g(){r.value?await f():await m()}return t&&Ts(t,y,()=>{r.value=!!(t!=null&&t[u])},!1),l&&Qe(f),{isSupported:i,isFullscreen:r,enter:m,exit:f,toggle:g}}function $E(e,n,t={}){const{root:l,rootMargin:a="0px",threshold:r=.1,window:c=ee}=t,i=Ao(()=>c&&"IntersectionObserver"in c);let p=jt;const d=i.value?Ks(()=>({el:we(e),root:we(l)}),({el:y,root:f})=>{if(p(),!y)return;const m=new IntersectionObserver(n,{root:f,rootMargin:a,threshold:r});m.observe(y),p=()=>{m.disconnect(),p=jt}},{immediate:!0,flush:"post"}):jt,u=()=>{p(),d()};return Qe(u),{isSupported:i,stop:u}}const eh={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function nh(e={}){const{reactive:n=!1,target:t=ee,aliasMap:l=eh,passive:a=!0,onEventFired:r=jt}=e,c=se(new Set),i={toJSON(){return{}},current:c},p=n?se(i):i,d=new Set,u=new Set;function y(B,D){B in p&&(n?p[B]=D:p[B].value=D)}function f(){c.clear();for(const B of u)y(B,!1)}function m(B,D){var S,E;const x=(S=B.key)==null?void 0:S.toLowerCase(),V=[(E=B.code)==null?void 0:E.toLowerCase(),x].filter(Boolean);x&&(D?c.add(x):c.delete(x));for(const j of V)u.add(j),y(j,D);x==="meta"&&!D?(d.forEach(j=>{c.delete(j),y(j,!1)}),d.clear()):typeof B.getModifierState=="function"&&B.getModifierState("Meta")&&D&&[...c,...V].forEach(j=>d.add(j))}Ts(t,"keydown",B=>(m(B,!0),r(B)),{passive:a}),Ts(t,"keyup",B=>(m(B,!1),r(B)),{passive:a}),Ts("blur",f,{passive:!0}),Ts("focus",f,{passive:!0});const g=new Proxy(p,{get(B,D,S){if(typeof D!="string")return Reflect.get(B,D,S);if(D=D.toLowerCase(),D in l&&(D=l[D]),!(D in p))if(/[+_-]/.test(D)){const x=D.split(/[+_-]/g).map(F=>F.trim());p[D]=T(()=>x.every(F=>v(g[F])))}else p[D]=as(!1);const E=Reflect.get(B,D,S);return n?v(E):E}});return g}function PE(e={}){const{type:n="page",touch:t=!0,resetOnTouchEnds:l=!1,initialValue:a={x:0,y:0},window:r=ee,eventFilter:c}=e,i=as(a.x),p=as(a.y),d=as(null),u=B=>{n==="page"?(i.value=B.pageX,p.value=B.pageY):n==="client"?(i.value=B.clientX,p.value=B.clientY):n==="movement"&&(i.value=B.movementX,p.value=B.movementY),d.value="mouse"},y=()=>{i.value=a.x,p.value=a.y},f=B=>{if(B.touches.length>0){const D=B.touches[0];n==="page"?(i.value=D.pageX,p.value=D.pageY):n==="client"&&(i.value=D.clientX,p.value=D.clientY),d.value="touch"}},m=B=>c===void 0?u(B):c(()=>u(B),{}),g=B=>c===void 0?f(B):c(()=>f(B),{});return r&&(Ts(r,"mousemove",m,{passive:!0}),Ts(r,"dragover",m,{passive:!0}),t&&n!=="movement"&&(Ts(r,"touchstart",g,{passive:!0}),Ts(r,"touchmove",g,{passive:!0}),l&&Ts(r,"touchend",y,{passive:!0}))),{x:i,y:p,sourceType:d}}var an;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(an||(an={}));function th(e,n={}){const t=Ap(e),{threshold:l=50,onSwipe:a,onSwipeEnd:r,onSwipeStart:c}=n,i=se({x:0,y:0}),p=(j,K)=>{i.x=j,i.y=K},d=se({x:0,y:0}),u=(j,K)=>{d.x=j,d.y=K},y=T(()=>i.x-d.x),f=T(()=>i.y-d.y),{max:m,abs:g}=Math,B=T(()=>m(g(y.value),g(f.value))>=l),D=as(!1),S=as(!1),E=T(()=>B.value?g(y.value)>g(f.value)?y.value>0?an.LEFT:an.RIGHT:f.value>0?an.UP:an.DOWN:an.NONE),x=j=>{var K,G,ss;const ls=j.buttons===0,ds=j.buttons===1;return(ss=(G=(K=n.pointerTypes)==null?void 0:K.includes(j.pointerType))!=null?G:ls||ds)!=null?ss:!0},F=[Ts(e,"pointerdown",j=>{var K,G;if(!x(j))return;S.value=!0,(G=(K=t.value)==null?void 0:K.style)==null||G.setProperty("touch-action","none");const ss=j.target;ss==null||ss.setPointerCapture(j.pointerId);const{clientX:ls,clientY:ds}=j;p(ls,ds),u(ls,ds),c==null||c(j)}),Ts(e,"pointermove",j=>{if(!x(j)||!S.value)return;const{clientX:K,clientY:G}=j;u(K,G),!D.value&&B.value&&(D.value=!0),D.value&&(a==null||a(j))}),Ts(e,"pointerup",j=>{var K,G;x(j)&&(D.value&&(r==null||r(j,E.value)),S.value=!1,D.value=!1,(G=(K=t.value)==null?void 0:K.style)==null||G.setProperty("touch-action","initial"))})],V=()=>F.forEach(j=>j());return{isSwiping:Ve(D),direction:Ve(E),posStart:Ve(i),posEnd:Ve(d),distanceX:y,distanceY:f,stop:V}}let oh=0;function RE(e,n={}){const t=as(!1),{document:l=bp,immediate:a=!0,manual:r=!1,id:c=`vueuse_styletag_${++oh}`}=n,i=as(e);let p=()=>{};const d=()=>{if(!l)return;const y=l.getElementById(c)||l.createElement("style");y.isConnected||(y.type="text/css",y.id=c,n.media&&(y.media=n.media),l.head.appendChild(y)),!t.value&&(p=Ks(i,f=>{y.textContent=f},{immediate:!0}),t.value=!0)},u=()=>{!l||!t.value||(p(),l.head.removeChild(l.getElementById(c)),t.value=!1)};return a&&!r&&Ma(d),r||Qe(u),{id:c,css:i,unload:u,load:d,isLoaded:Ve(t)}}var lh=Object.defineProperty,cc=Object.getOwnPropertySymbols,ah=Object.prototype.hasOwnProperty,rh=Object.prototype.propertyIsEnumerable,ic=(e,n,t)=>n in e?lh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ch=(e,n)=>{for(var t in n||(n={}))ah.call(n,t)&&ic(e,t,n[t]);if(cc)for(var t of cc(n))rh.call(n,t)&&ic(e,t,n[t]);return e};function UE(e={}){const{controls:n=!1,offset:t=0,immediate:l=!0,interval:a="requestAnimationFrame",callback:r}=e,c=as(sa()+t),i=()=>c.value=sa()+t,p=r?()=>{i(),r(c.value)}:i,d=a==="requestAnimationFrame"?Jf(p,{immediate:l}):af(p,a,{immediate:l});return n?ch({timestamp:c},d):c}var ih=Object.defineProperty,pc=Object.getOwnPropertySymbols,ph=Object.prototype.hasOwnProperty,dh=Object.prototype.propertyIsEnumerable,dc=(e,n,t)=>n in e?ih(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,uh=(e,n)=>{for(var t in n||(n={}))ph.call(n,t)&&dc(e,t,n[t]);if(pc)for(var t of pc(n))dh.call(n,t)&&dc(e,t,n[t]);return e};const yh={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};uh({linear:z8},yh);function je(e,n,t,l={}){var a,r,c;const{clone:i=!1,passive:p=!1,eventName:d,deep:u=!1,defaultValue:y}=l,f=Je(),m=t||(f==null?void 0:f.emit)||((a=f==null?void 0:f.$emit)==null?void 0:a.bind(f))||((c=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let g=d;n||(n="modelValue"),g=d||g||`update:${n.toString()}`;const B=S=>i?lo(i)?i(S):Tf(S):S,D=()=>W8(e[n])?B(e[n]):y;if(p){const S=D(),E=as(S);return Ks(()=>e[n],x=>E.value=B(x)),Ks(E,x=>{(x!==e[n]||u)&&m(g,x)},{deep:u}),E}else return T({get(){return D()},set(S){m(g,S)}})}function IE({window:e=ee}={}){if(!e)return as(!1);const n=as(e.document.hasFocus());return Ts(e,"blur",()=>{n.value=!1}),Ts(e,"focus",()=>{n.value=!0}),n}function fh(e={}){const{window:n=ee,initialWidth:t=1/0,initialHeight:l=1/0,listenOrientation:a=!0,includeScrollbar:r=!0}=e,c=as(t),i=as(l),p=()=>{n&&(r?(c.value=n.innerWidth,i.value=n.innerHeight):(c.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return p(),Ma(p),Ts("resize",p,{passive:!0}),a&&Ts("orientationchange",p,{passive:!0}),{width:c,height:i}}function hh(){return vp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function vp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const mh=typeof Proxy=="function",gh="devtools-plugin:setup",Ah="plugin:settings:set";let ct,ta;function _h(){var e;return ct!==void 0||(typeof window<"u"&&window.performance?(ct=!0,ta=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(ct=!0,ta=global.perf_hooks.performance):ct=!1),ct}function Bh(){return _h()?ta.now():Date.now()}class Dh{constructor(n,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=t;const l={};if(n.settings)for(const c in n.settings){const i=n.settings[c];l[c]=i.defaultValue}const a=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},l);try{const c=localStorage.getItem(a),i=JSON.parse(c);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(c){try{localStorage.setItem(a,JSON.stringify(c))}catch{}r=c},now(){return Bh()}},t&&t.on(Ah,(c,i)=>{c===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(c,i)=>this.target?this.target.on[i]:(...p)=>{this.onQueue.push({method:i,args:p})}}),this.proxiedTarget=new Proxy({},{get:(c,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...p)=>(this.targetQueue.push({method:i,args:p,resolve:()=>{}}),this.fallbacks[i](...p)):(...p)=>new Promise(d=>{this.targetQueue.push({method:i,args:p,resolve:d})})})}async setRealTarget(n){this.target=n;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function bh(e,n){const t=e,l=vp(),a=hh(),r=mh&&t.enableEarlyProxy;if(a&&(l.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))a.emit(gh,e,n);else{const c=r?new Dh(t,a):null;(l.__VUE_DEVTOOLS_PLUGINS__=l.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:n,proxy:c}),c&&n(c.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const on=typeof window<"u";function vh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ws=Object.assign;function Sl(e,n){const t={};for(const l in n){const a=n[l];t[l]=ve(a)?a.map(e):e(a)}return t}const qt=()=>{},ve=Array.isArray;function Cs(e){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(n))}const Ch=/\/$/,kh=e=>e.replace(Ch,"");function xl(e,n,t="/"){let l,a={},r="",c="";const i=n.indexOf("#");let p=n.indexOf("?");return i<p&&i>=0&&(p=-1),p>-1&&(l=n.slice(0,p),r=n.slice(p+1,i>-1?i:n.length),a=e(r)),i>-1&&(l=l||n.slice(0,i),c=n.slice(i,n.length)),l=Sh(l??n,t),{fullPath:l+(r&&"?")+r+c,path:l,query:a,hash:c}}function Eh(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function uc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function yc(e,n,t){const l=n.matched.length-1,a=t.matched.length-1;return l>-1&&l===a&&Fn(n.matched[l],t.matched[a])&&Cp(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Fn(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Cp(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!wh(e[t],n[t]))return!1;return!0}function wh(e,n){return ve(e)?fc(e,n):ve(n)?fc(n,e):e===n}function fc(e,n){return ve(n)?e.length===n.length&&e.every((t,l)=>t===n[l]):e.length===1&&e[0]===n}function Sh(e,n){if(e.startsWith("/"))return e;if(!n.startsWith("/"))return Cs(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${n}". It should look like "/${n}".`),e;if(!e)return n;const t=n.split("/"),l=e.split("/");let a=t.length-1,r,c;for(r=0;r<l.length;r++)if(c=l[r],c!==".")if(c==="..")a>1&&a--;else break;return t.slice(0,a).join("/")+"/"+l.slice(r-(r===l.length?1:0)).join("/")}var ao;(function(e){e.pop="pop",e.push="push"})(ao||(ao={}));var zt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(zt||(zt={}));function xh(e){if(!e)if(on){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),kh(e)}const Fh=/^[^#]+#/;function Oh(e,n){return e.replace(Fh,"#")+n}function Th(e,n){const t=document.documentElement.getBoundingClientRect(),l=e.getBoundingClientRect();return{behavior:n.behavior,left:l.left-t.left-(n.left||0),top:l.top-t.top-(n.top||0)}}const hl=()=>({left:window.pageXOffset,top:window.pageYOffset});function $h(e){let n;if("el"in e){const t=e.el,l=typeof t=="string"&&t.startsWith("#");if(typeof e.el=="string"&&(!l||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(l&&r){Cs(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Cs(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof t=="string"?l?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!a){Cs(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}n=Th(a,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function hc(e,n){return(history.state?history.state.position-n:-1)+e}const oa=new Map;function Ph(e,n){oa.set(e,n)}function Rh(e){const n=oa.get(e);return oa.delete(e),n}let Uh=()=>location.protocol+"//"+location.host;function kp(e,n){const{pathname:t,search:l,hash:a}=n,r=e.indexOf("#");if(r>-1){let i=a.includes(e.slice(r))?e.slice(r).length:1,p=a.slice(i);return p[0]!=="/"&&(p="/"+p),uc(p,"")}return uc(t,e)+l+a}function Ih(e,n,t,l){let a=[],r=[],c=null;const i=({state:f})=>{const m=kp(e,location),g=t.value,B=n.value;let D=0;if(f){if(t.value=m,n.value=f,c&&c===g){c=null;return}D=B?f.position-B.position:0}else l(m);a.forEach(S=>{S(t.value,g,{delta:D,type:ao.pop,direction:D?D>0?zt.forward:zt.back:zt.unknown})})};function p(){c=t.value}function d(f){a.push(f);const m=()=>{const g=a.indexOf(f);g>-1&&a.splice(g,1)};return r.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(ws({},f.state,{scroll:hl()}),"")}function y(){for(const f of r)f();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:p,listen:d,destroy:y}}function mc(e,n,t,l=!1,a=!1){return{back:e,current:n,forward:t,replaced:l,position:window.history.length,scroll:a?hl():null}}function Hh(e){const{history:n,location:t}=window,l={value:kp(e,t)},a={value:n.state};a.value||r(l.value,{back:null,current:l.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(p,d,u){const y=e.indexOf("#"),f=y>-1?(t.host&&document.querySelector("base")?e:e.slice(y))+p:Uh()+e+p;try{n[u?"replaceState":"pushState"](d,"",f),a.value=d}catch(m){Cs("Error with push/replace State",m),t[u?"replace":"assign"](f)}}function c(p,d){const u=ws({},n.state,mc(a.value.back,p,a.value.forward,!0),d,{position:a.value.position});r(p,u,!0),l.value=p}function i(p,d){const u=ws({},a.value,n.state,{forward:p,scroll:hl()});n.state||Cs(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(u.current,u,!0);const y=ws({},mc(l.value,p,null),{position:u.position+1},d);r(p,y,!1),l.value=p}return{location:l,state:a,push:i,replace:c}}function Nh(e){e=xh(e);const n=Hh(e),t=Ih(e,n.state,n.location,n.replace);function l(r,c=!0){c||t.pauseListeners(),history.go(r)}const a=ws({location:"",base:e,go:l,createHref:Oh.bind(null,e)},n,t);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}function Lh(e){return typeof e=="string"||e&&typeof e=="object"}function Ep(e){return typeof e=="string"||typeof e=="symbol"}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wp=Symbol("navigation failure");var gc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(gc||(gc={}));const Gh={[1]({location:e,currentLocation:n}){return`No match for
 ${JSON.stringify(e)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:e,to:n}){return`Redirected from "${e.fullPath}" to "${Kh(n)}" via a navigation guard.`},[4]({from:e,to:n}){return`Navigation aborted from "${e.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:e,to:n}){return`Navigation cancelled from "${e.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:e,to:n}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Ct(e,n){return ws(new Error(Gh[e](n)),{type:e,[wp]:!0},n)}function Xe(e,n){return e instanceof Error&&wp in e&&(n==null||!!(e.type&n))}const Mh=["params","query","hash"];function Kh(e){if(typeof e=="string")return e;if("path"in e)return e.path;const n={};for(const t of Mh)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}const Ac="[^/]+?",Wh={sensitive:!1,strict:!1,start:!0,end:!0},Vh=/[.+*?^${}()[\]/\\]/g;function jh(e,n){const t=ws({},Wh,n),l=[];let a=t.start?"^":"";const r=[];for(const d of e){const u=d.length?[]:[90];t.strict&&!d.length&&(a+="/");for(let y=0;y<d.length;y++){const f=d[y];let m=40+(t.sensitive?.25:0);if(f.type===0)y||(a+="/"),a+=f.value.replace(Vh,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:B,optional:D,regexp:S}=f;r.push({name:g,repeatable:B,optional:D});const E=S||Ac;if(E!==Ac){m+=10;try{new RegExp(`(${E})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+F.message)}}let x=B?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;y||(x=D&&d.length<2?`(?:/${x})`:"/"+x),D&&(x+="?"),a+=x,m+=20,D&&(m+=-8),B&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}l.push(u)}if(t.strict&&t.end){const d=l.length-1;l[d][l[d].length-1]+=.7000000000000001}t.strict||(a+="/?"),t.end?a+="$":t.strict&&(a+="(?:/|$)");const c=new RegExp(a,t.sensitive?"":"i");function i(d){const u=d.match(c),y={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=r[f-1];y[g.name]=m&&g.repeatable?m.split("/"):m}return y}function p(d){let u="",y=!1;for(const f of e){(!y||!u.endsWith("/"))&&(u+="/"),y=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:B,optional:D}=m,S=g in d?d[g]:"";if(ve(S)&&!B)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=ve(S)?S.join("/"):S;if(!E)if(D)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):y=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:c,score:l,keys:r,parse:i,stringify:p}}function qh(e,n){let t=0;for(;t<e.length&&t<n.length;){const l=n[t]-e[t];if(l)return l;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function zh(e,n){let t=0;const l=e.score,a=n.score;for(;t<l.length&&t<a.length;){const r=qh(l[t],a[t]);if(r)return r;t++}if(Math.abs(a.length-l.length)===1){if(_c(l))return 1;if(_c(a))return-1}return a.length-l.length}function _c(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Yh={type:0,value:""},Qh=/[a-zA-Z0-9_]/;function Zh(e){if(!e)return[[]];if(e==="/")return[[Yh]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function n(m){throw new Error(`ERR (${t})/"${d}": ${m}`)}let t=0,l=t;const a=[];let r;function c(){r&&a.push(r),r=[]}let i=0,p,d="",u="";function y(){d&&(t===0?r.push({type:0,value:d}):t===1||t===2||t===3?(r.length>1&&(p==="*"||p==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:d,regexp:u,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):n("Invalid state to consume buffer"),d="")}function f(){d+=p}for(;i<e.length;){if(p=e[i++],p==="\\"&&t!==2){l=t,t=4;continue}switch(t){case 0:p==="/"?(d&&y(),c()):p===":"?(y(),t=1):f();break;case 4:f(),t=l;break;case 1:p==="("?t=2:Qh.test(p)?f():(y(),t=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+p:t=3:u+=p;break;case 3:y(),t=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,u="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${d}"`),y(),c(),a}function Jh(e,n,t){const l=jh(Zh(e.path),t);{const r=new Set;for(const c of l.keys)r.has(c.name)&&Cs(`Found duplicated params with name "${c.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(c.name)}const a=ws(l,{record:e,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function Xh(e,n){const t=[],l=new Map;n=bc({strict:!1,end:!0,sensitive:!1},n);function a(u){return l.get(u)}function r(u,y,f){const m=!f,g=sm(u);om(g,y),g.aliasOf=f&&f.record;const B=bc(n,u),D=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of x)D.push(ws({},g,{components:f?f.record.components:g.components,path:F,aliasOf:f?f.record:g}))}let S,E;for(const x of D){const{path:F}=x;if(y&&F[0]!=="/"){const V=y.record.path,j=V[V.length-1]==="/"?"":"/";x.path=y.record.path+(F&&j+F)}if(x.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(S=Jh(x,y,B),y&&F[0]==="/"&&lm(S,y),f?(f.alias.push(S),tm(f,S)):(E=E||S,E!==S&&E.alias.push(S),m&&u.name&&!Dc(S)&&c(u.name)),g.children){const V=g.children;for(let j=0;j<V.length;j++)r(V[j],S,f&&f.children[j])}f=f||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&p(S)}return E?()=>{c(E)}:qt}function c(u){if(Ep(u)){const y=l.get(u);y&&(l.delete(u),t.splice(t.indexOf(y),1),y.children.forEach(c),y.alias.forEach(c))}else{const y=t.indexOf(u);y>-1&&(t.splice(y,1),u.record.name&&l.delete(u.record.name),u.children.forEach(c),u.alias.forEach(c))}}function i(){return t}function p(u){let y=0;for(;y<t.length&&zh(u,t[y])>=0&&(u.record.path!==t[y].record.path||!Sp(u,t[y]));)y++;t.splice(y,0,u),u.record.name&&!Dc(u)&&l.set(u.record.name,u)}function d(u,y){let f,m={},g,B;if("name"in u&&u.name){if(f=l.get(u.name),!f)throw Ct(1,{location:u});{const E=Object.keys(u.params||{}).filter(x=>!f.keys.find(F=>F.name===x));E.length&&Cs(`Discarded invalid param(s) "${E.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}B=f.record.name,m=ws(Bc(y.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&Bc(u.params,f.keys.map(E=>E.name))),g=f.stringify(m)}else if("path"in u)g=u.path,g.startsWith("/")||Cs(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=t.find(E=>E.re.test(g)),f&&(m=f.parse(g),B=f.record.name);else{if(f=y.name?l.get(y.name):t.find(E=>E.re.test(y.path)),!f)throw Ct(1,{location:u,currentLocation:y});B=f.record.name,m=ws({},y.params,u.params),g=f.stringify(m)}const D=[];let S=f;for(;S;)D.unshift(S.record),S=S.parent;return{name:B,path:g,params:m,matched:D,meta:nm(D)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:d,removeRoute:c,getRoutes:i,getRecordMatcher:a}}function Bc(e,n){const t={};for(const l of n)l in e&&(t[l]=e[l]);return t}function sm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:em(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function em(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const l in e.components)n[l]=typeof t=="boolean"?t:t[l];return n}function Dc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function nm(e){return e.reduce((n,t)=>ws(n,t.meta),{})}function bc(e,n){const t={};for(const l in e)t[l]=l in n?n[l]:e[l];return t}function la(e,n){return e.name===n.name&&e.optional===n.optional&&e.repeatable===n.repeatable}function tm(e,n){for(const t of e.keys)if(!t.optional&&!n.keys.find(la.bind(null,t)))return Cs(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${t.name}"`);for(const t of n.keys)if(!t.optional&&!e.keys.find(la.bind(null,t)))return Cs(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${t.name}"`)}function om(e,n){n&&n.record.name&&!e.name&&!e.path&&Cs(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function lm(e,n){for(const t of n.keys)if(!e.keys.find(la.bind(null,t)))return Cs(`Absolute path "${e.record.path}" must have the exact same param named "${t.name}" as its parent "${n.record.path}".`)}function Sp(e,n){return n.children.some(t=>t===e||Sp(e,t))}const xp=/#/g,am=/&/g,rm=/\//g,cm=/=/g,im=/\?/g,Fp=/\+/g,pm=/%5B/g,dm=/%5D/g,Op=/%5E/g,um=/%60/g,Tp=/%7B/g,ym=/%7C/g,$p=/%7D/g,fm=/%20/g;function Ka(e){return encodeURI(""+e).replace(ym,"|").replace(pm,"[").replace(dm,"]")}function hm(e){return Ka(e).replace(Tp,"{").replace($p,"}").replace(Op,"^")}function aa(e){return Ka(e).replace(Fp,"%2B").replace(fm,"+").replace(xp,"%23").replace(am,"%26").replace(um,"`").replace(Tp,"{").replace($p,"}").replace(Op,"^")}function mm(e){return aa(e).replace(cm,"%3D")}function gm(e){return Ka(e).replace(xp,"%23").replace(im,"%3F")}function Am(e){return e==null?"":gm(e).replace(rm,"%2F")}function ro(e){try{return decodeURIComponent(""+e)}catch{Cs(`Error decoding "${e}". Using original value`)}return""+e}function _m(e){const n={};if(e===""||e==="?")return n;const l=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<l.length;++a){const r=l[a].replace(Fp," "),c=r.indexOf("="),i=ro(c<0?r:r.slice(0,c)),p=c<0?null:ro(r.slice(c+1));if(i in n){let d=n[i];ve(d)||(d=n[i]=[d]),d.push(p)}else n[i]=p}return n}function vc(e){let n="";for(let t in e){const l=e[t];if(t=mm(t),l==null){l!==void 0&&(n+=(n.length?"&":"")+t);continue}(ve(l)?l.map(r=>r&&aa(r)):[l&&aa(l)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+t,r!=null&&(n+="="+r))})}return n}function Bm(e){const n={};for(const t in e){const l=e[t];l!==void 0&&(n[t]=ve(l)?l.map(a=>a==null?null:""+a):l==null?l:""+l)}return n}const Dm=Symbol("router view location matched"),Cc=Symbol("router view depth"),Wa=Symbol("router"),Pp=Symbol("route location"),ra=Symbol("router view location");function $t(){let e=[];function n(l){return e.push(l),()=>{const a=e.indexOf(l);a>-1&&e.splice(a,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function _n(e,n,t,l,a){const r=l&&(l.enterCallbacks[a]=l.enterCallbacks[a]||[]);return()=>new Promise((c,i)=>{const p=y=>{y===!1?i(Ct(4,{from:t,to:n})):y instanceof Error?i(y):Lh(y)?i(Ct(2,{from:n,to:y})):(r&&l.enterCallbacks[a]===r&&typeof y=="function"&&r.push(y),c())},d=e.call(l&&l.instances[a],n,t,bm(p,n,t));let u=Promise.resolve(d);if(e.length<3&&(u=u.then(p)),e.length>2){const y=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof d=="object"&&"then"in d)u=u.then(f=>p._called?f:(Cs(y),Promise.reject(new Error("Invalid navigation guard"))));else if(d!==void 0&&!p._called){Cs(y),i(new Error("Invalid navigation guard"));return}}u.catch(y=>i(y))})}function bm(e,n,t){let l=0;return function(){l++===1&&Cs(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,l===1&&e.apply(null,arguments)}}function Fl(e,n,t,l){const a=[];for(const r of e){!r.components&&!r.children.length&&Cs(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const c in r.components){let i=r.components[c];{if(!i||typeof i!="object"&&typeof i!="function")throw Cs(`Component "${c}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Cs(`Component "${c}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=i;i=()=>p}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Cs(`Component "${c}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[c]))if(vm(i)){const d=(i.__vccOpts||i)[n];d&&a.push(_n(d,t,l,r,c))}else{let p=i();"catch"in p||(Cs(`Component "${c}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),a.push(()=>p.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${r.path}"`));const u=vh(d)?d.default:d;r.components[c]=u;const f=(u.__vccOpts||u)[n];return f&&_n(f,t,l,r,c)()}))}}}return a}function vm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function kc(e){const n=R(Wa),t=R(Pp),l=T(()=>n.resolve(v(e.to))),a=T(()=>{const{matched:p}=l.value,{length:d}=p,u=p[d-1],y=t.matched;if(!u||!y.length)return-1;const f=y.findIndex(Fn.bind(null,u));if(f>-1)return f;const m=Ec(p[d-2]);return d>1&&Ec(u)===m&&y[y.length-1].path!==m?y.findIndex(Fn.bind(null,p[d-2])):f}),r=T(()=>a.value>-1&&wm(t.params,l.value.params)),c=T(()=>a.value>-1&&a.value===t.matched.length-1&&Cp(t.params,l.value.params));function i(p={}){return Em(p)?n[v(e.replace)?"replace":"push"](v(e.to)).catch(qt):Promise.resolve()}if(on){const p=Je();if(p){const d={route:l.value,isActive:r.value,isExactActive:c.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(d),wt(()=>{d.route=l.value,d.isActive=r.value,d.isExactActive=c.value},{flush:"post"})}}return{route:l,href:T(()=>l.value.href),isActive:r,isExactActive:c,navigate:i}}const Cm=$s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kc,setup(e,{slots:n}){const t=se(kc(e)),{options:l}=R(Wa),a=T(()=>({[wc(e.activeClass,l.linkActiveClass,"router-link-active")]:t.isActive,[wc(e.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=n.default&&n.default(t);return e.custom?r:st("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:a.value},r)}}}),km=Cm;function Em(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function wm(e,n){for(const t in n){const l=n[t],a=e[t];if(typeof l=="string"){if(l!==a)return!1}else if(!ve(a)||a.length!==l.length||l.some((r,c)=>r!==a[c]))return!1}return!0}function Ec(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wc=(e,n,t)=>e??n??t,Sm=$s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){Fm();const l=R(ra),a=T(()=>e.route||l.value),r=R(Cc,0),c=T(()=>{let d=v(r);const{matched:u}=a.value;let y;for(;(y=u[d])&&!y.components;)d++;return d}),i=T(()=>a.value.matched[c.value]);Be(Cc,T(()=>c.value+1)),Be(Dm,i),Be(ra,a);const p=as();return Ks(()=>[p.value,i.value,e.name],([d,u,y],[f,m,g])=>{u&&(u.instances[y]=d,m&&m!==u&&d&&d===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),d&&u&&(!m||!Fn(u,m)||!f)&&(u.enterCallbacks[y]||[]).forEach(B=>B(d))},{flush:"post"}),()=>{const d=a.value,u=e.name,y=i.value,f=y&&y.components[u];if(!f)return Sc(t.default,{Component:f,route:d});const m=y.props[u],g=m?m===!0?d.params:typeof m=="function"?m(d):m:null,D=st(f,ws({},g,n,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(y.instances[u]=null)},ref:p}));if(on&&D.ref){const S={depth:c.value,name:y.name,path:y.path,meta:y.meta};(ve(D.ref)?D.ref.map(x=>x.i):[D.ref.i]).forEach(x=>{x.__vrv_devtools=S})}return Sc(t.default,{Component:D,route:d})||D}}});function Sc(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const xm=Sm;function Fm(){const e=Je(),n=e.parent&&e.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const t=n==="KeepAlive"?"keep-alive":"transition";Cs(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${t}>
    <component :is="Component" />
  </${t}>
</router-view>`)}}function Pt(e,n){const t=ws({},e,{matched:e.matched.map(l=>Nm(l,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:n,value:t}}}function Eo(e){return{_custom:{display:e}}}let Om=0;function Tm(e,n,t){if(n.__hasDevtools)return;n.__hasDevtools=!0;const l=Om++;bh({id:"org.vuejs.router"+(l?"."+l:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((u,y)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Pt(n.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:u,componentInstance:y})=>{if(y.__vrv_devtools){const f=y.__vrv_devtools;u.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Rp})}ve(y.__vrl_devtools)&&(y.__devtoolsApi=a,y.__vrl_devtools.forEach(f=>{let m=Hp,g="";f.isExactActive?(m=Ip,g="This is exactly active"):f.isActive&&(m=Up,g="This link is active"),u.tags.push({label:f.route.path,textColor:0,tooltip:g,backgroundColor:m})}))}),Ks(n.currentRoute,()=>{p(),a.notifyComponentUpdate(),a.sendInspectorTree(i),a.sendInspectorState(i)});const r="router:navigations:"+l;a.addTimelineLayer({id:r,label:`Router${l?" "+l:""} Navigations`,color:4237508}),n.onError((u,y)=>{a.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:y.fullPath,logType:"error",time:a.now(),data:{error:u},groupId:y.meta.__navigationId}})});let c=0;n.beforeEach((u,y)=>{const f={guard:Eo("beforeEach"),from:Pt(y,"Current Location during this navigation"),to:Pt(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:c++}),a.addTimelineEvent({layerId:r,event:{time:a.now(),title:"Start of navigation",subtitle:u.fullPath,data:f,groupId:u.meta.__navigationId}})}),n.afterEach((u,y,f)=>{const m={guard:Eo("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=Eo("❌")):m.status=Eo("✅"),m.from=Pt(y,"Current Location during this navigation"),m.to=Pt(u,"Target location"),a.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:u.fullPath,time:a.now(),data:m,logType:f?"warning":"default",groupId:u.meta.__navigationId}})});const i="router-inspector:"+l;a.addInspector({id:i,label:"Routes"+(l?" "+l:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!d)return;const u=d;let y=t.getRoutes().filter(f=>!f.parent);y.forEach(Gp),u.filter&&(y=y.filter(f=>ca(f,u.filter.toLowerCase()))),y.forEach(f=>Lp(f,n.currentRoute.value)),u.rootNodes=y.map(Np)}let d;a.on.getInspectorTree(u=>{d=u,u.app===e&&u.inspectorId===i&&p()}),a.on.getInspectorState(u=>{if(u.app===e&&u.inspectorId===i){const f=t.getRoutes().find(m=>m.record.__vd_id===u.nodeId);f&&(u.state={options:Pm(f)})}}),a.sendInspectorTree(i),a.sendInspectorState(i)})}function $m(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function Pm(e){const{record:n}=e,t=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&t.push({editable:!1,key:"name",value:n.name}),t.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&t.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(l=>`${l.name}${$m(l)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),n.redirect!=null&&t.push({editable:!1,key:"redirect",value:n.redirect}),e.alias.length&&t.push({editable:!1,key:"aliases",value:e.alias.map(l=>l.record.path)}),Object.keys(e.record.meta).length&&t.push({editable:!1,key:"meta",value:e.record.meta}),t.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(l=>l.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),t}const Rp=15485081,Up=2450411,Ip=8702998,Rm=2282478,Hp=16486972,Um=6710886;function Np(e){const n=[],{record:t}=e;t.name!=null&&n.push({label:String(t.name),textColor:0,backgroundColor:Rm}),t.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:Hp}),e.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:Rp}),e.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:Ip}),e.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:Up}),t.redirect&&n.push({label:typeof t.redirect=="string"?`redirect: ${t.redirect}`:"redirects",textColor:16777215,backgroundColor:Um});let l=t.__vd_id;return l==null&&(l=String(Im++),t.__vd_id=l),{id:l,label:t.path,tags:n,children:e.children.map(Np)}}let Im=0;const Hm=/^\/(.*)\/([a-z]*)$/;function Lp(e,n){const t=n.matched.length&&Fn(n.matched[n.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=t,t||(e.__vd_active=n.matched.some(l=>Fn(l,e.record))),e.children.forEach(l=>Lp(l,n))}function Gp(e){e.__vd_match=!1,e.children.forEach(Gp)}function ca(e,n){const t=String(e.re).match(Hm);if(e.__vd_match=!1,!t||t.length<3)return!1;if(new RegExp(t[1].replace(/\$$/,""),t[2]).test(n))return e.children.forEach(c=>ca(c,n)),e.record.path!=="/"||n==="/"?(e.__vd_match=e.re.test(n),!0):!1;const a=e.record.path.toLowerCase(),r=ro(a);return!n.startsWith("/")&&(r.includes(n)||a.includes(n))||r.startsWith(n)||a.startsWith(n)||e.record.name&&String(e.record.name).includes(n)?!0:e.children.some(c=>ca(c,n))}function Nm(e,n){const t={};for(const l in e)n.includes(l)||(t[l]=e[l]);return t}function Lm(e){const n=Xh(e.routes,e),t=e.parseQuery||_m,l=e.stringifyQuery||vc,a=e.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=$t(),c=$t(),i=$t(),p=Ye(hn);let d=hn;on&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Sl.bind(null,w=>""+w),y=Sl.bind(null,Am),f=Sl.bind(null,ro);function m(w,J){let q,X;return Ep(w)?(q=n.getRecordMatcher(w),X=J):X=w,n.addRoute(X,q)}function g(w){const J=n.getRecordMatcher(w);J?n.removeRoute(J):Cs(`Cannot remove non-existent route "${String(w)}"`)}function B(){return n.getRoutes().map(w=>w.record)}function D(w){return!!n.getRecordMatcher(w)}function S(w,J){if(J=ws({},J||p.value),typeof w=="string"){const ps=xl(t,w,J.path),h=n.resolve({path:ps.path},J),A=a.createHref(ps.fullPath);return A.startsWith("//")?Cs(`Location "${w}" resolved to "${A}". A resolved location cannot start with multiple slashes.`):h.matched.length||Cs(`No match found for location with path "${w}"`),ws(ps,h,{params:f(h.params),hash:ro(ps.hash),redirectedFrom:void 0,href:A})}let q;if("path"in w)"params"in w&&!("name"in w)&&Object.keys(w.params).length&&Cs(`Path "${w.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),q=ws({},w,{path:xl(t,w.path,J.path).path});else{const ps=ws({},w.params);for(const h in ps)ps[h]==null&&delete ps[h];q=ws({},w,{params:y(w.params)}),J.params=y(J.params)}const X=n.resolve(q,J),As=w.hash||"";As&&!As.startsWith("#")&&Cs(`A \`hash\` should always start with the character "#". Replace "${As}" with "#${As}".`),X.params=u(f(X.params));const vs=Eh(l,ws({},w,{hash:hm(As),path:X.path})),fs=a.createHref(vs);return fs.startsWith("//")?Cs(`Location "${w}" resolved to "${fs}". A resolved location cannot start with multiple slashes.`):X.matched.length||Cs(`No match found for location with path "${"path"in w?w.path:w}"`),ws({fullPath:vs,hash:As,query:l===vc?Bm(w.query):w.query||{}},X,{redirectedFrom:void 0,href:fs})}function E(w){return typeof w=="string"?xl(t,w,p.value.path):ws({},w)}function x(w,J){if(d!==w)return Ct(8,{from:J,to:w})}function F(w){return K(w)}function V(w){return F(ws(E(w),{replace:!0}))}function j(w){const J=w.matched[w.matched.length-1];if(J&&J.redirect){const{redirect:q}=J;let X=typeof q=="function"?q(w):q;if(typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=E(X):{path:X},X.params={}),!("path"in X)&&!("name"in X))throw Cs(`Invalid redirect found:
${JSON.stringify(X,null,2)}
 when navigating to "${w.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ws({query:w.query,hash:w.hash,params:"path"in X?{}:w.params},X)}}function K(w,J){const q=d=S(w),X=p.value,As=w.state,vs=w.force,fs=w.replace===!0,ps=j(q);if(ps)return K(ws(E(ps),{state:typeof ps=="object"?ws({},As,ps.state):As,force:vs,replace:fs}),J||q);const h=q;h.redirectedFrom=J;let A;return!vs&&yc(l,X,q)&&(A=Ct(16,{to:h,from:X}),Ps(X,X,!0,!1)),(A?Promise.resolve(A):ss(h,X)).catch(k=>Xe(k)?Xe(k,2)?k:gs(k):Q(k,h,X)).then(k=>{if(k){if(Xe(k,2))return yc(l,S(k.to),h)&&J&&(J._count=J._count?J._count+1:1)>10?(Cs(`Detected an infinite redirection in a navigation guard when going from "${X.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):K(ws({replace:fs},E(k.to),{state:typeof k.to=="object"?ws({},As,k.to.state):As,force:vs}),J||h)}else k=ds(h,X,!0,fs,As);return ls(h,X,k),k})}function G(w,J){const q=x(w,J);return q?Promise.reject(q):Promise.resolve()}function ss(w,J){let q;const[X,As,vs]=Gm(w,J);q=Fl(X.reverse(),"beforeRouteLeave",w,J);for(const ps of X)ps.leaveGuards.forEach(h=>{q.push(_n(h,w,J))});const fs=G.bind(null,w,J);return q.push(fs),it(q).then(()=>{q=[];for(const ps of r.list())q.push(_n(ps,w,J));return q.push(fs),it(q)}).then(()=>{q=Fl(As,"beforeRouteUpdate",w,J);for(const ps of As)ps.updateGuards.forEach(h=>{q.push(_n(h,w,J))});return q.push(fs),it(q)}).then(()=>{q=[];for(const ps of w.matched)if(ps.beforeEnter&&!J.matched.includes(ps))if(ve(ps.beforeEnter))for(const h of ps.beforeEnter)q.push(_n(h,w,J));else q.push(_n(ps.beforeEnter,w,J));return q.push(fs),it(q)}).then(()=>(w.matched.forEach(ps=>ps.enterCallbacks={}),q=Fl(vs,"beforeRouteEnter",w,J),q.push(fs),it(q))).then(()=>{q=[];for(const ps of c.list())q.push(_n(ps,w,J));return q.push(fs),it(q)}).catch(ps=>Xe(ps,8)?ps:Promise.reject(ps))}function ls(w,J,q){for(const X of i.list())X(w,J,q)}function ds(w,J,q,X,As){const vs=x(w,J);if(vs)return vs;const fs=J===hn,ps=on?history.state:{};q&&(X||fs?a.replace(w.fullPath,ws({scroll:fs&&ps&&ps.scroll},As)):a.push(w.fullPath,As)),p.value=w,Ps(w,J,q,fs),gs()}let Y;function Ds(){Y||(Y=a.listen((w,J,q)=>{if(!un.listening)return;const X=S(w),As=j(X);if(As){K(ws(As,{replace:!0}),X).catch(qt);return}d=X;const vs=p.value;on&&Ph(hc(vs.fullPath,q.delta),hl()),ss(X,vs).catch(fs=>Xe(fs,12)?fs:Xe(fs,2)?(K(fs.to,X).then(ps=>{Xe(ps,20)&&!q.delta&&q.type===ao.pop&&a.go(-1,!1)}).catch(qt),Promise.reject()):(q.delta&&a.go(-q.delta,!1),Q(fs,X,vs))).then(fs=>{fs=fs||ds(X,vs,!1),fs&&(q.delta&&!Xe(fs,8)?a.go(-q.delta,!1):q.type===ao.pop&&Xe(fs,20)&&a.go(-1,!1)),ls(X,vs,fs)}).catch(qt)}))}let Is=$t(),ks=$t(),Hs;function Q(w,J,q){gs(w);const X=ks.list();return X.length?X.forEach(As=>As(w,J,q)):(Cs("uncaught error during route navigation:"),console.error(w)),Promise.reject(w)}function cs(){return Hs&&p.value!==hn?Promise.resolve():new Promise((w,J)=>{Is.add([w,J])})}function gs(w){return Hs||(Hs=!w,Ds(),Is.list().forEach(([J,q])=>w?q(w):J()),Is.reset()),w}function Ps(w,J,q,X){const{scrollBehavior:As}=e;if(!on||!As)return Promise.resolve();const vs=!q&&Rh(hc(w.fullPath,0))||(X||!q)&&history.state&&history.state.scroll||null;return Ie().then(()=>As(w,J,vs)).then(fs=>fs&&$h(fs)).catch(fs=>Q(fs,w,J))}const ge=w=>a.go(w);let ne;const fe=new Set,un={currentRoute:p,listening:!0,addRoute:m,removeRoute:g,hasRoute:D,getRoutes:B,resolve:S,options:e,push:F,replace:V,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:r.add,beforeResolve:c.add,afterEach:i.add,onError:ks.add,isReady:cs,install(w){const J=this;w.component("RouterLink",km),w.component("RouterView",xm),w.config.globalProperties.$router=J,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>v(p)}),on&&!ne&&p.value===hn&&(ne=!0,F(a.location).catch(As=>{Cs("Unexpected error when starting the router:",As)}));const q={};for(const As in hn)q[As]=T(()=>p.value[As]);w.provide(Wa,J),w.provide(Pp,se(q)),w.provide(ra,p);const X=w.unmount;fe.add(w),w.unmount=function(){fe.delete(w),fe.size<1&&(d=hn,Y&&Y(),Y=null,p.value=hn,ne=!1,Hs=!1),X()},on&&Tm(w,J,n)}};return un}function it(e){return e.reduce((n,t)=>n.then(()=>t()),Promise.resolve())}function Gm(e,n){const t=[],l=[],a=[],r=Math.max(n.matched.length,e.matched.length);for(let c=0;c<r;c++){const i=n.matched[c];i&&(e.matched.find(d=>Fn(d,i))?l.push(i):t.push(i));const p=e.matched[c];p&&(n.matched.find(d=>Fn(d,p))||a.push(p))}return[t,l,a]}const Ol=as(!1),Yt=as(!1),mt=as(!1),Mm=as(!0),ia=Ff({xs:460,...kf}),zn=fh(),Mp=nh(),Km=T(()=>zn.height.value-zn.width.value/Cn>180),Kp=sh(Ne?document.body:null),Dt=Cf(),Wm=T(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=Dt.value)==null?void 0:e.tagName)||"")||((n=Dt.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),Vm=T(()=>{var e;return["BUTTON","A"].includes(((e=Dt.value)==null?void 0:e.tagName)||"")});Le("slidev-camera","default");Le("slidev-mic","default");const $o=Le("slidev-scale",0),ce=Le("slidev-show-overview",!1),Tl=Le("slidev-presenter-cursor",!0),xc=Le("slidev-show-editor",!1);Le("slidev-editor-width",Ne?window.innerWidth*.4:100);const Wp=_p(ce);function Fc(e,n,t,l=a=>a){return e*l(.5-n*(.5-t))}function jm(e){return[-e[0],-e[1]]}function $e(e,n){return[e[0]+n[0],e[1]+n[1]]}function Ee(e,n){return[e[0]-n[0],e[1]-n[1]]}function Te(e,n){return[e[0]*n,e[1]*n]}function qm(e,n){return[e[0]/n,e[1]/n]}function Rt(e){return[e[1],-e[0]]}function Oc(e,n){return e[0]*n[0]+e[1]*n[1]}function zm(e,n){return e[0]===n[0]&&e[1]===n[1]}function Ym(e){return Math.hypot(e[0],e[1])}function Qm(e){return e[0]*e[0]+e[1]*e[1]}function Tc(e,n){return Qm(Ee(e,n))}function Vp(e){return qm(e,Ym(e))}function Zm(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function Ut(e,n,t){let l=Math.sin(t),a=Math.cos(t),r=e[0]-n[0],c=e[1]-n[1],i=r*a-c*l,p=r*l+c*a;return[i+n[0],p+n[1]]}function pa(e,n,t){return $e(e,Te(Ee(n,e),t))}function $c(e,n,t){return $e(e,Te(n,t))}var{min:pt,PI:Jm}=Math,Pc=.275,It=Jm+1e-4;function Xm(e,n={}){let{size:t=16,smoothing:l=.5,thinning:a=.5,simulatePressure:r=!0,easing:c=Q=>Q,start:i={},end:p={},last:d=!1}=n,{cap:u=!0,easing:y=Q=>Q*(2-Q)}=i,{cap:f=!0,easing:m=Q=>--Q*Q*Q+1}=p;if(e.length===0||t<=0)return[];let g=e[e.length-1].runningLength,B=i.taper===!1?0:i.taper===!0?Math.max(t,g):i.taper,D=p.taper===!1?0:p.taper===!0?Math.max(t,g):p.taper,S=Math.pow(t*l,2),E=[],x=[],F=e.slice(0,10).reduce((Q,cs)=>{let gs=cs.pressure;if(r){let Ps=pt(1,cs.distance/t),ge=pt(1,1-Ps);gs=pt(1,Q+(ge-Q)*(Ps*Pc))}return(Q+gs)/2},e[0].pressure),V=Fc(t,a,e[e.length-1].pressure,c),j,K=e[0].vector,G=e[0].point,ss=G,ls=G,ds=ss,Y=!1;for(let Q=0;Q<e.length;Q++){let{pressure:cs}=e[Q],{point:gs,vector:Ps,distance:ge,runningLength:ne}=e[Q];if(Q<e.length-1&&g-ne<3)continue;if(a){if(r){let vs=pt(1,ge/t),fs=pt(1,1-vs);cs=pt(1,F+(fs-F)*(vs*Pc))}V=Fc(t,a,cs,c)}else V=t/2;j===void 0&&(j=V);let fe=ne<B?y(ne/B):1,un=g-ne<D?m((g-ne)/D):1;V=Math.max(.01,V*Math.min(fe,un));let w=(Q<e.length-1?e[Q+1]:e[Q]).vector,J=Q<e.length-1?Oc(Ps,w):1,q=Oc(Ps,K)<0&&!Y,X=J!==null&&J<0;if(q||X){let vs=Te(Rt(K),V);for(let fs=1/13,ps=0;ps<=1;ps+=fs)ls=Ut(Ee(gs,vs),gs,It*ps),E.push(ls),ds=Ut($e(gs,vs),gs,It*-ps),x.push(ds);G=ls,ss=ds,X&&(Y=!0);continue}if(Y=!1,Q===e.length-1){let vs=Te(Rt(Ps),V);E.push(Ee(gs,vs)),x.push($e(gs,vs));continue}let As=Te(Rt(pa(w,Ps,J)),V);ls=Ee(gs,As),(Q<=1||Tc(G,ls)>S)&&(E.push(ls),G=ls),ds=$e(gs,As),(Q<=1||Tc(ss,ds)>S)&&(x.push(ds),ss=ds),F=cs,K=Ps}let Ds=e[0].point.slice(0,2),Is=e.length>1?e[e.length-1].point.slice(0,2):$e(e[0].point,[1,1]),ks=[],Hs=[];if(e.length===1){if(!(B||D)||d){let Q=$c(Ds,Vp(Rt(Ee(Ds,Is))),-(j||V)),cs=[];for(let gs=1/13,Ps=gs;Ps<=1;Ps+=gs)cs.push(Ut(Q,Ds,It*2*Ps));return cs}}else{if(!(B||D&&e.length===1))if(u)for(let cs=1/13,gs=cs;gs<=1;gs+=cs){let Ps=Ut(x[0],Ds,It*gs);ks.push(Ps)}else{let cs=Ee(E[0],x[0]),gs=Te(cs,.5),Ps=Te(cs,.51);ks.push(Ee(Ds,gs),Ee(Ds,Ps),$e(Ds,Ps),$e(Ds,gs))}let Q=Rt(jm(e[e.length-1].vector));if(D||B&&e.length===1)Hs.push(Is);else if(f){let cs=$c(Is,Q,V);for(let gs=1/29,Ps=gs;Ps<1;Ps+=gs)Hs.push(Ut(cs,Is,It*3*Ps))}else Hs.push($e(Is,Te(Q,V)),$e(Is,Te(Q,V*.99)),Ee(Is,Te(Q,V*.99)),Ee(Is,Te(Q,V)))}return E.concat(Hs,x.reverse(),ks)}function s5(e,n={}){var t;let{streamline:l=.5,size:a=16,last:r=!1}=n;if(e.length===0)return[];let c=.15+(1-l)*.85,i=Array.isArray(e[0])?e:e.map(({x:m,y:g,pressure:B=.5})=>[m,g,B]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let g=1;g<5;g++)i.push(pa(i[0],m,g/4))}i.length===1&&(i=[...i,[...$e(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,u=0,y=p[0],f=i.length-1;for(let m=1;m<i.length;m++){let g=r&&m===f?i[m].slice(0,2):pa(y.point,i[m],c);if(zm(y.point,g))continue;let B=Zm(g,y.point);if(u+=B,m<f&&!d){if(u<a)continue;d=!0}y={point:g,pressure:i[m][2]>=0?i[m][2]:.5,vector:Vp(Ee(y.point,g)),distance:B,runningLength:u},p.push(y)}return p[0].vector=((t=p[1])==null?void 0:t.vector)||[0,0],p}function e5(e,n={}){return Xm(s5(e,n),n)}var n5=()=>({events:{},emit(e,...n){let t=this.events[e]||[];for(let l=0,a=t.length;l<a;l++)t[l](...n)},on(e,n){var t;return(t=this.events[e])!=null&&t.push(n)||(this.events[e]=[n]),()=>{var l;this.events[e]=(l=this.events[e])==null?void 0:l.filter(a=>n!==a)}}});function zo(e,n){return e-n}function t5(e){return e<0?-1:1}function Yo(e){return[Math.abs(e),t5(e)]}function jp(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var o5=2,ln=o5,St=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n;const t=this.drauu.el,l=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*l,y:(e.pageY-a.top)*l,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const r=a.matrixTransform((n=t.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*l,y:r.y*l,pressure:e.pressure}}}createElement(e,n){const t=document.createElementNS("http://www.w3.org/2000/svg",e),l=n?{...this.brush,...n}:this.brush;return t.setAttribute("fill",l.fill??"transparent"),t.setAttribute("stroke",l.color),t.setAttribute("stroke-width",l.size.toString()),t.setAttribute("stroke-linecap","round"),l.dasharray&&t.setAttribute("stroke-dasharray",l.dasharray),t}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(ln))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},l5=class extends St{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=e5(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const t=n.reduce((l,[a,r],c,i)=>{const[p,d]=i[(c+1)%i.length];return l.push(a,r,(a+p)/2,(r+d)/2),l},["M",...n[0],"Q"]);return t.push("Z"),t.map(l=>typeof l=="number"?l.toFixed(2):l).join(" ")}},a5=class extends St{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,t]=Yo(e.x-this.start.x),[l,a]=Yo(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,l);n=r,l=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",l);else{const[r,c]=[this.start.x,this.start.x+n*t].sort(zo),[i,p]=[this.start.y,this.start.y+l*a].sort(zo);this.attr("cx",(r+c)/2),this.attr("cy",(i+p)/2),this.attr("rx",(c-r)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function qp(e,n){const t=document.createElementNS("http://www.w3.org/2000/svg","defs"),l=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",n),l.setAttribute("id",e),l.setAttribute("viewBox","0 -5 10 10"),l.setAttribute("refX","5"),l.setAttribute("refY","0"),l.setAttribute("markerWidth","4"),l.setAttribute("markerHeight","4"),l.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),l.appendChild(a),t.appendChild(l),t}var r5=class extends St{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=jp(),t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.append(qp(n,this.brush.color)),t.append(this.el),this.attr("marker-end",`url(#${n})`),t}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:t}=e;if(this.shiftPressed){const l=e.x-this.start.x,a=e.y-this.start.y;if(a!==0){let r=l/a;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+a*r,t=this.start.y+a):(n=this.start.x+l,t=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-t),this.attr("x2",n),this.attr("y2",t)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",t)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},c5=class extends St{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,t]=Yo(e.x-this.start.x),[l,a]=Yo(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,l);n=r,l=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-l),this.attr("width",n*2),this.attr("height",l*2);else{const[r,c]=[this.start.x,this.start.x+n*t].sort(zo),[i,p]=[this.start.y,this.start.y+l*a].sort(zo);this.attr("x",r),this.attr("y",i),this.attr("width",c-r),this.attr("height",p-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function i5(e,n){const t=e.x-n.x,l=e.y-n.y;return t*t+l*l}function p5(e,n,t){let l=n.x,a=n.y,r=t.x-l,c=t.y-a;if(r!==0||c!==0){const i=((e.x-l)*r+(e.y-a)*c)/(r*r+c*c);i>1?(l=t.x,a=t.y):i>0&&(l+=r*i,a+=c*i)}return r=e.x-l,c=e.y-a,r*r+c*c}function d5(e,n){let t=e[0];const l=[t];let a;for(let r=1,c=e.length;r<c;r++)a=e[r],i5(a,t)>n&&(l.push(a),t=a);return t!==a&&a&&l.push(a),l}function da(e,n,t,l,a){let r=l,c=0;for(let i=n+1;i<t;i++){const p=p5(e[i],e[n],e[t]);p>r&&(c=i,r=p)}r>l&&(c-n>1&&da(e,n,c,l,a),a.push(e[c]),t-c>1&&da(e,c,t,l,a))}function u5(e,n){const t=e.length-1,l=[e[0]];return da(e,0,t,n,l),l.push(e[t]),l}function Rc(e,n,t=!1){if(e.length<=2)return e;const l=n!==void 0?n*n:1;return e=t?e:d5(e,l),e=u5(e,l),e}var y5=class extends St{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=jp();const n=qp(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Rc(this.points,1,!0),this.count=0),this.attr("d",Ic(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ic(Rc(this.points,1,!0))),!e.getTotalLength()))}};function f5(e,n){const t=n.x-e.x,l=n.y-e.y;return{length:Math.sqrt(t**2+l**2),angle:Math.atan2(l,t)}}function Uc(e,n,t,l){const a=n||e,r=t||e,c=.2,i=f5(a,r),p=i.angle+(l?Math.PI:0),d=i.length*c,u=e.x+Math.cos(p)*d,y=e.y+Math.sin(p)*d;return{x:u,y}}function h5(e,n,t){const l=Uc(t[n-1],t[n-2],e),a=Uc(e,t[n-1],t[n+1],!0);return`C ${l.x.toFixed(ln)},${l.y.toFixed(ln)} ${a.x.toFixed(ln)},${a.y.toFixed(ln)} ${e.x.toFixed(ln)},${e.y.toFixed(ln)}`}function Ic(e){return e.reduce((n,t,l,a)=>l===0?`M ${t.x.toFixed(ln)},${t.y.toFixed(ln)}`:`${n} ${h5(t,l,a)}`,"")}var m5=class extends St{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(t,l)=>{if(t&&t.length)for(let a=0;a<t.length;a++){const r=t[a];if(r.getTotalLength){const c=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=r.getPointAtLength(c*i/this.pathSubFactor),d=r.getPointAtLength(c*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:d.x,y1:p.y,y2:d.y,segment:i,element:l||r})}}else r.children&&n(r.children,r)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const t=this.pathFragments[n],l={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(t,l)&&(t.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,t)=>!e.includes(t))),e.length>0}lineLineIntersect(e,n){const t=e.x1,l=e.x2,a=n.x1,r=n.x2,c=e.y1,i=e.y2,p=n.y1,d=n.y2,u=(t-l)*(p-d)-(c-i)*(a-r),y=(t*i-c*l)*(a-r)-(t-l)*(a*d-p*r),f=(t*i-c*l)*(p-d)-(c-i)*(a*d-p*r),m=(g,B,D)=>g>=B&&g<=D?!0:g>=D&&g<=B;if(u===0)return!1;{const g={x:y/u,y:f/u};return m(g.x,t,l)&&m(g.y,c,i)&&m(g.x,a,r)&&m(g.y,p,d)}}};function g5(e){return{draw:new y5(e),stylus:new l5(e),line:new r5(e),rectangle:new c5(e),ellipse:new a5(e),eraseLine:new m5(e)}}var A5=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=n5(),this._models=g5(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const t=this.resolveSelector(n)||this.el,l=this.eventStart.bind(this),a=this.eventMove.bind(this),r=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);t.addEventListener("pointerdown",l,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{t.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function _5(e){return new A5(e)}const ua=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],qe=Le("slidev-drawing-enabled",!1),HE=Le("slidev-drawing-pinned",!1),B5=as(!1),D5=as(!1),b5=as(!1),co=as(!1),Gn=Z8(Le("slidev-drawing-brush",{color:ua[0],size:4,mode:"stylus"})),Hc=as("stylus"),zp=T(()=>Os.drawings.syncAll||Re.value);let io=!1;const Ht=T({get(){return Hc.value},set(e){Hc.value=e,e==="arrow"?(Gn.mode="line",Gn.arrowEnd=!0):(Gn.mode=e,Gn.arrowEnd=!1)}}),v5=se({brush:Gn,acceptsInputTypes:T(()=>qe.value&&(!Os.drawings.presenterOnly||Re.value)?void 0:["pen"]),coordinateTransform:!1}),ue=Ca(_5(v5));function C5(){ue.clear(),zp.value&&hp(Qs.value,"")}function Va(){var e;D5.value=ue.canRedo(),B5.value=ue.canUndo(),b5.value=!!((e=ue.el)!=null&&e.children.length)}function k5(e){io=!0;const n=jo[e||Qs.value];n!=null?ue.load(n):ue.clear(),Va(),io=!1}ue.on("changed",()=>{if(Va(),!io){const e=ue.dump(),n=Qs.value;(jo[n]||"")!==e&&zp.value&&hp(n,ue.dump())}});G8(e=>{io=!0,e[Qs.value]!=null&&ue.load(e[Qs.value]||""),io=!1,Va()});Ie(()=>{Ks(Qs,()=>{ue.mounted&&k5()},{immediate:!0})});ue.on("start",()=>co.value=!0);ue.on("end",()=>co.value=!1);window.addEventListener("keydown",e=>{if(!qe.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let t=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ue.redo():ue.undo():e.code==="Escape"?qe.value=!1:e.code==="KeyL"&&n?Ht.value="line":e.code==="KeyA"&&n?Ht.value="arrow":e.code==="KeyS"&&n?Ht.value="stylus":e.code==="KeyR"&&n?Ht.value="rectangle":e.code==="KeyE"&&n?Ht.value="ellipse":e.code==="KeyC"&&n?C5():e.code.startsWith("Digit")&&n&&+e.code[5]<=ua.length?Gn.color=ua[+e.code[5]-1]:t=!1,t&&(e.preventDefault(),e.stopPropagation())},!1);function qs(...e){return T(()=>e.every(n=>de(n)))}function Ae(e){return T(()=>!de(e))}const Nc=Lf(),$l=Le("slidev-color-schema","auto"),ya=T(()=>Os.colorSchema!=="auto"),ml=T({get(){return ya.value?Os.colorSchema==="dark":$l.value==="auto"?Nc.value:$l.value==="dark"},set(e){ya.value||($l.value=e===Nc.value?"auto":e?"dark":"light")}}),Yp=_p(ml);Ne&&Ks(ml,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const Po=as(1),Ro=T(()=>js.length-1),De=as(0),ja=as(0);function E5(){De.value>Po.value&&(De.value-=1)}function w5(){De.value<Ro.value&&(De.value+=1)}function S5(){if(De.value>Po.value){let e=De.value-ja.value;e<Po.value&&(e=Po.value),De.value=e}}function x5(){if(De.value<Ro.value){let e=De.value+ja.value;e>Ro.value&&(e=Ro.value),De.value=e}}function F5(){const{escape:e,space:n,shift:t,left:l,right:a,up:r,down:c,enter:i,d:p,g:d,o:u}=Mp;let y=[{name:"next_space",key:qs(n,Ae(t)),fn:Yn,autoRepeat:!0},{name:"prev_space",key:qs(n,t),fn:Qn,autoRepeat:!0},{name:"next_right",key:qs(a,Ae(t),Ae(ce)),fn:Yn,autoRepeat:!0},{name:"prev_left",key:qs(l,Ae(t),Ae(ce)),fn:Qn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Yn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Qn,autoRepeat:!0},{name:"next_down",key:qs(c,Ae(ce)),fn:Zo,autoRepeat:!0},{name:"prev_up",key:qs(r,Ae(ce)),fn:()=>Jo(!1),autoRepeat:!0},{name:"next_shift",key:qs(a,t),fn:Zo,autoRepeat:!0},{name:"prev_shift",key:qs(l,t),fn:()=>Jo(!1),autoRepeat:!0},{name:"toggle_dark",key:qs(p,Ae(qe)),fn:Yp},{name:"toggle_overview",key:qs(u,Ae(qe)),fn:Wp},{name:"hide_overview",key:qs(e,Ae(qe)),fn:()=>ce.value=!1},{name:"goto",key:qs(d,Ae(qe)),fn:()=>mt.value=!mt.value},{name:"next_overview",key:qs(a,ce),fn:w5},{name:"prev_overview",key:qs(l,ce),fn:E5},{name:"up_overview",key:qs(r,ce),fn:S5},{name:"down_overview",key:qs(c,ce),fn:x5},{name:"goto_from_overview",key:qs(i,ce),fn:()=>{Et(De.value),ce.value=!1}}];const f=new Set(y.map(g=>g.name));if(y.filter(g=>g.name&&f.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return y}const Qp=qs(Ae(Wm),Ae(Vm),Mm);function O5(e,n,t=!1){typeof e=="string"&&(e=Mp[e]);const l=qs(e,Qp);let a=0,r;const c=()=>{if(clearTimeout(r),!l.value){a=0;return}t&&(r=setTimeout(c,Math.max(1e3-a*250,150)),a++),n()};return Ks(l,c,{flush:"sync"})}function T5(e,n){return vf(e,t=>{Qp.value&&(t.repeat||n())})}function $5(){const e=F5();new Map(e.map(t=>[t.key,t])).forEach(t=>{t.fn&&O5(t.key,t.fn,t.autoRepeat)}),T5("f",()=>Kp.toggle())}const P5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R5=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),U5=[R5];function I5(e,n){return b(),Z("svg",P5,U5)}const H5={name:"carbon-close",render:I5};function qa(e,n=""){var a,r;const t=["slidev-page",n],l=(r=(a=e==null?void 0:e.meta)==null?void 0:a.slide)==null?void 0:r.no;return l!=null&&t.push(`slidev-page-${l}`),t.filter(Boolean).join(" ")}const N5=$s({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;R(N);const t=as(),l=Xf(t),a=T(()=>n.width?n.width:l.width.value),r=T(()=>n.width?n.width/Cn:l.height.value);n.width&&wt(()=>{t.value&&(t.value.style.width=`${a.value}px`,t.value.style.height=`${r.value}px`)});const c=T(()=>a.value/r.value),i=T(()=>n.scale&&!kt.value?n.scale:c.value<Cn?a.value/kn:r.value*Cn/kn),p=T(()=>({height:`${La}px`,width:`${kn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),d=T(()=>({"select-none":!Os.selectable,"slidev-code-line-numbers":Os.lineNumbers}));return Be(yp,i),(u,y)=>(b(),Z("div",{id:"slide-container",ref_key:"root",ref:t,class:Ms(v(d))},[s("div",{id:"slide-content",style:Zs(v(p))},[le(u.$slots,"default")],4),le(u.$slots,"controls")],2))}});const L=(e,n)=>{const t=e.__vccOpts||e;for(const[l,a]of n)t[l]=a;return t},Zp=L(N5,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/SlideContainer.vue"]]),za=$s({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const t=je(e,"clicks",n),l=je(e,"clicksElements",n),a=je(e,"clicksDisabled",n),r=je(e,"clicksOrderMap",n);l.value.length=0,Be(x8,e.route),Be(F8,e.context),Be(pp,t),Be(up,a),Be(dp,l),Be(S8,r)},render(){var e,n;return this.$props.is?st(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),L5=["innerHTML"],G5=$s({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return R(N),(n,t)=>v(jo)[e.page]?(b(),Z("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(jo)[e.page]},null,8,L5)):_s("v-if",!0)}}),Jp=L(G5,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),M5=Object.freeze(Object.defineProperty({__proto__:null,default:Jp},Symbol.toStringTag,{value:"Module"})),K5={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},W5=["onClick"],V5=$s({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:n}){const t=e;R(N);const l=je(t,"modelValue",n);function a(){l.value=!1}function r(m){Et(m),a()}function c(m){return m===De.value}const i=ia.smaller("xs"),p=ia.smaller("sm"),d=4*16*2,u=2*16,y=T(()=>i.value?zn.width.value-d:p.value?(zn.width.value-d-u)/2:300),f=T(()=>Math.floor((zn.width.value-d)/(y.value+u)));return wt(()=>{De.value=Qs.value,ja.value=f.value}),(m,g)=>{const B=H5;return b(),Z(Ss,null,[dl(s("div",K5,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Zs(`grid-template-columns: repeat(auto-fit,minmax(${v(y)}px,1fr))`)},[(b(!0),Z(Ss,null,mo(v(js).slice(0,-1),(D,S)=>(b(),Z("div",{key:D.path,class:"relative"},[s("div",{class:Ms(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(S+1),"border-gray-400":!c(S+1)}]),style:Zs(v(Ga)),onClick:E=>r(+D.path)},[(b(),H(Zp,{key:D.path,width:v(y),"clicks-disabled":!0,class:"pointer-events-none"},{default:_(()=>[C(v(za),{is:D==null?void 0:D.component,"clicks-disabled":!0,class:Ms(v(qa)(D)),route:D,context:"overview"},null,8,["is","class","route"]),C(Jp,{page:+D.path},null,8,["page"])]),_:2},1032,["width"]))],14,W5),s("div",{class:"absolute top-0 opacity-50",style:Zs(`left: ${v(y)+5}px`)},Zn(S+1),5)]))),128))],4)],512),[[ip,v(l)]]),v(l)?(b(),Z("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:a},[C(B)])):_s("v-if",!0)],64)}}});const j5=L(V5,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),q5="/assets/logo-b72bde5d.png",z5={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Y5=$s({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const t=e;R(N);const l=je(t,"modelValue",n);function a(){l.value=!1}return(r,c)=>(b(),H(Ri,null,[v(l)?(b(),Z("div",z5,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=i=>a())}),s("div",{class:Ms(["m-auto rounded-md bg-main shadow",t.class]),"dark:border":"~ gray-400 opacity-10"},[le(r.$slots,"default")],2)])):_s("v-if",!0)],1024))}}),Q5=L(Y5,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Modal.vue"]]),Z5={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},J5=["innerHTML"],X5=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:q5,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),o("dev ")])])],-1),s3=$s({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const t=e;R(N);const l=je(t,"modelValue",n),a=T(()=>typeof Os.info=="string");return(r,c)=>(b(),H(Q5,{modelValue:v(l),"onUpdate:modelValue":c[0]||(c[0]=i=>Es(l)?l.value=i:null),class:"px-6 py-4"},{default:_(()=>[s("div",Z5,[v(a)?(b(),Z("div",{key:0,class:"mb-4",innerHTML:v(Os).info},null,8,J5)):_s("v-if",!0),X5])]),_:1},8,["modelValue"]))}});const e3=L(s3,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/InfoDialog.vue"]]),n3=["disabled","onKeydown"],t3=$s({__name:"Goto",setup(e){R(N);const n=as(),t=as(""),l=T(()=>{if(t.value.startsWith("/"))return!!js.find(c=>c.path===t.value.substring(1));{const c=+t.value;return!isNaN(c)&&c>0&&c<=dd.value}});function a(){l.value&&(t.value.startsWith("/")?Et(t.value.substring(1)):Et(+t.value)),r()}function r(){mt.value=!1}return Ks(mt,async c=>{var i,p;c?(await Ie(),t.value="",(i=n.value)==null||i.focus()):(p=n.value)==null||p.blur()}),Ks(t,c=>{c.match(/^[^0-9/]/)&&(t.value=t.value.substring(1))}),(c,i)=>(b(),Z("div",{id:"slidev-goto-dialog",class:Ms(["fixed right-5 bg-main transform transition-all",v(mt)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[dl(s("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=p=>t.value=p),type:"text",disabled:!v(mt),class:Ms(["outline-none bg-transparent",{"text-red-400":!v(l)&&t.value}]),placeholder:"Goto...",onKeydown:[Vr(a,["enter"]),Vr(r,["escape"])],onBlur:r},null,42,n3),[[B8,t.value]])],2))}}),o3=L(t3,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Goto.vue"]]),l3=$s({__name:"Controls",setup(e){R(N);const n=Ye(),t=Ye();return(l,a)=>(b(),Z(Ss,null,[C(j5,{modelValue:v(ce),"onUpdate:modelValue":a[0]||(a[0]=r=>Es(ce)?ce.value=r:null)},null,8,["modelValue"]),C(o3),v(n)?(b(),H(v(n),{key:0})):_s("v-if",!0),v(t)?(b(),H(v(t),{key:1,modelValue:v(Ol),"onUpdate:modelValue":a[1]||(a[1]=r=>Es(Ol)?Ol.value=r:null)},null,8,["modelValue"])):_s("v-if",!0),v(Os).info?(b(),H(e3,{key:2,modelValue:v(Yt),"onUpdate:modelValue":a[2]||(a[2]=r=>Es(Yt)?Yt.value=r:null)},null,8,["modelValue"])):_s("v-if",!0)],64))}}),a3=L(l3,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Controls.vue"]]),r3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c3=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),i3=[c3];function p3(e,n){return b(),Z("svg",r3,i3)}const d3={name:"carbon-settings-adjust",render:p3},u3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y3=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),f3=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),h3=[y3,f3];function m3(e,n){return b(),Z("svg",u3,h3)}const g3={name:"carbon-information",render:m3},A3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_3=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),B3=[_3];function D3(e,n){return b(),Z("svg",A3,B3)}const b3={name:"carbon-download",render:D3},v3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C3=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),k3=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),E3=[C3,k3];function w3(e,n){return b(),Z("svg",v3,E3)}const S3={name:"carbon-user-speaker",render:w3},x3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F3=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),O3=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),T3=[F3,O3];function $3(e,n){return b(),Z("svg",x3,T3)}const P3={name:"carbon-presentation-file",render:$3},R3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U3=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),I3=[U3];function H3(e,n){return b(),Z("svg",R3,I3)}const N3={name:"carbon-pen",render:H3},L3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},G3=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),M3=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),K3=[G3,M3];function W3(e,n){return b(),Z("svg",L3,K3)}const V3={name:"ph-cursor-duotone",render:W3},j3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},q3=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),z3=[q3];function Y3(e,n){return b(),Z("svg",j3,z3)}const Xp={name:"ph-cursor-fill",render:Y3},Q3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z3=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),J3=[Z3];function X3(e,n){return b(),Z("svg",Q3,J3)}const sg={name:"carbon-sun",render:X3},eg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ng=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),tg=[ng];function og(e,n){return b(),Z("svg",eg,tg)}const lg={name:"carbon-moon",render:og},ag={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rg=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),cg=[rg];function ig(e,n){return b(),Z("svg",ag,cg)}const pg={name:"carbon-apps",render:ig},dg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ug=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),yg=[ug];function fg(e,n){return b(),Z("svg",dg,yg)}const hg={name:"carbon-arrow-right",render:fg},mg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gg=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Ag=[gg];function _g(e,n){return b(),Z("svg",mg,Ag)}const Bg={name:"carbon-arrow-left",render:_g},Dg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bg=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),vg=[bg];function Cg(e,n){return b(),Z("svg",Dg,vg)}const kg={name:"carbon-maximize",render:Cg},Eg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wg=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Sg=[wg];function xg(e,n){return b(),Z("svg",Eg,Sg)}const Fg={name:"carbon-minimize",render:xg},Og={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tg=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),$g=[Tg];function Pg(e,n){return b(),Z("svg",Og,$g)}const Rg={name:"carbon-checkmark",render:Pg},Ug={class:"select-list"},Ig={class:"title"},Hg={class:"items"},Ng=["onClick"],Lg=$s({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const t=e;R(N);const l=je(t,"modelValue",n,{passive:!0});return(a,r)=>{const c=Rg;return b(),Z("div",Ug,[s("div",Ig,Zn(e.title),1),s("div",Hg,[(b(!0),Z(Ss,null,mo(e.items,i=>(b(),Z("div",{key:i.value,class:Ms(["item",{active:v(l)===i.value}]),onClick:()=>{var p;l.value=i.value,(p=i.onClick)==null||p.call(i)}},[C(c,{class:Ms(["text-green-500",{"opacity-0":v(l)!==i.value}])},null,8,["class"]),o(" "+Zn(i.display||i.value),1)],10,Ng))),128))])])}}});const Gg=L(Lg,[["__scopeId","data-v-3f89fa11"],["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/SelectList.vue"]]),Mg={class:"text-sm"},Kg=$s({__name:"Settings",setup(e){R(N);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(t,l)=>(b(),Z("div",Mg,[C(Gg,{modelValue:v($o),"onUpdate:modelValue":l[0]||(l[0]=a=>Es($o)?$o.value=a:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),Wg=L(Kg,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Settings.vue"]]),Vg={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},jg=$s({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const t=e;R(N);const l=je(t,"modelValue",n,{passive:!0}),a=as();return Df(a,()=>{l.value=!1}),(r,c)=>(b(),Z("div",{ref_key:"el",ref:a,class:"flex relative"},[s("button",{class:Ms({disabled:e.disabled}),onClick:c[0]||(c[0]=i=>l.value=!v(l))},[le(r.$slots,"button",{class:Ms({disabled:e.disabled})})],2),(b(),H(Ri,null,[v(l)?(b(),Z("div",Vg,[le(r.$slots,"menu")])):_s("v-if",!0)],1024))],512))}}),qg=L(jg,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/MenuButton.vue"]]),zg={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Yg={__name:"VerticalDivider",setup(e){return R(N),(n,t)=>(b(),Z("div",zg))}},wo=L(Yg,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Qg={render(){return[]}},Zg={class:"icon-btn"},Jg={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Xg={class:"my-auto"},sA={class:"opacity-50"},eA=$s({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;R(N);const t=ia.smaller("md"),{isFullscreen:l,toggle:a}=Kp,r=T(()=>ha.value?`?password=${ha.value}`:""),c=T(()=>`/presenter/${Qs.value}${r.value}`),i=T(()=>`/${Qs.value}${r.value}`),p=as(),d=()=>{p.value&&Dt.value&&p.value.contains(Dt.value)&&Dt.value.blur()},u=T(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),y=Ye(),f=Ye();return et(()=>import("./DrawingControls-bf165a66.js"),[]).then(m=>f.value=m.default),(m,g)=>{const B=Fg,D=kg,S=Bg,E=hg,x=pg,F=lg,V=sg,j=Xp,K=V3,G=N3,ss=P3,ls=Hi("RouterLink"),ds=S3,Y=b3,Ds=g3,Is=d3;return b(),Z("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[s("div",{class:Ms(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(u)]),onMouseleave:d},[v(tn)?_s("v-if",!0):(b(),Z("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...ks)=>v(a)&&v(a)(...ks))},[v(l)?(b(),H(B,{key:0})):(b(),H(D,{key:1}))])),s("button",{class:Ms(["icon-btn",{disabled:!v(aE)}]),onClick:g[1]||(g[1]=(...ks)=>v(Qn)&&v(Qn)(...ks))},[C(S)],2),s("button",{class:Ms(["icon-btn",{disabled:!v(lE)}]),title:"Next",onClick:g[2]||(g[2]=(...ks)=>v(Yn)&&v(Yn)(...ks))},[C(E)],2),v(tn)?_s("v-if",!0):(b(),Z("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=ks=>v(Wp)())},[C(x)])),v(ya)?_s("v-if",!0):(b(),Z("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=ks=>v(Yp)())},[v(ml)?(b(),H(F,{key:0})):(b(),H(V,{key:1}))])),C(wo),v(tn)?_s("v-if",!0):(b(),Z(Ss,{key:3},[!v(Re)&&!v(t)&&v(y)?(b(),Z(Ss,{key:0},[C(v(y)),C(wo)],64)):_s("v-if",!0),v(Re)?(b(),Z("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=ks=>Tl.value=!v(Tl))},[v(Tl)?(b(),H(j,{key:0})):(b(),H(K,{key:1,class:"opacity-50"}))])):_s("v-if",!0)],64)),(!v(Os).drawings.presenterOnly||v(Re))&&!v(tn)?(b(),Z(Ss,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=ks=>qe.value=!v(qe))},[C(G),v(qe)?(b(),Z("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Zs({background:v(Gn).color})},null,4)):_s("v-if",!0)]),C(wo)],64)):_s("v-if",!0),v(tn)?_s("v-if",!0):(b(),Z(Ss,{key:5},[v(Re)?(b(),H(ls,{key:0,to:v(i),class:"icon-btn",title:"Play Mode"},{default:_(()=>[C(ss)]),_:1},8,["to"])):_s("v-if",!0),v(eE)?(b(),H(ls,{key:1,to:v(c),class:"icon-btn",title:"Presenter Mode"},{default:_(()=>[C(ds)]),_:1},8,["to"])):_s("v-if",!0),_s("v-if",!0)],64)),(b(),Z(Ss,{key:6},[v(Os).download?(b(),Z("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...ks)=>v(qc)&&v(qc)(...ks))},[C(Y)])):_s("v-if",!0)],64)),!v(Re)&&v(Os).info&&!v(tn)?(b(),Z("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=ks=>Yt.value=!v(Yt))},[C(Ds)])):_s("v-if",!0),!v(Re)&&!v(tn)?(b(),H(qg,{key:8},{button:_(()=>[s("button",Zg,[C(Is)])]),menu:_(()=>[C(Wg)]),_:1})):_s("v-if",!0),v(tn)?_s("v-if",!0):(b(),H(wo,{key:9})),s("div",Jg,[s("div",Xg,[o(Zn(v(Qs))+" ",1),s("span",sA,"/ "+Zn(v(dd)),1)])]),C(v(Qg))],34)],512)}}}),nA=L(eA,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/NavControls.vue"]]),sd={render(){return[]}},tA=$s({__name:"LightOrDark",setup(e){return R(N),(n,t)=>v(ml)?le(n.$slots,"dark",{key:0}):le(n.$slots,"light",{key:1})}}),Ya=L(tA,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/builtin/LightOrDark.vue"]]),oA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lA=s("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),aA=[lA];function rA(e,n){return b(),Z("svg",oA,aA)}const cA={name:"carbon-logo-github",render:rA},iA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pA=s("path",{fill:"currentColor",d:"M11.547 25.752c9.057 0 14.01-7.503 14.01-14.01c0-.213 0-.425-.014-.636A10.017 10.017 0 0 0 28 8.556a9.827 9.827 0 0 1-2.828.776a4.942 4.942 0 0 0 2.164-2.724a9.866 9.866 0 0 1-3.126 1.195a4.929 4.929 0 0 0-8.392 4.491A13.98 13.98 0 0 1 5.67 7.15a4.928 4.928 0 0 0 1.525 6.573a4.887 4.887 0 0 1-2.235-.617v.063a4.926 4.926 0 0 0 3.95 4.827a4.917 4.917 0 0 1-2.223.084a4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 4 23.54a13.94 13.94 0 0 0 7.547 2.209"},null,-1),dA=[pA];function uA(e,n){return b(),Z("svg",iA,dA)}const yA={name:"carbon-logo-twitter",render:uA},fA="/netways-white.png",hA="/netways-black.png",mA={class:"absolute bottom-0 left-0 right-0 m-2 h-8 flex justify-between gap-2"},gA={class:"flex gap-2 justify-between items-center"},AA={href:"https://twitter.com/d_bodky",target:"_blank",alt:"Twitter",class:"icon-btn text-sky-500 !border-none"},_A={href:"https://github.com/mocdaniel",target:"_blank",alt:"GitHub",class:"icon-btn !border-none text-gray-700"},BA={href:"https://github.com/mocdaniel",target:"_blank",alt:"GitHub",class:"icon-btn !border-none text-gray-500"},DA=s("img",{class:"pb-2 pr-2",src:fA},null,-1),bA=s("img",{class:"pb-2 pr-2",src:hA},null,-1),vA={__name:"global-bottom",setup(e){return R(N),(n,t)=>{const l=yA,a=cA,r=Ya;return b(),Z("footer",mA,[s("div",gA,[s("a",AA,[C(l),o(" @d_bodky ")]),C(r,null,{light:_(()=>[s("a",_A,[C(a),o(" mocdaniel ")])]),dark:_(()=>[s("a",BA,[C(a),o(" mocdaniel ")])]),_:1})]),C(r,null,{dark:_(()=>[DA]),light:_(()=>[bA]),_:1})])}}},CA=L(vA,[["__file","/Users/daniel/repositories/private/acorn-slides/global-bottom.vue"]]),ed={render(){return[st(CA)]}},kA={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},EA=$s({__name:"PresenterMouse",setup(e){return R(N),(n,t)=>{const l=Xp;return v(wl).cursor?(b(),Z("div",kA,[C(l,{class:"absolute",style:Zs({left:`${v(wl).cursor.x}%`,top:`${v(wl).cursor.y}%`})},null,8,["style"])])):_s("v-if",!0)}}}),wA=L(EA,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),SA=$s({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){R(N),Ks(ie,()=>{var l,a;(l=ie.value)!=null&&l.meta&&ie.value.meta.preload!==!1&&(ie.value.meta.__preloaded=!0),(a=Pl.value)!=null&&a.meta&&Pl.value.meta.preload!==!1&&(Pl.value.meta.__preloaded=!0)},{immediate:!0});const n=Ye();et(()=>import("./DrawingLayer-00027d05.js"),[]).then(l=>n.value=l.default);const t=T(()=>js.filter(l=>{var a;return((a=l.meta)==null?void 0:a.__preloaded)||l===ie.value}));return(l,a)=>(b(),Z(Ss,null,[_s(" Global Bottom "),C(v(ed)),_s(" Slides "),C(f8,ts(ns(v(iE))),{default:_(()=>[(b(!0),Z(Ss,null,mo(v(t),r=>{var c;return dl((b(),H(v(za),{key:r.path,is:r==null?void 0:r.component,clicks:r===v(ie)?v(nt):0,"clicks-elements":((c=r.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Ms(v(qa)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ip,r===v(ie)]])}),128))]),_:1},16),_s(" Global Top "),C(v(sd)),v(n)?(b(),H(v(n),{key:0})):_s("v-if",!0),v(Re)?_s("v-if",!0):(b(),H(wA,{key:1}))],64))}}),xA=L(SA,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/SlidesShow.vue"]]),FA=$s({__name:"PrintStyle",setup(e){R(N);function n(t,{slots:l}){if(l.default)return st("style",l.default())}return(t,l)=>(b(),H(n,null,{default:_(()=>[o(" @page { size: "+Zn(v(kn))+"px "+Zn(v(La))+"px; margin: 0px; } ",1)]),_:1}))}}),nd=L(FA,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/PrintStyle.vue"]]),OA=$s({__name:"Play",setup(e){R(N),$5();const n=as();function t(r){var c;xc.value||((c=r.target)==null?void 0:c.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Yn():Qn())}pE(n);const l=T(()=>Km.value||xc.value);Ye();const a=Ye();return et(()=>import("./DrawingControls-bf165a66.js"),[]).then(r=>a.value=r.default),(r,c)=>(b(),Z(Ss,null,[v(kt)?(b(),H(nd,{key:0})):_s("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:Zs(v(Ga))},[C(Zp,{class:"w-full h-full",style:Zs({background:"var(--slidev-slide-container-background, black)"}),width:v(kt)?v(zn).width.value:void 0,scale:v($o),onPointerdown:t},{default:_(()=>[C(xA,{context:"slide"})]),controls:_(()=>[s("div",{class:Ms(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(l)?"opacity-100 right-0":"opacity-0 p-2",v(co)?"pointer-events-none":""]])},[C(nA,{class:"m-auto",persist:v(l)},null,8,["persist"])],2),!v(Os).drawings.presenterOnly&&!v(tn)&&v(a)?(b(),H(v(a),{key:0,class:"ml-0"})):_s("v-if",!0)]),_:1},8,["style","width","scale"]),_s("v-if",!0)],4),C(a3)],64))}}),TA=L(OA,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function td(e){return typeof e>"u"||e===null}function $A(e){return typeof e=="object"&&e!==null}function PA(e){return Array.isArray(e)?e:td(e)?[]:[e]}function RA(e,n){var t,l,a,r;if(n)for(r=Object.keys(n),t=0,l=r.length;t<l;t+=1)a=r[t],e[a]=n[a];return e}function UA(e,n){var t="",l;for(l=0;l<n;l+=1)t+=e;return t}function IA(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var HA=td,NA=$A,LA=PA,GA=UA,MA=IA,KA=RA,Qa={isNothing:HA,isObject:NA,toArray:LA,repeat:GA,isNegativeZero:MA,extend:KA};function od(e,n){var t="",l=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),l+" "+t):l}function po(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=od(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}po.prototype=Object.create(Error.prototype);po.prototype.constructor=po;po.prototype.toString=function(n){return this.name+": "+od(this,n)};var Nn=po,WA=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],VA=["scalar","sequence","mapping"];function jA(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(l){n[String(l)]=t})}),n}function qA(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(WA.indexOf(t)===-1)throw new Nn('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=jA(n.styleAliases||null),VA.indexOf(this.kind)===-1)throw new Nn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var oe=qA;function Lc(e,n){var t=[];return e[n].forEach(function(l){var a=t.length;t.forEach(function(r,c){r.tag===l.tag&&r.kind===l.kind&&r.multi===l.multi&&(a=c)}),t[a]=l}),t}function zA(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function l(a){a.multi?(e.multi[a.kind].push(a),e.multi.fallback.push(a)):e[a.kind][a.tag]=e.fallback[a.tag]=a}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(l);return e}function fa(e){return this.extend(e)}fa.prototype.extend=function(n){var t=[],l=[];if(n instanceof oe)l.push(n);else if(Array.isArray(n))l=l.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(l=l.concat(n.explicit));else throw new Nn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(r){if(!(r instanceof oe))throw new Nn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Nn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Nn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),l.forEach(function(r){if(!(r instanceof oe))throw new Nn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(fa.prototype);return a.implicit=(this.implicit||[]).concat(t),a.explicit=(this.explicit||[]).concat(l),a.compiledImplicit=Lc(a,"implicit"),a.compiledExplicit=Lc(a,"explicit"),a.compiledTypeMap=zA(a.compiledImplicit,a.compiledExplicit),a};var YA=fa,QA=new oe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),ZA=new oe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),JA=new oe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),XA=new YA({explicit:[QA,ZA,JA]});function s_(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function e_(){return null}function n_(e){return e===null}var t_=new oe("tag:yaml.org,2002:null",{kind:"scalar",resolve:s_,construct:e_,predicate:n_,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function o_(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function l_(e){return e==="true"||e==="True"||e==="TRUE"}function a_(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var r_=new oe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:o_,construct:l_,predicate:a_,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function c_(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function i_(e){return 48<=e&&e<=55}function p_(e){return 48<=e&&e<=57}function d_(e){if(e===null)return!1;var n=e.length,t=0,l=!1,a;if(!n)return!1;if(a=e[t],(a==="-"||a==="+")&&(a=e[++t]),a==="0"){if(t+1===n)return!0;if(a=e[++t],a==="b"){for(t++;t<n;t++)if(a=e[t],a!=="_"){if(a!=="0"&&a!=="1")return!1;l=!0}return l&&a!=="_"}if(a==="x"){for(t++;t<n;t++)if(a=e[t],a!=="_"){if(!c_(e.charCodeAt(t)))return!1;l=!0}return l&&a!=="_"}if(a==="o"){for(t++;t<n;t++)if(a=e[t],a!=="_"){if(!i_(e.charCodeAt(t)))return!1;l=!0}return l&&a!=="_"}}if(a==="_")return!1;for(;t<n;t++)if(a=e[t],a!=="_"){if(!p_(e.charCodeAt(t)))return!1;l=!0}return!(!l||a==="_")}function u_(e){var n=e,t=1,l;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),l=n[0],(l==="-"||l==="+")&&(l==="-"&&(t=-1),n=n.slice(1),l=n[0]),n==="0")return 0;if(l==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function y_(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Qa.isNegativeZero(e)}var f_=new oe("tag:yaml.org,2002:int",{kind:"scalar",resolve:d_,construct:u_,predicate:y_,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),h_=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function m_(e){return!(e===null||!h_.test(e)||e[e.length-1]==="_")}function g_(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var A_=/^[-+]?[0-9]+e/;function __(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Qa.isNegativeZero(e))return"-0.0";return t=e.toString(10),A_.test(t)?t.replace("e",".e"):t}function B_(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Qa.isNegativeZero(e))}var D_=new oe("tag:yaml.org,2002:float",{kind:"scalar",resolve:m_,construct:g_,predicate:B_,represent:__,defaultStyle:"lowercase"}),b_=XA.extend({implicit:[t_,r_,f_,D_]}),v_=b_,ld=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ad=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function C_(e){return e===null?!1:ld.exec(e)!==null||ad.exec(e)!==null}function k_(e){var n,t,l,a,r,c,i,p=0,d=null,u,y,f;if(n=ld.exec(e),n===null&&(n=ad.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],l=+n[2]-1,a=+n[3],!n[4])return new Date(Date.UTC(t,l,a));if(r=+n[4],c=+n[5],i=+n[6],n[7]){for(p=n[7].slice(0,3);p.length<3;)p+="0";p=+p}return n[9]&&(u=+n[10],y=+(n[11]||0),d=(u*60+y)*6e4,n[9]==="-"&&(d=-d)),f=new Date(Date.UTC(t,l,a,r,c,i,p)),d&&f.setTime(f.getTime()-d),f}function E_(e){return e.toISOString()}var w_=new oe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:C_,construct:k_,instanceOf:Date,represent:E_});function S_(e){return e==="<<"||e===null}var x_=new oe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:S_}),Za=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function F_(e){if(e===null)return!1;var n,t,l=0,a=e.length,r=Za;for(t=0;t<a;t++)if(n=r.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;l+=6}return l%8===0}function O_(e){var n,t,l=e.replace(/[\r\n=]/g,""),a=l.length,r=Za,c=0,i=[];for(n=0;n<a;n++)n%4===0&&n&&(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)),c=c<<6|r.indexOf(l.charAt(n));return t=a%4*6,t===0?(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)):t===18?(i.push(c>>10&255),i.push(c>>2&255)):t===12&&i.push(c>>4&255),new Uint8Array(i)}function T_(e){var n="",t=0,l,a,r=e.length,c=Za;for(l=0;l<r;l++)l%3===0&&l&&(n+=c[t>>18&63],n+=c[t>>12&63],n+=c[t>>6&63],n+=c[t&63]),t=(t<<8)+e[l];return a=r%3,a===0?(n+=c[t>>18&63],n+=c[t>>12&63],n+=c[t>>6&63],n+=c[t&63]):a===2?(n+=c[t>>10&63],n+=c[t>>4&63],n+=c[t<<2&63],n+=c[64]):a===1&&(n+=c[t>>2&63],n+=c[t<<4&63],n+=c[64],n+=c[64]),n}function $_(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var P_=new oe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:F_,construct:O_,predicate:$_,represent:T_}),R_=Object.prototype.hasOwnProperty,U_=Object.prototype.toString;function I_(e){if(e===null)return!0;var n=[],t,l,a,r,c,i=e;for(t=0,l=i.length;t<l;t+=1){if(a=i[t],c=!1,U_.call(a)!=="[object Object]")return!1;for(r in a)if(R_.call(a,r))if(!c)c=!0;else return!1;if(!c)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function H_(e){return e!==null?e:[]}var N_=new oe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:I_,construct:H_}),L_=Object.prototype.toString;function G_(e){if(e===null)return!0;var n,t,l,a,r,c=e;for(r=new Array(c.length),n=0,t=c.length;n<t;n+=1){if(l=c[n],L_.call(l)!=="[object Object]"||(a=Object.keys(l),a.length!==1))return!1;r[n]=[a[0],l[a[0]]]}return!0}function M_(e){if(e===null)return[];var n,t,l,a,r,c=e;for(r=new Array(c.length),n=0,t=c.length;n<t;n+=1)l=c[n],a=Object.keys(l),r[n]=[a[0],l[a[0]]];return r}var K_=new oe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:G_,construct:M_}),W_=Object.prototype.hasOwnProperty;function V_(e){if(e===null)return!0;var n,t=e;for(n in t)if(W_.call(t,n)&&t[n]!==null)return!1;return!0}function j_(e){return e!==null?e:{}}var q_=new oe("tag:yaml.org,2002:set",{kind:"mapping",resolve:V_,construct:j_});v_.extend({implicit:[w_,x_],explicit:[P_,N_,K_,q_]});function Gc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var z_=new Array(256),Y_=new Array(256);for(var dt=0;dt<256;dt++)z_[dt]=Gc(dt)?1:0,Y_[dt]=Gc(dt);function Q_(e){return Array.from(new Set(e))}function Mc(...e){let n,t,l;e.length===1?(n=0,l=1,[t]=e):[n,t,l=1]=e;const a=[];let r=n;for(;r<t;)a.push(r),r+=l||1;return a}function rd(e,n){if(!n||n==="all"||n==="*")return Mc(1,e+1);const t=[];for(const l of n.split(/[,;]/g))if(!l.includes("-"))t.push(+l);else{const[a,r]=l.split("-",2);t.push(...Mc(+a,r?+r+1:e+1))}return Q_(t).filter(l=>l<=e).sort((l,a)=>l-a)}function Z_(e){const n=T(()=>e.value.path),t=T(()=>js.length-1),l=T(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),a=T(()=>Xa(l.value)),r=T(()=>js.find(f=>f.path===`${l.value}`)),c=T(()=>{var f,m,g;return(g=(m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:g.id}),i=T(()=>{var f,m;return((m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.layout)||(l.value===1?"cover":"default")}),p=T(()=>js.find(f=>f.path===`${Math.min(js.length,l.value+1)}`)),d=T(()=>js.filter(f=>{var m,g;return(g=(m=f.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((f,m)=>(sr(f,m),f),[])),u=T(()=>er(d.value,r.value)),y=T(()=>nr(u.value));return{route:e,path:n,total:t,currentPage:l,currentPath:a,currentRoute:r,currentSlideId:c,currentLayout:i,nextRoute:p,rawTree:d,treeWithActiveStatuses:u,tree:y}}function J_(e,n,t){const l=as(0);Ie(()=>{En.afterEach(async()=>{await Ie(),l.value+=1})});const a=T(()=>{var p,d;return l.value,((d=(p=n.value)==null?void 0:p.meta)==null?void 0:d.__clicksElements)||[]}),r=T(()=>{var p,d;return+(((d=(p=n.value)==null?void 0:p.meta)==null?void 0:d.clicks)??a.value.length)}),c=T(()=>t.value<js.length-1||e.value<r.value),i=T(()=>t.value>1||e.value>0);return{clicks:e,clicksElements:a,clicksTotal:r,hasNext:c,hasPrev:i}}const X_=["id"],sB=$s({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:n}){const t=e,l=je(t,"clicksElements",n),a=T(()=>({height:`${La}px`,width:`${kn}px`})),r=Ye();et(()=>Promise.resolve().then(()=>M5),void 0).then(d=>r.value=d.default);const c=T(()=>t.clicks),i=J_(c,t.nav.currentRoute,t.nav.currentPage),p=T(()=>`${t.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return Be(N,se({nav:{...t.nav,...i},configs:Os,themeConfigs:T(()=>Os.themeConfig)})),(d,u)=>{var y;return b(),Z("div",{id:v(p),class:"print-slide-container",style:Zs(v(a))},[C(v(ed)),C(v(za),{is:(y=e.route)==null?void 0:y.component,"clicks-elements":v(l),"onUpdate:clicks-elements":u[0]||(u[0]=f=>Es(l)?l.value=f:null),clicks:v(c),"clicks-disabled":!1,class:Ms(v(qa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),v(r)?(b(),H(v(r),{key:0,page:+e.route.path},null,8,["page"])):_s("v-if",!0),C(v(sd))],12,X_)}}}),Kc=L(sB,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),eB=$s({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const n=e;R(N);const t=se(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),l=T(()=>n.route),a=Z_(l);return(c,i)=>(b(),Z(Ss,null,[C(Kc,{"clicks-elements":t,"onUpdate:clicks-elements":i[0]||(i[0]=p=>t=p),clicks:0,nav:v(a),route:v(l)},null,8,["clicks-elements","nav","route"]),v(pd)?_s("v-if",!0):(b(!0),Z(Ss,{key:0},mo(t.length,p=>(b(),H(Kc,{key:p,clicks:p,nav:v(a),route:v(l)},null,8,["clicks","nav","route"]))),128))],64))}}),nB=L(eB,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/PrintSlide.vue"]]),tB={id:"print-content"},oB=$s({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const n=e;R(N);const t=T(()=>n.width),l=T(()=>n.width/Cn),a=T(()=>t.value/l.value),r=T(()=>a.value<Cn?t.value/kn:l.value*Cn/kn);let c=js.slice(0,-1);Ze.value.query.range&&(c=rd(c.length,Ze.value.query.range).map(d=>c[d-1]));const i=T(()=>({"select-none":!Os.selectable,"slidev-code-line-numbers":Os.lineNumbers}));return Be(yp,r),(p,d)=>(b(),Z("div",{id:"print-container",class:Ms(v(i))},[s("div",tB,[(b(!0),Z(Ss,null,mo(v(c),u=>(b(),H(nB,{key:u.path,route:u},null,8,["route"]))),128))]),le(p.$slots,"controls")],2))}});const lB=L(oB,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/PrintContainer.vue"]]),aB=$s({__name:"Print",setup(e){return R(N),wt(()=>{kt?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,t)=>(b(),Z(Ss,null,[v(kt)?(b(),H(nd,{key:0})):_s("v-if",!0),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Zs(v(Ga))},[C(lB,{class:"w-full h-full",style:Zs({background:"var(--slidev-slide-container-background, black)"}),width:v(zn).width.value},null,8,["style","width"])],4)],64))}});const rB=L(aB,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Print.vue"]]);const cB={class:"slidev-layout end"},iB={__name:"end",setup(e){return R(N),(n,t)=>(b(),Z("div",cB," END "))}},pB=L(iB,[["__scopeId","data-v-e532b98d"],["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/layouts/end.vue"]]);function Wc(e){return e.startsWith("/")?"/"+e.slice(1):e}function dB(e,n=!1){const t=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),l={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?n?`linear-gradient(#0005, #0008), url(${Wc(e)})`:`url("${Wc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const uB={class:"my-auto w-full"},yB=$s({__name:"cover",props:{background:{default:""}},setup(e){const n=e;R(N);const t=T(()=>dB(n.background,!0));return(l,a)=>(b(),Z("div",{class:"slidev-layout cover",style:Zs(v(t))},[s("div",uB,[le(l.$slots,"default")])],4))}}),fB=L(yB,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/theme-default/layouts/cover.vue"]]),hB=s("h1",null,"From Dev to Prod with Acorn",-1),mB=s("p",null,"Simplifying Kubernetes Deployments",-1),gB=s("div",{class:"hello"},null,-1),AB=s("div",{class:"pt-12"}," Tuesday, Feb 07 2023 ",-1),_B={__name:"1",setup(e){const n={theme:"default",class:"text-center",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},transition:"fade-out",css:"unocss",exportFilename:"dev-to-prod-with-acorn-2023",monaco:!0,srcSequence:"./slides/cover.md"};return R(N),(t,l)=>(b(),H(fB,ts(ns(n)),{default:_(()=>[hB,mB,gB,AB]),_:1},16))}},BB=L(_B,[["__file","/@slidev/slides/1.md"]]);function Vc(e){return e.startsWith("/")?"/"+e.slice(1):e}function DB(e,n=!1){const t=e&&e[0]==="#"&&e.startsWith("rgb"),l={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?n?`linear-gradient(#0005, #0008), url(${Vc(e)})`:`url("${Vc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const bB={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},vB=$s({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const n=e;R(N);const t=T(()=>DB(n.image));return(l,a)=>(b(),Z("div",bB,[s("div",{class:Ms(["slidev-layout default",n.class])},[le(l.$slots,"default")],2),s("div",{class:"w-full w-full",style:Zs(v(t))},null,4)]))}}),Ja=L(vB,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/layouts/image-right.vue"]]),CB=s("h1",null,"About me",-1),kB=s("br",null,null,-1),EB=s("br",null,null,-1),wB=s("br",null,null,-1),SB=s("br",null,null,-1),xB=s("br",null,null,-1),FB=s("br",null,null,-1),OB=s("br",null,null,-1),TB=s("br",null,null,-1),$B=s("br",null,null,-1),PB=s("br",null,null,-1),RB=s("br",null,null,-1),UB=s("div",{class:"abs-br text-2 pr-1 text-gray-200"},"Photo by Yulia Matvienko on Unsplash",-1),IB={__name:"2",setup(e){const n={transition:"fade-out",layout:"image-right",image:"/legopic.jpg",srcSequence:"./slides/introduction/myself.md"};return R(N),(t,l)=>(b(),H(Ja,ts(ns(n)),{default:_(()=>[CB,kB,o(" 🇩🇪 24 y/o consultant from Southern Germany "),EB,wB,o(" 🏢 Employed at NETWAYS "),SB,xB,o(" ☸️ Working with Kubernetes since early 2022 "),FB,OB,o(" 📜 CKA certified since 2022 "),TB,$B,o(" 🏗️ I like building things ❣️ "),PB,RB,o(" 🎉 Psyched to be here! "),UB]),_:1},16))}},HB=L(IB,[["__file","/@slidev/slides/2.md"]]),NB={class:"slidev-layout default"},LB={__name:"default",setup(e){return R(N),(n,t)=>(b(),Z("div",NB,[le(n.$slots,"default")]))}},Fe=L(LB,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/layouts/default.vue"]]),GB=s("h1",null,"About this workshop",-1),MB=s("br",null,null,-1),KB=s("br",null,null,-1),WB=s("ul",null,[s("li",null,[s("p",null,[o("All resources are available on GitHub: "),s("a",{href:"https://github.com/mocdaniel/acorn-workshop",target:"_blank",rel:"noopener"},"mocdaniel/acorn-workshop")])]),s("li",null,[s("p",null,[o("A version of this slide deck with more information for asynchronous participation is available at "),s("a",{href:"https://acorn.dbodky.me",target:"_blank",rel:"noopener"},"acorn.dbodky.me")])])],-1),VB=s("br",null,null,-1),jB=s("ul",null,[s("li",null,[o("You will need some tools to follow along "),s("ul",null,[s("li",null,[s("strong",null,"git")]),s("li",null,[s("strong",null,"acorn"),o(" (Downloadable from "),s("a",{href:"https://github.com/acorn-io/acorn",target:"_blank",rel:"noopener"},"https://github.com/acorn-io/acorn"),o(")")]),s("li",null,[s("strong",null,"docker")]),s("li",null,[o("a working "),s("strong",null,"Kubernetes cluster"),o(" (either local or remote)")])])])],-1),qB={__name:"3",setup(e){const n={transition:"fade-out",layout:"default",srcSequence:"./slides/introduction/workshop.md"};return R(N),(t,l)=>(b(),H(Fe,ts(ns(n)),{default:_(()=>[GB,MB,KB,WB,VB,jB]),_:1},16))}},zB=L(qB,[["__file","/@slidev/slides/3.md"]]),YB=s("h1",null,"Workshop Agenda",-1),QB=s("br",null,null,-1),ZB=s("p",null,"📚 Theory - Why would we need Acorn? How does it work?",-1),JB=s("p",null,"⚙️ Preparations - Installing Acorn for the first time, making sure everything works",-1),XB=s("p",null,"🚀 Test Run - Spin up the application using docker compose",-1),s9=s("p",null,"🏗️ First Steps - building a rudimentary Acornfile",-1),e9=s("p",null,"🔁 Iterate - add further configuration to the Acornfile",-1),n9=s("p",null,"✨ Finishing Touches - build and push the image to a registry",-1),t9=s("p",null,"📽️ Demo of additional features on non-dev clusters",-1),o9={__name:"4",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/introduction/agenda.md"};return R(N),(t,l)=>(b(),H(Fe,ts(ns(n)),{default:_(()=>[YB,QB,ZB,JB,XB,s9,e9,n9,t9]),_:1},16))}},l9=L(o9,[["__file","/@slidev/slides/4.md"]]),a9={class:"slidev-layout center h-full grid place-content-center"},r9={class:"my-auto"},c9={__name:"center",setup(e){return R(N),(n,t)=>(b(),Z("div",a9,[s("div",r9,[le(n.$slots,"default")])]))}},ye=L(c9,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/layouts/center.vue"]]),i9=s("h1",null,"📚 Theory",-1),p9=s("p",null,"Why are we doing this?",-1),d9={__name:"5",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[i9,p9]),_:1},16))}},u9=L(d9,[["__file","/@slidev/slides/5.md"]]),y9="/history-light.png",f9="/history-dark.png",h9=s("img",{alt:"A timeline showing the evolution towards containerized applications",src:y9},null,-1),m9=s("img",{alt:"A timeline showing the evolution towards containerized applications",src:f9},null,-1),g9={__name:"6",setup(e){const n={layout:"center",transition:"fade-out"};return R(N),(t,l)=>{const a=Ya;return b(),H(ye,ts(ns(n)),{default:_(()=>[C(a,null,{light:_(()=>[h9]),dark:_(()=>[m9]),_:1})]),_:1},16)}}},A9=L(g9,[["__file","/@slidev/slides/6.md"]]),_9=$s({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var r,c;const e=_r("click"),n=_r("after"),t=(i,p,d)=>dl(i,[[p,this.at!=null?+this.at+d:null,"",{hide:this.hide,fade:this.fade}]]);let l=(c=(r=this.$slots).default)==null?void 0:c.call(r);if(!l)return;l=T8(l);const a=i=>i.map((p,d)=>xn(p)?t(st(p),d%this.every===0?e:n,Math.floor(d/this.every)):p);return l.length===1&&["ul","ol"].includes(l[0].type)&&Array.isArray(l[0].children)?st(l[0],{},[a(l[0].children)]):a(l)}}),me=$s({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return C(_9,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),B9=s("h1",null,"Where are we today?",-1),D9=s("br",null,null,-1),b9=s("ul",null,[s("li",null,[o("Many different platforms used during development "),s("ul",null,[s("li",null,"local machine"),s("li",null,"Docker (compose)"),s("li",null,"Kubernetes")])])],-1),v9=s("br",null,null,-1),C9=s("br",null,null,-1),k9=s("ul",null,[s("li",null,"No time for learning Kubernetes 'on the fly'")],-1),E9=s("br",null,null,-1),w9=s("br",null,null,-1),S9=s("ul",null,[s("li",null,"Huge cognitive overhead")],-1),x9={__name:"7",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/theory/today.md"};return R(N),(t,l)=>{const a=me;return b(),H(Fe,ts(ns(n)),{default:_(()=>[B9,D9,C(a,null,{default:_(()=>[b9]),_:1}),C(a,null,{default:_(()=>[v9,C9,k9]),_:1}),E9,w9,C(a,null,{default:_(()=>[S9]),_:1})]),_:1},16)}}},F9=L(x9,[["__file","/@slidev/slides/7.md"]]),O9={class:"slidev-layout statement"},T9={class:"my-auto"},$9={__name:"statement",setup(e){return R(N),(n,t)=>(b(),Z("div",O9,[s("div",T9,[le(n.$slots,"default")])]))}},P9=L($9,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/theme-default/layouts/statement.vue"]]),R9=s("h1",null,"Is there no abstraction? 😭",-1),U9=s("h2",null,"There is!",-1),I9={__name:"8",setup(e){const n={layout:"statement",transition:"fade-out"};return R(N),(t,l)=>{const a=me;return b(),H(P9,ts(ns(n)),{default:_(()=>[R9,C(a,null,{default:_(()=>[U9]),_:1})]),_:1},16)}}},H9=L(I9,[["__file","/@slidev/slides/8.md"]]),N9=s("h1",null,"Time for Acorn",-1),L9=s("li",null,[o('"'),s("em",null,"A simple application framework for Kubernetes"),o('"')],-1),G9=s("li",null,[o("Claims "),s("ul",null,[s("li",null,[s("em",null,'"One artifact across dev, test, and production"')]),s("li",null,[s("em",null,'"Simple CLI and powerful API"')]),s("li",null,[s("em",null,'"Secure by design"')]),s("li",null,[s("em",null,'"Open Source"')])])],-1),M9=s("div",{class:"abs-br text-2 pr-1 text-gray-400"},"Photo by Joвана Младеновић on Unsplash",-1),K9={__name:"9",setup(e){const n={layout:"image-right",transition:"fade-out",image:"/acorn.jpg",srcSequence:"./slides/theory/acorn.md"};return R(N),(t,l)=>{const a=Hi("tt");return b(),H(Ja,ts(ns(n)),{default:_(()=>[N9,s("ul",null,[L9,G9,s("li",null,[o("Takes an "),C(a,null,{default:_(()=>[o("Acornfile")]),_:1}),o(" and builds a deployable, OCI-compliant artifact")])]),M9]),_:1},16)}}},W9=L(K9,[["__file","/@slidev/slides/9.md"]]),V9="/acorn-architecture.svg",j9=s("p",null,[s("img",{src:V9,alt:"Overview of Acorn's architecture"})],-1),q9=s("div",{class:"abs-b text-2 text-gray-400"},"Image taken from docs.acorn.io",-1),z9={__name:"10",setup(e){const n={layout:"center",transition:"fade-out"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[j9,q9]),_:1},16))}},Y9=L(z9,[["__file","/@slidev/slides/10.md"]]),Q9=s("h1",null,"⚙️ Preparations",-1),Z9=s("p",null,"First things first!",-1),J9={__name:"11",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[Q9,Z9]),_:1},16))}},X9=L(J9,[["__file","/@slidev/slides/11.md"]]),sD={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},eD=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),nD=[eD];function tD(e,n){return b(),Z("svg",sD,nD)}const oD={name:"ph-clipboard",render:tD},lD={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},aD=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),rD=[aD];function cD(e,n){return b(),Z("svg",lD,rD)}const iD={name:"ph-check-circle",render:cD},pD=["title"],dD=$s({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;R(N);const t=R(pp),l=R(dp),a=R(up);function r(y=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=m.length;for(let B=0;B<y;B++)f.push(m.charAt(Math.floor(Math.random()*g)));return f.join("")}const c=as(),i=Je();ho(()=>{const y=n.at==null?l==null?void 0:l.value.length:n.at,f=T(()=>a!=null&&a.value?n.ranges.length-1:Math.min(Math.max(0,((t==null?void 0:t.value)||0)-(y||0)),n.ranges.length-1)),m=T(()=>n.ranges[f.value]||"");if(n.ranges.length>=2&&!(a!=null&&a.value)){const g=r(),B=P8(n.ranges.length-1).map(D=>g+D);l!=null&&l.value&&(l.value.push(...B),pl(()=>B.forEach(D=>$8(l.value,D)),i))}wt(()=>{if(!c.value)return;const B=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const D of B){const S=Array.from(D.querySelectorAll(".line")),E=rd(S.length,m.value);if(S.forEach((x,F)=>{const V=E.includes(F+1);x.classList.toggle(O8,!0),x.classList.toggle("highlighted",V),x.classList.toggle("dishonored",!V)}),n.maxHeight){const x=D.querySelector(".line.highlighted");x&&x.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:d}=Of();function u(){var f,m;const y=(m=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;y&&d(y)}return(y,f)=>{const m=iD,g=oD;return b(),Z("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:Zs({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[le(y.$slots,"default"),v(Os).codeCopy?(b(),Z("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:v(p)?"Copied":"Copy",onClick:f[0]||(f[0]=B=>u())},[v(p)?(b(),H(m,{key:0,class:"p-2 w-8 h-8"})):(b(),H(g,{key:1,class:"p-2 w-8 h-8"}))],8,pD)):_s("v-if",!0)],4)}}}),Fs=L(dD,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),uD=s("h1",null,"Installing Acorn",-1),yD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"acorn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"install")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"✔"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"Running"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"Pre-install"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"Checks")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"✔"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"Installing"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"ClusterRoles")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"✔"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"Installing"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"APIServer"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"and"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"Controller")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"image"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"ghcr.io/acorn-io/acorn:v0."),s("span",{style:{color:"#6394BF"}},"5.0"),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"✔"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"Waiting"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"controller"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"deployment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"to"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"be"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"available")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"✔"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"Waiting"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"API"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"server"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"deployment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"to"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"be"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"available")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"✔"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"Waiting"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"registry"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"server"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"deployment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"to"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"be")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"available")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"✔"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"Running"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"Post-install"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"Checks")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"✔"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"Installation"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"done")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"acorn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"install")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"✔"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"Running"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"Pre-install"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"Checks")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"✔"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"Installing"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"ClusterRoles")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"✔"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"Installing"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"APIServer"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"and"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"Controller")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"image"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"ghcr.io/acorn-io/acorn:v0."),s("span",{style:{color:"#296AA3"}},"5.0"),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"✔"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"Waiting"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"controller"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"deployment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"to"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"be"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"available")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"✔"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"Waiting"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"API"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"server"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"deployment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"to"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"be"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"available")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"✔"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"Waiting"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"registry"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"server"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"deployment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"to"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"be")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"available")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"✔"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"Running"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"Post-install"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"Checks")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"✔"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"Installation"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"done")])])])],-1),fD=s("p",null,[o("The installation takes many parameters, e.g. for configuring "),s("strong",null,"Let’s encrypt")],-1),hD=s("ol",null,[s("li",null,"acorn checks some prerequisites (e.g. existing IngressController).")],-1),mD=s("ol",{start:"2"},[s("li",null,"ClusterRoles, followed by the workloads and CRDs get installed.")],-1),gD=s("ol",{start:"3"},[s("li",null,"waits for its workloads to be up and running.")],-1),AD=s("ol",{start:"4"},[s("li",null,"if all checks succeed, we can start! 🎉")],-1),_D={__name:"12",setup(e){const n={layout:"default",transition:"fade-out",clicks:4,srcSequence:"./slides/theory/installation.md"};return R(N),(t,l)=>{const a=Fs,r=me;return b(),H(Fe,ts(ns(n)),{default:_(()=>[uD,C(a,ys({},{ranges:["1","1,2","1,3-5","1,6-9","1,10,11"]}),{default:_(()=>[yD]),_:1},16),fD,C(r,{at:"1"},{default:_(()=>[hD]),_:1}),C(r,{at:"2"},{default:_(()=>[mD]),_:1}),C(r,{at:"3"},{default:_(()=>[gD]),_:1}),C(r,{at:"4"},{default:_(()=>[AD]),_:1})]),_:1},16)}}},BD=L(_D,[["__file","/@slidev/slides/12.md"]]),DD=s("h1",null,"Preparing our dev environment",-1),bD=s("p",null,"Time to fetch our repository!",-1),vD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"git"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"clone"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"https://github.com/mocdaniel/acorn-workshop.git"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"cd"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"acorn-workshop")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"git"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"checkout"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"section-"),s("span",{style:{color:"#CB7676"}},"0"),s("span",{style:{color:"#6394BF"}},"1")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"ls")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"Acornfile"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"compose.yml"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"LICENSE"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"README.md")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"git"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"clone"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"https://github.com/mocdaniel/acorn-workshop.git"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"cd"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"acorn-workshop")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"git"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"checkout"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"section-"),s("span",{style:{color:"#AB5959"}},"0"),s("span",{style:{color:"#296AA3"}},"1")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"ls")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"Acornfile"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"compose.yml"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"LICENSE"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"README.md")])])])],-1),CD=s("br",null,null,-1),kD=s("br",null,null,-1),ED=s("br",null,null,-1),wD=s("p",null,[s("strong",null,"Acornfile"),o(" contains our configuration for Acorn to take, parse, and deploy.")],-1),SD=s("p",null,[s("strong",null,"compose.yml"),o(" contains the same application, but as compose Stack to be deployed with Docker.")],-1),xD={__name:"13",setup(e){const n={layout:"default",transition:"fade-out",clicks:1,srcSequence:"./slides/theory/repository.md"};return R(N),(t,l)=>{const a=Fs,r=me;return b(),H(Fe,ts(ns(n)),{default:_(()=>[DD,bD,C(a,ys({},{ranges:["1-5","6"]}),{default:_(()=>[vD]),_:1},16),C(r,{at:"1"},{default:_(()=>[CD,kD,ED,wD,SD]),_:1})]),_:1},16)}}},FD=L(xD,[["__file","/@slidev/slides/13.md"]]),OD=s("h1",null,"🚀 Test Run",-1),TD=s("p",null,"Let’s see what we’re working with",-1),$D=s("br",null,null,-1),PD=s("br",null,null,-1),RD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"docker"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"compose"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"up")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"docker"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"compose"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"up")])])])],-1),UD={__name:"14",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>{const a=Fs;return b(),H(ye,ts(ns(n)),{default:_(()=>[OD,TD,$D,PD,C(a,ys({},{ranges:[""]}),{default:_(()=>[RD]),_:1},16)]),_:1},16)}}},ID=L(UD,[["__file","/@slidev/slides/14.md"]]),HD="/project-light.png",ND="/project-dark.png",LD=s("img",{src:HD,alt:"Overview of the project's inner workings"},null,-1),GD=s("img",{src:ND,alt:"Overview of the project's inner workings"},null,-1),MD={__name:"15",setup(e){const n={layout:"center",transition:"fade-out"};return R(N),(t,l)=>{const a=Ya;return b(),H(ye,ts(ns(n)),{default:_(()=>[C(a,null,{light:_(()=>[LD]),dark:_(()=>[GD]),_:1})]),_:1},16)}}},KD=L(MD,[["__file","/@slidev/slides/15.md"]]),WD=s("h1",null,"🏗️ First Steps",-1),VD=s("p",null,"Acorn Fundamentals",-1),jD=s("br",null,null,-1),qD=s("br",null,null,-1),zD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"git"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"checkout"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"section-"),s("span",{style:{color:"#CB7676"}},"0"),s("span",{style:{color:"#6394BF"}},"1")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"git"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"checkout"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"section-"),s("span",{style:{color:"#AB5959"}},"0"),s("span",{style:{color:"#296AA3"}},"1")])])])],-1),YD={__name:"16",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[WD,VD,jD,qD,zD]),_:1},16))}},QD=L(YD,[["__file","/@slidev/slides/16.md"]]),ZD={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},JD=$s({__name:"two-cols",props:{class:{type:String}},setup(e){const n=e;return R(N),(t,l)=>(b(),Z("div",ZD,[s("div",{class:Ms(["col-left",n.class])},[le(t.$slots,"default")],2),s("div",{class:Ms(["col-right",n.class])},[le(t.$slots,"right")],2)]))}}),Ls=L(JD,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/layouts/two-cols.vue"]]),XD=s("h1",null,"Defining our Database",-1),sb=s("h3",null,"compose.yml",-1),eb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"environment"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"POSTGRES_PASSWORD=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"5432:5432")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"postgres:12")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"volumes"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"db-data:/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"environment"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"POSTGRES_PASSWORD=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"5432:5432")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"postgres:12")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"db-data:/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),nb=s("br",null,null,-1),tb=s("br",null,null,-1),ob=s("br",null,null,-1),lb=s("p",null,"First, we will define the database:",-1),ab=s("ul",null,[s("li",null,"container image"),s("li",null,"exposed port(s)"),s("li",null,[o("environment variables "),s("ul",null,[s("li",null,"database name"),s("li",null,"database user"),s("li",null,"database password")])])],-1),rb={__name:"17",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:1,srcSequence:"./slides/practical/section-01/database-static.md"};return R(N),(t,l)=>{const a=Fs,r=me;return b(),H(Ls,ts(ns(n)),{right:_(c=>[nb,tb,ob,lb,C(r,{at:"1"},{default:_(()=>[ab]),_:1})]),default:_(()=>[XD,sb,C(a,ys({maxHeight:"400px"},{ranges:["all","3-9"]}),{default:_(()=>[eb]),_:1},16)]),_:1},16)}}},cb=L(rb,[["__file","/@slidev/slides/17.md"]]),ib=s("h1",null,"Defining our Database",-1),pb=s("h3",null,"compose.yml",-1),db=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"environment"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"POSTGRES_PASSWORD=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"5432:5432")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"postgres:12")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"volumes"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"db-data:/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"environment"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"POSTGRES_PASSWORD=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"5432:5432")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"postgres:12")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"db-data:/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),ub=s("br",null,null,-1),yb=s("br",null,null,-1),fb=s("h3",null,"Acornfile",-1),hb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),mb={__name:"18",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:null,srcSequence:"./slides/practical/section-01/database-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[ub,yb,fb,C(a,ys({maxHeight:"400px"},{ranges:["2-4"]}),{default:_(()=>[hb]),_:1},16)]),default:_(()=>[ib,pb,C(a,ys({maxHeight:"400px"},{ranges:["3,4,9"]}),{default:_(()=>[db]),_:1},16)]),_:1},16)}}},gb=L(mb,[["__file","/@slidev/slides/18.md"]]),Ab=s("h1",null,"Defining our Database",-1),_b=s("h3",null,"compose.yml",-1),Bb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"environment"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"POSTGRES_PASSWORD=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"5432:5432")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"postgres:12")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"volumes"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"db-data:/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"environment"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"POSTGRES_PASSWORD=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"5432:5432")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"postgres:12")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"db-data:/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Db=s("br",null,null,-1),bb=s("br",null,null,-1),vb=s("h3",null,"Acornfile",-1),Cb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_DB"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_DB"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),kb={__name:"19",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/database-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[Db,bb,vb,C(a,ys({maxHeight:"400px"},{ranges:["2,4-9"]}),{default:_(()=>[Cb]),_:1},16)]),default:_(()=>[Ab,_b,C(a,ys({maxHeight:"400px"},{ranges:["3,5,6"]}),{default:_(()=>[Bb]),_:1},16)]),_:1},16)}}},Eb=L(kb,[["__file","/@slidev/slides/19.md"]]),wb=s("h1",null,"Defining our Database",-1),Sb=s("h3",null,"compose.yml",-1),xb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"environment"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"POSTGRES_PASSWORD=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"5432:5432")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"postgres:12")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"volumes"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"db-data:/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"environment"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"POSTGRES_PASSWORD=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"5432:5432")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"postgres:12")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"db-data:/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Fb=s("br",null,null,-1),Ob=s("br",null,null,-1),Tb=s("h3",null,"Acornfile",-1),$b=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_DB"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:5432/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_DB"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:5432/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Pb={__name:"20",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/database-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[Fb,Ob,Tb,C(a,ys({maxHeight:"400px"},{ranges:["2,9,10"]}),{default:_(()=>[$b]),_:1},16)]),default:_(()=>[wb,Sb,C(a,ys({maxHeight:"400px"},{ranges:["3,7,8"]}),{default:_(()=>[xb]),_:1},16)]),_:1},16)}}},Rb=L(Pb,[["__file","/@slidev/slides/20.md"]]),Ub=s("h1",null,"Defining the Redis cache",-1),Ib=s("h3",null,"compose.yml",-1),Hb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"6379:6379")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"redis:7")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"6379:6379")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"redis:7")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Nb=s("br",null,null,-1),Lb=s("br",null,null,-1),Gb=s("h3",null,[o("Next up: "),s("strong",null,"Redis")],-1),Mb=s("br",null,null,-1),Kb=s("br",null,null,-1),Wb=s("br",null,null,-1),Vb=s("p",null,"We only need to configure the port and image used for this simple setup.",-1),jb={__name:"21",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:1,srcSequence:"./slides/practical/section-01/redis-static.md"};return R(N),(t,l)=>{const a=Fs,r=me;return b(),H(Ls,ts(ns(n)),{right:_(c=>[Nb,Lb,Gb,Mb,Kb,Wb,C(r,{at:"1"},{default:_(()=>[Vb]),_:1})]),default:_(()=>[Ub,Ib,C(a,ys({maxHeight:"400px"},{ranges:["all","3-7"]}),{default:_(()=>[Hb]),_:1},16)]),_:1},16)}}},qb=L(jb,[["__file","/@slidev/slides/21.md"]]),zb=s("h1",null,"Defining the Redis cache",-1),Yb=s("h3",null,"compose.yml",-1),Qb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"6379:6379")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"redis:7")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"6379:6379")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"redis:7")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Zb=s("br",null,null,-1),Jb=s("br",null,null,-1),Xb=s("h3",null,"Acornfile",-1),sv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ev={__name:"22",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/redis-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[Zb,Jb,Xb,C(a,ys({maxHeight:"400px"},{ranges:["3-5"]}),{default:_(()=>[sv]),_:1},16)]),default:_(()=>[zb,Yb,C(a,ys({maxHeight:"400px"},{ranges:["3,4,7"]}),{default:_(()=>[Qb]),_:1},16)]),_:1},16)}}},nv=L(ev,[["__file","/@slidev/slides/22.md"]]),tv=s("h1",null,"Defining the Redis cache",-1),ov=s("h3",null,"compose.yml",-1),lv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"6379:6379")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"redis:7")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"6379:6379")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"redis:7")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),av=s("br",null,null,-1),rv=s("br",null,null,-1),cv=s("h3",null,"Acornfile",-1),iv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:6379/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:6379/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),pv={__name:"23",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/redis-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[av,rv,cv,C(a,ys({maxHeight:"400px"},{ranges:["3,5,6"]}),{default:_(()=>[iv]),_:1},16)]),default:_(()=>[tv,ov,C(a,ys({maxHeight:"400px"},{ranges:["3,5,6"]}),{default:_(()=>[lv]),_:1},16)]),_:1},16)}}},dv=L(pv,[["__file","/@slidev/slides/23.md"]]),uv=s("h1",null,"Defining the guestbook",-1),yv=s("h3",null,"compose.yml",-1),fv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"guestbook"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"dbodky/guestbook-demo:v1.1.0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"command"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"depends_on"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"dbodky/guestbook-demo:v1.1.0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"command"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"depends_on"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),hv=s("br",null,null,-1),mv=s("br",null,null,-1),gv=s("h3",null,"Last one left: Guestbook",-1),Av=s("br",null,null,-1),_v=s("br",null,null,-1),Bv=s("p",null,"Our guestbook needs the most configuration:",-1),Dv=s("ul",null,[s("li",null,"image"),s("li",null,[o("many environment variables (to map the "),s("code",null,"command"),o(" from the "),s("code",null,"compose"),o(" file)")]),s("li",null,"a published port")],-1),bv={__name:"24",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:1,srcSequence:"./slides/practical/section-01/guestbook-static.md"};return R(N),(t,l)=>{const a=Fs,r=me;return b(),H(Ls,ts(ns(n)),{right:_(c=>[hv,mv,gv,Av,_v,Bv,C(r,{at:"1"},{default:_(()=>[Dv]),_:1})]),default:_(()=>[uv,yv,C(a,ys({maxHeight:"350px"},{ranges:["all","2-10,19,20","2,3,4","2,5-10","2,19-20"]}),{default:_(()=>[fv]),_:1},16)]),_:1},16)}}},vv=L(bv,[["__file","/@slidev/slides/24.md"]]),Cv=s("h1",null,"Defining the guestbook",-1),kv=s("h3",null,"compose.yml",-1),Ev=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"guestbook"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"dbodky/guestbook-demo:v1.1.0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"command"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"depends_on"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"dbodky/guestbook-demo:v1.1.0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"command"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"depends_on"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),wv=s("br",null,null,-1),Sv=s("br",null,null,-1),xv=s("h3",null,"Acornfile",-1),Fv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Ov={__name:"25",setup(e){const n={layout:"two-cols",srcSequence:"./slides/practical/section-01/guestbook-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[wv,Sv,xv,C(a,ys({maxHeight:"350px"},{ranges:["2-4"]}),{default:_(()=>[Fv]),_:1},16)]),default:_(()=>[Cv,kv,C(a,ys({maxHeight:"350px"},{ranges:["2,3,4"]}),{default:_(()=>[Ev]),_:1},16)]),_:1},16)}}},Tv=L(Ov,[["__file","/@slidev/slides/25.md"]]),$v=s("h1",null,"Defining the guestbook",-1),Pv=s("h3",null,"compose.yml",-1),Rv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"guestbook"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"dbodky/guestbook-demo:v1.1.0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"command"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"depends_on"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"dbodky/guestbook-demo:v1.1.0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"command"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"depends_on"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Uv=s("br",null,null,-1),Iv=s("br",null,null,-1),Hv=s("h3",null,"Acornfile",-1),Nv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Lv={__name:"26",setup(e){const n={layout:"two-cols",srcSequence:"./slides/practical/section-01/guestbook-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[Uv,Iv,Hv,C(a,ys({maxHeight:"350px"},{ranges:["2,4-11"]}),{default:_(()=>[Nv]),_:1},16)]),default:_(()=>[$v,Pv,C(a,ys({maxHeight:"350px"},{ranges:["2,5-10"]}),{default:_(()=>[Rv]),_:1},16)]),_:1},16)}}},Gv=L(Lv,[["__file","/@slidev/slides/26.md"]]),Mv=s("h1",null,"Defining the guestbook",-1),Kv=s("h3",null,"compose.yml",-1),Wv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"guestbook"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"dbodky/guestbook-demo:v1.1.0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"command"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"depends_on"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"dbodky/guestbook-demo:v1.1.0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"command"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"depends_on"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Vv=s("br",null,null,-1),jv=s("br",null,null,-1),qv=s("h3",null,"Acornfile",-1),zv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"publish"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"publish"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Yv={__name:"27",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/guestbook-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[Vv,jv,qv,C(a,ys({maxHeight:"350px"},{ranges:["2,11,12"]}),{default:_(()=>[zv]),_:1},16)]),default:_(()=>[Mv,Kv,C(a,ys({maxHeight:"350px"},{ranges:["2,19-20"]}),{default:_(()=>[Wv]),_:1},16)]),_:1},16)}}},Qv=L(Yv,[["__file","/@slidev/slides/27.md"]]),Zv=s("h1",null,"Takeaways",-1),Jv=s("p",null,"Many directives are portable from Docker compose",-1),Xv=s("br",null,null,-1),s1=s("ul",null,[s("li",null,"AML behaves a lot like JSON (with some shortcuts)")],-1),e1=s("br",null,null,-1),n1=s("ul",null,[s("li",null,[o("Acornfiles consist of "),s("strong",null,"at least one"),o(" container definition")])],-1),t1=s("br",null,null,-1),o1=s("ul",null,[s("li",null,"Environment variables and ports can be defined just like with Docker compose")],-1),l1=s("br",null,null,-1),a1=s("ul",null,[s("li",null,"Acorn’s developer mode streams output right back to your console")],-1),r1={__name:"28",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-01/takeaways.md"};return R(N),(t,l)=>(b(),H(Fe,ts(ns(n)),{default:_(()=>[Zv,Jv,Xv,s1,e1,n1,t1,o1,l1,a1]),_:1},16))}},c1=L(r1,[["__file","/@slidev/slides/28.md"]]),i1=s("h1",null,"🔁 Iterate",-1),p1=s("p",null,"Utilizing dependencies and probes",-1),d1=s("br",null,null,-1),u1=s("br",null,null,-1),y1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"git"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"checkout"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"section-"),s("span",{style:{color:"#CB7676"}},"0"),s("span",{style:{color:"#6394BF"}},"2")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"git"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"checkout"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"section-"),s("span",{style:{color:"#AB5959"}},"0"),s("span",{style:{color:"#296AA3"}},"2")])])])],-1),f1={__name:"29",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[i1,p1,d1,u1,y1]),_:1},16))}},h1=L(f1,[["__file","/@slidev/slides/29.md"]]),m1=s("h1",null,"Add dependencies",-1),g1=s("h3",null,"compose.yml",-1),A1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"guestbook"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"dbodky/guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"command"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"depends_on"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"dbodky/guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"command"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"depends_on"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),_1=s("br",null,null,-1),B1=s("br",null,null,-1),D1=s("h3",null,"The Guestbook needs its friends!",-1),b1=s("br",null,null,-1),v1=s("br",null,null,-1),C1=s("p",null,[o("If the guestbook comes up before the "),s("code",null,"redis"),o(" or "),s("code",null,"postgres"),o(" workloads, it will crash - we should prevent this.")],-1),k1={__name:"30",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-02/dependencies-static.md"};return R(N),(t,l)=>{const a=Fs,r=me;return b(),H(Ls,ts(ns(n)),{right:_(c=>[_1,B1,D1,b1,v1,C(r,{at:"1"},{default:_(()=>[C1]),_:1})]),default:_(()=>[m1,g1,C(a,ys({maxHeight:"350px"},{ranges:["2,11-15"]}),{default:_(()=>[A1]),_:1},16)]),_:1},16)}}},E1=L(k1,[["__file","/@slidev/slides/30.md"]]),w1=s("h1",null,"Add dependencies",-1),S1=s("h3",null,"compose.yml",-1),x1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"guestbook"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"dbodky/guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"command"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"depends_on"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#429988"}},"condition"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"networks"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"ports"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"restart"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"dbodky/guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"command"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-name=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-host=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-password=password")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--db-user=postgres")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"--redis-host=redis")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"depends_on"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#2F8A89"}},"condition"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"service_started")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"networks"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook-network")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"8080:8080")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"restart"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"unless-stopped")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),F1=s("br",null,null,-1),O1=s("br",null,null,-1),T1=s("h3",null,"Acornfile",-1),$1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"publish"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dependsOn"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},'"redis"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"'),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"publish"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dependsOn"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},'"redis"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"'),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{...}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),P1={__name:"31",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-02/dependencies-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[F1,O1,T1,C(a,ys({maxHeight:"350px"},{ranges:["2,12,13"]}),{default:_(()=>[$1]),_:1},16)]),default:_(()=>[w1,S1,C(a,ys({maxHeight:"350px"},{ranges:["11-15"]}),{default:_(()=>[x1]),_:1},16)]),_:1},16)}}},R1=L(P1,[["__file","/@slidev/slides/31.md"]]),U1=s("h1",null,"Add probes",-1),I1=s("h3",null,"compose.yml",-1),H1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"guestbook"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"dbodky/guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"healthcheck"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"test"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},'"CMD"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"curl"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:8080"'),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"interval"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"10s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"timeout"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"5s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"retries"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"start_period"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"3s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"dbodky/guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"healthcheck"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"test"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},'"CMD"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"curl"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"http://localhost:8080"'),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"interval"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"10s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"timeout"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"5s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"retries"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"start_period"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"3s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),N1=s("br",null,null,-1),L1=s("br",null,null,-1),G1=s("h3",null,"Dependencies need Probes",-1),M1=s("br",null,null,-1),K1=s("br",null,null,-1),W1=s("p",null,[o("Without "),s("strong",null,"probes"),o(", dependencies are registered as met once the workloads get started - regardless of their actual states.")],-1),V1=s("p",null,"We will need to add some probes!",-1),j1={__name:"32",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-02/probes-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[N1,L1,G1,M1,K1,W1,V1]),default:_(()=>[U1,I1,C(a,ys({maxHeight:"350px"},{ranges:["2,6-11"]}),{default:_(()=>[H1]),_:1},16)]),_:1},16)}}},q1=L(j1,[["__file","/@slidev/slides/32.md"]]),z1=s("h1",null,"Add probes",-1),Y1=s("h3",null,"compose.yml",-1),Q1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"guestbook"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"dbodky/guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"container_name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"healthcheck"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"test"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},'"CMD"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"curl"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:8080"'),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"interval"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"10s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"timeout"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"5s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"retries"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#429988"}},"start_period"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"3s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"dbodky/guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"container_name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"guestbook")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"healthcheck"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"test"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},'"CMD"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"curl"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"http://localhost:8080"'),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"interval"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"10s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"timeout"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"5s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"retries"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#2F8A89"}},"start_period"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"3s")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Z1=s("br",null,null,-1),J1=s("br",null,null,-1),X1=s("h3",null,"Acornfile",-1),sC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probe"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"http"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:8080"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probe"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"tcp"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"tcp://localhost:5432"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probe"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"tcp"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"tcp://localhost:6379"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probe"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"http"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"http://localhost:8080"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probe"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"tcp"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"tcp://localhost:5432"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probe"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"tcp"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"tcp://localhost:6379"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),eC=s("p",null,[o("The probe for "),s("code",null,"guestbook"),o(" isn’t needed for our dependencies to work, but it will help Kubernetes to determine its state!")],-1),nC={__name:"33",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-02/probes-static.md"};return R(N),(t,l)=>{const a=Fs,r=me;return b(),H(Ls,ts(ns(n)),{right:_(c=>[Z1,J1,X1,C(a,ys({maxHeight:"350px"},{ranges:["4,8,12"]}),{default:_(()=>[sC]),_:1},16),C(r,null,{default:_(()=>[eC]),_:1})]),default:_(()=>[z1,Y1,C(a,ys({maxHeight:"350px"},{ranges:["2,6-11"]}),{default:_(()=>[Q1]),_:1},16)]),_:1},16)}}},tC=L(nC,[["__file","/@slidev/slides/33.md"]]),oC=s("h1",null,"Takeaways",-1),lC=s("p",null,"Implement your deployment order!",-1),aC=s("br",null,null,-1),rC=s("ul",null,[s("li",null,"Containers can be dependant on other workloads")],-1),cC=s("br",null,null,-1),iC=s("ul",null,[s("li",null,[o("Acorn supports the "),s("code",null,"startup/liveness/readiness"),o(" probes known to Kubernetes")])],-1),pC=s("br",null,null,-1),dC=s("ul",null,[s("li",null,[o("You can run TCP/HTTP probes "),s("em",null,"or"),o(" create your own, script-style")])],-1),uC=s("br",null,null,-1),yC={__name:"34",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-02/takeaways.md"};return R(N),(t,l)=>(b(),H(Fe,ts(ns(n)),{default:_(()=>[oC,lC,aC,rC,cC,iC,pC,dC,uC]),_:1},16))}},fC=L(yC,[["__file","/@slidev/slides/34.md"]]),hC=s("h1",null,"🔁 Iterate",-1),mC=s("p",null,"(Secret) data management",-1),gC=s("br",null,null,-1),AC=s("br",null,null,-1),_C=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"git"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"checkout"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"section-"),s("span",{style:{color:"#CB7676"}},"0"),s("span",{style:{color:"#6394BF"}},"3")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"git"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"checkout"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"section-"),s("span",{style:{color:"#AB5959"}},"0"),s("span",{style:{color:"#296AA3"}},"3")])])])],-1),BC={__name:"35",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[hC,mC,gC,AC,_C]),_:1},16))}},DC=L(BC,[["__file","/@slidev/slides/35.md"]]),bC=s("h1",null,"Add secret management",-1),vC=s("h3",null,"We’re still relying on…",-1),CC=s("br",null,null,-1),kC=s("ul",null,[s("li",null,"hardcoded passwords (uh-oh)")],-1),EC=s("br",null,null,-1),wC=s("ul",null,[s("li",null,"hardcoded database names")],-1),SC=s("br",null,null,-1),xC=s("ul",null,[s("li",null,"our services to never go down/restart (or else data will get lost)")],-1),FC=s("br",null,null,-1),OC=s("p",null,[s("strong",null,"Let’s fix this! 🩹")],-1),TC=s("br",null,null,-1),$C=s("br",null,null,-1),PC=s("h3",null,"Acornfile",-1),RC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookuser"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),UC={__name:"36",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-03/secrets-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[TC,$C,PC,C(a,ys({height:"350px"},{ranges:["5,6,12,13"]}),{default:_(()=>[RC]),_:1},16)]),default:_(()=>[bC,vC,CC,kC,EC,wC,SC,xC,FC,OC]),_:1},16)}}},IC=L(UC,[["__file","/@slidev/slides/36.md"]]),HC=s("h1",null,"Add secret management",-1),NC=s("h3",null,"We’re still relying on…",-1),LC=s("br",null,null,-1),GC=s("ul",null,[s("li",null,"hardcoded passwords (uh-oh)")],-1),MC=s("br",null,null,-1),KC=s("ul",null,[s("li",null,"hardcoded database names")],-1),WC=s("br",null,null,-1),VC=s("ul",null,[s("li",null,"our services to never go down/restart (or else data will get lost)")],-1),jC=s("br",null,null,-1),qC=s("p",null,[s("strong",null,"Let’s fix this! 🩹")],-1),zC=s("br",null,null,-1),YC=s("br",null,null,-1),QC=s("h3",null,"Acornfile",-1),ZC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"secrets"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"db-auth"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"password"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-auth/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-auth/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-auth/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-auth/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"secrets"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"db-auth"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"username"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"password"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-auth/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-auth/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-auth/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-auth/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),JC={__name:"37",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-03/secrets-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[zC,YC,QC,C(a,ys({maxHeight:"350px"},{ranges:["1-7,13,14,20,21"]}),{default:_(()=>[ZC]),_:1},16)]),default:_(()=>[HC,NC,LC,GC,MC,KC,WC,VC,jC,qC]),_:1},16)}}},XC=L(JC,[["__file","/@slidev/slides/37.md"]]),s0=s("h1",null,"Add data persistency",-1),e0=s("h3",null,"compose.yml",-1),n0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"volumes"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"db-data:/var/lib/postgresql/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"volumes"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"redis-data:/data")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"db-data:/var/lib/postgresql/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"redis-data:/data")])])])],-1),t0=s("br",null,null,-1),o0=s("br",null,null,-1),l0=s("h3",null,[s("em",null,"Have you tried rebooting?")],-1),a0=s("br",null,null,-1),r0=s("br",null,null,-1),c0=s("p",null,"This would currently erase all our data! 😱",-1),i0=s("p",null,"We need to create volumes in order to achieve data persistance.",-1),p0={__name:"38",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-03/volumes-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[t0,o0,l0,a0,r0,c0,i0]),default:_(()=>[s0,e0,C(a,ys({maxHeight:"350px"},{ranges:["3,5-7,9,10"]}),{default:_(()=>[n0]),_:1},16)]),_:1},16)}}},d0=L(p0,[["__file","/@slidev/slides/38.md"]]),u0=s("h1",null,"Add data persistency",-1),y0=s("h3",null,"compose.yml",-1),f0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#429988"}},"services"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"postgres"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"volumes"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"db-data:/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#429988"}},"redis"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"..."),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#429988"}},"volumes"),s("span",{style:{color:"#858585"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"-"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"redis-data:/data")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#2F8A89"}},"services"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"db-data:/data")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#2F8A89"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"..."),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#2F8A89"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"-"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"redis-data:/data")])])])],-1),h0=s("br",null,null,-1),m0=s("br",null,null,-1),g0=s("h3",null,"Acornfile",-1),A0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"volumes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"postgres-data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"redis-data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dirs"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/var/lib/postgresql/data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"volume://postgres-data?subpath=/data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dirs"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"volume://redis-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"secrets"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"postgres-data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"redis-data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dirs"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/var/lib/postgresql/data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"volume://postgres-data?subpath=/data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dirs"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"volume://redis-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"secrets"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_0={__name:"39",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-03/volumes-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[h0,m0,g0,C(a,ys({maxHeight:"350px"},{ranges:["1-4,12,16"]}),{default:_(()=>[A0]),_:1},16)]),default:_(()=>[u0,y0,C(a,ys({maxHeight:"350px"},{ranges:["3,5-7,9,10"]}),{default:_(()=>[f0]),_:1},16)]),_:1},16)}}},B0=L(_0,[["__file","/@slidev/slides/39.md"]]),D0=s("h1",null,"Takeaways",-1),b0=s("p",null,"Acorn takes care of secrets and volumes, both locally and remote",-1),v0=s("br",null,null,-1),C0=s("ul",null,[s("li",null,"Acorn supports different secret types to choose from")],-1),k0=s("br",null,null,-1),E0=s("ul",null,[s("li",null,"Simple creation of 'closed loops'")],-1),w0=s("br",null,null,-1),S0=s("ul",null,[s("li",null,[o("Secrets can be exposed via Acorn’s CLI, no more need for "),s("br"),s("code",null,"kubectl get secrets/db-auth --template={{.data.password}} | base64 -d")])],-1),x0={__name:"40",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-03/takeaways.md"};return R(N),(t,l)=>(b(),H(Fe,ts(ns(n)),{default:_(()=>[D0,b0,v0,C0,k0,E0,w0,S0]),_:1},16))}},F0=L(x0,[["__file","/@slidev/slides/40.md"]]),O0=s("h1",null,"🔁 Iterate",-1),T0=s("p",null,"User-provided configuration",-1),$0=s("br",null,null,-1),P0=s("br",null,null,-1),R0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"git"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"checkout"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"section-"),s("span",{style:{color:"#CB7676"}},"0"),s("span",{style:{color:"#6394BF"}},"4")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"git"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"checkout"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"section-"),s("span",{style:{color:"#AB5959"}},"0"),s("span",{style:{color:"#296AA3"}},"4")])])])],-1),U0={__name:"41",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[O0,T0,$0,P0,R0]),_:1},16))}},I0=L(U0,[["__file","/@slidev/slides/41.md"]]),H0=s("h1",null,"Add runtime arguments",-1),N0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"publish"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dependsOn"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},'"postgres"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"'),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"http"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:8080"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:5432/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_DB"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"tcp"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"tcp://localhost:5432"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dirs"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/var/lib/postgresql/data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"volume://db-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:6379/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"tcp"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"tcp://localhost:6379"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dirs"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"volume://redis-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"secrets"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"db-credentials"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"password"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"volumes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"db-data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"redis-data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"publish"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dependsOn"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},'"postgres"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"'),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"http"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"http://localhost:8080"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:5432/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_DB"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"tcp"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"tcp://localhost:5432"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dirs"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/var/lib/postgresql/data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"volume://db-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:6379/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"tcp"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"tcp://localhost:6379"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dirs"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"volume://redis-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"secrets"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"db-credentials"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"username"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"password"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"db-data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"redis-data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),L0=s("br",null,null,-1),G0=s("br",null,null,-1),M0=s("h3",null,"Press any key",-1),K0=s("br",null,null,-1),W0=s("br",null,null,-1),V0=s("p",null,"…to see nothing changed! We still rely on many hardcoded values in our Acornfile.",-1),j0=s("p",null,[o("Let’s allow users to have a say "),s("em",null,"what"),o(" they actually deploy!")],-1),q0={__name:"42",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[L0,G0,M0,K0,W0,V0,j0]),default:_(()=>[H0,C(a,ys({maxHeight:"350px"},{ranges:["6,21,7,10,17,28,8,9,19,20,38,39"]}),{default:_(()=>[N0]),_:1},16)]),_:1},16)}}},z0=L(q0,[["__file","/@slidev/slides/42.md"]]),Y0=s("h1",null,"Add runtime arguments",-1),Q0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"publish"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dependsOn"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},'"postgres"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"'),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"http"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:8080"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:5432/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_DB"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"tcp"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"tcp://localhost:5432"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dirs"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/var/lib/postgresql/data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"volume://db-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:6379/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"tcp"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"tcp://localhost:6379"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dirs"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"volume://redis-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"secrets"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"db-credentials"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"password"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"volumes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"db-data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"redis-data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"publish"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dependsOn"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},'"postgres"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"'),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"http"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"http://localhost:8080"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:5432/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_DB"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"tcp"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"tcp://localhost:5432"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dirs"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/var/lib/postgresql/data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"volume://db-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:6379/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"tcp"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"tcp://localhost:6379"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dirs"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"volume://redis-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"secrets"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"db-credentials"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"username"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"password"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"db-data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"redis-data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Z0=s("br",null,null,-1),J0=s("br",null,null,-1),X0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// Name of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbName"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSGRES_DB"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"secrets"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"volumes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Name of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbName"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSGRES_DB"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"secrets"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),sk={__name:"43",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[Z0,J0,C(a,ys({maxHeight:"350px"},{ranges:["1-4,9,15"]}),{default:_(()=>[X0]),_:1},16)]),default:_(()=>[Y0,C(a,ys({maxHeight:"350px"},{ranges:["6,21"]}),{default:_(()=>[Q0]),_:1},16)]),_:1},16)}}},ek=L(sk,[["__file","/@slidev/slides/43.md"]]),nk=s("h1",null,"Add runtime arguments",-1),tk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"publish"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dependsOn"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},'"postgres"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"'),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"http"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:8080"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:5432/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_DB"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"tcp"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"tcp://localhost:5432"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dirs"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/var/lib/postgresql/data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"volume://db-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:6379/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"tcp"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"tcp://localhost:6379"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dirs"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"volume://redis-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"secrets"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"db-credentials"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"password"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"volumes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"db-data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"redis-data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"publish"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dependsOn"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},'"postgres"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"'),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"http"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"http://localhost:8080"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:5432/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_DB"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"tcp"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"tcp://localhost:5432"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dirs"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/var/lib/postgresql/data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"volume://db-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:6379/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"tcp"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"tcp://localhost:6379"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dirs"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"volume://redis-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"secrets"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"db-credentials"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"username"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"password"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"db-data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"redis-data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ok=s("br",null,null,-1),lk=s("br",null,null,-1),ak=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// Name of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbName"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// FQDN/IP of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbHost"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// FQDN/IP of the redis instance to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redisHost"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"redisHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSGRES_DB"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"secrets"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"volumes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Name of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbName"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// FQDN/IP of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbHost"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// FQDN/IP of the redis instance to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redisHost"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"redisHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSGRES_DB"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"secrets"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),rk={__name:"44",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[ok,lk,C(a,ys({maxHeight:"350px"},{ranges:["4-7,15,16"]}),{default:_(()=>[ak]),_:1},16)]),default:_(()=>[nk,C(a,ys({maxHeight:"350px"},{ranges:["7,10,17,28"]}),{default:_(()=>[tk]),_:1},16)]),_:1},16)}}},ck=L(rk,[["__file","/@slidev/slides/44.md"]]),ik=s("h1",null,"Add runtime arguments",-1),pk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"publish"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dependsOn"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},'"postgres"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"'),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"http"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:8080"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres:5432/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_USER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSTGRES_DB"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"tcp"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"tcp://localhost:5432"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dirs"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/var/lib/postgresql/data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"volume://db-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"image"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ports"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis:6379/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"probes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readiness"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"tcp"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"tcp://localhost:6379"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"dirs"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"volume://redis-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"secrets"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"db-credentials"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"password"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"volumes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"db-data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"redis-data"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"dbodky/guestbook-demo:v1.1.0"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"publish"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbook:8080/http"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dependsOn"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},'"postgres"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"'),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"http"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"http://localhost:8080"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:12"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres:5432/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_USER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/username"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_PASSWORD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"secret://db-credentials/password"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSTGRES_DB"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"tcp"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"tcp://localhost:5432"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dirs"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/var/lib/postgresql/data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"volume://db-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"image"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:7"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ports"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis:6379/tcp"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"probes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readiness"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"tcp"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"tcp://localhost:6379"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"dirs"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"volume://redis-data"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"secrets"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"db-credentials"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"username"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"password"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"db-data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"redis-data"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),dk=s("br",null,null,-1),uk=s("br",null,null,-1),yk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// Name of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbName"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// FQDN/IP of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbHost"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// FQDN/IP of the redis instance to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redisHost"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// Database password to use")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbPassword"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// Database user to use")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbUser"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"secrets"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"db-auth"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"username"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbUser")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"password"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbPassword")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"redisHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSGRES_DB"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"volumes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Name of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbName"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// FQDN/IP of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbHost"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// FQDN/IP of the redis instance to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redisHost"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Database password to use")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbPassword"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Database user to use")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbUser"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"secrets"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"db-auth"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"basic"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"username"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbUser")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"password"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbPassword")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"redisHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSGRES_DB"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),fk={__name:"45",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[dk,uk,C(a,ys({maxHeight:"350px"},{ranges:["8-11,18,19"]}),{default:_(()=>[yk]),_:1},16)]),default:_(()=>[ik,C(a,ys({maxHeight:"350px"},{ranges:["8,9,19,20,38,39"]}),{default:_(()=>[pk]),_:1},16)]),_:1},16)}}},hk=L(fk,[["__file","/@slidev/slides/45.md"]]),mk=s("h1",null,"Add runtime arguments",-1),gk=s("br",null,null,-1),Ak=s("br",null,null,-1),_k=s("br",null,null,-1),Bk=s("br",null,null,-1),Dk=s("p",null,"As we will deploy this Acorn to Kubernetes, let’s utilize its scaling features and and make our frontend scalable!",-1),bk=s("br",null,null,-1),vk=s("br",null,null,-1),Ck=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// Name of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbName"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// FQDN/IP of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbHost"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// FQDN/IP of the redis instance to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redisHost"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// Database password to use")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbPassword"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// Database user to use")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dbUser"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// amount of replicas to run for our frontend")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"replicas"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"containers"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"guestbook"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dev"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"scale"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"replicas")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"redisHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postgres"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"env"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"POSGRES_DB"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"redis"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"secrets"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"volumes"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Name of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbName"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"guestbookdb"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// FQDN/IP of the database to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbHost"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"postgres"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// FQDN/IP of the redis instance to connect to")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redisHost"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"redis"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Database password to use")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbPassword"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Database user to use")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dbUser"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// amount of replicas to run for our frontend")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"replicas"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"containers"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"guestbook"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dev"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"scale"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"replicas")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_NAME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_DB_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"GUESTBOOK_REDIS_HOST"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"redisHost")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postgres"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"env"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"POSGRES_DB"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"dbName")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"redis"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"secrets"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"volumes"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// omitted content")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),kk={__name:"46",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"};return R(N),(t,l)=>{const a=Fs;return b(),H(Ls,ts(ns(n)),{right:_(r=>[bk,vk,C(a,ys({maxHeight:"350px"},{ranges:["12,13,18-20"]}),{default:_(()=>[Ck]),_:1},16)]),default:_(()=>[mk,gk,Ak,_k,Bk,Dk]),_:1},16)}}},Ek=L(kk,[["__file","/@slidev/slides/46.md"]]),wk=s("h1",null,"Why the comments?",-1),Sk=s("p",null,"Because they help Acorn’s CLI to parse nice output for end users!",-1),xk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"acorn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"run"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"."),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"--help")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"Usage"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"of"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"Acornfile:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"--db-host"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"string"),s("span",{style:{color:"#DBD7CA"}},"       "),s("span",{style:{color:"#C98A7D"}},"FQDN/IP"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"of"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"our"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"PostgreSQL"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"database")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"--db-name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"string"),s("span",{style:{color:"#DBD7CA"}},"       "),s("span",{style:{color:"#C98A7D"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"of"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"the"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"database"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"provisioned"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"our"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"application")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"--db-password"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"string"),s("span",{style:{color:"#DBD7CA"}},"   "),s("span",{style:{color:"#C98A7D"}},"database"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"password"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"provisioned"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"our"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"application")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"--db-user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"string"),s("span",{style:{color:"#DBD7CA"}},"       "),s("span",{style:{color:"#C98A7D"}},"database"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"provisioned"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"our"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"application")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"--redis-host"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"string"),s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#C98A7D"}},"FQDN/IP"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"of"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"our"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"Redis"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"cache")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"--replicas"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"int"),s("span",{style:{color:"#DBD7CA"}},"         "),s("span",{style:{color:"#C98A7D"}},"amount"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"of"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"replicas"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"to"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"run")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"acorn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"run"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"."),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"--help")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"Usage"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"of"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"Acornfile:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"--db-host"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"string"),s("span",{style:{color:"#393A34"}},"       "),s("span",{style:{color:"#B56959"}},"FQDN/IP"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"of"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"our"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"PostgreSQL"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"database")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"--db-name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"string"),s("span",{style:{color:"#393A34"}},"       "),s("span",{style:{color:"#B56959"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"of"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"the"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"database"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"provisioned"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"our"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"application")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"--db-password"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"string"),s("span",{style:{color:"#393A34"}},"   "),s("span",{style:{color:"#B56959"}},"database"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"password"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"provisioned"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"our"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"application")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"--db-user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"string"),s("span",{style:{color:"#393A34"}},"       "),s("span",{style:{color:"#B56959"}},"database"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"provisioned"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"our"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"application")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"--redis-host"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"string"),s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B56959"}},"FQDN/IP"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"of"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"our"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"Redis"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"cache")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"--replicas"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"int"),s("span",{style:{color:"#393A34"}},"         "),s("span",{style:{color:"#B56959"}},"amount"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"of"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"replicas"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"to"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"run")])])])],-1),Fk={__name:"47",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"};return R(N),(t,l)=>(b(),H(Fe,ts(ns(n)),{default:_(()=>[wk,Sk,xk]),_:1},16))}},Ok=L(Fk,[["__file","/@slidev/slides/47.md"]]),Tk=s("h1",null,"Takeaways",-1),$k=s("p",null,"The CLI is your friend - again!",-1),Pk=s("br",null,null,-1),Rk=s("ul",null,[s("li",null,"Dynamic data can be used at run/deploy time")],-1),Uk=s("br",null,null,-1),Ik=s("ul",null,[s("li",null,"Acorn’s CLI parses the data inventory and displays it for the end user")],-1),Hk=s("br",null,null,-1),Nk=s("ul",null,[s("li",null,"Defaults can be set")],-1),Lk=s("br",null,null,-1),Gk=s("ul",null,[s("li",null,[o("Data can be manipulated using Acorn’s "),s("code",null,"std"),o(" library")])],-1),Mk={__name:"48",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-04/takeaways.md"};return R(N),(t,l)=>(b(),H(Fe,ts(ns(n)),{default:_(()=>[Tk,$k,Pk,Rk,Uk,Ik,Hk,Nk,Lk,Gk]),_:1},16))}},Kk=L(Mk,[["__file","/@slidev/slides/48.md"]]),Wk=s("h1",null,"✨ Finishing Touches",-1),Vk=s("p",null,"Build, push, and deploy the Acorns",-1),jk=s("br",null,null,-1),qk=s("br",null,null,-1),zk=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"git"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"checkout"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"section-"),s("span",{style:{color:"#CB7676"}},"0"),s("span",{style:{color:"#6394BF"}},"5")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"git"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"checkout"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"section-"),s("span",{style:{color:"#AB5959"}},"0"),s("span",{style:{color:"#296AA3"}},"5")])])])],-1),Yk={__name:"49",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[Wk,Vk,jk,qk,zk]),_:1},16))}},Qk=L(Yk,[["__file","/@slidev/slides/49.md"]]),Zk=s("h1",null,"Almost there!",-1),Jk=s("p",null,"Deployment looks similar to the workflow on Docker",-1),Xk=s("br",null,null,-1),s4=s("br",null,null,-1),e4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"acorn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"login"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"registr"),s("span",{style:{color:"#DBD7CA"}},"y"),s("span",{style:{color:"#CB7676"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"acorn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"build"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"-t"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"registr"),s("span",{style:{color:"#DBD7CA"}},"y"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#C98A7D"}},"/"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"use"),s("span",{style:{color:"#DBD7CA"}},"r"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#C98A7D"}},"/"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"imag"),s("span",{style:{color:"#DBD7CA"}},"e"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#C98A7D"}},":"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"ta"),s("span",{style:{color:"#DBD7CA"}},"g"),s("span",{style:{color:"#CB7676"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"acorn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"push"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"registr"),s("span",{style:{color:"#DBD7CA"}},"y"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#C98A7D"}},"/"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"use"),s("span",{style:{color:"#DBD7CA"}},"r"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#C98A7D"}},"/"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"imag"),s("span",{style:{color:"#DBD7CA"}},"e"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#C98A7D"}},":"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"ta"),s("span",{style:{color:"#DBD7CA"}},"g"),s("span",{style:{color:"#CB7676"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"acorn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"run"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"registr"),s("span",{style:{color:"#DBD7CA"}},"y"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#C98A7D"}},"/"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"use"),s("span",{style:{color:"#DBD7CA"}},"r"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#C98A7D"}},"/"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"imag"),s("span",{style:{color:"#DBD7CA"}},"e"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#C98A7D"}},":"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#C98A7D"}},"ta"),s("span",{style:{color:"#DBD7CA"}},"g"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"--help")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"acorn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"run"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"--target-namespace"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"demo"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"--name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"demo"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}},"registry/user/image/tag"),s("span",{style:{color:"#CB7676"}},">"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#DBD7CA"}},"OPTIONS"),s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"acorn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"login"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"registr"),s("span",{style:{color:"#393A34"}},"y"),s("span",{style:{color:"#AB5959"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"acorn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"build"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"-t"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"registr"),s("span",{style:{color:"#393A34"}},"y"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#B56959"}},"/"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"use"),s("span",{style:{color:"#393A34"}},"r"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#B56959"}},"/"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"imag"),s("span",{style:{color:"#393A34"}},"e"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#B56959"}},":"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"ta"),s("span",{style:{color:"#393A34"}},"g"),s("span",{style:{color:"#AB5959"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"acorn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"push"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"registr"),s("span",{style:{color:"#393A34"}},"y"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#B56959"}},"/"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"use"),s("span",{style:{color:"#393A34"}},"r"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#B56959"}},"/"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"imag"),s("span",{style:{color:"#393A34"}},"e"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#B56959"}},":"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"ta"),s("span",{style:{color:"#393A34"}},"g"),s("span",{style:{color:"#AB5959"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"acorn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"run"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"registr"),s("span",{style:{color:"#393A34"}},"y"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#B56959"}},"/"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"use"),s("span",{style:{color:"#393A34"}},"r"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#B56959"}},"/"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"imag"),s("span",{style:{color:"#393A34"}},"e"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#B56959"}},":"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#B56959"}},"ta"),s("span",{style:{color:"#393A34"}},"g"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"--help")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"acorn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"run"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"--target-namespace"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"demo"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"--name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"demo"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}},"registry/user/image/tag"),s("span",{style:{color:"#AB5959"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#393A34"}},"OPTIONS"),s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),n4=s("br",null,null,-1),t4=s("br",null,null,-1),o4=s("br",null,null,-1),l4=s("br",null,null,-1),a4=s("br",null,null,-1),r4=s("ol",null,[s("li",null,"Login to your registry")],-1),c4=s("br",null,null,-1),i4=s("ol",{start:"2"},[s("li",null,"Build and tag the image/artifact")],-1),p4=s("br",null,null,-1),d4=s("ol",{start:"3"},[s("li",null,"Push the image to your repository")],-1),u4=s("br",null,null,-1),y4=s("ol",{start:"4"},[s("li",null,"Pull the image to its destination or deploy it directly")],-1),f4={__name:"50",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:4,srcSequence:"./slides/practical/section-05/deploy.md"};return R(N),(t,l)=>{const a=Fs,r=me;return b(),H(Ls,ts(ns(n)),{right:_(c=>[n4,t4,o4,l4,a4,C(r,{at:"1"},{default:_(()=>[r4,c4]),_:1}),C(r,{at:"2"},{default:_(()=>[i4,p4]),_:1}),C(r,{at:"3"},{default:_(()=>[d4,u4]),_:1}),C(r,{at:"4"},{default:_(()=>[y4]),_:1})]),default:_(()=>[Zk,Jk,Xk,s4,C(a,ys({maxHeight:"400px"},{ranges:["","1","3","5","7,9,10"]}),{default:_(()=>[e4]),_:1},16)]),_:1},16)}}},h4=L(f4,[["__file","/@slidev/slides/50.md"]]),m4=s("h1",null,"🎭 Encore",-1),g4=s("p",null,"Some more things Acorn can do…",-1),A4={__name:"51",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[m4,g4]),_:1},16))}},_4=L(A4,[["__file","/@slidev/slides/51.md"]]),B4=s("h1",null,"Demo",-1),D4=s("p",null,"Let’s deploy a workshop guestbook!",-1),b4=s("br",null,null,-1),v4=s("br",null,null,-1),C4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"acorn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"install"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"--ingress-class-name=nginx "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"--lets-encrypt=enabled "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"--lets-encrypt-email=dbodky@gmail.com "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"--lets-encrypt-tos-agree=true "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"--cluster-domain=dbodky.me "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"--http-endpoint-pattern="),s("span",{style:{color:"#C98A7D"}},'"{{.Container}}.{{.ClusterDomain}}"')])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"acorn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"install"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"--ingress-class-name=nginx "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"--lets-encrypt=enabled "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"--lets-encrypt-email=dbodky@gmail.com "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"--lets-encrypt-tos-agree=true "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"--cluster-domain=dbodky.me "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"--http-endpoint-pattern="),s("span",{style:{color:"#B56959"}},'"{{.Container}}.{{.ClusterDomain}}"')])])])],-1),k4=s("div",{class:"bg-red absolute left-2 top-43 h-4 w-39 opacity-50 rounded-md"},null,-1),E4=s("div",{class:"bg-green absolute left-2 top-47.5 h-4 w-41 opacity-50 rounded-md"},null,-1),w4=s("div",{class:"bg-green absolute left-2 top-52 h-4 w-68 opacity-50 rounded-md"},null,-1),S4=s("div",{class:"bg-green absolute left-2 top-56.5 h-4 w-53 opacity-50 rounded-md"},null,-1),x4=s("div",{class:"bg-blue absolute left-2 top-61.5 h-4 w-48 opacity-50 rounded-md"},null,-1),F4=s("div",{class:"bg-pink absolute left-2 top-66 h-4 w-106.5 opacity-50 rounded-md"},null,-1),O4=s("br",null,null,-1),T4=s("br",null,null,-1),$4=s("br",null,null,-1),P4=s("br",null,null,-1),R4=s("br",null,null,-1),U4=s("li",{class:"text-red"},[o("Define the installed "),s("code",null,"IngressClass")],-1),I4=s("li",{class:"text-green"},[o("Configure TLS certificate generation via "),s("b",null,"Let's Encrypt")],-1),H4=s("li",{class:"text-blue"},[o("Configure the cluster domain to use for "),s("code",null,"Ingress"),o(" generation by Acorn")],-1),N4=s("li",{class:"text-pink"},[o("Configure the HTTP endpoint pattern to use for "),s("code",null,"Ingress"),o(" generation by Acorn")],-1),L4={__name:"52",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:4,srcSequence:"./slides/practical/section-05/demo.md"};return R(N),(t,l)=>{const a=Fs,r=me;return b(),H(Ls,ts(ns(n)),{right:_(c=>[O4,T4,$4,P4,R4,s("ul",null,[C(r,{at:"1"},{default:_(()=>[U4]),_:1}),C(r,{at:"2"},{default:_(()=>[I4]),_:1}),C(r,{at:"3"},{default:_(()=>[H4]),_:1}),C(r,{at:"4"},{default:_(()=>[N4]),_:1})])]),default:_(()=>[B4,D4,b4,v4,C(a,ys({},{ranges:[""]}),{default:_(()=>[C4]),_:1},16),C(r,null,{default:_(()=>[k4]),_:1}),C(r,null,{default:_(()=>[E4,w4,S4]),_:1}),C(r,null,{default:_(()=>[x4]),_:1}),C(r,null,{default:_(()=>[F4]),_:1})]),_:1},16)}}},G4=L(L4,[["__file","/@slidev/slides/52.md"]]),M4=s("h1",null,"Demo",-1),K4=s("p",null,"Let’s deploy a workshop guestbook!",-1),W4=s("br",null,null,-1),V4=s("br",null,null,-1),j4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"acorn"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"run"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"--name=demo "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"--target-namespace=guestbook "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"--link=ext-db:postgres "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"--secret=db-credentials:db-auth "),s("span",{style:{color:"#D4976C"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"index.docker.io/dbodky/guestbook-acorn:v1.0.0")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"acorn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"run"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"--name=demo "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"--target-namespace=guestbook "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"--link=ext-db:postgres "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"--secret=db-credentials:db-auth "),s("span",{style:{color:"#A65E2B"}},"\\")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"index.docker.io/dbodky/guestbook-acorn:v1.0.0")])])])],-1),q4=s("div",{class:"bg-red absolute left-2 top-43 h-4 w-21 opacity-50 rounded-md"},null,-1),z4=s("div",{class:"bg-green absolute left-2 top-47.5 h-4 w-51.5 opacity-50 rounded-md"},null,-1),Y4=s("div",{class:"bg-pink absolute left-2 top-52 h-4 w-40 opacity-50 rounded-md"},null,-1),Q4=s("div",{class:"bg-purple absolute left-2 top-56.5 h-4 w-56.5 opacity-50 rounded-md"},null,-1),Z4=s("div",{class:"bg-blue absolute left-2 top-61.5 h-4 w-82 opacity-50 rounded-md"},null,-1),J4=s("br",null,null,-1),X4=s("br",null,null,-1),s7=s("br",null,null,-1),e7=s("br",null,null,-1),n7=s("br",null,null,-1),t7=s("li",{class:"text-red"},[o("Define the name of the Acorn "),s("code",null,"App")],-1),o7=s("li",{class:"text-green"},[o("Define the "),s("code",null,"Namespace"),o(" the "),s("code",null,"App"),o(" will live in")],-1),l7=s("li",{class:"text-pink"},[o("Link an external Database instead of the "),s("code",null,"postgres"),o(" service defined in our Acorn")],-1),a7=s("li",{class:"text-purple"},[o("Reference a "),s("code",null,"Secret"),o(" with our database's credentials instead of providing/generating one")],-1),r7=s("li",{class:"text-blue"},[o("State the "),s("code",null,"Image"),o(" you want to deploy")],-1),c7={__name:"53",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:5,srcSequence:"./slides/practical/section-05/demo.md"};return R(N),(t,l)=>{const a=Fs,r=me;return b(),H(Ls,ts(ns(n)),{right:_(c=>[J4,X4,s7,e7,n7,s("ul",null,[C(r,{at:"1"},{default:_(()=>[t7]),_:1}),C(r,{at:"2"},{default:_(()=>[o7]),_:1}),C(r,{at:"3"},{default:_(()=>[l7]),_:1}),C(r,{at:"4"},{default:_(()=>[a7]),_:1}),C(r,{at:"5"},{default:_(()=>[r7]),_:1})])]),default:_(()=>[M4,K4,W4,V4,C(a,ys({},{ranges:[""]}),{default:_(()=>[j4]),_:1},16),C(r,null,{default:_(()=>[q4]),_:1}),C(r,null,{default:_(()=>[z4]),_:1}),C(r,null,{default:_(()=>[Y4]),_:1}),C(r,null,{default:_(()=>[Q4]),_:1}),C(r,null,{default:_(()=>[Z4]),_:1})]),_:1},16)}}},i7=L(c7,[["__file","/@slidev/slides/53.md"]]),p7=s("h1",null,"🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!",-1),d7={__name:"54",setup(e){const n={layout:"center",class:"text-center",transition:"fade-out",srcSequence:"./slides/practical/section-05/demo.md"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[p7]),_:1},16))}},u7=L(d7,[["__file","/@slidev/slides/54.md"]]),y7=s("h1",null,"Summing it up",-1),f7=s("p",null,"Acorn can be helpful if …",-1),h7=s("br",null,null,-1),m7=s("p",null,[s("span",{class:"text-2xl"},"🏎️"),o(" your team needs to get started with Kubernetes fast")],-1),g7=s("br",null,null,-1),A7=s("p",null,[s("span",{class:"text-2xl"},"🪞"),o(" dev, test, and production environments shall 'feel the same'")],-1),_7=s("br",null,null,-1),B7=s("p",null,[s("span",{class:"text-2xl"},"📑"),o(" different runtime profiles need to be deployed")],-1),D7={__name:"55",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/end/pros.md"};return R(N),(t,l)=>{const a=me;return b(),H(Fe,ts(ns(n)),{default:_(()=>[y7,f7,h7,C(a,null,{default:_(()=>[m7,g7]),_:1}),C(a,null,{default:_(()=>[A7,_7]),_:1}),C(a,null,{default:_(()=>[B7]),_:1})]),_:1},16)}}},b7=L(D7,[["__file","/@slidev/slides/55.md"]]),v7=s("h1",null,"Summing it up",-1),C7=s("p",null,"Acorn still lacks…",-1),k7=s("br",null,null,-1),E7=s("p",null,[s("span",{class:"text-2xl"},"🦄"),o(" CRD support")],-1),w7=s("br",null,null,-1),S7=s("p",null,[s("span",{class:"text-2xl"},"⚖️"),o(" autoscaling configuration")],-1),x7=s("br",null,null,-1),F7=s("p",null,[s("span",{class:"text-2xl"},"🚨"),o(" (Network) policies")],-1),O7=s("br",null,null,-1),T7={__name:"56",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/end/cons.md"};return R(N),(t,l)=>{const a=me;return b(),H(Fe,ts(ns(n)),{default:_(()=>[v7,C7,k7,C(a,null,{default:_(()=>[E7,w7]),_:1}),C(a,null,{default:_(()=>[S7,x7]),_:1}),C(a,null,{default:_(()=>[F7,O7]),_:1})]),_:1},16)}}},$7=L(T7,[["__file","/@slidev/slides/56.md"]]),P7=s("h1",null,"🎬 Cut!",-1),R7=s("p",null,"Thanks for attending!",-1),U7={__name:"57",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[P7,R7]),_:1},16))}},I7=L(U7,[["__file","/@slidev/slides/57.md"]]),H7=s("h1",null,"Acknowledgements",-1),N7=s("p",null,"thanks for making this workshop possible",-1),L7=s("br",null,null,-1),G7=s("ul",null,[s("li",null,[s("p",null,[s("a",{href:"https://excalidraw.com",target:"_blank",rel:"noopener"},"Excalidraw")])]),s("li",null,[s("p",null,[s("a",{href:"https://sli.dev",target:"_blank",rel:"noopener"},"Sli.dev")])]),s("li",null,[s("p",null,[s("a",{href:"https://civo.com",target:"_blank",rel:"noopener"},"CIVO")])]),s("li",null,[s("p",null,"YOU!")])],-1),M7=s("br",null,null,-1),K7=s("br",null,null,-1),W7=s("p",null,[o("Feel free to leave feedback at "),s("a",{href:"https://guestbook.dbodky.me",target:"_blank",rel:"noopener"},"guestbook.dbodky.me"),o("!")],-1),V7=s("div",{class:"abs-br text-2 pr-1 text-gray-400"},"Photo by Howie R on Unsplash",-1),j7={__name:"58",setup(e){const n={layout:"image-right",transition:"fade-out",image:"/thankyou.jpg",srcSequence:"./slides/end/thanks.md"};return R(N),(t,l)=>(b(),H(Ja,ts(ns(n)),{default:_(()=>[H7,N7,L7,G7,M7,K7,W7,V7]),_:1},16))}},q7=L(j7,[["__file","/@slidev/slides/58.md"]]),z7=s("h1",null,"❓ Questions",-1),Y7=s("div",{class:"abs-b pb-16 text-4 text-gray-400"},[s("p",null,[o("Feel free to leave feedback at "),s("a",{href:"https://guestbook.dbodky.me",target:"_blank",rel:"noopener"},"guestbook.dbodky.me")])],-1),Q7={__name:"59",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return R(N),(t,l)=>(b(),H(ye,ts(ns(n)),{default:_(()=>[z7,Y7]),_:1},16))}},Z7=L(Q7,[["__file","/@slidev/slides/59.md"]]),J7=[{path:"1",name:"page-1",component:BB,meta:{title:"From Dev to Prod with Acorn",theme:"default",class:"text-center",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},transition:"fade-out",css:"unocss",exportFilename:"dev-to-prod-with-acorn-2023",monaco:!0,srcSequence:"./slides/cover.md",slide:{raw:null,title:"From Dev to Prod with Acorn",level:1,content:`# From Dev to Prod with Acorn

Simplifying Kubernetes Deployments

<div class="hello"></div>

<div class="pt-12">
  Tuesday, Feb 07 2023
</div>`,frontmatter:{title:"From Dev to Prod with Acorn",theme:"default",class:"text-center",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},transition:"fade-out",css:"unocss",exportFilename:"dev-to-prod-with-acorn-2023",monaco:!0,srcSequence:"./slides/cover.md"},index:0,start:0,end:12,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/cover.md",raw:`
# From Dev to Prod with Acorn

Simplifying Kubernetes Deployments

<div class="hello"></div>

<div class="pt-12">
  Tuesday, Feb 07 2023
</div>

`,title:"From Dev to Prod with Acorn",level:1,content:`# From Dev to Prod with Acorn

Simplifying Kubernetes Deployments

<div class="hello"></div>

<div class="pt-12">
  Tuesday, Feb 07 2023
</div>`,frontmatter:{title:"From Dev to Prod with Acorn"},index:0,start:0,end:12},inline:{raw:`---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: fade-out
css: unocss
title: From Dev to Prod with Acorn
exportFilename: 'dev-to-prod-with-acorn-2023'
monaco: true
src: ./slides/cover.md
---

`,title:"From Dev to Prod with Acorn",level:1,content:"",frontmatter:{theme:"default",class:"text-center",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},transition:"fade-out",css:"unocss",title:"From Dev to Prod with Acorn",exportFilename:"dev-to-prod-with-acorn-2023",monaco:!0},index:0,start:0,end:16},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/cover.md",notesHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:HB,meta:{transition:"fade-out",layout:"image-right",image:"/legopic.jpg",title:"About me",srcSequence:"./slides/introduction/myself.md",slide:{raw:null,title:"About me",level:1,content:`# About me


<br />
🇩🇪 24 y/o consultant from Southern Germany
<br/>
<br />
🏢 Employed at NETWAYS
<br/>
<br />
☸️ Working with Kubernetes since early 2022
<br/>
<br />
📜 CKA certified since 2022
<br/>
<br />
🏗️ I like building things ❣️
<br/>
<br />
🎉 Psyched to be here!

<div class="abs-br text-2 pr-1 text-gray-200">Photo by Yulia Matvienko on Unsplash</div>`,frontmatter:{transition:"fade-out",layout:"image-right",image:"/legopic.jpg",title:"About me",srcSequence:"./slides/introduction/myself.md"},index:1,start:0,end:29,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/introduction/myself.md",raw:`---
transition: fade-out
layout: image-right
image: /legopic.jpg
---

# About me


<br />
🇩🇪 24 y/o consultant from Southern Germany
<br/>
<br />
🏢 Employed at NETWAYS
<br/>
<br />
☸️ Working with Kubernetes since early 2022
<br/>
<br />
📜 CKA certified since 2022
<br/>
<br />
🏗️ I like building things ❣️
<br/>
<br />
🎉 Psyched to be here!

<div class="abs-br text-2 pr-1 text-gray-200">Photo by Yulia Matvienko on Unsplash</div>
`,title:"About me",level:1,content:`# About me


<br />
🇩🇪 24 y/o consultant from Southern Germany
<br/>
<br />
🏢 Employed at NETWAYS
<br/>
<br />
☸️ Working with Kubernetes since early 2022
<br/>
<br />
📜 CKA certified since 2022
<br/>
<br />
🏗️ I like building things ❣️
<br/>
<br />
🎉 Psyched to be here!

<div class="abs-br text-2 pr-1 text-gray-200">Photo by Yulia Matvienko on Unsplash</div>`,frontmatter:{transition:"fade-out",layout:"image-right",image:"/legopic.jpg",title:"About me"},index:0,start:0,end:29},inline:{raw:`---
src: ./slides/introduction/myself.md
---

`,content:"",frontmatter:{},index:1,start:16,end:21},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/introduction/myself.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:zB,meta:{transition:"fade-out",layout:"default",title:"About this workshop",srcSequence:"./slides/introduction/workshop.md",slide:{raw:null,title:"About this workshop",level:1,content:`# About this workshop

<br />

<br />

- All resources are available on GitHub: [mocdaniel/acorn-workshop](https://github.com/mocdaniel/acorn-workshop)

- A version of this slide deck with more information for asynchronous participation is available at [acorn.dbodky.me](https://acorn.dbodky.me)
 
<br />

 - You will need some tools to follow along
   -  **git**
   - **acorn** (Downloadable from [https://github.com/acorn-io/acorn](https://github.com/acorn-io/acorn))
   - **docker**
   - a working **Kubernetes cluster** (either local or remote)`,frontmatter:{transition:"fade-out",layout:"default",title:"About this workshop",srcSequence:"./slides/introduction/workshop.md"},index:2,start:0,end:24,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/introduction/workshop.md",raw:`---
transition: fade-out
layout: default
---

# About this workshop

<br />

<br />

- All resources are available on GitHub: [mocdaniel/acorn-workshop](https://github.com/mocdaniel/acorn-workshop)

- A version of this slide deck with more information for asynchronous participation is available at [acorn.dbodky.me](https://acorn.dbodky.me)
 
<br />

 - You will need some tools to follow along
   -  **git**
   - **acorn** (Downloadable from [https://github.com/acorn-io/acorn](https://github.com/acorn-io/acorn))
   - **docker**
   - a working **Kubernetes cluster** (either local or remote)

`,title:"About this workshop",level:1,content:`# About this workshop

<br />

<br />

- All resources are available on GitHub: [mocdaniel/acorn-workshop](https://github.com/mocdaniel/acorn-workshop)

- A version of this slide deck with more information for asynchronous participation is available at [acorn.dbodky.me](https://acorn.dbodky.me)
 
<br />

 - You will need some tools to follow along
   -  **git**
   - **acorn** (Downloadable from [https://github.com/acorn-io/acorn](https://github.com/acorn-io/acorn))
   - **docker**
   - a working **Kubernetes cluster** (either local or remote)`,frontmatter:{transition:"fade-out",layout:"default",title:"About this workshop"},index:0,start:0,end:24},inline:{raw:`---
src: ./slides/introduction/workshop.md
---
`,content:"",frontmatter:{},index:2,start:21,end:25},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/introduction/workshop.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:l9,meta:{layout:"default",transition:"fade-out",title:"Workshop Agenda",srcSequence:"./slides/introduction/agenda.md",slide:{raw:null,title:"Workshop Agenda",level:1,content:`# Workshop Agenda
<br />

📚 Theory - Why would we need Acorn? How does it work?

⚙️ Preparations - Installing Acorn for the first time, making sure everything works

🚀 Test Run - Spin up the application using docker compose

🏗️ First Steps - building a rudimentary Acornfile

🔁 Iterate - add further configuration to the Acornfile

✨ Finishing Touches - build and push the image to a registry

📽️ Demo of additional features on non-dev clusters`,frontmatter:{layout:"default",transition:"fade-out",title:"Workshop Agenda",srcSequence:"./slides/introduction/agenda.md"},index:3,start:0,end:22,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/introduction/agenda.md",raw:`---
layout: default
transition: fade-out
---

# Workshop Agenda
<br />

📚 Theory - Why would we need Acorn? How does it work?

⚙️ Preparations - Installing Acorn for the first time, making sure everything works

🚀 Test Run - Spin up the application using docker compose

🏗️ First Steps - building a rudimentary Acornfile

🔁 Iterate - add further configuration to the Acornfile

✨ Finishing Touches - build and push the image to a registry

📽️ Demo of additional features on non-dev clusters
`,title:"Workshop Agenda",level:1,content:`# Workshop Agenda
<br />

📚 Theory - Why would we need Acorn? How does it work?

⚙️ Preparations - Installing Acorn for the first time, making sure everything works

🚀 Test Run - Spin up the application using docker compose

🏗️ First Steps - building a rudimentary Acornfile

🔁 Iterate - add further configuration to the Acornfile

✨ Finishing Touches - build and push the image to a registry

📽️ Demo of additional features on non-dev clusters`,frontmatter:{layout:"default",transition:"fade-out",title:"Workshop Agenda"},index:0,start:0,end:22},inline:{raw:`---
src: ./slides/introduction/agenda.md
---
`,content:"",frontmatter:{},index:3,start:25,end:29},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/introduction/agenda.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:u9,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 📚 Theory

Why are we doing this?
`,title:"📚 Theory",level:1,content:`# 📚 Theory

Why are we doing this?`,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:4,start:29,end:39,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:A9,meta:{layout:"center",transition:"fade-out",slide:{raw:`---
layout: center
transition: fade-out
---

<LightOrDark>

  <template #light><img alt="A timeline showing the evolution towards containerized applications" src="/history-light.png" /></template>

  <template #dark><img alt="A timeline showing the evolution towards containerized applications" src="/history-dark.png" /></template>

</LightOrDark>
`,content:`<LightOrDark>

  <template #light><img alt="A timeline showing the evolution towards containerized applications" src="/history-light.png" /></template>

  <template #dark><img alt="A timeline showing the evolution towards containerized applications" src="/history-dark.png" /></template>

</LightOrDark>`,frontmatter:{layout:"center",transition:"fade-out"},index:5,start:39,end:52,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:F9,meta:{layout:"default",transition:"fade-out",title:"Where are we today?",srcSequence:"./slides/theory/today.md",slide:{raw:null,title:"Where are we today?",level:1,content:`# Where are we today?
<br />

<v-click>

- Many different platforms used during development
  - local machine
  - Docker (compose)
  - Kubernetes

</v-click>

<v-click>

<br />
<br />

- No time for learning Kubernetes 'on the fly'

</v-click>

<br />
<br />

<v-click>

- Huge cognitive overhead

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",title:"Where are we today?",srcSequence:"./slides/theory/today.md"},index:6,start:0,end:35,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/today.md",raw:`---
layout: default
transition: fade-out
---

# Where are we today?
<br />

<v-click>

- Many different platforms used during development
  - local machine
  - Docker (compose)
  - Kubernetes

</v-click>

<v-click>

<br />
<br />

- No time for learning Kubernetes 'on the fly'

</v-click>

<br />
<br />

<v-click>

- Huge cognitive overhead

</v-click>
`,title:"Where are we today?",level:1,content:`# Where are we today?
<br />

<v-click>

- Many different platforms used during development
  - local machine
  - Docker (compose)
  - Kubernetes

</v-click>

<v-click>

<br />
<br />

- No time for learning Kubernetes 'on the fly'

</v-click>

<br />
<br />

<v-click>

- Huge cognitive overhead

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",title:"Where are we today?"},index:0,start:0,end:35},inline:{raw:`---
src: ./slides/theory/today.md
---
`,content:"",frontmatter:{},index:6,start:52,end:56},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/today.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:H9,meta:{layout:"statement",transition:"fade-out",slide:{raw:`---
layout: statement
transition: fade-out
---

# Is there no abstraction? 😭

<v-click>

## There is!

</v-click>
`,title:"Is there no abstraction? 😭",level:1,content:`# Is there no abstraction? 😭

<v-click>

## There is!

</v-click>`,frontmatter:{layout:"statement",transition:"fade-out"},index:7,start:56,end:69,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:W9,meta:{layout:"image-right",transition:"fade-out",image:"/acorn.jpg",title:"Time for Acorn",srcSequence:"./slides/theory/acorn.md",slide:{raw:null,title:"Time for Acorn",level:1,content:`# Time for Acorn

- "*A simple application framework for Kubernetes*"
- Claims
  - *"One artifact across dev, test, and production"*
  - *"Simple CLI and powerful API"*
  - *"Secure by design"*
  - *"Open Source"*
- Takes an <tt>Acornfile</tt> and builds a deployable, OCI-compliant artifact

<div class="abs-br text-2 pr-1 text-gray-400">Photo by Joвана Младеновић on Unsplash</div>`,frontmatter:{layout:"image-right",transition:"fade-out",image:"/acorn.jpg",title:"Time for Acorn",srcSequence:"./slides/theory/acorn.md"},index:8,start:0,end:18,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/acorn.md",raw:`---
layout: image-right
transition: fade-out
image: /acorn.jpg
---

# Time for Acorn

- "*A simple application framework for Kubernetes*"
- Claims
  - *"One artifact across dev, test, and production"*
  - *"Simple CLI and powerful API"*
  - *"Secure by design"*
  - *"Open Source"*
- Takes an <tt>Acornfile</tt> and builds a deployable, OCI-compliant artifact

<div class="abs-br text-2 pr-1 text-gray-400">Photo by Joвана Младеновић on Unsplash</div>
  `,title:"Time for Acorn",level:1,content:`# Time for Acorn

- "*A simple application framework for Kubernetes*"
- Claims
  - *"One artifact across dev, test, and production"*
  - *"Simple CLI and powerful API"*
  - *"Secure by design"*
  - *"Open Source"*
- Takes an <tt>Acornfile</tt> and builds a deployable, OCI-compliant artifact

<div class="abs-br text-2 pr-1 text-gray-400">Photo by Joвана Младеновић on Unsplash</div>`,frontmatter:{layout:"image-right",transition:"fade-out",image:"/acorn.jpg",title:"Time for Acorn"},index:0,start:0,end:18},inline:{raw:`---
src: ./slides/theory/acorn.md
---
`,content:"",frontmatter:{},index:8,start:69,end:73},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/acorn.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Y9,meta:{layout:"center",transition:"fade-out",slide:{raw:`---
layout: center
transition: fade-out
---

![Overview of Acorn's architecture](/acorn-architecture.svg)
<div class="abs-b text-2 text-gray-400">Image taken from docs.acorn.io</div>
`,content:`![Overview of Acorn's architecture](/acorn-architecture.svg)
<div class="abs-b text-2 text-gray-400">Image taken from docs.acorn.io</div>`,frontmatter:{layout:"center",transition:"fade-out"},index:9,start:73,end:81,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:X9,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# ⚙️ Preparations

First things first!

`,title:"⚙️ Preparations",level:1,content:`# ⚙️ Preparations

First things first!`,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:10,start:81,end:92,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:BD,meta:{layout:"default",transition:"fade-out",clicks:4,title:"Installing Acorn",srcSequence:"./slides/theory/installation.md",slide:{raw:null,title:"Installing Acorn",level:1,content:`# Installing Acorn

\`\`\`bash {1|1,2|1,3-5|1,6-9|1,10,11}
acorn install
  ✔  Running Pre-install Checks
  ✔  Installing ClusterRoles
  ✔  Installing APIServer and Controller
      (image ghcr.io/acorn-io/acorn:v0.5.0)
  ✔  Waiting for controller deployment to be available
  ✔  Waiting for API server deployment to be available
  ✔  Waiting for registry server deployment to be
      available
  ✔  Running Post-install Checks
  ✔  Installation done
\`\`\`

The installation takes many parameters, e.g. for configuring **Let's encrypt**

<v-click at=1>

1. acorn checks some prerequisites (e.g. existing IngressController).

</v-click>

<v-click at=2>

2. ClusterRoles, followed by the workloads and CRDs get installed.

</v-click>

<v-click at=3>

3. waits for its workloads to be up and running.

</v-click>

<v-click at=4>

4. if all checks succeed, we can start! 🎉

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",clicks:4,title:"Installing Acorn",srcSequence:"./slides/theory/installation.md"},index:11,start:0,end:48,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/installation.md",raw:`---
layout: default
transition: fade-out
clicks: 4
---

# Installing Acorn

\`\`\`bash {1|1,2|1,3-5|1,6-9|1,10,11}
acorn install
  ✔  Running Pre-install Checks
  ✔  Installing ClusterRoles
  ✔  Installing APIServer and Controller
      (image ghcr.io/acorn-io/acorn:v0.5.0)
  ✔  Waiting for controller deployment to be available
  ✔  Waiting for API server deployment to be available
  ✔  Waiting for registry server deployment to be
      available
  ✔  Running Post-install Checks
  ✔  Installation done
\`\`\`

The installation takes many parameters, e.g. for configuring **Let's encrypt**

<v-click at=1>

1. acorn checks some prerequisites (e.g. existing IngressController).

</v-click>

<v-click at=2>

2. ClusterRoles, followed by the workloads and CRDs get installed.

</v-click>

<v-click at=3>

3. waits for its workloads to be up and running.

</v-click>

<v-click at=4>

4. if all checks succeed, we can start! 🎉

</v-click>
`,title:"Installing Acorn",level:1,content:`# Installing Acorn

\`\`\`bash {1|1,2|1,3-5|1,6-9|1,10,11}
acorn install
  ✔  Running Pre-install Checks
  ✔  Installing ClusterRoles
  ✔  Installing APIServer and Controller
      (image ghcr.io/acorn-io/acorn:v0.5.0)
  ✔  Waiting for controller deployment to be available
  ✔  Waiting for API server deployment to be available
  ✔  Waiting for registry server deployment to be
      available
  ✔  Running Post-install Checks
  ✔  Installation done
\`\`\`

The installation takes many parameters, e.g. for configuring **Let's encrypt**

<v-click at=1>

1. acorn checks some prerequisites (e.g. existing IngressController).

</v-click>

<v-click at=2>

2. ClusterRoles, followed by the workloads and CRDs get installed.

</v-click>

<v-click at=3>

3. waits for its workloads to be up and running.

</v-click>

<v-click at=4>

4. if all checks succeed, we can start! 🎉

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",clicks:4,title:"Installing Acorn"},index:0,start:0,end:48},inline:{raw:`---
src: ./slides/theory/installation.md
---
`,content:"",frontmatter:{},index:11,start:92,end:96},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/installation.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:FD,meta:{layout:"default",transition:"fade-out",clicks:1,title:"Preparing our dev environment",srcSequence:"./slides/theory/repository.md",slide:{raw:null,title:"Preparing our dev environment",level:1,content:`# Preparing our dev environment

Time to fetch our repository!

\`\`\`bash {1-5|6}
git clone https://github.com/mocdaniel/acorn-workshop.git && cd acorn-workshop

git checkout section-01

ls
Acornfile  compose.yml  LICENSE  README.md
\`\`\`

<v-click at=1>

<br />

<br />

<br />

**Acornfile** contains our configuration for Acorn to take, parse, and deploy.

**compose.yml** contains the same application, but as compose Stack to be deployed with Docker.

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",clicks:1,title:"Preparing our dev environment",srcSequence:"./slides/theory/repository.md"},index:12,start:0,end:33,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/repository.md",raw:`---
layout: default
transition: fade-out
clicks: 1
---

# Preparing our dev environment

Time to fetch our repository!

\`\`\`bash {1-5|6}
git clone https://github.com/mocdaniel/acorn-workshop.git && cd acorn-workshop

git checkout section-01

ls
Acornfile  compose.yml  LICENSE  README.md
\`\`\`

<v-click at=1>

<br />

<br />

<br />

**Acornfile** contains our configuration for Acorn to take, parse, and deploy.

**compose.yml** contains the same application, but as compose Stack to be deployed with Docker.

</v-click>
`,title:"Preparing our dev environment",level:1,content:`# Preparing our dev environment

Time to fetch our repository!

\`\`\`bash {1-5|6}
git clone https://github.com/mocdaniel/acorn-workshop.git && cd acorn-workshop

git checkout section-01

ls
Acornfile  compose.yml  LICENSE  README.md
\`\`\`

<v-click at=1>

<br />

<br />

<br />

**Acornfile** contains our configuration for Acorn to take, parse, and deploy.

**compose.yml** contains the same application, but as compose Stack to be deployed with Docker.

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",clicks:1,title:"Preparing our dev environment"},index:0,start:0,end:33},inline:{raw:`---
src: ./slides/theory/repository.md
---
`,content:"",frontmatter:{},index:12,start:96,end:100},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/repository.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:ID,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 🚀 Test Run

Let's see what we're working with

<br />

<br />

\`\`\`bash
docker compose up 
\`\`\`
`,title:"🚀 Test Run",level:1,content:`# 🚀 Test Run

Let's see what we're working with

<br />

<br />

\`\`\`bash
docker compose up 
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:13,start:100,end:118,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:KD,meta:{layout:"center",transition:"fade-out",slide:{raw:`---
layout: center
transition: fade-out
---

<LightOrDark>

  <template #light><img src="/project-light.png" alt="Overview of the project's inner workings" /></template>

  <template #dark><img src="/project-dark.png" alt="Overview of the project's inner workings" /></template>

</LightOrDark>
`,content:`<LightOrDark>

  <template #light><img src="/project-light.png" alt="Overview of the project's inner workings" /></template>

  <template #dark><img src="/project-dark.png" alt="Overview of the project's inner workings" /></template>

</LightOrDark>`,frontmatter:{layout:"center",transition:"fade-out"},index:14,start:118,end:131,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:QD,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 🏗️ First Steps

Acorn Fundamentals

<br />

<br />

\`\`\`bash 
git checkout section-01
\`\`\`
`,title:"🏗️ First Steps",level:1,content:`# 🏗️ First Steps

Acorn Fundamentals

<br />

<br />

\`\`\`bash 
git checkout section-01
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:15,start:131,end:149,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:cb,meta:{layout:"two-cols",transition:"fade-out",clicks:1,title:"Defining our Database",srcSequence:"./slides/practical/section-01/database-static.md",slide:{raw:null,title:"Defining our Database",level:1,content:`# Defining our Database

### compose.yml

\`\`\`yaml {all|3-9} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`


::right::

<br />

<br /> 

<br />

First, we will define the database:

<v-click at=1>

- container image
- exposed port(s)
- environment variables
  - database name
  - database user
  - database password

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:1,title:"Defining our Database",srcSequence:"./slides/practical/section-01/database-static.md"},index:16,start:0,end:50,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/database-static.md",raw:`---
layout: two-cols
transition: fade-out
clicks: 1
---

# Defining our Database

### compose.yml

\`\`\`yaml {all|3-9} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`


::right::

<br />

<br /> 

<br />

First, we will define the database:

<v-click at=1>

- container image
- exposed port(s)
- environment variables
  - database name
  - database user
  - database password

</v-click>
`,title:"Defining our Database",level:1,content:`# Defining our Database

### compose.yml

\`\`\`yaml {all|3-9} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`


::right::

<br />

<br /> 

<br />

First, we will define the database:

<v-click at=1>

- container image
- exposed port(s)
- environment variables
  - database name
  - database user
  - database password

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:1,title:"Defining our Database"},index:0,start:0,end:50},inline:{raw:`---
src: ./slides/practical/section-01/database-static.md
---
`,content:"",frontmatter:{},index:16,start:149,end:153},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/database-static.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:gb,meta:{layout:"two-cols",transition:"fade-out",clicks:null,srcSequence:"./slides/practical/section-01/database-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
clicks:
---

# Defining our Database

### compose.yml

\`\`\`yaml {3,4,9} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2-4} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
  }
}
\`\`\`
`,title:"Defining our Database",level:1,content:`# Defining our Database

### compose.yml

\`\`\`yaml {3,4,9} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2-4} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:null,srcSequence:"./slides/practical/section-01/database-static.md"},index:17,start:50,end:94,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/database-static.md",raw:`---
layout: two-cols
transition: fade-out
clicks:
---

# Defining our Database

### compose.yml

\`\`\`yaml {3,4,9} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2-4} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
  }
}
\`\`\`
`,title:"Defining our Database",level:1,content:`# Defining our Database

### compose.yml

\`\`\`yaml {3,4,9} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2-4} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:null},index:1,start:50,end:94},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/database-static.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Eb,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/database-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Defining our Database

### compose.yml

\`\`\`yaml {3,5,6} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,4-9} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
    env: {
      POSTGRES_DB: "guestbookdb"
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
  }
}
\`\`\`
`,title:"Defining our Database",level:1,content:`# Defining our Database

### compose.yml

\`\`\`yaml {3,5,6} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,4-9} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
    env: {
      POSTGRES_DB: "guestbookdb"
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/database-static.md"},index:18,start:94,end:142,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/database-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Defining our Database

### compose.yml

\`\`\`yaml {3,5,6} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,4-9} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
    env: {
      POSTGRES_DB: "guestbookdb"
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
  }
}
\`\`\`
`,title:"Defining our Database",level:1,content:`# Defining our Database

### compose.yml

\`\`\`yaml {3,5,6} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,4-9} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
    env: {
      POSTGRES_DB: "guestbookdb"
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:2,start:94,end:142},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/database-static.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Rb,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/database-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Defining our Database

### compose.yml

\`\`\`yaml {3,7,8} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,9,10} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
    env: {
      POSTGRES_DB: "guestbookdb"
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
    ports: "postgres:5432/tcp"
  }
}
\`\`\``,title:"Defining our Database",level:1,content:`# Defining our Database

### compose.yml

\`\`\`yaml {3,7,8} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,9,10} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
    env: {
      POSTGRES_DB: "guestbookdb"
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
    ports: "postgres:5432/tcp"
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/database-static.md"},index:19,start:142,end:190,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/database-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Defining our Database

### compose.yml

\`\`\`yaml {3,7,8} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,9,10} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
    env: {
      POSTGRES_DB: "guestbookdb"
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
    ports: "postgres:5432/tcp"
  }
}
\`\`\``,title:"Defining our Database",level:1,content:`# Defining our Database

### compose.yml

\`\`\`yaml {3,7,8} {maxHeight: '400px'}
services:
  [...]
  postgres:
    container_name: postgres
    environment:
    - POSTGRES_PASSWORD=password
    ports:
    - 5432:5432
    image: postgres:12
    networks:
    - guestbook-network
    restart: unless-stopped
    volumes:
    - db-data:/data
  [...]
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,9,10} {maxHeight:'400px'}
containers: {
  postgres: {
    image: "postgres:12"
    env: {
      POSTGRES_DB: "guestbookdb"
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
    ports: "postgres:5432/tcp"
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:3,start:142,end:190},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/database-static.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:qb,meta:{layout:"two-cols",transition:"fade-out",clicks:1,title:"Defining the Redis cache",srcSequence:"./slides/practical/section-01/redis-static.md",slide:{raw:null,title:"Defining the Redis cache",level:1,content:`# Defining the Redis cache

### compose.yml

\`\`\`yaml {all|3-7} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />


### Next up: **Redis** 

<br />

<br />

<br />


<v-click at=1>

We only need to configure the port and image used for this simple setup.

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:1,title:"Defining the Redis cache",srcSequence:"./slides/practical/section-01/redis-static.md"},index:20,start:0,end:48,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/redis-static.md",raw:`---
layout: two-cols
transition: fade-out
clicks: 1
---

# Defining the Redis cache

### compose.yml

\`\`\`yaml {all|3-7} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />


### Next up: **Redis** 

<br />

<br />

<br />


<v-click at=1>

We only need to configure the port and image used for this simple setup.

</v-click>

`,title:"Defining the Redis cache",level:1,content:`# Defining the Redis cache

### compose.yml

\`\`\`yaml {all|3-7} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />


### Next up: **Redis** 

<br />

<br />

<br />


<v-click at=1>

We only need to configure the port and image used for this simple setup.

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:1,title:"Defining the Redis cache"},index:0,start:0,end:48},inline:{raw:`---
src: ./slides/practical/section-01/redis-static.md
---
`,content:"",frontmatter:{},index:17,start:153,end:157},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/redis-static.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:nv,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/redis-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Defining the Redis cache

### compose.yml

\`\`\`yaml {3,4,7} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {3-5} {maxHeight:'400px'}
containers: {
  postgres: {...}
  redis: {
    image: "redis:7"
  }
}
\`\`\`
`,title:"Defining the Redis cache",level:1,content:`# Defining the Redis cache

### compose.yml

\`\`\`yaml {3,4,7} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {3-5} {maxHeight:'400px'}
containers: {
  postgres: {...}
  redis: {
    image: "redis:7"
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/redis-static.md"},index:21,start:48,end:89,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/redis-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Defining the Redis cache

### compose.yml

\`\`\`yaml {3,4,7} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {3-5} {maxHeight:'400px'}
containers: {
  postgres: {...}
  redis: {
    image: "redis:7"
  }
}
\`\`\`
`,title:"Defining the Redis cache",level:1,content:`# Defining the Redis cache

### compose.yml

\`\`\`yaml {3,4,7} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {3-5} {maxHeight:'400px'}
containers: {
  postgres: {...}
  redis: {
    image: "redis:7"
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:1,start:48,end:89},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/redis-static.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:dv,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/redis-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Defining the Redis cache

### compose.yml

\`\`\`yaml {3,5,6} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {3,5,6} {maxHeight:'400px'}
containers: {
  postgres: {...}
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
  }
}
\`\`\``,title:"Defining the Redis cache",level:1,content:`# Defining the Redis cache

### compose.yml

\`\`\`yaml {3,5,6} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {3,5,6} {maxHeight:'400px'}
containers: {
  postgres: {...}
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/redis-static.md"},index:22,start:89,end:130,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/redis-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Defining the Redis cache

### compose.yml

\`\`\`yaml {3,5,6} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {3,5,6} {maxHeight:'400px'}
containers: {
  postgres: {...}
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
  }
}
\`\`\``,title:"Defining the Redis cache",level:1,content:`# Defining the Redis cache

### compose.yml

\`\`\`yaml {3,5,6} {maxHeight:'400px'}
services:
  [...]
  redis:
    container_name: redis
    ports:
    - 6379:6379
    image: redis:7
    networks:
    - guestbook-network
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {3,5,6} {maxHeight:'400px'}
containers: {
  postgres: {...}
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:2,start:89,end:130},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/redis-static.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:vv,meta:{layout:"two-cols",transition:"fade-out",clicks:1,title:"Defining the guestbook",srcSequence:"./slides/practical/section-01/guestbook-static.md",slide:{raw:null,title:"Defining the guestbook",level:1,content:`# Defining the guestbook

### compose.yml

\`\`\`yaml {all|2-10,19,20|2,3,4|2,5-10|2,19-20} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Last one left: Guestbook

<br />

<br />

Our guestbook needs the most configuration:

<v-click at=1>

- image
- many environment variables (to map the \`command\` from the \`compose\` file)
- a published port

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:1,title:"Defining the guestbook",srcSequence:"./slides/practical/section-01/guestbook-static.md"},index:23,start:0,end:58,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/guestbook-static.md",raw:`---
layout: two-cols
transition: fade-out
clicks: 1
---

# Defining the guestbook

### compose.yml

\`\`\`yaml {all|2-10,19,20|2,3,4|2,5-10|2,19-20} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Last one left: Guestbook

<br />

<br />

Our guestbook needs the most configuration:

<v-click at=1>

- image
- many environment variables (to map the \`command\` from the \`compose\` file)
- a published port

</v-click>
`,title:"Defining the guestbook",level:1,content:`# Defining the guestbook

### compose.yml

\`\`\`yaml {all|2-10,19,20|2,3,4|2,5-10|2,19-20} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Last one left: Guestbook

<br />

<br />

Our guestbook needs the most configuration:

<v-click at=1>

- image
- many environment variables (to map the \`command\` from the \`compose\` file)
- a published port

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:1,title:"Defining the guestbook"},index:0,start:0,end:58},inline:{raw:`---
src: ./slides/practical/section-01/guestbook-static.md
---
`,content:"",frontmatter:{},index:18,start:157,end:161},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/guestbook-static.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Tv,meta:{layout:"two-cols",srcSequence:"./slides/practical/section-01/guestbook-static.md",slide:{raw:`---
layout: two-cols
---

# Defining the guestbook

### compose.yml

\`\`\`yaml {2,3,4} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2-4} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
  }
  postgres: {...}
  redis: {...}
}
\`\`\`
`,title:"Defining the guestbook",level:1,content:`# Defining the guestbook

### compose.yml

\`\`\`yaml {2,3,4} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2-4} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,frontmatter:{layout:"two-cols",srcSequence:"./slides/practical/section-01/guestbook-static.md"},index:24,start:58,end:110,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/guestbook-static.md",raw:`---
layout: two-cols
---

# Defining the guestbook

### compose.yml

\`\`\`yaml {2,3,4} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2-4} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
  }
  postgres: {...}
  redis: {...}
}
\`\`\`
`,title:"Defining the guestbook",level:1,content:`# Defining the guestbook

### compose.yml

\`\`\`yaml {2,3,4} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2-4} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,frontmatter:{layout:"two-cols"},index:1,start:58,end:110},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/guestbook-static.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Gv,meta:{layout:"two-cols",srcSequence:"./slides/practical/section-01/guestbook-static.md",slide:{raw:`---
layout: two-cols
---

# Defining the guestbook

### compose.yml

\`\`\`yaml {2,5-10} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,4-11} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
  }
  postgres: {...}
  redis: {...}
}
\`\`\`
`,title:"Defining the guestbook",level:1,content:`# Defining the guestbook

### compose.yml

\`\`\`yaml {2,5-10} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,4-11} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,frontmatter:{layout:"two-cols",srcSequence:"./slides/practical/section-01/guestbook-static.md"},index:25,start:110,end:169,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/guestbook-static.md",raw:`---
layout: two-cols
---

# Defining the guestbook

### compose.yml

\`\`\`yaml {2,5-10} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,4-11} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
  }
  postgres: {...}
  redis: {...}
}
\`\`\`
`,title:"Defining the guestbook",level:1,content:`# Defining the guestbook

### compose.yml

\`\`\`yaml {2,5-10} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,4-11} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,frontmatter:{layout:"two-cols"},index:2,start:110,end:169},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/guestbook-static.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Qv,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/guestbook-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Defining the guestbook

### compose.yml

\`\`\`yaml {2,19-20} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,11,12} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    ports: publish: "guestbook:8080/http"
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,title:"Defining the guestbook",level:1,content:`# Defining the guestbook

### compose.yml

\`\`\`yaml {2,19-20} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,11,12} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    ports: publish: "guestbook:8080/http"
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/guestbook-static.md"},index:26,start:169,end:229,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/guestbook-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Defining the guestbook

### compose.yml

\`\`\`yaml {2,19-20} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,11,12} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    ports: publish: "guestbook:8080/http"
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,title:"Defining the guestbook",level:1,content:`# Defining the guestbook

### compose.yml

\`\`\`yaml {2,19-20} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook-demo:v1.1.0
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,11,12} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    ports: publish: "guestbook:8080/http"
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:3,start:169,end:229},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/guestbook-static.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:c1,meta:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-01/takeaways.md",slide:{raw:null,title:"Takeaways",level:1,content:`# Takeaways

Many directives are portable from Docker compose

<br />

- AML behaves a lot like JSON (with some shortcuts)

<br />

- Acornfiles consist of **at least one** container definition

<br />

- Environment variables and ports can be defined just like with Docker compose

<br />

- Acorn's developer mode streams output right back to your console`,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-01/takeaways.md"},index:27,start:0,end:25,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/takeaways.md",raw:`---
layout: default
transition: fade-out
---

# Takeaways

Many directives are portable from Docker compose

<br />

- AML behaves a lot like JSON (with some shortcuts)

<br />

- Acornfiles consist of **at least one** container definition

<br />

- Environment variables and ports can be defined just like with Docker compose

<br />

- Acorn's developer mode streams output right back to your console
`,title:"Takeaways",level:1,content:`# Takeaways

Many directives are portable from Docker compose

<br />

- AML behaves a lot like JSON (with some shortcuts)

<br />

- Acornfiles consist of **at least one** container definition

<br />

- Environment variables and ports can be defined just like with Docker compose

<br />

- Acorn's developer mode streams output right back to your console`,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways"},index:0,start:0,end:25},inline:{raw:`---
src: ./slides/practical/section-01/takeaways.md
---
`,content:"",frontmatter:{},index:19,start:161,end:165},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/takeaways.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:h1,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 🔁 Iterate

Utilizing dependencies and probes

<br />

<br />

\`\`\`bash 
git checkout section-02
\`\`\`
`,title:"🔁 Iterate",level:1,content:`# 🔁 Iterate

Utilizing dependencies and probes

<br />

<br />

\`\`\`bash 
git checkout section-02
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:28,start:165,end:183,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:E1,meta:{layout:"two-cols",transition:"fade-out",title:"Add dependencies",srcSequence:"./slides/practical/section-02/dependencies-static.md",slide:{raw:null,title:"Add dependencies",level:1,content:`# Add dependencies

### compose.yml

\`\`\`yaml {2,11-15} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### The Guestbook needs its friends!

<br />

<br />

<v-click at=1>

If the guestbook comes up before the \`redis\` or \`postgres\` workloads, it will crash - we should prevent this.

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add dependencies",srcSequence:"./slides/practical/section-02/dependencies-static.md"},index:29,start:0,end:53,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/dependencies-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add dependencies

### compose.yml

\`\`\`yaml {2,11-15} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### The Guestbook needs its friends!

<br />

<br />

<v-click at=1>

If the guestbook comes up before the \`redis\` or \`postgres\` workloads, it will crash - we should prevent this.

</v-click>
`,title:"Add dependencies",level:1,content:`# Add dependencies

### compose.yml

\`\`\`yaml {2,11-15} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### The Guestbook needs its friends!

<br />

<br />

<v-click at=1>

If the guestbook comes up before the \`redis\` or \`postgres\` workloads, it will crash - we should prevent this.

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add dependencies"},index:0,start:0,end:53},inline:{raw:`---
src: ./slides/practical/section-02/dependencies-static.md
---
`,content:"",frontmatter:{},index:21,start:183,end:187},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/dependencies-static.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:R1,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-02/dependencies-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Add dependencies

### compose.yml

\`\`\`yaml {11-15} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,12,13} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    ports: publish: "guestbook:8080/http"
    dependsOn: ["redis", "postgres"]
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,title:"Add dependencies",level:1,content:`# Add dependencies

### compose.yml

\`\`\`yaml {11-15} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,12,13} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    ports: publish: "guestbook:8080/http"
    dependsOn: ["redis", "postgres"]
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-02/dependencies-static.md"},index:30,start:53,end:114,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/dependencies-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add dependencies

### compose.yml

\`\`\`yaml {11-15} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,12,13} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    ports: publish: "guestbook:8080/http"
    dependsOn: ["redis", "postgres"]
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,title:"Add dependencies",level:1,content:`# Add dependencies

### compose.yml

\`\`\`yaml {11-15} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    command:
    - --db-name=postgres
    - --db-host=postgres
    - --db-password=password
    - --db-user=postgres
    - --redis-host=redis
    depends_on:
      postgres:
        condition: service_started
      redis:
        condition: service_started
    [...]
    networks:
    - guestbook-network
    ports:
    - 8080:8080
    restart: unless-stopped
  [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {2,12,13} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    ports: publish: "guestbook:8080/http"
    dependsOn: ["redis", "postgres"]
  }
  postgres: {...}
  redis: {...}
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:1,start:53,end:114},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/dependencies-static.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:q1,meta:{layout:"two-cols",transition:"fade-out",title:"Add probes",srcSequence:"./slides/practical/section-02/probes-static.md",slide:{raw:null,title:"Add probes",level:1,content:`# Add probes

### compose.yml

\`\`\`yaml {2,6-11} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    [...]
    healthcheck:
      test: ["CMD", "curl", "http://localhost:8080"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 3s
    [...]
\`\`\`


::right::

<br />

<br />

### Dependencies need Probes

<br />

<br />

Without **probes**, dependencies are registered as met once the workloads get started - regardless of their actual states.

We will need to add some probes!`,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add probes",srcSequence:"./slides/practical/section-02/probes-static.md"},index:31,start:0,end:41,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/probes-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add probes

### compose.yml

\`\`\`yaml {2,6-11} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    [...]
    healthcheck:
      test: ["CMD", "curl", "http://localhost:8080"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 3s
    [...]
\`\`\`


::right::

<br />

<br />

### Dependencies need Probes

<br />

<br />

Without **probes**, dependencies are registered as met once the workloads get started - regardless of their actual states.

We will need to add some probes!
`,title:"Add probes",level:1,content:`# Add probes

### compose.yml

\`\`\`yaml {2,6-11} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    [...]
    healthcheck:
      test: ["CMD", "curl", "http://localhost:8080"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 3s
    [...]
\`\`\`


::right::

<br />

<br />

### Dependencies need Probes

<br />

<br />

Without **probes**, dependencies are registered as met once the workloads get started - regardless of their actual states.

We will need to add some probes!`,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add probes"},index:0,start:0,end:41},inline:{raw:`---
src: ./slides/practical/section-02/probes-static.md
---
`,content:"",frontmatter:{},index:22,start:187,end:191},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/probes-static.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:tC,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-02/probes-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Add probes

### compose.yml

\`\`\`yaml {2,6-11} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    [...]
    healthcheck:
      test: ["CMD", "curl", "http://localhost:8080"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 3s
    [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {4,8,12} {maxHeight:'350px'}
containers: {
  guestbook: {
    // omitted content
    probe: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    // omitted content
    probe: readiness: tcp: url: "tcp://localhost:5432"
  }
  redis: {
    // omitted content
    probe: readiness: tcp: url: "tcp://localhost:6379"
  }
}
\`\`\`

<v-click>

The probe for \`guestbook\` isn't needed for our dependencies to work, but it will help Kubernetes to determine its state!

</v-click>`,title:"Add probes",level:1,content:`# Add probes

### compose.yml

\`\`\`yaml {2,6-11} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    [...]
    healthcheck:
      test: ["CMD", "curl", "http://localhost:8080"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 3s
    [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {4,8,12} {maxHeight:'350px'}
containers: {
  guestbook: {
    // omitted content
    probe: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    // omitted content
    probe: readiness: tcp: url: "tcp://localhost:5432"
  }
  redis: {
    // omitted content
    probe: readiness: tcp: url: "tcp://localhost:6379"
  }
}
\`\`\`

<v-click>

The probe for \`guestbook\` isn't needed for our dependencies to work, but it will help Kubernetes to determine its state!

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-02/probes-static.md"},index:32,start:41,end:96,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/probes-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add probes

### compose.yml

\`\`\`yaml {2,6-11} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    [...]
    healthcheck:
      test: ["CMD", "curl", "http://localhost:8080"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 3s
    [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {4,8,12} {maxHeight:'350px'}
containers: {
  guestbook: {
    // omitted content
    probe: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    // omitted content
    probe: readiness: tcp: url: "tcp://localhost:5432"
  }
  redis: {
    // omitted content
    probe: readiness: tcp: url: "tcp://localhost:6379"
  }
}
\`\`\`

<v-click>

The probe for \`guestbook\` isn't needed for our dependencies to work, but it will help Kubernetes to determine its state!

</v-click>`,title:"Add probes",level:1,content:`# Add probes

### compose.yml

\`\`\`yaml {2,6-11} {maxHeight:'350px'}
services:
  guestbook:
    image: dbodky/guestbook
    container_name: guestbook
    [...]
    healthcheck:
      test: ["CMD", "curl", "http://localhost:8080"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 3s
    [...]
\`\`\`


::right::

<br />

<br />

### Acornfile

\`\`\`cue {4,8,12} {maxHeight:'350px'}
containers: {
  guestbook: {
    // omitted content
    probe: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    // omitted content
    probe: readiness: tcp: url: "tcp://localhost:5432"
  }
  redis: {
    // omitted content
    probe: readiness: tcp: url: "tcp://localhost:6379"
  }
}
\`\`\`

<v-click>

The probe for \`guestbook\` isn't needed for our dependencies to work, but it will help Kubernetes to determine its state!

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out"},index:1,start:41,end:96},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/probes-static.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:fC,meta:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-02/takeaways.md",slide:{raw:null,title:"Takeaways",level:1,content:`# Takeaways

Implement your deployment order!

<br />

- Containers can be dependant on other workloads

<br />

- Acorn supports the \`startup/liveness/readiness\` probes known to Kubernetes

<br />

- You can run TCP/HTTP probes *or* create your own, script-style

<br />`,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-02/takeaways.md"},index:33,start:0,end:22,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/takeaways.md",raw:`---
layout: default
transition: fade-out
---

# Takeaways

Implement your deployment order!

<br />

- Containers can be dependant on other workloads

<br />

- Acorn supports the \`startup/liveness/readiness\` probes known to Kubernetes

<br />

- You can run TCP/HTTP probes *or* create your own, script-style

<br />`,title:"Takeaways",level:1,content:`# Takeaways

Implement your deployment order!

<br />

- Containers can be dependant on other workloads

<br />

- Acorn supports the \`startup/liveness/readiness\` probes known to Kubernetes

<br />

- You can run TCP/HTTP probes *or* create your own, script-style

<br />`,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways"},index:0,start:0,end:22},inline:{raw:`---
src: ./slides/practical/section-02/takeaways.md
---
`,content:"",frontmatter:{},index:23,start:191,end:195},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/takeaways.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:DC,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 🔁 Iterate

(Secret) data management

<br />

<br />

\`\`\`bash 
git checkout section-03
\`\`\`
`,title:"🔁 Iterate",level:1,content:`# 🔁 Iterate

(Secret) data management

<br />

<br />

\`\`\`bash 
git checkout section-03
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:34,start:195,end:213,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:IC,meta:{layout:"two-cols",transition:"fade-out",title:"Add secret management",srcSequence:"./slides/practical/section-03/secrets-static.md",slide:{raw:null,title:"Add secret management",level:1,content:`# Add secret management

### We're still relying on...

<br />

- hardcoded passwords (uh-oh)

<br />

- hardcoded database names

<br />

- our services to never go down/restart (or else data will get lost)

<br />

**Let's fix this! 🩹**

::right::

<br />

<br />

### Acornfile

\`\`\`cue {5,6,12,13} {height:'350px'}
containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_USER: "guestbookuser"
    }
  }
  postgres: {
    // omitted content
    env: {
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add secret management",srcSequence:"./slides/practical/section-03/secrets-static.md"},index:35,start:0,end:52,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/secrets-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add secret management

### We're still relying on...

<br />

- hardcoded passwords (uh-oh)

<br />

- hardcoded database names

<br />

- our services to never go down/restart (or else data will get lost)

<br />

**Let's fix this! 🩹**

::right::

<br />

<br />

### Acornfile

\`\`\`cue {5,6,12,13} {height:'350px'}
containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_USER: "guestbookuser"
    }
  }
  postgres: {
    // omitted content
    env: {
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
  }
}
\`\`\`
`,title:"Add secret management",level:1,content:`# Add secret management

### We're still relying on...

<br />

- hardcoded passwords (uh-oh)

<br />

- hardcoded database names

<br />

- our services to never go down/restart (or else data will get lost)

<br />

**Let's fix this! 🩹**

::right::

<br />

<br />

### Acornfile

\`\`\`cue {5,6,12,13} {height:'350px'}
containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_USER: "guestbookuser"
    }
  }
  postgres: {
    // omitted content
    env: {
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add secret management"},index:0,start:0,end:52},inline:{raw:`---
src: ./slides/practical/section-03/secrets-static.md
---
`,content:"",frontmatter:{},index:25,start:213,end:217},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/secrets-static.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:XC,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-03/secrets-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Add secret management

### We're still relying on...

<br />

- hardcoded passwords (uh-oh)

<br />

- hardcoded database names

<br />

- our services to never go down/restart (or else data will get lost)

<br />

**Let's fix this! 🩹**

::right::

<br />

<br />

### Acornfile

\`\`\`cue {1-7,13,14,20,21} {maxHeight:'350px'}
secrets: "db-auth": {
  type: "basic"
  data: {
    username: ""
    password: ""
  }
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_PASSWORD: "secret://db-auth/password"
      GUESTBOOK_DB_USER: "secret://db-auth/username"
    }
  }
  postgres: {
    // omitted content
    env: {
      POSTGRES_USER: "secret://db-auth/username"
      POSTGRES_PASSWORD: "secret://db-auth/password"
    }
  }
  redis: {
    // omitted content
  }
}
\`\`\``,title:"Add secret management",level:1,content:`# Add secret management

### We're still relying on...

<br />

- hardcoded passwords (uh-oh)

<br />

- hardcoded database names

<br />

- our services to never go down/restart (or else data will get lost)

<br />

**Let's fix this! 🩹**

::right::

<br />

<br />

### Acornfile

\`\`\`cue {1-7,13,14,20,21} {maxHeight:'350px'}
secrets: "db-auth": {
  type: "basic"
  data: {
    username: ""
    password: ""
  }
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_PASSWORD: "secret://db-auth/password"
      GUESTBOOK_DB_USER: "secret://db-auth/username"
    }
  }
  postgres: {
    // omitted content
    env: {
      POSTGRES_USER: "secret://db-auth/username"
      POSTGRES_PASSWORD: "secret://db-auth/password"
    }
  }
  redis: {
    // omitted content
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-03/secrets-static.md"},index:36,start:52,end:114,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/secrets-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add secret management

### We're still relying on...

<br />

- hardcoded passwords (uh-oh)

<br />

- hardcoded database names

<br />

- our services to never go down/restart (or else data will get lost)

<br />

**Let's fix this! 🩹**

::right::

<br />

<br />

### Acornfile

\`\`\`cue {1-7,13,14,20,21} {maxHeight:'350px'}
secrets: "db-auth": {
  type: "basic"
  data: {
    username: ""
    password: ""
  }
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_PASSWORD: "secret://db-auth/password"
      GUESTBOOK_DB_USER: "secret://db-auth/username"
    }
  }
  postgres: {
    // omitted content
    env: {
      POSTGRES_USER: "secret://db-auth/username"
      POSTGRES_PASSWORD: "secret://db-auth/password"
    }
  }
  redis: {
    // omitted content
  }
}
\`\`\``,title:"Add secret management",level:1,content:`# Add secret management

### We're still relying on...

<br />

- hardcoded passwords (uh-oh)

<br />

- hardcoded database names

<br />

- our services to never go down/restart (or else data will get lost)

<br />

**Let's fix this! 🩹**

::right::

<br />

<br />

### Acornfile

\`\`\`cue {1-7,13,14,20,21} {maxHeight:'350px'}
secrets: "db-auth": {
  type: "basic"
  data: {
    username: ""
    password: ""
  }
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_PASSWORD: "secret://db-auth/password"
      GUESTBOOK_DB_USER: "secret://db-auth/username"
    }
  }
  postgres: {
    // omitted content
    env: {
      POSTGRES_USER: "secret://db-auth/username"
      POSTGRES_PASSWORD: "secret://db-auth/password"
    }
  }
  redis: {
    // omitted content
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:1,start:52,end:114},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/secrets-static.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:d0,meta:{layout:"two-cols",transition:"fade-out",title:"Add data persistency",srcSequence:"./slides/practical/section-03/volumes-static.md",slide:{raw:null,title:"Add data persistency",level:1,content:`# Add data persistency

### compose.yml

\`\`\`yaml {3,5-7,9,10} {maxHeight:'350px'}
services:
  [...]
  postgres:
    [...]
    volumes:
    - db-data:/var/lib/postgresql/data
  redis:
    [...]
    volumes:
    - redis-data:/data
\`\`\`

::right::

<br />

<br />

### *Have you tried rebooting?*

<br />

<br /> 

This would currently erase all our data! 😱

We need to create volumes in order to achieve data persistance.`,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add data persistency",srcSequence:"./slides/practical/section-03/volumes-static.md"},index:37,start:0,end:38,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/volumes-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add data persistency

### compose.yml

\`\`\`yaml {3,5-7,9,10} {maxHeight:'350px'}
services:
  [...]
  postgres:
    [...]
    volumes:
    - db-data:/var/lib/postgresql/data
  redis:
    [...]
    volumes:
    - redis-data:/data
\`\`\`

::right::

<br />

<br />

### *Have you tried rebooting?*

<br />

<br /> 

This would currently erase all our data! 😱

We need to create volumes in order to achieve data persistance.
`,title:"Add data persistency",level:1,content:`# Add data persistency

### compose.yml

\`\`\`yaml {3,5-7,9,10} {maxHeight:'350px'}
services:
  [...]
  postgres:
    [...]
    volumes:
    - db-data:/var/lib/postgresql/data
  redis:
    [...]
    volumes:
    - redis-data:/data
\`\`\`

::right::

<br />

<br />

### *Have you tried rebooting?*

<br />

<br /> 

This would currently erase all our data! 😱

We need to create volumes in order to achieve data persistance.`,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add data persistency"},index:0,start:0,end:38},inline:{raw:`---
src: ./slides/practical/section-03/volumes-static.md
---
`,content:"",frontmatter:{},index:26,start:217,end:221},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/volumes-static.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:B0,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-03/volumes-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Add data persistency

### compose.yml

\`\`\`yaml {3,5-7,9,10} {maxHeight:'350px'}
services:
  [...]
  postgres:
    [...]
    volumes:
    - db-data:/data
  redis:
    [...]
    volumes:
    - redis-data:/data
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {1-4,12,16} {maxHeight:'350px'}
volumes: {
  "postgres-data": {}
  "redis-data": {}
}

containers: {
  guestbook: {
    // omitted content
  }
  postgres: {
    // omitted content
    dirs: "/var/lib/postgresql/data": "volume://postgres-data?subpath=/data"
  }
  redis: {
    // omitted content
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  // omitted content
}
\`\`\`
`,title:"Add data persistency",level:1,content:`# Add data persistency

### compose.yml

\`\`\`yaml {3,5-7,9,10} {maxHeight:'350px'}
services:
  [...]
  postgres:
    [...]
    volumes:
    - db-data:/data
  redis:
    [...]
    volumes:
    - redis-data:/data
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {1-4,12,16} {maxHeight:'350px'}
volumes: {
  "postgres-data": {}
  "redis-data": {}
}

containers: {
  guestbook: {
    // omitted content
  }
  postgres: {
    // omitted content
    dirs: "/var/lib/postgresql/data": "volume://postgres-data?subpath=/data"
  }
  redis: {
    // omitted content
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  // omitted content
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-03/volumes-static.md"},index:38,start:38,end:93,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/volumes-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add data persistency

### compose.yml

\`\`\`yaml {3,5-7,9,10} {maxHeight:'350px'}
services:
  [...]
  postgres:
    [...]
    volumes:
    - db-data:/data
  redis:
    [...]
    volumes:
    - redis-data:/data
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {1-4,12,16} {maxHeight:'350px'}
volumes: {
  "postgres-data": {}
  "redis-data": {}
}

containers: {
  guestbook: {
    // omitted content
  }
  postgres: {
    // omitted content
    dirs: "/var/lib/postgresql/data": "volume://postgres-data?subpath=/data"
  }
  redis: {
    // omitted content
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  // omitted content
}
\`\`\`
`,title:"Add data persistency",level:1,content:`# Add data persistency

### compose.yml

\`\`\`yaml {3,5-7,9,10} {maxHeight:'350px'}
services:
  [...]
  postgres:
    [...]
    volumes:
    - db-data:/data
  redis:
    [...]
    volumes:
    - redis-data:/data
\`\`\`

::right::

<br />

<br />

### Acornfile

\`\`\`cue {1-4,12,16} {maxHeight:'350px'}
volumes: {
  "postgres-data": {}
  "redis-data": {}
}

containers: {
  guestbook: {
    // omitted content
  }
  postgres: {
    // omitted content
    dirs: "/var/lib/postgresql/data": "volume://postgres-data?subpath=/data"
  }
  redis: {
    // omitted content
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  // omitted content
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:1,start:38,end:93},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/volumes-static.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:F0,meta:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-03/takeaways.md",slide:{raw:null,title:"Takeaways",level:1,content:`# Takeaways

Acorn takes care of secrets and volumes, both locally and remote

<br />

- Acorn supports different secret types to choose from

<br />

- Simple creation of 'closed loops'

<br />

- Secrets can be exposed via Acorn's CLI, no more need for <br/>\`kubectl get secrets/db-auth --template={{.data.password}} | base64 -d\``,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-03/takeaways.md"},index:39,start:0,end:20,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/takeaways.md",raw:`---
layout: default
transition: fade-out
---

# Takeaways

Acorn takes care of secrets and volumes, both locally and remote

<br />

- Acorn supports different secret types to choose from

<br />

- Simple creation of 'closed loops'

<br />

- Secrets can be exposed via Acorn's CLI, no more need for <br/>\`kubectl get secrets/db-auth --template={{.data.password}} | base64 -d\``,title:"Takeaways",level:1,content:`# Takeaways

Acorn takes care of secrets and volumes, both locally and remote

<br />

- Acorn supports different secret types to choose from

<br />

- Simple creation of 'closed loops'

<br />

- Secrets can be exposed via Acorn's CLI, no more need for <br/>\`kubectl get secrets/db-auth --template={{.data.password}} | base64 -d\``,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways"},index:0,start:0,end:20},inline:{raw:`---
src: ./slides/practical/section-03/takeaways.md
---
`,content:"",frontmatter:{},index:27,start:221,end:225},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/takeaways.md",notesHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:I0,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 🔁 Iterate

User-provided configuration

<br />

<br />

\`\`\`bash 
git checkout section-04
\`\`\`
`,title:"🔁 Iterate",level:1,content:`# 🔁 Iterate

User-provided configuration

<br />

<br />

\`\`\`bash 
git checkout section-04
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:40,start:225,end:243,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:z0,meta:{layout:"two-cols",transition:"fade-out",title:"Add runtime arguments",srcSequence:"./slides/practical/section-04/args-static.md",slide:{raw:null,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

\`\`\`cue {6,21,7,10,17,28,8,9,19,20,38,39} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

### Press any key

<br />

<br />

...to see nothing changed! We still rely on many hardcoded values in our Acornfile.

Let's allow users to have a say *what* they actually deploy!`,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add runtime arguments",srcSequence:"./slides/practical/section-04/args-static.md"},index:41,start:0,end:73,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add runtime arguments

\`\`\`cue {6,21,7,10,17,28,8,9,19,20,38,39} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

### Press any key

<br />

<br />

...to see nothing changed! We still rely on many hardcoded values in our Acornfile.

Let's allow users to have a say *what* they actually deploy!
`,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

\`\`\`cue {6,21,7,10,17,28,8,9,19,20,38,39} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

### Press any key

<br />

<br />

...to see nothing changed! We still rely on many hardcoded values in our Acornfile.

Let's allow users to have a say *what* they actually deploy!`,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add runtime arguments"},index:0,start:0,end:73},inline:{raw:`---
src: ./slides/practical/section-04/args-static.md
---
`,content:"",frontmatter:{},index:29,start:243,end:247},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",notesHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:ek,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Add runtime arguments

\`\`\`cue {6,21} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {1-4,9,15} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
}
containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\`
`,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

\`\`\`cue {6,21} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {1-4,9,15} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
}
containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"},index:42,start:73,end:168,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add runtime arguments

\`\`\`cue {6,21} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {1-4,9,15} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
}
containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\`
`,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

\`\`\`cue {6,21} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {1-4,9,15} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
}
containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:1,start:73,end:168},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",notesHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:ck,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Add runtime arguments

\`\`\`cue {7,10,17,28} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {4-7,15,16} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\`
`,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

\`\`\`cue {7,10,17,28} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {4-7,15,16} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"},index:43,start:168,end:270,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add runtime arguments

\`\`\`cue {7,10,17,28} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {4-7,15,16} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\`
`,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

\`\`\`cue {7,10,17,28} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {4-7,15,16} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:2,start:168,end:270},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",notesHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:hk,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Add runtime arguments

\`\`\`cue {8,9,19,20,38,39} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {8-11,18,19} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
  // Database password to use
  dbPassword: ""
  // Database user to use
  dbUser: ""
}

secrets: {
  "db-auth": {
    type: "basic"
    data: {
      username: args.dbUser
      password: args.dbPassword
    }
  }
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

volumes: {
  // omitted content
}
\`\`\`
`,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

\`\`\`cue {8,9,19,20,38,39} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {8-11,18,19} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
  // Database password to use
  dbPassword: ""
  // Database user to use
  dbUser: ""
}

secrets: {
  "db-auth": {
    type: "basic"
    data: {
      username: args.dbUser
      password: args.dbPassword
    }
  }
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

volumes: {
  // omitted content
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"},index:44,start:270,end:382,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add runtime arguments

\`\`\`cue {8,9,19,20,38,39} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {8-11,18,19} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
  // Database password to use
  dbPassword: ""
  // Database user to use
  dbUser: ""
}

secrets: {
  "db-auth": {
    type: "basic"
    data: {
      username: args.dbUser
      password: args.dbPassword
    }
  }
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

volumes: {
  // omitted content
}
\`\`\`
`,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

\`\`\`cue {8,9,19,20,38,39} {maxHeight:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: publish: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
    dependsOn: ["postgres", "redis"]
    probes: readiness: http: url: "http://localhost:8080"
  }
  postgres: {
    image: "postgres:12"
    ports: "postgres:5432/tcp"
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
    probes: readiness: tcp: url: "tcp://localhost:5432"
    dirs: "/var/lib/postgresql/data": "volume://db-data"
  }
  redis: {
    image: "redis:7"
    ports: "redis:6379/tcp"
    probes: readiness: tcp: url: "tcp://localhost:6379"
    dirs: "/data": "volume://redis-data"
  }
}

secrets: {
  "db-credentials": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}

volumes: {
  "db-data": {}
  "redis-data": {}
}
\`\`\`

::right::

<br />

<br />

\`\`\`cue {8-11,18,19} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
  // Database password to use
  dbPassword: ""
  // Database user to use
  dbUser: ""
}

secrets: {
  "db-auth": {
    type: "basic"
    data: {
      username: args.dbUser
      password: args.dbPassword
    }
  }
}

containers: {
  guestbook: {
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

volumes: {
  // omitted content
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:3,start:270,end:382},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",notesHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:Ek,meta:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md",slide:{raw:`---
layout: two-cols
transition: fade-out
---

# Add runtime arguments

<br />

<br />

<br />

<br />

As we will deploy this Acorn to Kubernetes, let's utilize its scaling features and and make our frontend scalable!

::right::

<br />

<br />

\`\`\`cue {12,13,18-20} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
  // Database password to use
  dbPassword: ""
  // Database user to use
  dbUser: ""
  // amount of replicas to run for our frontend
  replicas: 3
}

containers: {
  guestbook: {
    if !args.dev {
      scale: args.replicas
    }
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\`
`,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

<br />

<br />

<br />

<br />

As we will deploy this Acorn to Kubernetes, let's utilize its scaling features and and make our frontend scalable!

::right::

<br />

<br />

\`\`\`cue {12,13,18-20} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
  // Database password to use
  dbPassword: ""
  // Database user to use
  dbUser: ""
  // amount of replicas to run for our frontend
  replicas: 3
}

containers: {
  guestbook: {
    if !args.dev {
      scale: args.replicas
    }
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"},index:45,start:382,end:453,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add runtime arguments

<br />

<br />

<br />

<br />

As we will deploy this Acorn to Kubernetes, let's utilize its scaling features and and make our frontend scalable!

::right::

<br />

<br />

\`\`\`cue {12,13,18-20} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
  // Database password to use
  dbPassword: ""
  // Database user to use
  dbUser: ""
  // amount of replicas to run for our frontend
  replicas: 3
}

containers: {
  guestbook: {
    if !args.dev {
      scale: args.replicas
    }
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\`
`,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

<br />

<br />

<br />

<br />

As we will deploy this Acorn to Kubernetes, let's utilize its scaling features and and make our frontend scalable!

::right::

<br />

<br />

\`\`\`cue {12,13,18-20} {maxHeight:'350px'}
args: {
  // Name of the database to connect to
  dbName: "guestbookdb"
  // FQDN/IP of the database to connect to
  dbHost: "postgres"
  // FQDN/IP of the redis instance to connect to
  redisHost: "redis"
  // Database password to use
  dbPassword: ""
  // Database user to use
  dbUser: ""
  // amount of replicas to run for our frontend
  replicas: 3
}

containers: {
  guestbook: {
    if !args.dev {
      scale: args.replicas
    }
    // omitted content
    env: {
      GUESTBOOK_DB_NAME: args.dbName
      GUESTBOOK_DB_HOST: args.dbHost
      GUESTBOOK_REDIS_HOST: args.redisHost
    }
  }
  postgres: {
    // omitted content
    env: {
      POSGRES_DB: args.dbName
    }
  }
  redis: {
    // omitted content
  }
}

secrets: {
  // omitted content
}

volumes: {
  // omitted content
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out"},index:4,start:382,end:453},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",notesHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:Ok,meta:{layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md",slide:{raw:`---
layout: default
transition: fade-out
---

# Why the comments?

Because they help Acorn's CLI to parse nice output for end users!

\`\`\`bash
acorn run . --help
Usage of Acornfile:
      --db-host string       FQDN/IP of our PostgreSQL database
      --db-name string       name of the database provisioned for our application
      --db-password string   database password provisioned for our application
      --db-user string       database user provisioned for our application
      --redis-host string    FQDN/IP of our Redis cache
      --replicas int         amount of replicas to run`,title:"Why the comments?",level:1,content:`# Why the comments?

Because they help Acorn's CLI to parse nice output for end users!

\`\`\`bash
acorn run . --help
Usage of Acornfile:
      --db-host string       FQDN/IP of our PostgreSQL database
      --db-name string       name of the database provisioned for our application
      --db-password string   database password provisioned for our application
      --db-user string       database user provisioned for our application
      --redis-host string    FQDN/IP of our Redis cache
      --replicas int         amount of replicas to run`,frontmatter:{layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-04/args-static.md"},index:46,start:453,end:471,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",raw:`---
layout: default
transition: fade-out
---

# Why the comments?

Because they help Acorn's CLI to parse nice output for end users!

\`\`\`bash
acorn run . --help
Usage of Acornfile:
      --db-host string       FQDN/IP of our PostgreSQL database
      --db-name string       name of the database provisioned for our application
      --db-password string   database password provisioned for our application
      --db-user string       database user provisioned for our application
      --redis-host string    FQDN/IP of our Redis cache
      --replicas int         amount of replicas to run`,title:"Why the comments?",level:1,content:`# Why the comments?

Because they help Acorn's CLI to parse nice output for end users!

\`\`\`bash
acorn run . --help
Usage of Acornfile:
      --db-host string       FQDN/IP of our PostgreSQL database
      --db-name string       name of the database provisioned for our application
      --db-password string   database password provisioned for our application
      --db-user string       database user provisioned for our application
      --redis-host string    FQDN/IP of our Redis cache
      --replicas int         amount of replicas to run`,frontmatter:{layout:"default",transition:"fade-out"},index:5,start:453,end:471},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args-static.md",notesHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:Kk,meta:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-04/takeaways.md",slide:{raw:null,title:"Takeaways",level:1,content:`# Takeaways

The CLI is your friend - again!

<br />

- Dynamic data can be used at run/deploy time

<br />

- Acorn's CLI parses the data inventory and displays it for the end user

<br />

- Defaults can be set

<br />

- Data can be manipulated using Acorn's \`std\` library`,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-04/takeaways.md"},index:47,start:0,end:25,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/takeaways.md",raw:`---
layout: default
transition: fade-out
---

# Takeaways

The CLI is your friend - again!

<br />

- Dynamic data can be used at run/deploy time

<br />

- Acorn's CLI parses the data inventory and displays it for the end user

<br />

- Defaults can be set

<br />

- Data can be manipulated using Acorn's \`std\` library
`,title:"Takeaways",level:1,content:`# Takeaways

The CLI is your friend - again!

<br />

- Dynamic data can be used at run/deploy time

<br />

- Acorn's CLI parses the data inventory and displays it for the end user

<br />

- Defaults can be set

<br />

- Data can be manipulated using Acorn's \`std\` library`,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways"},index:0,start:0,end:25},inline:{raw:`---
src: ./slides/practical/section-04/takeaways.md
---

`,content:"",frontmatter:{},index:30,start:247,end:252},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/takeaways.md",notesHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:Qk,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# ✨ Finishing Touches

Build, push, and deploy the Acorns

<br />

<br />

\`\`\`bash 
git checkout section-05
\`\`\`
`,title:"✨ Finishing Touches",level:1,content:`# ✨ Finishing Touches

Build, push, and deploy the Acorns

<br />

<br />

\`\`\`bash 
git checkout section-05
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:48,start:252,end:270,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:h4,meta:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Almost there!",srcSequence:"./slides/practical/section-05/deploy.md",slide:{raw:null,title:"Almost there!",level:1,content:`# Almost there!

Deployment looks similar to the workflow on Docker

<br />

<br />

\`\`\`bash {|1|3|5|7,9,10} {maxHeight:'400px'}
acorn login <registry>

acorn build -t <registry>/<user>/<image>:<tag>

acorn push <registry>/<user>/<image>:<tag>

acorn run <registry>/<user>/<image>:<tag> --help

acorn run --target-namespace demo --name demo \\
<registry/user/image/tag> [OPTIONS]
\`\`\`

::right::

<br />

<br />

<br />

<br />

<br />

<v-click at=1>

1. Login to your registry

<br />

</v-click>

<v-click at=2>

2. Build and tag the image/artifact

<br />

</v-click>

<v-click at=3>

3. Push the image to your repository

<br />

</v-click>

<v-click at=4>

4. Pull the image to its destination or deploy it directly

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Almost there!",srcSequence:"./slides/practical/section-05/deploy.md"},index:49,start:0,end:69,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/deploy.md",raw:`---
layout: two-cols
transition: fade-out
clicks: 4
---

# Almost there!

Deployment looks similar to the workflow on Docker

<br />

<br />

\`\`\`bash {|1|3|5|7,9,10} {maxHeight:'400px'}
acorn login <registry>

acorn build -t <registry>/<user>/<image>:<tag>

acorn push <registry>/<user>/<image>:<tag>

acorn run <registry>/<user>/<image>:<tag> --help

acorn run --target-namespace demo --name demo \\
<registry/user/image/tag> [OPTIONS]
\`\`\`

::right::

<br />

<br />

<br />

<br />

<br />

<v-click at=1>

1. Login to your registry

<br />

</v-click>

<v-click at=2>

2. Build and tag the image/artifact

<br />

</v-click>

<v-click at=3>

3. Push the image to your repository

<br />

</v-click>

<v-click at=4>

4. Pull the image to its destination or deploy it directly

</v-click>
`,title:"Almost there!",level:1,content:`# Almost there!

Deployment looks similar to the workflow on Docker

<br />

<br />

\`\`\`bash {|1|3|5|7,9,10} {maxHeight:'400px'}
acorn login <registry>

acorn build -t <registry>/<user>/<image>:<tag>

acorn push <registry>/<user>/<image>:<tag>

acorn run <registry>/<user>/<image>:<tag> --help

acorn run --target-namespace demo --name demo \\
<registry/user/image/tag> [OPTIONS]
\`\`\`

::right::

<br />

<br />

<br />

<br />

<br />

<v-click at=1>

1. Login to your registry

<br />

</v-click>

<v-click at=2>

2. Build and tag the image/artifact

<br />

</v-click>

<v-click at=3>

3. Push the image to your repository

<br />

</v-click>

<v-click at=4>

4. Pull the image to its destination or deploy it directly

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Almost there!"},index:0,start:0,end:69},inline:{raw:`---
src: ./slides/practical/section-05/deploy.md
---
`,content:"",frontmatter:{},index:32,start:270,end:274},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/deploy.md",notesHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:_4,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 🎭 Encore

Some more things Acorn can do...
`,title:"🎭 Encore",level:1,content:`# 🎭 Encore

Some more things Acorn can do...`,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:50,start:274,end:284,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:G4,meta:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Demo",srcSequence:"./slides/practical/section-05/demo.md",slide:{raw:null,title:"Demo",level:1,content:`# Demo 

Let's deploy a workshop guestbook!

<br />

<br />


\`\`\`bash
acorn install \\
--ingress-class-name=nginx \\
--lets-encrypt=enabled \\
--lets-encrypt-email=dbodky@gmail.com \\
--lets-encrypt-tos-agree=true \\
--cluster-domain=dbodky.me \\
--http-endpoint-pattern="{{.Container}}.{{.ClusterDomain}}"
\`\`\`

<v-click>

<div class="bg-red absolute left-2 top-43 h-4 w-39 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-green absolute left-2 top-47.5 h-4 w-41 opacity-50 rounded-md"></div>

<div class="bg-green absolute left-2 top-52 h-4 w-68 opacity-50 rounded-md"></div>

<div class="bg-green absolute left-2 top-56.5 h-4 w-53 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-blue absolute left-2 top-61.5 h-4 w-48 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-pink absolute left-2 top-66 h-4 w-106.5 opacity-50 rounded-md"></div>

</v-click>

::right::

<br />

<br />

<br />

<br />

<br />

<ul>

<v-click at=1>

<li class="text-red">Define the installed <code>IngressClass</code></li>

</v-click>

<v-click at=2>

<li class="text-green">Configure TLS certificate generation via <b>Let's Encrypt</b></li>

</v-click>

<v-click at=3>

<li class="text-blue">Configure the cluster domain to use for <code>Ingress</code> generation by Acorn</li>

</v-click>

<v-click at=4>

<li class="text-pink">Configure the HTTP endpoint pattern to use for <code>Ingress</code> generation by Acorn</li>

</v-click>

</ul>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Demo",srcSequence:"./slides/practical/section-05/demo.md"},index:51,start:0,end:93,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",raw:`---
layout: two-cols
transition: fade-out
clicks: 4
---

# Demo 

Let's deploy a workshop guestbook!

<br />

<br />


\`\`\`bash
acorn install \\
--ingress-class-name=nginx \\
--lets-encrypt=enabled \\
--lets-encrypt-email=dbodky@gmail.com \\
--lets-encrypt-tos-agree=true \\
--cluster-domain=dbodky.me \\
--http-endpoint-pattern="{{.Container}}.{{.ClusterDomain}}"
\`\`\`

<v-click>

<div class="bg-red absolute left-2 top-43 h-4 w-39 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-green absolute left-2 top-47.5 h-4 w-41 opacity-50 rounded-md"></div>

<div class="bg-green absolute left-2 top-52 h-4 w-68 opacity-50 rounded-md"></div>

<div class="bg-green absolute left-2 top-56.5 h-4 w-53 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-blue absolute left-2 top-61.5 h-4 w-48 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-pink absolute left-2 top-66 h-4 w-106.5 opacity-50 rounded-md"></div>

</v-click>

::right::

<br />

<br />

<br />

<br />

<br />

<ul>

<v-click at=1>

<li class="text-red">Define the installed <code>IngressClass</code></li>

</v-click>

<v-click at=2>

<li class="text-green">Configure TLS certificate generation via <b>Let's Encrypt</b></li>

</v-click>

<v-click at=3>

<li class="text-blue">Configure the cluster domain to use for <code>Ingress</code> generation by Acorn</li>

</v-click>

<v-click at=4>

<li class="text-pink">Configure the HTTP endpoint pattern to use for <code>Ingress</code> generation by Acorn</li>

</v-click>

</ul>
`,title:"Demo",level:1,content:`# Demo 

Let's deploy a workshop guestbook!

<br />

<br />


\`\`\`bash
acorn install \\
--ingress-class-name=nginx \\
--lets-encrypt=enabled \\
--lets-encrypt-email=dbodky@gmail.com \\
--lets-encrypt-tos-agree=true \\
--cluster-domain=dbodky.me \\
--http-endpoint-pattern="{{.Container}}.{{.ClusterDomain}}"
\`\`\`

<v-click>

<div class="bg-red absolute left-2 top-43 h-4 w-39 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-green absolute left-2 top-47.5 h-4 w-41 opacity-50 rounded-md"></div>

<div class="bg-green absolute left-2 top-52 h-4 w-68 opacity-50 rounded-md"></div>

<div class="bg-green absolute left-2 top-56.5 h-4 w-53 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-blue absolute left-2 top-61.5 h-4 w-48 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-pink absolute left-2 top-66 h-4 w-106.5 opacity-50 rounded-md"></div>

</v-click>

::right::

<br />

<br />

<br />

<br />

<br />

<ul>

<v-click at=1>

<li class="text-red">Define the installed <code>IngressClass</code></li>

</v-click>

<v-click at=2>

<li class="text-green">Configure TLS certificate generation via <b>Let's Encrypt</b></li>

</v-click>

<v-click at=3>

<li class="text-blue">Configure the cluster domain to use for <code>Ingress</code> generation by Acorn</li>

</v-click>

<v-click at=4>

<li class="text-pink">Configure the HTTP endpoint pattern to use for <code>Ingress</code> generation by Acorn</li>

</v-click>

</ul>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Demo"},index:0,start:0,end:93},inline:{raw:`---
src: ./slides/practical/section-05/demo.md
---
`,content:"",frontmatter:{},index:34,start:284,end:288},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",notesHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:i7,meta:{layout:"two-cols",transition:"fade-out",clicks:5,srcSequence:"./slides/practical/section-05/demo.md",slide:{raw:`---
layout: two-cols
transition: fade-out
clicks: 5
---

# Demo

Let's deploy a workshop guestbook!

<br />

<br />

\`\`\`bash
acorn run \\
--name=demo \\
--target-namespace=guestbook \\
--link=ext-db:postgres \\
--secret=db-credentials:db-auth \\
index.docker.io/dbodky/guestbook-acorn:v1.0.0
\`\`\`

<v-click>

<div class="bg-red absolute left-2 top-43 h-4 w-21 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-green absolute left-2 top-47.5 h-4 w-51.5 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-pink absolute left-2 top-52 h-4 w-40 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-purple absolute left-2 top-56.5 h-4 w-56.5 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-blue absolute left-2 top-61.5 h-4 w-82 opacity-50 rounded-md"></div>

</v-click>

::right::

<br />

<br />

<br />

<br />

<br />

<ul>

<v-click at=1>

<li class="text-red">Define the name of the Acorn <code>App</code></li>

</v-click>

<v-click at=2>

<li class="text-green">Define the <code>Namespace</code> the <code>App</code> will live in</li>

</v-click>

<v-click at=3>

<li class="text-pink">Link an external Database instead of the <code>postgres</code> service defined in our Acorn</li>

</v-click>

<v-click at=4>

<li class="text-purple">Reference a <code>Secret</code> with our database's credentials instead of providing/generating one</li>

</v-click>

<v-click at=5>

<li class="text-blue">State the <code>Image</code> you want to deploy</li>

</v-click>

</ul>
`,title:"Demo",level:1,content:`# Demo

Let's deploy a workshop guestbook!

<br />

<br />

\`\`\`bash
acorn run \\
--name=demo \\
--target-namespace=guestbook \\
--link=ext-db:postgres \\
--secret=db-credentials:db-auth \\
index.docker.io/dbodky/guestbook-acorn:v1.0.0
\`\`\`

<v-click>

<div class="bg-red absolute left-2 top-43 h-4 w-21 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-green absolute left-2 top-47.5 h-4 w-51.5 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-pink absolute left-2 top-52 h-4 w-40 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-purple absolute left-2 top-56.5 h-4 w-56.5 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-blue absolute left-2 top-61.5 h-4 w-82 opacity-50 rounded-md"></div>

</v-click>

::right::

<br />

<br />

<br />

<br />

<br />

<ul>

<v-click at=1>

<li class="text-red">Define the name of the Acorn <code>App</code></li>

</v-click>

<v-click at=2>

<li class="text-green">Define the <code>Namespace</code> the <code>App</code> will live in</li>

</v-click>

<v-click at=3>

<li class="text-pink">Link an external Database instead of the <code>postgres</code> service defined in our Acorn</li>

</v-click>

<v-click at=4>

<li class="text-purple">Reference a <code>Secret</code> with our database's credentials instead of providing/generating one</li>

</v-click>

<v-click at=5>

<li class="text-blue">State the <code>Image</code> you want to deploy</li>

</v-click>

</ul>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:5,srcSequence:"./slides/practical/section-05/demo.md"},index:52,start:93,end:192,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",raw:`---
layout: two-cols
transition: fade-out
clicks: 5
---

# Demo

Let's deploy a workshop guestbook!

<br />

<br />

\`\`\`bash
acorn run \\
--name=demo \\
--target-namespace=guestbook \\
--link=ext-db:postgres \\
--secret=db-credentials:db-auth \\
index.docker.io/dbodky/guestbook-acorn:v1.0.0
\`\`\`

<v-click>

<div class="bg-red absolute left-2 top-43 h-4 w-21 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-green absolute left-2 top-47.5 h-4 w-51.5 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-pink absolute left-2 top-52 h-4 w-40 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-purple absolute left-2 top-56.5 h-4 w-56.5 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-blue absolute left-2 top-61.5 h-4 w-82 opacity-50 rounded-md"></div>

</v-click>

::right::

<br />

<br />

<br />

<br />

<br />

<ul>

<v-click at=1>

<li class="text-red">Define the name of the Acorn <code>App</code></li>

</v-click>

<v-click at=2>

<li class="text-green">Define the <code>Namespace</code> the <code>App</code> will live in</li>

</v-click>

<v-click at=3>

<li class="text-pink">Link an external Database instead of the <code>postgres</code> service defined in our Acorn</li>

</v-click>

<v-click at=4>

<li class="text-purple">Reference a <code>Secret</code> with our database's credentials instead of providing/generating one</li>

</v-click>

<v-click at=5>

<li class="text-blue">State the <code>Image</code> you want to deploy</li>

</v-click>

</ul>
`,title:"Demo",level:1,content:`# Demo

Let's deploy a workshop guestbook!

<br />

<br />

\`\`\`bash
acorn run \\
--name=demo \\
--target-namespace=guestbook \\
--link=ext-db:postgres \\
--secret=db-credentials:db-auth \\
index.docker.io/dbodky/guestbook-acorn:v1.0.0
\`\`\`

<v-click>

<div class="bg-red absolute left-2 top-43 h-4 w-21 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-green absolute left-2 top-47.5 h-4 w-51.5 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-pink absolute left-2 top-52 h-4 w-40 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-purple absolute left-2 top-56.5 h-4 w-56.5 opacity-50 rounded-md"></div>

</v-click>

<v-click>

<div class="bg-blue absolute left-2 top-61.5 h-4 w-82 opacity-50 rounded-md"></div>

</v-click>

::right::

<br />

<br />

<br />

<br />

<br />

<ul>

<v-click at=1>

<li class="text-red">Define the name of the Acorn <code>App</code></li>

</v-click>

<v-click at=2>

<li class="text-green">Define the <code>Namespace</code> the <code>App</code> will live in</li>

</v-click>

<v-click at=3>

<li class="text-pink">Link an external Database instead of the <code>postgres</code> service defined in our Acorn</li>

</v-click>

<v-click at=4>

<li class="text-purple">Reference a <code>Secret</code> with our database's credentials instead of providing/generating one</li>

</v-click>

<v-click at=5>

<li class="text-blue">State the <code>Image</code> you want to deploy</li>

</v-click>

</ul>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:5},index:1,start:93,end:192},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",notesHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:u7,meta:{layout:"center",class:"text-center",transition:"fade-out",srcSequence:"./slides/practical/section-05/demo.md",slide:{raw:`---
layout: center
class: text-center
transition: fade-out
---

# 🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!
`,title:"🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!",level:1,content:"# 🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!",frontmatter:{layout:"center",class:"text-center",transition:"fade-out",srcSequence:"./slides/practical/section-05/demo.md"},index:53,start:192,end:200,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",raw:`---
layout: center
class: text-center
transition: fade-out
---

# 🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!
`,title:"🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!",level:1,content:"# 🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!",frontmatter:{layout:"center",class:"text-center",transition:"fade-out"},index:2,start:192,end:200},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",notesHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:b7,meta:{layout:"default",transition:"fade-out",title:"Summing it up",srcSequence:"./slides/end/pros.md",slide:{raw:null,title:"Summing it up",level:1,content:`# Summing it up

Acorn can be helpful if ...

<br />

<v-click>

 <span class="text-2xl">🏎️</span>  your team needs to get started with Kubernetes fast

<br />

</v-click>

<v-click>

<span class="text-2xl">🪞</span> dev, test, and production environments shall 'feel the same'

<br />

</v-click>

<v-click>

<span class="text-2xl">📑</span> different runtime profiles need to be deployed

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",title:"Summing it up",srcSequence:"./slides/end/pros.md"},index:54,start:0,end:33,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/pros.md",raw:`---
layout: default
transition: fade-out
---

# Summing it up

Acorn can be helpful if ...

<br />

<v-click>

 <span class="text-2xl">🏎️</span>  your team needs to get started with Kubernetes fast

<br />

</v-click>

<v-click>

<span class="text-2xl">🪞</span> dev, test, and production environments shall 'feel the same'

<br />

</v-click>

<v-click>

<span class="text-2xl">📑</span> different runtime profiles need to be deployed

</v-click>
`,title:"Summing it up",level:1,content:`# Summing it up

Acorn can be helpful if ...

<br />

<v-click>

 <span class="text-2xl">🏎️</span>  your team needs to get started with Kubernetes fast

<br />

</v-click>

<v-click>

<span class="text-2xl">🪞</span> dev, test, and production environments shall 'feel the same'

<br />

</v-click>

<v-click>

<span class="text-2xl">📑</span> different runtime profiles need to be deployed

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",title:"Summing it up"},index:0,start:0,end:33},inline:{raw:`---
src: ./slides/end/pros.md
---
`,content:"",frontmatter:{},index:35,start:288,end:292},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/pros.md",notesHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:$7,meta:{layout:"default",transition:"fade-out",title:"Summing it up",srcSequence:"./slides/end/cons.md",slide:{raw:null,title:"Summing it up",level:1,content:`# Summing it up

Acorn still lacks...

<br />

<v-click>

<span class="text-2xl">🦄</span> CRD support

<br />

</v-click>

<v-click>

<span class="text-2xl">⚖️</span> autoscaling configuration

<br />

</v-click>

<v-click>

<span class="text-2xl">🚨</span> (Network) policies

<br />

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",title:"Summing it up",srcSequence:"./slides/end/cons.md"},index:55,start:0,end:35,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/cons.md",raw:`---
layout: default
transition: fade-out
---

# Summing it up

Acorn still lacks...

<br />

<v-click>

<span class="text-2xl">🦄</span> CRD support

<br />

</v-click>

<v-click>

<span class="text-2xl">⚖️</span> autoscaling configuration

<br />

</v-click>

<v-click>

<span class="text-2xl">🚨</span> (Network) policies

<br />

</v-click>
`,title:"Summing it up",level:1,content:`# Summing it up

Acorn still lacks...

<br />

<v-click>

<span class="text-2xl">🦄</span> CRD support

<br />

</v-click>

<v-click>

<span class="text-2xl">⚖️</span> autoscaling configuration

<br />

</v-click>

<v-click>

<span class="text-2xl">🚨</span> (Network) policies

<br />

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",title:"Summing it up"},index:0,start:0,end:35},inline:{raw:`---
src: ./slides/end/cons.md
---

`,content:"",frontmatter:{},index:36,start:292,end:297},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/cons.md",notesHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:I7,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 🎬 Cut!

Thanks for attending!
`,title:"🎬 Cut!",level:1,content:`# 🎬 Cut!

Thanks for attending!`,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:56,start:297,end:307,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:q7,meta:{layout:"image-right",transition:"fade-out",image:"/thankyou.jpg",title:"Acknowledgements",srcSequence:"./slides/end/thanks.md",slide:{raw:null,title:"Acknowledgements",level:1,content:`# Acknowledgements

thanks for making this workshop possible

<br />

- [Excalidraw](https://excalidraw.com)

- [Sli.dev](https://sli.dev)

- [CIVO](https://civo.com)

- YOU!

<br />

<br />

Feel free to leave feedback at [guestbook.dbodky.me](https://guestbook.dbodky.me)!

<div class="abs-br text-2 pr-1 text-gray-400">Photo by Howie R on Unsplash</div>`,frontmatter:{layout:"image-right",transition:"fade-out",image:"/thankyou.jpg",title:"Acknowledgements",srcSequence:"./slides/end/thanks.md"},index:57,start:0,end:28,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/thanks.md",raw:`---
layout: image-right
transition: fade-out
image: /thankyou.jpg
---

# Acknowledgements

thanks for making this workshop possible

<br />

- [Excalidraw](https://excalidraw.com)

- [Sli.dev](https://sli.dev)

- [CIVO](https://civo.com)

- YOU!

<br />

<br />

Feel free to leave feedback at [guestbook.dbodky.me](https://guestbook.dbodky.me)!

<div class="abs-br text-2 pr-1 text-gray-400">Photo by Howie R on Unsplash</div>
`,title:"Acknowledgements",level:1,content:`# Acknowledgements

thanks for making this workshop possible

<br />

- [Excalidraw](https://excalidraw.com)

- [Sli.dev](https://sli.dev)

- [CIVO](https://civo.com)

- YOU!

<br />

<br />

Feel free to leave feedback at [guestbook.dbodky.me](https://guestbook.dbodky.me)!

<div class="abs-br text-2 pr-1 text-gray-400">Photo by Howie R on Unsplash</div>`,frontmatter:{layout:"image-right",transition:"fade-out",image:"/thankyou.jpg",title:"Acknowledgements"},index:0,start:0,end:28},inline:{raw:`---
src: ./slides/end/thanks.md
---
`,content:"",frontmatter:{},index:38,start:307,end:311},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/thanks.md",notesHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:Z7,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# ❓ Questions

<div class="abs-b pb-16 text-4 text-gray-400">

Feel free to leave feedback at [guestbook.dbodky.me](https://guestbook.dbodky.me)

</div>`,title:"❓ Questions",level:1,content:`# ❓ Questions

<div class="abs-b pb-16 text-4 text-gray-400">

Feel free to leave feedback at [guestbook.dbodky.me](https://guestbook.dbodky.me)

</div>`,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:58,start:311,end:324,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides-static.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",component:pB,meta:{layout:"end"}}],js=J7,Uo=[{name:"play",path:"/",component:TA,children:[...js]},{name:"print",path:"/print",component:rB},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];Uo.push({path:"/presenter/print",component:()=>et(()=>import("./PresenterPrint-4f68736f.js"),["assets/PresenterPrint-4f68736f.js","assets/NoteViewer-fee47a8d.js","assets/index-1261fb52.js"])}),Uo.push({name:"presenter",path:"/presenter/:no",component:()=>et(()=>import("./Presenter-1f5f6c62.js"),["assets/Presenter-1f5f6c62.js","assets/NoteViewer-fee47a8d.js","assets/DrawingControls-bf165a66.js","assets/index-1261fb52.js","assets/Presenter-9e4d7baf.css"]),beforeEnter:e=>{if(!Mt.remote||Mt.remote===e.query.password)return!0;if(Mt.remote&&e.query.password===void 0){const n=prompt("Enter password");if(Mt.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}}),Uo.push({path:"/presenter",redirect:{path:"/presenter/1"}});const En=Lm({history:Nh("/"),routes:Uo});function X7(e,n,{mode:t="replace"}={}){return T({get(){const l=En.currentRoute.value.query[e];return l==null?n??null:Array.isArray(l)?l.filter(Boolean):l},set(l){Ie(()=>{En[v(t)]({query:{...En.currentRoute.value.query,[e]:l}})})}})}const cd=as(0);Ie(()=>{En.afterEach(async()=>{await Ie(),cd.value+=1})});const id=as(0),Ze=T(()=>En.currentRoute.value),kt=T(()=>Ze.value.query.print!==void 0),sE=T(()=>Ze.value.query.print==="clicks"),tn=T(()=>Ze.value.query.embedded!==void 0),Re=T(()=>Ze.value.path.startsWith("/presenter")),pd=T(()=>kt.value&&!sE.value),ha=T(()=>Ze.value.query.password),eE=T(()=>!Re.value&&(!Os.remote||ha.value===Os.remote)),jc=X7("clicks","0"),dd=T(()=>js.length-1),nE=T(()=>Ze.value.path),Qs=T(()=>parseInt(nE.value.split(/\//g).slice(-1)[0])||1);T(()=>Xa(Qs.value));const ie=T(()=>js.find(e=>e.path===`${Qs.value}`));T(()=>{var e,n,t;return(t=(n=(e=ie.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:t.id});T(()=>{var e,n;return((n=(e=ie.value)==null?void 0:e.meta)==null?void 0:n.layout)||(Qs.value===1?"cover":"default")});const Pl=T(()=>js.find(e=>e.path===`${Math.min(js.length,Qs.value+1)}`)),tE=T(()=>js.find(e=>e.path===`${Math.max(1,Qs.value-1)}`)),oE=T(()=>{var e,n;return cd.value,((n=(e=ie.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),nt=T({get(){if(pd.value)return 99999;let e=+(jc.value||0);return isNaN(e)&&(e=0),e},set(e){jc.value=e.toString()}}),Qo=T(()=>{var e,n;return+(((n=(e=ie.value)==null?void 0:e.meta)==null?void 0:n.clicks)??oE.value.length)}),lE=T(()=>Qs.value<js.length-1||nt.value<Qo.value),aE=T(()=>Qs.value>1||nt.value>0),rE=T(()=>js.filter(e=>{var n,t;return(t=(n=e.meta)==null?void 0:n.slide)==null?void 0:t.title}).reduce((e,n)=>(sr(e,n),e),[])),cE=T(()=>er(rE.value,ie.value));T(()=>nr(cE.value));const iE=T(()=>yE(id.value,ie.value,tE.value));Ks(ie,(e,n)=>{id.value=Number(e==null?void 0:e.path)-Number(n==null?void 0:n.path)});function Yn(){Qo.value<=nt.value?Zo():nt.value+=1}async function Qn(){nt.value<=0?await Jo():nt.value-=1}function Xa(e){return Re.value?`/presenter/${e}`:`/${e}`}function Zo(){const e=Math.min(js.length,Qs.value+1);return Et(e)}async function Jo(e=!0){const n=Math.max(1,Qs.value-1);await Et(n),e&&Qo.value&&En.replace({query:{...Ze.value.query,clicks:Qo.value}})}function Et(e,n){return En.push({path:Xa(e),query:{...Ze.value.query,clicks:n}})}function pE(e){const n=as(0),{direction:t,distanceX:l,distanceY:a}=th(e,{onSwipeStart(r){r.pointerType==="touch"&&(co.value||(n.value=sa()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||co.value)return;const c=Math.abs(l.value),i=Math.abs(a.value);c/window.innerWidth>.3||c>100?t.value===an.LEFT?Yn():Qn():(i/window.innerHeight>.4||i>200)&&(t.value===an.DOWN?Jo():Zo())}})}async function qc(){const{saveAs:e}=await et(()=>import("./FileSaver.min-17c85779.js").then(n=>n.F),[]);e(mp(Os.download)?Os.download:Os.exportFilename?`${Os.exportFilename}.pdf`:"/slidev-exported.pdf",`${Os.title}.pdf`)}async function NE(e){var n,t;if(e==null){const l=(t=(n=ie.value)==null?void 0:n.meta)==null?void 0:t.slide;if(!(l!=null&&l.filepath))return!1;e=`${l.filepath}:${l.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function sr(e,n,t=1){var a,r,c,i,p;const l=(r=(a=n.meta)==null?void 0:a.slide)==null?void 0:r.level;l&&l>t&&e.length>0?sr(e[e.length-1].children,n,t+1):e.push({children:[],level:t,path:n.path,hideInToc:Boolean((c=n.meta)==null?void 0:c.hideInToc),title:(p=(i=n.meta)==null?void 0:i.slide)==null?void 0:p.title})}function er(e,n,t=!1,l){return e.map(a=>{const r={...a,active:a.path===(n==null?void 0:n.path),hasActiveParent:t};return r.children.length>0&&(r.children=er(r.children,n,r.active||r.hasActiveParent,r)),l&&(r.active||r.activeParent)&&(l.activeParent=!0),r})}function nr(e,n=1){return e.filter(t=>!t.hideInToc).map(t=>({...t,children:nr(t.children,n+1)}))}const dE={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function uE(e,n=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let t=e.name.includes("|")?e.name:dE[e.name]||e.name;if(t.includes("|")){const[l,a]=t.split("|").map(r=>r.trim());t=n?a:l}if(t)return{...e,name:t}}function yE(e,n,t){var a,r;let l=e>0?(a=t==null?void 0:t.meta)==null?void 0:a.transition:(r=n==null?void 0:n.meta)==null?void 0:r.transition;return l||(l=Os.transition),uE(l,e<0)}export{bE as $,as as A,FE as B,xE as C,Ts as D,$E as E,Ss as F,we as G,OE as H,Sd as I,xd as J,ho as K,Ie as L,Ra as M,ys as N,xn as O,Ca as P,Je as Q,fE as R,pd as S,gE as T,O8 as U,$8 as V,up as W,dp as X,pp as Y,S8 as Z,L as _,SE as a,dl as a$,vE as a0,CE as a1,BE as a2,DE as a3,Z_ as a4,J_ as a5,qc as a6,Yn as a7,Zo as a8,NE as a9,Zp as aA,ce as aB,j5 as aC,Qo as aD,lE as aE,Pl as aF,wl as aG,co as aH,Tl as aI,xA as aJ,qa as aK,za as aL,hE as aM,mE as aN,nA as aO,o3 as aP,Le as aQ,TE as aR,le as aS,Ht as aT,Gn as aU,qe as aV,ua as aW,B5 as aX,D5 as aY,b5 as aZ,C5 as a_,Qn as aa,Jo as ab,Ze as ac,_E as ad,wt as ae,Es as af,RE as ag,pu as ah,s as ai,Zn as aj,mo as ak,Zs as al,js as am,dd as an,o as ao,_s as ap,Ga as aq,Ms as ar,UE as as,ie as at,H as au,$5 as av,pE as aw,PE as ax,IE as ay,_ as az,Qs as b,ip as b0,HE as b1,ue as b2,wo as b3,N3 as b4,yp as b5,k5 as b6,Os as c,nt as d,Re as e,$s as f,Xa as g,R as h,kE as i,N as j,Hi as k,Z as l,C as m,b as n,EE as o,wE as p,se as q,En as r,st as s,T as t,AE as u,Or as v,Ks as w,Pa as x,v as y,Ad as z};
