var I=Object.defineProperty;var m=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var f=(o,e,s)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,S=(o,e)=>{for(var s in e||(e={}))Q.call(e,s)&&f(o,s,e[s]);if(m)for(var s of m(e))V.call(e,s)&&f(o,s,e[s]);return o};import{ce as b,n as d,aA as h,Y as g,a4 as a,b3 as u,Z as p,cf as D,bR as w,bS as _,cg as q,aD as T,aB as x,K as R}from"./index.b87efa9c.js";import{Q as F,a as M}from"./QTable.f511fa1b.js";import{Q as B}from"./QForm.4d1a6ee1.js";import{u as C}from"./useTipoDispositivo.f429c8c6.js";import"./QItem.18e3eea6.js";import"./Notifications.79b82ee7.js";const $=o=>(T("data-v-65752f60"),o=o(),x(),o),A={class:"q-pa-xl",style:{"max-width":"700px"}},P=$(()=>p("h4",{class:"text-center"},"Agregar un tipo de dispositivo",-1)),j={class:"row"},N={class:"col"},U={class:"row justify-center"},E={__name:"FormTipoDispositivo",setup(o){const e=d(null),{createTipoDispositivo:s}=C(),l=()=>{const r={nombre_tipo:e.value};console.log("nuevo tipo dispositivo: ",r),s(r)};return(r,n)=>(h(),g("div",A,[P,a(q,{class:"q-pa-md"},{default:u(()=>[a(B,{onSubmit:l},{default:u(()=>[p("div",j,[p("div",N,[a(D,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=i=>e.value=i),"label-color":"primary",outlined:"",label:"Tipo Dispositivo",mask:"SSSSSSSSSSSSSSSSSSSS","unmasked-value":"",rules:[i=>!!i||"Se requiere que escriba un tipo de dispositivo"]},{append:u(()=>[a(w,{name:"devices_other",color:"black"})]),_:1},8,["modelValue","rules"])])]),p("div",U,[a(_,{label:"Agregar",type:"submit",color:"primary"})])]),_:1})]),_:1})]))}};var K=b(E,[["__scopeId","data-v-65752f60"]]);const O=o=>(T("data-v-0a4f54fc"),o=o(),x(),o),Y={class:"q-pa-xl",style:{"max-width":"700px"}},Z=O(()=>p("h4",{class:"text-center"},"Tipos de Dispositivo Registrados",-1)),z={__name:"TiposDispositivosPage",setup(o){const e=[{name:"idTipoDispositivo",required:!0,label:"ID",align:"center",field:t=>t.idTipoDispositivo,format:t=>`${t}`,sortable:!0},{name:"tipoDispositivo",align:"center",label:"Tipo Dispositivo",field:"tipoDispositivo",sortable:!0}],s=[{idTipoDispositivo:"12",tipoDispositivo:"Desktop"}],l=d(!1),r=d(""),n=d(10),i=d([...s]),y=()=>{l.value=!0,setTimeout(()=>{const t=Math.floor(Math.random()*(i.value.length+1)),c=s[Math.floor(Math.random()*s.length)];i.value.length===0&&(n.value=0),c.id=++n.value;const v=S({},c);i.value=[...i.value.slice(0,t),v,...i.value.slice(t)],l.value=!1},500)},k=()=>{l.value=!0,setTimeout(()=>{const t=Math.floor(Math.random()*i.value.length);i.value=[...i.value.slice(0,t),...i.value.slice(t+1)],l.value=!1},500)};return(t,c)=>(h(),g(R,null,[a(K),p("div",Y,[Z,a(F,{title:"Tipos de Dispositivos",rows:i.value,columns:e,"row-key":"id",filter:r.value,loading:l.value},{top:u(()=>[a(_,{color:"primary",disable:l.value,label:"Add row",onClick:y},null,8,["disable"]),a(_,{class:"q-ml-sm",color:"primary",disable:l.value,label:"Remove row",onClick:k},null,8,["disable"]),a(M),a(D,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=v=>r.value=v),borderless:"",dense:"",debounce:"300",color:"primary"},{append:u(()=>[a(w,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","filter","loading"])])],64))}};var eo=b(z,[["__scopeId","data-v-0a4f54fc"]]);export{eo as default};