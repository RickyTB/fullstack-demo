import { useCallback, useState } from "react";
import { useTasks } from "../../hooks";
import { AddTask } from "../AddTask";
import { TaskList } from "../TaskList";

export interface TaskContainerProps {}

export const TaskContainer: React.FC<TaskContainerProps> = () => {
  const { taskList, loading, addNewTask } = useTasks();
  const [addMode, setAddMode] = useState<boolean>(false);

  const handleAddButton = useCallback(() => {
    setAddMode(true);
  }, []);

  const handleCancelButton = useCallback(() => {
    setAddMode(false);
  }, []);

  const handleAddTask = useCallback(
    (text: string) => {
      addNewTask(text);
      setAddMode(false);
    },
    [addNewTask]
  );

  return (
    <div className="columns box is-flex-direction-column">
      <section className="level mb-0 is-justify-content-space-between is-align-items-center">
        <h1 className="title is-1 mb-0">Mi lista de tareas</h1>
        {addMode ? (
          <button
            className="button is-danger is-light"
            onClick={handleCancelButton}
          >
            Cancelar
          </button>
        ) : (
          <button
            className="button is-primary is-light"
            onClick={handleAddButton}
          >
            + Agregar Tarea
          </button>
        )}
      </section>
      <hr />
      {addMode ? (
        <AddTask onAddTask={handleAddTask} />
      ) : loading ? (
        <p>Cargando...</p>
      ) : (
        <TaskList tasks={taskList} />
      )}
      <hr />
      <p className="has-text-centered">2021, Universidad Central Del Ecuador</p>
      <p className="has-text-centered">Proyecto de Tesis</p>
    </div>
  );
};
