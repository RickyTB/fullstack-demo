import { format } from "date-fns";
import React, { ChangeEventHandler, useState } from "react";
import { ImPencil, ImBin } from "react-icons/im";
import { ITask } from "../../models";

export interface TaskItemProps {
  task: ITask;
  onTaskUpdated: (
    id: string,
    taskUpdate: { text: string; done: boolean }
  ) => void;
  onTaskDeleted: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onTaskUpdated,
  onTaskDeleted,
}) => {
  const [updateMode, setUpdateMode] = useState(false);

  const handleCheckChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onTaskUpdated(task.id, { text: task.text, done: e.target.checked });
  };

  const handleDelete = () => {
    onTaskDeleted(task.id);
  };

  const handleUpdate = () => {
    setUpdateMode(true);
  };

  const submitOnEnter: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      onTaskUpdated(task.id, {
        text: (event.target as any).value,
        done: task.done,
      });
      event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
      setUpdateMode(false);
    }
  };

  return (
    <div className="box media mb-4">
      <div className="media-left">
        <label className="checkbox">
          <input
            disabled={updateMode}
            type="checkbox"
            checked={task.done}
            onChange={handleCheckChange}
          />
        </label>
      </div>
      <div className="media-content">
        {!updateMode ? (
          <>
            <p className="is-size-5">{task.text}</p>
            <small className="is-italic">
              Apuntado el {format(new Date(task.created), "dd/MM/yy HH:mm")}
            </small>
          </>
        ) : (
          <textarea
            className="textarea"
            defaultValue={task.text}
            onKeyPress={submitOnEnter}
          />
        )}
      </div>
      <div className="media-right">
        <button
          className="button is-light mr-2"
          onClick={handleUpdate}
          disabled={updateMode}
        >
          <ImPencil />
        </button>
        <button
          className="button is-danger is-light"
          onClick={handleDelete}
          disabled={updateMode}
        >
          <ImBin />
        </button>
      </div>
    </div>
  );
};
