import { useState } from "react";
import ReactLoading from "react-loading";

export default function AddTask({ onSubmitTask, loadingAddingTask }) {
  const [taskInput, setTaskInput] = useState("");

  return (
    <form
      className="relative"
      action="#"
      onSubmit={(e) => {
        onSubmitTask(e, taskInput);
        setTaskInput("");
      }}
    >
      {loadingAddingTask && (
        <div
          className={`flex bg-black/50 z-50 absolute w-full h-full  flex-col items-center py-2 rounded-md`}
        >
          <ReactLoading type="spin" color="#000" height={"5%"} width={"5%"} />
        </div>
      )}

      <input
        disabled={loadingAddingTask}
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        type="text"
        className="disabled mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm placeholder:font-medium placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        name="input-task"
        id="input-task"
        placeholder="Type Your Task Here"
      />
    </form>
  );
}
