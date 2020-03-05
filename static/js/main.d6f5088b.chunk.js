(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(e,t,n){e.exports=n(72)},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(48),o=n.n(i),l=(n(62),n(12)),s=n(13),c=n(21),u=n(19),p=n(22),m=n(41),d=(n(63),n(11)),h=n(18),f={STUDY_QUALITY:[{prompt:"How enjoyable is having a lecture in the following buildings?",type:"RATING",filter:["building"]},{prompt:"How easy/hard is it to find lecture rooms, exits, or bathrooms?",type:"RATING",filter:["building"]},{prompt:"How noisy are the following buildings?",type:"RATING",filter:["building"]},{prompt:"How comfortable, in general, are the rooms in the following buildings?",type:"RATING",filter:["building"]},{prompt:"How appropriate for group meetings are the following buildings?",type:"RATING",filter:["building"]},{prompt:"How appropriate for studying alone are the following buildings?",type:"RATING",filter:["building"]},{prompt:"Where did you find yourself working on your IQP and/or MQP the most?",type:"CHOOSE_MULTIPLE",filter:["building","poi","residenceHall"]},{prompt:"Where did you find yourself studying for exams the most?",type:"CHOOSE_MULTIPLE",filter:["building","poi","residenceHall"]},{prompt:"What is your favorite spot for studying for finals/midterms?",type:"CHOOSE_ONE",filter:["building","poi","residenceHall"]},{prompt:"What is your LEAST favorite spot for studying for finals/midterms?",type:"CHOOSE_ONE",filter:["building","poi","residenceHall"]},{prompt:"How likely are you to skip a class in the following buildings?",type:"RATING",filter:["building"]}],LIVING_AND_EATING:[{prompt:"Best / worst places to have a meal at?",type:"RATING",filter:["building","poi","residenceHall"]},{prompt:"Best / worst places to relax after class?",type:"RATING",filter:["building","poi","residenceHall"]},{prompt:"Best / worst places to chill with friends?",type:"RATING",filter:["building","poi","residenceHall"]},{prompt:"Best / worst places to do extra-curriculars (club meetings, exercise, etc)?",type:"RATING",filter:["building","poi","residenceHall"]},{prompt:"Best / worst places to nap?",type:"RATING",filter:["building","poi","residenceHall"]},{prompt:"Which places did you spend the most time at this school year?",type:"RATING",filter:["building","poi","residenceHall"]},{prompt:"Rate each dining hall",type:"RATING",filter:["poi"]}],MISC:[{prompt:"Best / worst places to poop at?",type:"RATING",filter:["building","residenceHall"]},{prompt:"How good looking are the students that frequent these locations?",type:"RATING",filter:["building","poi"]},{prompt:"Rate the smell of each location",type:"RATING",filter:["building","poi","residenceHall"]},{prompt:"Most / least photogenic locations on campus",type:"RATING",filter:["building","poi","residenceHall"]},{prompt:"Best / worst places to be at after midnight",type:"RATING",filter:["building","poi","residenceHall"]}]},g=[{prompt:"What grade level are you currently?",type:"CHOOSE_ONE",inputOptions:["Freshman","Sophomore","Junior","Senior or 4th+ year undergrad","Graduate Student","Alumnus"]},{prompt:"How old are you?",type:"TEXT_NUMBER",inputOptions:[]},{prompt:"What is your major or area of study?",type:"CHOOSE_ONE",inputOptions:["Biology & Biotechnology","Biomedical Engineering","Business","Chemical Engineering","Chemistry & Biochemistry","Civil & Environmental Engineering","Computer Science","Electrical & Computer Engineering","Fire Protection Engineering","Humanities & Arts","Mathematical Sciences","Mechanical Engineering","Physics","Aerospace Engineering","Architectural Engineering","Bioinformatics & Computational Biology","Environmental Engineering","Industrial Engineering","Robotics Engineering","Other"]},{prompt:"Where do you currently live (or have lived) during your time at WPI?",type:"CHOOSE_ONE",inputOptions:["On-Campus Residence","Off-Campus Apartment/House","Commuter"]}],y=n(79),E=n(80),v=(n(64),n(14)),N=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).helpText={RATING:"Please rate all the given buildings from 0-10. If you have no rating for a building, leave blank!",CHOOSE_ONE:"Please pick one answer from the set of answers",CHOOSE_MULTIPLE:"Please pick all answers that apply"};var a=e.buildings;return console.log(a),n.state={percentComplete:0,gradeLevel:"Freshman",age:18,major:"",residence:"",formSubmitted:!1},a.forEach((function(e){n.state[e.name]=t.initializeResponsesStateForBuilding(e)})),n.handleScroll=n.handleScroll.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderProfileQuestions",value:function(){var e=this,t=[],n=[],a=g[0];return n=a.inputOptions.map((function(t,n){return r.a.createElement("label",{key:t+n},r.a.createElement("input",{type:"radio",value:t,checked:e.state.gradeLevel===t,onChange:function(t){return e.setState({gradeLevel:t.target.value})}}),t)})),t.push(r.a.createElement("div",{className:"question profile-question",key:"profile_0"},r.a.createElement("h2",null,a.prompt),r.a.createElement("h3",null,this.helpText.CHOOSE_ONE),r.a.createElement("div",{className:"answers-container"},n))),a=g[1],t.push(r.a.createElement("div",{className:"question profile-question",key:"profile_1"},r.a.createElement("h2",null,a.prompt),r.a.createElement("h3",null,"Please write your age."),r.a.createElement("div",{className:"answers-container"},r.a.createElement("label",null,r.a.createElement("input",{style:{width:"15vw",textAlign:"center",padding:0,marginRight:"2vw"},type:"text",value:this.state.age,onChange:function(t){return e.setState({age:t.target.value})},placeholder:"21"})," Years old")))),n=(a=g[2]).inputOptions.map((function(t,n){return r.a.createElement("label",{key:t+n},r.a.createElement("input",{type:"radio",value:t,checked:e.state.major===t,onChange:function(t){return e.setState({major:t.target.value})}}),t)})),t.push(r.a.createElement("div",{className:"question profile-question",key:"profile_2"},r.a.createElement("h2",null,a.prompt),r.a.createElement("h3",null,this.helpText.CHOOSE_ONE),r.a.createElement("div",{className:"answers-container",id:"major-container",style:{overflow:"auto",backgroundColor:"#212121",borderRadius:"5px",padding:"2vh"}},n))),n=(a=g[3]).inputOptions.map((function(t,n){return r.a.createElement("label",{key:t+n},r.a.createElement("input",{type:"radio",value:t,checked:e.state.residence===t,onChange:function(t){return e.setState({residence:t.target.value})}}),t)})),t.push(r.a.createElement("div",{className:"question profile-question",key:"profile_3"},r.a.createElement("h2",null,a.prompt),r.a.createElement("h3",null,this.helpText.CHOOSE_ONE),r.a.createElement("div",{className:"answers-container"},n),r.a.createElement("hr",null))),t}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var t=document.body.scrollHeight-window.innerHeight;this.setState({percentComplete:Math.round(window.scrollY/t*100)})}},{key:"handleChangeRating",value:function(e,t,n){this.setState((function(a){var r={};return r[e]=Object(d.a)({},a[e]),r[e][t]=function(){if(!n)return"";var e=Number.parseFloat(n);return e<0?0:e>10?10:e}(),r}))}},{key:"handleChangeChooseOne",value:function(e,t,n,a){this.setState((function(r){var i={};return i[e]=Object(d.a)({},r[e]),i[e][n]=a,t.forEach((function(e){i[e]=Object(d.a)({},r[e]),i[e][n]=!a})),console.log(i),i}))}},{key:"handleChangeChooseMultiple",value:function(e,t,n){this.setState((function(a){var r={};return r[e]=Object(d.a)({},a[e]),r[e][t]=n,r}))}},{key:"renderRatingQuestion",value:function(e,t,n){var a,i=this;if("Rate each dining hall"!==e)a=this.props.buildings.filter((function(e){return t.includes(e.category)})).map((function(e){return e.name})).sort();else{var o=["CC Dining Area","Goat's Head","Library Cafe","Pulse On Dining (DAKA)"];a=this.props.buildings.filter((function(e){return t.includes(e.category)&&o.includes(e.name)})).map((function(e){return e.name})).sort()}var l=a.map((function(e){return r.a.createElement("label",{key:e+n},r.a.createElement("input",{type:"number",min:"0",max:"10",step:"0.1",value:i.state[e][n],onChange:function(t){return i.handleChangeRating(e,n,t.target.value)}}),r.a.createElement("h5",null,"/10"),e)}));return r.a.createElement("div",{className:"question rating-question",key:n},r.a.createElement("h2",null,e),r.a.createElement("h3",null,this.helpText.RATING),r.a.createElement("div",{className:"answers-container"},l),r.a.createElement("hr",null))}},{key:"renderChooseOneQuestion",value:function(e,t,n){var a=this,i=this.props.buildings.filter((function(e){return t.includes(e.category)})).map((function(e){return e.name})).sort(),o=i.map((function(e){return r.a.createElement("label",{key:e+n},r.a.createElement("input",{type:"radio",value:!0,checked:a.state[e][n],onChange:function(t){return a.handleChangeChooseOne(e,i.filter((function(t){return t!==e})),n,Boolean(t.target.value))}}),e)}));return r.a.createElement("div",{className:"question rating-question",key:n},r.a.createElement("h2",null,e),r.a.createElement("h3",null,this.helpText.CHOOSE_ONE),r.a.createElement("div",{className:"answers-container"},o),r.a.createElement("hr",null))}},{key:"renderChooseMultipleQuestion",value:function(e,t,n){var a=this,i=this.props.buildings.filter((function(e){return t.includes(e.category)})).map((function(e){return e.name})).sort().map((function(e){return r.a.createElement("label",{className:"checkbox-label",key:e+n},r.a.createElement("input",{type:"checkbox",checked:a.state[e][n],onChange:function(t){return a.handleChangeChooseMultiple(e,n,t.target.checked)}}),r.a.createElement("span",{className:"checkbox-custom rectangular"}),e)}));return r.a.createElement("div",{className:"question rating-question",key:n},r.a.createElement("h2",null,e),r.a.createElement("h3",null,this.helpText.CHOOSE_MULTIPLE),r.a.createElement("div",{className:"answers-container"},i),r.a.createElement("hr",null))}},{key:"renderQuestions",value:function(){var e=this;return Object.keys(f).map((function(t){return f[t].map((function(n,a){var r=n.type,i=n.prompt,o=n.filter;switch(r){case"RATING":return e.renderRatingQuestion(i,o,"".concat(t,"_").concat(a));case"CHOOSE_ONE":return e.renderChooseOneQuestion(i,o,"".concat(t,"_").concat(a));case"CHOOSE_MULTIPLE":return e.renderChooseMultipleQuestion(i,o,"".concat(t,"_").concat(a));default:throw new Error("Question type not accounted for!")}}))}))}},{key:"submitResponses",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({profile:{gradeLevel:this.state.gradeLevel,age:this.state.age,major:this.state.major,residence:this.state.residence},response:e.props.buildings.map((function(t){return Object(d.a)({buildingName:t.name},e.state[t.name])}))})};fetch("https://api.leogons.com/datavis/campus-survey/submit",t).then((function(e){return e.json()})).then((function(){alert("Response successfully submitted!"),e.setState({formSubmitted:!0})}))}},{key:"render",value:function(){var e,t=this,n={color:Object(y.a)((e=1-this.state.percentComplete/100,e>.5&&e<.7?.7:e)),backgroundColor:Object(E.a)(this.state.percentComplete/100),cursor:100===this.state.percentComplete?"pointer":"default"};return r.a.createElement("div",{className:"question-container"},r.a.createElement("div",{className:"question"},r.a.createElement("h2",null,"Welcome to the comprehensive WPI campus survey!"),r.a.createElement("h3",null,"A data visualization endeavor by L\xe9o Gonsalves."),r.a.createElement("p",null,"The objective of this project is to gather qualitative data about different aspects of a variety of WPI locations. The first set of questions will form a profile of the subject responding to the questionnaire. Its purpose is to provide a variety of filters to the visualization. "),r.a.createElement("p",null," The other sets of questions will require your utmost honesty. Please answer them as openly as possible, and as thoroughly as possible. Your answers will help draw an accurate map of WPI from the view of the student body."),r.a.createElement("p",null," A link to the visualization can be found here. "),r.a.createElement("p",null," About the author"),r.a.createElement("hr",null)),r.a.createElement("button",{className:"progress-overlay",style:n,onClick:function(){return t.state.percentComplete<100?null:t.submitResponses()}},this.state.percentComplete<100?"".concat(this.state.percentComplete,"% Complete").concat(this.state.percentComplete>85?"! Almost done!":"."):"You're done! Click here to submit!"),this.renderProfileQuestions(),this.renderQuestions(),this.state.formSubmitted?r.a.createElement(v.a,{to:"/vis"}):null)}}],[{key:"initializeResponsesStateForBuilding",value:function(e){var t={},n=Object.keys(f);return f[n[0]].forEach((function(a,r){if(a.filter.includes(e.category)){var i;switch(a.type){case"RATING":i="";break;case"CHOOSE_ONE":case"CHOOSE_MULTIPLE":i=!1;break;default:throw new Error("Question type not accounted for: "+a.type)}t["".concat(n[0],"_").concat(r)]=i}})),f[n[1]].forEach((function(a,r){if(a.filter.includes(e.category)){var i;switch(a.type){case"RATING":i="";break;case"CHOOSE_ONE":case"CHOOSE_MULTIPLE":i=!1;break;default:throw new Error("Question type not accounted for: "+a.type)}t["".concat(n[1],"_").concat(r)]=i}})),f[n[2]].forEach((function(a,r){if(a.filter.includes(e.category)){var i;switch(a.type){case"RATING":i="";break;case"CHOOSE_ONE":case"CHOOSE_MULTIPLE":i=!1;break;default:throw new Error("Question type not accounted for: "+a.type)}t["".concat(n[2],"_").concat(r)]=i}})),t}}]),t}(a.Component),I=n(20),_=(n(70),function(e){return r.a.createElement("div",{className:"home"},r.a.createElement(I.b,{to:"/survey"},r.a.createElement("div",{className:"survey"},r.a.createElement("h1",null,"SURVEY"))),r.a.createElement(I.b,{to:"/vis"},r.a.createElement("div",{className:"visualization"},r.a.createElement("h1",null,"VIS"))))}),b=n(38),T=n(92),A=n(94),O=n(82),S=n(33),k=n(81),C=n(93),G=n(29),L=n(91),w=n(83),R=n(84),U=n(85),Y=n(86),j=n(87),D=n(88),M=n(89),H=n(90),Q={STUDY_QUALITY_0:"Lecture Enjoyability",STUDY_QUALITY_1:"Building Navigability",STUDY_QUALITY_2:"Noise Rating (lower is better)",STUDY_QUALITY_3:"Comfort Rating",STUDY_QUALITY_4:"Group Meeting Accommodation Rating",STUDY_QUALITY_5:"Solo Studying Rating",STUDY_QUALITY_6:"Best for IQP/MQP Rank",STUDY_QUALITY_7:"Best Exam Study Spot Rank",STUDY_QUALITY_8:"Best Final/Midterm Study Spot Rank",STUDY_QUALITY_9:"Worst Final/Midterm Study Spot Rank",STUDY_QUALITY_10:"Skip Class Rating",LIVING_AND_EATING_0:"Should I have a meal here?",LIVING_AND_EATING_1:"Relaxmeter",LIVING_AND_EATING_2:"How appropriate is this place to chill with friends?",LIVING_AND_EATING_3:"Extra curricular activity rating",LIVING_AND_EATING_4:"Nap Spot Rating",LIVING_AND_EATING_5:"Popularity",LIVING_AND_EATING_6:"Dining Hall Rating",MISC_0:"How enjoyable is it to poop here?",MISC_1:"Student beauty meter",MISC_2:"Photogenic Rating",MISC_3:"Post-Midnight Rating"},P={STUDY_QUALITY_0:w.a,STUDY_QUALITY_1:R.a,STUDY_QUALITY_2:function(e){return Object(R.a)(1-e)},STUDY_QUALITY_3:function(e){return Object(U.a)(1-e)},STUDY_QUALITY_4:R.a,STUDY_QUALITY_5:R.a,STUDY_QUALITY_6:Y.a,STUDY_QUALITY_7:Y.a,STUDY_QUALITY_8:Y.a,STUDY_QUALITY_9:j.a,STUDY_QUALITY_10:j.a,LIVING_AND_EATING_0:w.a,LIVING_AND_EATING_1:D.a,LIVING_AND_EATING_2:D.a,LIVING_AND_EATING_3:w.a,LIVING_AND_EATING_4:M.a,LIVING_AND_EATING_5:function(e){return Object(H.a)(1-e)},LIVING_AND_EATING_6:w.a,MISC_0:w.a,MISC_1:w.a,MISC_2:w.a,MISC_3:w.a},x={STUDY_QUALITY_0:"RATING",STUDY_QUALITY_1:"RATING",STUDY_QUALITY_2:"RATING",STUDY_QUALITY_3:"RATING",STUDY_QUALITY_4:"RATING",STUDY_QUALITY_5:"RATING",STUDY_QUALITY_6:"CHOOSE_MANY",STUDY_QUALITY_7:"CHOOSE_MANY",STUDY_QUALITY_8:"CHOOSE_ONE",STUDY_QUALITY_9:"CHOOSE_ONE",STUDY_QUALITY_10:"RATING",LIVING_AND_EATING_0:"RATING",LIVING_AND_EATING_1:"RATING",LIVING_AND_EATING_2:"RATING",LIVING_AND_EATING_3:"RATING",LIVING_AND_EATING_4:"RATING",LIVING_AND_EATING_5:"RATING",LIVING_AND_EATING_6:"RATING",MISC_0:"RATING",MISC_1:"RATING",MISC_2:"RATING",MISC_3:"RATING"},B=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"getAverages",value:function(){return fetch("".concat(this.url,"/campus-survey/responses"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}},{key:"getTypeOf",value:function(e){return x[e]}},{key:"getQuestionDescriptor",value:function(e){return Q[e]}},{key:"getAllQuestionIDs",value:function(){return Object.keys(Q)}},{key:"pickRandomMetric",value:function(){var e=Object.keys(Q);return e[Math.floor(Math.random()*e.length)]}},{key:"getColor",value:function(e,t){return P[e](t)}}]),e}();B.url="https://api.leogons.com/datavis/";var V=B,q=(n(71),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).dimensions={height:600,width:600},n.strokeMap={street:"#000000",campusLane:"#a5a5a5",building:"#010057",poi:"#004a00",residenceHall:"#4a0200"},n.colorMap={street:"#444",campusLane:"#7d7d7d",building:"#6b94f2",poi:"#6dc46f",residenceHall:"#b35eb2"},n.state={selectedMetric:"",data:{},tooltip:{locationName:"Location",locationCategory:"",color:"#ffffff",rank:-1,display:!1}},n.svg=r.a.createRef(),n.d3RenderMap=n.d3RenderMap.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.d3RenderMap(),V.getAverages().then((function(t){var n=t.body;return e.setState({data:n,ranking:e.parseRanking(n,e.state.selectedMetric)})}))}},{key:"parseRanking",value:function(e,t){return Object.keys(e).map((function(n){return{name:n,value:e[n][t]}})).sort((function(e,t){return e.value<t.value?1:-1})).filter((function(e){return"undefined"!==typeof e.value}))}},{key:"componentDidUpdate",value:function(e,t,n){t.selectedMetric===this.state.selectedMetric&&t.data===this.state.data||this.d3UpdateMap()}},{key:"d3RenderMap",value:function(){var e=this,t=function(t,n,a,r,i){var o=Object(d.a)({},e.state.tooltip);o.locationName=null!==t?t:o.locationName,o.display=null!==n?n:o.display,o.rank=null!==a?a:o.rank,o.color=r||o.color,o.locationCategory=i||o.locationCategory,e.setState({tooltip:o})},n=this.props.geoJSON,a=this.dimensions,r=a.height,i=a.width,o=Object(O.a)(this.svg.current),l=n.features.filter((function(e){return"street"!==e.properties.category&&"campusLane"!==e.properties.category})),s=n.features.filter((function(e){return"street"===e.properties.category||"campusLane"===e.properties.category})),c=Object(d.a)({},n),u=Object(d.a)({},n);u.features=s,c.features=l;var p=Object(T.a)().fitExtent([[0,0],[r,i]],c),m=Object(A.a)().projection(p),h=Object(G.a)().scaleExtent([1,8]).on("zoom",(function(){var e=S.c.transform;f.attr("transform",e),f.attr("stroke-width",1/e.k)}));o.on("click",(function(){t(null,!1,null),o.transition().duration(750).call(h.transform,G.b,Object(G.c)(o.node()).invert([i/2,r/2]))}));var f=o.append("g").attr("id","viewport");return f.append("g").attr("id","streets").selectAll("path").data(u.features).join("path").attr("fill",(function(t){return"campusLane"===t.properties.category?"none":e.colorMap[t.properties.category]})).attr("stroke",(function(t){return"campusLane"===t.properties.category?e.colorMap[t.properties.category]:"none"})).attr("stroke-width",(function(e){return"campusLane"===e.properties.category?"3px":"none"})).attr("d",m).append("title").text((function(e){return e.properties.name})),f.append("g").attr("cursor","pointer").attr("id","buildings").selectAll("path").data(c.features).join("path").attr("fill",(function(t){return e.colorMap[t.properties.category]})).attr("stroke","black").attr("stroke-width",.5).on("click",(function(n){!function(n){for(var a=e.state.ranking,r=0;r<a.length;r++)if(a[r].name===n.properties.name)return void t(n.properties.name,!0,r+1,null,n.properties.category);t(n.properties.name,!0,void 0,null,n.properties.category)}(n);var a=m.bounds(n),l=Object(b.a)(a,2),s=Object(b.a)(l[0],2),c=s[0],u=s[1],p=Object(b.a)(l[1],2),d=p[0],f=p[1];S.c.stopPropagation(),o.transition().duration(750).call(h.transform,G.b.translate(i/2,r/2).scale(Math.min(8,.9/Math.max((d-c)/i,(f-u)/r))).translate(-(c+d)/2,-(u+f)/2),Object(k.a)(o.node()))})).attr("d",m).append("title").text((function(e){return e.properties.name})),o.call(h),this}},{key:"d3UpdateMap",value:function(){var e=this.state,t=e.ranking,n=e.selectedMetric,a=e.data,r=Object(O.a)(this.svg.current).select("#buildings").selectAll("path");if("RATING"===V.getTypeOf(n)){r.attr("fill",(function(e){return a[e.properties.name]&&a[e.properties.name][n]?V.getColor(n,a[e.properties.name][n]/10):"rgba(126,126,126,0.58)"}))}else{var i=Object(C.a)().domain(Object(L.a)(t,(function(e){return e.value}))).range([0,1]);r.attr("fill",(function(e){return a[e.properties.name]&&a[e.properties.name][n]?V.getColor(n,i(a[e.properties.name][n])):"rgba(126,126,126,0.58)"}))}}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectedMetric,a=t.tooltip,i=t.data,o=t.ranking;return r.a.createElement("div",null,r.a.createElement("div",{className:"options-overlay"},r.a.createElement("select",{className:"select-css",defaultValue:"none",onChange:function(t){return e.setState({selectedMetric:t.target.value,ranking:e.parseRanking(e.state.data,t.target.value)})}},r.a.createElement("option",{value:"none",disabled:!0,hidden:!0},"Select a Filter"),V.getAllQuestionIDs().map((function(e,t){return r.a.createElement("option",{value:e,key:e+t},V.getQuestionDescriptor(e))})))),r.a.createElement("div",{className:"title show-".concat(!a.display)},r.a.createElement("h1",null,"WPI Campus"),r.a.createElement("h3",null,"Through Different Lenses")),r.a.createElement("div",{className:"information-overlay show-".concat(a.display)},r.a.createElement("h1",{style:{background:this.colorMap[a.locationCategory]}},a.locationName),r.a.createElement("h1",{style:{background:i[a.locationName]&&i[a.locationName][n]?Object(w.a)(1-a.rank/o.length):"rgba(126,126,126,0.58)"}},function(){if("RATING"===V.getTypeOf(n))return"Ranked at: ".concat(a.rank," position");var e=i[a.locationName]?i[a.locationName][n]:"Unavailable";return"Number of votes received: ".concat(e||"None")}()),r.a.createElement("h1",{style:{background:i[a.locationName]&&i[a.locationName][n]?V.getColor(n,i[a.locationName][n]/10):"rgba(126,126,126,0.58)"}},function(){if("RATING"!==V.getTypeOf(n))return"".concat(V.getQuestionDescriptor(n)," : ").concat(a.rank);var e=i[a.locationName]?i[a.locationName][n]:"Unavailable";return"".concat(V.getQuestionDescriptor(n)," : ").concat(e||"None")}())),r.a.createElement("svg",{id:"d3Node",height:"100vh",width:"100vw",viewBox:"0 0 ".concat(this.dimensions.height," ").concat(this.dimensions.width),preserveAspectRatio:"xMidYMid meet",ref:this.svg}))}}]),t}(a.Component)),W=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={geoJSON:null,buildings:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(m.a)("https://raw.githubusercontent.com/lcgonsalves/WPI-Map-Poll/master/map.geojson").then((function(n){return e.setState({geoJSON:n,buildings:t.parseBuildingInformation(n)})}))}},{key:"render",value:function(){return r.a.createElement(I.a,null,r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/survey"},this.state.geoJSON&&r.a.createElement(N,{buildings:this.state.buildings})),r.a.createElement(v.b,{path:"/vis"},this.state.geoJSON&&r.a.createElement(q,{geoJSON:this.state.geoJSON})),r.a.createElement(v.b,{path:"/"},r.a.createElement(_,null))))}}],[{key:"parseBuildingInformation",value:function(e){var t=[],n={};return e.features.forEach((function(e){var a=e.properties;"street"!==a.category&&"campusLane"!==a.category&&(n[a.name]||(t.push(a),n[a.name]=!0))})),t}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.d6f5088b.chunk.js.map