
import { FaCheckCircle, FaTrash } from "react-icons/fa";

type TodoProp = {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  completeTodo: (id: number) => void;
deleteTodo: (id: number) => void;
  
};
function Todo({ task,completeTodo,deleteTodo }: TodoProp) {
  return (
    <div>
      {/* Task section */}
      <div>
        <div className="bg-blue-500 p-2 rounded-md flex justify-between items-center my-4 ">
          <p className={`${task.completed ===true ? "line-through" : ""}`}>{task.text}</p>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaCheckCircle
              className="hover:text-green-500"
              onClick={() => completeTodo(task.id)}
            />
            <FaTrash className="hover:text-black" onClick={() =>deleteTodo(task.id)} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todo;
