var h=Object.defineProperty;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var v=(l,a,e)=>a in l?h(l,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[a]=e,b=(l,a)=>{for(var e in a||(a={}))w.call(a,e)&&v(l,e,a[e]);if(p)for(var e of p(a))P.call(a,e)&&v(l,e,a[e]);return l};import{cd as x,n as s,aA as A,W as Q,b3 as u,a4 as r,Z as f,bS as C,ce as y,bR as I,aD as M,aB as R}from"./index.5404b0db.js";import{Q as B,a as k}from"./QTable.d145fbc0.js";import{Q as S}from"./QPage.3ce65134.js";import{F as T}from"./FormCliente.f8c8ca2e.js";import"./QItem.1864d98b.js";import"./QForm.5d83addf.js";import"./useCliente.b70220ac.js";const V=l=>(M("data-v-4e544645"),l=l(),R(),l),N={class:"q-pa-lg",style:{"max-width":"1400px"}},q=V(()=>f("h4",{class:"text-center"},"Clientes Registrados",-1)),D={__name:"ClientesPage",setup(l){const a=[{name:"idCliente",required:!0,label:"ID",align:"center",field:o=>o.idCliente,format:o=>`${o}`,sortable:!0},{name:"nombreCliente",align:"center",label:"Nombre",field:"nombreCliente",sortable:!0},{name:"APpatCliente",align:"center",label:"Apellido Paterno",field:"APpatCliente",sortable:!0},{name:"APmatCliente",align:"center",label:"Apellido Materno",field:"APmatCliente",sortable:!0},{name:"correoCliente",align:"center",label:"Correo",field:"correoCliente",sortable:!0},{name:"telCliente",align:"center",label:"Tel\xE9fono",field:"telCliente",sortable:!0}],e=[{idCliente:"123213",nombreCliente:"Benito",APpatCliente:"Camelo",APmatCliente:"DeNuevo",correoCliente:"bcamelo@gmail.com",telCliente:"123123"}],n=s(!1),c=s(""),m=s(10),t=s([...e]),_=()=>{n.value=!0,setTimeout(()=>{const o=Math.floor(Math.random()*(t.value.length+1)),i=e[Math.floor(Math.random()*e.length)];t.value.length===0&&(m.value=0),i.id=++m.value;const d=b({},i);t.value=[...t.value.slice(0,o),d,...t.value.slice(o)],n.value=!1},500)},g=()=>{n.value=!0,setTimeout(()=>{const o=Math.floor(Math.random()*t.value.length);t.value=[...t.value.slice(0,o),...t.value.slice(o+1)],n.value=!1},500)};return(o,i)=>(A(),Q(S,{padding:""},{default:u(()=>[r(T),f("div",N,[q,r(k,{title:"Clientes",rows:t.value,columns:a,"row-key":"id",filter:c.value,loading:n.value},{top:u(()=>[r(C,{color:"primary",disable:n.value,label:"Add row",onClick:_},null,8,["disable"]),r(C,{class:"q-ml-sm",color:"primary",disable:n.value,label:"Remove row",onClick:g},null,8,["disable"]),r(B),r(y,{modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=d=>c.value=d),borderless:"",dense:"",debounce:"300",color:"primary",fill:""},{append:u(()=>[r(I,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","filter","loading"])])]),_:1}))}};var G=x(D,[["__scopeId","data-v-4e544645"]]);export{G as default};
