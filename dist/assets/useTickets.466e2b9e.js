import{c8 as g,ca as d,cb as c,V as k}from"./index.5404b0db.js";import{c as i}from"./Notifications.cd9f2894.js";const n=g(),r=d("tickets",{state:()=>({tickets:[],ticket:{},estados:[]}),getters:{getTickets:e=>e.tickets,getTicket:e=>e.ticket,getEstados:e=>e.estados},actions:{async getAllTickets(){const e=n.getToken;if(e=="")return this.tickets;const{data:s}=await c.get("/tickets",{headers:{Authorization:`Bearer ${e}`}});console.log("getAllTickets ACTIONS: ",s),this.tickets=s},async getTicketById(e){const s=n.getToken,{data:t}=await c.get(`/tickets/${e}`,{headers:{Authorization:`Bearer ${s}`}});console.log(t),this.cliente=t},async getEstadosTickets(){const e=await n.getToken,{data:s}=await c.get("tickets/estados/",{headers:{Authorization:`Bearer ${e}`}});console.log("getEstados: ",s),this.estados=s},async createTicket(e){const s=await n.getToken;await c.post("/tickets/add/",e,{headers:{Authorization:`Bearer ${s}`}}).then(t=>{console.log(t.data.id_ticket),i(`Ticket ${t.data.id_ticket} creado exitosamente!`,"positive"),console.log(t)}).catch(t=>{i(t.response.data,"negative"),console.log("Error",t.response.data.message)}),this.getAllTickets()},async updateTicket(e,s){const t=n.getToken;console.log("updateticket actions:",e,s),await c.put(`tickets/update/${e}`,s,{headers:{Authorization:`Bearer ${t}`}}).then(o=>{i(`Cliente ${o.data.id_ticket} actualizado exitosamente!`,"positive"),console.log(o)}).catch(o=>{i(o.response.data.errors[0].message,"negative"),console.log("Error",o.response.data.message)}),this.getAllTickets()},async deleteTicket(e){const s=n.getToken;await c.delete(`tickets/delete/${e}`,{headers:{Authorization:`Bearer ${s}`}}).then(({data:t})=>{i(`Ticket ${t.id} eliminado exitosamente!`,"negative"),console.log("antes ",this.tickets),this.tickets=this.tickets.filter(o=>o.id_ticket!==e),console.log("despues",this.tickets),console.log("deleteTicket ACTIONS: ",t)}).catch(t=>{console.log("deleteTicket ACTIONS: ",t.response.data.message),i(t.response.data.message,"negative"),console.log("Error",t.response.data.message)})}}}),y=()=>{const e=r();return{getAllTickets:async()=>{await e.getAllTickets()},getTicketById:async a=>{await e.getTicketById(a)},createTicket:async a=>{console.log("createTicket ",a),await e.createTicket(a)},updateTicket:async(a,l)=>{console.log("updateTicket",a,l),await e.updateTicket(a,l)},deleteTicket:async a=>{console.log("deleteTicket useTicket: ",a),await e.deleteTicket(a)},getAllEstados:async()=>{await e.getEstadosTickets()},getTickets:k(()=>e.getTickets),getTicket:k(()=>e.getTicket),getEstadosTicket:k(()=>e.getEstados)}};export{y as u};
