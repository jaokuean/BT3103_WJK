(function(t){function e(e){for(var n,o,c=e[0],i=e[1],d=e[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==s[i]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02ce":function(t,e,a){},"034f":function(t,e,a){"use strict";a("85ec")},1199:function(t,e,a){},"2fe3":function(t,e,a){"use strict";a("02ce")},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="4678"},4774:function(t,e,a){"use strict";a("1199")},"49ec":function(t,e,a){"use strict";a("691c")},"4fc8":function(t,e,a){"use strict";a("9b89")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("My Zi Char")]),a("nav",[a("ul",{attrs:{id:"navBar"}},[a("li",[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/orders",exact:""}},[t._v("Order")])],1),a("li",[a("router-link",{attrs:{to:"/dashboard",exact:""}},[t._v("Dashboard")])],1)])]),a("router-view")],1)},r=[],o={components:{}},c=o,i=(a("034f"),a("2877")),d=Object(i["a"])(c,s,r,!1,null,null,null),l=d.exports,u=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"itemsList"}},[a("ul",{attrs:{id:"menu"}},t._l(t.itemsList,(function(e,n){return a("li",{key:n,attrs:{id:"menuItems"}},[a("p",{attrs:{id:"itemName"}},[t._v(t._s(e.name))]),a("p",[a("img",{attrs:{src:e.imageURL,alt:"Image"}})]),a("p",{attrs:{id:"price"}},[t._v("$"+t._s(e.price))]),a("qtyCounter",{attrs:{item:e},on:{counter:t.onCounter}})],1)})),0),a("basket",{attrs:{id:"shoppingBasket",basketList:t.itemsSelected}})],1)},b=[],h=(a("4160"),a("c975"),a("a434"),a("b0c0"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"qtyCounterBtn",on:{click:t.decrement}},[t._v("-")]),a("span",{staticStyle:{margin:"30px","font-size":"50px"}},[t._v(t._s(t.counter))]),a("button",{staticClass:"qtyCounterBtn",on:{click:t.increment}},[t._v("+")])])}),p=[],m={props:{item:{type:Object}},data:function(){return{counter:0}},methods:{increment:function(){this.counter>=10?alert("You cannot buy more than 10 items."):this.counter+=1,this.$emit("counter",this.item,this.counter)},decrement:function(){this.counter<=0?this.counter=0:this.counter-=1,this.$emit("counter",this.item,this.counter)}}},j=m,y=(a("4fc8"),Object(i["a"])(j,h,p,!1,null,null,null)),v=y.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},k=[],_=a("2591"),w={apiKey:"AIzaSyAQ6jcMnZpRQu32j7YZXVSc5SC5z_MxW10",authDomain:"a0200290y-bt3103-wk6.firebaseapp.com",projectId:"a0200290y-bt3103-wk6",storageBucket:"a0200290y-bt3103-wk6.appspot.com",messagingSenderId:"732046621858",appId:"1:732046621858:web:39728ea4f3724275e3abfb",measurementId:"G-YVJ7LQDYZQ"};_["a"].initializeApp(w),_["a"].analytics();var C=_["a"].firestore(),O=C,x={props:{basketList:{type:Array}},data:function(){return{orderlist:[{name:"Cereal Prawn",qty:0},{name:"Prawn omelette",qty:0},{name:"Dry Beef Hor Fun",qty:0},{name:"Sambal KangKung",qty:0},{name:"Pork Fried Rice",qty:0},{name:"Mapo Tofu",qty:0}]}},methods:{sendOrder:function(){console.log("List: "+this.basketList);for(var t=0;t<this.basketList.length;t++)for(var e=this.basketList[t],a=e[0],n=e[1],s=0;s<this.orderlist.length;s++){var r=this.orderlist[s],o=r.name;a===o&&(r.qty+=n)}O.collection("orders").add({order:this.orderlist}).then((function(){location.reload()}))}}},z=x,S=(a("d960"),Object(i["a"])(z,g,k,!1,null,null,null)),I=S.exports,q={data:function(){return{itemsList:[],itemsSelected:[]}},components:{qtyCounter:v,basket:I},methods:{onCounter:function(t,e){if(0===this.itemsSelected.length&&e>0)this.itemsSelected.push([t.name,e,t.price]);else{for(var a=0;a<this.itemsSelected.length;a++){var n=this.itemsSelected[a],s=n[0],r=!1;s===t.name&&e>0&&(this.itemsSelected.splice(a,1,[n[0],e,n[2]]),r=!0),s===t.name&&0===e&&(this.itemsSelected.splice(this.itemsSelected.indexOf(n),1),r=!0)}r||this.itemsSelected.push([t.name,e,t.price])}},fetchItems:function(){var t=this;O.collection("menu").get().then((function(e){var a={};e.forEach((function(e){a=e.data(),a.show=!1,t.itemsList.push(a)}))}))}},created:function(){this.fetchItems()}},E=q,$=(a("8b71"),Object(i["a"])(E,f,b,!1,null,null,null)),B=$.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.orders,(function(e){return a("div",{key:e},[a("ul",t._l(e[1],(function(e){return a("li",{key:e,attrs:{id:"basketItems"}},t._l(e,(function(e){return a("div",{key:e},[t._v(" "+t._s(e.name)+": "+t._s(e.qty)+" "),a("br")])})),0)})),0),a("p",[a("button",{staticClass:"actionBtn",attrs:{id:e[0]},on:{click:function(e){return t.deleteOrder(e)}}},[t._v(" Delete ")]),a("button",{staticClass:"actionBtn",attrs:{id:e[0]},on:{click:function(e){return t.route(e)}}},[t._v(" Modify ")])])])})),0)},P=[],M={data:function(){return{orders:[]}},created:function(){this.fetchItems()},components:{},methods:{fetchItems:function(){var t=this;console.log("entered"),O.collection("orders").get().then((function(e){e.docs.forEach((function(e){t.orders.push([e.id,e.data()])}))}))},deleteOrder:function(t){console.log("CheckDelete----- ");var e=t.target.getAttribute("id");console.log(e),O.collection("orders").doc(e).delete().then((function(){location.reload()}))},route:function(t){console.log("CheckModify------ ");var e=t.target.getAttribute("id");this.$router.push({name:"modify",params:{id:e}})}}},D=M,A=(a("49ec"),Object(i["a"])(D,L,P,!1,null,null,null)),T=A.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.datapacket,(function(e,n){return a("div",{key:n},[t._v(" "+t._s(e.name)+": "+t._s(e.qty)+" "),a("br"),a("br"),a("input",{attrs:{placeholder:"0",id:n,type:"number",min:"0"}}),a("br"),a("br")])})),a("p",[a("button",{attrs:{id:"updateBtn"},on:{click:function(e){return t.updateOrder()}}},[t._v("Update Order")])])],2)},F=[],K={components:{},data:function(){return{id:this.$route.params.id,datapacket:[],datapacketCopy:[]}},created:function(){this.fetchItems()},methods:{fetchItems:function(){var t=this;console.log("entered:"+this.id),O.collection("orders").doc(this.id).get().then((function(e){t.datapacket=e.data().order}))},updateOrder:function(){var t=this;console.log("checkupdate----- ");for(var e=0;e<this.datapacket.length;e++)""==document.getElementById(e).value?this.datapacketCopy.push({name:this.datapacket[e].name,qty:0}):this.datapacketCopy.push({name:this.datapacket[e].name,qty:document.getElementById(e).value});O.collection("orders").doc(this.id).set({order:this.datapacketCopy}).then((function(){t.$router.push({name:"orders"})}))}}},N=K,Z=(a("fb93"),Object(i["a"])(N,R,F,!1,null,null,null)),H=Z.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"main"}},[a("div",{attrs:{id:"chart"}},[a("bar-chart")],1),a("div",{attrs:{id:"chart"}},[a("line-chart")],1)])},U=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{attrs:{id:"chartDashboard"}},[t._v("Bar Chart")]),a("chart")],1)},J=[],V=a("1fca"),W={extends:V["a"],data:function(){return{datapacket:[],datacollection:{labels:["Cereal Prawn","Prawn omelette","Dry Beef Hor Fun","Sambal KangKung","Pork Fried Rice","Mapo Tofu"],datasets:[{label:"",backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#000"],data:[0,0,0,0,0,0]}]},options:{legend:{display:!1},title:{display:!0,text:"Total numbers of each dish"},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,min:0}}]}}}},methods:{fetchItems:function(){var t=this;O.collection("orders").get().then((function(e){e.forEach((function(e){t.datapacket=e.data().order;for(var a=0;a<t.datapacket.length;a++){var n=parseInt(t.datacollection.datasets[0].data[a]),s=parseInt(t.datapacket[a].qty);t.datacollection.datasets[0].data[a]=n+s}})),t.renderChart(t.datacollection,t.options)}))}},created:function(){this.fetchItems()}},G={components:{Chart:W}},X=G,tt=(a("6565"),Object(i["a"])(X,Y,J,!1,null,null,null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{attrs:{id:"chartDashboard"}},[t._v("Line Chart")]),a("chart")],1)},nt=[],st=a("bc3a"),rt=a.n(st),ot={extends:V["b"],data:function(){return{datacollection:{labels:[],datasets:[{data:[],label:"West",borderColor:"#3e95cd",fill:!1},{data:[],label:"National",borderColor:"#8e5ea2",fill:!1},{data:[],label:"East",borderColor:"#3cba9f",fill:!1},{data:[],label:"Central",borderColor:"#e8c3b9",fill:!1},{data:[],label:"South",borderColor:"#c45850",fill:!1},{data:[],label:"North",borderColor:"#000",fill:!1}]},options:{legend:{display:!0},title:{display:!0,text:"PSI Twenty Four Hour (By Region)"},responsive:!0,maintainAspectRatio:!1}}},methods:{fetchItems:function(){var t=this;rt.a.get("https://api.data.gov.sg/v1/environment/psi?date=2021-02-22").then((function(e){e.data.items.forEach((function(e){t.datacollection.labels.push(e.timestamp),t.datacollection.datasets[0].data.push(e.readings.psi_twenty_four_hourly.west),t.datacollection.datasets[1].data.push(e.readings.psi_twenty_four_hourly.national),t.datacollection.datasets[2].data.push(e.readings.psi_twenty_four_hourly.east),t.datacollection.datasets[3].data.push(e.readings.psi_twenty_four_hourly.central),t.datacollection.datasets[4].data.push(e.readings.psi_twenty_four_hourly.south),t.datacollection.datasets[5].data.push(e.readings.psi_twenty_four_hourly.north)})),t.renderChart(t.datacollection,t.options)}))}},created:function(){this.fetchItems()}},ct={components:{Chart:ot}},it=ct,dt=(a("4774"),Object(i["a"])(it,at,nt,!1,null,null,null)),lt=dt.exports,ut={components:{"bar-chart":et,"line-chart":lt}},ft=ut,bt=(a("2fe3"),Object(i["a"])(ft,Q,U,!1,null,null,null)),ht=bt.exports,pt=[{path:"/",component:B},{path:"/orders",name:"orders",component:T},{path:"/modify",name:"modify",component:H,props:!0},{path:"/dashboard",name:"dashboard",component:ht,props:!0}];n["a"].use(u["a"]),n["a"].config.productionTip=!1;var mt=new u["a"]({routes:pt,mode:"history"});new n["a"]({render:function(t){return t(l)},router:mt}).$mount("#app")},6565:function(t,e,a){"use strict";a("84ac")},"691c":function(t,e,a){},"84ac":function(t,e,a){},"85ec":function(t,e,a){},"88d7":function(t,e,a){},"8b71":function(t,e,a){"use strict";a("88d7")},"9b89":function(t,e,a){},c491:function(t,e,a){},c812:function(t,e,a){},d960:function(t,e,a){"use strict";a("c812")},fb93:function(t,e,a){"use strict";a("c491")}});
//# sourceMappingURL=app.f231b653.js.map