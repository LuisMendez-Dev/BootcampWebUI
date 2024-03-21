import { getTasks } from "../services/localStorageService";

const calculateId = () => {
  const tasks = getTasks();
  const lastTask = tasks[tasks.length - 1];
  return lastTask ? lastTask.id + 1 : 1;
};

export default calculateId;
