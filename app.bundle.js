(()=>{"use strict";var n={254:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"* {\n  padding: 0%;\n  margin: 0%;\n  color: #000;\n  box-sizing: border-box;\n}\nhtml {\n  height: 100vh;\n  width: 100vw;\n}\nbody {\n  padding: 3%;\n  height: 100%;\n}\n#container {\n  height: 100%;\n  display: grid;\n  border: 1px solid #333;\n  padding: 20px;\n  border-radius: 10px;\n  gap: 10px;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr 1fr;\n}\n#container > div {\n  border-radius: 5px;\n  padding: 5px;\n}\n#Current {\n  grid-column: 1 / 5;\n  flex-direction: column;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 10px;\n}\n#Current > div:first-child {\n  grid-column: span 2;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.icon {\n  width: 64px;\n  height: 64px;\n}\n#container > div:nth-child(2) {\n  border: 1px solid #333;\n}\n#container > div:nth-child(2) > form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: start;\n}\n#Forecast {\n  grid-column: 1/5;\n  grid-row: 2/3;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  border: 1px solid #333;\n  overflow-y: auto;\n}\n#Day {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 5px;\n}\n.inDay {\n  flex-shrink: 0;\n  background-color: #e2e2e2;\n  padding: 2px;\n  border-radius: 2px;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  justify-content: center;\n}\n.inDay > img {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n#Form input#FindLocation {\n  font-size: 24px;\n  width: 100%;\n}\n#Form > h3 {\n  display: none;\n  color: #ff3434;\n}\n#Form > h3.display {\n  display: block;\n}\nbutton {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #fff;\n  background-color: #e2e2e2;\n}\nbutton:active {\n  transform: scale(102%);\n}\nimg {\n  width: 30px;\n  height: 30px;\n}\n","",{version:3,sources:["webpack://./src/assets/style.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,UAAU;EACV,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,qCAAqC;EACrC,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,4DAA4D;EAC5D,QAAQ;AACV;AACA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,eAAe;EACf,WAAW;AACb;AACA;EACE,aAAa;EACb,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,YAAY;AACd",sourcesContent:["* {\n  padding: 0%;\n  margin: 0%;\n  color: #000;\n  box-sizing: border-box;\n}\nhtml {\n  height: 100vh;\n  width: 100vw;\n}\nbody {\n  padding: 3%;\n  height: 100%;\n}\n#container {\n  height: 100%;\n  display: grid;\n  border: 1px solid #333;\n  padding: 20px;\n  border-radius: 10px;\n  gap: 10px;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr 1fr;\n}\n#container > div {\n  border-radius: 5px;\n  padding: 5px;\n}\n#Current {\n  grid-column: 1 / 5;\n  flex-direction: column;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 10px;\n}\n#Current > div:first-child {\n  grid-column: span 2;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.icon {\n  width: 64px;\n  height: 64px;\n}\n#container > div:nth-child(2) {\n  border: 1px solid #333;\n}\n#container > div:nth-child(2) > form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: start;\n}\n#Forecast {\n  grid-column: 1/5;\n  grid-row: 2/3;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  border: 1px solid #333;\n  overflow-y: auto;\n}\n#Day {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 5px;\n}\n.inDay {\n  flex-shrink: 0;\n  background-color: #e2e2e2;\n  padding: 2px;\n  border-radius: 2px;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  justify-content: center;\n}\n.inDay > img {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n#Form input#FindLocation {\n  font-size: 24px;\n  width: 100%;\n}\n#Form > h3 {\n  display: none;\n  color: #ff3434;\n}\n#Form > h3.display {\n  display: block;\n}\nbutton {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #fff;\n  background-color: #e2e2e2;\n}\nbutton:active {\n  transform: scale(102%);\n}\nimg {\n  width: 30px;\n  height: 30px;\n}\n"],sourceRoot:""}]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],l=r.base?A[0]+r.base:A[0],d=i[l]||0,s="".concat(l," ").concat(d);i[l]=d+1;var u=t(s),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:s,updater:m,references:1})}a.push(s)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var A=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=A}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),A=t.n(c),l=t(540),d=t.n(l),s=t(113),u=t.n(s),p=t(254),m={};m.styleTagTransform=u(),m.setAttributes=A(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(p.A,m),p.A&&p.A.locals&&p.A.locals;let f=async function(n){let e={};return await n.then((n=>{document.querySelector(".icon").style.background=`url("https:${n.current.condition.icon}")`;let t={location:n.location.name,localTime:n.location.localtime.slice(11),tempC:n.current.temp_c+"'C",tempF:n.current.temp_f+"'F",weather:n.current.condition.text,windM:n.current.wind_mph+" m/h",windK:n.current.wind_kph+" k/h",humidity:n.current.humidity+" grams/m3",cloud:n.current.cloud+" oktas"},r={};n.forecast.forecastday[0].hour.forEach((n=>{let e=n.time.slice(11),t=n.temp_c+"'C",o=n.temp_f+"'F",i="https:"+n.condition.icon;r[e]=[t,o,i]}));let o={};n.forecast.forecastday[1].hour.forEach((n=>{let e=n.time.slice(11),t=n.temp_c+"'C",r=n.temp_f+"'F",i="https:"+n.condition.icon;o[e]=[t,r,i]})),e.current=t,e.dayOne=r,e.dayTwo=o})).catch((n=>{console.log(n)})),e};!function(){let n,e=document.querySelector("#FindLocation"),t=document.querySelector("#TemperatureSwitch"),r=document.querySelector("#DistanceSwitch"),o=document.querySelector("#SubmitBtn"),i=document.querySelector("#TomorrowSTomorrow"),a=!0,c="F",A="K";const l=[{condition:"Sunny",color:"#FFEEA9"},{condition:"Rain",color:"#4682B4"},{condition:"Thunderstorm",color:"#808080"},{condition:"Snow",color:"#FFFFFF"},{condition:"Cloudy",color:"#A9A9A9"},{condition:"Clear",color:"#87CEEB"},{condition:"Fog",color:"#696969"},{condition:"Overcast",color:"#708090"},{condition:"Hail",color:"#DCDCDC"}];function d(){try{document.querySelector("#Form>h3").classList.remove("display");let t=async function(n){let e=new Promise((e=>{!async function(){let t=await async function(n){try{let e="http://api.weatherapi.com/v1/forecast.json?key=80aa09905c86464caa524725242105&q="+n.replaceAll(" ","_")+"&days=2&aqi=no&alerts=no",t=await fetch(e);return!!t.ok&&await f(t.json())}catch(n){console.log(n)}}(n);0==t&&console.log("bad request"),e(t)}()}));return e}(n);n=e.value,t.then((n=>{0==n&&console.log("this value is a bad request")})),s(t)}catch(n){console.log(n)}}async function s(e){try{let t=await e.then((n=>n)).catch((n=>{console.error(n)})),r=t.current,o=t.dayOne,i=t.dayTwo;!function(e){let t=document.querySelector("#Current");t.querySelector("#Location").textContent=e.location,n=e.location,t.querySelector("#Time").textContent=e.localTime;let r=t.querySelector("#Temp");"F"==c?r.textContent=e.tempF:"C"==c&&(r.textContent=e.tempC),t.querySelector("#Weather").textContent=e.weather,function(n){let e=document.querySelector("body");(n=n.split(" ")).forEach((n=>{n=p(n),l.forEach((t=>{let r=p(t.condition);n==r&&(e.style.backgroundColor=t.color)}))}))}(e.weather),console.log(e.weather);let o=t.querySelector("#Wind");"K"==A?o.textContent=e.windK:"M"==A&&(o.textContent=e.windM),t.querySelector("#Humidity").textContent=e.humidity,t.querySelector("#Cloud").textContent=e.cloud}(r),function(n){let e=document.querySelector("#Day");e.innerHTML="";for(const t in n)if(Object.hasOwnProperty.call(n,t)){const r=n[t];u(e,t,"C"==c?r[0]:r[1],r[2])}}(a?o:i)}catch(n){document.querySelector("#Form>h3").classList.add("display"),console.log(n)}}o.addEventListener("click",(t=>{t.preventDefault(),""!=e.value&&(n=e.value,d())})),i.addEventListener("click",(()=>{a=1!=a,d()})),r.addEventListener("click",(()=>{A="K"==A?"M":"K",r.textContent="Current Speed Unit "+A,d()})),t.addEventListener("click",(()=>{c="F"==c?"C":"F",t.textContent="Current Unit "+c,d()}));let u=function(n,e,t,r){let o=document.createElement("div");o.classList.add("inDay");let i=document.createElement("h3");i.classList.add("Time"),i.textContent=e;let a=document.createElement("h3");a.classList.add("Weather"),a.textContent=t;let c=document.createElement("img");return c.src=r,o.appendChild(i),o.appendChild(a),o.appendChild(c),n.appendChild(o),o};function p(n){return n.charAt(0).toLowerCase()+n.slice(1)}s(new Promise((n=>{navigator.geolocation.getCurrentPosition((async e=>{let t=e.coords.latitude,r=e.coords.longitude,o=await async function(n,e){try{let t="http://api.weatherapi.com/v1/forecast.json?key=80aa09905c86464caa524725242105&q="+n+","+e+"&days=2&aqi=no&alerts=no",r=(await fetch(t)).json();return await f(r)}catch(n){console.error("Problem occur in "+n)}}(t,r);n(o)}))})))}()})()})();
//# sourceMappingURL=app.bundle.js.map