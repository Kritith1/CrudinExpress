import { Router } from "express";
import {
  createUser,
  allUser,
  userDetails,
  userUpdate,
  userDelete,
  userLogin,
  userWelcome,
} from "../controller/userController.js";
import auth from "../middleware/auth.js";

const useRouter = Router();

useRouter.post("/", createUser);
useRouter.get("/", allUser);
useRouter.get("/:id", userDetails);
useRouter.patch("/:id", userUpdate);
useRouter.delete("/:id", userDelete);
useRouter.post("/login", userLogin);
useRouter.post("/welcome", userWelcome, auth);

export default useRouter;
