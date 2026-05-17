/** -------------------------MODULES------------------------- **/
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SquareApi from "../api/SquareApi";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const ProductPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [product, setProduct] = useState({});
	const { productId } = useParams();

	/** -------------------------FUNCTIONS------------------------- **/

	const getProductData = async () => {
		if (productId) {
			const response: any = await SquareApi.findAProduct(productId);
			console.log(response);
			setProduct(response.data);
		}
	};

	/** -------------------------EFFECTS------------------------- **/

	useEffect(() => {
		getProductData();
	}, []);

	return (
		<div className='flex flex-col justify-center mx-2 xl:grid xl:grid-cols-2 xl:px-100 xl:gap-x-24 xl:py-24'>
			<div className='flex flex-col w-full gap-y-12 justify-center'>
				<div>
					{Object.keys(product).length === 0 ? (
						<h1 className='text-3xl font-semibold text-brown'>oijfdsaoihfd</h1>
					) : (
						<div>
							<img src={product.relatedObjects[0].imageData.url} alt='' />
							<h1 className='text-3xl font-semibold text-brown'>{product.object.itemData.name}</h1>
							<p className='text-xl font-light'>${product.object.itemData.variations[0].itemVariationData.priceMoney.amount.split('').toSpliced(product.object.itemData.variations[0].itemVariationData.priceMoney.amount.split('').length - 2, 0, '.').join('')}</p>
							<p>{product.object.itemData.description}</p>
						</div>
					)}
					<div className='flex flex-col gap-y-4 h-fit'>
						<div className='h-160 w-full border border-black'></div>
						<div className='flex justify-between gap-x-2'>
							<div className='size-24 border border-black'></div>
							<div className='size-24 border border-black'></div>
							<div className='size-24 border border-black'></div>
							<div className='size-24 border border-black'></div>
						</div>
					</div>
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
						dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
					</p>
					<br></br>
					<p>Dimensions (in inches): 12 H x 8 W</p>
				</div>
				<button className='w-fit border border-brown rounded-md px-12 py-4'>ADD TO CART</button>
			</div>
		</div>
	);
};
export default ProductPage;
