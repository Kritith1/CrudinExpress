import { Router } from "express";
import {
  createUser,
  allUser,
  userDetails,
  userUpdate,
  userDelete,
  userLogin,
} from "../controller/userController.js";

const useRouter = Router();

useRouter.post("/", createUser);
useRouter.get("/", allUser);
useRouter.get("/:id", userDetails);
useRouter.patch("/:id", userUpdate);
useRouter.delete("/:id", userDelete);
useRouter.post("/login", userLogin);

export default useRouter;
