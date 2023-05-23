import express from "express";
import RoleControler from "../controller/RoleController";
const router = express.Router();

router.get("/roles", RoleControler.GetRoles);
router.get("/roles/:roleId", RoleControler.GetRoleById);
router.delete("/roles/:roleId", RoleControler.DeleteRole);
router.put("/roles/:roleId", RoleControler.UpdateRole);
router.post("/roles", RoleControler.CreaateRole);

export default router;
