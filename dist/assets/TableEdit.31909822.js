var Ce=Object.defineProperty,Te=Object.defineProperties;var Ve=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var J=(t,n,r)=>n in t?Ce(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,Q=(t,n)=>{for(var r in n||(n={}))Se.call(n,r)&&J(t,r,n[r]);if(Z)for(var r of Z(n))Ae.call(n,r)&&J(t,r,n[r]);return t},K=(t,n)=>Te(t,Ve(n));import{bD as be,bE as Pe,cf as Ee,bG as xe,n as S,V as A,cg as Re,bI as Oe,ch as Qe,bK as De,ci as Be,a_ as ee,aq as te,bB as oe,bw as ae,bX as Ue,ae as G,b8 as qe,ab as Ie,bO as Ne,bC as je,b$ as He,a5 as Me,ca as Ke,ap as Le,ao as $e,aA as We,Y as Ge,a4 as o,b3 as l,cj as le,z as m,j as ie,ck as ze,cl as Fe,cm as Xe,Z as ne,G as u,cn as Ye,b5 as re,bS as q,co as I,bR as se,a3 as f,bq as L,br as Ze}from"./index.8134a439.js";import{u as Je,v as ue,a as et,p as de,b as tt,c as ot,r as ce,s as at,d as lt,Q as it,e as nt,f as _,g as $,h as rt,C as me}from"./ClosePopup.48428423.js";import{c as fe}from"./QItem.80c15471.js";import{c as st}from"./Notifications.7dc39251.js";import{u as ut}from"./useAuth.ef0207bd.js";import{u as dt}from"./useTickets.8b6fe3b0.js";import{u as ct}from"./useCliente.19dcbd04.js";import{u as mt}from"./useColaboradores.4a38c497.js";var W=be({name:"QTooltip",inheritAttrs:!1,props:K(Q(Q(Q({},Je),Pe),Ee),{maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ue},self:{type:String,default:"top middle",validator:ue},offset:{type:Array,default:()=>[14,14],validator:et},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}}),emits:[...xe],setup(t,{slots:n,emit:r,attrs:k}){let v,y;const P=Ie(),{proxy:{$q:b}}=P,C=S(null),w=S(!1),h=A(()=>de(t.anchor,b.lang.rtl)),p=A(()=>de(t.self,b.lang.rtl)),E=A(()=>t.persistent!==!0),{registerTick:x,removeTick:D}=Re(),{registerTimeout:V,removeTimeout:R}=Oe(),{transition:N,transitionStyle:j}=Qe(t,w),{localScrollTarget:B,changeScrollEvent:H,unconfigureScrollTarget:U}=tt(t,X),{anchorEl:c,canShow:d,anchorEvents:i}=ot({showing:w,configureAnchorEl:we}),{show:e,hide:a}=De({showing:w,canShow:d,handleShow:ve,handleHide:_e,hideOnRouteChange:E,processOnMount:!0});Object.assign(i,{delayShow:ke,delayHide:ye});const{showPortal:g,hidePortal:z,renderPortal:ge}=Be(P,C,pe);if(b.platform.is.mobile===!0){const s={anchorEl:c,innerRef:C,onClickOutside(T){return a(T),T.target.classList.contains("q-dialog__backdrop")&&je(T),!0}},M=A(()=>t.modelValue===null&&t.persistent!==!0&&w.value===!0);ee(M,T=>{(T===!0?lt:ce)(s)}),te(()=>{ce(s)})}function ve(s){D(),R(),g(),x(()=>{y=new MutationObserver(()=>O()),y.observe(C.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),O(),X()}),v===void 0&&(v=ee(()=>b.screen.width+"|"+b.screen.height+"|"+t.self+"|"+t.anchor+"|"+b.lang.rtl,O)),V(()=>{g(!0),r("show",s)},t.transitionDuration)}function _e(s){D(),R(),z(),F(),V(()=>{z(!0),r("hide",s)},t.transitionDuration)}function F(){y!==void 0&&(y.disconnect(),y=void 0),v!==void 0&&(v(),v=void 0),U(),oe(i,"tooltipTemp")}function O(){const s=C.value;c.value===null||!s||at({el:s,offset:t.offset,anchorEl:c.value,anchorOrigin:h.value,selfOrigin:p.value,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ke(s){if(b.platform.is.mobile===!0){fe(),document.body.classList.add("non-selectable");const M=c.value,T=["touchmove","touchcancel","touchend","click"].map(Y=>[M,Y,"delayHide","passiveCapture"]);ae(i,"tooltipTemp",T)}V(()=>{e(s)},t.delay)}function ye(s){R(),b.platform.is.mobile===!0&&(oe(i,"tooltipTemp"),fe(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),V(()=>{a(s)},t.hideDelay)}function we(){if(t.noParentEvent===!0||c.value===null)return;const s=b.platform.is.mobile===!0?[[c.value,"touchstart","delayShow","passive"]]:[[c.value,"mouseenter","delayShow","passive"],[c.value,"mouseleave","delayHide","passive"]];ae(i,"anchor",s)}function X(){if(c.value!==null||t.scrollTarget!==void 0){B.value=Ue(c.value,t.scrollTarget);const s=t.noParentEvent===!0?O:a;H(B.value,s)}}function he(){return w.value===!0?G("div",K(Q({},k),{ref:C,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",k.class],style:[k.style,j.value],role:"complementary"}),Ne(n.default)):null}function pe(){return G(qe,{name:N.value,appear:!0},he)}return te(F),Object.assign(P.proxy,{updatePosition:O}),ge}});const ft=["top","middle","bottom"];var bt=be({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:t=>ft.includes(t)}},setup(t,{slots:n}){const r=A(()=>t.align!==void 0?{verticalAlign:t.align}:null),k=A(()=>{const v=t.outline===!0&&t.color||t.textColor;return`q-badge flex inline items-center no-wrap q-badge--${t.multiLine===!0?"multi":"single"}-line`+(t.outline===!0?" q-badge--outline":t.color!==void 0?` bg-${t.color}`:"")+(v!==void 0?` text-${v}`:"")+(t.floating===!0?" q-badge--floating":"")+(t.rounded===!0?" q-badge--rounded":"")+(t.transparent===!0?" q-badge--transparent":"")});return()=>G("div",{class:k.value,style:r.value,role:"alert","aria-label":t.label},He(n.default,t.label!==void 0?[t.label]:[]))}});const gt={class:"q-pa-md"},vt={class:"q-ml-sm"},_t={class:"text-pre-wrap"},At={__name:"TableEdit",setup(t){const n=Me(()=>Ke(()=>import("./FormTicket.2979b9e9.js"),["assets/FormTicket.2979b9e9.js","assets/FormTicket.de58472d.css","assets/QItem.80c15471.js","assets/index.8134a439.js","assets/index.d6902eec.css","assets/ClosePopup.48428423.js","assets/QForm.303b8e08.js","assets/useCliente.19dcbd04.js","assets/useColaboradores.4a38c497.js","assets/Notifications.7dc39251.js","assets/useDispositivo.4ee18784.js","assets/useTickets.8b6fe3b0.js"])),{isAdmin:r}=ut(),{getClienteByRut:k}=ct(),{getAllColaboradores:v,getColabByRut:y}=mt(),{getAllTickets:P,deleteTicket:b,getTickets:C,updateTicket:w}=dt();let h=S(!1),p=S(!1),E=S(null);const x=S(""),D=()=>{h.value=!h.value},V=d=>{E.value=d,p.value=!p.value},R=[{name:"id_ticket",align:"center",label:"ID Ticket",field:"ticket",sortable:!0},{name:"clientesRutCliente",align:"center",label:"Cliente",field:"clienteAtendido",sortable:!0},{name:"colaboradoresRutColaborador",align:"center",label:"Qui\xE9n Atendi\xF3",field:"colaboradorAtiende",sortable:!0},{name:"dispositivosIdDispositivo",align:"center",label:"Dispositivo",field:"dispositivoAtendido",sortable:!0},{name:"problema_ticket",align:"center",label:"Problema (Editable)",field:"problemaTicket",sortable:!0},{name:"diagnostico_ticket",align:"center",label:"Dign\xF3stico (Editable)",field:"diagnosticoTicket",sortable:!0},{name:"resolucion_ticket",align:"center",label:"Resoluci\xF3n (Editable)",field:"resolucionTicket",sortable:!0},{name:"estado_ticket",align:"center",label:"Estado",field:"estadoTicket",sortable:!0},{name:"items.repuesto",align:"center",label:"Repuestos",field:"items.repuesto",sortable:!0},{name:"acciones",label:"Acciones",field:"acciones",align:"center"}],N=async(d,i)=>{const e={problema_ticket:i};console.log("editarItemProblema",d,e),await w(d,e)},j=async(d,i)=>{const e={diagnostico_ticket:i};console.log("editarItemDiagnostico",d,e),await w(d,e)},B=async(d,i)=>{const e={resolucion_ticket:i};console.log("editarItemResolucion",d,e),await w(d,e)},H=async d=>{r?(console.log("delete permitido",d),await b(d)):(console.log("no hay permisos"),st("No tiene permisos de Administrador para eliminar","negative"))},U=[{estado:"Abierto",color:"green"},{estado:"En Progreso",color:"yellow"},{estado:"Terminado",color:"blue"},{estado:"Cancelado",color:"red"}],c=async()=>{await P(),await v()};return Le(async()=>{await c()}),$e(async()=>{await c()}),(d,i)=>(We(),Ge("div",gt,[o(rt,{title:"Administraci\xF3n de Tickets",rows:m(C),columns:R,filter:x.value,"row-key":"name","binary-state-sort":""},{top:l(()=>[o(le,{modelValue:m(h),"onUpdate:modelValue":i[0]||(i[0]=e=>ie(h)?h.value=e:h=e)},{default:l(()=>[o(m(n))]),_:1},8,["modelValue"]),o(le,{modelValue:m(p),"onUpdate:modelValue":i[2]||(i[2]=e=>ie(p)?p.value=e:p=e),persistent:""},{default:l(()=>[o(ze,{class:""},{default:l(()=>[o(Fe,{class:"row items-center"},{default:l(()=>[o(Xe,{icon:"warning",color:"warning","text-color":"white"}),ne("span",vt,"\xBFEst\xE1s seguro de eliminar el ticket n\xBA "+u(m(E))+"?",1)]),_:1}),o(Ye,{align:"right"},{default:l(()=>[re(o(q,{flat:"",label:"Cancelar",color:"primary"},null,512),[[me]]),re(o(q,{flat:"",label:"Confirmar",color:"negative",onClick:i[1]||(i[1]=e=>H(m(E)))},null,512),[[me]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(q,{color:"primary",label:"A\xF1adir Ticket",icon:"add",onClick:D}),o(it),o(I,{modelValue:x.value,"onUpdate:modelValue":i[3]||(i[3]=e=>x.value=e),outlined:"",dense:"",debounce:"300",color:"primary"},{append:l(()=>[o(se,{name:"search"})]),_:1},8,["modelValue"])]),body:l(e=>[o(nt,{props:e},{default:l(()=>[o(_,{key:"id_ticket",props:e},{default:l(()=>[f(u(e.row.id_ticket),1)]),_:2},1032,["props"]),o(_,{key:"clientesRutCliente",props:e},{default:l(()=>[f(u(e.row.clientesRutCliente)+" ",1),o(W,null,{default:l(()=>[f(u(m(k)(e.row.clientesRutCliente).nombre_cliente)+" "+u(m(k)(e.row.clientesRutCliente).appat_cliente)+" "+u(m(k)(e.row.clientesRutCliente).apmat_cliente),1)]),_:2},1024)]),_:2},1032,["props"]),o(_,{key:"colaboradoresRutColaborador",props:e},{default:l(()=>[ne("div",_t,[f(u(e.row.colaboradoresRutColaborador)+" ",1),o(W,null,{default:l(()=>[f(u(m(y)(e.row.colaboradoresRutColaborador).nombre_colaborador)+" "+u(m(y)(e.row.colaboradoresRutColaborador).appat_colaborador)+" "+u(m(y)(e.row.colaboradoresRutColaborador).apmat_colaborador),1)]),_:2},1024)])]),_:2},1032,["props"]),o(_,{key:"dispositivosIdDispositivo",props:e},{default:l(()=>{var a;return[f(u(((a=e.row.dispositivos)==null?void 0:a.num_serie_dispositivo)||"Nulo")+" ",1),o(W,null,{default:l(()=>{var g;return[f(u(((g=e.row.dispositivos)==null?void 0:g.modelo)||"Nulo"),1)]}),_:2},1024)]}),_:2},1032,["props"]),o(_,{key:"problema_ticket",props:e},{default:l(()=>[f(u(e.row.problema_ticket)+" ",1),o($,{modelValue:e.row.problema_ticket,"onUpdate:modelValue":a=>e.row.problema_ticket=a,title:"Editar Problema",buttons:"",persistent:"",onSave:a=>N(e.row.id_ticket,a)},{default:l(a=>[o(I,{modelValue:a.value,"onUpdate:modelValue":g=>a.value=g,type:"textarea",autofocus:"",counter:"",onKeyup:i[4]||(i[4]=L(Ze(()=>{},["stop"]),["enter"]))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),o(_,{key:"diagnostico_ticket",props:e},{default:l(()=>[f(u(e.row.diagnostico_ticket)+" ",1),o($,{modelValue:e.row.diagnostico_ticket,"onUpdate:modelValue":a=>e.row.diagnostico_ticket=a,title:"Editar diagn\xF3stico",buttons:"",persistent:"",onSave:a=>j(e.row.id_ticket,a)},{default:l(a=>[o(I,{modelValue:a.value,"onUpdate:modelValue":g=>a.value=g,autofocus:"",type:"textarea",counter:"",onKeyup:L(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),o(_,{key:"resolucion_ticket",props:e},{default:l(()=>[f(u(e.row.resolucion_ticket)+" ",1),o($,{modelValue:e.row.resolucion_ticket,"onUpdate:modelValue":a=>e.row.resolucion_ticket=a,title:"Editar resoluci\xF3n",buttons:"",persistent:"",onSave:a=>B(e.row.id_ticket,a)},{default:l(a=>[o(I,{modelValue:a.value,"onUpdate:modelValue":g=>a.value=g,autofocus:"",type:"textarea",counter:"",onKeyup:L(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),o(_,{key:"estado_ticket",props:e},{default:l(()=>[o(bt,{color:U[e.row.estado_ticket-1].color},{default:l(()=>[f(u(U[e.row.estado_ticket-1].estado),1)]),_:2},1032,["color"])]),_:2},1032,["props"]),o(_,{key:"items.repuesto",props:e},{default:l(()=>[f(u(e.row.items.map(a=>a.repuesto)),1)]),_:2},1032,["props"]),o(_,{key:"acciones",props:e},{default:l(()=>[o(q,{push:"",round:"",color:"red",onClick:a=>V(e.row.id_ticket)},{default:l(()=>[o(se,{name:"delete"})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])]))}};export{At as default};
