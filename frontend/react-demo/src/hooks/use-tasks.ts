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

  const updateTask = useCallback(
    async (id: string, taskUpdate: { text: string; done: boolean }) => {
      setLoading(true);
      const task = await (
        await fetch(`${API_URL}/tasks/${id}`, {
          method: "PUT",
          body: JSON.stringify(taskUpdate),
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        })
      ).json();
      setTaskList((taskList) =>
        taskList.map((taskItem) => (taskItem.id === id ? task : taskItem))
      );
      setLoading(false);
    },
    []
  );

  const deleteTask = useCallback(async (id: string) => {
    setLoading(true);
    await (
      await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
      })
    ).json();
    setTaskList((taskList) =>
      taskList.filter((taskItem) => taskItem.id !== id)
    );
    setLoading(false);
  }, []);

  return { taskList, loading, reloadTasks, addNewTask, updateTask, deleteTask };
};
