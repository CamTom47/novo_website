/** -------------------------MODULES------------------------- **/
import React, { useEffect, useState } from "react";
import SquareApi from "../api/SquareApi";
import { Link, useNavigate } from "react-router-dom";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/
interface ProductData {
	id: number;
	itemData: {
		imageIds: number[];
	};
	mainImage: ProductImage;
}
interface ProductImage {
	id: number;
	imageData: {
		url: string;
	};
}

const ShopPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [productData, setProductData] = useState<ProductData[]>([]);
	const [productImages, setProductImages] = useState<ProductImage[]>([]);

	const navigate = useNavigate();

	/** -------------------------FUNCTIONS------------------------- **/

	const getAllProducts = async () => {
		const response: any = await SquareApi.findAllProducts();
		const products = response.data.objects;

		//Map through the products and add the main image from the relatedObjects object as a key/value pair. This helps return consistent image ordering on the shop page
		const newProducts = products.map((product: ProductData) => ({
			...product,
			mainImage: response.data.relatedObjects.find(
				(relatedObjects: ProductImage) => relatedObjects.id === product.itemData.imageIds[0],
			),
		}));

		setProductData(newProducts as ProductData[]);
	};

	const handleReroute = (e: React.MouseEvent<HTMLAnchorElement>, image: ProductImage) => {
		e.preventDefault();
		const productId = productData.filter((product) => product.itemData.imageIds.includes(image.id))[0].id;
		navigate(`${productId}`);
	};

	/** -------------------------EFFECTS------------------------- **/
	useEffect(() => {
		getAllProducts();
	}, []);

	const productImageComponents = productData.map((product: ProductData, idx: number) => (
		<a onClick={(e) => handleReroute(e, product.mainImage)} key={idx} target='#'>
			<img src={product.mainImage.imageData.url} alt='' />
		</a>
	));

	return (
		<div className='flex flex-col gap-y-8 mx-2 mb-12 xl:grid xl:grid-cols-3 xl:gap-x-4 xl:gap-y-4 xl:mx-80'>
			{productImageComponents}
		</div>
	);
};
export default ShopPage;
