import { useCallback, useState } from "react";
import { ITask } from "../models";

const API_URL = "http://localhost:5000/api";

export const useTasks = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const reloadTasks = useCallback(async () => {
    setLoading(true);
    const tasks = await (await fetch(`${API_URL}/tasks`)).json();
    setTaskList(tasks);
    setLoading(false);
  }, []);

  const addNewTask = useCallback((task: Omit<ITask, "id">) => {
    //TODO: call api
  }, []);

  return { taskList, loading, reloadTasks, addNewTask };
};
