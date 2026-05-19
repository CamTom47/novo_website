/** -------------------------MODULES------------------------- **/
import React, { createContext, useCallback, useEffect, useState, useContext } from "react";
import type { ReactNode } from "react";

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

interface CartProviderProps {
	children: ReactNode;
}
export const CartContext = createContext(null);

export function CartProvider({ children }: CartProviderProps) {
	const [items, setItems] = useState<[]>([]);
	const [totalQnty, setTotalQnty] = useState<Number>(0);

	const addItem = useCallback((product: ProductData) => {
		setItems((currentItems) => {
			//TODO update this if Frankie would like the ability to add more than one item to a cart at a time
			// const existing = currentItems.find( i => i.id === product.id)
			return [...currentItems, { product, qty: 1 }];
		});
	}, []);

	const removeItem = useCallback((id: String) => {
		setItems((currentItems) => {
			const result = currentItems.filter((item: ProductData) => item.id !== id);
			return [...result];
		});
	}, []);

	useEffect(() => {
		setTotalQnty(() => {
			let count = 0;
			items.map((i: any) => {
				count += i.qnty;
			});

			return count;
		});
	}, [items]);

	return (
		<CartContext.Provider
			value={{
				items,
				addItem,
				removeItem,
				totalQnty,
			}}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
