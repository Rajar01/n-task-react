import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import ReactLoading from "react-loading";

export default function Task({ task, onDeleteTask }) {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-row items-center justify-between bg-[#FF5959] p-2 rounded-md border-4 border-black">
      <p className="text-white font-medium">{task.title}</p>
      <div className="flex-1 w-4"></div>
      {loading ? (
        <ReactLoading type="spin" color="#fff" height={"5%"} width={"5%"} />
      ) : (
        <FaTrashAlt
          className="text-white text-lg cursor-pointer"
          onClick={() => {
            setLoading(!loading);
            onDeleteTask(task.id);
            setLoading(!loading);
          }}
        />
      )}
    </div>
  );
}
