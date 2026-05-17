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
		setProductData(response.data.objects as ProductData[]);
		setProductImages(response.data.relatedObjects as ProductImage[]);
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

	const productImageComponents = productImages.map((image: ProductImage, idx: number) => (
		<a onClick={(e) => handleReroute(e, image)} key={idx} target='#'>
			<img src={image.imageData.url} alt='' />
		</a>
	));

	return <div className='flex flex-col gap-y-2 mx-2'>{productImageComponents}</div>;
};
export default ShopPage;
