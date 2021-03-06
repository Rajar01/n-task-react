import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Header from "./components/Header";
import APISERVER from "./constant";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingAddingTask, setLoadingAddingTask] = useState(false);
  const location = useLocation();
  const { addToast } = useToasts();

  useEffect(() => {
    // Fetch All Task
    setLoading(true);
    axios
      .get(`${APISERVER}/tasks`)
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        addToast(err.message, { appearance: "error" });
        setLoading(false);
      });
  }, [addToast]);

  // Delete Task
  const onDeleteTask = (id) => {
    axios
      .delete(`${APISERVER}/tasks/${id}`)
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

    if (taskInput.length > 60) {
      addToast("Text Too Long", { appearance: "error" });
      return;
    }

    setLoadingAddingTask(true);

    axios
      .post(`${APISERVER}/tasks`, { title: taskInput })
      .then((res) => {
        setTasks([...tasks, res.data]);
        addToast("Successfully Added Task", {
          appearance: "success",
          autoDismissTimeout: 1000,
          autoDismiss: true,
        });
        setLoadingAddingTask(false);
      })
      .catch((err) => {
        addToast(err.message, { appearance: "error" });
        setLoadingAddingTask(false);
      });
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
                loadingAddingTask={loadingAddingTask}
                loading={loading}
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
