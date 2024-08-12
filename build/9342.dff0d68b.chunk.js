"use strict";(self.webpackChunksunshine=self.webpackChunksunshine||[]).push([[9342],{79342:(N,W,s)=>{s.d(W,{ProtectedEditView:()=>H,w:()=>V});var n=s(92132),D=s(21272),L=s(38413),R=s(4198),p=s(83997),u=s(94061),K=s(30893),T=s(90151),e=s(68074),M=s(55356),E=s(85963),a=s(55506),$=s(54514),G=s(61535),y=s(54894),x=s(17703),g=s(12083),I=s(93169),j=s(50702),h=s(99831),O=s(39961),as=s(15126),rs=s(63299),os=s(67014),_s=s(59080),is=s(79275),Es=s(14718),ds=s(82437),ls=s(5790),Ts=s(35223),Ms=s(5409),Ps=s(74930),Ds=s(2600),Os=s(48940),ms=s(41286),fs=s(56336),cs=s(13426),gs=s(84624),hs=s(77965),vs=s(54257),As=s(71210),Cs=s(51187),Ls=s(39404),Rs=s(58692),ps=s(501),Is=s(57646),Us=s(23120),Bs=s(44414),Ws=s(25962),us=s(14664),Ks=s(42588),ys=s(90325),xs=s(62785),js=s(87443),ks=s(41032),Ss=s(22957),Vs=s(93179),Fs=s(73055),zs=s(15747),Ys=s(85306),Ns=s(26509),$s=s(32058),Gs=s(81185),Qs=s(82261);const Q=g.Ik().shape({name:g.Yj().max(100).required(a.iW.required),description:g.Yj().nullable(),lifespan:g.ai().integer().min(0).nullable().defined(a.iW.required),permissions:g.Yj().required(a.iW.required)}),V=()=>{(0,a.L4)();const{formatMessage:o}=(0,y.A)(),{lockApp:_,unlockApp:v}=(0,a.MA)(),d=(0,a.hN)(),m=(0,x.W6)(),{state:A}=(0,x.zy)(),[r,f]=D.useState(A&&"accessKey"in A.transferToken?{...A.transferToken}:null),{trackUsage:P}=(0,a.z1)(),{setCurrentStep:Z}=(0,a.Cx)(),w=(0,I.j)(i=>i.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:b,canUpdate:q,canRegenerate:ss}}=(0,a.ec)(w),U=(0,x.W5)("/settings/transfer-tokens/:id")?.params?.id,l=U==="create",{_unstableFormatAPIError:B,_unstableFormatValidationErrors:F}=(0,a.wq)();D.useEffect(()=>{P(l?"didAddTokenFromList":"didEditTokenFromList",{tokenType:h.T})},[l,P]);const{data:k,error:S}=(0,j.u)(U,{skip:l||r!==null||!U});D.useEffect(()=>{S&&d({type:"warning",message:B(S)})},[S,B,d]),D.useEffect(()=>{k&&f(k)},[k]);const[ns]=(0,j.a)(),[es]=(0,j.b)(),ts=async(i,c)=>{P(l?"willCreateToken":"willEditToken",{tokenType:h.T}),_();const C=i.permissions.split("-");if((t=>t.length===1?t[0]==="push"||t[0]==="pull":t[0]==="push"&&t[1]==="pull")(C))try{if(l){const t=await ns({...i,lifespan:i?.lifespan||null,permissions:C});if("error"in t){(0,I.x)(t.error)&&t.error.name==="ValidationError"?c.setErrors(F(t.error)):d({type:"warning",message:B(t.error)});return}f(t.data),d({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),P("didCreateToken",{type:r?.permissions,tokenType:h.T}),m.push(`/settings/transfer-tokens/${t.data.id}`,{transferToken:t.data}),Z("transferTokens.success")}else{const t=await es({id:U,name:i.name,description:i.description,permissions:C});if("error"in t){(0,I.x)(t.error)&&t.error.name==="ValidationError"?c.setErrors(F(t.error)):d({type:"warning",message:B(t.error)});return}f(t.data),d({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),P("didEditToken",{type:r?.permissions,tokenType:h.T})}}catch{d({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{v()}},z=q&&!l||b&&l;return!l&&!r?(0,n.jsx)(J,{}):(0,n.jsxs)(L.g,{children:[(0,n.jsx)(a.x7,{name:"Transfer Tokens"}),(0,n.jsx)(G.l1,{validationSchema:Q,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",lifespan:r?.lifespan||null,permissions:r?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(i,c)=>ts(i,c),children:({errors:i,handleChange:c,isSubmitting:C,values:Y})=>(0,n.jsxs)(a.lV,{children:[(0,n.jsx)(O.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:r,setToken:f,canEditInputs:z,canRegenerate:ss,isSubmitting:C,regenerateUrl:"/admin/transfer/tokens/"}),(0,n.jsx)(R.s,{children:(0,n.jsxs)(p.s,{direction:"column",alignItems:"stretch",gap:6,children:[r&&Boolean(r?.name)&&"accessKey"in r&&(0,n.jsx)(O.c,{token:r.accessKey,tokenType:h.T}),(0,n.jsx)(X,{errors:i,onChange:c,canEditInputs:z,isCreating:l,values:Y,transferToken:r})]})})]})})]})},H=()=>{const o=(0,I.j)(_=>_.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,n.jsx)(a.kz,{permissions:o,children:(0,n.jsx)(V,{})})},X=({errors:o={},onChange:_,canEditInputs:v,isCreating:d,values:m,transferToken:A={}})=>{const{formatMessage:r}=(0,y.A)(),f=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,n.jsx)(u.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,n.jsxs)(p.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,n.jsx)(K.o,{variant:"delta",as:"h2",children:r({id:"global.details",defaultMessage:"Details"})}),(0,n.jsxs)(T.x,{gap:5,children:[(0,n.jsx)(e.E,{col:6,xs:12,children:(0,n.jsx)(O.T,{error:o.name,value:m.name,canEditInputs:v,onChange:_})},"name"),(0,n.jsx)(e.E,{col:6,xs:12,children:(0,n.jsx)(O.a,{error:o.description,value:m.description,canEditInputs:v,onChange:_})},"description"),(0,n.jsx)(e.E,{col:6,xs:12,children:(0,n.jsx)(O.L,{isCreating:d,error:o.lifespan,value:m.lifespan,onChange:_,token:A})},"lifespan"),(0,n.jsx)(e.E,{col:6,xs:12,children:(0,n.jsx)(O.b,{name:"permissions",value:m.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:P=>{_({target:{name:"permissions",value:P}})},options:f,canEditInputs:v})},"permissions")]})]})})},J=({transferTokenName:o})=>{const{formatMessage:_}=(0,y.A)();return(0,a.L4)(),(0,n.jsxs)(L.g,{"aria-busy":"true",children:[(0,n.jsx)(a.x7,{name:"Transfer Tokens"}),(0,n.jsx)(M.Q,{primaryAction:(0,n.jsx)(E.$,{disabled:!0,startIcon:(0,n.jsx)($.A,{}),type:"button",size:"L",children:_({id:"global.save",defaultMessage:"Save"})}),title:o||_({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,n.jsx)(R.s,{children:(0,n.jsx)(a.Bl,{})})]})}},50702:(N,W,s)=>{s.d(W,{a:()=>p,b:()=>K,c:()=>L,d:()=>u,u:()=>R});var n=s(93169);const D=n.n.injectEndpoints({endpoints:T=>({getTransferTokens:T.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:e=>e.data,providesTags:(e,M)=>[...e?.map(({id:E})=>({type:"TransferToken",id:E}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:T.query({query:e=>`/admin/transfer/tokens/${e}`,transformResponse:e=>e.data,providesTags:(e,M,E)=>[{type:"TransferToken",id:E}]}),createTransferToken:T.mutation({query:e=>({url:"/admin/transfer/tokens",method:"POST",data:e}),transformResponse:e=>e.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:T.mutation({query:e=>({url:`/admin/transfer/tokens/${e}`,method:"DELETE"}),transformResponse:e=>e.data,invalidatesTags:(e,M,E)=>[{type:"TransferToken",id:E}]}),updateTransferToken:T.mutation({query:({id:e,...M})=>({url:`/admin/transfer/tokens/${e}`,method:"PUT",data:M}),transformResponse:e=>e.data,invalidatesTags:(e,M,{id:E})=>[{type:"TransferToken",id:E}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:L,useGetTransferTokenQuery:R,useCreateTransferTokenMutation:p,useDeleteTransferTokenMutation:u,useUpdateTransferTokenMutation:K}=D}}]);
