import{s as f,A as h,Y as k,C as l,E as y,F as t,Q as V,o,N as b,P as c,J as d,D as i,O as w,H as A}from"./index-25cb404b.js";import{V as g,a as u,b as x}from"./VRow-967ca939.js";import{V as B}from"./VDataTable-7b8550ef.js";import"./VList-abf4fde2.js";import"./ssrBoot-747246da.js";import"./VDivider-ab78a0b3.js";import"./VCheckboxBtn-ed0ee228.js";const C=d("h1",null,"訂單",-1),O={__name:"OrdersView",setup(D){const{apiAuth:m}=V(),p=f(),n=h([]),_=[{title:"訂單編號",key:"_id"},{title:"日期",key:"createdAt"},{title:"師傅",key:"cart",sortable:!1},{title:"金額",key:"price",value:a=>a.cart.reduce((s,e)=>s+e.quantity*e.product.price,0)}];return k(async()=>{var a,s;try{const{data:e}=await m.get("/orders");n.value.push(...e.result)}catch(e){const r=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";p({text:r,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(a,s)=>(l(),y(g,null,{default:t(()=>[o(x,null,{default:t(()=>[o(u,{cols:"12"},{default:t(()=>[C]),_:1}),o(u,{cols:"12"},{default:t(()=>[o(B,{items:n.value,headers:_},{"item.createdAt":t(({item:e})=>[b(c(new Date(e.createdAt).toLocaleString()),1)]),"item.cart":t(({item:e})=>[d("ul",null,[(l(!0),i(A,null,w(e.cart,r=>(l(),i("li",{key:r._id},c(r.product.name)+" * "+c(r.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{O as default};