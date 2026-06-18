/** -------------------------MODULES------------------------- **/
import React, { use, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

/** -------------------------COMPONENTS------------------------- **/
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import GalleryPage from "./pages/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const App = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='h-dvh flex flex-col justify-start items-center overflow-x-clip'>
			<CartProvider>
				<Navbar></Navbar>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/shop' element={<ShopPage />} />
					<Route path='/shop/:productId' element={<ProductPage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/gallery' element={<GalleryPage />} />
					<Route path='/checkout' element={<CheckoutPage />} />
					<Route path='/checkout/payment' element={<PaymentPage />} />
					<Route path='/*' element={<NotFoundPage />} />
				</Routes>
				<Footer></Footer>
			</CartProvider>
		</div>
	);
};
export default App;
