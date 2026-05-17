import express from "express";
import { squareClient } from "../config.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
	try {
		const products = await squareClient.catalog.search({
			includeRelatedObjects: true,
		});
		console.log("products", products);
		return res.send(products);
	} catch (err) {
		console.error(err);
		return err;
	}
});
router.post("/images", async (req, res, next) => {
	try {
		const images = await squareClient.catalog.search({
			includeRelatedObjects: true,
			objectTypes: ["IMAGE"],
		});
		console.log("images", images);
		return res.send(images);
	} catch (err) {
		console.error(err);
		return err;
	}
});

export default router;
