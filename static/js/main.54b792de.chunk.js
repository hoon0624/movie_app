(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{18:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/movie.86c7dd70.png"},35:function(e,t,a){e.exports=a(67)},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),i=a.n(s),c=a(11),o=a(12),l=a(6),m=a.n(l),u=a(14),v=a(7),p=a(8),d=a(10),g=a(9),E=a(15),_=a.n(E);a(58);var y=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,i=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:i,genres:o}}},r.a.createElement("div",{className:"movies__movie"},r.a.createElement("img",{src:i,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},r.a.createElement("li",{key:0,className:"genres__genre"},o[0]),r.a.createElement("li",{key:1,className:"genres__genre"},o[1]),r.a.createElement("li",{key:2,className:"genres__genre"},o[2])),r.a.createElement("p",{className:"movie__summary"},s.slice(0,300)+" ...")))))},f=(a(18),function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component)),h=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=download_count");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component),N=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=like_count");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component),b=(a(64),a(34)),k=a.n(b);var j=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("img",{src:k.a,alt:"logo",class:"logo"}),r.a.createElement("ul",{className:"navv"},r.a.createElement("li",null,"SORT BY: "),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Downloads")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/rating"},"Rating")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/likes"},"Likes"))))},O=(a(65),function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?(console.log(e),r.a.createElement("div",{className:"details__container"},r.a.createElement("div",{className:"details__poster"},r.a.createElement("img",{src:e.state.poster,alt:e.state.title,title:e.state.title})),r.a.createElement("span",null,e.state.title),r.a.createElement("span",{className:"details__year"},e.state.year),r.a.createElement("span",{className:"details__genres"},e.state.genres.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("span",null,e.state.summary))):null}}]),a}(r.a.Component));a(66);var x=function(){return r.a.createElement(c.a,null,r.a.createElement(j,null),r.a.createElement(o.a,{path:"/",exact:!0,component:h}),r.a.createElement(o.a,{path:"/rating",component:f}),r.a.createElement(o.a,{path:"/likes",component:N}),r.a.createElement(o.a,{path:"/movie/:id",component:O}))};i.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.54b792de.chunk.js.map