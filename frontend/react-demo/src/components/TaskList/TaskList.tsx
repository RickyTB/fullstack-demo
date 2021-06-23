import { useMemo } from "react";
import { ITask } from "../../models";

export interface TaskListProps {
  tasks: ITask[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [pending, done] = useMemo(() => {
    return tasks.reduce(
      (arr, task) => {
        if (!task.done) arr[0].push(task);
        else arr[1].push(task);
        return arr;
      },
      [[], []] as [ITask[], ITask[]]
    );
  }, [tasks]);
  return (
    <>
      <h3 className="subtitle is-3 mb-1">Pendientes</h3>
      <div className="mb-4">
        {pending.map((task) => (
          <p key={task.id}>{task.text}</p>
        ))}
        {pending.length === 0 && <p>No tienes tareas pendientes.</p>}
      </div>
      <h3 className="subtitle is-3 mb-1">Finalizadas</h3>
      <div className="mb-4">
        {done.map((task) => (
          <p key={task.id}>{task.text}</p>
        ))}
        {done.length === 0 && <p>No tienes tareas finalizadas.</p>}
      </div>
    </>
  );
};
