(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddc60a38"],{"5c4a":function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("v-app",[c("v-content",{attrs:{id:"login",bg:!1}},[c("vue-particles",{attrs:{color:"#000044","particle-opacity":.3,"particles-number":120,"shape-type":"circle","particle-size":6,"lines-color":"#FFA000","lines-width":2,"line-linked":!0,"line-opacity":.4,"lines-distance":100,"move-speed":3,"hover-effect":!0,"hover-mode":"grab","click-effect":!0,"click-mode":"repulse"}})],1),c("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[c("v-row",{attrs:{align:"center",justify:"center"}},[c("v-col",{attrs:{cols:"12",sm:"8",md:"4",lg:"3"}},[c("v-alert",{attrs:{type:"error",dismissible:""},model:{value:e.showError,callback:function(t){e.showError=t},expression:"showError"}},[e._v(" "+e._s(this.errormm)+" ")]),c("v-alert",{attrs:{type:"success",dismissible:"",transition:"scale-transition"},model:{value:e.successBool,callback:function(t){e.successBool=t},expression:"successBool"}},[e._v(e._s(this.successMsg))]),c("v-card",{staticClass:"elevation-9 pa-3",attrs:{color:"#ffffff"}},[c("v-card-text",[c("div",{staticClass:"layout column align-center"},[c("img",{attrs:{src:a("926b"),alt:"DUC logo",width:"200",height:"120"}}),c("h1",{staticClass:"flex my-4 primary--text"},[e._v("Mark Attendance")])]),c("v-form",[c("v-text-field",{attrs:{"append-icon":"scanner",name:"barcode",label:"Scan the barcode"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterBarcode(t)}},model:{value:e.barcode,callback:function(t){e.barcode=t},expression:"barcode"}})],1)],1),c("v-card-actions",[c("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.enterBarcode}},[e._v("Enter")])],1)],1)],1)],1)],1)],1)},r=[],o=a("5706"),s=(a("8aa50"),a("2b0e")),n=a("2b27"),l=a.n(n),i=a("98c9"),d=a("683f");s["a"].use(d["a"]),s["a"].use(i["a"]),s["a"].use(l.a);var u={data:function(){return{loading:!1,barcode:"",showError:!1,errormm:" ",successMsg:"",successBool:!1}},methods:{enterBarcode:function(e){var t=this,a=new Date,c={barcode:this.barcode,timestamp:a,date:a.getFullYear()+"/"+(a.getMonth()+1)+"/"+a.getDate()};console.log(c),o["a"].collection("attendance").add(c).then((function(){console.log("Done"),t.barcode="",t.addSubjectBool=!1}))}}},b=u,f=(a("d44c"),a("2877")),p=a("6544"),v=a.n(p),m=a("0798"),h=a("7496"),g=a("8336"),k=a("b0af"),w=a("99d9"),y=a("62ad"),C=a("a523"),V=a("a75b"),x=a("4bd4"),B=a("0fd9"),_=a("8654"),E=Object(f["a"])(b,c,r,!1,null,"200b31dc",null);t["default"]=E.exports;v()(E,{VAlert:m["a"],VApp:h["a"],VBtn:g["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["b"],VCol:y["a"],VContainer:C["a"],VContent:V["a"],VForm:x["a"],VRow:B["a"],VTextField:_["a"]})},"7bec":function(e,t,a){},d44c:function(e,t,a){"use strict";var c=a("7bec"),r=a.n(c);r.a}}]);