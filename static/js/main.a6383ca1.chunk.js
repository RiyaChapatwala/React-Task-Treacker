(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(9)),i=n(5),l=n(2),d=n(0),j=function(e){var t=e.text,n=e.onClick;return Object(d.jsx)("button",{onClick:n,className:"btn",children:t})},u=function(e){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsx)(j,{color:!0===e.showApp?"red":"green",text:!0===e.showApp?"Close":"Add",onClick:e.onAdd})]})},b=n(8),h=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsx)(b.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},O=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(h,{task:e,onDelete:n,onToggle:c,children:" "},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),j=i[0],u=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],f=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:j,reminder:O}),o(""),u(""),f(!1)):alert("enter task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add-task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Day and time"}),Object(d.jsx)("input",{type:"text",placeholder:"Day & Time",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"save task",className:"btn btn-block"})]})},x=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(l.a)(a,2),j=o[0],b=o[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u,{title:"Task Tracker",onAdd:function(){return r(!n)},showApp:n}),n&&Object(d.jsx)(f,{onAdd:function(e){var t=Math.floor(1e4*Math.random()),n=Object(i.a)({id:t},e);b([].concat(Object(s.a)(j),[n]))}}),j.length>0?Object(d.jsx)(O,{tasks:j,onDelete:function(e){console.log("delete id: "+e),b(j.filter((function(t){return t.id!==e})))},onToggle:function(e){console.log("function called"),b(j.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"no tasks to show"]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.a6383ca1.chunk.js.map