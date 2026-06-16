/** -------------------------MODULES------------------------- **/
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CartCard from "../components/CardCard";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const CartPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [cartTotal, setCartTotal] = useState<number>(0);
	const { items, removeItem } = useCart();

	/** -------------------------FUNCTIONS------------------------- **/
	const navigate = useNavigate();

	/** -------------------------EFFECTS------------------------- **/
	useEffect(() => {
		let total = 0;
		for (let item of items) {
			let cost = item.product.object.itemData.variations[0].itemVariationData.priceMoney.amount;
			console.log("cost", cost);
			let decimalString = Number.parseFloat(
				cost
					.split("")
					.toSpliced(cost.split("").length - 2, 0, ".")
					.join(""),
			).toFixed(2);
			console.log("decimalString", decimalString);
			total += Number(decimalString);
		}
		console.log("total", total);
		setCartTotal(total);
	}, [items]);

	return (
		<div>
			<div className='grid grid-cols-1 w-full h-content justify-between xl:hidden '>
				<div className='overflow-y-scroll w-full pb-14 px-4 no-scrollbar'>
					<div className='w-full gap-y-4 flex flex-col'>
						{items.map((item, idx) => (
							<CartCard item={item} idx={idx} />
						))}
					</div>
				</div>
				<div className='flex flex-col items-center justify-center bg-beige py-4 gap-y-4'>
					<div className='flex gap-x-4'>
						<p className='text-lg'>Cart Total</p>
						<p>${cartTotal.toFixed(2)}</p>
					</div>
					<div className='relative h-10 xl:place-self-start'>
						<img src='/assets/button_clay.svg' alt='Novo Shop Link' className='w-full h-full' />
						<Link
							to='checkout'
							className='absolute flex items-center justify-center w-full h-full text-lg top-0 left-0 text-nowrap text-clay '
							style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
							CHECKOUT
						</Link>
					</div>
				</div>
			</div>
			{/* Laptop breakpoint */}
			<div className='hidden w-full h-content justify-between xl:grid xl:grid-cols-2 xl:px-100 xl:py-24'>
				<div className='overflow-y-scroll w-full pb-14 px-4 no-scrollbar'>
					<div className='w-full gap-y-4 flex flex-col'>
						{items.map((item, idx) => (
							<CartCard item={item} idx={idx} />
						))}
					</div>
				</div>
				<div className='flex flex-col items-center justify-center bg-beige py-4 gap-y-4'>
					<div className='flex gap-x-4'>
						<p className='text-lg'>Cart Total</p>
						<p>${cartTotal.toFixed(2)}</p>
					</div>
					<div className='relative h-10 xl:place-self-start'>
						<img src='/assets/button_clay.svg' alt='Novo Shop Link' className='w-full h-full' />
						<Link
							to='checkout'
							className='absolute flex items-center justify-center w-full h-full text-lg top-0 left-0 text-nowrap text-clay '
							style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
							CHECKOUT
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CartPage;
