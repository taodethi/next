(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[812],{7553:function(t,e,n){var r;r=function(t){"use strict";var e={name:"vi",weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ s\xe1u_thứ bảy".split("_"),months:"th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s tới",past:"%s trước",s:"v\xe0i gi\xe2y",m:"một ph\xfat",mm:"%d ph\xfat",h:"một giờ",hh:"%d giờ",d:"một ng\xe0y",dd:"%d ng\xe0y",M:"một th\xe1ng",MM:"%d th\xe1ng",y:"một năm",yy:"%d năm"}};return(t&&"object"==typeof t&&"default"in t?t:{default:t}).default.locale(e,null,!0),e},t.exports=r(n(7484))},4110:function(t){var e;e=function(){return function(t,e,n){t=t||{};var r=e.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,e,n,a){return r.fromToBase(t,e,n,a)}n.en.relativeTime=a,r.fromToBase=function(e,r,o,i,l){for(var s,u,h,d=o.$locale().relativeTime||a,c=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=c.length,f=0;f<m;f+=1){var _=c[f];_.d&&(s=i?n(e).diff(o,_.d,!0):o.diff(e,_.d,!0));var g=(t.rounding||Math.round)(Math.abs(s));if(h=s>0,g<=_.r||!_.r){g<=1&&f>0&&(_=c[f-1]);var p=d[_.l];l&&(g=l(""+g)),u="string"==typeof p?p.replace("%d",g):p(g,r,_.l,h);break}}if(r)return u;var M=h?d.future:d.past;return"function"==typeof M?M(u):M.replace("%s",u)},r.to=function(t,e){return o(t,e,this,!0)},r.from=function(t,e){return o(t,e,this)};var i=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(i(this),t)},r.fromNow=function(t){return this.from(i(this),t)}}},t.exports=e()},1752:function(t,e,n){t.exports=n(1224)},3356:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[year]/[month]/[slug]",function(){return n(6557)}])},6557:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var r=n(5893),a=n(6341),o=n(8481),i=n(142);function l(){let{posts:t}=(0,a.Z)(),e=t[0];return(console.log(t),e)?(0,r.jsxs)("article",{className:"max-w-3xl mx-auto px-4 py-8",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mb-4",children:e.title}),(0,r.jsxs)("div",{className:"mb-4 text-gray-600",children:[(0,r.jsxs)("span",{children:["Đăng bởi ",e.author," • "]}),(0,r.jsx)("time",{dateTime:e.published,children:(0,o.B)(e.published)})]}),e.cover&&(0,r.jsx)("img",{src:(0,i.Vh)(e.cover),alt:e.title,className:"w-full h-auto mb-6 rounded-lg"}),(0,r.jsx)("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:e.content}})]}):(0,r.jsx)("div",{children:"Loading..."})}},142:function(t,e,n){"use strict";n.d(e,{Vh:function(){return l},aJ:function(){return h},gN:function(){return s},hv:function(){return u}});var r=n(1752),a=n.n(r),o=n(8552);let{publicRuntimeConfig:i}=a()(),l=t=>/^(http|https):\/\//.test(t)?t:"".concat(null==i?void 0:i.assetPrefix).concat(t),s=async t=>{let e=new FormData;e.append("image",t);try{let t=await fetch("https://api.imgur.com/3/image",{method:"POST",body:e,headers:{Authorization:"Client-ID ".concat(o.default.imgurClientId)}});return(await t.json()).data.link}catch(t){return console.error("Error uploading image to Imgur:",t),null}},u=async t=>{try{let e=await fetch(t),n=await e.blob(),r=await new Promise((t,e)=>{let r=new FileReader;r.onloadend=()=>{let n=new Image;n.onload=()=>{let e=document.createElement("canvas"),r=e.getContext("2d");e.width=n.width,e.height=n.height,r.drawImage(n,0,0);let a=e.toDataURL("image/jpeg",.5);t(a)},n.onerror=()=>e(Error("Failed to load image")),n.src=r.result},r.readAsDataURL(n)});return console.log(r),r}catch(t){return console.error("Error compressing image:",t),null}},h=t=>t.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[đĐ]/g,t=>"đ"===t?"d":"D").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"")},8481:function(t,e,n){"use strict";n.d(e,{B:function(){return l}});var r=n(7484),a=n.n(r),o=n(4110),i=n.n(o);n(7553),a().extend(i()),a().locale("vi");let l=t=>a()(t).fromNow()}},function(t){t.O(0,[888,774,179],function(){return t(t.s=3356)}),_N_E=t.O()}]);