import { Router } from "express";
import exlporer_controller from "../controllers/exlporer_controller.js";

const router = Router();

router.post("/", exlporer_controller.store)
router.get("/", exlporer_controller.index)
router.get("/:id", exlporer_controller.show)
router.put("/:id", exlporer_controller.update)
router.delete("/:id", exlporer_controller.destroy)

export default router;