import{c as Fe,a as E,n as Ie,l as Ne,b as z,p as G,d as fe,s as J,e as ae,f as Z,g as He,h as Xe,u as Ye,i as Ue,j as je,k as Re,m as Ke,o as Ge,q as Je,r as T,t as v,v as Ze,w as et,x as h,y as ve,z as W,A as tt,B as at,C as nt,D as V,E as me,F as it,G as ot,H as rt,I as Ce,J as qe,_ as _e,K as P,L as F,M as b,N as y,Q as ut,O as lt,P as I,R as ne,S as st,T as he,U as pe,V as dt,W as ct,X as ft,Y as vt,Z as mt}from"./index.037a1abe.js";import{Q as ht,a as pt,b as yt,c as gt,d as bt}from"./QLayout.45dcb5b4.js";import{c as wt,Q as ye,a as ge,b as kt,d as Ct,e as qt}from"./QItem.b93db461.js";import{u as _t}from"./useAuth.01cb421f.js";const ie={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},St=Object.keys(ie);ie.all=!0;function be(e){const o={};for(const r of St)e[r]===!0&&(o[r]=!0);return Object.keys(o).length===0?ie:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function we(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function ee(e,o,r){const m=ae(e);let t,i=m.left-o.event.x,l=m.top-o.event.y,c=Math.abs(i),s=Math.abs(l);const n=o.direction;n.horizontal===!0&&n.vertical!==!0?t=i<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?t=l<0?"up":"down":n.up===!0&&l<0?(t="up",c>s&&(n.left===!0&&i<0?t="left":n.right===!0&&i>0&&(t="right"))):n.down===!0&&l>0?(t="down",c>s&&(n.left===!0&&i<0?t="left":n.right===!0&&i>0&&(t="right"))):n.left===!0&&i<0?(t="left",c<s&&(n.up===!0&&l<0?t="up":n.down===!0&&l>0&&(t="down"))):n.right===!0&&i>0&&(t="right",c<s&&(n.up===!0&&l<0?t="up":n.down===!0&&l>0&&(t="down")));let _=!1;if(t===void 0&&r===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,_=!0,t==="left"||t==="right"?(m.left-=i,c=0,i=0):(m.top-=l,s=0,l=0)}return{synthetic:_,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:m,direction:t,isFirst:o.event.isFirst,isFinal:r===!0,duration:Date.now()-o.event.time,distance:{x:c,y:s},offset:{x:i,y:l},delta:{x:m.left-o.event.lastX,y:m.top-o.event.lastY}}}}let Bt=0;var te=Fe({name:"touch-pan",beforeMount(e,{value:o,modifiers:r}){if(r.mouse!==!0&&E.has.touch!==!0)return;function m(i,l){r.mouse===!0&&l===!0?He(i):(r.stop===!0&&J(i),r.prevent===!0&&fe(i))}const t={uid:"qvtp_"+Bt++,handler:o,modifiers:r,direction:be(r),noop:Ie,mouseStart(i){we(i,t)&&Ne(i)&&(z(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(we(i,t)){const l=i.target;z(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,l){if(E.is.firefox===!0&&G(e,!0),t.lastEvt=i,l===!0||r.stop===!0){if(t.direction.all!==!0&&(l!==!0||t.modifiers.mouseAllDir!==!0)){const n=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&fe(n),i.cancelBubble===!0&&J(n),Object.assign(n,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:n}}J(i)}const{left:c,top:s}=ae(i);t.event={x:c,y:s,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:s}},move(i){if(t.event===void 0)return;const l=ae(i),c=l.left-t.event.x,s=l.top-t.event.y;if(c===0&&s===0)return;t.lastEvt=i;const n=t.event.mouse===!0,_=()=>{m(i,n),r.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),wt(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,r.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),n===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{q(),d()},50):q()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&m(i,t.event.mouse);const{payload:d,synthetic:q}=ee(i,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&_(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=q===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||n===!0&&t.modifiers.mouseAllDir===!0){_(),t.event.detected=!0,t.move(i);return}const C=Math.abs(c),g=Math.abs(s);C!==g&&(t.direction.horizontal===!0&&C>g||t.direction.vertical===!0&&C<g||t.direction.up===!0&&C<g&&s<0||t.direction.down===!0&&C<g&&s>0||t.direction.left===!0&&C>g&&c<0||t.direction.right===!0&&C>g&&c>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,l){if(t.event!==void 0){if(Z(t,"temp"),E.is.firefox===!0&&G(e,!1),l===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ee(i===void 0?t.lastEvt:i,t).payload);const{payload:c}=ee(i===void 0?t.lastEvt:i,t,!0),s=()=>{t.handler(c)};t.styleCleanup!==void 0?t.styleCleanup(s):s()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,r.mouse===!0&&z(t,"main",[[e,"mousedown","mouseStart",`passive${r.mouseCapture===!0?"Capture":""}`]]),E.has.touch===!0&&z(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const r=e.__qtouchpan;r!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&r.end(),r.handler=o.value),r.direction=be(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),Z(o,"main"),Z(o,"temp"),E.is.firefox===!0&&G(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const ke=150;var Dt=Xe({name:"QDrawer",inheritAttrs:!1,props:{...Ye,...Ue,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...je,"on-layout","mini-state"],setup(e,{slots:o,emit:r,attrs:m}){const t=ot(),{proxy:{$q:i}}=t,l=Re(e,i),{preventBodyScroll:c}=rt(),{registerTimeout:s}=Ke(),n=Ge(Je,()=>{console.error("QDrawer needs to be child of QLayout")});let _,C,g;const d=T(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),q=v(()=>e.mini===!0&&d.value!==!0),w=v(()=>q.value===!0?e.miniWidth:e.width),f=T(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),oe=v(()=>e.persistent!==!0&&(d.value===!0||De.value===!0));function re(a,u){if(Se(),a!==!1&&n.animate(),k(0),d.value===!0){const p=n.instances[x.value];p!==void 0&&p.belowBreakpoint===!0&&p.hide(!1),B(1),n.isContainer.value!==!0&&c(!0)}else B(0),a!==!1&&j(!1);s(()=>{a!==!1&&j(!0),u!==!0&&r("show",a)},ke)}function ue(a,u){Be(),a!==!1&&n.animate(),B(0),k(L.value*w.value),R(),u!==!0&&s(()=>{r("hide",a)},ke)}const{show:N,hide:$}=Ze({showing:f,hideOnRouteChange:oe,handleShow:re,handleHide:ue}),{addToHistory:Se,removeFromHistory:Be}=et(f,$,oe),Q={belowBreakpoint:d,hide:$},S=v(()=>e.side==="right"),L=v(()=>(i.lang.rtl===!0?-1:1)*(S.value===!0?1:-1)),le=T(0),M=T(!1),H=T(!1),se=T(w.value*L.value),x=v(()=>S.value===!0?"left":"right"),X=v(()=>f.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:w.value:0),Y=v(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(S.value?"R":"L")>-1||i.platform.is.ios===!0&&n.isContainer.value===!0),O=v(()=>e.overlay===!1&&f.value===!0&&d.value===!1),De=v(()=>e.overlay===!0&&f.value===!0&&d.value===!1),Te=v(()=>"fullscreen q-drawer__backdrop"+(f.value===!1&&M.value===!1?" hidden":"")),Le=v(()=>({backgroundColor:`rgba(0,0,0,${le.value*.4})`})),de=v(()=>S.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Me=v(()=>S.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),$e=v(()=>{const a={};return n.header.space===!0&&de.value===!1&&(Y.value===!0?a.top=`${n.header.offset}px`:n.header.space===!0&&(a.top=`${n.header.size}px`)),n.footer.space===!0&&Me.value===!1&&(Y.value===!0?a.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(a.bottom=`${n.footer.size}px`)),a}),Oe=v(()=>{const a={width:`${w.value}px`,transform:`translateX(${se.value}px)`};return d.value===!0?a:Object.assign(a,$e.value)}),Ee=v(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),Pe=v(()=>`q-drawer q-drawer--${e.side}`+(H.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":f.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${q.value===!0?"mini":"standard"}`+(Y.value===!0||O.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(de.value===!0?" q-drawer--top-padding":""))),Qe=v(()=>{const a=i.lang.rtl===!0?e.side:x.value;return[[te,We,void 0,{[a]:!0,mouse:!0}]]}),xe=v(()=>{const a=i.lang.rtl===!0?x.value:e.side;return[[te,ce,void 0,{[a]:!0,mouse:!0}]]}),Ae=v(()=>{const a=i.lang.rtl===!0?x.value:e.side;return[[te,ce,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function U(){Ve(d,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}h(d,a=>{a===!0?(_=f.value,f.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&_!==!1&&(f.value===!0?(k(0),B(0),R()):N(!1))}),h(()=>e.side,(a,u)=>{n.instances[u]===Q&&(n.instances[u]=void 0,n[u].space=!1,n[u].offset=0),n.instances[a]=Q,n[a].size=w.value,n[a].space=O.value,n[a].offset=X.value}),h(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&U()}),h(()=>e.behavior+e.breakpoint,U),h(n.isContainer,a=>{f.value===!0&&c(a!==!0),a===!0&&U()}),h(n.scrollbarWidth,()=>{k(f.value===!0?0:void 0)}),h(X,a=>{D("offset",a)}),h(O,a=>{r("on-layout",a),D("space",a)}),h(S,()=>{k()}),h(w,a=>{k(),K(e.miniToOverlay,a)}),h(()=>e.miniToOverlay,a=>{K(a,w.value)}),h(()=>i.lang.rtl,()=>{k()}),h(()=>e.mini,()=>{e.modelValue===!0&&(ze(),n.animate())}),h(q,a=>{r("mini-state",a)});function k(a){a===void 0?ve(()=>{a=f.value===!0?0:w.value,k(L.value*a)}):(n.isContainer.value===!0&&S.value===!0&&(d.value===!0||Math.abs(a)===w.value)&&(a+=L.value*n.scrollbarWidth.value),se.value=a)}function B(a){le.value=a}function j(a){const u=a===!0?"remove":n.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function ze(){clearTimeout(C),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),H.value=!0,C=setTimeout(()=>{H.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function We(a){if(f.value!==!1)return;const u=w.value,p=W(a.distance.x,0,u);if(a.isFinal===!0){p>=Math.min(75,u)===!0?N():(n.animate(),B(0),k(L.value*u)),M.value=!1;return}k((i.lang.rtl===!0?S.value!==!0:S.value)?Math.max(u-p,0):Math.min(0,p-u)),B(W(p/u,0,1)),a.isFirst===!0&&(M.value=!0)}function ce(a){if(f.value!==!0)return;const u=w.value,p=a.direction===e.side,A=(i.lang.rtl===!0?p!==!0:p)?W(a.distance.x,0,u):0;if(a.isFinal===!0){Math.abs(A)<Math.min(75,u)===!0?(n.animate(),B(1),k(0)):$(),M.value=!1;return}k(L.value*A),B(W(1-A/u,0,1)),a.isFirst===!0&&(M.value=!0)}function R(){c(!1),j(!0)}function D(a,u){n.update(e.side,a,u)}function Ve(a,u){a.value!==u&&(a.value=u)}function K(a,u){D("size",a===!0?e.miniWidth:u)}return n.instances[e.side]=Q,K(e.miniToOverlay,w.value),D("space",O.value),D("offset",X.value),e.showIfAbove===!0&&e.modelValue!==!0&&f.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),tt(()=>{r("on-layout",O.value),r("mini-state",q.value),_=e.showIfAbove===!0;const a=()=>{(f.value===!0?re:ue)(!1,!0)};if(n.totalWidth.value!==0){ve(a);return}g=h(n.totalWidth,()=>{g(),g=void 0,f.value===!1&&e.showIfAbove===!0&&d.value===!1?N(!1):a()})}),at(()=>{g!==void 0&&g(),clearTimeout(C),f.value===!0&&R(),n.instances[e.side]===Q&&(n.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const a=[];d.value===!0&&(e.noSwipeOpen===!1&&a.push(nt(V("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Qe.value)),a.push(me("div",{ref:"backdrop",class:Te.value,style:Le.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&f.value===!0,()=>Ae.value)));const u=q.value===!0&&o.mini!==void 0,p=[V("div",{...m,key:""+u,class:[Ee.value,m.class]},u===!0?o.mini():it(o.default))];return e.elevated===!0&&f.value===!0&&p.push(V("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(me("aside",{ref:"content",class:Pe.value,style:Oe.value},p,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>xe.value)),V("div",{class:"q-drawer-container"},a)}}});const Tt=Ce({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const o=qe();return{navigateTo(){e.link.startsWith("http")?window.open(e.link,"_blank"):o.push({name:e.link})}}}});function Lt(e,o,r,m,t,i){return P(),F(kt,{clickable:"",tag:"a",onClick:e.navigateTo},{default:b(()=>[e.icon?(P(),F(ye,{key:0,avatar:""},{default:b(()=>[y(ut,{name:e.icon},null,8,["name"])]),_:1})):lt("",!0),y(ye,null,{default:b(()=>[y(ge,null,{default:b(()=>[I(ne(e.title),1)]),_:1}),y(ge,{caption:""},{default:b(()=>[I(ne(e.caption),1)]),_:1})]),_:1})]),_:1},8,["onClick"])}var Mt=_e(Tt,[["render",Lt]]);const $t=[{title:"Ticket",caption:"",icon:"home_repair_service",link:"tickets"},{title:"Clientes",caption:"",icon:"group",link:"clientes"},{title:"Colaboradores",caption:"",icon:"support_agent",link:"colaboradores"},{title:"Roles",caption:"",icon:"admin_panel_settings",link:"roles"},{title:"Dispositivos",caption:"",icon:"devices",link:"dispositivos"},{title:"Tipos de Dispositivos",caption:"",icon:"smartphone",link:"tipos-dispositivos"},{title:"Marcas de Dispositivos",caption:"",icon:"star",link:"marcas-dispositivos"},{title:"Repuestos",caption:"",icon:"build_circle",link:"repuestos"},{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"}],Ot=Ce({name:"MainLayout",components:{EssentialLink:Mt},setup(){const e=T(!1),o=qe(),{username:r,authStatus:m,logout:t}=_t();return console.log("datos: ",st().state.auth),{miniState:T(!0),essentialLinks:$t,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},username:r,authStatus:m,logOut(){t(),o.push({name:"login"})}}}}),Et=I(" Sistema OTMaster "),Pt={class:"q-pl-xl"};function Qt(e,o,r,m,t,i){const l=he("EssentialLink"),c=he("router-view");return P(),F(ht,{view:"hHh Lpr lff"},{default:b(()=>[y(gt,{elevated:""},{default:b(()=>[y(pt,null,{default:b(()=>[y(pe,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),y(yt,null,{default:b(()=>[Et]),_:1}),y(Ct,{color:"orange","text-color":"white",icon:"person"},{default:b(()=>[I(ne(e.username),1)]),_:1}),y(pe,{flat:"",round:"",dense:"",icon:"logout",onClick:e.logOut},null,8,["onClick"])]),_:1})]),_:1}),y(Dt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=s=>e.leftDrawerOpen=s),"show-if-above":"",bordered:"",mini:e.miniState,onMouseover:o[1]||(o[1]=s=>e.miniState=!1),onMouseout:o[2]||(o[2]=s=>e.miniState=!0)},{default:b(()=>[y(qt,{padding:""},{default:b(()=>[(P(!0),dt(ft,null,ct(e.essentialLinks,s=>(P(),F(l,mt({key:s.title},s),null,16))),128))]),_:1})]),_:1},8,["modelValue","mini"]),y(bt,null,{default:b(()=>[vt("div",Pt,[y(c)])]),_:1})]),_:1})}var Ft=_e(Ot,[["render",Qt]]);export{Ft as default};