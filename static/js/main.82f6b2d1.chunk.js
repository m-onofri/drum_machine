(this.webpackJsonpdrum_machine=this.webpackJsonpdrum_machine||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),s=(n(13),n(1)),d=n(2),i=n(4),m=n(3),u=n(5),p=[{id:"Heater-1",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",button:"Q",keyCode:81},{id:"Dsc_Oh",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",button:"W",keyCode:87},{id:"Heater-6",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",button:"E",keyCode:69},{id:"Side_stick_1",src:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",button:"A",keyCode:65},{id:"Brk_Snr",src:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",button:"S",keyCode:83},{id:"Heater-3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",button:"D",keyCode:68},{id:"Kick_n_Hat",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",button:"Z",keyCode:90},{id:"RP4_Kick_1",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",button:"X",keyCode:88},{id:"punchy_kick_1",src:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",button:"C",keyCode:67}],l=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handlePress=function(e){e.keyCode===n.props.drumPad.keyCode&&(n.makeSound(),n.props.displaySound(n.props.drumPad.id))},n.handleClick=function(e){var t=e.target.id,a=p.filter((function(e){return e.id===t}))[0].button,o=document.getElementById(a);n.makeSound(o),n.props.displaySound(t)},n.makeSound=function(e){var t=document.getElementById(n.props.drumPad.button);t.currentTime=0,t.play()},n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handlePress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handlePress)}},{key:"render",value:function(){var e=this;return o.a.createElement("button",{id:this.props.drumPad.id,className:"is-primary button drum-pad",onClick:function(t){return e.handleClick(t)}},o.a.createElement("audio",{class:"clip",id:this.props.drumPad.button,src:this.props.drumPad.src}),this.props.drumPad.button)}}]),t}(o.a.Component),h=(n(14),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={pad:"Let's play!"},n.displaySound=function(e){n.setState({pad:e})},n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"drum-machine"},o.a.createElement("div",{id:"display",className:"box"},this.state.pad),o.a.createElement("div",{id:"columns pads"},p.map((function(t){return o.a.createElement(l,{drumPad:t,displaySound:e.displaySound})}))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.82f6b2d1.chunk.js.map