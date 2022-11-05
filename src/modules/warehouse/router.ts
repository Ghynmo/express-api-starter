import { Router } from "express";
import * as controller from "./controllers/index.js";

const router = Router();

router.get("/", controller.readAll);
// router.get("/:id", controller.readOne);
// router.post("/", controller.create);
// router.patch("/:id", controller.update);
// router.delete("/", controller.destroy);

export default router;
