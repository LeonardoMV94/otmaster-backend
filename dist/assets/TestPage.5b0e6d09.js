import{Q as S}from"./QPage.82201759.js";import{bs as B,cO as L,cP as N,c7 as K,au as M,n as b,aA as R,Y as F,a4 as t,b3 as o,cu as y,z as _,j as h,cM as j,cQ as z,cR as G,Z as V,G as s,cS as O,b5 as C,bS as g,cL as Q,bR as T,a3 as d,W}from"./index.ff13323e.js";import{Q as Y}from"./QSpace.037588be.js";import{u as Z,F as $,Q as H,a as r,b as J}from"./FormTicket.0a3ca7c8.js";import{a as X}from"./QTable.575a901d.js";import{u as ee}from"./useAuth.8a0bbf78.js";import"./QItem.c941d1bd.js";import"./QForm.702a5e0b.js";import"./useCliente.f9eb21ec.js";function A(a){if(a===!1)return 0;if(a===!0||a===void 0)return 1;const l=parseInt(a,10);return isNaN(l)?0:l}var D=B({name:"close-popup",beforeMount(a,{value:l}){const i={depth:A(l),handler(c){i.depth!==0&&setTimeout(()=>{const k=L(a);k!==void 0&&N(k,c,i.depth)})},handlerKey(c){K(c,13)===!0&&i.handler(c)}};a.__qclosepopup=i,a.addEventListener("click",i.handler),a.addEventListener("keyup",i.handlerKey)},updated(a,{value:l,oldValue:i}){l!==i&&(a.__qclosepopup.depth=A(l))},beforeUnmount(a){const l=a.__qclosepopup;a.removeEventListener("click",l.handler),a.removeEventListener("keyup",l.handlerKey),delete a.__qclosepopup}});const te={class:"q-pa-md"},oe={class:"q-ml-sm"},ae={class:"text-pre-wrap"},le={__name:"TableEdit",setup(a){const{isAdmin:l}=ee(),{getAllTickets:i,deleteTicket:c,getTickets:k}=Z();M(async()=>{await i()});let u=b(!1),m=b(!1),v=b(null);const w=b(""),x=()=>{u.value=!u.value},E=p=>{v.value=p,m.value=!m.value},I=[{name:"id_ticket",align:"center",label:"ID Ticket",field:"ticket",sortable:!0},{name:"clientesRutCliente",align:"center",label:"Cliente",field:"clienteAtendido",sortable:!0},{name:"colaboradoresRutColaborador",align:"center",label:"Qui\xE9n Atendi\xF3",field:"colaboradorAtiende",sortable:!0},{name:"dispositivosIdDispositivo",align:"center",label:"Dispositivo",field:"dispositivoAtendido",sortable:!0},{name:"problema_ticket",align:"center",label:"Problema",field:"problemaTicket",sortable:!0},{name:"diagnostico_ticket",align:"center",label:"Dign\xF3stico",field:"diagnosticoTicket",sortable:!0},{name:"resolucion_ticket",align:"center",label:"Resoluci\xF3n",field:"resolucionTicket",sortable:!0},{name:"estado_ticket",align:"center",label:"Estado",field:"estadoTicket",sortable:!0},{name:"acciones",label:"Acciones",field:"acciones",align:"center"}],P=k.value,U=async p=>{l?(console.log("delete permitido",p),await c(p)):console.log("no hay permisos")};return(p,n)=>(R(),F("div",te,[t(X,{title:"Administraci\xF3n de Tickets",rows:_(P),columns:I,filter:w.value,"row-key":"name","binary-state-sort":""},{top:o(()=>[t(y,{modelValue:_(u),"onUpdate:modelValue":n[0]||(n[0]=e=>h(u)?u.value=e:u=e)},{default:o(()=>[t($)]),_:1},8,["modelValue"]),t(y,{modelValue:_(m),"onUpdate:modelValue":n[2]||(n[2]=e=>h(m)?m.value=e:m=e),persistent:""},{default:o(()=>[t(j,null,{default:o(()=>[t(z,{class:"row items-center"},{default:o(()=>[t(G,{icon:"warning",color:"warning","text-color":"white"}),V("span",oe,"\xBFEst\xE1s seguro de eliminar el ticket n\xBA "+s(_(v))+"?",1)]),_:1}),t(O,{align:"right"},{default:o(()=>[C(t(g,{flat:"",label:"Cancelar",color:"primary"},null,512),[[D]]),C(t(g,{flat:"",label:"Confirmar",color:"primary",onClick:n[1]||(n[1]=e=>U(_(v)))},null,512),[[D]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(g,{color:"primary",label:"A\xF1adir Ticket",onClick:x}),t(Y),t(Q,{modelValue:w.value,"onUpdate:modelValue":n[3]||(n[3]=e=>w.value=e),borderless:"",outlined:"",dense:"",debounce:"300",color:"primary"},{append:o(()=>[t(T,{name:"search"})]),_:1},8,["modelValue"])]),body:o(e=>[t(H,{props:e},{default:o(()=>[t(r,{key:"id_ticket",props:e},{default:o(()=>[d(s(e.row.id_ticket)+" ",1),t(J,{modelValue:e.row.name,"onUpdate:modelValue":f=>e.row.name=f},{default:o(f=>[t(Q,{modelValue:f.value,"onUpdate:modelValue":q=>f.value=q,dense:"",autofocus:"",counter:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),t(r,{key:"clientesRutCliente",props:e},{default:o(()=>[d(s(e.row.clientesRutCliente),1)]),_:2},1032,["props"]),t(r,{key:"colaboradoresRutColaborador",props:e},{default:o(()=>[V("div",ae,s(e.row.colaboradoresRutColaborador),1)]),_:2},1032,["props"]),t(r,{key:"dispositivosIdDispositivo",props:e},{default:o(()=>[d(s(e.row.dispositivosIdDispositivo),1)]),_:2},1032,["props"]),t(r,{key:"problema_ticket",props:e},{default:o(()=>[d(s(e.row.problema_ticket),1)]),_:2},1032,["props"]),t(r,{key:"diagnostico_ticket",props:e},{default:o(()=>[d(s(e.row.diagnostico_ticket),1)]),_:2},1032,["props"]),t(r,{key:"resolucion_ticket",props:e},{default:o(()=>[d(s(e.row.resolucion_ticket),1)]),_:2},1032,["props"]),t(r,{key:"estado_ticket",props:e},{default:o(()=>[d(s(e.row.estado_ticket),1)]),_:2},1032,["props"]),t(r,{key:"acciones",props:e},{default:o(()=>[t(g,{push:"",rounded:"",color:"red",onClick:f=>E(e.row.id_ticket)},{default:o(()=>[t(T,{name:"delete"})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])]))}},fe={__name:"TestPage",setup(a){return(l,i)=>(R(),W(S,null,{default:o(()=>[t(le)]),_:1}))}};export{fe as default};
