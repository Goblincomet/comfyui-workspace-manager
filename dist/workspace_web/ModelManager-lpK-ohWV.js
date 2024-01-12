import{f as B,j as e,c as M,a as U,u as G,o as V,b as Y,d as K,r as o,l as $,H as w,I as q,B as O,e as I,C as J,g as X,S as Q,T as z,h as C,F as N,i as Z,k as F,M as ee,m as te,n as se,p as ne,q as oe,s as le,t as ae,v as re,w as ie,x as ce,y as de}from"./input.js";import{api as ue}from"/scripts/api.js";import{u as he}from"./chunk-6RSEZNRH-VBwaogZp.js";import"/scripts/app.js";var R=B(function(s,a){const{children:l,placeholder:c,className:n,...r}=s;return e.jsxs(M.select,{...r,ref:a,className:U("chakra-select",n),children:[c&&e.jsx("option",{value:"",children:c}),l]})});R.displayName="SelectField";function me(t,s){const a={},l={};for(const[c,n]of Object.entries(t))s.includes(c)?a[c]=n:l[c]=n;return[a,l]}var A=B((t,s)=>{var a;const l=G("Select",t),{rootProps:c,placeholder:n,icon:r,color:u,height:m,h:p,minH:i,minHeight:x,iconColor:y,iconSize:f,...g}=V(t),[S,h]=me(g,$),j=Y(h),b={width:"100%",height:"fit-content",position:"relative",color:u},d={paddingEnd:"2rem",...l.field,_focus:{zIndex:"unset",...(a=l.field)==null?void 0:a._focus}};return e.jsxs(M.div,{className:"chakra-select__wrapper",__css:b,...S,...c,children:[e.jsx(R,{ref:s,height:p??m,minH:i??x,placeholder:n,...j,__css:d,children:t.children}),e.jsx(H,{"data-disabled":K(j.disabled),...(y||u)&&{color:y||u},__css:l.icon,...f&&{fontSize:f},children:r})]})});A.displayName="Select";var pe=t=>e.jsx("svg",{viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),xe=M("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),H=t=>{const{children:s=e.jsx(pe,{}),...a}=t,l=o.cloneElement(s,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return e.jsx(xe,{...a,className:"chakra-select__icon-wrapper",children:o.isValidElement(s)?l:null})};H.displayName="SelectIcon";const k={x:0,y:0};function fe({children:t,onDragEnd:s}){const a=o.useRef(k),l=o.useRef(!1),[c,n]=o.useState(k),r=i=>{var x,y,f;if([(x=i.target)==null?void 0:x.id,(f=(y=i.target)==null?void 0:y.parentNode)==null?void 0:f.id].includes("dragPanelIcon")){a.current={x:i.clientX,y:i.clientY},l.current=!0,window.addEventListener("mousemove",u),window.addEventListener("mouseup",m);const g=document.getElementsByTagName("body")[0];g.style.userSelect="none"}},u=o.useCallback(i=>{const x={x:i.clientX-a.current.x,y:i.clientY-a.current.y};n(x)},[]),m=o.useCallback(()=>{n(x=>(s(x),k)),l.current=!1;const i=document.getElementsByTagName("body")[0];i.style.userSelect="auto",window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",m)},[s,u]),p={transform:`translate(${c.x}px, ${c.y}px)`,zIndex:l.current?1e3:1};return e.jsx("div",{style:p,onMouseDown:r,children:t})}const D=o.createContext({setRoute:()=>{}}),P=200;function ge({}){const[t,s]=o.useState({top:0,left:0});o.useEffect(()=>{const r=()=>{const u=localStorage.getItem("model_manager_position");if(u!=null){s(JSON.parse(u));return}s({left:window.innerWidth-P,top:0})};return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]);const[a,l]=o.useState(!1),{setRoute:c}=o.useContext(D),n=o.useCallback(r=>{const{top:u=0,left:m=0}=t||{};let{top:p=0,left:i=600}=r??{};p+=u,i+=m;const x=document.documentElement.clientWidth,y=document.documentElement.clientHeight,f=document.getElementById("modelManagerPanel"),g=(f==null?void 0:f.offsetWidth)||392;p+36>y&&(p=y-36),i+g>=x&&(i=x-g);const S={top:Math.max(0,p),left:Math.max(0,i)};s(S),localStorage.setItem("model_manager_position",JSON.stringify(S))},[t]);return e.jsx(fe,{onDragEnd:r=>{n({top:r.y,left:r.x})},children:e.jsxs(w,{width:`${P}px`,style:{padding:2,position:"fixed",...t},justifyContent:"flex-end",alignItems:"center",gap:2,draggable:!1,id:"modelManagerPanel",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[a?e.jsx(q,{id:"dragPanelIcon",cursor:"move",size:15,color:"#FFF",width:"20px"}):e.jsx(O,{width:"20px"}),e.jsx(I,{size:"sm","aria-label":"models",onClick:()=>c("models"),px:2,children:"Models"})]})})}const ye=async t=>{try{const s=await ue.fetchApi("/model_manager/install_model",{method:"POST",body:JSON.stringify(t)});console.log("install model response",s),window.dispatchEvent(new CustomEvent("model_install_message",{detail:"Please check the server for progress logs"}))}catch(s){console.error("Failed to connect to the server:",s)}};function L(t,s=1){var a=t/1048576;return Number(a.toFixed(s))}const T=280;function je({model:t,onClickInstallModel:s,installing:a}){var x,y,f,g,S;const l=(g=(f=(y=(x=t.modelVersions)==null?void 0:x.at(0))==null?void 0:y.images)==null?void 0:f.at(0))==null?void 0:g.url,c=t.modelVersions,n=c==null?void 0:c.map(h=>{var j;return(j=h==null?void 0:h.files)==null?void 0:j.at(0)}),[r,u]=o.useState(((S=n==null?void 0:n.at(0))==null?void 0:S.name)??""),m=n==null?void 0:n.find(h=>(h==null?void 0:h.name)===r),p=()=>{window.open(`https://civitai.com/models/${t.id}`)},i=o.useCallback(()=>{if(m==null){console.error("no file is find by name",r);return}s(m,t)},[r]);return e.jsxs(J,{width:T,justifyContent:"space-between",mb:2,gap:1,children:[e.jsx(X,{borderRadius:3,boxSize:T+"px",objectFit:"cover",src:l,alt:"model cover image",cursor:"pointer",onClick:()=>p()}),e.jsxs(Q,{p:1,children:[e.jsx(z,{label:t.name,children:e.jsx(C,{fontWeight:500,noOfLines:1,children:t.name})}),e.jsxs(N,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(I,{borderRadius:14,noOfLines:1,size:"xs",colorScheme:"teal",maxWidth:"40%",flexShrink:1,variant:"outline",px:1,cursor:"text",children:e.jsx(C,{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:t.type})}),e.jsx(I,{leftIcon:e.jsx(Z,{size:18}),iconSpacing:1,borderRadius:10,size:"sm",py:1,colorScheme:"teal",type:"submit",onClick:()=>i(),isDisabled:!!(r&&a.includes(r)),children:"Install"})]}),e.jsxs(w,{children:[e.jsx(A,{size:"md",style:{paddingLeft:4},onChange:h=>{u(h.target.value)},children:n==null?void 0:n.map(h=>{const j=h==null?void 0:h.name;return j?e.jsx("option",{value:j,style:{padding:0},children:j},h.id):null})}),(m==null?void 0:m.sizeKB)&&e.jsx(z,{label:L(m.sizeKB)+"GB",children:e.jsxs(C,{flexShrink:1,noOfLines:1,width:"40%",children:[L(m.sizeKB)," GB"]})})]})]})]})}function Se(){const[t,s]=o.useState(""),a=l=>{const r=l.detail.split(`
`).reverse().find(u=>u.trim()!=="");s(r??"")};return o.useEffect(()=>(window.addEventListener("model_install_message",a),()=>{window.removeEventListener("model_install_message",a)}),[]),e.jsx(w,{children:e.jsx(C,{fontWeight:"500",fontSize:18,py:2,children:t})})}function we({setSearchQuery:t}){const[s,a]=o.useState("");return e.jsxs(N,{gap:1,alignItems:"center",grow:1,children:[e.jsx(F,{placeholder:"Search models in CivitAI",width:"60%",value:s,onChange:l=>a(l.target.value),onKeyUp:l=>{l.code==="Enter"&&t(s)}}),e.jsx(I,{size:"sm",onClick:()=>t(s),colorScheme:"teal",children:"Search"})]})}const ve=["Checkpoint","TextualInversion","Hypernetwork","LORA","Controlnet","Upscaler","VAE"],Ie={Checkpoint:"checkpoints",TextualInversion:"embeddings",Hypernetwork:"hypernetworks",LORA:"loras",Controlnet:"controlnet",Upscaler:"upscale_models",VAE:"vae"};function Ce({onclose:t}){const[s,a]=o.useState([]),[l,c]=o.useState(!1),[n,r]=o.useState([]),[u,m]=o.useState(!1),[p,i]=o.useState("Checkpoint"),x=he(),[y,f]=o.useState([]),[g,S]=o.useState(""),h=o.useCallback(async()=>{m(!0);const d={limit:"30",nsfw:"false",types:p};g!==""&&(d.query=g);const v=`https://civitai.com/api/v1/models?${new URLSearchParams(d).toString()}`,W=await(await fetch(v)).json();r(W.items),m(!1)},[g,p]),j=(d,E)=>{if(d.downloadUrl==null||d.name==null){console.error("file.downloadUrl or file.name is null");return}let v=Ie[E.type];v==null&&(v=prompt("What's the folder path under /ComfyUI/models you want to save the model? ")),v!=null&&(x({title:"Installing...Please check the progress in your python server console",description:d.name,status:"info",duration:4e3,isClosable:!0}),d.name!=null&&f(_=>[..._,d.name??""]),ye({filename:d.name,name:d.name,save_path:v,url:d.downloadUrl}))};o.useEffect(()=>{h()},[g,p]);const b=n.length>0&&s.length===n.length;return e.jsxs(ee,{isOpen:!0,onClose:t,blockScrollOnMount:!0,children:[e.jsx(te,{}),e.jsxs(se,{width:"90%",maxWidth:"90vw",height:"90vh",children:[e.jsxs(ne,{children:[e.jsxs(w,{gap:2,mb:2,alignItems:"center",children:[e.jsx(oe,{size:"md",mr:2,children:"Models"}),e.jsx(we,{setSearchQuery:S})]}),e.jsx(Se,{}),e.jsxs(w,{gap:2,mb:2,wrap:"wrap",children:[e.jsx(I,{size:"sm",py:1,onClick:()=>{i(void 0)},isActive:p==null,children:"All"}),ve.map(d=>e.jsx(I,{size:"sm",py:1,isActive:p===d,onClick:()=>{i(d)},children:d}))]}),l&&e.jsxs(w,{gap:3,children:[e.jsx(le,{isChecked:b,children:"All"}),e.jsxs(C,{fontSize:16,children:[s.length," Selected"]}),e.jsx(ae,{size:"sm",icon:e.jsx(re,{size:19}),onClick:()=>c(!1),"aria-label":"cancel"})]})]}),e.jsx(ie,{}),e.jsxs(ce,{overflowY:"auto",children:[u&&e.jsx(de,{thickness:"4px",emptyColor:"gray.200",color:"pink.500",size:"lg"}),e.jsx(w,{wrap:"wrap",children:n==null?void 0:n.map(d=>e.jsx(je,{model:d,onClickInstallModel:j,installing:y},d.id))})]})]})]})}function _e(){const[t,s]=o.useState("root");return e.jsx(D.Provider,{value:{setRoute:s},children:e.jsxs(O,{style:{width:"100vh",position:"absolute",top:0,left:0,right:0},zIndex:1e3,draggable:!1,children:[e.jsx(ge,{}),t==="models"&&e.jsx(Ce,{onclose:()=>s("root")})]})})}export{_e as default};
