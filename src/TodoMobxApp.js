import React from "react";

import TodoList from "./components/Todo/TodoList";
import TodoStore from "./stores/Todo";

const todoStore = new TodoStore();

const TodoMobxApp = () => <TodoList store={todoStore} />;

export default TodoMobxApp;
