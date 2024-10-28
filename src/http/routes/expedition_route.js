import { Router } from "express";
import expedition_controller from "../controllers/expedition_controller.js";

const router = Router();

router.post("/", expedition_controller.store)
router.get("/", expedition_controller.index)
router.get("/:id", expedition_controller.show)
router.put("/:id", expedition_controller.update)
router.delete("/:id", expedition_controller.destroy)

export default router;