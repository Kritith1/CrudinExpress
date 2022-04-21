import { Router } from "express";
import {
  createUser,
  allUser,
  userDetails,
  userUpdate,
  userDelete,
} from "../controller/userController.js";

const useRouter = Router();

useRouter.post("/", createUser);
useRouter.get("/", allUser);
useRouter.get("/:id", userDetails);
useRouter.patch("/:id", userUpdate);
useRouter.delete("/:id", userDelete);

export default useRouter;
