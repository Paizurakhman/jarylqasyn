import{_ as p,u as H,o as c,c as n,a as s,t as h,p as m,b as f,d as S,F as g,r as k,n as N,e as P,f as u,g as I,w as x,h as V,T as M,i as j,j as F,k as C,l as w,v as L,m as U,q as v,s as E}from"./index-f7073a35.js";const J="/jarylqasyn/assets/music-0e31c9c2.mp3";const O={name:"InvitationSection",setup(){const e=H(),{name:o}=e.query;return{name:o}}},R=e=>(m("data-v-f0db0ca8"),e=e(),f(),e),z={class:"invitation-section"},W={class:"container"},G={class:"invitation-text"},K={key:0},Q={key:1},X=R(()=>s("div",{class:"invitation-text"},[s("h2",null,[S("Сіз(дер)ді баламыз "),s("span",{class:"name"},"Жарылқасын және келініміз Айзаттың"),S(" үйлену тойына арналған ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!")])],-1));function Y(e,o,a,t,l,i){return c(),n("div",z,[s("div",W,[s("div",G,[t.name?(c(),n("h2",K,"Құрметті "+h(t.name)+"!",1)):(c(),n("h2",Q,"Құрметті ағайын-туыс, нағашы-жиен, бауырлар, құда-жекжат, дос-жаран, әріптестер!"))]),X])])}const Z=p(O,[["render",Y],["__scopeId","data-v-f0db0ca8"]]);const ss={name:"CalendarSection"},T=e=>(m("data-v-e901b3b7"),e=e(),f(),e),es={class:"calendar-section"},ts={class:"container"},os={class:"calendar"},as=T(()=>s("div",{class:"calendar-header"},null,-1)),cs={class:"calendar-body"},ns=T(()=>s("div",{class:"calendar-weekday"},[s("div",null,"Д"),s("div",null,"С"),s("div",null,"С"),s("div",null,"Б"),s("div",null,"Ж"),s("div",null,"С"),s("div",null,"Ж")],-1)),ds={class:"calendar-days"};function ls(e,o,a,t,l,i){return c(),n("div",es,[s("div",ts,[s("div",os,[as,s("div",cs,[ns,s("div",ds,[(c(),n(g,null,k(31,_=>s("div",{key:_,class:N({active:_===20})},h(_),3)),64))])])])])])}const is=p(ss,[["render",ls],["__scopeId","data-v-e901b3b7"]]),_s="/jarylqasyn/assets/wave-top-a8e17bb0.svg",rs="/jarylqasyn/assets/wave-bottom-ba4ecb5b.svg";const us={name:"PhotoSection"},vs=e=>(m("data-v-5b21ffac"),e=e(),f(),e),ps={class:"photo-section"},hs=vs(()=>s("div",{class:"bg-photo"},[s("img",{src:_s,alt:""}),s("img",{src:rs,alt:""})],-1)),ms=[hs];function fs(e,o,a,t,l,i){return c(),n("div",ps,ms)}const $s=p(us,[["render",fs],["__scopeId","data-v-5b21ffac"]]);const bs={name:"InfoSection"},ys={class:"info-section"},Ss=P('<div class="container" data-v-20cc66f1><h2 data-v-20cc66f1>Өтетін уақыты мен мекен-жайымыз</h2><div class="row" data-v-20cc66f1><div class="col-xl-4 col-12 py-4" data-v-20cc66f1><div class="subtitle" data-v-20cc66f1>Уақыты:</div><div class="title" data-v-20cc66f1>20 Қаңтар 18:00</div></div><div class="col-xl-4 col-12 py-4" data-v-20cc66f1><div class="subtitle" data-v-20cc66f1>Мекен-жайымыз:</div><div class="title" data-v-20cc66f1>Ақтөбе қаласы, Проспект Кенес Нокина, 44д</div></div><div class="col-xl-4 col-12 py-4" data-v-20cc66f1><div class="subtitle" data-v-20cc66f1>Мейрамхана:</div><div class="title" data-v-20cc66f1>White Hill </div></div><div class="col-xl-4 col-12 py-4" data-v-20cc66f1><div class="subtitle" data-v-20cc66f1>Той иелері:</div><div class="title" data-v-20cc66f1> Махамбет &amp; Базаргүл </div></div></div><div class="subtitle mb-4" data-v-20cc66f1> Тойымыздың қадірлі қонағы болыңыздар! </div></div>',1),gs=[Ss];function xs(e,o,a,t,l,i){return c(),n("div",ys,gs)}const ws=p(bs,[["render",xs],["__scopeId","data-v-20cc66f1"]]);const ks={name:"CountdownSection",setup(){const e=u("0"),o=u("0"),a=u("0"),t=u("0"),l=new Date("Jan 20, 2024 20:00:00").getTime(),i=setInterval(()=>{let _=new Date().getTime(),d=l-_;const $=Math.floor(d/(1e3*60*60*24)),D=Math.floor(d%(1e3*60*60*24)/(1e3*60*60)),q=Math.floor(d%(1e3*60*60)/(1e3*60)),B=Math.floor(d%(1e3*60)/1e3);e.value=$.toString().padStart(2,"0"),o.value=D.toString().padStart(2,"0"),a.value=q.toString().padStart(2,"0"),t.value=B.toString().padStart(2,"0"),d/1e3<1&&clearInterval(i)},1e3);return{days:e,hours:o,minutes:a,seconds:t}}},r=e=>(m("data-v-29022443"),e=e(),f(),e),Is={class:"countdown"},Vs={class:"container"},Ms={class:"countdown-content"},Cs={class:"countdown__item"},Ts=r(()=>s("p",{class:"desktop"},"Days",-1)),As=r(()=>s("p",{class:"mobile"},"D",-1)),Ds=r(()=>s("li",{class:"divider"},[s("span",null,":")],-1)),qs={class:"countdown__item"},Bs=r(()=>s("p",{class:"desktop"},"Hours",-1)),Hs=r(()=>s("p",{class:"mobile"},"H",-1)),Ns=r(()=>s("li",{class:"divider"},[s("span",null,":")],-1)),Ps={class:"countdown__item"},js=r(()=>s("p",{class:"desktop"},"Minutes",-1)),Fs=r(()=>s("p",{class:"mobile"},"M",-1)),Ls=r(()=>s("li",{class:"divider"},[s("span",null,":")],-1)),Us={class:"countdown__item"},Es=r(()=>s("p",{class:"desktop"},"Seconds",-1)),Js=r(()=>s("p",{class:"mobile"},"S",-1));function Os(e,o,a,t,l,i){return c(),n("div",Is,[s("div",Vs,[s("div",Ms,[s("ul",null,[s("li",Cs,[s("div",null,h(t.days),1),Ts,As]),Ds,s("li",qs,[s("div",null,h(t.hours),1),Bs,Hs]),Ns,s("li",Ps,[s("div",null,h(t.minutes),1),js,Fs]),Ls,s("li",Us,[s("div",null,h(t.seconds),1),Es,Js])])])])])}const Rs=p(ks,[["render",Os],["__scopeId","data-v-29022443"]]);const zs={name:"Modal",props:{modelValue:{type:Boolean,default:!1}}},b=e=>(m("data-v-97715c6b"),e=e(),f(),e),Ws={key:0,class:"modal"},Gs={class:"envelope-container"},Ks=b(()=>s("label",{class:"flap",for:"flap"},null,-1)),Qs=b(()=>s("div",{class:"envelope-back"},null,-1)),Xs=b(()=>s("div",{class:"card"},"Thanks!",-1)),Ys=b(()=>s("div",{class:"card-front"},null,-1));function Zs(e,o,a,t,l,i){return c(),I(M,{name:"modal"},{default:x(()=>[a.modelValue?(c(),n("div",Ws,[s("div",Gs,[s("input",{id:"flap",type:"checkbox",onInput:o[0]||(o[0]=_=>e.$emit("update:modelValue",!1))},null,32),Ks,Qs,Xs,Ys])])):V("",!0)]),_:1})}const se=p(zs,[["render",Zs],["__scopeId","data-v-97715c6b"]]);const ee={name:"AcceptModal",props:{modelValue:{type:Boolean,default:!1}}},y=e=>(m("data-v-7849b305"),e=e(),f(),e),te={key:0,class:"accept-modal"},oe={class:"accept-modal__container"},ae=y(()=>s("p",{class:"accept-modal__success"},[s("span",{class:"icon"},[s("i",{class:"fa-solid fa-check"})]),s("span",null,"Рақмет! Деректер сәтті жіберілді.")],-1)),ce=y(()=>s("div",{class:"box"},null,-1)),ne={class:"box"},de=y(()=>s("div",{class:"box"},null,-1)),le=y(()=>s("div",{class:"box"},null,-1));function ie(e,o,a,t,l,i){return c(),I(M,{name:"accept-modal"},{default:x(()=>[a.modelValue?(c(),n("div",te,[s("div",oe,[ae,ce,s("div",ne,[s("span",{class:"close",onClick:o[0]||(o[0]=_=>e.$emit("update:modelValue",!1))})]),de,le])])):V("",!0)]),_:1})}const _e=p(ee,[["render",ie],["__scopeId","data-v-7849b305"]]);const re={name:"AcceptForm",components:{AcceptModal:_e},setup(){const e=j({name:"",field:""}),o=u(""),a=u(!1),t=u(!1),l=[{id:1,label:"Келемін"},{id:2,label:"Жұбыммен келемін"},{id:3,label:"Өкінішке орай келе алмаймын"}],i=F(()=>e.name&&e.field);return{acceptList:l,state:e,isSuccess:a,isDisable:i,errorText:o,isLoading:t,onSubmit:async()=>{if(!i.value){o.value="Біреуін таңдаңыз!";return}t.value=!0,await fetch("https://sheetdb.io/api/v1/g2p99nmrk27g0",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(()=>{a.value=!0,e.name="",e.field="",o.value=""}).finally(()=>{t.value=!1})}}}},ue=e=>(m("data-v-88646dc0"),e=e(),f(),e),ve={class:"container"},pe=ue(()=>s("p",null," Тойға келетініңізді 10.01.2024ж дейін растауыңызды сұраймыз ",-1)),he=["value"],me={class:"error"},fe={class:"submit"},$e={key:0,class:"loader"},be={key:1};function ye(e,o,a,t,l,i){const _=C("AcceptModal");return c(),n(g,null,[s("form",{class:"accept-form",onSubmit:o[2]||(o[2]=U((...d)=>t.onSubmit&&t.onSubmit(...d),["prevent"]))},[s("div",ve,[pe,w(s("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=d=>t.state.name=d),placeholder:"Аты жөніңіз",class:"input-name",required:""},null,512),[[L,t.state.name]]),(c(!0),n(g,null,k(t.acceptList,d=>(c(),n("label",null,[w(s("input",{type:"radio","onUpdate:modelValue":o[1]||(o[1]=$=>t.state.field=$),value:d.label,required:""},null,8,he),[[E,t.state.field]]),S(" "+h(d.label),1)]))),256)),s("span",me,h(t.errorText),1),s("div",fe,[s("button",null,[t.isLoading?(c(),n("span",$e)):(c(),n("span",be,"Жіберу"))])])])],32),v(_,{modelValue:t.isSuccess,"onUpdate:modelValue":o[3]||(o[3]=d=>t.isSuccess=d)},null,8,["modelValue"])],64)}const Se=p(re,[["render",ye],["__scopeId","data-v-88646dc0"]]);const A=e=>(m("data-v-481ae92b"),e=e(),f(),e),ge={class:"video-bg"},xe=A(()=>s("div",{class:"name"},[s("span",null,"Жарылқасын "),s("br"),s("span",null,"&"),s("br"),s("span",null," Айзат"),s("p",null,"20.01.2024")],-1)),we={class:"audio"},ke={key:0,class:"fa-solid fa-volume-high"},Ie={key:1,class:"fa-solid fa-volume-xmark"},Ve=A(()=>s("source",{src:J,type:"audio/mpeg"},null,-1)),Me=[Ve],Ce={__name:"HomeView",setup(e){const o=u(!1),a=u(),t=u(!1),l=()=>{t.value=a.value.paused,a.value.paused?a.value.play():a.value.pause()};return(i,_)=>{const d=C("video-background");return c(),n("div",null,[v(se,{modelValue:o.value,"onUpdate:modelValue":_[0]||(_[0]=$=>o.value=$)},null,8,["modelValue"]),v(d,{src:"video/wedding.MP4",style:{"max-height":"50vh",height:"100vh"},overlay:"linear-gradient(45deg,#2a4ae430,#fb949e6b)"},{default:x(()=>[s("div",ge,[xe,s("div",we,[s("div",{onClick:l,class:"play"},[t.value?(c(),n("i",ke)):(c(),n("i",Ie))]),s("audio",{id:"audio-player",ref_key:"audio",ref:a},Me,512)])])]),_:1}),v(Z),v(is),v($s),v(ws),v(Rs),v(Se)])}}},Ae=p(Ce,[["__scopeId","data-v-481ae92b"]]);export{Ae as default};
