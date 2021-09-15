import { observer } from "mobx-react-lite";

import Todo from "./Todo";

const TodoList = observer(({ store }) => {
  const onNewTodo = () => {
    store.addTodo(prompt("Enter a new todo:", "coffee plz"));
  };

  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <Todo todo={todo} key={idx} />
        ))}
      </ul>
      <button onClick={onNewTodo}>New Todo</button>
      <small> (double-click a todo to edit)</small>
    </div>
  );
});

export default TodoList;
