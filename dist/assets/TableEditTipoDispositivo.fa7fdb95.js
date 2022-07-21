import{a5 as B,ca as P,n as d,ap as j,ao as q,aA as R,Y as K,a4 as o,b3 as a,cj as b,z as r,j as v,ck as M,cl as O,cm as z,Z as F,G as c,cn as G,b5 as N,bS as p,co as w,bR as g,a3 as V,bq as L,br as Y}from"./index.8134a439.js";import{Q as Z,e as H,f,g as J,h as W,C as y}from"./ClosePopup.48428423.js";import{c as X}from"./Notifications.7dc39251.js";import{u as $}from"./useAuth.ef0207bd.js";import{u as ee}from"./useTipoDispositivo.001fd129.js";import"./QItem.80c15471.js";const oe={class:"q-pa-md"},ae={class:"q-ml-sm"},pe={__name:"TableEditTipoDispositivo",setup(te){const D=B(()=>P(()=>import("./FormTipoDispositivo.5001279f.js"),["assets/FormTipoDispositivo.5001279f.js","assets/FormTipoDispositivo.35d69b37.css","assets/index.8134a439.js","assets/index.d6902eec.css","assets/QForm.303b8e08.js","assets/useTipoDispositivo.001fd129.js","assets/Notifications.7dc39251.js"])),{isAdmin:C}=$(),{getAllTipoDispositivos:Q,getTiposDispositivos:T,updateTipoDispositivo:k,deleteTipoDispositivo:A}=ee();let s=d(!1),n=d(!1),m=d(null);const u=d(""),h=()=>{s.value=!s.value},I=i=>{m.value=i,n.value=!n.value},E=[{name:"id_tipo",label:"ID",align:"center",field:"id_tipo",sortable:!0},{name:"nombre_tipo",align:"center",label:"Nombre del tipo",field:"nombre_tipo",sortable:!0},{name:"acciones",align:"center",label:"Acciones",field:"acciones",sortable:!0}],S=async(i,t)=>{const e={nombre_tipo:t};console.log("editarItemNombretipo",i,e),await k(i,e)},U=async i=>{C?(console.log("delete permitido",i),await A(i)):(console.log("no hay permisos"),X("No tiene permisos de Administrador para eliminar","negative"))},_=async()=>{await Q()};return j(async()=>{await _()}),q(async()=>{await _()}),(i,t)=>(R(),K("div",oe,[o(W,{title:"Administraci\xF3n de Tipos de Dispositivos",rows:r(T),columns:E,filter:u.value,"row-key":"name","binary-state-sort":""},{top:a(()=>[o(b,{modelValue:r(s),"onUpdate:modelValue":t[0]||(t[0]=e=>v(s)?s.value=e:s=e)},{default:a(()=>[o(r(D))]),_:1},8,["modelValue"]),o(b,{modelValue:r(n),"onUpdate:modelValue":t[2]||(t[2]=e=>v(n)?n.value=e:n=e),persistent:""},{default:a(()=>[o(M,{class:""},{default:a(()=>[o(O,{class:"row items-center"},{default:a(()=>[o(z,{icon:"warning",color:"warning","text-color":"white"}),F("span",ae,"\xBFEst\xE1s seguro de eliminar el tipo de rol con ID "+c(r(m))+" ?",1)]),_:1}),o(G,{align:"right"},{default:a(()=>[N(o(p,{flat:"",label:"Cancelar",color:"primary"},null,512),[[y]]),N(o(p,{flat:"",label:"Confirmar",color:"negative",onClick:t[1]||(t[1]=e=>U(r(m)))},null,512),[[y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(p,{color:"primary",label:"A\xF1adir nuevo tipo dispositivo",icon:"add",onClick:h}),o(Z),o(w,{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=e=>u.value=e),outlined:"",dense:"",debounce:"300",color:"primary"},{append:a(()=>[o(g,{name:"search"})]),_:1},8,["modelValue"])]),body:a(e=>[o(H,{props:e},{default:a(()=>[o(f,{key:"id_tipo",props:e},{default:a(()=>[V(c(e.row.id_tipo),1)]),_:2},1032,["props"]),o(f,{key:"nombre_tipo",props:e},{default:a(()=>[V(c(e.row.nombre_tipo)+" ",1),o(J,{modelValue:e.row.nombre_tipo,"onUpdate:modelValue":l=>e.row.nombre_tipo=l,title:"Editar nombre de tipo",buttons:"",persistent:"",onSave:l=>S(e.row.id_tipo,l)},{default:a(l=>[o(w,{modelValue:l.value,"onUpdate:modelValue":x=>l.value=x,autofocus:"",counter:"",clearable:"",mask:"NNNNNNNNNNNNNNNNNNNNNN","unmasked-value":"",onKeyup:t[4]||(t[4]=L(Y(()=>{},["stop"]),["enter"]))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),o(f,{key:"acciones",props:e},{default:a(()=>[o(p,{push:"",round:"",color:"red",onClick:l=>I(e.row.id_tipo)},{default:a(()=>[o(g,{name:"delete"})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])]))}};export{pe as default};
