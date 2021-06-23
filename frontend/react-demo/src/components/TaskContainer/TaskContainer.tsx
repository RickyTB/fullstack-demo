import { useTasks } from "../../hooks";
import { TaskList } from "../TaskList";

export interface TaskContainerProps {}

export const TaskContainer: React.FC<TaskContainerProps> = () => {
  const { taskList } = useTasks();

  return (
    <div className="columns box is-flex-direction-column">
      <h1 className="title is-1 mb-0">Mi lista de tareas</h1>
      <hr />
      <TaskList tasks={taskList} />
      <hr />
      <p className="has-text-centered">2021, Universidad Central Del Ecuador</p>
      <p className="has-text-centered">Proyecto de Tesis</p>
    </div>
  );
};
