import axios from "axios";
const token: string = "";
const BASE_URL = "http://localhost:3001";
class SquareApi {
	static request = async (endpoint: string, data: object = {}, method: string = "get") => {
		console.debug("API Call:", endpoint, data, method);
		const url: string = `${BASE_URL}/${endpoint}`;
		const params = method === "get" ? data : {};
		const headers: {} | undefined = token !== "" ? { Authorization: `Bearer ${token}` } : {};
		try {
			const response = await axios({ url, params, method, data, headers });
			return response;
		} catch (err) {
			console.error("API ERROR:", err);
			return err;
		}
	};

	static findAllProducts = async () => {
		try {
			const response = await this.request("products", {}, "post");
			return response;
		} catch (err) {
			console.error(err);
			return err;
		}
	};
}

export default SquareApi;
