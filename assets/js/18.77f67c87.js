(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{518:function(e,t,i){},528:function(e,t,i){"use strict";i(518)},537:function(e,t,i){"use strict";i.r(t);i(147),i(229),i(230),i(231);var a={name:"AlgoliaSearchBox",props:["options"],data:()=>({placeholder:void 0}),watch:{$lang(e){this.update(this.options,e)},options(e){this.update(e,this.$lang)}},mounted(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize(e,t){Promise.all([Promise.all([i.e(0),i.e(9)]).then(i.t.bind(null,535,7)),Promise.all([i.e(0),i.e(9)]).then(i.t.bind(null,536,7))]).then(([i])=>{i=i.default;const{algoliaOptions:a={}}=e;i(Object.assign({},e,{inputSelector:"#algolia-search-input",algoliaOptions:{...a,facetFilters:["lang:"+t].concat(a.facetFilters||[])},handleSelected:(e,t,i)=>{const{pathname:a,hash:s}=new URL(i.url),l=a.replace(this.$site.base,"/"),n=decodeURIComponent(s);this.$router.push(`${l}${n}`)}}))})},update(e,t){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(e,t)}}},s=(i(528),i(40)),l=Object(s.a)(a,(function(){var e=this._self._c;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);t.default=l.exports}}]);