(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7zjp":function(_,t,e){"use strict";e.d(t,"d",(function(){return n})),e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return i}));var n={title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the\n    main Gatsby configuration files you might need.",author:"@gatsbyjs"},r={intro:"Welcome to my website! It's still very much a work in progress. Check back soon for further updates!",headerName:"\n  ______/\\\\\\\\\\\\\\\\\\\\\\__________________/\\\\\\________________________________________/\\\\\\\\\\\\\\\\\\\\\\____________________________________________________________________\n _____\\/////\\\\\\///__________________\\/\\\\\\______________________________________/\\\\\\/////////\\\\\\__________________________________________________________________\n  _________\\/\\\\\\_____________________\\/\\\\\\_____________________________________\\//\\\\\\______\\///____/\\\\\\______________________________________________________/\\\\\\_\n   _________\\/\\\\\\__________/\\\\\\\\\\_____\\/\\\\\\___________/\\\\/\\\\\\\\\\\\_________________\\////\\\\\\__________\\///______/\\\\\\\\\\__/\\\\\\\\\\________/\\\\\\\\\\______/\\\\/\\\\\\\\\\\\____\\///__\n    _________\\/\\\\\\________/\\\\\\///\\\\\\___\\/\\\\\\\\\\\\\\\\\\\\___\\/\\\\\\////\\\\\\___________________\\////\\\\\\________/\\\\\\___/\\\\\\///\\\\\\\\\\///\\\\\\____/\\\\\\///\\\\\\___\\/\\\\\\////\\\\\\____/\\\\\\_\n     _________\\/\\\\\\_______/\\\\\\__\\//\\\\\\__\\/\\\\\\/////\\\\\\__\\/\\\\\\__\\//\\\\\\_____________________\\////\\\\\\____\\/\\\\\\__\\/\\\\\\_\\//\\\\\\__\\/\\\\\\___/\\\\\\__\\//\\\\\\__\\/\\\\\\__\\//\\\\\\__\\/\\\\\\_\n      __/\\\\\\___\\/\\\\\\______\\//\\\\\\__/\\\\\\___\\/\\\\\\___\\/\\\\\\__\\/\\\\\\___\\/\\\\\\______________/\\\\\\______\\//\\\\\\___\\/\\\\\\__\\/\\\\\\__\\/\\\\\\__\\/\\\\\\__\\//\\\\\\__/\\\\\\___\\/\\\\\\___\\/\\\\\\__\\/\\\\\\_\n       _\\//\\\\\\\\\\\\\\\\\\________\\///\\\\\\\\\\/____\\/\\\\\\___\\/\\\\\\__\\/\\\\\\___\\/\\\\\\_____________\\///\\\\\\\\\\\\\\\\\\\\\\/____\\/\\\\\\__\\/\\\\\\__\\/\\\\\\__\\/\\\\\\___\\///\\\\\\\\\\/____\\/\\\\\\___\\/\\\\\\__\\/\\\\\\_\n        __\\/////////___________\\/////______\\///____\\///___\\///____\\///________________\\///////////______\\///___\\///___\\///___\\///______\\/////______\\///____\\///___\\///__\n  "},o={top:"  ______________________________________________________________\n.'  __________________________________________________________  '.\n: .'                                                          '. :\n| |      ________________________________________________      | |\n| |    .:________________________________________________:.    | |",left:"| |    |\n| |    |\n| |    |\n| |    |\n| |    |\n| |    |\n| |    |\n| |    |\n| |    |\n| |    |\n| |    |\n| |    |\n| |    |",right:"|    | |\n|    | |\n|    | |\n|    | |\n|    | |\n|    | |\n|    | |\n|    | |\n|    | |\n|    | |\n|    | |\n|    | |\n|    | |",bottom:'| |    \'.__________.__._.__.__.__.__.__.__.__.__________.\'     | |\n| |                                                            | |\n| |                                                            | |\n: \'.__________________________________________________________.\' :\n  ".______________________________/____________________________."\n                                 ||\n                                 ||\n                                 ||\n                              ___||___\n                        _.--""   ""   ""--._\n                    .\'"       .-L-.        "\'.\n                  .\'          : _ (           \'.\n                .\'             " "              \'.\n               .\'                                \'.\n               :         ________________         :\n              .\'       .\'                \'.       \'.\n              :        \'.________________.\'        :\n              |----......______    ______......----|\n              :                """"                :\n              \'.                                  .\'\n                "-.____. . . . . . . . . . ____.-"\n                        """"""--------""""""\n  ',credits:"https://asciiart.website/index.php?art=objects/computers"},i=["https://www.nps.gov/audiovideo/grca/91162C25-155D-451F-67DF168A253376F7/grca-corridorandtontopivot_480x270.mp4","https://www.nps.gov/audiovideo/grca/B2DC583D-155D-451F-67D16448F5ADCF84/grca-inner-gorge-straight-down_480x270.mp4","https://archive.org/download/AboutBan1935/AboutBan1935.mp4","https://archive.org//download/SanFrancisco1955CinemascopeFilm/SanFrancisco.mp4"]},"8+s/":function(_,t,e){"use strict";e("sc67"),e("AqHK"),e("pJf4"),e("pS08"),e("R48M");var n,r=e("q1tI"),o=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function i(_,t,e){return t in _?Object.defineProperty(_,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):_[t]=e,_}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);_.exports=function(_,t,e){if("function"!=typeof _)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==e&&"function"!=typeof e)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=_(u.map((function(_){return _.props}))),f.canUseDOM?t(c):e&&(c=e(c))}var f=function(_){var t,e;function r(){return _.apply(this,arguments)||this}e=_,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.peek=function(){return c},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var _=c;return c=void 0,u=[],_};var i=r.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var _=u.indexOf(this);u.splice(_,1),s()},i.render=function(){return o.createElement(n,this.props)},r}(r.PureComponent);return i(f,"displayName","SideEffect("+function(_){return _.displayName||_.name||"Component"}(n)+")"),i(f,"canUseDOM",a),f}}},C9fy:function(_,t,e){var n=Date.prototype,r=n.toString,o=n.getTime;new Date(NaN)+""!="Invalid Date"&&e("IYdN")(n,"toString",(function(){var _=o.call(this);return _==_?r.call(this):"Invalid Date"}))},R48M:function(_,t,e){var n=e("P8UN");n(n.S+n.F*!e("QPJK"),"Object",{defineProperty:e("rjfK").f})},bmMU:function(_,t,e){"use strict";e("pJf4"),e("Ll4R"),e("q8oJ"),e("C9fy"),e("klQ5"),e("rzGZ"),e("Dq+y"),e("8npG"),e("Ggvi"),e("MIFh");var n=Array.isArray,r=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;_.exports=function(_,t){try{return function _(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){var a,c,u,s=n(t),f=n(e);if(s&&f){if((c=t.length)!=e.length)return!1;for(a=c;0!=a--;)if(!_(t[a],e[a]))return!1;return!0}if(s!=f)return!1;var l=t instanceof Date,p=e instanceof Date;if(l!=p)return!1;if(l&&p)return t.getTime()==e.getTime();var d=t instanceof RegExp,h=e instanceof RegExp;if(d!=h)return!1;if(d&&h)return t.toString()==e.toString();var y=r(t);if((c=y.length)!==r(e).length)return!1;for(a=c;0!=a--;)if(!o.call(e,y[a]))return!1;if(i&&t instanceof Element&&e instanceof Element)return t===e;for(a=c;0!=a--;)if(!("_owner"===(u=y[a])&&t.$$typeof||_(t[u],e[u])))return!1;return!0}return t!=t&&e!=e}(_,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},klQ5:function(_,t,e){var n=e("emib"),r=e("TUPI"),o=e("rjfK").f,i=e("chL8").f,a=e("mhTz"),c=e("lb9j"),u=n.RegExp,s=u,f=u.prototype,l=/a/g,p=/a/g,d=new u(l)!==l;if(e("QPJK")&&(!d||e("96qb")((function(){return p[e("sOol")("match")]=!1,u(l)!=l||u(p)==p||"/a/i"!=u(l,"i")})))){u=function(_,t){var e=this instanceof u,n=a(_),o=void 0===t;return!e&&n&&_.constructor===u&&o?_:r(d?new s(n&&!o?_.source:_,t):s((n=_ instanceof u)?_.source:_,n&&o?c.call(_):t),e?this:f,u)};for(var h=function(_){_ in u||o(u,_,{configurable:!0,get:function(){return s[_]},set:function(t){s[_]=t}})},y=i(s),m=0;y.length>m;)h(y[m++]);f.constructor=u,u.prototype=f,e("IYdN")(n,"RegExp",u)}e("to/b")("RegExp")},qhky:function(_,t,e){"use strict";(function(_){e.d(t,"a",(function(){return h_}));e("wZFJ"),e("HQhv"),e("n7j8"),e("1dPr"),e("JHok"),e("OeI1"),e("MIFh"),e("sC2a"),e("sc67"),e("LagC"),e("pS08"),e("E5k/"),e("R48M"),e("m210"),e("4DPX"),e("U6Bt"),e("rzGZ"),e("Dq+y"),e("8npG"),e("Ggvi"),e("AqHK");var n,r,o,i,a=e("17x9"),c=e.n(a),u=e("8+s/"),s=e.n(u),f=e("bmMU"),l=e.n(f),p=e("q1tI"),d=e.n(p),h=e("MgzW"),y=e.n(h),m="bodyAttributes",b="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(T).map((function(_){return T[_]})),"charset"),w="cssText",C="href",A="http-equiv",O="innerHTML",E="itemprop",S="name",j="property",P="rel",k="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",D="defer",M="encodeSpecialCharacters",N="onChangeClientState",R="titleTemplate",F=Object.keys(L).reduce((function(_,t){return _[L[t]]=t,_}),{}),q=[T.NOSCRIPT,T.SCRIPT,T.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(_){return typeof _}:function(_){return _&&"function"==typeof Symbol&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},U=function(_,t){if(!(_ instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function _(_,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(_,n.key,n)}}return function(t,e,n){return e&&_(t.prototype,e),n&&_(t,n),t}}(),K=Object.assign||function(_){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(_[n]=e[n])}return _},Y=function(_,t){var e={};for(var n in _)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(_,n)&&(e[n]=_[n]);return e},G=function(_,t){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?_:t},J=function(_){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(_):String(_).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(_){var t=X(_,T.TITLE),e=X(_,R);if(e&&t)return e.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(_,x);return t||n||void 0},W=function(_){return X(_,N)||function(){}},Q=function(_,t){return t.filter((function(t){return void 0!==t[_]})).map((function(t){return t[_]})).reduce((function(_,t){return K({},_,t)}),{})},Z=function(_,t){return t.filter((function(_){return void 0!==_[T.BASE]})).map((function(_){return _[T.BASE]})).reverse().reduce((function(t,e){if(!t.length)for(var n=Object.keys(e),r=0;r<n.length;r++){var o=n[r].toLowerCase();if(-1!==_.indexOf(o)&&e[o])return t.concat(e)}return t}),[])},$=function(_,t,e){var n={};return e.filter((function(t){return!!Array.isArray(t[_])||(void 0!==t[_]&&n_("Helmet: "+_+' should be of type "Array". Instead found type "'+H(t[_])+'"'),!1)})).map((function(t){return t[_]})).reverse().reduce((function(_,e){var r={};e.filter((function(_){for(var e=void 0,o=Object.keys(_),i=0;i<o.length;i++){var a=o[i],c=a.toLowerCase();-1===t.indexOf(c)||e===P&&"canonical"===_[e].toLowerCase()||c===P&&"stylesheet"===_[c].toLowerCase()||(e=c),-1===t.indexOf(a)||a!==O&&a!==w&&a!==E||(e=a)}if(!e||!_[e])return!1;var u=_[e].toLowerCase();return n[e]||(n[e]={}),r[e]||(r[e]={}),!n[e][u]&&(r[e][u]=!0,!0)})).reverse().forEach((function(t){return _.push(t)}));for(var o=Object.keys(r),i=0;i<o.length;i++){var a=o[i],c=y()({},n[a],r[a]);n[a]=c}return _}),[]).reverse()},X=function(_,t){for(var e=_.length-1;e>=0;e--){var n=_[e];if(n.hasOwnProperty(t))return n[t]}return null},V=(n=Date.now(),function(_){var t=Date.now();t-n>16?(n=t,_(t)):setTimeout((function(){V(_)}),0)}),__=function(_){return clearTimeout(_)},t_="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V:_.requestAnimationFrame||V,e_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||__:_.cancelAnimationFrame||__,n_=function(_){return console&&"function"==typeof console.warn&&console.warn(_)},r_=null,o_=function(_,t){var e=_.baseTag,n=_.bodyAttributes,r=_.htmlAttributes,o=_.linkTags,i=_.metaTags,a=_.noscriptTags,c=_.onChangeClientState,u=_.scriptTags,s=_.styleTags,f=_.title,l=_.titleAttributes;c_(T.BODY,n),c_(T.HTML,r),a_(f,l);var p={baseTag:u_(T.BASE,e),linkTags:u_(T.LINK,o),metaTags:u_(T.META,i),noscriptTags:u_(T.NOSCRIPT,a),scriptTags:u_(T.SCRIPT,u),styleTags:u_(T.STYLE,s)},d={},h={};Object.keys(p).forEach((function(_){var t=p[_],e=t.newTags,n=t.oldTags;e.length&&(d[_]=e),n.length&&(h[_]=p[_].oldTags)})),t&&t(),c(_,d,h)},i_=function(_){return Array.isArray(_)?_.join(""):_},a_=function(_,t){void 0!==_&&document.title!==_&&(document.title=i_(_)),c_(T.TITLE,t)},c_=function(_,t){var e=document.getElementsByTagName(_)[0];if(e){for(var n=e.getAttribute("data-react-helmet"),r=n?n.split(","):[],o=[].concat(r),i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=t[c]||"";e.getAttribute(c)!==u&&e.setAttribute(c,u),-1===r.indexOf(c)&&r.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)e.removeAttribute(o[f]);r.length===o.length?e.removeAttribute("data-react-helmet"):e.getAttribute("data-react-helmet")!==i.join(",")&&e.setAttribute("data-react-helmet",i.join(","))}},u_=function(_,t){var e=document.head||document.querySelector(T.HEAD),n=e.querySelectorAll(_+"[data-react-helmet]"),r=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var e=document.createElement(_);for(var n in t)if(t.hasOwnProperty(n))if(n===O)e.innerHTML=t.innerHTML;else if(n===w)e.styleSheet?e.styleSheet.cssText=t.cssText:e.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[n]?"":t[n];e.setAttribute(n,a)}e.setAttribute("data-react-helmet","true"),r.some((function(_,t){return i=t,e.isEqualNode(_)}))?r.splice(i,1):o.push(e)})),r.forEach((function(_){return _.parentNode.removeChild(_)})),o.forEach((function(_){return e.appendChild(_)})),{oldTags:r,newTags:o}},s_=function(_){return Object.keys(_).reduce((function(t,e){var n=void 0!==_[e]?e+'="'+_[e]+'"':""+e;return t?t+" "+n:n}),"")},f_=function(_){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(_).reduce((function(t,e){return t[L[e]||e]=_[e],t}),t)},l_=function(_,t,e){switch(_){case T.TITLE:return{toComponent:function(){return _=t.title,e=t.titleAttributes,(n={key:_})["data-react-helmet"]=!0,r=f_(e,n),[d.a.createElement(T.TITLE,r,_)];var _,e,n,r},toString:function(){return function(_,t,e,n){var r=s_(e),o=i_(t);return r?"<"+_+' data-react-helmet="true" '+r+">"+J(o,n)+"</"+_+">":"<"+_+' data-react-helmet="true">'+J(o,n)+"</"+_+">"}(_,t.title,t.titleAttributes,e)}};case m:case b:return{toComponent:function(){return f_(t)},toString:function(){return s_(t)}};default:return{toComponent:function(){return function(_,t){return t.map((function(t,e){var n,r=((n={key:e})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(_){var e=L[_]||_;if(e===O||e===w){var n=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[e]=t[_]})),d.a.createElement(_,r)}))}(_,t)},toString:function(){return function(_,t,e){return t.reduce((function(t,n){var r=Object.keys(n).filter((function(_){return!(_===O||_===w)})).reduce((function(_,t){var r=void 0===n[t]?t:t+'="'+J(n[t],e)+'"';return _?_+" "+r:r}),""),o=n.innerHTML||n.cssText||"",i=-1===q.indexOf(_);return t+"<"+_+' data-react-helmet="true" '+r+(i?"/>":">"+o+"</"+_+">")}),"")}(_,t,e)}}}},p_=function(_){var t=_.baseTag,e=_.bodyAttributes,n=_.encode,r=_.htmlAttributes,o=_.linkTags,i=_.metaTags,a=_.noscriptTags,c=_.scriptTags,u=_.styleTags,s=_.title,f=void 0===s?"":s,l=_.titleAttributes;return{base:l_(T.BASE,t,n),bodyAttributes:l_(m,e,n),htmlAttributes:l_(b,r,n),link:l_(T.LINK,o,n),meta:l_(T.META,i,n),noscript:l_(T.NOSCRIPT,a,n),script:l_(T.SCRIPT,c,n),style:l_(T.STYLE,u,n),title:l_(T.TITLE,{title:f,titleAttributes:l},n)}},d_=s()((function(_){return{baseTag:Z([C,I],_),bodyAttributes:Q(m,_),defer:X(_,D),encode:X(_,M),htmlAttributes:Q(b,_),linkTags:$(T.LINK,[P,C],_),metaTags:$(T.META,[S,v,A,j,E],_),noscriptTags:$(T.NOSCRIPT,[O],_),onChangeClientState:W(_),scriptTags:$(T.SCRIPT,[k,O],_),styleTags:$(T.STYLE,[w],_),title:z(_),titleAttributes:Q(g,_)}}),(function(_){r_&&e_(r_),_.defer?r_=t_((function(){o_(_,(function(){r_=null}))})):(o_(_),r_=null)}),p_)((function(){return null})),h_=(r=d_,i=o=function(_){function t(){return U(this,t),G(this,_.apply(this,arguments))}return function(_,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);_.prototype=Object.create(t&&t.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(_,t):_.__proto__=t)}(t,_),t.prototype.shouldComponentUpdate=function(_){return!l()(this.props,_)},t.prototype.mapNestedChildrenToProps=function(_,t){if(!t)return null;switch(_.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+_.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(_){var t,e=_.child,n=_.arrayTypeChildren,r=_.newChildProps,o=_.nestedChildren;return K({},n,((t={})[e.type]=[].concat(n[e.type]||[],[K({},r,this.mapNestedChildrenToProps(e,o))]),t))},t.prototype.mapObjectTypeChildren=function(_){var t,e,n=_.child,r=_.newProps,o=_.newChildProps,i=_.nestedChildren;switch(n.type){case T.TITLE:return K({},r,((t={})[n.type]=i,t.titleAttributes=K({},o),t));case T.BODY:return K({},r,{bodyAttributes:K({},o)});case T.HTML:return K({},r,{htmlAttributes:K({},o)})}return K({},r,((e={})[n.type]=K({},o),e))},t.prototype.mapArrayTypeChildrenToProps=function(_,t){var e=K({},t);return Object.keys(_).forEach((function(t){var n;e=K({},e,((n={})[t]=_[t],n))})),e},t.prototype.warnOnInvalidChildren=function(_,t){return!0},t.prototype.mapChildrenToProps=function(_,t){var e=this,n={};return d.a.Children.forEach(_,(function(_){if(_&&_.props){var r=_.props,o=r.children,i=function(_){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(_).reduce((function(t,e){return t[F[e]||e]=_[e],t}),t)}(Y(r,["children"]));switch(e.warnOnInvalidChildren(_,o),_.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=e.flattenArrayTypeChildren({child:_,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=e.mapObjectTypeChildren({child:_,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var _=this.props,t=_.children,e=Y(_,["children"]),n=K({},e);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(r,n)},B(t,null,[{key:"canUseDOM",set:function(_){r.canUseDOM=_}}]),t}(d.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=r.peek,o.rewind=function(){var _=r.rewind();return _||(_=p_({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),_},i);h_.renderStatic=h_.rewind}).call(this,e("yLpj"))},yLpj:function(_,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}_.exports=e}}]);
//# sourceMappingURL=commons-7379543e44431b153626.js.map