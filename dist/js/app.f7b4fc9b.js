(function(){"use strict";var e={8557:function(e,a,n){var t=n(9242),s=n(3396);const r={id:"app"};function l(e,a,n,t,l,o){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(i)])}var o={name:"App"},i=n(89);const u=(0,i.Z)(o,[["render",l]]);var c=u,d=n(2483),m=n.p+"img/testimonial.07a8e2cc.png";const p=e=>((0,s.dD)("data-v-660caee1"),e=e(),(0,s.Cn)(),e),f={class:"email-input-container"},h=p((()=>(0,s._)("h2",{class:"step-title"},"Step 1: Enter Email",-1))),b=p((()=>(0,s._)("div",{class:"image-container"},[(0,s._)("img",{src:m,alt:"Your Image Description",class:"form-image"})],-1)));function v(e,a,n,r,l,o){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",f,[h,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>l.email=e),type:"email",class:"email-input",placeholder:"Enter your email"},null,512),[[t.nr,l.email]]),(0,s._)("button",{onClick:a[1]||(a[1]=(...e)=>o.next&&o.next(...e)),class:"next-button"},"Next")]),b],64)}n(560);var y=n(1076),g={data(){return{email:""}},methods:{async saveClient(){try{console.log("url","https://data.tanamtech.online/save-email");const e=await y.Z.post("https://data.tanamtech.online/save-email",{email:this.email}),a=e.data.clientId;return a}catch(e){console.error("Error saving client:",e)}},next(){this.saveClient().then((e=>{this.$router.push(`/business-info/${e}`)})).catch((e=>{console.error("Error in next():",e)}))}}};const F=(0,i.Z)(g,[["render",v],["__scopeId","data-v-660caee1"]]);var _=F,w=n(7139);const N=e=>((0,s.dD)("data-v-1a568b5d"),e=e(),(0,s.Cn)(),e),k={class:"business-info-container"},S=N((()=>(0,s._)("h2",null,"Step 2: Business Information",-1))),D={class:"form-group"},M=N((()=>(0,s._)("label",{for:"businessName"},"Business Name:",-1))),C={class:"form-group"},x=N((()=>(0,s._)("label",{for:"usState"},"US State:",-1))),P=N((()=>(0,s._)("option",{value:"",disabled:""},"Select a State",-1))),O=["value"],V={class:"form-group"},I=N((()=>(0,s._)("label",{for:"businessDescription"},"Business Description:",-1))),U={class:"llc-members-section"},B=N((()=>(0,s._)("h3",null,"LLC Members",-1))),T={class:"form-group"},E=N((()=>(0,s._)("label",{for:"firstName"},"First Name:",-1))),A=["onUpdate:modelValue","id","placeholder"],Y={class:"form-group"},Z=N((()=>(0,s._)("label",{for:"lastName"},"Last Name:",-1))),$=["onUpdate:modelValue","id","placeholder"],j={class:"form-group"},z=N((()=>(0,s._)("label",{for:"address"},"Address:",-1))),H=["onUpdate:modelValue","id","placeholder"],L={class:"form-group"},W=N((()=>(0,s._)("label",{for:"dob"},"Date of Birth:",-1))),q=["onUpdate:modelValue","id","placeholder"],G={key:0,class:"fees-section"},K=N((()=>(0,s._)("p",null,"Our Filing Fees: $250",-1))),Q={key:0,class:"form-group"},R=N((()=>(0,s._)("span",null,"Include Newspaper Publication Fee",-1))),J={key:1},X=N((()=>(0,s._)("p",null,"Benefits:",-1))),ee=N((()=>(0,s._)("ul",null,[(0,s._)("li",null,"One Year Registered Agent"),(0,s._)("li",null,"PDF Guide to E2 Visa")],-1))),ae={class:"form-group"};function ne(e,a,n,r,l,o){return(0,s.wg)(),(0,s.iD)("div",k,[S,(0,s._)("div",D,[M,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>l.businessName=e),type:"text",id:"businessName",placeholder:"Business Name"},null,512),[[t.nr,l.businessName]])]),(0,s._)("div",C,[x,(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":a[1]||(a[1]=e=>l.usState=e),onChange:a[2]||(a[2]=(...e)=>o.updateTotal&&o.updateTotal(...e))},[P,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.states,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.name,value:e.name},(0,w.zw)(e.name),9,O)))),128))],544),[[t.bM,l.usState]])]),(0,s._)("div",V,[I,(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":a[3]||(a[3]=e=>l.businessDescription=e),id:"businessDescription",placeholder:"Business Description"},null,512),[[t.nr,l.businessDescription]])]),(0,s._)("div",U,[B,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.llcMembers,((e,a)=>((0,s.wg)(),(0,s.iD)("div",{key:a,class:"llc-member"},[(0,s._)("div",T,[E,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":a=>e.firstName=a,type:"text",id:"firstName"+a,placeholder:"Member "+(a+1)+" First Name"},null,8,A),[[t.nr,e.firstName]])]),(0,s._)("div",Y,[Z,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":a=>e.lastName=a,type:"text",id:"lastName"+a,placeholder:"Member "+(a+1)+" Last Name"},null,8,$),[[t.nr,e.lastName]])]),(0,s._)("div",j,[z,(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":a=>e.address=a,id:"address"+a,placeholder:"Member "+(a+1)+" Address"},null,8,H),[[t.nr,e.address]])]),(0,s._)("div",L,[W,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":a=>e.dateOfBirth=a,type:"date",id:"dob"+a,placeholder:"Member "+(a+1)+" Date of Birth"},null,8,q),[[t.nr,e.dateOfBirth]])])])))),128)),(0,s._)("button",{onClick:a[4]||(a[4]=(...e)=>o.addMember&&o.addMember(...e))},"Add Member")]),l.selectedState?((0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("h3",null,"Total Fees for "+(0,w.zw)(l.selectedState.name),1),K,(0,s._)("p",null,"State LLC Filing Fee: $"+(0,w.zw)(l.selectedState.fee),1),["New York","Arizona","Nebraska"].includes(l.selectedState.name)?((0,s.wg)(),(0,s.iD)("div",Q,[(0,s._)("label",null,[(0,s.wy)((0,s._)("input",{type:"checkbox","onUpdate:modelValue":a[5]||(a[5]=e=>l.includeNewspaperFee=e)},null,512),[[t.e8,l.includeNewspaperFee]]),R])])):(0,s.kq)("",!0),l.includeNewspaperFee&&["New York","Nebraska","Arizona"].includes(l.selectedState.name)?((0,s.wg)(),(0,s.iD)("p",J," Newspaper Publication Fee: $"+(0,w.zw)(o.getNewspaperPublicationFee(l.selectedState.name)),1)):(0,s.kq)("",!0),X,ee])):(0,s.kq)("",!0),(0,s._)("div",ae,[(0,s._)("button",{onClick:a[6]||(a[6]=(...e)=>o.prev&&o.prev(...e))},"Previous"),(0,s._)("button",{onClick:a[7]||(a[7]=(...e)=>o.next&&o.next(...e))},"Next")])])}var te={data(){return{businessName:"",usState:"",businessDescription:"",states:[{name:"Alabama",fee:200,annualFee:50},{name:"Alaska",fee:250,annualFee:100},{name:"Arizona",fee:50,annualFee:0},{name:"Arkansas",fee:45,annualFee:150},{name:"California",fee:70,annualFee:820},{name:"Colorado",fee:50,annualFee:10},{name:"Connecticut",fee:120,annualFee:80},{name:"Delaware",fee:90,annualFee:300},{name:"Florida",fee:125,annualFee:138.75},{name:"Georgia",fee:100,annualFee:50},{name:"Hawaii",fee:50,annualFee:15},{name:"Idaho",fee:100,annualFee:0},{name:"Illinois",fee:150,annualFee:75},{name:"Indiana",fee:95,annualFee:31},{name:"Iowa",fee:50,annualFee:30},{name:"Kansas",fee:160,annualFee:50},{name:"Kentucky",fee:40,annualFee:15},{name:"Louisiana",fee:100,annualFee:35},{name:"Maine",fee:175,annualFee:85},{name:"Maryland",fee:100,annualFee:300},{name:"Massachusetts",fee:500,annualFee:500},{name:"Michigan",fee:50,annualFee:25},{name:"Minnesota",fee:155,annualFee:0},{name:"Mississippi",fee:50,annualFee:0},{name:"Missouri",fee:50,annualFee:0},{name:"Montana",fee:35,annualFee:20},{name:"Nebraska",fee:100,annualFee:13},{name:"Nevada",fee:425,annualFee:350},{name:"New Hampshire",fee:100,annualFee:100},{name:"New Jersey",fee:125,annualFee:75},{name:"New Mexico",fee:50,annualFee:0},{name:"New York",fee:200,annualFee:9},{name:"North Carolina",fee:125,annualFee:200},{name:"North Dakota",fee:135,annualFee:50},{name:"Ohio",fee:99,annualFee:0},{name:"Oklahoma",fee:100,annualFee:25},{name:"Oregon",fee:100,annualFee:100},{name:"Pennsylvania",fee:125,annualFee:7},{name:"Rhode Island",fee:150,annualFee:50},{name:"South Carolina",fee:110,annualFee:0},{name:"South Dakota",fee:150,annualFee:50},{name:"Tennessee",fee:300,annualFee:300},{name:"Texas",fee:300,annualFee:0},{name:"Utah",fee:54,annualFee:18},{name:"Vermont",fee:125,annualFee:35},{name:"Virginia",fee:100,annualFee:50},{name:"Washington",fee:200,annualFee:60},{name:"Washington DC",fee:99,annualFee:300},{name:"West Virginia",fee:100,annualFee:25},{name:"Wisconsin",fee:130,annualFee:25},{name:"Wyoming",fee:100,annualFee:60}],selectedState:null,includeNewspaperFee:!1,llcMembers:[]}},methods:{prev(){this.$router.push("/")},getNewspaperPublicationFee(e){switch(e){case"New York":return 476;case"Nebraska":return 450;case"Arizona":return 220;default:return 0}},async sendDataToBackend(){const e=this.$route.params.clientId,a={clientId:e,name:this.businessName,state:this.usState,description:this.businessDescription,newsPub:this.includeNewspaperFee,totalFees:this.calculateTotalFees(),llcMembers:this.llcMembers};try{const e=await y.Z.post("https://data.tanamtech.online/save-business/",a);console.log("Response from backend:",e.data)}catch(n){console.error("Error sending data to backend:",n)}},next(){this.sendDataToBackend(),this.$router.push({path:"/payment",query:{totalFees:this.calculateTotalFees()}})},updateTotal(){this.selectedState=this.states.find((e=>e.name===this.usState))},calculateTotalFees(){return this.selectedState?this.selectedState.fee+250:0},addMember(){this.llcMembers.push({firstName:"",lastName:"",address:"",dateOfBirth:""})}}};const se=(0,i.Z)(te,[["render",ne],["__scopeId","data-v-1a568b5d"]]);var re=se,le=n.p+"img/pay2.f192d19e.jpg";const oe={class:"payment-container"},ie=(0,s._)("h2",{class:"payment-title"},"Step 3: Payment",-1),ue={class:"total-fees"},ce={ref:"stripeForm",class:"payment-form"},de={class:"form-group"},me=(0,s._)("label",{for:"card-element"},"Cardholder's Name:",-1),pe=(0,s._)("div",{id:"card-element",class:"card-element"},null,-1),fe=(0,s._)("div",{id:"card-errors",role:"alert",class:"error-message"},null,-1),he=["disabled"],be={key:0},ve={key:1},ye=(0,s._)("div",{class:"image-container"},[(0,s._)("img",{src:le,alt:"Payment Image",class:"payment-image",style:{width:"80%",margin:"0 auto"}})],-1);function ge(e,a,n,r,l,o){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",oe,[ie,(0,s._)("p",ue,"Total Fees: $"+(0,w.zw)(l.totalFees),1),(0,s._)("form",ce,[(0,s._)("div",de,[me,(0,s.wy)((0,s._)("input",{id:"cardholder-name","onUpdate:modelValue":a[0]||(a[0]=e=>l.cardholderName=e),type:"text",placeholder:"John Doe"},null,512),[[t.nr,l.cardholderName]])]),pe,fe,(0,s._)("button",{onClick:a[1]||(a[1]=(0,t.iM)(((...e)=>o.prev&&o.prev(...e)),["prevent"])),class:"button"},"Previous"),(0,s._)("button",{onClick:a[2]||(a[2]=(0,t.iM)(((...e)=>o.submit&&o.submit(...e)),["prevent"])),class:"button",disabled:l.processingPayment},[l.processingPayment?((0,s.wg)(),(0,s.iD)("span",be,"Processing...")):((0,s.wg)(),(0,s.iD)("span",ve,"Submit"))],8,he)],512)]),ye],64)}var Fe=n(7369),_e={data(){return{totalFees:0,cardholderName:"",stripe:null,elements:null,processingPayment:!1}},created(){this.totalFees=this.$route.query.totalFees||0,this.loadStripe(),y.Z.defaults.baseURL="https://data.tanamtech.online"},methods:{async loadStripe(){const e=await(0,Fe.loadStripe)("pk_test_51MnMGrE1uOh1UBiwtQAeUHtlXoVdLNBkdVbgoh05N7dQ2VySvDgaZnfBkGlFjr2ou3QiGZQ32t4ZKY61nhu7qXCu00xWkHCRQr");this.stripe=e,this.elements=e.elements();const a=this.elements.create("card",{style:{base:{iconColor:"#666EE8",color:"#31325F",fontSize:"16px",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased","::placeholder":{color:"#aab7c4"}}},classes:{base:"stripe-card"},hidePostalCode:!0,hideIcon:!1,hideBrand:!1});a.mount("#card-element"),a.addEventListener("change",(e=>{const a=document.getElementById("card-errors");e.error?a.textContent=e.error.message:a.textContent=""}))},prev(){this.$router.push("/business-info")},async submit(){this.processingPayment=!0;const e=this.elements.getElement("card"),{paymentMethod:a,error:n}=await this.stripe.createPaymentMethod({type:"card",card:e,billing_details:{name:this.cardholderName}});if(n)console.error(n);else{const e=await y.Z.post("/create-payment-intent",{amount:this.totalFees,currency:"usd",description:"Payment for services",payment_method:a.id}),n=e.data.clientSecret,{paymentIntent:t,error:s}=await this.stripe.handleCardPayment(n);s?console.error(s):(console.log(t),this.processingPayment=!1,this.$router.push("/thank-you"))}}}};const we=(0,i.Z)(_e,[["render",ge]]);var Ne=we;const ke=e=>((0,s.dD)("data-v-4ae3822a"),e=e(),(0,s.Cn)(),e),Se={class:"thank-you-container"},De=ke((()=>(0,s._)("h2",null,"Thank You for Your Payment!",-1))),Me=ke((()=>(0,s._)("p",null,"We are processing your order, and we will email you once your company is formed.",-1))),Ce=[De,Me];function xe(e,a,n,t,r,l){return(0,s.wg)(),(0,s.iD)("div",Se,Ce)}var Pe={};const Oe=(0,i.Z)(Pe,[["render",xe],["__scopeId","data-v-4ae3822a"]]);var Ve=Oe;const Ie=[{path:"/",component:_},{path:"/business-info/",component:re},{path:"/business-info/:clientId",component:re},{path:"/payment",component:Ne},{path:"/thank-you",component:Ve}],Ue=(0,d.p7)({history:(0,d.PO)(),routes:Ie});var Be=Ue;const Te=(0,t.ri)(c);Te.use(Be),Te.mount("#app")}},a={};function n(t){var s=a[t];if(void 0!==s)return s.exports;var r=a[t]={exports:{}};return e[t].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(a,t,s,r){if(!t){var l=1/0;for(c=0;c<e.length;c++){t=e[c][0],s=e[c][1],r=e[c][2];for(var o=!0,i=0;i<t.length;i++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](t[i])}))?t.splice(i--,1):(o=!1,r<l&&(l=r));if(o){e.splice(c--,1);var u=s();void 0!==u&&(a=u)}}return a}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[t,s,r]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var s,r,l=t[0],o=t[1],i=t[2],u=0;if(l.some((function(a){return 0!==e[a]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(i)var c=i(n)}for(a&&a(t);u<l.length;u++)r=l[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},t=self["webpackChunkvue_checkout_app"]=self["webpackChunkvue_checkout_app"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(8557)}));t=n.O(t)})();
//# sourceMappingURL=app.f7b4fc9b.js.map