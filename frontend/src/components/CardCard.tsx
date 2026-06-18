/** -------------------------MODULES------------------------- **/
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const CartCard = ({ item, idx }): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	const { removeItem } = useCart();

	const handleClick = (itemId) => {
		removeItem(itemId);
		// navigate('/shop')
	};

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div
			key={idx}
			className='grid grid-cols-6 justify-start gap-x-4 gap-y-4 p-4 rounded-sm min-h-48 bg-white [&_p]:text-sm'>
			<img src={item.product.relatedObjects[0].imageData.url} className='col-span-2 w-full h-auto' />
			<div className='col-span-4 flex flex-col gap-y-1'>
				{/* Nmae */}
				<Link className='font-semibold ' to={`/shop/${item.product.object.id}`}>
					{item.product.object.itemData.name}
				</Link>
				{/* Description */}
				<p className='truncate-multiline'>{item.product.object.itemData.description}</p>
			</div>
			{/* Price */}
			<p className='col-span-2 place-self-end justify-self-start font-bold text-md pe-4'>
				$
				{item.product.object.itemData.variations[0].itemVariationData.priceMoney.amount
					.split("")
					.toSpliced(
						item.product.object.itemData.variations[0].itemVariationData.priceMoney.amount.split("").length - 2,
						0,
						".",
					)
					.join("")}
			</p>
			<div className='col-span-4 place-self-end relative h-10 size-1/2'>
				{/* Image */}
				<img src='/assets/button_clay.svg' alt='Novo Shop Link' className='w-full h-full' />
				<button
					onClick={() => handleClick(item.product.object.id)}
					className='absolute w-full h-full text-sm text-nowrap left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-clay'
					style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
					REMOVE
				</button>
			</div>
		</div>
	);
};
export default CartCard;
