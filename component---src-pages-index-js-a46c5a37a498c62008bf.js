(self.webpackChunktellus_private=self.webpackChunktellus_private||[]).push([[678],{1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var l=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=l.createContext&&l.createContext(n),o=function(){return(o=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]])}return r};function c(e){return e&&e.map((function(e,t){return l.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return l.createElement(i,o({attr:o({},e.attr)},t),c(e.child))}}function i(e){var t=function(t){var r,n=e.attr,a=e.size,c=e.title,u=s(e,["attr","size","title"]),i=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),e.children)};return void 0!==a?l.createElement(a.Consumer,null,(function(e){return t(e)})):t(n)}},7704:function(e,t,r){"use strict";r.r(t);var l=r(7294),n=r(5444),a=r(3751),o=r(1852),s=r(9797);t.default=function(){var e=(0,l.useRef)(),t=(0,l.useRef)(),r=(0,l.useState)(!1),c=r[0],u=r[1],i=(0,s.aC)().validateAuth;return l.createElement(l.Fragment,null,l.createElement(a.Z,{title:"Home"}),l.createElement("section",{className:"flex flex-col justify-center items-center w-screen h-screen"},l.createElement("div",{className:"palanquin-bold absolute top-3 flex justify-between w-screen px-6 text-gray-500 underline tracking-widest"},l.createElement(n.Link,{to:"/philosophy"},"PHILOSOPHY"),l.createElement(n.Link,{to:"/story"},"STORY")),l.createElement("h1",{className:"palanquin-bold c-name text-xl md:text-6xl"},"TELLUS"),l.createElement("p",{className:"palanquin-light c-status text-2xl sm:text-3xl md:text-8xl",style:{color:"rgba(0, 0, 0, 0.4)"}},"PRIVATE"),l.createElement("form",{autoComplete:"off",className:"w-3/5 sm:w-2/5 lg:w-2/6 xl:w-1/4 md:w-2/5"},l.createElement("div",{ref:t,className:"relative my-10 md:my-20 border-b-2 border-gray-300 focus-within:border-blue-700"},l.createElement("input",{id:"password",type:"password",name:"password",placeholder:" ",ref:e,onChange:function(r){r.preventDefault(),"karndesigner"===e.current.value?(t.current.style.borderColor="green",i(e.current.value),console.log({}.PASSWORD),(0,n.navigate)("/countries")):e.current.value.length>12?t.current.style.borderColor="red":t.current.style.borderColor="rgba(30,64,175,1)"},className:"block w-full appearance-none focus:outline-none bg-transparent text-center"}),l.createElement("label",{htmlFor:"password",className:"text-center w-full absolute top-0 -z-1",style:{color:"rgba(0, 0, 0, 0.4)"}},"PASSWORD"),l.createElement("button",{className:"absolute top-0 right-1 z-10 text-gray-400 hover:text-gray-700 focus:outline-none focus:text-gray-900",onClick:function(t){t.preventDefault(),e.current.type="text"===e.current.type?"password":"text",u((function(e){return!e})),e.current.focus()},title:"toogle password",label:"toggle password"},c?l.createElement(o.xt8,{label:"visible",className:"fill-current"}):l.createElement(o.Jmv,{label:"hidden",className:"fill-current"})))),l.createElement("footer",{className:"absolute bottom-2 text-sm md:text-base text-center px-3"},"©Tellus Travel |"," ",l.createElement("address",{className:"inline-block"},"353 avenue de la Basilique, 1081 Brussels – Belgium")," ","|"," ",l.createElement("a",{className:"text-blue-600 hover:underline focus:outline-none focus:underline focus:text-blue-800",href:"mailto:info@tellus.be"},"info@tellus.be")," ","|"," ",l.createElement("a",{className:"text-blue-600 hover:underline focus:outline-none focus:underline focus:text-blue-800",href:"tel:32 2 414 64 03"},"+32 2 414 64 03"))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a46c5a37a498c62008bf.js.map