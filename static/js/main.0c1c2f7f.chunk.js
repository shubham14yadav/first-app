(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{12:function(A,D,g){},14:function(A,D,g){"use strict";g.r(D);var B=g(1),C=g.n(B),w=g(6),e=g.n(w),Q=(g(12),g(7)),o=g(5),n=g(0);function c(A){return Object(n.jsxs)("div",{classname:"list-item row jc-space-between",children:[Object(n.jsx)("span",{className:A.itemData.isComplete?"task-complete":"",onClick:function(){return A.markComplete(A.index)},children:A.itemData.description}),Object(n.jsx)("img",{src:"data:image/png;base64,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",className:"delete-icon",onClick:function(){return A.deleteTask(A.index)}})]})}var t=function(){var A=Object(B.useState)(""),D=Object(o.a)(A,2),g=D[0],C=D[1],w=Object(B.useState)([]),e=Object(o.a)(w,2),t=e[0],d=e[1],J=function(){t.push({description:g}),d(t),C("")},k=function(A){var D=t.filter((function(D,g){return g!==A}));d(D)},O=function(A){var D=Object(Q.a)(t);D[A].isComplete=!D[A].isComplete,d(D)};return Object(n.jsxs)("div",{className:"app-background",children:[Object(n.jsx)("p",{className:"heading-text",children:"To-Do-List"}),Object(n.jsxs)("div",{className:"task-container",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{className:"text-input",value:g,onKeyDown:function(A){13===A.keyCode&&J()},onChange:function(A){return C(A.target.value)}}),Object(n.jsx)("button",{className:"add-button",onClick:J,children:"ADD"})]}),(null===t||void 0===t?void 0:t.length)?t.map((function(A,D){return Object(n.jsx)(c,{index:D,itemData:A,deleteTask:k,markComplete:O})})):Object(n.jsx)("p",{className:"no-item-text",children:"No Task Added!"})]}),Object(n.jsx)("p",{className:"footer-text",children:"Shubham"})]})},d=function(A){A&&A instanceof Function&&g.e(3).then(g.bind(null,15)).then((function(D){var g=D.getCLS,B=D.getFID,C=D.getFCP,w=D.getLCP,e=D.getTTFB;g(A),B(A),C(A),w(A),e(A)}))};e.a.render(Object(n.jsx)(C.a.StrictMode,{children:Object(n.jsx)(t,{})}),document.getElementById("root")),d()}},[[14,1,2]]]);
//# sourceMappingURL=main.0c1c2f7f.chunk.js.map