var Q=Object.defineProperty;var v=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var b=(e,o,a)=>o in e?Q(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,S=(e,o)=>{for(var a in o||(o={}))k.call(o,a)&&b(e,a,o[a]);if(v)for(var a of v(o))V.call(o,a)&&b(e,a,o[a]);return e};import{cd as f,n as u,aA as M,Y as h,a4 as r,b3 as m,Z as i,ce as g,bR as w,bS as _,cN as q,aD as x,aB as y,K as F}from"./index.5404b0db.js";import{a as R,Q as B}from"./QTable.d145fbc0.js";import{Q as C}from"./QForm.5d83addf.js";import{u as N}from"./useMarcaDispositivo.4edc6bba.js";import"./QItem.1864d98b.js";import"./Notifications.cd9f2894.js";const $=e=>(x("data-v-7861453d"),e=e(),y(),e),A={class:"q-pa-xl",style:{"max-width":"700px"}},P=$(()=>i("h4",{class:"text-center"},"Agregar Marca de Dispositivo",-1)),T={class:"row"},j={class:"col"},U={class:"row justify-center"},E={__name:"FormMarcaDispositivo",setup(e){const{createMarcaDispositivo:o}=N(),a=u(null),t=()=>{const c={nombre_marca:a.value};console.log("Form nombreMarca: ",c),o(c)};return(c,n)=>(M(),h("div",A,[P,r(q,{class:"q-pa-md"},{default:m(()=>[r(C,{onSubmit:t},{default:m(()=>[i("div",T,[i("div",j,[r(g,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),"label-color":"primary",outlined:"",label:"Nombre Marca",mask:"SSSSSSSSSSSSSSSSSSSS","unmasked-value":"",rules:[s=>!!s||"Se requiere que escriba una marca"]},{append:m(()=>[r(w,{name:"star",color:"black"})]),_:1},8,["modelValue","rules"])])]),i("div",U,[r(_,{label:"Agregar",type:"submit",color:"primary"})])]),_:1})]),_:1})]))}};var K=f(E,[["__scopeId","data-v-7861453d"]]);const O=e=>(x("data-v-f6ad687e"),e=e(),y(),e),Y={class:"q-pa-xl",style:{"max-width":"700px"}},Z=O(()=>i("h4",{class:"text-center"},"Marcas Registradas",-1)),z={__name:"MarcasDispositivosPage",setup(e){const o=[{name:"idMarca",required:!0,label:"ID",align:"center",field:l=>l.idMarca,format:l=>`${l}`,sortable:!0},{name:"nombreMarca",align:"center",label:"Nombre Marca",field:"nombreMarca",sortable:!0}],a=[{idMarca:"12",nombreMarca:"Samsung"}],t=u(!1),c=u(""),n=u(10),s=u([...a]),D=()=>{t.value=!0,setTimeout(()=>{const l=Math.floor(Math.random()*(s.value.length+1)),d=a[Math.floor(Math.random()*a.length)];s.value.length===0&&(n.value=0),d.id=++n.value;const p=S({},d);s.value=[...s.value.slice(0,l),p,...s.value.slice(l)],t.value=!1},500)},I=()=>{t.value=!0,setTimeout(()=>{const l=Math.floor(Math.random()*s.value.length);s.value=[...s.value.slice(0,l),...s.value.slice(l+1)],t.value=!1},500)};return(l,d)=>(M(),h(F,null,[r(K),i("div",Y,[Z,r(R,{title:"Marcas de Dispositivos",rows:s.value,columns:o,"row-key":"id",filter:c.value,loading:t.value},{top:m(()=>[r(_,{color:"primary",disable:t.value,label:"Add row",onClick:D},null,8,["disable"]),r(_,{class:"q-ml-sm",color:"primary",disable:t.value,label:"Remove row",onClick:I},null,8,["disable"]),r(B),r(g,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=p=>c.value=p),borderless:"",dense:"",debounce:"300",color:"primary"},{append:m(()=>[r(w,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","filter","loading"])])],64))}};var ea=f(z,[["__scopeId","data-v-f6ad687e"]]);export{ea as default};