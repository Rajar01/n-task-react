import React from "react";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

export default function Home({ onSubmitTask, tasks, onDeleteTask }) {
  return (
    <>
      <AddTask onSubmitTask={onSubmitTask} />
      <Tasks tasks={tasks} onDeleteTask={onDeleteTask} />
    </>
  );
}
