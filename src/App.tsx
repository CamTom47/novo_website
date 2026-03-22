/** -------------------------MODULES------------------------- **/
import React from "react";
import { Routes, Route } from "react-router-dom";

/** -------------------------COMPONENTS------------------------- **/
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import GalleryPage from "./pages/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const App = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='h-svh flex flex-col items-center justify-between'>
			<Navbar></Navbar>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/shop' element={<ShopPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/gallery' element={<GalleryPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
};
export default App;
