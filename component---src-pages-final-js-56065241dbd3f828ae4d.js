(self.webpackChunktellus_private=self.webpackChunktellus_private||[]).push([[538],{3865:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(7294);function l(e){var t=e.id,n=e.title,l=e.values,r=e.state,i=e.setState;return a.createElement(a.Fragment,null,a.createElement("h2",{className:"palanquin-bold text-4xl tracking-widest text-gray-800"},n),a.createElement("div",{className:"flex items-center justify-evenly w-3/5"},l.map((function(e,n){return r[t]===e?a.createElement("button",{key:n,onClick:function(){return i((function(e){var n;return Object.assign({},e,((n={})[t]=null,n))}))},className:"lato h-16 w-40 tracking-wider bg-gray-700 text-white"},e):a.createElement("button",{key:n,onClick:function(){return i((function(n){var a;return Object.assign({},n,((a={})[t]=e,a))}))},className:"lato h-16 w-40 bg-gray-300 tracking-wider hover:bg-black hover:text-white transition-all duration-300 ease-out focus:outline-none focus:bg-black focus:text-white"},e)}))))}var r=function(e){var t=e.state,n=e.setState;return a.createElement(a.Fragment,null,[{title:"THE PACE YOU LIKE",values:["SLOW","MEDIUM","FAST"],id:"pace"},{title:"THINGS THAT INTEREST YOU",values:["CULTURE","PLACES","PEOPLE"],id:"interest"},{title:"YOU CONSIDER YOURSELF",values:["EXPLORER","ADVENTURER","RELAXED"],id:"personality"},{title:"ACTIVITIES YOU PREFER",values:["WALKS","EXPLORE","GENERAL"],id:"activity"}].map((function(e,r){return a.createElement(l,{key:r,id:e.id,title:e.title,values:e.values,setState:n,state:t})})))},i=n(5565),s=function(e){var t=e.id,n=e.title,l=e.values,r=e.setState,i=e.state;return a.createElement(a.Fragment,null,a.createElement("section",{className:"flex flex-col justify-evenly items-center",style:{height:"50vh"}},a.createElement("h2",{className:"palanquin-bold text-2xl xs:text-3xl lg:text-4xl tracking-widest text-gray-800"},n),l.map((function(e,n){return i[t]===e?a.createElement("button",{key:n,onClick:function(){return r((function(e){var n;return Object.assign({},e,((n={})[t]=null,n))}))},className:"lato h-16 w-40 tracking-wider bg-gray-700 text-white"},e):a.createElement("button",{key:n,onClick:function(){return r((function(n){var a;return Object.assign({},n,((a={})[t]=e,a))}))},className:"lato h-16 w-40 bg-gray-300 tracking-wider hover:bg-black hover:text-white transition-all duration-300 ease-out focus:outline-none"},e)}))))};var c=function(e){var t=e.state,n=e.setState,l=(0,a.useState)(0),r=l[0],c=l[1];return a.createElement(a.Fragment,null,a.createElement(i.lr,{className:"w-screen",selectedItem:r,showThumbs:!1,showStatus:!1,autoPlay:!1,showArrows:!1,transitionTime:500,swipeable:!1,showIndicators:!1},[{title:"THE PACE YOU LIKE",values:["SLOW","MEDIUM","FAST"],id:"pace"},{title:"THINGS THAT INTEREST YOU",values:["CULTURE","PLACES","PEOPLE"],id:"interest"},{title:"YOU CONSIDER YOURSELF",values:["EXPLORER","ADVENTURER","RELAXED"],id:"personality"},{title:"ACTIVITIES YOU PREFER",values:["WALKS","EXPLORE","GENERAL"],id:"activity"}].map((function(e,l){return a.createElement(s,{key:l,id:e.id,title:e.title,values:e.values,setState:n,state:t})}))),a.createElement("div",{className:"flex items-center px-20 lg:px-40 w-screen mb-8"},r>0&&a.createElement("button",{className:"lato h-12 w-28 bg-blue-700 text-white mr-auto",onClick:function(){0!==r&&c((function(e){return e-1}))}},"Previous"),r<3&&a.createElement("button",{className:"lato h-12 w-28 bg-blue-700 text-white ml-auto",onClick:function(){3!==r&&c((function(e){return e+1}))}},"Next")))},u=n(3751);var o=function(){var e=(0,a.useState)({pace:null,interest:null,personality:null,activity:null}),t=e[0],n=e[1],l=function(){var e="undefined"!=typeof window,t=(0,a.useState)(e?window.innerWidth:0),n=t[0],l=t[1];return(0,a.useEffect)((function(){if(!e)return!1;var t=function(){return l(window.innerWidth)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}})),n}();return a.createElement(a.Fragment,null,a.createElement(u.Z,{title:"ABOUT YOU"}),a.createElement("section",{className:"w-screen min-h-screen flex flex-col items-center justify-evenly mx-auto"},a.createElement("h1",{className:"palanquin-bold text-center text-4xl xs:text-5xl lg:text-6xl tracking-widest text-gray-300 px-1 mt-10"},a.createElement("span",{className:"text-gray-800"},"TELLUS")," ABOUT YOU"),l>768?a.createElement(a.Fragment,null,a.createElement(r,{state:t,setState:n}),a.createElement("button",{disabled:null===(t.activity&&t.pace&&t.personality&&t.interest),onClick:function(){return alert(JSON.stringify(t,null,4))},className:"w-44 h-16 bg-gray-500 text-white lato"},"I'M IN")):a.createElement(a.Fragment,null,a.createElement(c,{state:t,setState:n}),a.createElement("button",{onClick:function(){return alert(JSON.stringify(t,null,4))},className:null===(t.activity&&t.pace&&t.personality&&t.interest)?"w-32 h-12 mb-4 opacity-0":"w-32 h-12 bg-gray-500 text-white lato mb-4"},"I'M IN"))))}}}]);
//# sourceMappingURL=component---src-pages-final-js-56065241dbd3f828ae4d.js.map