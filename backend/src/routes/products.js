import express from "express";
import { squareClient } from "../config.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
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
router.get("/:productId", async (req, res, next) => {
	try {
		const productId = req.params.productId;
		const product = await squareClient.catalog.object.get({
			objectId: productId,
			includeRelatedObjects: true,
		});
		console.log(product)
		return res.send(product);
	} catch (err) {
		console.error(err);
		return err;
	}
});

export default router;
