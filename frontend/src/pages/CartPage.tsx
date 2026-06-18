/** -------------------------MODULES------------------------- **/
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CartCard from "../components/CardCard";
import OrderSummary from "../components/OrderSummary";
/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const CartPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const { items, removeItem, cartTotal } = useCart();

	/** -------------------------FUNCTIONS------------------------- **/
	const navigate = useNavigate();

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='h-content-mobile xl:h-content-laptop'>
			<div className='grid grid-cols-1 w-full h-full justify-between bg-beige overflow-y-scroll no-scrollbar xl:hidden'>
				<div className=' w-full '>
					<div className='w-full gap-y-2 flex py-4 flex-col'>
						{items.map((item, idx) => (
							<CartCard item={item} idx={idx} />
						))}
					</div>
				</div>
				{/* Checkout Summary */}
				<div className='flex items-center justify-between bg-white py-4 px-4 gap-y-4 sticky w-full bottom-0 border-t border-clay'>
					<div className='flex flex-col gap-x-4'>
						<p className='text-lg font-bold text-clay'>Subtotal</p>
						<p className='font-bold text-xl'>${cartTotal.toFixed(2)}</p>
					</div>
				<OrderSummary cartTotal={cartTotal}></OrderSummary>
				</div>
			</div>
			{/* Laptop breakpoint */}
			<div className='bg-beige hidden w-full h-full justify-between xl:grid xl:grid-cols-2 gap-x-12 xl:px-100 xl:py-4'>
				<div className='overflow-y-scroll w-full pb-14 px-4 no-scrollbar'>
					<div className='w-full gap-y-4 flex flex-col'>
						{items.map((item, idx) => (
							<CartCard item={item} idx={idx} />
						))}
					</div>
				</div>
				<OrderSummary cartTotal={cartTotal}></OrderSummary>
			</div>
		</div>
	);
};
export default CartPage;
