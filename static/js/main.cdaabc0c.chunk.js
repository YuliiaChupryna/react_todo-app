(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,o){e.exports=o(18)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(9),i=o.n(r),c=(o(15),o(16),o(6)),l=o(7),d=o(1),s=o(2),u=o(4),m=o(3),f=o(5),p=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={editingTodoTitle:"",editingTodoId:0},o.startEditing=function(e,t){o.setState(function(o){return{editingTodoTitle:t,editingTodoId:e}})},o.handleTodoChange=function(e){var t=e.target.value;o.setState(function(e){return{editingTodoTitle:t}})},o.saveEditedTodo=function(e){var t=o.props,n=t.removeTodo,a=t.editTodo,r=o.state.editingTodoTitle;r.trim()?(a(e.id,r.trim()),o.setState(function(e){return{editingTodoTitle:"",editingTodoId:0}})):n(e.id)},o.handleKeyPress=function(e,t){"Enter"===e.key&&o.saveEditedTodo(t),"Escape"===e.key&&o.setState(function(e){return{editingTodoTitle:"",editingTodoId:0}})},o}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.todos,n=t.setTodoCompleted,r=t.removeTodo,i=this.state,c=i.editingTodoTitle,l=i.editingTodoId;return a.a.createElement("ul",{className:"todo-list"},o.map(function(t){return a.a.createElement("li",{className:l===t.id?"editing":""},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",onClick:function(){return n(t.id)},checked:t.completed}),a.a.createElement("label",{onDoubleClick:function(){return e.startEditing(t.id,t.title)}},t.title),a.a.createElement("button",{onClick:function(){return r(t.id)},type:"button",className:"destroy"})),l===t.id&&a.a.createElement("input",{type:"text",className:"edit",autoFocus:!0,value:c,onChange:e.handleTodoChange,onKeyUp:function(o){return e.handleKeyPress(o,t)},onBlur:function(){return e.saveEditedTodo(t)}}))}))}}]),t}(a.a.Component),h=function(e){var t=e.allTodos,o=e.filter,n=e.setFilter,r=e.clearCompletedTodos;return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},t.filter(function(e){return!e.completed}).length," ","items left"),a.a.createElement("ul",{className:"filters"},["all","active","completed"].map(function(e){return a.a.createElement("li",null,a.a.createElement("a",{href:"#/".concat(e),onClick:function(){return n(e)},className:o===e?"selected":""},e.split("").map(function(e,t){return 0===t?e.toUpperCase():e}).join("")))})),t.some(function(e){return e.completed})&&a.a.createElement("button",{type:"button",className:"clear-completed",onClick:r},"Clear completed"))},T=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={newTodoTitle:""},o.handleOnChange=function(e){var t=e.target.value;o.setState(function(e){return{newTodoTitle:t}})},o.toSubmit=function(e){e.preventDefault();var t=o.state.newTodoTitle;(0,o.props.addTodo)(t),o.setState({newTodoTitle:""})},o}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.newTodoTitle;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("form",{onSubmit:this.toSubmit},a.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:e,onChange:this.handleOnChange,onBlur:this.toSubmit})))}}]),t}(a.a.Component),g=(o(17),function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],currentFilter:"all",maxId:0},o.addTodo=function(e){e.trim()&&o.setState(function(t){return{todos:[].concat(Object(l.a)(t.todos),[{title:e.trim(),id:t.maxId+1,completed:!1}]),maxId:t.maxId+1}})},o.setTodoCompleted=function(e){o.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e?Object(c.a)({},t,{completed:!t.completed}):Object(c.a)({},t)})}})},o.removeTodo=function(e){o.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},o.setAllTodosCompleted=function(e){o.setState(function(t){return{todos:t.todos.map(function(t){return Object(c.a)({},t,{completed:e})})}})},o.setFilter=function(e){o.setState(function(t){return{currentFilter:e}})},o.clearCompletedTodos=function(){o.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},o.editTodo=function(e,t){o.setState(function(o){return{todos:o.todos.map(function(o){return e===o.id?Object(c.a)({},o,{title:t}):Object(c.a)({},o)})}})},o}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this,o=this.state,n=o.currentFilter,r=o.todos;switch(n){case"active":e=r.filter(function(e){return!e.completed});break;case"completed":e=r.filter(function(e){return e.completed});break;default:e=Object(l.a)(r)}return a.a.createElement("section",{className:"todoapp"},a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(T,{addTodo:this.addTodo})),a.a.createElement("section",{className:"main"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(e){return t.setAllTodosCompleted(e.target.checked)},checked:r.length&&r.every(function(e){return e.completed})}),0!==r.length&&a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as completed"),a.a.createElement(p,{todos:e,setTodoCompleted:this.setTodoCompleted,removeTodo:this.removeTodo,editTodo:this.editTodo})),0!==r.length&&a.a.createElement(h,{allTodos:r,filter:n,setFilter:this.setFilter,clearCompletedTodos:this.clearCompletedTodos}))}}]),t}(a.a.Component));i.a.render(a.a.createElement(g,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.cdaabc0c.chunk.js.map