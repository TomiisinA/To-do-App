import "./App.css";
import { useState } from "react";
import Todo from "./todo";
type Task = {
  id: number;
  text: string;
  completed: boolean;
};
function App() {
  const [input, setInput] = useState<string>("");
  const [task, setTask] = useState<Task[]>([]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTask((prevTasks) => [...prevTasks, newTask]);
    setInput("");
  };

  const completeTodo = (id: number) => {
    setTask(
      task.map((task) => (task.id === id ? { ...task, completed: true } : task))
    );
  };

  const deleteTodo = (id: number) => {
    setTask(task.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="bg-blue-300 text-white p-4 min-h-screen flex justify-center font-mono items-center">
        <div className="max-w-[500px] h-[100%] w-[100%] bg-white p-4 rounded-md shadow-md">
          <h1 className="text-center text-black text-2xl font-bold">Daily Tasks</h1>
          <div className="flex gap-2 justify-center my-8">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="tasks"
              className="flex-[3] border-2 outline-none border-black-500 text-black placeholder-black-500 p-2 rounded-md"
            />
            <button
              onClick={addTodo}
              className="flex-[1] bg-black cursor-pointer rounded-md text-white text-sm hover:bg-blue-500"
            >
              Add Task
            </button>
          </div>
          <div>
            <h1 className="text-center text-black text-2xl font-bold"> Tasks </h1>
           {task.length > 0 ? (
            <>
             {task.map((task) => {
              return (
                <Todo
                  key={task.id}
                  task={task}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                />
              );
            })}
            </>
            
           ) : (
              <p className="text-center text-black text-lg my-2">You have completed all your tasks!</p>
           )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
