(this["webpackJsonpmy-app-example"]=this["webpackJsonpmy-app-example"]||[]).push([[0],{50:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),l=a(28),o=a.n(l),s=a(41),u=a(20),m=a(21),d=a(26),p=a(25),h=a(110),v=a(42),f=a.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),b=a(105),E=a(111),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:""},e.handleChange=function(t){e.setState({searchTerm:t.target.value})},e.handleSubmit=function(t){var a=e.state.searchTerm;(0,e.props.onFormSubmit)(a),t.preventDefault()},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{elevation:6,style:{padding:"25px"}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(E.a,{fullWidth:!0,label:"Search...",onChange:this.handleChange})))}}]),a}(n.Component),y=a(109),S=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");console.log(t.id.videoId);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{elevation:6,style:{height:"70%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(b.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(y.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle),r.a.createElement(y.a,{variant:"subtitle1"},t.snippet.channelTitle),r.a.createElement(y.a,{variant:"subtitle2"},t.snippet.description)))},x=function(e){var t=e.video,a=e.onSelectVideo;return r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(b.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"20px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(y.a,{variant:"subtitle1"},r.a.createElement("b",null,t.snippet.title))))},w=function(e){var t=e.videos,a=e.onSelectVideo,n=t.map((function(e,t){return r.a.createElement(x,{onSelectVideo:a,key:t,video:e})}));return r.a.createElement(h.a,{container:!0,spacing:10},n)},V=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.onSelectVideo=function(t){e.setState({selectedVideo:t})},e.handleSubmit=function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("search",{params:{part:"snippet",maxResults:5,key:"AIzaSyD0W0CtP56asYOaaoDnipHtLH8DgYGZ-f0",q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]}),console.log(n.data.items);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.handleSubmit("pdf generation with react and node")}},{key:"render",value:function(){var e=this.state,t=e.selectedVideo,a=e.videos;return r.a.createElement(h.a,{justify:"center",container:!0,spacing:10},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(h.a,{container:!0,spacing:10},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(g,{onFormSubmit:this.handleSubmit})),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement(S,{video:t})),r.a.createElement(h.a,{item:!0,xs:4},r.a.createElement(w,{videos:a,onSelectVideo:this.onSelectVideo})))))}}]),a}(n.Component);c.a.render(r.a.createElement(V,null),document.querySelector("#root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0fd8502c.chunk.js.map