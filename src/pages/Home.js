import React from "react";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import ReactLoading from "react-loading";

export default function Home({
  onSubmitTask,
  tasks,
  onDeleteTask,
  loading,
  loadingAddingTask,
}) {
  return (
    <>
      <AddTask
        loadingAddingTask={loadingAddingTask}
        onSubmitTask={onSubmitTask}
      />
      {loading ? (
        <div className="border-4 border-black bg-white px-4 py-2 rounded-md w-96 flex flex-row items-center justify-center">
          <ReactLoading
            type="cubes"
            color="#ef4444"
            height={"8%"}
            width={"8%"}
          />
        </div>
      ) : (
        <>
          <Tasks tasks={tasks} onDeleteTask={onDeleteTask} />
        </>
      )}
    </>
  );
}
