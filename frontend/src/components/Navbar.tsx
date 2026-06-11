/** -------------------------MODULES------------------------- **/
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ShoppingNav from "./ShoppingNav";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const Navbar = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	const location = useLocation();
	/** -------------------------FUNCTIONS------------------------- **/
	const toggleIsNavOpen = () => {
		setIsNavOpen(!isNavOpen);
	};

	/** -------------------------EFFECTS------------------------- **/

	useEffect(() => {}, []);

	return (
		<div className='relative grid grid-cols-3 w-full h-fit justify-center items-center py-12 bg-white xl:flex xl:flex-col xl:h-fit xl:py-8 xl:max-h-70'>
			{/* Hamburger Menu */}
			<div
				id='navIcon'
				className='justify-self-start place-self-start ms-8 w-6 h-4 top-12 left-12  [&_span]:bg-brown [&_span]:w-full [&_span]:h-0.5 [&_span]:rounded [&_span]:origin-center overflow-clip xl:hidden'
				onClick={toggleIsNavOpen}>
				<div className='relative w-full h-full flex flex-col items-center justify-center gap-y-1'>
					<span className={`${isNavOpen ? "me-12" : "me-0"} absolute top-0 duration-300`}></span>
					<span className={`${isNavOpen ? "rotate-45" : "rotate-0"} absolute center duration-500`}></span>
					<span className={`${isNavOpen ? "-rotate-45" : "rotate-0"} absolute center duration-500`}></span>
					<span className={`${isNavOpen ? "ms-12" : "ms-0"} absolute bottom-0 duration-300`}></span>
				</div>
			</div>
			<a
				href='/
			'>
				<img
					src='/assets/logo_header.png'
					alt='Novo Header'
					className='justify-self-center h-20 w-auto xl:h-36 xl:mb-4'
				/>
			</a>
			<div
				className={`absolute z-999 top-32 h-fit bg-white w-full flex flex-col items-center gap-x-6 font-light text-light-gray justify-center duration-300 ${!isNavOpen ? "opacity-0 xl:opacity-100" : "opacity-100"} [&_a]:h-fit [&_a]:py-4 [&_a]:w-full [&_a]:flex [&_a]:px-4 xl:gap-x-8 xl:relative xl:w-1/4 xl:grid xl:grid-cols-4 xl:[&_a]:col-span-1 xl:[&_a]:place-self-center xl:top-0 xl:[&_a]:justify-center xl:[&_a]:w-fit`}>
				<NavLink
					onClick={toggleIsNavOpen}
					to={"/shop"}
					className={location.pathname === "/shop" ? "font-semibold" : ""}>
					Shop
				</NavLink>
				<NavLink
					onClick={toggleIsNavOpen}
					to={"/about"}
					className={location.pathname === "/about" ? "font-semibold" : ""}>
					About
				</NavLink>
				<NavLink
					onClick={toggleIsNavOpen}
					to={"/gallery"}
					className={location.pathname === "/gallery" ? "font-semibold" : ""}>
					Gallery
				</NavLink>
				<NavLink
					onClick={toggleIsNavOpen}
					to={"/contact"}
					className={location.pathname === "/contact" ? "font-semibold" : ""}>
					Contact
				</NavLink>
			</div>
			<ShoppingNav></ShoppingNav>
		</div>
	);
};
export default Navbar;
