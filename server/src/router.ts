import express from "express";
import type { RequestHandler } from "express";

const router = express.Router();

const sayWelcome: RequestHandler = (request, response) => {
  response.json("Welcome to Wild Series !");
};

/* ************************************************************************* */
// Define Your API Routes Here
router.get("/", sayWelcome);
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;
