import mongoose from "mongoose";

export async function initMongo() {
  return mongoose
    .connect(process.env.DATABASE_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB initialized.");
    });
}
