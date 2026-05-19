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
		<div className='flex flex-col w-full h-fit'>
			<div className='flex justify-center gap-x-6 pb-20 [&_img]:h-80 [&_img]:w-auto xl:pb-0 xl:h-content xl:[&_img]:h-100'>
				<img src='/products/novo-ceramics-product-photos-7.jpg' alt='' className="hidden xl:inline" />
				<img src='/products/novo-ceramics-product-photos-55.jpg' alt='' />
				<img src='/products/novo-ceramics-product-photos-1.jpg' alt='' className="hidden xl:inline" />
			</div>
			<div className='flex justify-center bg-beige'>
				<div className='flex flex-col px-2 gap-y-12 py-20 text-light-gray xl:px-12 xl:w-1/2'>
					<h1 className='text-5xl font-medium font-muli xl:text-center'>Hello there.</h1>
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
			<div className='flex flex-col items-center px-2 gap-y-4 py-20 xl:grid xl:grid-cols-2 xl:py-48 xl:px-88 xl:gap-x-36'>
				<div className='flex flex-col gap-y-2 xl:gap-y-6'>
					<h1 className='w-full text-4xl font-semi-bold text-brown'>A new beginning.</h1>
					<p className='text-sm hidden xl:inline'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni temporibus magnam, similique
						recusandae sed nemo possimus accusantium voluptatibus quisquam vel fugit, quia labore cumque, placeat unde
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni temporibus magnam, similique
					</p>
					<img src='/products/novo-ceramics-product-photos-66.jpg' alt='' className='xl:hidden' />
					<a href='/shop' className='relative h-10 xl:place-self-start hidden xl:inline'>
						<img src='/assets/button_bronze.svg' alt='Novo Shop Link' className='w-full h-full' />
						<button
							type='button'
							className='absolute w-full h-full text-lg text-nowrap left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-bronze'
							style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
							SHOP NOW
						</button>
					</a>
				</div>

				<div className="flex flex-col gap-y-6">
					<p className='text-sm xl:hidden'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni temporibus magnam, similique
						recusandae sed nemo possimus accusantium voluptatibus quisquam vel fugit, quia labore cumque, placeat unde
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque magni temporibus magnam, similique
					</p>
					<img
						src='/products/novo-ceramics-product-photos-66.jpg'
						alt=''
						className='hidden xl:inline xl:scale-140 xl:w-auto'
					/>

					<a href='/shop' className='relative h-16 xl:hidden'>
						<img src='/assets/button_bronze.svg' alt='Novo Shop Link' className='w-full h-16' />
						<button
							type='button'
							className='absolute w-full h-full text-lg text-nowrap left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-bronze'
							style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
							SHOP NOW
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
