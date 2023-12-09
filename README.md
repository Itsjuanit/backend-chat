# backend-chat

# Server Chat

Este es un ejemplo de archivo README para tu backend de la aplicación de chat.

## Descripción

El backend de Server Chat proporciona servicios para gestionar mensajes en tiempo real. Está construido con Express, MongoDB y Socket.IO.

## Configuración

### Requisitos previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema.

### Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/server-chat.git
   cd server-chat
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

### Configuración de variables de entorno

Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias:

```env
MONGODB_URL=your_mongodb_url
PORT=your_port_number
NODE_ENV=development
Ejecución
Modo de Desarrollo:

bash
Copy code
npm run dev
Modo de Producción:

bash
Copy code
npm start
Scripts
dev: Inicia el servidor en modo de desarrollo con nodemon.
start: Inicia el servidor en modo de producción.
Dependencias
body-parser: Middleware para procesar datos JSON y de formulario.
cors: Middleware para habilitar CORS en Express.
dotenv: Carga las variables de entorno desde un archivo .env.
express: Marco de aplicación web para Node.js.
mongodb: Controlador oficial de MongoDB para Node.js.
mongoose: Biblioteca ODM (Object Data Modeling) para MongoDB y Node.js.
morgan: Middleware para registrar solicitudes HTTP.
socket.io: Biblioteca para comunicación en tiempo real.
Desarrollo
Este backend se construyó para proporcionar servicios de mensajería en tiempo real para la aplicación de chat.

Licencia
Este proyecto está bajo la licencia ISC - consulta el archivo LICENSE para más detalles.
```
