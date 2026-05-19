import express from "express";
import { squareClient } from "../config.js";
const router = express.Router();

//get all items
router.get("/", async (req, res, next) => {
	try {
		const products = await squareClient.catalog.search({
			includeRelatedObjects: true,
			includeCategoryPathToRoot: true,
			query: {
				sortedAttributeQuery: {
					attributeName: "name",
					sortOrder: "ASC",
				},
			},
		});
		console.log('products', products)
		return res.send(products);
	} catch (err) {
		console.error(err);
		return err;
	}
});

//get a specific item
router.get("/:productId", async (req, res, next) => {
	try {
		const productId = req.params.productId;
		const product = await squareClient.catalog.object.get({
			objectId: productId,
			includeRelatedObjects: true,
		});
		console.log(product);
		return res.send(product);
	} catch (err) {
		console.error(err);
		return err;
	}
});

export default router;
