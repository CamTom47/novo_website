/** -------------------------MODULES------------------------- **/
import React from "react";
import { Link } from "react-router-dom";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const Footer = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='text-center flex flex-col py-6 w-full bg-light-gray text-beige xl:px-24 xl:py-32 xl:flex-row'>
			<div className='w-full py-6 px-4 grid grid-cols-2 gap-y-12 xl:gap-x-12 xl:items-center'>
				<div className='col-span-1 flex flex-col gap-y-2 text-start text-xs'>
					<Link to={"/shop"}>Shop</Link>
					<Link to={"/about"}>About</Link>
					<Link to={"/gallery"}>Gallery</Link>
					<Link to={"/contact"}>Contact</Link>
					<Link to={"/returns"}>Shipping & Returns</Link>
					<Link to={"/faq"}>FAQ</Link>
				</div>
				<div className='flex flex-col col-span-1 justify-self-end w-full items-end gap-y-6'>
					<a href='/'>
						<img src='/assets/logo_footer.png' alt='Novo Logo In Footer' className='h-20 w-auto' />
					</a>
					<Link to={"https://www.instagram.com/made.by.novo"} className='col-span-1 justify-self-center'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' className='size-6 xl:size-8' fill='#f3eade'>
							<path d='M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
						</svg>
					</Link>
				</div>
			</div>
			<p className='text-xs font-light'>Copyright Novo 2026</p>
		</div>
	);
};
export default Footer;
