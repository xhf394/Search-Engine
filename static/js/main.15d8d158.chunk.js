(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(64)},36:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n,i=a(0),r=a.n(i),o=a(27),s=a.n(o),c=(a(36),a(3)),l=a(4),u=a(7),m=a(5),d=a(1),h=a(6),f=a(8),v=a(11),b=a(17),S=a(15),p=a.n(S),g=(a(54),i.Component,a(55),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.onChange,n=e.onSubmit,i=e.totalHits;return r.a.createElement("div",{className:"inactive-input-wrapper"},r.a.createElement("div",{className:"inactive-header-wrapper"},r.a.createElement("p",{className:"inactive-header-intro"},"Our Conquest is the Sea of Stars "),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",{className:"inactive-input-form-wrapper"},r.a.createElement("input",{onChange:a,className:"inactive-input-text",placeholder:"Key Words"}),r.a.createElement("button",{className:"inactive-search-btn",type:"submit"},t)))),r.a.createElement("span",{className:"inactive-input-counter"}," showing ",i," works"))}}]),t}(i.Component)),E=a(10),N=(a(56),function(e){var t=e.onSubmit,a=e.onChange,n=e.value,o=(e.totalHits,e.children),s=Object(i.useState)(!1),c=Object(E.a)(s,2),l=c[0],u=c[1],m=["fixed-input-text"],d=["fixed-search-btn"];return l&&(m.push("fixed-input-text-focused"),d.push("fixed-search-btn-focused")),r.a.createElement("div",{className:"fixed-search-bar-flex"},r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"fixed-search-bar-wrapper"},r.a.createElement("input",{onChange:a,value:n,className:m.join(" "),onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},placeholder:"Key Words"}),r.a.createElement("button",{className:d.join(" "),type:"submit"},o))))}),A=(a(57),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.children,n=e.className,i=void 0===n?"":n;return r.a.createElement("button",{onClick:t,type:"button",className:i},a)}}]),t}(i.Component)),y=function(e){var t=e.onSort,a=e.sortKey,n=e.activeSortKey,i=e.children,o=["button-primary","button-inline"];return a===n&&o.push("button-active"),r.a.createElement(A,{onClick:function(){return t(a)},sortKey:a,className:o.join(" ")},i)},j=a(30),O=function(e,t){return function(a){return function(n){return e(n)?r.a.createElement(t,null):r.a.createElement(a,n)}}},T=Object(j.a)(O(function(e){return e.isLoading},function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Loading..."))}),(n=function(e){return!e.list},function(e){return function(t){return n(t)?null:r.a.createElement(e,t)}}),O(function(e){return!e.listForButtonConditionalRendering.length&&e.list.length===e.totalHits},function(){return r.a.createElement("div",null,r.a.createElement("p",null," No More to show. "))}))(A),w=a(13),x=(a(60),{RELEVANCE:function(e){return e},TITLE:function(e){return Object(w.sortBy)(e,function(e){return e.data[0].title})},DATE:function(e){return Object(w.sortBy)(e,function(e){return new Date(e.data[0].date_created)})},CENTER:function(e){return Object(w.sortBy)(e,function(e){return e.data[0].center})}}),C=function(e){var t=e.item,a=t.data,n=t.links,i=a[0],o=i.title,s=i.date_created,c=n[0].href;return r.a.createElement("div",{className:"table-grid-item"},r.a.createElement("div",{className:"table-grid-item-pic"},r.a.createElement("img",{src:c,alt:""})),r.a.createElement("div",{className:"table-grid-item-content"},r.a.createElement("h4",{className:"table-grid-item-title"}," ",o," "),r.a.createElement("span",{className:"table-grid-item-date"}," ",s," ")))},k=function(e){var t,a,n,o,s=Object(i.useRef)(),c=Object(i.useState)({width:0,height:0}),l=Object(E.a)(c,2),u=l[0],m=l[1],d=e.sortedList,h=null,f=function(){s.current&&m({width:s.current.offsetWidth,height:s.current.offsetHeight})};return Object(i.useLayoutEffect)(function(){f()},[]),window.addEventListener("resize",function(){clearInterval(h),h=setTimeout(f,100)}),u.width>=940?(t=d.filter(function(e,t){return t%4===0}),a=d.filter(function(e,t){return t%4===1}),n=d.filter(function(e,t){return t%4===2}),o=d.filter(function(e,t){return t%4===3}),r.a.createElement("div",{className:"table-grid",ref:s},r.a.createElement("div",{className:"table-grid-column"},t.map(function(e){return r.a.createElement(C,{item:e,key:e.data[0].nasa_id})})),r.a.createElement("div",{className:"table-grid-column"},a.map(function(e){return r.a.createElement(C,{item:e,key:e.data[0].nasa_id})})),r.a.createElement("div",{className:"table-grid-column"},n.map(function(e){return r.a.createElement(C,{item:e,key:e.data[0].nasa_id})})),r.a.createElement("div",{className:"table-grid-column"},o.map(function(e){return r.a.createElement(C,{item:e,key:e.data[0].nasa_id})})))):u.width>=710&&u.width<=939?(t=d.filter(function(e,t){return t%2===0}),a=d.filter(function(e,t){return t%2===1}),r.a.createElement("div",{className:"table-grid",ref:s},r.a.createElement("div",{className:"table-grid-column"},t.map(function(e){return r.a.createElement(C,{item:e,key:e.data[0].nasa_id})})),r.a.createElement("div",{className:"table-grid-column"},a.map(function(e){return r.a.createElement(C,{item:e,key:e.data[0].nasa_id})})))):u.width<=709?r.a.createElement("div",{ref:s,className:"table-grid"},d.map(function(e){return r.a.createElement(C,{item:e,key:e.data[0].nasa_id})})):void 0},L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isSortReverse:!1,sortKey:"RELEVANCE"},a.onSort=a.onSort.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onSort",value:function(e){var t=e===this.state.sortKey&&!this.state.isSortReverse;this.setState({sortKey:e,isSortReverse:t})}},{key:"render",value:function(){var e=this.props.list,t=this.state.sortKey,a=x[t](e);return r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table-btn-wrapper"},r.a.createElement(y,{onSort:this.onSort,sortKey:"RELEVANCE",activeSortKey:t},"Relevance"),r.a.createElement(y,{onSort:this.onSort,sortKey:"TITLE",activeSortKey:t},"Title"),r.a.createElement(y,{onSort:this.onSort,sortKey:"DATE",activeSortKey:t},"Date"),r.a.createElement(y,{onSort:this.onSort,sortKey:"CENTER",activeSortKey:t},"Center")),r.a.createElement(k,{sortedList:a}))}}]),t}(i.Component),K=(a(61),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={resultsNASA:null,isLoadingNASA:!1,searchText:"star",searchKeyText:"",isAddingPageNASA:!0,isHover:!1,scroll:null,isRedirecting:!1},a.onSearchChange=a.onSearchChange.bind(Object(d.a)(a)),a.onSearchSubmit=a.onSearchSubmit.bind(Object(d.a)(a)),a.needsToFetchStories=a.needsToFetchStories.bind(Object(d.a)(a)),a.onDismiss=a.onDismiss.bind(Object(d.a)(a)),a.fetchTopNASAStories=a.fetchTopNASAStories.bind(Object(d.a)(a)),a.setTopNASAStories=a.setTopNASAStories.bind(Object(d.a)(a)),a.onMouseLeave=a.onMouseLeave.bind(Object(d.a)(a)),a.onMouseEnter=a.onMouseEnter.bind(Object(d.a)(a)),a.onScrollFixNav=a.onScrollFixNav.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.searchText;this.setState({searchKeyText:e}),this.fetchTopNASAStories(e),window.addEventListener("scroll",this.onScrollFixNav)}},{key:"fetchTopNASAStories",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.setState({isLoadingNASA:!0});var n=this.state,i=n.resultsNASA,r=n.searchKeyText;this.state.isAddingPageNASA&&p()("https://images-api.nasa.gov/search?q=".concat(e,"&media_type=image&page=").concat(a)).then(function(e){return t.setTopNASAStories(e.data.collection,a)}).catch(function(e){return console.log(e)}),this.state.isAddingPageNASA||this.setTopNASAStories(i[r],a)}},{key:"setTopNASAStories",value:function(e,t){console.log(e),console.log(t);var a=e.items,n=e.metadata;console.log(a),console.log(n),this.setState(function(e,t,a){return function(n){var i=n.searchKeyText,r=n.resultsNASA,o=e.splice(0,20),s=r&&r[i]?r[i].itemsForRendering:[],c=[].concat(Object(b.a)(s),Object(b.a)(o));return e.length?e.length?{resultsNASA:Object(v.a)({},r,Object(f.a)({},i,{itemsForRendering:c,items:e,metadata:t,page:a})),isLoadingNASA:!1,isAddingPageNASA:!1}:void 0:{resultsNASA:Object(v.a)({},r,Object(f.a)({},i,{itemsForRendering:c,page:a+1,items:e,metadata:t})),isLoadingNASA:!1,isAddingPageNASA:!0}}}(a,n,t))}},{key:"onSearchChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"onSearchSubmit",value:function(e){var t=this,a=this.state.searchText;if(this.setState({searchKeyText:a,isLoadingNASA:!0,isRedirecting:!0}),this.needsToFetchStories(a)){p()("https://images-api.nasa.gov/search?q=".concat(a,"&media_type=image&page=").concat(1)).then(function(e){return t.setTopNASAStories(e.data.collection,1)}).catch(function(e){return console.log(e)})}e.preventDefault()}},{key:"needsToFetchStories",value:function(e){return!this.state.resultsNASA[e]}},{key:"onDismiss",value:function(e){var t=this.state,a=t.searchKey,n=t.results,i=n[a],r=i.hits,o=i.page;console.log(e);var s=r.filter(function(t){return t.objectID!==e});console.log(s),this.setState({results:Object(v.a)({},n,Object(f.a)({},a,{hits:s,page:o}))})}},{key:"onMouseEnter",value:function(){this.setState({isHover:!0})}},{key:"onMouseLeave",value:function(){this.setState({isHover:!1})}},{key:"onScrollFixNav",value:function(){this.setState({scroll:window.pageYOffset})}},{key:"render",value:function(){var e=this;console.log(this.state.resultsNASA);var t=this.state,a=t.searchText,n=t.resultsNASA,i=t.searchKeyText,o=t.isLoadingNASA,s=t.isHover,c=t.isRedirecting,l=t.scroll,u=n&&n[i]&&n[i].itemsForRendering||[],m=n&&n[i]&&n[i].page||1,d=n&&n[i]&&n[i].items||[],h=n&&n[i]&&n[i].metadata&&n[i].metadata.total_hits||0,f=["btn-load-more"],v=["inactive-search-bar"];return s&&f.push("btn-load-more-active"),l>=66&&(v=["search-bar-fixed"]),r.a.createElement("div",{className:"nasa-wrapper"},c?r.a.createElement("div",null,r.a.createElement("div",{className:"search-bar-fixed"},r.a.createElement(N,{onChange:this.onSearchChange,onSubmit:this.onSearchSubmit,value:a,totalHits:h}),r.a.createElement("div",{className:"fixed-search-bar-text"},"Our Conquest is the Sea of Stars ","\u2734")),r.a.createElement("h1",{className:"seach-bar-fixed-headline",style:{paddingTop:"80px"}},i," Photos")):r.a.createElement("div",{className:"header inactive-header"},r.a.createElement(g,{onChange:this.onSearchChange,onSubmit:this.onSearchSubmit,value:a,totalHits:h}),r.a.createElement("div",{className:v.join(" ")},r.a.createElement(N,{onChange:this.onSearchChange,onSubmit:this.onSearchSubmit,value:a,totalHits:h}),r.a.createElement("div",{className:"fixed-search-bar-text"},"Our Conquest is the Sea of Stars ","\u2734"))),n&&n[i]&&n[i].itemsForRendering&&r.a.createElement(L,{list:u,onDismiss:this.onDismiss,searchText:a}),r.a.createElement("div",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,className:"load-button-wrapper"},r.a.createElement(T,{list:u,isLoading:o,onClick:function(){return e.fetchTopNASAStories(i,m)},searchText:a,listForButtonConditionalRendering:d,totalHits:h,className:f.join(" ")},"Load More")))}}]),t}(i.Component)),R=(a(62),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(K,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(){var e=a(63),t=e.spawn;e.spawn=function(){return console.log("spawn called"),console.log(arguments),t.apply(this,arguments)}}(),s.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.15d8d158.chunk.js.map