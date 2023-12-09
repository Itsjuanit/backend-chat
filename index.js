import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/message.js";

//config MONGOOSE
let url =
  "mongodb+srv://itsjuanit:LAHhTWEi6LP8gJTY@cluster0.4pjbylk.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

const app = express();
const PORT = 4000;

//SERVIDOR CON MODULO DE HTTP
const server = http.createServer(app);
const io = new SocketServer(server, {
  core: {
    origin: "*",
  },
});

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);

//Conexion a MongoDb
mongoose
  .connect(url)
  .then(() => {
    console.log("CONEXION EXITOSA");
    server.listen(PORT, () => {
      console.log("SERVIDOR EJECUTANDOSE EN HTTP LOCALHOST", PORT);
    });
  })
  .catch((error) => {
    console.error("Error de conexión a MongoDB:", error);
  });
