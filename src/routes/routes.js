import { Router } from "express";
import {
    getallusers,
    getUserById,
    addUser
} from "../controllers/BasicCrudOpertionsOnMongo.js";

const router = Router()

router.route("/getallusers").get(getallusers);
router.route("/:userid").get(getUserById);
router.route("/addusers").post(addUser);


export default router

