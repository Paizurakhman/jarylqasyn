import{_ as p,u as N,o as n,c as d,a as e,t as h,p as m,b as f,F as S,r as I,n as P,d as F,e as u,f as V,w as g,g as M,T as C,h as L,i as q,j as T,k,v as U,l as J,m as v,q as j,s as E}from"./index-c93178de.js";const O="/wedding-invitation/assets/music-0e31c9c2.mp3";const R={name:"InvitationSection",setup(){const s=N(),{name:o}=s.query;return{name:o}}},w=s=>(m("data-v-a76a92a5"),s=s(),f(),s),z={class:"invitation-section"},W={class:"container"},G={class:"invitation-text"},K={key:0},Q={key:1},X=w(()=>e("div",{class:"invitation-text"},[e("h2",null,"Сіз(дер)ді балаларымыз")],-1)),Y=w(()=>e("div",{class:"name"},[e("h2",null,"Жарылқасын мен Айзат тың")],-1)),Z=w(()=>e("div",{class:"invitation-text"},[e("h2",null," үйлену тойына арналған ақ дастарханымыздың қадірлі қонағы болуға шақырамыз! ")],-1));function ee(s,o,a,t,i,l){return n(),d("div",z,[e("div",W,[e("div",G,[t.name?(n(),d("h2",K,"Құрметті "+h(t.name)+"!",1)):(n(),d("h2",Q,"Құрметті! ағайын-туыс, бауырлар, құда-жекжат, дос-жаран, әріптестер!"))]),X,Y,Z])])}const se=p(R,[["render",ee],["__scopeId","data-v-a76a92a5"]]);const te={name:"CalendarSection"},A=s=>(m("data-v-1f18e94a"),s=s(),f(),s),oe={class:"calendar-section"},ae={class:"container"},ne={class:"calendar"},de=A(()=>e("div",{class:"calendar-header"},[e("span",{class:"calendar-month"},"January ")],-1)),ce={class:"calendar-body"},ie=A(()=>e("div",{class:"calendar-weekday"},[e("div",null,"Д"),e("div",null,"С"),e("div",null,"С"),e("div",null,"Б"),e("div",null,"Ж"),e("div",null,"С"),e("div",null,"Ж")],-1)),le={class:"calendar-days"};function _e(s,o,a,t,i,l){return n(),d("div",oe,[e("div",ae,[e("div",ne,[de,e("div",ce,[ie,e("div",le,[(n(),d(S,null,I(31,_=>e("div",{key:_,class:P({active:_===20})},h(_),3)),64))])])])])])}const re=p(te,[["render",_e],["__scopeId","data-v-1f18e94a"]]),ue="/wedding-invitation/assets/wave-top-a8e17bb0.svg",ve="/wedding-invitation/assets/wave-bottom-ba4ecb5b.svg";const pe={name:"PhotoSection"},he=s=>(m("data-v-5b21ffac"),s=s(),f(),s),me={class:"photo-section"},fe=he(()=>e("div",{class:"bg-photo"},[e("img",{src:ue,alt:""}),e("img",{src:ve,alt:""})],-1)),$e=[fe];function be(s,o,a,t,i,l){return n(),d("div",me,$e)}const ye=p(pe,[["render",be],["__scopeId","data-v-5b21ffac"]]);const Se={name:"InfoSection"},ge={class:"info-section"},we=F('<div class="container" data-v-32b3ad70><h2 data-v-32b3ad70>Өтетін уақыты мен мекен-жайымыз</h2><div class="row" data-v-32b3ad70><div class="col-xl-4 col-12 py-4" data-v-32b3ad70><div class="title" data-v-32b3ad70>Уақыты:</div><div class="subtitle" data-v-32b3ad70>20 Қаңтар 20:00</div></div><div class="col-xl-4 col-12 py-4" data-v-32b3ad70><div class="title" data-v-32b3ad70>Мекен-жайымыз:</div><div class="subtitle" data-v-32b3ad70>Ақтөбе қаласы, Проспект Кенес Нокина, 44д</div></div><div class="col-xl-4 col-12 py-4" data-v-32b3ad70><div class="title" data-v-32b3ad70>Мейрамхана:</div><div class="subtitle" data-v-32b3ad70>White Hill Мейрамханасы </div></div></div><h2 data-v-32b3ad70>Той иелері:</h2><div class="name" data-v-32b3ad70> Махамбет &amp; Базаргүл </div><div class="invite-text" data-v-32b3ad70> Тойымыздың қадірлі қонағы болыңыздар! </div></div>',1),xe=[we];function ke(s,o,a,t,i,l){return n(),d("div",ge,xe)}const Ie=p(Se,[["render",ke],["__scopeId","data-v-32b3ad70"]]);const Ve={name:"CountdownSection",setup(){const s=u("0"),o=u("0"),a=u("0"),t=u("0"),i=new Date("Jan 20, 2024 20:00:00").getTime(),l=setInterval(()=>{let _=new Date().getTime(),c=i-_;const $=Math.floor(c/(1e3*60*60*24)),D=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),B=Math.floor(c%(1e3*60*60)/(1e3*60)),H=Math.floor(c%(1e3*60)/1e3);s.value=$.toString().padStart(2,"0"),o.value=D.toString().padStart(2,"0"),a.value=B.toString().padStart(2,"0"),t.value=H.toString().padStart(2,"0"),c/1e3<1&&clearInterval(l)},1e3);return{days:s,hours:o,minutes:a,seconds:t}}},r=s=>(m("data-v-29022443"),s=s(),f(),s),Me={class:"countdown"},Ce={class:"container"},Te={class:"countdown-content"},Ae={class:"countdown__item"},De=r(()=>e("p",{class:"desktop"},"Days",-1)),Be=r(()=>e("p",{class:"mobile"},"D",-1)),He=r(()=>e("li",{class:"divider"},[e("span",null,":")],-1)),Ne={class:"countdown__item"},Pe=r(()=>e("p",{class:"desktop"},"Hours",-1)),Fe=r(()=>e("p",{class:"mobile"},"H",-1)),Le=r(()=>e("li",{class:"divider"},[e("span",null,":")],-1)),qe={class:"countdown__item"},Ue=r(()=>e("p",{class:"desktop"},"Minutes",-1)),Je=r(()=>e("p",{class:"mobile"},"M",-1)),je=r(()=>e("li",{class:"divider"},[e("span",null,":")],-1)),Ee={class:"countdown__item"},Oe=r(()=>e("p",{class:"desktop"},"Seconds",-1)),Re=r(()=>e("p",{class:"mobile"},"S",-1));function ze(s,o,a,t,i,l){return n(),d("div",Me,[e("div",Ce,[e("div",Te,[e("ul",null,[e("li",Ae,[e("div",null,h(t.days),1),De,Be]),He,e("li",Ne,[e("div",null,h(t.hours),1),Pe,Fe]),Le,e("li",qe,[e("div",null,h(t.minutes),1),Ue,Je]),je,e("li",Ee,[e("div",null,h(t.seconds),1),Oe,Re])])])])])}const We=p(Ve,[["render",ze],["__scopeId","data-v-29022443"]]);const Ge={name:"Modal",props:{modelValue:{type:Boolean,default:!1}}},b=s=>(m("data-v-97715c6b"),s=s(),f(),s),Ke={key:0,class:"modal"},Qe={class:"envelope-container"},Xe=b(()=>e("label",{class:"flap",for:"flap"},null,-1)),Ye=b(()=>e("div",{class:"envelope-back"},null,-1)),Ze=b(()=>e("div",{class:"card"},"Thanks!",-1)),es=b(()=>e("div",{class:"card-front"},null,-1));function ss(s,o,a,t,i,l){return n(),V(C,{name:"modal"},{default:g(()=>[a.modelValue?(n(),d("div",Ke,[e("div",Qe,[e("input",{id:"flap",type:"checkbox",onInput:o[0]||(o[0]=_=>s.$emit("update:modelValue",!1))},null,32),Xe,Ye,Ze,es])])):M("",!0)]),_:1})}const ts=p(Ge,[["render",ss],["__scopeId","data-v-97715c6b"]]);const os={name:"AcceptModal",props:{modelValue:{type:Boolean,default:!1}}},y=s=>(m("data-v-7849b305"),s=s(),f(),s),as={key:0,class:"accept-modal"},ns={class:"accept-modal__container"},ds=y(()=>e("p",{class:"accept-modal__success"},[e("span",{class:"icon"},[e("i",{class:"fa-solid fa-check"})]),e("span",null,"Рақмет! Деректер сәтті жіберілді.")],-1)),cs=y(()=>e("div",{class:"box"},null,-1)),is={class:"box"},ls=y(()=>e("div",{class:"box"},null,-1)),_s=y(()=>e("div",{class:"box"},null,-1));function rs(s,o,a,t,i,l){return n(),V(C,{name:"accept-modal"},{default:g(()=>[a.modelValue?(n(),d("div",as,[e("div",ns,[ds,cs,e("div",is,[e("span",{class:"close",onClick:o[0]||(o[0]=_=>s.$emit("update:modelValue",!1))})]),ls,_s])])):M("",!0)]),_:1})}const us=p(os,[["render",rs],["__scopeId","data-v-7849b305"]]);const vs={name:"AcceptForm",components:{AcceptModal:us},setup(){const s=L({name:"",field:""}),o=u(""),a=u(!1),t=u(!1),i=[{id:1,label:"Келемін"},{id:2,label:"Жұбыммен келемін"},{id:3,label:"Өкінішке орай келе алмаймын"}],l=q(()=>s.name&&s.field);return{acceptList:i,state:s,isSuccess:a,isDisable:l,errorText:o,isLoading:t,onSubmit:async()=>{if(!l.value){o.value="Біреуін таңдаңыз!";return}t.value=!0,await fetch("https://sheetdb.io/api/v1/ckn3a1v071r22",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(()=>{a.value=!0,s.name="",s.field="",o.value=""}).finally(()=>{t.value=!1})}}}},ps=s=>(m("data-v-d5b2d87d"),s=s(),f(),s),hs={class:"container"},ms=ps(()=>e("p",null," Тойға келетініңізді 10.01.2024ж дейін растауыңызды сұраймыз ",-1)),fs=["value"],$s={class:"error"},bs={class:"submit"},ys={key:0,class:"loader"},Ss={key:1};function gs(s,o,a,t,i,l){const _=T("AcceptModal");return n(),d(S,null,[e("form",{class:"accept-form",onSubmit:o[2]||(o[2]=J((...c)=>t.onSubmit&&t.onSubmit(...c),["prevent"]))},[e("div",hs,[ms,k(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=c=>t.state.name=c),placeholder:"Аты жөніңіз",class:"input-name",required:""},null,512),[[U,t.state.name]]),(n(!0),d(S,null,I(t.acceptList,c=>(n(),d("label",null,[k(e("input",{type:"radio","onUpdate:modelValue":o[1]||(o[1]=$=>t.state.field=$),value:c.label,required:""},null,8,fs),[[j,t.state.field]]),E(" "+h(c.label),1)]))),256)),e("span",$s,h(t.errorText),1),e("div",bs,[e("button",null,[t.isLoading?(n(),d("span",ys)):(n(),d("span",Ss,"Жіберу"))])])])],32),v(_,{modelValue:t.isSuccess,"onUpdate:modelValue":o[3]||(o[3]=c=>t.isSuccess=c)},null,8,["modelValue"])],64)}const ws=p(vs,[["render",gs],["__scopeId","data-v-d5b2d87d"]]);const x=s=>(m("data-v-8ae1f95b"),s=s(),f(),s),xs={class:"video-bg"},ks=x(()=>e("div",{class:"name"},[e("span",null,"Жарылқасын "),e("br"),e("span",null,"&"),e("br"),e("span",null," Айзат")],-1)),Is=x(()=>e("p",null,"20.01.2024",-1)),Vs={class:"audio"},Ms={key:0,class:"fa-solid fa-volume-high"},Cs={key:1,class:"fa-solid fa-volume-xmark"},Ts=x(()=>e("source",{src:O,type:"audio/mpeg"},null,-1)),As=[Ts],Ds={__name:"HomeView",setup(s){const o=u(!1),a=u(),t=u(!1),i=()=>{t.value=a.value.paused,a.value.paused?a.value.play():a.value.pause()};return(l,_)=>{const c=T("video-background");return n(),d("div",null,[v(ts,{modelValue:o.value,"onUpdate:modelValue":_[0]||(_[0]=$=>o.value=$)},null,8,["modelValue"]),v(c,{src:"video/wedding.MP4",style:{"max-height":"50vh",height:"100vh"},overlay:"linear-gradient(45deg,#2a4ae430,#fb949e6b)"},{default:g(()=>[e("div",xs,[ks,Is,e("div",Vs,[e("div",{onClick:i,class:"play"},[t.value?(n(),d("i",Ms)):(n(),d("i",Cs))]),e("audio",{id:"audio-player",ref_key:"audio",ref:a},As,512)])])]),_:1}),v(se),v(re),v(ye),v(Ie),v(We),v(ws)])}}},Hs=p(Ds,[["__scopeId","data-v-8ae1f95b"]]);export{Hs as default};
