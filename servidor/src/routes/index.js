import express  from "express";

const router = express.Router();

router.get("/", (req, res)  => {
  return res.status(200).json({ titulo: "Petición GET" });
});

router.get("/test", (req,res) => {
  return res.status(200).json({
    nombre: "Juan Carlos Ozuna Rosado",
    genero: "M",
    isBald: false
  });
});

export { router };
