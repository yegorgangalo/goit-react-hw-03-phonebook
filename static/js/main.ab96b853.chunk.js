(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{186:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(74),l=n.n(i),o=(n(85),n(9)),s=n(30),u=n(2),b=n(3),m=n(5),j=n(7),d=n(46),p=n(11),h=n(36),x=n(188),O=n(8),f=n.n(O),v=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={expLevel:["junior","middle","senior"],skills:["HTML","CSS","JS","SCSS","Git","React"]},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.expLevel,a=t.skills;return Object(c.jsx)(p.d,{initialValues:{name:"",number:"",experience:"",licence:!1,skills:[]},validationSchema:h.b().shape({name:h.c().min(2,"Too Short!").max(30,"Too Long!").required("Required"),number:h.a().max(1e12,"Too Long!").positive().integer().required("Required")}),onSubmit:function(t,n){var c=n.setSubmitting,a=n.resetForm,r=t.name,i=t.number;if(e.props.contacts.some((function(e){return e.name===r||e.number===i})))return alert("Contact with such ".concat(r," or ").concat(i," is already in Phonebook")),void c(!1);e.props.formSubmitHandler(Object(d.a)(Object(d.a)({},t),{},{id:Object(x.a)()})),c(!1),a({name:"",number:"",experience:"",licence:!1,skills:[]})},children:function(e){var t=e.isSubmitting,r=e.values;return Object(c.jsxs)(p.c,{className:f.a.contactForm,children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name "}),Object(c.jsx)(p.b,{className:f.a.labelBlock,type:"text",name:"name"}),Object(c.jsx)(p.a,{name:"name",component:"div"}),Object(c.jsx)("label",{htmlFor:"number",children:"Number "}),Object(c.jsx)(p.b,{className:f.a.labelBlock,type:"text",name:"number"}),Object(c.jsx)(p.a,{name:"number",component:"div"}),Object(c.jsxs)("div",{role:"group","aria-labelledby":"radio-group",className:"".concat(f.a.labelBlock," ").concat(f.a.groupBlock),children:[Object(c.jsx)("h3",{className:f.a.title,children:"Your Level"}),n.map((function(e){return Object(c.jsxs)("label",{children:[Object(c.jsx)(p.b,{type:"radio",className:f.a.inputBox,name:"experience",value:e}),e]},e)}))]}),Object(c.jsxs)("div",{role:"group","aria-labelledby":"checkbox-group",className:"".concat(f.a.labelBlock," ").concat(f.a.groupBlock),children:[Object(c.jsx)("h3",{className:f.a.title,children:"Your Skills"}),a.map((function(e){return Object(c.jsxs)("label",{children:[Object(c.jsx)(p.b,{type:"checkbox",className:f.a.inputBox,name:"skills",value:e}),e]},e)}))]}),Object(c.jsxs)("label",{className:f.a.labelBlock,children:[Object(c.jsx)(p.b,{type:"checkbox",className:f.a.inputBox,name:"licence",id:"licence"}),"All data is right"]}),Object(c.jsx)("button",{type:"submit",className:f.a.button,disabled:t||""===r.experience||!r.licence||""===r.name||""===r.number||0===r.skills.length,children:"Add Contact"})]})}})}}]),n}(a.Component),k=n(49),S=n.n(k);var C=function(e){var t=e.value,n=e.onChange;return Object(c.jsxs)("div",{className:S.a.labelBlock,children:[Object(c.jsx)("h4",{className:S.a.title,children:"Find contacts by name, number or level"}),Object(c.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})},_=n(50),g=n.n(_),y=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).filterContacts=function(){var t=e.props,n=t.contacts,c=t.filter;return n.filter((function(e){return Object.values(e).some((function(e){return e.toString().toLowerCase().includes(c)}))}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.filterContacts();return Object(c.jsx)("ul",{className:g.a.contactList,children:t.map((function(t){var n=t.id,a=t.name,r=t.number,i=t.experience,l=t.skills;return Object(c.jsxs)("li",{className:g.a.item,children:[Object(c.jsxs)("span",{children:[a,":"]}),Object(c.jsxs)("span",{children:[r,","]}),Object(c.jsxs)("span",{children:[i,","]}),Object(c.jsxs)("span",{children:["skills: ",l.join(", ")]}),Object(c.jsx)("button",{type:"button",onClick:function(){return e.props.deleteContact(n)},children:"Delete"})]},n)}))})}}]),n}(a.Component),L=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={contacts:e.props.contacts,filter:""},e.changeFilter=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(s.a)({},c,a.toLowerCase()))},e.formSubmitHandler=function(t){e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[t])}}))},e.deleteContact=function(t){e.setState((function(e){var n=e.contacts.filter((function(e){return e.id!==t}));return{contacts:Object(o.a)(n)}}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"title",children:"Phonebook"}),Object(c.jsx)(v,{formSubmitHandler:this.formSubmitHandler,contacts:t}),Object(c.jsx)("h2",{className:"title",children:"Contacts"}),Object(c.jsx)(C,{value:n,onChange:this.changeFilter}),Object(c.jsx)(y,{contacts:t,filter:n,deleteContact:this.deleteContact})]})}}]),n}(a.Component);L.defaultProps={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56",experience:"junior",skills:["HTML","CSS"]},{id:"id-2",name:"Hermione Kline",number:"443-89-12",experience:"middle",skills:["HTML","CSS","JS"]},{id:"id-3",name:"Eden Clements",number:"645-17-79",experience:"junior",skills:["HTML","SCSS"]},{id:"id-4",name:"Annie Copeland",number:"227-91-26",experience:"senior",skills:["HTML","CSS","JS","React"]},{id:"id-5",name:"Ann Hits",number:"227-91-46",experience:"junior",skills:["JS"]},{id:"id-6",name:"Ed Clirence",number:"217-01-46",experience:"middle",skills:["HTML","CSS","JS"]}]};var N=L,B=document.querySelector("#root");l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),B)},49:function(e,t,n){e.exports={labelBlock:"Filter_labelBlock__17eMJ",title:"Filter_title__mtLuE"}},50:function(e,t,n){e.exports={contactList:"ContactList_contactList__3MzlG",item:"ContactList_item__3YsZK"}},8:function(e,t,n){e.exports={contactForm:"ContactForm_contactForm__OrlO3",labelBlock:"ContactForm_labelBlock__f81Qb",groupBlock:"ContactForm_groupBlock__q7zFY",title:"ContactForm_title__3MqSl",inputBox:"ContactForm_inputBox__1nc3p",button:"ContactForm_button__1MLZK"}},85:function(e,t,n){}},[[186,1,2]]]);
//# sourceMappingURL=main.ab96b853.chunk.js.map