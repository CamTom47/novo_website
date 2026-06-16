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
				className='grid grid-cols-5 justify-start gap-x-4 gap-y-4 border border-bronze p-4 rounded-sm min-h-48'>
				<img src={item.product.relatedObjects[0].imageData.url} className='col-span-2 w-full h-auto' />
				<div className='col-span-3 flex flex-col gap-y-4'>
					<Link className='font-semibold' to={`/shop/${item.product.object.id}`}>
						{item.product.object.itemData.name}
					</Link>
					<p className='truncate-multiline'>{item.product.object.itemData.description}</p>
					<span className='flex gap-x-4 w-full'></span>
				</div>
				<div className='col-span-2 relative h-10'>
					<img src='/assets/button_clay.svg' alt='Novo Shop Link' className='w-full h-full' />
					<button
						onClick={() => handleClick(item.product.object.id)}
						className='absolute w-full h-full text-lg text-nowrap left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-clay'
						style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
						REMOVE
					</button>
				</div>
				<p className='col-span-3 place-self-end pe-4'>
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
			</div>

			
	);
};
export default CartCard;
