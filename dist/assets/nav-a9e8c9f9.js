function On(e,n){const s=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return n?l=>!!s[l.toLowerCase()]:l=>!!s[l]}function ze(e){if(ae(e)){const n={};for(let s=0;s<e.length;s++){const o=e[s],l=Me(o)?wd(o):ze(o);if(l)for(const r in l)n[r]=l[r]}return n}else{if(Me(e))return e;if(Se(e))return e}}const bd=/;(?![^(]*\))/g,Ad=/:([^]+)/,kd=/\/\*.*?\*\//gs;function wd(e){const n={};return e.replace(kd,"").split(bd).forEach(s=>{if(s){const o=s.split(Ad);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Ne(e){let n="";if(Me(e))n=e;else if(ae(e))for(let s=0;s<e.length;s++){const o=Ne(e[s]);o&&(n+=o+" ")}else if(Se(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function me(e){if(!e)return null;let{class:n,style:s}=e;return n&&!Me(n)&&(e.class=Ne(n)),s&&(e.style=ze(s)),e}const Dd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Cd="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",xd=On(Dd),Bd=On(Cd),Ed="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sd=On(Ed);function ec(e){return!!e||e===""}const Xn=e=>Me(e)?e:e==null?"":ae(e)||Se(e)&&(e.toString===oc||!ue(e.toString))?JSON.stringify(e,tc,2):String(e),tc=(e,n)=>n&&n.__v_isRef?tc(e,n.value):Kn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:sc(n)?{[`Set(${n.size})`]:[...n.values()]}:Se(n)&&!ae(n)&&!lc(n)?String(n):n,Ie=Object.freeze({}),vs=Object.freeze([]),ft=()=>{},nc=()=>!1,$d=/^on[^a-z]/,mo=e=>$d.test(e),Ho=e=>e.startsWith("onUpdate:"),He=Object.assign,vr=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},Od=Object.prototype.hasOwnProperty,ve=(e,n)=>Od.call(e,n),ae=Array.isArray,Kn=e=>sl(e)==="[object Map]",sc=e=>sl(e)==="[object Set]",ue=e=>typeof e=="function",Me=e=>typeof e=="string",br=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",Ar=e=>Se(e)&&ue(e.then)&&ue(e.catch),oc=Object.prototype.toString,sl=e=>oc.call(e),kr=e=>sl(e).slice(8,-1),lc=e=>sl(e)==="[object Object]",wr=e=>Me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,To=On(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Td=On("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),ol=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},Pd=/-(\w)/g,Gt=ol(e=>e.replace(Pd,(n,s)=>s?s.toUpperCase():"")),Id=/\B([A-Z])/g,cn=ol(e=>e.replace(Id,"-$1").toLowerCase()),es=ol(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rn=ol(e=>e?`on${es(e)}`:""),Xs=(e,n)=>!Object.is(e,n),bn=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},Vo=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},eo=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let ua;const rc=()=>ua||(ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jo(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let yt;class ac{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=yt,!n&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}run(n){if(this.active){const s=yt;try{return yt=this,n()}finally{yt=s}}else jo("cannot run an inactive effect scope.")}on(){yt=this}off(){yt=this.parent}stop(n){if(this.active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this.active=!1}}}function _2(e){return new ac(e)}function Fd(e,n=yt){n&&n.active&&n.effects.push(e)}function Rd(){return yt}function Ld(e){yt?yt.cleanups.push(e):jo("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Dr=e=>{const n=new Set(e);return n.w=0,n.n=0,n},ic=e=>(e.w&Bn)>0,cc=e=>(e.n&Bn)>0,Md=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Bn},Nd=e=>{const{deps:n}=e;if(n.length){let s=0;for(let o=0;o<n.length;o++){const l=n[o];ic(l)&&!cc(l)?l.delete(e):n[s++]=l,l.w&=~Bn,l.n&=~Bn}n.length=s}},Ml=new WeakMap;let Vs=0,Bn=1;const Nl=30;let it;const Wn=Symbol("iterate"),Ul=Symbol("Map key iterate");class Cr{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Fd(this,o)}run(){if(!this.active)return this.fn();let n=it,s=kn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=it,it=this,kn=!0,Bn=1<<++Vs,Vs<=Nl?Md(this):da(this),this.fn()}finally{Vs<=Nl&&Nd(this),Bn=1<<--Vs,it=this.parent,kn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){it===this?this.deferStop=!0:this.active&&(da(this),this.onStop&&this.onStop(),this.active=!1)}}function da(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let kn=!0;const uc=[];function ls(){uc.push(kn),kn=!1}function rs(){const e=uc.pop();kn=e===void 0?!0:e}function vt(e,n,s){if(kn&&it){let o=Ml.get(e);o||Ml.set(e,o=new Map);let l=o.get(s);l||o.set(s,l=Dr()),dc(l,{effect:it,target:e,type:n,key:s})}}function dc(e,n){let s=!1;Vs<=Nl?cc(e)||(e.n|=Bn,s=!ic(e)):s=!e.has(it),s&&(e.add(it),it.deps.push(e),it.onTrack&&it.onTrack(Object.assign({effect:it},n)))}function un(e,n,s,o,l,r){const a=Ml.get(e);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&ae(e)){const u=eo(o);a.forEach((d,p)=>{(p==="length"||p>=u)&&i.push(d)})}else switch(s!==void 0&&i.push(a.get(s)),n){case"add":ae(e)?wr(s)&&i.push(a.get("length")):(i.push(a.get(Wn)),Kn(e)&&i.push(a.get(Ul)));break;case"delete":ae(e)||(i.push(a.get(Wn)),Kn(e)&&i.push(a.get(Ul)));break;case"set":Kn(e)&&i.push(a.get(Wn));break}const c={target:e,type:n,key:s,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&Hl(i[0],c);else{const u=[];for(const d of i)d&&u.push(...d);Hl(Dr(u),c)}}function Hl(e,n){const s=ae(e)?e:[...e];for(const o of s)o.computed&&pa(o,n);for(const o of s)o.computed||pa(o,n)}function pa(e,n){(e!==it||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(He({effect:e},n)),e.scheduler?e.scheduler():e.run())}const Ud=On("__proto__,__v_isRef,__isVue"),pc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(br)),Hd=ll(),Vd=ll(!1,!0),jd=ll(!0),Kd=ll(!0,!0),fa=Wd();function Wd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const o=he(this);for(let r=0,a=this.length;r<a;r++)vt(o,"get",r+"");const l=o[n](...s);return l===-1||l===!1?o[n](...s.map(he)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){ls();const o=he(this)[n].apply(this,s);return rs(),o}}),e}function ll(e=!1,n=!1){return function(o,l,r){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&r===(e?n?bc:vc:n?_c:gc).get(o))return o;const a=ae(o);if(!e&&a&&ve(fa,l))return Reflect.get(fa,l,r);const i=Reflect.get(o,l,r);return(br(l)?pc.has(l):Ud(l))||(e||vt(o,"get",l),n)?i:Ce(i)?a&&wr(l)?i:i.value:Se(i)?e?Kt(i):Qe(i):i}}const qd=fc(),Gd=fc(!0);function fc(e=!1){return function(s,o,l,r){let a=s[o];if(En(a)&&Ce(a)&&!Ce(l))return!1;if(!e&&(!Ko(l)&&!En(l)&&(a=he(a),l=he(l)),!ae(s)&&Ce(a)&&!Ce(l)))return a.value=l,!0;const i=ae(s)&&wr(o)?Number(o)<s.length:ve(s,o),c=Reflect.set(s,o,l,r);return s===he(r)&&(i?Xs(l,a)&&un(s,"set",o,l,a):un(s,"add",o,l)),c}}function zd(e,n){const s=ve(e,n),o=e[n],l=Reflect.deleteProperty(e,n);return l&&s&&un(e,"delete",n,void 0,o),l}function Yd(e,n){const s=Reflect.has(e,n);return(!br(n)||!pc.has(n))&&vt(e,"has",n),s}function Zd(e){return vt(e,"iterate",ae(e)?"length":Wn),Reflect.ownKeys(e)}const hc={get:Hd,set:qd,deleteProperty:zd,has:Yd,ownKeys:Zd},mc={get:jd,set(e,n){return jo(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0},deleteProperty(e,n){return jo(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}},Jd=He({},hc,{get:Vd,set:Gd}),Qd=He({},mc,{get:Kd}),xr=e=>e,rl=e=>Reflect.getPrototypeOf(e);function ko(e,n,s=!1,o=!1){e=e.__v_raw;const l=he(e),r=he(n);s||(n!==r&&vt(l,"get",n),vt(l,"get",r));const{has:a}=rl(l),i=o?xr:s?Er:to;if(a.call(l,n))return i(e.get(n));if(a.call(l,r))return i(e.get(r));e!==l&&e.get(n)}function wo(e,n=!1){const s=this.__v_raw,o=he(s),l=he(e);return n||(e!==l&&vt(o,"has",e),vt(o,"has",l)),e===l?s.has(e):s.has(e)||s.has(l)}function Do(e,n=!1){return e=e.__v_raw,!n&&vt(he(e),"iterate",Wn),Reflect.get(e,"size",e)}function ha(e){e=he(e);const n=he(this);return rl(n).has.call(n,e)||(n.add(e),un(n,"add",e,e)),this}function ma(e,n){n=he(n);const s=he(this),{has:o,get:l}=rl(s);let r=o.call(s,e);r?yc(s,o,e):(e=he(e),r=o.call(s,e));const a=l.call(s,e);return s.set(e,n),r?Xs(n,a)&&un(s,"set",e,n,a):un(s,"add",e,n),this}function ya(e){const n=he(this),{has:s,get:o}=rl(n);let l=s.call(n,e);l?yc(n,s,e):(e=he(e),l=s.call(n,e));const r=o?o.call(n,e):void 0,a=n.delete(e);return l&&un(n,"delete",e,void 0,r),a}function ga(){const e=he(this),n=e.size!==0,s=Kn(e)?new Map(e):new Set(e),o=e.clear();return n&&un(e,"clear",void 0,void 0,s),o}function Co(e,n){return function(o,l){const r=this,a=r.__v_raw,i=he(a),c=n?xr:e?Er:to;return!e&&vt(i,"iterate",Wn),a.forEach((u,d)=>o.call(l,c(u),c(d),r))}}function xo(e,n,s){return function(...o){const l=this.__v_raw,r=he(l),a=Kn(r),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=l[e](...o),d=s?xr:n?Er:to;return!n&&vt(r,"iterate",c?Ul:Wn),{next(){const{value:p,done:h}=u.next();return h?{value:p,done:h}:{value:i?[d(p[0]),d(p[1])]:d(p),done:h}},[Symbol.iterator](){return this}}}}function fn(e){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${es(e)} operation ${s}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Xd(){const e={get(r){return ko(this,r)},get size(){return Do(this)},has:wo,add:ha,set:ma,delete:ya,clear:ga,forEach:Co(!1,!1)},n={get(r){return ko(this,r,!1,!0)},get size(){return Do(this)},has:wo,add:ha,set:ma,delete:ya,clear:ga,forEach:Co(!1,!0)},s={get(r){return ko(this,r,!0)},get size(){return Do(this,!0)},has(r){return wo.call(this,r,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Co(!0,!1)},o={get(r){return ko(this,r,!0,!0)},get size(){return Do(this,!0)},has(r){return wo.call(this,r,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=xo(r,!1,!1),s[r]=xo(r,!0,!1),n[r]=xo(r,!1,!0),o[r]=xo(r,!0,!0)}),[e,s,n,o]}const[ep,tp,np,sp]=Xd();function al(e,n){const s=n?e?sp:np:e?tp:ep;return(o,l,r)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(ve(s,l)&&l in o?s:o,l,r)}const op={get:al(!1,!1)},lp={get:al(!1,!0)},rp={get:al(!0,!1)},ap={get:al(!0,!0)};function yc(e,n,s){const o=he(s);if(o!==s&&n.call(e,o)){const l=kr(e);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const gc=new WeakMap,_c=new WeakMap,vc=new WeakMap,bc=new WeakMap;function ip(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cp(e){return e.__v_skip||!Object.isExtensible(e)?0:ip(kr(e))}function Qe(e){return En(e)?e:il(e,!1,hc,op,gc)}function up(e){return il(e,!1,Jd,lp,_c)}function Kt(e){return il(e,!0,mc,rp,vc)}function gs(e){return il(e,!0,Qd,ap,bc)}function il(e,n,s,o,l){if(!Se(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=l.get(e);if(r)return r;const a=cp(e);if(a===0)return e;const i=new Proxy(e,a===2?o:s);return l.set(e,i),i}function qn(e){return En(e)?qn(e.__v_raw):!!(e&&e.__v_isReactive)}function En(e){return!!(e&&e.__v_isReadonly)}function Ko(e){return!!(e&&e.__v_isShallow)}function Wo(e){return qn(e)||En(e)}function he(e){const n=e&&e.__v_raw;return n?he(n):e}function Br(e){return Vo(e,"__v_skip",!0),e}const to=e=>Se(e)?Qe(e):e,Er=e=>Se(e)?Kt(e):e;function Sr(e){kn&&it&&(e=he(e),dc(e.dep||(e.dep=Dr()),{target:e,type:"get",key:"value"}))}function $r(e,n){e=he(e),e.dep&&Hl(e.dep,{target:e,type:"set",key:"value",newValue:n})}function Ce(e){return!!(e&&e.__v_isRef===!0)}function se(e){return Ac(e,!1)}function zt(e){return Ac(e,!0)}function Ac(e,n){return Ce(e)?e:new dp(e,n)}class dp{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:he(n),this._value=s?n:to(n)}get value(){return Sr(this),this._value}set value(n){const s=this.__v_isShallow||Ko(n)||En(n);n=s?n:he(n),Xs(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:to(n),$r(this,n))}}function A(e){return Ce(e)?e.value:e}const pp={get:(e,n,s)=>A(Reflect.get(e,n,s)),set:(e,n,s,o)=>{const l=e[n];return Ce(l)&&!Ce(s)?(l.value=s,!0):Reflect.set(e,n,s,o)}};function kc(e){return qn(e)?e:new Proxy(e,pp)}class fp{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>Sr(this),()=>$r(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function wc(e){return new fp(e)}function hp(e){Wo(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ae(e)?new Array(e.length):{};for(const s in e)n[s]=yp(e,s);return n}class mp{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function yp(e,n,s){const o=e[n];return Ce(o)?o:new mp(e,n,s)}var Dc;class gp{constructor(n,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Dc]=!1,this._dirty=!0,this.effect=new Cr(n,()=>{this._dirty||(this._dirty=!0,$r(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=he(this);return Sr(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Dc="__v_isReadonly";function _p(e,n,s=!1){let o,l;const r=ue(e);r?(o=e,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,l=e.set);const a=new gp(o,l,r||!l,s);return n&&!s&&(a.effect.onTrack=n.onTrack,a.effect.onTrigger=n.onTrigger),a}const Gn=[];function Po(e){Gn.push(e)}function Io(){Gn.pop()}function I(e,...n){ls();const s=Gn.length?Gn[Gn.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=vp();if(o)an(o,s,11,[e+n.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${_l(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${e}`,...n];l.length&&r.push(`
`,...bp(l)),console.warn(...r)}rs()}function vp(){let e=Gn[Gn.length-1];if(!e)return[];const n=[];for(;e;){const s=n[0];s&&s.vnode===e?s.recurseCount++:n.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return n}function bp(e){const n=[];return e.forEach((s,o)=>{n.push(...o===0?[]:[`
`],...Ap(s))}),n}function Ap({vnode:e,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",o=e.component?e.component.parent==null:!1,l=` at <${_l(e.component,e.type,o)}`,r=">"+s;return e.props?[l,...kp(e.props),r]:[l+r]}function kp(e){const n=[],s=Object.keys(e);return s.slice(0,3).forEach(o=>{n.push(...Cc(o,e[o]))}),s.length>3&&n.push(" ..."),n}function Cc(e,n,s){return Me(n)?(n=JSON.stringify(n),s?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${e}=${n}`]:Ce(n)?(n=Cc(e,he(n.value),!0),s?n:[`${e}=Ref<`,n,">"]):ue(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=he(n),s?n:[`${e}=`,n])}const Or={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function an(e,n,s,o){let l;try{l=o?e(...o):e()}catch(r){cl(r,n,s)}return l}function xt(e,n,s,o){if(ue(e)){const r=an(e,n,s,o);return r&&Ar(r)&&r.catch(a=>{cl(a,n,s)}),r}const l=[];for(let r=0;r<e.length;r++)l.push(xt(e[r],n,s,o));return l}function cl(e,n,s,o=!0){const l=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,i=Or[s];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,i)===!1)return}r=r.parent}const c=n.appContext.config.errorHandler;if(c){an(c,null,10,[e,a,i]);return}}wp(e,s,l,o)}function wp(e,n,s,o=!0){{const l=Or[n];if(s&&Po(s),I(`Unhandled error${l?` during execution of ${l}`:""}`),s&&Io(),o)throw e;console.error(e)}}let no=!1,Vl=!1;const tt=[];let Vt=0;const bs=[];let Ht=null,gn=0;const xc=Promise.resolve();let Tr=null;const Dp=100;function It(e){const n=Tr||xc;return e?n.then(this?e.bind(this):e):n}function Cp(e){let n=Vt+1,s=tt.length;for(;n<s;){const o=n+s>>>1;so(tt[o])<e?n=o+1:s=o}return n}function ul(e){(!tt.length||!tt.includes(e,no&&e.allowRecurse?Vt+1:Vt))&&(e.id==null?tt.push(e):tt.splice(Cp(e.id),0,e),Bc())}function Bc(){!no&&!Vl&&(Vl=!0,Tr=xc.then($c))}function xp(e){const n=tt.indexOf(e);n>Vt&&tt.splice(n,1)}function Ec(e){ae(e)?bs.push(...e):(!Ht||!Ht.includes(e,e.allowRecurse?gn+1:gn))&&bs.push(e),Bc()}function _a(e,n=no?Vt+1:0){for(e=e||new Map;n<tt.length;n++){const s=tt[n];if(s&&s.pre){if(Pr(e,s))continue;tt.splice(n,1),n--,s()}}}function Sc(e){if(bs.length){const n=[...new Set(bs)];if(bs.length=0,Ht){Ht.push(...n);return}for(Ht=n,e=e||new Map,Ht.sort((s,o)=>so(s)-so(o)),gn=0;gn<Ht.length;gn++)Pr(e,Ht[gn])||Ht[gn]();Ht=null,gn=0}}const so=e=>e.id==null?1/0:e.id,Bp=(e,n)=>{const s=so(e)-so(n);if(s===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return s};function $c(e){Vl=!1,no=!0,e=e||new Map,tt.sort(Bp);const n=s=>Pr(e,s);try{for(Vt=0;Vt<tt.length;Vt++){const s=tt[Vt];if(s&&s.active!==!1){if(n(s))continue;an(s,null,14)}}}finally{Vt=0,tt.length=0,Sc(e),no=!1,Tr=null,(tt.length||bs.length)&&$c(e)}}function Pr(e,n){if(!e.has(n))e.set(n,1);else{const s=e.get(n);if(s>Dp){const o=n.ownerInstance,l=o&&ao(o.type);return I(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(n,s+1)}}let wn=!1;const hs=new Set;rc().__VUE_HMR_RUNTIME__={createRecord:bl(Oc),rerender:bl($p),reload:bl(Op)};const ts=new Map;function Ep(e){const n=e.type.__hmrId;let s=ts.get(n);s||(Oc(n,e.type),s=ts.get(n)),s.instances.add(e)}function Sp(e){ts.get(e.type.__hmrId).instances.delete(e)}function Oc(e,n){return ts.has(e)?!1:(ts.set(e,{initialDef:qs(n),instances:new Set}),!0)}function qs(e){return cu(e)?e.__vccOpts:e}function $p(e,n){const s=ts.get(e);s&&(s.initialDef.render=n,[...s.instances].forEach(o=>{n&&(o.render=n,qs(o.type).render=n),o.renderCache=[],wn=!0,o.update(),wn=!1}))}function Op(e,n){const s=ts.get(e);if(!s)return;n=qs(n),va(s.initialDef,n);const o=[...s.instances];for(const l of o){const r=qs(l.type);hs.has(r)||(r!==s.initialDef&&va(r,n),hs.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(hs.add(r),l.ceReload(n.styles),hs.delete(r)):l.parent?ul(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Ec(()=>{for(const l of o)hs.delete(qs(l.type))})}function va(e,n){He(e,n);for(const s in e)s!=="__file"&&!(s in n)&&delete e[s]}function bl(e){return(n,s)=>{try{return e(n,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let jt,js=[],jl=!1;function yo(e,...n){jt?jt.emit(e,...n):jl||js.push({event:e,args:n})}function Tc(e,n){var s,o;jt=e,jt?(jt.enabled=!0,js.forEach(({event:l,args:r})=>jt.emit(l,...r)),js=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Tc(r,n)}),setTimeout(()=>{jt||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,jl=!0,js=[])},3e3)):(jl=!0,js=[])}function Tp(e,n){yo("app:init",e,n,{Fragment:Be,Text:vo,Comment:Ze,Static:Fo})}function Pp(e){yo("app:unmount",e)}const Kl=Ir("component:added"),Pc=Ir("component:updated"),Ip=Ir("component:removed"),Fp=e=>{jt&&typeof jt.cleanupBuffer=="function"&&!jt.cleanupBuffer(e)&&Ip(e)};function Ir(e){return n=>{yo(e,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Rp=Ic("perf:start"),Lp=Ic("perf:end");function Ic(e){return(n,s,o)=>{yo(e,n.appContext.app,n.uid,n,s,o)}}function Mp(e,n,s){yo("component:emit",e.appContext.app,e,n,s)}function Np(e,n,...s){if(e.isUnmounted)return;const o=e.vnode.props||Ie;{const{emitsOptions:d,propsOptions:[p]}=e;if(d)if(!(n in d))(!p||!(Rn(n)in p))&&I(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${Rn(n)}" prop.`);else{const h=d[n];ue(h)&&(h(...s)||I(`Invalid event arguments: event validation failed for event "${n}".`))}}let l=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:h}=o[d]||Ie;h&&(l=s.map(y=>Me(y)?y.trim():y)),p&&(l=s.map(eo))}Mp(e,n,l);{const d=n.toLowerCase();d!==n&&o[Rn(d)]&&I(`Event "${d}" is emitted in component ${_l(e,e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${cn(n)}" instead of "${n}".`)}let i,c=o[i=Rn(n)]||o[i=Rn(Gt(n))];!c&&r&&(c=o[i=Rn(cn(n))]),c&&xt(c,e,6,l);const u=o[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,xt(u,e,6,l)}}function Fc(e,n,s=!1){const o=n.emitsCache,l=o.get(e);if(l!==void 0)return l;const r=e.emits;let a={},i=!1;if(!ue(e)){const c=u=>{const d=Fc(u,n,!0);d&&(i=!0,He(a,d))};!s&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!i?(Se(e)&&o.set(e,null),null):(ae(r)?r.forEach(c=>a[c]=null):He(a,r),Se(e)&&o.set(e,a),a)}function dl(e,n){return!e||!mo(n)?!1:(n=n.slice(2).replace(/Once$/,""),ve(e,n[0].toLowerCase()+n.slice(1))||ve(e,cn(n))||ve(e,n))}let Ge=null,pl=null;function qo(e){const n=Ge;return Ge=e,pl=e&&e.type.__scopeId||null,n}function v2(e){pl=e}function b2(){pl=null}function C(e,n=Ge,s){if(!n||e._n)return e;const o=(...l)=>{o._d&&Pa(-1);const r=qo(n);let a;try{a=e(...l)}finally{qo(r),o._d&&Pa(1)}return Pc(n),a};return o._n=!0,o._c=!0,o._d=!0,o}let Wl=!1;function Go(){Wl=!0}function Al(e){const{type:n,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:u,render:d,renderCache:p,data:h,setupState:y,ctx:g,inheritAttrs:v}=e;let b,B;const D=qo(e);Wl=!1;try{if(s.shapeFlag&4){const V=l||o;b=Ot(d.call(V,V,p,r,y,h,g)),B=c}else{const V=n;c===r&&Go(),b=Ot(V.length>1?V(r,{get attrs(){return Go(),c},slots:i,emit:u}):V(r,null)),B=n.props?c:Hp(c)}}catch(V){zs.length=0,cl(V,e,1),b=S(Ze)}let E=b,$;if(b.patchFlag>0&&b.patchFlag&2048&&([E,$]=Up(b)),B&&v!==!1){const V=Object.keys(B),{shapeFlag:j}=E;if(V.length){if(j&7)a&&V.some(Ho)&&(B=Vp(B,a)),E=Ft(E,B);else if(!Wl&&E.type!==Ze){const N=Object.keys(c),L=[],ee=[];for(let oe=0,ce=N.length;oe<ce;oe++){const q=N[oe];mo(q)?Ho(q)||L.push(q[2].toLowerCase()+q.slice(3)):ee.push(q)}ee.length&&I(`Extraneous non-props attributes (${ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),L.length&&I(`Extraneous non-emits event listeners (${L.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(ba(E)||I("Runtime directive used on component with non-element root node. The directives will not function as intended."),E=Ft(E),E.dirs=E.dirs?E.dirs.concat(s.dirs):s.dirs),s.transition&&(ba(E)||I("Component inside <Transition> renders non-element root node that cannot be animated."),E.transition=s.transition),$?$(E):b=E,qo(D),b}const Up=e=>{const n=e.children,s=e.dynamicChildren,o=Rc(n);if(!o)return[e,void 0];const l=n.indexOf(o),r=s?s.indexOf(o):-1,a=i=>{n[l]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(e.dynamicChildren=[...s,i]))};return[Ot(o),a]};function Rc(e){let n;for(let s=0;s<e.length;s++){const o=e[s];if(Sn(o)){if(o.type!==Ze||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Hp=e=>{let n;for(const s in e)(s==="class"||s==="style"||mo(s))&&((n||(n={}))[s]=e[s]);return n},Vp=(e,n)=>{const s={};for(const o in e)(!Ho(o)||!(o.slice(9)in n))&&(s[o]=e[o]);return s},ba=e=>e.shapeFlag&7||e.type===Ze;function jp(e,n,s){const{props:o,children:l,component:r}=e,{props:a,children:i,patchFlag:c}=n,u=r.emitsOptions;if((l||i)&&wn||n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?Aa(o,a,u):!!a;if(c&8){const d=n.dynamicProps;for(let p=0;p<d.length;p++){const h=d[p];if(a[h]!==o[h]&&!dl(u,h))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?Aa(o,a,u):!0:!!a;return!1}function Aa(e,n,s){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(n[r]!==e[r]&&!dl(s,r))return!0}return!1}function Kp({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const Lc=e=>e.__isSuspense;function Wp(e,n){n&&n.pendingBranch?ae(e)?n.effects.push(...e):n.effects.push(e):Ec(e)}function gt(e,n){if(!qe)I("provide() can only be used inside setup().");else{let s=qe.provides;const o=qe.parent&&qe.parent.provides;o===s&&(s=qe.provides=Object.create(o)),s[e]=n}}function U(e,n,s=!1){const o=qe||Ge;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&e in l)return l[e];if(arguments.length>1)return s&&ue(n)?n.call(o.proxy):n;I(`injection "${String(e)}" not found.`)}else I("inject() can only be used inside setup() or functional components.")}function Ss(e,n){return Fr(e,null,n)}const Bo={};function Ue(e,n,s){return ue(n)||I("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Fr(e,n,s)}function Fr(e,n,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Ie){n||(s!==void 0&&I('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&I('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=$=>{I("Invalid watch source: ",$,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=qe;let u,d=!1,p=!1;if(Ce(e)?(u=()=>e.value,d=Ko(e)):qn(e)?(u=()=>e,o=!0):ae(e)?(p=!0,d=e.some($=>qn($)||Ko($)),u=()=>e.map($=>{if(Ce($))return $.value;if(qn($))return Hn($);if(ue($))return an($,c,2);i($)})):ue(e)?n?u=()=>an(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return h&&h(),xt(e,c,3,[y])}:(u=ft,i(e)),n&&o){const $=u;u=()=>Hn($())}let h,y=$=>{h=D.onStop=()=>{an($,c,4)}},g;if(ro)if(y=ft,n?s&&xt(n,c,3,[u(),p?[]:void 0,y]):u(),l==="sync"){const $=Qf();g=$.__watcherHandles||($.__watcherHandles=[])}else return ft;let v=p?new Array(e.length).fill(Bo):Bo;const b=()=>{if(D.active)if(n){const $=D.run();(o||d||(p?$.some((V,j)=>Xs(V,v[j])):Xs($,v)))&&(h&&h(),xt(n,c,3,[$,v===Bo?void 0:p&&v[0]===Bo?[]:v,y]),v=$)}else D.run()};b.allowRecurse=!!n;let B;l==="sync"?B=b:l==="post"?B=()=>Je(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),B=()=>ul(b));const D=new Cr(u,B);D.onTrack=r,D.onTrigger=a,n?s?b():v=D.run():l==="post"?Je(D.run.bind(D),c&&c.suspense):D.run();const E=()=>{D.stop(),c&&c.scope&&vr(c.scope.effects,D)};return g&&g.push(E),E}function qp(e,n,s){const o=this.proxy,l=Me(e)?e.includes(".")?Mc(o,e):()=>o[e]:e.bind(o,o);let r;ue(n)?r=n:(r=n.handler,s=n);const a=qe;Cs(this);const i=Fr(l,r.bind(o),s);return a?Cs(a):Yn(),i}function Mc(e,n){const s=n.split(".");return()=>{let o=e;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function Hn(e,n){if(!Se(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Ce(e))Hn(e.value,n);else if(ae(e))for(let s=0;s<e.length;s++)Hn(e[s],n);else if(sc(e)||Kn(e))e.forEach(s=>{Hn(s,n)});else if(lc(e))for(const s in e)Hn(e[s],n);return e}function Nc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $s(()=>{e.isMounted=!0}),Mr(()=>{e.isUnmounting=!0}),e}const kt=[Function,Array],Gp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},setup(e,{slots:n}){const s=Jt(),o=Nc();let l;return()=>{const r=n.default&&Rr(n.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){let v=!1;for(const b of r)if(b.type!==Ze){if(v){I("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=b,v=!0}}const i=he(e),{mode:c}=i;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&I(`invalid <transition> mode: ${c}`),o.isLeaving)return kl(a);const u=ka(a);if(!u)return kl(a);const d=oo(u,i,o,s);Ds(u,d);const p=s.subTree,h=p&&ka(p);let y=!1;const{getTransitionKey:g}=u.type;if(g){const v=g();l===void 0?l=v:v!==l&&(l=v,y=!0)}if(h&&h.type!==Ze&&(!Mn(u,h)||y)){const v=oo(h,i,o,s);if(Ds(h,v),c==="out-in")return o.isLeaving=!0,v.afterLeave=()=>{o.isLeaving=!1,s.update.active!==!1&&s.update()},kl(a);c==="in-out"&&u.type!==Ze&&(v.delayLeave=(b,B,D)=>{const E=Uc(o,h);E[String(h.key)]=h,b._leaveCb=()=>{B(),b._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=D})}return a}}},zp=Gp;function Uc(e,n){const{leavingVNodes:s}=e;let o=s.get(n.type);return o||(o=Object.create(null),s.set(n.type,o)),o}function oo(e,n,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:h,onAfterLeave:y,onLeaveCancelled:g,onBeforeAppear:v,onAppear:b,onAfterAppear:B,onAppearCancelled:D}=n,E=String(e.key),$=Uc(s,e),V=(L,ee)=>{L&&xt(L,o,9,ee)},j=(L,ee)=>{const oe=ee[1];V(L,ee),ae(L)?L.every(ce=>ce.length<=1)&&oe():L.length<=1&&oe()},N={mode:r,persisted:a,beforeEnter(L){let ee=i;if(!s.isMounted)if(l)ee=v||i;else return;L._leaveCb&&L._leaveCb(!0);const oe=$[E];oe&&Mn(e,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),V(ee,[L])},enter(L){let ee=c,oe=u,ce=d;if(!s.isMounted)if(l)ee=b||c,oe=B||u,ce=D||d;else return;let q=!1;const be=L._enterCb=Fe=>{q||(q=!0,Fe?V(ce,[L]):V(oe,[L]),N.delayedLeave&&N.delayedLeave(),L._enterCb=void 0)};ee?j(ee,[L,be]):be()},leave(L,ee){const oe=String(e.key);if(L._enterCb&&L._enterCb(!0),s.isUnmounting)return ee();V(p,[L]);let ce=!1;const q=L._leaveCb=be=>{ce||(ce=!0,ee(),be?V(g,[L]):V(y,[L]),L._leaveCb=void 0,$[oe]===e&&delete $[oe])};$[oe]=e,h?j(h,[L,q]):q()},clone(L){return oo(L,n,s,o)}};return N}function kl(e){if(go(e))return e=Ft(e),e.children=null,e}function ka(e){return go(e)?e.children?e.children[0]:void 0:e}function Ds(e,n){e.shapeFlag&6&&e.component?Ds(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Rr(e,n=!1,s){let o=[],l=0;for(let r=0;r<e.length;r++){let a=e[r];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===Be?(a.patchFlag&128&&l++,o=o.concat(Rr(a.children,n,i))):(n||a.type!==Ze)&&o.push(i!=null?Ft(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function $e(e){return ue(e)?{setup:e,name:e.name}:e}const As=e=>!!e.type.__asyncLoader,go=e=>e.type.__isKeepAlive,Yp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=Jt(),o=s.ctx;if(!o.renderer)return()=>{const D=n.default&&n.default();return D&&D.length===1?D[0]:D};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const i=s.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:p}}}=o,h=p("div");o.activate=(D,E,$,V,j)=>{const N=D.component;u(D,E,$,0,i),c(N.vnode,D,E,$,N,i,V,D.slotScopeIds,j),Je(()=>{N.isDeactivated=!1,N.a&&bn(N.a);const L=D.props&&D.props.onVnodeMounted;L&&wt(L,N.parent,D)},i),Kl(N)},o.deactivate=D=>{const E=D.component;u(D,h,null,1,i),Je(()=>{E.da&&bn(E.da);const $=D.props&&D.props.onVnodeUnmounted;$&&wt($,E.parent,D),E.isDeactivated=!0},i),Kl(E)};function y(D){wl(D),d(D,s,i,!0)}function g(D){l.forEach((E,$)=>{const V=ao(E.type);V&&(!D||!D(V))&&v($)})}function v(D){const E=l.get(D);!a||E.type!==a.type?y(E):a&&wl(a),l.delete(D),r.delete(D)}Ue(()=>[e.include,e.exclude],([D,E])=>{D&&g($=>Ks(D,$)),E&&g($=>!Ks(E,$))},{flush:"post",deep:!0});let b=null;const B=()=>{b!=null&&l.set(b,Dl(s.subTree))};return $s(B),Lr(B),Mr(()=>{l.forEach(D=>{const{subTree:E,suspense:$}=s,V=Dl(E);if(D.type===V.type){wl(V);const j=V.component.da;j&&Je(j,$);return}y(D)})}),()=>{if(b=null,!n.default)return null;const D=n.default(),E=D[0];if(D.length>1)return I("KeepAlive should contain exactly one component child."),a=null,D;if(!Sn(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return a=null,E;let $=Dl(E);const V=$.type,j=ao(As($)?$.type.__asyncResolved||{}:V),{include:N,exclude:L,max:ee}=e;if(N&&(!j||!Ks(N,j))||L&&j&&Ks(L,j))return a=$,E;const oe=$.key==null?V:$.key,ce=l.get(oe);return $.el&&($=Ft($),E.shapeFlag&128&&(E.ssContent=$)),b=oe,ce?($.el=ce.el,$.component=ce.component,$.transition&&Ds($,$.transition),$.shapeFlag|=512,r.delete(oe),r.add(oe)):(r.add(oe),ee&&r.size>parseInt(ee,10)&&v(r.values().next().value)),$.shapeFlag|=256,a=$,Lc(E.type)?E:$}}},Hc=Yp;function Ks(e,n){return ae(e)?e.some(s=>Ks(s,n)):Me(e)?e.split(",").includes(n):e.test?e.test(n):!1}function Zp(e,n){Vc(e,"a",n)}function Jp(e,n){Vc(e,"da",n)}function Vc(e,n,s=qe){const o=e.__wdc||(e.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(fl(n,o,s),s){let l=s.parent;for(;l&&l.parent;)go(l.parent.vnode)&&Qp(o,n,s,l),l=l.parent}}function Qp(e,n,s,o){const l=fl(n,e,o,!0);hl(()=>{vr(o[n],l)},s)}function wl(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Dl(e){return e.shapeFlag&128?e.ssContent:e}function fl(e,n,s=qe,o=!1){if(s){const l=s[e]||(s[e]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;ls(),Cs(s);const i=xt(n,s,e,a);return Yn(),rs(),i});return o?l.unshift(r):l.push(r),r}else{const l=Rn(Or[e].replace(/ hook$/,""));I(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const dn=e=>(n,s=qe)=>(!ro||e==="sp")&&fl(e,(...o)=>n(...o),s),Xp=dn("bm"),$s=dn("m"),ef=dn("bu"),Lr=dn("u"),Mr=dn("bum"),hl=dn("um"),tf=dn("sp"),nf=dn("rtg"),sf=dn("rtc");function of(e,n=qe){fl("ec",e,n)}function jc(e){Td(e)&&I("Do not use built-in directive ids as custom directive id: "+e)}function ml(e,n){const s=Ge;if(s===null)return I("withDirectives can only be used inside render functions."),e;const o=gl(s)||s.proxy,l=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[a,i,c,u=Ie]=n[r];a&&(ue(a)&&(a={mounted:a,updated:a}),a.deep&&Hn(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u}))}return e}function Pn(e,n,s,o){const l=e.dirs,r=n&&n.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(ls(),xt(c,s,8,[e.el,i,e,n]),rs())}}const ql="components",lf="directives";function Kc(e,n){return Wc(ql,e,!0,n)||e}const rf=Symbol();function wa(e){return Wc(lf,e)}function Wc(e,n,s=!0,o=!1){const l=Ge||qe;if(l){const r=l.type;if(e===ql){const i=ao(r,!1);if(i&&(i===n||i===Gt(n)||i===es(Gt(n))))return r}const a=Da(l[e]||r[e],n)||Da(l.appContext[e],n);if(!a&&o)return r;if(s&&!a){const i=e===ql?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";I(`Failed to resolve ${e.slice(0,-1)}: ${n}${i}`)}return a}else I(`resolve${es(e.slice(0,-1))} can only be used in render() or setup().`)}function Da(e,n){return e&&(e[n]||e[Gt(n)]||e[es(Gt(n))])}function _o(e,n,s,o){let l;const r=s&&s[o];if(ae(e)||Me(e)){l=new Array(e.length);for(let a=0,i=e.length;a<i;a++)l[a]=n(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){Number.isInteger(e)||I(`The v-for range expect an integer value but got ${e}.`),l=new Array(e);for(let a=0;a<e;a++)l[a]=n(a+1,a,void 0,r&&r[a])}else if(Se(e))if(e[Symbol.iterator])l=Array.from(e,(a,i)=>n(a,i,void 0,r&&r[i]));else{const a=Object.keys(e);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];l[i]=n(e[u],u,i,r&&r[i])}}else l=[];return s&&(s[o]=l),l}function st(e,n,s={},o,l){if(Ge.isCE||Ge.parent&&As(Ge.parent)&&Ge.parent.isCE)return n!=="default"&&(s.name=n),S("slot",s,o&&o());let r=e[n];r&&r.length>1&&(I("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),k();const a=r&&qc(r(s)),i=G(Be,{key:s.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function qc(e){return e.some(n=>Sn(n)?!(n.type===Ze||n.type===Be&&!qc(n.children)):!0)?e:null}const Gl=e=>e?ru(e)?gl(e)||e.proxy:Gl(e.parent):null,zn=He(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>gs(e.props),$attrs:e=>gs(e.attrs),$slots:e=>gs(e.slots),$refs:e=>gs(e.refs),$parent:e=>Gl(e.parent),$root:e=>Gl(e.root),$emit:e=>e.emit,$options:e=>Ur(e),$forceUpdate:e=>e.f||(e.f=()=>ul(e.update)),$nextTick:e=>e.n||(e.n=It.bind(e.proxy)),$watch:e=>qp.bind(e)}),Nr=e=>e==="_"||e==="$",Cl=(e,n)=>e!==Ie&&!e.__isScriptSetup&&ve(e,n),Gc={get({_:e},n){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=e;if(n==="__isVue")return!0;let u;if(n[0]!=="$"){const y=a[n];if(y!==void 0)switch(y){case 1:return o[n];case 2:return l[n];case 4:return s[n];case 3:return r[n]}else{if(Cl(o,n))return a[n]=1,o[n];if(l!==Ie&&ve(l,n))return a[n]=2,l[n];if((u=e.propsOptions[0])&&ve(u,n))return a[n]=3,r[n];if(s!==Ie&&ve(s,n))return a[n]=4,s[n];zl&&(a[n]=0)}}const d=zn[n];let p,h;if(d)return n==="$attrs"&&(vt(e,"get",n),Go()),d(e);if((p=i.__cssModules)&&(p=p[n]))return p;if(s!==Ie&&ve(s,n))return a[n]=4,s[n];if(h=c.config.globalProperties,ve(h,n))return h[n];Ge&&(!Me(n)||n.indexOf("__v")!==0)&&(l!==Ie&&Nr(n[0])&&ve(l,n)?I(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ge&&I(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:e},n,s){const{data:o,setupState:l,ctx:r}=e;return Cl(l,n)?(l[n]=s,!0):l.__isScriptSetup&&ve(l,n)?(I(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):o!==Ie&&ve(o,n)?(o[n]=s,!0):ve(e.props,n)?(I(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?(I(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in e.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:s}):r[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!s[a]||e!==Ie&&ve(e,a)||Cl(n,a)||(i=r[0])&&ve(i,a)||ve(o,a)||ve(zn,a)||ve(l.config.globalProperties,a)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:ve(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};Gc.ownKeys=e=>(I("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function af(e){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(zn).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>zn[s](e),set:ft})}),n}function cf(e){const{ctx:n,propsOptions:[s]}=e;s&&Object.keys(s).forEach(o=>{Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:ft})})}function uf(e){const{ctx:n,setupState:s}=e;Object.keys(he(s)).forEach(o=>{if(!s.__isScriptSetup){if(Nr(o[0])){I(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:ft})}})}function df(){const e=Object.create(null);return(n,s)=>{e[s]?I(`${n} property "${s}" is already defined in ${e[s]}.`):e[s]=n}}let zl=!0;function pf(e){const n=Ur(e),s=e.proxy,o=e.ctx;zl=!1,n.beforeCreate&&Ca(n.beforeCreate,e,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:u,created:d,beforeMount:p,mounted:h,beforeUpdate:y,updated:g,activated:v,deactivated:b,beforeDestroy:B,beforeUnmount:D,destroyed:E,unmounted:$,render:V,renderTracked:j,renderTriggered:N,errorCaptured:L,serverPrefetch:ee,expose:oe,inheritAttrs:ce,components:q,directives:be,filters:Fe}=n,De=df();{const[J]=e.propsOptions;if(J)for(const re in J)De("Props",re)}if(u&&ff(u,o,De,e.appContext.config.unwrapInjectedRef),a)for(const J in a){const re=a[J];ue(re)?(Object.defineProperty(o,J,{value:re.bind(s),configurable:!0,enumerable:!0,writable:!0}),De("Methods",J)):I(`Method "${J}" has type "${typeof re}" in the component definition. Did you reference the function correctly?`)}if(l){ue(l)||I("The data option must be a function. Plain object usage is no longer supported.");const J=l.call(s,s);if(Ar(J)&&I("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Se(J))I("data() should return an object.");else{e.data=Qe(J);for(const re in J)De("Data",re),Nr(re[0])||Object.defineProperty(o,re,{configurable:!0,enumerable:!0,get:()=>J[re],set:ft})}}if(zl=!0,r)for(const J in r){const re=r[J],ye=ue(re)?re.bind(s,s):ue(re.get)?re.get.bind(s,s):ft;ye===ft&&I(`Computed property "${J}" has no getter.`);const Te=!ue(re)&&ue(re.set)?re.set.bind(s):()=>{I(`Write operation failed: computed property "${J}" is readonly.`)},ht=O({get:ye,set:Te});Object.defineProperty(o,J,{enumerable:!0,configurable:!0,get:()=>ht.value,set:et=>ht.value=et}),De("Computed",J)}if(i)for(const J in i)zc(i[J],o,s,J);if(c){const J=ue(c)?c.call(s):c;Reflect.ownKeys(J).forEach(re=>{gt(re,J[re])})}d&&Ca(d,e,"c");function Re(J,re){ae(re)?re.forEach(ye=>J(ye.bind(s))):re&&J(re.bind(s))}if(Re(Xp,p),Re($s,h),Re(ef,y),Re(Lr,g),Re(Zp,v),Re(Jp,b),Re(of,L),Re(sf,j),Re(nf,N),Re(Mr,D),Re(hl,$),Re(tf,ee),ae(oe))if(oe.length){const J=e.exposed||(e.exposed={});oe.forEach(re=>{Object.defineProperty(J,re,{get:()=>s[re],set:ye=>s[re]=ye})})}else e.exposed||(e.exposed={});V&&e.render===ft&&(e.render=V),ce!=null&&(e.inheritAttrs=ce),q&&(e.components=q),be&&(e.directives=be)}function ff(e,n,s=ft,o=!1){ae(e)&&(e=Yl(e));for(const l in e){const r=e[l];let a;Se(r)?"default"in r?a=U(r.from||l,r.default,!0):a=U(r.from||l):a=U(r),Ce(a)?o?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):(I(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[l]=a):n[l]=a,s("Inject",l)}}function Ca(e,n,s){xt(ae(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,s)}function zc(e,n,s,o){const l=o.includes(".")?Mc(s,o):()=>s[o];if(Me(e)){const r=n[e];ue(r)?Ue(l,r):I(`Invalid watch handler specified by key "${e}"`,r)}else if(ue(e))Ue(l,e.bind(s));else if(Se(e))if(ae(e))e.forEach(r=>zc(r,n,s,o));else{const r=ue(e.handler)?e.handler.bind(s):n[e.handler];ue(r)?Ue(l,r,e):I(`Invalid watch handler specified by key "${e.handler}"`,r)}else I(`Invalid watch option: "${o}"`,e)}function Ur(e){const n=e.type,{mixins:s,extends:o}=n,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,i=r.get(n);let c;return i?c=i:!l.length&&!s&&!o?c=n:(c={},l.length&&l.forEach(u=>zo(c,u,a,!0)),zo(c,n,a)),Se(n)&&r.set(n,c),c}function zo(e,n,s,o=!1){const{mixins:l,extends:r}=n;r&&zo(e,r,s,!0),l&&l.forEach(a=>zo(e,a,s,!0));for(const a in n)if(o&&a==="expose")I('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=hf[a]||s&&s[a];e[a]=i?i(e[a],n[a]):n[a]}return e}const hf={data:xa,props:Ln,emits:Ln,methods:Ln,computed:Ln,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Ln,directives:Ln,watch:yf,provide:xa,inject:mf};function xa(e,n){return n?e?function(){return He(ue(e)?e.call(this,this):e,ue(n)?n.call(this,this):n)}:n:e}function mf(e,n){return Ln(Yl(e),Yl(n))}function Yl(e){if(ae(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function lt(e,n){return e?[...new Set([].concat(e,n))]:n}function Ln(e,n){return e?He(He(Object.create(null),e),n):n}function yf(e,n){if(!e)return n;if(!n)return e;const s=He(Object.create(null),e);for(const o in n)s[o]=lt(e[o],n[o]);return s}function gf(e,n,s,o=!1){const l={},r={};Vo(r,yl,1),e.propsDefaults=Object.create(null),Yc(e,n,l,r);for(const a in e.propsOptions[0])a in l||(l[a]=void 0);Jc(n||{},l,e),s?e.props=o?l:up(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function _f(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function vf(e,n,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=e,i=he(l),[c]=e.propsOptions;let u=!1;if(!_f(e)&&(o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let h=d[p];if(dl(e.emitsOptions,h))continue;const y=n[h];if(c)if(ve(r,h))y!==r[h]&&(r[h]=y,u=!0);else{const g=Gt(h);l[g]=Zl(c,i,g,y,e,!1)}else y!==r[h]&&(r[h]=y,u=!0)}}}else{Yc(e,n,l,r)&&(u=!0);let d;for(const p in i)(!n||!ve(n,p)&&((d=cn(p))===p||!ve(n,d)))&&(c?s&&(s[p]!==void 0||s[d]!==void 0)&&(l[p]=Zl(c,i,p,void 0,e,!0)):delete l[p]);if(r!==i)for(const p in r)(!n||!ve(n,p))&&(delete r[p],u=!0)}u&&un(e,"set","$attrs"),Jc(n||{},l,e)}function Yc(e,n,s,o){const[l,r]=e.propsOptions;let a=!1,i;if(n)for(let c in n){if(To(c))continue;const u=n[c];let d;l&&ve(l,d=Gt(c))?!r||!r.includes(d)?s[d]=u:(i||(i={}))[d]=u:dl(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(r){const c=he(s),u=i||Ie;for(let d=0;d<r.length;d++){const p=r[d];s[p]=Zl(l,c,p,u[p],e,!ve(u,p))}}return a}function Zl(e,n,s,o,l,r){const a=e[s];if(a!=null){const i=ve(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&ue(c)){const{propsDefaults:u}=l;s in u?o=u[s]:(Cs(l),o=u[s]=c.call(null,n),Yn())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===cn(s))&&(o=!0))}return o}function Zc(e,n,s=!1){const o=n.propsCache,l=o.get(e);if(l)return l;const r=e.props,a={},i=[];let c=!1;if(!ue(e)){const d=p=>{c=!0;const[h,y]=Zc(p,n,!0);He(a,h),y&&i.push(...y)};!s&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return Se(e)&&o.set(e,vs),vs;if(ae(r))for(let d=0;d<r.length;d++){Me(r[d])||I("props must be strings when using array syntax.",r[d]);const p=Gt(r[d]);Ba(p)&&(a[p]=Ie)}else if(r){Se(r)||I("invalid props options",r);for(const d in r){const p=Gt(d);if(Ba(p)){const h=r[d],y=a[p]=ae(h)||ue(h)?{type:h}:Object.assign({},h);if(y){const g=Sa(Boolean,y.type),v=Sa(String,y.type);y[0]=g>-1,y[1]=v<0||g<v,(g>-1||ve(y,"default"))&&i.push(p)}}}}const u=[a,i];return Se(e)&&o.set(e,u),u}function Ba(e){return e[0]!=="$"?!0:(I(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Jl(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Ea(e,n){return Jl(e)===Jl(n)}function Sa(e,n){return ae(n)?n.findIndex(s=>Ea(s,e)):ue(n)&&Ea(n,e)?0:-1}function Jc(e,n,s){const o=he(n),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&bf(r,o[r],a,!ve(e,r)&&!ve(e,cn(r)))}}function bf(e,n,s,o){const{type:l,required:r,validator:a}=s;if(r&&o){I('Missing required prop: "'+e+'"');return}if(!(n==null&&!s.required)){if(l!=null&&l!==!0){let i=!1;const c=ae(l)?l:[l],u=[];for(let d=0;d<c.length&&!i;d++){const{valid:p,expectedType:h}=kf(n,c[d]);u.push(h||""),i=p}if(!i){I(wf(e,n,u));return}}a&&!a(n)&&I('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Af=On("String,Number,Boolean,Function,Symbol,BigInt");function kf(e,n){let s;const o=Jl(n);if(Af(o)){const l=typeof e;s=l===o.toLowerCase(),!s&&l==="object"&&(s=e instanceof n)}else o==="Object"?s=Se(e):o==="Array"?s=ae(e):o==="null"?s=e===null:s=e instanceof n;return{valid:s,expectedType:o}}function wf(e,n,s){let o=`Invalid prop: type check failed for prop "${e}". Expected ${s.map(es).join(" | ")}`;const l=s[0],r=kr(n),a=$a(n,l),i=$a(n,r);return s.length===1&&Oa(l)&&!Df(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,Oa(r)&&(o+=`with value ${i}.`),o}function $a(e,n){return n==="String"?`"${e}"`:n==="Number"?`${Number(e)}`:`${e}`}function Oa(e){return["string","number","boolean"].some(s=>e.toLowerCase()===s)}function Df(...e){return e.some(n=>n.toLowerCase()==="boolean")}const Qc=e=>e[0]==="_"||e==="$stable",Hr=e=>ae(e)?e.map(Ot):[Ot(e)],Cf=(e,n,s)=>{if(n._n)return n;const o=C((...l)=>(qe&&I(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Hr(n(...l))),s);return o._c=!1,o},Xc=(e,n,s)=>{const o=e._ctx;for(const l in e){if(Qc(l))continue;const r=e[l];if(ue(r))n[l]=Cf(l,r,o);else if(r!=null){I(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=Hr(r);n[l]=()=>a}}},eu=(e,n)=>{go(e.vnode)||I("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Hr(n);e.slots.default=()=>s},xf=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=he(n),Vo(n,"_",s)):Xc(n,e.slots={})}else e.slots={},n&&eu(e,n);Vo(e.slots,yl,1)},Bf=(e,n,s)=>{const{vnode:o,slots:l}=e;let r=!0,a=Ie;if(o.shapeFlag&32){const i=n._;i?wn?He(l,n):s&&i===1?r=!1:(He(l,n),!s&&i===1&&delete l._):(r=!n.$stable,Xc(n,l)),a=n}else n&&(eu(e,n),a={default:1});if(r)for(const i in l)!Qc(i)&&!(i in a)&&delete l[i]};function tu(){return{app:null,config:{isNativeTag:nc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ef=0;function Sf(e,n){return function(o,l=null){ue(o)||(o=Object.assign({},o)),l!=null&&!Se(l)&&(I("root props passed to app.mount() must be an object."),l=null);const r=tu(),a=new Set;let i=!1;const c=r.app={_uid:Ef++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Fa,get config(){return r.config},set config(u){I("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return a.has(u)?I("Plugin has already been applied to target app."):u&&ue(u.install)?(a.add(u),u.install(c,...d)):ue(u)?(a.add(u),u(c,...d)):I('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return r.mixins.includes(u)?I("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),c},component(u,d){return er(u,r.config),d?(r.components[u]&&I(`Component "${u}" has already been registered in target app.`),r.components[u]=d,c):r.components[u]},directive(u,d){return jc(u),d?(r.directives[u]&&I(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,c):r.directives[u]},mount(u,d,p){if(i)I("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&I("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=S(o,l);return h.appContext=r,r.reload=()=>{e(Ft(h),u,p)},d&&n?n(h,u):e(h,u,p),i=!0,c._container=u,u.__vue_app__=c,c._instance=h.component,Tp(c,Fa),gl(h.component)||h.component.proxy}},unmount(){i?(e(null,c._container),c._instance=null,Pp(c),delete c._container.__vue_app__):I("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&I(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,c}};return c}}function Ql(e,n,s,o,l=!1){if(ae(e)){e.forEach((h,y)=>Ql(h,n&&(ae(n)?n[y]:n),s,o,l));return}if(As(o)&&!l)return;const r=o.shapeFlag&4?gl(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=e;if(!i){I("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=n&&n.r,d=i.refs===Ie?i.refs={}:i.refs,p=i.setupState;if(u!=null&&u!==c&&(Me(u)?(d[u]=null,ve(p,u)&&(p[u]=null)):Ce(u)&&(u.value=null)),ue(c))an(c,i,12,[a,d]);else{const h=Me(c),y=Ce(c);if(h||y){const g=()=>{if(e.f){const v=h?ve(p,c)?p[c]:d[c]:c.value;l?ae(v)&&vr(v,r):ae(v)?v.includes(r)||v.push(r):h?(d[c]=[r],ve(p,c)&&(p[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else h?(d[c]=a,ve(p,c)&&(p[c]=a)):y?(c.value=a,e.k&&(d[e.k]=a)):I("Invalid template ref type:",c,`(${typeof c})`)};a?(g.id=-1,Je(g,s)):g()}else I("Invalid template ref type:",c,`(${typeof c})`)}}let Ps,An;function en(e,n){e.appContext.config.performance&&Yo()&&An.mark(`vue-${n}-${e.uid}`),Rp(e,n,Yo()?An.now():Date.now())}function tn(e,n){if(e.appContext.config.performance&&Yo()){const s=`vue-${n}-${e.uid}`,o=s+":end";An.mark(o),An.measure(`<${_l(e,e.type)}> ${n}`,s,o),An.clearMarks(s),An.clearMarks(o)}Lp(e,n,Yo()?An.now():Date.now())}function Yo(){return Ps!==void 0||(typeof window<"u"&&window.performance?(Ps=!0,An=window.performance):Ps=!1),Ps}function $f(){const e=[];if(e.length){const n=e.length>1;console.warn(`Feature flag${n?"s":""} ${e.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Je=Wp;function Of(e){return Tf(e)}function Tf(e,n){$f();const s=rc();s.__VUE__=!0,Tc(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:h,setScopeId:y=ft,insertStaticContent:g}=e,v=(m,_,w,P=null,T=null,M=null,W=!1,R=null,H=wn?!1:!!_.dynamicChildren)=>{if(m===_)return;m&&!Mn(m,_)&&(P=X(m),pt(m,T,M,!0),m=null),_.patchFlag===-2&&(H=!1,_.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:te}=_;switch(F){case vo:b(m,_,w,P);break;case Ze:B(m,_,w,P);break;case Fo:m==null?D(_,w,P,W):E(m,_,w,W);break;case Be:be(m,_,w,P,T,M,W,R,H);break;default:te&1?j(m,_,w,P,T,M,W,R,H):te&6?Fe(m,_,w,P,T,M,W,R,H):te&64||te&128?F.process(m,_,w,P,T,M,W,R,H,ke):I("Invalid VNode type:",F,`(${typeof F})`)}ne!=null&&T&&Ql(ne,m&&m.ref,M,_||m,!_)},b=(m,_,w,P)=>{if(m==null)o(_.el=i(_.children),w,P);else{const T=_.el=m.el;_.children!==m.children&&u(T,_.children)}},B=(m,_,w,P)=>{m==null?o(_.el=c(_.children||""),w,P):_.el=m.el},D=(m,_,w,P)=>{[m.el,m.anchor]=g(m.children,_,w,P,m.el,m.anchor)},E=(m,_,w,P)=>{if(_.children!==m.children){const T=h(m.anchor);V(m),[_.el,_.anchor]=g(_.children,w,T,P)}else _.el=m.el,_.anchor=m.anchor},$=({el:m,anchor:_},w,P)=>{let T;for(;m&&m!==_;)T=h(m),o(m,w,P),m=T;o(_,w,P)},V=({el:m,anchor:_})=>{let w;for(;m&&m!==_;)w=h(m),l(m),m=w;l(_)},j=(m,_,w,P,T,M,W,R,H)=>{W=W||_.type==="svg",m==null?N(_,w,P,T,M,W,R,H):oe(m,_,T,M,W,R,H)},N=(m,_,w,P,T,M,W,R)=>{let H,F;const{type:ne,props:te,shapeFlag:le,transition:pe,dirs:Ae}=m;if(H=m.el=a(m.type,M,te&&te.is,te),le&8?d(H,m.children):le&16&&ee(m.children,H,null,P,T,M&&ne!=="foreignObject",W,R),Ae&&Pn(m,null,P,"created"),te){for(const Pe in te)Pe!=="value"&&!To(Pe)&&r(H,Pe,null,te[Pe],M,m.children,P,T,K);"value"in te&&r(H,"value",null,te.value),(F=te.onVnodeBeforeMount)&&wt(F,P,m)}L(H,m,m.scopeId,W,P),Object.defineProperty(H,"__vnode",{value:m,enumerable:!1}),Object.defineProperty(H,"__vueParentComponent",{value:P,enumerable:!1}),Ae&&Pn(m,null,P,"beforeMount");const Le=(!T||T&&!T.pendingBranch)&&pe&&!pe.persisted;Le&&pe.beforeEnter(H),o(H,_,w),((F=te&&te.onVnodeMounted)||Le||Ae)&&Je(()=>{F&&wt(F,P,m),Le&&pe.enter(H),Ae&&Pn(m,null,P,"mounted")},T)},L=(m,_,w,P,T)=>{if(w&&y(m,w),P)for(let M=0;M<P.length;M++)y(m,P[M]);if(T){let M=T.subTree;if(M.patchFlag>0&&M.patchFlag&2048&&(M=Rc(M.children)||M),_===M){const W=T.vnode;L(m,W,W.scopeId,W.slotScopeIds,T.parent)}}},ee=(m,_,w,P,T,M,W,R,H=0)=>{for(let F=H;F<m.length;F++){const ne=m[F]=R?_n(m[F]):Ot(m[F]);v(null,ne,_,w,P,T,M,W,R)}},oe=(m,_,w,P,T,M,W)=>{const R=_.el=m.el;let{patchFlag:H,dynamicChildren:F,dirs:ne}=_;H|=m.patchFlag&16;const te=m.props||Ie,le=_.props||Ie;let pe;w&&In(w,!1),(pe=le.onVnodeBeforeUpdate)&&wt(pe,w,_,m),ne&&Pn(_,m,w,"beforeUpdate"),w&&In(w,!0),wn&&(H=0,W=!1,F=null);const Ae=T&&_.type!=="foreignObject";if(F?(ce(m.dynamicChildren,F,R,w,P,Ae,M),w&&w.type.__hmrId&&Gs(m,_)):W||ye(m,_,R,null,w,P,Ae,M,!1),H>0){if(H&16)q(R,_,te,le,w,P,T);else if(H&2&&te.class!==le.class&&r(R,"class",null,le.class,T),H&4&&r(R,"style",te.style,le.style,T),H&8){const Le=_.dynamicProps;for(let Pe=0;Pe<Le.length;Pe++){const je=Le[Pe],Et=te[je],cs=le[je];(cs!==Et||je==="value")&&r(R,je,Et,cs,T,m.children,w,P,K)}}H&1&&m.children!==_.children&&d(R,_.children)}else!W&&F==null&&q(R,_,te,le,w,P,T);((pe=le.onVnodeUpdated)||ne)&&Je(()=>{pe&&wt(pe,w,_,m),ne&&Pn(_,m,w,"updated")},P)},ce=(m,_,w,P,T,M,W)=>{for(let R=0;R<_.length;R++){const H=m[R],F=_[R],ne=H.el&&(H.type===Be||!Mn(H,F)||H.shapeFlag&70)?p(H.el):w;v(H,F,ne,null,P,T,M,W,!0)}},q=(m,_,w,P,T,M,W)=>{if(w!==P){if(w!==Ie)for(const R in w)!To(R)&&!(R in P)&&r(m,R,w[R],null,W,_.children,T,M,K);for(const R in P){if(To(R))continue;const H=P[R],F=w[R];H!==F&&R!=="value"&&r(m,R,F,H,W,_.children,T,M,K)}"value"in P&&r(m,"value",w.value,P.value)}},be=(m,_,w,P,T,M,W,R,H)=>{const F=_.el=m?m.el:i(""),ne=_.anchor=m?m.anchor:i("");let{patchFlag:te,dynamicChildren:le,slotScopeIds:pe}=_;(wn||te&2048)&&(te=0,H=!1,le=null),pe&&(R=R?R.concat(pe):pe),m==null?(o(F,w,P),o(ne,w,P),ee(_.children,w,ne,T,M,W,R,H)):te>0&&te&64&&le&&m.dynamicChildren?(ce(m.dynamicChildren,le,w,T,M,W,R),T&&T.type.__hmrId?Gs(m,_):(_.key!=null||T&&_===T.subTree)&&Gs(m,_,!0)):ye(m,_,w,ne,T,M,W,R,H)},Fe=(m,_,w,P,T,M,W,R,H)=>{_.slotScopeIds=R,m==null?_.shapeFlag&512?T.ctx.activate(_,w,P,W,H):De(_,w,P,T,M,W,H):Re(m,_,H)},De=(m,_,w,P,T,M,W)=>{const R=m.component=Vf(m,P,T);if(R.type.__hmrId&&Ep(R),Po(m),en(R,"mount"),go(m)&&(R.ctx.renderer=ke),en(R,"init"),Kf(R),tn(R,"init"),R.asyncDep){if(T&&T.registerDep(R,J),!m.el){const H=R.subTree=S(Ze);B(null,H,_,w)}return}J(R,m,_,w,T,M,W),Io(),tn(R,"mount")},Re=(m,_,w)=>{const P=_.component=m.component;if(jp(m,_,w))if(P.asyncDep&&!P.asyncResolved){Po(_),re(P,_,w),Io();return}else P.next=_,xp(P.update),P.update();else _.el=m.el,P.vnode=_},J=(m,_,w,P,T,M,W)=>{const R=()=>{if(m.isMounted){let{next:ne,bu:te,u:le,parent:pe,vnode:Ae}=m,Le=ne,Pe;Po(ne||m.vnode),In(m,!1),ne?(ne.el=Ae.el,re(m,ne,W)):ne=Ae,te&&bn(te),(Pe=ne.props&&ne.props.onVnodeBeforeUpdate)&&wt(Pe,pe,ne,Ae),In(m,!0),en(m,"render");const je=Al(m);tn(m,"render");const Et=m.subTree;m.subTree=je,en(m,"patch"),v(Et,je,p(Et.el),X(Et),m,T,M),tn(m,"patch"),ne.el=je.el,Le===null&&Kp(m,je.el),le&&Je(le,T),(Pe=ne.props&&ne.props.onVnodeUpdated)&&Je(()=>wt(Pe,pe,ne,Ae),T),Pc(m),Io()}else{let ne;const{el:te,props:le}=_,{bm:pe,m:Ae,parent:Le}=m,Pe=As(_);if(In(m,!1),pe&&bn(pe),!Pe&&(ne=le&&le.onVnodeBeforeMount)&&wt(ne,Le,_),In(m,!0),te&&ie){const je=()=>{en(m,"render"),m.subTree=Al(m),tn(m,"render"),en(m,"hydrate"),ie(te,m.subTree,m,T,null),tn(m,"hydrate")};Pe?_.type.__asyncLoader().then(()=>!m.isUnmounted&&je()):je()}else{en(m,"render");const je=m.subTree=Al(m);tn(m,"render"),en(m,"patch"),v(null,je,w,P,m,T,M),tn(m,"patch"),_.el=je.el}if(Ae&&Je(Ae,T),!Pe&&(ne=le&&le.onVnodeMounted)){const je=_;Je(()=>wt(ne,Le,je),T)}(_.shapeFlag&256||Le&&As(Le.vnode)&&Le.vnode.shapeFlag&256)&&m.a&&Je(m.a,T),m.isMounted=!0,Kl(m),_=w=P=null}},H=m.effect=new Cr(R,()=>ul(F),m.scope),F=m.update=()=>H.run();F.id=m.uid,In(m,!0),H.onTrack=m.rtc?ne=>bn(m.rtc,ne):void 0,H.onTrigger=m.rtg?ne=>bn(m.rtg,ne):void 0,F.ownerInstance=m,F()},re=(m,_,w)=>{_.component=m;const P=m.vnode.props;m.vnode=_,m.next=null,vf(m,_.props,P,w),Bf(m,_.children,w),ls(),_a(),rs()},ye=(m,_,w,P,T,M,W,R,H=!1)=>{const F=m&&m.children,ne=m?m.shapeFlag:0,te=_.children,{patchFlag:le,shapeFlag:pe}=_;if(le>0){if(le&128){ht(F,te,w,P,T,M,W,R,H);return}else if(le&256){Te(F,te,w,P,T,M,W,R,H);return}}pe&8?(ne&16&&K(F,T,M),te!==F&&d(w,te)):ne&16?pe&16?ht(F,te,w,P,T,M,W,R,H):K(F,T,M,!0):(ne&8&&d(w,""),pe&16&&ee(te,w,P,T,M,W,R,H))},Te=(m,_,w,P,T,M,W,R,H)=>{m=m||vs,_=_||vs;const F=m.length,ne=_.length,te=Math.min(F,ne);let le;for(le=0;le<te;le++){const pe=_[le]=H?_n(_[le]):Ot(_[le]);v(m[le],pe,w,null,T,M,W,R,H)}F>ne?K(m,T,M,!0,!1,te):ee(_,w,P,T,M,W,R,H,te)},ht=(m,_,w,P,T,M,W,R,H)=>{let F=0;const ne=_.length;let te=m.length-1,le=ne-1;for(;F<=te&&F<=le;){const pe=m[F],Ae=_[F]=H?_n(_[F]):Ot(_[F]);if(Mn(pe,Ae))v(pe,Ae,w,null,T,M,W,R,H);else break;F++}for(;F<=te&&F<=le;){const pe=m[te],Ae=_[le]=H?_n(_[le]):Ot(_[le]);if(Mn(pe,Ae))v(pe,Ae,w,null,T,M,W,R,H);else break;te--,le--}if(F>te){if(F<=le){const pe=le+1,Ae=pe<ne?_[pe].el:P;for(;F<=le;)v(null,_[F]=H?_n(_[F]):Ot(_[F]),w,Ae,T,M,W,R,H),F++}}else if(F>le)for(;F<=te;)pt(m[F],T,M,!0),F++;else{const pe=F,Ae=F,Le=new Map;for(F=Ae;F<=le;F++){const ot=_[F]=H?_n(_[F]):Ot(_[F]);ot.key!=null&&(Le.has(ot.key)&&I("Duplicate keys found during update:",JSON.stringify(ot.key),"Make sure keys are unique."),Le.set(ot.key,F))}let Pe,je=0;const Et=le-Ae+1;let cs=!1,aa=0;const Ts=new Array(Et);for(F=0;F<Et;F++)Ts[F]=0;for(F=pe;F<=te;F++){const ot=m[F];if(je>=Et){pt(ot,T,M,!0);continue}let Ut;if(ot.key!=null)Ut=Le.get(ot.key);else for(Pe=Ae;Pe<=le;Pe++)if(Ts[Pe-Ae]===0&&Mn(ot,_[Pe])){Ut=Pe;break}Ut===void 0?pt(ot,T,M,!0):(Ts[Ut-Ae]=F+1,Ut>=aa?aa=Ut:cs=!0,v(ot,_[Ut],w,null,T,M,W,R,H),je++)}const ia=cs?Pf(Ts):vs;for(Pe=ia.length-1,F=Et-1;F>=0;F--){const ot=Ae+F,Ut=_[ot],ca=ot+1<ne?_[ot+1].el:P;Ts[F]===0?v(null,Ut,w,ca,T,M,W,R,H):cs&&(Pe<0||F!==ia[Pe]?et(Ut,w,ca,2):Pe--)}}},et=(m,_,w,P,T=null)=>{const{el:M,type:W,transition:R,children:H,shapeFlag:F}=m;if(F&6){et(m.component.subTree,_,w,P);return}if(F&128){m.suspense.move(_,w,P);return}if(F&64){W.move(m,_,w,ke);return}if(W===Be){o(M,_,w);for(let te=0;te<H.length;te++)et(H[te],_,w,P);o(m.anchor,_,w);return}if(W===Fo){$(m,_,w);return}if(P!==2&&F&1&&R)if(P===0)R.beforeEnter(M),o(M,_,w),Je(()=>R.enter(M),T);else{const{leave:te,delayLeave:le,afterLeave:pe}=R,Ae=()=>o(M,_,w),Le=()=>{te(M,()=>{Ae(),pe&&pe()})};le?le(M,Ae,Le):Le()}else o(M,_,w)},pt=(m,_,w,P=!1,T=!1)=>{const{type:M,props:W,ref:R,children:H,dynamicChildren:F,shapeFlag:ne,patchFlag:te,dirs:le}=m;if(R!=null&&Ql(R,null,w,m,!0),ne&256){_.ctx.deactivate(m);return}const pe=ne&1&&le,Ae=!As(m);let Le;if(Ae&&(Le=W&&W.onVnodeBeforeUnmount)&&wt(Le,_,m),ne&6)Q(m.component,w,P);else{if(ne&128){m.suspense.unmount(w,P);return}pe&&Pn(m,null,_,"beforeUnmount"),ne&64?m.type.remove(m,_,w,T,ke,P):F&&(M!==Be||te>0&&te&64)?K(F,_,w,!1,!0):(M===Be&&te&384||!T&&ne&16)&&K(H,_,w),P&&pn(m)}(Ae&&(Le=W&&W.onVnodeUnmounted)||pe)&&Je(()=>{Le&&wt(Le,_,m),pe&&Pn(m,null,_,"unmounted")},w)},pn=m=>{const{type:_,el:w,anchor:P,transition:T}=m;if(_===Be){m.patchFlag>0&&m.patchFlag&2048&&T&&!T.persisted?m.children.forEach(W=>{W.type===Ze?l(W.el):pn(W)}):x(w,P);return}if(_===Fo){V(m);return}const M=()=>{l(w),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(m.shapeFlag&1&&T&&!T.persisted){const{leave:W,delayLeave:R}=T,H=()=>W(w,M);R?R(m.el,M,H):H()}else M()},x=(m,_)=>{let w;for(;m!==_;)w=h(m),l(m),m=w;l(_)},Q=(m,_,w)=>{m.type.__hmrId&&Sp(m);const{bum:P,scope:T,update:M,subTree:W,um:R}=m;P&&bn(P),T.stop(),M&&(M.active=!1,pt(W,m,_,w)),R&&Je(R,_),Je(()=>{m.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),Fp(m)},K=(m,_,w,P=!1,T=!1,M=0)=>{for(let W=M;W<m.length;W++)pt(m[W],_,w,P,T)},X=m=>m.shapeFlag&6?X(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),ge=(m,_,w)=>{m==null?_._vnode&&pt(_._vnode,null,null,!0):v(_._vnode||null,m,_,null,null,null,w),_a(),Sc(),_._vnode=m},ke={p:v,um:pt,m:et,r:pn,mt:De,mc:ee,pc:ye,pbc:ce,n:X,o:e};let de,ie;return n&&([de,ie]=n(ke)),{render:ge,hydrate:de,createApp:Sf(ge,de)}}function In({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function Gs(e,n,s=!1){const o=e.children,l=n.children;if(ae(o)&&ae(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=_n(l[r]),i.el=a.el),s||Gs(a,i)),i.type===vo&&(i.el=a.el),i.type===Ze&&!i.el&&(i.el=a.el)}}function Pf(e){const n=e.slice(),s=[0];let o,l,r,a,i;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(l=s[s.length-1],e[l]<u){n[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,e[s[i]]<u?r=i+1:a=i;u<e[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const If=e=>e.__isTeleport,ks=e=>e&&(e.disabled||e.disabled===""),Ta=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Xl=(e,n)=>{const s=e&&e.to;if(Me(s))if(n){const o=n(s);return o||I(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return I("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!ks(e)&&I(`Invalid Teleport target: ${s}`),s},Ff={__isTeleport:!0,process(e,n,s,o,l,r,a,i,c,u){const{mc:d,pc:p,pbc:h,o:{insert:y,querySelector:g,createText:v,createComment:b}}=u,B=ks(n.props);let{shapeFlag:D,children:E,dynamicChildren:$}=n;if(wn&&(c=!1,$=null),e==null){const V=n.el=b("teleport start"),j=n.anchor=b("teleport end");y(V,s,o),y(j,s,o);const N=n.target=Xl(n.props,g),L=n.targetAnchor=v("");N?(y(L,N),a=a||Ta(N)):B||I("Invalid Teleport target on mount:",N,`(${typeof N})`);const ee=(oe,ce)=>{D&16&&d(E,oe,ce,l,r,a,i,c)};B?ee(s,j):N&&ee(N,L)}else{n.el=e.el;const V=n.anchor=e.anchor,j=n.target=e.target,N=n.targetAnchor=e.targetAnchor,L=ks(e.props),ee=L?s:j,oe=L?V:N;if(a=a||Ta(j),$?(h(e.dynamicChildren,$,ee,l,r,a,i),Gs(e,n,!0)):c||p(e,n,ee,oe,l,r,a,i,!1),B)L||Eo(n,s,V,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const ce=n.target=Xl(n.props,g);ce?Eo(n,ce,null,u,0):I("Invalid Teleport target on update:",j,`(${typeof j})`)}else L&&Eo(n,j,N,u,1)}nu(n)},remove(e,n,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:d,target:p,props:h}=e;if(p&&r(d),(a||!ks(h))&&(r(u),i&16))for(let y=0;y<c.length;y++){const g=c[y];l(g,n,s,!0,!!g.dynamicChildren)}},move:Eo,hydrate:Rf};function Eo(e,n,s,{o:{insert:o},m:l},r=2){r===0&&o(e.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:d}=e,p=r===2;if(p&&o(a,n,s),(!p||ks(d))&&c&16)for(let h=0;h<u.length;h++)l(u[h],n,s,2);p&&o(i,n,s)}function Rf(e,n,s,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const d=n.target=Xl(n.props,c);if(d){const p=d._lpa||d.firstChild;if(n.shapeFlag&16)if(ks(n.props))n.anchor=u(a(e),n,i(e),s,o,l,r),n.targetAnchor=p;else{n.anchor=a(e);let h=p;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(p,n,d,s,o,l,r)}nu(n)}return n.anchor&&a(n.anchor)}const A2=Ff;function nu(e){const n=e.ctx;if(n&&n.ut){let s=e.children[0].el;for(;s!==e.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Be=Symbol("Fragment"),vo=Symbol("Text"),Ze=Symbol("Comment"),Fo=Symbol("Static"),zs=[];let Pt=null;function k(e=!1){zs.push(Pt=e?null:[])}function Lf(){zs.pop(),Pt=zs[zs.length-1]||null}let lo=1;function Pa(e){lo+=e}function su(e){return e.dynamicChildren=lo>0?Pt||vs:null,Lf(),lo>0&&Pt&&Pt.push(e),e}function Z(e,n,s,o,l,r){return su(t(e,n,s,o,l,r,!0))}function G(e,n,s,o,l){return su(S(e,n,s,o,l,!0))}function Sn(e){return e?e.__v_isVNode===!0:!1}function Mn(e,n){return n.shapeFlag&6&&hs.has(n.type)?(e.shapeFlag&=-257,n.shapeFlag&=-513,!1):e.type===n.type&&e.key===n.key}const Mf=(...e)=>Nf(...e),yl="__vInternal",ou=({key:e})=>e??null,Ro=({ref:e,ref_key:n,ref_for:s})=>e!=null?Me(e)||Ce(e)||ue(e)?{i:Ge,r:e,k:n,f:!!s}:e:null;function t(e,n=null,s=null,o=0,l=null,r=e===Be?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&ou(n),ref:n&&Ro(n),scopeId:pl,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Ge};return i?(Vr(c,s),r&128&&e.normalize(c)):s&&(c.shapeFlag|=Me(s)?8:16),c.key!==c.key&&I("VNode created with invalid key (NaN). VNode type:",c.type),lo>0&&!a&&Pt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Pt.push(c),c}const S=Mf;function Nf(e,n=null,s=null,o=0,l=null,r=!1){if((!e||e===rf)&&(e||I(`Invalid vnode type when creating vnode: ${e}.`),e=Ze),Sn(e)){const i=Ft(e,n,!0);return s&&Vr(i,s),lo>0&&!r&&Pt&&(i.shapeFlag&6?Pt[Pt.indexOf(e)]=i:Pt.push(i)),i.patchFlag|=-2,i}if(cu(e)&&(e=e.__vccOpts),n){n=fe(n);let{class:i,style:c}=n;i&&!Me(i)&&(n.class=Ne(i)),Se(c)&&(Wo(c)&&!ae(c)&&(c=He({},c)),n.style=ze(c))}const a=Me(e)?1:Lc(e)?128:If(e)?64:Se(e)?4:ue(e)?2:0;return a&4&&Wo(e)&&(e=he(e),I("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),t(e,n,s,o,l,a,r,!0)}function fe(e){return e?Wo(e)||yl in e?He({},e):e:null}function Ft(e,n,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=e,i=n?Ve(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&ou(i),ref:n&&n.ref?s&&l?ae(l)?l.concat(Ro(n)):[l,Ro(n)]:Ro(n):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&ae(a)?a.map(lu):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Be?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ft(e.ssContent),ssFallback:e.ssFallback&&Ft(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function lu(e){const n=Ft(e);return ae(e.children)&&(n.children=e.children.map(lu)),n}function f(e=" ",n=0){return S(vo,null,e,n)}function _e(e="",n=!1){return n?(k(),G(Ze,null,e)):S(Ze,null,e)}function Ot(e){return e==null||typeof e=="boolean"?S(Ze):ae(e)?S(Be,null,e.slice()):typeof e=="object"?_n(e):S(vo,null,String(e))}function _n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ft(e)}function Vr(e,n){let s=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(ae(n))s=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),Vr(e,l()),l._c&&(l._d=!0));return}else{s=32;const l=n._;!l&&!(yl in n)?n._ctx=Ge:l===3&&Ge&&(Ge.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ue(n)?(n={default:n,_ctx:Ge},s=32):(n=String(n),o&64?(s=16,n=[f(n)]):s=8);e.children=n,e.shapeFlag|=s}function Ve(...e){const n={};for(let s=0;s<e.length;s++){const o=e[s];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=Ne([n.class,o.class]));else if(l==="style")n.style=ze([n.style,o.style]);else if(mo(l)){const r=n[l],a=o[l];a&&r!==a&&!(ae(r)&&r.includes(a))&&(n[l]=r?[].concat(r,a):a)}else l!==""&&(n[l]=o[l])}return n}function wt(e,n,s,o=null){xt(e,n,7,[s,o])}const Uf=tu();let Hf=0;function Vf(e,n,s){const o=e.type,l=(n?n.appContext:e.appContext)||Uf,r={uid:Hf++,vnode:e,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new ac(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zc(o,l),emitsOptions:Fc(o,l),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:o.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=af(r),r.root=n?n.root:r,r.emit=Np.bind(null,r),e.ce&&e.ce(r),r}let qe=null;const Jt=()=>qe||Ge,Cs=e=>{qe=e,e.scope.on()},Yn=()=>{qe&&qe.scope.off(),qe=null},jf=On("slot,component");function er(e,n){const s=n.isNativeTag||nc;(jf(e)||s(e))&&I("Do not use built-in or reserved HTML elements as component id: "+e)}function ru(e){return e.vnode.shapeFlag&4}let ro=!1;function Kf(e,n=!1){ro=n;const{props:s,children:o}=e.vnode,l=ru(e);gf(e,s,l,n),xf(e,o);const r=l?Wf(e,n):void 0;return ro=!1,r}function Wf(e,n){var s;const o=e.type;{if(o.name&&er(o.name,e.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)er(r[a],e.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)jc(r[a])}o.compilerOptions&&qf()&&I('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=Br(new Proxy(e.ctx,Gc)),cf(e);const{setup:l}=o;if(l){const r=e.setupContext=l.length>1?iu(e):null;Cs(e),ls();const a=an(l,e,0,[gs(e.props),r]);if(rs(),Yn(),Ar(a)){if(a.then(Yn,Yn),n)return a.then(i=>{Ia(e,i,n)}).catch(i=>{cl(i,e,0)});if(e.asyncDep=a,!e.suspense){const i=(s=o.name)!==null&&s!==void 0?s:"Anonymous";I(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Ia(e,a,n)}else au(e,n)}function Ia(e,n,s){ue(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Se(n)?(Sn(n)&&I("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=n,e.setupState=kc(n),uf(e)):n!==void 0&&I(`setup() should return an object. Received: ${n===null?"null":typeof n}`),au(e,s)}let tr;const qf=()=>!tr;function au(e,n,s){const o=e.type;if(!e.render){if(!n&&tr&&!o.render){const l=o.template||Ur(e).template;if(l){en(e,"compile");const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=o,u=He(He({isCustomElement:r,delimiters:i},a),c);o.render=tr(l,u),tn(e,"compile")}}e.render=o.render||ft}Cs(e),ls(),pf(e),rs(),Yn(),!o.render&&e.render===ft&&!n&&(o.template?I('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):I("Component is missing template or render function."))}function Gf(e){return new Proxy(e.attrs,{get(n,s){return Go(),vt(e,"get","$attrs"),n[s]},set(){return I("setupContext.attrs is readonly."),!1},deleteProperty(){return I("setupContext.attrs is readonly."),!1}})}function iu(e){const n=o=>{e.exposed&&I("expose() should be called only once per setup()."),e.exposed=o||{}};let s;return Object.freeze({get attrs(){return s||(s=Gf(e))},get slots(){return gs(e.slots)},get emit(){return(o,...l)=>e.emit(o,...l)},expose:n})}function gl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(kc(Br(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in zn)return zn[s](e)},has(n,s){return s in n||s in zn}}))}const zf=/(?:^|[-_])(\w)/g,Yf=e=>e.replace(zf,n=>n.toUpperCase()).replace(/[-_]/g,"");function ao(e,n=!0){return ue(e)?e.displayName||e.name:e.name||n&&e.__name}function _l(e,n,s=!1){let o=ao(n);if(!o&&n.__file){const l=n.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&e&&e.parent){const l=r=>{for(const a in r)if(r[a]===n)return a};o=l(e.components||e.parent.type.components)||l(e.appContext.components)}return o?Yf(o):s?"App":"Anonymous"}function cu(e){return ue(e)&&"__vccOpts"in e}const O=(e,n)=>_p(e,n,ro);function k2(){return Zf().slots}function Zf(){const e=Jt();return e||I("useContext() called without active instance."),e.setupContext||(e.setupContext=iu(e))}function ns(e,n,s){const o=arguments.length;return o===2?Se(n)&&!ae(n)?Sn(n)?S(e,null,[n]):S(e,n):S(e,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&Sn(s)&&(s=[s]),S(e,n,s))}const Jf=Symbol("ssrContext"),Qf=()=>{{const e=U(Jf);return e||I("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function xl(e){return!!(e&&e.__v_isShallow)}function Xf(){if(typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(p){return Se(p)?p.__isVue?["div",e,"VueInstance"]:Ce(p)?["div",{},["span",e,d(p)],"<",i(p.value),">"]:qn(p)?["div",{},["span",e,xl(p)?"ShallowReactive":"Reactive"],"<",i(p),`>${En(p)?" (readonly)":""}`]:En(p)?["div",{},["span",e,xl(p)?"ShallowReadonly":"Readonly"],"<",i(p),">"]:null:null},hasBody(p){return p&&p.__isVue},body(p){if(p&&p.__isVue)return["div",{},...r(p.$)]}};function r(p){const h=[];p.type.props&&p.props&&h.push(a("props",he(p.props))),p.setupState!==Ie&&h.push(a("setup",p.setupState)),p.data!==Ie&&h.push(a("data",he(p.data)));const y=c(p,"computed");y&&h.push(a("computed",y));const g=c(p,"inject");return g&&h.push(a("injected",g)),h.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:p}]]),h}function a(p,h){return h=He({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},p],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(y=>["div",{},["span",o,y+": "],i(h[y],!1)])]]:["span",{}]}function i(p,h=!0){return typeof p=="number"?["span",n,p]:typeof p=="string"?["span",s,JSON.stringify(p)]:typeof p=="boolean"?["span",o,p]:Se(p)?["object",{object:h?he(p):p}]:["span",s,String(p)]}function c(p,h){const y=p.type;if(ue(y))return;const g={};for(const v in p.ctx)u(y,v,h)&&(g[v]=p.ctx[v]);return g}function u(p,h,y){const g=p[y];if(ae(g)&&g.includes(h)||Se(g)&&h in g||p.extends&&u(p.extends,h,y)||p.mixins&&p.mixins.some(v=>u(v,h,y)))return!0}function d(p){return xl(p)?"ShallowRef":p.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Fa="3.2.45",eh="http://www.w3.org/2000/svg",Nn=typeof document<"u"?document:null,Ra=Nn&&Nn.createElement("template"),th={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,o)=>{const l=n?Nn.createElementNS(eh,e):Nn.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>Nn.createTextNode(e),createComment:e=>Nn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Nn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,s,o,l,r){const a=s?s.previousSibling:n.lastChild;if(l&&(l===r||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{Ra.innerHTML=o?`<svg>${e}</svg>`:e;const i=Ra.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function nh(e,n,s){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function sh(e,n,s){const o=e.style,l=Me(s);if(s&&!l){for(const r in s)nr(o,r,s[r]);if(n&&!Me(n))for(const r in n)s[r]==null&&nr(o,r,"")}else{const r=o.display;l?n!==s&&(o.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const oh=/[^\\];\s*$/,La=/\s*!important$/;function nr(e,n,s){if(ae(s))s.forEach(o=>nr(e,n,o));else if(s==null&&(s=""),oh.test(s)&&I(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))e.setProperty(n,s);else{const o=lh(e,n);La.test(s)?e.setProperty(cn(o),s.replace(La,""),"important"):e[o]=s}}const Ma=["Webkit","Moz","ms"],Bl={};function lh(e,n){const s=Bl[n];if(s)return s;let o=Gt(n);if(o!=="filter"&&o in e)return Bl[n]=o;o=es(o);for(let l=0;l<Ma.length;l++){const r=Ma[l]+o;if(r in e)return Bl[n]=r}return n}const Na="http://www.w3.org/1999/xlink";function rh(e,n,s,o,l){if(o&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(Na,n.slice(6,n.length)):e.setAttributeNS(Na,n,s);else{const r=Sd(n);s==null||r&&!ec(s)?e.removeAttribute(n):e.setAttribute(n,r?"":s)}}function ah(e,n,s,o,l,r,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,l,r),e[n]=s??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(n);return}let i=!1;if(s===""||s==null){const c=typeof e[n];c==="boolean"?s=ec(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{e[n]=s}catch(c){i||I(`Failed setting prop "${n}" on <${e.tagName.toLowerCase()}>: value ${s} is invalid.`,c)}i&&e.removeAttribute(n)}function ms(e,n,s,o){e.addEventListener(n,s,o)}function ih(e,n,s,o){e.removeEventListener(n,s,o)}function ch(e,n,s,o,l=null){const r=e._vei||(e._vei={}),a=r[n];if(o&&a)a.value=o;else{const[i,c]=uh(n);if(o){const u=r[n]=fh(o,l);ms(e,i,u,c)}else a&&(ih(e,i,a,c),r[n]=void 0)}}const Ua=/(?:Once|Passive|Capture)$/;function uh(e){let n;if(Ua.test(e)){n={};let o;for(;o=e.match(Ua);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):cn(e.slice(2)),n]}let El=0;const dh=Promise.resolve(),ph=()=>El||(dh.then(()=>El=0),El=Date.now());function fh(e,n){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;xt(hh(o,s.value),n,5,[o])};return s.value=e,s.attached=ph(),s}function hh(e,n){if(ae(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const Ha=/^on[a-z]/,mh=(e,n,s,o,l=!1,r,a,i,c)=>{n==="class"?nh(e,o,l):n==="style"?sh(e,s,o):mo(n)?Ho(n)||ch(e,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):yh(e,n,o,l))?ah(e,n,o,r,a,i,c):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),rh(e,n,o,l))};function yh(e,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&Ha.test(n)&&ue(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Ha.test(n)&&Me(s)?!1:n in e}const hn="transition",Is="animation",uu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gh=He({},zp.props,uu),Fn=(e,n=[])=>{ae(e)?e.forEach(s=>s(...n)):e&&e(...n)},Va=e=>e?ae(e)?e.some(n=>n.length>1):e.length>1:!1;function _h(e){const n={};for(const q in e)q in uu||(n[q]=e[q]);if(e.css===!1)return n;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:u=a,appearToClass:d=i,leaveFromClass:p=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:y=`${s}-leave-to`}=e,g=vh(l),v=g&&g[0],b=g&&g[1],{onBeforeEnter:B,onEnter:D,onEnterCancelled:E,onLeave:$,onLeaveCancelled:V,onBeforeAppear:j=B,onAppear:N=D,onAppearCancelled:L=E}=n,ee=(q,be,Fe)=>{yn(q,be?d:i),yn(q,be?u:a),Fe&&Fe()},oe=(q,be)=>{q._isLeaving=!1,yn(q,p),yn(q,y),yn(q,h),be&&be()},ce=q=>(be,Fe)=>{const De=q?N:D,Re=()=>ee(be,q,Fe);Fn(De,[be,Re]),ja(()=>{yn(be,q?c:r),nn(be,q?d:i),Va(De)||Ka(be,o,v,Re)})};return He(n,{onBeforeEnter(q){Fn(B,[q]),nn(q,r),nn(q,a)},onBeforeAppear(q){Fn(j,[q]),nn(q,c),nn(q,u)},onEnter:ce(!1),onAppear:ce(!0),onLeave(q,be){q._isLeaving=!0;const Fe=()=>oe(q,be);nn(q,p),pu(),nn(q,h),ja(()=>{q._isLeaving&&(yn(q,p),nn(q,y),Va($)||Ka(q,o,b,Fe))}),Fn($,[q,Fe])},onEnterCancelled(q){ee(q,!1),Fn(E,[q])},onAppearCancelled(q){ee(q,!0),Fn(L,[q])},onLeaveCancelled(q){oe(q),Fn(V,[q])}})}function vh(e){if(e==null)return null;if(Se(e))return[Sl(e.enter),Sl(e.leave)];{const n=Sl(e);return[n,n]}}function Sl(e){const n=eo(e);return bh(n),n}function bh(e){typeof e!="number"?I(`<transition> explicit duration is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&I("<transition> explicit duration is NaN - the duration expression might be incorrect.")}function nn(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e._vtc||(e._vtc=new Set)).add(n)}function yn(e,n){n.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:s}=e;s&&(s.delete(n),s.size||(e._vtc=void 0))}function ja(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ah=0;function Ka(e,n,s,o){const l=e._endId=++Ah,r=()=>{l===e._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=du(e,n);if(!a)return o();const u=a+"end";let d=0;const p=()=>{e.removeEventListener(u,h),r()},h=y=>{y.target===e&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},i+1),e.addEventListener(u,h)}function du(e,n){const s=window.getComputedStyle(e),o=g=>(s[g]||"").split(", "),l=o(`${hn}Delay`),r=o(`${hn}Duration`),a=Wa(l,r),i=o(`${Is}Delay`),c=o(`${Is}Duration`),u=Wa(i,c);let d=null,p=0,h=0;n===hn?a>0&&(d=hn,p=a,h=r.length):n===Is?u>0&&(d=Is,p=u,h=c.length):(p=Math.max(a,u),d=p>0?a>u?hn:Is:null,h=d?d===hn?r.length:c.length:0);const y=d===hn&&/\b(transform|all)(,|$)/.test(o(`${hn}Property`).toString());return{type:d,timeout:p,propCount:h,hasTransform:y}}function Wa(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((s,o)=>qa(s)+qa(e[o])))}function qa(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function pu(){return document.body.offsetHeight}const fu=new WeakMap,hu=new WeakMap,kh={name:"TransitionGroup",props:He({},gh,{tag:String,moveClass:String}),setup(e,{slots:n}){const s=Jt(),o=Nc();let l,r;return Lr(()=>{if(!l.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Bh(l[0].el,s.vnode.el,a))return;l.forEach(Dh),l.forEach(Ch);const i=l.filter(xh);pu(),i.forEach(c=>{const u=c.el,d=u.style;nn(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const p=u._moveCb=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",p),u._moveCb=null,yn(u,a))};u.addEventListener("transitionend",p)})}),()=>{const a=he(e),i=_h(a);let c=a.tag||Be;l=r,r=n.default?Rr(n.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?Ds(d,oo(d,i,o,s)):I("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];Ds(d,oo(d,i,o,s)),fu.set(d,d.el.getBoundingClientRect())}return S(c,null,r)}}},wh=kh;function Dh(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function Ch(e){hu.set(e,e.el.getBoundingClientRect())}function xh(e){const n=fu.get(e),s=hu.get(e),o=n.left-s.left,l=n.top-s.top;if(o||l){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",e}}function Bh(e,n,s){const o=e.cloneNode();e._vtc&&e._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(o);const{hasTransform:r}=du(o);return l.removeChild(o),r}const Ga=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ae(n)?s=>bn(n,s):n};function Eh(e){e.target.composing=!0}function za(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Sh={created(e,{modifiers:{lazy:n,trim:s,number:o}},l){e._assign=Ga(l);const r=o||l.props&&l.props.type==="number";ms(e,n?"change":"input",a=>{if(a.target.composing)return;let i=e.value;s&&(i=i.trim()),r&&(i=eo(i)),e._assign(i)}),s&&ms(e,"change",()=>{e.value=e.value.trim()}),n||(ms(e,"compositionstart",Eh),ms(e,"compositionend",za),ms(e,"change",za))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:s,trim:o,number:l}},r){if(e._assign=Ga(r),e.composing||document.activeElement===e&&e.type!=="range"&&(s||o&&e.value.trim()===n||(l||e.type==="number")&&eo(e.value)===n))return;const a=n??"";e.value!==a&&(e.value=a)}},$h={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ya=(e,n)=>s=>{if(!("key"in s))return;const o=cn(s.key);if(n.some(l=>l===o||$h[l]===o))return e(s)},mu={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):Fs(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(e),Fs(e,!0),o.enter(e)):o.leave(e,()=>{Fs(e,!1)}):Fs(e,n))},beforeUnmount(e,{value:n}){Fs(e,n)}};function Fs(e,n){e.style.display=n?e._vod:"none"}const Oh=He({patchProp:mh},th);let Za;function Th(){return Za||(Za=Of(Oh))}const w2=(...e)=>{const n=Th().createApp(...e);Ph(n),Ih(n);const{mount:s}=n;return n.mount=o=>{const l=Fh(o);if(!l)return;const r=n._component;!ue(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},n};function Ph(e){Object.defineProperty(e.config,"isNativeTag",{value:n=>xd(n)||Bd(n),writable:!1})}function Ih(e){{const n=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return n},set(){I("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return I(o),s},set(){I(o)}})}}function Fh(e){if(Me(e)){const n=document.querySelector(e);return n||I(`Failed to mount app: mount target selector "${e}" returned null.`),n}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&I('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Rh(){Xf()}Rh();const yu=Symbol("v-click-clicks"),gu=Symbol("v-click-clicks-elements"),Lh=Symbol("v-click-clicks-order-map"),_u=Symbol("v-click-clicks-disabled"),vu=Symbol("slidev-slide-scale"),z=Symbol("slidev-slidev-context"),Mh=Symbol("slidev-route"),Nh=Symbol("slidev-slide-context"),Uh="slidev-vclick-target",D2="slidev-vclick-hidden",C2="slidev-vclick-fade",x2="slidev-vclick-hidden-explicitly",B2="slidev-vclick-current",E2="slidev-vclick-prior";function Hh(e){return e=e??[],Array.isArray(e)?e:[e]}function Vh(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function jh(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function Kh(e){return e!=null}function Wh(e,n){return Object.fromEntries(Object.entries(e).map(([s,o])=>n(s,o)).filter(Kh))}const Ws={theme:"default",title:"From Dev to Prod with Acorn",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:!0,download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"dev-to-prod-with-acorn-2023",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"fade-out",class:"text-center"},Oe=Ws,Dn=Oe.aspectRatio??16/9,Cn=Oe.canvasWidth??980,jr=Math.ceil(Cn/Dn),Kr=O(()=>Wh(Oe.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function Bt(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const as=Qe({page:0,clicks:0});let qh=[],Gh=[];Bt(as,"$syncUp",!0);Bt(as,"$syncDown",!0);Bt(as,"$paused",!1);Bt(as,"$onSet",e=>qh.push(e));Bt(as,"$onPatch",e=>Gh.push(e));Bt(as,"$patch",async()=>!1);function bu(e,n,s=!1){const o=[];let l=!1,r=!1,a,i;const c=Qe(n);function u(y){o.push(y)}function d(y,g){clearTimeout(a),l=!0,c[y]=g,a=setTimeout(()=>l=!1,0)}function p(y){l||(clearTimeout(i),r=!0,Object.entries(y).forEach(([g,v])=>{c[g]=v}),i=setTimeout(()=>r=!1,0))}function h(y){let g;s?s&&window.addEventListener("storage",b=>{b&&b.key===y&&b.newValue&&p(JSON.parse(b.newValue))}):(g=new BroadcastChannel(y),g.addEventListener("message",b=>p(b.data)));function v(){!s&&g&&!r?g.postMessage(he(c)):s&&!r&&window.localStorage.setItem(y,JSON.stringify(c)),l||o.forEach(b=>b(c))}if(Ue(c,v,{deep:!0}),s){const b=window.localStorage.getItem(y);b&&p(JSON.parse(b))}}return{init:h,onPatch:u,patch:d,state:c}}const{init:S2,onPatch:$2,patch:O2,state:$l}=bu(as,{page:1,clicks:0}),is=Qe({});let zh=[],Yh=[];Bt(is,"$syncUp",!0);Bt(is,"$syncDown",!0);Bt(is,"$paused",!1);Bt(is,"$onSet",e=>zh.push(e));Bt(is,"$onPatch",e=>Yh.push(e));Bt(is,"$patch",async()=>!1);const{init:T2,onPatch:Zh,patch:Au,state:Zo}=bu(is,{},!1),Jh="modulepreload",Qh=function(e){return"/"+e},Ja={},ss=function(n,s,o){if(!s||s.length===0)return n();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=Qh(r),r in Ja)return;Ja[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const p=l[d];if(p.href===r&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Jh,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};var Qa;const Rt=typeof window<"u",Xh=e=>typeof e<"u",em=Object.prototype.toString,io=e=>typeof e=="function",P2=e=>typeof e=="number",ku=e=>typeof e=="string",I2=e=>em.call(e)==="[object Object]",sr=()=>+Date.now(),Ys=()=>{};Rt&&((Qa=window==null?void 0:window.navigator)!=null&&Qa.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ct(e){return typeof e=="function"?e():A(e)}function tm(e,n){function s(...o){return new Promise((l,r)=>{Promise.resolve(e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(l).catch(r)})}return s}const wu=e=>e();function nm(e=wu){const n=se(!0);function s(){n.value=!1}function o(){n.value=!0}const l=(...r)=>{n.value&&e(...r)};return{isActive:Kt(n),pause:s,resume:o,eventFilter:l}}function sm(e){return e}function om(e,n){var s;if(typeof e=="number")return e+n;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=e.slice(o.length),r=parseFloat(o)+n;return Number.isNaN(r)?e:r+l}function lm(e,n){let s,o,l;const r=se(!0),a=()=>{r.value=!0,l()};Ue(e,a,{flush:"sync"});const i=io(n)?n:n.get,c=io(n)?void 0:n.set,u=wc((d,p)=>(o=d,l=p,{get(){return r.value&&(s=i(),r.value=!1),o(),s},set(h){c==null||c(h)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function Yt(e){return Rd()?(Ld(e),!0):!1}function rm(e){if(!Ce(e))return Qe(e);const n=new Proxy({},{get(s,o,l){return A(Reflect.get(e.value,o,l))},set(s,o,l){return Ce(e.value[o])&&!Ce(l)?e.value[o].value=l:e.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Qe(n)}function Du(e){return typeof e=="function"?O(e):se(e)}var am=Object.defineProperty,im=Object.defineProperties,cm=Object.getOwnPropertyDescriptors,Xa=Object.getOwnPropertySymbols,um=Object.prototype.hasOwnProperty,dm=Object.prototype.propertyIsEnumerable,ei=(e,n,s)=>n in e?am(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,pm=(e,n)=>{for(var s in n||(n={}))um.call(n,s)&&ei(e,s,n[s]);if(Xa)for(var s of Xa(n))dm.call(n,s)&&ei(e,s,n[s]);return e},fm=(e,n)=>im(e,cm(n));function hm(e){if(!Ce(e))return hp(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=wc(()=>({get(){return e.value[s]},set(o){if(Array.isArray(e.value)){const l=[...e.value];l[s]=o,e.value=l}else{const l=fm(pm({},e.value),{[s]:o});Object.setPrototypeOf(l,e.value),e.value=l}}}));return n}function Wr(e,n=!0){Jt()?$s(e):n?e():It(e)}function F2(e){Jt()&&hl(e)}function mm(e,n=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=se(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function u(){const d=ct(n);d<=0||(a.value=!0,l&&e(),i(),r=setInterval(e,d))}if(o&&Rt&&u(),Ce(n)||io(n)){const d=Ue(n,()=>{a.value&&Rt&&u()});Yt(d)}return Yt(c),{isActive:a,pause:c,resume:u}}function ym(e,n,s={}){const{immediate:o=!0}=s,l=se(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,e(...u)},ct(n))}return o&&(l.value=!0,Rt&&c()),Yt(i),{isPending:Kt(l),start:c,stop:i}}function Cu(e=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,l=Ce(e),r=se(e);function a(i){if(arguments.length)return r.value=i,r.value;{const c=ct(s);return r.value=r.value===c?ct(o):c,r.value}}return l?a:[r,a]}var ti=Object.getOwnPropertySymbols,gm=Object.prototype.hasOwnProperty,_m=Object.prototype.propertyIsEnumerable,vm=(e,n)=>{var s={};for(var o in e)gm.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&ti)for(var o of ti(e))n.indexOf(o)<0&&_m.call(e,o)&&(s[o]=e[o]);return s};function bm(e,n,s={}){const o=s,{eventFilter:l=wu}=o,r=vm(o,["eventFilter"]);return Ue(e,tm(l,n),r)}var Am=Object.defineProperty,km=Object.defineProperties,wm=Object.getOwnPropertyDescriptors,Jo=Object.getOwnPropertySymbols,xu=Object.prototype.hasOwnProperty,Bu=Object.prototype.propertyIsEnumerable,ni=(e,n,s)=>n in e?Am(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Dm=(e,n)=>{for(var s in n||(n={}))xu.call(n,s)&&ni(e,s,n[s]);if(Jo)for(var s of Jo(n))Bu.call(n,s)&&ni(e,s,n[s]);return e},Cm=(e,n)=>km(e,wm(n)),xm=(e,n)=>{var s={};for(var o in e)xu.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Jo)for(var o of Jo(e))n.indexOf(o)<0&&Bu.call(e,o)&&(s[o]=e[o]);return s};function Bm(e,n,s={}){const o=s,{eventFilter:l}=o,r=xm(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=nm(l);return{stop:bm(e,n,Cm(Dm({},r),{eventFilter:a})),pause:i,resume:c,isActive:u}}function Ct(e){var n;const s=ct(e);return(n=s==null?void 0:s.$el)!=null?n:s}const Xe=Rt?window:void 0,Eu=Rt?window.document:void 0,Em=Rt?window.navigator:void 0;function Ee(...e){let n,s,o,l;if(ku(e[0])||Array.isArray(e[0])?([s,o,l]=e,n=Xe):[n,s,o,l]=e,!n)return Ys;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},i=(d,p,h)=>(d.addEventListener(p,h,l),()=>d.removeEventListener(p,h,l)),c=Ue(()=>Ct(n),d=>{a(),d&&r.push(...s.flatMap(p=>o.map(h=>i(d,p,h))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return Yt(u),u}function Sm(e,n,s={}){const{window:o=Xe,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;let i=!0,c;const u=y=>l.some(g=>{if(typeof g=="string")return Array.from(o.document.querySelectorAll(g)).some(v=>v===y.target||y.composedPath().includes(v));{const v=Ct(g);return v&&(y.target===v||y.composedPath().includes(v))}}),d=y=>{o.clearTimeout(c);const g=Ct(e);if(!(!g||g===y.target||y.composedPath().includes(g))){if(y.detail===0&&(i=!u(y)),!i){i=!0;return}n(y)}},p=[Ee(o,"click",d,{passive:!0,capture:r}),Ee(o,"pointerdown",y=>{const g=Ct(e);g&&(i=!y.composedPath().includes(g)&&!u(y))},{passive:!0}),Ee(o,"pointerup",y=>{if(y.button===0){const g=y.composedPath();y.composedPath=()=>g,c=o.setTimeout(()=>d(y),50)}},{passive:!0}),a&&Ee(o,"blur",y=>{var g;const v=Ct(e);((g=o.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(v!=null&&v.contains(o.document.activeElement))&&n(y)})].filter(Boolean);return()=>p.forEach(y=>y())}const $m=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function Om(...e){let n,s,o={};e.length===3?(n=e[0],s=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,s=e[0],o=e[1]):(n=e[0],s=e[1]):(n=!0,s=e[0]);const{target:l=Xe,eventName:r="keydown",passive:a=!1}=o,i=$m(n);return Ee(l,r,u=>{i(u)&&s(u)},a)}function Tm(e={}){var n;const{window:s=Xe}=e,o=(n=e.document)!=null?n:s==null?void 0:s.document,l=lm(()=>null,()=>o==null?void 0:o.activeElement);return s&&(Ee(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),Ee(s,"focus",l.trigger,!0)),l}function bo(e,n=!1){const s=se(),o=()=>s.value=Boolean(e());return o(),Wr(o,n),s}function ys(e,n={}){const{window:s=Xe}=n,o=bo(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=se(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=s.matchMedia(Du(e).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",i):l.addListener(i))};return Ss(i),Yt(()=>a()),r}const Pm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Im=Object.defineProperty,si=Object.getOwnPropertySymbols,Fm=Object.prototype.hasOwnProperty,Rm=Object.prototype.propertyIsEnumerable,oi=(e,n,s)=>n in e?Im(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Lm=(e,n)=>{for(var s in n||(n={}))Fm.call(n,s)&&oi(e,s,n[s]);if(si)for(var s of si(n))Rm.call(n,s)&&oi(e,s,n[s]);return e};function Mm(e,n={}){function s(i,c){let u=e[i];return c!=null&&(u=om(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=Xe}=n;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>ys(`(min-width: ${s(i)})`,n),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return Lm({greater(i){return ys(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return ys(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return ys(`(max-width: ${s(i)})`,n)},between(i,c){return ys(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return l(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${s(i)})`)},isSmaller(i){return l(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${s(i)})`)},isInBetween(i,c){return l(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function Nm(e={}){const{navigator:n=Em,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=e,a=["copy","cut"],i=bo(()=>n&&"clipboard"in n),c=O(()=>i.value||r),u=se(""),d=se(!1),p=ym(()=>d.value=!1,l);function h(){i.value?n.clipboard.readText().then(b=>{u.value=b}):u.value=v()}if(c.value&&s)for(const b of a)Ee(b,h);async function y(b=ct(o)){c.value&&b!=null&&(i.value?await n.clipboard.writeText(b):g(b),u.value=b,d.value=!0,p.start())}function g(b){const B=document.createElement("textarea");B.value=b??"",B.style.position="absolute",B.style.opacity="0",document.body.appendChild(B),B.select(),document.execCommand("copy"),B.remove()}function v(){var b,B,D;return(D=(B=(b=document==null?void 0:document.getSelection)==null?void 0:b.call(document))==null?void 0:B.toString())!=null?D:""}return{isSupported:c,text:u,copied:d,copy:y}}function Um(e){return JSON.parse(JSON.stringify(e))}const or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lr="__vueuse_ssr_handlers__";or[lr]=or[lr]||{};const Hm=or[lr];function Vm(e,n){return Hm[e]||n}function jm(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Km=Object.defineProperty,li=Object.getOwnPropertySymbols,Wm=Object.prototype.hasOwnProperty,qm=Object.prototype.propertyIsEnumerable,ri=(e,n,s)=>n in e?Km(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,ai=(e,n)=>{for(var s in n||(n={}))Wm.call(n,s)&&ri(e,s,n[s]);if(li)for(var s of li(n))qm.call(n,s)&&ri(e,s,n[s]);return e};const Gm={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Lt(e,n,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:p=Xe,eventFilter:h,onError:y=N=>{console.error(N)}}=o,g=(d?zt:se)(n);if(!s)try{s=Vm("getDefaultStorage",()=>{var N;return(N=Xe)==null?void 0:N.localStorage})()}catch(N){y(N)}if(!s)return g;const v=ct(n),b=jm(v),B=(l=o.serializer)!=null?l:Gm[b],{pause:D,resume:E}=Bm(g,()=>$(g.value),{flush:r,deep:a,eventFilter:h});return p&&i&&Ee(p,"storage",j),j(),g;function $(N){try{if(N==null)s.removeItem(e);else{const L=B.write(N),ee=s.getItem(e);ee!==L&&(s.setItem(e,L),p&&(p==null||p.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:ee,newValue:L,storageArea:s}))))}}catch(L){y(L)}}function V(N){const L=N?N.newValue:s.getItem(e);if(L==null)return c&&v!==null&&s.setItem(e,B.write(v)),v;if(!N&&u){const ee=B.read(L);return io(u)?u(ee,v):b==="object"&&!Array.isArray(ee)?ai(ai({},v),ee):ee}else return typeof L!="string"?L:B.read(L)}function j(N){if(!(N&&N.storageArea!==s)){if(N&&N.key==null){g.value=v;return}if(!(N&&N.key!==e)){D();try{g.value=V(N)}catch(L){y(L)}finally{N?It(E):E()}}}}}function zm(e){return ys("(prefers-color-scheme: dark)",e)}var Ym=Object.defineProperty,Zm=Object.defineProperties,Jm=Object.getOwnPropertyDescriptors,ii=Object.getOwnPropertySymbols,Qm=Object.prototype.hasOwnProperty,Xm=Object.prototype.propertyIsEnumerable,ci=(e,n,s)=>n in e?Ym(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,ey=(e,n)=>{for(var s in n||(n={}))Qm.call(n,s)&&ci(e,s,n[s]);if(ii)for(var s of ii(n))Xm.call(n,s)&&ci(e,s,n[s]);return e},ty=(e,n)=>Zm(e,Jm(n));function R2(e,n={}){var s,o,l;const r=(s=n.draggingElement)!=null?s:Xe,a=(o=n.handle)!=null?o:e,i=se((l=ct(n.initialValue))!=null?l:{x:0,y:0}),c=se(),u=g=>n.pointerTypes?n.pointerTypes.includes(g.pointerType):!0,d=g=>{ct(n.preventDefault)&&g.preventDefault(),ct(n.stopPropagation)&&g.stopPropagation()},p=g=>{var v;if(!u(g)||ct(n.exact)&&g.target!==ct(e))return;const b=ct(e).getBoundingClientRect(),B={x:g.clientX-b.left,y:g.clientY-b.top};((v=n.onStart)==null?void 0:v.call(n,B,g))!==!1&&(c.value=B,d(g))},h=g=>{var v;u(g)&&c.value&&(i.value={x:g.clientX-c.value.x,y:g.clientY-c.value.y},(v=n.onMove)==null||v.call(n,i.value,g),d(g))},y=g=>{var v;u(g)&&c.value&&(c.value=void 0,(v=n.onEnd)==null||v.call(n,i.value,g),d(g))};return Rt&&(Ee(a,"pointerdown",p,!0),Ee(r,"pointermove",h,!0),Ee(r,"pointerup",y,!0)),ty(ey({},hm(i)),{position:i,isDragging:O(()=>!!c.value),style:O(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var ui=Object.getOwnPropertySymbols,ny=Object.prototype.hasOwnProperty,sy=Object.prototype.propertyIsEnumerable,oy=(e,n)=>{var s={};for(var o in e)ny.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&ui)for(var o of ui(e))n.indexOf(o)<0&&sy.call(e,o)&&(s[o]=e[o]);return s};function ly(e,n,s={}){const o=s,{window:l=Xe}=o,r=oy(o,["window"]);let a;const i=bo(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},u=Ue(()=>Ct(e),p=>{c(),i.value&&l&&p&&(a=new ResizeObserver(n),a.observe(p,r))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return Yt(d),{isSupported:i,stop:d}}function ry(e,n={}){const{immediate:s=!0,window:o=Xe}=n,l=se(!1);let r=0,a=null;function i(d){if(!l.value||!o)return;const p=d-r;e({delta:p,timestamp:d}),r=d,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function u(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&c(),Yt(u),{isActive:Kt(l),pause:u,resume:c}}function ay(e,n={width:0,height:0},s={}){const{window:o=Xe,box:l="content-box"}=s,r=O(()=>{var c,u;return(u=(c=Ct(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=se(n.width),i=se(n.height);return ly(e,([c])=>{const u=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const d=Ct(e);if(d){const p=o.getComputedStyle(d);a.value=parseFloat(p.width),i.value=parseFloat(p.height)}}else if(u){const d=Array.isArray(u)?u:[u];a.value=d.reduce((p,{inlineSize:h})=>p+h,0),i.value=d.reduce((p,{blockSize:h})=>p+h,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),Ue(()=>Ct(e),c=>{a.value=c?n.width:0,i.value=c?n.height:0}),{width:a,height:i}}const di=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function iy(e,n={}){const{document:s=Eu,autoExit:o=!1}=n,l=e||(s==null?void 0:s.querySelector("html")),r=se(!1);let a=di[0];const i=bo(()=>{if(s){for(const v of di)if(v[1]in s)return a=v,!0}else return!1;return!1}),[c,u,d,,p]=a;async function h(){i.value&&(s!=null&&s[d]&&await s[u](),r.value=!1)}async function y(){if(!i.value)return;await h();const v=Ct(l);v&&(await v[c](),r.value=!0)}async function g(){r.value?await h():await y()}return s&&Ee(s,p,()=>{r.value=!!(s!=null&&s[d])},!1),o&&Yt(h),{isSupported:i,isFullscreen:r,enter:y,exit:h,toggle:g}}function L2(e,n,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=Xe}=s,i=bo(()=>a&&"IntersectionObserver"in a);let c=Ys;const u=i.value?Ue(()=>({el:Ct(e),root:Ct(o)}),({el:p,root:h})=>{if(c(),!p)return;const y=new IntersectionObserver(n,{root:h,rootMargin:l,threshold:r});y.observe(p),c=()=>{y.disconnect(),c=Ys}},{immediate:!0,flush:"post"}):Ys,d=()=>{c(),u()};return Yt(d),{isSupported:i,stop:d}}const cy={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function uy(e={}){const{reactive:n=!1,target:s=Xe,aliasMap:o=cy,passive:l=!0,onEventFired:r=Ys}=e,a=Qe(new Set),i={toJSON(){return{}},current:a},c=n?Qe(i):i,u=new Set,d=new Set;function p(v,b){v in c&&(n?c[v]=b:c[v].value=b)}function h(){a.clear();for(const v of d)p(v,!1)}function y(v,b){var B,D;const E=(B=v.key)==null?void 0:B.toLowerCase(),V=[(D=v.code)==null?void 0:D.toLowerCase(),E].filter(Boolean);E&&(b?a.add(E):a.delete(E));for(const j of V)d.add(j),p(j,b);E==="meta"&&!b?(u.forEach(j=>{a.delete(j),p(j,!1)}),u.clear()):typeof v.getModifierState=="function"&&v.getModifierState("Meta")&&b&&[...a,...V].forEach(j=>u.add(j))}Ee(s,"keydown",v=>(y(v,!0),r(v)),{passive:l}),Ee(s,"keyup",v=>(y(v,!1),r(v)),{passive:l}),Ee("blur",h,{passive:!0}),Ee("focus",h,{passive:!0});const g=new Proxy(c,{get(v,b,B){if(typeof b!="string")return Reflect.get(v,b,B);if(b=b.toLowerCase(),b in o&&(b=o[b]),!(b in c))if(/[+_-]/.test(b)){const E=b.split(/[+_-]/g).map($=>$.trim());c[b]=O(()=>E.every($=>A(g[$])))}else c[b]=se(!1);const D=Reflect.get(v,b,B);return n?A(D):D}});return g}function M2(e={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=Xe,eventFilter:a}=e,i=se(l.x),c=se(l.y),u=se(null),d=v=>{n==="page"?(i.value=v.pageX,c.value=v.pageY):n==="client"?(i.value=v.clientX,c.value=v.clientY):n==="movement"&&(i.value=v.movementX,c.value=v.movementY),u.value="mouse"},p=()=>{i.value=l.x,c.value=l.y},h=v=>{if(v.touches.length>0){const b=v.touches[0];n==="page"?(i.value=b.pageX,c.value=b.pageY):n==="client"&&(i.value=b.clientX,c.value=b.clientY),u.value="touch"}},y=v=>a===void 0?d(v):a(()=>d(v),{}),g=v=>a===void 0?h(v):a(()=>h(v),{});return r&&(Ee(r,"mousemove",y,{passive:!0}),Ee(r,"dragover",y,{passive:!0}),s&&n!=="movement"&&(Ee(r,"touchstart",g,{passive:!0}),Ee(r,"touchmove",g,{passive:!0}),o&&Ee(r,"touchend",p,{passive:!0}))),{x:i,y:c,sourceType:u}}var rn;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(rn||(rn={}));function dy(e,n={}){const s=Du(e),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=n,i=Qe({x:0,y:0}),c=(j,N)=>{i.x=j,i.y=N},u=Qe({x:0,y:0}),d=(j,N)=>{u.x=j,u.y=N},p=O(()=>i.x-u.x),h=O(()=>i.y-u.y),{max:y,abs:g}=Math,v=O(()=>y(g(p.value),g(h.value))>=o),b=se(!1),B=se(!1),D=O(()=>v.value?g(p.value)>g(h.value)?p.value>0?rn.LEFT:rn.RIGHT:h.value>0?rn.UP:rn.DOWN:rn.NONE),E=j=>{var N,L,ee;const oe=j.buttons===0,ce=j.buttons===1;return(ee=(L=(N=n.pointerTypes)==null?void 0:N.includes(j.pointerType))!=null?L:oe||ce)!=null?ee:!0},$=[Ee(e,"pointerdown",j=>{var N,L;if(!E(j))return;B.value=!0,(L=(N=s.value)==null?void 0:N.style)==null||L.setProperty("touch-action","none");const ee=j.target;ee==null||ee.setPointerCapture(j.pointerId);const{clientX:oe,clientY:ce}=j;c(oe,ce),d(oe,ce),a==null||a(j)}),Ee(e,"pointermove",j=>{if(!E(j)||!B.value)return;const{clientX:N,clientY:L}=j;d(N,L),!b.value&&v.value&&(b.value=!0),b.value&&(l==null||l(j))}),Ee(e,"pointerup",j=>{var N,L;E(j)&&(b.value&&(r==null||r(j,D.value)),B.value=!1,b.value=!1,(L=(N=s.value)==null?void 0:N.style)==null||L.setProperty("touch-action","initial"))})],V=()=>$.forEach(j=>j());return{isSwiping:Kt(b),direction:Kt(D),posStart:Kt(i),posEnd:Kt(u),distanceX:p,distanceY:h,stop:V}}let py=0;function N2(e,n={}){const s=se(!1),{document:o=Eu,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++py}`}=n,i=se(e);let c=()=>{};const u=()=>{if(!o)return;const p=o.getElementById(a)||o.createElement("style");p.isConnected||(p.type="text/css",p.id=a,n.media&&(p.media=n.media),o.head.appendChild(p)),!s.value&&(c=Ue(i,h=>{p.textContent=h},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&Wr(u),r||Yt(d),{id:a,css:i,unload:d,load:u,isLoaded:Kt(s)}}var fy=Object.defineProperty,pi=Object.getOwnPropertySymbols,hy=Object.prototype.hasOwnProperty,my=Object.prototype.propertyIsEnumerable,fi=(e,n,s)=>n in e?fy(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,yy=(e,n)=>{for(var s in n||(n={}))hy.call(n,s)&&fi(e,s,n[s]);if(pi)for(var s of pi(n))my.call(n,s)&&fi(e,s,n[s]);return e};function U2(e={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=e,a=se(sr()+s),i=()=>a.value=sr()+s,c=r?()=>{i(),r(a.value)}:i,u=l==="requestAnimationFrame"?ry(c,{immediate:o}):mm(c,l,{immediate:o});return n?yy({timestamp:a},u):a}var gy=Object.defineProperty,hi=Object.getOwnPropertySymbols,_y=Object.prototype.hasOwnProperty,vy=Object.prototype.propertyIsEnumerable,mi=(e,n,s)=>n in e?gy(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,by=(e,n)=>{for(var s in n||(n={}))_y.call(n,s)&&mi(e,s,n[s]);if(hi)for(var s of hi(n))vy.call(n,s)&&mi(e,s,n[s]);return e};const Ay={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};by({linear:sm},Ay);function Wt(e,n,s,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:p}=o,h=Jt(),y=s||(h==null?void 0:h.emit)||((l=h==null?void 0:h.$emit)==null?void 0:l.bind(h))||((a=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let g=u;n||(n="modelValue"),g=u||g||`update:${n.toString()}`;const v=B=>i?io(i)?i(B):Um(B):B,b=()=>Xh(e[n])?v(e[n]):p;if(c){const B=b(),D=se(B);return Ue(()=>e[n],E=>D.value=v(E)),Ue(D,E=>{(E!==e[n]||d)&&y(g,E)},{deep:d}),D}else return O({get(){return b()},set(B){y(g,B)}})}function H2({window:e=Xe}={}){if(!e)return se(!1);const n=se(e.document.hasFocus());return Ee(e,"blur",()=>{n.value=!1}),Ee(e,"focus",()=>{n.value=!0}),n}function ky(e={}){const{window:n=Xe,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=e,a=se(s),i=se(o),c=()=>{n&&(r?(a.value=n.innerWidth,i.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return c(),Wr(c),Ee("resize",c,{passive:!0}),l&&Ee("orientationchange",c,{passive:!0}),{width:a,height:i}}function wy(){return Su().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Su(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Dy=typeof Proxy=="function",Cy="devtools-plugin:setup",xy="plugin:settings:set";let us,rr;function By(){var e;return us!==void 0||(typeof window<"u"&&window.performance?(us=!0,rr=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(us=!0,rr=global.perf_hooks.performance):us=!1),us}function Ey(){return By()?rr.now():Date.now()}class Sy{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const o={};if(n.settings)for(const a in n.settings){const i=n.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return Ey()}},s&&s.on(xy,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:i,args:c,resolve:u})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function $y(e,n){const s=e,o=Su(),l=wy(),r=Dy&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(Cy,e,n);else{const a=r?new Sy(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:a}),a&&n(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const on=typeof window<"u";function Oy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const xe=Object.assign;function Ol(e,n){const s={};for(const o in n){const l=n[o];s[o]=bt(l)?l.map(e):e(l)}return s}const Zs=()=>{},bt=Array.isArray;function we(e){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(n))}const Ty=/\/$/,Py=e=>e.replace(Ty,"");function Tl(e,n,s="/"){let o,l={},r="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=n.slice(0,c),r=n.slice(c+1,i>-1?i:n.length),l=e(r)),i>-1&&(o=o||n.slice(0,i),a=n.slice(i,n.length)),o=Ry(o??n,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function Iy(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function yi(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function gi(e,n,s){const o=n.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&$n(n.matched[o],s.matched[l])&&$u(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function $n(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function $u(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!Fy(e[s],n[s]))return!1;return!0}function Fy(e,n){return bt(e)?_i(e,n):bt(n)?_i(n,e):e===n}function _i(e,n){return bt(n)?e.length===n.length&&e.every((s,o)=>s===n[o]):e.length===1&&e[0]===n}function Ry(e,n){if(e.startsWith("/"))return e;if(!n.startsWith("/"))return we(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${n}". It should look like "/${n}".`),e;if(!e)return n;const s=n.split("/"),o=e.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var co;(function(e){e.pop="pop",e.push="push"})(co||(co={}));var Js;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Js||(Js={}));function Ly(e){if(!e)if(on){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Py(e)}const My=/^[^#]+#/;function Ny(e,n){return e.replace(My,"#")+n}function Uy(e,n){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const vl=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hy(e){let n;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(o&&r){we(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{we(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){we(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}n=Uy(l,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function vi(e,n){return(history.state?history.state.position-n:-1)+e}const ar=new Map;function Vy(e,n){ar.set(e,n)}function jy(e){const n=ar.get(e);return ar.delete(e),n}let Ky=()=>location.protocol+"//"+location.host;function Ou(e,n){const{pathname:s,search:o,hash:l}=n,r=e.indexOf("#");if(r>-1){let i=l.includes(e.slice(r))?e.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),yi(c,"")}return yi(s,e)+o+l}function Wy(e,n,s,o){let l=[],r=[],a=null;const i=({state:h})=>{const y=Ou(e,location),g=s.value,v=n.value;let b=0;if(h){if(s.value=y,n.value=h,a&&a===g){a=null;return}b=v?h.position-v.position:0}else o(y);l.forEach(B=>{B(s.value,g,{delta:b,type:co.pop,direction:b?b>0?Js.forward:Js.back:Js.unknown})})};function c(){a=s.value}function u(h){l.push(h);const y=()=>{const g=l.indexOf(h);g>-1&&l.splice(g,1)};return r.push(y),y}function d(){const{history:h}=window;h.state&&h.replaceState(xe({},h.state,{scroll:vl()}),"")}function p(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:p}}function bi(e,n,s,o=!1,l=!1){return{back:e,current:n,forward:s,replaced:o,position:window.history.length,scroll:l?vl():null}}function qy(e){const{history:n,location:s}=window,o={value:Ou(e,s)},l={value:n.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const p=e.indexOf("#"),h=p>-1?(s.host&&document.querySelector("base")?e:e.slice(p))+c:Ky()+e+c;try{n[d?"replaceState":"pushState"](u,"",h),l.value=u}catch(y){we("Error with push/replace State",y),s[d?"replace":"assign"](h)}}function a(c,u){const d=xe({},n.state,bi(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});r(c,d,!0),o.value=c}function i(c,u){const d=xe({},l.value,n.state,{forward:c,scroll:vl()});n.state||we(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const p=xe({},bi(o.value,c,null),{position:d.position+1},u);r(c,p,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function Gy(e){e=Ly(e);const n=qy(e),s=Wy(e,n.state,n.location,n.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=xe({location:"",base:e,go:o,createHref:Ny.bind(null,e)},n,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function zy(e){return typeof e=="string"||e&&typeof e=="object"}function Tu(e){return typeof e=="string"||typeof e=="symbol"}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pu=Symbol("navigation failure");var Ai;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ai||(Ai={}));const Yy={[1]({location:e,currentLocation:n}){return`No match for
 ${JSON.stringify(e)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:e,to:n}){return`Redirected from "${e.fullPath}" to "${Jy(n)}" via a navigation guard.`},[4]({from:e,to:n}){return`Navigation aborted from "${e.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:e,to:n}){return`Navigation cancelled from "${e.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:e,to:n}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function xs(e,n){return xe(new Error(Yy[e](n)),{type:e,[Pu]:!0},n)}function Xt(e,n){return e instanceof Error&&Pu in e&&(n==null||!!(e.type&n))}const Zy=["params","query","hash"];function Jy(e){if(typeof e=="string")return e;if("path"in e)return e.path;const n={};for(const s of Zy)s in e&&(n[s]=e[s]);return JSON.stringify(n,null,2)}const ki="[^/]+?",Qy={sensitive:!1,strict:!1,start:!0,end:!0},Xy=/[.+*?^${}()[\]/\\]/g;function eg(e,n){const s=xe({},Qy,n),o=[];let l=s.start?"^":"";const r=[];for(const u of e){const d=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let p=0;p<u.length;p++){const h=u[p];let y=40+(s.sensitive?.25:0);if(h.type===0)p||(l+="/"),l+=h.value.replace(Xy,"\\$&"),y+=40;else if(h.type===1){const{value:g,repeatable:v,optional:b,regexp:B}=h;r.push({name:g,repeatable:v,optional:b});const D=B||ki;if(D!==ki){y+=10;try{new RegExp(`(${D})`)}catch($){throw new Error(`Invalid custom RegExp for param "${g}" (${D}): `+$.message)}}let E=v?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||(E=b&&u.length<2?`(?:/${E})`:"/"+E),b&&(E+="?"),l+=E,y+=20,b&&(y+=-8),v&&(y+=-20),D===".*"&&(y+=-50)}d.push(y)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function i(u){const d=u.match(a),p={};if(!d)return null;for(let h=1;h<d.length;h++){const y=d[h]||"",g=r[h-1];p[g.name]=y&&g.repeatable?y.split("/"):y}return p}function c(u){let d="",p=!1;for(const h of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of h)if(y.type===0)d+=y.value;else if(y.type===1){const{value:g,repeatable:v,optional:b}=y,B=g in u?u[g]:"";if(bt(B)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const D=bt(B)?B.join("/"):B;if(!D)if(b)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${g}"`);d+=D}}return d||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function tg(e,n){let s=0;for(;s<e.length&&s<n.length;){const o=n[s]-e[s];if(o)return o;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function ng(e,n){let s=0;const o=e.score,l=n.score;for(;s<o.length&&s<l.length;){const r=tg(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(wi(o))return 1;if(wi(l))return-1}return l.length-o.length}function wi(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const sg={type:0,value:""},og=/[a-zA-Z0-9_]/;function lg(e){if(!e)return[[]];if(e==="/")return[[sg]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function n(y){throw new Error(`ERR (${s})/"${u}": ${y}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,u="",d="";function p(){u&&(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(u&&p(),a()):c===":"?(p(),s=1):h();break;case 4:h(),s=o;break;case 1:c==="("?s=2:og.test(c)?h():(p(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:p(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),p(),a(),l}function rg(e,n,s){const o=eg(lg(e.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&we(`Found duplicated params with name "${a.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=xe(o,{record:e,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function ag(e,n){const s=[],o=new Map;n=xi({strict:!1,end:!0,sensitive:!1},n);function l(d){return o.get(d)}function r(d,p,h){const y=!h,g=ig(d);pg(g,p),g.aliasOf=h&&h.record;const v=xi(n,d),b=[g];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const $ of E)b.push(xe({},g,{components:h?h.record.components:g.components,path:$,aliasOf:h?h.record:g}))}let B,D;for(const E of b){const{path:$}=E;if(p&&$[0]!=="/"){const V=p.record.path,j=V[V.length-1]==="/"?"":"/";E.path=p.record.path+($&&j+$)}if(E.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(B=rg(E,p,v),p&&$[0]==="/"&&fg(B,p),h?(h.alias.push(B),dg(h,B)):(D=D||B,D!==B&&D.alias.push(B),y&&d.name&&!Ci(B)&&a(d.name)),g.children){const V=g.children;for(let j=0;j<V.length;j++)r(V[j],B,h&&h.children[j])}h=h||B,(B.record.components&&Object.keys(B.record.components).length||B.record.name||B.record.redirect)&&c(B)}return D?()=>{a(D)}:Zs}function a(d){if(Tu(d)){const p=o.get(d);p&&(o.delete(d),s.splice(s.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=s.indexOf(d);p>-1&&(s.splice(p,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return s}function c(d){let p=0;for(;p<s.length&&ng(d,s[p])>=0&&(d.record.path!==s[p].record.path||!Iu(d,s[p]));)p++;s.splice(p,0,d),d.record.name&&!Ci(d)&&o.set(d.record.name,d)}function u(d,p){let h,y={},g,v;if("name"in d&&d.name){if(h=o.get(d.name),!h)throw xs(1,{location:d});{const D=Object.keys(d.params||{}).filter(E=>!h.keys.find($=>$.name===E));D.length&&we(`Discarded invalid param(s) "${D.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=h.record.name,y=xe(Di(p.params,h.keys.filter(D=>!D.optional).map(D=>D.name)),d.params&&Di(d.params,h.keys.map(D=>D.name))),g=h.stringify(y)}else if("path"in d)g=d.path,g.startsWith("/")||we(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=s.find(D=>D.re.test(g)),h&&(y=h.parse(g),v=h.record.name);else{if(h=p.name?o.get(p.name):s.find(D=>D.re.test(p.path)),!h)throw xs(1,{location:d,currentLocation:p});v=h.record.name,y=xe({},p.params,d.params),g=h.stringify(y)}const b=[];let B=h;for(;B;)b.unshift(B.record),B=B.parent;return{name:v,path:g,params:y,matched:b,meta:ug(b)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function Di(e,n){const s={};for(const o of n)o in e&&(s[o]=e[o]);return s}function ig(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:cg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function cg(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const o in e.components)n[o]=typeof s=="boolean"?s:s[o];return n}function Ci(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ug(e){return e.reduce((n,s)=>xe(n,s.meta),{})}function xi(e,n){const s={};for(const o in e)s[o]=o in n?n[o]:e[o];return s}function ir(e,n){return e.name===n.name&&e.optional===n.optional&&e.repeatable===n.repeatable}function dg(e,n){for(const s of e.keys)if(!s.optional&&!n.keys.find(ir.bind(null,s)))return we(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!e.keys.find(ir.bind(null,s)))return we(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${s.name}"`)}function pg(e,n){n&&n.record.name&&!e.name&&!e.path&&we(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function fg(e,n){for(const s of n.keys)if(!e.keys.find(ir.bind(null,s)))return we(`Absolute path "${e.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function Iu(e,n){return n.children.some(s=>s===e||Iu(e,s))}const Fu=/#/g,hg=/&/g,mg=/\//g,yg=/=/g,gg=/\?/g,Ru=/\+/g,_g=/%5B/g,vg=/%5D/g,Lu=/%5E/g,bg=/%60/g,Mu=/%7B/g,Ag=/%7C/g,Nu=/%7D/g,kg=/%20/g;function qr(e){return encodeURI(""+e).replace(Ag,"|").replace(_g,"[").replace(vg,"]")}function wg(e){return qr(e).replace(Mu,"{").replace(Nu,"}").replace(Lu,"^")}function cr(e){return qr(e).replace(Ru,"%2B").replace(kg,"+").replace(Fu,"%23").replace(hg,"%26").replace(bg,"`").replace(Mu,"{").replace(Nu,"}").replace(Lu,"^")}function Dg(e){return cr(e).replace(yg,"%3D")}function Cg(e){return qr(e).replace(Fu,"%23").replace(gg,"%3F")}function xg(e){return e==null?"":Cg(e).replace(mg,"%2F")}function uo(e){try{return decodeURIComponent(""+e)}catch{we(`Error decoding "${e}". Using original value`)}return""+e}function Bg(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(Ru," "),a=r.indexOf("="),i=uo(a<0?r:r.slice(0,a)),c=a<0?null:uo(r.slice(a+1));if(i in n){let u=n[i];bt(u)||(u=n[i]=[u]),u.push(c)}else n[i]=c}return n}function Bi(e){let n="";for(let s in e){const o=e[s];if(s=Dg(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(bt(o)?o.map(r=>r&&cr(r)):[o&&cr(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function Eg(e){const n={};for(const s in e){const o=e[s];o!==void 0&&(n[s]=bt(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}const Sg=Symbol("router view location matched"),Ei=Symbol("router view depth"),Gr=Symbol("router"),Uu=Symbol("route location"),ur=Symbol("router view location");function Rs(){let e=[];function n(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function vn(e,n,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=p=>{p===!1?i(xs(4,{from:s,to:n})):p instanceof Error?i(p):zy(p)?i(xs(2,{from:n,to:p})):(r&&o.enterCallbacks[l]===r&&typeof p=="function"&&r.push(p),a())},u=e.call(o&&o.instances[l],n,s,$g(c,n,s));let d=Promise.resolve(u);if(e.length<3&&(d=d.then(c)),e.length>2){const p=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(h=>c._called?h:(we(p),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){we(p),i(new Error("Invalid navigation guard"));return}}d.catch(p=>i(p))})}function $g(e,n,s){let o=0;return function(){o++===1&&we(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function Pl(e,n,s,o){const l=[];for(const r of e){!r.components&&!r.children.length&&we(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw we(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){we(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,we(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(Og(i)){const u=(i.__vccOpts||i)[n];u&&l.push(vn(u,s,o,r,a))}else{let c=i();"catch"in c||(we(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=Oy(u)?u.default:u;r.components[a]=d;const h=(d.__vccOpts||d)[n];return h&&vn(h,s,o,r,a)()}))}}}return l}function Og(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Si(e){const n=U(Gr),s=U(Uu),o=O(()=>n.resolve(A(e.to))),l=O(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],p=s.matched;if(!d||!p.length)return-1;const h=p.findIndex($n.bind(null,d));if(h>-1)return h;const y=$i(c[u-2]);return u>1&&$i(d)===y&&p[p.length-1].path!==y?p.findIndex($n.bind(null,c[u-2])):h}),r=O(()=>l.value>-1&&Fg(s.params,o.value.params)),a=O(()=>l.value>-1&&l.value===s.matched.length-1&&$u(s.params,o.value.params));function i(c={}){return Ig(c)?n[A(e.replace)?"replace":"push"](A(e.to)).catch(Zs):Promise.resolve()}if(on){const c=Jt();if(c){const u={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),Ss(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:O(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const Tg=$e({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Si,setup(e,{slots:n}){const s=Qe(Si(e)),{options:o}=U(Gr),l=O(()=>({[Oi(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Oi(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return e.custom?r:ns("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),Pg=Tg;function Ig(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Fg(e,n){for(const s in n){const o=n[s],l=e[s];if(typeof o=="string"){if(o!==l)return!1}else if(!bt(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function $i(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Oi=(e,n,s)=>e??n??s,Rg=$e({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){Mg();const o=U(ur),l=O(()=>e.route||o.value),r=U(Ei,0),a=O(()=>{let u=A(r);const{matched:d}=l.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),i=O(()=>l.value.matched[a.value]);gt(Ei,O(()=>a.value+1)),gt(Sg,i),gt(ur,l);const c=se();return Ue(()=>[c.value,i.value,e.name],([u,d,p],[h,y,g])=>{d&&(d.instances[p]=u,y&&y!==d&&u&&u===h&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),u&&d&&(!y||!$n(d,y)||!h)&&(d.enterCallbacks[p]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=l.value,d=e.name,p=i.value,h=p&&p.components[d];if(!h)return Ti(s.default,{Component:h,route:u});const y=p.props[d],g=y?y===!0?u.params:typeof y=="function"?y(u):y:null,b=ns(h,xe({},g,n,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:c}));if(on&&b.ref){const B={depth:a.value,name:p.name,path:p.path,meta:p.meta};(bt(b.ref)?b.ref.map(E=>E.i):[b.ref.i]).forEach(E=>{E.__vrv_devtools=B})}return Ti(s.default,{Component:b,route:u})||b}}});function Ti(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const Lg=Rg;function Mg(){const e=Jt(),n=e.parent&&e.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const s=n==="KeepAlive"?"keep-alive":"transition";we(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Ls(e,n){const s=xe({},e,{matched:e.matched.map(o=>Gg(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:n,value:s}}}function So(e){return{_custom:{display:e}}}let Ng=0;function Ug(e,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const o=Ng++;$y({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,p)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ls(n.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:p})=>{if(p.__vrv_devtools){const h=p.__vrv_devtools;d.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Hu})}bt(p.__vrl_devtools)&&(p.__devtoolsApi=l,p.__vrl_devtools.forEach(h=>{let y=Ku,g="";h.isExactActive?(y=ju,g="This is exactly active"):h.isActive&&(y=Vu,g="This link is active"),d.tags.push({label:h.route.path,textColor:0,tooltip:g,backgroundColor:y})}))}),Ue(n.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),n.onError((d,p)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:p.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:p.meta.__navigationId}})});let a=0;n.beforeEach((d,p)=>{const h={guard:So("beforeEach"),from:Ls(p,"Current Location during this navigation"),to:Ls(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:h,groupId:d.meta.__navigationId}})}),n.afterEach((d,p,h)=>{const y={guard:So("afterEach")};h?(y.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},y.status=So("❌")):y.status=So("✅"),y.from=Ls(p,"Current Location during this navigation"),y.to=Ls(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:y,logType:h?"warning":"default",groupId:d.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const d=u;let p=s.getRoutes().filter(h=>!h.parent);p.forEach(Gu),d.filter&&(p=p.filter(h=>dr(h,d.filter.toLowerCase()))),p.forEach(h=>qu(h,n.currentRoute.value)),d.rootNodes=p.map(Wu)}let u;l.on.getInspectorTree(d=>{u=d,d.app===e&&d.inspectorId===i&&c()}),l.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===i){const h=s.getRoutes().find(y=>y.record.__vd_id===d.nodeId);h&&(d.state={options:Vg(h)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function Hg(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function Vg(e){const{record:n}=e,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${Hg(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),e.alias.length&&s.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&s.push({editable:!1,key:"meta",value:e.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),s}const Hu=15485081,Vu=2450411,ju=8702998,jg=2282478,Ku=16486972,Kg=6710886;function Wu(e){const n=[],{record:s}=e;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:jg}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:Ku}),e.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:Hu}),e.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:ju}),e.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:Vu}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:Kg});let o=s.__vd_id;return o==null&&(o=String(Wg++),s.__vd_id=o),{id:o,label:s.path,tags:n,children:e.children.map(Wu)}}let Wg=0;const qg=/^\/(.*)\/([a-z]*)$/;function qu(e,n){const s=n.matched.length&&$n(n.matched[n.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=s,s||(e.__vd_active=n.matched.some(o=>$n(o,e.record))),e.children.forEach(o=>qu(o,n))}function Gu(e){e.__vd_match=!1,e.children.forEach(Gu)}function dr(e,n){const s=String(e.re).match(qg);if(e.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return e.children.forEach(a=>dr(a,n)),e.record.path!=="/"||n==="/"?(e.__vd_match=e.re.test(n),!0):!1;const l=e.record.path.toLowerCase(),r=uo(l);return!n.startsWith("/")&&(r.includes(n)||l.includes(n))||r.startsWith(n)||l.startsWith(n)||e.record.name&&String(e.record.name).includes(n)?!0:e.children.some(a=>dr(a,n))}function Gg(e,n){const s={};for(const o in e)n.includes(o)||(s[o]=e[o]);return s}function zg(e){const n=ag(e.routes,e),s=e.parseQuery||Bg,o=e.stringifyQuery||Bi,l=e.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Rs(),a=Rs(),i=Rs(),c=zt(mn);let u=mn;on&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ol.bind(null,x=>""+x),p=Ol.bind(null,xg),h=Ol.bind(null,uo);function y(x,Q){let K,X;return Tu(x)?(K=n.getRecordMatcher(x),X=Q):X=x,n.addRoute(X,K)}function g(x){const Q=n.getRecordMatcher(x);Q?n.removeRoute(Q):we(`Cannot remove non-existent route "${String(x)}"`)}function v(){return n.getRoutes().map(x=>x.record)}function b(x){return!!n.getRecordMatcher(x)}function B(x,Q){if(Q=xe({},Q||c.value),typeof x=="string"){const ie=Tl(s,x,Q.path),m=n.resolve({path:ie.path},Q),_=l.createHref(ie.fullPath);return _.startsWith("//")?we(`Location "${x}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):m.matched.length||we(`No match found for location with path "${x}"`),xe(ie,m,{params:h(m.params),hash:uo(ie.hash),redirectedFrom:void 0,href:_})}let K;if("path"in x)"params"in x&&!("name"in x)&&Object.keys(x.params).length&&we(`Path "${x.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),K=xe({},x,{path:Tl(s,x.path,Q.path).path});else{const ie=xe({},x.params);for(const m in ie)ie[m]==null&&delete ie[m];K=xe({},x,{params:p(x.params)}),Q.params=p(Q.params)}const X=n.resolve(K,Q),ge=x.hash||"";ge&&!ge.startsWith("#")&&we(`A \`hash\` should always start with the character "#". Replace "${ge}" with "#${ge}".`),X.params=d(h(X.params));const ke=Iy(o,xe({},x,{hash:wg(ge),path:X.path})),de=l.createHref(ke);return de.startsWith("//")?we(`Location "${x}" resolved to "${de}". A resolved location cannot start with multiple slashes.`):X.matched.length||we(`No match found for location with path "${"path"in x?x.path:x}"`),xe({fullPath:ke,hash:ge,query:o===Bi?Eg(x.query):x.query||{}},X,{redirectedFrom:void 0,href:de})}function D(x){return typeof x=="string"?Tl(s,x,c.value.path):xe({},x)}function E(x,Q){if(u!==x)return xs(8,{from:Q,to:x})}function $(x){return N(x)}function V(x){return $(xe(D(x),{replace:!0}))}function j(x){const Q=x.matched[x.matched.length-1];if(Q&&Q.redirect){const{redirect:K}=Q;let X=typeof K=="function"?K(x):K;if(typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=D(X):{path:X},X.params={}),!("path"in X)&&!("name"in X))throw we(`Invalid redirect found:
${JSON.stringify(X,null,2)}
 when navigating to "${x.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return xe({query:x.query,hash:x.hash,params:"path"in X?{}:x.params},X)}}function N(x,Q){const K=u=B(x),X=c.value,ge=x.state,ke=x.force,de=x.replace===!0,ie=j(K);if(ie)return N(xe(D(ie),{state:typeof ie=="object"?xe({},ge,ie.state):ge,force:ke,replace:de}),Q||K);const m=K;m.redirectedFrom=Q;let _;return!ke&&gi(o,X,K)&&(_=xs(16,{to:m,from:X}),Te(X,X,!0,!1)),(_?Promise.resolve(_):ee(m,X)).catch(w=>Xt(w)?Xt(w,2)?w:ye(w):J(w,m,X)).then(w=>{if(w){if(Xt(w,2))return gi(o,B(w.to),m)&&Q&&(Q._count=Q._count?Q._count+1:1)>10?(we(`Detected an infinite redirection in a navigation guard when going from "${X.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):N(xe({replace:de},D(w.to),{state:typeof w.to=="object"?xe({},ge,w.to.state):ge,force:ke}),Q||m)}else w=ce(m,X,!0,de,ge);return oe(m,X,w),w})}function L(x,Q){const K=E(x,Q);return K?Promise.reject(K):Promise.resolve()}function ee(x,Q){let K;const[X,ge,ke]=Yg(x,Q);K=Pl(X.reverse(),"beforeRouteLeave",x,Q);for(const ie of X)ie.leaveGuards.forEach(m=>{K.push(vn(m,x,Q))});const de=L.bind(null,x,Q);return K.push(de),ds(K).then(()=>{K=[];for(const ie of r.list())K.push(vn(ie,x,Q));return K.push(de),ds(K)}).then(()=>{K=Pl(ge,"beforeRouteUpdate",x,Q);for(const ie of ge)ie.updateGuards.forEach(m=>{K.push(vn(m,x,Q))});return K.push(de),ds(K)}).then(()=>{K=[];for(const ie of x.matched)if(ie.beforeEnter&&!Q.matched.includes(ie))if(bt(ie.beforeEnter))for(const m of ie.beforeEnter)K.push(vn(m,x,Q));else K.push(vn(ie.beforeEnter,x,Q));return K.push(de),ds(K)}).then(()=>(x.matched.forEach(ie=>ie.enterCallbacks={}),K=Pl(ke,"beforeRouteEnter",x,Q),K.push(de),ds(K))).then(()=>{K=[];for(const ie of a.list())K.push(vn(ie,x,Q));return K.push(de),ds(K)}).catch(ie=>Xt(ie,8)?ie:Promise.reject(ie))}function oe(x,Q,K){for(const X of i.list())X(x,Q,K)}function ce(x,Q,K,X,ge){const ke=E(x,Q);if(ke)return ke;const de=Q===mn,ie=on?history.state:{};K&&(X||de?l.replace(x.fullPath,xe({scroll:de&&ie&&ie.scroll},ge)):l.push(x.fullPath,ge)),c.value=x,Te(x,Q,K,de),ye()}let q;function be(){q||(q=l.listen((x,Q,K)=>{if(!pn.listening)return;const X=B(x),ge=j(X);if(ge){N(xe(ge,{replace:!0}),X).catch(Zs);return}u=X;const ke=c.value;on&&Vy(vi(ke.fullPath,K.delta),vl()),ee(X,ke).catch(de=>Xt(de,12)?de:Xt(de,2)?(N(de.to,X).then(ie=>{Xt(ie,20)&&!K.delta&&K.type===co.pop&&l.go(-1,!1)}).catch(Zs),Promise.reject()):(K.delta&&l.go(-K.delta,!1),J(de,X,ke))).then(de=>{de=de||ce(X,ke,!1),de&&(K.delta&&!Xt(de,8)?l.go(-K.delta,!1):K.type===co.pop&&Xt(de,20)&&l.go(-1,!1)),oe(X,ke,de)}).catch(Zs)}))}let Fe=Rs(),De=Rs(),Re;function J(x,Q,K){ye(x);const X=De.list();return X.length?X.forEach(ge=>ge(x,Q,K)):(we("uncaught error during route navigation:"),console.error(x)),Promise.reject(x)}function re(){return Re&&c.value!==mn?Promise.resolve():new Promise((x,Q)=>{Fe.add([x,Q])})}function ye(x){return Re||(Re=!x,be(),Fe.list().forEach(([Q,K])=>x?K(x):Q()),Fe.reset()),x}function Te(x,Q,K,X){const{scrollBehavior:ge}=e;if(!on||!ge)return Promise.resolve();const ke=!K&&jy(vi(x.fullPath,0))||(X||!K)&&history.state&&history.state.scroll||null;return It().then(()=>ge(x,Q,ke)).then(de=>de&&Hy(de)).catch(de=>J(de,x,Q))}const ht=x=>l.go(x);let et;const pt=new Set,pn={currentRoute:c,listening:!0,addRoute:y,removeRoute:g,hasRoute:b,getRoutes:v,resolve:B,options:e,push:$,replace:V,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:De.add,isReady:re,install(x){const Q=this;x.component("RouterLink",Pg),x.component("RouterView",Lg),x.config.globalProperties.$router=Q,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>A(c)}),on&&!et&&c.value===mn&&(et=!0,$(l.location).catch(ge=>{we("Unexpected error when starting the router:",ge)}));const K={};for(const ge in mn)K[ge]=O(()=>c.value[ge]);x.provide(Gr,Q),x.provide(Uu,Qe(K)),x.provide(ur,c);const X=x.unmount;pt.add(x),x.unmount=function(){pt.delete(x),pt.size<1&&(u=mn,q&&q(),q=null,c.value=mn,et=!1,Re=!1),X()},on&&Ug(x,Q,n)}};return pn}function ds(e){return e.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function Yg(e,n){const s=[],o=[],l=[],r=Math.max(n.matched.length,e.matched.length);for(let a=0;a<r;a++){const i=n.matched[a];i&&(e.matched.find(u=>$n(u,i))?o.push(i):s.push(i));const c=e.matched[a];c&&(n.matched.find(u=>$n(u,c))||l.push(c))}return[s,o,l]}const Il=se(!1),Qs=se(!1),_s=se(!1),Zg=se(!0),pr=Mm({xs:460,...Pm}),Zn=ky(),zu=uy(),Jg=O(()=>Zn.height.value-Zn.width.value/Dn>180),Yu=iy(Rt?document.body:null),ws=Tm(),Qg=O(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=ws.value)==null?void 0:e.tagName)||"")||((n=ws.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),Xg=O(()=>{var e;return["BUTTON","A"].includes(((e=ws.value)==null?void 0:e.tagName)||"")});Lt("slidev-camera","default");Lt("slidev-mic","default");const Lo=Lt("slidev-scale",0),rt=Lt("slidev-show-overview",!1),Fl=Lt("slidev-presenter-cursor",!0),Pi=Lt("slidev-show-editor",!1);Lt("slidev-editor-width",Rt?window.innerWidth*.4:100);const Zu=Cu(rt);function Ii(e,n,s,o=l=>l){return e*o(.5-n*(.5-s))}function e_(e){return[-e[0],-e[1]]}function $t(e,n){return[e[0]+n[0],e[1]+n[1]]}function Dt(e,n){return[e[0]-n[0],e[1]-n[1]]}function St(e,n){return[e[0]*n,e[1]*n]}function t_(e,n){return[e[0]/n,e[1]/n]}function Ms(e){return[e[1],-e[0]]}function Fi(e,n){return e[0]*n[0]+e[1]*n[1]}function n_(e,n){return e[0]===n[0]&&e[1]===n[1]}function s_(e){return Math.hypot(e[0],e[1])}function o_(e){return e[0]*e[0]+e[1]*e[1]}function Ri(e,n){return o_(Dt(e,n))}function Ju(e){return t_(e,s_(e))}function l_(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function Ns(e,n,s){let o=Math.sin(s),l=Math.cos(s),r=e[0]-n[0],a=e[1]-n[1],i=r*l-a*o,c=r*o+a*l;return[i+n[0],c+n[1]]}function fr(e,n,s){return $t(e,St(Dt(n,e),s))}function Li(e,n,s){return $t(e,St(n,s))}var{min:ps,PI:r_}=Math,Mi=.275,Us=r_+1e-4;function a_(e,n={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=J=>J,start:i={},end:c={},last:u=!1}=n,{cap:d=!0,easing:p=J=>J*(2-J)}=i,{cap:h=!0,easing:y=J=>--J*J*J+1}=c;if(e.length===0||s<=0)return[];let g=e[e.length-1].runningLength,v=i.taper===!1?0:i.taper===!0?Math.max(s,g):i.taper,b=c.taper===!1?0:c.taper===!0?Math.max(s,g):c.taper,B=Math.pow(s*o,2),D=[],E=[],$=e.slice(0,10).reduce((J,re)=>{let ye=re.pressure;if(r){let Te=ps(1,re.distance/s),ht=ps(1,1-Te);ye=ps(1,J+(ht-J)*(Te*Mi))}return(J+ye)/2},e[0].pressure),V=Ii(s,l,e[e.length-1].pressure,a),j,N=e[0].vector,L=e[0].point,ee=L,oe=L,ce=ee,q=!1;for(let J=0;J<e.length;J++){let{pressure:re}=e[J],{point:ye,vector:Te,distance:ht,runningLength:et}=e[J];if(J<e.length-1&&g-et<3)continue;if(l){if(r){let ke=ps(1,ht/s),de=ps(1,1-ke);re=ps(1,$+(de-$)*(ke*Mi))}V=Ii(s,l,re,a)}else V=s/2;j===void 0&&(j=V);let pt=et<v?p(et/v):1,pn=g-et<b?y((g-et)/b):1;V=Math.max(.01,V*Math.min(pt,pn));let x=(J<e.length-1?e[J+1]:e[J]).vector,Q=J<e.length-1?Fi(Te,x):1,K=Fi(Te,N)<0&&!q,X=Q!==null&&Q<0;if(K||X){let ke=St(Ms(N),V);for(let de=1/13,ie=0;ie<=1;ie+=de)oe=Ns(Dt(ye,ke),ye,Us*ie),D.push(oe),ce=Ns($t(ye,ke),ye,Us*-ie),E.push(ce);L=oe,ee=ce,X&&(q=!0);continue}if(q=!1,J===e.length-1){let ke=St(Ms(Te),V);D.push(Dt(ye,ke)),E.push($t(ye,ke));continue}let ge=St(Ms(fr(x,Te,Q)),V);oe=Dt(ye,ge),(J<=1||Ri(L,oe)>B)&&(D.push(oe),L=oe),ce=$t(ye,ge),(J<=1||Ri(ee,ce)>B)&&(E.push(ce),ee=ce),$=re,N=Te}let be=e[0].point.slice(0,2),Fe=e.length>1?e[e.length-1].point.slice(0,2):$t(e[0].point,[1,1]),De=[],Re=[];if(e.length===1){if(!(v||b)||u){let J=Li(be,Ju(Ms(Dt(be,Fe))),-(j||V)),re=[];for(let ye=1/13,Te=ye;Te<=1;Te+=ye)re.push(Ns(J,be,Us*2*Te));return re}}else{if(!(v||b&&e.length===1))if(d)for(let re=1/13,ye=re;ye<=1;ye+=re){let Te=Ns(E[0],be,Us*ye);De.push(Te)}else{let re=Dt(D[0],E[0]),ye=St(re,.5),Te=St(re,.51);De.push(Dt(be,ye),Dt(be,Te),$t(be,Te),$t(be,ye))}let J=Ms(e_(e[e.length-1].vector));if(b||v&&e.length===1)Re.push(Fe);else if(h){let re=Li(Fe,J,V);for(let ye=1/29,Te=ye;Te<1;Te+=ye)Re.push(Ns(re,Fe,Us*3*Te))}else Re.push($t(Fe,St(J,V)),$t(Fe,St(J,V*.99)),Dt(Fe,St(J,V*.99)),Dt(Fe,St(J,V)))}return D.concat(Re,E.reverse(),De)}function i_(e,n={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=n;if(e.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:y,y:g,pressure:v=.5})=>[y,g,v]);if(i.length===2){let y=i[1];i=i.slice(0,-1);for(let g=1;g<5;g++)i.push(fr(i[0],y,g/4))}i.length===1&&(i=[...i,[...$t(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,p=c[0],h=i.length-1;for(let y=1;y<i.length;y++){let g=r&&y===h?i[y].slice(0,2):fr(p.point,i[y],a);if(n_(p.point,g))continue;let v=l_(g,p.point);if(d+=v,y<h&&!u){if(d<l)continue;u=!0}p={point:g,pressure:i[y][2]>=0?i[y][2]:.5,vector:Ju(Dt(p.point,g)),distance:v,runningLength:d},c.push(p)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function c_(e,n={}){return a_(i_(e,n),n)}var u_=()=>({events:{},emit(e,...n){let s=this.events[e]||[];for(let o=0,l=s.length;o<l;o++)s[o](...n)},on(e,n){var s;return(s=this.events[e])!=null&&s.push(n)||(this.events[e]=[n]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(l=>n!==l)}}});function Qo(e,n){return e-n}function d_(e){return e<0?-1:1}function Xo(e){return[Math.abs(e),d_(e)]}function Qu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var p_=2,ln=p_,Os=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*o,y:r.y*o,pressure:e.pressure}}}createElement(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg",e),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(ln))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},f_=class extends Os{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=c_(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[l,r],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},h_=class extends Os{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Xo(e.x-this.start.x),[o,l]=Xo(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Qo),[i,c]=[this.start.y,this.start.y+o*l].sort(Qo);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Xu(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var m_=class extends Os{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=Qu(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Xu(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+l*r,s=this.start.y+l):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},y_=class extends Os{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Xo(e.x-this.start.x),[o,l]=Xo(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Qo),[i,c]=[this.start.y,this.start.y+o*l].sort(Qo);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function g_(e,n){const s=e.x-n.x,o=e.y-n.y;return s*s+o*o}function __(e,n,s){let o=n.x,l=n.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const i=((e.x-o)*r+(e.y-l)*a)/(r*r+a*a);i>1?(o=s.x,l=s.y):i>0&&(o+=r*i,l+=a*i)}return r=e.x-o,a=e.y-l,r*r+a*a}function v_(e,n){let s=e[0];const o=[s];let l;for(let r=1,a=e.length;r<a;r++)l=e[r],g_(l,s)>n&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function hr(e,n,s,o,l){let r=o,a=0;for(let i=n+1;i<s;i++){const c=__(e[i],e[n],e[s]);c>r&&(a=i,r=c)}r>o&&(a-n>1&&hr(e,n,a,o,l),l.push(e[a]),s-a>1&&hr(e,a,s,o,l))}function b_(e,n){const s=e.length-1,o=[e[0]];return hr(e,0,s,n,o),o.push(e[s]),o}function Ni(e,n,s=!1){if(e.length<=2)return e;const o=n!==void 0?n*n:1;return e=s?e:v_(e,o),e=b_(e,o),e}var A_=class extends Os{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Qu();const n=Xu(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ni(this.points,1,!0),this.count=0),this.attr("d",Hi(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Hi(Ni(this.points,1,!0))),!e.getTotalLength()))}};function k_(e,n){const s=n.x-e.x,o=n.y-e.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Ui(e,n,s,o){const l=n||e,r=s||e,a=.2,i=k_(l,r),c=i.angle+(o?Math.PI:0),u=i.length*a,d=e.x+Math.cos(c)*u,p=e.y+Math.sin(c)*u;return{x:d,y:p}}function w_(e,n,s){const o=Ui(s[n-1],s[n-2],e),l=Ui(e,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(ln)},${o.y.toFixed(ln)} ${l.x.toFixed(ln)},${l.y.toFixed(ln)} ${e.x.toFixed(ln)},${e.y.toFixed(ln)}`}function Hi(e){return e.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(ln)},${s.y.toFixed(ln)}`:`${n} ${w_(s,o,l)}`,"")}var D_=class extends Os{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),u=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||r})}}else r.children&&n(r.children,r)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,o=e.x2,l=n.x1,r=n.x2,a=e.y1,i=e.y2,c=n.y1,u=n.y2,d=(s-o)*(c-u)-(a-i)*(l-r),p=(s*i-a*o)*(l-r)-(s-o)*(l*u-c*r),h=(s*i-a*o)*(c-u)-(a-i)*(l*u-c*r),y=(g,v,b)=>g>=v&&g<=b?!0:g>=b&&g<=v;if(d===0)return!1;{const g={x:p/d,y:h/d};return y(g.x,s,o)&&y(g.y,a,i)&&y(g.x,l,r)&&y(g.y,c,u)}}};function C_(e){return{draw:new A_(e),stylus:new f_(e),line:new m_(e),rectangle:new y_(e),ellipse:new h_(e),eraseLine:new D_(e)}}var x_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=u_(),this._models=C_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function B_(e){return new x_(e)}const mr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],qt=Lt("slidev-drawing-enabled",!1),V2=Lt("slidev-drawing-pinned",!1),E_=se(!1),S_=se(!1),$_=se(!1),po=se(!1),Vn=rm(Lt("slidev-drawing-brush",{color:mr[0],size:4,mode:"stylus"})),Vi=se("stylus"),ed=O(()=>Oe.drawings.syncAll||Tt.value);let fo=!1;const Hs=O({get(){return Vi.value},set(e){Vi.value=e,e==="arrow"?(Vn.mode="line",Vn.arrowEnd=!0):(Vn.mode=e,Vn.arrowEnd=!1)}}),O_=Qe({brush:Vn,acceptsInputTypes:O(()=>qt.value&&(!Oe.drawings.presenterOnly||Tt.value)?void 0:["pen"]),coordinateTransform:!1}),ut=Br(B_(O_));function T_(){ut.clear(),ed.value&&Au(Ye.value,"")}function zr(){var e;S_.value=ut.canRedo(),E_.value=ut.canUndo(),$_.value=!!((e=ut.el)!=null&&e.children.length)}function P_(e){fo=!0;const n=Zo[e||Ye.value];n!=null?ut.load(n):ut.clear(),zr(),fo=!1}ut.on("changed",()=>{if(zr(),!fo){const e=ut.dump(),n=Ye.value;(Zo[n]||"")!==e&&ed.value&&Au(n,ut.dump())}});Zh(e=>{fo=!0,e[Ye.value]!=null&&ut.load(e[Ye.value]||""),fo=!1,zr()});It(()=>{Ue(Ye,()=>{ut.mounted&&P_()},{immediate:!0})});ut.on("start",()=>po.value=!0);ut.on("end",()=>po.value=!1);window.addEventListener("keydown",e=>{if(!qt.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ut.redo():ut.undo():e.code==="Escape"?qt.value=!1:e.code==="KeyL"&&n?Hs.value="line":e.code==="KeyA"&&n?Hs.value="arrow":e.code==="KeyS"&&n?Hs.value="stylus":e.code==="KeyR"&&n?Hs.value="rectangle":e.code==="KeyE"&&n?Hs.value="ellipse":e.code==="KeyC"&&n?T_():e.code.startsWith("Digit")&&n&&+e.code[5]<=mr.length?Vn.color=mr[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);function We(...e){return O(()=>e.every(n=>ct(n)))}function mt(e){return O(()=>!ct(e))}const ji=zm(),Rl=Lt("slidev-color-schema","auto"),yr=O(()=>Oe.colorSchema!=="auto"),Ao=O({get(){return yr.value?Oe.colorSchema==="dark":Rl.value==="auto"?ji.value:Rl.value==="dark"},set(e){yr.value||(Rl.value=e===ji.value?"auto":e?"dark":"light")}}),td=Cu(Ao);Rt&&Ue(Ao,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const Mo=se(1),No=O(()=>Ke.length-1),_t=se(0),Yr=se(0);function I_(){_t.value>Mo.value&&(_t.value-=1)}function F_(){_t.value<No.value&&(_t.value+=1)}function R_(){if(_t.value>Mo.value){let e=_t.value-Yr.value;e<Mo.value&&(e=Mo.value),_t.value=e}}function L_(){if(_t.value<No.value){let e=_t.value+Yr.value;e>No.value&&(e=No.value),_t.value=e}}function M_(){const{escape:e,space:n,shift:s,left:o,right:l,up:r,down:a,enter:i,d:c,g:u,o:d}=zu;let p=[{name:"next_space",key:We(n,mt(s)),fn:Jn,autoRepeat:!0},{name:"prev_space",key:We(n,s),fn:Qn,autoRepeat:!0},{name:"next_right",key:We(l,mt(s),mt(rt)),fn:Jn,autoRepeat:!0},{name:"prev_left",key:We(o,mt(s),mt(rt)),fn:Qn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Jn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Qn,autoRepeat:!0},{name:"next_down",key:We(a,mt(rt)),fn:tl,autoRepeat:!0},{name:"prev_up",key:We(r,mt(rt)),fn:()=>nl(!1),autoRepeat:!0},{name:"next_shift",key:We(l,s),fn:tl,autoRepeat:!0},{name:"prev_shift",key:We(o,s),fn:()=>nl(!1),autoRepeat:!0},{name:"toggle_dark",key:We(c,mt(qt)),fn:td},{name:"toggle_overview",key:We(d,mt(qt)),fn:Zu},{name:"hide_overview",key:We(e,mt(qt)),fn:()=>rt.value=!1},{name:"goto",key:We(u,mt(qt)),fn:()=>_s.value=!_s.value},{name:"next_overview",key:We(l,rt),fn:F_},{name:"prev_overview",key:We(o,rt),fn:I_},{name:"up_overview",key:We(r,rt),fn:R_},{name:"down_overview",key:We(a,rt),fn:L_},{name:"goto_from_overview",key:We(i,rt),fn:()=>{Es(_t.value),rt.value=!1}}];const h=new Set(p.map(g=>g.name));if(p.filter(g=>g.name&&h.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return p}const nd=We(mt(Qg),mt(Xg),Zg);function N_(e,n,s=!1){typeof e=="string"&&(e=zu[e]);const o=We(e,nd);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),n()};return Ue(o,a,{flush:"sync"})}function U_(e,n){return Om(e,s=>{nd.value&&(s.repeat||n())})}function H_(){const e=M_();new Map(e.map(s=>[s.key,s])).forEach(s=>{s.fn&&N_(s.key,s.fn,s.autoRepeat)}),U_("f",()=>Yu.toggle())}const V_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j_=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),K_=[j_];function W_(e,n){return k(),Z("svg",V_,K_)}const q_={name:"carbon-close",render:W_};function Zr(e,n=""){var l,r;const s=["slidev-page",n],o=(r=(l=e==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const G_=$e({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;U(z);const s=se(),o=ay(s),l=O(()=>n.width?n.width:o.width.value),r=O(()=>n.width?n.width/Dn:o.height.value);n.width&&Ss(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=O(()=>l.value/r.value),i=O(()=>n.scale&&!Bs.value?n.scale:a.value<Dn?l.value/Cn:r.value*Dn/Cn),c=O(()=>({height:`${jr}px`,width:`${Cn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=O(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return gt(vu,i),(d,p)=>(k(),Z("div",{id:"slide-container",ref_key:"root",ref:s,class:Ne(A(u))},[t("div",{id:"slide-content",style:ze(A(c))},[st(d.$slots,"default")],4),st(d.$slots,"controls")],2))}});const Y=(e,n)=>{const s=e.__vccOpts||e;for(const[o,l]of n)s[o]=l;return s},sd=Y(G_,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Jr=$e({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=Wt(e,"clicks",n),o=Wt(e,"clicksElements",n),l=Wt(e,"clicksDisabled",n),r=Wt(e,"clicksOrderMap",n);o.value.length=0,gt(Mh,e.route),gt(Nh,e.context),gt(yu,s),gt(_u,l),gt(gu,o),gt(Lh,r)},render(){var e,n;return this.$props.is?ns(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),z_=["innerHTML"],Y_=$e({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return U(z),(n,s)=>A(Zo)[e.page]?(k(),Z("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:A(Zo)[e.page]},null,8,z_)):_e("v-if",!0)}}),od=Y(Y_,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Z_=Object.freeze(Object.defineProperty({__proto__:null,default:od},Symbol.toStringTag,{value:"Module"})),J_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Q_=["onClick"],X_=$e({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:n}){const s=e;U(z);const o=Wt(s,"modelValue",n);function l(){o.value=!1}function r(y){Es(y),l()}function a(y){return y===_t.value}const i=pr.smaller("xs"),c=pr.smaller("sm"),u=4*16*2,d=2*16,p=O(()=>i.value?Zn.width.value-u:c.value?(Zn.width.value-u-d)/2:300),h=O(()=>Math.floor((Zn.width.value-u)/(p.value+d)));return Ss(()=>{_t.value=Ye.value,Yr.value=h.value}),(y,g)=>{const v=q_;return k(),Z(Be,null,[ml(t("div",J_,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ze(`grid-template-columns: repeat(auto-fit,minmax(${A(p)}px,1fr))`)},[(k(!0),Z(Be,null,_o(A(Ke).slice(0,-1),(b,B)=>(k(),Z("div",{key:b.path,class:"relative"},[t("div",{class:Ne(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(B+1),"border-gray-400":!a(B+1)}]),style:ze(A(Kr)),onClick:D=>r(+b.path)},[(k(),G(sd,{key:b.path,width:A(p),"clicks-disabled":!0,class:"pointer-events-none"},{default:C(()=>[S(A(Jr),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Ne(A(Zr)(b)),route:b,context:"overview"},null,8,["is","class","route"]),S(od,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],14,Q_),t("div",{class:"absolute top-0 opacity-50",style:ze(`left: ${A(p)+5}px`)},Xn(B+1),5)]))),128))],4)],512),[[mu,A(o)]]),A(o)?(k(),Z("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[S(v)])):_e("v-if",!0)],64)}}});const ev=Y(X_,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),tv="/assets/logo-b72bde5d.png",nv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},sv=$e({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;U(z);const o=Wt(s,"modelValue",n);function l(){o.value=!1}return(r,a)=>(k(),G(Hc,null,[A(o)?(k(),Z("div",nv,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),t("div",{class:Ne(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[st(r.$slots,"default")],2)])):_e("v-if",!0)],1024))}}),ov=Y(sv,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Modal.vue"]]),lv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},rv=["innerHTML"],av=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:tv,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),f("dev ")])])],-1),iv=$e({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;U(z);const o=Wt(s,"modelValue",n),l=O(()=>typeof Oe.info=="string");return(r,a)=>(k(),G(ov,{modelValue:A(o),"onUpdate:modelValue":a[0]||(a[0]=i=>Ce(o)?o.value=i:null),class:"px-6 py-4"},{default:C(()=>[t("div",lv,[A(l)?(k(),Z("div",{key:0,class:"mb-4",innerHTML:A(Oe).info},null,8,rv)):_e("v-if",!0),av])]),_:1},8,["modelValue"]))}});const cv=Y(iv,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/InfoDialog.vue"]]),uv=["disabled","onKeydown"],dv=$e({__name:"Goto",setup(e){U(z);const n=se(),s=se(""),o=O(()=>{if(s.value.startsWith("/"))return!!Ke.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=vd.value}});function l(){o.value&&(s.value.startsWith("/")?Es(s.value.substring(1)):Es(+s.value)),r()}function r(){_s.value=!1}return Ue(_s,async a=>{var i,c;a?(await It(),s.value="",(i=n.value)==null||i.focus()):(c=n.value)==null||c.blur()}),Ue(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(k(),Z("div",{id:"slidev-goto-dialog",class:Ne(["fixed right-5 bg-main transform transition-all",A(_s)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[ml(t("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!A(_s),class:Ne(["outline-none bg-transparent",{"text-red-400":!A(o)&&s.value}]),placeholder:"Goto...",onKeydown:[Ya(l,["enter"]),Ya(r,["escape"])],onBlur:r},null,42,uv),[[Sh,s.value]])],2))}}),pv=Y(dv,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Goto.vue"]]),fv=$e({__name:"Controls",setup(e){U(z);const n=zt(),s=zt();return(o,l)=>(k(),Z(Be,null,[S(ev,{modelValue:A(rt),"onUpdate:modelValue":l[0]||(l[0]=r=>Ce(rt)?rt.value=r:null)},null,8,["modelValue"]),S(pv),A(n)?(k(),G(A(n),{key:0})):_e("v-if",!0),A(s)?(k(),G(A(s),{key:1,modelValue:A(Il),"onUpdate:modelValue":l[1]||(l[1]=r=>Ce(Il)?Il.value=r:null)},null,8,["modelValue"])):_e("v-if",!0),A(Oe).info?(k(),G(cv,{key:2,modelValue:A(Qs),"onUpdate:modelValue":l[2]||(l[2]=r=>Ce(Qs)?Qs.value=r:null)},null,8,["modelValue"])):_e("v-if",!0)],64))}}),hv=Y(fv,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Controls.vue"]]),mv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yv=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),gv=[yv];function _v(e,n){return k(),Z("svg",mv,gv)}const vv={name:"carbon-settings-adjust",render:_v},bv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Av=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),kv=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),wv=[Av,kv];function Dv(e,n){return k(),Z("svg",bv,wv)}const Cv={name:"carbon-information",render:Dv},xv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bv=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Ev=[Bv];function Sv(e,n){return k(),Z("svg",xv,Ev)}const $v={name:"carbon-download",render:Sv},Ov={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tv=t("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Pv=t("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Iv=[Tv,Pv];function Fv(e,n){return k(),Z("svg",Ov,Iv)}const Rv={name:"carbon-user-speaker",render:Fv},Lv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Mv=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Nv=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Uv=[Mv,Nv];function Hv(e,n){return k(),Z("svg",Lv,Uv)}const Vv={name:"carbon-presentation-file",render:Hv},jv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Kv=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Wv=[Kv];function qv(e,n){return k(),Z("svg",jv,Wv)}const Gv={name:"carbon-pen",render:qv},zv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Yv=t("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Zv=t("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Jv=[Yv,Zv];function Qv(e,n){return k(),Z("svg",zv,Jv)}const Xv={name:"ph-cursor-duotone",render:Qv},e1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},t1=t("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),n1=[t1];function s1(e,n){return k(),Z("svg",e1,n1)}const ld={name:"ph-cursor-fill",render:s1},o1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l1=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),r1=[l1];function a1(e,n){return k(),Z("svg",o1,r1)}const i1={name:"carbon-sun",render:a1},c1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u1=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),d1=[u1];function p1(e,n){return k(),Z("svg",c1,d1)}const f1={name:"carbon-moon",render:p1},h1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m1=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),y1=[m1];function g1(e,n){return k(),Z("svg",h1,y1)}const _1={name:"carbon-apps",render:g1},v1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},b1=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),A1=[b1];function k1(e,n){return k(),Z("svg",v1,A1)}const w1={name:"carbon-arrow-right",render:k1},D1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C1=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),x1=[C1];function B1(e,n){return k(),Z("svg",D1,x1)}const E1={name:"carbon-arrow-left",render:B1},S1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$1=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),O1=[$1];function T1(e,n){return k(),Z("svg",S1,O1)}const P1={name:"carbon-maximize",render:T1},I1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F1=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),R1=[F1];function L1(e,n){return k(),Z("svg",I1,R1)}const M1={name:"carbon-minimize",render:L1},N1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U1=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),H1=[U1];function V1(e,n){return k(),Z("svg",N1,H1)}const j1={name:"carbon-checkmark",render:V1},K1={class:"select-list"},W1={class:"title"},q1={class:"items"},G1=["onClick"],z1=$e({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;U(z);const o=Wt(s,"modelValue",n,{passive:!0});return(l,r)=>{const a=j1;return k(),Z("div",K1,[t("div",W1,Xn(e.title),1),t("div",q1,[(k(!0),Z(Be,null,_o(e.items,i=>(k(),Z("div",{key:i.value,class:Ne(["item",{active:A(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[S(a,{class:Ne(["text-green-500",{"opacity-0":A(o)!==i.value}])},null,8,["class"]),f(" "+Xn(i.display||i.value),1)],10,G1))),128))])])}}});const Y1=Y(z1,[["__scopeId","data-v-3f89fa11"],["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/SelectList.vue"]]),Z1={class:"text-sm"},J1=$e({__name:"Settings",setup(e){U(z);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(k(),Z("div",Z1,[S(Y1,{modelValue:A(Lo),"onUpdate:modelValue":o[0]||(o[0]=l=>Ce(Lo)?Lo.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),Q1=Y(J1,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Settings.vue"]]),X1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},eb=$e({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;U(z);const o=Wt(s,"modelValue",n,{passive:!0}),l=se();return Sm(l,()=>{o.value=!1}),(r,a)=>(k(),Z("div",{ref_key:"el",ref:l,class:"flex relative"},[t("button",{class:Ne({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>o.value=!A(o))},[st(r.$slots,"button",{class:Ne({disabled:e.disabled})})],2),(k(),G(Hc,null,[A(o)?(k(),Z("div",X1,[st(r.$slots,"menu")])):_e("v-if",!0)],1024))],512))}}),tb=Y(eb,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/MenuButton.vue"]]),nb={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},sb={__name:"VerticalDivider",setup(e){return U(z),(n,s)=>(k(),Z("div",nb))}},$o=Y(sb,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),ob={render(){return[]}},lb={class:"icon-btn"},rb={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},ab={class:"my-auto"},ib={class:"opacity-50"},cb=$e({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;U(z);const s=pr.smaller("md"),{isFullscreen:o,toggle:l}=Yu,r=O(()=>_r.value?`?password=${_r.value}`:""),a=O(()=>`/presenter/${Ye.value}${r.value}`),i=O(()=>`/${Ye.value}${r.value}`),c=se(),u=()=>{c.value&&ws.value&&c.value.contains(ws.value)&&ws.value.blur()},d=O(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),p=zt(),h=zt();return ss(()=>import("./DrawingControls-2ea2f0dc.js"),[]).then(y=>h.value=y.default),(y,g)=>{const v=M1,b=P1,B=E1,D=w1,E=_1,$=f1,V=i1,j=ld,N=Xv,L=Gv,ee=Vv,oe=Kc("RouterLink"),ce=Rv,q=$v,be=Cv,Fe=vv;return k(),Z("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[t("div",{class:Ne(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",A(d)]),onMouseleave:u},[A(sn)?_e("v-if",!0):(k(),Z("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...De)=>A(l)&&A(l)(...De))},[A(o)?(k(),G(v,{key:0})):(k(),G(b,{key:1}))])),t("button",{class:Ne(["icon-btn",{disabled:!A(u2)}]),onClick:g[1]||(g[1]=(...De)=>A(Qn)&&A(Qn)(...De))},[S(B)],2),t("button",{class:Ne(["icon-btn",{disabled:!A(c2)}]),title:"Next",onClick:g[2]||(g[2]=(...De)=>A(Jn)&&A(Jn)(...De))},[S(D)],2),A(sn)?_e("v-if",!0):(k(),Z("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=De=>A(Zu)())},[S(E)])),A(yr)?_e("v-if",!0):(k(),Z("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=De=>A(td)())},[A(Ao)?(k(),G($,{key:0})):(k(),G(V,{key:1}))])),S($o),A(sn)?_e("v-if",!0):(k(),Z(Be,{key:3},[!A(Tt)&&!A(s)&&A(p)?(k(),Z(Be,{key:0},[S(A(p)),S($o)],64)):_e("v-if",!0),A(Tt)?(k(),Z("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=De=>Fl.value=!A(Fl))},[A(Fl)?(k(),G(j,{key:0})):(k(),G(N,{key:1,class:"opacity-50"}))])):_e("v-if",!0)],64)),(!A(Oe).drawings.presenterOnly||A(Tt))&&!A(sn)?(k(),Z(Be,{key:4},[t("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=De=>qt.value=!A(qt))},[S(L),A(qt)?(k(),Z("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ze({background:A(Vn).color})},null,4)):_e("v-if",!0)]),S($o)],64)):_e("v-if",!0),A(sn)?_e("v-if",!0):(k(),Z(Be,{key:5},[A(Tt)?(k(),G(oe,{key:0,to:A(i),class:"icon-btn",title:"Play Mode"},{default:C(()=>[S(ee)]),_:1},8,["to"])):_e("v-if",!0),A(l2)?(k(),G(oe,{key:1,to:A(a),class:"icon-btn",title:"Presenter Mode"},{default:C(()=>[S(ce)]),_:1},8,["to"])):_e("v-if",!0),_e("v-if",!0)],64)),(k(),Z(Be,{key:6},[A(Oe).download?(k(),Z("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...De)=>A(Xi)&&A(Xi)(...De))},[S(q)])):_e("v-if",!0)],64)),!A(Tt)&&A(Oe).info&&!A(sn)?(k(),Z("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=De=>Qs.value=!A(Qs))},[S(be)])):_e("v-if",!0),!A(Tt)&&!A(sn)?(k(),G(tb,{key:8},{button:C(()=>[t("button",lb,[S(Fe)])]),menu:C(()=>[S(Q1)]),_:1})):_e("v-if",!0),A(sn)?_e("v-if",!0):(k(),G($o,{key:9})),t("div",rb,[t("div",ab,[f(Xn(A(Ye))+" ",1),t("span",ib,"/ "+Xn(A(vd)),1)])]),S(A(ob))],34)],512)}}}),ub=Y(cb,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/NavControls.vue"]]),rd={render(){return[]}},db=$e({__name:"LightOrDark",setup(e){return U(z),(n,s)=>A(Ao)?st(n.$slots,"dark",{key:0}):st(n.$slots,"light",{key:1})}}),Qr=Y(db,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/builtin/LightOrDark.vue"]]),pb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fb=t("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),hb=[fb];function mb(e,n){return k(),Z("svg",pb,hb)}const yb={name:"carbon-logo-github",render:mb},gb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_b=t("path",{fill:"currentColor",d:"M11.547 25.752c9.057 0 14.01-7.503 14.01-14.01c0-.213 0-.425-.014-.636A10.017 10.017 0 0 0 28 8.556a9.827 9.827 0 0 1-2.828.776a4.942 4.942 0 0 0 2.164-2.724a9.866 9.866 0 0 1-3.126 1.195a4.929 4.929 0 0 0-8.392 4.491A13.98 13.98 0 0 1 5.67 7.15a4.928 4.928 0 0 0 1.525 6.573a4.887 4.887 0 0 1-2.235-.617v.063a4.926 4.926 0 0 0 3.95 4.827a4.917 4.917 0 0 1-2.223.084a4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 4 23.54a13.94 13.94 0 0 0 7.547 2.209"},null,-1),vb=[_b];function bb(e,n){return k(),Z("svg",gb,vb)}const Ab={name:"carbon-logo-twitter",render:bb},kb="/netways-white.png",wb="/netways-black.png",Db={class:"absolute bottom-0 left-0 right-0 m-2 h-8 flex justify-between gap-2"},Cb={class:"flex gap-2 justify-between items-center"},xb={href:"https://twitter.com/d_bodky",target:"_blank",alt:"Twitter",class:"icon-btn text-sky-500 !border-none"},Bb={href:"https://github.com/mocdaniel",target:"_blank",alt:"GitHub",class:"icon-btn !border-none text-gray-700"},Eb={href:"https://github.com/mocdaniel",target:"_blank",alt:"GitHub",class:"icon-btn !border-none text-gray-500"},Sb=t("img",{class:"pb-2 pr-2",src:kb},null,-1),$b=t("img",{class:"pb-2 pr-2",src:wb},null,-1),Ob={__name:"global-bottom",setup(e){return U(z),(n,s)=>{const o=Ab,l=yb,r=Qr;return k(),Z("footer",Db,[t("div",Cb,[t("a",xb,[S(o),f(" @d_bodky ")]),S(r,null,{light:C(()=>[t("a",Bb,[S(l),f(" mocdaniel ")])]),dark:C(()=>[t("a",Eb,[S(l),f(" mocdaniel ")])]),_:1})]),S(r,null,{dark:C(()=>[Sb]),light:C(()=>[$b]),_:1})])}}},Tb=Y(Ob,[["__file","/Users/daniel/repositories/private/acorn-slides/global-bottom.vue"]]),ad={render(){return[ns(Tb)]}},Pb={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Ib=$e({__name:"PresenterMouse",setup(e){return U(z),(n,s)=>{const o=ld;return A($l).cursor?(k(),Z("div",Pb,[S(o,{class:"absolute",style:ze({left:`${A($l).cursor.x}%`,top:`${A($l).cursor.y}%`})},null,8,["style"])])):_e("v-if",!0)}}}),Fb=Y(Ib,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Rb=$e({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){U(z),Ue(at,()=>{var o,l;(o=at.value)!=null&&o.meta&&at.value.meta.preload!==!1&&(at.value.meta.__preloaded=!0),(l=Ll.value)!=null&&l.meta&&Ll.value.meta.preload!==!1&&(Ll.value.meta.__preloaded=!0)},{immediate:!0});const n=zt();ss(()=>import("./DrawingLayer-856e07ef.js"),[]).then(o=>n.value=o.default);const s=O(()=>Ke.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===at.value}));return(o,l)=>(k(),Z(Be,null,[_e(" Global Bottom "),S(A(ad)),_e(" Slides "),S(wh,me(fe(A(f2))),{default:C(()=>[(k(!0),Z(Be,null,_o(A(s),r=>{var a;return ml((k(),G(A(Jr),{key:r.path,is:r==null?void 0:r.component,clicks:r===A(at)?A(os):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Ne(A(Zr)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[mu,r===A(at)]])}),128))]),_:1},16),_e(" Global Top "),S(A(rd)),A(n)?(k(),G(A(n),{key:0})):_e("v-if",!0),A(Tt)?_e("v-if",!0):(k(),G(Fb,{key:1}))],64))}}),Lb=Y(Rb,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Mb=$e({__name:"PrintStyle",setup(e){U(z);function n(s,{slots:o}){if(o.default)return ns("style",o.default())}return(s,o)=>(k(),G(n,null,{default:C(()=>[f(" @page { size: "+Xn(A(Cn))+"px "+Xn(A(jr))+"px; margin: 0px; } ",1)]),_:1}))}}),id=Y(Mb,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Nb=$e({__name:"Play",setup(e){U(z),H_();const n=se();function s(r){var a;Pi.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Jn():Qn())}h2(n);const o=O(()=>Jg.value||Pi.value);zt();const l=zt();return ss(()=>import("./DrawingControls-2ea2f0dc.js"),[]).then(r=>l.value=r.default),(r,a)=>(k(),Z(Be,null,[A(Bs)?(k(),G(id,{key:0})):_e("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:ze(A(Kr))},[S(sd,{class:"w-full h-full",style:ze({background:"var(--slidev-slide-container-background, black)"}),width:A(Bs)?A(Zn).width.value:void 0,scale:A(Lo),onPointerdown:s},{default:C(()=>[S(Lb,{context:"slide"})]),controls:C(()=>[t("div",{class:Ne(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[A(o)?"opacity-100 right-0":"opacity-0 p-2",A(po)?"pointer-events-none":""]])},[S(ub,{class:"m-auto",persist:A(o)},null,8,["persist"])],2),!A(Oe).drawings.presenterOnly&&!A(sn)&&A(l)?(k(),G(A(l),{key:0,class:"ml-0"})):_e("v-if",!0)]),_:1},8,["style","width","scale"]),_e("v-if",!0)],4),S(hv)],64))}}),Ub=Y(Nb,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function cd(e){return typeof e>"u"||e===null}function Hb(e){return typeof e=="object"&&e!==null}function Vb(e){return Array.isArray(e)?e:cd(e)?[]:[e]}function jb(e,n){var s,o,l,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)l=r[s],e[l]=n[l];return e}function Kb(e,n){var s="",o;for(o=0;o<n;o+=1)s+=e;return s}function Wb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var qb=cd,Gb=Hb,zb=Vb,Yb=Kb,Zb=Wb,Jb=jb,Xr={isNothing:qb,isObject:Gb,toArray:zb,repeat:Yb,isNegativeZero:Zb,extend:Jb};function ud(e,n){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function ho(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=ud(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ho.prototype=Object.create(Error.prototype);ho.prototype.constructor=ho;ho.prototype.toString=function(n){return this.name+": "+ud(this,n)};var Un=ho,Qb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Xb=["scalar","sequence","mapping"];function e0(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){n[String(o)]=s})}),n}function t0(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(Qb.indexOf(s)===-1)throw new Un('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=e0(n.styleAliases||null),Xb.indexOf(this.kind)===-1)throw new Un('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var nt=t0;function Ki(e,n){var s=[];return e[n].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function n0(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return e}function gr(e){return this.extend(e)}gr.prototype.extend=function(n){var s=[],o=[];if(n instanceof nt)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new Un("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof nt))throw new Un("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Un("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Un("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof nt))throw new Un("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(gr.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Ki(l,"implicit"),l.compiledExplicit=Ki(l,"explicit"),l.compiledTypeMap=n0(l.compiledImplicit,l.compiledExplicit),l};var s0=gr,o0=new nt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),l0=new nt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),r0=new nt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),a0=new s0({explicit:[o0,l0,r0]});function i0(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function c0(){return null}function u0(e){return e===null}var d0=new nt("tag:yaml.org,2002:null",{kind:"scalar",resolve:i0,construct:c0,predicate:u0,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function p0(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function f0(e){return e==="true"||e==="True"||e==="TRUE"}function h0(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var m0=new nt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:p0,construct:f0,predicate:h0,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function y0(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function g0(e){return 48<=e&&e<=55}function _0(e){return 48<=e&&e<=57}function v0(e){if(e===null)return!1;var n=e.length,s=0,o=!1,l;if(!n)return!1;if(l=e[s],(l==="-"||l==="+")&&(l=e[++s]),l==="0"){if(s+1===n)return!0;if(l=e[++s],l==="b"){for(s++;s<n;s++)if(l=e[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<n;s++)if(l=e[s],l!=="_"){if(!y0(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<n;s++)if(l=e[s],l!=="_"){if(!g0(e.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<n;s++)if(l=e[s],l!=="_"){if(!_0(e.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function b0(e){var n=e,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function A0(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Xr.isNegativeZero(e)}var k0=new nt("tag:yaml.org,2002:int",{kind:"scalar",resolve:v0,construct:b0,predicate:A0,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),w0=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function D0(e){return!(e===null||!w0.test(e)||e[e.length-1]==="_")}function C0(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var x0=/^[-+]?[0-9]+e/;function B0(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Xr.isNegativeZero(e))return"-0.0";return s=e.toString(10),x0.test(s)?s.replace("e",".e"):s}function E0(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Xr.isNegativeZero(e))}var S0=new nt("tag:yaml.org,2002:float",{kind:"scalar",resolve:D0,construct:C0,predicate:E0,represent:B0,defaultStyle:"lowercase"}),$0=a0.extend({implicit:[d0,m0,k0,S0]}),O0=$0,dd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),pd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function T0(e){return e===null?!1:dd.exec(e)!==null||pd.exec(e)!==null}function P0(e){var n,s,o,l,r,a,i,c=0,u=null,d,p,h;if(n=dd.exec(e),n===null&&(n=pd.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(s,o,l));if(r=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(d=+n[10],p=+(n[11]||0),u=(d*60+p)*6e4,n[9]==="-"&&(u=-u)),h=new Date(Date.UTC(s,o,l,r,a,i,c)),u&&h.setTime(h.getTime()-u),h}function I0(e){return e.toISOString()}var F0=new nt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:T0,construct:P0,instanceOf:Date,represent:I0});function R0(e){return e==="<<"||e===null}var L0=new nt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:R0}),ea=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function M0(e){if(e===null)return!1;var n,s,o=0,l=e.length,r=ea;for(s=0;s<l;s++)if(n=r.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function N0(e){var n,s,o=e.replace(/[\r\n=]/g,""),l=o.length,r=ea,a=0,i=[];for(n=0;n<l;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(n));return s=l%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function U0(e){var n="",s=0,o,l,r=e.length,a=ea;for(o=0;o<r;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+e[o];return l=r%3,l===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):l===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):l===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function H0(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var V0=new nt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:M0,construct:N0,predicate:H0,represent:U0}),j0=Object.prototype.hasOwnProperty,K0=Object.prototype.toString;function W0(e){if(e===null)return!0;var n=[],s,o,l,r,a,i=e;for(s=0,o=i.length;s<o;s+=1){if(l=i[s],a=!1,K0.call(l)!=="[object Object]")return!1;for(r in l)if(j0.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function q0(e){return e!==null?e:[]}var G0=new nt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:W0,construct:q0}),z0=Object.prototype.toString;function Y0(e){if(e===null)return!0;var n,s,o,l,r,a=e;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],z0.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[n]=[l[0],o[l[0]]]}return!0}function Z0(e){if(e===null)return[];var n,s,o,l,r,a=e;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],l=Object.keys(o),r[n]=[l[0],o[l[0]]];return r}var J0=new nt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Y0,construct:Z0}),Q0=Object.prototype.hasOwnProperty;function X0(e){if(e===null)return!0;var n,s=e;for(n in s)if(Q0.call(s,n)&&s[n]!==null)return!1;return!0}function e3(e){return e!==null?e:{}}var t3=new nt("tag:yaml.org,2002:set",{kind:"mapping",resolve:X0,construct:e3});O0.extend({implicit:[F0,L0],explicit:[V0,G0,J0,t3]});function Wi(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var n3=new Array(256),s3=new Array(256);for(var fs=0;fs<256;fs++)n3[fs]=Wi(fs)?1:0,s3[fs]=Wi(fs);function o3(e){return Array.from(new Set(e))}function qi(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function fd(e,n){if(!n||n==="all"||n==="*")return qi(1,e+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...qi(+l,r?+r+1:e+1))}return o3(s).filter(o=>o<=e).sort((o,l)=>o-l)}function l3(e){const n=O(()=>e.value.path),s=O(()=>Ke.length-1),o=O(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=O(()=>sa(o.value)),r=O(()=>Ke.find(h=>h.path===`${o.value}`)),a=O(()=>{var h,y,g;return(g=(y=(h=r.value)==null?void 0:h.meta)==null?void 0:y.slide)==null?void 0:g.id}),i=O(()=>{var h,y;return((y=(h=r.value)==null?void 0:h.meta)==null?void 0:y.layout)||(o.value===1?"cover":"default")}),c=O(()=>Ke.find(h=>h.path===`${Math.min(Ke.length,o.value+1)}`)),u=O(()=>Ke.filter(h=>{var y,g;return(g=(y=h.meta)==null?void 0:y.slide)==null?void 0:g.title}).reduce((h,y)=>(oa(h,y),h),[])),d=O(()=>la(u.value,r.value)),p=O(()=>ra(d.value));return{route:e,path:n,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:p}}function r3(e,n,s){const o=se(0);It(()=>{xn.afterEach(async()=>{await It(),o.value+=1})});const l=O(()=>{var c,u;return o.value,((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=O(()=>{var c,u;return+(((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.clicks)??l.value.length)}),a=O(()=>s.value<Ke.length-1||e.value<r.value),i=O(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const a3=["id"],i3=$e({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,o=Wt(s,"clicksElements",n),l=O(()=>({height:`${jr}px`,width:`${Cn}px`})),r=zt();ss(()=>Promise.resolve().then(()=>Z_),void 0).then(u=>r.value=u.default);const a=O(()=>s.clicks),i=r3(a,s.nav.currentRoute,s.nav.currentPage),c=O(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return gt(z,Qe({nav:{...s.nav,...i},configs:Oe,themeConfigs:O(()=>Oe.themeConfig)})),(u,d)=>{var p;return k(),Z("div",{id:A(c),class:"print-slide-container",style:ze(A(l))},[S(A(ad)),S(A(Jr),{is:(p=e.route)==null?void 0:p.component,"clicks-elements":A(o),"onUpdate:clicks-elements":d[0]||(d[0]=h=>Ce(o)?o.value=h:null),clicks:A(a),"clicks-disabled":!1,class:Ne(A(Zr)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),A(r)?(k(),G(A(r),{key:0,page:+e.route.path},null,8,["page"])):_e("v-if",!0),S(A(rd))],12,a3)}}}),Gi=Y(i3,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),c3=$e({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const n=e;U(z);const s=Qe(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=O(()=>n.route),l=l3(o);return(a,i)=>(k(),Z(Be,null,[S(Gi,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=c=>s=c),clicks:0,nav:A(l),route:A(o)},null,8,["clicks-elements","nav","route"]),A(_d)?_e("v-if",!0):(k(!0),Z(Be,{key:0},_o(s.length,c=>(k(),G(Gi,{key:c,clicks:c,nav:A(l),route:A(o)},null,8,["clicks","nav","route"]))),128))],64))}}),u3=Y(c3,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/PrintSlide.vue"]]),d3={id:"print-content"},p3=$e({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const n=e;U(z);const s=O(()=>n.width),o=O(()=>n.width/Dn),l=O(()=>s.value/o.value),r=O(()=>l.value<Dn?s.value/Cn:o.value*Dn/Cn);let a=Ke.slice(0,-1);Zt.value.query.range&&(a=fd(a.length,Zt.value.query.range).map(u=>a[u-1]));const i=O(()=>({"select-none":!Oe.selectable,"slidev-code-line-numbers":Oe.lineNumbers}));return gt(vu,r),(c,u)=>(k(),Z("div",{id:"print-container",class:Ne(A(i))},[t("div",d3,[(k(!0),Z(Be,null,_o(A(a),d=>(k(),G(u3,{key:d.path,route:d},null,8,["route"]))),128))]),st(c.$slots,"controls")],2))}});const f3=Y(p3,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/PrintContainer.vue"]]),h3=$e({__name:"Print",setup(e){return U(z),Ss(()=>{Bs?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(k(),Z(Be,null,[A(Bs)?(k(),G(id,{key:0})):_e("v-if",!0),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ze(A(Kr))},[S(f3,{class:"w-full h-full",style:ze({background:"var(--slidev-slide-container-background, black)"}),width:A(Zn).width.value},null,8,["style","width"])],4)],64))}});const m3=Y(h3,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/internals/Print.vue"]]);const y3={class:"slidev-layout end"},g3={__name:"end",setup(e){return U(z),(n,s)=>(k(),Z("div",y3," END "))}},_3=Y(g3,[["__scopeId","data-v-e532b98d"],["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/layouts/end.vue"]]);function zi(e){return e.startsWith("/")?"/"+e.slice(1):e}function v3(e,n=!1){const s=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${zi(e)})`:`url("${zi(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const b3={class:"my-auto w-full"},A3=$e({__name:"cover",props:{background:{default:""}},setup(e){const n=e;U(z);const s=O(()=>v3(n.background,!0));return(o,l)=>(k(),Z("div",{class:"slidev-layout cover",style:ze(A(s))},[t("div",b3,[st(o.$slots,"default")])],4))}}),k3=Y(A3,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/theme-default/layouts/cover.vue"]]),w3=t("h1",null,"From Dev to Prod with Acorn",-1),D3=t("p",null,"Simplifying Kubernetes Deployments",-1),C3=t("div",{class:"hello"},null,-1),x3=t("div",{class:"pt-12"}," Tuesday, Feb 07 2023 ",-1),B3={__name:"1",setup(e){const n={theme:"default",class:"text-center",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},transition:"fade-out",css:"unocss",exportFilename:"dev-to-prod-with-acorn-2023",monaco:!0,srcSequence:"./slides/cover.md"};return U(z),(s,o)=>(k(),G(k3,me(fe(n)),{default:C(()=>[w3,D3,C3,x3]),_:1},16))}},E3=Y(B3,[["__file","/@slidev/slides/1.md"]]);function Yi(e){return e.startsWith("/")?"/"+e.slice(1):e}function S3(e,n=!1){const s=e&&e[0]==="#"&&e.startsWith("rgb"),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${Yi(e)})`:`url("${Yi(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const $3={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},O3=$e({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const n=e;U(z);const s=O(()=>S3(n.image));return(o,l)=>(k(),Z("div",$3,[t("div",{class:Ne(["slidev-layout default",n.class])},[st(o.$slots,"default")],2),t("div",{class:"w-full w-full",style:ze(A(s))},null,4)]))}}),ta=Y(O3,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/layouts/image-right.vue"]]),T3=t("h1",null,"About me",-1),P3=t("br",null,null,-1),I3=t("br",null,null,-1),F3=t("br",null,null,-1),R3=t("br",null,null,-1),L3=t("br",null,null,-1),M3=t("br",null,null,-1),N3=t("br",null,null,-1),U3=t("br",null,null,-1),H3=t("br",null,null,-1),V3=t("br",null,null,-1),j3=t("br",null,null,-1),K3=t("div",{class:"abs-br text-2 pr-1 text-gray-200"},"Photo by Yulia Matvienko on Unsplash",-1),W3={__name:"2",setup(e){const n={transition:"fade-out",layout:"image-right",image:"/legopic.jpg",srcSequence:"./slides/introduction/myself.md"};return U(z),(s,o)=>(k(),G(ta,me(fe(n)),{default:C(()=>[T3,P3,f(" 🇩🇪 24 y/o consultant from Southern Germany "),I3,F3,f(" 🏢 Employed at NETWAYS "),R3,L3,f(" ☸️ Working with Kubernetes since early 2022 "),M3,N3,f(" 📜 CKA certified since 2022 "),U3,H3,f(" 🏗️ I like building things ❣️ "),V3,j3,f(" 🎉 Psyched to be here! "),K3]),_:1},16))}},q3=Y(W3,[["__file","/@slidev/slides/2.md"]]),G3={class:"slidev-layout default"},z3={__name:"default",setup(e){return U(z),(n,s)=>(k(),Z("div",G3,[st(n.$slots,"default")]))}},Mt=Y(z3,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/layouts/default.vue"]]),Y3=t("h1",null,"About this workshop",-1),Z3=t("br",null,null,-1),J3=t("br",null,null,-1),Q3=t("ul",null,[t("li",null,[f("All resources are available on GitHub: "),t("a",{href:"https://github.com/mocdaniel/acorn-workshop",target:"_blank",rel:"noopener"},"mocdaniel/acorn-workshop")])],-1),X3=t("br",null,null,-1),e8=t("ul",null,[t("li",null,[f("You will need some tools to follow along "),t("ul",null,[t("li",null,[t("strong",null,"git")]),t("li",null,[t("strong",null,"acorn"),f(" (Downloadable from "),t("a",{href:"https://github.com/acorn-io/acorn",target:"_blank",rel:"noopener"},"https://github.com/acorn-io/acorn"),f(")")]),t("li",null,[t("strong",null,"docker")]),t("li",null,[f("a working "),t("strong",null,"Kubernetes cluster"),f(" (either local or remote)")])])])],-1),t8={__name:"3",setup(e){const n={transition:"fade-out",layout:"default",srcSequence:"./slides/introduction/workshop.md"};return U(z),(s,o)=>(k(),G(Mt,me(fe(n)),{default:C(()=>[Y3,Z3,J3,Q3,X3,e8]),_:1},16))}},n8=Y(t8,[["__file","/@slidev/slides/3.md"]]),s8=t("h1",null,"Workshop Agenda",-1),o8=t("br",null,null,-1),l8=t("p",null,"📚 Theory - Why would we need Acorn? How does it work?",-1),r8=t("p",null,"⚙️ Preparations - Installing Acorn for the first time, making sure everything works",-1),a8=t("p",null,"🚀 Test Run - Spin up the application using docker compose",-1),i8=t("p",null,"🏗️ First Steps - building a rudimentary Acornfile",-1),c8=t("p",null,"🔁 Iterate - add further configuration to the Acornfile",-1),u8=t("p",null,"✨ Finishing Touches - build and push the image to a registry",-1),d8=t("p",null,"📽️ Demo of additional features on non-dev clusters",-1),p8={__name:"4",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/introduction/agenda.md"};return U(z),(s,o)=>(k(),G(Mt,me(fe(n)),{default:C(()=>[s8,o8,l8,r8,a8,i8,c8,u8,d8]),_:1},16))}},f8=Y(p8,[["__file","/@slidev/slides/4.md"]]),h8={class:"slidev-layout center h-full grid place-content-center"},m8={class:"my-auto"},y8={__name:"center",setup(e){return U(z),(n,s)=>(k(),Z("div",h8,[t("div",m8,[st(n.$slots,"default")])]))}},dt=Y(y8,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/layouts/center.vue"]]),g8=t("h1",null,"📚 Theory",-1),_8=t("p",null,"Why are we doing this?",-1),v8={__name:"5",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[g8,_8]),_:1},16))}},b8=Y(v8,[["__file","/@slidev/slides/5.md"]]),A8="/history-light.png",k8="/history-dark.png",w8=t("img",{alt:"A timeline showing the evolution towards containerized applications",src:A8},null,-1),D8=t("img",{alt:"A timeline showing the evolution towards containerized applications",src:k8},null,-1),C8={__name:"6",setup(e){const n={layout:"center",transition:"fade-out"};return U(z),(s,o)=>{const l=Qr;return k(),G(dt,me(fe(n)),{default:C(()=>[S(l,null,{light:C(()=>[w8]),dark:C(()=>[D8]),_:1})]),_:1},16)}}},x8=Y(C8,[["__file","/@slidev/slides/6.md"]]),B8=$e({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var r,a;const e=wa("click"),n=wa("after"),s=(i,c,u)=>ml(i,[[c,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let o=(a=(r=this.$slots).default)==null?void 0:a.call(r);if(!o)return;o=Hh(o);const l=i=>i.map((c,u)=>Sn(c)?s(ns(c),u%this.every===0?e:n,Math.floor(u/this.every)):c);return o.length===1&&["ul","ol"].includes(o[0].type)&&Array.isArray(o[0].children)?ns(o[0],{},[l(o[0].children)]):l(o)}}),Qt=$e({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return S(B8,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),E8=t("h1",null,"Where are we today?",-1),S8=t("br",null,null,-1),$8=t("ul",null,[t("li",null,[f("Many different platforms used during development "),t("ul",null,[t("li",null,"local machine"),t("li",null,"Docker (compose)"),t("li",null,"Kubernetes")])])],-1),O8=t("br",null,null,-1),T8=t("br",null,null,-1),P8=t("ul",null,[t("li",null,"No time for learning Kubernetes 'on the fly'")],-1),I8=t("br",null,null,-1),F8=t("br",null,null,-1),R8=t("ul",null,[t("li",null,"Huge cognitive overhead")],-1),L8={__name:"7",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/theory/today.md"};return U(z),(s,o)=>{const l=Qt;return k(),G(Mt,me(fe(n)),{default:C(()=>[E8,S8,S(l,null,{default:C(()=>[$8]),_:1}),S(l,null,{default:C(()=>[O8,T8,P8]),_:1}),I8,F8,S(l,null,{default:C(()=>[R8]),_:1})]),_:1},16)}}},M8=Y(L8,[["__file","/@slidev/slides/7.md"]]),N8={class:"slidev-layout statement"},U8={class:"my-auto"},H8={__name:"statement",setup(e){return U(z),(n,s)=>(k(),Z("div",N8,[t("div",U8,[st(n.$slots,"default")])]))}},V8=Y(H8,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/theme-default/layouts/statement.vue"]]),j8=t("h1",null,"Is there no abstraction? 😭",-1),K8=t("h2",null,"There is!",-1),W8={__name:"8",setup(e){const n={layout:"statement",transition:"fade-out"};return U(z),(s,o)=>{const l=Qt;return k(),G(V8,me(fe(n)),{default:C(()=>[j8,S(l,null,{default:C(()=>[K8]),_:1})]),_:1},16)}}},q8=Y(W8,[["__file","/@slidev/slides/8.md"]]),G8=t("h1",null,"Time for Acorn",-1),z8=t("li",null,[f('"'),t("em",null,"A simple application framework for Kubernetes"),f('"')],-1),Y8=t("li",null,[f("Claims "),t("ul",null,[t("li",null,[t("em",null,'"One artifact across dev, test, and production"')]),t("li",null,[t("em",null,'"Simple CLI and powerful API"')]),t("li",null,[t("em",null,'"Secure by design"')]),t("li",null,[t("em",null,'"Open Source"')])])],-1),Z8=t("div",{class:"abs-br text-2 pr-1 text-gray-400"},"Photo by Joвана Младеновић on Unsplash",-1),J8={__name:"9",setup(e){const n={layout:"image-right",transition:"fade-out",image:"/acorn.jpg",srcSequence:"./slides/theory/acorn.md"};return U(z),(s,o)=>{const l=Kc("tt");return k(),G(ta,me(fe(n)),{default:C(()=>[G8,t("ul",null,[z8,Y8,t("li",null,[f("Takes an "),S(l,null,{default:C(()=>[f("Acornfile")]),_:1}),f(" and builds a deployable, OCI-compliant artifact")])]),Z8]),_:1},16)}}},Q8=Y(J8,[["__file","/@slidev/slides/9.md"]]),X8="/acorn-architecture.svg",eA=t("p",null,[t("img",{src:X8,alt:"Overview of Acorn's architecture"})],-1),tA=t("div",{class:"abs-b text-2 text-gray-400"},"Image taken from docs.acorn.io",-1),nA={__name:"10",setup(e){const n={layout:"center",transition:"fade-out"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[eA,tA]),_:1},16))}},sA=Y(nA,[["__file","/@slidev/slides/10.md"]]),oA=t("h1",null,"⚙️ Preparations",-1),lA=t("p",null,"First things first!",-1),rA={__name:"11",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[oA,lA]),_:1},16))}},aA=Y(rA,[["__file","/@slidev/slides/11.md"]]),iA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},cA=t("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),uA=[cA];function dA(e,n){return k(),Z("svg",iA,uA)}const pA={name:"ph-clipboard",render:dA},fA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},hA=t("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),mA=[hA];function yA(e,n){return k(),Z("svg",fA,mA)}const gA={name:"ph-check-circle",render:yA},_A=["title"],vA=$e({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;U(z);const s=U(yu),o=U(gu),l=U(_u);function r(p=5){const h=[],y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=y.length;for(let v=0;v<p;v++)h.push(y.charAt(Math.floor(Math.random()*g)));return h.join("")}const a=se(),i=Jt();$s(()=>{const p=n.at==null?o==null?void 0:o.value.length:n.at,h=O(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(p||0)),n.ranges.length-1)),y=O(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const g=r(),v=jh(n.ranges.length-1).map(b=>g+b);o!=null&&o.value&&(o.value.push(...v),hl(()=>v.forEach(b=>Vh(o.value,b)),i))}Ss(()=>{if(!a.value)return;const v=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const b of v){const B=Array.from(b.querySelectorAll(".line")),D=fd(B.length,y.value);if(B.forEach((E,$)=>{const V=D.includes($+1);E.classList.toggle(Uh,!0),E.classList.toggle("highlighted",V),E.classList.toggle("dishonored",!V)}),n.maxHeight){const E=b.querySelector(".line.highlighted");E&&E.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=Nm();function d(){var h,y;const p=(y=(h=a.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:y.textContent;p&&u(p)}return(p,h)=>{const y=gA,g=pA;return k(),Z("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:ze({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[st(p.$slots,"default"),A(Oe).codeCopy?(k(),Z("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:A(c)?"Copied":"Copy",onClick:h[0]||(h[0]=v=>d())},[A(c)?(k(),G(y,{key:0,class:"p-2 w-8 h-8"})):(k(),G(g,{key:1,class:"p-2 w-8 h-8"}))],8,_A)):_e("v-if",!0)],4)}}}),At=Y(vA,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),bA=t("h1",null,"Installing Acorn",-1),AA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"acorn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"install")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#A1B567"}},"✔"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"Running"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"Pre-install"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"Checks")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#A1B567"}},"✔"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"Installing"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"ClusterRoles")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#A1B567"}},"✔"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"Installing"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"APIServer"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"and"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"Controller")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#A1B567"}},"image"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"ghcr.io/acorn-io/acorn:v0."),t("span",{style:{color:"#6394BF"}},"5.0"),t("span",{style:{color:"#858585"}},")")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#A1B567"}},"✔"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"Waiting"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"for"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"controller"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"deployment"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"to"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"be"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"available")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#A1B567"}},"✔"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"Waiting"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"for"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"API"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"server"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"deployment"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"to"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"be"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"available")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#A1B567"}},"✔"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"Waiting"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"for"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"registry"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"server"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"deployment"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"to"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"be")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#A1B567"}},"available")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#A1B567"}},"✔"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"Running"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"Post-install"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"Checks")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#A1B567"}},"✔"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"Installation"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"done")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"acorn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"install")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#6C7834"}},"✔"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"Running"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"Pre-install"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"Checks")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#6C7834"}},"✔"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"Installing"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"ClusterRoles")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#6C7834"}},"✔"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"Installing"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"APIServer"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"and"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"Controller")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#6C7834"}},"image"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"ghcr.io/acorn-io/acorn:v0."),t("span",{style:{color:"#296AA3"}},"5.0"),t("span",{style:{color:"#8E8F8B"}},")")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#6C7834"}},"✔"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"Waiting"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"for"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"controller"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"deployment"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"to"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"be"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"available")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#6C7834"}},"✔"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"Waiting"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"for"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"API"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"server"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"deployment"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"to"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"be"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"available")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#6C7834"}},"✔"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"Waiting"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"for"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"registry"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"server"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"deployment"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"to"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"be")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#6C7834"}},"available")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#6C7834"}},"✔"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"Running"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"Post-install"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"Checks")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#6C7834"}},"✔"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"Installation"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"done")])])])],-1),kA=t("p",null,[f("The installation takes many parameters, e.g. for configuring "),t("strong",null,"Let’s encrypt")],-1),wA=t("ol",null,[t("li",null,"acorn checks some prerequisites (e.g. existing IngressController).")],-1),DA=t("ol",{start:"2"},[t("li",null,"ClusterRoles, followed by the workloads and CRDs get installed.")],-1),CA=t("ol",{start:"3"},[t("li",null,"waits for its workloads to be up and running.")],-1),xA=t("ol",{start:"4"},[t("li",null,"if all checks succeed, we can start! 🎉")],-1),BA={__name:"12",setup(e){const n={layout:"default",transition:"fade-out",clicks:4,srcSequence:"./slides/theory/installation.md"};return U(z),(s,o)=>{const l=At,r=Qt;return k(),G(Mt,me(fe(n)),{default:C(()=>[bA,S(l,Ve({},{ranges:["1","1,2","1,3-5","1,6-9","1,10,11"]}),{default:C(()=>[AA]),_:1},16),kA,S(r,{at:"1"},{default:C(()=>[wA]),_:1}),S(r,{at:"2"},{default:C(()=>[DA]),_:1}),S(r,{at:"3"},{default:C(()=>[CA]),_:1}),S(r,{at:"4"},{default:C(()=>[xA]),_:1})]),_:1},16)}}},EA=Y(BA,[["__file","/@slidev/slides/12.md"]]),SA=t("h1",null,"Preparing our dev environment",-1),$A=t("p",null,"Time to fetch our repository!",-1),OA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"git"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"clone"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"https://github.com/mocdaniel/acorn-workshop.git"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"&&"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#E0A569"}},"cd"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"acorn-workshop")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"git"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"checkout"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"section-"),t("span",{style:{color:"#CB7676"}},"0"),t("span",{style:{color:"#6394BF"}},"1")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"ls")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"Acornfile"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"compose.yml"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"LICENSE"),t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},"README.md")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"git"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"clone"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"https://github.com/mocdaniel/acorn-workshop.git"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"&&"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B58451"}},"cd"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"acorn-workshop")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"git"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"checkout"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"section-"),t("span",{style:{color:"#AB5959"}},"0"),t("span",{style:{color:"#296AA3"}},"1")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"ls")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"Acornfile"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"compose.yml"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"LICENSE"),t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},"README.md")])])])],-1),TA=t("br",null,null,-1),PA=t("br",null,null,-1),IA=t("br",null,null,-1),FA=t("p",null,[t("strong",null,"Acornfile"),f(" contains our configuration for Acorn to take, parse, and deploy.")],-1),RA=t("p",null,[t("strong",null,"compose.yml"),f(" contains the same application, but as compose Stack to be deployed with Docker.")],-1),LA={__name:"13",setup(e){const n={layout:"default",transition:"fade-out",clicks:1,srcSequence:"./slides/theory/repository.md"};return U(z),(s,o)=>{const l=At,r=Qt;return k(),G(Mt,me(fe(n)),{default:C(()=>[SA,$A,S(l,Ve({},{ranges:["1-5","6"]}),{default:C(()=>[OA]),_:1},16),S(r,{at:"1"},{default:C(()=>[TA,PA,IA,FA,RA]),_:1})]),_:1},16)}}},MA=Y(LA,[["__file","/@slidev/slides/13.md"]]),NA=t("h1",null,"🚀 Test Run",-1),UA=t("p",null,"Let’s see what we’re working with",-1),HA=t("br",null,null,-1),VA=t("br",null,null,-1),jA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"docker"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"compose"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"up")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"docker"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"compose"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"up")])])])],-1),KA={__name:"14",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>{const l=At;return k(),G(dt,me(fe(n)),{default:C(()=>[NA,UA,HA,VA,S(l,Ve({},{ranges:[""]}),{default:C(()=>[jA]),_:1},16)]),_:1},16)}}},WA=Y(KA,[["__file","/@slidev/slides/14.md"]]),qA="/project-light.png",GA="/project-dark.png",zA=t("img",{src:qA,alt:"Overview of the project's inner workings"},null,-1),YA=t("img",{src:GA,alt:"Overview of the project's inner workings"},null,-1),ZA={__name:"15",setup(e){const n={layout:"center",transition:"fade-out"};return U(z),(s,o)=>{const l=Qr;return k(),G(dt,me(fe(n)),{default:C(()=>[S(l,null,{light:C(()=>[zA]),dark:C(()=>[YA]),_:1})]),_:1},16)}}},JA=Y(ZA,[["__file","/@slidev/slides/15.md"]]),QA=t("h1",null,"🏗️ First Steps",-1),XA=t("p",null,"Acorn Fundamentals",-1),ek=t("br",null,null,-1),tk=t("br",null,null,-1),nk=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"git"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"checkout"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"section-"),t("span",{style:{color:"#CB7676"}},"0"),t("span",{style:{color:"#6394BF"}},"1")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"git"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"checkout"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"section-"),t("span",{style:{color:"#AB5959"}},"0"),t("span",{style:{color:"#296AA3"}},"1")])])])],-1),sk={__name:"16",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[QA,XA,ek,tk,nk]),_:1},16))}},ok=Y(sk,[["__file","/@slidev/slides/16.md"]]),lk=typeof atob=="function",na=typeof Buffer=="function",Zi=typeof TextDecoder=="function"?new TextDecoder:void 0;typeof TextEncoder=="function"&&new TextEncoder;const rk="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ak=Array.prototype.slice.call(rk),Oo=(e=>{let n={};return e.forEach((s,o)=>n[s]=o),n})(ak),ik=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,jn=String.fromCharCode.bind(String),Ji=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(e,n=s=>s)=>new Uint8Array(Array.prototype.slice.call(e,0).map(n)),hd=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),ck=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,uk=e=>{switch(e.length){case 4:var n=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),s=n-65536;return jn((s>>>10)+55296)+jn((s&1023)+56320);case 3:return jn((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return jn((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},dk=e=>e.replace(ck,uk),pk=e=>{if(e=e.replace(/\s+/g,""),!ik.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let n,s="",o,l;for(let r=0;r<e.length;)n=Oo[e.charAt(r++)]<<18|Oo[e.charAt(r++)]<<12|(o=Oo[e.charAt(r++)])<<6|(l=Oo[e.charAt(r++)]),s+=o===64?jn(n>>16&255):l===64?jn(n>>16&255,n>>8&255):jn(n>>16&255,n>>8&255,n&255);return s},md=lk?e=>atob(hd(e)):na?e=>Buffer.from(e,"base64").toString("binary"):pk,fk=na?e=>Ji(Buffer.from(e,"base64")):e=>Ji(md(e),n=>n.charCodeAt(0)),hk=na?e=>Buffer.from(e,"base64").toString("utf8"):Zi?e=>Zi.decode(fk(e)):e=>dk(md(e)),mk=e=>hd(e.replace(/[-_]/g,n=>n=="-"?"+":"/")),yk=e=>hk(mk(e));let gk=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");const _k=$e({__name:"Monaco",props:{code:{default:""},lang:{default:"typescript"},readonly:{default:!1},lineNumbers:{default:"off"},height:{default:"auto"}},setup(e){const n=e;U(z);const s=gk(),o=se(yk(n.code).trimEnd()),l=+(getComputedStyle(document.body).getPropertyValue("--slidev-code-line-height")||"18").replace("px","")||18,r=O(()=>n.height==="auto"?`${o.value.split(/\r?\n/g).length*l+20}px`:n.height),a=se(),i=["--slidev-code-font-size","--slidev-code-font-family","--slidev-code-background","--slidev-code-line-height","--slidev-code-padding","--slidev-code-margin","--slidev-code-radius"];function c(d){const p={},h=getComputedStyle(d);for(const y of i)p[y]=h.getPropertyValue(y);return p}$s(()=>{const d=a.value;d.setAttribute("sandbox",["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts","allow-top-navigation-by-user-activation"].join(" ")),d.src="/iframes/monaco/index.html",d.style.backgroundColor="transparent"});function u(d){var p,h;(h=(p=a.value)==null?void 0:p.contentWindow)==null||h.postMessage(JSON.stringify({type:"slidev-monaco",data:d}),location.origin)}return Ee(window,"message",({data:d})=>{var p;if(d.type==="slidev-monaco-loaded"){a.value&&u({code:o.value,lang:n.lang,id:s,readonly:n.readonly,lineNumbers:n.lineNumbers,dark:Ao.value,style:Object.entries(c(a.value)).map(([h,y])=>`${h}: ${y};`).join("")});return}d.type!=="slidev-monaco"||d.id!==s||!((p=d==null?void 0:d.data)!=null&&p.code)||o.value===d.data.code||(o.value=d.data.code)}),(d,p)=>(k(),Z("iframe",{ref_key:"iframe",ref:a,class:"text-base w-full rounded",style:ze({height:A(r)})},null,4))}}),Tn=Y(_k,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/builtin/Monaco.vue"]]),vk={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},bk=$e({__name:"two-cols",props:{class:{type:String}},setup(e){const n=e;return U(z),(s,o)=>(k(),Z("div",vk,[t("div",{class:Ne(["col-left",n.class])},[st(s.$slots,"default")],2),t("div",{class:Ne(["col-right",n.class])},[st(s.$slots,"right")],2)]))}}),Nt=Y(bk,[["__file","/Users/daniel/repositories/private/acorn-slides/node_modules/@slidev/client/layouts/two-cols.vue"]]),Ak=t("h1",null,"Defining our Database",-1),kk=t("h3",null,"compose.yml",-1),wk=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#429988"}},"services"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#429988"}},"postgres"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"container_name"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"environment"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"POSTGRES_PASSWORD=password")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"ports"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"5432:5432")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"image"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"postgres:12")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"networks"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"guestbook-network")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"restart"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"unless-stopped")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"volumes"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"db-data:/data")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#2F8A89"}},"services"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#2F8A89"}},"postgres"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"container_name"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"environment"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"POSTGRES_PASSWORD=password")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"ports"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"5432:5432")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"image"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"postgres:12")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"networks"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"guestbook-network")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"restart"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"unless-stopped")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"volumes"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"db-data:/data")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Dk=t("br",null,null,-1),Ck=t("br",null,null,-1),xk=t("h3",null,"Acornfile",-1),Bk={__name:"17",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:4,srcSequence:"./slides/practical/section-01/database.md"};return U(z),(s,o)=>{const l=At,r=Tn,a=Qt;return k(),G(Nt,me(fe(n)),{right:C(i=>[S(a,{at:"1"},{default:C(()=>[Dk,Ck,xk,S(r,Ve({code:"Y29udGFpbmVyczogewogIHBvc3RncmVzOiB7CiAgICAKICB9Cn0K",lang:"cue"},{height:"350px"}),null,16)]),_:1})]),default:C(()=>[Ak,kk,S(l,Ve({maxHeight:"400px"},{ranges:["all","3-9","3,4,9","3,5,6","3,7,8"]}),{default:C(()=>[wk]),_:1},16)]),_:1},16)}}},Ek=Y(Bk,[["__file","/@slidev/slides/17.md"]]),Sk=t("h1",null,"Defining the Redis cache",-1),$k=t("h3",null,"compose.yml",-1),Ok=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#429988"}},"services"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#429988"}},"redis"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"container_name"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"redis")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"ports"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"6379:6379")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"image"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"redis:7")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"networks"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"guestbook-network")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"restart"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"unless-stopped")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#2F8A89"}},"services"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#2F8A89"}},"redis"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"container_name"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"redis")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"ports"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"6379:6379")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"image"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"redis:7")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"networks"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"guestbook-network")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"restart"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"unless-stopped")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Tk=t("br",null,null,-1),Pk=t("br",null,null,-1),Ik=t("h3",null,"Acornfile",-1),Fk={__name:"18",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-01/redis.md"};return U(z),(s,o)=>{const l=At,r=Tn;return k(),G(Nt,me(fe(n)),{right:C(a=>[Tk,Pk,Ik,S(r,Ve({code:"Y29udGFpbmVyczogewogIHBvc3RncmVzOiB7Li4ufQp9Cg",lang:"cue"},{height:"350px"}),null,16)]),default:C(()=>[Sk,$k,S(l,Ve({maxHeight:"400px"},{ranges:["all","3-7","3,4,7","3,5,6"]}),{default:C(()=>[Ok]),_:1},16)]),_:1},16)}}},Rk=Y(Fk,[["__file","/@slidev/slides/18.md"]]),Lk=t("h1",null,"Defining the guestbook",-1),Mk=t("h3",null,"compose.yml",-1),Nk=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#429988"}},"services"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#429988"}},"guestbook"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"image"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"dbodky/guestbook-demo:v1.1.0")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"container_name"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"guestbook")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"command"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"--db-name=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"--db-host=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"--db-password=password")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"--db-user=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"--redis-host=redis")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"depends_on"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#429988"}},"postgres"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#429988"}},"condition"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"service_started")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#429988"}},"redis"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#429988"}},"condition"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"service_started")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"networks"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"guestbook-network")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"ports"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"8080:8080")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"restart"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"unless-stopped")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#2F8A89"}},"services"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#2F8A89"}},"guestbook"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"image"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"dbodky/guestbook-demo:v1.1.0")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"container_name"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"guestbook")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"command"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"--db-name=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"--db-host=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"--db-password=password")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"--db-user=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"--redis-host=redis")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"depends_on"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#2F8A89"}},"postgres"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#2F8A89"}},"condition"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"service_started")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#2F8A89"}},"redis"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#2F8A89"}},"condition"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"service_started")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"networks"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"guestbook-network")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"ports"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"8080:8080")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"restart"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"unless-stopped")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Uk=t("br",null,null,-1),Hk=t("br",null,null,-1),Vk=t("h3",null,"Acornfile",-1),jk={__name:"19",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:4,srcSequence:"./slides/practical/section-01/guestbook.md"};return U(z),(s,o)=>{const l=At,r=Tn;return k(),G(Nt,me(fe(n)),{right:C(a=>[Uk,Hk,Vk,S(r,Ve({code:"Y29udGFpbmVyczogewogIHBvc3RncmVzOiB7Li4ufQogIHJlZGlzOiB7Li4ufQp9Cg",lang:"cue"},{height:"350px"}),null,16)]),default:C(()=>[Lk,Mk,S(l,Ve({maxHeight:"350px"},{ranges:["all","2-10,19,20","2,3,4","2,5-10","2,19-20"]}),{default:C(()=>[Nk]),_:1},16)]),_:1},16)}}},Kk=Y(jk,[["__file","/@slidev/slides/19.md"]]),Wk=t("h1",null,"Takeaways",-1),qk=t("p",null,"Many directives are portable from Docker compose",-1),Gk=t("br",null,null,-1),zk=t("ul",null,[t("li",null,"AML behaves a lot like JSON (with some shortcuts)")],-1),Yk=t("br",null,null,-1),Zk=t("ul",null,[t("li",null,[f("Acornfiles consist of "),t("strong",null,"at least one"),f(" container definition")])],-1),Jk=t("br",null,null,-1),Qk=t("ul",null,[t("li",null,"Environment variables and ports can be defined just like with Docker compose")],-1),Xk=t("br",null,null,-1),ew=t("ul",null,[t("li",null,"Acorn’s developer mode streams output right back to your console")],-1),tw={__name:"20",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-01/takeaways.md"};return U(z),(s,o)=>(k(),G(Mt,me(fe(n)),{default:C(()=>[Wk,qk,Gk,zk,Yk,Zk,Jk,Qk,Xk,ew]),_:1},16))}},nw=Y(tw,[["__file","/@slidev/slides/20.md"]]),sw=t("h1",null,"🔁 Iterate",-1),ow=t("p",null,"Utilizing dependencies and probes",-1),lw=t("br",null,null,-1),rw=t("br",null,null,-1),aw=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"git"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"checkout"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"section-"),t("span",{style:{color:"#CB7676"}},"0"),t("span",{style:{color:"#6394BF"}},"2")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"git"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"checkout"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"section-"),t("span",{style:{color:"#AB5959"}},"0"),t("span",{style:{color:"#296AA3"}},"2")])])])],-1),iw={__name:"21",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[sw,ow,lw,rw,aw]),_:1},16))}},cw=Y(iw,[["__file","/@slidev/slides/21.md"]]),uw=t("h1",null,"Add dependencies",-1),dw=t("h3",null,"compose.yml",-1),pw=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#429988"}},"services"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#429988"}},"guestbook"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"image"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"dbodky/guestbook")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"container_name"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"guestbook")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"command"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"--db-name=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"--db-host=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"--db-password=password")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"--db-user=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"--redis-host=redis")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"depends_on"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#429988"}},"postgres"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#429988"}},"condition"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"service_started")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#429988"}},"redis"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#429988"}},"condition"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"service_started")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"networks"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"guestbook-network")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"ports"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"8080:8080")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"restart"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"unless-stopped")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#2F8A89"}},"services"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#2F8A89"}},"guestbook"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"image"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"dbodky/guestbook")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"container_name"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"guestbook")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"command"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"--db-name=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"--db-host=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"--db-password=password")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"--db-user=postgres")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"--redis-host=redis")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"depends_on"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#2F8A89"}},"postgres"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#2F8A89"}},"condition"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"service_started")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#2F8A89"}},"redis"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#2F8A89"}},"condition"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"service_started")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"networks"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"guestbook-network")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"ports"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"8080:8080")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"restart"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"unless-stopped")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),fw=t("br",null,null,-1),hw=t("br",null,null,-1),mw=t("h3",null,"Acornfile",-1),yw={__name:"22",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-02/dependencies.md"};return U(z),(s,o)=>{const l=At,r=Tn;return k(),G(Nt,me(fe(n)),{right:C(a=>[fw,hw,mw,S(r,Ve({code:"Y29udGFpbmVyczogewogIGd1ZXN0Ym9vazogewogICAgaW1hZ2U6ICJkYm9ka3kvZ3Vlc3Rib29rLWRlbW86djEuMS4wIgogICAgcG9ydHM6ICJndWVzdGJvb2s6ODA4MC9odHRwIgogICAgZW52OiB7CiAgICAgIEdVRVNUQk9PS19EQl9OQU1FOiAiZ3Vlc3Rib29rZGIiCiAgICAgIEdVRVNUQk9PS19EQl9QQVNTV09SRDogInBhc3N3b3JkIgogICAgICBHVUVTVEJPT0tfREJfVVNFUjogImd1ZXN0Ym9va3VzZXIiCiAgICAgIEdVRVNUQk9PS19EQl9IT1NUOiAicG9zdGdyZXMiCiAgICAgIEdVRVNUQk9PS19SRURJU19IT1NUOiAicmVkaXMiCiAgICB9CiAgfQogIFsuLi5dCn0K",lang:"cue"},{height:"350px"}),null,16)]),default:C(()=>[uw,dw,S(l,Ve({maxHeight:"350px"},{ranges:["2,11-15"]}),{default:C(()=>[pw]),_:1},16)]),_:1},16)}}},gw=Y(yw,[["__file","/@slidev/slides/22.md"]]),_w=t("h1",null,"Add probes",-1),vw=t("h3",null,"compose.yml",-1),bw=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#429988"}},"services"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#429988"}},"guestbook"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"image"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"dbodky/guestbook")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"container_name"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"guestbook")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"healthcheck"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#429988"}},"test"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#C98A7D"}},'"CMD"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"curl"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"http://localhost:8080"'),t("span",{style:{color:"#858585"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#429988"}},"interval"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"10s")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#429988"}},"timeout"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"5s")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#429988"}},"retries"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"3")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#429988"}},"start_period"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"3s")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#2F8A89"}},"services"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#2F8A89"}},"guestbook"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"image"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"dbodky/guestbook")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"container_name"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"guestbook")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"healthcheck"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#2F8A89"}},"test"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#B56959"}},'"CMD"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"curl"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"http://localhost:8080"'),t("span",{style:{color:"#8E8F8B"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#2F8A89"}},"interval"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"10s")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#2F8A89"}},"timeout"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"5s")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#2F8A89"}},"retries"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"3")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#2F8A89"}},"start_period"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"3s")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Aw=t("br",null,null,-1),kw=t("br",null,null,-1),ww=t("h3",null,"Acornfile",-1),Dw={__name:"23",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-02/probes.md"};return U(z),(s,o)=>{const l=At,r=Tn;return k(),G(Nt,me(fe(n)),{right:C(a=>[Aw,kw,ww,S(r,Ve({code:"Y29udGFpbmVyczogewogIGd1ZXN0Ym9vazogewogICAgWy4uLl0KICB9CiAgcG9zdGdyZXM6IHsKICAgIFsuLi5dCiAgfQogIHJlZGlzOiB7CiAgICBbLi4uXQogIH0KfQo",lang:"cue"},{height:"350px"}),null,16)]),default:C(()=>[_w,vw,S(l,Ve({maxHeight:"350px"},{ranges:["2,6-11"]}),{default:C(()=>[bw]),_:1},16)]),_:1},16)}}},Cw=Y(Dw,[["__file","/@slidev/slides/23.md"]]),xw=t("h1",null,"Takeaways",-1),Bw=t("p",null,"Many directives are portable from Docker compose",-1),Ew=t("br",null,null,-1),Sw=t("ul",null,[t("li",null,"Containers can be dependant on other workloads")],-1),$w=t("br",null,null,-1),Ow=t("ul",null,[t("li",null,[f("Acorn supports the "),t("code",null,"startup/liveness/readiness"),f(" probes known to Kubernetes")])],-1),Tw=t("br",null,null,-1),Pw=t("ul",null,[t("li",null,[f("You can run TCP/HTTP probes "),t("em",null,"or"),f(" create your own, script-style")])],-1),Iw=t("br",null,null,-1),Fw={__name:"24",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-02/takeaways.md"};return U(z),(s,o)=>(k(),G(Mt,me(fe(n)),{default:C(()=>[xw,Bw,Ew,Sw,$w,Ow,Tw,Pw,Iw]),_:1},16))}},Rw=Y(Fw,[["__file","/@slidev/slides/24.md"]]),Lw=t("h1",null,"🔁 Iterate",-1),Mw=t("p",null,"(Secret) data management",-1),Nw=t("br",null,null,-1),Uw=t("br",null,null,-1),Hw=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"git"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"checkout"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"section-"),t("span",{style:{color:"#CB7676"}},"0"),t("span",{style:{color:"#6394BF"}},"3")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"git"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"checkout"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"section-"),t("span",{style:{color:"#AB5959"}},"0"),t("span",{style:{color:"#296AA3"}},"3")])])])],-1),Vw={__name:"25",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[Lw,Mw,Nw,Uw,Hw]),_:1},16))}},jw=Y(Vw,[["__file","/@slidev/slides/25.md"]]),Kw=t("h1",null,"Add secret management",-1),Ww=t("h3",null,"We’re still relying on…",-1),qw=t("br",null,null,-1),Gw=t("ul",null,[t("li",null,"hardcoded passwords (uh-oh)")],-1),zw=t("br",null,null,-1),Yw=t("ul",null,[t("li",null,"hardcoded database names")],-1),Zw=t("br",null,null,-1),Jw=t("ul",null,[t("li",null,"our services to never go down/restart (or else data will get lost)")],-1),Qw=t("br",null,null,-1),Xw=t("p",null,[t("strong",null,"Let’s fix this! 🩹")],-1),e5=t("br",null,null,-1),t5=t("br",null,null,-1),n5=t("h3",null,"Acornfile",-1),s5={__name:"26",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-03/secrets.md"};return U(z),(s,o)=>{const l=Tn;return k(),G(Nt,me(fe(n)),{right:C(r=>[e5,t5,n5,S(l,Ve({code:"Y29udGFpbmVyczogewogIGd1ZXN0Ym9vazogewogICAgWy4uLl0KICAgIGVudjogewogICAgICBHVUVTVEJPT0tfREJfUEFTU1dPUkQ6ICJwYXNzd29yZCIKICAgICAgR1VFU1RCT09LX0RCX1VTRVI6ICJndWVzdGJvb2t1c2VyIgogICAgfQogIH0KICBwb3N0Z3JlczogewogICAgWy4uLl0KICAgIGVudjogewogICAgICBQT1NUR1JFU19VU0VSOiAiZ3Vlc3Rib29rdXNlciIKICAgICAgUE9TVEdSRVNfUEFTU1dPUkQ6ICJwYXNzd29yZCIKICAgIH0KICB9Cn0K",lang:"cue"},{height:"350px"}),null,16)]),default:C(()=>[Kw,Ww,qw,Gw,zw,Yw,Zw,Jw,Qw,Xw]),_:1},16)}}},o5=Y(s5,[["__file","/@slidev/slides/26.md"]]),l5=t("h1",null,"Add data persistency",-1),r5=t("h3",null,"compose.yml",-1),a5=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#429988"}},"services"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#429988"}},"postgres"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"volumes"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"db-data:/data")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#429988"}},"redis"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#6394BF"}},"..."),t("span",{style:{color:"#858585"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#429988"}},"volumes"),t("span",{style:{color:"#858585"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"-"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"redis-data:/data")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#2F8A89"}},"services"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#2F8A89"}},"postgres"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"volumes"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"db-data:/data")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#2F8A89"}},"redis"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#296AA3"}},"..."),t("span",{style:{color:"#8E8F8B"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#2F8A89"}},"volumes"),t("span",{style:{color:"#8E8F8B"}},":")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"-"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"redis-data:/data")])])])],-1),i5=t("br",null,null,-1),c5=t("br",null,null,-1),u5=t("h3",null,"Acornfile",-1),d5={__name:"27",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-03/volumes.md"};return U(z),(s,o)=>{const l=At,r=Tn;return k(),G(Nt,me(fe(n)),{right:C(a=>[i5,c5,u5,S(r,Ve({code:"Y29udGFpbmVyczogewogIHBvc3RncmVzOiB7CiAgICBbLi4uXQogIH0KICByZWRpczogewogICAgWy4uLl0KICB9Cn0K",lang:"cue"},{height:"350px"}),null,16)]),default:C(()=>[l5,r5,S(l,Ve({maxHeight:"350px"},{ranges:["3,5-7,9,10"]}),{default:C(()=>[a5]),_:1},16)]),_:1},16)}}},p5=Y(d5,[["__file","/@slidev/slides/27.md"]]),f5=t("h1",null,"Takeaways",-1),h5=t("p",null,"Acorn takes care of secrets and volumes, both locally and remote",-1),m5=t("br",null,null,-1),y5=t("ul",null,[t("li",null,"Acorn supports different secret types to choose from")],-1),g5=t("br",null,null,-1),_5=t("ul",null,[t("li",null,"Simple creation of 'closed loops'")],-1),v5=t("br",null,null,-1),b5=t("ul",null,[t("li",null,[f("Secrets can be exposed via Acorn’s CLI, no more need for "),t("br"),t("code",null,"kubectl get secrets/db-auth --template={{.data.password}} | base64 -d")])],-1),A5={__name:"28",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-03/takeaways.md"};return U(z),(s,o)=>(k(),G(Mt,me(fe(n)),{default:C(()=>[f5,h5,m5,y5,g5,_5,v5,b5]),_:1},16))}},k5=Y(A5,[["__file","/@slidev/slides/28.md"]]),w5=t("h1",null,"🔁 Iterate",-1),D5=t("p",null,"User-provided configuration",-1),C5=t("br",null,null,-1),x5=t("br",null,null,-1),B5=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"git"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"checkout"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"section-"),t("span",{style:{color:"#CB7676"}},"0"),t("span",{style:{color:"#6394BF"}},"4")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"git"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"checkout"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"section-"),t("span",{style:{color:"#AB5959"}},"0"),t("span",{style:{color:"#296AA3"}},"4")])])])],-1),E5={__name:"29",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[w5,D5,C5,x5,B5]),_:1},16))}},S5=Y(E5,[["__file","/@slidev/slides/29.md"]]),$5=t("h1",null,"Add runtime arguments",-1),O5=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"containers: "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"guestbook"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"image"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"dbodky/guestbook-demo:v1.1.0"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ports:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"publish:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"guestbook:8080/http"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"env:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"GUESTBOOK_DB_NAME"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"GUESTBOOK_DB_HOST:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"postgres"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"GUESTBOOK_DB_PASSWORD:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/password"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"GUESTBOOK_DB_USER:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/username"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"GUESTBOOK_REDIS_HOST:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"redis"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"dependsOn:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#C98A7D"}},'"postgres"'),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"redis"'),t("span",{style:{color:"#858585"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"probes:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"readiness:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"http:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"url:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"http://localhost:8080"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"postgres:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"image"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"postgres:12"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ports:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"postgres:5432/tcp"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"env:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"POSTGRES_USER"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/username"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"POSTGRES_PASSWORD:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"secret://db-credentials/password"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"POSTGRES_DB:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"guestbookdb"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"probes:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"readiness:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"tcp:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"url:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"tcp://localhost:5432"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"dirs:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"/var/lib/postgresql/data"'),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"volume://db-data"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"redis:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"image"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"redis:7"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ports:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"redis:6379/tcp"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"probes:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"readiness:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"tcp:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"url:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"tcp://localhost:6379"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"dirs:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"/data"'),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"volume://redis-data"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"secrets: "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},'"'),t("span",{style:{color:"#E0A569"}},"db-credentials"),t("span",{style:{color:"#858585"}},'"'),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"type"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'"basic"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"data:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"username"),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'""')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},"password:"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},'""')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"volumes: "),t("span",{style:{color:"#858585"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#858585"}},'"'),t("span",{style:{color:"#E0A569"}},"db-data"),t("span",{style:{color:"#858585"}},'"'),t("span",{style:{color:"#858585"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"  "),t("span",{style:{color:"#C98A7D"}},'"redis-data"'),t("span",{style:{color:"#FDAEB7","font-style":"italic"}},":"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"containers: "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"guestbook"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"image"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"dbodky/guestbook-demo:v1.1.0"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"ports:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"publish:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"guestbook:8080/http"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"env:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"GUESTBOOK_DB_NAME"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"guestbookdb"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"GUESTBOOK_DB_HOST:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"postgres"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"GUESTBOOK_DB_PASSWORD:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"secret://db-credentials/password"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"GUESTBOOK_DB_USER:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"secret://db-credentials/username"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"GUESTBOOK_REDIS_HOST:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"redis"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"dependsOn:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#B56959"}},'"postgres"'),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"redis"'),t("span",{style:{color:"#8E8F8B"}},"]")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"probes:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"readiness:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"http:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"url:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"http://localhost:8080"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"postgres:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"image"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"postgres:12"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"ports:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"postgres:5432/tcp"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"env:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"POSTGRES_USER"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"secret://db-credentials/username"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"POSTGRES_PASSWORD:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"secret://db-credentials/password"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"POSTGRES_DB:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"guestbookdb"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"probes:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"readiness:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"tcp:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"url:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"tcp://localhost:5432"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"dirs:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"/var/lib/postgresql/data"'),t("span",{style:{color:"#B31D28","font-style":"italic"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"volume://db-data"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"redis:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"image"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"redis:7"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"ports:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"redis:6379/tcp"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"probes:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"readiness:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"tcp:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"url:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"tcp://localhost:6379"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"dirs:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"/data"'),t("span",{style:{color:"#B31D28","font-style":"italic"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"volume://redis-data"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"secrets: "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},'"'),t("span",{style:{color:"#B58451"}},"db-credentials"),t("span",{style:{color:"#8E8F8B"}},'"'),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"type"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'"basic"')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"data:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"username"),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'""')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#B31D28","font-style":"italic"}},"password:"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},'""')]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"volumes: "),t("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#8E8F8B"}},'"'),t("span",{style:{color:"#B58451"}},"db-data"),t("span",{style:{color:"#8E8F8B"}},'"'),t("span",{style:{color:"#8E8F8B"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"  "),t("span",{style:{color:"#B56959"}},'"redis-data"'),t("span",{style:{color:"#B31D28","font-style":"italic"}},":"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{}")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),T5=t("br",null,null,-1),P5=t("br",null,null,-1),I5={__name:"30",setup(e){const n={layout:"two-cols",transition:"fade-out",srcSequence:"./slides/practical/section-04/args.md"};return U(z),(s,o)=>{const l=At,r=Tn;return k(),G(Nt,me(fe(n)),{right:C(a=>[T5,P5,S(r,Ve({code:"Y29udGFpbmVyczogewogIGd1ZXN0Ym9vazogewogICAgWy4uLl0KICAgIGVudjogewogICAgICBHVUVTVEJPT0tfREJfTkFNRTogImd1ZXN0Ym9va2RiIgogICAgICBHVUVTVEJPT0tfREJfSE9TVDogInBvc3RncmVzIgogICAgICBHVUVTVEJPT0tfREJfUEFTU1dPUkQ6ICJzZWNyZXQ6Ly9kYi1jcmVkZW50aWFscy9wYXNzd29yZCIKICAgICAgR1VFU1RCT09LX0RCX1VTRVI6ICJzZWNyZXQ6Ly9kYi1jcmVkZW50aWFscy91c2VybmFtZSIKICAgICAgR1VFU1RCT09LX1JFRElTX0hPU1Q6ICJyZWRpcyIKICAgIH0KICB9CiAgcG9zdGdyZXM6IHsKICAgIFsuLi5dCiAgICBlbnY6IHsKICAgICAgUE9TVEdSRVNfVVNFUjogInNlY3JldDovL2RiLWNyZWRlbnRpYWxzL3VzZXJuYW1lIgogICAgICBQT1NUR1JFU19QQVNTV09SRDogInNlY3JldDovL2RiLWNyZWRlbnRpYWxzL3Bhc3N3b3JkIgogICAgICBQT1NUR1JFU19EQjogImd1ZXN0Ym9va2RiIgogICAgfQogIH0KICBbLi4uXQp9CnNlY3JldHM6IHsKICAiZGItYXV0aCI6IHsKICAgIHR5cGU6ICJiYXNpYyIKICAgIGRhdGE6IHsKICAgICAgdXNlcm5hbWU6ICIiCiAgICAgIHBhc3N3b3JkOiAiIgogICAgfQogIH0KfQpbLi4uXQo",lang:"cue"},{height:"350px"}),null,16)]),default:C(()=>[$5,S(l,Ve({maxHeight:"350px"},{ranges:["6,21","7,10,17,28","8,9,19,20,38,39"]}),{default:C(()=>[O5]),_:1},16)]),_:1},16)}}},F5=Y(I5,[["__file","/@slidev/slides/30.md"]]),R5=t("h1",null,"Takeaways",-1),L5=t("p",null,"The CLI is your friend - again!",-1),M5=t("br",null,null,-1),N5=t("ul",null,[t("li",null,"Dynamic data can be used at run/deploy time")],-1),U5=t("br",null,null,-1),H5=t("ul",null,[t("li",null,"Acorn’s CLI parses the data inventory and displays it for the end user")],-1),V5=t("br",null,null,-1),j5=t("ul",null,[t("li",null,"Defaults can be set")],-1),K5=t("br",null,null,-1),W5=t("ul",null,[t("li",null,[f("Data can be manipulated using Acorn’s "),t("code",null,"std"),f(" library")])],-1),q5={__name:"31",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/practical/section-04/takeaways.md"};return U(z),(s,o)=>(k(),G(Mt,me(fe(n)),{default:C(()=>[R5,L5,M5,N5,U5,H5,V5,j5,K5,W5]),_:1},16))}},G5=Y(q5,[["__file","/@slidev/slides/31.md"]]),z5=t("h1",null,"✨ Finishing Touches",-1),Y5=t("p",null,"Build, push, and deploy the Acorns",-1),Z5=t("br",null,null,-1),J5=t("br",null,null,-1),Q5=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"git"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"checkout"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"section-"),t("span",{style:{color:"#CB7676"}},"0"),t("span",{style:{color:"#6394BF"}},"5")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"git"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"checkout"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"section-"),t("span",{style:{color:"#AB5959"}},"0"),t("span",{style:{color:"#296AA3"}},"5")])])])],-1),X5={__name:"32",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[z5,Y5,Z5,J5,Q5]),_:1},16))}},e9=Y(X5,[["__file","/@slidev/slides/32.md"]]),t9=t("h1",null,"Almost there!",-1),n9=t("p",null,"Deployment looks similar to the workflow on Docker",-1),s9=t("br",null,null,-1),o9=t("br",null,null,-1),l9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"acorn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"login"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"registr"),t("span",{style:{color:"#DBD7CA"}},"y"),t("span",{style:{color:"#CB7676"}},">")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"acorn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"build"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"-t"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"registr"),t("span",{style:{color:"#DBD7CA"}},"y"),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#C98A7D"}},"/"),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"use"),t("span",{style:{color:"#DBD7CA"}},"r"),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#C98A7D"}},"/"),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"imag"),t("span",{style:{color:"#DBD7CA"}},"e"),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#C98A7D"}},":"),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"ta"),t("span",{style:{color:"#DBD7CA"}},"g"),t("span",{style:{color:"#CB7676"}},">")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"acorn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"push"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"registr"),t("span",{style:{color:"#DBD7CA"}},"y"),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#C98A7D"}},"/"),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"use"),t("span",{style:{color:"#DBD7CA"}},"r"),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#C98A7D"}},"/"),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"imag"),t("span",{style:{color:"#DBD7CA"}},"e"),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#C98A7D"}},":"),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"ta"),t("span",{style:{color:"#DBD7CA"}},"g"),t("span",{style:{color:"#CB7676"}},">")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"acorn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"run"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"--help"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"registr"),t("span",{style:{color:"#DBD7CA"}},"y"),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#C98A7D"}},"/"),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"use"),t("span",{style:{color:"#DBD7CA"}},"r"),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#C98A7D"}},"/"),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"imag"),t("span",{style:{color:"#DBD7CA"}},"e"),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#C98A7D"}},":"),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#C98A7D"}},"ta"),t("span",{style:{color:"#DBD7CA"}},"g"),t("span",{style:{color:"#CB7676"}},">")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"acorn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"run"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"--target-namespace"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"demo"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"--name"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"demo"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#DBD7CA"}},"registry/user/image/tag"),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"["),t("span",{style:{color:"#DBD7CA"}},"OPTIONS"),t("span",{style:{color:"#858585"}},"]")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"acorn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"login"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"registr"),t("span",{style:{color:"#393A34"}},"y"),t("span",{style:{color:"#AB5959"}},">")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"acorn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"build"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"-t"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"registr"),t("span",{style:{color:"#393A34"}},"y"),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#B56959"}},"/"),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"use"),t("span",{style:{color:"#393A34"}},"r"),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#B56959"}},"/"),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"imag"),t("span",{style:{color:"#393A34"}},"e"),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#B56959"}},":"),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"ta"),t("span",{style:{color:"#393A34"}},"g"),t("span",{style:{color:"#AB5959"}},">")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"acorn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"push"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"registr"),t("span",{style:{color:"#393A34"}},"y"),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#B56959"}},"/"),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"use"),t("span",{style:{color:"#393A34"}},"r"),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#B56959"}},"/"),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"imag"),t("span",{style:{color:"#393A34"}},"e"),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#B56959"}},":"),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"ta"),t("span",{style:{color:"#393A34"}},"g"),t("span",{style:{color:"#AB5959"}},">")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"acorn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"run"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"--help"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"registr"),t("span",{style:{color:"#393A34"}},"y"),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#B56959"}},"/"),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"use"),t("span",{style:{color:"#393A34"}},"r"),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#B56959"}},"/"),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"imag"),t("span",{style:{color:"#393A34"}},"e"),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#B56959"}},":"),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#B56959"}},"ta"),t("span",{style:{color:"#393A34"}},"g"),t("span",{style:{color:"#AB5959"}},">")]),f(`
`),t("span",{class:"line"}),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"acorn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"run"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"--target-namespace"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"demo"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"--name"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"demo"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#393A34"}},"registry/user/image/tag"),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"["),t("span",{style:{color:"#393A34"}},"OPTIONS"),t("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),r9=t("br",null,null,-1),a9=t("br",null,null,-1),i9=t("br",null,null,-1),c9=t("br",null,null,-1),u9=t("br",null,null,-1),d9=t("ol",null,[t("li",null,"Login to your registry")],-1),p9=t("br",null,null,-1),f9=t("ol",{start:"2"},[t("li",null,"Build and tag the image/artifact")],-1),h9=t("br",null,null,-1),m9=t("ol",{start:"3"},[t("li",null,"Push the image to your repository")],-1),y9=t("br",null,null,-1),g9=t("ol",{start:"4"},[t("li",null,"Pull the image to its destination or deploy it directly")],-1),_9={__name:"33",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:4,srcSequence:"./slides/practical/section-05/deploy.md"};return U(z),(s,o)=>{const l=At,r=Qt;return k(),G(Nt,me(fe(n)),{right:C(a=>[r9,a9,i9,c9,u9,S(r,{at:"1"},{default:C(()=>[d9,p9]),_:1}),S(r,{at:"2"},{default:C(()=>[f9,h9]),_:1}),S(r,{at:"3"},{default:C(()=>[m9,y9]),_:1}),S(r,{at:"4"},{default:C(()=>[g9]),_:1})]),default:C(()=>[t9,n9,s9,o9,S(l,Ve({maxHeight:"400px"},{ranges:["","1","3","5","7,9,10"]}),{default:C(()=>[l9]),_:1},16)]),_:1},16)}}},v9=Y(_9,[["__file","/@slidev/slides/33.md"]]),b9=t("h1",null,"🎭 Encore",-1),A9=t("p",null,"Some more things Acorn can do…",-1),k9={__name:"34",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[b9,A9]),_:1},16))}},w9=Y(k9,[["__file","/@slidev/slides/34.md"]]),D9=t("h1",null,"Demo",-1),C9=t("p",null,"Let’s deploy a workshop guestbook!",-1),x9=t("br",null,null,-1),B9=t("br",null,null,-1),E9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"acorn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"install"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"--ingress-class=nginx "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"--lets-encrypt=enabled "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"--lets-encrypt-email=dbodky@gmail.com "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"--lets-encrypt-tos-agree=true "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"--cluster-domain=dbodky.me "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"--http-endpoint-pattern="),t("span",{style:{color:"#C98A7D"}},'"{{.Container}}.{{.ClusterDomain}}"')])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"acorn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"install"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"--ingress-class=nginx "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"--lets-encrypt=enabled "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"--lets-encrypt-email=dbodky@gmail.com "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"--lets-encrypt-tos-agree=true "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"--cluster-domain=dbodky.me "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"--http-endpoint-pattern="),t("span",{style:{color:"#B56959"}},'"{{.Container}}.{{.ClusterDomain}}"')])])])],-1),S9=t("div",{class:"bg-red absolute left-2 top-43 h-4 w-39 opacity-50 rounded-md"},null,-1),$9=t("div",{class:"bg-green absolute left-2 top-47.5 h-4 w-41 opacity-50 rounded-md"},null,-1),O9=t("div",{class:"bg-green absolute left-2 top-52 h-4 w-68 opacity-50 rounded-md"},null,-1),T9=t("div",{class:"bg-green absolute left-2 top-56.5 h-4 w-53 opacity-50 rounded-md"},null,-1),P9=t("div",{class:"bg-blue absolute left-2 top-61.5 h-4 w-48 opacity-50 rounded-md"},null,-1),I9=t("div",{class:"bg-pink absolute left-2 top-66 h-4 w-106.5 opacity-50 rounded-md"},null,-1),F9=t("br",null,null,-1),R9=t("br",null,null,-1),L9=t("br",null,null,-1),M9=t("br",null,null,-1),N9=t("br",null,null,-1),U9=t("li",{class:"text-red"},[f("Define the installed "),t("code",null,"IngressClass")],-1),H9=t("li",{class:"text-green"},[f("Configure TLS certificate generation via "),t("b",null,"Let's Encrypt")],-1),V9=t("li",{class:"text-blue"},[f("Configure the cluster domain to use for "),t("code",null,"Ingress"),f(" generation by Acorn")],-1),j9=t("li",{class:"text-pink"},[f("Configure the HTTP endpoint pattern to use for "),t("code",null,"Ingress"),f(" generation by Acorn")],-1),K9={__name:"35",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:4,srcSequence:"./slides/practical/section-05/demo.md"};return U(z),(s,o)=>{const l=At,r=Qt;return k(),G(Nt,me(fe(n)),{right:C(a=>[F9,R9,L9,M9,N9,t("ul",null,[S(r,{at:"1"},{default:C(()=>[U9]),_:1}),S(r,{at:"2"},{default:C(()=>[H9]),_:1}),S(r,{at:"3"},{default:C(()=>[V9]),_:1}),S(r,{at:"4"},{default:C(()=>[j9]),_:1})])]),default:C(()=>[D9,C9,x9,B9,S(l,Ve({},{ranges:[""]}),{default:C(()=>[E9]),_:1},16),S(r,null,{default:C(()=>[S9]),_:1}),S(r,null,{default:C(()=>[$9,O9,T9]),_:1}),S(r,null,{default:C(()=>[P9]),_:1}),S(r,null,{default:C(()=>[I9]),_:1})]),_:1},16)}}},W9=Y(K9,[["__file","/@slidev/slides/35.md"]]),q9=t("h1",null,"Demo",-1),G9=t("p",null,"Let’s deploy a workshop guestbook!",-1),z9=t("br",null,null,-1),Y9=t("br",null,null,-1),Z9=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"acorn"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#C98A7D"}},"run"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"--name=demo "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"--target-namespace=guestbook "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"--link=ext-db:postgres "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"--secret=db-credentials:db-auth "),t("span",{style:{color:"#D4976C"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"index.docker.io/dbodky/guestbook-acorn:v1.0.0")])])]),t("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"acorn"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#B56959"}},"run"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"--name=demo "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"--target-namespace=guestbook "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"--link=ext-db:postgres "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"--secret=db-credentials:db-auth "),t("span",{style:{color:"#A65E2B"}},"\\")]),f(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"index.docker.io/dbodky/guestbook-acorn:v1.0.0")])])])],-1),J9=t("div",{class:"bg-red absolute left-2 top-43 h-4 w-21 opacity-50 rounded-md"},null,-1),Q9=t("div",{class:"bg-green absolute left-2 top-47.5 h-4 w-51.5 opacity-50 rounded-md"},null,-1),X9=t("div",{class:"bg-pink absolute left-2 top-52 h-4 w-40 opacity-50 rounded-md"},null,-1),eD=t("div",{class:"bg-purple absolute left-2 top-56.5 h-4 w-56.5 opacity-50 rounded-md"},null,-1),tD=t("div",{class:"bg-blue absolute left-2 top-61.5 h-4 w-82 opacity-50 rounded-md"},null,-1),nD=t("br",null,null,-1),sD=t("br",null,null,-1),oD=t("br",null,null,-1),lD=t("br",null,null,-1),rD=t("br",null,null,-1),aD=t("li",{class:"text-red"},[f("Define the name of the Acorn "),t("code",null,"App")],-1),iD=t("li",{class:"text-green"},[f("Define the "),t("code",null,"Namespace"),f(" the "),t("code",null,"App"),f(" will live in")],-1),cD=t("li",{class:"text-pink"},[f("Link an external Database instead of the "),t("code",null,"postgres"),f(" service defined in our Acorn")],-1),uD=t("li",{class:"text-purple"},[f("Reference a "),t("code",null,"Secret"),f(" with our database's credentials instead of providing/generating one")],-1),dD=t("li",{class:"text-blue"},[f("State the "),t("code",null,"Image"),f(" you want to deploy")],-1),pD={__name:"36",setup(e){const n={layout:"two-cols",transition:"fade-out",clicks:5,srcSequence:"./slides/practical/section-05/demo.md"};return U(z),(s,o)=>{const l=At,r=Qt;return k(),G(Nt,me(fe(n)),{right:C(a=>[nD,sD,oD,lD,rD,t("ul",null,[S(r,{at:"1"},{default:C(()=>[aD]),_:1}),S(r,{at:"2"},{default:C(()=>[iD]),_:1}),S(r,{at:"3"},{default:C(()=>[cD]),_:1}),S(r,{at:"4"},{default:C(()=>[uD]),_:1}),S(r,{at:"5"},{default:C(()=>[dD]),_:1})])]),default:C(()=>[q9,G9,z9,Y9,S(l,Ve({},{ranges:[""]}),{default:C(()=>[Z9]),_:1},16),S(r,null,{default:C(()=>[J9]),_:1}),S(r,null,{default:C(()=>[Q9]),_:1}),S(r,null,{default:C(()=>[X9]),_:1}),S(r,null,{default:C(()=>[eD]),_:1}),S(r,null,{default:C(()=>[tD]),_:1})]),_:1},16)}}},fD=Y(pD,[["__file","/@slidev/slides/36.md"]]),hD=t("h1",null,"🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!",-1),mD={__name:"37",setup(e){const n={layout:"center",class:"text-center",transition:"fade-out",srcSequence:"./slides/practical/section-05/demo.md"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[hD]),_:1},16))}},yD=Y(mD,[["__file","/@slidev/slides/37.md"]]),gD=t("h1",null,"Summing it up",-1),_D=t("p",null,"Acorn can be helpful if …",-1),vD=t("br",null,null,-1),bD=t("p",null,[t("span",{class:"text-2xl"},"🏎️"),f(" your team needs to get started with Kubernetes fast")],-1),AD=t("br",null,null,-1),kD=t("p",null,[t("span",{class:"text-2xl"},"🪞"),f(" dev, test, and production environments shall 'feel the same'")],-1),wD=t("br",null,null,-1),DD=t("p",null,[t("span",{class:"text-2xl"},"📑"),f(" different runtime profiles need to be deployed")],-1),CD={__name:"38",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/end/pros.md"};return U(z),(s,o)=>{const l=Qt;return k(),G(Mt,me(fe(n)),{default:C(()=>[gD,_D,vD,S(l,null,{default:C(()=>[bD,AD]),_:1}),S(l,null,{default:C(()=>[kD,wD]),_:1}),S(l,null,{default:C(()=>[DD]),_:1})]),_:1},16)}}},xD=Y(CD,[["__file","/@slidev/slides/38.md"]]),BD=t("h1",null,"Summing it up",-1),ED=t("p",null,"Acorn still lacks…",-1),SD=t("br",null,null,-1),$D=t("p",null,[t("span",{class:"text-2xl"},"🦄"),f(" CRD support")],-1),OD=t("br",null,null,-1),TD=t("p",null,[t("span",{class:"text-2xl"},"⚖️"),f(" autoscaling configuration")],-1),PD=t("br",null,null,-1),ID=t("p",null,[t("span",{class:"text-2xl"},"🚨"),f(" (Network) policies")],-1),FD=t("br",null,null,-1),RD={__name:"39",setup(e){const n={layout:"default",transition:"fade-out",srcSequence:"./slides/end/cons.md"};return U(z),(s,o)=>{const l=Qt;return k(),G(Mt,me(fe(n)),{default:C(()=>[BD,ED,SD,S(l,null,{default:C(()=>[$D,OD]),_:1}),S(l,null,{default:C(()=>[TD,PD]),_:1}),S(l,null,{default:C(()=>[ID,FD]),_:1})]),_:1},16)}}},LD=Y(RD,[["__file","/@slidev/slides/39.md"]]),MD=t("h1",null,"🎬 Cut!",-1),ND=t("p",null,"Thanks for attending!",-1),UD={__name:"40",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[MD,ND]),_:1},16))}},HD=Y(UD,[["__file","/@slidev/slides/40.md"]]),VD=t("h1",null,"Acknowledgements",-1),jD=t("p",null,"thanks for making this workshop possible",-1),KD=t("br",null,null,-1),WD=t("ul",null,[t("li",null,[t("p",null,[t("a",{href:"https://excalidraw.com",target:"_blank",rel:"noopener"},"Excalidraw")])]),t("li",null,[t("p",null,[t("a",{href:"https://sli.dev",target:"_blank",rel:"noopener"},"Sli.dev")])]),t("li",null,[t("p",null,[t("a",{href:"https://civo.com",target:"_blank",rel:"noopener"},"CIVO")])]),t("li",null,[t("p",null,"YOU!")])],-1),qD=t("br",null,null,-1),GD=t("br",null,null,-1),zD=t("p",null,[f("Feel free to leave feedback at "),t("a",{href:"https://guestbook.dbodky.me",target:"_blank",rel:"noopener"},"guestbook.dbodky.me"),f("!")],-1),YD=t("div",{class:"abs-br text-2 pr-1 text-gray-400"},"Photo by Howie R on Unsplash",-1),ZD={__name:"41",setup(e){const n={layout:"image-right",transition:"fade-out",image:"/thankyou.jpg",srcSequence:"./slides/end/thanks.md"};return U(z),(s,o)=>(k(),G(ta,me(fe(n)),{default:C(()=>[VD,jD,KD,WD,qD,GD,zD,YD]),_:1},16))}},JD=Y(ZD,[["__file","/@slidev/slides/41.md"]]),QD=t("h1",null,"❓ Questions",-1),XD=t("div",{class:"abs-b pb-16 text-4 text-gray-400"},[t("p",null,[f("Feel free to leave feedback at "),t("a",{href:"https://guestbook.dbodky.me",target:"_blank",rel:"noopener"},"guestbook.dbodky.me")])],-1),e2={__name:"42",setup(e){const n={layout:"center",transition:"fade-out",class:"text-center"};return U(z),(s,o)=>(k(),G(dt,me(fe(n)),{default:C(()=>[QD,XD]),_:1},16))}},t2=Y(e2,[["__file","/@slidev/slides/42.md"]]),n2=[{path:"1",name:"page-1",component:E3,meta:{title:"From Dev to Prod with Acorn",theme:"default",class:"text-center",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},transition:"fade-out",css:"unocss",exportFilename:"dev-to-prod-with-acorn-2023",monaco:!0,srcSequence:"./slides/cover.md",slide:{raw:null,title:"From Dev to Prod with Acorn",level:1,content:`# From Dev to Prod with Acorn

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

`,title:"From Dev to Prod with Acorn",level:1,content:"",frontmatter:{theme:"default",class:"text-center",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},transition:"fade-out",css:"unocss",title:"From Dev to Prod with Acorn",exportFilename:"dev-to-prod-with-acorn-2023",monaco:!0},index:0,start:0,end:16},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/cover.md",notesHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:q3,meta:{transition:"fade-out",layout:"image-right",image:"/legopic.jpg",title:"About me",srcSequence:"./slides/introduction/myself.md",slide:{raw:null,title:"About me",level:1,content:`# About me


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

`,content:"",frontmatter:{},index:1,start:16,end:21},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/introduction/myself.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:n8,meta:{transition:"fade-out",layout:"default",title:"About this workshop",srcSequence:"./slides/introduction/workshop.md",slide:{raw:null,title:"About this workshop",level:1,content:`# About this workshop

<br />

<br />

- All resources are available on GitHub: [mocdaniel/acorn-workshop](https://github.com/mocdaniel/acorn-workshop)
 
<br />

 - You will need some tools to follow along
   -  **git**
   - **acorn** (Downloadable from [https://github.com/acorn-io/acorn](https://github.com/acorn-io/acorn))
   - **docker**
   - a working **Kubernetes cluster** (either local or remote)`,frontmatter:{transition:"fade-out",layout:"default",title:"About this workshop",srcSequence:"./slides/introduction/workshop.md"},index:2,start:0,end:22,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/introduction/workshop.md",raw:`---
transition: fade-out
layout: default
---

# About this workshop

<br />

<br />

- All resources are available on GitHub: [mocdaniel/acorn-workshop](https://github.com/mocdaniel/acorn-workshop)
 
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
 
<br />

 - You will need some tools to follow along
   -  **git**
   - **acorn** (Downloadable from [https://github.com/acorn-io/acorn](https://github.com/acorn-io/acorn))
   - **docker**
   - a working **Kubernetes cluster** (either local or remote)`,frontmatter:{transition:"fade-out",layout:"default",title:"About this workshop"},index:0,start:0,end:22},inline:{raw:`---
src: ./slides/introduction/workshop.md
---
`,content:"",frontmatter:{},index:2,start:21,end:25},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/introduction/workshop.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:f8,meta:{layout:"default",transition:"fade-out",title:"Workshop Agenda",srcSequence:"./slides/introduction/agenda.md",slide:{raw:null,title:"Workshop Agenda",level:1,content:`# Workshop Agenda
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
`,content:"",frontmatter:{},index:3,start:25,end:29},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/introduction/agenda.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:b8,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 📚 Theory

Why are we doing this?
`,title:"📚 Theory",level:1,content:`# 📚 Theory

Why are we doing this?`,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:4,start:29,end:39,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:x8,meta:{layout:"center",transition:"fade-out",slide:{raw:`---
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

</LightOrDark>`,frontmatter:{layout:"center",transition:"fade-out"},index:5,start:39,end:52,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:M8,meta:{layout:"default",transition:"fade-out",title:"Where are we today?",srcSequence:"./slides/theory/today.md",slide:{raw:null,title:"Where are we today?",level:1,content:`# Where are we today?
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
`,content:"",frontmatter:{},index:6,start:52,end:56},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/today.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:q8,meta:{layout:"statement",transition:"fade-out",slide:{raw:`---
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

</v-click>`,frontmatter:{layout:"statement",transition:"fade-out"},index:7,start:56,end:69,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Q8,meta:{layout:"image-right",transition:"fade-out",image:"/acorn.jpg",title:"Time for Acorn",srcSequence:"./slides/theory/acorn.md",slide:{raw:null,title:"Time for Acorn",level:1,content:`# Time for Acorn

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
`,content:"",frontmatter:{},index:8,start:69,end:73},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/acorn.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:sA,meta:{layout:"center",transition:"fade-out",slide:{raw:`---
layout: center
transition: fade-out
---

![Overview of Acorn's architecture](/acorn-architecture.svg)
<div class="abs-b text-2 text-gray-400">Image taken from docs.acorn.io</div>
`,content:`![Overview of Acorn's architecture](/acorn-architecture.svg)
<div class="abs-b text-2 text-gray-400">Image taken from docs.acorn.io</div>`,frontmatter:{layout:"center",transition:"fade-out"},index:9,start:73,end:81,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:aA,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# ⚙️ Preparations

First things first!

`,title:"⚙️ Preparations",level:1,content:`# ⚙️ Preparations

First things first!`,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:10,start:81,end:92,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:EA,meta:{layout:"default",transition:"fade-out",clicks:4,title:"Installing Acorn",srcSequence:"./slides/theory/installation.md",slide:{raw:null,title:"Installing Acorn",level:1,content:`# Installing Acorn

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
`,content:"",frontmatter:{},index:11,start:92,end:96},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/installation.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:MA,meta:{layout:"default",transition:"fade-out",clicks:1,title:"Preparing our dev environment",srcSequence:"./slides/theory/repository.md",slide:{raw:null,title:"Preparing our dev environment",level:1,content:`# Preparing our dev environment

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
`,content:"",frontmatter:{},index:12,start:96,end:100},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/theory/repository.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:WA,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
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
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:13,start:100,end:118,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:JA,meta:{layout:"center",transition:"fade-out",slide:{raw:`---
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

</LightOrDark>`,frontmatter:{layout:"center",transition:"fade-out"},index:14,start:118,end:131,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:ok,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
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
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:15,start:131,end:149,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Ek,meta:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Defining our Database",srcSequence:"./slides/practical/section-01/database.md",slide:{raw:null,title:"Defining our Database",level:1,content:`# Defining our Database

### compose.yml

\`\`\`yaml {all|3-9|3,4,9|3,5,6|3,7,8} {maxHeight: '400px'}
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

<v-click at=1>

<br />

<br />

### Acornfile

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {
    
  }
}
\`\`\`

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Defining our Database",srcSequence:"./slides/practical/section-01/database.md"},index:16,start:0,end:49,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/database.md",raw:`---
layout: two-cols
transition: fade-out
clicks: 4
---

# Defining our Database

### compose.yml

\`\`\`yaml {all|3-9|3,4,9|3,5,6|3,7,8} {maxHeight: '400px'}
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

<v-click at=1>

<br />

<br />

### Acornfile

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {
    
  }
}
\`\`\`

</v-click>
`,title:"Defining our Database",level:1,content:`# Defining our Database

### compose.yml

\`\`\`yaml {all|3-9|3,4,9|3,5,6|3,7,8} {maxHeight: '400px'}
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

<v-click at=1>

<br />

<br />

### Acornfile

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {
    
  }
}
\`\`\`

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Defining our Database"},index:0,start:0,end:49},inline:{raw:`---
src: ./slides/practical/section-01/database.md
---
`,content:"",frontmatter:{},index:16,start:149,end:153},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/database.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Rk,meta:{layout:"two-cols",transition:"fade-out",title:"Defining the Redis cache",srcSequence:"./slides/practical/section-01/redis.md",slide:{raw:null,title:"Defining the Redis cache",level:1,content:`# Defining the Redis cache

### compose.yml

\`\`\`yaml {all|3-7|3,4,7|3,5,6} {maxHeight:'400px'}
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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {...}
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Defining the Redis cache",srcSequence:"./slides/practical/section-01/redis.md"},index:17,start:0,end:38,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/redis.md",raw:`---
layout: two-cols
transition: fade-out
---

# Defining the Redis cache

### compose.yml

\`\`\`yaml {all|3-7|3,4,7|3,5,6} {maxHeight:'400px'}
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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {...}
}
\`\`\`
`,title:"Defining the Redis cache",level:1,content:`# Defining the Redis cache

### compose.yml

\`\`\`yaml {all|3-7|3,4,7|3,5,6} {maxHeight:'400px'}
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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {...}
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Defining the Redis cache"},index:0,start:0,end:38},inline:{raw:`---
src: ./slides/practical/section-01/redis.md
---
`,content:"",frontmatter:{},index:17,start:153,end:157},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/redis.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Kk,meta:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Defining the guestbook",srcSequence:"./slides/practical/section-01/guestbook.md",slide:{raw:null,title:"Defining the guestbook",level:1,content:`# Defining the guestbook

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

### Acornfile

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {...}
  redis: {...}
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Defining the guestbook",srcSequence:"./slides/practical/section-01/guestbook.md"},index:18,start:0,end:51,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/guestbook.md",raw:`---
layout: two-cols
transition: fade-out
clicks: 4
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

### Acornfile

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {...}
  redis: {...}
}
\`\`\`
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

### Acornfile

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {...}
  redis: {...}
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Defining the guestbook"},index:0,start:0,end:51},inline:{raw:`---
src: ./slides/practical/section-01/guestbook.md
---
`,content:"",frontmatter:{},index:18,start:157,end:161},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/guestbook.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:nw,meta:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-01/takeaways.md",slide:{raw:null,title:"Takeaways",level:1,content:`# Takeaways

Many directives are portable from Docker compose

<br />

- AML behaves a lot like JSON (with some shortcuts)

<br />

- Acornfiles consist of **at least one** container definition

<br />

- Environment variables and ports can be defined just like with Docker compose

<br />

- Acorn's developer mode streams output right back to your console`,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-01/takeaways.md"},index:19,start:0,end:25,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/takeaways.md",raw:`---
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
`,content:"",frontmatter:{},index:19,start:161,end:165},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-01/takeaways.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:cw,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
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
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:20,start:165,end:183,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:gw,meta:{layout:"two-cols",transition:"fade-out",title:"Add dependencies",srcSequence:"./slides/practical/section-02/dependencies.md",slide:{raw:null,title:"Add dependencies",level:1,content:`# Add dependencies

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

### Acornfile

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
  }
  [...]
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add dependencies",srcSequence:"./slides/practical/section-02/dependencies.md"},index:21,start:0,end:59,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/dependencies.md",raw:`---
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

### Acornfile

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
  }
  [...]
}
\`\`\``,title:"Add dependencies",level:1,content:`# Add dependencies

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

### Acornfile

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    image: "dbodky/guestbook-demo:v1.1.0"
    ports: "guestbook:8080/http"
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_USER: "guestbookuser"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_REDIS_HOST: "redis"
    }
  }
  [...]
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add dependencies"},index:0,start:0,end:59},inline:{raw:`---
src: ./slides/practical/section-02/dependencies.md
---
`,content:"",frontmatter:{},index:21,start:183,end:187},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/dependencies.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Cw,meta:{layout:"two-cols",transition:"fade-out",title:"Add probes",srcSequence:"./slides/practical/section-02/probes.md",slide:{raw:null,title:"Add probes",level:1,content:`# Add probes

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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    [...]
  }
  postgres: {
    [...]
  }
  redis: {
    [...]
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add probes",srcSequence:"./slides/practical/section-02/probes.md"},index:22,start:0,end:46,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/probes.md",raw:`---
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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    [...]
  }
  postgres: {
    [...]
  }
  redis: {
    [...]
  }
}
\`\`\``,title:"Add probes",level:1,content:`# Add probes

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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    [...]
  }
  postgres: {
    [...]
  }
  redis: {
    [...]
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add probes"},index:0,start:0,end:46},inline:{raw:`---
src: ./slides/practical/section-02/probes.md
---
`,content:"",frontmatter:{},index:22,start:187,end:191},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/probes.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Rw,meta:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-02/takeaways.md",slide:{raw:null,title:"Takeaways",level:1,content:`# Takeaways

Many directives are portable from Docker compose

<br />

- Containers can be dependant on other workloads

<br />

- Acorn supports the \`startup/liveness/readiness\` probes known to Kubernetes

<br />

- You can run TCP/HTTP probes *or* create your own, script-style

<br />`,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-02/takeaways.md"},index:23,start:0,end:22,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/takeaways.md",raw:`---
layout: default
transition: fade-out
---

# Takeaways

Many directives are portable from Docker compose

<br />

- Containers can be dependant on other workloads

<br />

- Acorn supports the \`startup/liveness/readiness\` probes known to Kubernetes

<br />

- You can run TCP/HTTP probes *or* create your own, script-style

<br />`,title:"Takeaways",level:1,content:`# Takeaways

Many directives are portable from Docker compose

<br />

- Containers can be dependant on other workloads

<br />

- Acorn supports the \`startup/liveness/readiness\` probes known to Kubernetes

<br />

- You can run TCP/HTTP probes *or* create your own, script-style

<br />`,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways"},index:0,start:0,end:22},inline:{raw:`---
src: ./slides/practical/section-02/takeaways.md
---
`,content:"",frontmatter:{},index:23,start:191,end:195},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-02/takeaways.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:jw,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
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
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:24,start:195,end:213,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:o5,meta:{layout:"two-cols",transition:"fade-out",title:"Add secret management",srcSequence:"./slides/practical/section-03/secrets.md",slide:{raw:null,title:"Add secret management",level:1,content:`# Add secret management

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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    [...]
    env: {
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_USER: "guestbookuser"
    }
  }
  postgres: {
    [...]
    env: {
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add secret management",srcSequence:"./slides/practical/section-03/secrets.md"},index:25,start:0,end:51,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/secrets.md",raw:`---
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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    [...]
    env: {
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_USER: "guestbookuser"
    }
  }
  postgres: {
    [...]
    env: {
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    [...]
    env: {
      GUESTBOOK_DB_PASSWORD: "password"
      GUESTBOOK_DB_USER: "guestbookuser"
    }
  }
  postgres: {
    [...]
    env: {
      POSTGRES_USER: "guestbookuser"
      POSTGRES_PASSWORD: "password"
    }
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add secret management"},index:0,start:0,end:51},inline:{raw:`---
src: ./slides/practical/section-03/secrets.md
---
`,content:"",frontmatter:{},index:25,start:213,end:217},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/secrets.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:p5,meta:{layout:"two-cols",transition:"fade-out",title:"Add data persistency",srcSequence:"./slides/practical/section-03/volumes.md",slide:{raw:null,title:"Add data persistency",level:1,content:`# Add data persistency

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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {
    [...]
  }
  redis: {
    [...]
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add data persistency",srcSequence:"./slides/practical/section-03/volumes.md"},index:26,start:0,end:40,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/volumes.md",raw:`---
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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {
    [...]
  }
  redis: {
    [...]
  }
}
\`\`\``,title:"Add data persistency",level:1,content:`# Add data persistency

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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  postgres: {
    [...]
  }
  redis: {
    [...]
  }
}
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add data persistency"},index:0,start:0,end:40},inline:{raw:`---
src: ./slides/practical/section-03/volumes.md
---
`,content:"",frontmatter:{},index:26,start:217,end:221},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/volumes.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:k5,meta:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-03/takeaways.md",slide:{raw:null,title:"Takeaways",level:1,content:`# Takeaways

Acorn takes care of secrets and volumes, both locally and remote

<br />

- Acorn supports different secret types to choose from

<br />

- Simple creation of 'closed loops'

<br />

- Secrets can be exposed via Acorn's CLI, no more need for <br/>\`kubectl get secrets/db-auth --template={{.data.password}} | base64 -d\``,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-03/takeaways.md"},index:27,start:0,end:20,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/takeaways.md",raw:`---
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
`,content:"",frontmatter:{},index:27,start:221,end:225},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-03/takeaways.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:S5,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
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
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:28,start:225,end:243,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:F5,meta:{layout:"two-cols",transition:"fade-out",title:"Add runtime arguments",srcSequence:"./slides/practical/section-04/args.md",slide:{raw:null,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

\`\`\`json {6,21|7,10,17,28|8,9,19,20,38,39} {maxHeight:'350px'}
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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    [...]
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
  }
  postgres: {
    [...]
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
  }
  [...]
}
secrets: {
  "db-auth": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}
[...]
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add runtime arguments",srcSequence:"./slides/practical/section-04/args.md"},index:29,start:0,end:96,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args.md",raw:`---
layout: two-cols
transition: fade-out
---

# Add runtime arguments

\`\`\`json {6,21|7,10,17,28|8,9,19,20,38,39} {maxHeight:'350px'}
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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    [...]
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
  }
  postgres: {
    [...]
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
  }
  [...]
}
secrets: {
  "db-auth": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}
[...]
\`\`\``,title:"Add runtime arguments",level:1,content:`# Add runtime arguments

\`\`\`json {6,21|7,10,17,28|8,9,19,20,38,39} {maxHeight:'350px'}
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

\`\`\`cue {monaco} {height:'350px'}
containers: {
  guestbook: {
    [...]
    env: {
      GUESTBOOK_DB_NAME: "guestbookdb"
      GUESTBOOK_DB_HOST: "postgres"
      GUESTBOOK_DB_PASSWORD: "secret://db-credentials/password"
      GUESTBOOK_DB_USER: "secret://db-credentials/username"
      GUESTBOOK_REDIS_HOST: "redis"
    }
  }
  postgres: {
    [...]
    env: {
      POSTGRES_USER: "secret://db-credentials/username"
      POSTGRES_PASSWORD: "secret://db-credentials/password"
      POSTGRES_DB: "guestbookdb"
    }
  }
  [...]
}
secrets: {
  "db-auth": {
    type: "basic"
    data: {
      username: ""
      password: ""
    }
  }
}
[...]
\`\`\``,frontmatter:{layout:"two-cols",transition:"fade-out",title:"Add runtime arguments"},index:0,start:0,end:96},inline:{raw:`---
src: ./slides/practical/section-04/args.md
---
`,content:"",frontmatter:{},index:29,start:243,end:247},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/args.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:G5,meta:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-04/takeaways.md",slide:{raw:null,title:"Takeaways",level:1,content:`# Takeaways

The CLI is your friend - again!

<br />

- Dynamic data can be used at run/deploy time

<br />

- Acorn's CLI parses the data inventory and displays it for the end user

<br />

- Defaults can be set

<br />

- Data can be manipulated using Acorn's \`std\` library`,frontmatter:{layout:"default",transition:"fade-out",title:"Takeaways",srcSequence:"./slides/practical/section-04/takeaways.md"},index:30,start:0,end:25,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/takeaways.md",raw:`---
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

`,content:"",frontmatter:{},index:30,start:247,end:252},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-04/takeaways.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:e9,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
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
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:31,start:252,end:270,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:v9,meta:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Almost there!",srcSequence:"./slides/practical/section-05/deploy.md",slide:{raw:null,title:"Almost there!",level:1,content:`# Almost there!

Deployment looks similar to the workflow on Docker

<br />

<br />

\`\`\`bash {|1|3|5|7,9,10} {maxHeight:'400px'}
acorn login <registry>

acorn build -t <registry>/<user>/<image>:<tag>

acorn push <registry>/<user>/<image>:<tag>

acorn run --help <registry>/<user>/<image>:<tag>

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

</v-click>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Almost there!",srcSequence:"./slides/practical/section-05/deploy.md"},index:32,start:0,end:69,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/deploy.md",raw:`---
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

acorn run --help <registry>/<user>/<image>:<tag>

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

acorn run --help <registry>/<user>/<image>:<tag>

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
`,content:"",frontmatter:{},index:32,start:270,end:274},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/deploy.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:w9,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 🎭 Encore

Some more things Acorn can do...
`,title:"🎭 Encore",level:1,content:`# 🎭 Encore

Some more things Acorn can do...`,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:33,start:274,end:284,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:W9,meta:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Demo",srcSequence:"./slides/practical/section-05/demo.md",slide:{raw:null,title:"Demo",level:1,content:`# Demo 

Let's deploy a workshop guestbook!

<br />

<br />


\`\`\`bash
acorn install \\
--ingress-class=nginx \\
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

</ul>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:4,title:"Demo",srcSequence:"./slides/practical/section-05/demo.md"},index:34,start:0,end:93,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",raw:`---
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
--ingress-class=nginx \\
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
--ingress-class=nginx \\
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
`,content:"",frontmatter:{},index:34,start:284,end:288},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:fD,meta:{layout:"two-cols",transition:"fade-out",clicks:5,srcSequence:"./slides/practical/section-05/demo.md",slide:{raw:`---
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

</ul>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:5,srcSequence:"./slides/practical/section-05/demo.md"},index:35,start:93,end:192,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",raw:`---
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

</ul>`,frontmatter:{layout:"two-cols",transition:"fade-out",clicks:5},index:1,start:93,end:192},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:yD,meta:{layout:"center",class:"text-center",transition:"fade-out",srcSequence:"./slides/practical/section-05/demo.md",slide:{raw:`---
layout: center
class: text-center
transition: fade-out
---

# 🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!`,title:"🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!",level:1,content:"# 🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!",frontmatter:{layout:"center",class:"text-center",transition:"fade-out",srcSequence:"./slides/practical/section-05/demo.md"},index:36,start:192,end:199,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",raw:`---
layout: center
class: text-center
transition: fade-out
---

# 🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!`,title:"🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!",level:1,content:"# 🏡👩🏼‍💻🧑🏿‍💻 DO try it at home!",frontmatter:{layout:"center",class:"text-center",transition:"fade-out"},index:2,start:192,end:199},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/practical/section-05/demo.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:xD,meta:{layout:"default",transition:"fade-out",title:"Summing it up",srcSequence:"./slides/end/pros.md",slide:{raw:null,title:"Summing it up",level:1,content:`# Summing it up

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

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",title:"Summing it up",srcSequence:"./slides/end/pros.md"},index:37,start:0,end:33,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/pros.md",raw:`---
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
`,content:"",frontmatter:{},index:35,start:288,end:292},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/pros.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:LD,meta:{layout:"default",transition:"fade-out",title:"Summing it up",srcSequence:"./slides/end/cons.md",slide:{raw:null,title:"Summing it up",level:1,content:`# Summing it up

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

</v-click>`,frontmatter:{layout:"default",transition:"fade-out",title:"Summing it up",srcSequence:"./slides/end/cons.md"},index:38,start:0,end:35,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/cons.md",raw:`---
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

`,content:"",frontmatter:{},index:36,start:292,end:297},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/cons.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:HD,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
layout: center
transition: fade-out
class: text-center
---

# 🎬 Cut!

Thanks for attending!
`,title:"🎬 Cut!",level:1,content:`# 🎬 Cut!

Thanks for attending!`,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:39,start:297,end:307,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:JD,meta:{layout:"image-right",transition:"fade-out",image:"/thankyou.jpg",title:"Acknowledgements",srcSequence:"./slides/end/thanks.md",slide:{raw:null,title:"Acknowledgements",level:1,content:`# Acknowledgements

thanks for making this workshop possible

<br />

- [Excalidraw](https://excalidraw.com)

- [Sli.dev](https://sli.dev)

- [CIVO](https://civo.com)

- YOU!

<br />

<br />

Feel free to leave feedback at [guestbook.dbodky.me](https://guestbook.dbodky.me)!

<div class="abs-br text-2 pr-1 text-gray-400">Photo by Howie R on Unsplash</div>`,frontmatter:{layout:"image-right",transition:"fade-out",image:"/thankyou.jpg",title:"Acknowledgements",srcSequence:"./slides/end/thanks.md"},index:40,start:0,end:28,source:{filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/thanks.md",raw:`---
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
`,content:"",frontmatter:{},index:38,start:307,end:311},filepath:"/Users/daniel/repositories/private/acorn-slides/slides/end/thanks.md",notesHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:t2,meta:{layout:"center",transition:"fade-out",class:"text-center",slide:{raw:`---
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

</div>`,frontmatter:{layout:"center",transition:"fade-out",class:"text-center"},index:41,start:311,end:324,notesHTML:"",filepath:"/Users/daniel/repositories/private/acorn-slides/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",component:_3,meta:{layout:"end"}}],Ke=n2,Uo=[{name:"play",path:"/",component:Ub,children:[...Ke]},{name:"print",path:"/print",component:m3},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];Uo.push({path:"/presenter/print",component:()=>ss(()=>import("./PresenterPrint-5ede4357.js"),["assets/PresenterPrint-5ede4357.js","assets/NoteViewer-9bef63f1.js","assets/index-43c6be91.js"])}),Uo.push({name:"presenter",path:"/presenter/:no",component:()=>ss(()=>import("./Presenter-a9a43542.js"),["assets/Presenter-a9a43542.js","assets/NoteViewer-9bef63f1.js","assets/DrawingControls-2ea2f0dc.js","assets/index-43c6be91.js","assets/Presenter-9e4d7baf.css"]),beforeEnter:e=>{if(!Ws.remote||Ws.remote===e.query.password)return!0;if(Ws.remote&&e.query.password===void 0){const n=prompt("Enter password");if(Ws.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}}),Uo.push({path:"/presenter",redirect:{path:"/presenter/1"}});const xn=zg({history:Gy("/"),routes:Uo});function s2(e,n,{mode:s="replace"}={}){return O({get(){const o=xn.currentRoute.value.query[e];return o==null?n??null:Array.isArray(o)?o.filter(Boolean):o},set(o){It(()=>{xn[A(s)]({query:{...xn.currentRoute.value.query,[e]:o}})})}})}const yd=se(0);It(()=>{xn.afterEach(async()=>{await It(),yd.value+=1})});const gd=se(0),Zt=O(()=>xn.currentRoute.value),Bs=O(()=>Zt.value.query.print!==void 0),o2=O(()=>Zt.value.query.print==="clicks"),sn=O(()=>Zt.value.query.embedded!==void 0),Tt=O(()=>Zt.value.path.startsWith("/presenter")),_d=O(()=>Bs.value&&!o2.value),_r=O(()=>Zt.value.query.password),l2=O(()=>!Tt.value&&(!Oe.remote||_r.value===Oe.remote)),Qi=s2("clicks","0"),vd=O(()=>Ke.length-1),r2=O(()=>Zt.value.path),Ye=O(()=>parseInt(r2.value.split(/\//g).slice(-1)[0])||1);O(()=>sa(Ye.value));const at=O(()=>Ke.find(e=>e.path===`${Ye.value}`));O(()=>{var e,n,s;return(s=(n=(e=at.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});O(()=>{var e,n;return((n=(e=at.value)==null?void 0:e.meta)==null?void 0:n.layout)||(Ye.value===1?"cover":"default")});const Ll=O(()=>Ke.find(e=>e.path===`${Math.min(Ke.length,Ye.value+1)}`)),a2=O(()=>Ke.find(e=>e.path===`${Math.max(1,Ye.value-1)}`)),i2=O(()=>{var e,n;return yd.value,((n=(e=at.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),os=O({get(){if(_d.value)return 99999;let e=+(Qi.value||0);return isNaN(e)&&(e=0),e},set(e){Qi.value=e.toString()}}),el=O(()=>{var e,n;return+(((n=(e=at.value)==null?void 0:e.meta)==null?void 0:n.clicks)??i2.value.length)}),c2=O(()=>Ye.value<Ke.length-1||os.value<el.value),u2=O(()=>Ye.value>1||os.value>0),d2=O(()=>Ke.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(oa(e,n),e),[])),p2=O(()=>la(d2.value,at.value));O(()=>ra(p2.value));const f2=O(()=>g2(gd.value,at.value,a2.value));Ue(at,(e,n)=>{gd.value=Number(e==null?void 0:e.path)-Number(n==null?void 0:n.path)});function Jn(){el.value<=os.value?tl():os.value+=1}async function Qn(){os.value<=0?await nl():os.value-=1}function sa(e){return Tt.value?`/presenter/${e}`:`/${e}`}function tl(){const e=Math.min(Ke.length,Ye.value+1);return Es(e)}async function nl(e=!0){const n=Math.max(1,Ye.value-1);await Es(n),e&&el.value&&xn.replace({query:{...Zt.value.query,clicks:el.value}})}function Es(e,n){return xn.push({path:sa(e),query:{...Zt.value.query,clicks:n}})}function h2(e){const n=se(0),{direction:s,distanceX:o,distanceY:l}=dy(e,{onSwipeStart(r){r.pointerType==="touch"&&(po.value||(n.value=sr()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||po.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value===rn.LEFT?Jn():Qn():(i/window.innerHeight>.4||i>200)&&(s.value===rn.DOWN?nl():tl())}})}async function Xi(){const{saveAs:e}=await ss(()=>import("./FileSaver.min-17c85779.js").then(n=>n.F),[]);e(ku(Oe.download)?Oe.download:Oe.exportFilename?`${Oe.exportFilename}.pdf`:"/slidev-exported.pdf",`${Oe.title}.pdf`)}async function j2(e){var n,s;if(e==null){const o=(s=(n=at.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function oa(e,n,s=1){var l,r,a,i,c;const o=(r=(l=n.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&e.length>0?oa(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function la(e,n,s=!1,o){return e.map(l=>{const r={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=la(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ra(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:ra(s.children,n+1)}))}const m2={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function y2(e,n=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let s=e.name.includes("|")?e.name:m2[e.name]||e.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=n?l:o}if(s)return{...e,name:s}}function g2(e,n,s){var l,r;let o=e>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=n==null?void 0:n.meta)==null?void 0:r.transition;return o||(o=Oe.transition),y2(o,e<0)}export{x2 as $,se as A,I2 as B,P2 as C,Ee as D,L2 as E,Be as F,Ct as G,F2 as H,Rd as I,Ld as J,$s as K,It as L,Mr as M,Ve as N,Sn as O,Br as P,Jt as Q,_2 as R,_d as S,A2 as T,Uh as U,Vh as V,_u as W,gu as X,yu as Y,Lh as Z,Y as _,T2 as a,ml as a$,B2 as a0,E2 as a1,D2 as a2,C2 as a3,l3 as a4,r3 as a5,Xi as a6,Jn as a7,tl as a8,j2 as a9,sd as aA,rt as aB,ev as aC,el as aD,c2 as aE,Ll as aF,$l as aG,po as aH,Fl as aI,Lb as aJ,Zr as aK,Jr as aL,v2 as aM,b2 as aN,ub as aO,pv as aP,Lt as aQ,R2 as aR,st as aS,Hs as aT,Vn as aU,qt as aV,mr as aW,E_ as aX,S_ as aY,$_ as aZ,T_ as a_,Qn as aa,nl as ab,Zt as ac,w2 as ad,Ss as ae,Ce as af,N2 as ag,_p as ah,t as ai,Xn as aj,_o as ak,ze as al,Ke as am,vd as an,f as ao,_e as ap,Kr as aq,Ne as ar,U2 as as,at,G as au,H_ as av,h2 as aw,M2 as ax,H2 as ay,C as az,Ye as b,mu as b0,V2 as b1,ut as b2,$o as b3,Gv as b4,vu as b5,P_ as b6,Oe as c,os as d,Tt as e,$e as f,sa as g,U as h,S2 as i,z as j,Kc as k,Z as l,S as m,k as n,$2 as o,O2 as p,Qe as q,xn as r,ns as s,O as t,k2 as u,Fa as v,Ue as w,Lr as x,A as y,xd as z};
