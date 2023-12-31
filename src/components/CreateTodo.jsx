import { useState } from "react";

const CreateTodo = ({ todos, setTodos, todoId, setTodoId }) => {
  const [newTodo, setNewTodo] = useState("");

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    setTodos([...todos, { id: todoId, title: newTodo, isDone: false }]);
    setTodoId(todoId + 1);
    setNewTodo("");

    console.log(todos);
  };

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={onSubmitCreateTodo}>
      <input
        className="px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-300"
        type="text"
        value={newTodo}
        onChange={onChangeNewTodo}
      />
      <input
        className="px-4 py-2 bg-blue-300 active:bg-blue-600 ml-4 rounded-full shadow-md"
        type="submit"
        value="+"
      />
    </form>
  );
};

export default CreateTodo;
