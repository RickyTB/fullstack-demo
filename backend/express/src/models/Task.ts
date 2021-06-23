import { model, Schema } from "mongoose";

export interface ITask {
  text: string;
  done: boolean;
  created: Date;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<ITask>({
  text: { type: String, required: true },
  done: { type: Boolean, required: true },
  create: { type: Date, required: true },
});

// 3. Create a Model.
export const TaskModel = model<ITask>("Task", schema);
