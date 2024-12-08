(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))L(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&L(i)}).observe(document,{childList:!0,subtree:!0});function V(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function L(e){if(e.ep)return;e.ep=!0;const t=V(e);fetch(e.href,t)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function M6(H){const C=Object.create(null);for(const V of H.split(","))C[V]=1;return V=>V in C}const T1={},_3=[],K2=()=>{},Xt=()=>!1,H9=H=>H.charCodeAt(0)===111&&H.charCodeAt(1)===110&&(H.charCodeAt(2)>122||H.charCodeAt(2)<97),i6=H=>H.startsWith("onUpdate:"),$1=Object.assign,r6=(H,C)=>{const V=H.indexOf(C);V>-1&&H.splice(V,1)},Yt=Object.prototype.hasOwnProperty,g1=(H,C)=>Yt.call(H,C),r1=Array.isArray,T3=H=>V9(H)==="[object Map]",LV=H=>V9(H)==="[object Set]",o1=H=>typeof H=="function",U1=H=>typeof H=="string",B5=H=>typeof H=="symbol",R1=H=>H!==null&&typeof H=="object",eV=H=>(R1(H)||o1(H))&&o1(H.then)&&o1(H.catch),tV=Object.prototype.toString,V9=H=>tV.call(H),Jt=H=>V9(H).slice(8,-1),MV=H=>V9(H)==="[object Object]",a6=H=>U1(H)&&H!=="NaN"&&H[0]!=="-"&&""+parseInt(H,10)===H,d0=M6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),L9=H=>{const C=Object.create(null);return V=>C[V]||(C[V]=H(V))},CM=/-(\w)/g,B2=L9(H=>H.replace(CM,(C,V)=>V?V.toUpperCase():"")),HM=/\B([A-Z])/g,r3=L9(H=>H.replace(HM,"-$1").toLowerCase()),e9=L9(H=>H.charAt(0).toUpperCase()+H.slice(1)),K9=L9(H=>H?`on${e9(H)}`:""),O5=(H,C)=>!Object.is(H,C),f7=(H,...C)=>{for(let V=0;V<H.length;V++)H[V](...C)},iV=(H,C,V,L=!1)=>{Object.defineProperty(H,C,{configurable:!0,enumerable:!1,writable:L,value:V})},p4=H=>{const C=parseFloat(H);return isNaN(C)?H:C};let CC;const t9=()=>CC||(CC=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function n6(H){if(r1(H)){const C={};for(let V=0;V<H.length;V++){const L=H[V],e=U1(L)?tM(L):n6(L);if(e)for(const t in e)C[t]=e[t]}return C}else if(U1(H)||R1(H))return H}const VM=/;(?![^(]*\))/g,LM=/:([^]+)/,eM=/\/\*[^]*?\*\//g;function tM(H){const C={};return H.replace(eM,"").split(VM).forEach(V=>{if(V){const L=V.split(LM);L.length>1&&(C[L[0].trim()]=L[1].trim())}}),C}function M9(H){let C="";if(U1(H))C=H;else if(r1(H))for(let V=0;V<H.length;V++){const L=M9(H[V]);L&&(C+=L+" ")}else if(R1(H))for(const V in H)H[V]&&(C+=V+" ");return C.trim()}const MM="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iM=M6(MM);function rV(H){return!!H||H===""}const aV=H=>!!(H&&H.__v_isRef===!0),X5=H=>U1(H)?H:H==null?"":r1(H)||R1(H)&&(H.toString===tV||!o1(H.toString))?aV(H)?X5(H.value):JSON.stringify(H,nV,2):String(H),nV=(H,C)=>aV(C)?nV(H,C.value):T3(C)?{[`Map(${C.size})`]:[...C.entries()].reduce((V,[L,e],t)=>(V[X9(L,t)+" =>"]=e,V),{})}:LV(C)?{[`Set(${C.size})`]:[...C.values()].map(V=>X9(V))}:B5(C)?X9(C):R1(C)&&!r1(C)&&!MV(C)?String(C):C,X9=(H,C="")=>{var V;return B5(H)?`Symbol(${(V=H.description)!=null?V:C})`:H};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let O2;class oV{constructor(C=!1){this.detached=C,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=O2,!C&&O2&&(this.index=(O2.scopes||(O2.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let C,V;if(this.scopes)for(C=0,V=this.scopes.length;C<V;C++)this.scopes[C].pause();for(C=0,V=this.effects.length;C<V;C++)this.effects[C].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let C,V;if(this.scopes)for(C=0,V=this.scopes.length;C<V;C++)this.scopes[C].resume();for(C=0,V=this.effects.length;C<V;C++)this.effects[C].resume()}}run(C){if(this._active){const V=O2;try{return O2=this,C()}finally{O2=V}}}on(){O2=this}off(){O2=this.parent}stop(C){if(this._active){this._active=!1;let V,L;for(V=0,L=this.effects.length;V<L;V++)this.effects[V].stop();for(this.effects.length=0,V=0,L=this.cleanups.length;V<L;V++)this.cleanups[V]();if(this.cleanups.length=0,this.scopes){for(V=0,L=this.scopes.length;V<L;V++)this.scopes[V].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!C){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function rM(H){return new oV(H)}function aM(){return O2}let w1;const Y9=new WeakSet;class AV{constructor(C){this.fn=C,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,O2&&O2.active&&O2.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Y9.has(this)&&(Y9.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lV(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,HC(this),dV(this);const C=w1,V=D2;w1=this,D2=!0;try{return this.fn()}finally{uV(this),w1=C,D2=V,this.flags&=-3}}stop(){if(this.flags&1){for(let C=this.deps;C;C=C.nextDep)s6(C);this.deps=this.depsTail=void 0,HC(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Y9.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){g4(this)&&this.run()}get dirty(){return g4(this)}}let sV=0,u0,m0;function lV(H,C=!1){if(H.flags|=8,C){H.next=m0,m0=H;return}H.next=u0,u0=H}function o6(){sV++}function A6(){if(--sV>0)return;if(m0){let C=m0;for(m0=void 0;C;){const V=C.next;C.next=void 0,C.flags&=-9,C=V}}let H;for(;u0;){let C=u0;for(u0=void 0;C;){const V=C.next;if(C.next=void 0,C.flags&=-9,C.flags&1)try{C.trigger()}catch(L){H||(H=L)}C=V}}if(H)throw H}function dV(H){for(let C=H.deps;C;C=C.nextDep)C.version=-1,C.prevActiveLink=C.dep.activeLink,C.dep.activeLink=C}function uV(H){let C,V=H.depsTail,L=V;for(;L;){const e=L.prevDep;L.version===-1?(L===V&&(V=e),s6(L),nM(L)):C=L,L.dep.activeLink=L.prevActiveLink,L.prevActiveLink=void 0,L=e}H.deps=C,H.depsTail=V}function g4(H){for(let C=H.deps;C;C=C.nextDep)if(C.dep.version!==C.version||C.dep.computed&&(mV(C.dep.computed)||C.dep.version!==C.version))return!0;return!!H._dirty}function mV(H){if(H.flags&4&&!(H.flags&16)||(H.flags&=-17,H.globalVersion===_0))return;H.globalVersion=_0;const C=H.dep;if(H.flags|=2,C.version>0&&!H.isSSR&&H.deps&&!g4(H)){H.flags&=-3;return}const V=w1,L=D2;w1=H,D2=!0;try{dV(H);const e=H.fn(H._value);(C.version===0||O5(e,H._value))&&(H._value=e,C.version++)}catch(e){throw C.version++,e}finally{w1=V,D2=L,uV(H),H.flags&=-3}}function s6(H,C=!1){const{dep:V,prevSub:L,nextSub:e}=H;if(L&&(L.nextSub=e,H.prevSub=void 0),e&&(e.prevSub=L,H.nextSub=void 0),V.subs===H&&(V.subs=L,!L&&V.computed)){V.computed.flags&=-5;for(let t=V.computed.deps;t;t=t.nextDep)s6(t,!0)}!C&&!--V.sc&&V.map&&V.map.delete(V.key)}function nM(H){const{prevDep:C,nextDep:V}=H;C&&(C.nextDep=V,H.prevDep=void 0),V&&(V.prevDep=C,H.nextDep=void 0)}let D2=!0;const cV=[];function F5(){cV.push(D2),D2=!1}function x5(){const H=cV.pop();D2=H===void 0?!0:H}function HC(H){const{cleanup:C}=H;if(H.cleanup=void 0,C){const V=w1;w1=void 0;try{C()}finally{w1=V}}}let _0=0;class oM{constructor(C,V){this.sub=C,this.dep=V,this.version=V.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class l6{constructor(C){this.computed=C,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(C){if(!w1||!D2||w1===this.computed)return;let V=this.activeLink;if(V===void 0||V.sub!==w1)V=this.activeLink=new oM(w1,this),w1.deps?(V.prevDep=w1.depsTail,w1.depsTail.nextDep=V,w1.depsTail=V):w1.deps=w1.depsTail=V,vV(V);else if(V.version===-1&&(V.version=this.version,V.nextDep)){const L=V.nextDep;L.prevDep=V.prevDep,V.prevDep&&(V.prevDep.nextDep=L),V.prevDep=w1.depsTail,V.nextDep=void 0,w1.depsTail.nextDep=V,w1.depsTail=V,w1.deps===V&&(w1.deps=L)}return V}trigger(C){this.version++,_0++,this.notify(C)}notify(C){o6();try{for(let V=this.subs;V;V=V.prevSub)V.sub.notify()&&V.sub.dep.notify()}finally{A6()}}}function vV(H){if(H.dep.sc++,H.sub.flags&4){const C=H.dep.computed;if(C&&!H.dep.subs){C.flags|=20;for(let L=C.deps;L;L=L.nextDep)vV(L)}const V=H.dep.subs;V!==H&&(H.prevSub=V,V&&(V.nextSub=H)),H.dep.subs=H}}const O4=new WeakMap,C3=Symbol(""),y4=Symbol(""),T0=Symbol("");function M2(H,C,V){if(D2&&w1){let L=O4.get(H);L||O4.set(H,L=new Map);let e=L.get(V);e||(L.set(V,e=new l6),e.map=L,e.key=V),e.track()}}function a5(H,C,V,L,e,t){const i=O4.get(H);if(!i){_0++;return}const r=a=>{a&&a.trigger()};if(o6(),C==="clear")i.forEach(r);else{const a=r1(H),o=a&&a6(V);if(a&&V==="length"){const s=Number(L);i.forEach((l,u)=>{(u==="length"||u===T0||!B5(u)&&u>=s)&&r(l)})}else switch((V!==void 0||i.has(void 0))&&r(i.get(V)),o&&r(i.get(T0)),C){case"add":a?o&&r(i.get("length")):(r(i.get(C3)),T3(H)&&r(i.get(y4)));break;case"delete":a||(r(i.get(C3)),T3(H)&&r(i.get(y4)));break;case"set":T3(H)&&r(i.get(C3));break}}A6()}function m3(H){const C=p1(H);return C===H?C:(M2(C,"iterate",T0),k2(H)?C:C.map(i2))}function i9(H){return M2(H=p1(H),"iterate",T0),H}const AM={__proto__:null,[Symbol.iterator](){return J9(this,Symbol.iterator,i2)},concat(...H){return m3(this).concat(...H.map(C=>r1(C)?m3(C):C))},entries(){return J9(this,"entries",H=>(H[1]=i2(H[1]),H))},every(H,C){return M5(this,"every",H,C,void 0,arguments)},filter(H,C){return M5(this,"filter",H,C,V=>V.map(i2),arguments)},find(H,C){return M5(this,"find",H,C,i2,arguments)},findIndex(H,C){return M5(this,"findIndex",H,C,void 0,arguments)},findLast(H,C){return M5(this,"findLast",H,C,i2,arguments)},findLastIndex(H,C){return M5(this,"findLastIndex",H,C,void 0,arguments)},forEach(H,C){return M5(this,"forEach",H,C,void 0,arguments)},includes(...H){return C4(this,"includes",H)},indexOf(...H){return C4(this,"indexOf",H)},join(H){return m3(this).join(H)},lastIndexOf(...H){return C4(this,"lastIndexOf",H)},map(H,C){return M5(this,"map",H,C,void 0,arguments)},pop(){return i0(this,"pop")},push(...H){return i0(this,"push",H)},reduce(H,...C){return VC(this,"reduce",H,C)},reduceRight(H,...C){return VC(this,"reduceRight",H,C)},shift(){return i0(this,"shift")},some(H,C){return M5(this,"some",H,C,void 0,arguments)},splice(...H){return i0(this,"splice",H)},toReversed(){return m3(this).toReversed()},toSorted(H){return m3(this).toSorted(H)},toSpliced(...H){return m3(this).toSpliced(...H)},unshift(...H){return i0(this,"unshift",H)},values(){return J9(this,"values",i2)}};function J9(H,C,V){const L=i9(H),e=L[C]();return L!==H&&!k2(H)&&(e._next=e.next,e.next=()=>{const t=e._next();return t.value&&(t.value=V(t.value)),t}),e}const sM=Array.prototype;function M5(H,C,V,L,e,t){const i=i9(H),r=i!==H&&!k2(H),a=i[C];if(a!==sM[C]){const l=a.apply(H,t);return r?i2(l):l}let o=V;i!==H&&(r?o=function(l,u){return V.call(this,i2(l),u,H)}:V.length>2&&(o=function(l,u){return V.call(this,l,u,H)}));const s=a.call(i,o,L);return r&&e?e(s):s}function VC(H,C,V,L){const e=i9(H);let t=V;return e!==H&&(k2(H)?V.length>3&&(t=function(i,r,a){return V.call(this,i,r,a,H)}):t=function(i,r,a){return V.call(this,i,i2(r),a,H)}),e[C](t,...L)}function C4(H,C,V){const L=p1(H);M2(L,"iterate",T0);const e=L[C](...V);return(e===-1||e===!1)&&m6(V[0])?(V[0]=p1(V[0]),L[C](...V)):e}function i0(H,C,V=[]){F5(),o6();const L=p1(H)[C].apply(H,V);return A6(),x5(),L}const lM=M6("__proto__,__v_isRef,__isVue"),hV=new Set(Object.getOwnPropertyNames(Symbol).filter(H=>H!=="arguments"&&H!=="caller").map(H=>Symbol[H]).filter(B5));function dM(H){B5(H)||(H=String(H));const C=p1(this);return M2(C,"has",H),C.hasOwnProperty(H)}class fV{constructor(C=!1,V=!1){this._isReadonly=C,this._isShallow=V}get(C,V,L){if(V==="__v_skip")return C.__v_skip;const e=this._isReadonly,t=this._isShallow;if(V==="__v_isReactive")return!e;if(V==="__v_isReadonly")return e;if(V==="__v_isShallow")return t;if(V==="__v_raw")return L===(e?t?gM:gV:t?pV:SV).get(C)||Object.getPrototypeOf(C)===Object.getPrototypeOf(L)?C:void 0;const i=r1(C);if(!e){let a;if(i&&(a=AM[V]))return a;if(V==="hasOwnProperty")return dM}const r=Reflect.get(C,V,n2(C)?C:L);return(B5(V)?hV.has(V):lM(V))||(e||M2(C,"get",V),t)?r:n2(r)?i&&a6(V)?r:r.value:R1(r)?e?yV(r):U0(r):r}}class ZV extends fV{constructor(C=!1){super(!1,C)}set(C,V,L,e){let t=C[V];if(!this._isShallow){const a=V3(t);if(!k2(L)&&!V3(L)&&(t=p1(t),L=p1(L)),!r1(C)&&n2(t)&&!n2(L))return a?!1:(t.value=L,!0)}const i=r1(C)&&a6(V)?Number(V)<C.length:g1(C,V),r=Reflect.set(C,V,L,n2(C)?C:e);return C===p1(e)&&(i?O5(L,t)&&a5(C,"set",V,L):a5(C,"add",V,L)),r}deleteProperty(C,V){const L=g1(C,V);C[V];const e=Reflect.deleteProperty(C,V);return e&&L&&a5(C,"delete",V,void 0),e}has(C,V){const L=Reflect.has(C,V);return(!B5(V)||!hV.has(V))&&M2(C,"has",V),L}ownKeys(C){return M2(C,"iterate",r1(C)?"length":C3),Reflect.ownKeys(C)}}class uM extends fV{constructor(C=!1){super(!0,C)}set(C,V){return!0}deleteProperty(C,V){return!0}}const mM=new ZV,cM=new uM,vM=new ZV(!0);const _4=H=>H,A7=H=>Reflect.getPrototypeOf(H);function hM(H,C,V){return function(...L){const e=this.__v_raw,t=p1(e),i=T3(t),r=H==="entries"||H===Symbol.iterator&&i,a=H==="keys"&&i,o=e[H](...L),s=V?_4:C?T4:i2;return!C&&M2(t,"iterate",a?y4:C3),{next(){const{value:l,done:u}=o.next();return u?{value:l,done:u}:{value:r?[s(l[0]),s(l[1])]:s(l),done:u}},[Symbol.iterator](){return this}}}}function s7(H){return function(...C){return H==="delete"?!1:H==="clear"?void 0:this}}function fM(H,C){const V={get(e){const t=this.__v_raw,i=p1(t),r=p1(e);H||(O5(e,r)&&M2(i,"get",e),M2(i,"get",r));const{has:a}=A7(i),o=C?_4:H?T4:i2;if(a.call(i,e))return o(t.get(e));if(a.call(i,r))return o(t.get(r));t!==i&&t.get(e)},get size(){const e=this.__v_raw;return!H&&M2(p1(e),"iterate",C3),Reflect.get(e,"size",e)},has(e){const t=this.__v_raw,i=p1(t),r=p1(e);return H||(O5(e,r)&&M2(i,"has",e),M2(i,"has",r)),e===r?t.has(e):t.has(e)||t.has(r)},forEach(e,t){const i=this,r=i.__v_raw,a=p1(r),o=C?_4:H?T4:i2;return!H&&M2(a,"iterate",C3),r.forEach((s,l)=>e.call(t,o(s),o(l),i))}};return $1(V,H?{add:s7("add"),set:s7("set"),delete:s7("delete"),clear:s7("clear")}:{add(e){!C&&!k2(e)&&!V3(e)&&(e=p1(e));const t=p1(this);return A7(t).has.call(t,e)||(t.add(e),a5(t,"add",e,e)),this},set(e,t){!C&&!k2(t)&&!V3(t)&&(t=p1(t));const i=p1(this),{has:r,get:a}=A7(i);let o=r.call(i,e);o||(e=p1(e),o=r.call(i,e));const s=a.call(i,e);return i.set(e,t),o?O5(t,s)&&a5(i,"set",e,t):a5(i,"add",e,t),this},delete(e){const t=p1(this),{has:i,get:r}=A7(t);let a=i.call(t,e);a||(e=p1(e),a=i.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return a&&a5(t,"delete",e,void 0),o},clear(){const e=p1(this),t=e.size!==0,i=e.clear();return t&&a5(e,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(e=>{V[e]=hM(e,H,C)}),V}function d6(H,C){const V=fM(H,C);return(L,e,t)=>e==="__v_isReactive"?!H:e==="__v_isReadonly"?H:e==="__v_raw"?L:Reflect.get(g1(V,e)&&e in L?V:L,e,t)}const ZM={get:d6(!1,!1)},SM={get:d6(!1,!0)},pM={get:d6(!0,!1)};const SV=new WeakMap,pV=new WeakMap,gV=new WeakMap,gM=new WeakMap;function OM(H){switch(H){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yM(H){return H.__v_skip||!Object.isExtensible(H)?0:OM(Jt(H))}function U0(H){return V3(H)?H:u6(H,!1,mM,ZM,SV)}function OV(H){return u6(H,!1,vM,SM,pV)}function yV(H){return u6(H,!0,cM,pM,gV)}function u6(H,C,V,L,e){if(!R1(H)||H.__v_raw&&!(C&&H.__v_isReactive))return H;const t=e.get(H);if(t)return t;const i=yM(H);if(i===0)return H;const r=new Proxy(H,i===2?L:V);return e.set(H,r),r}function w3(H){return V3(H)?w3(H.__v_raw):!!(H&&H.__v_isReactive)}function V3(H){return!!(H&&H.__v_isReadonly)}function k2(H){return!!(H&&H.__v_isShallow)}function m6(H){return H?!!H.__v_raw:!1}function p1(H){const C=H&&H.__v_raw;return C?p1(C):H}function _V(H){return!g1(H,"__v_skip")&&Object.isExtensible(H)&&iV(H,"__v_skip",!0),H}const i2=H=>R1(H)?U0(H):H,T4=H=>R1(H)?yV(H):H;function n2(H){return H?H.__v_isRef===!0:!1}function O3(H){return TV(H,!1)}function _M(H){return TV(H,!0)}function TV(H,C){return n2(H)?H:new TM(H,C)}class TM{constructor(C,V){this.dep=new l6,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=V?C:p1(C),this._value=V?C:i2(C),this.__v_isShallow=V}get value(){return this.dep.track(),this._value}set value(C){const V=this._rawValue,L=this.__v_isShallow||k2(C)||V3(C);C=L?C:p1(C),O5(C,V)&&(this._rawValue=C,this._value=L?C:i2(C),this.dep.trigger())}}function N2(H){return n2(H)?H.value:H}const wM={get:(H,C,V)=>C==="__v_raw"?H:N2(Reflect.get(H,C,V)),set:(H,C,V,L)=>{const e=H[C];return n2(e)&&!n2(V)?(e.value=V,!0):Reflect.set(H,C,V,L)}};function wV(H){return w3(H)?H:new Proxy(H,wM)}class EM{constructor(C,V,L){this.fn=C,this.setter=V,this._value=void 0,this.dep=new l6(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_0-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!V,this.isSSR=L}notify(){if(this.flags|=16,!(this.flags&8)&&w1!==this)return lV(this,!0),!0}get value(){const C=this.dep.track();return mV(this),C&&(C.version=this.dep.version),this._value}set value(C){this.setter&&this.setter(C)}}function PM(H,C,V=!1){let L,e;return o1(H)?L=H:(L=H.get,e=H.set),new EM(L,e,V)}const l7={},b7=new WeakMap;let q5;function bM(H,C=!1,V=q5){if(V){let L=b7.get(V);L||b7.set(V,L=[]),L.push(H)}}function RM(H,C,V=T1){const{immediate:L,deep:e,once:t,scheduler:i,augmentJob:r,call:a}=V,o=N=>e?N:k2(N)||e===!1||e===0?n5(N,1):n5(N);let s,l,u,c,w=!1,P=!1;if(n2(H)?(l=()=>H.value,w=k2(H)):w3(H)?(l=()=>o(H),w=!0):r1(H)?(P=!0,w=H.some(N=>w3(N)||k2(N)),l=()=>H.map(N=>{if(n2(N))return N.value;if(w3(N))return o(N);if(o1(N))return a?a(N,2):N()})):o1(H)?C?l=a?()=>a(H,2):H:l=()=>{if(u){F5();try{u()}finally{x5()}}const N=q5;q5=s;try{return a?a(H,3,[c]):H(c)}finally{q5=N}}:l=K2,C&&e){const N=l,e1=e===!0?1/0:e;l=()=>n5(N(),e1)}const k=aM(),x=()=>{s.stop(),k&&k.active&&r6(k.effects,s)};if(t&&C){const N=C;C=(...e1)=>{N(...e1),x()}}let E=P?new Array(H.length).fill(l7):l7;const B=N=>{if(!(!(s.flags&1)||!s.dirty&&!N))if(C){const e1=s.run();if(e||w||(P?e1.some((n1,S)=>O5(n1,E[S])):O5(e1,E))){u&&u();const n1=q5;q5=s;try{const S=[e1,E===l7?void 0:P&&E[0]===l7?[]:E,c];a?a(C,3,S):C(...S),E=e1}finally{q5=n1}}}else s.run()};return r&&r(B),s=new AV(l),s.scheduler=i?()=>i(B,!1):B,c=N=>bM(N,!1,s),u=s.onStop=()=>{const N=b7.get(s);if(N){if(a)a(N,4);else for(const e1 of N)e1();b7.delete(s)}},C?L?B(!0):E=s.run():i?i(B.bind(null,!0),!0):s.run(),x.pause=s.pause.bind(s),x.resume=s.resume.bind(s),x.stop=x,x}function n5(H,C=1/0,V){if(C<=0||!R1(H)||H.__v_skip||(V=V||new Set,V.has(H)))return H;if(V.add(H),C--,n2(H))n5(H.value,C,V);else if(r1(H))for(let L=0;L<H.length;L++)n5(H[L],C,V);else if(LV(H)||T3(H))H.forEach(L=>{n5(L,C,V)});else if(MV(H)){for(const L in H)n5(H[L],C,V);for(const L of Object.getOwnPropertySymbols(H))Object.prototype.propertyIsEnumerable.call(H,L)&&n5(H[L],C,V)}return H}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function W0(H,C,V,L){try{return L?H(...L):H()}catch(e){r9(e,C,V)}}function C5(H,C,V,L){if(o1(H)){const e=W0(H,C,V,L);return e&&eV(e)&&e.catch(t=>{r9(t,C,V)}),e}if(r1(H)){const e=[];for(let t=0;t<H.length;t++)e.push(C5(H[t],C,V,L));return e}}function r9(H,C,V,L=!0){const e=C?C.vnode:null,{errorHandler:t,throwUnhandledErrorInProduction:i}=C&&C.appContext.config||T1;if(C){let r=C.parent;const a=C.proxy,o=`https://vuejs.org/error-reference/#runtime-${V}`;for(;r;){const s=r.ec;if(s){for(let l=0;l<s.length;l++)if(s[l](H,a,o)===!1)return}r=r.parent}if(t){F5(),W0(t,null,10,[H,a,o]),x5();return}}kM(H,V,e,L,i)}function kM(H,C,V,L=!0,e=!1){if(e)throw H;console.error(H)}const u2=[];let $2=-1;const E3=[];let Z5=null,c3=0;const EV=Promise.resolve();let R7=null;function PV(H){const C=R7||EV;return H?C.then(this?H.bind(this):H):C}function IM(H){let C=$2+1,V=u2.length;for(;C<V;){const L=C+V>>>1,e=u2[L],t=w0(e);t<H||t===H&&e.flags&2?C=L+1:V=L}return C}function c6(H){if(!(H.flags&1)){const C=w0(H),V=u2[u2.length-1];!V||!(H.flags&2)&&C>=w0(V)?u2.push(H):u2.splice(IM(C),0,H),H.flags|=1,bV()}}function bV(){R7||(R7=EV.then(kV))}function BM(H){r1(H)?E3.push(...H):Z5&&H.id===-1?Z5.splice(c3+1,0,H):H.flags&1||(E3.push(H),H.flags|=1),bV()}function LC(H,C,V=$2+1){for(;V<u2.length;V++){const L=u2[V];if(L&&L.flags&2){if(H&&L.id!==H.uid)continue;u2.splice(V,1),V--,L.flags&4&&(L.flags&=-2),L(),L.flags&4||(L.flags&=-2)}}}function RV(H){if(E3.length){const C=[...new Set(E3)].sort((V,L)=>w0(V)-w0(L));if(E3.length=0,Z5){Z5.push(...C);return}for(Z5=C,c3=0;c3<Z5.length;c3++){const V=Z5[c3];V.flags&4&&(V.flags&=-2),V.flags&8||V(),V.flags&=-2}Z5=null,c3=0}}const w0=H=>H.id==null?H.flags&2?-1:1/0:H.id;function kV(H){try{for($2=0;$2<u2.length;$2++){const C=u2[$2];C&&!(C.flags&8)&&(C.flags&4&&(C.flags&=-2),W0(C,C.i,C.i?15:14),C.flags&4||(C.flags&=-2))}}finally{for(;$2<u2.length;$2++){const C=u2[$2];C&&(C.flags&=-2)}$2=-1,u2.length=0,RV(),R7=null,(u2.length||E3.length)&&kV()}}let _2=null,IV=null;function k7(H){const C=_2;return _2=H,IV=H&&H.type.__scopeId||null,C}function BV(H,C=_2,V){if(!C||H._n)return H;const L=(...e)=>{L._d&&sC(-1);const t=k7(C);let i;try{i=H(...e)}finally{k7(t),L._d&&sC(1)}return i};return L._n=!0,L._c=!0,L._d=!0,L}function eC(H,C){if(_2===null)return H;const V=A9(_2),L=H.dirs||(H.dirs=[]);for(let e=0;e<C.length;e++){let[t,i,r,a=T1]=C[e];t&&(o1(t)&&(t={mounted:t,updated:t}),t.deep&&n5(i),L.push({dir:t,instance:V,value:i,oldValue:void 0,arg:r,modifiers:a}))}return H}function j5(H,C,V,L){const e=H.dirs,t=C&&C.dirs;for(let i=0;i<e.length;i++){const r=e[i];t&&(r.oldValue=t[i].value);let a=r.dir[L];a&&(F5(),C5(a,V,8,[H.el,r,H,C]),x5())}}const FM=Symbol("_vte"),xM=H=>H.__isTeleport;function v6(H,C){H.shapeFlag&6&&H.component?(H.transition=C,v6(H.component.subTree,C)):H.shapeFlag&128?(H.ssContent.transition=C.clone(H.ssContent),H.ssFallback.transition=C.clone(H.ssFallback)):H.transition=C}/*! #__NO_SIDE_EFFECTS__ */function G3(H,C){return o1(H)?$1({name:H.name},C,{setup:H}):H}function FV(H){H.ids=[H.ids[0]+H.ids[2]+++"-",0,0]}function I7(H,C,V,L,e=!1){if(r1(H)){H.forEach((w,P)=>I7(w,C&&(r1(C)?C[P]:C),V,L,e));return}if(c0(L)&&!e){L.shapeFlag&512&&L.type.__asyncResolved&&L.component.subTree.component&&I7(H,C,V,L.component.subTree);return}const t=L.shapeFlag&4?A9(L.component):L.el,i=e?null:t,{i:r,r:a}=H,o=C&&C.r,s=r.refs===T1?r.refs={}:r.refs,l=r.setupState,u=p1(l),c=l===T1?()=>!1:w=>g1(u,w);if(o!=null&&o!==a&&(U1(o)?(s[o]=null,c(o)&&(l[o]=null)):n2(o)&&(o.value=null)),o1(a))W0(a,r,12,[i,s]);else{const w=U1(a),P=n2(a);if(w||P){const k=()=>{if(H.f){const x=w?c(a)?l[a]:s[a]:a.value;e?r1(x)&&r6(x,t):r1(x)?x.includes(t)||x.push(t):w?(s[a]=[t],c(a)&&(l[a]=s[a])):(a.value=[t],H.k&&(s[H.k]=a.value))}else w?(s[a]=i,c(a)&&(l[a]=i)):P&&(a.value=i,H.k&&(s[H.k]=i))};i?(k.id=-1,g2(k,V)):k()}}}t9().requestIdleCallback;t9().cancelIdleCallback;const c0=H=>!!H.type.__asyncLoader,xV=H=>H.type.__isKeepAlive;function DM(H,C){DV(H,"a",C)}function NM(H,C){DV(H,"da",C)}function DV(H,C,V=a2){const L=H.__wdc||(H.__wdc=()=>{let e=V;for(;e;){if(e.isDeactivated)return;e=e.parent}return H()});if(a9(C,L,V),V){let e=V.parent;for(;e&&e.parent;)xV(e.parent.vnode)&&UM(L,C,V,e),e=e.parent}}function UM(H,C,V,L){const e=a9(C,H,L,!0);UV(()=>{r6(L[C],e)},V)}function a9(H,C,V=a2,L=!1){if(V){const e=V[H]||(V[H]=[]),t=C.__weh||(C.__weh=(...i)=>{F5();const r=G0(V),a=C5(C,V,H,i);return r(),x5(),a});return L?e.unshift(t):e.push(t),t}}const d5=H=>(C,V=a2)=>{(!P0||H==="sp")&&a9(H,(...L)=>C(...L),V)},WM=d5("bm"),NV=d5("m"),GM=d5("bu"),zM=d5("u"),QM=d5("bum"),UV=d5("um"),jM=d5("sp"),$M=d5("rtg"),qM=d5("rtc");function KM(H,C=a2){a9("ec",H,C)}const XM="components";function WV(H,C){return JM(XM,H,!0,C)||H}const YM=Symbol.for("v-ndc");function JM(H,C,V=!0,L=!1){const e=_2||a2;if(e){const t=e.type;{const r=Di(t,!1);if(r&&(r===C||r===B2(C)||r===e9(B2(C))))return t}const i=tC(e[H]||t[H],C)||tC(e.appContext[H],C);return!i&&L?t:i}}function tC(H,C){return H&&(H[C]||H[B2(C)]||H[e9(B2(C))])}function Z7(H,C,V,L){let e;const t=V,i=r1(H);if(i||U1(H)){const r=i&&w3(H);let a=!1;r&&(a=!k2(H),H=i9(H)),e=new Array(H.length);for(let o=0,s=H.length;o<s;o++)e[o]=C(a?i2(H[o]):H[o],o,void 0,t)}else if(typeof H=="number"){e=new Array(H);for(let r=0;r<H;r++)e[r]=C(r+1,r,void 0,t)}else if(R1(H))if(H[Symbol.iterator])e=Array.from(H,(r,a)=>C(r,a,void 0,t));else{const r=Object.keys(H);e=new Array(r.length);for(let a=0,o=r.length;a<o;a++){const s=r[a];e[a]=C(H[s],s,a,t)}}else e=[];return e}const w4=H=>H?nL(H)?A9(H):w4(H.parent):null,v0=$1(Object.create(null),{$:H=>H,$el:H=>H.vnode.el,$data:H=>H.data,$props:H=>H.props,$attrs:H=>H.attrs,$slots:H=>H.slots,$refs:H=>H.refs,$parent:H=>w4(H.parent),$root:H=>w4(H.root),$host:H=>H.ce,$emit:H=>H.emit,$options:H=>h6(H),$forceUpdate:H=>H.f||(H.f=()=>{c6(H.update)}),$nextTick:H=>H.n||(H.n=PV.bind(H.proxy)),$watch:H=>hi.bind(H)}),H4=(H,C)=>H!==T1&&!H.__isScriptSetup&&g1(H,C),Ci={get({_:H},C){if(C==="__v_skip")return!0;const{ctx:V,setupState:L,data:e,props:t,accessCache:i,type:r,appContext:a}=H;let o;if(C[0]!=="$"){const c=i[C];if(c!==void 0)switch(c){case 1:return L[C];case 2:return e[C];case 4:return V[C];case 3:return t[C]}else{if(H4(L,C))return i[C]=1,L[C];if(e!==T1&&g1(e,C))return i[C]=2,e[C];if((o=H.propsOptions[0])&&g1(o,C))return i[C]=3,t[C];if(V!==T1&&g1(V,C))return i[C]=4,V[C];E4&&(i[C]=0)}}const s=v0[C];let l,u;if(s)return C==="$attrs"&&M2(H.attrs,"get",""),s(H);if((l=r.__cssModules)&&(l=l[C]))return l;if(V!==T1&&g1(V,C))return i[C]=4,V[C];if(u=a.config.globalProperties,g1(u,C))return u[C]},set({_:H},C,V){const{data:L,setupState:e,ctx:t}=H;return H4(e,C)?(e[C]=V,!0):L!==T1&&g1(L,C)?(L[C]=V,!0):g1(H.props,C)||C[0]==="$"&&C.slice(1)in H?!1:(t[C]=V,!0)},has({_:{data:H,setupState:C,accessCache:V,ctx:L,appContext:e,propsOptions:t}},i){let r;return!!V[i]||H!==T1&&g1(H,i)||H4(C,i)||(r=t[0])&&g1(r,i)||g1(L,i)||g1(v0,i)||g1(e.config.globalProperties,i)},defineProperty(H,C,V){return V.get!=null?H._.accessCache[C]=0:g1(V,"value")&&this.set(H,C,V.value,null),Reflect.defineProperty(H,C,V)}};function MC(H){return r1(H)?H.reduce((C,V)=>(C[V]=null,C),{}):H}let E4=!0;function Hi(H){const C=h6(H),V=H.proxy,L=H.ctx;E4=!1,C.beforeCreate&&iC(C.beforeCreate,H,"bc");const{data:e,computed:t,methods:i,watch:r,provide:a,inject:o,created:s,beforeMount:l,mounted:u,beforeUpdate:c,updated:w,activated:P,deactivated:k,beforeDestroy:x,beforeUnmount:E,destroyed:B,unmounted:N,render:e1,renderTracked:n1,renderTriggered:S,errorCaptured:v,serverPrefetch:Z,expose:p,inheritAttrs:g,components:O,directives:f,filters:o2}=C;if(o&&Vi(o,L,null),i)for(const d1 in i){const A1=i[d1];o1(A1)&&(L[d1]=A1.bind(V))}if(e){const d1=e.call(V,V);R1(d1)&&(H.data=U0(d1))}if(E4=!0,t)for(const d1 in t){const A1=t[d1],S2=o1(A1)?A1.bind(V,V):o1(A1.get)?A1.get.bind(V,V):K2,F2=!o1(A1)&&o1(A1.set)?A1.set.bind(V):K2,b2=y2({get:S2,set:F2});Object.defineProperty(L,d1,{enumerable:!0,configurable:!0,get:()=>b2.value,set:k1=>b2.value=k1})}if(r)for(const d1 in r)GV(r[d1],L,V,d1);if(a){const d1=o1(a)?a.call(V):a;Reflect.ownKeys(d1).forEach(A1=>{S7(A1,d1[A1])})}s&&iC(s,H,"c");function D1(d1,A1){r1(A1)?A1.forEach(S2=>d1(S2.bind(V))):A1&&d1(A1.bind(V))}if(D1(WM,l),D1(NV,u),D1(GM,c),D1(zM,w),D1(DM,P),D1(NM,k),D1(KM,v),D1(qM,n1),D1($M,S),D1(QM,E),D1(UV,N),D1(jM,Z),r1(p))if(p.length){const d1=H.exposed||(H.exposed={});p.forEach(A1=>{Object.defineProperty(d1,A1,{get:()=>V[A1],set:S2=>V[A1]=S2})})}else H.exposed||(H.exposed={});e1&&H.render===K2&&(H.render=e1),g!=null&&(H.inheritAttrs=g),O&&(H.components=O),f&&(H.directives=f),Z&&FV(H)}function Vi(H,C,V=K2){r1(H)&&(H=P4(H));for(const L in H){const e=H[L];let t;R1(e)?"default"in e?t=U2(e.from||L,e.default,!0):t=U2(e.from||L):t=U2(e),n2(t)?Object.defineProperty(C,L,{enumerable:!0,configurable:!0,get:()=>t.value,set:i=>t.value=i}):C[L]=t}}function iC(H,C,V){C5(r1(H)?H.map(L=>L.bind(C.proxy)):H.bind(C.proxy),C,V)}function GV(H,C,V,L){let e=L.includes(".")?eL(V,L):()=>V[L];if(U1(H)){const t=C[H];o1(t)&&p7(e,t)}else if(o1(H))p7(e,H.bind(V));else if(R1(H))if(r1(H))H.forEach(t=>GV(t,C,V,L));else{const t=o1(H.handler)?H.handler.bind(V):C[H.handler];o1(t)&&p7(e,t,H)}}function h6(H){const C=H.type,{mixins:V,extends:L}=C,{mixins:e,optionsCache:t,config:{optionMergeStrategies:i}}=H.appContext,r=t.get(C);let a;return r?a=r:!e.length&&!V&&!L?a=C:(a={},e.length&&e.forEach(o=>B7(a,o,i,!0)),B7(a,C,i)),R1(C)&&t.set(C,a),a}function B7(H,C,V,L=!1){const{mixins:e,extends:t}=C;t&&B7(H,t,V,!0),e&&e.forEach(i=>B7(H,i,V,!0));for(const i in C)if(!(L&&i==="expose")){const r=Li[i]||V&&V[i];H[i]=r?r(H[i],C[i]):C[i]}return H}const Li={data:rC,props:aC,emits:aC,methods:o0,computed:o0,beforeCreate:l2,created:l2,beforeMount:l2,mounted:l2,beforeUpdate:l2,updated:l2,beforeDestroy:l2,beforeUnmount:l2,destroyed:l2,unmounted:l2,activated:l2,deactivated:l2,errorCaptured:l2,serverPrefetch:l2,components:o0,directives:o0,watch:ti,provide:rC,inject:ei};function rC(H,C){return C?H?function(){return $1(o1(H)?H.call(this,this):H,o1(C)?C.call(this,this):C)}:C:H}function ei(H,C){return o0(P4(H),P4(C))}function P4(H){if(r1(H)){const C={};for(let V=0;V<H.length;V++)C[H[V]]=H[V];return C}return H}function l2(H,C){return H?[...new Set([].concat(H,C))]:C}function o0(H,C){return H?$1(Object.create(null),H,C):C}function aC(H,C){return H?r1(H)&&r1(C)?[...new Set([...H,...C])]:$1(Object.create(null),MC(H),MC(C??{})):C}function ti(H,C){if(!H)return C;if(!C)return H;const V=$1(Object.create(null),H);for(const L in C)V[L]=l2(H[L],C[L]);return V}function zV(){return{app:null,config:{isNativeTag:Xt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mi=0;function ii(H,C){return function(L,e=null){o1(L)||(L=$1({},L)),e!=null&&!R1(e)&&(e=null);const t=zV(),i=new WeakSet,r=[];let a=!1;const o=t.app={_uid:Mi++,_component:L,_props:e,_container:null,_context:t,_instance:null,version:Ui,get config(){return t.config},set config(s){},use(s,...l){return i.has(s)||(s&&o1(s.install)?(i.add(s),s.install(o,...l)):o1(s)&&(i.add(s),s(o,...l))),o},mixin(s){return t.mixins.includes(s)||t.mixins.push(s),o},component(s,l){return l?(t.components[s]=l,o):t.components[s]},directive(s,l){return l?(t.directives[s]=l,o):t.directives[s]},mount(s,l,u){if(!a){const c=o._ceVNode||P1(L,e);return c.appContext=t,u===!0?u="svg":u===!1&&(u=void 0),l&&C?C(c,s):H(c,s,u),a=!0,o._container=s,s.__vue_app__=o,A9(c.component)}},onUnmount(s){r.push(s)},unmount(){a&&(C5(r,o._instance,16),H(null,o._container),delete o._container.__vue_app__)},provide(s,l){return t.provides[s]=l,o},runWithContext(s){const l=P3;P3=o;try{return s()}finally{P3=l}}};return o}}let P3=null;function S7(H,C){if(a2){let V=a2.provides;const L=a2.parent&&a2.parent.provides;L===V&&(V=a2.provides=Object.create(L)),V[H]=C}}function U2(H,C,V=!1){const L=a2||_2;if(L||P3){const e=P3?P3._context.provides:L?L.parent==null?L.vnode.appContext&&L.vnode.appContext.provides:L.parent.provides:void 0;if(e&&H in e)return e[H];if(arguments.length>1)return V&&o1(C)?C.call(L&&L.proxy):C}}const QV={},jV=()=>Object.create(QV),$V=H=>Object.getPrototypeOf(H)===QV;function ri(H,C,V,L=!1){const e={},t=jV();H.propsDefaults=Object.create(null),qV(H,C,e,t);for(const i in H.propsOptions[0])i in e||(e[i]=void 0);V?H.props=L?e:OV(e):H.type.props?H.props=e:H.props=t,H.attrs=t}function ai(H,C,V,L){const{props:e,attrs:t,vnode:{patchFlag:i}}=H,r=p1(e),[a]=H.propsOptions;let o=!1;if((L||i>0)&&!(i&16)){if(i&8){const s=H.vnode.dynamicProps;for(let l=0;l<s.length;l++){let u=s[l];if(n9(H.emitsOptions,u))continue;const c=C[u];if(a)if(g1(t,u))c!==t[u]&&(t[u]=c,o=!0);else{const w=B2(u);e[w]=b4(a,r,w,c,H,!1)}else c!==t[u]&&(t[u]=c,o=!0)}}}else{qV(H,C,e,t)&&(o=!0);let s;for(const l in r)(!C||!g1(C,l)&&((s=r3(l))===l||!g1(C,s)))&&(a?V&&(V[l]!==void 0||V[s]!==void 0)&&(e[l]=b4(a,r,l,void 0,H,!0)):delete e[l]);if(t!==r)for(const l in t)(!C||!g1(C,l))&&(delete t[l],o=!0)}o&&a5(H.attrs,"set","")}function qV(H,C,V,L){const[e,t]=H.propsOptions;let i=!1,r;if(C)for(let a in C){if(d0(a))continue;const o=C[a];let s;e&&g1(e,s=B2(a))?!t||!t.includes(s)?V[s]=o:(r||(r={}))[s]=o:n9(H.emitsOptions,a)||(!(a in L)||o!==L[a])&&(L[a]=o,i=!0)}if(t){const a=p1(V),o=r||T1;for(let s=0;s<t.length;s++){const l=t[s];V[l]=b4(e,a,l,o[l],H,!g1(o,l))}}return i}function b4(H,C,V,L,e,t){const i=H[V];if(i!=null){const r=g1(i,"default");if(r&&L===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&o1(a)){const{propsDefaults:o}=e;if(V in o)L=o[V];else{const s=G0(e);L=o[V]=a.call(null,C),s()}}else L=a;e.ce&&e.ce._setProp(V,L)}i[0]&&(t&&!r?L=!1:i[1]&&(L===""||L===r3(V))&&(L=!0))}return L}const ni=new WeakMap;function KV(H,C,V=!1){const L=V?ni:C.propsCache,e=L.get(H);if(e)return e;const t=H.props,i={},r=[];let a=!1;if(!o1(H)){const s=l=>{a=!0;const[u,c]=KV(l,C,!0);$1(i,u),c&&r.push(...c)};!V&&C.mixins.length&&C.mixins.forEach(s),H.extends&&s(H.extends),H.mixins&&H.mixins.forEach(s)}if(!t&&!a)return R1(H)&&L.set(H,_3),_3;if(r1(t))for(let s=0;s<t.length;s++){const l=B2(t[s]);nC(l)&&(i[l]=T1)}else if(t)for(const s in t){const l=B2(s);if(nC(l)){const u=t[s],c=i[l]=r1(u)||o1(u)?{type:u}:$1({},u),w=c.type;let P=!1,k=!0;if(r1(w))for(let x=0;x<w.length;++x){const E=w[x],B=o1(E)&&E.name;if(B==="Boolean"){P=!0;break}else B==="String"&&(k=!1)}else P=o1(w)&&w.name==="Boolean";c[0]=P,c[1]=k,(P||g1(c,"default"))&&r.push(l)}}const o=[i,r];return R1(H)&&L.set(H,o),o}function nC(H){return H[0]!=="$"&&!d0(H)}const XV=H=>H[0]==="_"||H==="$stable",f6=H=>r1(H)?H.map(q2):[q2(H)],oi=(H,C,V)=>{if(C._n)return C;const L=BV((...e)=>f6(C(...e)),V);return L._c=!1,L},YV=(H,C,V)=>{const L=H._ctx;for(const e in H){if(XV(e))continue;const t=H[e];if(o1(t))C[e]=oi(e,t,L);else if(t!=null){const i=f6(t);C[e]=()=>i}}},JV=(H,C)=>{const V=f6(C);H.slots.default=()=>V},CL=(H,C,V)=>{for(const L in C)(V||L!=="_")&&(H[L]=C[L])},Ai=(H,C,V)=>{const L=H.slots=jV();if(H.vnode.shapeFlag&32){const e=C._;e?(CL(L,C,V),V&&iV(L,"_",e,!0)):YV(C,L)}else C&&JV(H,C)},si=(H,C,V)=>{const{vnode:L,slots:e}=H;let t=!0,i=T1;if(L.shapeFlag&32){const r=C._;r?V&&r===1?t=!1:CL(e,C,V):(t=!C.$stable,YV(C,e)),i=C}else C&&(JV(H,C),i={default:1});if(t)for(const r in e)!XV(r)&&i[r]==null&&delete e[r]},g2=yi;function li(H){return di(H)}function di(H,C){const V=t9();V.__VUE__=!0;const{insert:L,remove:e,patchProp:t,createElement:i,createText:r,createComment:a,setText:o,setElementText:s,parentNode:l,nextSibling:u,setScopeId:c=K2,insertStaticContent:w}=H,P=(m,h,_,F=null,b=null,U=null,j=void 0,z=null,G=!!h.dynamicChildren)=>{if(m===h)return;m&&!r0(m,h)&&(F=R(m),k1(m,b,U,!0),m=null),h.patchFlag===-2&&(G=!1,h.dynamicChildren=null);const{type:W,ref:V1,shapeFlag:q}=h;switch(W){case o9:k(m,h,_,F);break;case L3:x(m,h,_,F);break;case e4:m==null&&E(h,_,F,j);break;case h2:O(m,h,_,F,b,U,j,z,G);break;default:q&1?e1(m,h,_,F,b,U,j,z,G):q&6?f(m,h,_,F,b,U,j,z,G):(q&64||q&128)&&W.process(m,h,_,F,b,U,j,z,G,Y)}V1!=null&&b&&I7(V1,m&&m.ref,U,h||m,!h)},k=(m,h,_,F)=>{if(m==null)L(h.el=r(h.children),_,F);else{const b=h.el=m.el;h.children!==m.children&&o(b,h.children)}},x=(m,h,_,F)=>{m==null?L(h.el=a(h.children||""),_,F):h.el=m.el},E=(m,h,_,F)=>{[m.el,m.anchor]=w(m.children,h,_,F,m.el,m.anchor)},B=({el:m,anchor:h},_,F)=>{let b;for(;m&&m!==h;)b=u(m),L(m,_,F),m=b;L(h,_,F)},N=({el:m,anchor:h})=>{let _;for(;m&&m!==h;)_=u(m),e(m),m=_;e(h)},e1=(m,h,_,F,b,U,j,z,G)=>{h.type==="svg"?j="svg":h.type==="math"&&(j="mathml"),m==null?n1(h,_,F,b,U,j,z,G):Z(m,h,b,U,j,z,G)},n1=(m,h,_,F,b,U,j,z)=>{let G,W;const{props:V1,shapeFlag:q,transition:C1,dirs:J}=m;if(G=m.el=i(m.type,U,V1&&V1.is,V1),q&8?s(G,m.children):q&16&&v(m.children,G,null,F,b,V4(m,U),j,z),J&&j5(m,null,F,"created"),S(G,m,m.scopeId,j,F),V1){for(const Z1 in V1)Z1!=="value"&&!d0(Z1)&&t(G,Z1,null,V1[Z1],U,F);"value"in V1&&t(G,"value",null,V1.value,U),(W=V1.onVnodeBeforeMount)&&Q2(W,F,m)}J&&j5(m,null,F,"beforeMount");const t1=ui(b,C1);t1&&C1.beforeEnter(G),L(G,h,_),((W=V1&&V1.onVnodeMounted)||t1||J)&&g2(()=>{W&&Q2(W,F,m),t1&&C1.enter(G),J&&j5(m,null,F,"mounted")},b)},S=(m,h,_,F,b)=>{if(_&&c(m,_),F)for(let U=0;U<F.length;U++)c(m,F[U]);if(b){let U=b.subTree;if(h===U||ML(U.type)&&(U.ssContent===h||U.ssFallback===h)){const j=b.vnode;S(m,j,j.scopeId,j.slotScopeIds,b.parent)}}},v=(m,h,_,F,b,U,j,z,G=0)=>{for(let W=G;W<m.length;W++){const V1=m[W]=z?S5(m[W]):q2(m[W]);P(null,V1,h,_,F,b,U,j,z)}},Z=(m,h,_,F,b,U,j)=>{const z=h.el=m.el;let{patchFlag:G,dynamicChildren:W,dirs:V1}=h;G|=m.patchFlag&16;const q=m.props||T1,C1=h.props||T1;let J;if(_&&$5(_,!1),(J=C1.onVnodeBeforeUpdate)&&Q2(J,_,h,m),V1&&j5(h,m,_,"beforeUpdate"),_&&$5(_,!0),(q.innerHTML&&C1.innerHTML==null||q.textContent&&C1.textContent==null)&&s(z,""),W?p(m.dynamicChildren,W,z,_,F,V4(h,b),U):j||A1(m,h,z,null,_,F,V4(h,b),U,!1),G>0){if(G&16)g(z,q,C1,_,b);else if(G&2&&q.class!==C1.class&&t(z,"class",null,C1.class,b),G&4&&t(z,"style",q.style,C1.style,b),G&8){const t1=h.dynamicProps;for(let Z1=0;Z1<t1.length;Z1++){const h1=t1[Z1],C2=q[h1],Q1=C1[h1];(Q1!==C2||h1==="value")&&t(z,h1,C2,Q1,b,_)}}G&1&&m.children!==h.children&&s(z,h.children)}else!j&&W==null&&g(z,q,C1,_,b);((J=C1.onVnodeUpdated)||V1)&&g2(()=>{J&&Q2(J,_,h,m),V1&&j5(h,m,_,"updated")},F)},p=(m,h,_,F,b,U,j)=>{for(let z=0;z<h.length;z++){const G=m[z],W=h[z],V1=G.el&&(G.type===h2||!r0(G,W)||G.shapeFlag&70)?l(G.el):_;P(G,W,V1,null,F,b,U,j,!0)}},g=(m,h,_,F,b)=>{if(h!==_){if(h!==T1)for(const U in h)!d0(U)&&!(U in _)&&t(m,U,h[U],null,b,F);for(const U in _){if(d0(U))continue;const j=_[U],z=h[U];j!==z&&U!=="value"&&t(m,U,z,j,b,F)}"value"in _&&t(m,"value",h.value,_.value,b)}},O=(m,h,_,F,b,U,j,z,G)=>{const W=h.el=m?m.el:r(""),V1=h.anchor=m?m.anchor:r("");let{patchFlag:q,dynamicChildren:C1,slotScopeIds:J}=h;J&&(z=z?z.concat(J):J),m==null?(L(W,_,F),L(V1,_,F),v(h.children||[],_,V1,b,U,j,z,G)):q>0&&q&64&&C1&&m.dynamicChildren?(p(m.dynamicChildren,C1,_,b,U,j,z),(h.key!=null||b&&h===b.subTree)&&HL(m,h,!0)):A1(m,h,_,V1,b,U,j,z,G)},f=(m,h,_,F,b,U,j,z,G)=>{h.slotScopeIds=z,m==null?h.shapeFlag&512?b.ctx.activate(h,_,F,j,G):o2(h,_,F,b,U,j,G):P2(m,h,G)},o2=(m,h,_,F,b,U,j)=>{const z=m.component=ki(m,F,b);if(xV(m)&&(z.ctx.renderer=Y),Ii(z,!1,j),z.asyncDep){if(b&&b.registerDep(z,D1,j),!m.el){const G=z.subTree=P1(L3);x(null,G,h,_)}}else D1(z,m,h,_,b,U,j)},P2=(m,h,_)=>{const F=h.component=m.component;if(gi(m,h,_))if(F.asyncDep&&!F.asyncResolved){d1(F,h,_);return}else F.next=h,F.update();else h.el=m.el,F.vnode=h},D1=(m,h,_,F,b,U,j)=>{const z=()=>{if(m.isMounted){let{next:q,bu:C1,u:J,parent:t1,vnode:Z1}=m;{const H2=VL(m);if(H2){q&&(q.el=Z1.el,d1(m,q,j)),H2.asyncDep.then(()=>{m.isUnmounted||z()});return}}let h1=q,C2;$5(m,!1),q?(q.el=Z1.el,d1(m,q,j)):q=Z1,C1&&f7(C1),(C2=q.props&&q.props.onVnodeBeforeUpdate)&&Q2(C2,t1,q,Z1),$5(m,!0);const Q1=L4(m),q1=m.subTree;m.subTree=Q1,P(q1,Q1,l(q1.el),R(q1),m,b,U),q.el=Q1.el,h1===null&&Oi(m,Q1.el),J&&g2(J,b),(C2=q.props&&q.props.onVnodeUpdated)&&g2(()=>Q2(C2,t1,q,Z1),b)}else{let q;const{el:C1,props:J}=h,{bm:t1,m:Z1,parent:h1,root:C2,type:Q1}=m,q1=c0(h);if($5(m,!1),t1&&f7(t1),!q1&&(q=J&&J.onVnodeBeforeMount)&&Q2(q,h1,h),$5(m,!0),C1&&y1){const H2=()=>{m.subTree=L4(m),y1(C1,m.subTree,m,b,null)};q1&&Q1.__asyncHydrate?Q1.__asyncHydrate(C1,m,H2):H2()}else{C2.ce&&C2.ce._injectChildStyle(Q1);const H2=m.subTree=L4(m);P(null,H2,_,F,m,b,U),h.el=H2.el}if(Z1&&g2(Z1,b),!q1&&(q=J&&J.onVnodeMounted)){const H2=h;g2(()=>Q2(q,h1,H2),b)}(h.shapeFlag&256||h1&&c0(h1.vnode)&&h1.vnode.shapeFlag&256)&&m.a&&g2(m.a,b),m.isMounted=!0,h=_=F=null}};m.scope.on();const G=m.effect=new AV(z);m.scope.off();const W=m.update=G.run.bind(G),V1=m.job=G.runIfDirty.bind(G);V1.i=m,V1.id=m.uid,G.scheduler=()=>c6(V1),$5(m,!0),W()},d1=(m,h,_)=>{h.component=m;const F=m.vnode.props;m.vnode=h,m.next=null,ai(m,h.props,F,_),si(m,h.children,_),F5(),LC(m),x5()},A1=(m,h,_,F,b,U,j,z,G=!1)=>{const W=m&&m.children,V1=m?m.shapeFlag:0,q=h.children,{patchFlag:C1,shapeFlag:J}=h;if(C1>0){if(C1&128){F2(W,q,_,F,b,U,j,z,G);return}else if(C1&256){S2(W,q,_,F,b,U,j,z,G);return}}J&8?(V1&16&&m2(W,b,U),q!==W&&s(_,q)):V1&16?J&16?F2(W,q,_,F,b,U,j,z,G):m2(W,b,U,!0):(V1&8&&s(_,""),J&16&&v(q,_,F,b,U,j,z,G))},S2=(m,h,_,F,b,U,j,z,G)=>{m=m||_3,h=h||_3;const W=m.length,V1=h.length,q=Math.min(W,V1);let C1;for(C1=0;C1<q;C1++){const J=h[C1]=G?S5(h[C1]):q2(h[C1]);P(m[C1],J,_,null,b,U,j,z,G)}W>V1?m2(m,b,U,!0,!1,q):v(h,_,F,b,U,j,z,G,q)},F2=(m,h,_,F,b,U,j,z,G)=>{let W=0;const V1=h.length;let q=m.length-1,C1=V1-1;for(;W<=q&&W<=C1;){const J=m[W],t1=h[W]=G?S5(h[W]):q2(h[W]);if(r0(J,t1))P(J,t1,_,null,b,U,j,z,G);else break;W++}for(;W<=q&&W<=C1;){const J=m[q],t1=h[C1]=G?S5(h[C1]):q2(h[C1]);if(r0(J,t1))P(J,t1,_,null,b,U,j,z,G);else break;q--,C1--}if(W>q){if(W<=C1){const J=C1+1,t1=J<V1?h[J].el:F;for(;W<=C1;)P(null,h[W]=G?S5(h[W]):q2(h[W]),_,t1,b,U,j,z,G),W++}}else if(W>C1)for(;W<=q;)k1(m[W],b,U,!0),W++;else{const J=W,t1=W,Z1=new Map;for(W=t1;W<=C1;W++){const A2=h[W]=G?S5(h[W]):q2(h[W]);A2.key!=null&&Z1.set(A2.key,W)}let h1,C2=0;const Q1=C1-t1+1;let q1=!1,H2=0;const m5=new Array(Q1);for(W=0;W<Q1;W++)m5[W]=0;for(W=J;W<=q;W++){const A2=m[W];if(C2>=Q1){k1(A2,b,U,!0);continue}let R2;if(A2.key!=null)R2=Z1.get(A2.key);else for(h1=t1;h1<=C1;h1++)if(m5[h1-t1]===0&&r0(A2,h[h1])){R2=h1;break}R2===void 0?k1(A2,b,U,!0):(m5[R2-t1]=W+1,R2>=H2?H2=R2:q1=!0,P(A2,h[R2],_,null,b,U,j,z,G),C2++)}const o3=q1?mi(m5):_3;for(h1=o3.length-1,W=Q1-1;W>=0;W--){const A2=t1+W,R2=h[A2],A3=A2+1<V1?h[A2+1].el:F;m5[W]===0?P(null,R2,_,A3,b,U,j,z,G):q1&&(h1<0||W!==o3[h1]?b2(R2,_,A3,2):h1--)}}},b2=(m,h,_,F,b=null)=>{const{el:U,type:j,transition:z,children:G,shapeFlag:W}=m;if(W&6){b2(m.component.subTree,h,_,F);return}if(W&128){m.suspense.move(h,_,F);return}if(W&64){j.move(m,h,_,Y);return}if(j===h2){L(U,h,_);for(let q=0;q<G.length;q++)b2(G[q],h,_,F);L(m.anchor,h,_);return}if(j===e4){B(m,h,_);return}if(F!==2&&W&1&&z)if(F===0)z.beforeEnter(U),L(U,h,_),g2(()=>z.enter(U),b);else{const{leave:q,delayLeave:C1,afterLeave:J}=z,t1=()=>L(U,h,_),Z1=()=>{q(U,()=>{t1(),J&&J()})};C1?C1(U,t1,Z1):Z1()}else L(U,h,_)},k1=(m,h,_,F=!1,b=!1)=>{const{type:U,props:j,ref:z,children:G,dynamicChildren:W,shapeFlag:V1,patchFlag:q,dirs:C1,cacheIndex:J}=m;if(q===-2&&(b=!1),z!=null&&I7(z,null,_,m,!0),J!=null&&(h.renderCache[J]=void 0),V1&256){h.ctx.deactivate(m);return}const t1=V1&1&&C1,Z1=!c0(m);let h1;if(Z1&&(h1=j&&j.onVnodeBeforeUnmount)&&Q2(h1,h,m),V1&6)z2(m.component,_,F);else{if(V1&128){m.suspense.unmount(_,F);return}t1&&j5(m,null,h,"beforeUnmount"),V1&64?m.type.remove(m,h,_,Y,F):W&&!W.hasOnce&&(U!==h2||q>0&&q&64)?m2(W,h,_,!1,!0):(U===h2&&q&384||!b&&V1&16)&&m2(G,h,_),F&&I1(m)}(Z1&&(h1=j&&j.onVnodeUnmounted)||t1)&&g2(()=>{h1&&Q2(h1,h,m),t1&&j5(m,null,h,"unmounted")},_)},I1=m=>{const{type:h,el:_,anchor:F,transition:b}=m;if(h===h2){u5(_,F);return}if(h===e4){N(m);return}const U=()=>{e(_),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(m.shapeFlag&1&&b&&!b.persisted){const{leave:j,delayLeave:z}=b,G=()=>j(_,U);z?z(m.el,U,G):G()}else U()},u5=(m,h)=>{let _;for(;m!==h;)_=u(m),e(m),m=_;e(h)},z2=(m,h,_)=>{const{bum:F,scope:b,job:U,subTree:j,um:z,m:G,a:W}=m;oC(G),oC(W),F&&f7(F),b.stop(),U&&(U.flags|=8,k1(j,m,h,_)),z&&g2(z,h),g2(()=>{m.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},m2=(m,h,_,F=!1,b=!1,U=0)=>{for(let j=U;j<m.length;j++)k1(m[j],h,_,F,b)},R=m=>{if(m.shapeFlag&6)return R(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const h=u(m.anchor||m.el),_=h&&h[FM];return _?u(_):h};let K=!1;const $=(m,h,_)=>{m==null?h._vnode&&k1(h._vnode,null,null,!0):P(h._vnode||null,m,h,null,null,null,_),h._vnode=m,K||(K=!0,LC(),RV(),K=!1)},Y={p:P,um:k1,m:b2,r:I1,mt:o2,mc:v,pc:A1,pbc:p,n:R,o:H};let u1,y1;return{render:$,hydrate:u1,createApp:ii($,u1)}}function V4({type:H,props:C},V){return V==="svg"&&H==="foreignObject"||V==="mathml"&&H==="annotation-xml"&&C&&C.encoding&&C.encoding.includes("html")?void 0:V}function $5({effect:H,job:C},V){V?(H.flags|=32,C.flags|=4):(H.flags&=-33,C.flags&=-5)}function ui(H,C){return(!H||H&&!H.pendingBranch)&&C&&!C.persisted}function HL(H,C,V=!1){const L=H.children,e=C.children;if(r1(L)&&r1(e))for(let t=0;t<L.length;t++){const i=L[t];let r=e[t];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=e[t]=S5(e[t]),r.el=i.el),!V&&r.patchFlag!==-2&&HL(i,r)),r.type===o9&&(r.el=i.el)}}function mi(H){const C=H.slice(),V=[0];let L,e,t,i,r;const a=H.length;for(L=0;L<a;L++){const o=H[L];if(o!==0){if(e=V[V.length-1],H[e]<o){C[L]=e,V.push(L);continue}for(t=0,i=V.length-1;t<i;)r=t+i>>1,H[V[r]]<o?t=r+1:i=r;o<H[V[t]]&&(t>0&&(C[L]=V[t-1]),V[t]=L)}}for(t=V.length,i=V[t-1];t-- >0;)V[t]=i,i=C[i];return V}function VL(H){const C=H.subTree.component;if(C)return C.asyncDep&&!C.asyncResolved?C:VL(C)}function oC(H){if(H)for(let C=0;C<H.length;C++)H[C].flags|=8}const ci=Symbol.for("v-scx"),vi=()=>U2(ci);function p7(H,C,V){return LL(H,C,V)}function LL(H,C,V=T1){const{immediate:L,deep:e,flush:t,once:i}=V,r=$1({},V),a=C&&L||!C&&t!=="post";let o;if(P0){if(t==="sync"){const c=vi();o=c.__watcherHandles||(c.__watcherHandles=[])}else if(!a){const c=()=>{};return c.stop=K2,c.resume=K2,c.pause=K2,c}}const s=a2;r.call=(c,w,P)=>C5(c,s,w,P);let l=!1;t==="post"?r.scheduler=c=>{g2(c,s&&s.suspense)}:t!=="sync"&&(l=!0,r.scheduler=(c,w)=>{w?c():c6(c)}),r.augmentJob=c=>{C&&(c.flags|=4),l&&(c.flags|=2,s&&(c.id=s.uid,c.i=s))};const u=RM(H,C,r);return P0&&(o?o.push(u):a&&u()),u}function hi(H,C,V){const L=this.proxy,e=U1(H)?H.includes(".")?eL(L,H):()=>L[H]:H.bind(L,L);let t;o1(C)?t=C:(t=C.handler,V=C);const i=G0(this),r=LL(e,t.bind(L),V);return i(),r}function eL(H,C){const V=C.split(".");return()=>{let L=H;for(let e=0;e<V.length&&L;e++)L=L[V[e]];return L}}const fi=(H,C)=>C==="modelValue"||C==="model-value"?H.modelModifiers:H[`${C}Modifiers`]||H[`${B2(C)}Modifiers`]||H[`${r3(C)}Modifiers`];function Zi(H,C,...V){if(H.isUnmounted)return;const L=H.vnode.props||T1;let e=V;const t=C.startsWith("update:"),i=t&&fi(L,C.slice(7));i&&(i.trim&&(e=V.map(s=>U1(s)?s.trim():s)),i.number&&(e=V.map(p4)));let r,a=L[r=K9(C)]||L[r=K9(B2(C))];!a&&t&&(a=L[r=K9(r3(C))]),a&&C5(a,H,6,e);const o=L[r+"Once"];if(o){if(!H.emitted)H.emitted={};else if(H.emitted[r])return;H.emitted[r]=!0,C5(o,H,6,e)}}function tL(H,C,V=!1){const L=C.emitsCache,e=L.get(H);if(e!==void 0)return e;const t=H.emits;let i={},r=!1;if(!o1(H)){const a=o=>{const s=tL(o,C,!0);s&&(r=!0,$1(i,s))};!V&&C.mixins.length&&C.mixins.forEach(a),H.extends&&a(H.extends),H.mixins&&H.mixins.forEach(a)}return!t&&!r?(R1(H)&&L.set(H,null),null):(r1(t)?t.forEach(a=>i[a]=null):$1(i,t),R1(H)&&L.set(H,i),i)}function n9(H,C){return!H||!H9(C)?!1:(C=C.slice(2).replace(/Once$/,""),g1(H,C[0].toLowerCase()+C.slice(1))||g1(H,r3(C))||g1(H,C))}function L4(H){const{type:C,vnode:V,proxy:L,withProxy:e,propsOptions:[t],slots:i,attrs:r,emit:a,render:o,renderCache:s,props:l,data:u,setupState:c,ctx:w,inheritAttrs:P}=H,k=k7(H);let x,E;try{if(V.shapeFlag&4){const N=e||L,e1=N;x=q2(o.call(e1,N,s,l,c,u,w)),E=r}else{const N=C;x=q2(N.length>1?N(l,{attrs:r,slots:i,emit:a}):N(l,null)),E=C.props?r:Si(r)}}catch(N){h0.length=0,r9(N,H,1),x=P1(L3)}let B=x;if(E&&P!==!1){const N=Object.keys(E),{shapeFlag:e1}=B;N.length&&e1&7&&(t&&N.some(i6)&&(E=pi(E,t)),B=R3(B,E,!1,!0))}return V.dirs&&(B=R3(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(V.dirs):V.dirs),V.transition&&v6(B,V.transition),x=B,k7(k),x}const Si=H=>{let C;for(const V in H)(V==="class"||V==="style"||H9(V))&&((C||(C={}))[V]=H[V]);return C},pi=(H,C)=>{const V={};for(const L in H)(!i6(L)||!(L.slice(9)in C))&&(V[L]=H[L]);return V};function gi(H,C,V){const{props:L,children:e,component:t}=H,{props:i,children:r,patchFlag:a}=C,o=t.emitsOptions;if(C.dirs||C.transition)return!0;if(V&&a>=0){if(a&1024)return!0;if(a&16)return L?AC(L,i,o):!!i;if(a&8){const s=C.dynamicProps;for(let l=0;l<s.length;l++){const u=s[l];if(i[u]!==L[u]&&!n9(o,u))return!0}}}else return(e||r)&&(!r||!r.$stable)?!0:L===i?!1:L?i?AC(L,i,o):!0:!!i;return!1}function AC(H,C,V){const L=Object.keys(C);if(L.length!==Object.keys(H).length)return!0;for(let e=0;e<L.length;e++){const t=L[e];if(C[t]!==H[t]&&!n9(V,t))return!0}return!1}function Oi({vnode:H,parent:C},V){for(;C;){const L=C.subTree;if(L.suspense&&L.suspense.activeBranch===H&&(L.el=H.el),L===H)(H=C.vnode).el=V,C=C.parent;else break}}const ML=H=>H.__isSuspense;function yi(H,C){C&&C.pendingBranch?r1(H)?C.effects.push(...H):C.effects.push(H):BM(H)}const h2=Symbol.for("v-fgt"),o9=Symbol.for("v-txt"),L3=Symbol.for("v-cmt"),e4=Symbol.for("v-stc"),h0=[];let T2=null;function d2(H=!1){h0.push(T2=H?null:[])}function _i(){h0.pop(),T2=h0[h0.length-1]||null}let E0=1;function sC(H,C=!1){E0+=H,H<0&&T2&&C&&(T2.hasOnce=!0)}function iL(H){return H.dynamicChildren=E0>0?T2||_3:null,_i(),E0>0&&T2&&T2.push(H),H}function c2(H,C,V,L,e,t){return iL(v1(H,C,V,L,e,t,!0))}function Ti(H,C,V,L,e){return iL(P1(H,C,V,L,e,!0))}function F7(H){return H?H.__v_isVNode===!0:!1}function r0(H,C){return H.type===C.type&&H.key===C.key}const rL=({key:H})=>H??null,g7=({ref:H,ref_key:C,ref_for:V})=>(typeof H=="number"&&(H=""+H),H!=null?U1(H)||n2(H)||o1(H)?{i:_2,r:H,k:C,f:!!V}:H:null);function v1(H,C=null,V=null,L=0,e=null,t=H===h2?0:1,i=!1,r=!1){const a={__v_isVNode:!0,__v_skip:!0,type:H,props:C,key:C&&rL(C),ref:C&&g7(C),scopeId:IV,slotScopeIds:null,children:V,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:t,patchFlag:L,dynamicProps:e,dynamicChildren:null,appContext:null,ctx:_2};return r?(Z6(a,V),t&128&&H.normalize(a)):V&&(a.shapeFlag|=U1(V)?8:16),E0>0&&!i&&T2&&(a.patchFlag>0||t&6)&&a.patchFlag!==32&&T2.push(a),a}const P1=wi;function wi(H,C=null,V=null,L=0,e=null,t=!1){if((!H||H===YM)&&(H=L3),F7(H)){const r=R3(H,C,!0);return V&&Z6(r,V),E0>0&&!t&&T2&&(r.shapeFlag&6?T2[T2.indexOf(H)]=r:T2.push(r)),r.patchFlag=-2,r}if(Ni(H)&&(H=H.__vccOpts),C){C=Ei(C);let{class:r,style:a}=C;r&&!U1(r)&&(C.class=M9(r)),R1(a)&&(m6(a)&&!r1(a)&&(a=$1({},a)),C.style=n6(a))}const i=U1(H)?1:ML(H)?128:xM(H)?64:R1(H)?4:o1(H)?2:0;return v1(H,C,V,L,e,i,t,!0)}function Ei(H){return H?m6(H)||$V(H)?$1({},H):H:null}function R3(H,C,V=!1,L=!1){const{props:e,ref:t,patchFlag:i,children:r,transition:a}=H,o=C?Pi(e||{},C):e,s={__v_isVNode:!0,__v_skip:!0,type:H.type,props:o,key:o&&rL(o),ref:C&&C.ref?V&&t?r1(t)?t.concat(g7(C)):[t,g7(C)]:g7(C):t,scopeId:H.scopeId,slotScopeIds:H.slotScopeIds,children:r,target:H.target,targetStart:H.targetStart,targetAnchor:H.targetAnchor,staticCount:H.staticCount,shapeFlag:H.shapeFlag,patchFlag:C&&H.type!==h2?i===-1?16:i|16:i,dynamicProps:H.dynamicProps,dynamicChildren:H.dynamicChildren,appContext:H.appContext,dirs:H.dirs,transition:a,component:H.component,suspense:H.suspense,ssContent:H.ssContent&&R3(H.ssContent),ssFallback:H.ssFallback&&R3(H.ssFallback),el:H.el,anchor:H.anchor,ctx:H.ctx,ce:H.ce};return a&&L&&v6(s,a.clone(s)),s}function aL(H=" ",C=0){return P1(o9,null,H,C)}function lC(H="",C=!1){return C?(d2(),Ti(L3,null,H)):P1(L3,null,H)}function q2(H){return H==null||typeof H=="boolean"?P1(L3):r1(H)?P1(h2,null,H.slice()):F7(H)?S5(H):P1(o9,null,String(H))}function S5(H){return H.el===null&&H.patchFlag!==-1||H.memo?H:R3(H)}function Z6(H,C){let V=0;const{shapeFlag:L}=H;if(C==null)C=null;else if(r1(C))V=16;else if(typeof C=="object")if(L&65){const e=C.default;e&&(e._c&&(e._d=!1),Z6(H,e()),e._c&&(e._d=!0));return}else{V=32;const e=C._;!e&&!$V(C)?C._ctx=_2:e===3&&_2&&(_2.slots._===1?C._=1:(C._=2,H.patchFlag|=1024))}else o1(C)?(C={default:C,_ctx:_2},V=32):(C=String(C),L&64?(V=16,C=[aL(C)]):V=8);H.children=C,H.shapeFlag|=V}function Pi(...H){const C={};for(let V=0;V<H.length;V++){const L=H[V];for(const e in L)if(e==="class")C.class!==L.class&&(C.class=M9([C.class,L.class]));else if(e==="style")C.style=n6([C.style,L.style]);else if(H9(e)){const t=C[e],i=L[e];i&&t!==i&&!(r1(t)&&t.includes(i))&&(C[e]=t?[].concat(t,i):i)}else e!==""&&(C[e]=L[e])}return C}function Q2(H,C,V,L=null){C5(H,C,7,[V,L])}const bi=zV();let Ri=0;function ki(H,C,V){const L=H.type,e=(C?C.appContext:H.appContext)||bi,t={uid:Ri++,vnode:H,type:L,parent:C,appContext:e,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new oV(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:C?C.provides:Object.create(e.provides),ids:C?C.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:KV(L,e),emitsOptions:tL(L,e),emit:null,emitted:null,propsDefaults:T1,inheritAttrs:L.inheritAttrs,ctx:T1,data:T1,props:T1,attrs:T1,slots:T1,refs:T1,setupState:T1,setupContext:null,suspense:V,suspenseId:V?V.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return t.ctx={_:t},t.root=C?C.root:t,t.emit=Zi.bind(null,t),H.ce&&H.ce(t),t}let a2=null,x7,R4;{const H=t9(),C=(V,L)=>{let e;return(e=H[V])||(e=H[V]=[]),e.push(L),t=>{e.length>1?e.forEach(i=>i(t)):e[0](t)}};x7=C("__VUE_INSTANCE_SETTERS__",V=>a2=V),R4=C("__VUE_SSR_SETTERS__",V=>P0=V)}const G0=H=>{const C=a2;return x7(H),H.scope.on(),()=>{H.scope.off(),x7(C)}},dC=()=>{a2&&a2.scope.off(),x7(null)};function nL(H){return H.vnode.shapeFlag&4}let P0=!1;function Ii(H,C=!1,V=!1){C&&R4(C);const{props:L,children:e}=H.vnode,t=nL(H);ri(H,L,t,C),Ai(H,e,V);const i=t?Bi(H,C):void 0;return C&&R4(!1),i}function Bi(H,C){const V=H.type;H.accessCache=Object.create(null),H.proxy=new Proxy(H.ctx,Ci);const{setup:L}=V;if(L){F5();const e=H.setupContext=L.length>1?xi(H):null,t=G0(H),i=W0(L,H,0,[H.props,e]),r=eV(i);if(x5(),t(),(r||H.sp)&&!c0(H)&&FV(H),r){if(i.then(dC,dC),C)return i.then(a=>{uC(H,a,C)}).catch(a=>{r9(a,H,0)});H.asyncDep=i}else uC(H,i,C)}else oL(H,C)}function uC(H,C,V){o1(C)?H.type.__ssrInlineRender?H.ssrRender=C:H.render=C:R1(C)&&(H.setupState=wV(C)),oL(H,V)}let mC;function oL(H,C,V){const L=H.type;if(!H.render){if(!C&&mC&&!L.render){const e=L.template||h6(H).template;if(e){const{isCustomElement:t,compilerOptions:i}=H.appContext.config,{delimiters:r,compilerOptions:a}=L,o=$1($1({isCustomElement:t,delimiters:r},i),a);L.render=mC(e,o)}}H.render=L.render||K2}{const e=G0(H);F5();try{Hi(H)}finally{x5(),e()}}}const Fi={get(H,C){return M2(H,"get",""),H[C]}};function xi(H){const C=V=>{H.exposed=V||{}};return{attrs:new Proxy(H.attrs,Fi),slots:H.slots,emit:H.emit,expose:C}}function A9(H){return H.exposed?H.exposeProxy||(H.exposeProxy=new Proxy(wV(_V(H.exposed)),{get(C,V){if(V in C)return C[V];if(V in v0)return v0[V](H)},has(C,V){return V in C||V in v0}})):H.proxy}function Di(H,C=!0){return o1(H)?H.displayName||H.name:H.name||C&&H.__name}function Ni(H){return o1(H)&&"__vccOpts"in H}const y2=(H,C)=>PM(H,C,P0);function y3(H,C,V){const L=arguments.length;return L===2?R1(C)&&!r1(C)?F7(C)?P1(H,null,[C]):P1(H,C):P1(H,null,C):(L>3?V=Array.prototype.slice.call(arguments,2):L===3&&F7(V)&&(V=[V]),P1(H,C,V))}const Ui="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let k4;const cC=typeof window<"u"&&window.trustedTypes;if(cC)try{k4=cC.createPolicy("vue",{createHTML:H=>H})}catch{}const AL=k4?H=>k4.createHTML(H):H=>H,Wi="http://www.w3.org/2000/svg",Gi="http://www.w3.org/1998/Math/MathML",r5=typeof document<"u"?document:null,vC=r5&&r5.createElement("template"),zi={insert:(H,C,V)=>{C.insertBefore(H,V||null)},remove:H=>{const C=H.parentNode;C&&C.removeChild(H)},createElement:(H,C,V,L)=>{const e=C==="svg"?r5.createElementNS(Wi,H):C==="mathml"?r5.createElementNS(Gi,H):V?r5.createElement(H,{is:V}):r5.createElement(H);return H==="select"&&L&&L.multiple!=null&&e.setAttribute("multiple",L.multiple),e},createText:H=>r5.createTextNode(H),createComment:H=>r5.createComment(H),setText:(H,C)=>{H.nodeValue=C},setElementText:(H,C)=>{H.textContent=C},parentNode:H=>H.parentNode,nextSibling:H=>H.nextSibling,querySelector:H=>r5.querySelector(H),setScopeId(H,C){H.setAttribute(C,"")},insertStaticContent(H,C,V,L,e,t){const i=V?V.previousSibling:C.lastChild;if(e&&(e===t||e.nextSibling))for(;C.insertBefore(e.cloneNode(!0),V),!(e===t||!(e=e.nextSibling)););else{vC.innerHTML=AL(L==="svg"?`<svg>${H}</svg>`:L==="mathml"?`<math>${H}</math>`:H);const r=vC.content;if(L==="svg"||L==="mathml"){const a=r.firstChild;for(;a.firstChild;)r.appendChild(a.firstChild);r.removeChild(a)}C.insertBefore(r,V)}return[i?i.nextSibling:C.firstChild,V?V.previousSibling:C.lastChild]}},Qi=Symbol("_vtc");function ji(H,C,V){const L=H[Qi];L&&(C=(C?[C,...L]:[...L]).join(" ")),C==null?H.removeAttribute("class"):V?H.setAttribute("class",C):H.className=C}const hC=Symbol("_vod"),$i=Symbol("_vsh"),qi=Symbol(""),Ki=/(^|;)\s*display\s*:/;function Xi(H,C,V){const L=H.style,e=U1(V);let t=!1;if(V&&!e){if(C)if(U1(C))for(const i of C.split(";")){const r=i.slice(0,i.indexOf(":")).trim();V[r]==null&&O7(L,r,"")}else for(const i in C)V[i]==null&&O7(L,i,"");for(const i in V)i==="display"&&(t=!0),O7(L,i,V[i])}else if(e){if(C!==V){const i=L[qi];i&&(V+=";"+i),L.cssText=V,t=Ki.test(V)}}else C&&H.removeAttribute("style");hC in H&&(H[hC]=t?L.display:"",H[$i]&&(L.display="none"))}const fC=/\s*!important$/;function O7(H,C,V){if(r1(V))V.forEach(L=>O7(H,C,L));else if(V==null&&(V=""),C.startsWith("--"))H.setProperty(C,V);else{const L=Yi(H,C);fC.test(V)?H.setProperty(r3(L),V.replace(fC,""),"important"):H[L]=V}}const ZC=["Webkit","Moz","ms"],t4={};function Yi(H,C){const V=t4[C];if(V)return V;let L=B2(C);if(L!=="filter"&&L in H)return t4[C]=L;L=e9(L);for(let e=0;e<ZC.length;e++){const t=ZC[e]+L;if(t in H)return t4[C]=t}return C}const SC="http://www.w3.org/1999/xlink";function pC(H,C,V,L,e,t=iM(C)){L&&C.startsWith("xlink:")?V==null?H.removeAttributeNS(SC,C.slice(6,C.length)):H.setAttributeNS(SC,C,V):V==null||t&&!rV(V)?H.removeAttribute(C):H.setAttribute(C,t?"":B5(V)?String(V):V)}function gC(H,C,V,L,e){if(C==="innerHTML"||C==="textContent"){V!=null&&(H[C]=C==="innerHTML"?AL(V):V);return}const t=H.tagName;if(C==="value"&&t!=="PROGRESS"&&!t.includes("-")){const r=t==="OPTION"?H.getAttribute("value")||"":H.value,a=V==null?H.type==="checkbox"?"on":"":String(V);(r!==a||!("_value"in H))&&(H.value=a),V==null&&H.removeAttribute(C),H._value=V;return}let i=!1;if(V===""||V==null){const r=typeof H[C];r==="boolean"?V=rV(V):V==null&&r==="string"?(V="",i=!0):r==="number"&&(V=0,i=!0)}try{H[C]=V}catch{}i&&H.removeAttribute(e||C)}function v3(H,C,V,L){H.addEventListener(C,V,L)}function Ji(H,C,V,L){H.removeEventListener(C,V,L)}const OC=Symbol("_vei");function Cr(H,C,V,L,e=null){const t=H[OC]||(H[OC]={}),i=t[C];if(L&&i)i.value=L;else{const[r,a]=Hr(C);if(L){const o=t[C]=er(L,e);v3(H,r,o,a)}else i&&(Ji(H,r,i,a),t[C]=void 0)}}const yC=/(?:Once|Passive|Capture)$/;function Hr(H){let C;if(yC.test(H)){C={};let L;for(;L=H.match(yC);)H=H.slice(0,H.length-L[0].length),C[L[0].toLowerCase()]=!0}return[H[2]===":"?H.slice(3):r3(H.slice(2)),C]}let M4=0;const Vr=Promise.resolve(),Lr=()=>M4||(Vr.then(()=>M4=0),M4=Date.now());function er(H,C){const V=L=>{if(!L._vts)L._vts=Date.now();else if(L._vts<=V.attached)return;C5(tr(L,V.value),C,5,[L])};return V.value=H,V.attached=Lr(),V}function tr(H,C){if(r1(C)){const V=H.stopImmediatePropagation;return H.stopImmediatePropagation=()=>{V.call(H),H._stopped=!0},C.map(L=>e=>!e._stopped&&L&&L(e))}else return C}const _C=H=>H.charCodeAt(0)===111&&H.charCodeAt(1)===110&&H.charCodeAt(2)>96&&H.charCodeAt(2)<123,Mr=(H,C,V,L,e,t)=>{const i=e==="svg";C==="class"?ji(H,L,i):C==="style"?Xi(H,V,L):H9(C)?i6(C)||Cr(H,C,V,L,t):(C[0]==="."?(C=C.slice(1),!0):C[0]==="^"?(C=C.slice(1),!1):ir(H,C,L,i))?(gC(H,C,L),!H.tagName.includes("-")&&(C==="value"||C==="checked"||C==="selected")&&pC(H,C,L,i,t,C!=="value")):H._isVueCE&&(/[A-Z]/.test(C)||!U1(L))?gC(H,B2(C),L,t,C):(C==="true-value"?H._trueValue=L:C==="false-value"&&(H._falseValue=L),pC(H,C,L,i))};function ir(H,C,V,L){if(L)return!!(C==="innerHTML"||C==="textContent"||C in H&&_C(C)&&o1(V));if(C==="spellcheck"||C==="draggable"||C==="translate"||C==="form"||C==="list"&&H.tagName==="INPUT"||C==="type"&&H.tagName==="TEXTAREA")return!1;if(C==="width"||C==="height"){const e=H.tagName;if(e==="IMG"||e==="VIDEO"||e==="CANVAS"||e==="SOURCE")return!1}return _C(C)&&U1(V)?!1:C in H}const TC=H=>{const C=H.props["onUpdate:modelValue"]||!1;return r1(C)?V=>f7(C,V):C};function rr(H){H.target.composing=!0}function wC(H){const C=H.target;C.composing&&(C.composing=!1,C.dispatchEvent(new Event("input")))}const i4=Symbol("_assign"),EC={created(H,{modifiers:{lazy:C,trim:V,number:L}},e){H[i4]=TC(e);const t=L||e.props&&e.props.type==="number";v3(H,C?"change":"input",i=>{if(i.target.composing)return;let r=H.value;V&&(r=r.trim()),t&&(r=p4(r)),H[i4](r)}),V&&v3(H,"change",()=>{H.value=H.value.trim()}),C||(v3(H,"compositionstart",rr),v3(H,"compositionend",wC),v3(H,"change",wC))},mounted(H,{value:C}){H.value=C??""},beforeUpdate(H,{value:C,oldValue:V,modifiers:{lazy:L,trim:e,number:t}},i){if(H[i4]=TC(i),H.composing)return;const r=(t||H.type==="number")&&!/^0\d/.test(H.value)?p4(H.value):H.value,a=C??"";r!==a&&(document.activeElement===H&&H.type!=="range"&&(L&&C===V||e&&H.value.trim()===a)||(H.value=a))}},ar=$1({patchProp:Mr},zi);let PC;function nr(){return PC||(PC=li(ar))}const or=(...H)=>{const C=nr().createApp(...H),{mount:V}=C;return C.mount=L=>{const e=sr(L);if(!e)return;const t=C._component;!o1(t)&&!t.render&&!t.template&&(t.template=e.innerHTML),e.nodeType===1&&(e.textContent="");const i=V(e,!1,Ar(e));return e instanceof Element&&(e.removeAttribute("v-cloak"),e.setAttribute("data-v-app","")),i},C};function Ar(H){if(H instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&H instanceof MathMLElement)return"mathml"}function sr(H){return U1(H)?document.querySelector(H):H}var lr=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const dr=Symbol();var bC;(function(H){H.direct="direct",H.patchObject="patch object",H.patchFunction="patch function"})(bC||(bC={}));function ur(){const H=rM(!0),C=H.run(()=>O3({}));let V=[],L=[];const e=_V({install(t){e._a=t,t.provide(dr,e),t.config.globalProperties.$pinia=e,L.forEach(i=>V.push(i)),L=[]},use(t){return!this._a&&!lr?L.push(t):V.push(t),this},_p:V,_a:null,_e:H,_s:new Map,state:C});return e}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const h3=typeof document<"u";function sL(H){return typeof H=="object"||"displayName"in H||"props"in H||"__vccOpts"in H}function mr(H){return H.__esModule||H[Symbol.toStringTag]==="Module"||H.default&&sL(H.default)}const S1=Object.assign;function r4(H,C){const V={};for(const L in C){const e=C[L];V[L]=G2(e)?e.map(H):H(e)}return V}const f0=()=>{},G2=Array.isArray,lL=/#/g,cr=/&/g,vr=/\//g,hr=/=/g,fr=/\?/g,dL=/\+/g,Zr=/%5B/g,Sr=/%5D/g,uL=/%5E/g,pr=/%60/g,mL=/%7B/g,gr=/%7C/g,cL=/%7D/g,Or=/%20/g;function S6(H){return encodeURI(""+H).replace(gr,"|").replace(Zr,"[").replace(Sr,"]")}function yr(H){return S6(H).replace(mL,"{").replace(cL,"}").replace(uL,"^")}function I4(H){return S6(H).replace(dL,"%2B").replace(Or,"+").replace(lL,"%23").replace(cr,"%26").replace(pr,"`").replace(mL,"{").replace(cL,"}").replace(uL,"^")}function _r(H){return I4(H).replace(hr,"%3D")}function Tr(H){return S6(H).replace(lL,"%23").replace(fr,"%3F")}function wr(H){return H==null?"":Tr(H).replace(vr,"%2F")}function b0(H){try{return decodeURIComponent(""+H)}catch{}return""+H}const Er=/\/$/,Pr=H=>H.replace(Er,"");function a4(H,C,V="/"){let L,e={},t="",i="";const r=C.indexOf("#");let a=C.indexOf("?");return r<a&&r>=0&&(a=-1),a>-1&&(L=C.slice(0,a),t=C.slice(a+1,r>-1?r:C.length),e=H(t)),r>-1&&(L=L||C.slice(0,r),i=C.slice(r,C.length)),L=Ir(L??C,V),{fullPath:L+(t&&"?")+t+i,path:L,query:e,hash:b0(i)}}function br(H,C){const V=C.query?H(C.query):"";return C.path+(V&&"?")+V+(C.hash||"")}function RC(H,C){return!C||!H.toLowerCase().startsWith(C.toLowerCase())?H:H.slice(C.length)||"/"}function Rr(H,C,V){const L=C.matched.length-1,e=V.matched.length-1;return L>-1&&L===e&&k3(C.matched[L],V.matched[e])&&vL(C.params,V.params)&&H(C.query)===H(V.query)&&C.hash===V.hash}function k3(H,C){return(H.aliasOf||H)===(C.aliasOf||C)}function vL(H,C){if(Object.keys(H).length!==Object.keys(C).length)return!1;for(const V in H)if(!kr(H[V],C[V]))return!1;return!0}function kr(H,C){return G2(H)?kC(H,C):G2(C)?kC(C,H):H===C}function kC(H,C){return G2(C)?H.length===C.length&&H.every((V,L)=>V===C[L]):H.length===1&&H[0]===C}function Ir(H,C){if(H.startsWith("/"))return H;if(!H)return C;const V=C.split("/"),L=H.split("/"),e=L[L.length-1];(e===".."||e===".")&&L.push("");let t=V.length-1,i,r;for(i=0;i<L.length;i++)if(r=L[i],r!==".")if(r==="..")t>1&&t--;else break;return V.slice(0,t).join("/")+"/"+L.slice(i).join("/")}const f5={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var R0;(function(H){H.pop="pop",H.push="push"})(R0||(R0={}));var Z0;(function(H){H.back="back",H.forward="forward",H.unknown=""})(Z0||(Z0={}));function Br(H){if(!H)if(h3){const C=document.querySelector("base");H=C&&C.getAttribute("href")||"/",H=H.replace(/^\w+:\/\/[^\/]+/,"")}else H="/";return H[0]!=="/"&&H[0]!=="#"&&(H="/"+H),Pr(H)}const Fr=/^[^#]+#/;function xr(H,C){return H.replace(Fr,"#")+C}function Dr(H,C){const V=document.documentElement.getBoundingClientRect(),L=H.getBoundingClientRect();return{behavior:C.behavior,left:L.left-V.left-(C.left||0),top:L.top-V.top-(C.top||0)}}const s9=()=>({left:window.scrollX,top:window.scrollY});function Nr(H){let C;if("el"in H){const V=H.el,L=typeof V=="string"&&V.startsWith("#"),e=typeof V=="string"?L?document.getElementById(V.slice(1)):document.querySelector(V):V;if(!e)return;C=Dr(e,H)}else C=H;"scrollBehavior"in document.documentElement.style?window.scrollTo(C):window.scrollTo(C.left!=null?C.left:window.scrollX,C.top!=null?C.top:window.scrollY)}function IC(H,C){return(history.state?history.state.position-C:-1)+H}const B4=new Map;function Ur(H,C){B4.set(H,C)}function Wr(H){const C=B4.get(H);return B4.delete(H),C}let Gr=()=>location.protocol+"//"+location.host;function hL(H,C){const{pathname:V,search:L,hash:e}=C,t=H.indexOf("#");if(t>-1){let r=e.includes(H.slice(t))?H.slice(t).length:1,a=e.slice(r);return a[0]!=="/"&&(a="/"+a),RC(a,"")}return RC(V,H)+L+e}function zr(H,C,V,L){let e=[],t=[],i=null;const r=({state:u})=>{const c=hL(H,location),w=V.value,P=C.value;let k=0;if(u){if(V.value=c,C.value=u,i&&i===w){i=null;return}k=P?u.position-P.position:0}else L(c);e.forEach(x=>{x(V.value,w,{delta:k,type:R0.pop,direction:k?k>0?Z0.forward:Z0.back:Z0.unknown})})};function a(){i=V.value}function o(u){e.push(u);const c=()=>{const w=e.indexOf(u);w>-1&&e.splice(w,1)};return t.push(c),c}function s(){const{history:u}=window;u.state&&u.replaceState(S1({},u.state,{scroll:s9()}),"")}function l(){for(const u of t)u();t=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:a,listen:o,destroy:l}}function BC(H,C,V,L=!1,e=!1){return{back:H,current:C,forward:V,replaced:L,position:window.history.length,scroll:e?s9():null}}function Qr(H){const{history:C,location:V}=window,L={value:hL(H,V)},e={value:C.state};e.value||t(L.value,{back:null,current:L.value,forward:null,position:C.length-1,replaced:!0,scroll:null},!0);function t(a,o,s){const l=H.indexOf("#"),u=l>-1?(V.host&&document.querySelector("base")?H:H.slice(l))+a:Gr()+H+a;try{C[s?"replaceState":"pushState"](o,"",u),e.value=o}catch(c){console.error(c),V[s?"replace":"assign"](u)}}function i(a,o){const s=S1({},C.state,BC(e.value.back,a,e.value.forward,!0),o,{position:e.value.position});t(a,s,!0),L.value=a}function r(a,o){const s=S1({},e.value,C.state,{forward:a,scroll:s9()});t(s.current,s,!0);const l=S1({},BC(L.value,a,null),{position:s.position+1},o);t(a,l,!1),L.value=a}return{location:L,state:e,push:r,replace:i}}function jr(H){H=Br(H);const C=Qr(H),V=zr(H,C.state,C.location,C.replace);function L(t,i=!0){i||V.pauseListeners(),history.go(t)}const e=S1({location:"",base:H,go:L,createHref:xr.bind(null,H)},C,V);return Object.defineProperty(e,"location",{enumerable:!0,get:()=>C.location.value}),Object.defineProperty(e,"state",{enumerable:!0,get:()=>C.state.value}),e}function $r(H){return typeof H=="string"||H&&typeof H=="object"}function fL(H){return typeof H=="string"||typeof H=="symbol"}const ZL=Symbol("");var FC;(function(H){H[H.aborted=4]="aborted",H[H.cancelled=8]="cancelled",H[H.duplicated=16]="duplicated"})(FC||(FC={}));function I3(H,C){return S1(new Error,{type:H,[ZL]:!0},C)}function i5(H,C){return H instanceof Error&&ZL in H&&(C==null||!!(H.type&C))}const xC="[^/]+?",qr={sensitive:!1,strict:!1,start:!0,end:!0},Kr=/[.+*?^${}()[\]/\\]/g;function Xr(H,C){const V=S1({},qr,C),L=[];let e=V.start?"^":"";const t=[];for(const o of H){const s=o.length?[]:[90];V.strict&&!o.length&&(e+="/");for(let l=0;l<o.length;l++){const u=o[l];let c=40+(V.sensitive?.25:0);if(u.type===0)l||(e+="/"),e+=u.value.replace(Kr,"\\$&"),c+=40;else if(u.type===1){const{value:w,repeatable:P,optional:k,regexp:x}=u;t.push({name:w,repeatable:P,optional:k});const E=x||xC;if(E!==xC){c+=10;try{new RegExp(`(${E})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${w}" (${E}): `+N.message)}}let B=P?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;l||(B=k&&o.length<2?`(?:/${B})`:"/"+B),k&&(B+="?"),e+=B,c+=20,k&&(c+=-8),P&&(c+=-20),E===".*"&&(c+=-50)}s.push(c)}L.push(s)}if(V.strict&&V.end){const o=L.length-1;L[o][L[o].length-1]+=.7000000000000001}V.strict||(e+="/?"),V.end?e+="$":V.strict&&!e.endsWith("/")&&(e+="(?:/|$)");const i=new RegExp(e,V.sensitive?"":"i");function r(o){const s=o.match(i),l={};if(!s)return null;for(let u=1;u<s.length;u++){const c=s[u]||"",w=t[u-1];l[w.name]=c&&w.repeatable?c.split("/"):c}return l}function a(o){let s="",l=!1;for(const u of H){(!l||!s.endsWith("/"))&&(s+="/"),l=!1;for(const c of u)if(c.type===0)s+=c.value;else if(c.type===1){const{value:w,repeatable:P,optional:k}=c,x=w in o?o[w]:"";if(G2(x)&&!P)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const E=G2(x)?x.join("/"):x;if(!E)if(k)u.length<2&&(s.endsWith("/")?s=s.slice(0,-1):l=!0);else throw new Error(`Missing required param "${w}"`);s+=E}}return s||"/"}return{re:i,score:L,keys:t,parse:r,stringify:a}}function Yr(H,C){let V=0;for(;V<H.length&&V<C.length;){const L=C[V]-H[V];if(L)return L;V++}return H.length<C.length?H.length===1&&H[0]===80?-1:1:H.length>C.length?C.length===1&&C[0]===80?1:-1:0}function SL(H,C){let V=0;const L=H.score,e=C.score;for(;V<L.length&&V<e.length;){const t=Yr(L[V],e[V]);if(t)return t;V++}if(Math.abs(e.length-L.length)===1){if(DC(L))return 1;if(DC(e))return-1}return e.length-L.length}function DC(H){const C=H[H.length-1];return H.length>0&&C[C.length-1]<0}const Jr={type:0,value:""},Ca=/[a-zA-Z0-9_]/;function Ha(H){if(!H)return[[]];if(H==="/")return[[Jr]];if(!H.startsWith("/"))throw new Error(`Invalid path "${H}"`);function C(c){throw new Error(`ERR (${V})/"${o}": ${c}`)}let V=0,L=V;const e=[];let t;function i(){t&&e.push(t),t=[]}let r=0,a,o="",s="";function l(){o&&(V===0?t.push({type:0,value:o}):V===1||V===2||V===3?(t.length>1&&(a==="*"||a==="+")&&C(`A repeatable param (${o}) must be alone in its segment. eg: '/:ids+.`),t.push({type:1,value:o,regexp:s,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):C("Invalid state to consume buffer"),o="")}function u(){o+=a}for(;r<H.length;){if(a=H[r++],a==="\\"&&V!==2){L=V,V=4;continue}switch(V){case 0:a==="/"?(o&&l(),i()):a===":"?(l(),V=1):u();break;case 4:u(),V=L;break;case 1:a==="("?V=2:Ca.test(a)?u():(l(),V=0,a!=="*"&&a!=="?"&&a!=="+"&&r--);break;case 2:a===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+a:V=3:s+=a;break;case 3:l(),V=0,a!=="*"&&a!=="?"&&a!=="+"&&r--,s="";break;default:C("Unknown state");break}}return V===2&&C(`Unfinished custom RegExp for param "${o}"`),l(),i(),e}function Va(H,C,V){const L=Xr(Ha(H.path),V),e=S1(L,{record:H,parent:C,children:[],alias:[]});return C&&!e.record.aliasOf==!C.record.aliasOf&&C.children.push(e),e}function La(H,C){const V=[],L=new Map;C=GC({strict:!1,end:!0,sensitive:!1},C);function e(l){return L.get(l)}function t(l,u,c){const w=!c,P=UC(l);P.aliasOf=c&&c.record;const k=GC(C,l),x=[P];if("alias"in l){const N=typeof l.alias=="string"?[l.alias]:l.alias;for(const e1 of N)x.push(UC(S1({},P,{components:c?c.record.components:P.components,path:e1,aliasOf:c?c.record:P})))}let E,B;for(const N of x){const{path:e1}=N;if(u&&e1[0]!=="/"){const n1=u.record.path,S=n1[n1.length-1]==="/"?"":"/";N.path=u.record.path+(e1&&S+e1)}if(E=Va(N,u,k),c?c.alias.push(E):(B=B||E,B!==E&&B.alias.push(E),w&&l.name&&!WC(E)&&i(l.name)),pL(E)&&a(E),P.children){const n1=P.children;for(let S=0;S<n1.length;S++)t(n1[S],E,c&&c.children[S])}c=c||E}return B?()=>{i(B)}:f0}function i(l){if(fL(l)){const u=L.get(l);u&&(L.delete(l),V.splice(V.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=V.indexOf(l);u>-1&&(V.splice(u,1),l.record.name&&L.delete(l.record.name),l.children.forEach(i),l.alias.forEach(i))}}function r(){return V}function a(l){const u=Ma(l,V);V.splice(u,0,l),l.record.name&&!WC(l)&&L.set(l.record.name,l)}function o(l,u){let c,w={},P,k;if("name"in l&&l.name){if(c=L.get(l.name),!c)throw I3(1,{location:l});k=c.record.name,w=S1(NC(u.params,c.keys.filter(B=>!B.optional).concat(c.parent?c.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),l.params&&NC(l.params,c.keys.map(B=>B.name))),P=c.stringify(w)}else if(l.path!=null)P=l.path,c=V.find(B=>B.re.test(P)),c&&(w=c.parse(P),k=c.record.name);else{if(c=u.name?L.get(u.name):V.find(B=>B.re.test(u.path)),!c)throw I3(1,{location:l,currentLocation:u});k=c.record.name,w=S1({},u.params,l.params),P=c.stringify(w)}const x=[];let E=c;for(;E;)x.unshift(E.record),E=E.parent;return{name:k,path:P,params:w,matched:x,meta:ta(x)}}H.forEach(l=>t(l));function s(){V.length=0,L.clear()}return{addRoute:t,resolve:o,removeRoute:i,clearRoutes:s,getRoutes:r,getRecordMatcher:e}}function NC(H,C){const V={};for(const L of C)L in H&&(V[L]=H[L]);return V}function UC(H){const C={path:H.path,redirect:H.redirect,name:H.name,meta:H.meta||{},aliasOf:H.aliasOf,beforeEnter:H.beforeEnter,props:ea(H),children:H.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in H?H.components||null:H.component&&{default:H.component}};return Object.defineProperty(C,"mods",{value:{}}),C}function ea(H){const C={},V=H.props||!1;if("component"in H)C.default=V;else for(const L in H.components)C[L]=typeof V=="object"?V[L]:V;return C}function WC(H){for(;H;){if(H.record.aliasOf)return!0;H=H.parent}return!1}function ta(H){return H.reduce((C,V)=>S1(C,V.meta),{})}function GC(H,C){const V={};for(const L in H)V[L]=L in C?C[L]:H[L];return V}function Ma(H,C){let V=0,L=C.length;for(;V!==L;){const t=V+L>>1;SL(H,C[t])<0?L=t:V=t+1}const e=ia(H);return e&&(L=C.lastIndexOf(e,L-1)),L}function ia(H){let C=H;for(;C=C.parent;)if(pL(C)&&SL(H,C)===0)return C}function pL({record:H}){return!!(H.name||H.components&&Object.keys(H.components).length||H.redirect)}function ra(H){const C={};if(H===""||H==="?")return C;const L=(H[0]==="?"?H.slice(1):H).split("&");for(let e=0;e<L.length;++e){const t=L[e].replace(dL," "),i=t.indexOf("="),r=b0(i<0?t:t.slice(0,i)),a=i<0?null:b0(t.slice(i+1));if(r in C){let o=C[r];G2(o)||(o=C[r]=[o]),o.push(a)}else C[r]=a}return C}function zC(H){let C="";for(let V in H){const L=H[V];if(V=_r(V),L==null){L!==void 0&&(C+=(C.length?"&":"")+V);continue}(G2(L)?L.map(t=>t&&I4(t)):[L&&I4(L)]).forEach(t=>{t!==void 0&&(C+=(C.length?"&":"")+V,t!=null&&(C+="="+t))})}return C}function aa(H){const C={};for(const V in H){const L=H[V];L!==void 0&&(C[V]=G2(L)?L.map(e=>e==null?null:""+e):L==null?L:""+L)}return C}const na=Symbol(""),QC=Symbol(""),l9=Symbol(""),p6=Symbol(""),F4=Symbol("");function a0(){let H=[];function C(L){return H.push(L),()=>{const e=H.indexOf(L);e>-1&&H.splice(e,1)}}function V(){H=[]}return{add:C,list:()=>H.slice(),reset:V}}function p5(H,C,V,L,e,t=i=>i()){const i=L&&(L.enterCallbacks[e]=L.enterCallbacks[e]||[]);return()=>new Promise((r,a)=>{const o=u=>{u===!1?a(I3(4,{from:V,to:C})):u instanceof Error?a(u):$r(u)?a(I3(2,{from:C,to:u})):(i&&L.enterCallbacks[e]===i&&typeof u=="function"&&i.push(u),r())},s=t(()=>H.call(L&&L.instances[e],C,V,o));let l=Promise.resolve(s);H.length<3&&(l=l.then(o)),l.catch(u=>a(u))})}function n4(H,C,V,L,e=t=>t()){const t=[];for(const i of H)for(const r in i.components){let a=i.components[r];if(!(C!=="beforeRouteEnter"&&!i.instances[r]))if(sL(a)){const s=(a.__vccOpts||a)[C];s&&t.push(p5(s,V,L,i,r,e))}else{let o=a();t.push(()=>o.then(s=>{if(!s)throw new Error(`Couldn't resolve component "${r}" at "${i.path}"`);const l=mr(s)?s.default:s;i.mods[r]=s,i.components[r]=l;const c=(l.__vccOpts||l)[C];return c&&p5(c,V,L,i,r,e)()}))}}return t}function jC(H){const C=U2(l9),V=U2(p6),L=y2(()=>{const a=N2(H.to);return C.resolve(a)}),e=y2(()=>{const{matched:a}=L.value,{length:o}=a,s=a[o-1],l=V.matched;if(!s||!l.length)return-1;const u=l.findIndex(k3.bind(null,s));if(u>-1)return u;const c=$C(a[o-2]);return o>1&&$C(s)===c&&l[l.length-1].path!==c?l.findIndex(k3.bind(null,a[o-2])):u}),t=y2(()=>e.value>-1&&la(V.params,L.value.params)),i=y2(()=>e.value>-1&&e.value===V.matched.length-1&&vL(V.params,L.value.params));function r(a={}){if(sa(a)){const o=C[N2(H.replace)?"replace":"push"](N2(H.to)).catch(f0);return H.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>o),o}return Promise.resolve()}return{route:L,href:y2(()=>L.value.href),isActive:t,isExactActive:i,navigate:r}}function oa(H){return H.length===1?H[0]:H}const Aa=G3({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jC,setup(H,{slots:C}){const V=U0(jC(H)),{options:L}=U2(l9),e=y2(()=>({[qC(H.activeClass,L.linkActiveClass,"router-link-active")]:V.isActive,[qC(H.exactActiveClass,L.linkExactActiveClass,"router-link-exact-active")]:V.isExactActive}));return()=>{const t=C.default&&oa(C.default(V));return H.custom?t:y3("a",{"aria-current":V.isExactActive?H.ariaCurrentValue:null,href:V.href,onClick:V.navigate,class:e.value},t)}}}),gL=Aa;function sa(H){if(!(H.metaKey||H.altKey||H.ctrlKey||H.shiftKey)&&!H.defaultPrevented&&!(H.button!==void 0&&H.button!==0)){if(H.currentTarget&&H.currentTarget.getAttribute){const C=H.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(C))return}return H.preventDefault&&H.preventDefault(),!0}}function la(H,C){for(const V in C){const L=C[V],e=H[V];if(typeof L=="string"){if(L!==e)return!1}else if(!G2(e)||e.length!==L.length||L.some((t,i)=>t!==e[i]))return!1}return!0}function $C(H){return H?H.aliasOf?H.aliasOf.path:H.path:""}const qC=(H,C,V)=>H??C??V,da=G3({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(H,{attrs:C,slots:V}){const L=U2(F4),e=y2(()=>H.route||L.value),t=U2(QC,0),i=y2(()=>{let o=N2(t);const{matched:s}=e.value;let l;for(;(l=s[o])&&!l.components;)o++;return o}),r=y2(()=>e.value.matched[i.value]);S7(QC,y2(()=>i.value+1)),S7(na,r),S7(F4,e);const a=O3();return p7(()=>[a.value,r.value,H.name],([o,s,l],[u,c,w])=>{s&&(s.instances[l]=o,c&&c!==s&&o&&o===u&&(s.leaveGuards.size||(s.leaveGuards=c.leaveGuards),s.updateGuards.size||(s.updateGuards=c.updateGuards))),o&&s&&(!c||!k3(s,c)||!u)&&(s.enterCallbacks[l]||[]).forEach(P=>P(o))},{flush:"post"}),()=>{const o=e.value,s=H.name,l=r.value,u=l&&l.components[s];if(!u)return KC(V.default,{Component:u,route:o});const c=l.props[s],w=c?c===!0?o.params:typeof c=="function"?c(o):c:null,k=y3(u,S1({},w,C,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(l.instances[s]=null)},ref:a}));return KC(V.default,{Component:k,route:o})||k}}});function KC(H,C){if(!H)return null;const V=H(C);return V.length===1?V[0]:V}const OL=da;function ua(H){const C=La(H.routes,H),V=H.parseQuery||ra,L=H.stringifyQuery||zC,e=H.history,t=a0(),i=a0(),r=a0(),a=_M(f5);let o=f5;h3&&H.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=r4.bind(null,R=>""+R),l=r4.bind(null,wr),u=r4.bind(null,b0);function c(R,K){let $,Y;return fL(R)?($=C.getRecordMatcher(R),Y=K):Y=R,C.addRoute(Y,$)}function w(R){const K=C.getRecordMatcher(R);K&&C.removeRoute(K)}function P(){return C.getRoutes().map(R=>R.record)}function k(R){return!!C.getRecordMatcher(R)}function x(R,K){if(K=S1({},K||a.value),typeof R=="string"){const h=a4(V,R,K.path),_=C.resolve({path:h.path},K),F=e.createHref(h.fullPath);return S1(h,_,{params:u(_.params),hash:b0(h.hash),redirectedFrom:void 0,href:F})}let $;if(R.path!=null)$=S1({},R,{path:a4(V,R.path,K.path).path});else{const h=S1({},R.params);for(const _ in h)h[_]==null&&delete h[_];$=S1({},R,{params:l(h)}),K.params=l(K.params)}const Y=C.resolve($,K),u1=R.hash||"";Y.params=s(u(Y.params));const y1=br(L,S1({},R,{hash:yr(u1),path:Y.path})),m=e.createHref(y1);return S1({fullPath:y1,hash:u1,query:L===zC?aa(R.query):R.query||{}},Y,{redirectedFrom:void 0,href:m})}function E(R){return typeof R=="string"?a4(V,R,a.value.path):S1({},R)}function B(R,K){if(o!==R)return I3(8,{from:K,to:R})}function N(R){return S(R)}function e1(R){return N(S1(E(R),{replace:!0}))}function n1(R){const K=R.matched[R.matched.length-1];if(K&&K.redirect){const{redirect:$}=K;let Y=typeof $=="function"?$(R):$;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=E(Y):{path:Y},Y.params={}),S1({query:R.query,hash:R.hash,params:Y.path!=null?{}:R.params},Y)}}function S(R,K){const $=o=x(R),Y=a.value,u1=R.state,y1=R.force,m=R.replace===!0,h=n1($);if(h)return S(S1(E(h),{state:typeof h=="object"?S1({},u1,h.state):u1,force:y1,replace:m}),K||$);const _=$;_.redirectedFrom=K;let F;return!y1&&Rr(L,Y,$)&&(F=I3(16,{to:_,from:Y}),b2(Y,Y,!0,!1)),(F?Promise.resolve(F):p(_,Y)).catch(b=>i5(b)?i5(b,2)?b:F2(b):A1(b,_,Y)).then(b=>{if(b){if(i5(b,2))return S(S1({replace:m},E(b.to),{state:typeof b.to=="object"?S1({},u1,b.to.state):u1,force:y1}),K||_)}else b=O(_,Y,!0,m,u1);return g(_,Y,b),b})}function v(R,K){const $=B(R,K);return $?Promise.reject($):Promise.resolve()}function Z(R){const K=u5.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(R):R()}function p(R,K){let $;const[Y,u1,y1]=ma(R,K);$=n4(Y.reverse(),"beforeRouteLeave",R,K);for(const h of Y)h.leaveGuards.forEach(_=>{$.push(p5(_,R,K))});const m=v.bind(null,R,K);return $.push(m),m2($).then(()=>{$=[];for(const h of t.list())$.push(p5(h,R,K));return $.push(m),m2($)}).then(()=>{$=n4(u1,"beforeRouteUpdate",R,K);for(const h of u1)h.updateGuards.forEach(_=>{$.push(p5(_,R,K))});return $.push(m),m2($)}).then(()=>{$=[];for(const h of y1)if(h.beforeEnter)if(G2(h.beforeEnter))for(const _ of h.beforeEnter)$.push(p5(_,R,K));else $.push(p5(h.beforeEnter,R,K));return $.push(m),m2($)}).then(()=>(R.matched.forEach(h=>h.enterCallbacks={}),$=n4(y1,"beforeRouteEnter",R,K,Z),$.push(m),m2($))).then(()=>{$=[];for(const h of i.list())$.push(p5(h,R,K));return $.push(m),m2($)}).catch(h=>i5(h,8)?h:Promise.reject(h))}function g(R,K,$){r.list().forEach(Y=>Z(()=>Y(R,K,$)))}function O(R,K,$,Y,u1){const y1=B(R,K);if(y1)return y1;const m=K===f5,h=h3?history.state:{};$&&(Y||m?e.replace(R.fullPath,S1({scroll:m&&h&&h.scroll},u1)):e.push(R.fullPath,u1)),a.value=R,b2(R,K,$,m),F2()}let f;function o2(){f||(f=e.listen((R,K,$)=>{if(!z2.listening)return;const Y=x(R),u1=n1(Y);if(u1){S(S1(u1,{replace:!0,force:!0}),Y).catch(f0);return}o=Y;const y1=a.value;h3&&Ur(IC(y1.fullPath,$.delta),s9()),p(Y,y1).catch(m=>i5(m,12)?m:i5(m,2)?(S(S1(E(m.to),{force:!0}),Y).then(h=>{i5(h,20)&&!$.delta&&$.type===R0.pop&&e.go(-1,!1)}).catch(f0),Promise.reject()):($.delta&&e.go(-$.delta,!1),A1(m,Y,y1))).then(m=>{m=m||O(Y,y1,!1),m&&($.delta&&!i5(m,8)?e.go(-$.delta,!1):$.type===R0.pop&&i5(m,20)&&e.go(-1,!1)),g(Y,y1,m)}).catch(f0)}))}let P2=a0(),D1=a0(),d1;function A1(R,K,$){F2(R);const Y=D1.list();return Y.length?Y.forEach(u1=>u1(R,K,$)):console.error(R),Promise.reject(R)}function S2(){return d1&&a.value!==f5?Promise.resolve():new Promise((R,K)=>{P2.add([R,K])})}function F2(R){return d1||(d1=!R,o2(),P2.list().forEach(([K,$])=>R?$(R):K()),P2.reset()),R}function b2(R,K,$,Y){const{scrollBehavior:u1}=H;if(!h3||!u1)return Promise.resolve();const y1=!$&&Wr(IC(R.fullPath,0))||(Y||!$)&&history.state&&history.state.scroll||null;return PV().then(()=>u1(R,K,y1)).then(m=>m&&Nr(m)).catch(m=>A1(m,R,K))}const k1=R=>e.go(R);let I1;const u5=new Set,z2={currentRoute:a,listening:!0,addRoute:c,removeRoute:w,clearRoutes:C.clearRoutes,hasRoute:k,getRoutes:P,resolve:x,options:H,push:N,replace:e1,go:k1,back:()=>k1(-1),forward:()=>k1(1),beforeEach:t.add,beforeResolve:i.add,afterEach:r.add,onError:D1.add,isReady:S2,install(R){const K=this;R.component("RouterLink",gL),R.component("RouterView",OL),R.config.globalProperties.$router=K,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>N2(a)}),h3&&!I1&&a.value===f5&&(I1=!0,N(e.location).catch(u1=>{}));const $={};for(const u1 in f5)Object.defineProperty($,u1,{get:()=>a.value[u1],enumerable:!0});R.provide(l9,K),R.provide(p6,OV($)),R.provide(F4,a);const Y=R.unmount;u5.add(R),R.unmount=function(){u5.delete(R),u5.size<1&&(o=f5,f&&f(),f=null,a.value=f5,I1=!1,d1=!1),Y()}}};function m2(R){return R.reduce((K,$)=>K.then(()=>Z($)),Promise.resolve())}return z2}function ma(H,C){const V=[],L=[],e=[],t=Math.max(C.matched.length,H.matched.length);for(let i=0;i<t;i++){const r=C.matched[i];r&&(H.matched.find(o=>k3(o,r))?L.push(r):V.push(r));const a=H.matched[i];a&&(C.matched.find(o=>k3(o,a))||e.push(a))}return[V,L,e]}function ca(){return U2(l9)}function va(H){return U2(p6)}var XC={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=function(H){const C=[];let V=0;for(let L=0;L<H.length;L++){let e=H.charCodeAt(L);e<128?C[V++]=e:e<2048?(C[V++]=e>>6|192,C[V++]=e&63|128):(e&64512)===55296&&L+1<H.length&&(H.charCodeAt(L+1)&64512)===56320?(e=65536+((e&1023)<<10)+(H.charCodeAt(++L)&1023),C[V++]=e>>18|240,C[V++]=e>>12&63|128,C[V++]=e>>6&63|128,C[V++]=e&63|128):(C[V++]=e>>12|224,C[V++]=e>>6&63|128,C[V++]=e&63|128)}return C},ha=function(H){const C=[];let V=0,L=0;for(;V<H.length;){const e=H[V++];if(e<128)C[L++]=String.fromCharCode(e);else if(e>191&&e<224){const t=H[V++];C[L++]=String.fromCharCode((e&31)<<6|t&63)}else if(e>239&&e<365){const t=H[V++],i=H[V++],r=H[V++],a=((e&7)<<18|(t&63)<<12|(i&63)<<6|r&63)-65536;C[L++]=String.fromCharCode(55296+(a>>10)),C[L++]=String.fromCharCode(56320+(a&1023))}else{const t=H[V++],i=H[V++];C[L++]=String.fromCharCode((e&15)<<12|(t&63)<<6|i&63)}}return C.join("")},_L={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(H,C){if(!Array.isArray(H))throw Error("encodeByteArray takes an array as a parameter");this.init_();const V=C?this.byteToCharMapWebSafe_:this.byteToCharMap_,L=[];for(let e=0;e<H.length;e+=3){const t=H[e],i=e+1<H.length,r=i?H[e+1]:0,a=e+2<H.length,o=a?H[e+2]:0,s=t>>2,l=(t&3)<<4|r>>4;let u=(r&15)<<2|o>>6,c=o&63;a||(c=64,i||(u=64)),L.push(V[s],V[l],V[u],V[c])}return L.join("")},encodeString(H,C){return this.HAS_NATIVE_SUPPORT&&!C?btoa(H):this.encodeByteArray(yL(H),C)},decodeString(H,C){return this.HAS_NATIVE_SUPPORT&&!C?atob(H):ha(this.decodeStringToByteArray(H,C))},decodeStringToByteArray(H,C){this.init_();const V=C?this.charToByteMapWebSafe_:this.charToByteMap_,L=[];for(let e=0;e<H.length;){const t=V[H.charAt(e++)],r=e<H.length?V[H.charAt(e)]:0;++e;const o=e<H.length?V[H.charAt(e)]:64;++e;const l=e<H.length?V[H.charAt(e)]:64;if(++e,t==null||r==null||o==null||l==null)throw new fa;const u=t<<2|r>>4;if(L.push(u),o!==64){const c=r<<4&240|o>>2;if(L.push(c),l!==64){const w=o<<6&192|l;L.push(w)}}}return L},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let H=0;H<this.ENCODED_VALS.length;H++)this.byteToCharMap_[H]=this.ENCODED_VALS.charAt(H),this.charToByteMap_[this.byteToCharMap_[H]]=H,this.byteToCharMapWebSafe_[H]=this.ENCODED_VALS_WEBSAFE.charAt(H),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[H]]=H,H>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(H)]=H,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(H)]=H)}}};class fa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Za=function(H){const C=yL(H);return _L.encodeByteArray(C,!0)},D7=function(H){return Za(H).replace(/\./g,"")},Sa=function(H){try{return _L.decodeString(H,!0)}catch(C){console.error("base64Decode failed: ",C)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=()=>pa().__FIREBASE_DEFAULTS__,Oa=()=>{if(typeof process>"u"||typeof XC>"u")return;const H=XC.__FIREBASE_DEFAULTS__;if(H)return JSON.parse(H)},ya=()=>{if(typeof document>"u")return;let H;try{H=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const C=H&&Sa(H[1]);return C&&JSON.parse(C)},g6=()=>{try{return ga()||Oa()||ya()}catch(H){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${H}`);return}},_a=H=>{var C,V;return(V=(C=g6())===null||C===void 0?void 0:C.emulatorHosts)===null||V===void 0?void 0:V[H]},Ta=H=>{const C=_a(H);if(!C)return;const V=C.lastIndexOf(":");if(V<=0||V+1===C.length)throw new Error(`Invalid host ${C} with no separate hostname and port!`);const L=parseInt(C.substring(V+1),10);return C[0]==="["?[C.substring(1,V-1),L]:[C.substring(0,V),L]},TL=()=>{var H;return(H=g6())===null||H===void 0?void 0:H.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((C,V)=>{this.resolve=C,this.reject=V})}wrapCallback(C){return(V,L)=>{V?this.reject(V):this.resolve(L),typeof C=="function"&&(this.promise.catch(()=>{}),C.length===1?C(V):C(V,L))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(H,C){if(H.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const V={alg:"none",type:"JWT"},L=C||"demo-project",e=H.iat||0,t=H.sub||H.user_id;if(!t)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${L}`,aud:L,iat:e,exp:e+3600,auth_time:e,sub:t,user_id:t,firebase:{sign_in_provider:"custom",identities:{}}},H);return[D7(JSON.stringify(V)),D7(JSON.stringify(i)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ba(){var H;const C=(H=g6())===null||H===void 0?void 0:H.forceEnvironment;if(C==="node")return!0;if(C==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ra(){const H=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof H=="object"&&H.id!==void 0}function ka(){return!ba()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wL(){try{return typeof indexedDB=="object"}catch{return!1}}function EL(){return new Promise((H,C)=>{try{let V=!0;const L="validate-browser-context-for-indexeddb-analytics-module",e=self.indexedDB.open(L);e.onsuccess=()=>{e.result.close(),V||self.indexedDB.deleteDatabase(L),H(!0)},e.onupgradeneeded=()=>{V=!1},e.onerror=()=>{var t;C(((t=e.error)===null||t===void 0?void 0:t.message)||"")}}catch(V){C(V)}})}function Ia(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="FirebaseError";class D5 extends Error{constructor(C,V,L){super(V),this.code=C,this.customData=L,this.name=Ba,Object.setPrototypeOf(this,D5.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,d9.prototype.create)}}class d9{constructor(C,V,L){this.service=C,this.serviceName=V,this.errors=L}create(C,...V){const L=V[0]||{},e=`${this.service}/${C}`,t=this.errors[C],i=t?Fa(t,L):"Error",r=`${this.serviceName}: ${i} (${e}).`;return new D5(e,r,L)}}function Fa(H,C){return H.replace(xa,(V,L)=>{const e=C[L];return e!=null?String(e):`<${L}?>`})}const xa=/\{\$([^}]+)}/g;function N7(H,C){if(H===C)return!0;const V=Object.keys(H),L=Object.keys(C);for(const e of V){if(!L.includes(e))return!1;const t=H[e],i=C[e];if(YC(t)&&YC(i)){if(!N7(t,i))return!1}else if(t!==i)return!1}for(const e of L)if(!V.includes(e))return!1;return!0}function YC(H){return H!==null&&typeof H=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=1e3,Na=2,Ua=4*60*60*1e3,Wa=.5;function JC(H,C=Da,V=Na){const L=C*Math.pow(V,H),e=Math.round(Wa*L*(Math.random()-.5)*2);return Math.min(Ua,L+e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H5(H){return H&&H._delegate?H._delegate:H}class o5{constructor(C,V,L){this.name=C,this.instanceFactory=V,this.type=L,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(C){return this.instantiationMode=C,this}setMultipleInstances(C){return this.multipleInstances=C,this}setServiceProps(C){return this.serviceProps=C,this}setInstanceCreatedCallback(C){return this.onInstanceCreated=C,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K5="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(C,V){this.name=C,this.container=V,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(C){const V=this.normalizeInstanceIdentifier(C);if(!this.instancesDeferred.has(V)){const L=new wa;if(this.instancesDeferred.set(V,L),this.isInitialized(V)||this.shouldAutoInitialize())try{const e=this.getOrInitializeService({instanceIdentifier:V});e&&L.resolve(e)}catch{}}return this.instancesDeferred.get(V).promise}getImmediate(C){var V;const L=this.normalizeInstanceIdentifier(C==null?void 0:C.identifier),e=(V=C==null?void 0:C.optional)!==null&&V!==void 0?V:!1;if(this.isInitialized(L)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:L})}catch(t){if(e)return null;throw t}else{if(e)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(C){if(C.name!==this.name)throw Error(`Mismatching Component ${C.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=C,!!this.shouldAutoInitialize()){if(Qa(C))try{this.getOrInitializeService({instanceIdentifier:K5})}catch{}for(const[V,L]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(V);try{const t=this.getOrInitializeService({instanceIdentifier:e});L.resolve(t)}catch{}}}}clearInstance(C=K5){this.instancesDeferred.delete(C),this.instancesOptions.delete(C),this.instances.delete(C)}async delete(){const C=Array.from(this.instances.values());await Promise.all([...C.filter(V=>"INTERNAL"in V).map(V=>V.INTERNAL.delete()),...C.filter(V=>"_delete"in V).map(V=>V._delete())])}isComponentSet(){return this.component!=null}isInitialized(C=K5){return this.instances.has(C)}getOptions(C=K5){return this.instancesOptions.get(C)||{}}initialize(C={}){const{options:V={}}=C,L=this.normalizeInstanceIdentifier(C.instanceIdentifier);if(this.isInitialized(L))throw Error(`${this.name}(${L}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const e=this.getOrInitializeService({instanceIdentifier:L,options:V});for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);L===r&&i.resolve(e)}return e}onInit(C,V){var L;const e=this.normalizeInstanceIdentifier(V),t=(L=this.onInitCallbacks.get(e))!==null&&L!==void 0?L:new Set;t.add(C),this.onInitCallbacks.set(e,t);const i=this.instances.get(e);return i&&C(i,e),()=>{t.delete(C)}}invokeOnInitCallbacks(C,V){const L=this.onInitCallbacks.get(V);if(L)for(const e of L)try{e(C,V)}catch{}}getOrInitializeService({instanceIdentifier:C,options:V={}}){let L=this.instances.get(C);if(!L&&this.component&&(L=this.component.instanceFactory(this.container,{instanceIdentifier:za(C),options:V}),this.instances.set(C,L),this.instancesOptions.set(C,V),this.invokeOnInitCallbacks(L,C),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,C,L)}catch{}return L||null}normalizeInstanceIdentifier(C=K5){return this.component?this.component.multipleInstances?C:K5:C}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function za(H){return H===K5?void 0:H}function Qa(H){return H.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(C){this.name=C,this.providers=new Map}addComponent(C){const V=this.getProvider(C.name);if(V.isComponentSet())throw new Error(`Component ${C.name} has already been registered with ${this.name}`);V.setComponent(C)}addOrOverwriteComponent(C){this.getProvider(C.name).isComponentSet()&&this.providers.delete(C.name),this.addComponent(C)}getProvider(C){if(this.providers.has(C))return this.providers.get(C);const V=new Ga(C,this);return this.providers.set(C,V),V}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var c1;(function(H){H[H.DEBUG=0]="DEBUG",H[H.VERBOSE=1]="VERBOSE",H[H.INFO=2]="INFO",H[H.WARN=3]="WARN",H[H.ERROR=4]="ERROR",H[H.SILENT=5]="SILENT"})(c1||(c1={}));const $a={debug:c1.DEBUG,verbose:c1.VERBOSE,info:c1.INFO,warn:c1.WARN,error:c1.ERROR,silent:c1.SILENT},qa=c1.INFO,Ka={[c1.DEBUG]:"log",[c1.VERBOSE]:"log",[c1.INFO]:"info",[c1.WARN]:"warn",[c1.ERROR]:"error"},Xa=(H,C,...V)=>{if(C<H.logLevel)return;const L=new Date().toISOString(),e=Ka[C];if(e)console[e](`[${L}]  ${H.name}:`,...V);else throw new Error(`Attempted to log a message with an invalid logType (value: ${C})`)};class O6{constructor(C){this.name=C,this._logLevel=qa,this._logHandler=Xa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(C){if(!(C in c1))throw new TypeError(`Invalid value "${C}" assigned to \`logLevel\``);this._logLevel=C}setLogLevel(C){this._logLevel=typeof C=="string"?$a[C]:C}get logHandler(){return this._logHandler}set logHandler(C){if(typeof C!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=C}get userLogHandler(){return this._userLogHandler}set userLogHandler(C){this._userLogHandler=C}debug(...C){this._userLogHandler&&this._userLogHandler(this,c1.DEBUG,...C),this._logHandler(this,c1.DEBUG,...C)}log(...C){this._userLogHandler&&this._userLogHandler(this,c1.VERBOSE,...C),this._logHandler(this,c1.VERBOSE,...C)}info(...C){this._userLogHandler&&this._userLogHandler(this,c1.INFO,...C),this._logHandler(this,c1.INFO,...C)}warn(...C){this._userLogHandler&&this._userLogHandler(this,c1.WARN,...C),this._logHandler(this,c1.WARN,...C)}error(...C){this._userLogHandler&&this._userLogHandler(this,c1.ERROR,...C),this._logHandler(this,c1.ERROR,...C)}}const Ya=(H,C)=>C.some(V=>H instanceof V);let CH,HH;function Ja(){return CH||(CH=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cn(){return HH||(HH=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PL=new WeakMap,x4=new WeakMap,bL=new WeakMap,o4=new WeakMap,y6=new WeakMap;function Hn(H){const C=new Promise((V,L)=>{const e=()=>{H.removeEventListener("success",t),H.removeEventListener("error",i)},t=()=>{V(y5(H.result)),e()},i=()=>{L(H.error),e()};H.addEventListener("success",t),H.addEventListener("error",i)});return C.then(V=>{V instanceof IDBCursor&&PL.set(V,H)}).catch(()=>{}),y6.set(C,H),C}function Vn(H){if(x4.has(H))return;const C=new Promise((V,L)=>{const e=()=>{H.removeEventListener("complete",t),H.removeEventListener("error",i),H.removeEventListener("abort",i)},t=()=>{V(),e()},i=()=>{L(H.error||new DOMException("AbortError","AbortError")),e()};H.addEventListener("complete",t),H.addEventListener("error",i),H.addEventListener("abort",i)});x4.set(H,C)}let D4={get(H,C,V){if(H instanceof IDBTransaction){if(C==="done")return x4.get(H);if(C==="objectStoreNames")return H.objectStoreNames||bL.get(H);if(C==="store")return V.objectStoreNames[1]?void 0:V.objectStore(V.objectStoreNames[0])}return y5(H[C])},set(H,C,V){return H[C]=V,!0},has(H,C){return H instanceof IDBTransaction&&(C==="done"||C==="store")?!0:C in H}};function Ln(H){D4=H(D4)}function en(H){return H===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(C,...V){const L=H.call(A4(this),C,...V);return bL.set(L,C.sort?C.sort():[C]),y5(L)}:Cn().includes(H)?function(...C){return H.apply(A4(this),C),y5(PL.get(this))}:function(...C){return y5(H.apply(A4(this),C))}}function tn(H){return typeof H=="function"?en(H):(H instanceof IDBTransaction&&Vn(H),Ya(H,Ja())?new Proxy(H,D4):H)}function y5(H){if(H instanceof IDBRequest)return Hn(H);if(o4.has(H))return o4.get(H);const C=tn(H);return C!==H&&(o4.set(H,C),y6.set(C,H)),C}const A4=H=>y6.get(H);function RL(H,C,{blocked:V,upgrade:L,blocking:e,terminated:t}={}){const i=indexedDB.open(H,C),r=y5(i);return L&&i.addEventListener("upgradeneeded",a=>{L(y5(i.result),a.oldVersion,a.newVersion,y5(i.transaction),a)}),V&&i.addEventListener("blocked",a=>V(a.oldVersion,a.newVersion,a)),r.then(a=>{t&&a.addEventListener("close",()=>t()),e&&a.addEventListener("versionchange",o=>e(o.oldVersion,o.newVersion,o))}).catch(()=>{}),r}const Mn=["get","getKey","getAll","getAllKeys","count"],rn=["put","add","delete","clear"],s4=new Map;function VH(H,C){if(!(H instanceof IDBDatabase&&!(C in H)&&typeof C=="string"))return;if(s4.get(C))return s4.get(C);const V=C.replace(/FromIndex$/,""),L=C!==V,e=rn.includes(V);if(!(V in(L?IDBIndex:IDBObjectStore).prototype)||!(e||Mn.includes(V)))return;const t=async function(i,...r){const a=this.transaction(i,e?"readwrite":"readonly");let o=a.store;return L&&(o=o.index(r.shift())),(await Promise.all([o[V](...r),e&&a.done]))[0]};return s4.set(C,t),t}Ln(H=>({...H,get:(C,V,L)=>VH(C,V)||H.get(C,V,L),has:(C,V)=>!!VH(C,V)||H.has(C,V)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(C){this.container=C}getPlatformInfoString(){return this.container.getProviders().map(V=>{if(nn(V)){const L=V.getImmediate();return`${L.library}/${L.version}`}else return null}).filter(V=>V).join(" ")}}function nn(H){const C=H.getComponent();return(C==null?void 0:C.type)==="VERSION"}const N4="@firebase/app",LH="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A5=new O6("@firebase/app"),on="@firebase/app-compat",An="@firebase/analytics-compat",sn="@firebase/analytics",ln="@firebase/app-check-compat",dn="@firebase/app-check",un="@firebase/auth",mn="@firebase/auth-compat",cn="@firebase/database",vn="@firebase/data-connect",hn="@firebase/database-compat",fn="@firebase/functions",Zn="@firebase/functions-compat",Sn="@firebase/installations",pn="@firebase/installations-compat",gn="@firebase/messaging",On="@firebase/messaging-compat",yn="@firebase/performance",_n="@firebase/performance-compat",Tn="@firebase/remote-config",wn="@firebase/remote-config-compat",En="@firebase/storage",Pn="@firebase/storage-compat",bn="@firebase/firestore",Rn="@firebase/vertexai",kn="@firebase/firestore-compat",In="firebase",Bn="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4="[DEFAULT]",Fn={[N4]:"fire-core",[on]:"fire-core-compat",[sn]:"fire-analytics",[An]:"fire-analytics-compat",[dn]:"fire-app-check",[ln]:"fire-app-check-compat",[un]:"fire-auth",[mn]:"fire-auth-compat",[cn]:"fire-rtdb",[vn]:"fire-data-connect",[hn]:"fire-rtdb-compat",[fn]:"fire-fn",[Zn]:"fire-fn-compat",[Sn]:"fire-iid",[pn]:"fire-iid-compat",[gn]:"fire-fcm",[On]:"fire-fcm-compat",[yn]:"fire-perf",[_n]:"fire-perf-compat",[Tn]:"fire-rc",[wn]:"fire-rc-compat",[En]:"fire-gcs",[Pn]:"fire-gcs-compat",[bn]:"fire-fst",[kn]:"fire-fst-compat",[Rn]:"fire-vertex","fire-js":"fire-js",[In]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U7=new Map,xn=new Map,W4=new Map;function eH(H,C){try{H.container.addComponent(C)}catch(V){A5.debug(`Component ${C.name} failed to register with FirebaseApp ${H.name}`,V)}}function E5(H){const C=H.name;if(W4.has(C))return A5.debug(`There were multiple attempts to register component ${C}.`),!1;W4.set(C,H);for(const V of U7.values())eH(V,H);for(const V of xn.values())eH(V,H);return!0}function z0(H,C){const V=H.container.getProvider("heartbeat").getImmediate({optional:!0});return V&&V.triggerHeartbeat(),H.container.getProvider(C)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_5=new d9("app","Firebase",Dn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(C,V,L){this._isDeleted=!1,this._options=Object.assign({},C),this._config=Object.assign({},V),this._name=V.name,this._automaticDataCollectionEnabled=V.automaticDataCollectionEnabled,this._container=L,this.container.addComponent(new o5("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(C){this.checkDestroyed(),this._automaticDataCollectionEnabled=C}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(C){this._isDeleted=C}checkDestroyed(){if(this.isDeleted)throw _5.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=Bn;function kL(H,C={}){let V=H;typeof C!="object"&&(C={name:C});const L=Object.assign({name:U4,automaticDataCollectionEnabled:!1},C),e=L.name;if(typeof e!="string"||!e)throw _5.create("bad-app-name",{appName:String(e)});if(V||(V=TL()),!V)throw _5.create("no-options");const t=U7.get(e);if(t){if(N7(V,t.options)&&N7(L,t.config))return t;throw _5.create("duplicate-app",{appName:e})}const i=new ja(e);for(const a of W4.values())i.addComponent(a);const r=new Nn(V,L,i);return U7.set(e,r),r}function IL(H=U4){const C=U7.get(H);if(!C&&H===U4&&TL())return kL();if(!C)throw _5.create("no-app",{appName:H});return C}function X2(H,C,V){var L;let e=(L=Fn[H])!==null&&L!==void 0?L:H;V&&(e+=`-${V}`);const t=e.match(/\s|\//),i=C.match(/\s|\//);if(t||i){const r=[`Unable to register library "${e}" with version "${C}":`];t&&r.push(`library name "${e}" contains illegal characters (whitespace or "/")`),t&&i&&r.push("and"),i&&r.push(`version name "${C}" contains illegal characters (whitespace or "/")`),A5.warn(r.join(" "));return}E5(new o5(`${e}-version`,()=>({library:e,version:C}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="firebase-heartbeat-database",Gn=1,k0="firebase-heartbeat-store";let l4=null;function BL(){return l4||(l4=RL(Wn,Gn,{upgrade:(H,C)=>{switch(C){case 0:try{H.createObjectStore(k0)}catch(V){console.warn(V)}}}}).catch(H=>{throw _5.create("idb-open",{originalErrorMessage:H.message})})),l4}async function zn(H){try{const V=(await BL()).transaction(k0),L=await V.objectStore(k0).get(FL(H));return await V.done,L}catch(C){if(C instanceof D5)A5.warn(C.message);else{const V=_5.create("idb-get",{originalErrorMessage:C==null?void 0:C.message});A5.warn(V.message)}}}async function tH(H,C){try{const L=(await BL()).transaction(k0,"readwrite");await L.objectStore(k0).put(C,FL(H)),await L.done}catch(V){if(V instanceof D5)A5.warn(V.message);else{const L=_5.create("idb-set",{originalErrorMessage:V==null?void 0:V.message});A5.warn(L.message)}}}function FL(H){return`${H.name}!${H.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=1024,jn=30*24*60*60*1e3;class $n{constructor(C){this.container=C,this._heartbeatsCache=null;const V=this.container.getProvider("app").getImmediate();this._storage=new Kn(V),this._heartbeatsCachePromise=this._storage.read().then(L=>(this._heartbeatsCache=L,L))}async triggerHeartbeat(){var C,V;try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=MH();return((C=this._heartbeatsCache)===null||C===void 0?void 0:C.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((V=this._heartbeatsCache)===null||V===void 0?void 0:V.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(i=>i.date===t)?void 0:(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=jn}),this._storage.overwrite(this._heartbeatsCache))}catch(L){A5.warn(L)}}async getHeartbeatsHeader(){var C;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((C=this._heartbeatsCache)===null||C===void 0?void 0:C.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const V=MH(),{heartbeatsToSend:L,unsentEntries:e}=qn(this._heartbeatsCache.heartbeats),t=D7(JSON.stringify({version:2,heartbeats:L}));return this._heartbeatsCache.lastSentHeartbeatDate=V,e.length>0?(this._heartbeatsCache.heartbeats=e,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),t}catch(V){return A5.warn(V),""}}}function MH(){return new Date().toISOString().substring(0,10)}function qn(H,C=Qn){const V=[];let L=H.slice();for(const e of H){const t=V.find(i=>i.agent===e.agent);if(t){if(t.dates.push(e.date),iH(V)>C){t.dates.pop();break}}else if(V.push({agent:e.agent,dates:[e.date]}),iH(V)>C){V.pop();break}L=L.slice(1)}return{heartbeatsToSend:V,unsentEntries:L}}class Kn{constructor(C){this.app=C,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wL()?EL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const V=await zn(this.app);return V!=null&&V.heartbeats?V:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(C){var V;if(await this._canUseIndexedDBPromise){const e=await this.read();return tH(this.app,{lastSentHeartbeatDate:(V=C.lastSentHeartbeatDate)!==null&&V!==void 0?V:e.lastSentHeartbeatDate,heartbeats:C.heartbeats})}else return}async add(C){var V;if(await this._canUseIndexedDBPromise){const e=await this.read();return tH(this.app,{lastSentHeartbeatDate:(V=C.lastSentHeartbeatDate)!==null&&V!==void 0?V:e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...C.heartbeats]})}else return}}function iH(H){return D7(JSON.stringify({version:2,heartbeats:H})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(H){E5(new o5("platform-logger",C=>new an(C),"PRIVATE")),E5(new o5("heartbeat",C=>new $n(C),"PRIVATE")),X2(N4,LH,H),X2(N4,LH,"esm2017"),X2("fire-js","")}Xn("");var rH=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var H3,xL;(function(){var H;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function C(S,v){function Z(){}Z.prototype=v.prototype,S.D=v.prototype,S.prototype=new Z,S.prototype.constructor=S,S.C=function(p,g,O){for(var f=Array(arguments.length-2),o2=2;o2<arguments.length;o2++)f[o2-2]=arguments[o2];return v.prototype[g].apply(p,f)}}function V(){this.blockSize=-1}function L(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}C(L,V),L.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function e(S,v,Z){Z||(Z=0);var p=Array(16);if(typeof v=="string")for(var g=0;16>g;++g)p[g]=v.charCodeAt(Z++)|v.charCodeAt(Z++)<<8|v.charCodeAt(Z++)<<16|v.charCodeAt(Z++)<<24;else for(g=0;16>g;++g)p[g]=v[Z++]|v[Z++]<<8|v[Z++]<<16|v[Z++]<<24;v=S.g[0],Z=S.g[1],g=S.g[2];var O=S.g[3],f=v+(O^Z&(g^O))+p[0]+3614090360&4294967295;v=Z+(f<<7&4294967295|f>>>25),f=O+(g^v&(Z^g))+p[1]+3905402710&4294967295,O=v+(f<<12&4294967295|f>>>20),f=g+(Z^O&(v^Z))+p[2]+606105819&4294967295,g=O+(f<<17&4294967295|f>>>15),f=Z+(v^g&(O^v))+p[3]+3250441966&4294967295,Z=g+(f<<22&4294967295|f>>>10),f=v+(O^Z&(g^O))+p[4]+4118548399&4294967295,v=Z+(f<<7&4294967295|f>>>25),f=O+(g^v&(Z^g))+p[5]+1200080426&4294967295,O=v+(f<<12&4294967295|f>>>20),f=g+(Z^O&(v^Z))+p[6]+2821735955&4294967295,g=O+(f<<17&4294967295|f>>>15),f=Z+(v^g&(O^v))+p[7]+4249261313&4294967295,Z=g+(f<<22&4294967295|f>>>10),f=v+(O^Z&(g^O))+p[8]+1770035416&4294967295,v=Z+(f<<7&4294967295|f>>>25),f=O+(g^v&(Z^g))+p[9]+2336552879&4294967295,O=v+(f<<12&4294967295|f>>>20),f=g+(Z^O&(v^Z))+p[10]+4294925233&4294967295,g=O+(f<<17&4294967295|f>>>15),f=Z+(v^g&(O^v))+p[11]+2304563134&4294967295,Z=g+(f<<22&4294967295|f>>>10),f=v+(O^Z&(g^O))+p[12]+1804603682&4294967295,v=Z+(f<<7&4294967295|f>>>25),f=O+(g^v&(Z^g))+p[13]+4254626195&4294967295,O=v+(f<<12&4294967295|f>>>20),f=g+(Z^O&(v^Z))+p[14]+2792965006&4294967295,g=O+(f<<17&4294967295|f>>>15),f=Z+(v^g&(O^v))+p[15]+1236535329&4294967295,Z=g+(f<<22&4294967295|f>>>10),f=v+(g^O&(Z^g))+p[1]+4129170786&4294967295,v=Z+(f<<5&4294967295|f>>>27),f=O+(Z^g&(v^Z))+p[6]+3225465664&4294967295,O=v+(f<<9&4294967295|f>>>23),f=g+(v^Z&(O^v))+p[11]+643717713&4294967295,g=O+(f<<14&4294967295|f>>>18),f=Z+(O^v&(g^O))+p[0]+3921069994&4294967295,Z=g+(f<<20&4294967295|f>>>12),f=v+(g^O&(Z^g))+p[5]+3593408605&4294967295,v=Z+(f<<5&4294967295|f>>>27),f=O+(Z^g&(v^Z))+p[10]+38016083&4294967295,O=v+(f<<9&4294967295|f>>>23),f=g+(v^Z&(O^v))+p[15]+3634488961&4294967295,g=O+(f<<14&4294967295|f>>>18),f=Z+(O^v&(g^O))+p[4]+3889429448&4294967295,Z=g+(f<<20&4294967295|f>>>12),f=v+(g^O&(Z^g))+p[9]+568446438&4294967295,v=Z+(f<<5&4294967295|f>>>27),f=O+(Z^g&(v^Z))+p[14]+3275163606&4294967295,O=v+(f<<9&4294967295|f>>>23),f=g+(v^Z&(O^v))+p[3]+4107603335&4294967295,g=O+(f<<14&4294967295|f>>>18),f=Z+(O^v&(g^O))+p[8]+1163531501&4294967295,Z=g+(f<<20&4294967295|f>>>12),f=v+(g^O&(Z^g))+p[13]+2850285829&4294967295,v=Z+(f<<5&4294967295|f>>>27),f=O+(Z^g&(v^Z))+p[2]+4243563512&4294967295,O=v+(f<<9&4294967295|f>>>23),f=g+(v^Z&(O^v))+p[7]+1735328473&4294967295,g=O+(f<<14&4294967295|f>>>18),f=Z+(O^v&(g^O))+p[12]+2368359562&4294967295,Z=g+(f<<20&4294967295|f>>>12),f=v+(Z^g^O)+p[5]+4294588738&4294967295,v=Z+(f<<4&4294967295|f>>>28),f=O+(v^Z^g)+p[8]+2272392833&4294967295,O=v+(f<<11&4294967295|f>>>21),f=g+(O^v^Z)+p[11]+1839030562&4294967295,g=O+(f<<16&4294967295|f>>>16),f=Z+(g^O^v)+p[14]+4259657740&4294967295,Z=g+(f<<23&4294967295|f>>>9),f=v+(Z^g^O)+p[1]+2763975236&4294967295,v=Z+(f<<4&4294967295|f>>>28),f=O+(v^Z^g)+p[4]+1272893353&4294967295,O=v+(f<<11&4294967295|f>>>21),f=g+(O^v^Z)+p[7]+4139469664&4294967295,g=O+(f<<16&4294967295|f>>>16),f=Z+(g^O^v)+p[10]+3200236656&4294967295,Z=g+(f<<23&4294967295|f>>>9),f=v+(Z^g^O)+p[13]+681279174&4294967295,v=Z+(f<<4&4294967295|f>>>28),f=O+(v^Z^g)+p[0]+3936430074&4294967295,O=v+(f<<11&4294967295|f>>>21),f=g+(O^v^Z)+p[3]+3572445317&4294967295,g=O+(f<<16&4294967295|f>>>16),f=Z+(g^O^v)+p[6]+76029189&4294967295,Z=g+(f<<23&4294967295|f>>>9),f=v+(Z^g^O)+p[9]+3654602809&4294967295,v=Z+(f<<4&4294967295|f>>>28),f=O+(v^Z^g)+p[12]+3873151461&4294967295,O=v+(f<<11&4294967295|f>>>21),f=g+(O^v^Z)+p[15]+530742520&4294967295,g=O+(f<<16&4294967295|f>>>16),f=Z+(g^O^v)+p[2]+3299628645&4294967295,Z=g+(f<<23&4294967295|f>>>9),f=v+(g^(Z|~O))+p[0]+4096336452&4294967295,v=Z+(f<<6&4294967295|f>>>26),f=O+(Z^(v|~g))+p[7]+1126891415&4294967295,O=v+(f<<10&4294967295|f>>>22),f=g+(v^(O|~Z))+p[14]+2878612391&4294967295,g=O+(f<<15&4294967295|f>>>17),f=Z+(O^(g|~v))+p[5]+4237533241&4294967295,Z=g+(f<<21&4294967295|f>>>11),f=v+(g^(Z|~O))+p[12]+1700485571&4294967295,v=Z+(f<<6&4294967295|f>>>26),f=O+(Z^(v|~g))+p[3]+2399980690&4294967295,O=v+(f<<10&4294967295|f>>>22),f=g+(v^(O|~Z))+p[10]+4293915773&4294967295,g=O+(f<<15&4294967295|f>>>17),f=Z+(O^(g|~v))+p[1]+2240044497&4294967295,Z=g+(f<<21&4294967295|f>>>11),f=v+(g^(Z|~O))+p[8]+1873313359&4294967295,v=Z+(f<<6&4294967295|f>>>26),f=O+(Z^(v|~g))+p[15]+4264355552&4294967295,O=v+(f<<10&4294967295|f>>>22),f=g+(v^(O|~Z))+p[6]+2734768916&4294967295,g=O+(f<<15&4294967295|f>>>17),f=Z+(O^(g|~v))+p[13]+1309151649&4294967295,Z=g+(f<<21&4294967295|f>>>11),f=v+(g^(Z|~O))+p[4]+4149444226&4294967295,v=Z+(f<<6&4294967295|f>>>26),f=O+(Z^(v|~g))+p[11]+3174756917&4294967295,O=v+(f<<10&4294967295|f>>>22),f=g+(v^(O|~Z))+p[2]+718787259&4294967295,g=O+(f<<15&4294967295|f>>>17),f=Z+(O^(g|~v))+p[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(g+(f<<21&4294967295|f>>>11))&4294967295,S.g[2]=S.g[2]+g&4294967295,S.g[3]=S.g[3]+O&4294967295}L.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var Z=v-this.blockSize,p=this.B,g=this.h,O=0;O<v;){if(g==0)for(;O<=Z;)e(this,S,O),O+=this.blockSize;if(typeof S=="string"){for(;O<v;)if(p[g++]=S.charCodeAt(O++),g==this.blockSize){e(this,p),g=0;break}}else for(;O<v;)if(p[g++]=S[O++],g==this.blockSize){e(this,p),g=0;break}}this.h=g,this.o+=v},L.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var Z=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=Z&255,Z/=256;for(this.u(S),S=Array(16),v=Z=0;4>v;++v)for(var p=0;32>p;p+=8)S[Z++]=this.g[v]>>>p&255;return S};function t(S,v){var Z=r;return Object.prototype.hasOwnProperty.call(Z,S)?Z[S]:Z[S]=v(S)}function i(S,v){this.h=v;for(var Z=[],p=!0,g=S.length-1;0<=g;g--){var O=S[g]|0;p&&O==v||(Z[g]=O,p=!1)}this.g=Z}var r={};function a(S){return-128<=S&&128>S?t(S,function(v){return new i([v|0],0>v?-1:0)}):new i([S|0],0>S?-1:0)}function o(S){if(isNaN(S)||!isFinite(S))return l;if(0>S)return k(o(-S));for(var v=[],Z=1,p=0;S>=Z;p++)v[p]=S/Z|0,Z*=4294967296;return new i(v,0)}function s(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return k(s(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var Z=o(Math.pow(v,8)),p=l,g=0;g<S.length;g+=8){var O=Math.min(8,S.length-g),f=parseInt(S.substring(g,g+O),v);8>O?(O=o(Math.pow(v,O)),p=p.j(O).add(o(f))):(p=p.j(Z),p=p.add(o(f)))}return p}var l=a(0),u=a(1),c=a(16777216);H=i.prototype,H.m=function(){if(P(this))return-k(this).m();for(var S=0,v=1,Z=0;Z<this.g.length;Z++){var p=this.i(Z);S+=(0<=p?p:4294967296+p)*v,v*=4294967296}return S},H.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(w(this))return"0";if(P(this))return"-"+k(this).toString(S);for(var v=o(Math.pow(S,6)),Z=this,p="";;){var g=N(Z,v).g;Z=x(Z,g.j(v));var O=((0<Z.g.length?Z.g[0]:Z.h)>>>0).toString(S);if(Z=g,w(Z))return O+p;for(;6>O.length;)O="0"+O;p=O+p}},H.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function w(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function P(S){return S.h==-1}H.l=function(S){return S=x(this,S),P(S)?-1:w(S)?0:1};function k(S){for(var v=S.g.length,Z=[],p=0;p<v;p++)Z[p]=~S.g[p];return new i(Z,~S.h).add(u)}H.abs=function(){return P(this)?k(this):this},H.add=function(S){for(var v=Math.max(this.g.length,S.g.length),Z=[],p=0,g=0;g<=v;g++){var O=p+(this.i(g)&65535)+(S.i(g)&65535),f=(O>>>16)+(this.i(g)>>>16)+(S.i(g)>>>16);p=f>>>16,O&=65535,f&=65535,Z[g]=f<<16|O}return new i(Z,Z[Z.length-1]&-2147483648?-1:0)};function x(S,v){return S.add(k(v))}H.j=function(S){if(w(this)||w(S))return l;if(P(this))return P(S)?k(this).j(k(S)):k(k(this).j(S));if(P(S))return k(this.j(k(S)));if(0>this.l(c)&&0>S.l(c))return o(this.m()*S.m());for(var v=this.g.length+S.g.length,Z=[],p=0;p<2*v;p++)Z[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<S.g.length;g++){var O=this.i(p)>>>16,f=this.i(p)&65535,o2=S.i(g)>>>16,P2=S.i(g)&65535;Z[2*p+2*g]+=f*P2,E(Z,2*p+2*g),Z[2*p+2*g+1]+=O*P2,E(Z,2*p+2*g+1),Z[2*p+2*g+1]+=f*o2,E(Z,2*p+2*g+1),Z[2*p+2*g+2]+=O*o2,E(Z,2*p+2*g+2)}for(p=0;p<v;p++)Z[p]=Z[2*p+1]<<16|Z[2*p];for(p=v;p<2*v;p++)Z[p]=0;return new i(Z,0)};function E(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function B(S,v){this.g=S,this.h=v}function N(S,v){if(w(v))throw Error("division by zero");if(w(S))return new B(l,l);if(P(S))return v=N(k(S),v),new B(k(v.g),k(v.h));if(P(v))return v=N(S,k(v)),new B(k(v.g),v.h);if(30<S.g.length){if(P(S)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var Z=u,p=v;0>=p.l(S);)Z=e1(Z),p=e1(p);var g=n1(Z,1),O=n1(p,1);for(p=n1(p,2),Z=n1(Z,2);!w(p);){var f=O.add(p);0>=f.l(S)&&(g=g.add(Z),O=f),p=n1(p,1),Z=n1(Z,1)}return v=x(S,g.j(v)),new B(g,v)}for(g=l;0<=S.l(v);){for(Z=Math.max(1,Math.floor(S.m()/v.m())),p=Math.ceil(Math.log(Z)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),O=o(Z),f=O.j(v);P(f)||0<f.l(S);)Z-=p,O=o(Z),f=O.j(v);w(O)&&(O=u),g=g.add(O),S=x(S,f)}return new B(g,S)}H.A=function(S){return N(this,S).h},H.and=function(S){for(var v=Math.max(this.g.length,S.g.length),Z=[],p=0;p<v;p++)Z[p]=this.i(p)&S.i(p);return new i(Z,this.h&S.h)},H.or=function(S){for(var v=Math.max(this.g.length,S.g.length),Z=[],p=0;p<v;p++)Z[p]=this.i(p)|S.i(p);return new i(Z,this.h|S.h)},H.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),Z=[],p=0;p<v;p++)Z[p]=this.i(p)^S.i(p);return new i(Z,this.h^S.h)};function e1(S){for(var v=S.g.length+1,Z=[],p=0;p<v;p++)Z[p]=S.i(p)<<1|S.i(p-1)>>>31;return new i(Z,S.h)}function n1(S,v){var Z=v>>5;v%=32;for(var p=S.g.length-Z,g=[],O=0;O<p;O++)g[O]=0<v?S.i(O+Z)>>>v|S.i(O+Z+1)<<32-v:S.i(O+Z);return new i(g,S.h)}L.prototype.digest=L.prototype.v,L.prototype.reset=L.prototype.s,L.prototype.update=L.prototype.u,xL=L,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.A,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=o,i.fromString=s,H3=i}).apply(typeof rH<"u"?rH:typeof self<"u"?self:typeof window<"u"?window:{});var d7=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var DL,A0,NL,y7,G4,UL,WL,GL;(function(){var H,C=typeof Object.defineProperties=="function"?Object.defineProperty:function(M,n,A){return M==Array.prototype||M==Object.prototype||(M[n]=A.value),M};function V(M){M=[typeof globalThis=="object"&&globalThis,M,typeof window=="object"&&window,typeof self=="object"&&self,typeof d7=="object"&&d7];for(var n=0;n<M.length;++n){var A=M[n];if(A&&A.Math==Math)return A}throw Error("Cannot find global object")}var L=V(this);function e(M,n){if(n)C:{var A=L;M=M.split(".");for(var d=0;d<M.length-1;d++){var y=M[d];if(!(y in A))break C;A=A[y]}M=M[M.length-1],d=A[M],n=n(d),n!=d&&n!=null&&C(A,M,{configurable:!0,writable:!0,value:n})}}function t(M,n){M instanceof String&&(M+="");var A=0,d=!1,y={next:function(){if(!d&&A<M.length){var T=A++;return{value:n(T,M[T]),done:!1}}return d=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}e("Array.prototype.values",function(M){return M||function(){return t(this,function(n,A){return A})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},r=this||self;function a(M){var n=typeof M;return n=n!="object"?n:M?Array.isArray(M)?"array":n:"null",n=="array"||n=="object"&&typeof M.length=="number"}function o(M){var n=typeof M;return n=="object"&&M!=null||n=="function"}function s(M,n,A){return M.call.apply(M.bind,arguments)}function l(M,n,A){if(!M)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,d),M.apply(n,y)}}return function(){return M.apply(n,arguments)}}function u(M,n,A){return u=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?s:l,u.apply(null,arguments)}function c(M,n){var A=Array.prototype.slice.call(arguments,1);return function(){var d=A.slice();return d.push.apply(d,arguments),M.apply(this,d)}}function w(M,n){function A(){}A.prototype=n.prototype,M.aa=n.prototype,M.prototype=new A,M.prototype.constructor=M,M.Qb=function(d,y,T){for(var Q=Array(arguments.length-2),_1=2;_1<arguments.length;_1++)Q[_1-2]=arguments[_1];return n.prototype[y].apply(d,Q)}}function P(M){const n=M.length;if(0<n){const A=Array(n);for(let d=0;d<n;d++)A[d]=M[d];return A}return[]}function k(M,n){for(let A=1;A<arguments.length;A++){const d=arguments[A];if(a(d)){const y=M.length||0,T=d.length||0;M.length=y+T;for(let Q=0;Q<T;Q++)M[y+Q]=d[Q]}else M.push(d)}}class x{constructor(n,A){this.i=n,this.j=A,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}function E(M){return/^[\s\xa0]*$/.test(M)}function B(){var M=r.navigator;return M&&(M=M.userAgent)?M:""}function N(M){return N[" "](M),M}N[" "]=function(){};var e1=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function n1(M,n,A){for(const d in M)n.call(A,M[d],d,M)}function S(M,n){for(const A in M)n.call(void 0,M[A],A,M)}function v(M){const n={};for(const A in M)n[A]=M[A];return n}const Z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(M,n){let A,d;for(let y=1;y<arguments.length;y++){d=arguments[y];for(A in d)M[A]=d[A];for(let T=0;T<Z.length;T++)A=Z[T],Object.prototype.hasOwnProperty.call(d,A)&&(M[A]=d[A])}}function g(M){var n=1;M=M.split(":");const A=[];for(;0<n&&M.length;)A.push(M.shift()),n--;return M.length&&A.push(M.join(":")),A}function O(M){r.setTimeout(()=>{throw M},0)}function f(){var M=S2;let n=null;return M.g&&(n=M.g,M.g=M.g.next,M.g||(M.h=null),n.next=null),n}class o2{constructor(){this.h=this.g=null}add(n,A){const d=P2.get();d.set(n,A),this.h?this.h.next=d:this.g=d,this.h=d}}var P2=new x(()=>new D1,M=>M.reset());class D1{constructor(){this.next=this.g=this.h=null}set(n,A){this.h=n,this.g=A,this.next=null}reset(){this.next=this.g=this.h=null}}let d1,A1=!1,S2=new o2,F2=()=>{const M=r.Promise.resolve(void 0);d1=()=>{M.then(b2)}};var b2=()=>{for(var M;M=f();){try{M.h.call(M.g)}catch(A){O(A)}var n=P2;n.j(M),100>n.h&&(n.h++,M.next=n.g,n.g=M)}A1=!1};function k1(){this.s=this.s,this.C=this.C}k1.prototype.s=!1,k1.prototype.ma=function(){this.s||(this.s=!0,this.N())},k1.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I1(M,n){this.type=M,this.g=this.target=n,this.defaultPrevented=!1}I1.prototype.h=function(){this.defaultPrevented=!0};var u5=function(){if(!r.addEventListener||!Object.defineProperty)return!1;var M=!1,n=Object.defineProperty({},"passive",{get:function(){M=!0}});try{const A=()=>{};r.addEventListener("test",A,n),r.removeEventListener("test",A,n)}catch{}return M}();function z2(M,n){if(I1.call(this,M?M.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,M){var A=this.type=M.type,d=M.changedTouches&&M.changedTouches.length?M.changedTouches[0]:null;if(this.target=M.target||M.srcElement,this.g=n,n=M.relatedTarget){if(e1){C:{try{N(n.nodeName);var y=!0;break C}catch{}y=!1}y||(n=null)}}else A=="mouseover"?n=M.fromElement:A=="mouseout"&&(n=M.toElement);this.relatedTarget=n,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=M.clientX!==void 0?M.clientX:M.pageX,this.clientY=M.clientY!==void 0?M.clientY:M.pageY,this.screenX=M.screenX||0,this.screenY=M.screenY||0),this.button=M.button,this.key=M.key||"",this.ctrlKey=M.ctrlKey,this.altKey=M.altKey,this.shiftKey=M.shiftKey,this.metaKey=M.metaKey,this.pointerId=M.pointerId||0,this.pointerType=typeof M.pointerType=="string"?M.pointerType:m2[M.pointerType]||"",this.state=M.state,this.i=M,M.defaultPrevented&&z2.aa.h.call(this)}}w(z2,I1);var m2={2:"touch",3:"pen",4:"mouse"};z2.prototype.h=function(){z2.aa.h.call(this);var M=this.i;M.preventDefault?M.preventDefault():M.returnValue=!1};var R="closure_listenable_"+(1e6*Math.random()|0),K=0;function $(M,n,A,d,y){this.listener=M,this.proxy=null,this.src=n,this.type=A,this.capture=!!d,this.ha=y,this.key=++K,this.da=this.fa=!1}function Y(M){M.da=!0,M.listener=null,M.proxy=null,M.src=null,M.ha=null}function u1(M){this.src=M,this.g={},this.h=0}u1.prototype.add=function(M,n,A,d,y){var T=M.toString();M=this.g[T],M||(M=this.g[T]=[],this.h++);var Q=m(M,n,d,y);return-1<Q?(n=M[Q],A||(n.fa=!1)):(n=new $(n,this.src,T,!!d,y),n.fa=A,M.push(n)),n};function y1(M,n){var A=n.type;if(A in M.g){var d=M.g[A],y=Array.prototype.indexOf.call(d,n,void 0),T;(T=0<=y)&&Array.prototype.splice.call(d,y,1),T&&(Y(n),M.g[A].length==0&&(delete M.g[A],M.h--))}}function m(M,n,A,d){for(var y=0;y<M.length;++y){var T=M[y];if(!T.da&&T.listener==n&&T.capture==!!A&&T.ha==d)return y}return-1}var h="closure_lm_"+(1e6*Math.random()|0),_={};function F(M,n,A,d,y){if(Array.isArray(n)){for(var T=0;T<n.length;T++)F(M,n[T],A,d,y);return null}return A=C1(A),M&&M[R]?M.K(n,A,o(d)?!!d.capture:!!d,y):b(M,n,A,!1,d,y)}function b(M,n,A,d,y,T){if(!n)throw Error("Invalid event type");var Q=o(y)?!!y.capture:!!y,_1=V1(M);if(_1||(M[h]=_1=new u1(M)),A=_1.add(n,A,d,Q,T),A.proxy)return A;if(d=U(),A.proxy=d,d.src=M,d.listener=A,M.addEventListener)u5||(y=Q),y===void 0&&(y=!1),M.addEventListener(n.toString(),d,y);else if(M.attachEvent)M.attachEvent(G(n.toString()),d);else if(M.addListener&&M.removeListener)M.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return A}function U(){function M(A){return n.call(M.src,M.listener,A)}const n=W;return M}function j(M,n,A,d,y){if(Array.isArray(n))for(var T=0;T<n.length;T++)j(M,n[T],A,d,y);else d=o(d)?!!d.capture:!!d,A=C1(A),M&&M[R]?(M=M.i,n=String(n).toString(),n in M.g&&(T=M.g[n],A=m(T,A,d,y),-1<A&&(Y(T[A]),Array.prototype.splice.call(T,A,1),T.length==0&&(delete M.g[n],M.h--)))):M&&(M=V1(M))&&(n=M.g[n.toString()],M=-1,n&&(M=m(n,A,d,y)),(A=-1<M?n[M]:null)&&z(A))}function z(M){if(typeof M!="number"&&M&&!M.da){var n=M.src;if(n&&n[R])y1(n.i,M);else{var A=M.type,d=M.proxy;n.removeEventListener?n.removeEventListener(A,d,M.capture):n.detachEvent?n.detachEvent(G(A),d):n.addListener&&n.removeListener&&n.removeListener(d),(A=V1(n))?(y1(A,M),A.h==0&&(A.src=null,n[h]=null)):Y(M)}}}function G(M){return M in _?_[M]:_[M]="on"+M}function W(M,n){if(M.da)M=!0;else{n=new z2(n,this);var A=M.listener,d=M.ha||M.src;M.fa&&z(M),M=A.call(d,n)}return M}function V1(M){return M=M[h],M instanceof u1?M:null}var q="__closure_events_fn_"+(1e9*Math.random()>>>0);function C1(M){return typeof M=="function"?M:(M[q]||(M[q]=function(n){return M.handleEvent(n)}),M[q])}function J(){k1.call(this),this.i=new u1(this),this.M=this,this.F=null}w(J,k1),J.prototype[R]=!0,J.prototype.removeEventListener=function(M,n,A,d){j(this,M,n,A,d)};function t1(M,n){var A,d=M.F;if(d)for(A=[];d;d=d.F)A.push(d);if(M=M.M,d=n.type||n,typeof n=="string")n=new I1(n,M);else if(n instanceof I1)n.target=n.target||M;else{var y=n;n=new I1(d,M),p(n,y)}if(y=!0,A)for(var T=A.length-1;0<=T;T--){var Q=n.g=A[T];y=Z1(Q,d,!0,n)&&y}if(Q=n.g=M,y=Z1(Q,d,!0,n)&&y,y=Z1(Q,d,!1,n)&&y,A)for(T=0;T<A.length;T++)Q=n.g=A[T],y=Z1(Q,d,!1,n)&&y}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var M=this.i,n;for(n in M.g){for(var A=M.g[n],d=0;d<A.length;d++)Y(A[d]);delete M.g[n],M.h--}}this.F=null},J.prototype.K=function(M,n,A,d){return this.i.add(String(M),n,!1,A,d)},J.prototype.L=function(M,n,A,d){return this.i.add(String(M),n,!0,A,d)};function Z1(M,n,A,d){if(n=M.i.g[String(n)],!n)return!0;n=n.concat();for(var y=!0,T=0;T<n.length;++T){var Q=n[T];if(Q&&!Q.da&&Q.capture==A){var _1=Q.listener,K1=Q.ha||Q.src;Q.fa&&y1(M.i,Q),y=_1.call(K1,d)!==!1&&y}}return y&&!d.defaultPrevented}function h1(M,n,A){if(typeof M=="function")A&&(M=u(M,A));else if(M&&typeof M.handleEvent=="function")M=u(M.handleEvent,M);else throw Error("Invalid listener argument");return 2147483647<Number(n)?-1:r.setTimeout(M,n||0)}function C2(M){M.g=h1(()=>{M.g=null,M.i&&(M.i=!1,C2(M))},M.l);const n=M.h;M.h=null,M.m.apply(null,n)}class Q1 extends k1{constructor(n,A){super(),this.m=n,this.l=A,this.h=null,this.i=!1,this.g=null}j(n){this.h=arguments,this.g?this.i=!0:C2(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function q1(M){k1.call(this),this.h=M,this.g={}}w(q1,k1);var H2=[];function m5(M){n1(M.g,function(n,A){this.g.hasOwnProperty(A)&&z(n)},M),M.g={}}q1.prototype.N=function(){q1.aa.N.call(this),m5(this)},q1.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var o3=r.JSON.stringify,A2=r.JSON.parse,R2=class{stringify(M){return r.JSON.stringify(M,void 0)}parse(M){return r.JSON.parse(M,void 0)}};function A3(){}A3.prototype.h=null;function a8(M){return M.h||(M.h=M.i())}function n8(){}var q3={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function I9(){I1.call(this,"d")}w(I9,I1);function B9(){I1.call(this,"c")}w(B9,I1);var W5={},o8=null;function X0(){return o8=o8||new J}W5.La="serverreachability";function A8(M){I1.call(this,W5.La,M)}w(A8,I1);function K3(M){const n=X0();t1(n,new A8(n))}W5.STAT_EVENT="statevent";function s8(M,n){I1.call(this,W5.STAT_EVENT,M),this.stat=n}w(s8,I1);function s2(M){const n=X0();t1(n,new s8(n,M))}W5.Ma="timingevent";function l8(M,n){I1.call(this,W5.Ma,M),this.size=n}w(l8,I1);function X3(M,n){if(typeof M!="function")throw Error("Fn must not be null and must be a function");return r.setTimeout(function(){M()},n)}function Y3(){this.g=!0}Y3.prototype.xa=function(){this.g=!1};function _t(M,n,A,d,y,T){M.info(function(){if(M.g)if(T)for(var Q="",_1=T.split("&"),K1=0;K1<_1.length;K1++){var f1=_1[K1].split("=");if(1<f1.length){var V2=f1[0];f1=f1[1];var L2=V2.split("_");Q=2<=L2.length&&L2[1]=="type"?Q+(V2+"="+f1+"&"):Q+(V2+"=redacted&")}}else Q=null;else Q=T;return"XMLHTTP REQ ("+d+") [attempt "+y+"]: "+n+`
`+A+`
`+Q})}function Tt(M,n,A,d,y,T,Q){M.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+y+"]: "+n+`
`+A+`
`+T+" "+Q})}function s3(M,n,A,d){M.info(function(){return"XMLHTTP TEXT ("+n+"): "+Et(M,A)+(d?" "+d:"")})}function wt(M,n){M.info(function(){return"TIMEOUT: "+n})}Y3.prototype.info=function(){};function Et(M,n){if(!M.g)return n;if(!n)return null;try{var A=JSON.parse(n);if(A){for(M=0;M<A.length;M++)if(Array.isArray(A[M])){var d=A[M];if(!(2>d.length)){var y=d[1];if(Array.isArray(y)&&!(1>y.length)){var T=y[0];if(T!="noop"&&T!="stop"&&T!="close")for(var Q=1;Q<y.length;Q++)y[Q]=""}}}}return o3(A)}catch{return n}}var Y0={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},d8={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},F9;function J0(){}w(J0,A3),J0.prototype.g=function(){return new XMLHttpRequest},J0.prototype.i=function(){return{}},F9=new J0;function c5(M,n,A,d){this.j=M,this.i=n,this.l=A,this.R=d||1,this.U=new q1(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new u8}function u8(){this.i=null,this.g="",this.h=!1}var m8={},x9={};function D9(M,n,A){M.L=1,M.v=L7(e5(n)),M.m=A,M.P=!0,c8(M,null)}function c8(M,n){M.F=Date.now(),C7(M),M.A=e5(M.v);var A=M.A,d=M.R;Array.isArray(d)||(d=[String(d)]),P8(A.i,"t",d),M.C=0,A=M.j.J,M.h=new u8,M.g=K8(M.j,A?n:null,!M.m),0<M.O&&(M.M=new Q1(u(M.Y,M,M.g),M.O)),n=M.U,A=M.g,d=M.ca;var y="readystatechange";Array.isArray(y)||(y&&(H2[0]=y.toString()),y=H2);for(var T=0;T<y.length;T++){var Q=F(A,y[T],d||n.handleEvent,!1,n.h||n);if(!Q)break;n.g[Q.key]=Q}n=M.H?v(M.H):{},M.m?(M.u||(M.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",M.g.ea(M.A,M.u,M.m,n)):(M.u="GET",M.g.ea(M.A,M.u,null,n)),K3(),_t(M.i,M.u,M.A,M.l,M.R,M.m)}c5.prototype.ca=function(M){M=M.target;const n=this.M;n&&t5(M)==3?n.j():this.Y(M)},c5.prototype.Y=function(M){try{if(M==this.g)C:{const L2=t5(this.g);var n=this.g.Ba();const u3=this.g.Z();if(!(3>L2)&&(L2!=3||this.g&&(this.h.h||this.g.oa()||x8(this.g)))){this.J||L2!=4||n==7||(n==8||0>=u3?K3(3):K3(2)),N9(this);var A=this.g.Z();this.X=A;H:if(v8(this)){var d=x8(this.g);M="";var y=d.length,T=t5(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){G5(this),J3(this);var Q="";break H}this.h.i=new r.TextDecoder}for(n=0;n<y;n++)this.h.h=!0,M+=this.h.i.decode(d[n],{stream:!(T&&n==y-1)});d.length=0,this.h.g+=M,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=A==200,Tt(this.i,this.u,this.A,this.l,this.R,L2,A),this.o){if(this.T&&!this.K){H:{if(this.g){var _1,K1=this.g;if((_1=K1.g?K1.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(_1)){var f1=_1;break H}}f1=null}if(A=f1)s3(this.i,this.l,A,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,U9(this,A);else{this.o=!1,this.s=3,s2(12),G5(this),J3(this);break C}}if(this.P){A=!0;let x2;for(;!this.J&&this.C<Q.length;)if(x2=Pt(this,Q),x2==x9){L2==4&&(this.s=4,s2(14),A=!1),s3(this.i,this.l,null,"[Incomplete Response]");break}else if(x2==m8){this.s=4,s2(15),s3(this.i,this.l,Q,"[Invalid Chunk]"),A=!1;break}else s3(this.i,this.l,x2,null),U9(this,x2);if(v8(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),L2!=4||Q.length!=0||this.h.h||(this.s=1,s2(16),A=!1),this.o=this.o&&A,!A)s3(this.i,this.l,Q,"[Invalid Chunked Response]"),G5(this),J3(this);else if(0<Q.length&&!this.W){this.W=!0;var V2=this.j;V2.g==this&&V2.ba&&!V2.M&&(V2.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),$9(V2),V2.M=!0,s2(11))}}else s3(this.i,this.l,Q,null),U9(this,Q);L2==4&&G5(this),this.o&&!this.J&&(L2==4?Q8(this.j,this):(this.o=!1,C7(this)))}else qt(this.g),A==400&&0<Q.indexOf("Unknown SID")?(this.s=3,s2(12)):(this.s=0,s2(13)),G5(this),J3(this)}}}catch{}finally{}};function v8(M){return M.g?M.u=="GET"&&M.L!=2&&M.j.Ca:!1}function Pt(M,n){var A=M.C,d=n.indexOf(`
`,A);return d==-1?x9:(A=Number(n.substring(A,d)),isNaN(A)?m8:(d+=1,d+A>n.length?x9:(n=n.slice(d,d+A),M.C=d+A,n)))}c5.prototype.cancel=function(){this.J=!0,G5(this)};function C7(M){M.S=Date.now()+M.I,h8(M,M.I)}function h8(M,n){if(M.B!=null)throw Error("WatchDog timer not null");M.B=X3(u(M.ba,M),n)}function N9(M){M.B&&(r.clearTimeout(M.B),M.B=null)}c5.prototype.ba=function(){this.B=null;const M=Date.now();0<=M-this.S?(wt(this.i,this.A),this.L!=2&&(K3(),s2(17)),G5(this),this.s=2,J3(this)):h8(this,this.S-M)};function J3(M){M.j.G==0||M.J||Q8(M.j,M)}function G5(M){N9(M);var n=M.M;n&&typeof n.ma=="function"&&n.ma(),M.M=null,m5(M.U),M.g&&(n=M.g,M.g=null,n.abort(),n.ma())}function U9(M,n){try{var A=M.j;if(A.G!=0&&(A.g==M||W9(A.h,M))){if(!M.K&&W9(A.h,M)&&A.G==3){try{var d=A.Da.g.parse(n)}catch{d=null}if(Array.isArray(d)&&d.length==3){var y=d;if(y[0]==0){C:if(!A.u){if(A.g)if(A.g.F+3e3<M.F)a7(A),i7(A);else break C;j9(A),s2(18)}}else A.za=y[1],0<A.za-A.T&&37500>y[2]&&A.F&&A.v==0&&!A.C&&(A.C=X3(u(A.Za,A),6e3));if(1>=S8(A.h)&&A.ca){try{A.ca()}catch{}A.ca=void 0}}else Q5(A,11)}else if((M.K||A.g==M)&&a7(A),!E(n))for(y=A.Da.g.parse(n),n=0;n<y.length;n++){let f1=y[n];if(A.T=f1[0],f1=f1[1],A.G==2)if(f1[0]=="c"){A.K=f1[1],A.ia=f1[2];const V2=f1[3];V2!=null&&(A.la=V2,A.j.info("VER="+A.la));const L2=f1[4];L2!=null&&(A.Aa=L2,A.j.info("SVER="+A.Aa));const u3=f1[5];u3!=null&&typeof u3=="number"&&0<u3&&(d=1.5*u3,A.L=d,A.j.info("backChannelRequestTimeoutMs_="+d)),d=A;const x2=M.g;if(x2){const o7=x2.g?x2.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(o7){var T=d.h;T.g||o7.indexOf("spdy")==-1&&o7.indexOf("quic")==-1&&o7.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(G9(T,T.h),T.h=null))}if(d.D){const q9=x2.g?x2.g.getResponseHeader("X-HTTP-Session-Id"):null;q9&&(d.ya=q9,E1(d.I,d.D,q9))}}A.G=3,A.l&&A.l.ua(),A.ba&&(A.R=Date.now()-M.F,A.j.info("Handshake RTT: "+A.R+"ms")),d=A;var Q=M;if(d.qa=q8(d,d.J?d.ia:null,d.W),Q.K){p8(d.h,Q);var _1=Q,K1=d.L;K1&&(_1.I=K1),_1.B&&(N9(_1),C7(_1)),d.g=Q}else G8(d);0<A.i.length&&r7(A)}else f1[0]!="stop"&&f1[0]!="close"||Q5(A,7);else A.G==3&&(f1[0]=="stop"||f1[0]=="close"?f1[0]=="stop"?Q5(A,7):Q9(A):f1[0]!="noop"&&A.l&&A.l.ta(f1),A.v=0)}}K3(4)}catch{}}var bt=class{constructor(M,n){this.g=M,this.map=n}};function f8(M){this.l=M||10,r.PerformanceNavigationTiming?(M=r.performance.getEntriesByType("navigation"),M=0<M.length&&(M[0].nextHopProtocol=="hq"||M[0].nextHopProtocol=="h2")):M=!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=M?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Z8(M){return M.h?!0:M.g?M.g.size>=M.j:!1}function S8(M){return M.h?1:M.g?M.g.size:0}function W9(M,n){return M.h?M.h==n:M.g?M.g.has(n):!1}function G9(M,n){M.g?M.g.add(n):M.h=n}function p8(M,n){M.h&&M.h==n?M.h=null:M.g&&M.g.has(n)&&M.g.delete(n)}f8.prototype.cancel=function(){if(this.i=g8(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const M of this.g.values())M.cancel();this.g.clear()}};function g8(M){if(M.h!=null)return M.i.concat(M.h.D);if(M.g!=null&&M.g.size!==0){let n=M.i;for(const A of M.g.values())n=n.concat(A.D);return n}return P(M.i)}function Rt(M){if(M.V&&typeof M.V=="function")return M.V();if(typeof Map<"u"&&M instanceof Map||typeof Set<"u"&&M instanceof Set)return Array.from(M.values());if(typeof M=="string")return M.split("");if(a(M)){for(var n=[],A=M.length,d=0;d<A;d++)n.push(M[d]);return n}n=[],A=0;for(d in M)n[A++]=M[d];return n}function kt(M){if(M.na&&typeof M.na=="function")return M.na();if(!M.V||typeof M.V!="function"){if(typeof Map<"u"&&M instanceof Map)return Array.from(M.keys());if(!(typeof Set<"u"&&M instanceof Set)){if(a(M)||typeof M=="string"){var n=[];M=M.length;for(var A=0;A<M;A++)n.push(A);return n}n=[],A=0;for(const d in M)n[A++]=d;return n}}}function O8(M,n){if(M.forEach&&typeof M.forEach=="function")M.forEach(n,void 0);else if(a(M)||typeof M=="string")Array.prototype.forEach.call(M,n,void 0);else for(var A=kt(M),d=Rt(M),y=d.length,T=0;T<y;T++)n.call(void 0,d[T],A&&A[T],M)}var y8=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function It(M,n){if(M){M=M.split("&");for(var A=0;A<M.length;A++){var d=M[A].indexOf("="),y=null;if(0<=d){var T=M[A].substring(0,d);y=M[A].substring(d+1)}else T=M[A];n(T,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function z5(M){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,M instanceof z5){this.h=M.h,H7(this,M.j),this.o=M.o,this.g=M.g,V7(this,M.s),this.l=M.l;var n=M.i,A=new V0;A.i=n.i,n.g&&(A.g=new Map(n.g),A.h=n.h),_8(this,A),this.m=M.m}else M&&(n=String(M).match(y8))?(this.h=!1,H7(this,n[1]||"",!0),this.o=C0(n[2]||""),this.g=C0(n[3]||"",!0),V7(this,n[4]),this.l=C0(n[5]||"",!0),_8(this,n[6]||"",!0),this.m=C0(n[7]||"")):(this.h=!1,this.i=new V0(null,this.h))}z5.prototype.toString=function(){var M=[],n=this.j;n&&M.push(H0(n,T8,!0),":");var A=this.g;return(A||n=="file")&&(M.push("//"),(n=this.o)&&M.push(H0(n,T8,!0),"@"),M.push(encodeURIComponent(String(A)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),A=this.s,A!=null&&M.push(":",String(A))),(A=this.l)&&(this.g&&A.charAt(0)!="/"&&M.push("/"),M.push(H0(A,A.charAt(0)=="/"?xt:Ft,!0))),(A=this.i.toString())&&M.push("?",A),(A=this.m)&&M.push("#",H0(A,Nt)),M.join("")};function e5(M){return new z5(M)}function H7(M,n,A){M.j=A?C0(n,!0):n,M.j&&(M.j=M.j.replace(/:$/,""))}function V7(M,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);M.s=n}else M.s=null}function _8(M,n,A){n instanceof V0?(M.i=n,Ut(M.i,M.h)):(A||(n=H0(n,Dt)),M.i=new V0(n,M.h))}function E1(M,n,A){M.i.set(n,A)}function L7(M){return E1(M,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),M}function C0(M,n){return M?n?decodeURI(M.replace(/%25/g,"%2525")):decodeURIComponent(M):""}function H0(M,n,A){return typeof M=="string"?(M=encodeURI(M).replace(n,Bt),A&&(M=M.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),M):null}function Bt(M){return M=M.charCodeAt(0),"%"+(M>>4&15).toString(16)+(M&15).toString(16)}var T8=/[#\/\?@]/g,Ft=/[#\?:]/g,xt=/[#\?]/g,Dt=/[#\?@]/g,Nt=/#/g;function V0(M,n){this.h=this.g=null,this.i=M||null,this.j=!!n}function v5(M){M.g||(M.g=new Map,M.h=0,M.i&&It(M.i,function(n,A){M.add(decodeURIComponent(n.replace(/\+/g," ")),A)}))}H=V0.prototype,H.add=function(M,n){v5(this),this.i=null,M=l3(this,M);var A=this.g.get(M);return A||this.g.set(M,A=[]),A.push(n),this.h+=1,this};function w8(M,n){v5(M),n=l3(M,n),M.g.has(n)&&(M.i=null,M.h-=M.g.get(n).length,M.g.delete(n))}function E8(M,n){return v5(M),n=l3(M,n),M.g.has(n)}H.forEach=function(M,n){v5(this),this.g.forEach(function(A,d){A.forEach(function(y){M.call(n,y,d,this)},this)},this)},H.na=function(){v5(this);const M=Array.from(this.g.values()),n=Array.from(this.g.keys()),A=[];for(let d=0;d<n.length;d++){const y=M[d];for(let T=0;T<y.length;T++)A.push(n[d])}return A},H.V=function(M){v5(this);let n=[];if(typeof M=="string")E8(this,M)&&(n=n.concat(this.g.get(l3(this,M))));else{M=Array.from(this.g.values());for(let A=0;A<M.length;A++)n=n.concat(M[A])}return n},H.set=function(M,n){return v5(this),this.i=null,M=l3(this,M),E8(this,M)&&(this.h-=this.g.get(M).length),this.g.set(M,[n]),this.h+=1,this},H.get=function(M,n){return M?(M=this.V(M),0<M.length?String(M[0]):n):n};function P8(M,n,A){w8(M,n),0<A.length&&(M.i=null,M.g.set(l3(M,n),P(A)),M.h+=A.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";const M=[],n=Array.from(this.g.keys());for(var A=0;A<n.length;A++){var d=n[A];const T=encodeURIComponent(String(d)),Q=this.V(d);for(d=0;d<Q.length;d++){var y=T;Q[d]!==""&&(y+="="+encodeURIComponent(String(Q[d]))),M.push(y)}}return this.i=M.join("&")};function l3(M,n){return n=String(n),M.j&&(n=n.toLowerCase()),n}function Ut(M,n){n&&!M.j&&(v5(M),M.i=null,M.g.forEach(function(A,d){var y=d.toLowerCase();d!=y&&(w8(this,d),P8(this,y,A))},M)),M.j=n}function Wt(M,n){const A=new Y3;if(r.Image){const d=new Image;d.onload=c(h5,A,"TestLoadImage: loaded",!0,n,d),d.onerror=c(h5,A,"TestLoadImage: error",!1,n,d),d.onabort=c(h5,A,"TestLoadImage: abort",!1,n,d),d.ontimeout=c(h5,A,"TestLoadImage: timeout",!1,n,d),r.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=M}else n(!1)}function Gt(M,n){const A=new Y3,d=new AbortController,y=setTimeout(()=>{d.abort(),h5(A,"TestPingServer: timeout",!1,n)},1e4);fetch(M,{signal:d.signal}).then(T=>{clearTimeout(y),T.ok?h5(A,"TestPingServer: ok",!0,n):h5(A,"TestPingServer: server error",!1,n)}).catch(()=>{clearTimeout(y),h5(A,"TestPingServer: error",!1,n)})}function h5(M,n,A,d,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),d(A)}catch{}}function zt(){this.g=new R2}function Qt(M,n,A){const d=A||"";try{O8(M,function(y,T){let Q=y;o(y)&&(Q=o3(y)),n.push(d+T+"="+encodeURIComponent(Q))})}catch(y){throw n.push(d+"type="+encodeURIComponent("_badmap")),y}}function e7(M){this.l=M.Ub||null,this.j=M.eb||!1}w(e7,A3),e7.prototype.g=function(){return new t7(this.l,this.j)},e7.prototype.i=function(M){return function(){return M}}({});function t7(M,n){J.call(this),this.D=M,this.o=n,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(t7,J),H=t7.prototype,H.open=function(M,n){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=M,this.A=n,this.readyState=1,e0(this)},H.send=function(M){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const n={headers:this.u,method:this.B,credentials:this.m,cache:void 0};M&&(n.body=M),(this.D||r).fetch(new Request(this.A,n)).then(this.Sa.bind(this),this.ga.bind(this))},H.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,L0(this)),this.readyState=0},H.Sa=function(M){if(this.g&&(this.l=M,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=M.headers,this.readyState=2,e0(this)),this.g&&(this.readyState=3,e0(this),this.g)))if(this.responseType==="arraybuffer")M.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof r.ReadableStream<"u"&&"body"in M){if(this.j=M.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;b8(this)}else M.text().then(this.Ra.bind(this),this.ga.bind(this))};function b8(M){M.j.read().then(M.Pa.bind(M)).catch(M.ga.bind(M))}H.Pa=function(M){if(this.g){if(this.o&&M.value)this.response.push(M.value);else if(!this.o){var n=M.value?M.value:new Uint8Array(0);(n=this.v.decode(n,{stream:!M.done}))&&(this.response=this.responseText+=n)}M.done?L0(this):e0(this),this.readyState==3&&b8(this)}},H.Ra=function(M){this.g&&(this.response=this.responseText=M,L0(this))},H.Qa=function(M){this.g&&(this.response=M,L0(this))},H.ga=function(){this.g&&L0(this)};function L0(M){M.readyState=4,M.l=null,M.j=null,M.v=null,e0(M)}H.setRequestHeader=function(M,n){this.u.append(M,n)},H.getResponseHeader=function(M){return this.h&&this.h.get(M.toLowerCase())||""},H.getAllResponseHeaders=function(){if(!this.h)return"";const M=[],n=this.h.entries();for(var A=n.next();!A.done;)A=A.value,M.push(A[0]+": "+A[1]),A=n.next();return M.join(`\r
`)};function e0(M){M.onreadystatechange&&M.onreadystatechange.call(M)}Object.defineProperty(t7.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(M){this.m=M?"include":"same-origin"}});function R8(M){let n="";return n1(M,function(A,d){n+=d,n+=":",n+=A,n+=`\r
`}),n}function z9(M,n,A){C:{for(d in A){var d=!1;break C}d=!0}d||(A=R8(A),typeof M=="string"?A!=null&&encodeURIComponent(String(A)):E1(M,n,A))}function F1(M){J.call(this),this.headers=new Map,this.o=M||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(F1,J);var jt=/^https?$/i,$t=["POST","PUT"];H=F1.prototype,H.Ha=function(M){this.J=M},H.ea=function(M,n,A,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+M);n=n?n.toUpperCase():"GET",this.D=M,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():F9.g(),this.v=this.o?a8(this.o):a8(F9),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(n,String(M),!0),this.B=!1}catch(T){k8(this,T);return}if(M=A||"",A=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var y in d)A.set(y,d[y]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const T of d.keys())A.set(T,d.get(T));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(A.keys()).find(T=>T.toLowerCase()=="content-type"),y=r.FormData&&M instanceof r.FormData,!(0<=Array.prototype.indexOf.call($t,n,void 0))||d||y||A.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,Q]of A)this.g.setRequestHeader(T,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{F8(this),this.u=!0,this.g.send(M),this.u=!1}catch(T){k8(this,T)}};function k8(M,n){M.h=!1,M.g&&(M.j=!0,M.g.abort(),M.j=!1),M.l=n,M.m=5,I8(M),M7(M)}function I8(M){M.A||(M.A=!0,t1(M,"complete"),t1(M,"error"))}H.abort=function(M){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=M||7,t1(this,"complete"),t1(this,"abort"),M7(this))},H.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),M7(this,!0)),F1.aa.N.call(this)},H.Ea=function(){this.s||(this.B||this.u||this.j?B8(this):this.bb())},H.bb=function(){B8(this)};function B8(M){if(M.h&&typeof i<"u"&&(!M.v[1]||t5(M)!=4||M.Z()!=2)){if(M.u&&t5(M)==4)h1(M.Ea,0,M);else if(t1(M,"readystatechange"),t5(M)==4){M.h=!1;try{const Q=M.Z();C:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break C;default:n=!1}var A;if(!(A=n)){var d;if(d=Q===0){var y=String(M.D).match(y8)[1]||null;!y&&r.self&&r.self.location&&(y=r.self.location.protocol.slice(0,-1)),d=!jt.test(y?y.toLowerCase():"")}A=d}if(A)t1(M,"complete"),t1(M,"success");else{M.m=6;try{var T=2<t5(M)?M.g.statusText:""}catch{T=""}M.l=T+" ["+M.Z()+"]",I8(M)}}finally{M7(M)}}}}function M7(M,n){if(M.g){F8(M);const A=M.g,d=M.v[0]?()=>{}:null;M.g=null,M.v=null,n||t1(M,"ready");try{A.onreadystatechange=d}catch{}}}function F8(M){M.I&&(r.clearTimeout(M.I),M.I=null)}H.isActive=function(){return!!this.g};function t5(M){return M.g?M.g.readyState:0}H.Z=function(){try{return 2<t5(this)?this.g.status:-1}catch{return-1}},H.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},H.Oa=function(M){if(this.g){var n=this.g.responseText;return M&&n.indexOf(M)==0&&(n=n.substring(M.length)),A2(n)}};function x8(M){try{if(!M.g)return null;if("response"in M.g)return M.g.response;switch(M.H){case"":case"text":return M.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in M.g)return M.g.mozResponseArrayBuffer}return null}catch{return null}}function qt(M){const n={};M=(M.g&&2<=t5(M)&&M.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<M.length;d++){if(E(M[d]))continue;var A=g(M[d]);const y=A[0];if(A=A[1],typeof A!="string")continue;A=A.trim();const T=n[y]||[];n[y]=T,T.push(A)}S(n,function(d){return d.join(", ")})}H.Ba=function(){return this.m},H.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function t0(M,n,A){return A&&A.internalChannelParams&&A.internalChannelParams[M]||n}function D8(M){this.Aa=0,this.i=[],this.j=new Y3,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=t0("failFast",!1,M),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=t0("baseRetryDelayMs",5e3,M),this.cb=t0("retryDelaySeedMs",1e4,M),this.Wa=t0("forwardChannelMaxRetries",2,M),this.wa=t0("forwardChannelRequestTimeoutMs",2e4,M),this.pa=M&&M.xmlHttpFactory||void 0,this.Xa=M&&M.Tb||void 0,this.Ca=M&&M.useFetchStreams||!1,this.L=void 0,this.J=M&&M.supportsCrossDomainXhr||!1,this.K="",this.h=new f8(M&&M.concurrentRequestLimit),this.Da=new zt,this.P=M&&M.fastHandshake||!1,this.O=M&&M.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=M&&M.Rb||!1,M&&M.xa&&this.j.xa(),M&&M.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&M&&M.detectBufferingProxy||!1,this.ja=void 0,M&&M.longPollingTimeout&&0<M.longPollingTimeout&&(this.ja=M.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}H=D8.prototype,H.la=8,H.G=1,H.connect=function(M,n,A,d){s2(0),this.W=M,this.H=n||{},A&&d!==void 0&&(this.H.OSID=A,this.H.OAID=d),this.F=this.X,this.I=q8(this,null,this.W),r7(this)};function Q9(M){if(N8(M),M.G==3){var n=M.U++,A=e5(M.I);if(E1(A,"SID",M.K),E1(A,"RID",n),E1(A,"TYPE","terminate"),M0(M,A),n=new c5(M,M.j,n),n.L=2,n.v=L7(e5(A)),A=!1,r.navigator&&r.navigator.sendBeacon)try{A=r.navigator.sendBeacon(n.v.toString(),"")}catch{}!A&&r.Image&&(new Image().src=n.v,A=!0),A||(n.g=K8(n.j,null),n.g.ea(n.v)),n.F=Date.now(),C7(n)}$8(M)}function i7(M){M.g&&($9(M),M.g.cancel(),M.g=null)}function N8(M){i7(M),M.u&&(r.clearTimeout(M.u),M.u=null),a7(M),M.h.cancel(),M.s&&(typeof M.s=="number"&&r.clearTimeout(M.s),M.s=null)}function r7(M){if(!Z8(M.h)&&!M.s){M.s=!0;var n=M.Ga;d1||F2(),A1||(d1(),A1=!0),S2.add(n,M),M.B=0}}function Kt(M,n){return S8(M.h)>=M.h.j-(M.s?1:0)?!1:M.s?(M.i=n.D.concat(M.i),!0):M.G==1||M.G==2||M.B>=(M.Va?0:M.Wa)?!1:(M.s=X3(u(M.Ga,M,n),j8(M,M.B)),M.B++,!0)}H.Ga=function(M){if(this.s)if(this.s=null,this.G==1){if(!M){this.U=Math.floor(1e5*Math.random()),M=this.U++;const y=new c5(this,this.j,M);let T=this.o;if(this.S&&(T?(T=v(T),p(T,this.S)):T=this.S),this.m!==null||this.O||(y.H=T,T=null),this.P)C:{for(var n=0,A=0;A<this.i.length;A++){H:{var d=this.i[A];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break H}d=void 0}if(d===void 0)break;if(n+=d,4096<n){n=A;break C}if(n===4096||A===this.i.length-1){n=A+1;break C}}n=1e3}else n=1e3;n=W8(this,y,n),A=e5(this.I),E1(A,"RID",M),E1(A,"CVER",22),this.D&&E1(A,"X-HTTP-Session-Id",this.D),M0(this,A),T&&(this.O?n="headers="+encodeURIComponent(String(R8(T)))+"&"+n:this.m&&z9(A,this.m,T)),G9(this.h,y),this.Ua&&E1(A,"TYPE","init"),this.P?(E1(A,"$req",n),E1(A,"SID","null"),y.T=!0,D9(y,A,null)):D9(y,A,n),this.G=2}}else this.G==3&&(M?U8(this,M):this.i.length==0||Z8(this.h)||U8(this))};function U8(M,n){var A;n?A=n.l:A=M.U++;const d=e5(M.I);E1(d,"SID",M.K),E1(d,"RID",A),E1(d,"AID",M.T),M0(M,d),M.m&&M.o&&z9(d,M.m,M.o),A=new c5(M,M.j,A,M.B+1),M.m===null&&(A.H=M.o),n&&(M.i=n.D.concat(M.i)),n=W8(M,A,1e3),A.I=Math.round(.5*M.wa)+Math.round(.5*M.wa*Math.random()),G9(M.h,A),D9(A,d,n)}function M0(M,n){M.H&&n1(M.H,function(A,d){E1(n,d,A)}),M.l&&O8({},function(A,d){E1(n,d,A)})}function W8(M,n,A){A=Math.min(M.i.length,A);var d=M.l?u(M.l.Na,M.l,M):null;C:{var y=M.i;let T=-1;for(;;){const Q=["count="+A];T==-1?0<A?(T=y[0].g,Q.push("ofs="+T)):T=0:Q.push("ofs="+T);let _1=!0;for(let K1=0;K1<A;K1++){let f1=y[K1].g;const V2=y[K1].map;if(f1-=T,0>f1)T=Math.max(0,y[K1].g-100),_1=!1;else try{Qt(V2,Q,"req"+f1+"_")}catch{d&&d(V2)}}if(_1){d=Q.join("&");break C}}}return M=M.i.splice(0,A),n.D=M,d}function G8(M){if(!M.g&&!M.u){M.Y=1;var n=M.Fa;d1||F2(),A1||(d1(),A1=!0),S2.add(n,M),M.v=0}}function j9(M){return M.g||M.u||3<=M.v?!1:(M.Y++,M.u=X3(u(M.Fa,M),j8(M,M.v)),M.v++,!0)}H.Fa=function(){if(this.u=null,z8(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var M=2*this.R;this.j.info("BP detection timer enabled: "+M),this.A=X3(u(this.ab,this),M)}},H.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,s2(10),i7(this),z8(this))};function $9(M){M.A!=null&&(r.clearTimeout(M.A),M.A=null)}function z8(M){M.g=new c5(M,M.j,"rpc",M.Y),M.m===null&&(M.g.H=M.o),M.g.O=0;var n=e5(M.qa);E1(n,"RID","rpc"),E1(n,"SID",M.K),E1(n,"AID",M.T),E1(n,"CI",M.F?"0":"1"),!M.F&&M.ja&&E1(n,"TO",M.ja),E1(n,"TYPE","xmlhttp"),M0(M,n),M.m&&M.o&&z9(n,M.m,M.o),M.L&&(M.g.I=M.L);var A=M.g;M=M.ia,A.L=1,A.v=L7(e5(n)),A.m=null,A.P=!0,c8(A,M)}H.Za=function(){this.C!=null&&(this.C=null,i7(this),j9(this),s2(19))};function a7(M){M.C!=null&&(r.clearTimeout(M.C),M.C=null)}function Q8(M,n){var A=null;if(M.g==n){a7(M),$9(M),M.g=null;var d=2}else if(W9(M.h,n))A=n.D,p8(M.h,n),d=1;else return;if(M.G!=0){if(n.o)if(d==1){A=n.m?n.m.length:0,n=Date.now()-n.F;var y=M.B;d=X0(),t1(d,new l8(d,A)),r7(M)}else G8(M);else if(y=n.s,y==3||y==0&&0<n.X||!(d==1&&Kt(M,n)||d==2&&j9(M)))switch(A&&0<A.length&&(n=M.h,n.i=n.i.concat(A)),y){case 1:Q5(M,5);break;case 4:Q5(M,10);break;case 3:Q5(M,6);break;default:Q5(M,2)}}}function j8(M,n){let A=M.Ta+Math.floor(Math.random()*M.cb);return M.isActive()||(A*=2),A*n}function Q5(M,n){if(M.j.info("Error code "+n),n==2){var A=u(M.fb,M),d=M.Xa;const y=!d;d=new z5(d||"//www.google.com/images/cleardot.gif"),r.location&&r.location.protocol=="http"||H7(d,"https"),L7(d),y?Wt(d.toString(),A):Gt(d.toString(),A)}else s2(2);M.G=0,M.l&&M.l.sa(n),$8(M),N8(M)}H.fb=function(M){M?(this.j.info("Successfully pinged google.com"),s2(2)):(this.j.info("Failed to ping google.com"),s2(1))};function $8(M){if(M.G=0,M.ka=[],M.l){const n=g8(M.h);(n.length!=0||M.i.length!=0)&&(k(M.ka,n),k(M.ka,M.i),M.h.i.length=0,P(M.i),M.i.length=0),M.l.ra()}}function q8(M,n,A){var d=A instanceof z5?e5(A):new z5(A);if(d.g!="")n&&(d.g=n+"."+d.g),V7(d,d.s);else{var y=r.location;d=y.protocol,n=n?n+"."+y.hostname:y.hostname,y=+y.port;var T=new z5(null);d&&H7(T,d),n&&(T.g=n),y&&V7(T,y),A&&(T.l=A),d=T}return A=M.D,n=M.ya,A&&n&&E1(d,A,n),E1(d,"VER",M.la),M0(M,d),d}function K8(M,n,A){if(n&&!M.J)throw Error("Can't create secondary domain capable XhrIo object.");return n=M.Ca&&!M.pa?new F1(new e7({eb:A})):new F1(M.pa),n.Ha(M.J),n}H.isActive=function(){return!!this.l&&this.l.isActive(this)};function X8(){}H=X8.prototype,H.ua=function(){},H.ta=function(){},H.sa=function(){},H.ra=function(){},H.isActive=function(){return!0},H.Na=function(){};function n7(){}n7.prototype.g=function(M,n){return new p2(M,n)};function p2(M,n){J.call(this),this.g=new D8(n),this.l=M,this.h=n&&n.messageUrlParams||null,M=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(M?M["X-Client-Protocol"]="webchannel":M={"X-Client-Protocol":"webchannel"}),this.g.o=M,M=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(M?M["X-WebChannel-Content-Type"]=n.messageContentType:M={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.va&&(M?M["X-WebChannel-Client-Profile"]=n.va:M={"X-WebChannel-Client-Profile":n.va}),this.g.S=M,(M=n&&n.Sb)&&!E(M)&&(this.g.m=M),this.v=n&&n.supportsCrossDomainXhr||!1,this.u=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!E(n)&&(this.g.D=n,M=this.h,M!==null&&n in M&&(M=this.h,n in M&&delete M[n])),this.j=new d3(this)}w(p2,J),p2.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},p2.prototype.close=function(){Q9(this.g)},p2.prototype.o=function(M){var n=this.g;if(typeof M=="string"){var A={};A.__data__=M,M=A}else this.u&&(A={},A.__data__=o3(M),M=A);n.i.push(new bt(n.Ya++,M)),n.G==3&&r7(n)},p2.prototype.N=function(){this.g.l=null,delete this.j,Q9(this.g),delete this.g,p2.aa.N.call(this)};function Y8(M){I9.call(this),M.__headers__&&(this.headers=M.__headers__,this.statusCode=M.__status__,delete M.__headers__,delete M.__status__);var n=M.__sm__;if(n){C:{for(const A in n){M=A;break C}M=void 0}(this.i=M)&&(M=this.i,n=n!==null&&M in n?n[M]:void 0),this.data=n}else this.data=M}w(Y8,I9);function J8(){B9.call(this),this.status=1}w(J8,B9);function d3(M){this.g=M}w(d3,X8),d3.prototype.ua=function(){t1(this.g,"a")},d3.prototype.ta=function(M){t1(this.g,new Y8(M))},d3.prototype.sa=function(M){t1(this.g,new J8)},d3.prototype.ra=function(){t1(this.g,"b")},n7.prototype.createWebChannel=n7.prototype.g,p2.prototype.send=p2.prototype.o,p2.prototype.open=p2.prototype.m,p2.prototype.close=p2.prototype.close,GL=function(){return new n7},WL=function(){return X0()},UL=W5,G4={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Y0.NO_ERROR=0,Y0.TIMEOUT=8,Y0.HTTP_ERROR=6,y7=Y0,d8.COMPLETE="complete",NL=d8,n8.EventType=q3,q3.OPEN="a",q3.CLOSE="b",q3.ERROR="c",q3.MESSAGE="d",J.prototype.listen=J.prototype.K,A0=n8,F1.prototype.listenOnce=F1.prototype.L,F1.prototype.getLastError=F1.prototype.Ka,F1.prototype.getLastErrorCode=F1.prototype.Ba,F1.prototype.getStatus=F1.prototype.Z,F1.prototype.getResponseJson=F1.prototype.Oa,F1.prototype.getResponseText=F1.prototype.oa,F1.prototype.send=F1.prototype.ea,F1.prototype.setWithCredentials=F1.prototype.Ha,DL=F1}).apply(typeof d7<"u"?d7:typeof self<"u"?self:typeof window<"u"?window:{});const aH="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(C){this.uid=C}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(C){return C.uid===this.uid}}t2.UNAUTHENTICATED=new t2(null),t2.GOOGLE_CREDENTIALS=new t2("google-credentials-uid"),t2.FIRST_PARTY=new t2("first-party-uid"),t2.MOCK_USER=new t2("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z3="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e3=new O6("@firebase/firestore");function f3(){return e3.logLevel}function X(H,...C){if(e3.logLevel<=c1.DEBUG){const V=C.map(_6);e3.debug(`Firestore (${z3}): ${H}`,...V)}}function s5(H,...C){if(e3.logLevel<=c1.ERROR){const V=C.map(_6);e3.error(`Firestore (${z3}): ${H}`,...V)}}function B3(H,...C){if(e3.logLevel<=c1.WARN){const V=C.map(_6);e3.warn(`Firestore (${z3}): ${H}`,...V)}}function _6(H){if(typeof H=="string")return H;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(V){return JSON.stringify(V)}(H)}catch{return H}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(H="Unexpected state"){const C=`FIRESTORE (${z3}) INTERNAL ASSERTION FAILED: `+H;throw s5(C),new Error(C)}function O1(H,C){H||M1()}function a1(H,C){return H}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H1 extends D5{constructor(C,V){super(C,V),this.code=C,this.message=V,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T5{constructor(){this.promise=new Promise((C,V)=>{this.resolve=C,this.reject=V})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(C,V){this.user=V,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${C}`)}}class Yn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(C,V){C.enqueueRetryable(()=>V(t2.UNAUTHENTICATED))}shutdown(){}}class Jn{constructor(C){this.token=C,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(C,V){this.changeListener=V,C.enqueueRetryable(()=>V(this.token.user))}shutdown(){this.changeListener=null}}class Co{constructor(C){this.t=C,this.currentUser=t2.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(C,V){O1(this.o===void 0);let L=this.i;const e=a=>this.i!==L?(L=this.i,V(a)):Promise.resolve();let t=new T5;this.o=()=>{this.i++,this.currentUser=this.u(),t.resolve(),t=new T5,C.enqueueRetryable(()=>e(this.currentUser))};const i=()=>{const a=t;C.enqueueRetryable(async()=>{await a.promise,await e(this.currentUser)})},r=a=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(a=>r(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?r(a):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),t.resolve(),t=new T5)}},0),i()}getToken(){const C=this.i,V=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(V).then(L=>this.i!==C?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):L?(O1(typeof L.accessToken=="string"),new zL(L.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const C=this.auth&&this.auth.getUid();return O1(C===null||typeof C=="string"),new t2(C)}}class Ho{constructor(C,V,L){this.l=C,this.h=V,this.P=L,this.type="FirstParty",this.user=t2.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const C=this.I();return C&&this.T.set("Authorization",C),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Vo{constructor(C,V,L){this.l=C,this.h=V,this.P=L}getToken(){return Promise.resolve(new Ho(this.l,this.h,this.P))}start(C,V){C.enqueueRetryable(()=>V(t2.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lo{constructor(C){this.value=C,this.type="AppCheck",this.headers=new Map,C&&C.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eo{constructor(C){this.A=C,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(C,V){O1(this.o===void 0);const L=t=>{t.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const i=t.token!==this.R;return this.R=t.token,X("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?V(t.token):Promise.resolve()};this.o=t=>{C.enqueueRetryable(()=>L(t))};const e=t=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(t=>e(t)),setTimeout(()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?e(t):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const C=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(C).then(V=>V?(O1(typeof V.token=="string"),this.R=V.token,new Lo(V.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(H){const C=typeof self<"u"&&(self.crypto||self.msCrypto),V=new Uint8Array(H);if(C&&typeof C.getRandomValues=="function")C.getRandomValues(V);else for(let L=0;L<H;L++)V[L]=Math.floor(256*Math.random());return V}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{static newId(){const C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",V=Math.floor(256/C.length)*C.length;let L="";for(;L.length<20;){const e=to(40);for(let t=0;t<e.length;++t)L.length<20&&e[t]<V&&(L+=C.charAt(e[t]%C.length))}return L}}function l1(H,C){return H<C?-1:H>C?1:0}function F3(H,C,V){return H.length===C.length&&H.every((L,e)=>V(L,C[e]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{static now(){return G1.fromMillis(Date.now())}static fromDate(C){return G1.fromMillis(C.getTime())}static fromMillis(C){const V=Math.floor(C/1e3),L=Math.floor(1e6*(C-1e3*V));return new G1(V,L)}constructor(C,V){if(this.seconds=C,this.nanoseconds=V,V<0)throw new H1(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+V);if(V>=1e9)throw new H1(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+V);if(C<-62135596800)throw new H1(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+C);if(C>=253402300800)throw new H1(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+C)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(C){return this.seconds===C.seconds?l1(this.nanoseconds,C.nanoseconds):l1(this.seconds,C.seconds)}isEqual(C){return C.seconds===this.seconds&&C.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const C=this.seconds- -62135596800;return String(C).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{static fromTimestamp(C){return new i1(C)}static min(){return new i1(new G1(0,0))}static max(){return new i1(new G1(253402300799,999999999))}constructor(C){this.timestamp=C}compareTo(C){return this.timestamp._compareTo(C.timestamp)}isEqual(C){return this.timestamp.isEqual(C.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(C,V,L){V===void 0?V=0:V>C.length&&M1(),L===void 0?L=C.length-V:L>C.length-V&&M1(),this.segments=C,this.offset=V,this.len=L}get length(){return this.len}isEqual(C){return I0.comparator(this,C)===0}child(C){const V=this.segments.slice(this.offset,this.limit());return C instanceof I0?C.forEach(L=>{V.push(L)}):V.push(C),this.construct(V)}limit(){return this.offset+this.length}popFirst(C){return C=C===void 0?1:C,this.construct(this.segments,this.offset+C,this.length-C)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(C){return this.segments[this.offset+C]}isEmpty(){return this.length===0}isPrefixOf(C){if(C.length<this.length)return!1;for(let V=0;V<this.length;V++)if(this.get(V)!==C.get(V))return!1;return!0}isImmediateParentOf(C){if(this.length+1!==C.length)return!1;for(let V=0;V<this.length;V++)if(this.get(V)!==C.get(V))return!1;return!0}forEach(C){for(let V=this.offset,L=this.limit();V<L;V++)C(this.segments[V])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(C,V){const L=Math.min(C.length,V.length);for(let e=0;e<L;e++){const t=C.get(e),i=V.get(e);if(t<i)return-1;if(t>i)return 1}return C.length<V.length?-1:C.length>V.length?1:0}}class b1 extends I0{construct(C,V,L){return new b1(C,V,L)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...C){const V=[];for(const L of C){if(L.indexOf("//")>=0)throw new H1(D.INVALID_ARGUMENT,`Invalid segment (${L}). Paths must not contain // in them.`);V.push(...L.split("/").filter(e=>e.length>0))}return new b1(V)}static emptyPath(){return new b1([])}}const Mo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y1 extends I0{construct(C,V,L){return new Y1(C,V,L)}static isValidIdentifier(C){return Mo.test(C)}canonicalString(){return this.toArray().map(C=>(C=C.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y1.isValidIdentifier(C)||(C="`"+C+"`"),C)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y1(["__name__"])}static fromServerFormat(C){const V=[];let L="",e=0;const t=()=>{if(L.length===0)throw new H1(D.INVALID_ARGUMENT,`Invalid field path (${C}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);V.push(L),L=""};let i=!1;for(;e<C.length;){const r=C[e];if(r==="\\"){if(e+1===C.length)throw new H1(D.INVALID_ARGUMENT,"Path has trailing escape character: "+C);const a=C[e+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new H1(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+C);L+=a,e+=2}else r==="`"?(i=!i,e++):r!=="."||i?(L+=r,e++):(t(),e++)}if(t(),i)throw new H1(D.INVALID_ARGUMENT,"Unterminated ` in path: "+C);return new Y1(V)}static emptyPath(){return new Y1([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(C){this.path=C}static fromPath(C){return new L1(b1.fromString(C))}static fromName(C){return new L1(b1.fromString(C).popFirst(5))}static empty(){return new L1(b1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(C){return this.path.length>=2&&this.path.get(this.path.length-2)===C}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(C){return C!==null&&b1.comparator(this.path,C.path)===0}toString(){return this.path.toString()}static comparator(C,V){return b1.comparator(C.path,V.path)}static isDocumentKey(C){return C.length%2==0}static fromSegments(C){return new L1(new b1(C.slice()))}}function io(H,C){const V=H.toTimestamp().seconds,L=H.toTimestamp().nanoseconds+1,e=i1.fromTimestamp(L===1e9?new G1(V+1,0):new G1(V,L));return new P5(e,L1.empty(),C)}function ro(H){return new P5(H.readTime,H.key,-1)}class P5{constructor(C,V,L){this.readTime=C,this.documentKey=V,this.largestBatchId=L}static min(){return new P5(i1.min(),L1.empty(),-1)}static max(){return new P5(i1.max(),L1.empty(),-1)}}function ao(H,C){let V=H.readTime.compareTo(C.readTime);return V!==0?V:(V=L1.comparator(H.documentKey,C.documentKey),V!==0?V:l1(H.largestBatchId,C.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oo{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(C){this.onCommittedListeners.push(C)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(C=>C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q3(H){if(H.code!==D.FAILED_PRECONDITION||H.message!==no)throw H;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(C){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,C(V=>{this.isDone=!0,this.result=V,this.nextCallback&&this.nextCallback(V)},V=>{this.isDone=!0,this.error=V,this.catchCallback&&this.catchCallback(V)})}catch(C){return this.next(void 0,C)}next(C,V){return this.callbackAttached&&M1(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(V,this.error):this.wrapSuccess(C,this.result):new I((L,e)=>{this.nextCallback=t=>{this.wrapSuccess(C,t).next(L,e)},this.catchCallback=t=>{this.wrapFailure(V,t).next(L,e)}})}toPromise(){return new Promise((C,V)=>{this.next(C,V)})}wrapUserFunction(C){try{const V=C();return V instanceof I?V:I.resolve(V)}catch(V){return I.reject(V)}}wrapSuccess(C,V){return C?this.wrapUserFunction(()=>C(V)):I.resolve(V)}wrapFailure(C,V){return C?this.wrapUserFunction(()=>C(V)):I.reject(V)}static resolve(C){return new I((V,L)=>{V(C)})}static reject(C){return new I((V,L)=>{L(C)})}static waitFor(C){return new I((V,L)=>{let e=0,t=0,i=!1;C.forEach(r=>{++e,r.next(()=>{++t,i&&t===e&&V()},a=>L(a))}),i=!0,t===e&&V()})}static or(C){let V=I.resolve(!1);for(const L of C)V=V.next(e=>e?I.resolve(e):L());return V}static forEach(C,V){const L=[];return C.forEach((e,t)=>{L.push(V.call(this,e,t))}),this.waitFor(L)}static mapArray(C,V){return new I((L,e)=>{const t=C.length,i=new Array(t);let r=0;for(let a=0;a<t;a++){const o=a;V(C[o]).next(s=>{i[o]=s,++r,r===t&&L(i)},s=>e(s))}})}static doWhile(C,V){return new I((L,e)=>{const t=()=>{C()===!0?V().next(()=>{t()},e):L()};t()})}}function Ao(H){const C=H.match(/Android ([\d.]+)/i),V=C?C[1].split(".").slice(0,2).join("."):"-1";return Number(V)}function j3(H){return H.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(C,V){this.previousValue=C,V&&(V.sequenceNumberHandler=L=>this.ie(L),this.se=L=>V.writeSequenceNumber(L))}ie(C){return this.previousValue=Math.max(C,this.previousValue),this.previousValue}next(){const C=++this.previousValue;return this.se&&this.se(C),C}}u9.oe=-1;function m9(H){return H==null}function W7(H){return H===0&&1/H==-1/0}function so(H){return typeof H=="number"&&Number.isInteger(H)&&!W7(H)&&H<=Number.MAX_SAFE_INTEGER&&H>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(H){let C="";for(let V=0;V<H.length;V++)C.length>0&&(C=nH(C)),C=uo(H.get(V),C);return nH(C)}function uo(H,C){let V=C;const L=H.length;for(let e=0;e<L;e++){const t=H.charAt(e);switch(t){case"\0":V+="";break;case"":V+="";break;default:V+=t}}return V}function nH(H){return H+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oH(H){let C=0;for(const V in H)Object.prototype.hasOwnProperty.call(H,V)&&C++;return C}function N5(H,C){for(const V in H)Object.prototype.hasOwnProperty.call(H,V)&&C(V,H[V])}function jL(H){for(const C in H)if(Object.prototype.hasOwnProperty.call(H,C))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(C,V){this.comparator=C,this.root=V||X1.EMPTY}insert(C,V){return new B1(this.comparator,this.root.insert(C,V,this.comparator).copy(null,null,X1.BLACK,null,null))}remove(C){return new B1(this.comparator,this.root.remove(C,this.comparator).copy(null,null,X1.BLACK,null,null))}get(C){let V=this.root;for(;!V.isEmpty();){const L=this.comparator(C,V.key);if(L===0)return V.value;L<0?V=V.left:L>0&&(V=V.right)}return null}indexOf(C){let V=0,L=this.root;for(;!L.isEmpty();){const e=this.comparator(C,L.key);if(e===0)return V+L.left.size;e<0?L=L.left:(V+=L.left.size+1,L=L.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(C){return this.root.inorderTraversal(C)}forEach(C){this.inorderTraversal((V,L)=>(C(V,L),!1))}toString(){const C=[];return this.inorderTraversal((V,L)=>(C.push(`${V}:${L}`),!1)),`{${C.join(", ")}}`}reverseTraversal(C){return this.root.reverseTraversal(C)}getIterator(){return new u7(this.root,null,this.comparator,!1)}getIteratorFrom(C){return new u7(this.root,C,this.comparator,!1)}getReverseIterator(){return new u7(this.root,null,this.comparator,!0)}getReverseIteratorFrom(C){return new u7(this.root,C,this.comparator,!0)}}class u7{constructor(C,V,L,e){this.isReverse=e,this.nodeStack=[];let t=1;for(;!C.isEmpty();)if(t=V?L(C.key,V):1,V&&e&&(t*=-1),t<0)C=this.isReverse?C.left:C.right;else{if(t===0){this.nodeStack.push(C);break}this.nodeStack.push(C),C=this.isReverse?C.right:C.left}}getNext(){let C=this.nodeStack.pop();const V={key:C.key,value:C.value};if(this.isReverse)for(C=C.left;!C.isEmpty();)this.nodeStack.push(C),C=C.right;else for(C=C.right;!C.isEmpty();)this.nodeStack.push(C),C=C.left;return V}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const C=this.nodeStack[this.nodeStack.length-1];return{key:C.key,value:C.value}}}class X1{constructor(C,V,L,e,t){this.key=C,this.value=V,this.color=L??X1.RED,this.left=e??X1.EMPTY,this.right=t??X1.EMPTY,this.size=this.left.size+1+this.right.size}copy(C,V,L,e,t){return new X1(C??this.key,V??this.value,L??this.color,e??this.left,t??this.right)}isEmpty(){return!1}inorderTraversal(C){return this.left.inorderTraversal(C)||C(this.key,this.value)||this.right.inorderTraversal(C)}reverseTraversal(C){return this.right.reverseTraversal(C)||C(this.key,this.value)||this.left.reverseTraversal(C)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(C,V,L){let e=this;const t=L(C,e.key);return e=t<0?e.copy(null,null,null,e.left.insert(C,V,L),null):t===0?e.copy(null,V,null,null,null):e.copy(null,null,null,null,e.right.insert(C,V,L)),e.fixUp()}removeMin(){if(this.left.isEmpty())return X1.EMPTY;let C=this;return C.left.isRed()||C.left.left.isRed()||(C=C.moveRedLeft()),C=C.copy(null,null,null,C.left.removeMin(),null),C.fixUp()}remove(C,V){let L,e=this;if(V(C,e.key)<0)e.left.isEmpty()||e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.remove(C,V),null);else{if(e.left.isRed()&&(e=e.rotateRight()),e.right.isEmpty()||e.right.isRed()||e.right.left.isRed()||(e=e.moveRedRight()),V(C,e.key)===0){if(e.right.isEmpty())return X1.EMPTY;L=e.right.min(),e=e.copy(L.key,L.value,null,null,e.right.removeMin())}e=e.copy(null,null,null,null,e.right.remove(C,V))}return e.fixUp()}isRed(){return this.color}fixUp(){let C=this;return C.right.isRed()&&!C.left.isRed()&&(C=C.rotateLeft()),C.left.isRed()&&C.left.left.isRed()&&(C=C.rotateRight()),C.left.isRed()&&C.right.isRed()&&(C=C.colorFlip()),C}moveRedLeft(){let C=this.colorFlip();return C.right.left.isRed()&&(C=C.copy(null,null,null,null,C.right.rotateRight()),C=C.rotateLeft(),C=C.colorFlip()),C}moveRedRight(){let C=this.colorFlip();return C.left.left.isRed()&&(C=C.rotateRight(),C=C.colorFlip()),C}rotateLeft(){const C=this.copy(null,null,X1.RED,null,this.right.left);return this.right.copy(null,null,this.color,C,null)}rotateRight(){const C=this.copy(null,null,X1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,C)}colorFlip(){const C=this.left.copy(null,null,!this.left.color,null,null),V=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,C,V)}checkMaxDepth(){const C=this.check();return Math.pow(2,C)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M1();const C=this.left.check();if(C!==this.right.check())throw M1();return C+(this.isRed()?0:1)}}X1.EMPTY=null,X1.RED=!0,X1.BLACK=!1;X1.EMPTY=new class{constructor(){this.size=0}get key(){throw M1()}get value(){throw M1()}get color(){throw M1()}get left(){throw M1()}get right(){throw M1()}copy(C,V,L,e,t){return this}insert(C,V,L){return new X1(C,V)}remove(C,V){return this}isEmpty(){return!0}inorderTraversal(C){return!1}reverseTraversal(C){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(C){this.comparator=C,this.data=new B1(this.comparator)}has(C){return this.data.get(C)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(C){return this.data.indexOf(C)}forEach(C){this.data.inorderTraversal((V,L)=>(C(V),!1))}forEachInRange(C,V){const L=this.data.getIteratorFrom(C[0]);for(;L.hasNext();){const e=L.getNext();if(this.comparator(e.key,C[1])>=0)return;V(e.key)}}forEachWhile(C,V){let L;for(L=V!==void 0?this.data.getIteratorFrom(V):this.data.getIterator();L.hasNext();)if(!C(L.getNext().key))return}firstAfterOrEqual(C){const V=this.data.getIteratorFrom(C);return V.hasNext()?V.getNext().key:null}getIterator(){return new AH(this.data.getIterator())}getIteratorFrom(C){return new AH(this.data.getIteratorFrom(C))}add(C){return this.copy(this.data.remove(C).insert(C,!0))}delete(C){return this.has(C)?this.copy(this.data.remove(C)):this}isEmpty(){return this.data.isEmpty()}unionWith(C){let V=this;return V.size<C.size&&(V=C,C=this),C.forEach(L=>{V=V.add(L)}),V}isEqual(C){if(!(C instanceof z1)||this.size!==C.size)return!1;const V=this.data.getIterator(),L=C.data.getIterator();for(;V.hasNext();){const e=V.getNext().key,t=L.getNext().key;if(this.comparator(e,t)!==0)return!1}return!0}toArray(){const C=[];return this.forEach(V=>{C.push(V)}),C}toString(){const C=[];return this.forEach(V=>C.push(V)),"SortedSet("+C.toString()+")"}copy(C){const V=new z1(this.comparator);return V.data=C,V}}class AH{constructor(C){this.iter=C}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(C){this.fields=C,C.sort(Y1.comparator)}static empty(){return new w2([])}unionWith(C){let V=new z1(Y1.comparator);for(const L of this.fields)V=V.add(L);for(const L of C)V=V.add(L);return new w2(V.toArray())}covers(C){for(const V of this.fields)if(V.isPrefixOf(C))return!0;return!1}isEqual(C){return F3(this.fields,C.fields,(V,L)=>V.isEqual(L))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(C){this.binaryString=C}static fromBase64String(C){const V=function(e){try{return atob(e)}catch(t){throw typeof DOMException<"u"&&t instanceof DOMException?new $L("Invalid base64 string: "+t):t}}(C);return new J1(V)}static fromUint8Array(C){const V=function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(C);return new J1(V)}[Symbol.iterator](){let C=0;return{next:()=>C<this.binaryString.length?{value:this.binaryString.charCodeAt(C++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(V){return btoa(V)}(this.binaryString)}toUint8Array(){return function(V){const L=new Uint8Array(V.length);for(let e=0;e<V.length;e++)L[e]=V.charCodeAt(e);return L}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(C){return l1(this.binaryString,C.binaryString)}isEqual(C){return this.binaryString===C.binaryString}}J1.EMPTY_BYTE_STRING=new J1("");const mo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function b5(H){if(O1(!!H),typeof H=="string"){let C=0;const V=mo.exec(H);if(O1(!!V),V[1]){let e=V[1];e=(e+"000000000").substr(0,9),C=Number(e)}const L=new Date(H);return{seconds:Math.floor(L.getTime()/1e3),nanos:C}}return{seconds:x1(H.seconds),nanos:x1(H.nanos)}}function x1(H){return typeof H=="number"?H:typeof H=="string"?Number(H):0}function R5(H){return typeof H=="string"?J1.fromBase64String(H):J1.fromUint8Array(H)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T6(H){var C,V;return((V=(((C=H==null?void 0:H.mapValue)===null||C===void 0?void 0:C.fields)||{}).__type__)===null||V===void 0?void 0:V.stringValue)==="server_timestamp"}function c9(H){const C=H.mapValue.fields.__previous_value__;return T6(C)?c9(C):C}function B0(H){const C=b5(H.mapValue.fields.__local_write_time__.timestampValue);return new G1(C.seconds,C.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(C,V,L,e,t,i,r,a,o){this.databaseId=C,this.appId=V,this.persistenceKey=L,this.host=e,this.ssl=t,this.forceLongPolling=i,this.autoDetectLongPolling=r,this.longPollingOptions=a,this.useFetchStreams=o}}class F0{constructor(C,V){this.projectId=C,this.database=V||"(default)"}static empty(){return new F0("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(C){return C instanceof F0&&C.projectId===this.projectId&&C.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m7={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function k5(H){return"nullValue"in H?0:"booleanValue"in H?1:"integerValue"in H||"doubleValue"in H?2:"timestampValue"in H?3:"stringValue"in H?5:"bytesValue"in H?6:"referenceValue"in H?7:"geoPointValue"in H?8:"arrayValue"in H?9:"mapValue"in H?T6(H)?4:ho(H)?9007199254740991:vo(H)?10:11:M1()}function V5(H,C){if(H===C)return!0;const V=k5(H);if(V!==k5(C))return!1;switch(V){case 0:case 9007199254740991:return!0;case 1:return H.booleanValue===C.booleanValue;case 4:return B0(H).isEqual(B0(C));case 3:return function(e,t){if(typeof e.timestampValue=="string"&&typeof t.timestampValue=="string"&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const i=b5(e.timestampValue),r=b5(t.timestampValue);return i.seconds===r.seconds&&i.nanos===r.nanos}(H,C);case 5:return H.stringValue===C.stringValue;case 6:return function(e,t){return R5(e.bytesValue).isEqual(R5(t.bytesValue))}(H,C);case 7:return H.referenceValue===C.referenceValue;case 8:return function(e,t){return x1(e.geoPointValue.latitude)===x1(t.geoPointValue.latitude)&&x1(e.geoPointValue.longitude)===x1(t.geoPointValue.longitude)}(H,C);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return x1(e.integerValue)===x1(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const i=x1(e.doubleValue),r=x1(t.doubleValue);return i===r?W7(i)===W7(r):isNaN(i)&&isNaN(r)}return!1}(H,C);case 9:return F3(H.arrayValue.values||[],C.arrayValue.values||[],V5);case 10:case 11:return function(e,t){const i=e.mapValue.fields||{},r=t.mapValue.fields||{};if(oH(i)!==oH(r))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(r[a]===void 0||!V5(i[a],r[a])))return!1;return!0}(H,C);default:return M1()}}function x0(H,C){return(H.values||[]).find(V=>V5(V,C))!==void 0}function x3(H,C){if(H===C)return 0;const V=k5(H),L=k5(C);if(V!==L)return l1(V,L);switch(V){case 0:case 9007199254740991:return 0;case 1:return l1(H.booleanValue,C.booleanValue);case 2:return function(t,i){const r=x1(t.integerValue||t.doubleValue),a=x1(i.integerValue||i.doubleValue);return r<a?-1:r>a?1:r===a?0:isNaN(r)?isNaN(a)?0:-1:1}(H,C);case 3:return sH(H.timestampValue,C.timestampValue);case 4:return sH(B0(H),B0(C));case 5:return l1(H.stringValue,C.stringValue);case 6:return function(t,i){const r=R5(t),a=R5(i);return r.compareTo(a)}(H.bytesValue,C.bytesValue);case 7:return function(t,i){const r=t.split("/"),a=i.split("/");for(let o=0;o<r.length&&o<a.length;o++){const s=l1(r[o],a[o]);if(s!==0)return s}return l1(r.length,a.length)}(H.referenceValue,C.referenceValue);case 8:return function(t,i){const r=l1(x1(t.latitude),x1(i.latitude));return r!==0?r:l1(x1(t.longitude),x1(i.longitude))}(H.geoPointValue,C.geoPointValue);case 9:return lH(H.arrayValue,C.arrayValue);case 10:return function(t,i){var r,a,o,s;const l=t.fields||{},u=i.fields||{},c=(r=l.value)===null||r===void 0?void 0:r.arrayValue,w=(a=u.value)===null||a===void 0?void 0:a.arrayValue,P=l1(((o=c==null?void 0:c.values)===null||o===void 0?void 0:o.length)||0,((s=w==null?void 0:w.values)===null||s===void 0?void 0:s.length)||0);return P!==0?P:lH(c,w)}(H.mapValue,C.mapValue);case 11:return function(t,i){if(t===m7.mapValue&&i===m7.mapValue)return 0;if(t===m7.mapValue)return 1;if(i===m7.mapValue)return-1;const r=t.fields||{},a=Object.keys(r),o=i.fields||{},s=Object.keys(o);a.sort(),s.sort();for(let l=0;l<a.length&&l<s.length;++l){const u=l1(a[l],s[l]);if(u!==0)return u;const c=x3(r[a[l]],o[s[l]]);if(c!==0)return c}return l1(a.length,s.length)}(H.mapValue,C.mapValue);default:throw M1()}}function sH(H,C){if(typeof H=="string"&&typeof C=="string"&&H.length===C.length)return l1(H,C);const V=b5(H),L=b5(C),e=l1(V.seconds,L.seconds);return e!==0?e:l1(V.nanos,L.nanos)}function lH(H,C){const V=H.values||[],L=C.values||[];for(let e=0;e<V.length&&e<L.length;++e){const t=x3(V[e],L[e]);if(t)return t}return l1(V.length,L.length)}function D3(H){return z4(H)}function z4(H){return"nullValue"in H?"null":"booleanValue"in H?""+H.booleanValue:"integerValue"in H?""+H.integerValue:"doubleValue"in H?""+H.doubleValue:"timestampValue"in H?function(V){const L=b5(V);return`time(${L.seconds},${L.nanos})`}(H.timestampValue):"stringValue"in H?H.stringValue:"bytesValue"in H?function(V){return R5(V).toBase64()}(H.bytesValue):"referenceValue"in H?function(V){return L1.fromName(V).toString()}(H.referenceValue):"geoPointValue"in H?function(V){return`geo(${V.latitude},${V.longitude})`}(H.geoPointValue):"arrayValue"in H?function(V){let L="[",e=!0;for(const t of V.values||[])e?e=!1:L+=",",L+=z4(t);return L+"]"}(H.arrayValue):"mapValue"in H?function(V){const L=Object.keys(V.fields||{}).sort();let e="{",t=!0;for(const i of L)t?t=!1:e+=",",e+=`${i}:${z4(V.fields[i])}`;return e+"}"}(H.mapValue):M1()}function _7(H){switch(k5(H)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const C=c9(H);return C?16+_7(C):16;case 5:return 2*H.stringValue.length;case 6:return R5(H.bytesValue).approximateByteSize();case 7:return H.referenceValue.length;case 9:return function(L){return(L.values||[]).reduce((e,t)=>e+_7(t),0)}(H.arrayValue);case 10:case 11:return function(L){let e=0;return N5(L.fields,(t,i)=>{e+=t.length+_7(i)}),e}(H.mapValue);default:throw M1()}}function Q4(H){return!!H&&"integerValue"in H}function w6(H){return!!H&&"arrayValue"in H}function dH(H){return!!H&&"nullValue"in H}function uH(H){return!!H&&"doubleValue"in H&&isNaN(Number(H.doubleValue))}function T7(H){return!!H&&"mapValue"in H}function vo(H){var C,V;return((V=(((C=H==null?void 0:H.mapValue)===null||C===void 0?void 0:C.fields)||{}).__type__)===null||V===void 0?void 0:V.stringValue)==="__vector__"}function S0(H){if(H.geoPointValue)return{geoPointValue:Object.assign({},H.geoPointValue)};if(H.timestampValue&&typeof H.timestampValue=="object")return{timestampValue:Object.assign({},H.timestampValue)};if(H.mapValue){const C={mapValue:{fields:{}}};return N5(H.mapValue.fields,(V,L)=>C.mapValue.fields[V]=S0(L)),C}if(H.arrayValue){const C={arrayValue:{values:[]}};for(let V=0;V<(H.arrayValue.values||[]).length;++V)C.arrayValue.values[V]=S0(H.arrayValue.values[V]);return C}return Object.assign({},H)}function ho(H){return(((H.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(C){this.value=C}static empty(){return new f2({mapValue:{}})}field(C){if(C.isEmpty())return this.value;{let V=this.value;for(let L=0;L<C.length-1;++L)if(V=(V.mapValue.fields||{})[C.get(L)],!T7(V))return null;return V=(V.mapValue.fields||{})[C.lastSegment()],V||null}}set(C,V){this.getFieldsMap(C.popLast())[C.lastSegment()]=S0(V)}setAll(C){let V=Y1.emptyPath(),L={},e=[];C.forEach((i,r)=>{if(!V.isImmediateParentOf(r)){const a=this.getFieldsMap(V);this.applyChanges(a,L,e),L={},e=[],V=r.popLast()}i?L[r.lastSegment()]=S0(i):e.push(r.lastSegment())});const t=this.getFieldsMap(V);this.applyChanges(t,L,e)}delete(C){const V=this.field(C.popLast());T7(V)&&V.mapValue.fields&&delete V.mapValue.fields[C.lastSegment()]}isEqual(C){return V5(this.value,C.value)}getFieldsMap(C){let V=this.value;V.mapValue.fields||(V.mapValue={fields:{}});for(let L=0;L<C.length;++L){let e=V.mapValue.fields[C.get(L)];T7(e)&&e.mapValue.fields||(e={mapValue:{fields:{}}},V.mapValue.fields[C.get(L)]=e),V=e}return V.mapValue.fields}applyChanges(C,V,L){N5(V,(e,t)=>C[e]=t);for(const e of L)delete C[e]}clone(){return new f2(S0(this.value))}}function qL(H){const C=[];return N5(H.fields,(V,L)=>{const e=new Y1([V]);if(T7(L)){const t=qL(L.mapValue).fields;if(t.length===0)C.push(e);else for(const i of t)C.push(e.child(i))}else C.push(e)}),new w2(C)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(C,V,L,e,t,i,r){this.key=C,this.documentType=V,this.version=L,this.readTime=e,this.createTime=t,this.data=i,this.documentState=r}static newInvalidDocument(C){return new r2(C,0,i1.min(),i1.min(),i1.min(),f2.empty(),0)}static newFoundDocument(C,V,L,e){return new r2(C,1,V,i1.min(),L,e,0)}static newNoDocument(C,V){return new r2(C,2,V,i1.min(),i1.min(),f2.empty(),0)}static newUnknownDocument(C,V){return new r2(C,3,V,i1.min(),i1.min(),f2.empty(),2)}convertToFoundDocument(C,V){return!this.createTime.isEqual(i1.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=C),this.version=C,this.documentType=1,this.data=V,this.documentState=0,this}convertToNoDocument(C){return this.version=C,this.documentType=2,this.data=f2.empty(),this.documentState=0,this}convertToUnknownDocument(C){return this.version=C,this.documentType=3,this.data=f2.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=i1.min(),this}setReadTime(C){return this.readTime=C,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(C){return C instanceof r2&&this.key.isEqual(C.key)&&this.version.isEqual(C.version)&&this.documentType===C.documentType&&this.documentState===C.documentState&&this.data.isEqual(C.data)}mutableCopy(){return new r2(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G7{constructor(C,V){this.position=C,this.inclusive=V}}function mH(H,C,V){let L=0;for(let e=0;e<H.position.length;e++){const t=C[e],i=H.position[e];if(t.field.isKeyField()?L=L1.comparator(L1.fromName(i.referenceValue),V.key):L=x3(i,V.data.field(t.field)),t.dir==="desc"&&(L*=-1),L!==0)break}return L}function cH(H,C){if(H===null)return C===null;if(C===null||H.inclusive!==C.inclusive||H.position.length!==C.position.length)return!1;for(let V=0;V<H.position.length;V++)if(!V5(H.position[V],C.position[V]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z7{constructor(C,V="asc"){this.field=C,this.dir=V}}function fo(H,C){return H.dir===C.dir&&H.field.isEqual(C.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{}class W1 extends KL{constructor(C,V,L){super(),this.field=C,this.op=V,this.value=L}static create(C,V,L){return C.isKeyField()?V==="in"||V==="not-in"?this.createKeyFieldInFilter(C,V,L):new So(C,V,L):V==="array-contains"?new Oo(C,L):V==="in"?new yo(C,L):V==="not-in"?new _o(C,L):V==="array-contains-any"?new To(C,L):new W1(C,V,L)}static createKeyFieldInFilter(C,V,L){return V==="in"?new po(C,L):new go(C,L)}matches(C){const V=C.data.field(this.field);return this.op==="!="?V!==null&&this.matchesComparison(x3(V,this.value)):V!==null&&k5(this.value)===k5(V)&&this.matchesComparison(x3(V,this.value))}matchesComparison(C){switch(this.op){case"<":return C<0;case"<=":return C<=0;case"==":return C===0;case"!=":return C!==0;case">":return C>0;case">=":return C>=0;default:return M1()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class L5 extends KL{constructor(C,V){super(),this.filters=C,this.op=V,this.ae=null}static create(C,V){return new L5(C,V)}matches(C){return XL(this)?this.filters.find(V=>!V.matches(C))===void 0:this.filters.find(V=>V.matches(C))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((C,V)=>C.concat(V.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function XL(H){return H.op==="and"}function YL(H){return Zo(H)&&XL(H)}function Zo(H){for(const C of H.filters)if(C instanceof L5)return!1;return!0}function j4(H){if(H instanceof W1)return H.field.canonicalString()+H.op.toString()+D3(H.value);if(YL(H))return H.filters.map(C=>j4(C)).join(",");{const C=H.filters.map(V=>j4(V)).join(",");return`${H.op}(${C})`}}function JL(H,C){return H instanceof W1?function(L,e){return e instanceof W1&&L.op===e.op&&L.field.isEqual(e.field)&&V5(L.value,e.value)}(H,C):H instanceof L5?function(L,e){return e instanceof L5&&L.op===e.op&&L.filters.length===e.filters.length?L.filters.reduce((t,i,r)=>t&&JL(i,e.filters[r]),!0):!1}(H,C):void M1()}function Ce(H){return H instanceof W1?function(V){return`${V.field.canonicalString()} ${V.op} ${D3(V.value)}`}(H):H instanceof L5?function(V){return V.op.toString()+" {"+V.getFilters().map(Ce).join(" ,")+"}"}(H):"Filter"}class So extends W1{constructor(C,V,L){super(C,V,L),this.key=L1.fromName(L.referenceValue)}matches(C){const V=L1.comparator(C.key,this.key);return this.matchesComparison(V)}}class po extends W1{constructor(C,V){super(C,"in",V),this.keys=He("in",V)}matches(C){return this.keys.some(V=>V.isEqual(C.key))}}class go extends W1{constructor(C,V){super(C,"not-in",V),this.keys=He("not-in",V)}matches(C){return!this.keys.some(V=>V.isEqual(C.key))}}function He(H,C){var V;return(((V=C.arrayValue)===null||V===void 0?void 0:V.values)||[]).map(L=>L1.fromName(L.referenceValue))}class Oo extends W1{constructor(C,V){super(C,"array-contains",V)}matches(C){const V=C.data.field(this.field);return w6(V)&&x0(V.arrayValue,this.value)}}class yo extends W1{constructor(C,V){super(C,"in",V)}matches(C){const V=C.data.field(this.field);return V!==null&&x0(this.value.arrayValue,V)}}class _o extends W1{constructor(C,V){super(C,"not-in",V)}matches(C){if(x0(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const V=C.data.field(this.field);return V!==null&&!x0(this.value.arrayValue,V)}}class To extends W1{constructor(C,V){super(C,"array-contains-any",V)}matches(C){const V=C.data.field(this.field);return!(!w6(V)||!V.arrayValue.values)&&V.arrayValue.values.some(L=>x0(this.value.arrayValue,L))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(C,V=null,L=[],e=[],t=null,i=null,r=null){this.path=C,this.collectionGroup=V,this.orderBy=L,this.filters=e,this.limit=t,this.startAt=i,this.endAt=r,this.ue=null}}function vH(H,C=null,V=[],L=[],e=null,t=null,i=null){return new wo(H,C,V,L,e,t,i)}function E6(H){const C=a1(H);if(C.ue===null){let V=C.path.canonicalString();C.collectionGroup!==null&&(V+="|cg:"+C.collectionGroup),V+="|f:",V+=C.filters.map(L=>j4(L)).join(","),V+="|ob:",V+=C.orderBy.map(L=>function(t){return t.field.canonicalString()+t.dir}(L)).join(","),m9(C.limit)||(V+="|l:",V+=C.limit),C.startAt&&(V+="|lb:",V+=C.startAt.inclusive?"b:":"a:",V+=C.startAt.position.map(L=>D3(L)).join(",")),C.endAt&&(V+="|ub:",V+=C.endAt.inclusive?"a:":"b:",V+=C.endAt.position.map(L=>D3(L)).join(",")),C.ue=V}return C.ue}function P6(H,C){if(H.limit!==C.limit||H.orderBy.length!==C.orderBy.length)return!1;for(let V=0;V<H.orderBy.length;V++)if(!fo(H.orderBy[V],C.orderBy[V]))return!1;if(H.filters.length!==C.filters.length)return!1;for(let V=0;V<H.filters.length;V++)if(!JL(H.filters[V],C.filters[V]))return!1;return H.collectionGroup===C.collectionGroup&&!!H.path.isEqual(C.path)&&!!cH(H.startAt,C.startAt)&&cH(H.endAt,C.endAt)}function $4(H){return L1.isDocumentKey(H.path)&&H.collectionGroup===null&&H.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v9{constructor(C,V=null,L=[],e=[],t=null,i="F",r=null,a=null){this.path=C,this.collectionGroup=V,this.explicitOrderBy=L,this.filters=e,this.limit=t,this.limitType=i,this.startAt=r,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Eo(H,C,V,L,e,t,i,r){return new v9(H,C,V,L,e,t,i,r)}function Ve(H){return new v9(H)}function hH(H){return H.filters.length===0&&H.limit===null&&H.startAt==null&&H.endAt==null&&(H.explicitOrderBy.length===0||H.explicitOrderBy.length===1&&H.explicitOrderBy[0].field.isKeyField())}function Po(H){return H.collectionGroup!==null}function p0(H){const C=a1(H);if(C.ce===null){C.ce=[];const V=new Set;for(const t of C.explicitOrderBy)C.ce.push(t),V.add(t.field.canonicalString());const L=C.explicitOrderBy.length>0?C.explicitOrderBy[C.explicitOrderBy.length-1].dir:"asc";(function(i){let r=new z1(Y1.comparator);return i.filters.forEach(a=>{a.getFlattenedFilters().forEach(o=>{o.isInequality()&&(r=r.add(o.field))})}),r})(C).forEach(t=>{V.has(t.canonicalString())||t.isKeyField()||C.ce.push(new z7(t,L))}),V.has(Y1.keyField().canonicalString())||C.ce.push(new z7(Y1.keyField(),L))}return C.ce}function Y2(H){const C=a1(H);return C.le||(C.le=bo(C,p0(H))),C.le}function bo(H,C){if(H.limitType==="F")return vH(H.path,H.collectionGroup,C,H.filters,H.limit,H.startAt,H.endAt);{C=C.map(e=>{const t=e.dir==="desc"?"asc":"desc";return new z7(e.field,t)});const V=H.endAt?new G7(H.endAt.position,H.endAt.inclusive):null,L=H.startAt?new G7(H.startAt.position,H.startAt.inclusive):null;return vH(H.path,H.collectionGroup,C,H.filters,H.limit,V,L)}}function q4(H,C,V){return new v9(H.path,H.collectionGroup,H.explicitOrderBy.slice(),H.filters.slice(),C,V,H.startAt,H.endAt)}function h9(H,C){return P6(Y2(H),Y2(C))&&H.limitType===C.limitType}function Le(H){return`${E6(Y2(H))}|lt:${H.limitType}`}function Z3(H){return`Query(target=${function(V){let L=V.path.canonicalString();return V.collectionGroup!==null&&(L+=" collectionGroup="+V.collectionGroup),V.filters.length>0&&(L+=`, filters: [${V.filters.map(e=>Ce(e)).join(", ")}]`),m9(V.limit)||(L+=", limit: "+V.limit),V.orderBy.length>0&&(L+=`, orderBy: [${V.orderBy.map(e=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(e)).join(", ")}]`),V.startAt&&(L+=", startAt: ",L+=V.startAt.inclusive?"b:":"a:",L+=V.startAt.position.map(e=>D3(e)).join(",")),V.endAt&&(L+=", endAt: ",L+=V.endAt.inclusive?"a:":"b:",L+=V.endAt.position.map(e=>D3(e)).join(",")),`Target(${L})`}(Y2(H))}; limitType=${H.limitType})`}function f9(H,C){return C.isFoundDocument()&&function(L,e){const t=e.key.path;return L.collectionGroup!==null?e.key.hasCollectionId(L.collectionGroup)&&L.path.isPrefixOf(t):L1.isDocumentKey(L.path)?L.path.isEqual(t):L.path.isImmediateParentOf(t)}(H,C)&&function(L,e){for(const t of p0(L))if(!t.field.isKeyField()&&e.data.field(t.field)===null)return!1;return!0}(H,C)&&function(L,e){for(const t of L.filters)if(!t.matches(e))return!1;return!0}(H,C)&&function(L,e){return!(L.startAt&&!function(i,r,a){const o=mH(i,r,a);return i.inclusive?o<=0:o<0}(L.startAt,p0(L),e)||L.endAt&&!function(i,r,a){const o=mH(i,r,a);return i.inclusive?o>=0:o>0}(L.endAt,p0(L),e))}(H,C)}function Ro(H){return H.collectionGroup||(H.path.length%2==1?H.path.lastSegment():H.path.get(H.path.length-2))}function ee(H){return(C,V)=>{let L=!1;for(const e of p0(H)){const t=ko(e,C,V);if(t!==0)return t;L=L||e.field.isKeyField()}return 0}}function ko(H,C,V){const L=H.field.isKeyField()?L1.comparator(C.key,V.key):function(t,i,r){const a=i.data.field(t),o=r.data.field(t);return a!==null&&o!==null?x3(a,o):M1()}(H.field,C,V);switch(H.dir){case"asc":return L;case"desc":return-1*L;default:return M1()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(C,V){this.mapKeyFn=C,this.equalsFn=V,this.inner={},this.innerSize=0}get(C){const V=this.mapKeyFn(C),L=this.inner[V];if(L!==void 0){for(const[e,t]of L)if(this.equalsFn(e,C))return t}}has(C){return this.get(C)!==void 0}set(C,V){const L=this.mapKeyFn(C),e=this.inner[L];if(e===void 0)return this.inner[L]=[[C,V]],void this.innerSize++;for(let t=0;t<e.length;t++)if(this.equalsFn(e[t][0],C))return void(e[t]=[C,V]);e.push([C,V]),this.innerSize++}delete(C){const V=this.mapKeyFn(C),L=this.inner[V];if(L===void 0)return!1;for(let e=0;e<L.length;e++)if(this.equalsFn(L[e][0],C))return L.length===1?delete this.inner[V]:L.splice(e,1),this.innerSize--,!0;return!1}forEach(C){N5(this.inner,(V,L)=>{for(const[e,t]of L)C(e,t)})}isEmpty(){return jL(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new B1(L1.comparator);function l5(){return Io}const te=new B1(L1.comparator);function s0(...H){let C=te;for(const V of H)C=C.insert(V.key,V);return C}function Me(H){let C=te;return H.forEach((V,L)=>C=C.insert(V,L.overlayedDocument)),C}function Y5(){return g0()}function ie(){return g0()}function g0(){return new a3(H=>H.toString(),(H,C)=>H.isEqual(C))}const Bo=new B1(L1.comparator),Fo=new z1(L1.comparator);function s1(...H){let C=Fo;for(const V of H)C=C.add(V);return C}const xo=new z1(l1);function Do(){return xo}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(H,C){if(H.useProto3Json){if(isNaN(C))return{doubleValue:"NaN"};if(C===1/0)return{doubleValue:"Infinity"};if(C===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:W7(C)?"-0":C}}function re(H){return{integerValue:""+H}}function No(H,C){return so(C)?re(C):b6(H,C)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z9{constructor(){this._=void 0}}function Uo(H,C,V){return H instanceof Q7?function(e,t){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&T6(t)&&(t=c9(t)),t&&(i.fields.__previous_value__=t),{mapValue:i}}(V,C):H instanceof D0?ne(H,C):H instanceof N0?oe(H,C):function(e,t){const i=ae(e,t),r=fH(i)+fH(e.Pe);return Q4(i)&&Q4(e.Pe)?re(r):b6(e.serializer,r)}(H,C)}function Wo(H,C,V){return H instanceof D0?ne(H,C):H instanceof N0?oe(H,C):V}function ae(H,C){return H instanceof j7?function(L){return Q4(L)||function(t){return!!t&&"doubleValue"in t}(L)}(C)?C:{integerValue:0}:null}class Q7 extends Z9{}class D0 extends Z9{constructor(C){super(),this.elements=C}}function ne(H,C){const V=Ae(C);for(const L of H.elements)V.some(e=>V5(e,L))||V.push(L);return{arrayValue:{values:V}}}class N0 extends Z9{constructor(C){super(),this.elements=C}}function oe(H,C){let V=Ae(C);for(const L of H.elements)V=V.filter(e=>!V5(e,L));return{arrayValue:{values:V}}}class j7 extends Z9{constructor(C,V){super(),this.serializer=C,this.Pe=V}}function fH(H){return x1(H.integerValue||H.doubleValue)}function Ae(H){return w6(H)&&H.arrayValue.values?H.arrayValue.values.slice():[]}function Go(H,C){return H.field.isEqual(C.field)&&function(L,e){return L instanceof D0&&e instanceof D0||L instanceof N0&&e instanceof N0?F3(L.elements,e.elements,V5):L instanceof j7&&e instanceof j7?V5(L.Pe,e.Pe):L instanceof Q7&&e instanceof Q7}(H.transform,C.transform)}class zo{constructor(C,V){this.version=C,this.transformResults=V}}class W2{constructor(C,V){this.updateTime=C,this.exists=V}static none(){return new W2}static exists(C){return new W2(void 0,C)}static updateTime(C){return new W2(C)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(C){return this.exists===C.exists&&(this.updateTime?!!C.updateTime&&this.updateTime.isEqual(C.updateTime):!C.updateTime)}}function w7(H,C){return H.updateTime!==void 0?C.isFoundDocument()&&C.version.isEqual(H.updateTime):H.exists===void 0||H.exists===C.isFoundDocument()}class S9{}function se(H,C){if(!H.hasLocalMutations||C&&C.fields.length===0)return null;if(C===null)return H.isNoDocument()?new R6(H.key,W2.none()):new Q0(H.key,H.data,W2.none());{const V=H.data,L=f2.empty();let e=new z1(Y1.comparator);for(let t of C.fields)if(!e.has(t)){let i=V.field(t);i===null&&t.length>1&&(t=t.popLast(),i=V.field(t)),i===null?L.delete(t):L.set(t,i),e=e.add(t)}return new U5(H.key,L,new w2(e.toArray()),W2.none())}}function Qo(H,C,V){H instanceof Q0?function(e,t,i){const r=e.value.clone(),a=SH(e.fieldTransforms,t,i.transformResults);r.setAll(a),t.convertToFoundDocument(i.version,r).setHasCommittedMutations()}(H,C,V):H instanceof U5?function(e,t,i){if(!w7(e.precondition,t))return void t.convertToUnknownDocument(i.version);const r=SH(e.fieldTransforms,t,i.transformResults),a=t.data;a.setAll(le(e)),a.setAll(r),t.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(H,C,V):function(e,t,i){t.convertToNoDocument(i.version).setHasCommittedMutations()}(0,C,V)}function O0(H,C,V,L){return H instanceof Q0?function(t,i,r,a){if(!w7(t.precondition,i))return r;const o=t.value.clone(),s=pH(t.fieldTransforms,a,i);return o.setAll(s),i.convertToFoundDocument(i.version,o).setHasLocalMutations(),null}(H,C,V,L):H instanceof U5?function(t,i,r,a){if(!w7(t.precondition,i))return r;const o=pH(t.fieldTransforms,a,i),s=i.data;return s.setAll(le(t)),s.setAll(o),i.convertToFoundDocument(i.version,s).setHasLocalMutations(),r===null?null:r.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(l=>l.field))}(H,C,V,L):function(t,i,r){return w7(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):r}(H,C,V)}function jo(H,C){let V=null;for(const L of H.fieldTransforms){const e=C.data.field(L.field),t=ae(L.transform,e||null);t!=null&&(V===null&&(V=f2.empty()),V.set(L.field,t))}return V||null}function ZH(H,C){return H.type===C.type&&!!H.key.isEqual(C.key)&&!!H.precondition.isEqual(C.precondition)&&!!function(L,e){return L===void 0&&e===void 0||!(!L||!e)&&F3(L,e,(t,i)=>Go(t,i))}(H.fieldTransforms,C.fieldTransforms)&&(H.type===0?H.value.isEqual(C.value):H.type!==1||H.data.isEqual(C.data)&&H.fieldMask.isEqual(C.fieldMask))}class Q0 extends S9{constructor(C,V,L,e=[]){super(),this.key=C,this.value=V,this.precondition=L,this.fieldTransforms=e,this.type=0}getFieldMask(){return null}}class U5 extends S9{constructor(C,V,L,e,t=[]){super(),this.key=C,this.data=V,this.fieldMask=L,this.precondition=e,this.fieldTransforms=t,this.type=1}getFieldMask(){return this.fieldMask}}function le(H){const C=new Map;return H.fieldMask.fields.forEach(V=>{if(!V.isEmpty()){const L=H.data.field(V);C.set(V,L)}}),C}function SH(H,C,V){const L=new Map;O1(H.length===V.length);for(let e=0;e<V.length;e++){const t=H[e],i=t.transform,r=C.data.field(t.field);L.set(t.field,Wo(i,r,V[e]))}return L}function pH(H,C,V){const L=new Map;for(const e of H){const t=e.transform,i=V.data.field(e.field);L.set(e.field,Uo(t,i,C))}return L}class R6 extends S9{constructor(C,V){super(),this.key=C,this.precondition=V,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $o extends S9{constructor(C,V){super(),this.key=C,this.precondition=V,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(C,V,L,e){this.batchId=C,this.localWriteTime=V,this.baseMutations=L,this.mutations=e}applyToRemoteDocument(C,V){const L=V.mutationResults;for(let e=0;e<this.mutations.length;e++){const t=this.mutations[e];t.key.isEqual(C.key)&&Qo(t,C,L[e])}}applyToLocalView(C,V){for(const L of this.baseMutations)L.key.isEqual(C.key)&&(V=O0(L,C,V,this.localWriteTime));for(const L of this.mutations)L.key.isEqual(C.key)&&(V=O0(L,C,V,this.localWriteTime));return V}applyToLocalDocumentSet(C,V){const L=ie();return this.mutations.forEach(e=>{const t=C.get(e.key),i=t.overlayedDocument;let r=this.applyToLocalView(i,t.mutatedFields);r=V.has(e.key)?null:r;const a=se(i,r);a!==null&&L.set(e.key,a),i.isValidDocument()||i.convertToNoDocument(i1.min())}),L}keys(){return this.mutations.reduce((C,V)=>C.add(V.key),s1())}isEqual(C){return this.batchId===C.batchId&&F3(this.mutations,C.mutations,(V,L)=>ZH(V,L))&&F3(this.baseMutations,C.baseMutations,(V,L)=>ZH(V,L))}}class k6{constructor(C,V,L,e){this.batch=C,this.commitVersion=V,this.mutationResults=L,this.docVersions=e}static from(C,V,L){O1(C.mutations.length===L.length);let e=function(){return Bo}();const t=C.mutations;for(let i=0;i<t.length;i++)e=e.insert(t[i].key,L[i].version);return new k6(C,V,L,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(C,V){this.largestBatchId=C,this.mutation=V}getKey(){return this.mutation.key}isEqual(C){return C!==null&&this.mutation===C.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(C,V){this.count=C,this.unchangedNames=V}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N1,m1;function Yo(H){switch(H){default:return M1();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function de(H){if(H===void 0)return s5("GRPC error has no .code"),D.UNKNOWN;switch(H){case N1.OK:return D.OK;case N1.CANCELLED:return D.CANCELLED;case N1.UNKNOWN:return D.UNKNOWN;case N1.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case N1.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case N1.INTERNAL:return D.INTERNAL;case N1.UNAVAILABLE:return D.UNAVAILABLE;case N1.UNAUTHENTICATED:return D.UNAUTHENTICATED;case N1.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case N1.NOT_FOUND:return D.NOT_FOUND;case N1.ALREADY_EXISTS:return D.ALREADY_EXISTS;case N1.PERMISSION_DENIED:return D.PERMISSION_DENIED;case N1.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case N1.ABORTED:return D.ABORTED;case N1.OUT_OF_RANGE:return D.OUT_OF_RANGE;case N1.UNIMPLEMENTED:return D.UNIMPLEMENTED;case N1.DATA_LOSS:return D.DATA_LOSS;default:return M1()}}(m1=N1||(N1={}))[m1.OK=0]="OK",m1[m1.CANCELLED=1]="CANCELLED",m1[m1.UNKNOWN=2]="UNKNOWN",m1[m1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",m1[m1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",m1[m1.NOT_FOUND=5]="NOT_FOUND",m1[m1.ALREADY_EXISTS=6]="ALREADY_EXISTS",m1[m1.PERMISSION_DENIED=7]="PERMISSION_DENIED",m1[m1.UNAUTHENTICATED=16]="UNAUTHENTICATED",m1[m1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",m1[m1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",m1[m1.ABORTED=10]="ABORTED",m1[m1.OUT_OF_RANGE=11]="OUT_OF_RANGE",m1[m1.UNIMPLEMENTED=12]="UNIMPLEMENTED",m1[m1.INTERNAL=13]="INTERNAL",m1[m1.UNAVAILABLE=14]="UNAVAILABLE",m1[m1.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new H3([4294967295,4294967295],0);function gH(H){const C=Jo().encode(H),V=new xL;return V.update(C),new Uint8Array(V.digest())}function OH(H){const C=new DataView(H.buffer),V=C.getUint32(0,!0),L=C.getUint32(4,!0),e=C.getUint32(8,!0),t=C.getUint32(12,!0);return[new H3([V,L],0),new H3([e,t],0)]}class I6{constructor(C,V,L){if(this.bitmap=C,this.padding=V,this.hashCount=L,V<0||V>=8)throw new l0(`Invalid padding: ${V}`);if(L<0)throw new l0(`Invalid hash count: ${L}`);if(C.length>0&&this.hashCount===0)throw new l0(`Invalid hash count: ${L}`);if(C.length===0&&V!==0)throw new l0(`Invalid padding when bitmap length is 0: ${V}`);this.Te=8*C.length-V,this.Ie=H3.fromNumber(this.Te)}Ee(C,V,L){let e=C.add(V.multiply(H3.fromNumber(L)));return e.compare(CA)===1&&(e=new H3([e.getBits(0),e.getBits(1)],0)),e.modulo(this.Ie).toNumber()}de(C){return(this.bitmap[Math.floor(C/8)]&1<<C%8)!=0}mightContain(C){if(this.Te===0)return!1;const V=gH(C),[L,e]=OH(V);for(let t=0;t<this.hashCount;t++){const i=this.Ee(L,e,t);if(!this.de(i))return!1}return!0}static create(C,V,L){const e=C%8==0?0:8-C%8,t=new Uint8Array(Math.ceil(C/8)),i=new I6(t,e,V);return L.forEach(r=>i.insert(r)),i}insert(C){if(this.Te===0)return;const V=gH(C),[L,e]=OH(V);for(let t=0;t<this.hashCount;t++){const i=this.Ee(L,e,t);this.Ae(i)}}Ae(C){const V=Math.floor(C/8),L=C%8;this.bitmap[V]|=1<<L}}class l0 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p9{constructor(C,V,L,e,t){this.snapshotVersion=C,this.targetChanges=V,this.targetMismatches=L,this.documentUpdates=e,this.resolvedLimboDocuments=t}static createSynthesizedRemoteEventForCurrentChange(C,V,L){const e=new Map;return e.set(C,j0.createSynthesizedTargetChangeForCurrentChange(C,V,L)),new p9(i1.min(),e,new B1(l1),l5(),s1())}}class j0{constructor(C,V,L,e,t){this.resumeToken=C,this.current=V,this.addedDocuments=L,this.modifiedDocuments=e,this.removedDocuments=t}static createSynthesizedTargetChangeForCurrentChange(C,V,L){return new j0(L,V,s1(),s1(),s1())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E7{constructor(C,V,L,e){this.Re=C,this.removedTargetIds=V,this.key=L,this.Ve=e}}class ue{constructor(C,V){this.targetId=C,this.me=V}}class me{constructor(C,V,L=J1.EMPTY_BYTE_STRING,e=null){this.state=C,this.targetIds=V,this.resumeToken=L,this.cause=e}}class yH{constructor(){this.fe=0,this.ge=_H(),this.pe=J1.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(C){C.approximateByteSize()>0&&(this.we=!0,this.pe=C)}ve(){let C=s1(),V=s1(),L=s1();return this.ge.forEach((e,t)=>{switch(t){case 0:C=C.add(e);break;case 2:V=V.add(e);break;case 1:L=L.add(e);break;default:M1()}}),new j0(this.pe,this.ye,C,V,L)}Ce(){this.we=!1,this.ge=_H()}Fe(C,V){this.we=!0,this.ge=this.ge.insert(C,V)}Me(C){this.we=!0,this.ge=this.ge.remove(C)}xe(){this.fe+=1}Oe(){this.fe-=1,O1(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class HA{constructor(C){this.Le=C,this.Be=new Map,this.ke=l5(),this.qe=c7(),this.Qe=c7(),this.Ke=new B1(l1)}$e(C){for(const V of C.Re)C.Ve&&C.Ve.isFoundDocument()?this.Ue(V,C.Ve):this.We(V,C.key,C.Ve);for(const V of C.removedTargetIds)this.We(V,C.key,C.Ve)}Ge(C){this.forEachTarget(C,V=>{const L=this.ze(V);switch(C.state){case 0:this.je(V)&&L.De(C.resumeToken);break;case 1:L.Oe(),L.Se||L.Ce(),L.De(C.resumeToken);break;case 2:L.Oe(),L.Se||this.removeTarget(V);break;case 3:this.je(V)&&(L.Ne(),L.De(C.resumeToken));break;case 4:this.je(V)&&(this.He(V),L.De(C.resumeToken));break;default:M1()}})}forEachTarget(C,V){C.targetIds.length>0?C.targetIds.forEach(V):this.Be.forEach((L,e)=>{this.je(e)&&V(e)})}Je(C){const V=C.targetId,L=C.me.count,e=this.Ye(V);if(e){const t=e.target;if($4(t))if(L===0){const i=new L1(t.path);this.We(V,i,r2.newNoDocument(i,i1.min()))}else O1(L===1);else{const i=this.Ze(V);if(i!==L){const r=this.Xe(C),a=r?this.et(r,C,i):1;if(a!==0){this.He(V);const o=a===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(V,o)}}}}}Xe(C){const V=C.me.unchangedNames;if(!V||!V.bits)return null;const{bits:{bitmap:L="",padding:e=0},hashCount:t=0}=V;let i,r;try{i=R5(L).toUint8Array()}catch(a){if(a instanceof $L)return B3("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{r=new I6(i,e,t)}catch(a){return B3(a instanceof l0?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return r.Te===0?null:r}et(C,V,L){return V.me.count===L-this.rt(C,V.targetId)?0:2}rt(C,V){const L=this.Le.getRemoteKeysForTarget(V);let e=0;return L.forEach(t=>{const i=this.Le.nt(),r=`projects/${i.projectId}/databases/${i.database}/documents/${t.path.canonicalString()}`;C.mightContain(r)||(this.We(V,t,null),e++)}),e}it(C){const V=new Map;this.Be.forEach((t,i)=>{const r=this.Ye(i);if(r){if(t.current&&$4(r.target)){const a=new L1(r.target.path);this.st(a).has(i)||this.ot(i,a)||this.We(i,a,r2.newNoDocument(a,C))}t.be&&(V.set(i,t.ve()),t.Ce())}});let L=s1();this.Qe.forEach((t,i)=>{let r=!0;i.forEachWhile(a=>{const o=this.Ye(a);return!o||o.purpose==="TargetPurposeLimboResolution"||(r=!1,!1)}),r&&(L=L.add(t))}),this.ke.forEach((t,i)=>i.setReadTime(C));const e=new p9(C,V,this.Ke,this.ke,L);return this.ke=l5(),this.qe=c7(),this.Qe=c7(),this.Ke=new B1(l1),e}Ue(C,V){if(!this.je(C))return;const L=this.ot(C,V.key)?2:0;this.ze(C).Fe(V.key,L),this.ke=this.ke.insert(V.key,V),this.qe=this.qe.insert(V.key,this.st(V.key).add(C)),this.Qe=this.Qe.insert(V.key,this._t(V.key).add(C))}We(C,V,L){if(!this.je(C))return;const e=this.ze(C);this.ot(C,V)?e.Fe(V,1):e.Me(V),this.Qe=this.Qe.insert(V,this._t(V).delete(C)),this.Qe=this.Qe.insert(V,this._t(V).add(C)),L&&(this.ke=this.ke.insert(V,L))}removeTarget(C){this.Be.delete(C)}Ze(C){const V=this.ze(C).ve();return this.Le.getRemoteKeysForTarget(C).size+V.addedDocuments.size-V.removedDocuments.size}xe(C){this.ze(C).xe()}ze(C){let V=this.Be.get(C);return V||(V=new yH,this.Be.set(C,V)),V}_t(C){let V=this.Qe.get(C);return V||(V=new z1(l1),this.Qe=this.Qe.insert(C,V)),V}st(C){let V=this.qe.get(C);return V||(V=new z1(l1),this.qe=this.qe.insert(C,V)),V}je(C){const V=this.Ye(C)!==null;return V||X("WatchChangeAggregator","Detected inactive target",C),V}Ye(C){const V=this.Be.get(C);return V&&V.Se?null:this.Le.ut(C)}He(C){this.Be.set(C,new yH),this.Le.getRemoteKeysForTarget(C).forEach(V=>{this.We(C,V,null)})}ot(C,V){return this.Le.getRemoteKeysForTarget(C).has(V)}}function c7(){return new B1(L1.comparator)}function _H(){return new B1(L1.comparator)}const VA={asc:"ASCENDING",desc:"DESCENDING"},LA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eA={and:"AND",or:"OR"};class tA{constructor(C,V){this.databaseId=C,this.useProto3Json=V}}function K4(H,C){return H.useProto3Json||m9(C)?C:{value:C}}function $7(H,C){return H.useProto3Json?`${new Date(1e3*C.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+C.nanoseconds).slice(-9)}Z`:{seconds:""+C.seconds,nanos:C.nanoseconds}}function ce(H,C){return H.useProto3Json?C.toBase64():C.toUint8Array()}function MA(H,C){return $7(H,C.toTimestamp())}function J2(H){return O1(!!H),i1.fromTimestamp(function(V){const L=b5(V);return new G1(L.seconds,L.nanos)}(H))}function B6(H,C){return X4(H,C).canonicalString()}function X4(H,C){const V=function(e){return new b1(["projects",e.projectId,"databases",e.database])}(H).child("documents");return C===void 0?V:V.child(C)}function ve(H){const C=b1.fromString(H);return O1(pe(C)),C}function Y4(H,C){return B6(H.databaseId,C.path)}function d4(H,C){const V=ve(C);if(V.get(1)!==H.databaseId.projectId)throw new H1(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+V.get(1)+" vs "+H.databaseId.projectId);if(V.get(3)!==H.databaseId.database)throw new H1(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+V.get(3)+" vs "+H.databaseId.database);return new L1(fe(V))}function he(H,C){return B6(H.databaseId,C)}function iA(H){const C=ve(H);return C.length===4?b1.emptyPath():fe(C)}function J4(H){return new b1(["projects",H.databaseId.projectId,"databases",H.databaseId.database]).canonicalString()}function fe(H){return O1(H.length>4&&H.get(4)==="documents"),H.popFirst(5)}function TH(H,C,V){return{name:Y4(H,C),fields:V.value.mapValue.fields}}function rA(H,C){let V;if("targetChange"in C){C.targetChange;const L=function(o){return o==="NO_CHANGE"?0:o==="ADD"?1:o==="REMOVE"?2:o==="CURRENT"?3:o==="RESET"?4:M1()}(C.targetChange.targetChangeType||"NO_CHANGE"),e=C.targetChange.targetIds||[],t=function(o,s){return o.useProto3Json?(O1(s===void 0||typeof s=="string"),J1.fromBase64String(s||"")):(O1(s===void 0||s instanceof Buffer||s instanceof Uint8Array),J1.fromUint8Array(s||new Uint8Array))}(H,C.targetChange.resumeToken),i=C.targetChange.cause,r=i&&function(o){const s=o.code===void 0?D.UNKNOWN:de(o.code);return new H1(s,o.message||"")}(i);V=new me(L,e,t,r||null)}else if("documentChange"in C){C.documentChange;const L=C.documentChange;L.document,L.document.name,L.document.updateTime;const e=d4(H,L.document.name),t=J2(L.document.updateTime),i=L.document.createTime?J2(L.document.createTime):i1.min(),r=new f2({mapValue:{fields:L.document.fields}}),a=r2.newFoundDocument(e,t,i,r),o=L.targetIds||[],s=L.removedTargetIds||[];V=new E7(o,s,a.key,a)}else if("documentDelete"in C){C.documentDelete;const L=C.documentDelete;L.document;const e=d4(H,L.document),t=L.readTime?J2(L.readTime):i1.min(),i=r2.newNoDocument(e,t),r=L.removedTargetIds||[];V=new E7([],r,i.key,i)}else if("documentRemove"in C){C.documentRemove;const L=C.documentRemove;L.document;const e=d4(H,L.document),t=L.removedTargetIds||[];V=new E7([],t,e,null)}else{if(!("filter"in C))return M1();{C.filter;const L=C.filter;L.targetId;const{count:e=0,unchangedNames:t}=L,i=new Xo(e,t),r=L.targetId;V=new ue(r,i)}}return V}function aA(H,C){let V;if(C instanceof Q0)V={update:TH(H,C.key,C.value)};else if(C instanceof R6)V={delete:Y4(H,C.key)};else if(C instanceof U5)V={update:TH(H,C.key,C.data),updateMask:cA(C.fieldMask)};else{if(!(C instanceof $o))return M1();V={verify:Y4(H,C.key)}}return C.fieldTransforms.length>0&&(V.updateTransforms=C.fieldTransforms.map(L=>function(t,i){const r=i.transform;if(r instanceof Q7)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof D0)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof N0)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof j7)return{fieldPath:i.field.canonicalString(),increment:r.Pe};throw M1()}(0,L))),C.precondition.isNone||(V.currentDocument=function(e,t){return t.updateTime!==void 0?{updateTime:MA(e,t.updateTime)}:t.exists!==void 0?{exists:t.exists}:M1()}(H,C.precondition)),V}function nA(H,C){return H&&H.length>0?(O1(C!==void 0),H.map(V=>function(e,t){let i=e.updateTime?J2(e.updateTime):J2(t);return i.isEqual(i1.min())&&(i=J2(t)),new zo(i,e.transformResults||[])}(V,C))):[]}function oA(H,C){return{documents:[he(H,C.path)]}}function AA(H,C){const V={structuredQuery:{}},L=C.path;let e;C.collectionGroup!==null?(e=L,V.structuredQuery.from=[{collectionId:C.collectionGroup,allDescendants:!0}]):(e=L.popLast(),V.structuredQuery.from=[{collectionId:L.lastSegment()}]),V.parent=he(H,e);const t=function(o){if(o.length!==0)return Se(L5.create(o,"and"))}(C.filters);t&&(V.structuredQuery.where=t);const i=function(o){if(o.length!==0)return o.map(s=>function(u){return{field:S3(u.field),direction:dA(u.dir)}}(s))}(C.orderBy);i&&(V.structuredQuery.orderBy=i);const r=K4(H,C.limit);return r!==null&&(V.structuredQuery.limit=r),C.startAt&&(V.structuredQuery.startAt=function(o){return{before:o.inclusive,values:o.position}}(C.startAt)),C.endAt&&(V.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(C.endAt)),{ct:V,parent:e}}function sA(H){let C=iA(H.parent);const V=H.structuredQuery,L=V.from?V.from.length:0;let e=null;if(L>0){O1(L===1);const s=V.from[0];s.allDescendants?e=s.collectionId:C=C.child(s.collectionId)}let t=[];V.where&&(t=function(l){const u=Ze(l);return u instanceof L5&&YL(u)?u.getFilters():[u]}(V.where));let i=[];V.orderBy&&(i=function(l){return l.map(u=>function(w){return new z7(p3(w.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(u))}(V.orderBy));let r=null;V.limit&&(r=function(l){let u;return u=typeof l=="object"?l.value:l,m9(u)?null:u}(V.limit));let a=null;V.startAt&&(a=function(l){const u=!!l.before,c=l.values||[];return new G7(c,u)}(V.startAt));let o=null;return V.endAt&&(o=function(l){const u=!l.before,c=l.values||[];return new G7(c,u)}(V.endAt)),Eo(C,e,i,t,r,"F",a,o)}function lA(H,C){const V=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M1()}}(C.purpose);return V==null?null:{"goog-listen-tags":V}}function Ze(H){return H.unaryFilter!==void 0?function(V){switch(V.unaryFilter.op){case"IS_NAN":const L=p3(V.unaryFilter.field);return W1.create(L,"==",{doubleValue:NaN});case"IS_NULL":const e=p3(V.unaryFilter.field);return W1.create(e,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const t=p3(V.unaryFilter.field);return W1.create(t,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=p3(V.unaryFilter.field);return W1.create(i,"!=",{nullValue:"NULL_VALUE"});default:return M1()}}(H):H.fieldFilter!==void 0?function(V){return W1.create(p3(V.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M1()}}(V.fieldFilter.op),V.fieldFilter.value)}(H):H.compositeFilter!==void 0?function(V){return L5.create(V.compositeFilter.filters.map(L=>Ze(L)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return M1()}}(V.compositeFilter.op))}(H):M1()}function dA(H){return VA[H]}function uA(H){return LA[H]}function mA(H){return eA[H]}function S3(H){return{fieldPath:H.canonicalString()}}function p3(H){return Y1.fromServerFormat(H.fieldPath)}function Se(H){return H instanceof W1?function(V){if(V.op==="=="){if(uH(V.value))return{unaryFilter:{field:S3(V.field),op:"IS_NAN"}};if(dH(V.value))return{unaryFilter:{field:S3(V.field),op:"IS_NULL"}}}else if(V.op==="!="){if(uH(V.value))return{unaryFilter:{field:S3(V.field),op:"IS_NOT_NAN"}};if(dH(V.value))return{unaryFilter:{field:S3(V.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:S3(V.field),op:uA(V.op),value:V.value}}}(H):H instanceof L5?function(V){const L=V.getFilters().map(e=>Se(e));return L.length===1?L[0]:{compositeFilter:{op:mA(V.op),filters:L}}}(H):M1()}function cA(H){const C=[];return H.fields.forEach(V=>C.push(V.canonicalString())),{fieldPaths:C}}function pe(H){return H.length>=4&&H.get(0)==="projects"&&H.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5{constructor(C,V,L,e,t=i1.min(),i=i1.min(),r=J1.EMPTY_BYTE_STRING,a=null){this.target=C,this.targetId=V,this.purpose=L,this.sequenceNumber=e,this.snapshotVersion=t,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=r,this.expectedCount=a}withSequenceNumber(C){return new g5(this.target,this.targetId,this.purpose,C,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(C,V){return new g5(this.target,this.targetId,this.purpose,this.sequenceNumber,V,this.lastLimboFreeSnapshotVersion,C,null)}withExpectedCount(C){return new g5(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,C)}withLastLimboFreeSnapshotVersion(C){return new g5(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,C,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(C){this.ht=C}}function hA(H){const C=sA({parent:H.parent,structuredQuery:H.structuredQuery});return H.limitType==="LAST"?q4(C,C.limit,"L"):C}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.ln=new ZA}addToCollectionParentIndex(C,V){return this.ln.add(V),I.resolve()}getCollectionParents(C,V){return I.resolve(this.ln.getEntries(V))}addFieldIndex(C,V){return I.resolve()}deleteFieldIndex(C,V){return I.resolve()}deleteAllFieldIndexes(C){return I.resolve()}createTargetIndexes(C,V){return I.resolve()}getDocumentsMatchingTarget(C,V){return I.resolve(null)}getIndexType(C,V){return I.resolve(0)}getFieldIndexes(C,V){return I.resolve([])}getNextCollectionGroupToUpdate(C){return I.resolve(null)}getMinOffset(C,V){return I.resolve(P5.min())}getMinOffsetFromCollectionGroup(C,V){return I.resolve(P5.min())}updateCollectionGroup(C,V,L){return I.resolve()}updateIndexEntries(C,V){return I.resolve()}}class ZA{constructor(){this.index={}}add(C){const V=C.lastSegment(),L=C.popLast(),e=this.index[V]||new z1(b1.comparator),t=!e.has(L);return this.index[V]=e.add(L),t}has(C){const V=C.lastSegment(),L=C.popLast(),e=this.index[V];return e&&e.has(L)}getEntries(C){return(this.index[C]||new z1(b1.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wH={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class v2{static withCacheSize(C){return new v2(C,v2.DEFAULT_COLLECTION_PERCENTILE,v2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(C,V,L){this.cacheSizeCollectionThreshold=C,this.percentileToCollect=V,this.maximumSequenceNumbersToCollect=L}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */v2.DEFAULT_COLLECTION_PERCENTILE=10,v2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,v2.DEFAULT=new v2(41943040,v2.DEFAULT_COLLECTION_PERCENTILE,v2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),v2.DISABLED=new v2(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(C){this.kn=C}next(){return this.kn+=2,this.kn}static qn(){return new N3(0)}static Qn(){return new N3(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EH([H,C],[V,L]){const e=l1(H,V);return e===0?l1(C,L):e}class SA{constructor(C){this.Gn=C,this.buffer=new z1(EH),this.zn=0}jn(){return++this.zn}Hn(C){const V=[C,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(V);else{const L=this.buffer.last();EH(V,L)<0&&(this.buffer=this.buffer.delete(L).add(V))}}get maxValue(){return this.buffer.last()[0]}}class pA{constructor(C,V,L){this.garbageCollector=C,this.asyncQueue=V,this.localStore=L,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(C){X("LruGarbageCollector",`Garbage collection scheduled in ${C}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",C,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(V){j3(V)?X("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",V):await Q3(V)}await this.Yn(3e5)})}}class gA{constructor(C,V){this.Zn=C,this.params=V}calculateTargetCount(C,V){return this.Zn.Xn(C).next(L=>Math.floor(V/100*L))}nthSequenceNumber(C,V){if(V===0)return I.resolve(u9.oe);const L=new SA(V);return this.Zn.forEachTarget(C,e=>L.Hn(e.sequenceNumber)).next(()=>this.Zn.er(C,e=>L.Hn(e))).next(()=>L.maxValue)}removeTargets(C,V,L){return this.Zn.removeTargets(C,V,L)}removeOrphanedDocuments(C,V){return this.Zn.removeOrphanedDocuments(C,V)}collect(C,V){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(wH)):this.getCacheSize(C).next(L=>L<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${L} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wH):this.tr(C,V))}getCacheSize(C){return this.Zn.getCacheSize(C)}tr(C,V){let L,e,t,i,r,a,o;const s=Date.now();return this.calculateTargetCount(C,this.params.percentileToCollect).next(l=>(l>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${l}`),e=this.params.maximumSequenceNumbersToCollect):e=l,i=Date.now(),this.nthSequenceNumber(C,e))).next(l=>(L=l,r=Date.now(),this.removeTargets(C,L,V))).next(l=>(t=l,a=Date.now(),this.removeOrphanedDocuments(C,L))).next(l=>(o=Date.now(),f3()<=c1.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${i-s}ms
	Determined least recently used ${e} in `+(r-i)+`ms
	Removed ${t} targets in `+(a-r)+`ms
	Removed ${l} documents in `+(o-a)+`ms
Total Duration: ${o-s}ms`),I.resolve({didRun:!0,sequenceNumbersCollected:e,targetsRemoved:t,documentsRemoved:l})))}}function OA(H,C){return new gA(H,C)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.changes=new a3(C=>C.toString(),(C,V)=>C.isEqual(V)),this.changesApplied=!1}addEntry(C){this.assertNotApplied(),this.changes.set(C.key,C)}removeEntry(C,V){this.assertNotApplied(),this.changes.set(C,r2.newInvalidDocument(C).setReadTime(V))}getEntry(C,V){this.assertNotApplied();const L=this.changes.get(V);return L!==void 0?I.resolve(L):this.getFromCache(C,V)}getEntries(C,V){return this.getAllFromCache(C,V)}apply(C){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(C)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(C,V){this.overlayedDocument=C,this.mutatedFields=V}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(C,V,L,e){this.remoteDocumentCache=C,this.mutationQueue=V,this.documentOverlayCache=L,this.indexManager=e}getDocument(C,V){let L=null;return this.documentOverlayCache.getOverlay(C,V).next(e=>(L=e,this.remoteDocumentCache.getEntry(C,V))).next(e=>(L!==null&&O0(L.mutation,e,w2.empty(),G1.now()),e))}getDocuments(C,V){return this.remoteDocumentCache.getEntries(C,V).next(L=>this.getLocalViewOfDocuments(C,L,s1()).next(()=>L))}getLocalViewOfDocuments(C,V,L=s1()){const e=Y5();return this.populateOverlays(C,e,V).next(()=>this.computeViews(C,V,e,L).next(t=>{let i=s0();return t.forEach((r,a)=>{i=i.insert(r,a.overlayedDocument)}),i}))}getOverlayedDocuments(C,V){const L=Y5();return this.populateOverlays(C,L,V).next(()=>this.computeViews(C,V,L,s1()))}populateOverlays(C,V,L){const e=[];return L.forEach(t=>{V.has(t)||e.push(t)}),this.documentOverlayCache.getOverlays(C,e).next(t=>{t.forEach((i,r)=>{V.set(i,r)})})}computeViews(C,V,L,e){let t=l5();const i=g0(),r=function(){return g0()}();return V.forEach((a,o)=>{const s=L.get(o.key);e.has(o.key)&&(s===void 0||s.mutation instanceof U5)?t=t.insert(o.key,o):s!==void 0?(i.set(o.key,s.mutation.getFieldMask()),O0(s.mutation,o,s.mutation.getFieldMask(),G1.now())):i.set(o.key,w2.empty())}),this.recalculateAndSaveOverlays(C,t).next(a=>(a.forEach((o,s)=>i.set(o,s)),V.forEach((o,s)=>{var l;return r.set(o,new _A(s,(l=i.get(o))!==null&&l!==void 0?l:null))}),r))}recalculateAndSaveOverlays(C,V){const L=g0();let e=new B1((i,r)=>i-r),t=s1();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(C,V).next(i=>{for(const r of i)r.keys().forEach(a=>{const o=V.get(a);if(o===null)return;let s=L.get(a)||w2.empty();s=r.applyToLocalView(o,s),L.set(a,s);const l=(e.get(r.batchId)||s1()).add(a);e=e.insert(r.batchId,l)})}).next(()=>{const i=[],r=e.getReverseIterator();for(;r.hasNext();){const a=r.getNext(),o=a.key,s=a.value,l=ie();s.forEach(u=>{if(!t.has(u)){const c=se(V.get(u),L.get(u));c!==null&&l.set(u,c),t=t.add(u)}}),i.push(this.documentOverlayCache.saveOverlays(C,o,l))}return I.waitFor(i)}).next(()=>L)}recalculateAndSaveOverlaysForDocumentKeys(C,V){return this.remoteDocumentCache.getEntries(C,V).next(L=>this.recalculateAndSaveOverlays(C,L))}getDocumentsMatchingQuery(C,V,L,e){return function(i){return L1.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(V)?this.getDocumentsMatchingDocumentQuery(C,V.path):Po(V)?this.getDocumentsMatchingCollectionGroupQuery(C,V,L,e):this.getDocumentsMatchingCollectionQuery(C,V,L,e)}getNextDocuments(C,V,L,e){return this.remoteDocumentCache.getAllFromCollectionGroup(C,V,L,e).next(t=>{const i=e-t.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(C,V,L.largestBatchId,e-t.size):I.resolve(Y5());let r=-1,a=t;return i.next(o=>I.forEach(o,(s,l)=>(r<l.largestBatchId&&(r=l.largestBatchId),t.get(s)?I.resolve():this.remoteDocumentCache.getEntry(C,s).next(u=>{a=a.insert(s,u)}))).next(()=>this.populateOverlays(C,o,t)).next(()=>this.computeViews(C,a,o,s1())).next(s=>({batchId:r,changes:Me(s)})))})}getDocumentsMatchingDocumentQuery(C,V){return this.getDocument(C,new L1(V)).next(L=>{let e=s0();return L.isFoundDocument()&&(e=e.insert(L.key,L)),e})}getDocumentsMatchingCollectionGroupQuery(C,V,L,e){const t=V.collectionGroup;let i=s0();return this.indexManager.getCollectionParents(C,t).next(r=>I.forEach(r,a=>{const o=function(l,u){return new v9(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(V,a.child(t));return this.getDocumentsMatchingCollectionQuery(C,o,L,e).next(s=>{s.forEach((l,u)=>{i=i.insert(l,u)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(C,V,L,e){let t;return this.documentOverlayCache.getOverlaysForCollection(C,V.path,L.largestBatchId).next(i=>(t=i,this.remoteDocumentCache.getDocumentsMatchingQuery(C,V,L,t,e))).next(i=>{t.forEach((a,o)=>{const s=o.getKey();i.get(s)===null&&(i=i.insert(s,r2.newInvalidDocument(s)))});let r=s0();return i.forEach((a,o)=>{const s=t.get(a);s!==void 0&&O0(s.mutation,o,w2.empty(),G1.now()),f9(V,o)&&(r=r.insert(a,o))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(C){this.serializer=C,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(C,V){return I.resolve(this.Tr.get(V))}saveBundleMetadata(C,V){return this.Tr.set(V.id,function(e){return{id:e.id,version:e.version,createTime:J2(e.createTime)}}(V)),I.resolve()}getNamedQuery(C,V){return I.resolve(this.Ir.get(V))}saveNamedQuery(C,V){return this.Ir.set(V.name,function(e){return{name:e.name,query:hA(e.bundledQuery),readTime:J2(e.readTime)}}(V)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.overlays=new B1(L1.comparator),this.Er=new Map}getOverlay(C,V){return I.resolve(this.overlays.get(V))}getOverlays(C,V){const L=Y5();return I.forEach(V,e=>this.getOverlay(C,e).next(t=>{t!==null&&L.set(e,t)})).next(()=>L)}saveOverlays(C,V,L){return L.forEach((e,t)=>{this.Tt(C,V,t)}),I.resolve()}removeOverlaysForBatchId(C,V,L){const e=this.Er.get(L);return e!==void 0&&(e.forEach(t=>this.overlays=this.overlays.remove(t)),this.Er.delete(L)),I.resolve()}getOverlaysForCollection(C,V,L){const e=Y5(),t=V.length+1,i=new L1(V.child("")),r=this.overlays.getIteratorFrom(i);for(;r.hasNext();){const a=r.getNext().value,o=a.getKey();if(!V.isPrefixOf(o.path))break;o.path.length===t&&a.largestBatchId>L&&e.set(a.getKey(),a)}return I.resolve(e)}getOverlaysForCollectionGroup(C,V,L,e){let t=new B1((o,s)=>o-s);const i=this.overlays.getIterator();for(;i.hasNext();){const o=i.getNext().value;if(o.getKey().getCollectionGroup()===V&&o.largestBatchId>L){let s=t.get(o.largestBatchId);s===null&&(s=Y5(),t=t.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}const r=Y5(),a=t.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((o,s)=>r.set(o,s)),!(r.size()>=e)););return I.resolve(r)}Tt(C,V,L){const e=this.overlays.get(L.key);if(e!==null){const i=this.Er.get(e.largestBatchId).delete(L.key);this.Er.set(e.largestBatchId,i)}this.overlays=this.overlays.insert(L.key,new Ko(V,L));let t=this.Er.get(V);t===void 0&&(t=s1(),this.Er.set(V,t)),this.Er.set(V,t.add(L.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(){this.sessionToken=J1.EMPTY_BYTE_STRING}getSessionToken(C){return I.resolve(this.sessionToken)}setSessionToken(C,V){return this.sessionToken=V,I.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F6{constructor(){this.dr=new z1(j1.Ar),this.Rr=new z1(j1.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(C,V){const L=new j1(C,V);this.dr=this.dr.add(L),this.Rr=this.Rr.add(L)}mr(C,V){C.forEach(L=>this.addReference(L,V))}removeReference(C,V){this.gr(new j1(C,V))}pr(C,V){C.forEach(L=>this.removeReference(L,V))}yr(C){const V=new L1(new b1([])),L=new j1(V,C),e=new j1(V,C+1),t=[];return this.Rr.forEachInRange([L,e],i=>{this.gr(i),t.push(i.key)}),t}wr(){this.dr.forEach(C=>this.gr(C))}gr(C){this.dr=this.dr.delete(C),this.Rr=this.Rr.delete(C)}Sr(C){const V=new L1(new b1([])),L=new j1(V,C),e=new j1(V,C+1);let t=s1();return this.Rr.forEachInRange([L,e],i=>{t=t.add(i.key)}),t}containsKey(C){const V=new j1(C,0),L=this.dr.firstAfterOrEqual(V);return L!==null&&C.isEqual(L.key)}}class j1{constructor(C,V){this.key=C,this.br=V}static Ar(C,V){return L1.comparator(C.key,V.key)||l1(C.br,V.br)}static Vr(C,V){return l1(C.br,V.br)||L1.comparator(C.key,V.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(C,V){this.indexManager=C,this.referenceDelegate=V,this.mutationQueue=[],this.Dr=1,this.vr=new z1(j1.Ar)}checkEmpty(C){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(C,V,L,e){const t=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new qo(t,V,L,e);this.mutationQueue.push(i);for(const r of e)this.vr=this.vr.add(new j1(r.key,t)),this.indexManager.addToCollectionParentIndex(C,r.key.path.popLast());return I.resolve(i)}lookupMutationBatch(C,V){return I.resolve(this.Cr(V))}getNextMutationBatchAfterBatchId(C,V){const L=V+1,e=this.Fr(L),t=e<0?0:e;return I.resolve(this.mutationQueue.length>t?this.mutationQueue[t]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(C){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(C,V){const L=new j1(V,0),e=new j1(V,Number.POSITIVE_INFINITY),t=[];return this.vr.forEachInRange([L,e],i=>{const r=this.Cr(i.br);t.push(r)}),I.resolve(t)}getAllMutationBatchesAffectingDocumentKeys(C,V){let L=new z1(l1);return V.forEach(e=>{const t=new j1(e,0),i=new j1(e,Number.POSITIVE_INFINITY);this.vr.forEachInRange([t,i],r=>{L=L.add(r.br)})}),I.resolve(this.Mr(L))}getAllMutationBatchesAffectingQuery(C,V){const L=V.path,e=L.length+1;let t=L;L1.isDocumentKey(t)||(t=t.child(""));const i=new j1(new L1(t),0);let r=new z1(l1);return this.vr.forEachWhile(a=>{const o=a.key.path;return!!L.isPrefixOf(o)&&(o.length===e&&(r=r.add(a.br)),!0)},i),I.resolve(this.Mr(r))}Mr(C){const V=[];return C.forEach(L=>{const e=this.Cr(L);e!==null&&V.push(e)}),V}removeMutationBatch(C,V){O1(this.Or(V.batchId,"removed")===0),this.mutationQueue.shift();let L=this.vr;return I.forEach(V.mutations,e=>{const t=new j1(e.key,V.batchId);return L=L.delete(t),this.referenceDelegate.markPotentiallyOrphaned(C,e.key)}).next(()=>{this.vr=L})}Ln(C){}containsKey(C,V){const L=new j1(V,0),e=this.vr.firstAfterOrEqual(L);return I.resolve(V.isEqual(e&&e.key))}performConsistencyCheck(C){return this.mutationQueue.length,I.resolve()}Or(C,V){return this.Fr(C)}Fr(C){return this.mutationQueue.length===0?0:C-this.mutationQueue[0].batchId}Cr(C){const V=this.Fr(C);return V<0||V>=this.mutationQueue.length?null:this.mutationQueue[V]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(C){this.Nr=C,this.docs=function(){return new B1(L1.comparator)}(),this.size=0}setIndexManager(C){this.indexManager=C}addEntry(C,V){const L=V.key,e=this.docs.get(L),t=e?e.size:0,i=this.Nr(V);return this.docs=this.docs.insert(L,{document:V.mutableCopy(),size:i}),this.size+=i-t,this.indexManager.addToCollectionParentIndex(C,L.path.popLast())}removeEntry(C){const V=this.docs.get(C);V&&(this.docs=this.docs.remove(C),this.size-=V.size)}getEntry(C,V){const L=this.docs.get(V);return I.resolve(L?L.document.mutableCopy():r2.newInvalidDocument(V))}getEntries(C,V){let L=l5();return V.forEach(e=>{const t=this.docs.get(e);L=L.insert(e,t?t.document.mutableCopy():r2.newInvalidDocument(e))}),I.resolve(L)}getDocumentsMatchingQuery(C,V,L,e){let t=l5();const i=V.path,r=new L1(i.child("")),a=this.docs.getIteratorFrom(r);for(;a.hasNext();){const{key:o,value:{document:s}}=a.getNext();if(!i.isPrefixOf(o.path))break;o.path.length>i.length+1||ao(ro(s),L)<=0||(e.has(s.key)||f9(V,s))&&(t=t.insert(s.key,s.mutableCopy()))}return I.resolve(t)}getAllFromCollectionGroup(C,V,L,e){M1()}Lr(C,V){return I.forEach(this.docs,L=>V(L))}newChangeBuffer(C){return new kA(this)}getSize(C){return I.resolve(this.size)}}class kA extends yA{constructor(C){super(),this.hr=C}applyChanges(C){const V=[];return this.changes.forEach((L,e)=>{e.isValidDocument()?V.push(this.hr.addEntry(C,e)):this.hr.removeEntry(L)}),I.waitFor(V)}getFromCache(C,V){return this.hr.getEntry(C,V)}getAllFromCache(C,V){return this.hr.getEntries(C,V)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(C){this.persistence=C,this.Br=new a3(V=>E6(V),P6),this.lastRemoteSnapshotVersion=i1.min(),this.highestTargetId=0,this.kr=0,this.qr=new F6,this.targetCount=0,this.Qr=N3.qn()}forEachTarget(C,V){return this.Br.forEach((L,e)=>V(e)),I.resolve()}getLastRemoteSnapshotVersion(C){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(C){return I.resolve(this.kr)}allocateTargetId(C){return this.highestTargetId=this.Qr.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(C,V,L){return L&&(this.lastRemoteSnapshotVersion=L),V>this.kr&&(this.kr=V),I.resolve()}Un(C){this.Br.set(C.target,C);const V=C.targetId;V>this.highestTargetId&&(this.Qr=new N3(V),this.highestTargetId=V),C.sequenceNumber>this.kr&&(this.kr=C.sequenceNumber)}addTargetData(C,V){return this.Un(V),this.targetCount+=1,I.resolve()}updateTargetData(C,V){return this.Un(V),I.resolve()}removeTargetData(C,V){return this.Br.delete(V.target),this.qr.yr(V.targetId),this.targetCount-=1,I.resolve()}removeTargets(C,V,L){let e=0;const t=[];return this.Br.forEach((i,r)=>{r.sequenceNumber<=V&&L.get(r.targetId)===null&&(this.Br.delete(i),t.push(this.removeMatchingKeysForTargetId(C,r.targetId)),e++)}),I.waitFor(t).next(()=>e)}getTargetCount(C){return I.resolve(this.targetCount)}getTargetData(C,V){const L=this.Br.get(V)||null;return I.resolve(L)}addMatchingKeys(C,V,L){return this.qr.mr(V,L),I.resolve()}removeMatchingKeys(C,V,L){this.qr.pr(V,L);const e=this.persistence.referenceDelegate,t=[];return e&&V.forEach(i=>{t.push(e.markPotentiallyOrphaned(C,i))}),I.waitFor(t)}removeMatchingKeysForTargetId(C,V){return this.qr.yr(V),I.resolve()}getMatchingKeysForTargetId(C,V){const L=this.qr.Sr(V);return I.resolve(L)}containsKey(C,V){return I.resolve(this.qr.containsKey(V))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(C,V){this.Kr={},this.overlays={},this.$r=new u9(0),this.Ur=!1,this.Ur=!0,this.Wr=new PA,this.referenceDelegate=C(this),this.Gr=new IA(this),this.indexManager=new fA,this.remoteDocumentCache=function(e){return new RA(e)}(L=>this.referenceDelegate.zr(L)),this.serializer=new vA(V),this.jr=new wA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(C){return this.indexManager}getDocumentOverlayCache(C){let V=this.overlays[C.toKey()];return V||(V=new EA,this.overlays[C.toKey()]=V),V}getMutationQueue(C,V){let L=this.Kr[C.toKey()];return L||(L=new bA(V,this.referenceDelegate),this.Kr[C.toKey()]=L),L}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(C,V,L){X("MemoryPersistence","Starting transaction:",C);const e=new BA(this.$r.next());return this.referenceDelegate.Hr(),L(e).next(t=>this.referenceDelegate.Jr(e).next(()=>t)).toPromise().then(t=>(e.raiseOnCommittedEvent(),t))}Yr(C,V){return I.or(Object.values(this.Kr).map(L=>()=>L.containsKey(C,V)))}}class BA extends oo{constructor(C){super(),this.currentSequenceNumber=C}}class x6{constructor(C){this.persistence=C,this.Zr=new F6,this.Xr=null}static ei(C){return new x6(C)}get ti(){if(this.Xr)return this.Xr;throw M1()}addReference(C,V,L){return this.Zr.addReference(L,V),this.ti.delete(L.toString()),I.resolve()}removeReference(C,V,L){return this.Zr.removeReference(L,V),this.ti.add(L.toString()),I.resolve()}markPotentiallyOrphaned(C,V){return this.ti.add(V.toString()),I.resolve()}removeTarget(C,V){this.Zr.yr(V.targetId).forEach(e=>this.ti.add(e.toString()));const L=this.persistence.getTargetCache();return L.getMatchingKeysForTargetId(C,V.targetId).next(e=>{e.forEach(t=>this.ti.add(t.toString()))}).next(()=>L.removeTargetData(C,V))}Hr(){this.Xr=new Set}Jr(C){const V=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.ti,L=>{const e=L1.fromPath(L);return this.ni(C,e).next(t=>{t||V.removeEntry(e,i1.min())})}).next(()=>(this.Xr=null,V.apply(C)))}updateLimboDocument(C,V){return this.ni(C,V).next(L=>{L?this.ti.delete(V.toString()):this.ti.add(V.toString())})}zr(C){return 0}ni(C,V){return I.or([()=>I.resolve(this.Zr.containsKey(V)),()=>this.persistence.getTargetCache().containsKey(C,V),()=>this.persistence.Yr(C,V)])}}class q7{constructor(C,V){this.persistence=C,this.ri=new a3(L=>lo(L.path),(L,e)=>L.isEqual(e)),this.garbageCollector=OA(this,V)}static ei(C,V){return new q7(C,V)}Hr(){}Jr(C){return I.resolve()}forEachTarget(C,V){return this.persistence.getTargetCache().forEachTarget(C,V)}Xn(C){const V=this.nr(C);return this.persistence.getTargetCache().getTargetCount(C).next(L=>V.next(e=>L+e))}nr(C){let V=0;return this.er(C,L=>{V++}).next(()=>V)}er(C,V){return I.forEach(this.ri,(L,e)=>this.ir(C,L,e).next(t=>t?I.resolve():V(e)))}removeTargets(C,V,L){return this.persistence.getTargetCache().removeTargets(C,V,L)}removeOrphanedDocuments(C,V){let L=0;const e=this.persistence.getRemoteDocumentCache(),t=e.newChangeBuffer();return e.Lr(C,i=>this.ir(C,i,V).next(r=>{r||(L++,t.removeEntry(i,i1.min()))})).next(()=>t.apply(C)).next(()=>L)}markPotentiallyOrphaned(C,V){return this.ri.set(V,C.currentSequenceNumber),I.resolve()}removeTarget(C,V){const L=V.withSequenceNumber(C.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(C,L)}addReference(C,V,L){return this.ri.set(L,C.currentSequenceNumber),I.resolve()}removeReference(C,V,L){return this.ri.set(L,C.currentSequenceNumber),I.resolve()}updateLimboDocument(C,V){return this.ri.set(V,C.currentSequenceNumber),I.resolve()}zr(C){let V=C.key.toString().length;return C.isFoundDocument()&&(V+=_7(C.data.value)),V}ir(C,V,L){return I.or([()=>this.persistence.Yr(C,V),()=>this.persistence.getTargetCache().containsKey(C,V),()=>{const e=this.ri.get(V);return I.resolve(e!==void 0&&e>L)}])}getCacheSize(C){return this.persistence.getRemoteDocumentCache().getSize(C)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D6{constructor(C,V,L,e){this.targetId=C,this.fromCache=V,this.Wi=L,this.Gi=e}static zi(C,V){let L=s1(),e=s1();for(const t of V.docChanges)switch(t.type){case 0:L=L.add(t.doc.key);break;case 1:e=e.add(t.doc.key)}return new D6(C,V.fromCache,L,e)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(C){this._documentReadCount+=C}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return ka()?8:Ao(Pa())>0?6:4}()}initialize(C,V){this.Zi=C,this.indexManager=V,this.ji=!0}getDocumentsMatchingQuery(C,V,L,e){const t={result:null};return this.Xi(C,V).next(i=>{t.result=i}).next(()=>{if(!t.result)return this.es(C,V,e,L).next(i=>{t.result=i})}).next(()=>{if(t.result)return;const i=new FA;return this.ts(C,V,i).next(r=>{if(t.result=r,this.Hi)return this.ns(C,V,i,r.size)})}).next(()=>t.result)}ns(C,V,L,e){return L.documentReadCount<this.Ji?(f3()<=c1.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Z3(V),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),I.resolve()):(f3()<=c1.DEBUG&&X("QueryEngine","Query:",Z3(V),"scans",L.documentReadCount,"local documents and returns",e,"documents as results."),L.documentReadCount>this.Yi*e?(f3()<=c1.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Z3(V),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(C,Y2(V))):I.resolve())}Xi(C,V){if(hH(V))return I.resolve(null);let L=Y2(V);return this.indexManager.getIndexType(C,L).next(e=>e===0?null:(V.limit!==null&&e===1&&(V=q4(V,null,"F"),L=Y2(V)),this.indexManager.getDocumentsMatchingTarget(C,L).next(t=>{const i=s1(...t);return this.Zi.getDocuments(C,i).next(r=>this.indexManager.getMinOffset(C,L).next(a=>{const o=this.rs(V,r);return this.ss(V,o,i,a.readTime)?this.Xi(C,q4(V,null,"F")):this.os(C,o,V,a)}))})))}es(C,V,L,e){return hH(V)||e.isEqual(i1.min())?I.resolve(null):this.Zi.getDocuments(C,L).next(t=>{const i=this.rs(V,t);return this.ss(V,i,L,e)?I.resolve(null):(f3()<=c1.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",e.toString(),Z3(V)),this.os(C,i,V,io(e,-1)).next(r=>r))})}rs(C,V){let L=new z1(ee(C));return V.forEach((e,t)=>{f9(C,t)&&(L=L.add(t))}),L}ss(C,V,L,e){if(C.limit===null)return!1;if(L.size!==V.size)return!0;const t=C.limitType==="F"?V.last():V.first();return!!t&&(t.hasPendingWrites||t.version.compareTo(e)>0)}ts(C,V,L){return f3()<=c1.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Z3(V)),this.Zi.getDocumentsMatchingQuery(C,V,P5.min(),L)}os(C,V,L,e){return this.Zi.getDocumentsMatchingQuery(C,L,e).next(t=>(V.forEach(i=>{t=t.insert(i.key,i)}),t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(C,V,L,e){this.persistence=C,this._s=V,this.serializer=e,this.us=new B1(l1),this.cs=new a3(t=>E6(t),P6),this.ls=new Map,this.hs=C.getRemoteDocumentCache(),this.Gr=C.getTargetCache(),this.jr=C.getBundleCache(),this.Ps(L)}Ps(C){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(C),this.indexManager=this.persistence.getIndexManager(C),this.mutationQueue=this.persistence.getMutationQueue(C,this.indexManager),this.localDocuments=new TA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(C){return this.persistence.runTransaction("Collect garbage","readwrite-primary",V=>C.collect(V,this.us))}}function NA(H,C,V,L){return new DA(H,C,V,L)}async function Oe(H,C){const V=a1(H);return await V.persistence.runTransaction("Handle user change","readonly",L=>{let e;return V.mutationQueue.getAllMutationBatches(L).next(t=>(e=t,V.Ps(C),V.mutationQueue.getAllMutationBatches(L))).next(t=>{const i=[],r=[];let a=s1();for(const o of e){i.push(o.batchId);for(const s of o.mutations)a=a.add(s.key)}for(const o of t){r.push(o.batchId);for(const s of o.mutations)a=a.add(s.key)}return V.localDocuments.getDocuments(L,a).next(o=>({Ts:o,removedBatchIds:i,addedBatchIds:r}))})})}function UA(H,C){const V=a1(H);return V.persistence.runTransaction("Acknowledge batch","readwrite-primary",L=>{const e=C.batch.keys(),t=V.hs.newChangeBuffer({trackRemovals:!0});return function(r,a,o,s){const l=o.batch,u=l.keys();let c=I.resolve();return u.forEach(w=>{c=c.next(()=>s.getEntry(a,w)).next(P=>{const k=o.docVersions.get(w);O1(k!==null),P.version.compareTo(k)<0&&(l.applyToRemoteDocument(P,o),P.isValidDocument()&&(P.setReadTime(o.commitVersion),s.addEntry(P)))})}),c.next(()=>r.mutationQueue.removeMutationBatch(a,l))}(V,L,C,t).next(()=>t.apply(L)).next(()=>V.mutationQueue.performConsistencyCheck(L)).next(()=>V.documentOverlayCache.removeOverlaysForBatchId(L,e,C.batch.batchId)).next(()=>V.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(L,function(r){let a=s1();for(let o=0;o<r.mutationResults.length;++o)r.mutationResults[o].transformResults.length>0&&(a=a.add(r.batch.mutations[o].key));return a}(C))).next(()=>V.localDocuments.getDocuments(L,e))})}function ye(H){const C=a1(H);return C.persistence.runTransaction("Get last remote snapshot version","readonly",V=>C.Gr.getLastRemoteSnapshotVersion(V))}function WA(H,C){const V=a1(H),L=C.snapshotVersion;let e=V.us;return V.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=V.hs.newChangeBuffer({trackRemovals:!0});e=V.us;const r=[];C.targetChanges.forEach((s,l)=>{const u=e.get(l);if(!u)return;r.push(V.Gr.removeMatchingKeys(t,s.removedDocuments,l).next(()=>V.Gr.addMatchingKeys(t,s.addedDocuments,l)));let c=u.withSequenceNumber(t.currentSequenceNumber);C.targetMismatches.get(l)!==null?c=c.withResumeToken(J1.EMPTY_BYTE_STRING,i1.min()).withLastLimboFreeSnapshotVersion(i1.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,L)),e=e.insert(l,c),function(P,k,x){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(u,c,s)&&r.push(V.Gr.updateTargetData(t,c))});let a=l5(),o=s1();if(C.documentUpdates.forEach(s=>{C.resolvedLimboDocuments.has(s)&&r.push(V.persistence.referenceDelegate.updateLimboDocument(t,s))}),r.push(GA(t,i,C.documentUpdates).next(s=>{a=s.Is,o=s.Es})),!L.isEqual(i1.min())){const s=V.Gr.getLastRemoteSnapshotVersion(t).next(l=>V.Gr.setTargetsMetadata(t,t.currentSequenceNumber,L));r.push(s)}return I.waitFor(r).next(()=>i.apply(t)).next(()=>V.localDocuments.getLocalViewOfDocuments(t,a,o)).next(()=>a)}).then(t=>(V.us=e,t))}function GA(H,C,V){let L=s1(),e=s1();return V.forEach(t=>L=L.add(t)),C.getEntries(H,L).next(t=>{let i=l5();return V.forEach((r,a)=>{const o=t.get(r);a.isFoundDocument()!==o.isFoundDocument()&&(e=e.add(r)),a.isNoDocument()&&a.version.isEqual(i1.min())?(C.removeEntry(r,a.readTime),i=i.insert(r,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||a.version.compareTo(o.version)===0&&o.hasPendingWrites?(C.addEntry(a),i=i.insert(r,a)):X("LocalStore","Ignoring outdated watch update for ",r,". Current version:",o.version," Watch version:",a.version)}),{Is:i,Es:e}})}function zA(H,C){const V=a1(H);return V.persistence.runTransaction("Get next mutation batch","readonly",L=>(C===void 0&&(C=-1),V.mutationQueue.getNextMutationBatchAfterBatchId(L,C)))}function QA(H,C){const V=a1(H);return V.persistence.runTransaction("Allocate target","readwrite",L=>{let e;return V.Gr.getTargetData(L,C).next(t=>t?(e=t,I.resolve(e)):V.Gr.allocateTargetId(L).next(i=>(e=new g5(C,i,"TargetPurposeListen",L.currentSequenceNumber),V.Gr.addTargetData(L,e).next(()=>e))))}).then(L=>{const e=V.us.get(L.targetId);return(e===null||L.snapshotVersion.compareTo(e.snapshotVersion)>0)&&(V.us=V.us.insert(L.targetId,L),V.cs.set(C,L.targetId)),L})}async function C6(H,C,V){const L=a1(H),e=L.us.get(C),t=V?"readwrite":"readwrite-primary";try{V||await L.persistence.runTransaction("Release target",t,i=>L.persistence.referenceDelegate.removeTarget(i,e))}catch(i){if(!j3(i))throw i;X("LocalStore",`Failed to update sequence numbers for target ${C}: ${i}`)}L.us=L.us.remove(C),L.cs.delete(e.target)}function PH(H,C,V){const L=a1(H);let e=i1.min(),t=s1();return L.persistence.runTransaction("Execute query","readwrite",i=>function(a,o,s){const l=a1(a),u=l.cs.get(s);return u!==void 0?I.resolve(l.us.get(u)):l.Gr.getTargetData(o,s)}(L,i,Y2(C)).next(r=>{if(r)return e=r.lastLimboFreeSnapshotVersion,L.Gr.getMatchingKeysForTargetId(i,r.targetId).next(a=>{t=a})}).next(()=>L._s.getDocumentsMatchingQuery(i,C,V?e:i1.min(),V?t:s1())).next(r=>(jA(L,Ro(C),r),{documents:r,ds:t})))}function jA(H,C,V){let L=H.ls.get(C)||i1.min();V.forEach((e,t)=>{t.readTime.compareTo(L)>0&&(L=t.readTime)}),H.ls.set(C,L)}class bH{constructor(){this.activeTargetIds=Do()}ps(C){this.activeTargetIds=this.activeTargetIds.add(C)}ys(C){this.activeTargetIds=this.activeTargetIds.delete(C)}gs(){const C={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(C)}}class $A{constructor(){this._o=new bH,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(C){}updateMutationState(C,V,L){}addLocalQueryTarget(C,V=!0){return V&&this._o.ps(C),this.ao[C]||"not-current"}updateQueryState(C,V,L){this.ao[C]=V}removeLocalQueryTarget(C){this._o.ys(C)}isLocalQueryTarget(C){return this._o.activeTargetIds.has(C)}clearQueryState(C){delete this.ao[C]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(C){return this._o.activeTargetIds.has(C)}start(){return this._o=new bH,Promise.resolve()}handleUserChange(C,V,L){}setOnlineState(C){}shutdown(){}writeSequenceNumber(C){}notifyBundleLoaded(C){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{uo(C){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RH{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(C){this.To.push(C)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const C of this.To)C(0)}Po(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const C of this.To)C(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v7=null;function u4(){return v7===null?v7=function(){return 268435456+Math.round(2147483648*Math.random())}():v7++,"0x"+v7.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(C){this.Eo=C.Eo,this.Ao=C.Ao}Ro(C){this.Vo=C}mo(C){this.fo=C}po(C){this.yo=C}onMessage(C){this.wo=C}close(){this.Ao()}send(C){this.Eo(C)}So(){this.Vo()}bo(){this.fo()}Do(C){this.yo(C)}vo(C){this.wo(C)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2="WebChannelConnection";class YA extends class{get Co(){return!1}constructor(V){this.databaseInfo=V,this.databaseId=V.databaseId;const L=V.ssl?"https":"http",e=encodeURIComponent(this.databaseId.projectId),t=encodeURIComponent(this.databaseId.database);this.Fo=L+"://"+V.host,this.Mo=`projects/${e}/databases/${t}`,this.xo=this.databaseId.database==="(default)"?`project_id=${e}`:`project_id=${e}&database_id=${t}`}Oo(V,L,e,t,i){const r=u4(),a=this.No(V,L.toUriEncodedString());X("RestConnection",`Sending RPC '${V}' ${r}:`,a,e);const o={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(o,t,i),this.Bo(V,a,o,e).then(s=>(X("RestConnection",`Received RPC '${V}' ${r}: `,s),s),s=>{throw B3("RestConnection",`RPC '${V}' ${r} failed with error: `,s,"url: ",a,"request:",e),s})}ko(V,L,e,t,i,r){return this.Oo(V,L,e,t,i)}Lo(V,L,e){V["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+z3}(),V["Content-Type"]="text/plain",this.databaseInfo.appId&&(V["X-Firebase-GMPID"]=this.databaseInfo.appId),L&&L.headers.forEach((t,i)=>V[i]=t),e&&e.headers.forEach((t,i)=>V[i]=t)}No(V,L){const e=KA[V];return`${this.Fo}/v1/${L}:${e}`}terminate(){}}{constructor(C){super(C),this.forceLongPolling=C.forceLongPolling,this.autoDetectLongPolling=C.autoDetectLongPolling,this.useFetchStreams=C.useFetchStreams,this.longPollingOptions=C.longPollingOptions}Bo(C,V,L,e){const t=u4();return new Promise((i,r)=>{const a=new DL;a.setWithCredentials(!0),a.listenOnce(NL.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case y7.NO_ERROR:const s=a.getResponseJson();X(e2,`XHR for RPC '${C}' ${t} received:`,JSON.stringify(s)),i(s);break;case y7.TIMEOUT:X(e2,`RPC '${C}' ${t} timed out`),r(new H1(D.DEADLINE_EXCEEDED,"Request time out"));break;case y7.HTTP_ERROR:const l=a.getStatus();if(X(e2,`RPC '${C}' ${t} failed with status:`,l,"response text:",a.getResponseText()),l>0){let u=a.getResponseJson();Array.isArray(u)&&(u=u[0]);const c=u==null?void 0:u.error;if(c&&c.status&&c.message){const w=function(k){const x=k.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(x)>=0?x:D.UNKNOWN}(c.status);r(new H1(w,c.message))}else r(new H1(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else r(new H1(D.UNAVAILABLE,"Connection failed."));break;default:M1()}}finally{X(e2,`RPC '${C}' ${t} completed.`)}});const o=JSON.stringify(e);X(e2,`RPC '${C}' ${t} sending request:`,e),a.send(V,"POST",o,L,15)})}qo(C,V,L){const e=u4(),t=[this.Fo,"/","google.firestore.v1.Firestore","/",C,"/channel"],i=GL(),r=WL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},o=this.longPollingOptions.timeoutSeconds;o!==void 0&&(a.longPollingTimeout=Math.round(1e3*o)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Lo(a.initMessageHeaders,V,L),a.encodeInitMessageHeaders=!0;const s=t.join("");X(e2,`Creating RPC '${C}' stream ${e}: ${s}`,a);const l=i.createWebChannel(s,a);let u=!1,c=!1;const w=new XA({Eo:k=>{c?X(e2,`Not sending because RPC '${C}' stream ${e} is closed:`,k):(u||(X(e2,`Opening RPC '${C}' stream ${e} transport.`),l.open(),u=!0),X(e2,`RPC '${C}' stream ${e} sending:`,k),l.send(k))},Ao:()=>l.close()}),P=(k,x,E)=>{k.listen(x,B=>{try{E(B)}catch(N){setTimeout(()=>{throw N},0)}})};return P(l,A0.EventType.OPEN,()=>{c||(X(e2,`RPC '${C}' stream ${e} transport opened.`),w.So())}),P(l,A0.EventType.CLOSE,()=>{c||(c=!0,X(e2,`RPC '${C}' stream ${e} transport closed`),w.Do())}),P(l,A0.EventType.ERROR,k=>{c||(c=!0,B3(e2,`RPC '${C}' stream ${e} transport errored:`,k),w.Do(new H1(D.UNAVAILABLE,"The operation could not be completed")))}),P(l,A0.EventType.MESSAGE,k=>{var x;if(!c){const E=k.data[0];O1(!!E);const B=E,N=(B==null?void 0:B.error)||((x=B[0])===null||x===void 0?void 0:x.error);if(N){X(e2,`RPC '${C}' stream ${e} received error:`,N);const e1=N.status;let n1=function(Z){const p=N1[Z];if(p!==void 0)return de(p)}(e1),S=N.message;n1===void 0&&(n1=D.INTERNAL,S="Unknown error status: "+e1+" with message "+N.message),c=!0,w.Do(new H1(n1,S)),l.close()}else X(e2,`RPC '${C}' stream ${e} received:`,E),w.vo(E)}}),P(r,UL.STAT_EVENT,k=>{k.stat===G4.PROXY?X(e2,`RPC '${C}' stream ${e} detected buffering proxy`):k.stat===G4.NOPROXY&&X(e2,`RPC '${C}' stream ${e} detected no buffering proxy`)}),setTimeout(()=>{w.bo()},0),w}}function m4(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g9(H){return new tA(H,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(C,V,L=1e3,e=1.5,t=6e4){this.li=C,this.timerId=V,this.Qo=L,this.Ko=e,this.$o=t,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(C){this.cancel();const V=Math.floor(this.Uo+this.Ho()),L=Math.max(0,Date.now()-this.Go),e=Math.max(0,V-L);e>0&&X("ExponentialBackoff",`Backing off for ${e} ms (base delay: ${this.Uo} ms, delay with jitter: ${V} ms, last attempt: ${L} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,e,()=>(this.Go=Date.now(),C())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(C,V,L,e,t,i,r,a){this.li=C,this.Yo=L,this.Zo=e,this.connection=t,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=r,this.listener=a,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new _e(C,V)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(C){this.l_(),this.stream.send(C)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(C,V){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,C!==4?this.r_.reset():V&&V.code===D.RESOURCE_EXHAUSTED?(s5(V.toString()),s5("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):V&&V.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=C,await this.listener.po(V)}P_(){}auth(){this.state=1;const C=this.T_(this.Xo),V=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([L,e])=>{this.Xo===V&&this.I_(L,e)},L=>{C(()=>{const e=new H1(D.UNKNOWN,"Fetching auth token failed: "+L.message);return this.E_(e)})})}I_(C,V){const L=this.T_(this.Xo);this.stream=this.d_(C,V),this.stream.Ro(()=>{L(()=>this.listener.Ro())}),this.stream.mo(()=>{L(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(e=>{L(()=>this.E_(e))}),this.stream.onMessage(e=>{L(()=>++this.n_==1?this.A_(e):this.onNext(e))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(C){return X("PersistentStream",`close with error: ${C}`),this.stream=null,this.close(4,C)}T_(C){return V=>{this.li.enqueueAndForget(()=>this.Xo===C?V():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JA extends Te{constructor(C,V,L,e,t,i){super(C,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",V,L,e,i),this.serializer=t}d_(C,V){return this.connection.qo("Listen",C,V)}A_(C){return this.onNext(C)}onNext(C){this.r_.reset();const V=rA(this.serializer,C),L=function(t){if(!("targetChange"in t))return i1.min();const i=t.targetChange;return i.targetIds&&i.targetIds.length?i1.min():i.readTime?J2(i.readTime):i1.min()}(C);return this.listener.R_(V,L)}V_(C){const V={};V.database=J4(this.serializer),V.addTarget=function(t,i){let r;const a=i.target;if(r=$4(a)?{documents:oA(t,a)}:{query:AA(t,a).ct},r.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){r.resumeToken=ce(t,i.resumeToken);const o=K4(t,i.expectedCount);o!==null&&(r.expectedCount=o)}else if(i.snapshotVersion.compareTo(i1.min())>0){r.readTime=$7(t,i.snapshotVersion.toTimestamp());const o=K4(t,i.expectedCount);o!==null&&(r.expectedCount=o)}return r}(this.serializer,C);const L=lA(this.serializer,C);L&&(V.labels=L),this.c_(V)}m_(C){const V={};V.database=J4(this.serializer),V.removeTarget=C,this.c_(V)}}class Cs extends Te{constructor(C,V,L,e,t,i){super(C,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",V,L,e,i),this.serializer=t}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(C,V){return this.connection.qo("Write",C,V)}A_(C){return O1(!!C.streamToken),this.lastStreamToken=C.streamToken,O1(!C.writeResults||C.writeResults.length===0),this.listener.p_()}onNext(C){O1(!!C.streamToken),this.lastStreamToken=C.streamToken,this.r_.reset();const V=nA(C.writeResults,C.commitTime),L=J2(C.commitTime);return this.listener.y_(L,V)}w_(){const C={};C.database=J4(this.serializer),this.c_(C)}g_(C){const V={streamToken:this.lastStreamToken,writes:C.map(L=>aA(this.serializer,L))};this.c_(V)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends class{}{constructor(C,V,L,e){super(),this.authCredentials=C,this.appCheckCredentials=V,this.connection=L,this.serializer=e,this.S_=!1}b_(){if(this.S_)throw new H1(D.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(C,V,L,e){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([t,i])=>this.connection.Oo(C,X4(V,L),e,t,i)).catch(t=>{throw t.name==="FirebaseError"?(t.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new H1(D.UNKNOWN,t.toString())})}ko(C,V,L,e,t){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ko(C,X4(V,L),e,i,r,t)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H1(D.UNKNOWN,i.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Vs{constructor(C,V){this.asyncQueue=C,this.onlineStateHandler=V,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(C){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${C.toString()}`),this.M_("Offline")))}set(C){this.N_(),this.D_=0,C==="Online"&&(this.C_=!1),this.M_(C)}M_(C){C!==this.state&&(this.state=C,this.onlineStateHandler(C))}x_(C){const V=`Could not reach Cloud Firestore backend. ${C}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(s5(V),this.C_=!1):X("OnlineStateTracker",V)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(C,V,L,e,t){this.localStore=C,this.datastore=V,this.asyncQueue=L,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=t,this.Q_.uo(i=>{L.enqueueAndForget(async()=>{n3(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(a){const o=a1(a);o.k_.add(4),await $0(o),o.K_.set("Unknown"),o.k_.delete(4),await O9(o)}(this))})}),this.K_=new Vs(L,e)}}async function O9(H){if(n3(H))for(const C of H.q_)await C(!0)}async function $0(H){for(const C of H.q_)await C(!1)}function we(H,C){const V=a1(H);V.B_.has(C.targetId)||(V.B_.set(C.targetId,C),G6(V)?W6(V):$3(V).s_()&&U6(V,C))}function N6(H,C){const V=a1(H),L=$3(V);V.B_.delete(C),L.s_()&&Ee(V,C),V.B_.size===0&&(L.s_()?L.a_():n3(V)&&V.K_.set("Unknown"))}function U6(H,C){if(H.U_.xe(C.targetId),C.resumeToken.approximateByteSize()>0||C.snapshotVersion.compareTo(i1.min())>0){const V=H.remoteSyncer.getRemoteKeysForTarget(C.targetId).size;C=C.withExpectedCount(V)}$3(H).V_(C)}function Ee(H,C){H.U_.xe(C),$3(H).m_(C)}function W6(H){H.U_=new HA({getRemoteKeysForTarget:C=>H.remoteSyncer.getRemoteKeysForTarget(C),ut:C=>H.B_.get(C)||null,nt:()=>H.datastore.serializer.databaseId}),$3(H).start(),H.K_.F_()}function G6(H){return n3(H)&&!$3(H).i_()&&H.B_.size>0}function n3(H){return a1(H).k_.size===0}function Pe(H){H.U_=void 0}async function es(H){H.K_.set("Online")}async function ts(H){H.B_.forEach((C,V)=>{U6(H,C)})}async function Ms(H,C){Pe(H),G6(H)?(H.K_.O_(C),W6(H)):H.K_.set("Unknown")}async function is(H,C,V){if(H.K_.set("Online"),C instanceof me&&C.state===2&&C.cause)try{await async function(e,t){const i=t.cause;for(const r of t.targetIds)e.B_.has(r)&&(await e.remoteSyncer.rejectListen(r,i),e.B_.delete(r),e.U_.removeTarget(r))}(H,C)}catch(L){X("RemoteStore","Failed to remove targets %s: %s ",C.targetIds.join(","),L),await K7(H,L)}else if(C instanceof E7?H.U_.$e(C):C instanceof ue?H.U_.Je(C):H.U_.Ge(C),!V.isEqual(i1.min()))try{const L=await ye(H.localStore);V.compareTo(L)>=0&&await function(t,i){const r=t.U_.it(i);return r.targetChanges.forEach((a,o)=>{if(a.resumeToken.approximateByteSize()>0){const s=t.B_.get(o);s&&t.B_.set(o,s.withResumeToken(a.resumeToken,i))}}),r.targetMismatches.forEach((a,o)=>{const s=t.B_.get(a);if(!s)return;t.B_.set(a,s.withResumeToken(J1.EMPTY_BYTE_STRING,s.snapshotVersion)),Ee(t,a);const l=new g5(s.target,a,o,s.sequenceNumber);U6(t,l)}),t.remoteSyncer.applyRemoteEvent(r)}(H,V)}catch(L){X("RemoteStore","Failed to raise snapshot:",L),await K7(H,L)}}async function K7(H,C,V){if(!j3(C))throw C;H.k_.add(1),await $0(H),H.K_.set("Offline"),V||(V=()=>ye(H.localStore)),H.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await V(),H.k_.delete(1),await O9(H)})}function be(H,C){return C().catch(V=>K7(H,V,C))}async function y9(H){const C=a1(H),V=I5(C);let L=C.L_.length>0?C.L_[C.L_.length-1].batchId:-1;for(;rs(C);)try{const e=await zA(C.localStore,L);if(e===null){C.L_.length===0&&V.a_();break}L=e.batchId,as(C,e)}catch(e){await K7(C,e)}Re(C)&&ke(C)}function rs(H){return n3(H)&&H.L_.length<10}function as(H,C){H.L_.push(C);const V=I5(H);V.s_()&&V.f_&&V.g_(C.mutations)}function Re(H){return n3(H)&&!I5(H).i_()&&H.L_.length>0}function ke(H){I5(H).start()}async function ns(H){I5(H).w_()}async function os(H){const C=I5(H);for(const V of H.L_)C.g_(V.mutations)}async function As(H,C,V){const L=H.L_.shift(),e=k6.from(L,C,V);await be(H,()=>H.remoteSyncer.applySuccessfulWrite(e)),await y9(H)}async function ss(H,C){C&&I5(H).f_&&await async function(L,e){if(function(i){return Yo(i)&&i!==D.ABORTED}(e.code)){const t=L.L_.shift();I5(L).__(),await be(L,()=>L.remoteSyncer.rejectFailedWrite(t.batchId,e)),await y9(L)}}(H,C),Re(H)&&ke(H)}async function kH(H,C){const V=a1(H);V.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const L=n3(V);V.k_.add(3),await $0(V),L&&V.K_.set("Unknown"),await V.remoteSyncer.handleCredentialChange(C),V.k_.delete(3),await O9(V)}async function ls(H,C){const V=a1(H);C?(V.k_.delete(2),await O9(V)):C||(V.k_.add(2),await $0(V),V.K_.set("Unknown"))}function $3(H){return H.W_||(H.W_=function(V,L,e){const t=a1(V);return t.b_(),new JA(L,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,e)}(H.datastore,H.asyncQueue,{Ro:es.bind(null,H),mo:ts.bind(null,H),po:Ms.bind(null,H),R_:is.bind(null,H)}),H.q_.push(async C=>{C?(H.W_.__(),G6(H)?W6(H):H.K_.set("Unknown")):(await H.W_.stop(),Pe(H))})),H.W_}function I5(H){return H.G_||(H.G_=function(V,L,e){const t=a1(V);return t.b_(),new Cs(L,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,e)}(H.datastore,H.asyncQueue,{Ro:()=>Promise.resolve(),mo:ns.bind(null,H),po:ss.bind(null,H),p_:os.bind(null,H),y_:As.bind(null,H)}),H.q_.push(async C=>{C?(H.G_.__(),await y9(H)):(await H.G_.stop(),H.L_.length>0&&(X("RemoteStore",`Stopping write stream with ${H.L_.length} pending writes`),H.L_=[]))})),H.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z6{constructor(C,V,L,e,t){this.asyncQueue=C,this.timerId=V,this.targetTimeMs=L,this.op=e,this.removalCallback=t,this.deferred=new T5,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(i=>{})}get promise(){return this.deferred.promise}static createAndSchedule(C,V,L,e,t){const i=Date.now()+L,r=new z6(C,V,i,e,t);return r.start(L),r}start(C){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),C)}skipDelay(){return this.handleDelayElapsed()}cancel(C){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H1(D.CANCELLED,"Operation cancelled"+(C?": "+C:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(C=>this.deferred.resolve(C))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Q6(H,C){if(s5("AsyncQueue",`${C}: ${H}`),j3(H))return new H1(D.UNAVAILABLE,`${C}: ${H}`);throw H}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3{static emptySet(C){return new b3(C.comparator)}constructor(C){this.comparator=C?(V,L)=>C(V,L)||L1.comparator(V.key,L.key):(V,L)=>L1.comparator(V.key,L.key),this.keyedMap=s0(),this.sortedSet=new B1(this.comparator)}has(C){return this.keyedMap.get(C)!=null}get(C){return this.keyedMap.get(C)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(C){const V=this.keyedMap.get(C);return V?this.sortedSet.indexOf(V):-1}get size(){return this.sortedSet.size}forEach(C){this.sortedSet.inorderTraversal((V,L)=>(C(V),!1))}add(C){const V=this.delete(C.key);return V.copy(V.keyedMap.insert(C.key,C),V.sortedSet.insert(C,null))}delete(C){const V=this.get(C);return V?this.copy(this.keyedMap.remove(C),this.sortedSet.remove(V)):this}isEqual(C){if(!(C instanceof b3)||this.size!==C.size)return!1;const V=this.sortedSet.getIterator(),L=C.sortedSet.getIterator();for(;V.hasNext();){const e=V.getNext().key,t=L.getNext().key;if(!e.isEqual(t))return!1}return!0}toString(){const C=[];return this.forEach(V=>{C.push(V.toString())}),C.length===0?"DocumentSet ()":`DocumentSet (
  `+C.join(`  
`)+`
)`}copy(C,V){const L=new b3;return L.comparator=this.comparator,L.keyedMap=C,L.sortedSet=V,L}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IH{constructor(){this.z_=new B1(L1.comparator)}track(C){const V=C.doc.key,L=this.z_.get(V);L?C.type!==0&&L.type===3?this.z_=this.z_.insert(V,C):C.type===3&&L.type!==1?this.z_=this.z_.insert(V,{type:L.type,doc:C.doc}):C.type===2&&L.type===2?this.z_=this.z_.insert(V,{type:2,doc:C.doc}):C.type===2&&L.type===0?this.z_=this.z_.insert(V,{type:0,doc:C.doc}):C.type===1&&L.type===0?this.z_=this.z_.remove(V):C.type===1&&L.type===2?this.z_=this.z_.insert(V,{type:1,doc:L.doc}):C.type===0&&L.type===1?this.z_=this.z_.insert(V,{type:2,doc:C.doc}):M1():this.z_=this.z_.insert(V,C)}j_(){const C=[];return this.z_.inorderTraversal((V,L)=>{C.push(L)}),C}}class U3{constructor(C,V,L,e,t,i,r,a,o){this.query=C,this.docs=V,this.oldDocs=L,this.docChanges=e,this.mutatedKeys=t,this.fromCache=i,this.syncStateChanged=r,this.excludesMetadataChanges=a,this.hasCachedResults=o}static fromInitialDocuments(C,V,L,e,t){const i=[];return V.forEach(r=>{i.push({type:0,doc:r})}),new U3(C,V,b3.emptySet(V),i,L,e,!0,!1,t)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(C){if(!(this.fromCache===C.fromCache&&this.hasCachedResults===C.hasCachedResults&&this.syncStateChanged===C.syncStateChanged&&this.mutatedKeys.isEqual(C.mutatedKeys)&&h9(this.query,C.query)&&this.docs.isEqual(C.docs)&&this.oldDocs.isEqual(C.oldDocs)))return!1;const V=this.docChanges,L=C.docChanges;if(V.length!==L.length)return!1;for(let e=0;e<V.length;e++)if(V[e].type!==L[e].type||!V[e].doc.isEqual(L[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(C=>C.Z_())}}class us{constructor(){this.queries=BH(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(V,L){const e=a1(V),t=e.queries;e.queries=BH(),t.forEach((i,r)=>{for(const a of r.J_)a.onError(L)})})(this,new H1(D.ABORTED,"Firestore shutting down"))}}function BH(){return new a3(H=>Le(H),h9)}async function ms(H,C){const V=a1(H);let L=3;const e=C.query;let t=V.queries.get(e);t?!t.Y_()&&C.Z_()&&(L=2):(t=new ds,L=C.Z_()?0:1);try{switch(L){case 0:t.H_=await V.onListen(e,!0);break;case 1:t.H_=await V.onListen(e,!1);break;case 2:await V.onFirstRemoteStoreListen(e)}}catch(i){const r=Q6(i,`Initialization of query '${Z3(C.query)}' failed`);return void C.onError(r)}V.queries.set(e,t),t.J_.push(C),C.ea(V.onlineState),t.H_&&C.ta(t.H_)&&j6(V)}async function cs(H,C){const V=a1(H),L=C.query;let e=3;const t=V.queries.get(L);if(t){const i=t.J_.indexOf(C);i>=0&&(t.J_.splice(i,1),t.J_.length===0?e=C.Z_()?0:1:!t.Y_()&&C.Z_()&&(e=2))}switch(e){case 0:return V.queries.delete(L),V.onUnlisten(L,!0);case 1:return V.queries.delete(L),V.onUnlisten(L,!1);case 2:return V.onLastRemoteStoreUnlisten(L);default:return}}function vs(H,C){const V=a1(H);let L=!1;for(const e of C){const t=e.query,i=V.queries.get(t);if(i){for(const r of i.J_)r.ta(e)&&(L=!0);i.H_=e}}L&&j6(V)}function hs(H,C,V){const L=a1(H),e=L.queries.get(C);if(e)for(const t of e.J_)t.onError(V);L.queries.delete(C)}function j6(H){H.X_.forEach(C=>{C.next()})}var H6,FH;(FH=H6||(H6={})).na="default",FH.Cache="cache";class fs{constructor(C,V,L){this.query=C,this.ra=V,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=L||{}}ta(C){if(!this.options.includeMetadataChanges){const L=[];for(const e of C.docChanges)e.type!==3&&L.push(e);C=new U3(C.query,C.docs,C.oldDocs,L,C.mutatedKeys,C.fromCache,C.syncStateChanged,!0,C.hasCachedResults)}let V=!1;return this.ia?this.oa(C)&&(this.ra.next(C),V=!0):this._a(C,this.onlineState)&&(this.aa(C),V=!0),this.sa=C,V}onError(C){this.ra.error(C)}ea(C){this.onlineState=C;let V=!1;return this.sa&&!this.ia&&this._a(this.sa,C)&&(this.aa(this.sa),V=!0),V}_a(C,V){if(!C.fromCache||!this.Z_())return!0;const L=V!=="Offline";return(!this.options.ua||!L)&&(!C.docs.isEmpty()||C.hasCachedResults||V==="Offline")}oa(C){if(C.docChanges.length>0)return!0;const V=this.sa&&this.sa.hasPendingWrites!==C.hasPendingWrites;return!(!C.syncStateChanged&&!V)&&this.options.includeMetadataChanges===!0}aa(C){C=U3.fromInitialDocuments(C.query,C.docs,C.mutatedKeys,C.fromCache,C.hasCachedResults),this.ia=!0,this.ra.next(C)}Z_(){return this.options.source!==H6.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(C){this.key=C}}class Be{constructor(C){this.key=C}}class Zs{constructor(C,V){this.query=C,this.da=V,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=s1(),this.mutatedKeys=s1(),this.Va=ee(C),this.ma=new b3(this.Va)}get fa(){return this.da}ga(C,V){const L=V?V.pa:new IH,e=V?V.ma:this.ma;let t=V?V.mutatedKeys:this.mutatedKeys,i=e,r=!1;const a=this.query.limitType==="F"&&e.size===this.query.limit?e.last():null,o=this.query.limitType==="L"&&e.size===this.query.limit?e.first():null;if(C.inorderTraversal((s,l)=>{const u=e.get(s),c=f9(this.query,l)?l:null,w=!!u&&this.mutatedKeys.has(u.key),P=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let k=!1;u&&c?u.data.isEqual(c.data)?w!==P&&(L.track({type:3,doc:c}),k=!0):this.ya(u,c)||(L.track({type:2,doc:c}),k=!0,(a&&this.Va(c,a)>0||o&&this.Va(c,o)<0)&&(r=!0)):!u&&c?(L.track({type:0,doc:c}),k=!0):u&&!c&&(L.track({type:1,doc:u}),k=!0,(a||o)&&(r=!0)),k&&(c?(i=i.add(c),t=P?t.add(s):t.delete(s)):(i=i.delete(s),t=t.delete(s)))}),this.query.limit!==null)for(;i.size>this.query.limit;){const s=this.query.limitType==="F"?i.last():i.first();i=i.delete(s.key),t=t.delete(s.key),L.track({type:1,doc:s})}return{ma:i,pa:L,ss:r,mutatedKeys:t}}ya(C,V){return C.hasLocalMutations&&V.hasCommittedMutations&&!V.hasLocalMutations}applyChanges(C,V,L,e){const t=this.ma;this.ma=C.ma,this.mutatedKeys=C.mutatedKeys;const i=C.pa.j_();i.sort((s,l)=>function(c,w){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M1()}};return P(c)-P(w)}(s.type,l.type)||this.Va(s.doc,l.doc)),this.wa(L),e=e!=null&&e;const r=V&&!e?this.Sa():[],a=this.Ra.size===0&&this.current&&!e?1:0,o=a!==this.Aa;return this.Aa=a,i.length!==0||o?{snapshot:new U3(this.query,C.ma,t,i,C.mutatedKeys,a===0,o,!1,!!L&&L.resumeToken.approximateByteSize()>0),ba:r}:{ba:r}}ea(C){return this.current&&C==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new IH,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(C){return!this.da.has(C)&&!!this.ma.has(C)&&!this.ma.get(C).hasLocalMutations}wa(C){C&&(C.addedDocuments.forEach(V=>this.da=this.da.add(V)),C.modifiedDocuments.forEach(V=>{}),C.removedDocuments.forEach(V=>this.da=this.da.delete(V)),this.current=C.current)}Sa(){if(!this.current)return[];const C=this.Ra;this.Ra=s1(),this.ma.forEach(L=>{this.Da(L.key)&&(this.Ra=this.Ra.add(L.key))});const V=[];return C.forEach(L=>{this.Ra.has(L)||V.push(new Be(L))}),this.Ra.forEach(L=>{C.has(L)||V.push(new Ie(L))}),V}va(C){this.da=C.ds,this.Ra=s1();const V=this.ga(C.documents);return this.applyChanges(V,!0)}Ca(){return U3.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Ss{constructor(C,V,L){this.query=C,this.targetId=V,this.view=L}}class ps{constructor(C){this.key=C,this.Fa=!1}}class gs{constructor(C,V,L,e,t,i){this.localStore=C,this.remoteStore=V,this.eventManager=L,this.sharedClientState=e,this.currentUser=t,this.maxConcurrentLimboResolutions=i,this.Ma={},this.xa=new a3(r=>Le(r),h9),this.Oa=new Map,this.Na=new Set,this.La=new B1(L1.comparator),this.Ba=new Map,this.ka=new F6,this.qa={},this.Qa=new Map,this.Ka=N3.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Os(H,C,V=!0){const L=We(H);let e;const t=L.xa.get(C);return t?(L.sharedClientState.addLocalQueryTarget(t.targetId),e=t.view.Ca()):e=await Fe(L,C,V,!0),e}async function ys(H,C){const V=We(H);await Fe(V,C,!0,!1)}async function Fe(H,C,V,L){const e=await QA(H.localStore,Y2(C)),t=e.targetId,i=H.sharedClientState.addLocalQueryTarget(t,V);let r;return L&&(r=await _s(H,C,t,i==="current",e.resumeToken)),H.isPrimaryClient&&V&&we(H.remoteStore,e),r}async function _s(H,C,V,L,e){H.Ua=(l,u,c)=>async function(P,k,x,E){let B=k.view.ga(x);B.ss&&(B=await PH(P.localStore,k.query,!1).then(({documents:S})=>k.view.ga(S,B)));const N=E&&E.targetChanges.get(k.targetId),e1=E&&E.targetMismatches.get(k.targetId)!=null,n1=k.view.applyChanges(B,P.isPrimaryClient,N,e1);return DH(P,k.targetId,n1.ba),n1.snapshot}(H,l,u,c);const t=await PH(H.localStore,C,!0),i=new Zs(C,t.ds),r=i.ga(t.documents),a=j0.createSynthesizedTargetChangeForCurrentChange(V,L&&H.onlineState!=="Offline",e),o=i.applyChanges(r,H.isPrimaryClient,a);DH(H,V,o.ba);const s=new Ss(C,V,i);return H.xa.set(C,s),H.Oa.has(V)?H.Oa.get(V).push(C):H.Oa.set(V,[C]),o.snapshot}async function Ts(H,C,V){const L=a1(H),e=L.xa.get(C),t=L.Oa.get(e.targetId);if(t.length>1)return L.Oa.set(e.targetId,t.filter(i=>!h9(i,C))),void L.xa.delete(C);L.isPrimaryClient?(L.sharedClientState.removeLocalQueryTarget(e.targetId),L.sharedClientState.isActiveQueryTarget(e.targetId)||await C6(L.localStore,e.targetId,!1).then(()=>{L.sharedClientState.clearQueryState(e.targetId),V&&N6(L.remoteStore,e.targetId),V6(L,e.targetId)}).catch(Q3)):(V6(L,e.targetId),await C6(L.localStore,e.targetId,!0))}async function ws(H,C){const V=a1(H),L=V.xa.get(C),e=V.Oa.get(L.targetId);V.isPrimaryClient&&e.length===1&&(V.sharedClientState.removeLocalQueryTarget(L.targetId),N6(V.remoteStore,L.targetId))}async function Es(H,C,V){const L=Fs(H);try{const e=await function(i,r){const a=a1(i),o=G1.now(),s=r.reduce((c,w)=>c.add(w.key),s1());let l,u;return a.persistence.runTransaction("Locally write mutations","readwrite",c=>{let w=l5(),P=s1();return a.hs.getEntries(c,s).next(k=>{w=k,w.forEach((x,E)=>{E.isValidDocument()||(P=P.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(c,w)).next(k=>{l=k;const x=[];for(const E of r){const B=jo(E,l.get(E.key).overlayedDocument);B!=null&&x.push(new U5(E.key,B,qL(B.value.mapValue),W2.exists(!0)))}return a.mutationQueue.addMutationBatch(c,o,x,r)}).next(k=>{u=k;const x=k.applyToLocalDocumentSet(l,P);return a.documentOverlayCache.saveOverlays(c,k.batchId,x)})}).then(()=>({batchId:u.batchId,changes:Me(l)}))}(L.localStore,C);L.sharedClientState.addPendingMutation(e.batchId),function(i,r,a){let o=i.qa[i.currentUser.toKey()];o||(o=new B1(l1)),o=o.insert(r,a),i.qa[i.currentUser.toKey()]=o}(L,e.batchId,V),await q0(L,e.changes),await y9(L.remoteStore)}catch(e){const t=Q6(e,"Failed to persist write");V.reject(t)}}async function xe(H,C){const V=a1(H);try{const L=await WA(V.localStore,C);C.targetChanges.forEach((e,t)=>{const i=V.Ba.get(t);i&&(O1(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.Fa=!0:e.modifiedDocuments.size>0?O1(i.Fa):e.removedDocuments.size>0&&(O1(i.Fa),i.Fa=!1))}),await q0(V,L,C)}catch(L){await Q3(L)}}function xH(H,C,V){const L=a1(H);if(L.isPrimaryClient&&V===0||!L.isPrimaryClient&&V===1){const e=[];L.xa.forEach((t,i)=>{const r=i.view.ea(C);r.snapshot&&e.push(r.snapshot)}),function(i,r){const a=a1(i);a.onlineState=r;let o=!1;a.queries.forEach((s,l)=>{for(const u of l.J_)u.ea(r)&&(o=!0)}),o&&j6(a)}(L.eventManager,C),e.length&&L.Ma.R_(e),L.onlineState=C,L.isPrimaryClient&&L.sharedClientState.setOnlineState(C)}}async function Ps(H,C,V){const L=a1(H);L.sharedClientState.updateQueryState(C,"rejected",V);const e=L.Ba.get(C),t=e&&e.key;if(t){let i=new B1(L1.comparator);i=i.insert(t,r2.newNoDocument(t,i1.min()));const r=s1().add(t),a=new p9(i1.min(),new Map,new B1(l1),i,r);await xe(L,a),L.La=L.La.remove(t),L.Ba.delete(C),$6(L)}else await C6(L.localStore,C,!1).then(()=>V6(L,C,V)).catch(Q3)}async function bs(H,C){const V=a1(H),L=C.batch.batchId;try{const e=await UA(V.localStore,C);Ne(V,L,null),De(V,L),V.sharedClientState.updateMutationState(L,"acknowledged"),await q0(V,e)}catch(e){await Q3(e)}}async function Rs(H,C,V){const L=a1(H);try{const e=await function(i,r){const a=a1(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",o=>{let s;return a.mutationQueue.lookupMutationBatch(o,r).next(l=>(O1(l!==null),s=l.keys(),a.mutationQueue.removeMutationBatch(o,l))).next(()=>a.mutationQueue.performConsistencyCheck(o)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(o,s,r)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(o,s)).next(()=>a.localDocuments.getDocuments(o,s))})}(L.localStore,C);Ne(L,C,V),De(L,C),L.sharedClientState.updateMutationState(C,"rejected",V),await q0(L,e)}catch(e){await Q3(e)}}function De(H,C){(H.Qa.get(C)||[]).forEach(V=>{V.resolve()}),H.Qa.delete(C)}function Ne(H,C,V){const L=a1(H);let e=L.qa[L.currentUser.toKey()];if(e){const t=e.get(C);t&&(V?t.reject(V):t.resolve(),e=e.remove(C)),L.qa[L.currentUser.toKey()]=e}}function V6(H,C,V=null){H.sharedClientState.removeLocalQueryTarget(C);for(const L of H.Oa.get(C))H.xa.delete(L),V&&H.Ma.Wa(L,V);H.Oa.delete(C),H.isPrimaryClient&&H.ka.yr(C).forEach(L=>{H.ka.containsKey(L)||Ue(H,L)})}function Ue(H,C){H.Na.delete(C.path.canonicalString());const V=H.La.get(C);V!==null&&(N6(H.remoteStore,V),H.La=H.La.remove(C),H.Ba.delete(V),$6(H))}function DH(H,C,V){for(const L of V)L instanceof Ie?(H.ka.addReference(L.key,C),ks(H,L)):L instanceof Be?(X("SyncEngine","Document no longer in limbo: "+L.key),H.ka.removeReference(L.key,C),H.ka.containsKey(L.key)||Ue(H,L.key)):M1()}function ks(H,C){const V=C.key,L=V.path.canonicalString();H.La.get(V)||H.Na.has(L)||(X("SyncEngine","New document in limbo: "+V),H.Na.add(L),$6(H))}function $6(H){for(;H.Na.size>0&&H.La.size<H.maxConcurrentLimboResolutions;){const C=H.Na.values().next().value;H.Na.delete(C);const V=new L1(b1.fromString(C)),L=H.Ka.next();H.Ba.set(L,new ps(V)),H.La=H.La.insert(V,L),we(H.remoteStore,new g5(Y2(Ve(V.path)),L,"TargetPurposeLimboResolution",u9.oe))}}async function q0(H,C,V){const L=a1(H),e=[],t=[],i=[];L.xa.isEmpty()||(L.xa.forEach((r,a)=>{i.push(L.Ua(a,C,V).then(o=>{var s;if((o||V)&&L.isPrimaryClient){const l=o?!o.fromCache:(s=V==null?void 0:V.targetChanges.get(a.targetId))===null||s===void 0?void 0:s.current;L.sharedClientState.updateQueryState(a.targetId,l?"current":"not-current")}if(o){e.push(o);const l=D6.zi(a.targetId,o);t.push(l)}}))}),await Promise.all(i),L.Ma.R_(e),await async function(a,o){const s=a1(a);try{await s.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>I.forEach(o,u=>I.forEach(u.Wi,c=>s.persistence.referenceDelegate.addReference(l,u.targetId,c)).next(()=>I.forEach(u.Gi,c=>s.persistence.referenceDelegate.removeReference(l,u.targetId,c)))))}catch(l){if(!j3(l))throw l;X("LocalStore","Failed to update sequence numbers: "+l)}for(const l of o){const u=l.targetId;if(!l.fromCache){const c=s.us.get(u),w=c.snapshotVersion,P=c.withLastLimboFreeSnapshotVersion(w);s.us=s.us.insert(u,P)}}}(L.localStore,t))}async function Is(H,C){const V=a1(H);if(!V.currentUser.isEqual(C)){X("SyncEngine","User change. New user:",C.toKey());const L=await Oe(V.localStore,C);V.currentUser=C,function(t,i){t.Qa.forEach(r=>{r.forEach(a=>{a.reject(new H1(D.CANCELLED,i))})}),t.Qa.clear()}(V,"'waitForPendingWrites' promise is rejected due to a user change."),V.sharedClientState.handleUserChange(C,L.removedBatchIds,L.addedBatchIds),await q0(V,L.Ts)}}function Bs(H,C){const V=a1(H),L=V.Ba.get(C);if(L&&L.Fa)return s1().add(L.key);{let e=s1();const t=V.Oa.get(C);if(!t)return e;for(const i of t){const r=V.xa.get(i);e=e.unionWith(r.view.fa)}return e}}function We(H){const C=a1(H);return C.remoteStore.remoteSyncer.applyRemoteEvent=xe.bind(null,C),C.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bs.bind(null,C),C.remoteStore.remoteSyncer.rejectListen=Ps.bind(null,C),C.Ma.R_=vs.bind(null,C.eventManager),C.Ma.Wa=hs.bind(null,C.eventManager),C}function Fs(H){const C=a1(H);return C.remoteStore.remoteSyncer.applySuccessfulWrite=bs.bind(null,C),C.remoteStore.remoteSyncer.rejectFailedWrite=Rs.bind(null,C),C}class X7{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(C){this.serializer=g9(C.databaseInfo.databaseId),this.sharedClientState=this.za(C),this.persistence=this.ja(C),await this.persistence.start(),this.localStore=this.Ha(C),this.gcScheduler=this.Ja(C,this.localStore),this.indexBackfillerScheduler=this.Ya(C,this.localStore)}Ja(C,V){return null}Ya(C,V){return null}Ha(C){return NA(this.persistence,new xA,C.initialUser,this.serializer)}ja(C){return new ge(x6.ei,this.serializer)}za(C){return new $A}async terminate(){var C,V;(C=this.gcScheduler)===null||C===void 0||C.stop(),(V=this.indexBackfillerScheduler)===null||V===void 0||V.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}X7.provider={build:()=>new X7};class xs extends X7{constructor(C){super(),this.cacheSizeBytes=C}Ja(C,V){O1(this.persistence.referenceDelegate instanceof q7);const L=this.persistence.referenceDelegate.garbageCollector;return new pA(L,C.asyncQueue,V)}ja(C){const V=this.cacheSizeBytes!==void 0?v2.withCacheSize(this.cacheSizeBytes):v2.DEFAULT;return new ge(L=>q7.ei(L,V),this.serializer)}}class L6{async initialize(C,V){this.localStore||(this.localStore=C.localStore,this.sharedClientState=C.sharedClientState,this.datastore=this.createDatastore(V),this.remoteStore=this.createRemoteStore(V),this.eventManager=this.createEventManager(V),this.syncEngine=this.createSyncEngine(V,!C.synchronizeTabs),this.sharedClientState.onlineStateHandler=L=>xH(this.syncEngine,L,1),this.remoteStore.remoteSyncer.handleCredentialChange=Is.bind(null,this.syncEngine),await ls(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(C){return function(){return new us}()}createDatastore(C){const V=g9(C.databaseInfo.databaseId),L=function(t){return new YA(t)}(C.databaseInfo);return function(t,i,r,a){return new Hs(t,i,r,a)}(C.authCredentials,C.appCheckCredentials,L,V)}createRemoteStore(C){return function(L,e,t,i,r){return new Ls(L,e,t,i,r)}(this.localStore,this.datastore,C.asyncQueue,V=>xH(this.syncEngine,V,0),function(){return RH.p()?new RH:new qA}())}createSyncEngine(C,V){return function(e,t,i,r,a,o,s){const l=new gs(e,t,i,r,a,o);return s&&(l.$a=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,C.initialUser,C.maxConcurrentLimboResolutions,V)}async terminate(){var C,V;await async function(e){const t=a1(e);X("RemoteStore","RemoteStore shutting down."),t.k_.add(5),await $0(t),t.Q_.shutdown(),t.K_.set("Unknown")}(this.remoteStore),(C=this.datastore)===null||C===void 0||C.terminate(),(V=this.eventManager)===null||V===void 0||V.terminate()}}L6.provider={build:()=>new L6};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(C){this.observer=C,this.muted=!1}next(C){this.muted||this.observer.next&&this.Xa(this.observer.next,C)}error(C){this.muted||(this.observer.error?this.Xa(this.observer.error,C):s5("Uncaught Error in snapshot listener:",C.toString()))}eu(){this.muted=!0}Xa(C,V){setTimeout(()=>{this.muted||C(V)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(C,V,L,e,t){this.authCredentials=C,this.appCheckCredentials=V,this.asyncQueue=L,this.databaseInfo=e,this.user=t2.UNAUTHENTICATED,this.clientId=QL.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=t,this.authCredentials.start(L,async i=>{X("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(L,i=>(X("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(C){this.authCredentialListener=C}setAppCheckTokenChangeListener(C){this.appCheckCredentialListener=C}terminate(){this.asyncQueue.enterRestrictedMode();const C=new T5;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),C.resolve()}catch(V){const L=Q6(V,"Failed to shutdown persistence");C.reject(L)}}),C.promise}}async function c4(H,C){H.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const V=H.configuration;await C.initialize(V);let L=V.initialUser;H.setCredentialChangeListener(async e=>{L.isEqual(e)||(await Oe(C.localStore,e),L=e)}),C.persistence.setDatabaseDeletedListener(()=>H.terminate()),H._offlineComponents=C}async function NH(H,C){H.asyncQueue.verifyOperationInProgress();const V=await Us(H);X("FirestoreClient","Initializing OnlineComponentProvider"),await C.initialize(V,H.configuration),H.setCredentialChangeListener(L=>kH(C.remoteStore,L)),H.setAppCheckTokenChangeListener((L,e)=>kH(C.remoteStore,e)),H._onlineComponents=C}async function Us(H){if(!H._offlineComponents)if(H._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await c4(H,H._uninitializedComponentsProvider._offline)}catch(C){const V=C;if(!function(e){return e.name==="FirebaseError"?e.code===D.FAILED_PRECONDITION||e.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}(V))throw V;B3("Error using user provided cache. Falling back to memory cache: "+V),await c4(H,new X7)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await c4(H,new xs(void 0));return H._offlineComponents}async function Ge(H){return H._onlineComponents||(H._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await NH(H,H._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await NH(H,new L6))),H._onlineComponents}function Ws(H){return Ge(H).then(C=>C.syncEngine)}async function Gs(H){const C=await Ge(H),V=C.eventManager;return V.onListen=Os.bind(null,C.syncEngine),V.onUnlisten=Ts.bind(null,C.syncEngine),V.onFirstRemoteStoreListen=ys.bind(null,C.syncEngine),V.onLastRemoteStoreUnlisten=ws.bind(null,C.syncEngine),V}function zs(H,C,V={}){const L=new T5;return H.asyncQueue.enqueueAndForget(async()=>function(t,i,r,a,o){const s=new Ds({next:u=>{s.eu(),i.enqueueAndForget(()=>cs(t,l)),u.fromCache&&a.source==="server"?o.reject(new H1(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(u)},error:u=>o.reject(u)}),l=new fs(r,s,{includeMetadataChanges:!0,ua:!0});return ms(t,l)}(await Gs(H),H.asyncQueue,C,V,L)),L.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(H){const C={};return H.timeoutSeconds!==void 0&&(C.timeoutSeconds=H.timeoutSeconds),C}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UH=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(H,C,V){if(!V)throw new H1(D.INVALID_ARGUMENT,`Function ${H}() cannot be called with an empty ${C}.`)}function Qs(H,C,V,L){if(C===!0&&L===!0)throw new H1(D.INVALID_ARGUMENT,`${H} and ${V} cannot be used together.`)}function WH(H){if(!L1.isDocumentKey(H))throw new H1(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${H} has ${H.length}.`)}function GH(H){if(L1.isDocumentKey(H))throw new H1(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${H} has ${H.length}.`)}function q6(H){if(H===void 0)return"undefined";if(H===null)return"null";if(typeof H=="string")return H.length>20&&(H=`${H.substring(0,20)}...`),JSON.stringify(H);if(typeof H=="number"||typeof H=="boolean")return""+H;if(typeof H=="object"){if(H instanceof Array)return"an array";{const C=function(L){return L.constructor?L.constructor.name:null}(H);return C?`a custom ${C} object`:"an object"}}return typeof H=="function"?"a function":M1()}function t3(H,C){if("_delegate"in H&&(H=H._delegate),!(H instanceof C)){if(C.name===H.constructor.name)throw new H1(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const V=q6(H);throw new H1(D.INVALID_ARGUMENT,`Expected type '${C.name}', but it was: ${V}`)}}return H}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zH{constructor(C){var V,L;if(C.host===void 0){if(C.ssl!==void 0)throw new H1(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=C.host,this.ssl=(V=C.ssl)===null||V===void 0||V;if(this.credentials=C.credentials,this.ignoreUndefinedProperties=!!C.ignoreUndefinedProperties,this.localCache=C.localCache,C.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(C.cacheSizeBytes!==-1&&C.cacheSizeBytes<1048576)throw new H1(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=C.cacheSizeBytes}Qs("experimentalForceLongPolling",C.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",C.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!C.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:C.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!C.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ze((L=C.experimentalLongPollingOptions)!==null&&L!==void 0?L:{}),function(t){if(t.timeoutSeconds!==void 0){if(isNaN(t.timeoutSeconds))throw new H1(D.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new H1(D.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new H1(D.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!C.useFetchStreams}isEqual(C){return this.host===C.host&&this.ssl===C.ssl&&this.credentials===C.credentials&&this.cacheSizeBytes===C.cacheSizeBytes&&this.experimentalForceLongPolling===C.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===C.experimentalAutoDetectLongPolling&&function(L,e){return L.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,C.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===C.ignoreUndefinedProperties&&this.useFetchStreams===C.useFetchStreams}}class _9{constructor(C,V,L,e){this._authCredentials=C,this._appCheckCredentials=V,this._databaseId=L,this._app=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zH({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H1(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(C){if(this._settingsFrozen)throw new H1(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zH(C),C.credentials!==void 0&&(this._authCredentials=function(L){if(!L)return new Yn;switch(L.type){case"firstParty":return new Vo(L.sessionIndex||"0",L.iamToken||null,L.authTokenFactory||null);case"provider":return L.client;default:throw new H1(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(C.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(V){const L=UH.get(V);L&&(X("ComponentProvider","Removing Datastore"),UH.delete(V),L.terminate())}(this),Promise.resolve()}}function js(H,C,V,L={}){var e;const t=(H=t3(H,_9))._getSettings(),i=`${C}:${V}`;if(t.host!=="firestore.googleapis.com"&&t.host!==i&&B3("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),H._setSettings(Object.assign(Object.assign({},t),{host:i,ssl:!1})),L.mockUserToken){let r,a;if(typeof L.mockUserToken=="string")r=L.mockUserToken,a=t2.MOCK_USER;else{r=Ea(L.mockUserToken,(e=H._app)===null||e===void 0?void 0:e.options.projectId);const o=L.mockUserToken.sub||L.mockUserToken.user_id;if(!o)throw new H1(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new t2(o)}H._authCredentials=new Jn(new zL(r,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T9{constructor(C,V,L){this.converter=V,this._query=L,this.type="query",this.firestore=C}withConverter(C){return new T9(this.firestore,C,this._query)}}class I2{constructor(C,V,L){this.converter=V,this._key=L,this.type="document",this.firestore=C}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new w5(this.firestore,this.converter,this._key.path.popLast())}withConverter(C){return new I2(this.firestore,C,this._key)}}class w5 extends T9{constructor(C,V,L){super(C,V,Ve(L)),this._path=L,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const C=this._path.popLast();return C.isEmpty()?null:new I2(this.firestore,null,new L1(C))}withConverter(C){return new w5(this.firestore,C,this._path)}}function n0(H,C,...V){if(H=H5(H),Qe("collection","path",C),H instanceof _9){const L=b1.fromString(C,...V);return GH(L),new w5(H,null,L)}{if(!(H instanceof I2||H instanceof w5))throw new H1(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const L=H._path.child(b1.fromString(C,...V));return GH(L),new w5(H.firestore,null,L)}}function g3(H,C,...V){if(H=H5(H),arguments.length===1&&(C=QL.newId()),Qe("doc","path",C),H instanceof _9){const L=b1.fromString(C,...V);return WH(L),new I2(H,null,new L1(L))}{if(!(H instanceof I2||H instanceof w5))throw new H1(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const L=H._path.child(b1.fromString(C,...V));return WH(L),new I2(H.firestore,H instanceof w5?H.converter:null,new L1(L))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QH{constructor(C=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new _e(this,"async_queue_retry"),this.fu=()=>{const L=m4();L&&X("AsyncQueue","Visibility state changed to "+L.visibilityState),this.r_.Jo()},this.gu=C;const V=m4();V&&typeof V.addEventListener=="function"&&V.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(C){this.enqueue(C)}enqueueAndForgetEvenWhileRestricted(C){this.pu(),this.yu(C)}enterRestrictedMode(C){if(!this.Eu){this.Eu=!0,this.Vu=C||!1;const V=m4();V&&typeof V.removeEventListener=="function"&&V.removeEventListener("visibilitychange",this.fu)}}enqueue(C){if(this.pu(),this.Eu)return new Promise(()=>{});const V=new T5;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(C().then(V.resolve,V.reject),V.promise)).then(()=>V.promise)}enqueueRetryable(C){this.enqueueAndForget(()=>(this.Iu.push(C),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(C){if(!j3(C))throw C;X("AsyncQueue","Operation failed with retryable error: "+C)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(C){const V=this.gu.then(()=>(this.Ru=!0,C().catch(L=>{this.Au=L,this.Ru=!1;const e=function(i){let r=i.message||"";return i.stack&&(r=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),r}(L);throw s5("INTERNAL UNHANDLED ERROR: ",e),L}).then(L=>(this.Ru=!1,L))));return this.gu=V,V}enqueueAfterDelay(C,V,L){this.pu(),this.mu.indexOf(C)>-1&&(V=0);const e=z6.createAndSchedule(this,C,V,L,t=>this.Su(t));return this.du.push(e),e}pu(){this.Au&&M1()}verifyOperationInProgress(){}async bu(){let C;do C=this.gu,await C;while(C!==this.gu)}Du(C){for(const V of this.du)if(V.timerId===C)return!0;return!1}vu(C){return this.bu().then(()=>{this.du.sort((V,L)=>V.targetTimeMs-L.targetTimeMs);for(const V of this.du)if(V.skipDelay(),C!=="all"&&V.timerId===C)break;return this.bu()})}Cu(C){this.mu.push(C)}Su(C){const V=this.du.indexOf(C);this.du.splice(V,1)}}class K0 extends _9{constructor(C,V,L,e){super(C,V,L,e),this.type="firestore",this._queue=new QH,this._persistenceKey=(e==null?void 0:e.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const C=this._firestoreClient.terminate();this._queue=new QH(C),this._firestoreClient=void 0,await C}}}function $s(H,C){const V=typeof H=="object"?H:IL(),L=typeof H=="string"?H:"(default)",e=z0(V,"firestore").getImmediate({identifier:L});if(!e._initialized){const t=Ta("firestore");t&&js(e,...t)}return e}function je(H){if(H._terminated)throw new H1(D.FAILED_PRECONDITION,"The client has already been terminated.");return H._firestoreClient||qs(H),H._firestoreClient}function qs(H){var C,V,L;const e=H._freezeSettings(),t=function(r,a,o,s){return new co(r,a,o,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ze(s.experimentalLongPollingOptions),s.useFetchStreams)}(H._databaseId,((C=H._app)===null||C===void 0?void 0:C.options.appId)||"",H._persistenceKey,e);H._componentsProvider||!((V=e.localCache)===null||V===void 0)&&V._offlineComponentProvider&&(!((L=e.localCache)===null||L===void 0)&&L._onlineComponentProvider)&&(H._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),H._firestoreClient=new Ns(H._authCredentials,H._appCheckCredentials,H._queue,t,H._componentsProvider&&function(r){const a=r==null?void 0:r._online.build();return{_offline:r==null?void 0:r._offline.build(a),_online:a}}(H._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3{constructor(C){this._byteString=C}static fromBase64String(C){try{return new W3(J1.fromBase64String(C))}catch(V){throw new H1(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+V)}}static fromUint8Array(C){return new W3(J1.fromUint8Array(C))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(C){return this._byteString.isEqual(C._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w9{constructor(...C){for(let V=0;V<C.length;++V)if(C[V].length===0)throw new H1(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y1(C)}isEqual(C){return this._internalPath.isEqual(C._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K6{constructor(C){this._methodName=C}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6{constructor(C,V){if(!isFinite(C)||C<-90||C>90)throw new H1(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+C);if(!isFinite(V)||V<-180||V>180)throw new H1(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+V);this._lat=C,this._long=V}get latitude(){return this._lat}get longitude(){return this._long}isEqual(C){return this._lat===C._lat&&this._long===C._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(C){return l1(this._lat,C._lat)||l1(this._long,C._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y6{constructor(C){this._values=(C||[]).map(V=>V)}toArray(){return this._values.map(C=>C)}isEqual(C){return function(L,e){if(L.length!==e.length)return!1;for(let t=0;t<L.length;++t)if(L[t]!==e[t])return!1;return!0}(this._values,C._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=/^__.*__$/;class Xs{constructor(C,V,L){this.data=C,this.fieldMask=V,this.fieldTransforms=L}toMutation(C,V){return this.fieldMask!==null?new U5(C,this.data,this.fieldMask,V,this.fieldTransforms):new Q0(C,this.data,V,this.fieldTransforms)}}class $e{constructor(C,V,L){this.data=C,this.fieldMask=V,this.fieldTransforms=L}toMutation(C,V){return new U5(C,this.data,this.fieldMask,V,this.fieldTransforms)}}function qe(H){switch(H){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M1()}}class J6{constructor(C,V,L,e,t,i){this.settings=C,this.databaseId=V,this.serializer=L,this.ignoreUndefinedProperties=e,t===void 0&&this.Fu(),this.fieldTransforms=t||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(C){return new J6(Object.assign(Object.assign({},this.settings),C),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(C){var V;const L=(V=this.path)===null||V===void 0?void 0:V.child(C),e=this.xu({path:L,Nu:!1});return e.Lu(C),e}Bu(C){var V;const L=(V=this.path)===null||V===void 0?void 0:V.child(C),e=this.xu({path:L,Nu:!1});return e.Fu(),e}ku(C){return this.xu({path:void 0,Nu:!0})}qu(C){return Y7(C,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(C){return this.fieldMask.find(V=>C.isPrefixOf(V))!==void 0||this.fieldTransforms.find(V=>C.isPrefixOf(V.field))!==void 0}Fu(){if(this.path)for(let C=0;C<this.path.length;C++)this.Lu(this.path.get(C))}Lu(C){if(C.length===0)throw this.qu("Document fields must not be empty");if(qe(this.Mu)&&Ks.test(C))throw this.qu('Document fields cannot begin and end with "__"')}}class Ys{constructor(C,V,L){this.databaseId=C,this.ignoreUndefinedProperties=V,this.serializer=L||g9(C)}$u(C,V,L,e=!1){return new J6({Mu:C,methodName:V,Ku:L,path:Y1.emptyPath(),Nu:!1,Qu:e},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ke(H){const C=H._freezeSettings(),V=g9(H._databaseId);return new Ys(H._databaseId,!!C.ignoreUndefinedProperties,V)}function Js(H,C,V,L,e,t={}){const i=H.$u(t.merge||t.mergeFields?2:0,C,V,e);C8("Data must be an object, but it was:",i,L);const r=Xe(L,i);let a,o;if(t.merge)a=new w2(i.fieldMask),o=i.fieldTransforms;else if(t.mergeFields){const s=[];for(const l of t.mergeFields){const u=e6(C,l,V);if(!i.contains(u))throw new H1(D.INVALID_ARGUMENT,`Field '${u}' is specified in your field mask but missing from your input data.`);Je(s,u)||s.push(u)}a=new w2(s),o=i.fieldTransforms.filter(l=>a.covers(l.field))}else a=null,o=i.fieldTransforms;return new Xs(new f2(r),a,o)}class E9 extends K6{_toFieldTransform(C){if(C.Mu!==2)throw C.Mu===1?C.qu(`${this._methodName}() can only appear at the top level of your update data`):C.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return C.fieldMask.push(C.path),null}isEqual(C){return C instanceof E9}}function Cl(H,C,V,L){const e=H.$u(1,C,V);C8("Data must be an object, but it was:",e,L);const t=[],i=f2.empty();N5(L,(a,o)=>{const s=H8(C,a,V);o=H5(o);const l=e.Bu(s);if(o instanceof E9)t.push(s);else{const u=P9(o,l);u!=null&&(t.push(s),i.set(s,u))}});const r=new w2(t);return new $e(i,r,e.fieldTransforms)}function Hl(H,C,V,L,e,t){const i=H.$u(1,C,V),r=[e6(C,L,V)],a=[e];if(t.length%2!=0)throw new H1(D.INVALID_ARGUMENT,`Function ${C}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let u=0;u<t.length;u+=2)r.push(e6(C,t[u])),a.push(t[u+1]);const o=[],s=f2.empty();for(let u=r.length-1;u>=0;--u)if(!Je(o,r[u])){const c=r[u];let w=a[u];w=H5(w);const P=i.Bu(c);if(w instanceof E9)o.push(c);else{const k=P9(w,P);k!=null&&(o.push(c),s.set(c,k))}}const l=new w2(o);return new $e(s,l,i.fieldTransforms)}function P9(H,C){if(Ye(H=H5(H)))return C8("Unsupported field value:",C,H),Xe(H,C);if(H instanceof K6)return function(L,e){if(!qe(e.Mu))throw e.qu(`${L._methodName}() can only be used with update() and set()`);if(!e.path)throw e.qu(`${L._methodName}() is not currently supported inside arrays`);const t=L._toFieldTransform(e);t&&e.fieldTransforms.push(t)}(H,C),null;if(H===void 0&&C.ignoreUndefinedProperties)return null;if(C.path&&C.fieldMask.push(C.path),H instanceof Array){if(C.settings.Nu&&C.Mu!==4)throw C.qu("Nested arrays are not supported");return function(L,e){const t=[];let i=0;for(const r of L){let a=P9(r,e.ku(i));a==null&&(a={nullValue:"NULL_VALUE"}),t.push(a),i++}return{arrayValue:{values:t}}}(H,C)}return function(L,e){if((L=H5(L))===null)return{nullValue:"NULL_VALUE"};if(typeof L=="number")return No(e.serializer,L);if(typeof L=="boolean")return{booleanValue:L};if(typeof L=="string")return{stringValue:L};if(L instanceof Date){const t=G1.fromDate(L);return{timestampValue:$7(e.serializer,t)}}if(L instanceof G1){const t=new G1(L.seconds,1e3*Math.floor(L.nanoseconds/1e3));return{timestampValue:$7(e.serializer,t)}}if(L instanceof X6)return{geoPointValue:{latitude:L.latitude,longitude:L.longitude}};if(L instanceof W3)return{bytesValue:ce(e.serializer,L._byteString)};if(L instanceof I2){const t=e.databaseId,i=L.firestore._databaseId;if(!i.isEqual(t))throw e.qu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${t.projectId}/${t.database}`);return{referenceValue:B6(L.firestore._databaseId||e.databaseId,L._key.path)}}if(L instanceof Y6)return function(i,r){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:i.toArray().map(a=>{if(typeof a!="number")throw r.qu("VectorValues must only contain numeric values.");return b6(r.serializer,a)})}}}}}}(L,e);throw e.qu(`Unsupported field value: ${q6(L)}`)}(H,C)}function Xe(H,C){const V={};return jL(H)?C.path&&C.path.length>0&&C.fieldMask.push(C.path):N5(H,(L,e)=>{const t=P9(e,C.Ou(L));t!=null&&(V[L]=t)}),{mapValue:{fields:V}}}function Ye(H){return!(typeof H!="object"||H===null||H instanceof Array||H instanceof Date||H instanceof G1||H instanceof X6||H instanceof W3||H instanceof I2||H instanceof K6||H instanceof Y6)}function C8(H,C,V){if(!Ye(V)||!function(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}(V)){const L=q6(V);throw L==="an object"?C.qu(H+" a custom object"):C.qu(H+" "+L)}}function e6(H,C,V){if((C=H5(C))instanceof w9)return C._internalPath;if(typeof C=="string")return H8(H,C);throw Y7("Field path arguments must be of type string or ",H,!1,void 0,V)}const Vl=new RegExp("[~\\*/\\[\\]]");function H8(H,C,V){if(C.search(Vl)>=0)throw Y7(`Invalid field path (${C}). Paths must not contain '~', '*', '/', '[', or ']'`,H,!1,void 0,V);try{return new w9(...C.split("."))._internalPath}catch{throw Y7(`Invalid field path (${C}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,H,!1,void 0,V)}}function Y7(H,C,V,L,e){const t=L&&!L.isEmpty(),i=e!==void 0;let r=`Function ${C}() called with invalid data`;V&&(r+=" (via `toFirestore()`)"),r+=". ";let a="";return(t||i)&&(a+=" (found",t&&(a+=` in field ${L}`),i&&(a+=` in document ${e}`),a+=")"),new H1(D.INVALID_ARGUMENT,r+H+a)}function Je(H,C){return H.some(V=>V.isEqual(C))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(C,V,L,e,t){this._firestore=C,this._userDataWriter=V,this._key=L,this._document=e,this._converter=t}get id(){return this._key.path.lastSegment()}get ref(){return new I2(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const C=new Ll(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(C)}return this._userDataWriter.convertValue(this._document.data.value)}}get(C){if(this._document){const V=this._document.data.field(Ht("DocumentSnapshot.get",C));if(V!==null)return this._userDataWriter.convertValue(V)}}}class Ll extends Ct{data(){return super.data()}}function Ht(H,C){return typeof C=="string"?H8(H,C):C instanceof w9?C._internalPath:C._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(H){if(H.limitType==="L"&&H.explicitOrderBy.length===0)throw new H1(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tl{convertValue(C,V="none"){switch(k5(C)){case 0:return null;case 1:return C.booleanValue;case 2:return x1(C.integerValue||C.doubleValue);case 3:return this.convertTimestamp(C.timestampValue);case 4:return this.convertServerTimestamp(C,V);case 5:return C.stringValue;case 6:return this.convertBytes(R5(C.bytesValue));case 7:return this.convertReference(C.referenceValue);case 8:return this.convertGeoPoint(C.geoPointValue);case 9:return this.convertArray(C.arrayValue,V);case 11:return this.convertObject(C.mapValue,V);case 10:return this.convertVectorValue(C.mapValue);default:throw M1()}}convertObject(C,V){return this.convertObjectMap(C.fields,V)}convertObjectMap(C,V="none"){const L={};return N5(C,(e,t)=>{L[e]=this.convertValue(t,V)}),L}convertVectorValue(C){var V,L,e;const t=(e=(L=(V=C.fields)===null||V===void 0?void 0:V.value.arrayValue)===null||L===void 0?void 0:L.values)===null||e===void 0?void 0:e.map(i=>x1(i.doubleValue));return new Y6(t)}convertGeoPoint(C){return new X6(x1(C.latitude),x1(C.longitude))}convertArray(C,V){return(C.values||[]).map(L=>this.convertValue(L,V))}convertServerTimestamp(C,V){switch(V){case"previous":const L=c9(C);return L==null?null:this.convertValue(L,V);case"estimate":return this.convertTimestamp(B0(C));default:return null}}convertTimestamp(C){const V=b5(C);return new G1(V.seconds,V.nanos)}convertDocumentKey(C,V){const L=b1.fromString(C);O1(pe(L));const e=new F0(L.get(1),L.get(3)),t=new L1(L.popFirst(5));return e.isEqual(V)||s5(`Document ${t} contains a document reference within a different database (${e.projectId}/${e.database}) which is not supported. It will be treated as a reference in the current database (${V.projectId}/${V.database}) instead.`),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(H,C,V){let L;return L=H?H.toFirestore(C):C,L}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h7{constructor(C,V){this.hasPendingWrites=C,this.fromCache=V}isEqual(C){return this.hasPendingWrites===C.hasPendingWrites&&this.fromCache===C.fromCache}}class il extends Ct{constructor(C,V,L,e,t,i){super(C,V,L,e,i),this._firestore=C,this._firestoreImpl=C,this.metadata=t}exists(){return super.exists()}data(C={}){if(this._document){if(this._converter){const V=new P7(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(V,C)}return this._userDataWriter.convertValue(this._document.data.value,C.serverTimestamps)}}get(C,V={}){if(this._document){const L=this._document.data.field(Ht("DocumentSnapshot.get",C));if(L!==null)return this._userDataWriter.convertValue(L,V.serverTimestamps)}}}class P7 extends il{data(C={}){return super.data(C)}}class rl{constructor(C,V,L,e){this._firestore=C,this._userDataWriter=V,this._snapshot=e,this.metadata=new h7(e.hasPendingWrites,e.fromCache),this.query=L}get docs(){const C=[];return this.forEach(V=>C.push(V)),C}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(C,V){this._snapshot.docs.forEach(L=>{C.call(V,new P7(this._firestore,this._userDataWriter,L.key,L,new h7(this._snapshot.mutatedKeys.has(L.key),this._snapshot.fromCache),this.query.converter))})}docChanges(C={}){const V=!!C.includeMetadataChanges;if(V&&this._snapshot.excludesMetadataChanges)throw new H1(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===V||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let i=0;return e._snapshot.docChanges.map(r=>{const a=new P7(e._firestore,e._userDataWriter,r.doc.key,r.doc,new h7(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(r=>t||r.type!==3).map(r=>{const a=new P7(e._firestore,e._userDataWriter,r.doc.key,r.doc,new h7(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);let o=-1,s=-1;return r.type!==0&&(o=i.indexOf(r.doc.key),i=i.delete(r.doc.key)),r.type!==1&&(i=i.add(r.doc),s=i.indexOf(r.doc.key)),{type:al(r.type),doc:a,oldIndex:o,newIndex:s}})}}(this,V),this._cachedChangesIncludeMetadataChanges=V),this._cachedChanges}}function al(H){switch(H){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M1()}}class nl extends tl{constructor(C){super(),this.firestore=C}convertBytes(C){return new W3(C)}convertReference(C){const V=this.convertDocumentKey(C,this.firestore._databaseId);return new I2(this.firestore,null,V)}}function jH(H){H=t3(H,T9);const C=t3(H.firestore,K0),V=je(C),L=new nl(C);return el(H._query),zs(V,H._query).then(e=>new rl(C,L,H,e))}function v4(H,C,V,...L){H=t3(H,I2);const e=t3(H.firestore,K0),t=Ke(e);let i;return i=typeof(C=H5(C))=="string"||C instanceof w9?Hl(t,"updateDoc",H._key,C,V,L):Cl(t,"updateDoc",H._key,C),V8(e,[i.toMutation(H._key,W2.exists(!0))])}function $H(H){return V8(t3(H.firestore,K0),[new R6(H._key,W2.none())])}function h4(H,C){const V=t3(H.firestore,K0),L=g3(H),e=Ml(H.converter,C);return V8(V,[Js(Ke(H.firestore),"addDoc",L._key,e,H.converter!==null,{}).toMutation(L._key,W2.exists(!1))]).then(()=>L)}function V8(H,C){return function(L,e){const t=new T5;return L.asyncQueue.enqueueAndForget(async()=>Es(await Ws(L),e,t)),t.promise}(je(H),C)}(function(C,V=!0){(function(e){z3=e})(Un),E5(new o5("firestore",(L,{instanceIdentifier:e,options:t})=>{const i=L.getProvider("app").getImmediate(),r=new K0(new Co(L.getProvider("auth-internal")),new eo(L.getProvider("app-check-internal")),function(o,s){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new H1(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new F0(o.options.projectId,s)}(i,e),i);return t=Object.assign({useFetchStreams:V},t),r._setSettings(t),r},"PUBLIC").setMultipleInstances(!0)),X2(aH,"4.7.5",C),X2(aH,"4.7.5","esm2017")})();var ol="firebase",Al="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */X2(ol,Al,"app");const Vt="@firebase/installations",L8="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=1e4,et=`w:${L8}`,tt="FIS_v2",sl="https://firebaseinstallations.googleapis.com/v1",ll=60*60*1e3,dl="installations",ul="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},M3=new d9(dl,ul,ml);function Mt(H){return H instanceof D5&&H.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it({projectId:H}){return`${sl}/projects/${H}/installations`}function rt(H){return{token:H.token,requestStatus:2,expiresIn:vl(H.expiresIn),creationTime:Date.now()}}async function at(H,C){const L=(await C.json()).error;return M3.create("request-failed",{requestName:H,serverCode:L.code,serverMessage:L.message,serverStatus:L.status})}function nt({apiKey:H}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":H})}function cl(H,{refreshToken:C}){const V=nt(H);return V.append("Authorization",hl(C)),V}async function ot(H){const C=await H();return C.status>=500&&C.status<600?H():C}function vl(H){return Number(H.replace("s","000"))}function hl(H){return`${tt} ${H}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl({appConfig:H,heartbeatServiceProvider:C},{fid:V}){const L=it(H),e=nt(H),t=C.getImmediate({optional:!0});if(t){const o=await t.getHeartbeatsHeader();o&&e.append("x-firebase-client",o)}const i={fid:V,authVersion:tt,appId:H.appId,sdkVersion:et},r={method:"POST",headers:e,body:JSON.stringify(i)},a=await ot(()=>fetch(L,r));if(a.ok){const o=await a.json();return{fid:o.fid||V,registrationStatus:2,refreshToken:o.refreshToken,authToken:rt(o.authToken)}}else throw await at("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(H){return new Promise(C=>{setTimeout(C,H)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(H){return btoa(String.fromCharCode(...H)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=/^[cdef][\w-]{21}$/,t6="";function pl(){try{const H=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(H),H[0]=112+H[0]%16;const V=gl(H);return Sl.test(V)?V:t6}catch{return t6}}function gl(H){return Zl(H).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b9(H){return`${H.appName}!${H.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Map;function lt(H,C){const V=b9(H);dt(V,C),Ol(V,C)}function dt(H,C){const V=st.get(H);if(V)for(const L of V)L(C)}function Ol(H,C){const V=yl();V&&V.postMessage({key:H,fid:C}),_l()}let J5=null;function yl(){return!J5&&"BroadcastChannel"in self&&(J5=new BroadcastChannel("[Firebase] FID Change"),J5.onmessage=H=>{dt(H.data.key,H.data.fid)}),J5}function _l(){st.size===0&&J5&&(J5.close(),J5=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="firebase-installations-database",wl=1,i3="firebase-installations-store";let f4=null;function e8(){return f4||(f4=RL(Tl,wl,{upgrade:(H,C)=>{switch(C){case 0:H.createObjectStore(i3)}}})),f4}async function J7(H,C){const V=b9(H),e=(await e8()).transaction(i3,"readwrite"),t=e.objectStore(i3),i=await t.get(V);return await t.put(C,V),await e.done,(!i||i.fid!==C.fid)&&lt(H,C.fid),C}async function ut(H){const C=b9(H),L=(await e8()).transaction(i3,"readwrite");await L.objectStore(i3).delete(C),await L.done}async function R9(H,C){const V=b9(H),e=(await e8()).transaction(i3,"readwrite"),t=e.objectStore(i3),i=await t.get(V),r=C(i);return r===void 0?await t.delete(V):await t.put(r,V),await e.done,r&&(!i||i.fid!==r.fid)&&lt(H,r.fid),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t8(H){let C;const V=await R9(H.appConfig,L=>{const e=El(L),t=Pl(H,e);return C=t.registrationPromise,t.installationEntry});return V.fid===t6?{installationEntry:await C}:{installationEntry:V,registrationPromise:C}}function El(H){const C=H||{fid:pl(),registrationStatus:0};return mt(C)}function Pl(H,C){if(C.registrationStatus===0){if(!navigator.onLine){const e=Promise.reject(M3.create("app-offline"));return{installationEntry:C,registrationPromise:e}}const V={fid:C.fid,registrationStatus:1,registrationTime:Date.now()},L=bl(H,V);return{installationEntry:V,registrationPromise:L}}else return C.registrationStatus===1?{installationEntry:C,registrationPromise:Rl(H)}:{installationEntry:C}}async function bl(H,C){try{const V=await fl(H,C);return J7(H.appConfig,V)}catch(V){throw Mt(V)&&V.customData.serverCode===409?await ut(H.appConfig):await J7(H.appConfig,{fid:C.fid,registrationStatus:0}),V}}async function Rl(H){let C=await qH(H.appConfig);for(;C.registrationStatus===1;)await At(100),C=await qH(H.appConfig);if(C.registrationStatus===0){const{installationEntry:V,registrationPromise:L}=await t8(H);return L||V}return C}function qH(H){return R9(H,C=>{if(!C)throw M3.create("installation-not-found");return mt(C)})}function mt(H){return kl(H)?{fid:H.fid,registrationStatus:0}:H}function kl(H){return H.registrationStatus===1&&H.registrationTime+Lt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il({appConfig:H,heartbeatServiceProvider:C},V){const L=Bl(H,V),e=cl(H,V),t=C.getImmediate({optional:!0});if(t){const o=await t.getHeartbeatsHeader();o&&e.append("x-firebase-client",o)}const i={installation:{sdkVersion:et,appId:H.appId}},r={method:"POST",headers:e,body:JSON.stringify(i)},a=await ot(()=>fetch(L,r));if(a.ok){const o=await a.json();return rt(o)}else throw await at("Generate Auth Token",a)}function Bl(H,{fid:C}){return`${it(H)}/${C}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M8(H,C=!1){let V;const L=await R9(H.appConfig,t=>{if(!ct(t))throw M3.create("not-registered");const i=t.authToken;if(!C&&Dl(i))return t;if(i.requestStatus===1)return V=Fl(H,C),t;{if(!navigator.onLine)throw M3.create("app-offline");const r=Ul(t);return V=xl(H,r),r}});return V?await V:L.authToken}async function Fl(H,C){let V=await KH(H.appConfig);for(;V.authToken.requestStatus===1;)await At(100),V=await KH(H.appConfig);const L=V.authToken;return L.requestStatus===0?M8(H,C):L}function KH(H){return R9(H,C=>{if(!ct(C))throw M3.create("not-registered");const V=C.authToken;return Wl(V)?Object.assign(Object.assign({},C),{authToken:{requestStatus:0}}):C})}async function xl(H,C){try{const V=await Il(H,C),L=Object.assign(Object.assign({},C),{authToken:V});return await J7(H.appConfig,L),V}catch(V){if(Mt(V)&&(V.customData.serverCode===401||V.customData.serverCode===404))await ut(H.appConfig);else{const L=Object.assign(Object.assign({},C),{authToken:{requestStatus:0}});await J7(H.appConfig,L)}throw V}}function ct(H){return H!==void 0&&H.registrationStatus===2}function Dl(H){return H.requestStatus===2&&!Nl(H)}function Nl(H){const C=Date.now();return C<H.creationTime||H.creationTime+H.expiresIn<C+ll}function Ul(H){const C={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},H),{authToken:C})}function Wl(H){return H.requestStatus===1&&H.requestTime+Lt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(H){const C=H,{installationEntry:V,registrationPromise:L}=await t8(C);return L?L.catch(console.error):M8(C).catch(console.error),V.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(H,C=!1){const V=H;return await Ql(V),(await M8(V,C)).token}async function Ql(H){const{registrationPromise:C}=await t8(H);C&&await C}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(H){if(!H||!H.options)throw Z4("App Configuration");if(!H.name)throw Z4("App Name");const C=["projectId","apiKey","appId"];for(const V of C)if(!H.options[V])throw Z4(V);return{appName:H.name,projectId:H.options.projectId,apiKey:H.options.apiKey,appId:H.options.appId}}function Z4(H){return M3.create("missing-app-config-values",{valueName:H})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="installations",$l="installations-internal",ql=H=>{const C=H.getProvider("app").getImmediate(),V=jl(C),L=z0(C,"heartbeat");return{app:C,appConfig:V,heartbeatServiceProvider:L,_delete:()=>Promise.resolve()}},Kl=H=>{const C=H.getProvider("app").getImmediate(),V=z0(C,vt).getImmediate();return{getId:()=>Gl(V),getToken:e=>zl(V,e)}};function Xl(){E5(new o5(vt,ql,"PUBLIC")),E5(new o5($l,Kl,"PRIVATE"))}Xl();X2(Vt,L8);X2(Vt,L8,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C9="analytics",Yl="firebase_id",Jl="origin",Cd=60*1e3,Hd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",i8="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=new O6("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},E2=new d9("analytics","Analytics",Vd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(H){if(!H.startsWith(i8)){const C=E2.create("invalid-gtag-resource",{gtagURL:H});return Z2.warn(C.message),""}return H}function ht(H){return Promise.all(H.map(C=>C.catch(V=>V)))}function ed(H,C){let V;return window.trustedTypes&&(V=window.trustedTypes.createPolicy(H,C)),V}function td(H,C){const V=ed("firebase-js-sdk-policy",{createScriptURL:Ld}),L=document.createElement("script"),e=`${i8}?l=${H}&id=${C}`;L.src=V?V==null?void 0:V.createScriptURL(e):e,L.async=!0,document.head.appendChild(L)}function Md(H){let C=[];return Array.isArray(window[H])?C=window[H]:window[H]=C,C}async function id(H,C,V,L,e,t){const i=L[e];try{if(i)await C[i];else{const a=(await ht(V)).find(o=>o.measurementId===e);a&&await C[a.appId]}}catch(r){Z2.error(r)}H("config",e,t)}async function rd(H,C,V,L,e){try{let t=[];if(e&&e.send_to){let i=e.send_to;Array.isArray(i)||(i=[i]);const r=await ht(V);for(const a of i){const o=r.find(l=>l.measurementId===a),s=o&&C[o.appId];if(s)t.push(s);else{t=[];break}}}t.length===0&&(t=Object.values(C)),await Promise.all(t),H("event",L,e||{})}catch(t){Z2.error(t)}}function ad(H,C,V,L){async function e(t,...i){try{if(t==="event"){const[r,a]=i;await rd(H,C,V,r,a)}else if(t==="config"){const[r,a]=i;await id(H,C,V,L,r,a)}else if(t==="consent"){const[r,a]=i;H("consent",r,a)}else if(t==="get"){const[r,a,o]=i;H("get",r,a,o)}else if(t==="set"){const[r]=i;H("set",r)}else H(t,...i)}catch(r){Z2.error(r)}}return e}function nd(H,C,V,L,e){let t=function(...i){window[L].push(arguments)};return window[e]&&typeof window[e]=="function"&&(t=window[e]),window[e]=ad(t,H,C,V),{gtagCore:t,wrappedGtag:window[e]}}function od(H){const C=window.document.getElementsByTagName("script");for(const V of Object.values(C))if(V.src&&V.src.includes(i8)&&V.src.includes(H))return V;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=30,sd=1e3;class ld{constructor(C={},V=sd){this.throttleMetadata=C,this.intervalMillis=V}getThrottleMetadata(C){return this.throttleMetadata[C]}setThrottleMetadata(C,V){this.throttleMetadata[C]=V}deleteThrottleMetadata(C){delete this.throttleMetadata[C]}}const ft=new ld;function dd(H){return new Headers({Accept:"application/json","x-goog-api-key":H})}async function ud(H){var C;const{appId:V,apiKey:L}=H,e={method:"GET",headers:dd(L)},t=Hd.replace("{app-id}",V),i=await fetch(t,e);if(i.status!==200&&i.status!==304){let r="";try{const a=await i.json();!((C=a.error)===null||C===void 0)&&C.message&&(r=a.error.message)}catch{}throw E2.create("config-fetch-failed",{httpStatus:i.status,responseMessage:r})}return i.json()}async function md(H,C=ft,V){const{appId:L,apiKey:e,measurementId:t}=H.options;if(!L)throw E2.create("no-app-id");if(!e){if(t)return{measurementId:t,appId:L};throw E2.create("no-api-key")}const i=C.getThrottleMetadata(L)||{backoffCount:0,throttleEndTimeMillis:Date.now()},r=new hd;return setTimeout(async()=>{r.abort()},Cd),Zt({appId:L,apiKey:e,measurementId:t},i,r,C)}async function Zt(H,{throttleEndTimeMillis:C,backoffCount:V},L,e=ft){var t;const{appId:i,measurementId:r}=H;try{await cd(L,C)}catch(a){if(r)return Z2.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:i,measurementId:r};throw a}try{const a=await ud(H);return e.deleteThrottleMetadata(i),a}catch(a){const o=a;if(!vd(o)){if(e.deleteThrottleMetadata(i),r)return Z2.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${o==null?void 0:o.message}]`),{appId:i,measurementId:r};throw a}const s=Number((t=o==null?void 0:o.customData)===null||t===void 0?void 0:t.httpStatus)===503?JC(V,e.intervalMillis,Ad):JC(V,e.intervalMillis),l={throttleEndTimeMillis:Date.now()+s,backoffCount:V+1};return e.setThrottleMetadata(i,l),Z2.debug(`Calling attemptFetch again in ${s} millis`),Zt(H,l,L,e)}}function cd(H,C){return new Promise((V,L)=>{const e=Math.max(C-Date.now(),0),t=setTimeout(V,e);H.addEventListener(()=>{clearTimeout(t),L(E2.create("fetch-throttle",{throttleEndTimeMillis:C}))})})}function vd(H){if(!(H instanceof D5)||!H.customData)return!1;const C=Number(H.customData.httpStatus);return C===429||C===500||C===503||C===504}class hd{constructor(){this.listeners=[]}addEventListener(C){this.listeners.push(C)}abort(){this.listeners.forEach(C=>C())}}async function fd(H,C,V,L,e){if(e&&e.global){H("event",V,L);return}else{const t=await C,i=Object.assign(Object.assign({},L),{send_to:t});H("event",V,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zd(){if(wL())try{await EL()}catch(H){return Z2.warn(E2.create("indexeddb-unavailable",{errorInfo:H==null?void 0:H.toString()}).message),!1}else return Z2.warn(E2.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Sd(H,C,V,L,e,t,i){var r;const a=md(H);a.then(c=>{V[c.measurementId]=c.appId,H.options.measurementId&&c.measurementId!==H.options.measurementId&&Z2.warn(`The measurement ID in the local Firebase config (${H.options.measurementId}) does not match the measurement ID fetched from the server (${c.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(c=>Z2.error(c)),C.push(a);const o=Zd().then(c=>{if(c)return L.getId()}),[s,l]=await Promise.all([a,o]);od(t)||td(t,s.measurementId),e("js",new Date);const u=(r=i==null?void 0:i.config)!==null&&r!==void 0?r:{};return u[Jl]="firebase",u.update=!0,l!=null&&(u[Yl]=l),e("config",s.measurementId,u),s.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.