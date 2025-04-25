import { Router } from "express";
import * as UsersController from "./users.controller";

const router = Router();

router.route("/users").get(UsersController.readUsers);
//router.route("/users/:id").get(UsersController.readUserById);
//router.route("/users/email/:email").get(UsersController.readUserByEmail);
router.route("/users").post(UsersController.createUser);
router.route("/users").put(UsersController.updateUser);
router.route("/users/:userId").delete(UsersController.deleteUserById);

export default router;
