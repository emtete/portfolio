(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/taeyoung_erp_img.8a7c34ad.png"},function(e,t,a){e.exports=a.p+"static/media/movie_app.fe516973.png"},function(e,t,a){e.exports=a.p+"static/media/youtube_mobile.b03fc49a.png"},function(e,t,a){e.exports=a.p+"static/media/black_note.da81fe71.png"},,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),r=a.n(c),o=a(1),i=a(2),s=a(3),m=a(4),u=(a(16),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setResizeEvent=function(){window.addEventListener("resize",(function(){n.setState({isResize:!0})}))},n.state={isResize:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setResizeEvent()}},{key:"componentDidUpdate",value:function(){d()}},{key:"render",value:function(){return l.a.createElement("nav",{id:"navbar",className:"notFixed"},l.a.createElement("div",{className:"navbar__menu"},l.a.createElement("ul",null,l.a.createElement("li",{id:"nav__home",className:"nav__btn active"},"Home"),l.a.createElement("li",{id:"nav__about",className:"nav__btn"},"About"),l.a.createElement("li",{id:"nav__skills",className:"nav__btn"},"Skills"),l.a.createElement("li",{id:"nav__work",className:"nav__btn"},"My Work"),l.a.createElement("li",{id:"nav__contact",className:"nav__btn"},"Contact"))))}}]),a}(l.a.Component)),d=function(){var e=window.matchMedia("(max-width: 620px)").matches,t=document.querySelector(".navbar__menu ul");Array.from(t.children).forEach((function(t){switch(t.id){case"nav__home":t.textContent=e?"H":"Home";break;case"nav__about":t.textContent=e?"A":"About";break;case"nav__skills":t.textContent=e?"S":"Skills";break;case"nav__work":t.textContent=e?"W":"Work";break;case"nav__contact":t.textContent=e?"C":"Contact"}}))},E=u,v=(a(17),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"home"},l.a.createElement("div",{className:"home__container"},l.a.createElement("div",{className:"home__title"},"Full stack web developer.",l.a.createElement("br",null),"\ucd5c\uc885\ud638"),l.a.createElement("div",{id:"goTo__about",className:"home__button nav__btn"},"View my work ",l.a.createElement("i",{className:"fas fa-arrow-right"}))),l.a.createElement(E,null))}}]),a}(l.a.Component)),f=(a(18),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).aboutRef=l.a.createRef(),e.getElement=function(){var t=e.aboutRef.current;if(t)return t;throw new Error("about is null")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.getElement(),t=p(e),a=b(e);t.forEach((function(n,l){n.addEventListener("click",(function(){_(n,t),h(e,t,n),a.value=l+""}))})),a.addEventListener("change",(function(a){var n=a.target.selectedIndex,l=t[n];_(l,t),h(e,t,l)}))}},{key:"render",value:function(){return l.a.createElement("section",{id:"about",ref:this.aboutRef},l.a.createElement("h1",{className:"about__h1"},"About Me"),l.a.createElement("p",null,"\ud604\uc7ac \uc11c\uc6b8 \uad00\uc545\uad6c \uc2e0\ub9bc\ub3d9\uc5d0 \uac70\uc8fc\uc911\uc785\ub2c8\ub2e4."),l.a.createElement("div",{className:"about__container"},l.a.createElement("ul",{className:"about__menu-text"},l.a.createElement("li",{className:"li_active"},"2014 ~ 2015 : \ud559\uc6d0 \uc218\ub8cc"),l.a.createElement("li",null,"2015 ~ 2016 : \ud68c\uc0ac \ub274\ud14c\ud06c \uadfc\ubb34"),l.a.createElement("li",null,"2016 ~ 2019 : \ud0c0 \uc9c1\uc5c5 \uc885\uc0ac"),l.a.createElement("li",null,"2019 ~ 2020 : ERP \ud504\ub85c\uc81d\ud2b8"),l.a.createElement("li",null,"2020 ~ ")),l.a.createElement("select",{className:"about__menu-select"},l.a.createElement("option",{value:"0"},"2014 ~ 2015 : \ud559\uc6d0 \uc218\ub8cc"),l.a.createElement("option",{value:"1"},"2015 ~ 2016 : \ud68c\uc0ac \ub274\ud14c\ud06c \uadfc\ubb34"),l.a.createElement("option",{value:"2"},"2016 ~ 2019 : \ud0c0 \uc9c1\uc5c5 \uc885\uc0ac"),l.a.createElement("option",{value:"3"},"2019 ~ 2020 : ERP \ud504\ub85c\uc81d\ud2b8"),l.a.createElement("option",{value:"4"},"2020 ~ ")),l.a.createElement("div",{id:"content",className:"about__detail"},l.a.createElement("p",null,"\uc57d 6\uac1c\uc6d4, \ube44\ud2b8\ucef4\ud4e8\ud130 \ud559\uc6d0 \uc218\ub8cc\ud588\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",{className:"ct_deactive"},"1\ub144\uac04 \uc5ec\ub7ec\uac00\uc9c0 \uc5c5\ubb34\ub97c \ud588\uc9c0\ub9cc",l.a.createElement("br",null)," \ub531\ud788 \uae30\uc5b5\ub098\ub294\uac83\ub3c4 \uc5c6\uace0 \uc2e4\ub825\ub3c4 \ubcc4\ub85c\uc600\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null)," \uacbd\uc601\uc545\ud654\ub85c \ud1f4\uc0ac\ud588\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",{className:"ct_deactive"},"\uac04\uac04\ud788 \ucc45\uc744 \uc77d\uc73c\uba74\uc11c",l.a.createElement("br",null),"\ub808\ub178\ubc84 \ucf5c\uc13c\ud130\uc5d0\uc11c 3\uac1c\uc6d4",l.a.createElement("br",null)," \uc778\uc870\ub300\ub9ac\uc11d 1\ub144",l.a.createElement("br",null)," \uad6c\ub9e4\uc790\uc7ac\ud300\uc5d0\uc11c \ucc3d\uace0\uad00\ub9ac 1\ub144",l.a.createElement("br",null)," \uadf8\ub807\uac8c \uc77c\ud574\ubcf4\ub2c8 \uac1c\ubc1c\uc77c\uc774 \uc800\uc5d0\uac8c \uc81c\uc77c \uc798 \ub9de\uc558\ub2e4\uace0 \uc0dd\uac01\ub410\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",{className:"ct_deactive"},"\uc778\ub825\ud30c\uacac\uc5c5\uccb4\uc5d0 \ucde8\uc9c1\ud558\uc600\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),"\uadf8\ub9ac\uace0 6\ub144\ucc28 \uacfc\uc7a5\uc73c\ub85c \ud0dc\uc601\uac74\uc124\uc5d0 \ud30c\uacac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),"2019\ub144 4\uc6d4\ubd80\ud130 2020\ub144 4\uc6d4\uae4c\uc9c0 1\ub144 1\uac1c\uc6d4\ub3d9\uc548",l.a.createElement("br",null),"\ucc28\uc138\ub300 ERP \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uad6c\ub9e4\uc790\uc7ac \uc5c5\ubb34 \uc911 \uad6c\ub9e4\ub97c \ub2f4\ub2f9\ud588\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",{className:"ct_deactive"},"\ud504\ub85c\uc81d\ud2b8 \ucca0\uc218 \ud6c4, \ud55c\ub2ec\ub3d9\uc548 \uad6c\uc9c1\ud65c\ub3d9\uc744 \ud588\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),"\ubd99\uc740\uacf3\ub3c4 \uc788\uc5c8\uace0 \uc785\uc0ac\ud574\uc11c 1\uc8fc\uc77c\ub3d9\uc548 \uc77c\ud558\uae30\ub3c4 \ud588\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),"\uadf8\ub7f0\ub370 \uc9c0\uae08\uae4c\uc9c0 \ub098\uc628 \uc0c8\ub85c\uc6b4 \uae30\uc220\ub4e4\ub3c4 \ub9ce\uc558\uace0 \uc790\ubc14\ub9cc \uacc4\uc18d \ud558\uae34 \uc2eb\uc5c8\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),"\uadf8\ub798\uc11c \ud604\uc7ac\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub85c \uc77c\ud558\uae30 \uc704\ud574 React\ub85c \uc774\uac83\uc800\uac83 \ub9cc\ub4e4\uc5b4\ubcf4\ub294 \uc911\uc785\ub2c8\ub2e4."))))}}]),a}(l.a.Component)),_=function(e,t){t.forEach((function(e){e.classList.remove("li_active")})),e.classList.add("li_active")},p=function(e){var t=e.querySelectorAll(".about__menu-text li");if(!t)throw new Error("Called before rendering");return t},b=function(e){var t=e.querySelector(".about__menu-select");if(!t)throw new Error("Called before rendering");return t},h=function(e,t,a){var n=a.textContent;t.forEach((function(t,a){var l=e.querySelectorAll(".about__detail p");t.textContent===n?l[a].classList.remove("ct_deactive"):l[a].classList.add("ct_deactive")}))},g=f,k=(a(19),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"hex_wrap1"},l.a.createElement("div",{className:"hex_wrap"},l.a.createElement("div",{className:"hexagon"},l.a.createElement("i",{className:"".concat(this.props.icon," hexagon__icon")}))),l.a.createElement("h2",{className:"skills__h2"},this.props.h2),l.a.createElement("h4",{className:"skills__h4"},this.props.h4.split("\\n").map((function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("br",null))}))))}}]),a}(l.a.Component)),y=(a(20),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).progressRef=l.a.createRef(),e.getElement=function(){var t=e.progressRef.current;if(t)return t;throw new Error("progress is null")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"skills__one_set",ref:this.progressRef},l.a.createElement("div",{className:"skills__description"},l.a.createElement("span",{className:this.props.clas},this.props.title),l.a.createElement("span",null,this.props.per)),l.a.createElement("div",{className:"skills__bar"},l.a.createElement("div",{className:"skills__value",style:{width:this.props.per}})))}}]),a}(l.a.Component)),N=(a(21),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).skillsRef=l.a.createRef(),e.getElement=function(){var t=e.skillsRef.current;if(t)return t;throw new Error("skills is null")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.getElement(),t=w(e);t.forEach((function(e){e.addEventListener("click",(function(e){S(e.target,t)}))}))}},{key:"render",value:function(){return l.a.createElement("section",{id:"skills",ref:this.skillsRef},l.a.createElement("h1",{className:"skills__h1"},"Skills"),l.a.createElement("div",{className:"hex_wrap3"},l.a.createElement("div",{className:"hex_wrap2"},l.a.createElement(k,{icon:"fab fa-html5",h2:"HTML",h4:"HTML,\\n CSS"}),l.a.createElement(k,{icon:"fab fa-react",h2:"FrontEnd",h4:"Javascript, React,\\n Typescript"})),l.a.createElement("div",{className:"hex_wrap2"},l.a.createElement(k,{icon:"fas fa-leaf",h2:"Java",h4:"Java, Spring, Servlet,\\n Jsp, Mybatis, Maven"}),l.a.createElement(k,{icon:"fas fa-server",h2:"DBMS",h4:"Oracle, MySql,\\n Stored Procedure"}))),l.a.createElement("div",{className:"skills__container"},l.a.createElement("div",{className:"skills__progress"},l.a.createElement("h3",{className:"skills__h3"},"Skills"),l.a.createElement(y,{title:"HTML",per:"72%",clas:""}),l.a.createElement(y,{title:"CSS",per:"62%",clas:""}),l.a.createElement(y,{title:"ES5 / ES6 / TypeScript",per:"75%",clas:""}),l.a.createElement(y,{title:"React",per:"70%",clas:""}),l.a.createElement(y,{title:"Java / Spring",per:"80%",clas:""}),l.a.createElement(y,{title:"SQL",per:"70%",clas:""})),l.a.createElement("div",{className:"skills__right-wrap"},l.a.createElement("div",{className:"skills__detail"},l.a.createElement("div",{className:"skills__detail-wrap"},l.a.createElement("h3",{className:"skills__h3"},"Tools"),l.a.createElement("ul",null,l.a.createElement("li",null,"VSCode"),l.a.createElement("li",null,"STS"),l.a.createElement("li",null,"DBeaver"),l.a.createElement("li",null)))),l.a.createElement("div",{className:"skills__tools"},l.a.createElement("div",{className:"skills__detail-wrap"},l.a.createElement("h3",{className:"skills__h3"},"ETC"),l.a.createElement("ul",null,l.a.createElement("li",null,"Git"),l.a.createElement("li",null),l.a.createElement("li",null)))))))}}]),a}(l.a.Component)),w=function(e){var t=e.querySelectorAll(".skills__description span:nth-child(1)");if(!t)throw new Error("Called before rendering");return t},S=function(e,t){t.forEach((function(e){e.classList.remove("active")})),e.classList.add("active")},j=N,O=(a(22),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.dataType,a=e.img,n=e.clasName,c=e.title,r=e.value;return l.a.createElement("div",{className:"project ".concat(n),"data-type":t},l.a.createElement("img",{src:a,alt:"",className:"project__img ".concat(n)}),l.a.createElement("div",{className:"project__description ".concat(n)},l.a.createElement("h3",{className:"dummy ".concat(n)},c),l.a.createElement("br",null),l.a.createElement("span",{className:"dummy ".concat(n)},r)))}}]),a}(l.a.Component)),L=(a(23),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){x()}},{key:"render",value:function(){var e=this.props,t=e.text,a=e.count,n=e.clas,c=e.dataFilter;return l.a.createElement("button",{className:"category__btn ".concat(n),"data-filter":c},t,l.a.createElement("span",{className:"category__count"},a))}}]),a}(l.a.Component)),x=function(){document.querySelectorAll(".category__btn, .category__count").forEach((function(e){e.addEventListener("click",(function(e){var t=document.querySelector(".category__btn.active"),a=e.target,n="SPAN"===a.nodeName?a.parentElement:a;t&&t.classList.remove("active"),n&&n.classList.add("active")}))}))},C=L,M=(a(24),a(5)),q=a.n(M),A=a(6),R=a.n(A),T=a(7),P=a.n(T),D=a(8),F=a.n(D),B=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal__content"},l.a.createElement("div",{className:"modal__header"},l.a.createElement("span",{className:"close"},"\xd7")),l.a.createElement("div",{className:"modal__body modal__taeyoung deactive"},l.a.createElement("div",{className:"modal__img-wrap"},l.a.createElement("img",{src:q.a,alt:"",className:"modal__img"})),l.a.createElement("article",null,l.a.createElement("ul",null,l.a.createElement("li",null,"\ud0dc\uc601\uac74\uc124 \ucc28\uc138\ub300 ERP \ud504\ub85c\uc81d\ud2b8"),l.a.createElement("br",null),l.a.createElement("li",null,"\uac1c\ubc1c\uae30\uac04 : 2019.04~2020.04(1\ub144 1\uac1c\uc6d4)"),l.a.createElement("li",null,"\ub2f4\ub2f9\uc5c5\ubb34 : \uad6c\ub9e4\uc790\uc7ac \ubd80\uc11c\uc758 \uad6c\ub9e4\uc5c5\ubb34(\uc785\ucc30, \uacc4\uc57d \ub4f1) \ub2f4\ub2f9"),l.a.createElement("li",null,"\uae30\uc220\uc2a4\ud399 : ES5, Spring framework, "),l.a.createElement("li",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 oracle stored procedure"),l.a.createElement("br",null),l.a.createElement("li",null,"\uc57d 30\uac1c\uc758 \ud654\uba74 \uac1c\ubc1c \uc911 \uc138\ubd80\uae30\ub2a5\uc0ac\ud56d : "),l.a.createElement("li",null,"1. \uacf5\uc778\uc778\uc99d\uc11c \uc801\uc6a9"),l.a.createElement("li",null,"2. \ud30c\uc77c \uc5c5, \ub2e4\uc6b4\ub85c\ub4dc"),l.a.createElement("li",null,"3. \ub3d9\uc801 \ud53c\ubc97 \ucffc\ub9ac \uc801\uc6a9"),l.a.createElement("li",null,"4. \uc6d0\ubcf8 rtf\ud30c\uc77c\uacfc \uc815\ubcf4\ub97c \uc870\ud569\ud558\uc5ec pdf\ud30c\uc77c(\uacc4\uc57d\uc11c) \uc0dd\uc131"),l.a.createElement("li",null,"5. \uc785\ucc30\uc815\ubcf4\ub97c \uc5d1\uc140\ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud558\uc5ec \uc785\ub825\ubc1b\ub294 \uae30\ub2a5"),l.a.createElement("li",null,"6. \uc785\ucc30\uc815\ubcf4\ub97c \uc5d1\uc140\ud30c\uc77c\ub85c \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub294 \uae30\ub2a5"),l.a.createElement("li",null,"7. \ubcf4\uace0\uc11c \ucd9c\ub825\uae30\ub2a5"),l.a.createElement("li",null,"8. \uc804\uc790\uacb0\uc7ac"),l.a.createElement("li",null,"9. \ubcf4\uc99d\uc11c"),l.a.createElement("li",null,"10. \uc778\uc9c0\uc138")),l.a.createElement("span",{className:"modal__icons"},l.a.createElement("a",{href:"https://erp.taeyoung.com/",target:"_blank"},l.a.createElement("i",{className:"fas fa-link"}))))),l.a.createElement("div",{className:"modal__body modal__blackNote deactive"},l.a.createElement("div",{className:"modal__img-wrap"},l.a.createElement("img",{src:F.a,alt:"",className:"modal__img"})),l.a.createElement("article",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Black Note front-end"),l.a.createElement("br",null),l.a.createElement("li",null,"\uac1c\ubc1c\uae30\uac04 : 2019, \uc57d 6\uac1c\uc6d4"),l.a.createElement("li",null,"\uae30\uc220\uc2a4\ud399 : Html, Css, ES5, BootStrap "),l.a.createElement("br",null),l.a.createElement("li",null,"\ub0a8\ub294 \uc2dc\uac04\uc5d0 \ud2c8\ud2c8\ud788 \uac1c\ubc1c\ud588\ub358 \uc6f9\uc571\uc785\ub2c8\ub2e4."),l.a.createElement("li",null,"\ubbf8\uc644\uc131")),l.a.createElement("span",{className:"modal__icons"},l.a.createElement("a",{href:"https://emtete.github.io/black_note/",target:"_blank"},l.a.createElement("i",{className:"fas fa-link"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://github.com/emtete/black_note",target:"_blank"},l.a.createElement("i",{className:"fab fa-github-square"}))))),l.a.createElement("div",{className:"modal__body modal__movieApp deactive"},l.a.createElement("div",{className:"modal__img-wrap"},l.a.createElement("img",{src:R.a,alt:"",className:"modal__img"})),l.a.createElement("article",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Movie App front-end"),l.a.createElement("br",null),l.a.createElement("li",null,"\uac1c\ubc1c\uae30\uac04 : 2020.05, \uc57d 1\uc8fc\uc77c"),l.a.createElement("li",null,"\uae30\uc220\uc2a4\ud399 : React, ES6, TypeScript, Axios ")),l.a.createElement("span",{className:"modal__icons"},l.a.createElement("a",{href:"https://emtete.github.io/movie_app/",target:"_blank"},l.a.createElement("i",{className:"fas fa-link"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://github.com/emtete/movie_app",target:"_blank"},l.a.createElement("i",{className:"fab fa-github-square"}))))),l.a.createElement("div",{className:"modal__body modal__youtubeMobile deactive"},l.a.createElement("div",{className:"modal__img-wrap"},l.a.createElement("img",{src:P.a,alt:"",className:"modal__img"})),l.a.createElement("article",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Youtube Mobile front-end"),l.a.createElement("br",null),l.a.createElement("li",null,"\uac1c\ubc1c\uae30\uac04 : 2020.05, \uc57d 1\uc8fc\uc77c"),l.a.createElement("li",null,"\uae30\uc220\uc2a4\ud399 : HTML, CSS, ES6, FlexBox, \ubc18\uc751\ud615")),l.a.createElement("span",{className:"modal__icons"},l.a.createElement("a",{href:"https://emtete.github.io/youtube_mobile/",target:"_blank"},l.a.createElement("i",{className:"fas fa-link"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://github.com/emtete/youtube_mobile",target:"_blank"},l.a.createElement("i",{className:"fab fa-github-square"}))))),l.a.createElement("div",{className:"modal__footer"})))}}]),a}(l.a.Component),H=(a(25),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).openModal=function(){var e=document.querySelector(".modal");document.querySelectorAll(".project").forEach((function(t){t.addEventListener("click",(function(t){var a=t.target.className.split(" ")[1].replace("project","modal"),l=document.querySelector(".".concat(a));n.setState({activeModal:a}),null===e||void 0===e||e.classList.add("active"),null===l||void 0===l||l.classList.remove("deactive")}))}))},n.closeModal=function(){var e=document.querySelector(".modal .close"),t=document.querySelector(".modal");null===e||void 0===e||e.addEventListener("click",(function(e){var a=n.state.activeModal,l=document.querySelector(".".concat(a));null===t||void 0===t||t.classList.remove("active"),null===l||void 0===l||l.classList.add("deactive")}))},n.state={activeModal:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){J(),this.openModal(),this.closeModal()}},{key:"render",value:function(){return l.a.createElement("section",{id:"work"},l.a.createElement(B,null),l.a.createElement("div",{className:"work__h1"},"My Works"),l.a.createElement("div",{className:"work__categories"},l.a.createElement(C,{text:"All",count:4,clas:"active",dataFilter:"*"}),l.a.createElement(C,{text:"Projects",count:1,clas:"",dataFilter:"Projects"}),l.a.createElement(C,{text:"Sub Projects",count:1,clas:"",dataFilter:"Sub Projects"}),l.a.createElement(C,{text:"etc",count:2,clas:"",dataFilter:"etc"})),l.a.createElement("div",{className:"work__projects"},l.a.createElement(O,{clasName:"project__taeyoung",img:"".concat(q.a),dataType:"Projects",title:"\ud0dc\uc601\uac74\uc124 \ucc28\uc138\ub300 ERP\ud504\ub85c\uc81d\ud2b8",value:""}),l.a.createElement(O,{clasName:"project__blackNote",img:"".concat(F.a),dataType:"Sub Projects",title:"Black Note",value:"Note Web App"}),l.a.createElement(O,{clasName:"project__movieApp",img:"".concat(R.a),dataType:"etc",title:"Movie App",value:"front-end clone coding"}),l.a.createElement(O,{clasName:"project__youtubeMobile",img:"".concat(P.a),dataType:"etc",title:"Youtube Mobile",value:"front-end clone coidng"})))}}]),a}(l.a.Component)),J=function(){var e=document.querySelector(".work__projects"),t=document.querySelectorAll(".project");document.querySelector(".work__categories").addEventListener("click",(function(a){var n,l=a.target,c=l.getAttribute("data-filter")||(null===l||void 0===l||null===(n=l.parentElement)||void 0===n?void 0:n.getAttribute("data-filter"));null!==c&&(null===e||void 0===e||e.classList.add("anime-out"),t.forEach((function(e){var t=e.getAttribute("data-type");c!==t&&"*"!==c?e.classList.add("deactive"):e.classList.remove("deactive")})),setTimeout((function(){null===e||void 0===e||e.classList.remove("anime-out")}),300))}))},W=H,z=(a(26),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"contact"},l.a.createElement("h1",{className:"contact__title"},"CONTACT"),l.a.createElement("h2",{className:"contact__email"},"victor_77@naver.com"),l.a.createElement("div",{className:"contact__icons"},l.a.createElement("a",{href:"https://github.com/emtete",target:"_blank"},l.a.createElement("i",{className:"fab fa-github-square"}))),l.a.createElement("span",{className:"contact__copylight"},"2020 choi jongho - All right reserved"))}}]),a}(l.a.Component)),Y=(a(27),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).appRef=l.a.createRef(),e.beforeSec="home",e.getElement=function(){var t=e.appRef.current;if(t)return t;throw new Error("app is null")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.getElement(),a=$(t),n=K(t);window.addEventListener("scroll",(function(){var t=Q(a,U);t!==e.beforeSec&&(e.beforeSec=t,V(t,a),G(t,a))})),n.forEach((function(e){e.addEventListener("click",(function(n){var l=e.id.split("__")[1];if(!a[l])throw new Error("Called before rendering");I(l,a,t)}))}))}},{key:"render",value:function(){return l.a.createElement("div",{ref:this.appRef},l.a.createElement(v,null),l.a.createElement(g,null),l.a.createElement(j,null),l.a.createElement(W,null),l.a.createElement(z,null))}}]),a}(l.a.Component)),I=function(e,t,a){var n=t[e].getBoundingClientRect().top+window.pageYOffset-50,l=Array.from(t.nav.querySelector("ul").children);window.scrollTo({top:n,behavior:"smooth"}),l.forEach((function(e){return e.classList.remove("active")})),a.querySelector("#nav__about").classList.add("active")},V=function(e,t){"home"!==e&&null!==t.nav?(t.nav.classList.add("fixed"),t.nav.classList.remove("notFixed")):"home"===e&&null!==t.nav&&(t.nav.classList.remove("fixed"),t.nav.classList.add("notFixed"))},G=function(e,t){var a;Array.from((null===(a=t.nav)||void 0===a?void 0:a.querySelector("ul")).children).forEach((function(t){var a=t.id.split("__")[1];t.classList.remove("active"),e===a&&t.classList.add("active")}))},Q=function(e,t){var a=window.pageYOffset,n=t;return a<n(e.home,"bottom")-53?"home":n(e.home,"bottom")-54<a&&a<n(e.about,"bottom")-53?"about":n(e.about,"bottom")-53<a&&a<n(e.skills,"bottom")-53?"skills":n(e.skills,"bottom")-53<a&&a<n(e.work,"bottom")-53&&a!==n(e.contact,"bottom")-window.innerHeight?"work":(n(e.contact,"bottom"),window.innerHeight,"contact")},U=function(e,t){if(!e)throw new Error("Element is null or undefined");return e.getBoundingClientRect()[t]+window.pageYOffset},$=function(e){return{home:e.querySelector("#home"),nav:e.querySelector("#navbar"),about:e.querySelector("#about"),skills:e.querySelector("#skills"),work:e.querySelector("#work"),contact:e.querySelector("#contact")}},K=function(e){if(!e.querySelector(".nav__btn"))throw new Error("Called before rendering");return e.querySelectorAll(".nav__btn")},X=Y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.081f15f1.chunk.js.map