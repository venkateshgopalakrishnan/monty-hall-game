(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,r){e.exports=r(25)},,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var o=r(0),a=r.n(o),n=r(12),l=r.n(n),s=r(2),c=r(3),u=r(8),i=r(4),d=r(9),h=(r(20),function(){var e="M o n t y           H a l l           G a m e".split(" "),t=0;return a.a.createElement("div",{className:"header"},e.map(function(e){return t+=1,a.a.createElement("span",{key:t,className:"letter","data-letter":e},e)}))}),m=(r(21),function(e){function t(){var e,r;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return(r=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={id:r.props.id,prize:r.props.prize,colourSelectedDoor:!1},r}return Object(d.a)(t,e),Object(c.a)(t,[{key:"selectDoor",value:function(){this.props.selectedDoor&&(this.props.selectedDoor(this.props.id),this.setState({colourSelectedDoor:!0}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:this.props.colorDoor,onClick:function(){return e.selectDoor(e.props.selectedDoor)}},a.a.createElement("br",null),a.a.createElement("h3",null,this.props.id),a.a.createElement("div",{className:"knob"}),a.a.createElement("br",null))}}]),t}(a.a.Component)),f=r(27),p=r(28),D=r(29),S=(r(22),function(e){function t(){var e,r;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(r=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).shuffleArray=function(){for(var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["Car","Goat","Goat"],o=r.length;o>0;)t=Math.floor(Math.random()*o),e=r[--o],r[o]=r[t],r[t]=e;return r},r.state={doors:["A","B","C"],prizes:r.shuffleArray(),userSelectedDoor:null,revealedDoor:null,userWon:null,prizeDoor:null},r.renderDoors=function(){return r.state.doors.map(function(e){return a.a.createElement(f.a,{xs:4,key:e},a.a.createElement(m,{id:e,selectedDoor:!r.state.userSelectedDoor&&function(e){return r.userSelection(e)},colorDoor:r.state.userSelectedDoor===e?"doorSelected":"door"}))})},r.userSelection=function(e){r.setState({userSelectedDoor:e})},r.revealDoor=function(){var e=r.state.userSelectedDoor,t=r.state.prizes,o="A"===e?"Goat"===t[1]&&"Goat"===t[2]?["B","C"][Math.floor(Math.random()*["B","C"].length)]:"Goat"===t[1]?"B":"Goat"===t[2]?"C":null:"B"===e?"Goat"===t[0]&&"Goat"===t[2]?["A","C"][Math.floor(Math.random()*["A","C"].length)]:"Goat"===t[0]?"A":"Goat"===t[2]?"C":null:"C"===e?"Goat"===t[0]&&"Goat"===t[1]?["A","B"][Math.floor(Math.random()*["A","B"].length)]:"Goat"===t[0]?"A":"Goat"===t[0]?"B":null:null;r.setState({revealedDoor:o})},r.changeChoice=function(){r.setState(function(e){return{userSelectedDoor:"A"===e.userSelectedDoor&&"B"===r.state.revealedDoor?"C":"A"===e.userSelectedDoor&&"C"===r.state.revealedDoor?"B":"B"===e.userSelectedDoor&&"A"===r.state.revealedDoor?"C":"B"===e.userSelectedDoor&&"C"===r.state.revealedDoor?"A":"C"===e.userSelectedDoor&&"A"===r.state.revealedDoor?"B":"C"===e.userSelectedDoor&&"B"===r.state.revealedDoor?"A":null}}),r.findResult(!0)},r.keepChoice=function(){r.setState(function(e){return{userSelectedDoor:e.userSelectedDoor}}),r.findResult(!1)},r.findResult=function(e){!1===e?"A"===r.state.userSelectedDoor&&"Car"===r.state.prizes[0]?r.setState({userWon:!0}):"B"===r.state.userSelectedDoor&&"Car"===r.state.prizes[1]?r.setState({userWon:!0}):"C"===r.state.userSelectedDoor&&"Car"===r.state.prizes[2]?r.setState({userWon:!0}):r.setState({userWon:!1}):"A"===r.state.userSelectedDoor&&"Car"===r.state.prizes[0]?r.setState({userWon:!1}):"B"===r.state.userSelectedDoor&&"Car"===r.state.prizes[1]?r.setState({userWon:!1}):"C"===r.state.userSelectedDoor&&"Car"===r.state.prizes[2]?r.setState({userWon:!1}):r.setState({userWon:!0})},r.revealResult=function(){return!0===r.state.userWon?a.a.createElement("h2",{style:{color:"white"}},"You won"):!1===r.state.userWon?a.a.createElement("h2",{style:{color:"white"}},"You Lost"):null},r.refreshPage=function(){r.setState({doors:["A","B","C"],prizes:r.shuffleArray(),userSelectedDoor:null,revealedDoor:null,userWon:null})},r}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{align:"center",style:{height:"100vh",width:"100%"}},a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(p.a,{align:"center"},a.a.createElement(D.a,null,this.renderDoors()),a.a.createElement("br",null),null!=this.state.userSelectedDoor&&!this.state.revealedDoor&&a.a.createElement("button",{className:"button",onClick:this.revealDoor},"Reveal Door"),a.a.createElement("br",null),this.state.revealedDoor&&null!=this.state.userSelectedDoor&&null==this.state.userWon&&a.a.createElement("div",{style:{color:"white"}},a.a.createElement("h1",null," Door ",this.state.revealedDoor," has a goat behind it"),a.a.createElement("h4",null,"Do you want to change your choice to the other door"),a.a.createElement(D.a,null,a.a.createElement(f.a,{xs:6},a.a.createElement("button",{className:"button",style:{fontSize:"30px"},onClick:this.changeChoice},a.a.createElement("span",null,"Yes"))),a.a.createElement(f.a,{xs:6},a.a.createElement("button",{className:"button",style:{fontSize:"30px"},onClick:this.keepChoice},a.a.createElement("span",null,"No Way _|_"))))),null!=this.state.userWon&&this.revealResult(),null!=this.state.userWon&&a.a.createElement("button",{className:"button",onClick:this.refreshPage},a.a.createElement("span",null,"Play Again"))))}}]),t}(a.a.Component)),v=(r(23),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"text-center",style:{height:"100%",width:"100%"}},a.a.createElement(h,null),a.a.createElement("br",null),a.a.createElement(S,null))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(24);l.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.133f6000.chunk.js.map