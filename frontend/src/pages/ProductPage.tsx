/** -------------------------MODULES------------------------- **/
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SquareApi from "../api/SquareApi";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const ProductPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [isLoading, setIsLoading] = useState(true);
	const [product, setProduct] = useState({});
	const [activeImage, setActiveImage] = useState({});
	const [activeImageIdx, setActiveImageIdx] = useState<number>(-1);
	const { productId } = useParams();

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
		if (Object.keys(product).length > 0) {
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
		if (Object.keys(product).length > 0 && activeImageIdx === 0) setActiveImageIdx(product.relatedObjects.length - 1);
		else {
			setActiveImageIdx((oldState) => (oldState -= 1));
		}
	};

	const selectPreviousPhoto = () => {
		if (Object.keys(product).length > 0 && activeImageIdx === product.relatedObjects.length - 1) setActiveImageIdx(0);
		else {
			setActiveImageIdx((oldState) => (oldState += 1));
		}
	};

	return isLoading ? (
		<div></div>
	) : (
		<div className='flex flex-col justify-center mx-2 py-24 xl:grid xl:grid-cols-2 xl:px-100 xl:gap-x-24'>
			<div className='flex flex-col w-full gap-y-12 justify-center items-center'>
				<div className='flex flex-col gap-y-4'>
					<div className='flex flex-col gap-y-4'>
						<div className='relative'>
							<img src={product.relatedObjects[activeImageIdx].imageData.url} alt='' className='h-full' />
							{product.relatedObjects.length > 1 && (
								<div className='absolute top-1/2 -translate-y-1/4 flex justify-between w-full h-fit'>
									<svg
										onClick={selectNextPhoto}
										xmlns='http://www.w3.org/2000/svg'
										width='4em'
										height='4em'
										viewBox='0 0 1024 1024'>
										<path d='M0 0h1024v1024H0z' fill='none' />
										<path
											fill='currentColor'
											d='M609.4 149.4L277.8 489.6a32 32 0 0 0 0 44.7l331.6 340.3a29 29 0 0 0 41.7 0a30.6 30.6 0 0 0 0-42.7l-311.8-320L651 192.1a30.6 30.6 0 0 0 0-42.7a29 29 0 0 0-41.7 0'
										/>
									</svg>
									<svg
										onClick={selectPreviousPhoto}
										xmlns='http://www.w3.org/2000/svg'
										width='4em'
										height='4em'
										viewBox='0 0 1024 1024'>
										<path d='M0 0h1024v1024H0z' fill='none' />
										<path
											fill='currentColor'
											d='M340.9 149.3a30.6 30.6 0 0 0 0 42.8L652.7 512L341 831.9a30.6 30.6 0 0 0 0 42.7a29 29 0 0 0 41.7 0l331.6-340.3a32 32 0 0 0 0-44.6L382.6 149.4a29 29 0 0 0-41.7 0z'
										/>
									</svg>
								</div>
							)}
						</div>
						<div className='flex gap-x-4 overflow-x-scroll'>
							{product.relatedObjects.map((image, idx) => (
								<img
									key={idx}
									src={image.imageData.url}
									onClick={() => setActiveImageIdx(idx)}
									className='h-24 w-auto'
								/>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-y-2'>
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
						<p>{product.object.itemData.description}</p>
					</div>
				</div>
				<a href='/shop' className='relative h-10'>
					<img src='/assets/button_clay.svg' alt='Novo Shop Link' className='w-full h-full' />
					<button
						type='button'
						className='absolute w-full h-full text-lg text-nowrap left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-clay '
						style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
						ADD TO CART
					</button>
				</a>{" "}
			</div>
		</div>
	);
};
export default ProductPage;
