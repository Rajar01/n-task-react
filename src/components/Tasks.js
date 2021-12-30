import Task from "./Task";

export default function Tasks({ tasks, onDeleteTask }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </>
  );
}
