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
		<div className='flex flex-col items-center py-16 gap-y-12'>
			<div className='border border-black size-12'></div>
			<div className='flex gap-x-12 font-light text-primary w-1/2 justify-center'>
				<Link to={"/shop"}>Shop</Link>
				<Link to={"/about"}>About</Link>
				<Link to={"/gallery"}>Gallery</Link>
				<Link to={"/contact"}>Contact</Link>
			</div>
		</div>
	);
};
export default Navbar;
