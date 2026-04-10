/** -------------------------MODULES------------------------- **/
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const Navbar = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const params = useParams();
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	const toggleIsNavOpen = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<div className='relative w-full h-fit flex flex-col items-center py-8 gap-y-12 overflow-visible'>
			<a
				href='/
			'>
				<img src='/assets/logo_header.png' alt='Novo Header' className='h-24 w-auto' />
			</a>
			<div
				className={`bg-white w-full flex  items-center gap-x-6  font-light text-light-gray xl:w-1/2 justify-center ${!isNavOpen ? "invisible" : ""} xl:gap-x-12`}>
				<Link to={"/shop"}>Shop</Link>
				<Link to={"/about"}>About</Link>
				<Link to={"/gallery"}>Gallery</Link>
				<Link to={"/contact"}>Contact</Link>
			</div>
			<Link to={"/cart"} className='hidden xl:flex'>
				<svg
					className='absolute top-12 right-12 size-6 fill-light-gray'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 640 512'>
					<path d='M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z' />
				</svg>
			</Link>
			<div
				id='navIcon'
				className='absolute size-4 top-12 right-12 flex flex-col gap-y-1 xl:hidden [&_span]:bg-brown [&_span]:w-6 [&_span]:h-0.5 [&_span]:rounded'
				onClick={toggleIsNavOpen}>
				<span className='animate-'></span>
				<span className={`${isNavOpen ? "opacity-0" : ""} inline shrink-0 duration-300`}></span>
				<span className='animate-bottom-span-open'></span>
			</div>
		</div>
	);
};
export default Navbar;
