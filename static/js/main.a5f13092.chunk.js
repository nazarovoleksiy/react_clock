(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),r=n(4),s=n(1),u=(n(12),n(0));function d(t){return t.toUTCString().slice(-12,-4)}var h=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date},t.clockId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.clockId=window.setInterval((function(){t.setState({today:new Date}),window.console.info(d(t.state.today))}),1e3)}},{key:"componentDidUpdate",value:function(t){this.props.clockName!==t.clockName&&window.console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.clockId)}},{key:"render",value:function(){var t=this.props.clockName,e=this.state.today;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:d(e)})]})}}]),n}(s.Component);function k(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var m=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=0,t.handleLeftClick=function(e){e.preventDefault(),t.setState({hasClock:!0})},t.handleRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:k()})}),3300),document.addEventListener("click",this.handleLeftClick),document.addEventListener("contextmenu",this.handleRightClick)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId),document.removeEventListener("click",this.handleLeftClick),document.removeEventListener("contextmenu",this.handleRightClick)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(h,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a5f13092.chunk.js.map