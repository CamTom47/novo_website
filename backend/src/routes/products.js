import express from "express";
import { squareClient } from "../config.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
	try {
		const products = await squareClient.catalog.search({
			includeRelatedObjects: true,
		});
		console.log('products', products)
		return res.send(products);
	} catch (err) {
		console.error(err);
		return err;
	}
});

export default router;
