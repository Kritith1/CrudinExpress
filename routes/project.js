import { Router } from "express";
import {
  projectAll,
  projectCreate,
  projectList,
} from "../controller/projectController.js";

const useRouter = Router();

useRouter.get("/", projectCreate);
useRouter.get("/allProject", projectAll);

useRouter.get("/:size", projectList);

export default useRouter;
