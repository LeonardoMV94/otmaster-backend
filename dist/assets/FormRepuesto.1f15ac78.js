import{ce as i,n,aA as d,Y as _,a4 as o,b3 as r,Z as t,co as m,bR as v,bS as b,ck as h,aD as f,aB as x}from"./index.8134a439.js";import{Q as w}from"./QForm.303b8e08.js";import{u as y}from"./TableEditRepuestos.7b7af3cb.js";import"./ClosePopup.48428423.js";import"./QItem.80c15471.js";import"./Notifications.7dc39251.js";import"./useAuth.ef0207bd.js";const R=s=>(f("data-v-5921aa16"),s=s(),x(),s),S={style:{width:"700px","max-width":"80vw"}},g=R(()=>t("h4",{class:"text-center"},"Administraci\xF3n de Repuestos",-1)),I={class:"row"},Q={class:"col"},B={class:"row justify-center"},F={__name:"FormRepuesto",setup(s){const a=n(null),{createNewRepuesto:u}=y(),p=()=>{console.log("Se envi\xF3 prueba de formulario");const l={repuesto:a.value};u(l)};return(l,c)=>(d(),_("div",S,[o(h,{class:"q-pa-md"},{default:r(()=>[g,o(w,{onSubmit:p},{default:r(()=>[t("div",I,[t("div",Q,[o(m,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=e=>a.value=e),"label-color":"primary",outlined:"",label:"Nombre del Repuesto","lazy-rules":"",counter:"",clearable:"",rules:[e=>!!e||"Se requiere que escriba un repuesto",e=>e.length<=25||"M\xE1ximo 25 car\xE1cteres",e=>e.length>=4||"M\xEDnimo 4 car\xE1cteres"]},{append:r(()=>[o(v,{name:"build_circle",color:"black"})]),_:1},8,["modelValue","rules"])])]),t("div",B,[o(b,{label:"Agregar",type:"submit",color:"primary"})])]),_:1})]),_:1})]))}};var j=i(F,[["__scopeId","data-v-5921aa16"]]);export{j as default};
