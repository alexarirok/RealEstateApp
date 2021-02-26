(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{98:function(e,t,s){},99:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),i=s.n(a),n=s(23),l=s.n(n),o=s(7),r=s(5),j=s(4),d=s(15),h=s(16),m=s(6),_=s(10),b=s.n(_),u=s(40),p=s.n(u),O=function(e){var t=Object(a.useState)({sale_type:"For Sale",price:"$0+",bedrooms:"0+",home_type:"House",bathrooms:"0+",sqft:"1000+",days_listed:"1 or less",has_photos:"1+",open_house:"false",keywords:""}),s=Object(j.a)(t,2),i=s[0],n=s[1],l=i.sale_type,o=i.price,r=i.bedrooms,d=i.home_type,_=i.bathrooms,u=i.sqft,O=i.days_listed,x=i.has_photos,g=i.open_house,f=i.keywords,v=Object(a.useState)(!1),N=Object(j.a)(v,2),y=N[0],w=N[1],S=function(e){return n(Object(m.a)(Object(m.a)({},i),{},Object(h.a)({},e.target.name,e.target.value)))};return Object(c.jsx)("form",{className:"listingform",onSubmit:function(t){return function(t){t.preventDefault(),w(!0),b.a.post("".concat("http://localhost:8000","/api/listings/search"),{sale_type:l,price:o,bedrooms:r,home_type:d,bathrooms:_,sqft:u,days_listed:O,has_photos:x,open_house:g,keywords:f},{headers:{"Content-Type":"application/json"}}).then((function(t){w(!1),e.setListings(t.data),window.scrollTo(0,0)})).catch((function(e){w(!1),window.scrollTo(0,0)}))}(t)},children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-1-of-6",children:[Object(c.jsxs)("div",{className:"listingform__section",children:[Object(c.jsx)("label",{className:"listingform__label",htmlFor:"sale_type",children:"Sale or Rent"}),Object(c.jsxs)("select",{className:"listingform__select",name:"sale_type",onChange:function(e){return S(e)},value:l,children:[Object(c.jsx)("option",{children:"For Sale"}),Object(c.jsx)("option",{children:"For Rent"})]})]}),Object(c.jsxs)("div",{className:"listingform__section",children:[Object(c.jsx)("label",{className:"listingform__label",htmlFor:"sqft",children:"Sqft"}),Object(c.jsxs)("select",{className:"listingform__select",name:"sqft",onChange:function(e){return S(e)},value:u,children:[Object(c.jsx)("option",{children:"1000+"}),Object(c.jsx)("option",{children:"1200+"}),Object(c.jsx)("option",{children:"1500+"}),Object(c.jsx)("option",{children:"2000+"}),Object(c.jsx)("option",{children:"Any"})]})]})]}),Object(c.jsxs)("div",{className:"col-1-of-6",children:[Object(c.jsxs)("div",{className:"listingform__section",children:[Object(c.jsx)("label",{className:"listingform__label",htmlFor:"price",children:"Minimum Price"}),Object(c.jsxs)("select",{className:"listingform__select",name:"price",onChange:function(e){return S(e)},value:o,children:[Object(c.jsx)("option",{children:"$0+"}),Object(c.jsx)("option",{children:"$200,000+"}),Object(c.jsx)("option",{children:"$400,000+"}),Object(c.jsx)("option",{children:"$600,000+"}),Object(c.jsx)("option",{children:"$800,000+"}),Object(c.jsx)("option",{children:"$1,000,000+"}),Object(c.jsx)("option",{children:"$5,000,000+"}),Object(c.jsx)("option",{children:"$10,000,000+"}),Object(c.jsx)("option",{children:"$20,000,000+"}),Object(c.jsx)("option",{children:"Any"})]})]}),Object(c.jsxs)("div",{className:"listingform__section",children:[Object(c.jsx)("label",{className:"listingform__label",htmlFor:"days_listed",children:"Days Listed"}),Object(c.jsxs)("select",{className:"listingform__select",name:"days_listed",onChange:function(e){return S(e)},value:O,children:[Object(c.jsx)("option",{children:"1 of less"}),Object(c.jsx)("option",{children:"2 of less"}),Object(c.jsx)("option",{children:"5 of less"}),Object(c.jsx)("option",{children:"10 of less"}),Object(c.jsx)("option",{children:"20 of less"}),Object(c.jsx)("option",{children:"30 of less"}),Object(c.jsx)("option",{children:"Any"})]})]})]}),Object(c.jsxs)("div",{className:"col-1-of-6",children:[Object(c.jsxs)("div",{className:"listingform__section",children:[Object(c.jsx)("label",{className:"listingform__label",htmlFor:"bedrooms",children:"Bedrooms"}),Object(c.jsxs)("select",{className:"listingform__select",name:"bedrooms",onChange:function(e){return S(e)},value:r,children:[Object(c.jsx)("option",{children:"0+"}),Object(c.jsx)("option",{children:"1+"}),Object(c.jsx)("option",{children:"2+"}),Object(c.jsx)("option",{children:"3+"}),Object(c.jsx)("option",{children:"4+"}),Object(c.jsx)("option",{children:"5+"}),Object(c.jsx)("option",{children:"Any"})]})]}),Object(c.jsxs)("div",{className:"listingform__section",children:[Object(c.jsx)("label",{className:"listingform__label",htmlFor:"has_photos",children:"Has Photos"}),Object(c.jsxs)("select",{className:"listingform__select",name:"has_photos",onChange:function(e){return S(e)},value:x,children:[Object(c.jsx)("option",{children:"1+"}),Object(c.jsx)("option",{children:"3+"}),Object(c.jsx)("option",{children:"5+"}),Object(c.jsx)("option",{children:"8+"}),Object(c.jsx)("option",{children:"10+"}),Object(c.jsx)("option",{children:"11+"})]})]})]}),Object(c.jsxs)("div",{className:"col-1-of-6",children:[Object(c.jsxs)("div",{className:"listingform__section",children:[Object(c.jsx)("label",{className:"listingform__label",htmlFor:"home_type",children:"Home Type"}),Object(c.jsxs)("select",{className:"listingform__select",name:"home_type",onChange:function(e){return S(e)},value:d,children:[Object(c.jsx)("option",{children:"House"}),Object(c.jsx)("option",{children:"Condo"}),Object(c.jsx)("option",{children:"Townhouse"})]})]}),Object(c.jsxs)("div",{className:"listingform__section",children:[Object(c.jsx)("label",{className:"listingform__label",htmlFor:"keywords",children:"Keywords"}),Object(c.jsx)("input",{className:"listingform__input",name:"keywords",type:"text",onChange:function(e){return S(e)},value:f})]})]}),Object(c.jsxs)("div",{className:"col-1-of-6",children:[Object(c.jsxs)("div",{className:"listingform__section",children:[Object(c.jsx)("label",{className:"listingform__label",htmlFor:"bathrooms",children:"Baths"}),Object(c.jsxs)("select",{className:"listingform__select",name:"bathrooms",onChange:function(e){return S(e)},value:_,children:[Object(c.jsx)("option",{children:"0+"}),Object(c.jsx)("option",{children:"1+"}),Object(c.jsx)("option",{children:"2+"}),Object(c.jsx)("option",{children:"3+"}),Object(c.jsx)("option",{children:"4+"}),Object(c.jsx)("option",{children:"Any"})]})]}),Object(c.jsxs)("div",{className:"listingform__altsection",children:[Object(c.jsx)("label",{className:"listingform__label",htmlFor:"open_house",children:"Open Houses"}),Object(c.jsx)("input",{className:"listingform__checkbox",name:"open_house",type:"checkbox",onChange:function(e){return S(e)},value:g})]})]}),Object(c.jsx)("div",{className:"col-1-of-6",children:y?Object(c.jsx)("div",{className:"listingform__loader",children:Object(c.jsx)(p.a,{type:"Oval",color:"#424242",height:50,width:50})}):Object(c.jsx)("button",{className:"listingform__button listingform__button--primary",children:"Save"})})]})})},x=function(e){var t;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h3",{className:"card__title",children:e.title}),Object(c.jsx)("div",{className:"card__header",children:Object(c.jsx)("img",{className:"card__header__photo",src:e.photo_main,alt:"House"})}),Object(c.jsxs)("p",{className:"card__location",children:[e.address,", ",e.city,", ",e.state]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-2-of-3",children:[Object(c.jsxs)("p",{className:"card__info",children:["Price: $",(t=e.price,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]}),Object(c.jsxs)("p",{className:"card__info",children:["Bedrooms: ",e.bedrooms]}),Object(c.jsxs)("p",{className:"card__info",children:["Bathrooms: ",e.bathrooms]})]}),Object(c.jsxs)("div",{className:"col-1-of-3",children:[Object(c.jsx)("p",{className:"card__saletype",children:e.sale_type}),Object(c.jsx)("p",{className:"card__hometype",children:e.home_type}),Object(c.jsxs)("p",{className:"card__sqft",children:["Sqft: ",e.sqft]})]})]}),Object(c.jsx)(o.b,{className:"card__link",to:"/listings/".concat(e.slug),children:"View Listing"})]})},g=function(e){var t=e.listings;return Object(c.jsx)("div",{children:function(){var e=[],s=[];t.map((function(t){return e.push(Object(c.jsx)(x,{title:t.title,address:t.address,city:t.city,county:t.county,price:t.price,sale_type:t.sale_type,home_type:t.home_type,bedrooms:t.bedrooms,bathrooms:t.bathrooms,sqft:t.sqft,photo_main:t.photo_main,slug:t.slug}))}));for(var a=0;a<t.length;a+=3)s.push(Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-1-of-3",children:e[1]}),Object(c.jsx)("div",{className:"col-1-of-3",children:e[a+1]?e[a+1]:null}),Object(c.jsx)("div",{className:"col-1-of-3",children:e[a+2]?e[a+2]:null})]}));return s}()})},f=function(e){return Object(c.jsxs)("div",{className:"pagination",children:[Object(c.jsx)("div",{onClick:function(){return e.previous()},className:"pagination__number",children:"Previous"}),function(){for(var t=[],s=e.itemsPerPage,a=1,i=function(s){var i="pageNumber",n="pagination_number",l=null;e.active===i?(n="pagination__number pagination__number--active",l=Object(c.jsx)("div",{className:n,children:a},s)):l=Object(c.jsx)("div",{onClick:function(){return e.visitPage(i)},className:n,children:a},s),t.push(l),a++},n=0;n<e.count;n+=s)i(n);return t}(),Object(c.jsx)("div",{onClick:function(){return e.next()},className:"pagination__number",children:"Next"})]})},v=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],i=t[1],n=Object(a.useState)(1),l=Object(j.a)(n,2),o=l[0],r=l[1],h=Object(a.useState)(3),m=Object(j.a)(h,2),_=m[0],b=(m[1],Object(a.useState)(1)),u=Object(j.a)(b,2),p=u[0],x=u[1],v=o*_,N=v-_,y=s.slice(N,v);return Object(c.jsxs)("main",{className:"home",children:[Object(c.jsxs)(d.a,{children:[Object(c.jsx)("title",{children:"Winlex Estate - Home"}),Object(c.jsx)("meta",{name:"description",content:"This is the home page of Winlex Estate App"})]}),Object(c.jsx)("section",{className:"home__form",children:Object(c.jsx)(O,{setListings:i})}),Object(c.jsx)("section",{className:"home__listings",children:Object(c.jsx)(g,{listings:y})}),Object(c.jsx)("section",{className:"home__pagination",children:Object(c.jsx)("div",{className:"row",children:0!==s.length?Object(c.jsx)(f,{itemsPerPage:_,count:s.length,visitPage:function(e){r(e),x(e)},previous:function(){1!==o&&(r(o-1),x(o-1))},next:function(){o!==Math.ceil(s.length/3)&&(r(o+1),x(o+1))},active:p,setActive:x}):null})})]})},N=function(){return Object(c.jsx)("div",{children:"About us"})},y=function(){return Object(c.jsx)("div",{children:"Contact Us"})},w=s(18),S=s.n(w),k=s(22),A=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],i=t[1],n=Object(a.useState)(0),l=Object(j.a)(n,2),o=l[0],r=l[1],h=Object(a.useState)(""),m=Object(j.a)(h,2),_=m[0],u=m[1],p=Object(a.useState)(""),O=Object(j.a)(p,2),g=O[0],v=O[1],N=Object(a.useState)(1),y=Object(j.a)(N,2),w=y[0],A=y[1];Object(a.useEffect)((function(){window.scrollTo(0,0),function(){var e=Object(k.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat("http://localhost:8000","/api/listings/?page=1"));case 3:t=e.sent,i(t.data.results),r(t.data.count),u(t.data.previous),v(t.data.next),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[]);return Object(c.jsxs)("main",{className:"listings",children:[Object(c.jsxs)(d.a,{children:[Object(c.jsx)("title",{children:"Winlex Estate - Listings"}),Object(c.jsx)("meta",{name:"description",content:"Listings page"})]}),Object(c.jsx)("section",{className:"listings__listings",children:function(){var e=[],t=[];s.map((function(t){return e.push(Object(c.jsx)(x,{title:t.title,address:t.address,city:t.city,county:t.county,price:t.price,sale_type:t.sale_type,home_type:t.home_type,bedrooms:t.bedrooms,bathrooms:t.bathrooms,sqft:t.sqft,photo_main:t.photo_main,slug:t.slug}))}));for(var a=0;a<s.length;a+=3)t.push(Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-1-of-3",children:e[a]}),Object(c.jsx)("div",{className:"col-1-of-3",children:e[a+1]?e[a+1]:null}),Object(c.jsx)("div",{className:"col-1-of-3",children:e[a+2]?e[a+2]:null})]},a));return t}()}),Object(c.jsx)("section",{className:"listings__pagination",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(f,{itemsPerPage:3,count:o,visitPage:function(e){b.a.get("".concat("http://localhost:8000","/api/listings/?page=").concat(e)).then((function(t){i(t.data.results),u(t.data.previous),v(t.data.next),A(e)})).catch((function(e){}))},previous:function(){b.a.get(_).then((function(e){i(e.data.results),u(e.data.previous),v(e.data.next),_&&A(w-1)})).catch((function(e){}))},next:function(){b.a.get(g).then((function(e){i(e.data.results),u(e.data.previous),v(e.data.next),g&&A(w+1)})).catch((function(e){}))},active:w,setActive:A})})})]})},C=function(e){var t=Object(a.useState)({}),s=Object(j.a)(t,2),i=s[0],n=s[1],l=Object(a.useState)({}),r=Object(j.a)(l,2),h=r[0],m=r[1],_=Object(a.useState)(0),u=Object(j.a)(_,2),p=u[0],O=u[1];Object(a.useEffect)((function(){var t=e.match.params.id,s={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};b.a.get("".concat("http://localhost:8000","/api/listings/").concat(t),s).then((function(e){n(e.data),O(e.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})).catch((function(e){}))}),[e.match.params.id]),Object(a.useEffect)((function(){var e=i.realtor,t={headers:{Authorization:"Beare ".concat(localStorage.getItem("token"))}};e&&b.a.get("".concat("http://localhost:8000","/api/realtors/").concat(e),t).then((function(e){m(e.data)})).catch((function(e){}))}),[i.realtor]);return Object(c.jsxs)("div",{className:"listingdetail",children:[Object(c.jsxs)(d.a,{children:[Object(c.jsxs)("title",{children:["Winlex Estate - Listing | ","".concat(i.title)]}),Object(c.jsx)("meta",{name:"description",content:"Listing detail"})]}),Object(c.jsxs)("div",{className:"listingdetail__header",children:[Object(c.jsx)("h1",{className:"listingdetail__title",children:i.title}),Object(c.jsxs)("p",{className:"listingdetail__location",children:[i.city,", ",i.county,", ",i.zipcode]})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"listingdetail__breadcrumb",children:[Object(c.jsx)(o.b,{className:"listingdetail__breadceumb__link",to:"/",children:"Home"}),"/ ",i.title]})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-3-of-4",children:Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_main,alt:""})})}),Object(c.jsxs)("div",{className:"col-1-of-4",children:[Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail_display_image",src:h.photo,alt:""})}),Object(c.jsx)("h3",{className:"listingdetail__realtor",children:h.name}),Object(c.jsx)("p",{className:"listingdetail__contact",children:h.phone}),Object(c.jsx)("p",{className:"listingdetail__contact",children:h.email}),Object(c.jsx)("p",{className:"listingdetail__about",children:h.description})]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-1-of-2",children:Object(c.jsxs)("ul",{className:"listingdetail__list",children:[Object(c.jsxs)("li",{className:"listingdetail__list__item",children:["Home Type : ",i.home_type]}),Object(c.jsxs)("li",{className:"listingdetail__list__item",children:["Price : $",p]}),Object(c.jsxs)("li",{className:"listingdetail__list__item",children:["Bedrooms : ",i.bedrooms]}),Object(c.jsxs)("li",{className:"listingdetail__list__item",children:["Bathrooms : ",i.bathrooms]}),Object(c.jsxs)("li",{className:"listingdetail__list__item",children:["Square Feet : ",i.sqft]})]})}),Object(c.jsx)("div",{className:"col-1-of-2",children:Object(c.jsxs)("ul",{className:"listingdetail__list",children:[Object(c.jsxs)("li",{className:"listingdetail__list__item",children:["Sale Type : ",i.sale_type]}),Object(c.jsxs)("li",{className:"listingdetail__list__item",children:["Address : ",i.address]}),Object(c.jsxs)("li",{className:"listingdetail__list__item",children:["City : ",i.city]}),Object(c.jsxs)("li",{className:"listingdetail__list__item",children:["County : ",i.county]}),Object(c.jsxs)("li",{className:"listingdetail__list__item",children:["Zipcode : ",i.zipcode]})]})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("p",{className:"listingdetail__description",children:i.description})}),function(){var e=[];return e.push(Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_1?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_1,alt:""})}):null}),Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_2?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_2,alt:""})}):null}),Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_3?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_3,alt:""})}):null})]},1)),e.push(Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_4?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_4,alt:""})}):null}),Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_5?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_5,alt:""})}):null}),Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_6?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_6,alt:""})}):null})]},2)),e.push(Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_7?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_7,alt:""})}):null}),Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_8?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_8,alt:""})}):null}),Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_9?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_9,alt:""})}):null})]},3)),e.push(Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_10?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_10,alt:""})}):null}),Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_11?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_11,alt:""})}):null}),Object(c.jsx)("div",{className:"col-1-of-3",children:i.photo_12?Object(c.jsx)("div",{className:"listingdetail__display",children:Object(c.jsx)("img",{className:"listingdetail__display__image",src:i.photo_12,alt:""})}):null})]},4)),e}()]})},L=s(13),E=s(101),P="SET_ALERT",T="REMOVE_ALERT",q="SIGNUP_SUCCESS",F="SIGNUP_FAIL",I="LOGIN_SUCCESS",$="LOGIN_FAIL",B="LOGOUT",H=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(c){var a=Object(E.a)();c({type:P,payload:{msg:e,alertTypes:t,id:a}}),setTimeout((function(){return c({type:T,payload:a})}),s)}},W=function(e,t){return function(){var s=Object(k.a)(S.a.mark((function s(c){var a,i,n;return S.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a={headers:{"Content-Type":"application/json"}},i=JSON.stringify({email:e,password:t}),s.prev=2,s.next=5,b.a.post("".concat("http://localhost:8000","/api/token/"),i,a);case 5:n=s.sent,c({type:I,payload:n.data}),c(H("Authenticated successfully","success")),s.next=14;break;case 10:s.prev=10,s.t0=s.catch(2),c({type:$}),c(H("Error Authenticating","error"));case 14:case"end":return s.stop()}}),s,null,[[2,10]])})));return function(e){return s.apply(this,arguments)}}()},U=Object(L.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:W})((function(e){var t=e.login,s=e.isAuthenticated,i=Object(a.useState)({email:"",password:""}),n=Object(j.a)(i,2),l=n[0],_=n[1],b=l.email,u=l.password,p=function(e){return _(Object(m.a)(Object(m.a)({},l),{},Object(h.a)({},e.target.name,e.target.value)))};return s?Object(c.jsx)(r.a,{to:"/"}):Object(c.jsxs)("div",{className:"auth",children:[Object(c.jsxs)(d.a,{children:[Object(c.jsx)("title",{children:"Winlex Estate - Login"}),Object(c.jsx)("meta",{name:"description",content:"This is the login page"})]}),Object(c.jsx)("h1",{className:"auth__title",children:"Sign In"}),Object(c.jsx)("p",{className:"auth__lead",children:"Sign in into your Account"}),Object(c.jsxs)("form",{className:"auth__form",onSubmit:function(e){return function(e){e.preventDefault(),t(b,u)}(e)},children:[Object(c.jsx)("div",{className:"auth__form__group",children:Object(c.jsx)("input",{className:"auth__form__input",email:"email",placeholder:"Email",name:"email",value:b,onChange:function(e){return p(e)},required:!0})}),Object(c.jsx)("div",{className:"auth__form__group",children:Object(c.jsx)("input",{className:"auth__form__input",email:"password",placeholder:"Password",name:"password",value:u,onChange:function(e){return p(e)},minLength:"6",required:!0})}),Object(c.jsx)("button",{className:"auth__form__button",children:"Login"})]}),Object(c.jsxs)("p",{className:"auth__authtext",children:["Don't have an account? Please ",Object(c.jsx)(o.b,{className:"auth__authtext__link",to:"/signup",children:"Sign Up"})]})]})})),R=Object(L.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:H,signup:function(e){var t=e.name,s=e.email,c=e.password,a=e.password2;return function(){var e=Object(k.a)(S.a.mark((function e(i){var n,l,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},l=JSON.stringify({name:t,email:s,password:c,password2:a}),e.prev=2,e.next=5,b.a.post("".concat("http://localhost:8000","/api/accounts/signup"),l,n);case 5:o=e.sent,i({type:q,payload:o.data}),i(W(s,c)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),i({type:F}),i(H("Error Authenticating","error"));case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,s=e.signup,i=e.isAuthenticated,n=Object(a.useState)({name:"",email:"",password:"",password2:""}),l=Object(j.a)(n,2),_=l[0],b=l[1],u=_.name,p=_.email,O=_.password,x=_.password2,g=function(e){return b(Object(m.a)(Object(m.a)({},_),{},Object(h.a)({},e.target.name,e.target.value)))};return i?Object(c.jsx)(r.a,{to:"/"}):Object(c.jsxs)("div",{className:"auth",children:[Object(c.jsxs)(d.a,{children:[Object(c.jsx)("title",{children:"Winlex Estate - Sign Up"}),Object(c.jsx)("meta",{name:"description",content:"sign up page"})]}),Object(c.jsx)("h1",{className:"auth__title",children:"Sign Up"}),Object(c.jsx)("p",{className:"auth__lead",children:"Create your Account"}),Object(c.jsxs)("form",{className:"auth__form",onSubmit:function(e){return function(e){e.preventDefault(),O!==x?t("Passwords do not match","error"):s({name:u,email:p,password:O,password2:x})}(e)},children:[Object(c.jsx)("div",{className:"auth__form__group",children:Object(c.jsx)("input",{className:"auth__form__input",type:"text",placeholder:"Name",name:"name",value:u,onChange:function(e){return g(e)},required:!0})}),Object(c.jsx)("div",{className:"auth__form__group",children:Object(c.jsx)("input",{className:"auth__form__input",type:"email",placeholder:"Email",name:"email",value:p,onChange:function(e){return g(e)},required:!0})}),Object(c.jsx)("div",{className:"auth__form__group",children:Object(c.jsx)("input",{className:"auth__form__input",type:"password",placeholder:"Password",name:"password",value:O,onChange:function(e){return g(e)},minLength:"6"})}),Object(c.jsx)("div",{className:"auth__form__group",children:Object(c.jsx)("input",{className:"auth__form__input",type:"password",placeholder:"Confirm Password",name:"password2",value:x,onChange:function(e){return g(e)},minLength:"6"})}),Object(c.jsx)("button",{className:"auth__form__button",children:"Register"})]}),Object(c.jsxs)("p",{className:"auth__authtext",children:["Already have an account? ",Object(c.jsx)(o.b,{className:"auth__authtext__link",to:"/login",children:"Sign In"})]})]})})),D=function(){},G=Object(L.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(c.jsx)("div",{className:"alert alert--".concat(e.alertType),children:e.msg},e.id)}))})),M=Object(L.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e(H("logout successfully.","success")),e({type:B})}}})((function(e){var t=e.auth,s=t.isAuthenticated,i=t.loading,n=e.logout,l=Object(c.jsx)("a",{className:"navbar__top__auth__link",onClick:n,href:"#!",children:"Logout"}),r=Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(o.b,{className:"navbar__top__auth__link",to:"/login",children:"Login"}),Object(c.jsx)(o.b,{className:"navbar__top__auth__link",to:"/signup",children:"Sign up"})]});return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsxs)("div",{className:"navbar__top",children:[Object(c.jsx)("div",{className:"navbar__top__logo",children:Object(c.jsx)(o.b,{className:"navbar__top__logo__link",to:"/",children:"Winlex Estate"})}),Object(c.jsx)("div",{className:"navbar__top__auth",children:!i&&Object(c.jsx)(a.Fragment,{children:s?l:r})})]}),Object(c.jsxs)("div",{className:"navbar__bottom",children:[Object(c.jsx)("li",{className:"navbar__bottom__item",children:Object(c.jsx)(o.c,{className:"navbar__bottom__item__link",exact:!0,to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"navbar__bottom__item",children:Object(c.jsx)(o.c,{className:"navbar__bottom__item__link",exact:!0,to:"/about",children:"About"})}),Object(c.jsx)("li",{className:"navbar__bottom__item",children:Object(c.jsx)(o.c,{className:"navbar__bottom__item__link",exact:!0,to:"/listings",children:"Listings"})}),Object(c.jsx)("li",{className:"navbar__bottom__item",children:Object(c.jsx)(o.c,{className:"navbar__bottom__item__link",exact:!0,to:"/contact",children:"Contact"})})]})]}),Object(c.jsx)(G,{})]})})),z=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(M,{}),e.children]})},J=s(43),V=Object(L.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,s=e.auth,a=s.isAuthenticated,i=s.loading,n=Object(J.a)(e,["component","auth"]);return Object(c.jsx)(r.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return a||i?Object(c.jsx)(t,Object(m.a)({},e)):Object(c.jsx)(r.a,{to:"/login"})}}))})),K=s(17),Z=s(44),Q=s(45),X=s(46),Y=[],ee={token:localStorage.getItem("token"),isAuthenticated:null,loading:!1},te=Object(K.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,s=t.type,c=t.payload;switch(s){case P:return[].concat(Object(X.a)(e),[c]);case T:return e.filter((function(e){return e.id!==c}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,s=t.type,c=t.payload;switch(s){case I:return localStorage.setItem("token, payload.access"),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,loading:!1,token:c.access});case q:return Object(m.a)(Object(m.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});case F:case $:case B:return localStorage.removeItem("token"),Object(m.a)(Object(m.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}}}),se=[Q.a],ce=Object(K.createStore)(te,{},Object(Z.composeWithDevTools)(K.applyMiddleware.apply(void 0,se))),ae=(s(98),function(){return Object(c.jsx)(L.a,{store:ce,children:Object(c.jsx)(o.a,{children:Object(c.jsx)(z,{children:Object(c.jsxs)(r.d,{children:[Object(c.jsx)(r.b,{exact:!0,path:"/",component:v}),Object(c.jsx)(r.b,{exact:!0,path:"/about",component:N}),Object(c.jsx)(r.b,{exact:!0,path:"/contact",component:y}),Object(c.jsx)(r.b,{exact:!0,path:"/listings",component:A}),Object(c.jsx)(V,{exact:!0,path:"/listings/:id",component:C}),Object(c.jsx)(r.b,{exact:!0,path:"/login",component:U}),Object(c.jsx)(r.b,{exact:!0,path:"/signup",component:R}),Object(c.jsx)(r.b,{component:D})]})})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(ae,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[99,1,2]]]);
//# sourceMappingURL=main.c3bc018f.chunk.js.map