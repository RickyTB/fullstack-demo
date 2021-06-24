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
  created: { type: Date, required: true },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_: any, ret: any) {
    delete ret._id;
  },
});

// 3. Create a Model.
export const TaskModel = model<ITask>("Task", schema);
