"use strict";(self.webpackChunkwangxiangwebsite=self.webpackChunkwangxiangwebsite||[]).push([[13],{8665:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(3366),r=a(7294),l=a(6010),i=a(2434),c=a(9960),s="sidebar_a9qW",m="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",b=a(5999);function E(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var v=["sidebar","toc","children"];function p(e){var t=e.sidebar,a=e.toc,c=e.children,s=(0,n.Z)(e,v),m=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(E,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},a))))}},497:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),r=a(8665),l=a(7774),i=a(5450),c="tag_Shcx";function s(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(l.Z,e))}))),n.createElement("hr",null))}function m(e){var t=e.tags,a=(0,i.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(s,{key:e.letter,letterEntry:e})})))}function o(e){var t=e.tags,a=e.sidebar,l=(0,i.MA)();return n.createElement(r.Z,{title:l,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,l),n.createElement(m,{tags:Object.values(t)}))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(9960),i="tag_hD8n",c="tagRegular_D6E_",s="tagWithCount_i0QQ";function m(e){var t,a=e.permalink,m=e.name,o=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[c]=!o,t[s]=o,t))},m,o&&n.createElement("span",null,o))}}}]);