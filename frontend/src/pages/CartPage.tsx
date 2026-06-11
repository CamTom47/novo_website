/** -------------------------MODULES------------------------- **/
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const CartPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const { items, removeItem} = useCart();

	/** -------------------------FUNCTIONS------------------------- **/
	const navigate = useNavigate();
	const handleClick = (itemId) => {
		removeItem(itemId)
		// navigate('/shop')

	}

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div>
			<h1>Cart</h1>
			<div className='flex flex-col gap-y-4'>
				{items.map((item,idx) => (
					<div key={idx} className='flex gap-x-4'>
						<img src={item.product.relatedObjects[0].imageData.url} className='h-48 w-fit' />
						<div>
							<Link to={`/shop/${item.product.object.id}`}>{item.product.object.itemData.name}</Link>
							<p>
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
							<button onClick={() => handleClick(item.product.object.id)} className="border rounded-md">Remove</button>
						</div>
					</div>
				))}
			</div>
			<div className='relative h-10 xl:place-self-start'>
				<img src='/assets/button_clay.svg' alt='Novo Shop Link' className='w-full h-full' />
				<Link
					to='checkout'
					className='absolute w-full h-full text-lg text-nowrap left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-clay '
					style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
					PROCEEED TO CHECKOUT
				</Link>
			</div>
		</div>
	);
};
export default CartPage;
