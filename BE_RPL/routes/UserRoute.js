import express from "express";
import {
  createUser,
  getUsers,
  getUsersById,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/GetUser", getUsers);
router.get("/GetUser/:id", getUsersById);
router.post("/CreateUser", createUser);
router.patch("/UpdateUser/:id", updateUser);
router.delete("/DeleteUser/:id", deleteUser);

export default router;
