"use strict";(self.webpackChunksunshine=self.webpackChunksunshine||[]).push([[870],{80870:(x,c,t)=>{t.d(c,{ProtectedListView:()=>dt});var s=t(92132),d=t(21272),U=t(38413),B=t(55356),i=t(25815),D=t(4198),o=t(55506),r=t(5194),a=t(5409),P=t(54894),e=t(17703),W=t(93169),p=t(44417),C=t(99831),K=t(22185),j=t(15126),$=t(63299),F=t(67014),V=t(59080),Y=t(79275),H=t(14718),u=t(82437),G=t(61535),Q=t(5790),J=t(12083),X=t(35223),n=t(74930),E=t(2600),T=t(48940),O=t(41286),A=t(56336),M=t(13426),l=t(84624),L=t(77965),m=t(54257),y=t(71210),Z=t(51187),w=t(39404),b=t(58692),q=t(501),tt=t(57646),_=t(23120),st=t(44414),S=t(25962),Tt=t(14664),Ot=t(42588),At=t(90325),mt=t(62785),ct=t(87443),It=t(41032),gt=t(22957),Ct=t(93179),Lt=t(73055),ht=t(15747),vt=t(85306),Rt=t(26509),Ut=t(32058),Bt=t(81185),Wt=t(82261);const ot=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],Et=()=>{(0,o.L4)();const{formatMessage:I}=(0,P.A)(),h=(0,o.hN)(),it=(0,W.j)(g=>g.admin_app.permissions.settings?.["api-tokens"]),{allowedActions:{canCreate:k,canDelete:rt,canUpdate:lt,canRead:v}}=(0,o.ec)(it),{push:at}=(0,e.W6)(),{trackUsage:f}=(0,o.z1)(),{startSection:et}=(0,o.Cx)(),{_unstableFormatAPIError:N}=(0,o.wq)();d.useEffect(()=>{et("apiTokens")},[et]),d.useEffect(()=>{at({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[at]);const Pt=ot.map(g=>({...g,metadatas:{...g.metadatas,label:I(g.metadatas.label)}}));(0,W.b)(()=>{f("willAccessTokenList",{tokenType:C.A})});const{data:R=[],isLoading:nt,error:z}=(0,p.u)(void 0,{skip:!v});d.useEffect(()=>{z&&h({type:"warning",message:N(z)})},[z,N,h]),d.useEffect(()=>{f("didAccessTokenList",{number:R.length,tokenType:C.A})},[R,f]);const[Mt]=(0,p.a)(),Dt=async g=>{try{const _t=await Mt(g);if("error"in _t){h({type:"warning",message:N(_t.error)});return}f("didDeleteToken")}catch{h({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}};return(0,s.jsxs)(U.g,{"aria-busy":nt,children:[(0,s.jsx)(o.x7,{name:"API Tokens"}),(0,s.jsx)(B.Q,{title:I({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:I({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:k&&(0,s.jsx)(i.z,{"data-testid":"create-api-token-button",startIcon:(0,s.jsx)(r.A,{}),size:"S",onClick:()=>f("willAddTokenFromList",{tokenType:C.A}),to:"/settings/api-tokens/create",children:I({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})})}),(0,s.jsxs)(D.s,{children:[!v&&(0,s.jsx)(o.UW,{}),v&&R.length>0&&(0,s.jsx)(K.T,{permissions:{canRead:v,canDelete:rt,canUpdate:lt},headers:Pt,contentType:"api-tokens",isLoading:nt,onConfirmDelete:Dt,tokens:R,tokenType:C.A}),v&&k&&R.length===0&&(0,s.jsx)(o.R1,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:(0,s.jsx)(i.z,{variant:"secondary",startIcon:(0,s.jsx)(r.A,{}),to:"/settings/api-tokens/create",children:I({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"})})}),v&&!k&&R.length===0&&(0,s.jsx)(o.R1,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},dt=()=>{const I=(0,W.j)(h=>h.admin_app.permissions.settings?.["api-tokens"].main);return(0,s.jsx)(o.kz,{permissions:I,children:(0,s.jsx)(Et,{})})}},22185:(x,c,t)=>{t.d(c,{T:()=>V});var s=t(92132),d=t(21272),U=t(25641),B=t(90361),i=t(33363),D=t(30893),o=t(83997),r=t(94061),a=t(88353),P=t(21610),e=t(55506),W=t(50612),p=t(83925),C=t(41909),K=t(54894),j=t(17703),$=t(71389),F=t(63891);const V=({permissions:n,headers:E=[],contentType:T,isLoading:O=!1,tokens:A=[],onConfirmDelete:M,tokenType:l})=>{const{canDelete:L,canUpdate:m,canRead:y}=n;return(0,s.jsx)(e.Ee,{headers:E,contentType:T,rows:A,withBulkActions:L||m||y,isLoading:O,onConfirmDelete:M,children:(0,s.jsx)(Y,{tokenType:l,permissions:n,onConfirmDelete:M})})},Y=({tokenType:n,permissions:E,rows:T=[],withBulkActions:O,onConfirmDelete:A})=>{const{canDelete:M,canUpdate:l,canRead:L}=E,[{query:m}]=(0,e.sq)(),{formatMessage:y}=(0,K.A)(),[,Z]=m&&m.sort?m.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,j.W6)(),{trackUsage:q}=(0,e.z1)(),tt=[...T].sort((_,st)=>{const S=_.name.localeCompare(st.name);return Z==="DESC"?-S:S});return(0,s.jsx)(U.N,{children:tt.map(_=>(0,s.jsxs)(B.Tr,{...(0,e.qM)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${_.id}`)},condition:l}),children:[(0,s.jsx)(i.Td,{maxWidth:(0,e.a8)(250),children:(0,s.jsx)(D.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,s.jsx)(i.Td,{maxWidth:(0,e.a8)(250),children:(0,s.jsx)(D.o,{textColor:"neutral800",ellipsis:!0,children:_.description})}),(0,s.jsx)(i.Td,{children:(0,s.jsx)(D.o,{textColor:"neutral800",children:(0,s.jsx)(e.sR,{timestamp:new Date(_.createdAt)})})}),(0,s.jsx)(i.Td,{children:_.lastUsedAt&&(0,s.jsx)(D.o,{textColor:"neutral800",children:(0,s.jsx)(e.sR,{timestamp:new Date(_.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),O&&(0,s.jsx)(i.Td,{children:(0,s.jsxs)(o.s,{justifyContent:"end",children:[l&&(0,s.jsx)(X,{tokenName:_.name,tokenId:_.id}),!l&&L&&(0,s.jsx)(J,{tokenName:_.name,tokenId:_.id}),M&&(0,s.jsx)(Q,{tokenName:_.name,onClickDelete:()=>A?.(_.id),tokenType:n})]})})]},_.id))})},H={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},u=({tokenName:n,tokenId:E,buttonType:T="edit",children:O})=>{const{formatMessage:A}=(0,K.A)(),{location:{pathname:M}}=(0,j.W6)();return(0,s.jsx)(G,{forwardedAs:$.k2,to:`${M}/${E}`,title:A(H[T],{target:n}),children:O})},G=(0,F.Ay)(P.N)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,Q=({tokenName:n,onClickDelete:E,tokenType:T})=>{const{formatMessage:O}=(0,K.A)(),{trackUsage:A}=(0,e.z1)(),[M,l]=d.useState(!1),L=()=>{l(!1),A("willDeleteToken",{tokenType:T}),E()};return(0,s.jsxs)(r.a,{paddingLeft:1,onClick:m=>m.stopPropagation(),children:[(0,s.jsx)(a.K,{onClick:()=>{l(!0)},label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,s.jsx)(W.A,{})}),(0,s.jsx)(e.TM,{onToggleDialog:()=>l(!1),onConfirm:L,isOpen:M})]})},J=({tokenName:n,tokenId:E})=>(0,s.jsx)(u,{tokenName:n,tokenId:E,buttonType:"read",children:(0,s.jsx)(p.A,{})}),X=({tokenName:n,tokenId:E})=>(0,s.jsx)(u,{tokenName:n,tokenId:E,children:(0,s.jsx)(C.A,{width:12})})},44417:(x,c,t)=>{t.d(c,{a:()=>D,b:()=>B,c:()=>i,d:()=>o,u:()=>U});var s=t(93169);const d=s.n.injectEndpoints({endpoints:r=>({getAPITokens:r.query({query:()=>"/admin/api-tokens",transformResponse:a=>a.data,providesTags:(a,P)=>[...a?.map(({id:e})=>({type:"ApiToken",id:e}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:r.query({query:a=>`/admin/api-tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,P,e)=>[{type:"ApiToken",id:e}]}),createAPIToken:r.mutation({query:a=>({url:"/admin/api-tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:r.mutation({query:a=>({url:`/admin/api-tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,P,e)=>[{type:"ApiToken",id:e}]}),updateAPIToken:r.mutation({query:({id:a,...P})=>({url:`/admin/api-tokens/${a}`,method:"PUT",data:P}),transformResponse:a=>a.data,invalidatesTags:(a,P,{id:e})=>[{type:"ApiToken",id:e}]})}),overrideExisting:!1}),{useGetAPITokensQuery:U,useGetAPITokenQuery:B,useCreateAPITokenMutation:i,useDeleteAPITokenMutation:D,useUpdateAPITokenMutation:o}=d},99831:(x,c,t)=>{t.d(c,{A:()=>s,T:()=>d});const s="api-token",d="transfer-token"}}]);
