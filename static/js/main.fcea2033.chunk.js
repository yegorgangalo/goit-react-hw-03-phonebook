(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{191:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),c=n.n(o),r=n(33),l=n.n(r),i=(n(90),n(9)),s=n(34),u=n(2),d=n(3),b=n(4),m=n(5),p=Object(o.createContext)(),j=n(20),h=n(11),O=n(41),f=n(193),v=n(84),x=n(82),g=n.n(x),k=function(e){var t=e.children,n=e.onClick,o=e.classNames,c=void 0===o?"":o,r=e.type,l=void 0===r?"button":r,i=Object(v.a)(e,["children","onClick","classNames","type"]);return Object(a.jsx)("button",Object(j.a)(Object(j.a)({type:l,className:"".concat(g.a.IconButton," ").concat(c),onClick:n},i),{},{children:t}))};k.defaultProps={onClick:function(){return null},children:null};var C=k,y=n(8),_=n.n(y),S={name:"",number:"",experience:"",licence:!1,skills:[]},w=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={expLevel:["junior","middle","senior"],skills:["HTML","CSS","JS","SCSS","Git","React"]},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.expLevel,o=t.skills;return Object(a.jsx)(h.d,{initialValues:S,validationSchema:O.b().shape({name:O.c().min(2,"Too Short!").max(30,"Too Long!").required("Required"),number:O.a().max(1e12,"Too Long!").positive().integer().required("Required")}),onSubmit:function(t,n){var a=n.setSubmitting,o=n.resetForm,c=t.name,r=t.number,l=e.props,i=l.contacts,s=l.formSubmitHandler;if(i.some((function(e){return e.name===c||e.number===r})))return alert("Contact with such ".concat(c," or ").concat(r," is already in Phonebook")),void a(!1);s(Object(j.a)(Object(j.a)({},t),{},{id:Object(f.a)()})),a(!1),o(S)},children:function(e){var t=e.isSubmitting,c=e.values;return Object(a.jsxs)(h.c,{className:_.a.contactForm,children:[Object(a.jsx)("label",{className:_.a.title,htmlFor:"name",children:"Name "}),Object(a.jsx)(h.b,{className:_.a.labelBlock,type:"text",name:"name"}),Object(a.jsx)(h.a,{name:"name",component:"div"}),Object(a.jsx)("label",{className:_.a.title,htmlFor:"number",children:"Number "}),Object(a.jsx)(h.b,{className:_.a.labelBlock,type:"text",name:"number"}),Object(a.jsx)(h.a,{name:"number",component:"div"}),Object(a.jsxs)("div",{role:"group","aria-labelledby":"radio-group",className:"".concat(_.a.labelBlock," ").concat(_.a.groupBlock),children:[Object(a.jsx)("h3",{className:_.a.title,children:"Your Level"}),n.map((function(e){return Object(a.jsxs)("label",{children:[Object(a.jsx)(h.b,{type:"radio",className:_.a.inputBox,name:"experience",value:e}),e]},e)}))]}),Object(a.jsxs)("div",{role:"group","aria-labelledby":"checkbox-group",className:"".concat(_.a.labelBlock," ").concat(_.a.groupBlock),children:[Object(a.jsx)("h3",{className:_.a.title,children:"Your Skills"}),o.map((function(e){return Object(a.jsxs)("label",{children:[Object(a.jsx)(h.b,{type:"checkbox",className:_.a.inputBox,name:"skills",value:e}),e]},e)}))]}),Object(a.jsxs)("label",{className:_.a.labelBlock,children:[Object(a.jsx)(h.b,{type:"checkbox",className:_.a.inputBox,name:"licence",id:"licence"}),"All data is right"]}),Object(a.jsx)(C,{type:"submit",classNames:_.a.iconButtonAddContact,"aria-label":"submit button",disabled:t||""===c.experience||!c.licence||""===c.name||""===c.number||0===c.skills.length,children:"Add Contact"})]})}})}}]),n}(o.PureComponent),M=n(40),B=n.n(M);var N=function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("div",{className:B.a.labelBlock,children:[Object(a.jsx)("h4",{className:B.a.title,children:"Find contacts by name, number or level"}),Object(a.jsx)("input",{className:B.a.input,type:"text",name:"filter",value:t,onChange:n})]})},L=n(83),F=n.n(L);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var E=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),H=o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function I(e,t){var n=e.title,a=e.titleId,c=P(e,["title","titleId"]);return o.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":a},c),n?o.createElement("title",{id:a},n):null,E,H)}var J=o.forwardRef(I),T=(n.p,n(21)),R=n.n(T),q=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,o=e.number,c=e.experience,r=e.skills;return Object(a.jsx)(p.Consumer,{children:function(e){var l=e.deleteContact;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("span",{className:R.a.point,children:[n,":"]}),Object(a.jsxs)("span",{className:R.a.point,children:[o,","]}),Object(a.jsxs)("span",{className:R.a.point,children:[c,","]}),Object(a.jsxs)("span",{className:R.a.point,children:["skills: ",r.join(", ")]}),Object(a.jsx)(C,{onClick:function(){return l(t)},"aria-label":"Delete Contact",classNames:R.a.positionButton,children:Object(a.jsx)(J,{width:"20",height:"20"})})]})}})}}]),n}(o.PureComponent),V=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).filterContacts=function(){var t=e.props,n=t.contacts,a=t.filter;return n.filter((function(e){return Object.values(e).some((function(e){return e.toString().toLowerCase().includes(a)}))}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.filterContacts();return Object(a.jsx)("ul",{children:e.map((function(e){var t=e.id,n=e.name,o=e.number,c=e.experience,r=e.skills;return Object(a.jsx)("li",{className:F.a.item,children:Object(a.jsx)(q,{id:t,name:n,number:o,experience:c,skills:r})},t)}))})}}]),n}(o.PureComponent),D=n(53),Y=n.n(D),z=document.querySelector("#modal-root"),U=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).keydownCloseModal=function(t){"Escape"===t.code&&e.props.onClose()},e.backdropCloseModal=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keydownCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keydownCloseModal)}},{key:"render",value:function(){return Object(r.createPortal)(Object(a.jsx)("div",{className:Y.a.backdrop,onClick:this.backdropCloseModal,children:Object(a.jsx)("div",{className:Y.a.content,children:this.props.children})}),z)}}]),n}(o.PureComponent);function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var K=o.createElement("path",{d:"M11 1.10786L9.89214 0L5.5 4.39214L1.10786 0L0 1.10786L4.39214 5.5L0 9.89214L1.10786 11L5.5 6.60786L9.89214 11L11 9.89214L6.60786 5.5L11 1.10786Z"});function W(e,t){var n=e.title,a=e.titleId,c=G(e,["title","titleId"]);return o.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 11 11",ref:t,"aria-labelledby":a},c),n?o.createElement("title",{id:a},n):null,K)}var Q=o.forwardRef(W),X=(n.p,n(26)),$=n.n(X),ee=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={contacts:[],filter:"",showModal:!1},e.changeFilter=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(s.a)({},a,o.toLowerCase()))},e.formSubmitHandler=function(t){e.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[t])}}))},e.deleteContact=function(t){e.setState((function(e){var n=e.contacts.filter((function(e){return e.id!==t}));return{contacts:Object(i.a)(n)}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){t!==this.state&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),0!==t.contacts.length&&this.state.contacts.length>t.contacts.length&&this.toggleModal()}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,o=e.showModal;return Object(a.jsxs)(p.Provider,{value:{deleteContact:this.deleteContact},children:[Object(a.jsx)("h1",{className:$.a.title,children:"Phonebook"}),Object(a.jsx)(C,{onClick:this.toggleModal,"aria-label":"Open Modal",classNames:$.a.iconButtonOpenModal,children:" Add Contact "}),o&&Object(a.jsxs)(U,{onClose:this.toggleModal,children:[Object(a.jsx)(w,{formSubmitHandler:this.formSubmitHandler,contacts:t}),Object(a.jsx)(C,{onClick:this.toggleModal,"aria-label":"Close Modal",classNames:$.a.iconButtonCloseModal,children:Object(a.jsx)(Q,{width:"20",height:"20"})})]}),Object(a.jsx)("h2",{className:$.a.title,children:"Contacts"}),Object(a.jsx)(N,{value:n,onChange:this.changeFilter}),Object(a.jsx)(V,{contacts:t,filter:n})]})}}]),n}(o.PureComponent);ee.defaultProps={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56",experience:"junior",skills:["HTML","CSS"]},{id:"id-2",name:"Hermione Kline",number:"443-89-12",experience:"middle",skills:["HTML","CSS","JS"]},{id:"id-3",name:"Eden Clements",number:"645-17-79",experience:"junior",skills:["HTML","SCSS"]},{id:"id-4",name:"Annie Copeland",number:"227-91-26",experience:"senior",skills:["HTML","CSS","JS","React"]},{id:"id-5",name:"Ann Hits",number:"227-91-46",experience:"junior",skills:["JS"]},{id:"id-6",name:"Ed Clirence",number:"217-01-46",experience:"middle",skills:["HTML","CSS","JS"]}]};var te=ee,ne=document.querySelector("#root");l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(te,{})}),ne)},21:function(e,t,n){e.exports={point:"ContactItem_point__2VYVX",positionButton:"ContactItem_positionButton__26OUL"}},26:function(e,t,n){e.exports={title:"App_title__-GfWs",iconButtonCloseModal:"App_iconButtonCloseModal__1jvOe",iconButtonOpenModal:"App_iconButtonOpenModal__3Ab2A"}},40:function(e,t,n){e.exports={labelBlock:"Filter_labelBlock__17eMJ",title:"Filter_title__mtLuE",input:"Filter_input__2DoVp"}},53:function(e,t,n){e.exports={backdrop:"Modal_backdrop__3FAPo",content:"Modal_content__1VIbZ"}},8:function(e,t,n){e.exports={contactForm:"ContactForm_contactForm__OrlO3",labelBlock:"ContactForm_labelBlock__f81Qb",groupBlock:"ContactForm_groupBlock__q7zFY",title:"ContactForm_title__3MqSl",inputBox:"ContactForm_inputBox__1nc3p",iconButtonAddContact:"ContactForm_iconButtonAddContact__eeRR9"}},82:function(e,t,n){e.exports={IconButton:"IconButton_IconButton__3sU0k"}},83:function(e,t,n){e.exports={item:"ContactList_item__3YsZK"}},90:function(e,t,n){}},[[191,1,2]]]);
//# sourceMappingURL=main.fcea2033.chunk.js.map