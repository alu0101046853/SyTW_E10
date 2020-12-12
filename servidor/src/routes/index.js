import { Router } from "express";

const router = Router();

router.get("/", (req, res)  => {
  res.json({ titulo: "se juntaron Bejo y Luna ki" });
});

router.get("/test", (req,res) => {
  res.json({
    nombre: "Freddy El Gaveta",
    genero: "M",
    isBald: true
  });
});

export { router };