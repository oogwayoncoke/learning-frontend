import { useState } from "react";

const Todo = () => {
  const [mode, setMode] = useState(false);
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("Low");

  const priorityWeight = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  const addElement = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      priority: priority,
    };

    setItem([...item, newTask]);
    setInput("");
  };

  const removeItem = (id) => {
    setItem(item.filter((t) => t.id !== id));
  };

  const updatePriority = (id, newPriority) => {
    setItem(
      item.map((t) => (t.id === id ? { ...t, priority: newPriority } : t)),
    );
  };

  const getPriorityStyles = (p) => {
    switch (p) {
      case "High":
        return "border-red-500 text-red-700 dark:text-red-400";
      case "Medium":
        return "border-amber-500 text-amber-700 dark:text-amber-400";
      default:
        return "border-blue-500 text-blue-700 dark:text-blue-400";
    }
  };

  const sortedItems = [...item].sort((a, b) => {
    return priorityWeight[a.priority] - priorityWeight[b.priority];
  });

  return (
    <div className={`${mode ? "dark" : ""} min-h-screen w-full`}>
      <div className="min-h-screen w-full transition-colors duration-300 dark:bg-slate-900 bg-amber-50 p-4">
        <div className="flex justify-end">
          <button
            className="border-2 px-3 py-1 text-sm rounded hover:bg-slate-200 dark:text-white dark:border-slate-500 dark:hover:bg-slate-700 transition-all"
            onClick={() => setMode(!mode)}
          >
            {mode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="mt-10 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold dark:text-white text-slate-800 mb-8">
            My Tasks
          </h1>

          <form onSubmit={addElement} className="flex flex-col gap-3 mb-10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1 p-3 rounded-lg border-2 dark:bg-slate-800 dark:text-white dark:border-slate-700 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="p-3 rounded-lg border-2 dark:bg-slate-800 dark:text-white dark:border-slate-700 border-gray-300 focus:outline-none"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Add
              </button>
            </div>
          </form>

          <div className="space-y-4 text-left">
            {sortedItems.map((task) => (
              <div
                key={task.id}
                onClick={() => removeItem(task.id)}
                className={`p-4 rounded-md shadow-sm dark:bg-slate-950 bg-white border-l-8 ${getPriorityStyles(
                  task.priority,
                )} cursor-pointer hover:opacity-90 transition-all group relative`}
              >
                <div className="flex justify-between items-center">
                  <span className="dark:text-gray-200 text-slate-800 font-medium">
                    {task.text}
                  </span>

                  <select
                    value={task.priority}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      e.stopPropagation();
                      updatePriority(task.id, e.target.value);
                    }}
                    className="text-[10px] uppercase font-bold tracking-widest bg-transparent border border-gray-300 dark:border-slate-700 rounded px-1 cursor-default outline-none"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <span className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 flex items-center justify-center text-red-600 text-xs font-bold transition-opacity pointer-events-none">
                  (Click background to Remove)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
