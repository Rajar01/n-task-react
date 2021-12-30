import { useState } from "react";

export default function AddTask({ onSubmitTask }) {
  const [taskInput, setTaskInput] = useState("");

  return (
    <form
      action="#"
      onSubmit={(e) => {
        onSubmitTask(e, taskInput);
        setTaskInput("");
      }}
    >
      <input
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        type="text"
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm placeholder:font-medium placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        name="input-task"
        id="input-task"
        placeholder="Type Your Task Here"
      />
    </form>
  );
}
