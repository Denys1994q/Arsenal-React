(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{7015:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return a(780)}])},780:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var n=a(5893),i=a(7294),s=a(9473),r=function(){return(0,n.jsxs)("div",{class:"skeleton",children:[(0,n.jsxs)("div",{class:"pulses skeleton__header",children:[(0,n.jsx)("div",{class:"pulses skeleton__circle"}),(0,n.jsx)("div",{class:"pulses skeleton__mini"})]}),(0,n.jsx)("div",{class:"pulses skeleton__block"}),(0,n.jsx)("div",{class:"pulses skeleton__block"}),(0,n.jsx)("div",{class:"pulses skeleton__block"})]})},l=a(1799),c=a(9396),o=a(828),m=a(943),u=a(3375),d=a(1566);function f(e){return function(e){if(Array.isArray(e))return(0,m.Z)(e)}(e)||(0,u.Z)(e)||(0,d.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=a(7814),x=a(9417),b=a(2018),g=function(){var e=(0,s.I0)(),t=(0,s.v9)(function(e){return e.teamSlice.heroes}),a=(0,o.Z)((0,i.useState)(),2),r=a[0],m=a[1],u=(0,o.Z)((0,i.useState)(),2),d=u[0],g=u[1],p=(0,o.Z)((0,i.useState)(),2),j=p[0],v=p[1],y=(0,o.Z)((0,i.useState)([{name:"",img:null,description:"",num:0,value:r},{name:"",img:null,description:"",num:1,value:d},{name:"",img:null,description:"",num:2,value:j}]),2),_=y[0],N=y[1],k=(0,o.Z)((0,i.useState)({name:null,img:null}),2),w=k[0],T=k[1],C=(0,o.Z)((0,i.useState)({name:null,img:null}),2),Z=C[0],S=C[1],O=(0,o.Z)((0,i.useState)({name:null,img:null}),2),B=O[0],I=O[1],P=(0,o.Z)((0,i.useState)(!1),2),L=P[0],E=P[1],M=(0,o.Z)((0,i.useState)(!1),2),q=M[0],A=M[1],G=(0,o.Z)((0,i.useState)(!1),2),H=G[0],V=G[1],X=(0,o.Z)((0,i.useState)(!1),2),F=X[0],J=X[1],R=(0,o.Z)((0,i.useState)(!1),2),W=R[0],Y=R[1],z=(0,o.Z)((0,i.useState)(!1),2),D=z[0],K=z[1],Q=function(e,t){switch(e){case 0:return m(t.target.value);case 1:return g(t.target.value);case 2:return v(t.target.value)}},U=function(e,a){var n=t[t.findIndex(function(t){return t.name===e})].img;0===a?T({name:e,img:n}):1===a?S({name:e,img:n}):2===a&&I({name:e,img:n})},$=function(e,t){J(!1),Y(!1),K(!1);var a=_.findIndex(function(e){return e.num===t}),n=_[a],i=(0,c.Z)((0,l.Z)({},n),{name:e.data.results[0].name,description:e.data.results[0].description,img:e.data.results[0].thumbnail.path+"."+e.data.results[0].thumbnail.extension});N(f(_.slice(0,a)).concat([i],f(_.slice(a+1))))},ee=function(a){if(0!==a||L){if(1!==a||q){if(2===a&&!H){if(null===B.name||""===_[2].name)return;V(!0);var n=B.name,i=t.findIndex(function(e){return e.name===n}),s=t[i],r=(0,c.Z)((0,l.Z)({},s),{name:_[2].name,img:_[2].img,description:_[2].description}),o=f(t.slice(0,i)).concat([r],f(t.slice(i+1)));e((0,b.SV)(o))}}else{if(null===Z.name||""===_[1].name)return;A(!0);var m=Z.name,u=t.findIndex(function(e){return e.name===m}),d=t[u],h=(0,c.Z)((0,l.Z)({},d),{name:_[1].name,img:_[1].img,description:_[1].description}),x=f(t.slice(0,u)).concat([h],f(t.slice(u+1)));e((0,b.SV)(x))}}else{if(null===w.name||""===_[0].name)return;E(!0);var g=w.name,p=t.findIndex(function(e){return e.name===g}),j=t[p],v=(0,c.Z)((0,l.Z)({},j),{name:_[0].name,img:_[0].img,description:_[0].description}),y=f(t.slice(0,p)).concat([v],f(t.slice(p+1)));e((0,b.SV)(y))}},et=function(e){0===e?(J(!0),fetch("https://gateway.marvel.com:443/v1/public/characters?name=".concat(r,"&ts=1&apikey=051fe2288253d927a7e0fa96c34fb4e3&hash=a062d7eb32dbb34a5b8d9df7c8b50086")).then(function(e){return e.json()}).then(function(t){return $(t,e)})):1===e?(Y(!0),fetch("https://gateway.marvel.com:443/v1/public/characters?name=".concat(d,"&ts=1&apikey=051fe2288253d927a7e0fa96c34fb4e3&hash=a062d7eb32dbb34a5b8d9df7c8b50086")).then(function(e){return e.json()}).then(function(t){return $(t,e)})):2===e&&(K(!0),fetch("https://gateway.marvel.com:443/v1/public/characters?name=".concat(j,"&ts=1&apikey=051fe2288253d927a7e0fa96c34fb4e3&hash=a062d7eb32dbb34a5b8d9df7c8b50086")).then(function(e){return e.json()}).then(function(t){return $(t,e)}))},ea=t.map(function(e){return(0,n.jsx)("option",{value:e.name,children:e.name})});return _.map(function(e,t){var a=null,i=null,s=null,r=null;return 0===t?(r=F?"team-bottom-subs-icon white-color fa fa-spinner fa-spin":"team-bottom-subs-icon white-color fa fa-search",a=w.img,i=null!==w.img&&""!==_[0].name?"team-bottom-subs-imgsBox-middle fas fa-directions fa-lg white-color-back":"team-bottom-subs-imgsBox-middle fas fa-directions fa-2x",s=null===w.img||""===_[0].name||L?"none":"flex"):1===t?(r=W?"team-bottom-subs-icon white-color fa fa-spinner fa-spin":"team-bottom-subs-icon white-color fa fa-search",a=Z.img,i=null!==Z.img&&""!==_[1].name?"team-bottom-subs-imgsBox-middle fas fa-directions fa-lg white-color-back":"team-bottom-subs-imgsBox-middle fas fa-directions fa-2x",s=null===Z.img||""===_[1].name||q?"none":"flex"):2===t&&(r=D?"team-bottom-subs-icon white-color fa fa-spinner fa-spin":"team-bottom-subs-icon white-color fa fa-search",a=B.img,i=null!==B.img&&""!==_[2].name?"team-bottom-subs-imgsBox-middle fas fa-directions fa-lg white-color-back":"team-bottom-subs-imgsBox-middle fas fa-directions fa-2x",s=null===B.img||""===_[2].name||H?"none":"flex"),(0,n.jsxs)("div",{className:"team-bottom-subs-".concat(t+1),children:[(0,n.jsx)("div",{onClick:function(){return et(t)},className:r,children:(0,n.jsx)(h.G,{icon:x.wn1})}),(0,n.jsx)("input",{onChange:function(e){Q(t,e)},value:e.value,type:"text",placeholder:"Marvel character",className:"team-bottom-subs-inp browser-default"}),(0,n.jsxs)("div",{className:"team-bottom-subs-imgsBox",children:[(0,n.jsxs)("div",{className:"team-bottom-subs-imgsBox-in",children:[(0,n.jsx)("div",{className:"team-bottom-subs-imgsBox-title",children:"out"}),(0,n.jsx)("div",{children:(0,n.jsxs)("select",{style:{marginBottom:"10px",width:"15rem",height:"3rem",background:"#222030",border:"none",color:"#fff"},onChange:function(e){return U(e.target.value,t)},name:"",id:"",className:"browser-default",children:[(0,n.jsx)("option",{value:""}),ea]})}),(0,n.jsx)("div",{className:"team-bottom-subs-img",children:(0,n.jsx)("img",{src:a,alt:""})})]}),(0,n.jsx)("div",{style:{display:s},onClick:function(){return ee(t)},className:i,children:(0,n.jsx)(h.G,{icon:x.W2X,width:40,className:"fa spin"})}),(0,n.jsxs)("div",{className:"team-bottom-subs-imgsBox-out",children:[(0,n.jsx)("div",{className:"team-bottom-subs-imgsBox-title",children:"in"}),(0,n.jsx)("div",{className:"team-bottom-subs-img",children:(0,n.jsx)("img",{src:e.img,alt:""})})]})]})]},e.num)})},p=a(7599),j=function(){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"70px",height:"70px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[(0,n.jsx)("g",{transform:"translate(80,50)",children:(0,n.jsx)("g",{transform:"rotate(0)",children:(0,n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"red",fillOpacity:"1",children:[(0,n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),(0,n.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:(0,n.jsx)("g",{transform:"rotate(45)",children:(0,n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"red",fillOpacity:"0.875",children:[(0,n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),(0,n.jsx)("g",{transform:"translate(50,80)",children:(0,n.jsx)("g",{transform:"rotate(90)",children:(0,n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"red",fillOpacity:"0.75",children:[(0,n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),(0,n.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:(0,n.jsx)("g",{transform:"rotate(135)",children:(0,n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"red",fillOpacity:"0.625",children:[(0,n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),(0,n.jsx)("g",{transform:"translate(20,50.00000000000001)",children:(0,n.jsx)("g",{transform:"rotate(180)",children:(0,n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"red",fillOpacity:"0.5",children:[(0,n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),(0,n.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:(0,n.jsx)("g",{transform:"rotate(225)",children:(0,n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"red",fillOpacity:"0.375",children:[(0,n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),(0,n.jsx)("g",{transform:"translate(49.99999999999999,20)",children:(0,n.jsx)("g",{transform:"rotate(270)",children:(0,n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"red",fillOpacity:"0.25",children:[(0,n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),(0,n.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:(0,n.jsx)("g",{transform:"rotate(315)",children:(0,n.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"red",fillOpacity:"0.125",children:[(0,n.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},v=a(5675),y=a.n(v),_=function(){var e=(0,s.I0)(),t=(0,s.v9)(function(e){return e.teamSlice.heroes}),a=(0,s.v9)(function(e){return e.teamSlice.heroLoading}),i=function(a){t[a].img===p.Z&&(e((0,b.JH)()),e((0,b.LI)(a)))},r=t.map(function(e,t){var s=!0===e.captain?"active-img":"",r=!0===e.captain?"active-card":"";return(0,n.jsxs)("div",{onClick:function(){return i(t)},className:"teamBoard__item-".concat(t+1," card-football ").concat(r),children:[(0,n.jsx)("div",{className:"card-football__side card-football__side_front",children:(0,n.jsx)("div",{children:(0,n.jsx)(y(),{className:s,src:e.img,alt:"hero-image",width:110,height:110})})}),(0,n.jsx)("div",{className:"card-football__side card-football__side_back",children:(0,n.jsx)("div",{children:a?(0,n.jsx)("div",{className:"spinner",children:(0,n.jsx)(j,{})}):(0,n.jsx)(y(),{src:e.img,width:110,height:110,alt:"hero-image"})})})]},e.num)});return(0,n.jsx)("div",{className:"teamBoard",children:r})},N=function(){var e=(0,s.I0)(),t=(0,s.v9)(function(e){return e.teamSlice.heroes}),a=t.map(function(e,a){var s,l=e.captain?"fa fa-star red-color":"fa fa-star black-color";return(0,n.jsxs)("li",{className:"teamList__item",children:[(0,n.jsx)(h.G,{icon:x.Tab,className:l,onClick:function(){return i(a)}}),e.position," - ",(0,n.jsx)("span",{onClick:function(){return r(a)},children:(s=t[a].name).length>20?s.slice(0,20)+"...":s})]},e.num)}),i=function(a){0===t.filter(function(e){return"..."===e.name}).length&&e((0,b.q8)(a))},r=function(t){e((0,b.q)(t))};return(0,n.jsxs)("div",{className:"teamList",children:[(0,n.jsxs)("ul",{className:"teamList__heading",children:[(0,n.jsx)("li",{children:"Click on a card and get your random Marvel hero"}),(0,n.jsx)("li",{children:"Choose a captain"}),(0,n.jsx)("li",{children:"Make 3 substitutions if you need"})]}),(0,n.jsx)("ul",{className:"teamList__squad",children:a})]})},k=function(){var e=(0,s.v9)(function(e){return e.teamSlice.heroes}),t=(0,s.v9)(function(e){return e.teamSlice.clikedHeroFromList});return(0,n.jsxs)("div",{className:"selectedPlayer",children:[(0,n.jsx)("div",{className:"selectedPlayer__img",children:(0,n.jsx)("img",{src:e[t].img,alt:"selectedPlayer"})}),(0,n.jsxs)("div",{className:"selectedPlayer__text",children:[(0,n.jsx)("div",{className:"selectedPlayer__title",children:e[t].name}),(0,n.jsx)("div",{className:"selectedPlayer__desc",children:""!==e[t].description?e[t].description:"No description"}),(0,n.jsx)("a",{className:"btn team-btn selectedPlayer__btn",href:e[t].homepage,target:"_blank",children:"homepage"}),(0,n.jsx)("a",{className:"btn team-btn",href:e[t].wiki,target:"_blank",children:"wiki"})]})]})},w=function(){var e=(0,s.v9)(function(e){return e.teamSlice.clikedHeroFromList});return(0,n.jsxs)("section",{className:"team",children:[(0,n.jsx)("div",{className:"team__left",children:(0,n.jsx)(N,{})}),(0,n.jsx)("div",{className:"team__right",children:(0,n.jsx)(_,{})}),(0,n.jsxs)("div",{className:"team__bottom",children:[e||0===e?(0,n.jsx)(k,{}):(0,n.jsx)(r,{}),(0,n.jsx)("div",{className:"team__subs",children:(0,n.jsx)(g,{})})]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7015)}),_N_E=e.O()}]);