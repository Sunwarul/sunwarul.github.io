(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{3078:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#c8b8a8","images":{"fallback":{"src":"/blog/static/d5ae6781e76a5462fbb0838acdd06377/e5610/sunwarul.png","srcSet":"/blog/static/d5ae6781e76a5462fbb0838acdd06377/e5610/sunwarul.png 50w,\\n/blog/static/d5ae6781e76a5462fbb0838acdd06377/e9b55/sunwarul.png 100w","sizes":"50px"},"sources":[{"srcSet":"/blog/static/d5ae6781e76a5462fbb0838acdd06377/d4bf4/sunwarul.avif 50w,\\n/blog/static/d5ae6781e76a5462fbb0838acdd06377/ee81f/sunwarul.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/blog/static/d5ae6781e76a5462fbb0838acdd06377/3faea/sunwarul.webp 50w,\\n/blog/static/d5ae6781e76a5462fbb0838acdd06377/6a679/sunwarul.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},1046:function(e,t,a){"use strict";a.d(t,{w_:function(){return s}});var l=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=l.createContext&&l.createContext(r),o=function(){return(o=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a};function c(e){return e&&e.map((function(e,t){return l.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return l.createElement(u,o({attr:o({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var a,r=e.attr,n=e.size,c=e.title,s=i(e,["attr","size","title"]),u=n||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:a,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),e.children)};return void 0!==n?l.createElement(n.Consumer,null,(function(e){return t(e)})):t(r)}},9535:function(e,t,a){"use strict";var l=a(7294),r=a(5444),n=a(410),o=a(3201);t.Z=function(){var e,t,i=(0,r.useStaticQuery)("3378371654"),c=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=i.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/sunwarul.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(3078)}),(null==c?void 0:c.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,c.name),l.createElement("br",null),(null==c?void 0:c.summary)||null,l.createElement("br",null),l.createElement("a",{href:"https://twitter.com/"+((null==s?void 0:s.twitter)||"")},"Twitter  ",l.createElement(o.fWC,null))," ",l.createElement("a",{href:"https://facebook.com/"+((null==s?void 0:s.facebook)||"")},"Facebook ",l.createElement(o.Am9,null))," ",l.createElement("a",{href:"https://github.com/"+((null==s?void 0:s.facebook)||"")},"GitHub ",l.createElement(o.hJX,null))))}},7704:function(e,t,a){"use strict";a.r(t);var l=a(7294),r=a(5444),n=a(9535),o=a(7198),i=a(3751);t.default=function(e){var t,a=e.data,c=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=a.allMarkdownRemark.nodes;return 0===u.length?l.createElement(o.Z,{location:c,title:s},l.createElement(i.Z,{title:"All posts"}),l.createElement(n.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(o.Z,{location:c,title:s},l.createElement(i.Z,{title:"All posts"}),l.createElement(n.Z,null),l.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4a48df30b5f89c6b9a64.js.map