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

  const addNewTask = useCallback(async (text: string) => {
    setLoading(true);
    const task = await (
      await fetch(`${API_URL}/tasks`, {
        method: "POST",
        body: JSON.stringify({ text, done: false }),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
    ).json();
    setTaskList((taskList) => [task, ...taskList]);
    setLoading(false);
  }, []);

  return { taskList, loading, reloadTasks, addNewTask };
};
