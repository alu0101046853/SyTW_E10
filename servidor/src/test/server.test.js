import { request } from "express";
import supertest from "supertest";
import { server } from "../server.js";

// Testeo de endpoints
describe("GET endpoints", () => {
   it("Deberia devolver un json", async () => {
     const res = await request(server).get("/");
     expect(res.body).toEqual({ titulo: "Se juntaron Bejo y Luna ki" });
   });
});
