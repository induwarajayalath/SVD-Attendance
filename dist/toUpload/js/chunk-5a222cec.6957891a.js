(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a222cec"],{"22ff":function(e,t,a){"use strict";var r=a("81ef"),o=a.n(r);o.a},"81ef":function(e,t,a){},cd59:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-content",{attrs:{id:"login",bg:!1}},[r("vue-particles",{attrs:{color:"#000044","particle-opacity":.3,"particles-number":120,"shape-type":"circle","particle-size":6,"lines-color":"#FFA000","lines-width":2,"line-linked":!0,"line-opacity":.4,"lines-distance":100,"move-speed":3,"hover-effect":!0,"hover-mode":"grab","click-effect":!0,"click-mode":"repulse"}})],1),r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4",lg:"3"}},[r("v-alert",{attrs:{type:"error"},model:{value:e.showError,callback:function(t){e.showError=t},expression:"showError"}},[e._v(" "+e._s(this.errormm)+" ")]),r("v-card",{staticClass:"elevation-9 pa-3",attrs:{color:"#ffffff"}},[r("v-card-text",[r("div",{staticClass:"layout column align-center"},[r("img",{attrs:{src:a("926b"),alt:"DUC logo",width:"200",height:"120"}}),r("h1",{staticClass:"flex my-4 primary--text"},[e._v("Mark Attendance")])]),r("v-form",{on:{submit:function(t){return t.preventDefault(),e.enterBarcode(t)}}},[r("v-text-field",{attrs:{"append-icon":"scanner",name:"barcode",label:"Scan the barcode",type:"number"},model:{value:e.barcode,callback:function(t){e.barcode=t},expression:"barcode"}})],1)],1),r("v-card-actions",[r("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.enterBarcode}},[e._v("Enter")])],1)],1)],1)],1)],1),r("v-snackbar",{attrs:{timeout:1500,color:"success",outlined:"",right:"",top:""},model:{value:e.successBool,callback:function(t){e.successBool=t},expression:"successBool"}},[e._v(" "+e._s(this.successMsg)+" ")])],1)},o=[],c=(a("5706"),a("8aa50"),a("2b0e")),s=a("2b27"),n=a.n(s),i=a("98c9"),l=a("683f");c["a"].use(l["a"]),c["a"].use(i["a"]),c["a"].use(n.a);var d={data:function(){return{loading:!1,barcode:"",showError:!1,errormm:" ",successMsg:"",successBool:!1}},methods:{enterBarcode:function(e){this.showError=!0,this.errormm="WAIT !!";var t=new Date,a={barcode:this.barcode,time:t.getHours()+":"+(t.getMinutes()<10?"0":"")+t.getMinutes()+":"+(t.getSeconds()<10?"0":"")+t.getSeconds(),date:t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate(),timeStamp:t};console.log(a)}}},u=d,f=(a("22ff"),a("2877")),p=a("6544"),b=a.n(p),v=a("0798"),m=a("7496"),h=a("8336"),g=a("b0af"),w=a("99d9"),k=a("62ad"),V=a("a523"),C=a("a75b"),x=a("4bd4"),y=a("0fd9"),B=a("2db4"),_=a("8654"),E=Object(f["a"])(u,r,o,!1,null,"4c187e72",null);t["default"]=E.exports;b()(E,{VAlert:v["a"],VApp:m["a"],VBtn:h["a"],VCard:g["a"],VCardActions:w["a"],VCardText:w["b"],VCol:k["a"],VContainer:V["a"],VContent:C["a"],VForm:x["a"],VRow:y["a"],VSnackbar:B["a"],VTextField:_["a"]})}}]);