
import { server } from "../server.js";
import request from "supertest";


// TODO un after all que cierre el servidor para ello implementar un server.close

// // Testeo de endpoints
describe("GET routes", () => {
  it("Responde con frase", (done)  => {
    request(server)
    .get("/")
    .expect({ titulo: "se juntaron Bejo y Luna ki" })
    .expect(200, done)
  }); 
  
  it("Responde con json", (done) => {
    request(server)
    .get("/test")
    .expect({
      nombre: "Freddy El Gaveta",
      genero: "M",
      isBald: true,
    })
    .expect(200,done)
  });
});


