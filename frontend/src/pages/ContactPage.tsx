/** -------------------------MODULES------------------------- **/
import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/
interface Inputs {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
}

const ContactPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	const {
		register,
		handleSubmit,
		watch,
		formState: {},
	} = useForm<Inputs>();

	/** -------------------------FUNCTIONS------------------------- **/
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='px-2 grid grid-cols-2 gap-x-12 h-fit w-full xl:px-100 xl:py-24'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='col-span-2 flex flex-col gap-y-2 text-brown justify-center items-start xl:col-span-1 fit py-12'>
				<div className='w-full'>
					<p className='text-lg font-medium'>Name</p>
					<div className='w-full flex justify-between gap-x-4'>
						<div className='flex flex-col w-full gap-y-2 text-xs font-light'>
							<label htmlFor='firstName'>First Name (required)</label>
							<input
								{...register("firstName")}
								type='text'
								name='firstName'
								className='border border-brown w-full h-8 py-4 px-1'
								placeholder='Enter first name'
							/>
						</div>
						<div className='flex flex-col  w-full gap-y-2 text-xs font-light'>
							<label htmlFor='lastname'>Last Name (required)</label>
							<input
								{...register("lastName")}
								type='text'
								name='lastName'
								placeholder='Enter last name'
								className='border border-brown w-full h-8 py-4 px-1'
							/>
						</div>
					</div>
				</div>
				<div className='flex flex-col  w-full gap-y-2 text-xs font-light'>
					<label htmlFor='email' className='text-lg font-medium'>
						Email Address <span className='text-xs font-light'>(required)</span>
					</label>
					<input
						{...register("email")}
						type='text'
						name='email'
						placeholder='Enter email'
						className='border border-brown w-full h-8 py-4 px-1'
					/>
				</div>
				<div className='flex flex-col  w-full gap-y-2 text-xs font-light'>
					<label htmlFor='subject' className='text-lg font-medium'>
						Subject <span className='text-xs font-light'>(required)</span>
					</label>
					<input
						{...register("subject")}
						type='text'
						name='subject'
						placeholder='Enter subject'
						className='border border-brown w-full h-8 py-4 px-1'
					/>
				</div>
				<div className='flex flex-col  w-full gap-y-2 text-xs font-light'>
					<label htmlFor='message' className='text-lg font-medium'>
						Message <span className='text-xs font-light'>(required)</span>
					</label>
					<textarea
						{...register("message")}
						name='message'
						rows={4}
						placeholder='Enter message'
						className='border border-brown w-full py-2 px-1 resize-none '
					/>
				</div>
				<a href='/shop' className='w-full flex justify-center relative h-10 mt-6 xl:justify-startL'>
					<img src='/assets/button_brown.svg' alt='Novo Shop Link' className='w-full h-full' />
					<button
						type='button'
						className='absolute w-full h-full text-lg text-nowrap left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-brown'
						style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
						SUBMIT
					</button>
				</a>{" "}
			</form>
			<img src='/products/novo-ceramics-product-photos-32.jpg' alt='Ceramics example' className='hidden xl:visible' />
		</div>
	);
};
export default ContactPage;
