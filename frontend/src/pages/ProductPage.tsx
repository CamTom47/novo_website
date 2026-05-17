/** -------------------------MODULES------------------------- **/
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SquareApi from "../api/SquareApi";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const ProductPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const { productId } = useParams();

	/** -------------------------FUNCTIONS------------------------- **/

	const getProductData = async () => {
		if (productId) {
			const response = await SquareApi.findAProduct(productId);
			console.log("response", response);
		}
	};

	/** -------------------------EFFECTS------------------------- **/

	useEffect(() => {
		getProductData();
	}, []);
	return (
		<div className='grid grid-cols-2 px-100 gap-x-24 justify-center py-24'>
			<div className='flex flex-col gap-y-4 h-fit'>
				<div className='h-160 w-full border border-black'></div>
				<div className='flex justify-between gap-x-2'>
					<div className='size-24 border border-black'></div>
					<div className='size-24 border border-black'></div>
					<div className='size-24 border border-black'></div>
					<div className='size-24 border border-black'></div>
				</div>
			</div>
			<div className='flex flex-col w-full gap-y-12 justify-center'>
				<div>
					<h1 className='text-3xl font-semibold text-brown'>Product Title</h1>
					<p className='text-xl font-light'>$400</p>
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
						dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
						suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
						vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
						accumsan et iusto odio dignissim qui blandit praesent luptatum zz
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
