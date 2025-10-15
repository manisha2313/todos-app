import { useState } from "react";

function App() {
  const [tasks, setTask] = useState([]);
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (tasks.trim() === '') return;// ignore empty input
    const newtodo = {
      id: Date.now(),
      text: tasks,
      completed: false
    };
    setTodos([...todos, newtodo]) // Add new todo immutably
    setTask("") //clear input
  }
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-600 mt-10">Todo App</h1>

      <div className="bg-white shadow-md rounded-2xl p-6 mt-6 w-96">
        {/* Input and Add button */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={tasks}
            placeholder="Enter a new task..."
            className="border border-gray-300 rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Add
          </button>
        </div>

        {/* Todo List placeholder */}
        <div>
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center italic">No tasks yet 😴</p>
          ) : (
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span>{todo.text}</span>
                  <div className="flex gap-5">
                  <button onClick={()=> handleDelete(todo.id)} className="outline-solid p-1">Delete</button>
                  <input type="checkbox"></input>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
