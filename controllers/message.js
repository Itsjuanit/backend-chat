import Message from "../models/message.js";

const controller = {
  // Función para guardar un mensaje
  save: async (req, res) => {
    try {
      const { message, from } = req.body;

      if (!message || !from) {
        return res.status(400).send({
          status: "error",
          message: "Faltan campos obligatorios en la solicitud",
        });
      }

      const newMessage = new Message({ message, from });
      console.log(newMessage);

      const messageStored = await newMessage.save();

      return res.status(200).send({
        status: "success",
        messageStored,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        status: "error",
        message: "No ha sido posible guardar el mensaje",
      });
    }
  },

  // Función para obtener los mensajes
  getMessages: async (req, res) => {
    try {
      const messages = await Message.find({}).sort("-_id");

      if (!messages || messages.length === 0) {
        return res.status(404).send({
          status: "error",
          message: "No hay mensajes para mostrar",
        });
      }

      return res.status(200).send({
        status: "success",
        messages,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        status: "error",
        message: "Error al extraer los datos",
      });
    }
  },
};

export default controller;
