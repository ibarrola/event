(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e283428"],{b0c0:function(e,t,a){var o=a("83ab"),i=a("9bf2").f,s=Function.prototype,l=s.toString,n=/^\s*function ([^ (]*)/,r="name";o&&!(r in s)&&i(s,r,{configurable:!0,get:function(){try{return l.call(this).match(n)[1]}catch(e){return""}}})},bea6:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-row",[a("b-col",{staticClass:"text-center"},[a("h5",[e._v("AIIAS People Page")])])],1),a("b-row",[a("b-col",{staticClass:"text-center"},[a("b-form-group",{attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"left","label-size":"sm","label-for":"filterInput"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Clear")])],1)],1)],1)],1)],1),a("b-row",[a("b-col",[a("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"my-table-meetings",align:"left",label:"Sort"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1),a("b-col",{staticClass:"text-left"},[a("p",[e._v("Current Page: "+e._s(e.currentPage))])]),a("b-col",[a("div",{staticClass:"text-right"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalEditPeoples",modifiers:{modalEditPeoples:!0}}],attrs:{variant:"success",size:"sm"},on:{click:function(t){return e.setPeopleEdit("0")}}},[e._v(" Add Person ")])],1)])],1),a("b-row",[a("b-col",[a("b-table",{staticClass:"text-left",attrs:{id:"my-table-people",items:e.peoples,fields:e.fields,"per-page":e.perPage,"current-page":e.currentPage,"sort-by":e.sortBy,"sort-desc":e.sortDesc,filter:e.filter,filterIncludedFields:e.filterOn,"sort-icon-left":"",responsive:"sm",small:""},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalEditPeoples",modifiers:{modalEditPeoples:!0}}],staticClass:"mr-2",attrs:{variant:"primary",size:"sm"},on:{click:function(a){return e.setPeopleEdit(t.item.id)}}},[e._v(" Edit ")]),a("b-button",{staticClass:"mr-2",attrs:{variant:"danger",size:"sm"},on:{click:function(a){return e.deleteData(t.item.id,t.item.last_name)}}},[e._v(" Delete ")])]}}])})],1)],1),a("b-row",[a("b-col",{staticClass:"modal-footer"})],1),a("ModalEditPeople",{attrs:{people:e.people,countries:e.countries}})],1)},i=[];a("4160"),a("b0c0"),a("159b");function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var o=t.handleSubmit;return[a("b-modal",{ref:"modalEditPeoples",attrs:{id:"modalEditPeoples","hide-footer":"",title:"Edit People"}},[a("b-container",{attrs:{fluid:""}},[a("b-form",{on:{reset:e.onReset,submit:function(t){return t.stopPropagation(),t.preventDefault(),o(e.onSubmit)}}},[a("b-row",[a("b-col",{attrs:{sm:"3"}},[e._v(" Last Name ")]),a("b-col",{attrs:{sm:"9"}},[a("validation-provider",{attrs:{name:"Last Name",rules:{required:!0,min:3}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-input",{ref:"input-people-lastname",attrs:{id:"input-people-lastname",name:"input-lastname-people-edit",placeholder:"Last name",maxlength:"50",state:e.getValidationState(t),"aria-describedby":"input-1-live-feedback",trim:"",autofocus:""},model:{value:e.people.last_name,callback:function(t){e.$set(e.people,"last_name",t)},expression:"people.last_name"}}),a("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(e._s(t.errors[0]))])]}}],null,!0)})],1)],1),a("b-row",{staticClass:"row mt-1"},[a("b-col",{attrs:{sm:"3"}},[e._v(" First Name ")]),a("b-col",{attrs:{sm:"9"}},[a("validation-provider",{attrs:{name:"First Name",rules:{required:!0,min:3}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-input",{ref:"input-people-firstname",attrs:{id:"input-people-firstname",name:"input-firstname-people-edit",placeholder:"First name",maxlength:"50",state:e.getValidationState(t),"aria-describedby":"input-1-live-feedback",trim:""},model:{value:e.people.first_name,callback:function(t){e.$set(e.people,"first_name",t)},expression:"people.first_name"}}),a("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(e._s(t.errors[0]))])]}}],null,!0)})],1)],1),a("b-row",{staticClass:"row mt-1"},[a("b-col",{attrs:{sm:"3"}},[e._v(" Midd Name ")]),a("b-col",{attrs:{sm:"9"}},[a("b-form-input",{ref:"input-people-middlename",attrs:{id:"input-people-middlename",name:"input-middlename-people-edit",placeholder:"Middle name of Person",maxlength:"50","aria-describedby":"input-1-live-feedback",trim:""},model:{value:e.people.middle_name,callback:function(t){e.$set(e.people,"middle_name",t)},expression:"people.middle_name"}})],1)],1),a("b-row",{staticClass:"row mt-1"},[a("b-col",{attrs:{sm:"3"}},[e._v(" Email ")]),a("b-col",{attrs:{sm:"9"}},[a("validation-provider",{attrs:{name:"Email",rules:{required:!0,min:3}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-input",{ref:"input-people-email",attrs:{id:"input-people-email",name:"input-email-people-edit",type:"email",placeholder:"Personal Email",maxlength:"50",state:e.getValidationState(t),"aria-describedby":"input-1-live-feedback",trim:""},model:{value:e.people.email,callback:function(t){e.$set(e.people,"email",t)},expression:"people.email"}}),a("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(e._s(t.errors[0]))])]}}],null,!0)})],1)],1),a("b-row",{staticClass:"row mt-1"},[a("b-col",{attrs:{sm:"3"}},[e._v(" Address ")]),a("b-col",{attrs:{sm:"9"}},[a("validation-provider",{attrs:{name:"Address",rules:{required:!0,min:3}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-form-input",{ref:"input-people-address",attrs:{id:"input-people-address",name:"input-address-people-edit",placeholder:"Personal Address",maxlength:"50",state:e.getValidationState(t),"aria-describedby":"input-1-live-feedback",trim:""},model:{value:e.people.address,callback:function(t){e.$set(e.people,"address",t)},expression:"people.address"}}),a("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[e._v(e._s(t.errors[0]))])]}}],null,!0)})],1)],1),a("b-row",{staticClass:"row mt-1"},[a("b-col",{attrs:{sm:"3"}},[e._v(" Country ")]),a("b-col",{attrs:{sm:"9"}},[a("b-form-select",{attrs:{options:e.countries,"aria-describedby":"input-live-help input-live-feedback",placeholder:"Country"},model:{value:e.people.country_id,callback:function(t){e.$set(e.people,"country_id",t)},expression:"people.country_id"}})],1)],1),a("b-row",{staticClass:"row mt-1"},[a("b-col",{staticClass:"modal-footer"})],1),a("b-row",[a("b-col",["0"==e.people.id?a("b-button",{staticClass:"mr-2",attrs:{variant:"success",type:"submit",size:"sm"}},[e._v("Save changes")]):e._e(),"0"!=e.people.id?a("b-button",{staticClass:"mr-2",attrs:{variant:"success",type:"submit",size:"sm"}},[e._v("Apply changes")]):e._e(),a("b-button",{staticClass:"mr-2",attrs:{variant:"danger",type:"reset",size:"sm"}},[e._v("Reset")])],1)],1)],1)],1)],1)]}}])})},r=[],d={name:"ModalEditPeople",props:["people","countries"],created:function(){var e=this;this.$root.$on("bv::modal::show",(function(t,a){"0"!=e.people.id&&"undefined"!=typeof e.people.id&&db.collection("people").doc(e.people.id).get().then((function(t){if(t.exists){var a=t.data();e.people.last_name=a.last_name,e.people.first_name=a.first_name,e.people.middle_name=a.middle_name,e.people.email=a.email,e.people.address=a.address,e.people.country_id=a.country_id}}))}))},methods:{getValidationState:function(e){var t=e.dirty,a=e.validated,o=e.valid,i=void 0===o?null:o;return t||a?i:null},onSubmit:function(){var e=this;if("0"!=this.people.id){var t=this.people.id;db.collection("people").doc(this.people.id).set({date_updated:new Date,last_name:this.people.last_name,first_name:this.people.first_name,middle_name:this.people.middle_name,email:this.people.email,address:this.people.address,country_id:this.people.country_id}).then((function(){console.log("Document written with ID - onSubmit() - SetEvent",t)})).catch((function(e){console.error("Error writing document - onSubmit() - SetEvent",e)}));this.$bvModal.msgBoxOk("Document was edited successfully",{title:"Confirmation",size:"sm",buttonSize:"sm",okVariant:"success",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((function(t){e.boxTwo=t})).catch((function(e){}))}"0"==this.people.id&&(db.collection("people").add({date_updated:new Date,last_name:this.people.last_name,first_name:this.people.first_name,middle_name:this.people.middle_name,email:this.people.email,address:this.people.address,country_id:this.people.country_id}).then((function(e){console.log("Document written with ID - addData(): ",e.id)})).catch((function(e){console.error("Error adding document - addData(): ",e)})),this.$bvModal.msgBoxOk("Document was added successfully",{title:"Confirmation",size:"sm",buttonSize:"sm",okVariant:"success",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((function(t){e.boxTwo=t})).catch((function(e){}))),this.$refs["modalEditPeoples"].hide()},onReset:function(e){e.preventDefault();this.actual_object_focus;this.people.last_name="",this.people.first_name="",this.people.middle_name="",this.people.email="",this.people.address="",this.people.country_id=""}}},c=d,p=a("2877"),u=Object(p["a"])(c,n,r,!1,null,null,null),m=u.exports,f=(l={name:"AIIASPeoples",components:{ModalEditPeople:m},created:function(){this.fetchPeoples(),this.fetchCountries()},data:function(){return{selected:null,countries:[],filter:null,filterOn:[],sortBy:"Name",sortDesc:!1,fields:[{key:"last_name",label:"Name, First Name",sortable:!0,sortDirection:"desc"},{key:"email",label:"Email",sortable:!0},{key:"actions",label:"Actions"}],peoples:[],people:{date_updated:"",last_name:"",first_name:"",middle_name:"",email:"",address:"",country_id:""},modal:null,perPage:10,currentPage:1}}},s(l,"created",(function(){this.fetchPeoples(),this.fetchCountries()})),s(l,"computed",{rows:function(){return this.peoples.length},nameState:function(){return this.people.last_name.length>2}}),s(l,"methods",{setPeopleEdit:function(e){this.people.id=e,this.people.last_name="",this.people.first_name="",this.people.middle_name="",this.people.email="",this.people.address="",this.people.country_id=""},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},fetchPeoples:function(){var e=this;db.collection("people").orderBy("last_name","desc").onSnapshot((function(t){var a=[];t.forEach((function(e){var t={id:e.id,last_name:e.data().last_name+", "+e.data().first_name,email:e.data().email};a.push(t)})),e.peoples=a}))},fetchCountries:function(){var e=this;db.collection("country").orderBy("name","desc").onSnapshot((function(t){var a=[];a.push({value:"",text:"<Please select the country>"}),t.forEach((function(e){var t={value:e.id,text:e.data().name};a.push(t)})),e.countries=a}))},deleteData:function(e,t){var a=this;this.$bvModal.msgBoxConfirm("Are you sure want to delete: "+t+" ?").then((function(t){t&&(db.collection("people").doc(e).delete().then((function(){console.log("Document deleted with ID - deleteData(): ",e)})).catch((function(e){console.error("Error deleting document - deleteData(): ",e)})),a.$bvModal.msgBoxOk("Document was deleted successfully",{title:"Confirmation",size:"sm",buttonSize:"sm",okVariant:"success",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((function(e){a.boxTwo=e})).catch((function(e){})))})).catch((function(e){console.error("Error deleting document - deleteData(): ",e)}))}}),l),b=f,h=Object(p["a"])(b,o,i,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-6e283428.f2d30e95.js.map