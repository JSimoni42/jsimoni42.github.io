(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{QeBL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),o=n("vOnD"),c=n("l7HF"),l=n("7zjp"),r=function(e){var t=e.text,n=e.startTyping,o=e.className,c=void 0===o?"":o,l=e.delay,r=void 0===l?100:l,s=Object(a.useState)(""),p=s[0],u=s[1],f=Object(a.useRef)();return Object(a.useEffect)((function(){f.current=function(){if(t!==p){var e=p.length;u((function(n){return n+t[e]}))}}}),[t,p]),Object(a.useEffect)((function(){if(n){var e=setInterval((function(){var e;null===(e=f.current)||void 0===e||e.call(f)}),r);return function(){return clearInterval(e)}}}),[n]),i.a.createElement("div",{className:c},i.a.createElement(d,null,p),i.a.createElement(m,null))},d=o.c.span.withConfig({displayName:"CursorRow__TextContainer",componentId:"sc-3tjvws-0"})(["&::selection{background-color:white;color:black;}"]),s=Object(o.d)(["from{background-color:white;}to{background-color:black;}"]),m=o.c.div.withConfig({displayName:"CursorRow__Cursor",componentId:"sc-3tjvws-1"})(["display:inline-block;background-color:white;height:23px;width:10px;animation:"," 1s linear infinite;vertical-align:text-top;"],s),p=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(f,null,l.b.top)),i.a.createElement("div",null,i.a.createElement(f,null,l.b.left),i.a.createElement(u,null,t),i.a.createElement(f,null,l.b.right)),i.a.createElement("div",null,i.a.createElement(f,null,l.b.bottom)))},u=o.c.div.withConfig({displayName:"AsciiComputer__ComputerScreen",componentId:"sc-1sp22if-0"})(["display:inline-block;width:20.63vw;height:11vw;"]),f=o.c.pre.withConfig({displayName:"AsciiComputer__ComputerPart",componentId:"sc-1sp22if-1"})(["color:white;margin:0;padding:0;display:inline-block;"]),g=o.c.div.withConfig({displayName:"Desktop__HeaderContainer",componentId:"sc-1o8a6yj-0"})(["margin-bottom:20px;display:flex;justify-content:center;"]),h=Object(o.c)((function(e){var t=e.className,n=Object(a.useState)(0),o=n[0],c=n[1];return i.a.createElement("video",{ref:function(e){e&&e.addEventListener("ended",(function(){var e=(o+1)%l.f.length;c(e)}))},autoPlay:!0,muted:!0,className:t,src:l.f[o]})})).withConfig({displayName:"Desktop__ComputerContent",componentId:"sc-1o8a6yj-1"})(["width:100%;height:100%;"]),y=o.c.pre.withConfig({displayName:"Desktop__Header",componentId:"sc-1o8a6yj-2"})(["color:white;margin:0;padding:0;display:inline-block;"]),b=o.c.div.withConfig({displayName:"Desktop__ContentContainer",componentId:"sc-1o8a6yj-3"})(["display:flex;flex-direction:row;height:100%;flex-grow:0;"]),w=o.c.div.withConfig({displayName:"Desktop__DashedContainer",componentId:"sc-1o8a6yj-4"})(["border:5px dashed white;padding:15px;flex-grow:1;width:45%;"]),v=Object(o.c)(w).withConfig({displayName:"Desktop__IntroContainer",componentId:"sc-1o8a6yj-5"})(["margin-right:25px;"]),_=Object(o.c)(w).withConfig({displayName:"Desktop__ComputerContainer",componentId:"sc-1o8a6yj-6"})(["display:flex;align-items:center;justify-content:center;"]),C=o.c.div.withConfig({displayName:"RecordPlayer__PlayerContainer",componentId:"sc-1h5e2mz-0"})(["position:relative;display:inline-block;"]),E="\n    transform: rotate(0deg);\n    top: 9px;\n    right: 12px;\n",x="\n    transform: rotate(90deg);\n    top: 2px;\n    right: -25px;\n",N=Object(o.d)(["from{","}to{","}"],E,x),j=o.c.pre.withConfig({displayName:"RecordPlayer__PlayerArm",componentId:"sc-1h5e2mz-1"})(["position:absolute;margin:0;transform-origin:top left;",""],(function(e){return e.isArmRotating?Object(o.b)(["animation:"," 2s linear;",""],N,x):"\n                "+E+"\n            "})),I=o.c.pre.withConfig({displayName:"RecordPlayer__Player",componentId:"sc-1h5e2mz-2"})(["margin:0;"]),k=o.c.div.withConfig({displayName:"Mobile__HeaderContainer",componentId:"sc-1ga0c2-0"})(["text-align:center;"]),O=o.c.pre.withConfig({displayName:"Mobile__Header",componentId:"sc-1ga0c2-1"})(["margin:0;padding:0;display:inline-block;max-width:100%;"]),R=Object(o.c)((function(e){var t=e.className,n=void 0===t?"":t,a=e.isArmRotating;return i.a.createElement(C,{className:n},i.a.createElement(j,{isArmRotating:a},l.e.arm),i.a.createElement(I,null,l.e.playerWithoutArm))})).withConfig({displayName:"Mobile__StyledRecordPlayer",componentId:"sc-1ga0c2-2"})(["margin-top:20px;"]),P=o.c.div.withConfig({displayName:"Mobile__RecordPlayerContainer",componentId:"sc-1ga0c2-3"})([""]),D=o.c.audio.withConfig({displayName:"Mobile__HiddenAudio",componentId:"sc-1ga0c2-4"})([""]),A=n("Wbzz"),z=o.c.footer.withConfig({displayName:"pages__Footer",componentId:"sc-12s69b8-0"})(["display:flex;justify-content:center;margin:10px 0;@media (max-width:","){flex-direction:column;align-items:center;}"],l.d),H=o.c.div.withConfig({displayName:"pages__TerminalScreenFrame",componentId:"sc-12s69b8-1"})(["display:flex;flex-direction:column;padding:0 15px;"]),S=Object(o.c)((function(e){var t=e.className;return i.a.createElement("div",{className:null!=t?t:""},i.a.createElement(g,null,i.a.createElement(y,null,l.c.headerName)),i.a.createElement(b,null,i.a.createElement(v,null,i.a.createElement(r,{text:l.c.intro,startTyping:!0})),i.a.createElement(_,null,i.a.createElement(p,null,i.a.createElement(h,null)))))})).withConfig({displayName:"pages__ResponsiveDesktopIndex",componentId:"sc-12s69b8-2"})(["@media (max-width:","){display:none;}"],l.d),M=Object(o.c)((function(e){var t=e.className,n=Object(a.useState)(!1),o=n[0],c=n[1],r=Object(a.useState)(0),d=r[0],s=r[1];Object(a.useEffect)((function(){setTimeout((function(){c(!0)}),3e3)}),[]);var m=l.a[d];return i.a.createElement(k,{className:null!=t?t:""},i.a.createElement(O,null,l.c.mobileHeaderName),i.a.createElement(P,null,i.a.createElement(R,{isArmRotating:o}),o&&i.a.createElement(D,{src:m,autoPlay:!0,ref:function(e){e&&e.addEventListener("ended",(function(){var e=(d+1)%l.a.length;s(e)}))}})))})).withConfig({displayName:"pages__ResponsiveMobileIndex",componentId:"sc-12s69b8-3"})(["font-size:8px;display:none;@media (max-width:","){display:inline-block;}"],l.d);t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement(H,null,i.a.createElement(S,null),i.a.createElement(M,null))),i.a.createElement(z,null,i.a.createElement(A.Link,{to:"/credits"},"Give credit where credit is due")))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c417009f3804b654c2bf.js.map