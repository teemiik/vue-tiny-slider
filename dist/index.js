!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-tiny-slider",[],e):"object"==typeof exports?exports["vue-tiny-slider"]=e():t["vue-tiny-slider"]=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";n.r(e);var i=window,a=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||function(t){return setTimeout(t,16)},o=window,r=o.cancelAnimationFrame||o.mozCancelAnimationFrame||function(t){clearTimeout(t)};function u(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function s(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function l(t,e,n,i){return i&&t.setItem(e,n),n}function c(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var d=document.documentElement;function f(t){var e="";return t.fake&&(e=d.style.overflow,t.style.background="",t.style.overflow=d.style.overflow="hidden",d.appendChild(t)),e}function p(t,e){t.fake&&(t.remove(),d.style.overflow=e,d.offsetHeight)}function v(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function h(t){return("insertRule"in t?t.cssRules:t.rules).length}function m(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var y="classList"in document.createElement("_"),g=y?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},b=y?function(t,e){g(t,e)||t.classList.add(e)}:function(t,e){g(t,e)||(t.className+=" "+e)},x=y?function(t,e){g(t,e)&&t.classList.remove(e)}:function(t,e){g(t,e)&&(t.className=t.className.replace(e,""))};function w(t,e){return t.hasAttribute(e)}function C(t,e){return t.getAttribute(e)}function T(t){return void 0!==t.item}function A(t,e){if(t=T(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function B(t,e){t=T(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function S(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function E(t,e){"none"!==t.style.display&&(t.style.display="none")}function M(t,e){"none"===t.style.display&&(t.style.display="")}function N(t){return"none"!==window.getComputedStyle(t).display}function O(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach(function(i){"ms"===i&&"transform"!==t||e.push(i+n)}),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var o=t[a];if(void 0!==i.style[o])return o}return!1}function D(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function I(t,e){for(var n in e)t.addEventListener(n,e[n],!1)}var P=!1;try{var L=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,L)}catch(t){}var k=!!P&&{passive:!0};function H(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&k;t.removeEventListener(n,e[n],i)}}n.d(e,"tns",function(){return R}),Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var R=function(t){t=u({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:"auto",freezable:!0,onInit:!1,useLocalStorage:!0},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},o={},d=t.useLocalStorage;if(d){var y=navigator.userAgent,T=new Date;try{(o=n.localStorage)?(o.setItem(T,T),d=o.getItem(T)==T,o.removeItem(T)):d=!1,d||(o={})}catch(t){d=!1}d&&(o.tnsApp&&o.tnsApp!==y&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){o.removeItem(t)}),localStorage.tnsApp=y)}for(var P=o.tC?s(o.tC):l(o,"tC",function(){var t=document,e=c(),n=f(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var o,r="(10px * 10)",u=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],s=0;s<3;s++)if(o=u[s],i.style.width=o,100===i.offsetWidth){a=o.replace(r,"");break}}catch(t){}return e.fake?p(e,n):i.remove(),a}(),d),L=o.tPL?s(o.tPL):l(o,"tPL",function(){var t,e=document,n=c(),i=f(n),a=e.createElement("div"),o=e.createElement("div"),r="";a.className="tns-t-subp2",o.className="tns-t-ct";for(var u=0;u<70;u++)r+="<div></div>";return o.innerHTML=r,a.appendChild(o),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?p(n,i):a.remove(),t}(),d),k=o.tMQ?s(o.tMQ):l(o,"tMQ",function(){var t,e=document,n=c(),i=f(n),a=e.createElement("div"),o=e.createElement("style"),r="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",a.className="tns-mq-test",n.appendChild(o),n.appendChild(a),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(e.createTextNode(r)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?p(n,i):a.remove(),"absolute"===t}(),d),W=o.tTf?s(o.tTf):l(o,"tTf",O("transform"),d),z=o.t3D?s(o.t3D):l(o,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=c(),a=f(i),o=n.createElement("p"),r=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return r+="transform",i.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(r),i.fake?p(i,a):o.remove(),void 0!==e&&e.length>0&&"none"!==e}(W),d),j=o.tTDu?s(o.tTDu):l(o,"tTDu",O("transitionDuration"),d),F=o.tTDe?s(o.tTDe):l(o,"tTDe",O("transitionDelay"),d),q=o.tADu?s(o.tADu):l(o,"tADu",O("animationDuration"),d),_=o.tADe?s(o.tADe):l(o,"tADe",O("animationDelay"),d),G=o.tTE?s(o.tTE):l(o,"tTE",D(j,"Transition"),d),$=o.tAE?s(o.tAE):l(o,"tAE",D(q,"Animation"),d),V=n.console&&"function"==typeof n.console.warn,U=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={},Q=U.length;Q--;){var X=U[Q];if("string"==typeof t[X]){var Y=t[X],J=e.querySelector(Y);if(K[X]=Y,!J||!J.nodeName)return void(V&&console.warn("Can't find",t[X]));t[X]=J}}if(!(t.container.children.length<1)){var Z=t.responsive,tt=t.nested,et="carousel"===t.mode;if(Z){0 in Z&&(t=u(t,Z[0]),delete Z[0]);var nt={};for(var it in Z){var at=Z[it];at="number"==typeof at?{items:at}:at,nt[it]=at}Z=nt,nt=null}if(et&&"outer"!==tt||function t(e){for(var n in e)et||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"outer"===tt&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(t),!et){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var ot=t.animateIn,rt=t.animateOut,ut=t.animateDelay,st=t.animateNormal}var lt,ct="horizontal"===t.axis,dt=e.createElement("div"),ft=e.createElement("div"),pt=t.container,vt=pt.parentNode,ht=pt.outerHTML,mt=pt.children,yt=mt.length,gt=On(),bt=!1;Z&&Un();var xt,wt,Ct,Tt,At,Bt,St,Et=t.autoWidth,Mt=Pn("fixedWidth"),Nt=Pn("edgePadding"),Ot=Pn("gutter"),Dt=Dn(),It=Et?1:Math.floor(Pn("items")),Pt=Pn("slideBy"),Lt=t.viewportMax||t.fixedWidthViewportWidth,kt=Pn("arrowKeys"),Ht=Pn("speed"),Rt=t.rewind,Wt=!Rt&&t.loop,zt=Pn("autoHeight"),jt=Pn("controls"),Ft=Pn("controlsText"),qt=Pn("nav"),_t=Pn("touch"),Gt=Pn("mouseDrag"),$t=Pn("autoplay"),Vt=Pn("autoplayTimeout"),Ut=Pn("autoplayText"),Kt=Pn("autoplayHoverPause"),Qt=Pn("autoplayResetOnVisibility"),Xt=(St=document.createElement("style"),Bt&&St.setAttribute("media",Bt),document.querySelector("head").appendChild(St),St.sheet?St.sheet:St.styleSheet),Yt=t.lazyload,Jt=t.lazyloadSelector,Zt=[],te=Wt?(Tt=function(){if(Et||Mt&&!Lt)return yt-1;var e=Mt?"fixedWidth":"items",n=[];if((Mt||t[e]<yt)&&n.push(t[e]),Z)for(var i in Z){var a=Z[i][e];a&&(Mt||a<yt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Mt?Lt/Math.min.apply(null,n):Math.max.apply(null,n))}(),At=et?Math.ceil((5*Tt-yt)/2):4*Tt-yt,At=Math.max(Tt,At),In("edgePadding")?At+1:At):0,ee=et?yt+2*te:yt+te,ne=!(!Mt&&!Et||Wt),ie=Mt?yi():null,ae=!et||!Wt,oe=ct?"left":"top",re="",ue="",se=Mt?function(){return Math.ceil(-ie/(Mt+Ot))}:Et?function(){for(var t=ee,e=t-1;t--;)xt[t]>-ie&&(e=t);return e}:function(){return Wt||et?Math.max(0,ee-Math.ceil(It)):ee-1},le=Mn(Pn("startIndex")),ce=le,de=(En(),0),fe=Et?null:se(),pe=t.preventActionWhenRunning,ve=t.swipeAngle,he=!ve||"?",me=!1,ye=t.onInit,ge=new function(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach(function(n){n(e,t)})}}},be=" tns-slider tns-"+t.mode,xe=pt.id||(Ct=window.tnsId,window.tnsId=Ct?Ct+1:1,"tns"+window.tnsId),we=Pn("disable"),Ce=!1,Te=t.freezable,Ae=!(!Te||Et)&&Vn(),Be=!1,Se={click:Si,keydown:function(t){switch((t=Li(t)).keyCode){case i.LEFT:case i.UP:case i.PAGEUP:Ue.disabled||Si(t,-1);break;case i.RIGHT:case i.DOWN:case i.PAGEDOWN:Ke.disabled||Si(t,1);break;case i.HOME:Bi("first",t);break;case i.END:Bi("last",t)}}},Ee={click:function(t){if(me){if(pe)return;Ai()}var e,n=(t=Li(t)).target||t.srcElement;for(;n!==Je&&!w(n,"data-nav");)n=n.parentNode;w(n,"data-nav")&&(Bi(e=nn=[].indexOf.call(Ye,n),t),an===e&&(cn&&Di(),nn=-1))},keydown:function(n){var a=e.activeElement;if(!w(a,"data-nav"))return;var o=(n=Li(n)).keyCode,r=[].indexOf.call(Ye,a),u=tn.length,s=tn.indexOf(r);t.navContainer&&(u=yt,s=r);function l(e){return t.navContainer?e:tn[e]}switch(o){case i.LEFT:case i.PAGEUP:s>0&&Pi(Ye[l(s-1)]);break;case i.UP:case i.HOME:s>0&&Pi(Ye[l(0)]);break;case i.RIGHT:case i.PAGEDOWN:s<u-1&&Pi(Ye[l(s+1)]);break;case i.DOWN:case i.END:s<u-1&&Pi(Ye[l(u-1)]);break;case i.ENTER:case i.SPACE:nn=r,Bi(r,n)}}},Me={mouseover:function(){cn&&(Mi(),dn=!0)},mouseout:function(){dn&&(Ei(),dn=!1)}},Ne={visibilitychange:function(){e.hidden?cn&&(Mi(),pn=!0):pn&&(Ei(),pn=!1)}},Oe={keydown:function(t){switch((t=Li(t)).keyCode){case i.LEFT:Si(t,-1);break;case i.RIGHT:Si(t,1)}}},De={touchstart:zi,touchmove:ji,touchend:Fi,touchcancel:Fi},Ie={mousedown:zi,mousemove:ji,mouseup:Fi,mouseleave:Fi},Pe=In("controls"),Le=In("nav"),ke=!!Et||t.navAsThumbnails,He=In("autoplay"),Re=In("touch"),We=In("mouseDrag"),ze="tns-slide-active",je="tns-complete",Fe={load:function(t){Zn(ki(t))},error:function(t){ti(ki(t))}},qe="force"===t.preventScrollOnTouch;if(Pe)var _e,Ge,$e=t.controlsContainer,Ve=t.controlsContainer?t.controlsContainer.outerHTML:"",Ue=t.prevButton,Ke=t.nextButton,Qe=t.prevButton?t.prevButton.outerHTML:"",Xe=t.nextButton?t.nextButton.outerHTML:"";if(Le)var Ye,Je=t.navContainer,Ze=t.navContainer?t.navContainer.outerHTML:"",tn=[],en=tn,nn=-1,an=Nn(),on=an,rn="tns-nav-active",un="Carousel Page ",sn=" (Current Slide)";if(He)var ln,cn,dn,fn,pn,vn="forward"===t.autoplayDirection?1:-1,hn=t.autoplayButton,mn=t.autoplayButton?t.autoplayButton.outerHTML:"",yn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Re||We)var gn,bn,xn={},wn={},Cn=!1,Tn=ct?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Et||Sn(we||Ae),W&&(oe=W,re="translate",z?(re+=ct?"3d(":"3d(0px, ",ue=ct?", 0px, 0px)":", 0px)"):(re+=ct?"X(":"Y(",ue=")")),function(){Z&&Un();!function(){In("gutter");dt.className="tns-outer",ft.className="tns-inner",dt.id=xe+"-ow",ft.id=xe+"-iw",zt&&(ft.className+=" tns-ah");""===pt.id&&(pt.id=xe);be+=L||Et?" tns-subpixel":" tns-no-subpixel",be+=P?" tns-calc":" tns-no-calc",Et&&(be+=" tns-autowidth");if(be+=" tns-"+t.axis,pt.className+=be,et){var n=e.createElement("div");n.className="tns-ovh",dt.appendChild(n),n.appendChild(ft)}else dt.appendChild(ft);vt.insertBefore(dt,pt),ft.appendChild(pt)}();for(var i=0;i<yt;i++){var a=mt[i];a.id||(a.id=xe+"-item"+i),b(a,"tns-item"),!et&&st&&b(a,st),A(a,{"aria-hidden":"true",tabindex:"-1"})}if(te){for(var o=e.createDocumentFragment(),r=e.createDocumentFragment(),u=te;u--;){var s=u%yt,l=mt[s].cloneNode(!0);if(B(l,"id"),r.insertBefore(l,r.firstChild),et){var c=mt[yt-1-s].cloneNode(!0);B(c,"id"),o.appendChild(c)}}pt.insertBefore(o,pt.firstChild),pt.appendChild(r),mt=pt.children}(function(){for(var e=le,i=le+Math.min(yt,It);e<i;e++){var a=mt[e];A(a,{"aria-hidden":"false"}),B(a,["tabindex"]),b(a,ze),et||(a.style.left=100*(e-le)/It+"%",b(a,ot),x(a,st))}ct&&(L||Et?(v(Xt,"#"+xe+" > .tns-item","font-size:"+n.getComputedStyle(mt[0]).fontSize+";",h(Xt)),v(Xt,"#"+xe,"font-size:0;",h(Xt))):et&&m(mt,function(t,e){t.style.marginLeft=function(t){return P?P+"("+100*t+"% / "+ee+")":100*t/ee+"%"}(e)}));if(k){var o=Ln(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight);v(Xt,"#"+xe+"-iw",o,h(Xt)),et&&(o=ct&&!Et?"width:"+kn(t.fixedWidth,t.gutter,t.items)+";":"",j&&(o+=zn(Ht)),v(Xt,"#"+xe,o,h(Xt))),o=ct&&!Et?Hn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(o+=Rn(t.gutter)),et||(j&&(o+=zn(Ht)),q&&(o+=jn(Ht))),o&&v(Xt,"#"+xe+" > .tns-item",o,h(Xt))}else{ft.style.cssText=Ln(Nt,Ot,Mt,zt),et&&ct&&!Et&&(pt.style.width=kn(Mt,Ot,It));var o=ct&&!Et?Hn(Mt,Ot,It):"";Ot&&(o+=Rn(Ot)),o&&v(Xt,"#"+xe+" > .tns-item",o,h(Xt))}if(Z&&k)for(var r in Z){r=parseInt(r);var u=Z[r],o="",s="",l="",c="",d=Et?null:Pn("items",r),f=Pn("fixedWidth",r),p=Pn("speed",r),y=Pn("edgePadding",r),g=Pn("autoHeight",r),w=Pn("gutter",r);("edgePadding"in u||"gutter"in u)&&(s="#"+xe+"-iw{"+Ln(y,w,f,p,g)+"}"),et&&ct&&!Et&&("fixedWidth"in u||"items"in u||Mt&&"gutter"in u)&&(l="width:"+kn(f,w,d)+";"),j&&"speed"in u&&(l+=zn(p)),l&&(l="#"+xe+"{"+l+"}"),("fixedWidth"in u||Mt&&"gutter"in u||!et&&"items"in u)&&(c+=Hn(f,w,d)),"gutter"in u&&(c+=Rn(w)),!et&&"speed"in u&&(j&&(c+=zn(p)),q&&(c+=jn(p))),c&&(c="#"+xe+" > .tns-item{"+c+"}"),(o=s+l+c)&&Xt.insertRule("@media (min-width: "+r/16+"em) {"+o+"}",Xt.cssRules.length)}})(),Fn()}();var An=Wt?et?function(){var t=de,e=fe;t+=Pt,e-=Pt,Nt?(t+=1,e-=1):Mt&&Dt%(Mt+Ot)&&(e-=1),te&&(le>e?le-=yt:le<t&&(le+=yt))}:function(){if(le>fe)for(;le>=de+yt;)le-=yt;else if(le<de)for(;le<=fe-yt;)le+=yt}:function(){le=Math.max(de,Math.min(fe,le))},Bn=et?function(){var t,e,n,i,a,o,r,u,s,l,c;hi(pt,""),j||!Ht?(xi(),Ht&&N(pt)||Ai()):(t=pt,e=oe,n=re,i=ue,a=gi(),o=Ht,r=Ai,u=Math.min(o,10),s=a.indexOf("%")>=0?"%":"px",a=a.replace(s,""),l=Number(t.style[e].replace(n,"").replace(i,"").replace(s,"")),c=(a-l)/o*u,setTimeout(function a(){o-=u,l+=c,t.style[e]=n+l+s+i,o>0?setTimeout(a,u):r()},u)),ct||qi()}:function(){Zt=[];var t={};t[G]=t[$]=Ai,H(mt[ce],t),I(mt[le],t),wi(ce,ot,rt,!0),wi(le,st,ot),G&&$&&Ht&&N(pt)||Ai()};return{version:"2.8.8",getInfo:Gi,events:ge,goTo:Bi,play:function(){$t&&!cn&&(Oi(),fn=!1)},pause:function(){cn&&(Di(),fn=!0)},isOn:bt,updateSliderHeight:si,refresh:Fn,destroy:function(){if(Xt.disabled=!0,Xt.ownerNode&&Xt.ownerNode.remove(),H(n,{resize:Gn}),kt&&H(e,Oe),$e&&H($e,Se),Je&&H(Je,Ee),H(pt,Me),H(pt,Ne),hn&&H(hn,{click:Ii}),$t&&clearInterval(ln),et&&G){var i={};i[G]=Ai,H(pt,i)}_t&&H(pt,De),Gt&&H(pt,Ie);var a=[ht,Ve,Qe,Xe,Ze,mn];for(var o in U.forEach(function(e,n){var i="container"===e?dt:t[e];if("object"==typeof i){var o=!!i.previousElementSibling&&i.previousElementSibling,r=i.parentNode;i.outerHTML=a[n],t[e]=o?o.nextElementSibling:r.firstElementChild}}),U=ot=rt=ut=st=ct=dt=ft=pt=vt=ht=mt=yt=lt=gt=Et=Mt=Nt=Ot=Dt=It=Pt=Lt=kt=Ht=Rt=Wt=zt=Xt=Yt=xt=Zt=te=ee=ne=ie=ae=oe=re=ue=se=le=ce=de=fe=ve=he=me=ye=ge=be=xe=we=Ce=Te=Ae=Be=Se=Ee=Me=Ne=Oe=De=Ie=Pe=Le=ke=He=Re=We=ze=je=Fe=wt=jt=Ft=$e=Ve=Ue=Ke=_e=Ge=qt=Je=Ze=Ye=tn=en=nn=an=on=rn=un=sn=$t=Vt=vn=Ut=Kt=hn=mn=Qt=yn=ln=cn=dn=fn=pn=xn=wn=gn=Cn=bn=Tn=_t=Gt=null,this)"rebuild"!==o&&(this[o]=null);bt=!1},rebuild:function(){return R(u(t,K))}}}function Sn(t){t&&(jt=qt=_t=Gt=kt=$t=Kt=Qt=!1)}function En(){for(var t=et?le-te:le;t<0;)t+=yt;return t%yt+1}function Mn(t){return t=t?Math.max(0,Math.min(Wt?yt-1:yt-It,t)):0,et?t+te:t}function Nn(t){for(null==t&&(t=le),et&&(t-=te);t<0;)t+=yt;return Math.floor(t%yt)}function On(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Dn(){return function t(n){var i,a=e.createElement("div");return n.appendChild(a),i=a.offsetWidth,a.remove(),i||t(n.parentNode)}(vt)-(2*Nt-Ot)}function In(e){if(t[e])return!0;if(Z)for(var n in Z)if(Z[n][e])return!0;return!1}function Pn(e,n){if(null==n&&(n=gt),"items"===e&&Mt)return Math.floor(Dt/(Mt+Ot))||1;var i=t[e];if(Z)for(var a in Z)n>=parseInt(a)&&e in Z[a]&&(i=Z[a][e]);return"slideBy"===e&&"page"===i&&(i=Pn("items")),et||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Ln(t,e,n,i,a){var o="";if(void 0!==t){var r=t;e&&(r-=e),o=ct?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var u="-"+e+"px";o="margin: 0 "+(ct?u+" 0 0":"0 "+u+" 0")+";"}return a&&j&&i&&(o+=zn(i)),o}function kn(t,e,n){return t?(t+e)*ee+"px":P?P+"("+100*ee+"% / "+n+")":100*ee/n+"%"}function Hn(t,e,n){var i;if(t)i=t+e+"px";else{et||(n=Math.floor(n));var a=et?ee:n;i=P?P+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==tt?i+";":i+" !important;"}function Rn(t){var e="";!1!==t&&(e=(ct?"padding-":"margin-")+(ct?"right":"bottom")+": "+t+"px;");return e}function Wn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function zn(t){return Wn(j,18)+"transition-duration:"+t/1e3+"s;"}function jn(t){return Wn(q,17)+"animation-duration:"+t/1e3+"s;"}function Fn(){if(In("autoHeight")||Et||!ct){var t=pt.querySelectorAll("img");function e(){if(Et){var t=Wt?le:yt-1;!function n(){mt[t-1].getBoundingClientRect().right.toFixed(2)===mt[t].getBoundingClientRect().left.toFixed(2)?e():setTimeout(function(){n()},16)}()}else e();function e(){ct&&!Et||(li(),Et?(ie=yi(),Te&&(Ae=Vn()),fe=se(),Sn(we||Ae)):qi()),et&&bi(),qn(),_n()}}m(t,function(t){var e=t.src;e.indexOf("data:image")<0?(I(t,Fe),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e,b(t,"loading"),ni(t)):Yt||Zn(t)}),a(function(){oi(S(t),function(){wt=!0})}),!Et&&ct&&(t=ii(le,It)),Yt?e():a(function(){oi(S(t),e)})}else et&&bi(),qn(),_n()}function qn(){if(He){var e=$t?"stop":"start";hn?A(hn,{"data-action":e}):t.autoplayButtonOutput&&(dt.insertAdjacentHTML("top"!==t.autoplayPosition?"beforeend":"afterbegin",'<button data-action="'+e+'" type="button">'+yn[0]+e+yn[1]+Ut[0]+"</button>"),hn=dt.querySelector("[data-action]")),hn&&I(hn,{click:Ii}),$t&&(Oi(),Kt&&I(pt,Me),Qt&&I(pt,Ne))}if(Le){var n=et?te:0;if(Je)A(Je,{"aria-label":"Carousel Pagination"}),m(Ye=Je.children,function(t,e){A(t,{"data-nav":e,tabindex:"-1","aria-controls":mt[n+e].id,"aria-label":un+(e+1)})});else{for(var i="",a=ke?"":'style="display:none"',o=0;o<yt;o++)i+='<button data-nav="'+o+'" tabindex="-1" aria-controls="'+mt[n+o].id+'" '+a+' type="button" aria-label="'+un+(o+1)+'"></button>';i='<div class="tns-nav" aria-label="Carousel Pagination">'+i+"</div>",dt.insertAdjacentHTML("top"!==t.navPosition?"beforeend":"afterbegin",i),Je=dt.querySelector(".tns-nav"),Ye=Je.children}if(_i(),j){var r=j.substring(0,j.length-18).toLowerCase(),u="transition: all "+Ht/1e3+"s";r&&(u="-"+r+"-"+u),v(Xt,"[aria-controls^="+xe+"-item]",u,h(Xt))}A(Ye[an],{tabindex:"0","aria-label":un+(an+1)+sn}),b(Ye[an],rn),I(Je,Ee)}Pe&&($e||Ue&&Ke||(dt.insertAdjacentHTML("top"!==t.controlsPosition?"beforeend":"afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+xe+'" type="button">'+Ft[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+xe+'" type="button">'+Ft[1]+"</button></div>"),$e=dt.querySelector(".tns-controls")),Ue&&Ke||(Ue=$e.children[0],Ke=$e.children[1]),t.controlsContainer&&A($e,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&A([Ue,Ke],{"aria-controls":xe,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(A(Ue,{"data-controls":"prev"}),A(Ke,{"data-controls":"next"})),_e=di(Ue),Ge=di(Ke),vi(),$e?I($e,Se):(I(Ue,Se),I(Ke,Se))),Kn()}function _n(){if(et&&G){var t={};t[G]=Ai,I(pt,t)}_t&&I(pt,De),Gt&&I(pt,Ie),kt&&I(e,Oe),"inner"===tt?ge.on("outerResized",function(){$n(),ge.emit("innerLoaded",Gi())}):(Z||Mt||Et||zt||!ct)&&I(n,{resize:Gn}),"outer"===tt?ge.on("innerLoaded",ai):zt&&!we&&ai(),Jn(),we?Yn():Ae&&Xn(),ge.on("indexChanged",ri),"inner"===tt&&ge.emit("innerLoaded",Gi()),"function"==typeof ye&&ye(Gi()),bt=!0}function Gn(t){a(function(){$n(Li(t))})}function $n(t){if(bt){"outer"===tt&&ge.emit("outerResized",Gi(t)),gt=On();var n,i=lt,a=!1;Z&&(Un(),(n=i!==lt)&&ge.emit("newBreakpointStart",Gi(t)));var o,r,u=It,s=we,l=Ae,c=kt,d=jt,f=qt,p=_t,y=Gt,g=$t,w=Kt,C=Qt,T=le;if(n){var A=Mt,B=zt,S=Ft,N=Ut;if(!k)var O=Ot,D=Nt}if(kt=Pn("arrowKeys"),jt=Pn("controls"),qt=Pn("nav"),_t=Pn("touch"),Gt=Pn("mouseDrag"),$t=Pn("autoplay"),Kt=Pn("autoplayHoverPause"),Qt=Pn("autoplayResetOnVisibility"),n&&(we=Pn("disable"),Mt=Pn("fixedWidth"),Ht=Pn("speed"),zt=Pn("autoHeight"),Ft=Pn("controlsText"),Ut=Pn("autoplayText"),Vt=Pn("autoplayTimeout"),k||(Nt=Pn("edgePadding"),Ot=Pn("gutter"))),Sn(we),Dt=Dn(),ct&&!Et||we||(li(),ct||(qi(),a=!0)),(Mt||Et)&&(ie=yi(),fe=se()),(n||Mt)&&(It=Pn("items"),Pt=Pn("slideBy"),(r=It!==u)&&(Mt||Et||(fe=se()),An())),n&&we!==s&&(we?Yn():function(){if(!Ce)return;if(Xt.disabled=!1,pt.className+=be,bi(),Wt)for(var t=te;t--;)et&&M(mt[t]),M(mt[ee-t-1]);if(!et)for(var e=le,n=le+yt;e<n;e++){var i=mt[e],a=e<le+It?ot:st;i.style.left=100*(e-le)/It+"%",b(i,a)}Qn(),Ce=!1}()),Te&&(n||Mt||Et)&&(Ae=Vn())!==l&&(Ae?(xi(gi(Mn(0))),Xn()):(!function(){if(!Be)return;Nt&&k&&(ft.style.margin="");if(te)for(var t="tns-transparent",e=te;e--;)et&&x(mt[e],t),x(mt[ee-e-1],t);Qn(),Be=!1}(),a=!0)),Sn(we||Ae),$t||(Kt=Qt=!1),kt!==c&&(kt?I(e,Oe):H(e,Oe)),jt!==d&&(jt?$e?M($e):(Ue&&M(Ue),Ke&&M(Ke)):$e?E($e):(Ue&&E(Ue),Ke&&E(Ke))),qt!==f&&(qt?(M(Je),_i()):E(Je)),_t!==p&&(_t?I(pt,De):H(pt,De)),Gt!==y&&(Gt?I(pt,Ie):H(pt,Ie)),$t!==g&&($t?(hn&&M(hn),cn||fn||Oi()):(hn&&E(hn),cn&&Di())),Kt!==w&&(Kt?I(pt,Me):H(pt,Me)),Qt!==C&&(Qt?I(e,Ne):H(e,Ne)),n&&(Mt!==A&&(a=!0),zt!==B&&(zt||(ft.style.height="")),jt&&Ft!==S&&(Ue.innerHTML=Ft[0],Ke.innerHTML=Ft[1]),hn&&Ut!==N)){var P=$t?1:0,L=hn.innerHTML,R=L.length-N[P].length;L.substring(R)===N[P]&&(hn.innerHTML=L.substring(0,R)+Ut[P])}if((o=le!==T)&&(ge.emit("indexChanged",Gi()),a=!0),r&&(o||ri(),et||function(){for(var t=le+Math.min(yt,It),e=ee;e--;){var n=mt[e];e>=le&&e<t?(b(n,"tns-moving"),n.style.left=100*(e-le)/It+"%",b(n,ot),x(n,st)):n.style.left&&(n.style.left="",b(n,st),x(n,ot)),x(n,rt)}setTimeout(function(){m(mt,function(t){x(t,"tns-moving")})},300)}()),!we&&!Ae){if(n&&!k&&(Nt===D&&Ot===O||(ft.style.cssText=Ln(Nt,Ot,Mt,Ht,zt)),ct)){et&&(pt.style.width=kn(Mt,Ot,It));var W=Hn(Mt,Ot,It)+Rn(Ot);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Xt,h(Xt)-1),v(Xt,"#"+xe+" > .tns-item",W,h(Xt))}zt&&ai(),a&&(bi(),ce=le)}n&&ge.emit("newBreakpointEnd",Gi(t))}}function Vn(){return Mt||Et?Mt?(Mt+Ot)*yt<=Dt+2*Nt:(Wt?xt[yt]:mi())<=Dt+2*Nt:yt<=It}function Un(){for(var t in lt=0,Z)t=parseInt(t),gt>=t&&(lt=t)}function Kn(){!$t&&hn&&E(hn),!qt&&Je&&E(Je),jt||($e?E($e):(Ue&&E(Ue),Ke&&E(Ke)))}function Qn(){$t&&hn&&M(hn),qt&&Je&&M(Je),jt&&($e?M($e):(Ue&&M(Ue),Ke&&M(Ke)))}function Xn(){if(!Be){if(Nt&&(ft.style.margin="0px"),te)for(var t="tns-transparent",e=te;e--;)et&&b(mt[e],t),b(mt[ee-e-1],t);Kn(),Be=!0}}function Yn(){if(!Ce){if(Xt.disabled=!0,pt.className=pt.className.replace(be.substring(1),""),B(pt,["style"]),Wt)for(var t=te;t--;)et&&E(mt[t]),E(mt[ee-t-1]);if(ct&&et||B(ft,["style"]),!et)for(var e=le,n=le+yt;e<n;e++){var i=mt[e];B(i,["style"]),x(i,ot),x(i,st)}Kn(),Ce=!0}}function Jn(){if(Yt&&!we){var t=le;if(Et)for(var e=le+1,n=e,i=xt[le]+Dt+Nt-Ot;xt[e]<i;)n=++e;else n=le+It;for(Nt&&(t-=1,Et||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,ee));t<n;t++)m(mt[t].querySelectorAll(Jt),function(t){if(!g(t,je)){var e={};e[G]=function(t){t.stopPropagation()},I(t,e),I(t,Fe);var n=C(t,"data-srcset");n&&(t.srcset=n),t.src=C(t,"data-src"),b(t,"loading"),ni(t)}})}}function Zn(t){b(t,"loaded"),ei(t)}function ti(t){b(t,"failed"),ei(t)}function ei(t){b(t,"tns-complete"),x(t,"loading"),H(t,Fe)}function ni(t){t.complete&&(0!==t.naturalWidth?Zn(t):ti(t))}function ii(t,e){for(var n=[],i=t,a=Math.min(t+e,ee);i<a;i++)m(mt[i].querySelectorAll("img"),function(t){n.push(t)});return n}function ai(){var t=zt?ii(le,It):ii(te,yt);a(function(){oi(t,si)})}function oi(t,e){return wt?e():(t.forEach(function(e,n){g(e,je)&&t.splice(n,1)}),t.length?void a(function(){oi(t,e)}):e())}function ri(){Jn(),function(){for(var t=le+Math.min(yt,It),e=ee;e--;){var n=mt[e];e>=le&&e<t?w(n,"tabindex")&&(A(n,{"aria-hidden":"false"}),B(n,["tabindex"]),b(n,ze)):(w(n,"tabindex")||A(n,{"aria-hidden":"true",tabindex:"-1"}),g(n,ze)&&x(n,ze))}}(),vi(),_i(),function(){if(qt&&(an=nn>=0?nn:Nn(),nn=-1,an!==on)){var t=Ye[on],e=Ye[an];A(t,{tabindex:"-1","aria-label":un+(on+1)}),A(e,{tabindex:"0","aria-label":un+(an+1)+sn}),x(t,rn),b(e,rn),on=an}}()}function ui(t,e){for(var n=[],i=t,a=Math.min(t+e,ee);i<a;i++)n.push(mt[i].offsetHeight);return Math.max.apply(null,n)}function si(){var t=zt?ui(le,It):ui(te,yt);ft.style.height!==t&&(ft.style.height=t+"px")}function li(){xt=[0];for(var t,e=ct?"left":"top",n=mt[0].getBoundingClientRect()[e],i=1;i<ee;i++)t=mt[i].getBoundingClientRect()[e],xt.push(t-n)}function ci(t){return t.nodeName.toLowerCase()}function di(t){return"button"===ci(t)}function fi(t){return"true"===t.getAttribute("aria-disabled")}function pi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function vi(){if(jt&&!Rt&&!Wt){var t=_e?Ue.disabled:fi(Ue),e=Ge?Ke.disabled:fi(Ke),n=le<=de,i=!Rt&&le>=fe;n&&!t&&pi(_e,Ue,!0),!n&&t&&pi(_e,Ue,!1),i&&!e&&pi(Ge,Ke,!0),!i&&e&&pi(Ge,Ke,!1)}}function hi(t,e){j&&(t.style[j]=e)}function mi(){return Mt?(Mt+Ot)*ee:xt[ee-1]+mt[ee-1].getBoundingClientRect().width}function yi(){var t=Dt-(mi()-Ot);return Nt&&(t+=Nt-Ot),t>0&&(t=0),t}function gi(t){var e;(null==t&&(t=le),ct&&!Et)?e=Mt?-(Mt+Ot)*t:100*-t/(W?ee:It):e=-xt[t];return ne&&(e=Math.max(e,ie)),e+=!ct||Et||Mt?"px":"%"}function bi(t){hi(pt,"0s"),xi(t)}function xi(t){null==t&&(t=gi()),pt.style[oe]=re+t+ue}function wi(t,e,n,i){var a=t+It;Wt||(a=Math.min(a,ee));for(var o=t;o<a;o++){var r=mt[o];i||(r.style.left=100*(o-le)/It+"%"),ut&&F&&(r.style[F]=r.style[_]=ut*(o-t)/1e3+"s"),x(r,e),b(r,n),i&&Zt.push(r)}}function Ci(t,e){ae&&An(),(le!==ce||e)&&(ge.emit("indexChanged",Gi()),ge.emit("transitionStart",Gi()),zt&&ai(),cn&&t&&["click","keydown"].indexOf(t.type)>=0&&Di(),me=!0,Bn())}function Ti(t){return t.toLowerCase().replace(/-/g,"")}function Ai(t){if(et||me){if(ge.emit("transitionEnd",Gi(t)),!et&&Zt.length>0)for(var e=0;e<Zt.length;e++){var n=Zt[e];n.style.left="",_&&F&&(n.style[_]="",n.style[F]=""),x(n,rt),b(n,st)}if(!t||!et&&t.target.parentNode===pt||t.target===pt&&Ti(t.propertyName)===Ti(oe)){if(!ae){var i=le;An(),le!==i&&(ge.emit("indexChanged",Gi()),bi())}"inner"===tt&&ge.emit("innerLoaded",Gi()),me=!1,ce=le}}}function Bi(t,e){if(!Ae)if("prev"===t)Si(e,-1);else if("next"===t)Si(e,1);else{if(me){if(pe)return;Ai()}var n=Nn(),i=0;if("first"===t?i=-n:"last"===t?i=et?yt-It-n:yt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(yt-1,t))),i=t-n)),!et&&i&&Math.abs(i)<It){var a=i>0?1:-1;i+=le+i-yt>=de?yt*a:2*yt*a*-1}le+=i,et&&Wt&&(le<de&&(le+=yt),le>fe&&(le-=yt)),Nn(le)!==Nn(ce)&&Ci(e)}}function Si(t,e){if(me){if(pe)return;Ai()}var n;if(!e){for(var i=(t=Li(t)).target||t.srcElement;i!==$e&&[Ue,Ke].indexOf(i)<0;)i=i.parentNode;var a=[Ue,Ke].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Rt){if(le===de&&-1===e)return void Bi("last",t);if(le===fe&&1===e)return void Bi("first",t)}e&&(le+=Pt*e,Et&&(le=Math.floor(le)),Ci(n||t&&"keydown"===t.type?t:null))}function Ei(){ln=setInterval(function(){Si(null,vn)},Vt),cn=!0}function Mi(){clearInterval(ln),cn=!1}function Ni(t,e){A(hn,{"data-action":t}),hn.innerHTML=yn[0]+t+yn[1]+e}function Oi(){Ei(),hn&&Ni("stop",Ut[1])}function Di(){Mi(),hn&&Ni("start",Ut[0])}function Ii(){cn?(Di(),fn=!0):(Oi(),fn=!1)}function Pi(t){t.focus()}function Li(t){return Hi(t=t||n.event)?t.changedTouches[0]:t}function ki(t){return t.target||n.event.srcElement}function Hi(t){return t.type.indexOf("touch")>=0}function Ri(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Wi(){return o=wn.y-xn.y,r=wn.x-xn.x,e=Math.atan2(o,r)*(180/Math.PI),n=ve,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,o,r}function zi(t){if(me){if(pe)return;Ai()}$t&&cn&&Mi(),Cn=!0,bn&&(r(bn),bn=null);var e=Li(t);ge.emit(Hi(t)?"touchStart":"dragStart",Gi(t)),!Hi(t)&&["img","a"].indexOf(ci(ki(t)))>=0&&Ri(t),wn.x=xn.x=parseInt(e.clientX),wn.y=xn.y=parseInt(e.clientY),et&&(gn=parseFloat(pt.style[oe].replace(re,"").replace(ue,"")),hi(pt,"0s"))}function ji(t){if(Cn){var e=Li(t);wn.x=parseInt(e.clientX),wn.y=parseInt(e.clientY),et?bn||(bn=a(function(){!function t(e){if(!he)return void(Cn=!1);r(bn);Cn&&(bn=a(function(){t(e)}));"?"===he&&(he=Wi());if(he){!qe&&Hi(e)&&(qe=!0);try{e.type&&ge.emit(Hi(e)?"touchMove":"dragMove",Gi(e))}catch(t){}var n=gn,i=Tn(wn,xn);if(!ct||Mt||Et)n+=i,n+="px";else{var o=W?i*It*100/(Dt*ee):100*i/Dt;n+=o,n+="%"}pt.style[oe]=re+n+ue}}(t)})):("?"===he&&(he=Wi()),he&&(qe=!0)),qe&&t.preventDefault()}}function Fi(e){if(Cn){bn&&(r(bn),bn=null),et&&hi(pt,""),Cn=!1;var n=Li(e);wn.x=parseInt(n.clientX),wn.y=parseInt(n.clientY);var i=Tn(wn,xn);if(Math.abs(i)){if(!Hi(e)){var o=ki(e);I(o,{click:function t(e){Ri(e),H(o,{click:t})}})}et?bn=a(function(){if(ct&&!Et){var t=-i*It/Dt;t=i>0?Math.floor(t):Math.ceil(t),le+=t}else{var n=-(gn+i);if(n<=0)le=de;else if(n>=xt[xt.length-1])le=fe;else for(var a=0;a<ee&&n>=xt[a];)le=a,n>xt[a]&&i<0&&(le+=1),a++}Ci(e,i),ge.emit(Hi(e)?"touchEnd":"dragEnd",Gi(e))}):he&&Si(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(qe=!1),ve&&(he="?"),$t&&!cn&&Ei()}function qi(){ft.style.height=xt[le+It]-xt[le]+"px"}function _i(){qt&&!ke&&(!function(){tn=[];for(var t=Nn()%It;t<yt;)et&&!Wt&&t+It>yt&&(t=yt-It),tn.push(t),t+=It;(Wt&&tn.length*It<yt||!Wt&&tn[0]>0)&&tn.unshift(0)}(),tn!==en&&(m(Ye,function(t,e){tn.indexOf(e)<0?E(t):M(t)}),en=tn))}function Gi(t){return{container:pt,slideItems:mt,navContainer:Je,navItems:Ye,controlsContainer:$e,hasControls:Pe,prevButton:Ue,nextButton:Ke,items:It,slideBy:Pt,cloneCount:te,slideCount:yt,slideCountNew:ee,index:le,indexCached:ce,displayIndex:En(),navCurrentIndex:an,navCurrentIndexCached:on,visibleNavIndexes:tn,visibleNavIndexesCached:en,sheet:Xt,isOn:bt,event:t||{}}}V&&console.warn("No slides found in",t.container)}},function(t,e,n){"use strict";var i=n(0),a={eventsList:["indexChanged","transitionStart","transitionEnd","newBreakpointStart","newBreakpointEnd","touchStart","touchMove","touchEnd","dragStart","dragMove","dragEnd"],props:{mode:[String],autoInit:{type:[Boolean],default:!0},axis:{type:[String],validator:function(t){return"horizontal"===t||"vertical"===t}},items:{type:[String,Number],default:1},gutter:{type:[String,Number],default:0},edgePadding:{type:[String,Number],default:0},fixedWidth:{type:[String,Boolean,Number],default:!1},swipeAngle:{type:[Boolean,Number],default:15},slideBy:{type:[String,Number],default:1},controls:{type:[String,Boolean],default:!0},controlsText:{type:[Array],default:function(){return["prev","next"]}},controlsContainer:{type:[Boolean,Node,String],default:!1},nav:{type:[Boolean],default:!1},navPosition:{type:[String],default:"top"},navContainer:{type:[Boolean,Node,String],default:!1},arrowKeys:{type:[Boolean],default:!1},speed:{type:[String,Number],default:300},autoplay:{type:[Boolean],default:!1},autoplayTimeout:{type:[Number],default:5e3},autoplayDirection:{type:[String],default:"forward",validator:function(t){return"forward"===t||"backward"===t}},autoplayText:{type:[Array],default:function(){return["start","stop"]}},autoplayHoverPause:{type:[Boolean],default:!1},autoplayButton:{type:[Boolean,Node,String],default:!1},autoplayButtonOutput:{type:[Boolean],default:!0},autoplayResetOnVisibility:{type:[Boolean],default:!0},animateIn:{type:[String],default:"tns-fadeIn"},animateOut:{type:[String],default:"tns-fadeOut"},animateNormal:{type:[String],default:"tns-normal"},animateDelay:{type:[String,Number,Boolean],default:!1},loop:{type:[Boolean],default:!0},rewind:{type:[Boolean],default:!1},autoHeight:{type:[Boolean],default:!1},responsive:{type:[Boolean,Object],default:!1},lazyload:{type:[Boolean],default:!1},touch:{type:[Boolean],default:!0},mouseDrag:{type:[Boolean],default:!1},nested:{type:[String,Boolean],default:!1,validator:function(t){return"inner"===t||"outer"===t||!1===t}},freezable:{type:[Boolean],default:!0},disable:{type:[Boolean],default:!1},startIndex:{type:[Number],default:0},onInit:{type:[Function,Boolean],default:!1},center:{type:Boolean,default:!1},lazyLoadSelector:{type:String,default:".tns-lazy-img"},preventActionWhenRunning:{type:Boolean,default:!1},preventScrollOnTouch:{type:[String,Boolean],default:!1,validator:function(t){return"auto"===t||"force"===t||!1===t}}},mounted:function(){this.autoInit&&this.init()},beforeDestroy:function(){this.slider&&this.slider.destroy()},methods:{$_vueTinySlider_subscribeTo:function(t){var e=this;this.slider.events.on(t,function(n){e.$emit(t,n)})},$_vueTinySlider_subscribeToAll:function(){this.$options.eventsList.forEach(this.$_vueTinySlider_subscribeTo)},goTo:function(t){this.slider.goTo(t)},rebuild:function(){this.slider=this.slider.rebuild(),this.$emit("rebuild")},getInfo:function(){this.$emit("getInfo",this.slider.getInfo(),this.slider)},destroy:function(){this.slider.destroy()},init:function(){var t={container:this.$el,axis:this.axis,items:parseInt(this.items),mode:this.mode,gutter:this.gutter,edgePadding:this.edgePadding,fixedWidth:this.fixedWidth?parseInt(this.fixedWidth,10):this.fixedWidth,slideBy:this.slideBy,controls:this.controls,controlsText:this.controlsText,controlsContainer:this.controlsContainer,nav:this.nav,navPosition:this.navPosition,navContainer:this.navContainer,arrowKeys:this.arrowKeys,speed:this.speed,autoplay:this.autoplay,autoplayTimeout:this.autoplayTimeout,autoplayDirection:this.autoplayDirection,autoplayText:this.autoplayText,autoplayHoverPause:this.autoplayHoverPause,autoplayButton:this.autoplayButton,autoplayButtonOutput:this.autoplayButtonOutput,autoplayResetOnVisibility:this.autoplayResetOnVisibility,animateIn:this.animateIn,animateOut:this.animateOut,animateNormal:this.animateNormal,animateDelay:this.animateDelay,loop:this.loop,rewind:this.rewind,autoHeight:this.autoHeight,responsive:this.responsive,lazyload:this.lazyload,touch:this.touch,mouseDrag:this.mouseDrag,nested:this.nested,freezable:this.freezable,disable:this.disable,onInit:this.onInit,swipeAngle:this.swipeAngle,startIndex:this.startIndex,center:this.center,lazyLoadSelector:this.lazyLoadSelector,preventActionWhenRunning:this.preventActionWhenRunning,preventScrollOnTouch:this.preventScrollOnTouch};!function(t){for(var e in t)t.hasOwnProperty(e)&&void 0===t[e]&&delete t[e]}(t),this.slider=(0,i.tns)(t),this.$emit("init"),this.$_vueTinySlider_subscribeToAll()}},render:function(t){return t("div",this.$slots.default)}};t.exports=a}])});
//# sourceMappingURL=index.js.map