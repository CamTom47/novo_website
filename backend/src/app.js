import express from "express";
import cors from "cors";
import helmet from "helmet";
import productsRoutes from "./routes/products.js";

BigInt.prototype.toJSON = function () {
	return this.toString();
};

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/products", productsRoutes);

app.use((err, req, res, next) => {
	if (process.env.NODE_ENV !== "test") console.error(err.stack);
	const status = err.status || 500;
	const message = err.message;

	return res.status(status).json({
		error: { message, status },
	});
});

export default app;
