/** -------------------------MODULES------------------------- **/
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/
const OrderSummary = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const { cartTotal } = useCart();

	const location = useLocation();

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='flex-col items-start justify-between bg-white xl:pb-4 gap-y-4 h-fit rounded-sm xl:flex xl:w-3/4 xl:sticky xl:top-12'>
			<div className='hidden xl:flex w-full h-fit rounded-t py-2 px-4'>
				<p className='text-lg font-bold'>Order Summary</p>
			</div>
			<div className='hidden px-4 xl:mb-4 w-full xl:flex xl:flex-col xl:justify-between gap-y-2 gap-x-4 [&_div]:flex [&_div]:items-center [&_div]:justify-between [&_div]:gap-x-4'>
				<div>
					<p>Subtotal</p>
					<p>${cartTotal.toFixed(2)}</p>
				</div>
				<div>
					<p>Shipping</p>
					<p>$4.00</p>
				</div>
				<div className=' border-b'>
					<p>Taxes</p>
					<p>$4.00</p>
				</div>
				<div>
					<p>Amount Due</p>
					<p>$1,000</p>
				</div>
			</div>
			{location.pathname === '/cart' && <div className='relative h-10 px-4 place-self-center '>
				<img src='/assets/button_clay.svg' alt='Novo Shop Link' className='w-full h-full' />
				<Link
					to='/checkout'
					className='absolute flex items-center justify-center w-full h-full text-lg top-0 left-0 text-nowrap text-clay '
					style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
					CHECKOUT
				</Link>
			</div>}
		</div>
	);
};
export default OrderSummary;
