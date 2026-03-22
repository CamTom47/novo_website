/** -------------------------MODULES------------------------- **/
import React from "react";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const HomePage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/



	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='flex flex-col w-full'>
			<div className='flex justify-center bg-accent'>
				<div className='flex flex-col gap-y-12 w-1/2 text-center text-primary-dark px-12 py-20'>
					<h1 className='text-5xl font-medium'>Hello there.</h1>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni temporibus magnam, similique
						recusandae sed nemo possimus accusantium voluptatibus quisquam vel fugit, quia labore cumque, placeat unde
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni temporibus magnam, similique
						recusandae sed nemo possimus accusantium voluptatibus quisquam vel fugit, quia labore cumque, placeat unde
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni temporibus magnam, similique
						recusandae sed nemo possimus accusantium voluptatibus quisquam vel fugit, quia labore cumque, placeat unde
						facere consequuntur laboriosam?
					</p>
				</div>
			</div>
			<div className='grid grid-cols-2 py-48 px-88 gap-x-36'>
				<div className='flex flex-col gap-y-12 items-start'>
					<h1 className='text-5xl font-medium text-secondary'>A new beginning.</h1>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni temporibus magnam, similique
						recusandae sed nemo possimus accusantium voluptatibus quisquam vel fugit, quia labore cumque, placeat unde
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni temporibus magnam, similique
						recusandae sed nemo possimus accusantium voluptatibus quisquam vel fugit, quia labore cumque, placeat unde
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni temporibus magnam, similique
						recusandae sed nemo possimus accusantium voluptatibus quisquam vel fugit, quia labore cumque, placeat unde
						facere consequuntur laboriosam?
					</p>
					<button className='border border-secondary rounded-md px-12 py-4'>Shop Now</button>
				</div>
				<div className='w-full h-full border border-black'></div>
			</div>
		</div>
	);
};
export default HomePage;
