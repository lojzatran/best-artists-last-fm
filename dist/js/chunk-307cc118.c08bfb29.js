(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-307cc118"],{"044b":function(e,t){function a(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&a(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(a(e)||n(e)||!!e._isBuffer)}},"0a06":function(e,t,a){"use strict";var n=a("2444"),r=a("c532"),o=a("f6b4"),i=a("5270");function u(e){this.defaults=e,this.interceptors={request:new o,response:new o}}u.prototype.request=function(e){"string"===typeof e&&(e=r.merge({url:arguments[0]},arguments[1])),e=r.merge(n,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[i,void 0],a=Promise.resolve(e);this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});while(t.length)a=a.then(t.shift(),t.shift());return a},r.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,a){return this.request(r.merge(a||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,a,n){return this.request(r.merge(n||{},{method:e,url:t,data:a}))}}),e.exports=u},"0df6":function(e,t,a){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},1056:function(e,t,a){"use strict";var n=a("3df3"),r=a.n(n);r.a},"1d2b":function(e,t,a){"use strict";e.exports=function(e,t){return function(){for(var a=new Array(arguments.length),n=0;n<a.length;n++)a[n]=arguments[n];return e.apply(t,a)}}},2444:function(e,t,a){"use strict";(function(t){var n=a("c532"),r=a("c8af"),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){var e;return"undefined"!==typeof XMLHttpRequest?e=a("b50d"):"undefined"!==typeof t&&(e=a("b50d")),e}var s={adapter:u(),transformRequest:[function(e,t){return r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){s.headers[e]={}}),n.forEach(["post","put","patch"],function(e){s.headers[e]=n.merge(o)}),e.exports=s}).call(this,a("4362"))},"2d83":function(e,t,a){"use strict";var n=a("387f");e.exports=function(e,t,a,r,o){var i=new Error(e);return n(i,t,a,r,o)}},"2e67":function(e,t,a){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,a){"use strict";var n=a("c532");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,a){if(!t)return e;var o;if(a)o=a(t);else if(n.isURLSearchParams(t))o=t.toString();else{var i=[];n.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),o=i.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},"387f":function(e,t,a){"use strict";e.exports=function(e,t,a,n,r){return e.config=t,a&&(e.code=a),e.request=n,e.response=r,e}},3934:function(e,t,a){"use strict";var n=a("c532");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");function r(e){var n=e;return t&&(a.setAttribute("href",n),n=a.href),a.setAttribute("href",n),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}return e=r(window.location.href),function(t){var a=n.isString(t)?r(t):t;return a.protocol===e.protocol&&a.host===e.host}}():function(){return function(){return!0}}()},"3df3":function(e,t,a){},4362:function(e,t,a){t.nextTick=function(e){setTimeout(e,0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,n="/";t.cwd=function(){return n},t.chdir=function(t){e||(e=a("df7c")),n=e.resolve(t,n)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"467f":function(e,t,a){"use strict";var n=a("2d83");e.exports=function(e,t,a){var r=a.config.validateStatus;a.status&&r&&!r(a.status)?t(n("Request failed with status code "+a.status,a.config,null,a.request,a)):e(a)}},5270:function(e,t,a){"use strict";var n=a("c532"),r=a("c401"),o=a("2e67"),i=a("2444"),u=a("d925"),s=a("e683");function l(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){l(e),e.baseURL&&!u(e.url)&&(e.url=s(e.baseURL,e.url)),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||i.adapter;return t(e).then(function(t){return l(e),t.data=r(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(l(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},7563:function(e,t,a){"use strict";var n=a("cdab"),r=a.n(n);r.a},"7a77":function(e,t,a){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},"7aac":function(e,t,a){"use strict";var n=a("c532");e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,a,r,o,i){var u=[];u.push(e+"="+encodeURIComponent(t)),n.isNumber(a)&&u.push("expires="+new Date(a).toGMTString()),n.isString(r)&&u.push("path="+r),n.isString(o)&&u.push("domain="+o),!0===i&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"8df4":function(e,t,a){"use strict";var n=a("7a77");function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var a=this;e(function(e){a.reason||(a.reason=new n(e),t(a.reason))})}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},"914a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.$t("nav.topartists")))]),a("the-country-selector",{attrs:{selectButtonText:"Zobrazit"},on:{countrySelected:e.getTopArtistsForCountry}}),e.loadingArtist?a("div",[e._v("Loading...")]):e._e(),a("ol",e._l(e.artists,function(t){return a("li",[e._v("\n            "+e._s(t.name)+"\n        ")])}))],1)},r=[];a("96cf");function o(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function i(e,t){try{var a=o[e](t),i=a.value}catch(e){return void r(e)}a.done?n(i):Promise.resolve(i).then(u,s)}function u(e){i("next",e)}function s(e){i("throw",e)}u()})}}var i=a("bc3a"),u=a.n(i),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form-select",{staticClass:"mb-3",attrs:{options:e.countries},model:{value:e.selectedCountry,callback:function(t){e.selectedCountry=t},expression:"selectedCountry"}}),a("button",{on:{click:e.handleClick}},[e._v(e._s(e.selectButtonText))])],1)},l=[],c=(a("cadf"),a("551c"),a("097d"),{name:"the-country-selector",methods:{handleClick:function(){this.$emit("countrySelected",this.selectedCountry)}},props:["selectButtonText"],data:function(){return{selectedCountry:"Czech Republic",countries:[{value:"Andorra",text:"Andorra"},{value:"United Arab Emirates",text:"United Arab Emirates"},{value:"Afghanistan",text:"Afghanistan"},{value:"Antigua and Barbuda",text:"Antigua and Barbuda"},{value:"Anguilla",text:"Anguilla"},{value:"Albania",text:"Albania"},{value:"Armenia",text:"Armenia"},{value:"Angola",text:"Angola"},{value:"Antarctica",text:"Antarctica"},{value:"Argentina",text:"Argentina"},{value:"American Samoa",text:"American Samoa"},{value:"Austria",text:"Austria"},{value:"Australia",text:"Australia"},{value:"Aruba",text:"Aruba"},{value:"Åland Islands",text:"Åland Islands"},{value:"Azerbaijan",text:"Azerbaijan"},{value:"Bosnia and Herzegovina",text:"Bosnia and Herzegovina"},{value:"Barbados",text:"Barbados"},{value:"Bangladesh",text:"Bangladesh"},{value:"Belgium",text:"Belgium"},{value:"Burkina Faso",text:"Burkina Faso"},{value:"Bulgaria",text:"Bulgaria"},{value:"Bahrain",text:"Bahrain"},{value:"Burundi",text:"Burundi"},{value:"Benin",text:"Benin"},{value:"Saint Barthélemy",text:"Saint Barthélemy"},{value:"Bermuda",text:"Bermuda"},{value:"Brunei Darussalam",text:"Brunei Darussalam"},{value:"Bolivia, Plurinational State of",text:"Bolivia, Plurinational State of"},{value:"Bonaire, Sint Eustatius and Saba",text:"Bonaire, Sint Eustatius and Saba"},{value:"Brazil",text:"Brazil"},{value:"Bahamas",text:"Bahamas"},{value:"Bhutan",text:"Bhutan"},{value:"Bouvet Island",text:"Bouvet Island"},{value:"Botswana",text:"Botswana"},{value:"Belarus",text:"Belarus"},{value:"Belize",text:"Belize"},{value:"Canada",text:"Canada"},{value:"Cocos (Keeling) Islands",text:"Cocos (Keeling) Islands"},{value:"Congo, the Democratic Republic of",text:"Congo, the Democratic Republic of"},{value:"Central African Republic",text:"Central African Republic"},{value:"Congo",text:"Congo"},{value:"Switzerland",text:"Switzerland"},{value:"Côte d'Ivoire",text:"Côte d'Ivoire"},{value:"Cook Islands",text:"Cook Islands"},{value:"Chile",text:"Chile"},{value:"Cameroon",text:"Cameroon"},{value:"China",text:"China"},{value:"Colombia",text:"Colombia"},{value:"Costa Rica",text:"Costa Rica"},{value:"Cuba",text:"Cuba"},{value:"Cabo Verde",text:"Cabo Verde"},{value:"Curaçao",text:"Curaçao"},{value:"Christmas Island",text:"Christmas Island"},{value:"Cyprus",text:"Cyprus"},{value:"Czech Republic",text:"Czech Republic"},{value:"Germany",text:"Germany"},{value:"Djibouti",text:"Djibouti"},{value:"Denmark",text:"Denmark"},{value:"Dominica",text:"Dominica"},{value:"Dominican Republic",text:"Dominican Republic"},{value:"Algeria",text:"Algeria"},{value:"Ecuador",text:"Ecuador"},{value:"Estonia",text:"Estonia"},{value:"Egypt",text:"Egypt"},{value:"Western Sahara",text:"Western Sahara"},{value:"Eritrea",text:"Eritrea"},{value:"Spain",text:"Spain"},{value:"Ethiopia",text:"Ethiopia"},{value:"Finland",text:"Finland"},{value:"Fiji",text:"Fiji"},{value:"Falkland Islands (Malvinas)",text:"Falkland Islands (Malvinas)"},{value:"Micronesia, Federated States of",text:"Micronesia, Federated States of"},{value:"Faroe Islands",text:"Faroe Islands"},{value:"France",text:"France"},{value:"Gabon",text:"Gabon"},{value:"United Kingdom of Great Britain and Northern Ireland",text:"United Kingdom of Great Britain and Northern Ireland"},{value:"Grenada",text:"Grenada"},{value:"Georgia",text:"Georgia"},{value:"French Guiana",text:"French Guiana"},{value:"Guernsey",text:"Guernsey"},{value:"Ghana",text:"Ghana"},{value:"Gibraltar",text:"Gibraltar"},{value:"Greenland",text:"Greenland"},{value:"Gambia",text:"Gambia"},{value:"Guinea",text:"Guinea"},{value:"Guadeloupe",text:"Guadeloupe"},{value:"Equatorial Guinea",text:"Equatorial Guinea"},{value:"Greece",text:"Greece"},{value:"South Georgia and the South Sandwich Islands",text:"South Georgia and the South Sandwich Islands"},{value:"Guatemala",text:"Guatemala"},{value:"Guam",text:"Guam"},{value:"Guinea-Bissau",text:"Guinea-Bissau"},{value:"Guyana",text:"Guyana"},{value:"Hong Kong",text:"Hong Kong"},{value:"Heard Island and McDonalds Islands",text:"Heard Island and McDonalds Islands"},{value:"Honduras",text:"Honduras"},{value:"Croatia",text:"Croatia"},{value:"Haiti",text:"Haiti"},{value:"Hungary",text:"Hungary"},{value:"Indonesia",text:"Indonesia"},{value:"Ireland",text:"Ireland"},{value:"Israel",text:"Israel"},{value:"Isle of Man",text:"Isle of Man"},{value:"India",text:"India"},{value:"British Indian Ocean Territory",text:"British Indian Ocean Territory"},{value:"Iraq",text:"Iraq"},{value:"Iran, Islamic Republic of",text:"Iran, Islamic Republic of"},{value:"Iceland",text:"Iceland"},{value:"Italy",text:"Italy"},{value:"Jersey",text:"Jersey"},{value:"Jamaica",text:"Jamaica"},{value:"Jordan",text:"Jordan"},{value:"Japan",text:"Japan"},{value:"Kenya",text:"Kenya"},{value:"Kyrgyzstan",text:"Kyrgyzstan"},{value:"Cambodia",text:"Cambodia"},{value:"Kiribati",text:"Kiribati"},{value:"Comoros",text:"Comoros"},{value:"Saint Kitts and Nevis",text:"Saint Kitts and Nevis"},{value:"Korea, Democratic People's Republic of",text:"Korea, Democratic People's Republic of"},{value:"Korea, Republic of",text:"Korea, Republic of"},{value:"Kuwait",text:"Kuwait"},{value:"Cayman Islands",text:"Cayman Islands"},{value:"Kazakhstan",text:"Kazakhstan"},{value:"Lao People's Democratic Republic",text:"Lao People's Democratic Republic"},{value:"Lebanon",text:"Lebanon"},{value:"Saint Lucia",text:"Saint Lucia"},{value:"Liechtenstein",text:"Liechtenstein"},{value:"Sri Lanka",text:"Sri Lanka"},{value:"Liberia",text:"Liberia"},{value:"Lesotho",text:"Lesotho"},{value:"Lithuania",text:"Lithuania"},{value:"Luxembourg",text:"Luxembourg"},{value:"Latvia",text:"Latvia"},{value:"Morocco",text:"Morocco"},{value:"Monaco",text:"Monaco"},{value:"Moldova, Republic of",text:"Moldova, Republic of"},{value:"Montenegro",text:"Montenegro"},{value:"Saint Martin (French part)",text:"Saint Martin (French part)"},{value:"Madagascar",text:"Madagascar"},{value:"Marshall Islands",text:"Marshall Islands"},{value:"Macedonia, the former Yugoslav Republic of",text:"Macedonia, the former Yugoslav Republic of"},{value:"Mali",text:"Mali"},{value:"Myanmar",text:"Myanmar"},{value:"Mongolia",text:"Mongolia"},{value:"Macao",text:"Macao"},{value:"Northern Mariana Islands",text:"Northern Mariana Islands"},{value:"Martinique",text:"Martinique"},{value:"Mauritania",text:"Mauritania"},{value:"Montserrat",text:"Montserrat"},{value:"Malta",text:"Malta"},{value:"Mauritius",text:"Mauritius"},{value:"Maldives",text:"Maldives"},{value:"Malawi",text:"Malawi"},{value:"Mexico",text:"Mexico"},{value:"Malaysia",text:"Malaysia"},{value:"Mozambique",text:"Mozambique"},{value:"Namibia",text:"Namibia"},{value:"New Caledonia",text:"New Caledonia"},{value:"Niger",text:"Niger"},{value:"Norfolk Island",text:"Norfolk Island"},{value:"Nigeria",text:"Nigeria"},{value:"Nicaragua",text:"Nicaragua"},{value:"Netherlands",text:"Netherlands"},{value:"Norway",text:"Norway"},{value:"Nepal",text:"Nepal"},{value:"Nauru",text:"Nauru"},{value:"Niue",text:"Niue"},{value:"New Zealand",text:"New Zealand"},{value:"Oman",text:"Oman"},{value:"Panama",text:"Panama"},{value:"Peru",text:"Peru"},{value:"French Polynesia",text:"French Polynesia"},{value:"Papua New Guinea",text:"Papua New Guinea"},{value:"Philippines",text:"Philippines"},{value:"Pakistan",text:"Pakistan"},{value:"Poland",text:"Poland"},{value:"Saint Pierre and Miquelon",text:"Saint Pierre and Miquelon"},{value:"Pitcairn",text:"Pitcairn"},{value:"Puerto Rico",text:"Puerto Rico"},{value:"Palestine, State of",text:"Palestine, State of"},{value:"Portugal",text:"Portugal"},{value:"Palau",text:"Palau"},{value:"Paraguay",text:"Paraguay"},{value:"Qatar",text:"Qatar"},{value:"Réunion",text:"Réunion"},{value:"Romania",text:"Romania"},{value:"Serbia",text:"Serbia"},{value:"Russian Federation",text:"Russian Federation"},{value:"Rwanda",text:"Rwanda"},{value:"Saudi Arabia",text:"Saudi Arabia"},{value:"Solomon Islands",text:"Solomon Islands"},{value:"Seychelles",text:"Seychelles"},{value:"Sudan",text:"Sudan"},{value:"Sweden",text:"Sweden"},{value:"Singapore",text:"Singapore"},{value:"Saint Helena, Ascension and Tristan da Cunha",text:"Saint Helena, Ascension and Tristan da Cunha"},{value:"Slovenia",text:"Slovenia"},{value:"Svalbard and Jan Mayen",text:"Svalbard and Jan Mayen"},{value:"Slovakia",text:"Slovakia"},{value:"Sierra Leone",text:"Sierra Leone"},{value:"San Marino",text:"San Marino"},{value:"Senegal",text:"Senegal"},{value:"Somalia",text:"Somalia"},{value:"Suriname",text:"Suriname"},{value:"South Sudan",text:"South Sudan"},{value:"Sao Tome and Principe",text:"Sao Tome and Principe"},{value:"El Salvador",text:"El Salvador"},{value:"Sint Maarten (Dutch part)",text:"Sint Maarten (Dutch part)"},{value:"Syrian Arab Republic",text:"Syrian Arab Republic"},{value:"Swaziland",text:"Swaziland"},{value:"Turks and Caicos Islands",text:"Turks and Caicos Islands"},{value:"Chad",text:"Chad"},{value:"French Southern Territories",text:"French Southern Territories"},{value:"Togo",text:"Togo"},{value:"Thailand",text:"Thailand"},{value:"Tajikistan",text:"Tajikistan"},{value:"Tokelau",text:"Tokelau"},{value:"Timor-Leste",text:"Timor-Leste"},{value:"Turkmenistan",text:"Turkmenistan"},{value:"Tunisia",text:"Tunisia"},{value:"Tonga",text:"Tonga"},{value:"Turkey",text:"Turkey"},{value:"Tuvalu",text:"Tuvalu"},{value:"Taiwan, Province of China",text:"Taiwan, Province of China"},{value:"Tanzania, United Republic of",text:"Tanzania, United Republic of"},{value:"Ukraine",text:"Ukraine"},{value:"Uganda",text:"Uganda"},{value:"United States Minor Outlying Islands",text:"United States Minor Outlying Islands"},{value:"United States of America",text:"United States of America"},{value:"Uruguay",text:"Uruguay"},{value:"Uzbekistan",text:"Uzbekistan"},{value:"Holy See",text:"Holy See"},{value:"Saint Vincent and the Grenadines",text:"Saint Vincent and the Grenadines"},{value:"Venezuela, Bolivarian Republic of",text:"Venezuela, Bolivarian Republic of"},{value:"Virgin Islands, British",text:"Virgin Islands, British"},{value:"Virgin Islands, U.S.",text:"Virgin Islands, U.S."},{value:"Viet Nam",text:"Viet Nam"},{value:"Vanuatu",text:"Vanuatu"},{value:"Wallis and Futuna",text:"Wallis and Futuna"},{value:"Samoa",text:"Samoa"},{value:"Yemen",text:"Yemen"},{value:"Mayotte",text:"Mayotte"},{value:"South Africa",text:"South Africa"},{value:"Zambia",text:"Zambia"},{value:"Zimbabwe",text:"Zimbabwe"}]}}}),f=c,d=(a("1056"),a("2877")),v=Object(d["a"])(f,s,l,!1,null,"65fddfbc",null);v.options.__file="TheCountrySelector.vue";var h=v.exports,p="b0e4d591749e37b4da175b00e523581b",x={name:"top-artists",components:{TheCountrySelector:h},data:function(){return{artists:[],loadingArtist:!1}},methods:{getTopArtistsForCountry:function(){var e=o(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingArtist=!0,e.next=3,u.a.get("http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=".concat(t,"&api_key=").concat(p,"&format=json"));case 3:a=e.sent,this.artists=a.data.topartists.artist,console.log("xxx artists "+JSON.stringify(this.artists)),this.loadingArtist=!1;case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},m=x,g=(a("7563"),Object(d["a"])(m,n,r,!1,null,"40a699d8",null));g.options.__file="TopArtists.vue";t["default"]=g.exports},"96cf":function(e,t){!function(t){"use strict";var a,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",l="object"===typeof e,c=t.regeneratorRuntime;if(c)l&&(e.exports=c);else{c=t.regeneratorRuntime=l?e.exports:{},c.wrap=b;var f="suspendedStart",d="suspendedYield",v="executing",h="completed",p={},x={};x[i]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==n&&r.call(g,i)&&(x=g);var y=A.prototype=S.prototype=Object.create(x);C.prototype=y.constructor=A,A.constructor=C,A[s]=C.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,A):(e.__proto__=A,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(y),e},c.awrap=function(e){return{__await:e}},B(E.prototype),E.prototype[u]=function(){return this},c.AsyncIterator=E,c.async=function(e,t,a,n){var r=new E(b(e,t,a,n));return c.isGeneratorFunction(t)?r:r.next().then(function(e){return e.done?e.value:r.next()})},B(y),y[s]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){while(t.length){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},c.values=k,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return u.type="throw",u.arg=e,t.next=n,r&&(t.method="next",t.arg=a),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),L(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=a),p}}}function b(e,t,a,n){var r=t&&t.prototype instanceof S?t:S,o=Object.create(r.prototype),i=new M(n||[]);return o._invoke=R(e,a,i),o}function w(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}function S(){}function C(){}function A(){}function B(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function E(e){function t(a,n,o,i){var u=w(e[a],e,n);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(e){t("next",e,o,i)},function(e){t("throw",e,o,i)}):Promise.resolve(l).then(function(e){s.value=e,o(s)},i)}i(u.arg)}var a;function n(e,n){function r(){return new Promise(function(a,r){t(e,n,a,r)})}return a=a?a.then(r,r):r()}this._invoke=n}function R(e,t,a){var n=f;return function(r,o){if(n===v)throw new Error("Generator is already running");if(n===h){if("throw"===r)throw o;return P()}a.method=r,a.arg=o;while(1){var i=a.delegate;if(i){var u=T(i,a);if(u){if(u===p)continue;return u}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===f)throw n=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=v;var s=w(e,t,a);if("normal"===s.type){if(n=a.done?h:d,s.arg===p)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n=h,a.method="throw",a.arg=s.arg)}}}function T(e,t){var n=e.iterator[t.method];if(n===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=a,T(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=w(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=a),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function k(e){if(e){var t=e[i];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){while(++n<e.length)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=a,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:a,done:!0}}}(function(){return this}()||Function("return this")())},"9fa6":function(e,t,a){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(){this.message="String contains an invalid character"}function o(e){for(var t,a,o=String(e),i="",u=0,s=n;o.charAt(0|u)||(s="=",u%1);i+=s.charAt(63&t>>8-u%1*8)){if(a=o.charCodeAt(u+=.75),a>255)throw new r;t=t<<8|a}return i}r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},b50d:function(e,t,a){"use strict";var n=a("c532"),r=a("467f"),o=a("30b5"),i=a("c345"),u=a("3934"),s=a("2d83"),l="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||a("9fa6");e.exports=function(e){return new Promise(function(t,c){var f=e.data,d=e.headers;n.isFormData(f)&&delete d["Content-Type"];var v=new XMLHttpRequest,h="onreadystatechange",p=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in v||u(e.url)||(v=new window.XDomainRequest,h="onload",p=!0,v.onprogress=function(){},v.ontimeout=function(){}),e.auth){var x=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+l(x+":"+m)}if(v.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),v.timeout=e.timeout,v[h]=function(){if(v&&(4===v.readyState||p)&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))){var a="getAllResponseHeaders"in v?i(v.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?v.response:v.responseText,o={data:n,status:1223===v.status?204:v.status,statusText:1223===v.status?"No Content":v.statusText,headers:a,config:e,request:v};r(t,c,o),v=null}},v.onerror=function(){c(s("Network Error",e,null,v)),v=null},v.ontimeout=function(){c(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",v)),v=null},n.isStandardBrowserEnv()){var g=a("7aac"),y=(e.withCredentials||u(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in v&&n.forEach(d,function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete d[t]:v.setRequestHeader(t,e)}),e.withCredentials&&(v.withCredentials=!0),e.responseType)try{v.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"===typeof e.onDownloadProgress&&v.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){v&&(v.abort(),c(e),v=null)}),void 0===f&&(f=null),v.send(f)})}},bc3a:function(e,t,a){e.exports=a("cee4")},c345:function(e,t,a){"use strict";var n=a("c532"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,a,o,i={};return e?(n.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),a=n.trim(e.substr(o+1)),t){if(i[t]&&r.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([a]):i[t]?i[t]+", "+a:a}}),i):i}},c401:function(e,t,a){"use strict";var n=a("c532");e.exports=function(e,t,a){return n.forEach(a,function(a){e=a(e,t)}),e}},c532:function(e,t,a){"use strict";var n=a("1d2b"),r=a("044b"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function u(e){return"[object ArrayBuffer]"===o.call(e)}function s(e){return"undefined"!==typeof FormData&&e instanceof FormData}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function c(e){return"string"===typeof e}function f(e){return"number"===typeof e}function d(e){return"undefined"===typeof e}function v(e){return null!==e&&"object"===typeof e}function h(e){return"[object Date]"===o.call(e)}function p(e){return"[object File]"===o.call(e)}function x(e){return"[object Blob]"===o.call(e)}function m(e){return"[object Function]"===o.call(e)}function g(e){return v(e)&&m(e.pipe)}function y(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function b(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var a=0,n=e.length;a<n;a++)t.call(null,e[a],a,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}function C(){var e={};function t(t,a){"object"===typeof e[a]&&"object"===typeof t?e[a]=C(e[a],t):e[a]=t}for(var a=0,n=arguments.length;a<n;a++)S(arguments[a],t);return e}function A(e,t,a){return S(t,function(t,r){e[r]=a&&"function"===typeof t?n(t,a):t}),e}e.exports={isArray:i,isArrayBuffer:u,isBuffer:r,isFormData:s,isArrayBufferView:l,isString:c,isNumber:f,isObject:v,isUndefined:d,isDate:h,isFile:p,isBlob:x,isFunction:m,isStream:g,isURLSearchParams:y,isStandardBrowserEnv:w,forEach:S,merge:C,extend:A,trim:b}},c8af:function(e,t,a){"use strict";var n=a("c532");e.exports=function(e,t){n.forEach(e,function(a,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[n])})}},cdab:function(e,t,a){},cee4:function(e,t,a){"use strict";var n=a("c532"),r=a("1d2b"),o=a("0a06"),i=a("2444");function u(e){var t=new o(e),a=r(o.prototype.request,t);return n.extend(a,o.prototype,t),n.extend(a,t),a}var s=u(i);s.Axios=o,s.create=function(e){return u(n.merge(i,e))},s.Cancel=a("7a77"),s.CancelToken=a("8df4"),s.isCancel=a("2e67"),s.all=function(e){return Promise.all(e)},s.spread=a("0df6"),e.exports=s,e.exports.default=s},d925:function(e,t,a){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},df7c:function(e,t,a){(function(e){function a(e,t){for(var a=0,n=e.length-1;n>=0;n--){var r=e[n];"."===r?e.splice(n,1):".."===r?(e.splice(n,1),a++):a&&(e.splice(n,1),a--)}if(t)for(;a--;a)e.unshift("..");return e}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(e){return n.exec(e).slice(1)};function o(e,t){if(e.filter)return e.filter(t);for(var a=[],n=0;n<e.length;n++)t(e[n],n,e)&&a.push(e[n]);return a}t.resolve=function(){for(var t="",n=!1,r=arguments.length-1;r>=-1&&!n;r--){var i=r>=0?arguments[r]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,n="/"===i.charAt(0))}return t=a(o(t.split("/"),function(e){return!!e}),!n).join("/"),(n?"/":"")+t||"."},t.normalize=function(e){var n=t.isAbsolute(e),r="/"===i(e,-1);return e=a(o(e.split("/"),function(e){return!!e}),!n).join("/"),e||n||(e="."),e&&r&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,a){function n(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var a=e.length-1;a>=0;a--)if(""!==e[a])break;return t>a?[]:e.slice(t,a-t+1)}e=t.resolve(e).substr(1),a=t.resolve(a).substr(1);for(var r=n(e.split("/")),o=n(a.split("/")),i=Math.min(r.length,o.length),u=i,s=0;s<i;s++)if(r[s]!==o[s]){u=s;break}var l=[];for(s=u;s<r.length;s++)l.push("..");return l=l.concat(o.slice(u)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=r(e),a=t[0],n=t[1];return a||n?(n&&(n=n.substr(0,n.length-1)),a+n):"."},t.basename=function(e,t){var a=r(e)[2];return t&&a.substr(-1*t.length)===t&&(a=a.substr(0,a.length-t.length)),a},t.extname=function(e){return r(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,a){return e.substr(t,a)}:function(e,t,a){return t<0&&(t=e.length+t),e.substr(t,a)}}).call(this,a("4362"))},e683:function(e,t,a){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,a){"use strict";var n=a("c532");function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r}}]);
//# sourceMappingURL=chunk-307cc118.c08bfb29.js.map