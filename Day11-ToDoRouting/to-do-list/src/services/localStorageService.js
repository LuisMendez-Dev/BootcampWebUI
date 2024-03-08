const TASKS_STORAGE_KEY = "tasks";

const getTasks = () => {
  const tasksJson = localStorage.getItem(TASKS_STORAGE_KEY);
  return tasksJson ? JSON.parse(tasksJson) : [];
};

const addTask = (task) => {
  const tasks = getTasks();
  const newTasks = [...tasks, task];
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(newTasks));
};

const deleteTask = (taskId) => {
  const tasks = getTasks();
  const newTasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(newTasks));
};

const setTasks = (tasks) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

export { getTasks, addTask, deleteTask, setTasks };
