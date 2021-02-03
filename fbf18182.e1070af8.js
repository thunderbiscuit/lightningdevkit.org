(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(89)),i={id:"onchain_funds",title:"Spending On-chain Funds"},c={unversionedId:"onchain_funds",id:"onchain_funds",isDocsHomePage:!1,title:"Spending On-chain Funds",description:"Relevant reference: search for any structs or methods mentioned in this article here.",source:"@site/docs/onchain_funds.md",slug:"/onchain_funds",permalink:"/lightningdevkit.org/docs/onchain_funds",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/onchain_funds.md",version:"current"},s=[],u={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Relevant reference: search for any structs or methods mentioned in this article ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.rs/lightning/0.0.12/lightning/index.html"}),"here"),"."),Object(a.b)("p",null,"When a channel has been closed and some outputs on chain are spendable only by us, LDK provides a ",Object(a.b)("inlineCode",{parentName:"p"},"util::events::Event::SpendableOutputs")," event in return from ",Object(a.b)("inlineCode",{parentName:"p"},"ChannelMonitor::get_and_clear_pending_events()"),". It contains a list of ",Object(a.b)("inlineCode",{parentName:"p"},"chain::keysinterface::SpendableOutputDescriptor")," objects which describe the output and provide all necessary information to spend it. ",Object(a.b)("inlineCode",{parentName:"p"},"ChannelKeys")," objects provide a unique id via the ",Object(a.b)("inlineCode",{parentName:"p"},"key_derivation_params")," function, who's value is provided back to you in the ",Object(a.b)("inlineCode",{parentName:"p"},"SpendableOutputs")," objects. For users of a ",Object(a.b)("inlineCode",{parentName:"p"},"KeysManager")," object, you can re-construct the ",Object(a.b)("inlineCode",{parentName:"p"},"InMemoryChannelKeys")," object using this information and fetch the relevant private keys from that. A ",Object(a.b)("inlineCode",{parentName:"p"},"SpendableOutputDescriptor::StaticOutput")," element does not have this information as the output is sent to an output which used only ",Object(a.b)("inlineCode",{parentName:"p"},"KeysInterface")," data, not per-channel data."))}p.isMDXComponent=!0},89:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return t?o.a.createElement(f,c(c({ref:n},u),{},{components:t})):o.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);