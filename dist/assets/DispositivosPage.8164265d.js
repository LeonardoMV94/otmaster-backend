var F=Object.defineProperty;var y=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var S=(e,a,s)=>a in e?F(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,x=(e,a)=>{for(var s in a||(a={}))U.call(a,s)&&S(e,s,a[s]);if(y)for(var s of y(a))$.call(a,s)&&S(e,s,a[s]);return e};import{cd as Q,n as c,ao as P,ap as j,aA as T,Y as q,a4 as o,b3 as l,Z as r,z as V,bR as b,ce as g,bS as h,cN as z,aD as A,aB as R,a3 as B,K as E}from"./index.5404b0db.js";import{b as M,a as K,Q as L}from"./QTable.d145fbc0.js";import{b as k,Q as I}from"./QItem.1864d98b.js";import{Q as O}from"./QForm.5d83addf.js";import{u as Y}from"./useMarcaDispositivo.4edc6bba.js";import{u as Z}from"./useTipoDispositivo.e8dd2e4d.js";import{u as G}from"./useDispositivo.cbf486f3.js";import"./Notifications.cd9f2894.js";const H=e=>(A("data-v-fea5a71a"),e=e(),R(),e),J={class:"q-pa-lg",style:{"max-width":"700px"}},W=H(()=>r("h4",{class:"text-center"},"Agregar un Dispositivo",-1)),X={class:"row"},oo={class:"col"},eo=B(" No hay tipos de dispositivos "),so={class:"row"},ao={class:"col"},io=B(" No hay marcas "),to={class:"row"},lo={class:"col"},ro={class:"row"},no={class:"col"},uo={class:"row justify-center"},co={__name:"FormDispositivo",setup(e){const{getAllMarcaDispositivos:a,getMDtoSelect:s}=Y(),{getAllTipoDispositivos:u,getTDtoSelects:v}=Z(),{createDispositivo:D}=G(),i=c(null),m=c(null),_=c(null),t=c(null),p=s.value,N=v.value,C=()=>{const f={num_serie_dispositivo:i.value,modelo:m.value,marcasDispositivosIdMarcas:_.value,tiposDispositivosIdTipos:t.value};console.log("form dispositivos: ",f),D(f)},w=async()=>{await a(),await u()};return P(async()=>{await w()}),j(async()=>{await w()}),(f,d)=>(T(),q("div",J,[o(z,{class:"q-pa-md"},{default:l(()=>[W,o(O,{onSubmit:C},{default:l(()=>[r("div",X,[r("div",oo,[o(M,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=n=>t.value=n),"label-color":"primary",outlined:"","input-debounce":"0",label:"Tipo Dispositivo ","map-options":"","emit-value":"",behavior:"menu",options:V(N)},{"no-option":l(()=>[o(k,null,{default:l(()=>[o(I,{class:"text-grey"},{default:l(()=>[eo]),_:1})]),_:1})]),append:l(()=>[o(b,{name:"smartphone",color:"black"})]),_:1},8,["modelValue","options"])])]),r("div",so,[r("div",ao,[o(M,{modelValue:_.value,"onUpdate:modelValue":d[1]||(d[1]=n=>_.value=n),color:"grey-3","label-color":"primary",outlined:"","input-debounce":"0",label:"Marca Dispositivo ",behavior:"menu","map-options":"","emit-value":"",options:V(p)},{"no-option":l(()=>[o(k,null,{default:l(()=>[o(I,{class:"text-grey"},{default:l(()=>[io]),_:1})]),_:1})]),append:l(()=>[o(b,{name:"star",color:"black"})]),_:1},8,["modelValue","options"])])]),r("div",to,[r("div",lo,[o(g,{modelValue:m.value,"onUpdate:modelValue":d[2]||(d[2]=n=>m.value=n),color:"grey-3","label-color":"primary",outlined:"",label:"Modelo del dispositivo","unmasked-value":"",clearable:"",mask:"NNNNNNNNNNNNNNNNNNNNNN",rules:[n=>!!n||"Se requiere que escriba un modelo"]},{append:l(()=>[o(b,{name:"tv",color:"black"})]),_:1},8,["modelValue","rules"])])]),r("div",ro,[r("div",no,[o(g,{modelValue:i.value,"onUpdate:modelValue":d[3]||(d[3]=n=>i.value=n),"label-color":"primary",outlined:"",label:"N\xFAmero de Serie",mask:"NNNNNNNNNNNNNNNNNNNNNNNNNN","unmasked-value":"",clearable:"",rules:[n=>!!n||"Se requiere que escriba un numero de serie"]},{append:l(()=>[o(b,{name:"tag",color:"black"})]),_:1},8,["modelValue","rules"])])]),r("div",uo,[o(h,{label:"Agregar",type:"submit",color:"primary"})])]),_:1})]),_:1})]))}};var po=Q(co,[["__scopeId","data-v-fea5a71a"]]);const vo=e=>(A("data-v-066af644"),e=e(),R(),e),mo={class:"q-pa-lg",style:{"max-width":"1400px"}},_o=vo(()=>r("h4",{class:"text-center"},"Dispositivo Registrados",-1)),No={__name:"DispositivosPage",setup(e){const a=[{name:"idDispositivo",required:!0,label:"ID",align:"center",field:t=>t.idDispositivo,format:t=>`${t}`,sortable:!0},{name:"numeroSerieDispositivo",align:"center",label:"Nombre",field:"numeroSerieDispositivo",sortable:!0},{name:"modeloDispositivo",align:"center",label:"Modelo Dispotivo",field:"APpatCliente",sortable:!0},{name:"marcaDispositivo",align:"center",label:"Marca Dispositivo",field:"marcaDispositivo",sortable:!0},{name:"tipoDispositivo",align:"center",label:"Tipo Dispositivo",field:"tipoDispositivo",sortable:!0}],s=[{idDispositivo:"123123",numeroSerieDispositivo:"123123",modeloDispositivo:"L11",marcaDispositivo:"Samsung",tipoDispositivo:"Notebook"}],u=c(!1),v=c(""),D=c(10),i=c([...s]),m=()=>{u.value=!0,setTimeout(()=>{const t=Math.floor(Math.random()*(i.value.length+1)),p=s[Math.floor(Math.random()*s.length)];i.value.length===0&&(D.value=0),p.id=++D.value;const N=x({},p);i.value=[...i.value.slice(0,t),N,...i.value.slice(t)],u.value=!1},500)},_=()=>{u.value=!0,setTimeout(()=>{const t=Math.floor(Math.random()*i.value.length);i.value=[...i.value.slice(0,t),...i.value.slice(t+1)],u.value=!1},500)};return(t,p)=>(T(),q(E,null,[o(po),r("div",mo,[_o,o(K,{title:"Tabla de Dispositivos",rows:i.value,columns:a,"row-key":"id",filter:v.value,loading:u.value},{top:l(()=>[o(h,{color:"primary",disable:u.value,label:"Add row",onClick:m},null,8,["disable"]),o(h,{class:"q-ml-sm",color:"primary",disable:u.value,label:"Remove row",onClick:_},null,8,["disable"]),o(L),o(g,{modelValue:v.value,"onUpdate:modelValue":p[0]||(p[0]=N=>v.value=N),borderless:"",dense:"",debounce:"300",color:"primary"},{append:l(()=>[o(b,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","filter","loading"])])],64))}};var Vo=Q(No,[["__scopeId","data-v-066af644"]]);export{Vo as default};
