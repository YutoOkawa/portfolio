(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],f=0,p=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0195":function(t,e,n){t.exports=n.p+"img/Node.js_logo.89ccb090.svg"},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"115e":function(t,e,n){t.exports=n.p+"img/javascript-1.2d2e31cc.svg"},"155f":function(t,e,n){t.exports=n.p+"img/logo.9405b997.svg"},2239:function(t,e,n){t.exports=n.p+"img/icons8-python.d5bdcb1f.svg"},5475:function(t,e,n){t.exports=n.p+"img/c-2975.00cc5bdb.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{id:"header"}}),n("Top",{attrs:{id:"top"}}),n("Profile",{attrs:{id:"profile"}}),n("Skill",{attrs:{id:"skill"}}),n("Output",{attrs:{id:"output"}})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("h1",[t._v(" "+t._s(t.msg)+" ")])])},r=[],c={name:"Top",data:function(){return{msg:"Welcome to YutoOkawa portfolio!"}}},l=c,u=(n("a279"),n("2877")),f=Object(u["a"])(l,s,r,!1,null,"3ebaf378",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h1",{staticClass:"content-title"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"user-circle"}}),t._v(" "+t._s(t.msg)+" ")],1),n("div",{staticClass:"profile"},t._l(t.contents,(function(e,o){return n("div",{key:o,staticClass:"content"},[n("h2",{staticClass:"profile_title"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:e.icon}}),t._v(" "+t._s(e.title)+" ")],1),null!=e.url?n("p",[n("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.text)+" ")])]):n("p",{staticClass:"profile_text"},[t._v(" "+t._s(e.text)+" ")])])})),0)])},v=[],m={name:"Profile",data:function(){return{msg:"Profile",text:"暗号とFIDOについて勉強しています。",contents:[{title:"Name",icon:"pen-alt",text:"大川 悠人 (Ookawa Yuto)"},{title:"University",icon:"university",text:"立命館大学院 情報理工学研究科"},{title:"Laboratory",icon:"tag",text:"サイバーセキュリティ研究室",url:"http://www.cysec.cs.ritsumei.ac.jp/"},{title:"Research Keyword",icon:"key",text:"FIDO, WebAuthn, 属性ベース署名"},{title:"Github",icon:["fab","github"],text:"YutoOkawa",url:"https://github.com/YutoOkawa/"},{title:"Facebook",icon:["fab","facebook"],text:"Ookawa Yuto",url:"https://www.facebook.com/ookawa.yuuto.1/"}]}}},h=m,_=(n("d50e"),Object(u["a"])(h,d,v,!1,null,"44893a7c",null)),b=_.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h1",{staticClass:"content-title"},[t._v(" "+t._s(t.msg)+" ")]),n("div",{staticClass:"skill"},t._l(t.skills,(function(e,o){return n("div",{key:o,staticClass:"content"},[n("h2",{staticClass:"skill_name"},[t._v(" "+t._s(e.name)+" ")]),n("img",{staticClass:"lang_icon",attrs:{src:e.logo}}),n("br"),n("p",{staticClass:"skill_text"},[t._v(" "+t._s(e.text)+" ")])])})),0)])},x=[],k={name:"Skill",data:function(){return{msg:"Skill List",skills:[{name:"Golang",logo:n("8baf"),text:"今一番熱心に取り組んでいます。プログラミング言語Go完全入門を一通り勉強し、現在はWebアプリケーションを作成するべく勉強を続けています。"},{name:"Python",logo:n("2239"),text:"楕円曲線暗号でよく用いられるペアリング演算を用いた暗号アルゴリズムの実装や、簡単なプログラムなどに使っています。そのプログラムの書きやすさから、よく利用しています。"},{name:"C",logo:n("5475"),text:"大学1回生でプログラミングを始めて最初に習った言語です。授業内演習で擬似シェルのプログラムを書きました。また、スタックオーバーフロー等のCに潜む脆弱性を付く実験を行いました。"},{name:"C++",logo:n("daa8"),text:"ペアリング演算の高速なライブラリであるmclを用いるために現在勉強しています。また、Arduinoを用いた実験をするためにも使用しています。"},{name:"Java",logo:n("dde4"),text:"オブジェクト指向を学ぶ授業の演習でポーカーゲームを作成しました。また、学部3回生の時にAndroidアプリをJavaで作成しました。"},{name:"JavaScript",logo:n("115e"),text:"卒業研究にて扱った、FIDO2(WebAuthn)を利用するために勉強しました。"},{name:"Node.js",logo:n("0195"),text:"卒業研究にて提案手法のFIDOに対応した認証サーバを作成しました。WebAuthnの仕様に基づいてFIDO2の実装を行うことができます。"},{name:"Vue.js",logo:n("155f"),text:"このポートフォリオはVue.jsで作成しました。フロントエンドの知識はまだ浅いですが、このポートフォリオを通して学んでいきたいと思っています。"},{name:"Git",logo:n("9bf0"),text:"ある程度のプロジェクト管理をこなすことができます。このポートフォリオの開発にも、Gitを用いて管理しています。また、PR方式の開発手法をグループで行ったことがあります。"}]}}},y=k,C=(n("d860"),Object(u["a"])(y,g,x,!1,null,"3f27671f",null)),O=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h1",{staticClass:"content-title"},[t._v(" "+t._s(t.msg)+" ")]),n("div",{staticClass:"output"},t._l(t.outputs,(function(e,o){return n("div",{key:o,staticClass:"content"},[n("h2",{staticClass:"output_title"},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.name))])]),n("p",{staticClass:"output_text"},[t._v(" "+t._s(e.text))]),n("h2",{staticClass:"output_title"},[t._v("使用言語")]),n("p",{staticClass:"output_langtext"},[t._v(t._s(e.lang))])])})),0)])},S=[],j={name:"Output",data:function(){return{msg:"Output List",outputs:[{name:"Attribute-Based Signature",text:"属性ベース署名の実行サンプルプログラムです。Pythonで属性ベース署名のアルゴリズムを実装し、Node.jsから呼びだしています。ペアリング演算には、Pythonのライブラリである、Charm-Cryptoを使用しています。",url:"https://github.com/YutoOkawa/node_ABS",lang:"Python, Node.js"},{name:"My Portfolio Site",text:"このポートフォリオです。初めてのフロントエンド作成のため、Github上にてポートフォリオを公開されている方々のコードを参考に作成しました。",url:"https://yutookawa.github.io/portfolio",lang:"Vue.js"},{name:"partDownloader",text:"メルカリの「プログラミング言語Go完全入門」にて取り組んだ課題で作成したプログラムです。goroutineを用いて、Web上のファイルを高速に取得することができます。",url:"https://github.com/YutoOkawa/partDownloader",lang:"Golang"},{name:"属性ベース暗号方式を用いたFIDO2の拡張による代理認証の実現",text:"SPT2020(オンライン開催)にて発表した論文です。FIDO認証に属性ベース暗号方式を組み込むことで、ユーザの所持する属性によるアクセス制御が可能としました。",url:"https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=203398&item_no=1&page_id=13&block_id=8",lang:"日本語"}]}}},P=j,D=(n("faf9"),Object(u["a"])(P,w,S,!1,null,"167550fb",null)),G=D.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-inner"},[n("h1",{staticClass:"title"},[t._v("Yuto's Profile")]),n("div",{staticClass:"nav"},[n("a",{staticClass:"nav-button",attrs:{href:"#"},on:{click:function(e){return t.clickSmoothScroll("#top")}}},[t._v("Top")]),n("a",{staticClass:"nav-button",attrs:{href:"#"},on:{click:function(e){return t.clickSmoothScroll("#profile")}}},[t._v("Profile")]),n("a",{staticClass:"nav-button",attrs:{href:"#"},on:{click:function(e){return t.clickSmoothScroll("#skill")}}},[t._v("Skill")]),n("a",{staticClass:"nav-button",attrs:{href:"#"},on:{click:function(e){return t.clickSmoothScroll("#output")}}},[t._v("Output")])])])])},A=[],F={methods:{clickSmoothScroll:function(t){event.preventDefault(),this.$SmoothScroll(document.querySelector(t),900,null,null,"y")}}},T=F,Y=(n("8baf9"),Object(u["a"])(T,$,A,!1,null,null,null)),I=Y.exports,E=(n("f5df1"),{name:"App",components:{Header:I,Top:p,Profile:b,Skill:O,Output:G},methods:{clickSmoothScroll:function(t){event.preventDefault(),this.$SmoothScroll(document.querySelector(t),800,null,null,"y")}}}),W=E,J=(n("034f"),Object(u["a"])(W,a,i,!1,null,null,null)),M=J.exports,N=n("c4e8"),L=n.n(N),q=n("ecee"),B=n("c074"),V=n("f2d1"),H=n("ad3d");q["c"].add(B["e"],B["b"],B["d"],B["c"],B["a"],V["b"],V["a"]),o["a"].component("font-awesome-icon",H["a"]),o["a"].use(L.a),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(M)}}).$mount("#app")},6860:function(t,e,n){},"78eb":function(t,e,n){},"7aa5":function(t,e,n){},"82ac":function(t,e,n){},"85ec":function(t,e,n){},"8baf":function(t,e,n){t.exports=n.p+"img/Go-Logo_Blue.0c18ba19.svg"},"8baf9":function(t,e,n){"use strict";var o=n("6860"),a=n.n(o);a.a},"9bf0":function(t,e,n){t.exports=n.p+"img/git-icon.1190a19c.svg"},a279:function(t,e,n){"use strict";var o=n("7aa5"),a=n.n(o);a.a},d50e:function(t,e,n){"use strict";var o=n("78eb"),a=n.n(o);a.a},d860:function(t,e,n){"use strict";var o=n("d95a"),a=n.n(o);a.a},d95a:function(t,e,n){},daa8:function(t,e,n){t.exports=n.p+"img/c.5be9bde4.svg"},dde4:function(t,e,n){t.exports=n.p+"img/java-4.bcfad0f2.svg"},faf9:function(t,e,n){"use strict";var o=n("82ac"),a=n.n(o);a.a}});
//# sourceMappingURL=app.5bd617db.js.map