(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(67)},61:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),l=n.n(c),s=n(2),u=n(8),o=n(26),i=n(3),p=n(4),d=n(6),m=n(5),E=n(7),f=n(10),h=n.n(f),b=n(12),y=n(27),v=n.n(y),O=n(28),j=n.n(O).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),w=function(){return function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(b.a)(h.a.mark(function t(n){var a;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get("/users/".concat(e));case 2:a=t.sent,n({type:"FETCH_USER",payload:a.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},k=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.user;return t?r.a.createElement("div",{className:"header",onClick:function(){return e.props.selectedUser(t)}},t.username):null}}]),t}(a.Component),U=Object(s.b)(function(e,t){return{user:e.users.find(function(e){return e.id===t.userId})}},{selectedUser:function(e){return{type:"SELECTED_USER",payload:e}}})(k),S=(n(61),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map(function(e){return r.a.createElement("div",{className:"item item-details",key:e.id},r.a.createElement("i",{className:"large middle aligned icon user",style:{padding:"0 10px 0 10px"}}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"description"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.body)),r.a.createElement("br",null),r.a.createElement(U,{userId:e.userId})))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),t}(a.Component)),C=Object(s.b)(function(e){return{posts:e.posts}},{fetchPostsAndUsers:function(){return function(){var e=Object(b.a)(h.a.mark(function e(t,n){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(w());case 2:v.a.chain(n().posts).map("userId").uniq().forEach(function(e){return t(g(e))}).value();case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}})(S),N=(n(63),"".concat("AIzaSyCmnI-2X-NPX4Bwu_Xb0uwNfX1EX_iEkd0")),x=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.user;if(!e)return null;console.log(this.props);var t=e.address,n=t.street,a=t.suite,c=t.city,l=t.zipcode,s=t.geo,u=e.company,o=u.name,i=u.catchPhrase,p=u.bs,d="https://www.google.com/maps/embed/v1/place?q=".concat(s.lat,"%2C%20").concat(s.lng,"&key=").concat(N);return r.a.createElement("div",{className:"user-info-card-container"},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.props.deselectedUser,style:{float:"right"}},"X")),r.a.createElement("h1",null,e.username),r.a.createElement("h3",null,"aka ",e.name),r.a.createElement("br",null),r.a.createElement("i",{className:"envelope outline icon"}),r.a.createElement("a",{href:"mailto:"},e.email),r.a.createElement("br",null),r.a.createElement("i",{className:"map marker icon"}),"".concat(n),r.a.createElement("br",null),"".concat(a),r.a.createElement("br",null),"".concat(c," ").concat(l),r.a.createElement("br",null),r.a.createElement("h3",null,"says they are currently located at: "),r.a.createElement("br",null),r.a.createElement("strong",null,"".concat(s.lat,"\xb0, ").concat(s.lng,"\xb0")),r.a.createElement("br",null),r.a.createElement("iframe",{name:"gMap",src:d,width:"400",height:"250",style:{border:"0"},allowFullScreen:!0,title:e.username}),r.a.createElement("br",null),r.a.createElement("h3",null,"works at"),r.a.createElement("h3",null,o),r.a.createElement("p",null,i,r.a.createElement("br",null),p))}}]),t}(a.Component),T=Object(s.b)(function(e,t){return{user:e.selectedUser}},{deselectedUser:function(){return{type:"DESELECTED_USER",payload:null}}})(x),_=(n(65),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("h1",null,"displayBlog"),null===this.props.selectedUser?r.a.createElement(C,null):r.a.createElement(T,null))}}]),t}(a.Component)),D=Object(s.b)(function(e){return{selectedUser:e.selectedUser}})(_),L=n(29),R=Object(u.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(L.a)(e),[t.payload]);default:return e}},selectedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECTED_USER":return t.payload;case"DESELECTED_USER":return null;default:return e}}}),I=Object(u.d)(R,Object(u.a)(o.a));l.a.render(r.a.createElement(s.a,{store:I},r.a.createElement(D,null)),document.querySelector("#root"))}},[[30,2,1]]]);
//# sourceMappingURL=main.bfdbfacc.chunk.js.map