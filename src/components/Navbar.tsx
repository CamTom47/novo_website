/** -------------------------MODULES------------------------- **/
import React from "react";
import { Link, useParams } from "react-router-dom";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const Navbar = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const params = useParams();

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='relative w-full flex flex-col items-center py-16 gap-y-12'>
			<div className='border border-black size-12'></div>
			<div className='flex gap-x-12 font-light text-primary w-1/2 justify-center'>
				<Link to={"/shop"}>Shop</Link>
				<Link to={"/about"}>About</Link>
				<Link to={"/gallery"}>Gallery</Link>
				<Link to={"/contact"}>Contact</Link>
			</div>
			<Link to={"/cart"}>
				<svg
					className='absolute top-12 right-12 size-6 fill-primary'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 640 512'>
					<path d='M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z' />
				</svg>
			</Link>
		</div>
	);
};
export default Navbar;
