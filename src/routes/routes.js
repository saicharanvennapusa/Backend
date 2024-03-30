import { Router } from "express";
import { getallusers } from "../controllers/BasicCrudOpertionsOnMongo.js";

const router = Router()

router.route("/getallusers").get(getallusers)


export default router

