/** -------------------------MODULES------------------------- **/
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SquareApi from "../api/SquareApi";
import ImageToggler from "../components/ImageToggler";
import { useCart } from "../context/CartContext";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/
interface ProductData {
	id: String;
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

const ProductPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [isLoading, setIsLoading] = useState(true);
	const [product, setProduct] = useState<ProductData | null>(null);
	const [activeImage, setActiveImage] = useState({});
	const [activeImageIdx, setActiveImageIdx] = useState<number>(-1);
	const { productId } = useParams();
	const { addItem } = useCart();

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	useEffect(() => {
		const getProductData = async () => {
			try {
				if (productId) {
					const response: any = await SquareApi.findAProduct(productId);
					setProduct(response.data);
				}
			} catch (err) {
				console.error(err);
			}
		};
		getProductData();
	}, []);

	useEffect(() => {
		if (product !== null) {
			setActiveImage(
				product.relatedObjects.find((relatedObject) => relatedObject.id === product.object.itemData.imageIds[0]),
			);
			setActiveImageIdx(
				product.relatedObjects.findIndex((relatedObject) => relatedObject.id === product.object.itemData.imageIds[0]),
			);
			setIsLoading(false);
		}
	}, [product]);

	const selectNextPhoto = () => {
		if (product !== null && activeImageIdx === 0) setActiveImageIdx(product.relatedObjects.length - 1);
		else {
			setActiveImageIdx((oldState) => (oldState -= 1));
		}
	};

	const selectPreviousPhoto = () => {
		if (product !== null && activeImageIdx === product.relatedObjects.length - 1) setActiveImageIdx(0);
		else {
			setActiveImageIdx((oldState) => (oldState += 1));
		}
	};

	const addToCart = () => {
		if (product !== null) {
			addItem(product);
		}
	};

	return isLoading ? (
		<div></div>
	) : (
		<div className='flex flex-col justify-center mx-2 py-24 gap-y-12 xl:grid xl:grid-cols-2 xl:px-100 xl:gap-x-24'>
			<div className='flex flex-col gap-y-4'>
				<div className='flex flex-col gap-y-4'>
					<div className='relative'>
						<img src={product.relatedObjects[activeImageIdx].imageData.url} alt='' className='h-full' />
						{product.relatedObjects.length > 1 && (
							<ImageToggler selectNextPhoto={selectNextPhoto} selectPreviousPhoto={selectPreviousPhoto} />
						)}
					</div>
					<div className='flex gap-x-4 overflow-x-scroll no-scrollbar'>
						{product.relatedObjects.map((image, idx) => (
							<img key={idx} src={image.imageData.url} onClick={() => setActiveImageIdx(idx)} className='h-24 w-auto' />
						))}
					</div>
					<a href='/shop' className='flex gap-x-2 items-center'>
						<img src='/back-arrow.svg' alt='' className='size-6' />
						<p className='text-sm xl:text-xs font-bold'>Back to Shop</p>
					</a>
				</div>
			</div>

			<div className='flex flex-col gap-y-12 xl:col-start-2 xl:justify-center'>
				<div className='flex flex-col gap-y-4'>
					<h1 className='text-3xl font-semibold text-brown'>{product.object.itemData.name}</h1>
					<p className='text-xl font-light'>
						$
						{product.object.itemData.variations[0].itemVariationData.priceMoney.amount
							.split("")
							.toSpliced(
								product.object.itemData.variations[0].itemVariationData.priceMoney.amount.split("").length - 2,
								0,
								".",
							)
							.join("")}
					</p>
					<p className='whitespace-pre-wrap'>{product.object.itemData.description}</p>
				</div>
				<div className='relative h-10 xl:place-self-start'>
					<img src='/assets/button_clay.svg' alt='Novo Shop Link' className='w-full h-full' />
					<button
						type='button'
						onClick={addToCart}
						className='absolute w-full h-full text-lg text-nowrap left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-clay '
						style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
						ADD TO CART
					</button>
				</div>
			</div>
		</div>
	);
};
export default ProductPage;
