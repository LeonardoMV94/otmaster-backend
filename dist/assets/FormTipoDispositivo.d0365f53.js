import{ce as d,n,aA as _,Y as u,a4 as o,b3 as r,Z as s,co as m,bR as v,bS as S,ck as b,aD as f,aB as h}from"./index.a4b71a83.js";import{Q as x}from"./QForm.85a6390b.js";import{u as D}from"./useTipoDispositivo.ca1c3985.js";import"./Notifications.91e332ad.js";const w=e=>(f("data-v-6ec63a1f"),e=e(),h(),e),y={style:{width:"700px","max-width":"80vw"}},g=w(()=>s("h4",{class:"text-center"},"Agregar un tipo de dispositivo",-1)),k={class:"row"},I={class:"col"},Q={class:"row justify-center"},T={__name:"FormTipoDispositivo",setup(e){const t=n(null),{createTipoDispositivo:c}=D(),l=()=>{const i={nombre_tipo:t.value};console.log("nuevo tipo dispositivo: ",i),c(i)};return(i,p)=>(_(),u("div",y,[o(b,{class:"q-pa-md"},{default:r(()=>[g,o(x,{onSubmit:l},{default:r(()=>[s("div",k,[s("div",I,[o(m,{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=a=>t.value=a),"label-color":"primary",outlined:"",label:"Tipo Dispositivo",mask:"SSSSSSSSSSSSSSSSSSSS","unmasked-value":"",rules:[a=>!!a||"Se requiere que escriba un tipo de dispositivo"]},{append:r(()=>[o(v,{name:"devices_other",color:"black"})]),_:1},8,["modelValue","rules"])])]),s("div",Q,[o(S,{label:"Agregar",type:"submit",color:"primary"})])]),_:1})]),_:1})]))}};var A=d(T,[["__scopeId","data-v-6ec63a1f"]]);export{A as default};