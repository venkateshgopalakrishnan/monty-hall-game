(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),l=a.n(o),s=a(2),c=a(3),i=a(8),u=a(4),h=a(9),d=(a(20),function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={id:a.props.id,prize:a.props.prize,colourSelectedDoor:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"selectDoor",value:function(){this.props.selectedDoor&&(this.props.selectedDoor(this.props.id),this.setState({colourSelectedDoor:!0}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"door",onClick:function(){return e.selectDoor(e.props.selectedDoor)}},n.a.createElement("br",null),n.a.createElement("h3",null,this.props.id),n.a.createElement("div",{className:"knob"}),this.state.colourSelectedDoor&&n.a.createElement("div",null,n.a.createElement("h2",null,"Selected")))}}]),t}(n.a.Component)),m=a(24),f=a(25),v=a(26),p=(a(21),function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).shuffleArray=function(){for(var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["Car","Goat","Goat"],r=a.length;r>0;)t=Math.floor(Math.random()*r),e=a[--r],a[r]=a[t],a[t]=e;return a},a.state={isPlayClicked:!1,prizes:a.shuffleArray(),userSelectedDoor:null,revealedDoor:null,userWon:null,userSelectedFinal:null},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"userSelection",value:function(e){this.setState({userSelectedDoor:e}),this.state.userSelectedDoor}},{key:"revealDoor",value:function(){var e=this.state.userSelectedDoor,t=this.state.prizes,a="A"===e?"Goat"===t[1]&&"Goat"===t[2]?["B","C"][Math.floor(Math.random()*["B","C"].length)]:"Goat"===t[1]?"B":"Goat"===t[2]?"C":null:"B"===e?"Goat"===t[0]&&"Goat"===t[2]?["A","C"][Math.floor(Math.random()*["A","C"].length)]:"Goat"===t[0]?"A":"Goat"===t[2]?"C":null:"C"===e?"Goat"===t[0]&&"Goat"===t[1]?["A","B"][Math.floor(Math.random()*["A","B"].length)]:"Goat"===t[0]?"A":"Goat"===t[0]?"B":null:null;return this.state.revealedDoor=a,n.a.createElement("h2",null,"Door ",a," has a goat behind it")}},{key:"changeChoice",value:function(){var e=this;this.setState(function(t){return{userSelectedFinal:"A"===t.userSelectedDoor&&"B"===e.state.revealedDoor?"C":"A"===t.userSelectedDoor&&"C"===e.state.revealedDoor?"B":"B"===t.userSelectedDoor&&"A"===e.state.revealedDoor?"C":"B"===t.userSelectedDoor&&"C"===e.state.revealedDoor?"A":"C"===t.userSelectedDoor&&"A"===e.state.revealedDoor?"B":"C"===t.userSelectedDoor&&"B"===e.state.revealedDoor?"A":null}})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,!1===this.state.isPlayClicked?n.a.createElement("button",{class:"button",onClick:function(){return e.setState({isPlayClicked:!0})}},n.a.createElement("span",null,"Play")):n.a.createElement("div",null,"Game has started",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(m.a,{align:"center"},n.a.createElement(f.a,null,n.a.createElement(v.a,{xs:4},n.a.createElement(d,{id:"A",selectedDoor:!this.state.userSelectedDoor&&function(t){return e.userSelection(t)}})),n.a.createElement(v.a,{xs:4},n.a.createElement(d,{id:"B",selectedDoor:!this.state.userSelectedDoor&&function(t){return e.userSelection(t)}})),n.a.createElement(v.a,{xs:4},n.a.createElement(d,{id:"C",selectedDoor:!this.state.userSelectedDoor&&function(t){return e.userSelection(t)}}))),n.a.createElement("br",null),this.state.userSelectedDoor&&!this.state.userSelectedFinal&&n.a.createElement("div",null,n.a.createElement("h4",null,"Now I would like to reveal one door which has a goat behind it"),this.revealDoor(),n.a.createElement("h4",null,"Do you want to change your choice to the other door"),n.a.createElement(f.a,null,n.a.createElement(v.a,{xg:6},n.a.createElement("button",{className:"button",style:{fontSize:"30px"},onClick:function(){return e.changeChoice()}},"Yes")),n.a.createElement(v.a,{xg:6},n.a.createElement("button",{className:"button",style:{fontSize:"30px"},onClick:function(){return e.setState({userSelectedFinal:e.state.userSelectedDoor})}},"No Way _|_")))),null!=this.state.userSelectedFinal&&("A"===this.state.userSelectedFinal&&"Car"===this.state.prizes[0]?this.state.userWon=!0:"B"===this.state.userSelectedFinal&&"Car"===this.state.prizes[1]?this.state.userWon=!0:"C"===this.state.userSelectedFinal&&"Car"===this.state.prizes[2]?this.state.userWon=!0:this.state.userWon=!1),this.state.userWon&&!0===this.state.userWon?n.a.createElement("h2",null,"You won"):!1===this.state.userWon?n.a.createElement("h2",null,"You Lost"):null)))}}]),t}(n.a.Component)),D=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Monty Hall Game"),n.a.createElement("br",null),n.a.createElement(p,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.0607a0d3.chunk.js.map