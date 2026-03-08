import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/TodoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const edit = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  useEffect(() => {
    if (edit && edit.isEdit) {
      setInput(edit.text);
    } else {
      setInput("");
    }
  }, [edit]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (edit && edit.isEdit) {
      dispatch(updateTodo({ id: edit.id, text: input }));
      setInput("");
    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {edit && edit.isEdit ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
