import Task from "./Task";

export default function Tasks({ tasks, onDeleteTask }) {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
        ))
      ) : (
        <p className="border-4 border-black bg-white px-4 py-2 rounded-md w-96 font-medium text-center">
          No Tasks
        </p>
      )}
    </>
  );
}
