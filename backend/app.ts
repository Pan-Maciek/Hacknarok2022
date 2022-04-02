import express, { Application, Request, Response } from "express";
import logger from "morgan";
import config from "config";
import { connect } from "./persistence/client";

const app: Application = express();
const port: number | string = process.env.PORT || config.get("Default.Port");

// Body parsing Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

connect();

// let indexRouter = require("./routes/index");
import indexRouter from "./routes/index";
app.use("/", indexRouter);

const createError = (statusCode: number) => {
  const message = {
    404: "Not Found",
  } as any;
  return { status: statusCode, message: message[statusCode] };
};

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: any) {
  next(createError(404));
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
