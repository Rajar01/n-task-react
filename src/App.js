import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();
  const { addToast } = useToasts();

  useEffect(() => {
    // Fetch All Task
    axios
      .get("http://localhost:4000/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => addToast(err.message, { appearance: "error" }));
  }, [addToast]);

  // Delete Task
  const onDeleteTask = (id) => {
    axios
      .delete(`http://localhost:4000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
        addToast("Successfully Deleted Task", {
          appearance: "success",
          autoDismissTimeout: 1000,
          autoDismiss: true,
        });
      })
      .catch((err) => addToast(err.message, { appearance: "error" }));
  };

  // Add Task
  const onSubmitTask = (e, taskInput) => {
    e.preventDefault();

    if (taskInput === "") {
      addToast("Please Input a Task", { appearance: "error" });
      return;
    }

    axios
      .post("http://localhost:4000/tasks", { title: taskInput })
      .then((res) => {
        setTasks([...tasks, res.data]);
        addToast("Successfully Added Task", {
          appearance: "success",
          autoDismissTimeout: 1000,
          autoDismiss: true,
        });
      })
      .catch((err) => addToast(err.message, { appearance: "error" }));
  };

  return (
    <div className="h-full flex flex-col justify-start items-center py-4 space-y-5">
      <Header />
      <nav className="space-x-4 font-medium">
        <Link
          to="/"
          className={`rounded-md px-3 py-1 ${
            location.pathname === "/" ? "text-white bg-red-500" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`rounded-md px-3 py-1 ${
            location.pathname === "/about" ? "text-white bg-red-500" : ""
          }`}
        >
          About
        </Link>
      </nav>
      <main className="space-y-3">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onSubmitTask={onSubmitTask}
                onDeleteTask={onDeleteTask}
                tasks={tasks}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
