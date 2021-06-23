import React, { FormEventHandler, useEffect, useRef } from "react";

export interface AddTaskProps {
  onAddTask: (text: string) => void;
}

export const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const taskValue = inputRef.current?.value;
    if (!taskValue) return;
    onAddTask(taskValue);
  };

  const submitOnEnter: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSubmit(new Event("submit") as any);
      event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="subtitle is-3 mb-1">Nueva tarea</h3>
      <textarea
        rows={4}
        className="textarea mb-4"
        placeholder="Ingresa los detalles de la tarea..."
        ref={inputRef}
        required
        onKeyPress={submitOnEnter}
      />
      <button className="button is-success" type="submit">
        Agregar
      </button>
    </form>
  );
};
