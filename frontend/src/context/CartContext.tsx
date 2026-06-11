/** -------------------------MODULES------------------------- **/
import { createContext, useCallback, useEffect, useState, useContext } from "react";
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

interface CartContext {
	items: CartItem;
	addItem: (product: ProductData) => void;
	removeItem: (id: String) => void;
	totalQnty: Number;
}
interface CartItem {
	product: ProductData;
	qnty: number;
}

export const CartContext = createContext<CartContext | null>(null);

export function CartProvider({ children }: CartProviderProps) {
	const [items, setItems] = useState<CartItem[]>([]);
	const [totalQnty, setTotalQnty] = useState<Number>(0);

	//TODO instantiate cart from local host if avaiable

	const addItem = useCallback((product: ProductData) => {
		setItems((currentItems) => {
			//TODO update this if Frankie would like the ability to add more than one item to a cart at a time
			// const existing = currentItems.find( i => i.id === product.id)
			const updated = [...currentItems, { product, qnty: 1 }];
			localStorage.setItem("cart", JSON.stringify(updated));
			return updated;
		});
	}, [items]);

	const removeItem = useCallback((id: String) => {
		const cartData = items.filter((item) => item.product.object.id !== id);
		setItems(cartData);
		if (items.length === 0) localStorage.clear();
		else localStorage.setItem("cart", JSON.stringify(cartData));
	}, [items]);

	useEffect(() => {
		if (items.length === 0) {
			const cartData = localStorage.getItem("cart");
			if (cartData && JSON.parse(cartData).length > 0) {
				const parsedData = JSON.parse(cartData);
				setItems((oldState) => [...parsedData]);
			}
		}
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
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
