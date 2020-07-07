(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23f1bd9a"],{b0c0:function(t,e,n){var o=n("83ab"),r=n("9bf2").f,i=Function.prototype,a=i.toString,s=/^\s*function ([^ (]*)/,c="name";o&&!(c in i)&&r(i,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},e138:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",[n("b-col",{staticClass:"text-center"},[n("h5",[t._v("AIIAS Countries Page")])])],1),n("b-row",[n("b-col",{staticClass:"text-center"},[n("b-form-group",{attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"left","label-size":"sm","label-for":"filterInput"}},[n("b-input-group",{attrs:{size:"sm"}},[n("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1)],1),n("b-row",[n("b-col",[n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table-meetings",align:"left",label:"Sort"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),n("b-col",{staticClass:"text-left"},[n("p",[t._v("Current Page: "+t._s(t.currentPage))])]),n("b-col",[n("div",{staticClass:"text-right"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalEditCountries",modifiers:{modalEditCountries:!0}}],attrs:{variant:"success",size:"sm"},on:{click:function(e){return t.setCountryEdit("0")}}},[t._v(" Add Country ")])],1)])],1),n("b-row",[n("b-col",[n("b-table",{staticClass:"text-left",attrs:{id:"my-table-country",items:t.countries,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,filterIncludedFields:t.filterOn,"sort-icon-left":"",responsive:"sm",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalEditCountries",modifiers:{modalEditCountries:!0}}],attrs:{variant:"primary",size:"sm"},on:{click:function(n){return t.setCountryEdit(e.item.id)}}},[t._v(" Edit ")]),n("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(n){return t.deleteData(e.item.id,e.item.name)}}},[t._v(" Delete ")])]}}])})],1)],1),n("b-row",[n("b-col",{staticClass:"modal-footer"})],1),n("ModalEditCountry",{attrs:{country:t.country}})],1)},r=[],i=(n("4160"),n("b0c0"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.handleSubmit;return[n("b-modal",{ref:"modalEditCountries",attrs:{id:"modalEditCountries","hide-footer":"",title:"Edit Country"}},[n("b-container",{attrs:{fluid:""}},[n("b-form",{on:{reset:t.onReset,submit:function(e){return e.stopPropagation(),e.preventDefault(),o(t.onSubmit)}}},[n("b-row",[n("b-col",{attrs:{sm:"3"}},[t._v(" Event ")]),n("b-col",{attrs:{sm:"9"}},[n("validation-provider",{attrs:{name:"Name",rules:{required:!0,min:3}},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-form-input",{ref:"input-country-name",attrs:{id:"input-country-name",name:"input-name-country-edit",placeholder:"Name of Country",maxlength:"50",state:t.getValidationState(e),"aria-describedby":"input-1-live-feedback",trim:"",autofocus:""},model:{value:t.country.name,callback:function(e){t.$set(t.country,"name",e)},expression:"country.name"}}),n("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v(t._s(e.errors[0]))])]}}],null,!0)})],1)],1),n("b-row",{staticClass:"row mt-1"},[n("b-col",{staticClass:"modal-footer"})],1),n("b-row",[n("b-col",["0"==t.country.id?n("b-button",{attrs:{variant:"success",type:"submit",size:"sm"}},[t._v("Save changes")]):t._e(),"0"!=t.country.id?n("b-button",{attrs:{variant:"success",type:"submit",size:"sm"}},[t._v("Apply changes")]):t._e(),n("b-button",{attrs:{variant:"danger",type:"reset",size:"sm"}},[t._v("Reset")])],1)],1)],1)],1)],1)]}}])})}),a=[],s={name:"ModalEditCountry",props:["country"],created:function(){var t=this;this.$root.$on("bv::modal::show",(function(e,n){"0"!=t.country.id&&"undefined"!=typeof t.country.id&&db.collection("country").doc(t.country.id).get().then((function(e){if(e.exists){var n=e.data();t.country.name=n.name}}))}))},methods:{getValidationState:function(t){var e=t.dirty,n=t.validated,o=t.valid,r=void 0===o?null:o;return e||n?r:null},onSubmit:function(){var t=this;if("0"!=this.country.id){var e=this.country.id;db.collection("country").doc(this.country.id).set({date_updated:new Date,name:this.country.name}).then((function(){console.log("Document written with ID - onSubmit() - SetEvent",e)})).catch((function(t){console.error("Error writing document - onSubmit() - SetEvent",t)}));this.$bvModal.msgBoxOk("Document was edited successfully",{title:"Confirmation",size:"sm",buttonSize:"sm",okVariant:"success",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((function(e){t.boxTwo=e})).catch((function(t){}))}"0"==this.country.id&&(db.collection("country").add({date_updated:new Date,name:this.country.name}).then((function(t){console.log("Document written with ID - addData(): ",t.id)})).catch((function(t){console.error("Error adding document - addData(): ",t)})),this.$bvModal.msgBoxOk("Document was added successfully",{title:"Confirmation",size:"sm",buttonSize:"sm",okVariant:"success",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((function(e){t.boxTwo=e})).catch((function(t){}))),this.$refs["modalEditCountries"].hide()},onReset:function(t){t.preventDefault();var e=this.actual_object_focus;this.country.name="",$(e).focus()}}},c=s,u=n("2877"),l=Object(u["a"])(c,i,a,!1,null,null,null),d=l.exports,f={name:"AIIASCountries",components:{ModalEditCountry:d},created:function(){this.fetchCountries()},data:function(){return{filter:null,filterOn:[],sortBy:"Name",sortDesc:!1,fields:[{key:"name",sortable:!0,id:"id"},{key:"actions",label:"Actions"}],countries:[],country:{name:""},perPage:10,currentPage:1}},computed:{rows:function(){return this.countries.length},nameState:function(){return this.country.name.length>2}},methods:{setCountryEdit:function(t){this.country.id=t,this.country.name=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},fetchCountries:function(){var t=this;db.collection("country").orderBy("name","desc").onSnapshot((function(e){var n=[];e.forEach((function(t){var e={id:t.id,name:t.data().name};n.push(e)})),t.countries=n}))},deleteData:function(t,e){var n=this;this.$bvModal.msgBoxConfirm("Are you sure want to delete: "+e+" ?").then((function(e){e&&(db.collection("country").doc(t).delete().then((function(){console.log("Document deleted with ID - deleteData(): ",t)})).catch((function(t){console.error("Error deleting document - deleteData(): ",t)})),n.$bvModal.msgBoxOk("Document was deleted successfully",{title:"Confirmation",size:"sm",buttonSize:"sm",okVariant:"success",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((function(t){n.boxTwo=t})).catch((function(t){})))})).catch((function(t){console.error("Error deleting document - deleteData(): ",t)}))}}},m=f,b=Object(u["a"])(m,o,r,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-23f1bd9a.03617f1c.js.map