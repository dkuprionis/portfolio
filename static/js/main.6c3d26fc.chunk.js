(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(24).concat([function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/weather-app.a334d4c1.png"},,,,,function(e,t,a){e.exports=a.p+"static/media/inmobilus-design.88f82537.png"},function(e,t,a){e.exports=a.p+"static/media/inmobilus-website.7b960214.png"},function(e,t,a){e.exports=a.p+"static/media/text-editor-app.405e8a80.png"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Cloud.79b3c647.svg"},function(e,t,a){e.exports=a.p+"static/media/Cloudy.534afba6.svg"},function(e,t,a){e.exports=a.p+"static/media/Fog.3694ef67.svg"},function(e,t,a){e.exports=a.p+"static/media/Rain.316ec331.svg"},function(e,t,a){e.exports=a.p+"static/media/Snow.20379c89.svg"},function(e,t,a){e.exports=a.p+"static/media/Storm.1afe7efd.svg"},function(e,t,a){e.exports=a.p+"static/media/Sun.53f709c5.svg"},function(e,t,a){e.exports=a.p+"static/media/Wind.6b4d1006.svg"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/bold.c681da46.svg"},function(e,t,a){e.exports=a.p+"static/media/italicize-text.a0bafb4c.svg"},function(e,t,a){e.exports=a.p+"static/media/underline-text-button.41cde361.svg"},function(e,t,a){e.exports=a.p+"static/media/undo-arrow.0f28e7fa.svg"},function(e,t,a){e.exports=a.p+"static/media/redo-arrow.3012b921.svg"},function(e,t,a){e.exports=a.p+"static/media/align-to-left.7b875744.svg"},function(e,t,a){e.exports=a.p+"static/media/align-center.18fbd4d5.svg"},function(e,t,a){e.exports=a.p+"static/media/align-to-right.ca9c0d79.svg"},function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),c=a.n(n),o=a(21),i=a.n(o),r=a(14),l=a(5),s=a(6),m=a(7),u=a(9),d=a(8),p=a(10),h=(a(29),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).scrollWork=function(){document.querySelector(".scrollWork").scrollIntoView({behavior:"smooth",inline:"nearest"})},a.scrollHome=function(){document.querySelector(".me").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},a.scrollContact=function(){document.querySelector(".contact-container").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"scroll",value:function(){var e=0,t=document.querySelector(".nav");window.innerWidth>600&&window.addEventListener("scroll",function(){var a=window.pageYOffset||window.scrollTop;t.style.display=a>e?"none":"flex",e=a<=0?0:a})}},{key:"render",value:function(){return c.a.createElement("div",{className:"content",onLoad:this.scroll},c.a.createElement("ul",{className:"nav nav-desktop"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link active",onClick:this.scrollHome},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",onClick:this.scrollWork},"Work")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",onClick:this.scrollContact},"Contact"))),c.a.createElement("h1",{className:"me"},"I\u2019m Daugirdas",c.a.createElement("br",null),c.a.createElement("span",{className:"developer"},"a Web Developer")),c.a.createElement("div",{className:"hr"}),c.a.createElement("div",{className:"app-container scrollWork"},c.a.createElement("img",{src:a(30),alt:"Weather app"}),c.a.createElement("h2",{className:"app-title"},"Weather app"),c.a.createElement("div",{className:"horizontal-line-small"}),c.a.createElement("p",{className:"app-text"},"Allows user to check current weather temperature for local or international locations."),c.a.createElement(r.b,{to:"/weather-app"},c.a.createElement("button",null,c.a.createElement("p",{className:"button-text"},"View live")))),c.a.createElement("div",{className:"app-container"},c.a.createElement("img",{src:a(35),alt:"inMobilus design"}),c.a.createElement("h2",{className:"app-title"},"inMobilus website"),c.a.createElement("div",{className:"horizontal-line-small"}),c.a.createElement("p",{className:"app-text"},"Website design created for electronic sales company based in Lithuania."),c.a.createElement("a",{href:a(36),target:"_blank"},c.a.createElement("button",null,c.a.createElement("p",{className:"button-text"},"View bigger picture")))),c.a.createElement("div",{className:"app-container"},c.a.createElement("img",{src:a(37),alt:"Text editor app"}),c.a.createElement("h2",{className:"app-title"},"Text editor"),c.a.createElement("div",{className:"horizontal-line-small"}),c.a.createElement("p",{className:"app-text"},"Allows user to write and store text locally in the browser."),c.a.createElement(r.b,{to:"/text-editor-app"},c.a.createElement("button",null,c.a.createElement("p",{className:"button-text"},"View live")))),c.a.createElement("div",{className:"contact-container"},c.a.createElement("h2",{className:"contact-title"},"Get in touch"),c.a.createElement("span",{className:"vertical-line"}),c.a.createElement("h3",{className:"contact-email"},"kuprionis@gmail.com")),c.a.createElement("ul",{className:"nav-mobile"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("p",{className:"nav-link active",onClick:this.scrollHome},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("p",{className:"nav-link",onClick:this.scrollWork},"Work")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("p",{className:"nav-link",onClick:this.scrollContact},"Contact"))))}}]),t}(c.a.Component)),f=840,v=540;window.innerWidth>f||window.innerWidth>v||window.innerWidth;var E=h,g=a(13),b=(a(38),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).enterValue=function(e){13===e.which&&a.returnData()},a.logValue=function(e){e.target.value.length<83&&a.setState({city:e.target.value})},a.state={url:"https://api.openweathermap.org/data/2.5/weather?q=",city:"dublin",input:"",api:"&units=metric&appid=bad16c77876c4fffcf2c6736381a980d",error:"",isLoaded:!1,geolocationEnabled:!1,temp:0,location:"",weather_description:"",day:"",main:"",cod:""},a.logValue=a.logValue.bind(Object(g.a)(a)),a.enterValue=a.enterValue.bind(Object(g.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"returnData",value:function(){var e=this,t=this.state,a=t.url,n=t.city,c=t.api;fetch(a+n+c).then(function(e){return e.json()}).then(function(t){"404"===t.cod?document.querySelector(".error").innerHTML="Please enter valid city name":(e.setState({isLoaded:!0,temp:Math.floor(t.main.temp),location:t.name,weather_description:t.weather[0].description,main:t.weather[0].main}),document.querySelector(".error").innerHTML=" ",document.querySelector(".input").focus(),document.querySelector(".input").value="")},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"componentWillMount",value:function(){var e=new Date;this.setState({day:["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"][e.getDay()]})}},{key:"componentDidMount",value:function(){this.returnData()}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded;return t?c.a.createElement("div",null,"Error: ",this.state.error):a?c.a.createElement("div",{className:"body"},c.a.createElement(y,{temp:this.state.temp,location:this.state.location,weather_description:this.state.weather_description,day:this.state.day,main:this.state.main}),c.a.createElement("input",{onChange:this.logValue,onKeyPress:this.enterValue,type:"text",className:"form-control input",placeholder:"City name",required:!0}),c.a.createElement("h2",{className:"error text-center text-white"},this.state.error)):c.a.createElement("div",{className:"load"},"Loading...")}}]),t}(c.a.Component)),y=function(e){var t={cloud:a(39),cloudy:a(40),foog:a(41),rainy:a(42),snowy:a(43),storm:a(44),sun:a(45),wind:a(46)},n=null;return n="Clear"===e.main?t.sun:"Snow"===e.main?t.snowy:"Clouds"===e.main?t.cloud:"Rain"===e.main?t.rainy:"Thunderstorm"===e.main?t.storm:t.foog,c.a.createElement("div",{className:"weather text-center mt-4"},c.a.createElement("h1",{className:"city"},e.location),c.a.createElement("h1",{className:"day"},e.day),c.a.createElement("div",{className:"inline"},c.a.createElement("img",{className:"weather-picture",src:n,alt:"Weather icon"}),c.a.createElement("h1",{className:"weather-description"},e.weather_description)),c.a.createElement("p",{className:"temp"},e.temp,c.a.createElement("sup",{className:"celsius"},"\xb0")))},w=b;a(47);console.error=function(e){return function(t){"string"===typeof t&&-1!==t.indexOf("component is `contentEditable`")||e.apply(console,arguments)}};var N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).check=function(){document.querySelector(".user-text")>=25&&alert("Limit is reached")},a.save=function(){var e=document.querySelector(".user-text").innerHTML;localStorage.userEdit=e,alert("Content saved")},a.bold=function(){document.execCommand("bold",!1,"")},a.italic=function(){document.execCommand("italic",!1,"")},a.underline=function(){document.execCommand("underline",!1,"")},a.undo=function(){document.execCommand("undo",!1,"")},a.redo=function(){document.execCommand("redo",!1,"")},a.alignCenter=function(){document.execCommand("justifyCenter",!1,"")},a.alignLeft=function(){document.execCommand("justifyLeft",!1,"")},a.alignRight=function(){document.execCommand("justifyRight",!1,"")},a.state={current_text:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"placeCaretAtEnd",value:function(e){if(e.focus(),"undefined"!=typeof window.getSelection&&"undefined"!=typeof document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var a=window.getSelection();a.removeAllRanges(),a.addRange(t)}else if("undefined"!=typeof document.body.createTextRange){var n=document.body.createTextRange();n.moveToElementText(e),n.collapse(!1),n.select()}}},{key:"componentDidMount",value:function(){var e=document.querySelector(".user-text"),t=localStorage.getItem("userEdit");e.innerHTML=t,e.focus()}},{key:"componentWillMount",value:function(){var e=this;window.addEventListener("keydown",function(t){return"s"!==t.key&&"S"!==t.key||!t.ctrlKey&&!t.metaKey||(t.preventDefault(),e.save(),!1)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"buttons"},c.a.createElement("img",{className:"button",onClick:this.bold,src:a(48),alt:"bold"}),c.a.createElement("img",{className:"button",onClick:this.italic,src:a(49),alt:"italic"}),c.a.createElement("img",{className:"button",onClick:this.underline,src:a(50),alt:"underline"}),c.a.createElement("img",{className:"button",onClick:this.undo,src:a(51),alt:"undo"}),c.a.createElement("img",{className:"button",onClick:this.redo,src:a(52),alt:"redo"}),c.a.createElement("img",{className:"button",onClick:this.alignLeft,src:a(53),alt:"align left"}),c.a.createElement("img",{className:"button",onClick:this.alignCenter,src:a(54),alt:"align center"}),c.a.createElement("img",{className:"button",onClick:this.alignRight,src:a(55),alt:"align right"}),c.a.createElement("button",{className:"button-save btn btn-primary",onClick:this.save},"Save")),c.a.createElement("div",{className:"background"},c.a.createElement("div",{onKeyUp:this.check,onClick:this.check,className:"user-text",contentEditable:"true"},this.state.current_text))))}}]),t}(c.a.Component),x=function(){return c.a.createElement(r.a,null,c.a.createElement("div",null,c.a.createElement(l.a,{exact:!0,path:"/portfolio",component:E}),c.a.createElement(l.a,{path:"/weather-app",component:w}),c.a.createElement(l.a,{path:"/text-editor-app",component:N})))};i.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[24,1,2]]]);
//# sourceMappingURL=main.6c3d26fc.chunk.js.map