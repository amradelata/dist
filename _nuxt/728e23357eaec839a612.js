(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{333:function(e,t,n){"use strict";n.r(t);n(28);var r=n(6),c=n(304),o=n.n(c),d={data:function(){return{countiesData:[]}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://corona.lmao.ninja/countries?sort=%7Bparameter%7D");case 2:n=t.sent,e.countiesData=n.data,Chartkick.options={borderWidth:0,height:"400px",colors:["#00a8ff","#ff9f43","#ee5253","#ee5253","#44bd32","#341f97","#576574","#01a3a4"]};case 5:case"end":return t.stop()}}),t)})))()}},l=n(20),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container is-fluid"},[n("div",{staticClass:"mypiecards"},e._l(e.countiesData,(function(t){return n("div",{key:t.country,staticClass:"mypiecard"},[n("h2",{staticStyle:{"text-align":"center",padding:"35px 0"}},[e._v(e._s(t.country))]),e._v(" "),n("pie-chart",{attrs:{data:[["cases",t.cases],["Today Cases",t.todayCases],["Deaths",t.deaths],["Today Deaths",t.todayDeaths],["recovered",t.recovered],["active",t.active],["critical",t.critical],["casesPerOneMillion",t.casesPerOneMillion]],donut:!0,legend:"bottom",download:"boom"}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);