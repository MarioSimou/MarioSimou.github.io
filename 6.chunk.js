(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{220:function(e,t,a){"use strict";a(52);var n=a(0),r=a.n(n);function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}t.a=e=>{let{effect:t,children:a,delay:i}=e,l=o(e,["effect","children","delay"]);const[c,d]=Object(n.useState)(!1),s=t;return Object(n.useEffect)(()=>{setTimeout(()=>d(!0),i)}),r.a.createElement(s,Object.assign({when:c},l),a)}},239:function(e,t,a){"use strict";function n(e,t){var a=t.left,n=t.right,r=t.up,o=t.down,i=t.top,l=t.bottom,c=t.big,s=t.mirror,f=t.opposite,m=(a?1:0)|(n?2:0)|(i||o?4:0)|(l||r?8:0)|(s?16:0)|(f?32:0)|(e?64:0)|(c?128:0);if(u.hasOwnProperty(m))return u[m];if(!s!=!(e&&f)){var p=[n,a,l,i,o,r];a=p[0],n=p[1],i=p[2],l=p[3],r=p[4],o=p[5]}var b=c?"2000px":"100%",g=a?"-"+b:n?b:"0",y=o||i?"-"+b:r||l?b:"0";return u[m]=(0,d.animation)("\n    "+(e?"to":"from")+" {opacity: 0;transform: translate3d("+g+", "+y+", 0) rotate3d(0, 0, 1, -120deg);}\n\t  "+(e?"from":"to")+" {opacity: 1;transform: none}\n  "),u[m]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,o=e.duration,i=void 0===o?d.defaults.duration:o,c=e.delay,s=void 0===c?d.defaults.delay:c,u=e.count,f=void 0===u?d.defaults.count:u,m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),p={make:n,duration:void 0===r?i:r,delay:s,forever:a,count:f,style:{animationFillMode:"both"}};return(0,l.default)(m,p,p,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,i=a(81),l=(o=i)&&o.__esModule?o:{default:o},c=a(4),d=a(54),s={out:c.bool,left:c.bool,right:c.bool,top:c.bool,bottom:c.bool,big:c.bool,mirror:c.bool,opposite:c.bool,duration:c.number,timeout:c.number,delay:c.number,count:c.number,forever:c.bool},u={};r.propTypes=s,t.default=r,e.exports=t.default},253:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(116),i=a(217),l=a(220),c=a(71),d=a.n(c);const s=Object(o.a)(e=>({bar:{width:e.spacing(10),height:e.spacing(.5),background:e.palette.secondary.main,margin:"auto"}}));var u=e=>{const t=s();return r.a.createElement(l.a,{duration:500,delay:1200,effect:d.a,left:!0},r.a.createElement("div",Object.assign({},e,{className:t.bar})))},f=a(239),m=a.n(f);const p=Object(o.a)(e=>({root:{padding:e.spacing(5),paddingTop:"64px",display:"grid",gridAutoFlow:"row",gridRowGap:e.spacing(5),minHeight:"100vh","@media(max-width: 600px)":{paddingLeft:e.spacing(2.5),paddingRight:e.spacing(2.5)}},headerContainer:{margin:"auto",fontFamily:"Roboto,sans-serif"},pageHeader:{fontSize:e.spacing(5),height:"fit-content",width:"fit-content",margin:"auto",textTransform:"uppercase",color:e.palette.primary.main}}));t.default=e=>{let{style:t,id:a,header:n,children:o}=e;const c=p();return t=t&&Object.values(t).length?t:{},r.a.createElement(i.a,{container:!0,className:c.root,id:a,style:t.root},r.a.createElement(i.a,{item:!0,xs:12,className:c.headerContainer},r.a.createElement(i.a,{container:!0,alignItems:"center",justify:"center"},r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement(l.a,{delay:0,duration:300,effect:m.a,top:!0},r.a.createElement("div",{className:c.pageHeader,style:t.pageHeader},n))),r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement(l.a,{delay:300,duration:300,effect:d.a,left:!0},r.a.createElement(u,{style:t.bar}))))),r.a.createElement(i.a,{item:!0,xs:12,style:t.contactContent},o))}}}]);