(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},8802:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(5893),i=(t(7294),t(3858)),r=t(1664);function a(e){var n=e.tags;return(0,s.jsx)(s.Fragment,{children:n.map((function(e){return(0,s.jsx)(r.default,{href:"/tags/".concat(e),children:(0,s.jsxs)("a",{className:"mx-1 text-gray-400 underline",children:["#",e]})},e)}))})}function c(e){var n=e.id,t=e.title,c=e.dateString,l=e.tags,u=e.pinned;return(0,s.jsxs)("div",{className:"mb-10",children:[(0,s.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,s.jsx)(r.default,{href:"/posts/".concat(n),children:(0,s.jsx)("a",{children:(0,s.jsx)("h2",{className:"text-xl",children:t})})}),u?(0,s.jsx)("div",{style:{lineHeight:"1.75rem"},children:(0,s.jsx)("img",{src:"/images/pin.png",style:{width:"1.25rem",height:"1.25rem",display:"inline"}})}):(0,s.jsx)(s.Fragment,{})]}),(0,s.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,s.jsx)("small",{children:(0,s.jsx)(i.Z,{dateString:c})}),(0,s.jsx)("small",{children:(0,s.jsx)(a,{tags:l})})]})]})}},3858:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(5893),i=t(8420),r=t(5313);function a(e){var n=e.dateString,t=(0,i.Z)(n);return(0,s.jsx)("time",{className:"text-gray-400",dateTime:n,children:10==n.length?(0,r.Z)(t,"LLLL d, yyyy"):(0,r.Z)(t,"LLLL, yyyy")})}},3678:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c},default:function(){return l}});var s=t(5893),i=(t(9008),t(6100),t(1664),t(3858),t(7294)),r=t(2390),a=t(8802),c=!0;function l(e){var n=e.allPostsData,t=(0,i.useContext)(r.e).setPostTag;return(0,i.useEffect)((function(){t("home")})),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{children:(0,s.jsx)("ul",{className:"list-none",children:n.map((function(e){var n=e.id,t=e.date,i=e.title,r=e.tags,c=e.pinned;return(0,s.jsx)("li",{className:"list-none",children:(0,s.jsx)(a.Z,{id:n,dateString:t,title:i,tags:r,pinned:c})},n)}))})})})}}},function(e){e.O(0,[771,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);