
import { server } from "../server.js";
import request from "supertest";


// TODO un after all que cierre el servidor para ello implementar un server.close

// // Testeo de endpoints
describe("GET routes", () => {
  it("Responde con frase correctamente", (done)  => {
    request(server)
    .get("/")
    .expect({ titulo: "Petición GET" })
    .expect(200, done)
  }); 
  
  it("Responde con archivo de formato JSON correctamente", (done) => {
    request(server)
    .get("/test")
    .expect({
      nombre: "Juan Carlos Ozuna Rosado",
      genero: "M",
      isBald: false,
    })
    .expect(200,done)
  });
});


