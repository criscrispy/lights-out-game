(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),s=(n(15),n(1)),i=n(2),l=n(4),u=n(3),h=n(5),p=n(9),d=n(6),m=(n(17),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),f=(n(19),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nrows;t++){for(var n=[],a=0;a<this.props.ncols;a++)n.push(Math.random()<this.props.chanceLightStartsOn);e.push(n)}return e}},{key:"flipCellsAround",value:function(e){console.log("flipping",e);var t=this.props,n=t.ncols,a=t.nrows,r=this.state.board,o=e.split("-").map(Number),c=Object(p.a)(o,2),s=c[0],i=c[1];function l(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}l(s,i),l(s,i-1),l(s,i+1),l(s-1,i),l(s+1,i);var u=r.every(function(e){return e.every(function(e){return!e})});this.setState({board:r,hasWon:u})}},{key:"render",value:function(){var e=this;if(this.state.hasWon)return r.a.createElement("div",{className:"Board-title-winner"},r.a.createElement("div",{className:"Winner"},r.a.createElement("span",{className:"neon-orange"},"YOU"),r.a.createElement("span",{className:"neon-blue"},"WIN")));for(var t=[],n=0;n<this.props.nrows;n++){for(var a=[],o=function(t){var o="".concat(n,"-").concat(t);a.push(r.a.createElement(m,{key:o,isLit:e.state.board[n][t],flipCellsAroundMe:function(){return e.flipCellsAround(o)}}))},c=0;c<this.props.ncols;c++)o(c);t.push(r.a.createElement("tr",{key:n},a))}return r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title-top"},r.a.createElement("div",{className:"neon-orange"},"Lights")),r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,t)),r.a.createElement("div",{className:"Board-title-bottom"},r.a.createElement("div",{className:"neon-blue"},"Out")))}}]),t}(a.Component));f.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:0};var v=f,b=(n(21),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.21ee57aa.chunk.js.map