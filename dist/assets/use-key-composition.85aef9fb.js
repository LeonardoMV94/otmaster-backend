import{j as de,w as A,q as T,av as ce,z as E,X as fe,i as ve,Y as me,k as i,u as a,Z as ge,r as C,a9 as pe,as as he,ak as be,h as ye,m as Ce,ab as xe,ac as qe,o as Se,O as _e,e as I,x as O,Q as J,aw as we,ah as ke,a as Be}from"./index.128f1bdb.js";import{b as Fe,u as Re,a as Ae}from"./format.bef1d27c.js";function $e({validate:e,resetValidation:t,requiresQForm:o}){const l=de(ce,!1);if(l!==!1){const{props:d,proxy:s}=E();Object.assign(s,{validate:e,resetValidation:t}),A(()=>d.disable,n=>{n===!0?(typeof t=="function"&&t(),l.unbindComponent(s)):l.bindComponent(s)}),d.disable!==!0&&l.bindComponent(s),T(()=>{d.disable!==!0&&l.unbindComponent(s)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const X=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Y=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,G=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,P=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,M=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ee={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>X.test(e),hexaColor:e=>Y.test(e),hexOrHexaColor:e=>G.test(e),rgbColor:e=>P.test(e),rgbaColor:e=>M.test(e),rgbOrRgbaColor:e=>P.test(e)||M.test(e),hexOrRgbColor:e=>X.test(e)||P.test(e),hexaOrRgbaColor:e=>Y.test(e)||M.test(e),anyColor:e=>G.test(e)||P.test(e)||M.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const Ve={...fe,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},N=50,re=2*N,le=re*Math.PI,Ee=Math.round(le*1e3)/1e3;ve({name:"QCircularProgress",props:{...Ve,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=E(),l=me(e),d=i(()=>{const h=(o.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(o.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-h}deg)`:`rotate3d(0, 0, 1, ${h-90}deg)`}}),s=i(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),n=i(()=>re/(1-e.thickness/2)),b=i(()=>`${n.value/2} ${n.value/2} ${n.value} ${n.value}`),p=i(()=>Fe(e.value,e.min,e.max)),k=i(()=>le*(1-(p.value-e.min)/(e.max-e.min))),m=i(()=>e.thickness/2*n.value);function S({thickness:h,offset:y,color:x,cls:B}){return a("circle",{class:"q-circular-progress__"+B+(x!==void 0?` text-${x}`:""),style:s.value,fill:"transparent",stroke:"currentColor","stroke-width":h,"stroke-dasharray":Ee,"stroke-dashoffset":y,cx:n.value,cy:n.value,r:N})}return()=>{const h=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&h.push(a("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:N-m.value/2,cx:n.value,cy:n.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&h.push(S({cls:"track",thickness:m.value,offset:0,color:e.trackColor})),h.push(S({cls:"circle",thickness:m.value,offset:k.value,color:e.color}));const y=[a("svg",{class:"q-circular-progress__svg",style:d.value,viewBox:b.value,"aria-hidden":"true"},h)];return e.showValue===!0&&y.push(a("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[a("div",p.value)])),a("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:l.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:p.value},ge(t.internal,y))}}});const ze=["rejected"],Ie=[...ze,"start","finish","added","removed"],Oe=()=>!0;function Pe(e){const t={};return e.forEach(o=>{t[o]=Oe}),t}Pe(Ie);let D,j=0;const f=new Array(256);for(let e=0;e<256;e++)f[e]=(e+256).toString(16).substring(1);const Me=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let l=t;l>0;l--)o.push(Math.floor(Math.random()*256));return o}})(),te=4096;function je(){(D===void 0||j+16>te)&&(j=0,D=Me(te));const e=Array.prototype.slice.call(D,j,j+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,f[e[0]]+f[e[1]]+f[e[2]]+f[e[3]]+"-"+f[e[4]]+f[e[5]]+"-"+f[e[6]]+f[e[7]]+"-"+f[e[8]]+f[e[9]]+"-"+f[e[10]]+f[e[11]]+f[e[12]]+f[e[13]]+f[e[14]]+f[e[15]]}const De=[!0,!1,"ondemand"],Ne={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>De.includes(e)}};function Ue(e,t){const{props:o,proxy:l}=E(),d=C(!1),s=C(null),n=C(null);$e({validate:x,resetValidation:y});let b=0,p;const k=i(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length>0),m=i(()=>o.disable!==!0&&k.value===!0),S=i(()=>o.error===!0||d.value===!0),h=i(()=>typeof o.errorMessage=="string"&&o.errorMessage.length>0?o.errorMessage:s.value);A(()=>o.modelValue,()=>{B()}),A(()=>o.reactiveRules,q=>{q===!0?p===void 0&&(p=A(()=>o.rules,()=>{B(!0)})):p!==void 0&&(p(),p=void 0)},{immediate:!0}),A(e,q=>{q===!0?n.value===null&&(n.value=!1):n.value===!1&&(n.value=!0,m.value===!0&&o.lazyRules!=="ondemand"&&t.value===!1&&F())});function y(){b++,t.value=!1,n.value=null,d.value=!1,s.value=null,F.cancel()}function x(q=o.modelValue){if(m.value!==!0)return!0;const R=++b;t.value!==!0&&o.lazyRules!==!0&&(n.value=!0);const _=(v,g)=>{d.value!==v&&(d.value=v);const c=g||void 0;s.value!==c&&(s.value=c),t.value=!1},$=[];for(let v=0;v<o.rules.length;v++){const g=o.rules[v];let c;if(typeof g=="function"?c=g(q):typeof g=="string"&&ee[g]!==void 0&&(c=ee[g](q)),c===!1||typeof c=="string")return _(!0,c),!1;c!==!0&&c!==void 0&&$.push(c)}return $.length===0?(_(!1),!0):(t.value=!0,Promise.all($).then(v=>{if(v===void 0||Array.isArray(v)===!1||v.length===0)return R===b&&_(!1),!0;const g=v.find(c=>c===!1||typeof c=="string");return R===b&&_(g!==void 0,g),g===void 0},v=>(R===b&&(console.error(v),_(!0)),!1)))}function B(q){m.value===!0&&o.lazyRules!=="ondemand"&&(n.value===!0||o.lazyRules!==!0&&q!==!0)&&F()}const F=pe(x,0);return T(()=>{p!==void 0&&p(),F.cancel()}),Object.assign(l,{resetValidation:y,validate:x}),he(l,"hasError",()=>S.value),{isDirtyModel:n,hasRules:k,hasError:S,errorMessage:h,validate:x,resetValidation:y}}const oe=/^on[A-Z]/;function Te(e,t){const o={listeners:C({}),attributes:C({})};function l(){const d={},s={};for(const n in e)n!=="class"&&n!=="style"&&oe.test(n)===!1&&(d[n]=e[n]);for(const n in t.props)oe.test(n)===!0&&(s[n]=t.props[n]);o.attributes.value=d,o.listeners.value=s}return be(l),l(),o}let w=[],V=[];function ne(e){V=V.filter(t=>t!==e)}function Ge(e){ne(e),V.push(e)}function et(e){ne(e),V.length===0&&w.length>0&&(w[w.length-1](),w=[])}function Le(e){V.length===0?e():w.push(e)}function He(e){w=w.filter(t=>t!==e)}function U(e){return e===void 0?`f_${je()}`:e}function Qe(e){return e!=null&&(""+e).length>0}const tt={...Re,...Ne,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},ot=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function rt(){const{props:e,attrs:t,proxy:o,vnode:l}=E();return{isDark:Ae(e,o.$q),editable:i(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:C(!1),focused:C(!1),hasPopupOpen:!1,splitAttrs:Te(t,l),targetUid:C(U(e.for)),rootRef:C(null),targetRef:C(null),controlRef:C(null)}}function lt(e){const{props:t,emit:o,slots:l,attrs:d,proxy:s}=E(),{$q:n}=s;let b;e.hasValue===void 0&&(e.hasValue=i(()=>Qe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{o("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:L,onFocusout:H}),Object.assign(e,{clearValue:Q,onControlFocusin:L,onControlFocusout:H,focus:c}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,u=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:p,hasRules:k,hasError:m,errorMessage:S,resetValidation:h}=Ue(e.focused,e.innerLoading),y=e.floatingLabel!==void 0?i(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),x=i(()=>t.bottomSlots===!0||t.hint!==void 0||k.value===!0||t.counter===!0||t.error!==null),B=i(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),F=i(()=>`q-field row no-wrap items-start q-field--${B.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(y.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(m.value===!0?" q-field--error":"")+(m.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&x.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),q=i(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(m.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),R=i(()=>t.labelSlot===!0||t.label!==void 0),_=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&m.value!==!0?` text-${t.labelColor}`:"")),$=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:y.value,modelValue:t.modelValue,emitValue:e.emitValue})),v=i(()=>{const r={for:e.targetUid.value};return t.disable===!0?r["aria-disabled"]="true":t.readonly===!0&&(r["aria-readonly"]="true"),r});A(()=>t.for,r=>{e.targetUid.value=U(r)});function g(){const r=document.activeElement;let u=e.targetRef!==void 0&&e.targetRef.value;u&&(r===null||r.id!==e.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==r&&u.focus({preventScroll:!0}))}function c(){Le(g)}function ae(){He(g);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function L(r){clearTimeout(b),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",r))}function H(r,u){clearTimeout(b),b=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,o("blur",r)),u!==void 0&&u())})}function Q(r){ye(r),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),o("clear",t.modelValue),Ce(()=>{h(),n.platform.is.mobile!==!0&&(p.value=!1)})}function ue(){const r=[];return l.prepend!==void 0&&r.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:I},l.prepend())),r.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ie())),m.value===!0&&t.noErrorIcon===!1&&r.push(z("error",[a(J,{name:n.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(z("inner-loading-append",l.loading!==void 0?l.loading():[a(we,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(z("inner-clearable-append",[a(J,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||n.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:Q})])),l.append!==void 0&&r.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:I},l.append())),e.getInnerAppend!==void 0&&r.push(z("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function ie(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):l.rawControl!==void 0?r.push(l.rawControl()):l.control!==void 0&&r.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},l.control($.value))),R.value===!0&&r.push(a("div",{class:_.value},O(l.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(O(l.default))}function se(){let r,u;m.value===!0?S.value!==null?(r=[a("div",{role:"alert"},S.value)],u=`q--slot-error-${S.value}`):(r=O(l.error),u="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[a("div",t.hint)],u=`q--slot-hint-${t.hint}`):(r=O(l.hint),u="q--slot-hint"));const K=t.counter===!0||l.counter!==void 0;if(t.hideBottomSpace===!0&&K===!1&&r===void 0)return;const W=a("div",{key:u,class:"q-field__messages col"},r);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?W:a(ke,{name:"q-transition--field-message"},()=>W),K===!0?a("div",{class:"q-field__counter"},l.counter!==void 0?l.counter():e.computedCounter.value):null])}function z(r,u){return u===null?null:a("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}Object.assign(s,{focus:c,blur:ae});let Z=!1;return xe(()=>{Z=!0}),qe(()=>{Z===!0&&t.autofocus===!0&&s.focus()}),Se(()=>{_e.value===!0&&t.for===void 0&&(e.targetUid.value=U()),t.autofocus===!0&&s.focus()}),T(()=>{clearTimeout(b)}),function(){const u=e.getControl===void 0&&l.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...v.value}:v.value;return a("label",{ref:e.rootRef,class:[F.value,d.class],style:d.style,...u},[l.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:I},l.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:q.value,tabindex:-1,...e.controlEvents},ue()),x.value===!0?se():null]),l.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:I},l.after()):null])}}const nt={name:String};function at(e={}){return(t,o,l)=>{t[o](a("input",{class:"hidden"+(l||""),...e.value}))}}function ut(e){return i(()=>e.name||e.for)}const Ze=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ke=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,We=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Je=/[a-z0-9_ -]$/i;function it(e){return function(o){if(o.type==="compositionend"||o.type==="change"){if(o.target.qComposing!==!0)return;o.target.qComposing=!1,e(o)}else o.type==="compositionupdate"&&o.target.qComposing!==!0&&typeof o.data=="string"&&(Be.is.firefox===!0?Je.test(o.data)===!1:Ze.test(o.data)===!0||Ke.test(o.data)===!0||We.test(o.data)===!0)===!0&&(o.target.qComposing=!0)}}export{ot as a,lt as b,rt as c,Ge as d,Le as e,nt as f,ut as g,Qe as h,it as i,at as j,et as r,tt as u};
