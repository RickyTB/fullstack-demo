export interface TaskContainerProps {}

export const TaskContainer: React.FC<TaskContainerProps> = () => {
  return (
    <div className="columns box is-flex-direction-column">
      <h1 className="title is-1 mb-0">Mi lista de tareas</h1>
      <hr />
      <h3 className="subtitle is-3">Pendientes</h3>
      <h3 className="subtitle is-3">Finalizadas</h3>
      <hr />
      <p className="has-text-centered">2021, Universidad Central Del Ecuador</p>
      <p className="has-text-centered">Proyecto de Tesis</p>
    </div>
  );
};
