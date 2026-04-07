/** -------------------------MODULES------------------------- **/
import React from "react";
import SquareApi from '../api/SquareApi'

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const AboutPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	const testCallProducts = async () => {
		const products = await SquareApi.findAllProducts();
		console.log('products', products)
	}

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='flex flex-col items-center gap-y-18 w-full px-140 py-24 bg-beige'>
			<button onClick={testCallProducts}>Test Call</button>
			<h1 className='text-5xl font-medium text-light-gray'>My name is Frankie</h1>
			<p className=' text-light-gray'>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
				dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
				suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
				vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
				iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
			</p>
			<img src='/assets/pots_illustration.svg' alt='Art images of pottery' className='h-auto w-3/8' />
			<p className='text-light-gray'>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
				dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
				molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
				qui blandit praesent lup<br></br>
				<br></br>tatum zzril delenit augue duis dolore te feugait nulla facilisi. Ut wisi enim ad minim veniam, quis
				nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
				iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
				facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
				duis dolore te feugait nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
			</p>
			<a href='/shop' className='relative h-10'>
				<img src='/assets/button_brown.svg' alt='Novo Shop Link' className='w-full h-full' />
				<button
					type='button'
					className='absolute w-full h-full text-lg text-nowrap left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-brown '
					style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
					SHOP NOW
				</button>
			</a>
		</div>
	);
};
export default AboutPage;
