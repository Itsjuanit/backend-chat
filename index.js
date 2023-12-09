import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/message.js";
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Configuración de Mongoose
mongoose.Promise = global.Promise;

// Obtén la URL de MongoDB desde las variables de entorno
const url = process.env.MONGODB_URL; // Cambia 'tu-base-de-datos' por el nombre de tu base de datos

// Puerto del servidor
const PORT = process.env.PORT;

// Crear la aplicación Express
const app = express();

// Crear el servidor HTTP con Express
const server = http.createServer(app);

// Configuración del Socket.IO
const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);

// Manejar conexiones con Socket.IO
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (message, name) => {
    socket.broadcast.emit("message", {
      body: message,
      from: name,
    });
  });
});

// Conexión a MongoDB
mongoose
  .connect(url)
  .then(() => {
    console.log("CONEXIÓN EXITOSA");
    server.listen(PORT, () => {
      console.log("SERVIDOR EJECUTÁNDOSE EN HTTP LOCALHOST", PORT);
    });
  })
  .catch((error) => {
    console.error("Error de conexión a MongoDB:", error);
  });
