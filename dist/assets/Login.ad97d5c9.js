import{r as U,w as N,m as Z,am as ce,k as B,i as H,s as ee,q as de,o as ue,u as Q,z as G,S as fe,ab as me,ac as ve,x as J,h as te,av as ge,ax as he,ay as ke,_ as ye,az as xe,B as we,K as Me,au as Y,E as p,D as $,Q as ae,J as be}from"./index.128f1bdb.js";import{u as Ce,f as Se,a as Fe,g as Ve,h as ne,c as Re,b as Ae,i as Ee,e as se}from"./use-key-composition.85aef9fb.js";import{u as _e,a as qe}from"./format.bef1d27c.js";const re={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},W={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ie=Object.keys(W);ie.forEach(e=>{W[e].regex=new RegExp(W[e].pattern)});const Be=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ie.join("")+"])|(.)","g"),le=/[.*+?^${}()|[\]\\]/g,b=String.fromCharCode(1),Pe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Oe(e,g,S,d){let i,h,w,_;const C=U(null),m=U(R());function L(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,c),N(()=>e.mask,a=>{if(a!==void 0)M(m.value,!0);else{const n=F(m.value);c(),e.modelValue!==n&&g("update:modelValue",n)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&M(m.value,!0)}),N(()=>e.unmaskedValue,()=>{C.value===!0&&M(m.value)});function R(){if(c(),C.value===!0){const a=A(F(e.modelValue));return e.fillMask!==!1?P(a):a}return e.modelValue}function O(a){if(a<i.length)return i.slice(-a);let n="",l=i;const o=l.indexOf(b);if(o>-1){for(let u=a-l.length;u>0;u--)n+=b;l=l.slice(0,o)+n+l.slice(o)}return l}function c(){if(C.value=e.mask!==void 0&&e.mask.length>0&&L(),C.value===!1){_=void 0,i="",h="";return}const a=re[e.mask]===void 0?e.mask:re[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",l=n.replace(le,"\\$&"),o=[],u=[],r=[];let v=e.reverseFillMask===!0,s="",k="";a.replace(Be,(E,t,x,I,D)=>{if(I!==void 0){const q=W[I];r.push(q),k=q.negate,v===!0&&(u.push("(?:"+k+"+)?("+q.pattern+"+)?(?:"+k+"+)?("+q.pattern+"+)?"),v=!1),u.push("(?:"+k+"+)?("+q.pattern+")?")}else if(x!==void 0)s="\\"+(x==="\\"?"":x),r.push(x),o.push("([^"+s+"]+)?"+s+"?");else{const q=t!==void 0?t:D;s=q==="\\"?"\\\\\\\\":q.replace(le,"\\\\$&"),r.push(q),o.push("([^"+s+"]+)?"+s+"?")}});const j=new RegExp("^"+o.join("")+"("+(s===""?".":"[^"+s+"]")+"+)?$"),K=u.length-1,f=u.map((E,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+l+"*"+E):t===K?new RegExp("^"+E+"("+(k===""?".":k)+"+)?"+(e.reverseFillMask===!0?"$":l+"*")):new RegExp("^"+E));w=r,_=E=>{const t=j.exec(E);t!==null&&(E=t.slice(1).join(""));const x=[],I=f.length;for(let D=0,q=E;D<I;D++){const X=f[D].exec(q);if(X===null)break;q=q.slice(X.shift().length),x.push(...X)}return x.length>0?x.join(""):E},i=r.map(E=>typeof E=="string"?E:b).join(""),h=i.split(b).join(n)}function M(a,n,l){const o=d.value,u=o.selectionEnd,r=o.value.length-u,v=F(a);n===!0&&c();const s=A(v),k=e.fillMask!==!1?P(s):s,j=m.value!==k;o.value!==k&&(o.value=k),j===!0&&(m.value=k),document.activeElement===o&&Z(()=>{if(k===h){const f=e.reverseFillMask===!0?h.length:0;o.setSelectionRange(f,f,"forward");return}if(l==="insertFromPaste"&&e.reverseFillMask!==!0){const f=u-1;V.right(o,f,f);return}if(["deleteContentBackward","deleteContentForward"].indexOf(l)>-1){const f=e.reverseFillMask===!0?u===0?k.length>s.length?1:0:Math.max(0,k.length-(k===h?0:Math.min(s.length,r)+1))+1:u;o.setSelectionRange(f,f,"forward");return}if(e.reverseFillMask===!0)if(j===!0){const f=Math.max(0,k.length-(k===h?0:Math.min(s.length,r+1)));f===1&&u===1?o.setSelectionRange(f,f,"forward"):V.rightReverse(o,f,f)}else{const f=k.length-r;o.setSelectionRange(f,f,"backward")}else if(j===!0){const f=Math.max(0,i.indexOf(b),Math.min(s.length,u)-1);V.right(o,f,f)}else{const f=u-1;V.right(o,f,f)}});const K=e.unmaskedValue===!0?F(k):k;String(e.modelValue)!==K&&S(K,!0)}function z(a,n,l){const o=A(F(a.value));n=Math.max(0,i.indexOf(b),Math.min(o.length,n)),a.setSelectionRange(n,l,"forward")}const V={left(a,n,l,o){const u=i.slice(n-1).indexOf(b)===-1;let r=Math.max(0,n-1);for(;r>=0;r--)if(i[r]===b){n=r,u===!0&&n++;break}if(r<0&&i[n]!==void 0&&i[n]!==b)return V.right(a,0,0);n>=0&&a.setSelectionRange(n,o===!0?l:n,"backward")},right(a,n,l,o){const u=a.value.length;let r=Math.min(u,l+1);for(;r<=u;r++)if(i[r]===b){l=r;break}else i[r-1]===b&&(l=r);if(r>u&&i[l-1]!==void 0&&i[l-1]!==b)return V.left(a,u,u);a.setSelectionRange(o?n:l,l,"forward")},leftReverse(a,n,l,o){const u=O(a.value.length);let r=Math.max(0,n-1);for(;r>=0;r--)if(u[r-1]===b){n=r;break}else if(u[r]===b&&(n=r,r===0))break;if(r<0&&u[n]!==void 0&&u[n]!==b)return V.rightReverse(a,0,0);n>=0&&a.setSelectionRange(n,o===!0?l:n,"backward")},rightReverse(a,n,l,o){const u=a.value.length,r=O(u),v=r.slice(0,l+1).indexOf(b)===-1;let s=Math.min(u,l+1);for(;s<=u;s++)if(r[s-1]===b){l=s,l>0&&v===!0&&l--;break}if(s>u&&r[l-1]!==void 0&&r[l-1]!==b)return V.leftReverse(a,u,u);a.setSelectionRange(o===!0?n:l,l,"forward")}};function T(a){if(ce(a)===!0)return;const n=d.value,l=n.selectionStart,o=n.selectionEnd;if(a.keyCode===37||a.keyCode===39){const u=V[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];a.preventDefault(),u(n,l,o,a.shiftKey)}else a.keyCode===8&&e.reverseFillMask!==!0&&l===o?V.left(n,l,o,!0):a.keyCode===46&&e.reverseFillMask===!0&&l===o&&V.rightReverse(n,l,o,!0)}function A(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return y(a);const n=w;let l=0,o="";for(let u=0;u<n.length;u++){const r=a[l],v=n[u];if(typeof v=="string")o+=v,r===v&&l++;else if(r!==void 0&&v.regex.test(r))o+=v.transform!==void 0?v.transform(r):r,l++;else return o}return o}function y(a){const n=w,l=i.indexOf(b);let o=a.length-1,u="";for(let r=n.length-1;r>=0&&o>-1;r--){const v=n[r];let s=a[o];if(typeof v=="string")u=v+u,s===v&&o--;else if(s!==void 0&&v.regex.test(s))do u=(v.transform!==void 0?v.transform(s):s)+u,o--,s=a[o];while(l===r&&s!==void 0&&v.regex.test(s));else return u}return u}function F(a){return typeof a!="string"||_===void 0?typeof a=="number"?_(""+a):a:_(a)}function P(a){return h.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?h.slice(0,-a.length)+a:a+h.slice(a.length)}return{innerValue:m,hasMask:C,moveCursorForPaste:z,updateMaskValue:M,onMaskedKeydown:T}}function Te(e,g){function S(){const d=e.modelValue;try{const i="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(d)===d&&("length"in d?Array.from(d):[d]).forEach(h=>{i.items.add(h)}),{files:i.files}}catch{return{files:void 0}}}return g===!0?B(()=>{if(e.type==="file")return S()}):B(S)}var oe=H({name:"QInput",inheritAttrs:!1,props:{...Ce,...Pe,...Se,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Fe,"paste","change"],setup(e,{emit:g,attrs:S}){const d={};let i=NaN,h,w,_,C;const m=U(null),L=Ve(e),{innerValue:R,hasMask:O,moveCursorForPaste:c,updateMaskValue:M,onMaskedKeydown:z}=Oe(e,g,v,m),V=Te(e,!0),T=B(()=>ne(R.value)),A=Ee(r),y=Re(),F=B(()=>e.type==="textarea"||e.autogrow===!0),P=B(()=>F.value===!0||["text","search","url","tel","password"].includes(e.type)),a=B(()=>{const t={...y.splitAttrs.listeners.value,onInput:r,onPaste:u,onChange:k,onBlur:j,onFocus:ee};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=A,O.value===!0&&(t.onKeydown=z),e.autogrow===!0&&(t.onAnimationend=s),t}),n=B(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:L.value,...y.splitAttrs.attributes.value,id:y.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return F.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});N(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),N(()=>e.modelValue,t=>{if(O.value===!0){if(w===!0&&(w=!1,String(t)===i))return;M(t)}else R.value!==t&&(R.value=t,e.type==="number"&&d.hasOwnProperty("value")===!0&&(h===!0?h=!1:delete d.value));e.autogrow===!0&&Z(s)}),N(()=>e.autogrow,t=>{t===!0?Z(s):m.value!==null&&S.rows>0&&(m.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&Z(s)});function l(){se(()=>{const t=document.activeElement;m.value!==null&&m.value!==t&&(t===null||t.id!==y.targetUid.value)&&m.value.focus({preventScroll:!0})})}function o(){m.value!==null&&m.value.select()}function u(t){if(O.value===!0&&e.reverseFillMask!==!0){const x=t.target;c(x,x.selectionStart,x.selectionEnd)}g("paste",t)}function r(t){if(!t||!t.target||t.target.qComposing===!0)return;if(e.type==="file"){g("update:modelValue",t.target.files);return}const x=t.target.value;if(O.value===!0)M(x,!1,t.inputType);else if(v(x),P.value===!0&&t.target===document.activeElement){const{selectionStart:I,selectionEnd:D}=t.target;I!==void 0&&D!==void 0&&Z(()=>{t.target===document.activeElement&&x.indexOf(t.target.value)===0&&t.target.setSelectionRange(I,D)})}e.autogrow===!0&&s()}function v(t,x){C=()=>{e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==t&&i!==t&&(i=t,x===!0&&(w=!0),g("update:modelValue",t),Z(()=>{i===t&&(i=NaN)})),C=void 0},e.type==="number"&&(h=!0,d.value=t),e.debounce!==void 0?(clearTimeout(_),d.value=t,_=setTimeout(C,e.debounce)):C()}function s(){const t=m.value;if(t!==null){const x=t.parentNode.style,{overflow:I}=t.style;x.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.overflow="hidden",t.style.height=t.scrollHeight+"px",t.style.overflow=I,x.marginBottom=""}}function k(t){A(t),clearTimeout(_),C!==void 0&&C(),g("change",t.target.value)}function j(t){t!==void 0&&ee(t),clearTimeout(_),C!==void 0&&C(),h=!1,w=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=R.value!==void 0?R.value:"")})}function K(){return d.hasOwnProperty("value")===!0?d.value:R.value!==void 0?R.value:""}de(()=>{j()}),ue(()=>{e.autogrow===!0&&s()}),Object.assign(y,{innerValue:R,fieldClass:B(()=>`q-${F.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:B(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:m,emitValue:v,hasValue:T,floatingLabel:B(()=>T.value===!0||ne(e.displayValue)),getControl:()=>Q(F.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...a.value,...e.type!=="file"?{value:K()}:V.value}),getShadowControl:()=>Q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(F.value===!0?"":" text-no-wrap")},[Q("span",{class:"invisible"},K()),Q("span",e.shadowText)])});const f=Ae(y),E=G();return Object.assign(E.proxy,{focus:l,select:o,getNativeElement:()=>m.value}),f}}),Ie=H({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:g,emit:S}){const d=G(),i=U(null);let h=0;const w=[];function _(c){const M=[],z=typeof c=="boolean"?c:e.noErrorFocus!==!0,V=++h,T=(A,y)=>{S("validation-"+(A===!0?"success":"error"),y)};for(let A=0;A<w.length;A++){const y=w[A],F=y.validate();if(typeof F.then=="function")M.push(F.then(P=>({valid:P,comp:y}),P=>({valid:!1,comp:y,err:P})));else if(F!==!0){if(e.greedy===!1)return T(!1,y),z===!0&&typeof y.focus=="function"&&y.focus(),Promise.resolve(!1);M.push({valid:!1,comp:y})}}return M.length===0?(T(!0),Promise.resolve(!0)):Promise.all(M).then(A=>{const y=A.filter(n=>n.valid!==!0);if(y.length===0)return V===h&&T(!0),!0;const{valid:F,comp:P,err:a}=y[0];return V===h&&(a!==void 0&&console.error(a),T(!1,P),z===!0&&F!==!0&&typeof P.focus=="function"&&P.focus()),!1})}function C(){h++,w.forEach(c=>{typeof c.resetValidation=="function"&&c.resetValidation()})}function m(c){c!==void 0&&te(c);const M=h+1;_().then(z=>{M===h&&z===!0&&(e.onSubmit!==void 0?S("submit",c):c!==void 0&&c.target!==void 0&&typeof c.target.submit=="function"&&c.target.submit())})}function L(c){c!==void 0&&te(c),S("reset"),Z(()=>{C(),e.autofocus===!0&&e.noResetFocus!==!0&&R()})}function R(){se(()=>{if(i.value===null)return;const c=i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),M=>M.tabIndex>-1);c!=null&&c.focus({preventScroll:!0})})}fe(ge,{bindComponent(c){w.push(c)},unbindComponent(c){const M=w.indexOf(c);M>-1&&w.splice(M,1)}});let O=!1;return me(()=>{O=!0}),ve(()=>{O===!0&&e.autofocus===!0&&R()}),ue(()=>{e.autofocus===!0&&R()}),Object.assign(d.proxy,{validate:_,resetValidation:C,submit:m,reset:L,focus:R,getValidationComponents:()=>w}),()=>Q("form",{class:"q-form",ref:i,onSubmit:m,onReset:L},J(g.default))}}),pe=H({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:g}){const S=B(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>Q(e.tag,{class:S.value},J(g.default))}}),ze=H({name:"QCardActions",props:{...he,vertical:Boolean},setup(e,{slots:g}){const S=ke(e),d=B(()=>`q-card__actions ${S.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>Q("div",{class:d.value},J(g.default))}}),je=H({name:"QCard",props:{..._e,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:g}){const S=G(),d=qe(e,S.proxy.$q),i=B(()=>"q-card"+(d.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>Q(e.tag,{class:i.value},J(g.default))}});const De={name:"LoginPage",setup(){const e=U({rut:"",password:""}),g=xe();return{userForm:e,verify:async()=>{e.value.rut=="123"&&(console.log(!0),g.push({name:"home"}))}}}},Ne={class:"column"},Qe=Y("div",{class:"row justify-center"},[Y("h5",{class:"text-h4 text-white q-my-md"},"Iniciar Sesi\xF3n")],-1),Ke={class:"row"};function Ze(e,g,S,d,i,h){return we(),Me("div",Ne,[Qe,Y("div",Ke,[p(je,{square:"",bordered:"",class:"q-pa-xl shadow-1"},{default:$(()=>[p(pe,null,{default:$(()=>[p(Ie,{class:"q-gutter-lg"},{default:$(()=>[p(oe,{modelValue:d.userForm.rut,"onUpdate:modelValue":g[0]||(g[0]=w=>d.userForm.rut=w),square:"",outlined:"",clearable:"",type:"text",label:"Rut Colaborador"},{before:$(()=>[p(ae,{name:"person"})]),_:1},8,["modelValue"]),p(oe,{modelValue:d.userForm.password,"onUpdate:modelValue":g[1]||(g[1]=w=>d.userForm.password=w),square:"",outlined:"",clearable:"",type:"password",label:"Contrase\xF1a"},{before:$(()=>[p(ae,{name:"key"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),p(ze,{class:"q-px-md"},{default:$(()=>[p(be,{unelevated:"",color:"light-blue-7",size:"lg",class:"full-width",label:"Entrar",onClick:d.verify},null,8,["onClick"])]),_:1})]),_:1})])])}var He=ye(De,[["render",Ze]]);export{He as default};
