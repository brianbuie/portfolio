webpackJsonp([0xd2a57dc1d883],{85:function(e,t){"use strict";function n(e,t,n){var o=r.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function o(e,t,n){return r.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=n,t.apiRunnerAsync=o;var r=[]},153:function(e,t,n){"use strict";t.components={"component---src-pages-404-js":n(256),"component---src-pages-index-js":n(257),"component---src-pages-projects-css-carousel-js":n(258)},t.json={"404.json":n(259),"index.json":n(261),"projects-css-carousel.json":n(262),"404-html.json":n(260)},t.layouts={}},154:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),s=o(c),l=n(3),f=o(l),p=n(121),d=o(p),h=n(69),g=o(h),m=n(85),v=n(299),R=o(v),y=function(e){var t=e.children;return s.default.createElement("div",null,t())},_=function(e){function t(n){r(this,t);var o=a(this,e.call(this)),u=n.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=d.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(t){d.default.getPage(e.state.location.pathname)&&t.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||(!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path)||(0,R.default)(this,e,t)))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);_.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=_,e.exports=t.default},69:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(276),a=o(r),u=(0,a.default)();e.exports=u},155:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(84),a=n(122),u=o(a),i={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var o=decodeURIComponent(n),a=(0,u.default)(o,t);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},156:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(115),a=o(r),u=n(85),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},260:function(e,t,n){n(18),e.exports=function(e){return n.e(0xa2868bfb69fc,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(270)})})}},259:function(e,t,n){n(18),e.exports=function(e){return n.e(0xe70826b53c04,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(271)})})}},261:function(e,t,n){n(18),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(272)})})}},262:function(e,t,n){n(18),e.exports=function(e){return n.e(0xf9f37c8e91f3,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(273)})})}},121:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(1),a=(o(r),n(155)),u=o(a),i=n(69),c=o(i),s=n(122),l=o(s),f=void 0,p={},d={},h={},g={},m={},v=[],R=[],y={},_="",P=[],w={},j=function(e){return e&&e.default||e},E=void 0,b=!0,x=[],N={},k={},C=5;E=n(157)({getNextQueuedResources:function(){return P.slice(-1)[0]},createResourceDownload:function(e){S(e,function(){P=P.filter(function(t){return t!==e}),E.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){E.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){E.onPostLoadPageResources(e)});var O=function(e,t){return w[e]>w[t]?1:w[e]<w[t]?-1:0},L=function(e,t){return y[e]>y[t]?1:y[e]<y[t]?-1:0},S=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[t])e.nextTick(function(){n(null,g[t])});else{var o=void 0;o="component---"===t.slice(0,12)?d.components[t]:"layout---"===t.slice(0,9)?d.layouts[t]:d.json[t],o(function(e,o){g[t]=o,x.push({resource:t,succeeded:!e}),k[t]||(k[t]=e),x=x.slice(-C),n(e,o)})}},A=function(t,n){m[t]?e.nextTick(function(){n(null,m[t])}):k[t]?e.nextTick(function(){n(k[t])}):S(t,function(e,o){if(e)n(e);else{var r=j(o());m[t]=r,n(e,r)}})},D=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=x.find(function(e){return e.succeeded});return!!t},T=function(e,t){console.log(t),N[e]||(N[e]=t),D()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,U={empty:function(){R=[],y={},w={},P=[],v=[],_=""},addPagesArray:function(e){v=e,_="/portfolio",f=(0,u.default)(e,_)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return R.pop()},enqueue:function(e){var t=(0,l.default)(e,_);if(!v.some(function(e){return e.path===t}))return!1;var n=1/M;M+=1,y[t]?y[t]+=1:y[t]=1,U.has(t)||R.unshift(t),R.sort(L);var o=f(t);return o.jsonName&&(w[o.jsonName]?w[o.jsonName]+=1+n:w[o.jsonName]=1+n,P.indexOf(o.jsonName)!==-1||g[o.jsonName]||P.unshift(o.jsonName)),o.componentChunkName&&(w[o.componentChunkName]?w[o.componentChunkName]+=1+n:w[o.componentChunkName]=1+n,P.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||P.unshift(o.componentChunkName)),P.sort(O),E.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:P,resourcesCount:w}},getPages:function(){return{pathArray:R,pathCount:y}},getPage:function(e){return f(e)},has:function(e){return R.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};b&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),b=!1;if(N[t])return T(t,'Previously detected load failure for "'+t+'"'),n();var o=f(t);if(!o)return T(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,h[t])return e.nextTick(function(){n(h[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[t]})}),h[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){h[t]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return A(o.componentChunkName,function(e,t){e&&T(o.path,"Loading the component for "+o.path+" failed"),r=t,i()}),A(o.jsonName,function(e,t){e&&T(o.path,"Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&A(o.layout,function(e,t){e&&T(o.path,"Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return R.slice(-1)[0]},length:function(){return R.length},indexOf:function(e){return R.length-R.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:U.getResourcesForPathname};t.default=U}).call(t,n(83))},274:function(e,t){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:null,jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:null,jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-projects-css-carousel-js",layout:null,jsonName:"projects-css-carousel.json",path:"/projects/css-carousel/"},{componentChunkName:"component---src-pages-404-js",layout:null,jsonName:"404-html.json",path:"/404.html"}]},157:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(85),u=n(1),i=o(u),c=n(53),s=o(c),l=n(84),f=n(268),p=n(249),d=o(p),h=n(117),g=n(156),m=o(g),v=n(69),R=o(v),y=n(274),_=o(y),P=n(275),w=o(P),j=n(154),E=o(j),b=n(153),x=o(b),N=n(121),k=o(N);n(175),window.___history=m.default,window.___emitter=R.default,k.default.addPagesArray(_.default),k.default.addProdRequires(x.default),window.asyncRequires=x.default,window.___loader=k.default,window.matchPath=l.matchPath;var C=w.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),O=function(e){var t=C[e];return null!=t&&(m.default.replace(t.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,t){O(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})},0)}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(158);var o=function(e){function t(e){e.page.path===k.default.getPage(o).path&&(R.default.off("onPostLoadPageResources",t),clearTimeout(u),window.___history.push(n))}var n=(0,h.createLocation)(e,null,null,m.default.location),o=n.pathname,r=C[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==n.pathname||a.search!==n.search||a.hash!==n.hash){var u=setTimeout(function(){R.default.off("onPostLoadPageResources",t),R.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(n)},1e3);k.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(n)):R.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var c=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:m.default})[0],g=function(e){var t=e.children;return i.default.createElement(l.Router,{history:m.default},t)},v=(0,l.withRouter)(E.default);k.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(p?p:g,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(v,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return k.default.getPage(o.location.pathname)?(0,u.createElement)(E.default,r({page:!0},o)):(0,u.createElement)(E.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0],c=(0,a.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,d.default)(function(){return c(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},275:function(e,t){e.exports=[]},158:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(69),a=o(r),u="/";u="/portfolio/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},122:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,t.length)===t?e.slice(t.length):e},e.exports=t.default},249:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},18:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},276:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},299:function(e,t){"use strict";function n(e,t){for(var n in e)if(!(n in t))return!0;for(var o in t)if(e[o]!==t[o])return!0;return!1}t.__esModule=!0,t.default=function(e,t,o){return n(e.props,t)||n(e.state,o)},e.exports=t.default},256:function(e,t,n){n(18),e.exports=function(e){return n.e(0x9427c64ab85d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(159)})})}},257:function(e,t,n){n(18),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(160)})})}},258:function(e,t,n){n(18),e.exports=function(e){return n.e(0xcbfd9e1b811d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(161)})})}}});
//# sourceMappingURL=app-6fe5c061e5f1e1c5bb08.js.map