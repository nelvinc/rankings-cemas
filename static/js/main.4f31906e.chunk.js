(this["webpackJsonpranking-cemas"]=this["webpackJsonpranking-cemas"]||[]).push([[0],{12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(6),r=c.n(a),l=c(2),o=c(0);function i(e){var t=e.data,c=Object(n.useState)(""),s=Object(l.a)(c,2),a=s[0];s[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("li",{className:"list-group-item list-group-item-action ".concat(a),children:[Object(o.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(o.jsx)("h5",{className:"mb-1",children:t.nombre_estudiante}),Object(o.jsx)("small",{children:t.numero_estudiante})]}),Object(o.jsxs)("p",{className:"mb-1",children:[" Asignaturas: ",t.asignaturas.map((function(e){return Object(o.jsxs)("small",{children:[e.codigo_asignatura," "]})}))]}),Object(o.jsxs)("p",{className:"mb-1",children:[" Modulos: ",t.modulos.map((function(e){return Object(o.jsxs)("small",{children:[e.codigo_asignatura," "]})}))]}),Object(o.jsx)("p",{className:"mb-1",children:" Promedio Academico : 92.56345 "}),Object(o.jsx)("p",{className:"mb-1",children:" Promedio Tecnico : 92.56345 "}),Object(o.jsx)("p",{className:"mb-1",children:" Promedio General : 92.56345 "}),Object(o.jsxs)("small",{children:["Titular: ",t.nombre_titular]}),Object(o.jsx)("div",{className:"mt-3",children:Object(o.jsx)("button",{className:"btn btn-outline-success ",children:"Buscar"})})]})})}function j(e){var t=e.url;console.log("Lista Boletines URL: ",t);var c=function(e){var t=Object(n.useRef)(!0),c=Object(n.useState)({data:null,loading:!0,error:null}),s=Object(l.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){return function(){t.current=!1}}),[]),Object(n.useEffect)((function(){r({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){t.current&&r({loading:!1,error:null,data:e})})).catch((function(){r({data:null,loading:!1,error:"No se pudo cargar la info"})}))}),[e]),a}(t),s=c.data,a=c.loading,r=c.error;return a&&t?Object(o.jsx)("h1",{children:"Loading"}):r?(console.log(r),Object(o.jsx)("h3",{children:r})):(console.log("Datos: ",s),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"list-group",children:s.data.filter((function(e){return e.asignaturas.length>2})).map((function(e){return Object(o.jsx)(i,{data:e},e._id)}))})}))}var u=function(e,t){var c="/boletin/".concat(e,":").concat(t,":");return"".concat("https://cemasapi.herokuapp.com").concat("/reportes").concat(encodeURI(c))},d=c(3),b=c(5);function m(e){var t=e.handleUrl,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),c=Object(l.a)(t,2),s=c[0],a=c[1];return[s,function(e){var t=e.target;a(Object(b.a)(Object(b.a)({},s),{},Object(d.a)({},t.name,t.value)))},function(){a(e)}]}({curso:"",periodo:""}),s=Object(l.a)(c,3),a=s[0],r=s[1],i=s[2],j=a.curso,m=a.periodo;return Object(o.jsx)("div",{children:Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.info("Form Values: ",j,m);var c=u(j,m);console.info("URL: ",c),t(c),i()},children:Object(o.jsxs)("div",{className:"form-row ml-5",children:[Object(o.jsx)("div",{className:"col-5",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Curso",name:"curso",value:j,onChange:r})}),Object(o.jsx)("div",{className:"col-5",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Periodo",name:"periodo",value:m,onChange:r})}),Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)("button",{className:"btn btn-outline-success ",type:"submit",children:"Buscar"})})]})})})}var h=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1];return console.log(c),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"row mt-4",children:Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("h1",{children:"Boletines:"}),Object(o.jsx)("hr",{})]})}),Object(o.jsx)("div",{className:"row mt-4",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)(m,{handleUrl:function(e){s(e)}})})}),Object(o.jsx)("div",{className:"row mt-4",children:Object(o.jsxs)("div",{className:"col mt-4 ml-5 mr-5 mb-5",children:[Object(o.jsx)("h3",{children:"Lista de boletines:"}),Object(o.jsx)("hr",{}),c&&Object(o.jsx)(j,{url:c})]})})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),O()}},[[12,1,2]]]);
//# sourceMappingURL=main.4f31906e.chunk.js.map