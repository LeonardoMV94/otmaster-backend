var D=Object.defineProperty,h=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var l=(s,i,o)=>i in s?D(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o,g=(s,i)=>{for(var o in i||(i={}))m.call(i,o)&&l(s,o,i[o]);if(d)for(var o of d(i))y.call(i,o)&&l(s,o,i[o]);return s},r=(s,i)=>h(s,u(i));import{c8 as A,cb as w,cc as p,V as v}from"./index.b87efa9c.js";import{c as a}from"./Notifications.79b82ee7.js";const n=A(),$=w("Dispositivos",{state:()=>({dispositivos:[],dispositivo:{}}),getters:{getDispositivos:s=>s.dispositivos,getDispositivo:s=>s.dispositivo,getOnlyIdDispositivos:s=>s.dispositivos.map(i=>i.id_dispositivo),getDispositivosSelect:s=>s.dispositivos.map(i=>r(g({},i),{label:`${i.num_serie_dispositivo} - ${i.marcas.nombre_marca} ${i.modelo}`,value:i.id_dispositivo}))},actions:{async getAllDispositivos(){const s=await n.getToken;if(s=="")return this.dispositivos;const{data:i}=await p.get("/dispositivos/",{headers:{Authorization:`Bearer ${s}`}});console.log("getAllDispositivos ACTIONS: ",i),this.dispositivos=i},async getTDById(s){const i=await n.getToken,{data:o}=await p.get(`/dispositivos/${s}`,{headers:{Authorization:`Bearer ${i}`}});console.log(o),this.dispositivo=o},async createDispositivo(s){const i=await n.getToken;await p.post("/dispositivos/add/",s,{headers:{Authorization:`Bearer ${i}`}}).then(o=>{a(`Dispositivo ${o.data.id_dispositivo} creado exitosamente!`,"positive"),console.log(o)}).catch(o=>{a(o.response.data.errors[0].message,"negative"),console.log("Error",o.response.data.message)}),this.getAllDispositivos()},async updateDispositivo(s,i){const o=await n.getToken;console.log("updateDispositivo actions:",s,i),await p.patch(`dispositivos/update/${s}`,i,{headers:{Authorization:`Bearer ${o}`}}).then(e=>{a(`Tipo Dispositivo ${e.data.id_dispositivo} actualizado exitosamente!`,"positive"),console.log(e)}).catch(e=>{a(e.response.data.errors[0].message,"negative"),console.log("Error",e.response.data.message)}),this.getAllDispositivos()},async deleteDispositivo(s){const i=await n.getToken;await p.delete(`dispositivos/delete/${s}`,{headers:{Authorization:`Bearer ${i}`}}).then(({data:o})=>{a(`Tipo Dispositivo ${o.id_dispositivo} eliminado exitosamente!`,"positive"),this.dispositivos=this.dispositivos.filter(e=>e.id_dispositivo!==s),console.log("deleteDispositivo ACTIONS: ",o)}).catch(o=>{console.log("deleteDispositivo ACTIONS: ",o.response.data.message),a(o.response.data.message,"negative"),console.log("Error",o.response.data.message)}),this.getAllDispositivos()}}}),f=()=>{const s=$();return{getAllDispositivos:async()=>{await s.getAllDispositivos()},getDispositivoById:async t=>{await s.getTDById(t)},createDispositivo:async t=>{console.log("createDispositivo ",t),await s.createDispositivo(t)},updateDispositivo:async(t,c)=>{console.log("updateDispositivo",t,c),await s.updateDispositivo(t,c)},deleteDispositivo:async t=>{console.log("deleteDispositivo useDispositivo: ",t),await s.deleteDispositivo(t)},getDispositivos:v(()=>s.getDispositivos),getDispositivo:v(()=>s.getDispositivo),getOnlyIdDispositivos:v(()=>s.getOnlyIdDispositivos),getDispositivosSelect:v(()=>s.getDispositivosSelect)}};export{f as u};
