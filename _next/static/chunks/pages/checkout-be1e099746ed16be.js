(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{5248:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return s(51)}])},311:function(e,r,s){"use strict";s.d(r,{Y:function(){return d}});var t=s(5893),n=s(1664),a=s.n(n),c=s(1163),i=s(7294),o=function(e){var r=e.breadcrumb,s=e.title,n=e.description,o=(0,c.useRouter)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"detail-block detail-block_margin",children:(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsxs)("div",{className:"detail-block__content",children:[(0,t.jsx)("h1",{children:s}),r&&(0,t.jsx)("ul",{className:"bread-crumbs",children:null===r||void 0===r?void 0:r.map((function(e,r){var s=e.path,n=e.label;return(0,t.jsx)(i.Fragment,{children:s===o.asPath?(0,t.jsx)("li",{className:"bread-crumbs__item",children:n}):(0,t.jsx)("li",{className:"bread-crumbs__item",children:(0,t.jsx)(a(),{href:s,children:(0,t.jsx)("a",{className:"bread-crumbs__link",children:n})})})},r)}))}),n&&(0,t.jsx)("span",{className:"error-descr",children:n})]})})})})},l=s(5169),d=function(e){var r=e.children,s=e.breadcrumb,n=e.breadcrumbTitle,a=e.description;return(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o,{breadcrumb:s,title:n,description:a}),(0,t.jsx)(t.Fragment,{children:r})]})}},51:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return M}});var t=s(5893),n=s(7294),a=(s(2136),s(7871)),c=s(1664),i=s.n(c),o=function(e){var r=e.order,s=r.image,n=r.name,a=r.price,c=r.productNumber,o=r.id,l=r.quantity;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"checkout-order__item",children:[(0,t.jsx)(i(),{href:"/product/".concat(o),children:(0,t.jsx)("a",{className:"checkout-order__item-img",children:(0,t.jsx)("img",{src:s,className:"js-img",alt:""})})}),(0,t.jsxs)("div",{className:"checkout-order__item-info",children:[(0,t.jsx)(i(),{href:"/product/".concat(o),children:(0,t.jsxs)("a",{className:"title6",children:[n," ",(0,t.jsxs)("span",{children:["x",l]})]})}),(0,t.jsxs)("span",{className:"checkout-order__item-price",children:["Rs.",(a*l).toFixed(2)]}),(0,t.jsxs)("span",{className:"checkout-order__item-num",children:["Product ID: ",c]})]})]})})},l=function(){var e=(0,n.useContext)(a.CartContext).cart,r=e.reduce((function(e,r){return e+Number(r.price)*Number(r.quantity)}),0);return console.log(e),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"checkout-order",children:[(0,t.jsx)("h5",{children:"Your Order"}),e.map((function(e){return(0,t.jsx)(o,{order:e},e.id)}))]}),(0,t.jsxs)("div",{className:"cart-bottom__total",children:[(0,t.jsxs)("div",{className:"cart-bottom__total-goods",children:["Goods on",(0,t.jsxs)("span",{children:["Rs. ",r.toFixed(2)]})]}),(0,t.jsxs)("div",{className:"cart-bottom__total-delivery",children:["Delivery"," ",(0,t.jsx)("span",{children:"Rs. 50"})]}),(0,t.jsxs)("div",{className:"cart-bottom__total-num",children:["total:",(0,t.jsx)("span",{children:(r+50).toFixed(2)})]})]})]})},d=s(4051),u=s.n(d),m=s(9473),h=s(3658),x=s(9198),p=s.n(x),j=(s(5828),s(8641));function b(e,r,s,t,n,a,c){try{var i=e[a](c),o=i.value}catch(l){return void s(l)}i.done?r(o):Promise.resolve(o).then(t,n)}function _(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}var f=[{label:"Islamabad",value:"Islamabad"},{label:"Rawalpindi",value:"Rawalpindi"}],v=[{label:"10AM - 12PM",value:"10AM - 12PM"},{label:"12PM - 2PM",value:"12PM - 2PM"},{label:"2PM - 4PM",value:"2PM - 4PM"},{label:"4PM - 6PM",value:"4PM - 6PM"},{label:"6PM - 8PM",value:"6PM - 8PM"},{label:"8PM - 10PM",value:"8PM - 10PM"}],N=function(e){var r=e.onNext,s=(0,m.I0)(),c=(0,n.useContext)(a.CartContext).cart,i=c.reduce((function(e,r){return e+Number(r.price)*Number(r.quantity)}),0),o=(0,n.useState)({}),l=o[0],d=o[1],x=(0,m.v9)((function(e){return e.user})),N=(0,n.useState)({}),y=N[0],g=N[1],k=(0,n.useState)({}),P=k[0],w=k[1],C=(0,n.useState)(new Date),D=C[0],S=C[1],M=(0,n.useState)({}),O=M[0],T=M[1];(0,n.useEffect)((function(){d({id:x.id,phone_Number:x.phone_Number,first_Name:x.first_Name,last_Name:x.last_Name,street_Number:"",house_Number:"",city:"",area:"",note:" "})}),[]);var E=function(e){var r=e.target.name,s=e.target.value;d((function(e){return function(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{},t=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(r){_(e,r,s[r])}))}return e}({},e,_({},r,s))}))},F=function(){var e,t=(e=u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n={customer:l.id,phone_Number:l.phone_Number,address:{street_Number:l.street_Number,house_Number:l.house_Number,city:y,area:l.area},payment:{payment_Status:"Pending",payment_Type:"Cash on Delivery",amount_Paid:0},order_Status:"Order Pending",delivery_Charges:50,total_Amount:i,note:l.note,order_Delivery_Date:D,order_Delivery_Time:P,products:c},console.log("these are the actual data",n),res.error&&(console.log(res.error.data.errors),T(res.error.data.errors)),res.data&&(console.log(res.data),s((0,j.OL)({id:res.data.order_Id,order_Status:res.data.order_Status,order_Delivery_Date:res.data.order_Delivery_Date,order_Delivery_Time:res.data.order_Delivery_Time,total_Amount:res.data.total_Amount})),r());case 5:case"end":return e.stop()}}),e)})),function(){var r=this,s=arguments;return new Promise((function(t,n){var a=e.apply(r,s);function c(e){b(a,t,n,c,i,"next",e)}function i(e){b(a,t,n,c,i,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"checkout-form",children:(0,t.jsxs)("form",{onSubmit:F,children:[(0,t.jsxs)("div",{className:"checkout-form__item",children:[(0,t.jsx)("h4",{children:"Info about you"}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",marginBottom:"1rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h6",{children:"Name:"}),(0,t.jsx)("h6",{children:"Phone Number:"})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("h6",{children:[l.first_Name," "," "," ",l.last_Name]}),(0,t.jsx)("h6",{children:l.phone_Number})]})]}),(0,t.jsx)("div",{className:"box-field",children:(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your Phone Number",name:"phone_Number",onChange:E})}),O.phone_Number?(0,t.jsxs)("lable",{style:{fontSize:16,color:"red",paddingTop:10},children:[O.phone_Number[0]," "]}):""]}),(0,t.jsxs)("div",{className:"checkout-form__item",children:[(0,t.jsx)("h4",{children:"Delivery Info"}),(0,t.jsxs)("div",{className:"box-field__row",children:[(0,t.jsxs)("div",{className:"box-field",children:[(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the House Number",name:"house_Number",onChange:E,required:!0}),O.house_Number?(0,t.jsxs)("lable",{style:{fontSize:16,color:"red",paddingTop:10},children:[O.house_Number[0]," "]}):""]}),(0,t.jsxs)("div",{className:"box-field",children:[(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the Street Number",name:"street_Number",onChange:E,required:!0}),O.street_Number?(0,t.jsxs)("lable",{style:{fontSize:16,color:"red"},children:[O.street_Number[0]," "]}):""]})]}),(0,t.jsxs)("div",{className:"box-field__row",children:[(0,t.jsxs)("div",{className:"box-field",children:[(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the Area (phase or Lane)",name:"area",onChange:E,required:!0}),O.area?(0,t.jsxs)("lable",{style:{fontSize:16,color:"red",paddingTop:10},children:[O.area[0]," "]}):""]}),(0,t.jsx)("div",{className:"box-field",children:(0,t.jsx)(h.Z,{options:f,className:"react-dropdown",onChange:function(e){return g(e.value)},placeholder:"Select a City",required:!0})})]}),(0,t.jsx)("h4",{children:"Delivery Date / Time "}),(0,t.jsxs)("div",{className:"box-field__row",style:{marginTop:"20px"},children:[(0,t.jsxs)("div",{className:"box-field",children:[(0,t.jsx)("span",{style:{paddingBottom:"20px"},children:" Select Date"}),(0,t.jsx)(p(),{className:"box-field",selected:D,onChange:function(e){return S(e)}})]}),(0,t.jsx)("div",{className:"box-field",children:(0,t.jsx)(h.Z,{options:v,className:"react-dropdown",onChange:function(e){return w(e.value)},placeholder:"Delivery Time",required:!0})})]})]}),(0,t.jsxs)("div",{className:"checkout-form__item",children:[(0,t.jsx)("h4",{children:"Note"}),(0,t.jsxs)("div",{className:"box-field box-field__textarea",children:[(0,t.jsx)("textarea",{className:"form-control",placeholder:"Order note",name:"note",onChange:E}),O.note?(0,t.jsxs)("lable",{style:{fontSize:16,color:"red"},children:[O.note[0]," "]}):""]})]}),(0,t.jsx)("div",{className:"checkout-buttons",children:(0,t.jsxs)("button",{type:"submit",className:"btn btn-icon btn-next",children:["next ",(0,t.jsx)("i",{className:"icon-arrow"})]})})]})})})},y=function(e){var r=e.onNext,s=e.onPrev,a=(0,n.useState)("cash"),c=a[0],i=a[1];return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"checkout-payment checkout-form",children:[(0,t.jsx)("h4",{children:"Payment Methods"}),(0,t.jsxs)("div",{className:"checkout-payment__item ".concat("credit-card"===c&&"active"),children:[(0,t.jsx)("div",{className:"checkout-payment__item-head",children:(0,t.jsxs)("label",{onChange:function(){return i("credit-card")},className:"radio-box",children:["Credit card",(0,t.jsx)("input",{type:"radio",checked:"credit-card"===c,name:"radio"}),(0,t.jsx)("span",{className:"checkmark"}),(0,t.jsxs)("span",{className:"radio-box__info",children:[(0,t.jsx)("i",{className:"icon-info"}),(0,t.jsx)("span",{className:"radio-box__info-content",children:"Aliqua nulla id aliqua minim ullamco adipisicing enim. Do sint nisi velit qui. Ullamco Lorem aliquip dolor nostrud cupidatat amet."})]})]})}),(0,t.jsxs)("div",{className:"checkout-payment__item-content",children:[(0,t.jsxs)("div",{className:"box-field",children:[(0,t.jsx)("span",{children:"Card number"}),(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"xxxx xxxx xxxx xxxx",maxlength:"16"})]}),(0,t.jsxs)("div",{className:"box-field__row",children:[(0,t.jsxs)("div",{className:"box-field",children:[(0,t.jsx)("span",{children:"Expiration date"}),(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"mm",maxlength:"2"})]}),(0,t.jsx)("div",{className:"box-field",children:(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"yy",maxlength:"2"})}),(0,t.jsxs)("div",{className:"box-field",children:[(0,t.jsx)("span",{children:"Security code"}),(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"CVV",maxlength:"3"})]})]})]})]}),(0,t.jsx)("div",{className:"checkout-payment__item ".concat("cash"===c&&"active"),children:(0,t.jsx)("div",{className:"checkout-payment__item-head",children:(0,t.jsxs)("label",{onClick:function(){return i("cash")},className:"radio-box",children:["Cash payment",(0,t.jsx)("input",{type:"radio",checked:"cash"===c,name:"radio"}),(0,t.jsx)("span",{className:"checkmark"}),(0,t.jsxs)("span",{className:"radio-box__info",children:[(0,t.jsx)("i",{className:"icon-info"}),(0,t.jsx)("span",{className:"radio-box__info-content",children:"Currently We only Offer Cash on Delivery"})]})]})})}),(0,t.jsxs)("div",{className:"checkout-buttons",children:[(0,t.jsxs)("button",{onClick:s,className:"btn btn-grey btn-icon",children:[(0,t.jsx)("i",{className:"icon-arrow"})," back"]}),(0,t.jsxs)("button",{onClick:r,className:"btn btn-icon btn-next",children:["next ",(0,t.jsx)("i",{className:"icon-arrow"})]})]})]})})};function g(e,r,s,t,n,a,c){try{var i=e[a](c),o=i.value}catch(l){return void s(l)}i.done?r(o):Promise.resolve(o).then(t,n)}var k=function(){var e,r=(0,m.v9)((function(e){return e.order}));return(0,n.useEffect)((e=u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.id;case 1:case"end":return e.stop()}}),e)})),function(){var r=this,s=arguments;return new Promise((function(t,n){var a=e.apply(r,s);function c(e){g(a,t,n,c,i,"next",e)}function i(e){g(a,t,n,c,i,"throw",e)}c(void 0)}))}),[]),console.log("order form stor",r),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"checkout-purchase checkout-form",children:[(0,t.jsxs)("h4",{children:["Bake & Take Thanks",(0,t.jsx)("br",{}),"you for your Order!"]}),(0,t.jsx)("p",{children:"We at Bake & Take truly appreciate your business, and we\u2019re so grateful for the trust you\u2019ve placed in us. We sincerely hope you are satisfied with your purchase. and we\u2019ll do our best to continue to give you the kind of service you deserve."}),(0,t.jsxs)("ul",{className:"checkout-purchase__list",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:"Order number"}),r.id]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:"Order status"})," Order Placed"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:"Payment Statues"}),"Awaiting Payment"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:"Delivery Date"})," ",r.order_Delivery_Date]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:"Delivery Time"})," ",r.order_Delivery_Time]})]})]})})},P=s(7116),w=[{step:"Step 1",title:"Order Details",icon:"icon-step1"},{step:"Step 2",title:"Payment method",icon:"icon-step2"},{step:"Step 3",title:"Finish!",icon:"icon-step3"}],C=function(){var e=(0,n.useState)(1),r=e[0],s=e[1],a=(0,n.useRef)(),c=(0,P.useReactToPrint)({content:function(){return a.current},documentTitle:"Order_Invoice"}),i=function(){s(r+1)},o=function(){s(r-1)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsx)("div",{className:"detail-block__items",children:w.map((function(e,s){return(0,t.jsxs)("div",{className:"detail-block__item ".concat(r<=s&&"detail-block__item-inactive"),children:[(0,t.jsxs)("div",{className:"detail-block__item-icon",children:[(0,t.jsx)("img",{src:r<=s?"/assets/img/main-text-decor2.svg":"/assets/img/main-text-decor.svg",className:"js-img",alt:""}),(0,t.jsx)("i",{className:e.icon})]}),(0,t.jsxs)("div",{className:"detail-block__item-info",style:{color:"#000"},children:[(0,t.jsx)("h6",{children:e.step}),e.title]})]},s)}))})}),(0,t.jsxs)("div",{className:"checkout ".concat(2==r&&"checkout-step2"),children:[(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsxs)("div",{className:"checkout-content",ref:a,children:[function(){switch(r){case 1:return(0,t.jsx)(N,{onNext:i});case 2:return(0,t.jsx)(y,{onNext:i,onPrev:o});case 3:return(0,t.jsx)(k,{});default:return null}}(),(0,t.jsx)("div",{className:"checkout-info",children:(0,t.jsx)(l,{})})]}),3===r?(0,t.jsx)("button",{onClick:c,className:"btn btn-icon",children:"Print Order Details"}):""]}),(0,t.jsx)("img",{className:"promo-video__decor js-img",src:"/assets/img/promo-video__decor.jpg",alt:""})]})]})},D=s(311),S=[{label:"Home",path:"/"},{label:"Order Cake",path:"/shop"},{label:"Checkout",path:"/checkout"}],M=function(){return(0,t.jsx)(D.Y,{breadcrumb:S,breadcrumbTitle:"Checkout",children:(0,t.jsx)(C,{})})}}},function(e){e.O(0,[994,182,169,136,774,888,179],(function(){return r=5248,e(e.s=r);var r}));var r=e.O();_N_E=r}]);