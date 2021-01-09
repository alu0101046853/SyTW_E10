import { createServer } from "http";
import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/index.js";
// Se importa http ya que este tiene un cierre seguro

const app = express();
const PORT = 8080;

// Middlewares para parsear contenido según el tipo que se indique en la cabecera
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

const server = createServer(app);

// rutas
/* TODO: las rutas deberian ir en ficheros distintos agrupadas por tema
   y hacer un export y aqui un import */

// Inicializacion del servidor
server.listen(PORT || process.env.PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

function stopServer() {
  console.log("Cerrando el servidor");
  server.close();
}

export { server, stopServer };