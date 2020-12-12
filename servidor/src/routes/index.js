import { Router } from "express";

const router = Router();

router.get("/", (req, res)  => {
  res.json({ titulo: "se juntaron Bejo y Luna ki" });
});

export { router }