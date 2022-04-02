import path from "path";
import config from "config";
import { readFileSync } from "fs";
import mongoose from "mongoose";

export const connect = () => {
  const db: string = config.get("Db.Uri");

  const connect = () => {
    mongoose
      .connect(db)
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((err) => {
        console.error(`Error connecting to database :`, err);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
