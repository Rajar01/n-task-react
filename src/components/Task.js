import { FaTrashAlt } from "react-icons/fa";

export default function Task({ task, onDeleteTask }) {
  return (
    <div className="flex flex-row items-center justify-between bg-[#FF5959] p-2 rounded-md border-4 border-black">
      <p className="text-white font-medium">{task.title}</p>
      <div className="flex-1 w-4"></div>
      <FaTrashAlt
        className="text-white text-lg cursor-pointer"
        onClick={() => onDeleteTask(task.id)}
      />
    </div>
  );
}
