webpackJsonp([7],{M93x:function(t,n,e){"use strict";var a=e("xJD8"),o=e("t0Iq"),r=e("VU/8"),s=r(a.a,o.a,!1,null,null,null);n.a=s.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o=e("M93x"),r=e("YaEn"),s=e("cTzj"),u=e.n(s),i=e("bqTm"),c=e.n(i),l=e("mtWM"),p=e.n(l),d=e("NYxO");p.a.defaults.withCredentials=!0,a.a.use(c.a),a.a.use(d.a),a.a.use(u.a,{loading:"static/loading-svg/loading-bars.svg",attempt:3}),a.a.config.productionTip=!1;var m=new d.a.Store({state:{nickName:"",cartCount:0},mutations:{updateUserInfo:function(t,n){t.nickName=n},updateCartCount:function(t,n){t.cartCount+=n}}});new a.a({el:"#app",store:m,router:r.a,mounted:function(){this.checkLogin(),this.getCartCount()},methods:{checkLogin:function(){var t=this;p.a.get("http://localhost:4000/users/checkLogin").then(function(n){var n=n.data;"0"==n.status?t.$store.commit("updateUserInfo",n.result):"/goods"!=t.$route.path&&t.$router.push("/goods")})},getCartCount:function(){var t=this;p.a.get("http://localhost:4000/users/getCartCount").then(function(n){var n=n.data;"0"==n.status&&t.$store.commit("updateCartCount",n.result)})}},template:"<App/>",components:{App:o.a}})},YaEn:function(t,n,e){"use strict";var a=e("7+uW"),o=e("/ocq"),r=function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"sGZB"))},s=function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"5Z7Z"))},u=function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"/rwO"))},i=function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"9I81"))},c=function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"JsEr"))};a.a.use(o.a),n.a=new o.a({routes:[{path:"/",name:"home",component:r},{path:"/GoodsList",name:"GoodsList",component:r},{path:"/goods",name:"GoodsList",component:r},{path:"/Cart",name:"Cart",component:s},{path:"/Address",name:"Address",component:u},{path:"/OrderConfirm",name:"OrderConfirm",component:i},{path:"/OrderSuccess",name:"OrderSuccess",component:c}]})},t0Iq:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],r={render:a,staticRenderFns:o};n.a=r},xJD8:function(t,n,e){"use strict";n.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.6301e379319b3887cafc.js.map