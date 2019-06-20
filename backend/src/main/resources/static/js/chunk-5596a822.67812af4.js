(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5596a822"],{3867:function(t,e,a){"use strict";var o=a("4a9e"),i=a.n(o);e["default"]=i.a},"4a9e":function(t,e){},5208:function(t,e,a){"use strict";var o=a("59f0"),i=a("3867"),s=a("2877"),n=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=n.exports},"59f0":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"additionalServices"}})},i=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i})},a8a8:function(t,e,a){},cb63:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"reserveHotel"}},[a(t.component,{tag:"component",attrs:{hotelId:t.hotelId,checkInDate:t.checkInDate,checkOutDate:t.checkOutDate},on:{goToQuickReservations:function(e){return t.changeComp(e)},goBackToRegularReservation:function(e){t.component="hotelReservation"}}})],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hotelReservation"},[a("v-snackbar",{attrs:{right:"",top:"",color:"indigo"},model:{value:t.empty,callback:function(e){t.empty=e},expression:"empty"}},[t._v("\n      We're all out of hotels :(\n      "),a("v-btn",{attrs:{color:"white",flat:""},on:{click:function(e){t.empty=!1}}},[t._v("\n      Close\n      ")])],1),a("v-stepper",{staticStyle:{"background-color":"#FAFAFA"},attrs:{vertical:""},model:{value:t.e6,callback:function(e){t.e6=e},expression:"e6"}},[a("v-stepper-step",{attrs:{complete:t.e6>1,step:"1"}},[t._v("Pick a hotel")]),a("v-stepper-content",{attrs:{step:"1"}},[a("v-dialog",{attrs:{"max-width":"600px",persistent:""},model:{value:t.dateDialog,callback:function(e){t.dateDialog=e},expression:"dateDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"ml-3 headline font-weight-light indigo--text"},[t._v("Please put in information about your stay")])]),a("v-card-text",[a("v-layout",{attrs:{row:""}},[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-flex",{attrs:{xs6:"",md6:""}},[a("v-text-field",t._g({staticClass:"mx-3",attrs:{readonly:"","append-icon":"event",label:"Check-in*","max-width":"30px"},model:{value:t.checkInDate,callback:function(e){t.checkInDate=e},expression:"checkInDate"}},o))],1)]}}]),model:{value:t.checkInMenuDialog,callback:function(e){t.checkInMenuDialog=e},expression:"checkInMenuDialog"}},[a("v-date-picker",{attrs:{disabled:"",color:"indigo lighten-1"},on:{input:function(e){t.checkInMenuDialog=!1}},model:{value:t.checkInDate,callback:function(e){t.checkInDate=e},expression:"checkInDate"}})],1),a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-flex",{attrs:{xs6:"",md6:""}},[a("v-text-field",t._g({staticClass:"mx-3",attrs:{"append-icon":"event",label:"Check-out*"},model:{value:t.checkOutDate,callback:function(e){t.checkOutDate=e},expression:"checkOutDate"}},o))],1)]}}]),model:{value:t.checkOutMenuDialog,callback:function(e){t.checkOutMenuDialog=e},expression:"checkOutMenuDialog"}},[a("v-date-picker",{attrs:{min:t.checkInDate,color:"indigo lighten-1"},on:{input:function(e){t.checkOutMenuDialog=!1}},model:{value:t.checkOutDate,callback:function(e){t.checkOutDate=e},expression:"checkOutDate"}})],1)],1),a("v-layout",{staticClass:"px-3",attrs:{row:""}},[a("v-range-slider",{attrs:{label:"Price range",max:5e3,min:0,step:100,"thumb-label":""},model:{value:t.priceRange,callback:function(e){t.priceRange=e},expression:"priceRange"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"indigo"},on:{click:t.validateDates}},[t._v("Confirm")])],1)],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:"",sm4:"",md4:""}},[a("div",{attrs:{id:"form"}},[a("form",[a("v-flex",[a("v-layout",{attrs:{column:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs6:"",md6:""}},[a("v-text-field",{staticClass:"mx-3",attrs:{"append-icon":"search",label:"Hotel name"},model:{value:t.hotelName,callback:function(e){t.hotelName=e},expression:"hotelName"}})],1),a("v-flex",{attrs:{xs6:"",md6:""}},[a("v-text-field",{staticClass:"mx-3",attrs:{"append-icon":"location_on",label:"Hotel location"},model:{value:t.hotelLocation,callback:function(e){t.hotelLocation=e},expression:"hotelLocation"}})],1)],1),a("v-btn",{attrs:{outline:"",color:"indigo"},on:{click:t.fetchHotels}},[a("span",[t._v("Search hotels")])])],1)],1)],1)]),a("div",{attrs:{id:"info"}},[t.showCard?a("v-card",{staticClass:"mb-2",attrs:{flat:"",color:"grey lighten-5"}},[a("v-spacer"),a("v-toolbar",{attrs:{color:"grey lighten-5",flat:""}}),a("v-card-text",[a("v-layout",{attrs:{row:""}},[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-flex",{attrs:{xs6:"",md6:""}},[a("v-text-field",t._g({staticClass:"mx-3",attrs:{readonly:"","append-icon":"event",label:"Check-in*","max-width":"30px"},model:{value:t.checkInDate,callback:function(e){t.checkInDate=e},expression:"checkInDate"}},o))],1)]}}],null,!1,2132788671),model:{value:t.checkInMenu,callback:function(e){t.checkInMenu=e},expression:"checkInMenu"}},[a("v-date-picker",{attrs:{disabled:"",color:"indigo lighten-1"},on:{input:function(e){t.checkInMenu=!1}},model:{value:t.checkInDate,callback:function(e){t.checkInDate=e},expression:"checkInDate"}})],1),a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-flex",{attrs:{xs6:"",md6:""}},[a("v-text-field",t._g({staticClass:"mx-3",attrs:{"append-icon":"event",label:"Check-out*"},model:{value:t.checkOutDate,callback:function(e){t.checkOutDate=e},expression:"checkOutDate"}},o))],1)]}}],null,!1,732677709),model:{value:t.checkOutMenu,callback:function(e){t.checkOutMenu=e},expression:"checkOutMenu"}},[a("v-date-picker",{attrs:{min:t.checkInDate,color:"indigo lighten-1"},on:{input:function(e){t.checkOutMenu=!1}},model:{value:t.checkOutDate,callback:function(e){t.checkOutDate=e},expression:"checkOutDate"}})],1)],1),a("v-layout",{staticClass:"px-3",attrs:{row:""}},[a("v-range-slider",{attrs:{label:"Price range",max:5e3,min:0,step:100,"thumb-label":""},model:{value:t.priceRange,callback:function(e){t.priceRange=e},expression:"priceRange"}})],1)],1)],1):t._e()],1)]),a("v-flex",{attrs:{xs8:"",sm8:"",md8:""}},[a("div",{attrs:{id:"hotelList"}},[a("v-item-group",[a("v-layout",{attrs:{column:""}},[a("v-list",{staticClass:"scroll-y pt-0",staticStyle:{height:"700px",background:"#FAFAFA"}},t._l(this.hotels,function(e){return a("v-flex",{key:e.name,staticClass:"d-inline align-center"},[a("v-item",{attrs:{width:"100%"}},[a("div",{staticStyle:{margin:"auto"}},[a("v-card",{attrs:{flat:""}},[a("v-container",{staticStyle:{"background-color":"#FAFAFA"},attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:"",md10:"","offset-sm1":""}},[a("v-card",[a("v-responsive",{attrs:{"aspect-ratio":8}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:"",sm4:"",md4:""}},[t._o(a("v-img",{staticClass:"pr-0",attrs:{src:t.mockPics[Math.floor(Math.random()*t.mockPics.length)],height:"100%","max-height":"170px","max-width":"372px"}}),0,e.name)],1),a("v-flex",{attrs:{xs3:"",sm3:"",md3:""}},[a("v-layout",{attrs:{"align-start":"","justify-start":"",column:""}},[a("v-card-text",[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.name))]),a("div",{staticClass:"pl-0"},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("location_on")]),a("u",{staticClass:"blue--text text--darken-2",on:{click:function(a){return t.viewAddress(e.location)}}},[t._v(t._s(e.location.formattedAddress))])],1),a("div",{staticClass:"d-flex"},[a("v-rating",{attrs:{value:e.averageFeedback,color:"amber",dense:"","half-increments":"",readonly:""}})],1)])])],1)],1),a("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[a("v-layout",{attrs:{column:"","mt-3":""}},[a("v-btn",{attrs:{outline:"",color:"indigo",flat:""},on:{click:function(a){return t.hotelSelected(e)}}},[t._v("\n                                                      Reserve\n                                                      "),a("v-icon",{attrs:{right:""}},[t._v("input")])],1),a("v-btn",{attrs:{outline:"",color:"indigo",flat:""},on:{click:function(a){return t.showHotelProfile(e)}}},[t._v("\n                                                      Hotel profile\n                                                  ")]),a("v-btn",{attrs:{outline:"",color:"indigo",flat:""},on:{click:function(a){return t.goToQuickRes(e.id)}}},[t._v("\n                                                      Discounted rooms\n                                                  ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)])],1)}),1)],1),a("v-layout",{attrs:{"justify-center":""}},[this.page>0?a("v-btn",{attrs:{block:"",flat:""},on:{click:t.previousPage}},[a("v-icon",[t._v("arrow_backward")])],1):a("v-btn",{attrs:{block:"",flat:"",disabled:""}},[a("v-icon",[t._v("arrow_backward")])],1),a("v-btn",{attrs:{block:"",flat:""},on:{click:t.nextPage}},[a("v-icon",[t._v("arrow_forward")])],1)],1)],1)],1)])],1),a("v-dialog",{attrs:{width:"800px"},model:{value:t.locationDialog,callback:function(e){t.locationDialog=e},expression:"locationDialog"}},[a("v-card",[a("location-map",{attrs:{selectedHotelLocation:t.selectedHotelLocation}})],1)],1),t.profileDialog?a("v-dialog",{model:{value:t.profileDialog,callback:function(e){t.profileDialog=e},expression:"profileDialog"}},[a("v-card",[a("hotel-profile",{attrs:{selectedHotel:t.selectedHotel},on:{closeProfileDialog:function(e){t.profileDialog=!1}}})],1)],1):t._e()],1),a("v-stepper-step",{attrs:{complete:t.e6>2,step:"2"}},[t._v("Pick rooms and additional services")]),a("v-stepper-content",{attrs:{step:"2"}},[a(t.component2,{tag:"component",attrs:{selectedHotel:t.selectedHotel,days:t.days,checkInDate:t.checkInDate,checkOutDate:t.checkOutDate,rooms:t.rooms,priceRange:t.priceRange,canRender:t.canRender},on:{continueReservation:function(e){return t.finishReservation(e)},goBack:function(e){return t.goBack(e)}}})],1)],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"rooms"}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs8:"",sm8:"",md8:""}},[a("v-item-group",[a("v-layout",{attrs:{column:""}},[a("v-list",{staticClass:"scroll-y pt-0",staticStyle:{height:"700px",background:"#FAFAFA"}},t._l(this.selectedHotel.roomTypes,function(e){return a("v-flex",{key:e.type,staticClass:"d-inline align-center"},[t.proveraSoba(e)?a("v-item",{attrs:{width:"100%"}},[a("div",{staticStyle:{margin:"auto"}},[a("v-card",{attrs:{flat:"",color:"grey lighten-5"}},[a("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",[a("v-card",{attrs:{color:"grey lighten-4"}},[a("v-layout",[a("v-flex",{attrs:{xs3:"",sm3:"",md3:""}},[a("v-img",{staticClass:"elevation-4",attrs:{src:t.image,height:"100%","max-height":"216px","max-width":"372px"}})],1),a("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[a("v-card-text",{staticClass:"indigo--text font-weight-light subheading"},[a("v-flex",{attrs:{id:"description"}},[t._v("\n                                                "+t._s(e.description)+" ")])],1)],1),a("v-flex",{attrs:{xs4:"",sm4:"",md4:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[a("v-layout",{staticClass:"mt-1 ml-2 indigo--text font-weight-regular subheading",attrs:{column:"",align:"",left:""}},[a("div",{staticClass:"my-2"},[a("v-icon",{attrs:{color:"indigo"}},[t._v("person")]),t._v(" "+t._s(e.capacity))],1),a("v-divider"),a("div",{staticClass:"my-2"},[t._v("Single beds: "+t._s(e.singleBedCount))]),a("v-divider"),a("div",{staticClass:"my-2"},[t._v("Double beds: "+t._s(e.doubleBedCount))]),a("v-divider"),a("div",{staticClass:"my-2"},[t._v("Balcony: \n                                                    "),e.hasBalcony?a("v-icon",{attrs:{color:"indigo"}},[t._v("done")]):a("v-icon",{attrs:{color:"indigo"}},[t._v("clear")])],1),a("v-divider"),a("div",{staticClass:"my-2"},[e.hasTV?a("v-icon",{attrs:{color:"indigo"}},[t._v("tv")]):t._e()],1)],1)],1),a("v-layout",{attrs:{column:"",align:"",right:""}},[a("v-card",{staticClass:"white--text",attrs:{flat:"",height:"216px",color:"indigo lighten-3"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"text-xs-center headline font-weight-light"},[t._v("Price for "+t._s(t.days)+" nights:")]),a("div",{staticClass:"mt-1 text-xs-center display-1"},[t._v(t._s(t.totalPrice(e.pricePerNight))+"€")])])]),a("v-card-actions",[a("v-btn",{attrs:{flat:"",dark:"",outline:"",block:""},on:{click:function(a){return t.openRoomsDialog(e)}}},[t._v("Choose rooms")])],1)],1)],1)],1)],1)],1),a("v-card-actions",{staticClass:"pa-3"},[a("span",{staticClass:"headline indigo--text"},[t._v(t._s(e.type))]),a("v-spacer"),a("v-rating",{attrs:{value:e.averageFeedback,color:"indigo",dense:"","half-increments":"",readonly:""}})],1)],1)],1)],1)],1)],1)],1)]):t._e()],1)}),1)],1)],1)],1),a("v-flex",{staticClass:"ml-3",attrs:{xs4:"",sm4:"",md4:""}},[a("v-card",{attrs:{flat:""}},[a("v-toolbar",{attrs:{tile:"",color:"indigo lighten-3",flat:""}},[a("v-toolbar-title",{staticClass:"text-uppercase white--text font-weight-light"},[t._v("Additional services")])],1)],1),a("v-layout",{staticStyle:{height:"650px"},attrs:{column:""}},[a("v-flex",{staticStyle:{overflow:"auto"}},[t.canRender?a("v-data-table",{attrs:{items:t.selectedHotel.additionalServicesPriceList.priceListItems,"item-key":"name","hide-actions":"","hide-headers":"","headers-length":t.headersLength,"no-data-text":"This hotel does not offer any additional services"},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",{on:{click:function(t){e.expanded=!e.expanded}}},[a("td",[a("v-checkbox",{attrs:{primary:"","hide-details":"",color:"indigo"},model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"props.selected"}})],1),a("td",{staticClass:"text-xs-left font-weight-bold indigo--text"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left font-weight-bold indigo--text"},[t._v(t._s(e.item.price)+"€")])])]}},{key:"expand",fn:function(e){return[a("v-card",{attrs:{flat:""}},[a("v-card-text",[t._v(t._s(e.item.description))])],1)]}}],null,!1,2998707215),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}):t._e()],1)],1)],1)],1),a("v-layout",{staticClass:"mr-5",attrs:{row:""}},[a("v-spacer"),a("v-btn",{attrs:{flat:"",outline:"",color:"indigo"},on:{click:t.reserveHotelRoom}},[t._v("Reserve")]),a("v-btn",{attrs:{flat:""},on:{click:t.goBack}},[t._v("Back")])],1),a("v-dialog",{attrs:{width:"550px"},model:{value:t.confirmResDialog,callback:function(e){t.confirmResDialog=e},expression:"confirmResDialog"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",{staticClass:"font-weight-light"},[t._v("Flight")]),a("span",[t._v("Booking")])]),a("v-spacer"),a("span",{staticClass:"title text-uppercase grey--text font-weight-light"},[t._v("Hotel Reservation")])],1),a("v-card-text",[a("v-layout",{attrs:{column:""}},[a("v-layout",{staticClass:"title font-weight-light indigo--text",attrs:{row:""}},[a("span",[t._v("Room price:")]),a("v-spacer"),a("span",[t._v(t._s(t.totalRoomsPrice(t.reservation.listOfRooms))+"€")])],1),a("br"),a("v-layout",{staticClass:"title font-weight-light indigo--text",attrs:{row:""}},[a("span",[t._v("Additional services:")]),a("v-spacer"),a("span",[t._v(t._s(t.additionalServicesPrice)+"€")])],1),a("br"),a("v-divider",{attrs:{light:""}}),a("br"),a("v-layout",{staticClass:"headline font-weight-medium indigo--text text-uppercase",attrs:{row:""}},[a("span",[t._v("Total")]),a("v-spacer"),a("span",[t._v(t._s(t.reservation.totalPrice)+"€")])],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:""}},[t._v("Cancel")]),a("v-btn",{attrs:{outline:"",color:"success",flat:""},on:{click:t.confirmReservation}},[t._v("\n                    Confirm reservation \n                    "),a("v-icon",{attrs:{right:""}},[t._v("done_outline")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"300px"},model:{value:t.chooseRoomsDialog,callback:function(e){t.chooseRoomsDialog=e},expression:"chooseRoomsDialog"}},[a("v-card",{attrs:{height:"500px"}},[a("v-layout",{staticStyle:{height:"500px"},attrs:{column:""}},[a("v-flex",{staticStyle:{overflow:"auto"}},[a("v-data-table",{attrs:{items:t.roomsToShow,headers:t.roomHeaders,"headers-length":t.headersLength,"item-key":"roomNumber","hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.roomNumber))]),a("td",[t._v(t._s(e.item.floor))]),a("td",[a("v-checkbox",{attrs:{"hide-details":"",color:"indigo"},model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"props.selected"}})],1)]}}]),model:{value:t.selectedRooms,callback:function(e){t.selectedRooms=e},expression:"selectedRooms"}})],1)],1)],1)],1)],1)},c=[],l={props:["canRender","selectedHotel","days","checkInDate","checkOutDate","rooms","priceRange"],data:function(){return{enabled:!1,averageFeedback:3.46,image:"https://i.pinimg.com/originals/1b/c3/5f/1bc35faccb8be639c3326ec41fb20506.jpg",error:!1,reservation:{listOfRooms:[],totalPrice:0},temp:[{name:"WiFi",pricePerNight:5,description:"OPIS"},{name:"Parking",pricePerNight:10,description:"OPIS"},{name:"Underground parking",pricePerNight:10,description:"OPIS"},{name:"City tour arrangements",pricePerNight:10,description:"OPIS"},{name:"Smoking area club",pricePerNight:10,description:"OPIS"},{name:"Phone service",pricePerNight:10,description:"OPIS"},{name:"Spa",pricePerNight:10,description:"OPIS"},{name:"Gym",pricePerNight:10,description:"OPIS"},{name:"Dry cleaning",pricePerNight:10,description:"OPIS"},{name:"Laundry service",pricePerNight:10,description:"OPIS"}],selected:[],headersLength:3,roomsHeadersLength:2,chooseRoomsDialog:!1,roomsToShow:[],selectedRooms:[],roomHeaders:[{text:"Room number",align:"left",sortable:!1,value:"roomNumber"},{text:"Floor",align:"left",sortable:!1,value:"floor"},{text:"",align:"left",sortable:!1,value:"check"}],guests:localStorage.getItem("guests"),confirmResDialog:!1}},methods:{openRoomsDialog:function(t){this.roomsToShow=this.rooms.filter(function(e){return e.roomType.type==t.type}),this.chooseRoomsDialog=!0},reserveHotelRoom:function(){for(var t=0,e=0;e<this.selectedRooms.length;e++)t+=this.selectedRooms[e].roomType.capacity;0!=t?t>this.guests?this.$swal("We're sorry","You want to reserve more beds than you need to. Please try again","warning"):t<this.guests?this.$swal("We're sorry","You're gonna need more beds'. Please try again","warning"):(this.reservation.listOfRooms=this.selectedRooms,this.reservation.dateFrom=this.checkInDate,this.reservation.dateTo=this.checkOutDate,this.reservation.totalPrice=this.calculateTotalPrice(this.reservation.listOfRooms),this.reservation.additionalServices=this.selected,this.confirmResDialog=!0):this.$swal("No rooms selected","","warning")},confirmReservation:function(){var t=this;console.log(this.selectedRooms);var e={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};this.$axios.post("/api/reservations/reserveRoom/"+localStorage.getItem("groupResId"),this.reservation,e).then(function(e){t.confirmResDialog=!1,t.$swal({title:"Reservation successful",text:"Do you want to continue to vehicle reservation?",type:"success",showCancelButton:!0,confirmButtonText:"Yes, continue",cancelButtonText:"No, I don't"}).then(function(e){e.value?t.$router.push("/vehicleReservation"):(localStorage.removeItem("groupResId"),localStorage.removeItem("arrivalDate"),localStorage.removeItem("guests"),t.$router.push("/"))})}).catch(function(e){t.$swal("Please try again","One or more rooms have been reserved in the meantime","error")})},calculateTotalPrice:function(t){for(var e=0,a=0;a<t.length;a++)e+=t[a].roomType.pricePerNight*this.days;return e+=this.additionalServicesPrice,e},totalRoomsPrice:function(t){for(var e=0,a=0;a<t.length;a++)e+=t[a].roomType.pricePerNight*this.days;return e},totalPrice:function(t){return this.days*t},proveraSoba:function(t){return t.pricePerNight>this.priceRange[0]&&t.pricePerNight<this.priceRange[1]},goBack:function(){this.$emit("goBack")}},computed:{additionalServicesPrice:function(){for(var t=0,e=0;e<this.selected.length;e++)t+=this.selected[e].price*this.days;return t}}},d=l,u=a("2877"),v=a("6544"),h=a.n(v),m=a("8336"),p=a("b0af"),g=a("99d9"),f=a("12b2"),x=a("ac7c"),k=a("a523"),b=a("8fea"),y=a("169a"),_=a("ce7e"),w=a("0e8f"),D=a("132d"),C=a("adda"),R=a("d903"),I=a("604c"),S=a("a722"),V=a("8860"),P=a("1d4d"),O=a("9910"),T=a("71d9"),H=a("2a7f"),L=Object(u["a"])(d,r,c,!1,null,null,null),B=L.exports;h()(L,{VBtn:m["a"],VCard:p["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:f["a"],VCheckbox:x["a"],VContainer:k["a"],VDataTable:b["a"],VDialog:y["a"],VDivider:_["a"],VFlex:w["a"],VIcon:D["a"],VImg:C["a"],VItem:R["a"],VItemGroup:I["b"],VLayout:S["a"],VList:V["a"],VRating:P["a"],VSpacer:O["a"],VToolbar:T["a"],VToolbarTitle:H["b"]});var A=a("5208"),F=a("d1ac"),M=a("da9d"),$={components:{"location-map":F["a"],"hotel-profile":M["a"],rooms:B,additionalServices:A["default"]},data:function(){return{canRender:!1,dateDialog:!1,showCard:!1,component2:"rooms",component3:"additionalServices",selectedHotel:{},selectedHotelLocation:{},locationDialog:!1,profileDialog:!1,reservation:{},e6:1,page:0,size:5,hotels:[],empty:!1,rating:3.46,image:"https://media.cntraveler.com/photos/53da828b6dec627b149eeee6/4:3/w_420,c_limit/fairmont-kea-lani-hawaii-maui.jpg",hotelName:"",hotelLocation:"",checkInMenu:!1,checkInMenuDialog:!1,checkInDate:localStorage.getItem("arrivalDate"),checkOutMenu:!1,checkOutMenuDialog:!1,checkOutDate:localStorage.getItem("arrivalDate"),minDate:(new Date).toISOString().substr(0,10),days:"",totalRoomPrice:"",priceListItems:[],priceRange:[0,5e3],rooms:[],mockPics:["https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2018/01/08153753/Pic-1.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/01/MIRACLE-GENERAL-15_preview-1.jpeg","https://beautiful-hotels.com/wp-content/uploads/2018/02/96725900-1.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/02/47165351-1.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/02/RAAS-Devigarh-all-suites-resort-Udaipur-India-1.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/01/54365905.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/02/Low_VSEP_59917408_Sunset.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/01/Low_AKIH_61614149_Front_pool_view.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/02/Gili-Lankanfushi-Resort-Maldives-2.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/02/1-Baros-Resort-Maldives-5-Star-Luxury-Resort.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/01/52508017.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/02/6-Soneva-Jani-Resort-Maldives.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/01/68482593-1.jpg","https://beautiful-hotels.com/wp-content/uploads/2018/02/hpc_1141425020-1.jpg"]}},methods:{fetchHotels:function(){var t=this;this.$axios.get("/api/hotels/searchHotels",{headers:{Authorization:"Bearer "+localStorage.getItem("token")},params:{page:this.page,size:this.size,hotelName:this.hotelName,hotelLocation:this.hotelLocation}}).then(function(e){t.hotels=e.data})},nextPage:function(){var t=this;this.page+=1,this.$axios.get("/api/hotels/searchHotels",{headers:{Authorization:"Bearer "+localStorage.getItem("token")},params:{page:this.page,size:this.size,hotelName:this.hotelName,hotelLocation:this.hotelLocation}}).then(function(e){e.data.length>0?t.hotels=e.data:(t.page-=1,t.empty=!0,setTimeout(function(){t.empty=!1},3e3))})},previousPage:function(){this.page-=1,this.fetchHotels()},hotelSelected:function(t){var e=this,a={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};this.selectedHotel=t,this.$axios.get("/api/hotels/getHotelRooms/"+this.selectedHotel.id+"/"+this.checkInDate+"/"+this.checkOutDate,a).then(function(t){e.rooms=t.data,e.canRender=!0,e.e6=2})},validateDates:function(){if(this.checkOutDate==this.checkInDate||this.checkOutDate<this.checkInDate)return this.$swal("Invalid check-in/check-out dates","","error"),!1;var t=(new Date(this.checkOutDate)-new Date(this.checkInDate))/864e5;return this.days=t,this.dateDialog=!1,this.showCard=!0,!0},finishReservation:function(t){this.reservation=t,this.reservation.selectedHotel=this.selectedHotel,this.reservation.dateFrom=this.checkInDate,this.reservation.dateTo=this.checkOutDate,this.priceListItems=this.selectedHotel.additionalServicesPriceList.priceListItems,this.e6=3},goBack:function(){this.e6-=1},goToQuickRes:function(t){if(this.validateDates)var e={hotelId:t,checkInDate:this.checkInDate,checkOutDate:this.checkOutDate};this.$emit("goToQuickReservations",e)},viewAddress:function(t){this.selectedHotelLocation={lat:t.latitude,lng:t.longitude},this.locationDialog=!0},showHotelProfile:function(t){this.profileDialog=!0,this.selectedHotel=t}},mounted:function(){this.dateDialog=!0,this.fetchHotels()}},N=$,j=a("2e4b"),z=a("e449"),E=a("5963"),q=a("6b53"),G=a("2db4"),Q=a("7e85"),W=a("e516"),J=a("56a4"),U=a("2677"),Y=Object(u["a"])(N,s,n,!1,null,null,null),K=Y.exports;h()(Y,{VBtn:m["a"],VCard:p["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:f["a"],VContainer:k["a"],VDatePicker:j["a"],VDialog:y["a"],VFlex:w["a"],VIcon:D["a"],VImg:C["a"],VItem:R["a"],VItemGroup:I["b"],VLayout:S["a"],VList:V["a"],VMenu:z["a"],VRangeSlider:E["a"],VRating:P["a"],VResponsive:q["a"],VSnackbar:G["a"],VSpacer:O["a"],VStepper:Q["a"],VStepperContent:W["a"],VStepperStep:J["a"],VTextField:U["a"],VToolbar:T["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"quickRoomReservation"}},[a("v-btn",{attrs:{color:"indigo",flat:""},on:{click:t.goBack}},[a("v-icon",{attrs:{left:""}},[t._v("arrow_back")]),t._v("\n        Regular reservation \n    ")],1),a("v-item-group",[a("v-layout",{attrs:{column:""}},[a("v-list",{staticClass:"scroll-y",staticStyle:{height:"700px"}},t._l(this.quickRoomReservations,function(e){return a("v-flex",{key:e.id,staticClass:"d-inline align-center"},[a("v-item",{attrs:{width:"100%"}},[a("div",{staticStyle:{margin:"auto"}},[a("v-card",{attrs:{flat:""}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs8:"",sm8:"",md8:""}},[a("v-card",{attrs:{color:"grey lighten-4"}},[a("v-layout",[a("v-flex",{attrs:{xs3:"",sm3:"",md3:""}},[a("v-img",{staticClass:"elevation-4",attrs:{src:t.image,height:"100%","max-height":"216px","max-width":"372px"}})],1),a("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[a("v-card-text",{staticClass:"indigo--text font-weight-light subheading"},[a("v-flex",{attrs:{id:"description"}},[t._v("\n                                            "+t._s(e.room.roomType.description)+"\n                                        ")])],1)],1),a("v-flex",{attrs:{xs4:"",sm4:"",md4:""}},[a("v-layout",{attrs:{row:""}},[a("v-layout",{staticClass:"mt-1 ml-2 indigo--text font-weight-regular subheading",attrs:{column:"",align:"",left:""}},[a("div",{staticClass:"my-2"},[a("v-icon",{attrs:{color:"indigo"}},[t._v("person")]),t._v(" "+t._s(e.room.roomType.capacity))],1),a("v-divider"),a("div",{staticClass:"my-2"},[t._v("Single beds: "+t._s(e.room.roomType.singleBedCount))]),a("v-divider"),a("div",{staticClass:"my-2"},[t._v("Double beds: "+t._s(e.room.roomType.doubleBedCount))]),a("v-divider"),a("div",{staticClass:"my-2"},[t._v("Balcony: \n                                                    "),e.room.roomType.hasBalcony?a("v-icon",{attrs:{color:"indigo"}},[t._v("done")]):a("v-icon",{attrs:{color:"indigo"}},[t._v("clear")])],1),a("v-divider"),a("div",{staticClass:"my-2"},[e.room.roomType.hasTV?a("v-icon",{attrs:{color:"indigo"}},[t._v("tv")]):t._e()],1)],1),a("v-layout",{attrs:{column:"",align:"",right:""}},[a("v-card",{staticClass:"white--text",attrs:{height:"216px",color:"indigo lighten-4"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"text-xs-center headline font-weight-light"},[a("s",[t._v("Standard price: "+t._s(e.totalPrice)+"€")])]),a("div",{staticClass:"mt-1 indigo--text font-weight-light text-xs-center display-1"},[t._v("New price: "+t._s(t.calculateDiscountedPrice(e))+"€")])])]),a("v-card-text",[a("v-btn",{attrs:{outline:"",color:"indigo",flat:"",block:""},on:{click:function(a){return t.reserveQuickReservation(e.id)}}},[t._v("\n                                                            Reserve \n                                                            "),a("v-icon",{attrs:{right:""}},[t._v("done_outline")])],1)],1)],1)],1)],1)],1)],1),a("v-card-actions",{staticClass:"pa-3"},[a("span",{staticClass:"headline indigo--text"},[t._v(t._s(e.room.roomType.type))]),a("v-spacer"),a("v-rating",{attrs:{value:e.room.roomType.averageFeedback,color:"indigo",dense:"","half-increments":"",readonly:""}})],1)],1)],1)],1)],1)],1)],1)])],1)}),1)],1)],1)],1)},Z=[],tt={props:["hotelId","checkInDate","checkOutDate"],data:function(){return{quickRoomReservations:[],image:"https://i.pinimg.com/originals/1b/c3/5f/1bc35faccb8be639c3326ec41fb20506.jpg"}},methods:{goBack:function(){this.$emit("goBackToRegularReservation")},calculateDiscountedPrice:function(t){return Math.floor(t.totalPrice-t.totalPrice*(t.discount/100))},reserveQuickReservation:function(t){var e=this;this.$axios.post("/api/reservations/quickReserveRoom",{},{headers:{Authorization:"Bearer "+localStorage.getItem("token")},params:{quickReservationId:parseInt(t),groupReservationId:parseInt(localStorage.getItem("groupResId"))}}).then(function(t){localStorage.removeItem("groupResId"),localStorage.removeItem("arrivalDate"),localStorage.removeItem("guests"),e.$swal("Reservation successful","Pack your bags, you're ready to go!","success").then(function(){return e.$router.push("/")})}).catch(function(t){e.$swal("Reservation error","Sorry, room has already been reserved","error").then(function(){return e.$router.push("/hotelReservation")})})}},created:function(){var t=this;this.$axios.get("/api/hotels/quickRoomReservations",{headers:{Authorization:"Bearer "+localStorage.getItem("token")},params:{hotelId:this.hotelId,checkInDate:this.checkInDate,checkOutDate:this.checkOutDate}}).then(function(e){e.data.length>0?t.quickRoomReservations=e.data:t.$swal("No discounts","There are no discounted rooms while you are on vacation :(","warning").then(function(){return t.$router.push("/hotelReservation")})})}},et=tt,at=Object(u["a"])(et,X,Z,!1,null,null,null),ot=at.exports;h()(at,{VBtn:m["a"],VCard:p["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:f["a"],VContainer:k["a"],VDivider:_["a"],VFlex:w["a"],VIcon:D["a"],VImg:C["a"],VItem:R["a"],VItemGroup:I["b"],VLayout:S["a"],VList:V["a"],VRating:P["a"],VSpacer:O["a"]});var it={components:{hotelReservation:K,viewQuickReservations:ot},data:function(){return{component:"hotelReservation",hotelId:"",checkInDate:"",checkOutDate:""}},methods:{changeComp:function(t){this.hotelId=t.hotelId,this.checkInDate=t.checkInDate,this.checkOutDate=t.checkOutDate,this.component="viewQuickReservations"}}},st=it,nt=Object(u["a"])(st,o,i,!1,null,null,null);e["default"]=nt.exports},d031:function(t,e,a){"use strict";var o=a("a8a8"),i=a.n(o);i.a},d1ac:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[this.selectedHotelLocation.lat?a("GmapMap",{staticClass:"custom-map",attrs:{center:t.currentMapCenter,zoom:14,"map-type-id":"terrain",options:{zoomControl:!0,mapTypeControl:!0,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1}}},[a("GmapMarker",{attrs:{position:t.currentMapCenter,clickable:!1,draggable:!1}})],1):t._e()],1)},i=[],s={props:["selectedHotelLocation"],data:function(){return{}},computed:{currentMapCenter:function(){return this.selectedHotelLocation}}},n=s,r=(a("d031"),a("2877")),c=Object(r["a"])(n,o,i,!1,null,"230e5461",null);e["a"]=c.exports},da9d:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{color:"white",flat:"",dense:""}},[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("closeProfileDialog")}}},[a("v-icon",[t._v("close")])],1)],1),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-card",{attrs:{flat:"",height:"300px"}},[a("v-card-text",[a("span",{staticClass:"display-2 font-weight-light"},[t._v(t._s(t.selectedHotel.name))]),a("br"),a("v-icon",{staticClass:"mr-1 mt-3",attrs:{big:""}},[t._v("location_on")]),a("span",{staticClass:"blue--text text--darken-2 title"},[t._v(t._s(t.selectedHotel.location.formattedAddress))]),a("div",{staticClass:"d-flex mt-2"},[a("v-rating",{attrs:{value:t.selectedHotel.averageFeedback,color:"amber","half-increments":"",dense:"",readonly:"",size:"35"}})],1)],1),a("v-card-actions",{staticClass:"indigo--text font-weight-light title ml-2 pt-0"},[t._v("\r\n                    "+t._s(t.selectedHotel.description)+"\r\n                ")])],1)],1),a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-card",{attrs:{flat:""}},[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"text-uppercase indigo--text font-weight-light"},[t._v("Additional services")])],1)],1),a("v-layout",{staticStyle:{height:"300px"},attrs:{column:""}},[a("v-flex",{staticStyle:{overflow:"auto"}},[a("v-data-table",{attrs:{items:t.selectedHotel.additionalServicesPriceList.priceListItems,"item-key":"name","hide-actions":"","hide-headers":"","no-data-text":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left font-weight-bold indigo--text"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left font-weight-bold indigo--text"},[t._v(t._s(e.item.price)+"€")])]}}])})],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-card",{attrs:{flat:""}},[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"text-uppercase indigo--text font-weight-light"},[t._v("Room types")])],1)],1),a("v-layout",{staticStyle:{height:"300px"},attrs:{column:""}},[a("v-flex",{staticStyle:{overflow:"auto"}},[a("v-data-table",{attrs:{headers:t.roomsHeaders,items:t.selectedHotel.roomTypes,"hide-actions":"","no-data-text":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.type))]),a("td",[t._v(t._s(e.item.pricePerNight))]),a("td",[t._v(t._s(e.item.capacity))]),a("td",[t._v(t._s(e.item.singleBedCount))]),a("td",[t._v(t._s(e.item.doubleBedCount))]),a("td",[t._v(t._s(e.item.hasTV))]),a("td",[t._v(t._s(e.item.hasBalcony))]),a("td",[t._v(t._s(e.item.squareFootage))]),a("td",[t._v(t._s(e.item.averageFeedback))])]}}])})],1)],1)],1)],1)],1)],1)},i=[],s={props:["selectedHotel"],data:function(){return{roomsHeaders:[{text:"Type",align:"left",sortable:!1,value:"name"},{text:"Price per night (€)",value:"price",sortable:!1},{text:"Capacity",value:"discount",sortable:!1},{text:"Single beds",value:"singleBeds",sortable:!1},{text:"Double beds",value:"doubleBeds",sortable:!1},{text:"Has TV",value:"hasTV",sortable:!1},{text:"Has Balcony",value:"hasBalcony",sortable:!1},{text:"Square ft.",value:"squareFootage",sortable:!1},{text:"Average Feedback",value:"avgFdbk",sortable:!1}]}}},n=s,r=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),u=a("b0af"),v=a("99d9"),h=a("8fea"),m=a("0e8f"),p=a("132d"),g=a("a722"),f=a("1d4d"),x=a("9910"),k=a("71d9"),b=a("2a7f"),y=Object(r["a"])(n,o,i,!1,null,null,null);e["a"]=y.exports;l()(y,{VBtn:d["a"],VCard:u["a"],VCardActions:v["a"],VCardText:v["b"],VDataTable:h["a"],VFlex:m["a"],VIcon:p["a"],VLayout:g["a"],VRating:f["a"],VSpacer:x["a"],VToolbar:k["a"],VToolbarTitle:b["b"]})}}]);
//# sourceMappingURL=chunk-5596a822.67812af4.js.map