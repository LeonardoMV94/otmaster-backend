import{ah as b,cV as _,n as f,bQ as g,aA as h,Y as y,Z as l,a4 as a,b3 as s,cg as v,cQ as w,cf as u,bR as c,cS as Q,bS as C}from"./index.b87efa9c.js";import{Q as V}from"./QForm.4d1a6ee1.js";import{u as q}from"./useAuth.9f637a4e.js";import{u as x}from"./useCliente.42a2af7f.js";function k(){return b(_)}const S={class:"column col-md-4 col-sm-6"},A=l("div",{class:"row justify-center"},[l("h5",{class:"text-h4 text-white q-my-md"},"Iniciar Sesi\xF3n")],-1),B={class:"col-6"},j={__name:"LoginPage",setup(E){const t=f({rut_colaborador:"",password_colaborador:""}),i=g(),{loginUser:d}=q(),{getAllClientes:m}=x(),r=k(),p=async()=>{const{ok:n,message:o}=await d(t.value);n?(await m(),r.notify({type:"positive",message:o}),i.push({name:"home"})):r.notify({type:"negative",message:o})};return(n,o)=>(h(),y("div",S,[A,l("div",B,[a(v,{square:"",bordered:"",class:"q-pa-xl shadow-1"},{default:s(()=>[a(w,null,{default:s(()=>[a(V,{class:""},{default:s(()=>[a(u,{modelValue:t.value.rut_colaborador,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value.rut_colaborador=e),square:"",outlined:"",clearable:"",type:"text",label:"Rut Colaborador","lazy-rules":"",rules:[e=>e.length>0||"Este campo es obligatorio"]},{before:s(()=>[a(c,{name:"person"})]),_:1},8,["modelValue","rules"]),a(u,{modelValue:t.value.password_colaborador,"onUpdate:modelValue":o[1]||(o[1]=e=>t.value.password_colaborador=e),square:"",outlined:"",clearable:"",type:"password",label:"Contrase\xF1a","lazy-rules":"",rules:[e=>e.length>0||"Este campo es obligatorio",e=>e.length>7||"Debe tener como minimo 8 car\xE1cteres"]},{before:s(()=>[a(c,{name:"key"})]),_:1},8,["modelValue","rules"])]),_:1})]),_:1}),a(Q,{class:"q-px-md"},{default:s(()=>[a(C,{unelevated:"",color:"light-blue-7",size:"lg",class:"full-width",label:"Entrar",onClick:p})]),_:1})]),_:1})])]))}};export{j as default};