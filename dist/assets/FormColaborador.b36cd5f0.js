import{ce as w,n as t,ap as q,ao as x,aA as R,Y as Q,a4 as o,b3 as r,Z as l,cf as n,bR as u,z as I,bS as h,cg as A,aD as U,aB as B,a3 as F}from"./index.b87efa9c.js";import{b as M,Q as N}from"./QItem.18e3eea6.js";import{g as P}from"./QTable.f511fa1b.js";import{Q as j}from"./QForm.4d1a6ee1.js";import{u as z}from"./useRoles.b61c86d9.js";import{u as $}from"./useColaboradores.7d2468f0.js";import"./Notifications.79b82ee7.js";const D=d=>(U("data-v-ea58d124"),d=d(),B(),d),E={style:{width:"700px","max-width":"80vw"}},L=D(()=>l("h4",{class:"text-center"},"Agregar un Colaborador",-1)),O={class:"row"},T={class:"col"},Y={class:"row"},Z={class:"col"},G={class:"col"},H={class:"row"},J={class:"col"},K={class:"col"},W=F(" No hay roles "),X={class:"row"},ee={class:"col"},oe={class:"row"},ae={class:"col"},le={class:"row justify-center"},re={__name:"FormColaborador",setup(d){const{getAllRoles:_,getRolestoSelect:g,getRoles:V}=z(),{createColaborador:f}=$(),c=t(null),p=t(null),m=t(null),b=t(null),i=t(null),S=t(null),y=t(null),s=t(!0),C=g.value;console.log("dispositivos getRolesSelect: ",C,V.value);const k=()=>{const v={rut_colaborador:c.value,password_colaborador:i.value,nombre_colaborador:p.value,apmat_colaborador:b.value,appat_colaborador:m.value,rolesIdRol:S.value};console.log("FormColab: ",v),f(v)};return q(async()=>{await _()}),x(async()=>{await _()}),(v,a)=>(R(),Q("div",E,[o(A,{class:"q-pa-md"},{default:r(()=>[L,o(j,{onSubmit:k},{default:r(()=>[l("div",O,[l("div",T,[o(n,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),modelModifiers:{number:!0},"label-color":"primary",outlined:"",label:"Rut del Colaborador",mask:"########","unmasked-value":"",clearable:"",rules:[e=>!!e||"Se requiere un rut"]},{append:r(()=>[o(u,{name:"badge",color:"black"})]),_:1},8,["modelValue","rules"])])]),l("div",Y,[l("div",Z,[o(n,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value=e),"label-color":"primary",outlined:"",label:"Nombre del Colaborador",mask:"SSSSSSSSSSSSSSSSSSSS","unmasked-value":"",clearable:"",rules:[e=>!!e||"Se requiere que escriba un nombre"]},{append:r(()=>[o(u,{name:"engineering",color:"black"})]),_:1},8,["modelValue","rules"])]),l("div",G,[o(n,{modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=e=>m.value=e),color:"grey-3","label-color":"primary",outlined:"",label:"Apellido Paterno",mask:"SSSSSSSSSSSSSSSSSSSS","unmasked-value":"",clearable:"",rules:[e=>!!e||"Se requiere que escriba un apellido"]},{append:r(()=>[o(u,{name:"engineering",color:"black"})]),_:1},8,["modelValue","rules"])])]),l("div",H,[l("div",J,[o(n,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),color:"grey-3","label-color":"primary",outlined:"",label:"Apellido Materno",mask:"SSSSSSSSSSSSSSSSSSSS","unmasked-value":"",clearable:"",rules:[e=>!!e||"Se requiere que escriba un apellido"]},{append:r(()=>[o(u,{name:"engineering",color:"black"})]),_:1},8,["modelValue","rules"])]),l("div",K,[o(P,{modelValue:S.value,"onUpdate:modelValue":a[4]||(a[4]=e=>S.value=e),"label-color":"primary",outlined:"","input-debounce":"0",label:"Rol Colaborador ","map-options":"","emit-value":"",behavior:"menu",options:I(C)},{"no-option":r(()=>[o(M,null,{default:r(()=>[o(N,{class:"text-grey"},{default:r(()=>[W]),_:1})]),_:1})]),append:r(()=>[o(u,{name:"attribution",color:"black"})]),_:1},8,["modelValue","options"])])]),l("div",X,[l("div",ee,[o(n,{modelValue:i.value,"onUpdate:modelValue":a[6]||(a[6]=e=>i.value=e),outlined:"","label-color":"primary",type:s.value?"password":"text",label:"Contrase\xF1a Colaborador",count:"",clearable:"",rules:[e=>!!e||"Se requiere que escriba una contrase\xF1a",e=>e.length>7||"Minimo 8 car\xE1cteres"]},{append:r(()=>[o(u,{name:s.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[5]||(a[5]=e=>s.value=!s.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules"])])]),l("div",oe,[l("div",ae,[o(n,{modelValue:y.value,"onUpdate:modelValue":a[8]||(a[8]=e=>y.value=e),outlined:"","label-color":"primary",type:s.value?"password":"text",label:"Repita Contrase\xF1a Colaborador","lazy-rules":"",clearable:"",count:"",rules:[e=>!!e||"Se requiere que escriba una contrase\xF1a",e=>e===i.value||"Las contrase\xF1as deben coincidir"]},{append:r(()=>[o(u,{name:s.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[7]||(a[7]=e=>s.value=!s.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules"])])]),l("div",le,[o(h,{label:"Agregar",type:"submit",color:"primary"})])]),_:1})]),_:1})]))}};var pe=w(re,[["__scopeId","data-v-ea58d124"]]);export{pe as default};
