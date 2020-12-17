import express  from "express";

const router = express.Router();

router.get("/", (req, res)  => {
  return res.status(200).json({ titulo: "se juntaron Bejo y Luna ki" });
});

router.get("/test", (req,res) => {
  return res.status(200).json({
    nombre: "Freddy El Gaveta",
    genero: "M",
    isBald: true
  });
});

export { router };