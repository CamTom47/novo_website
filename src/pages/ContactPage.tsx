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
		<div className='grid grid-cols-2 gap-x-12 h-fit w-full px-100 py-24'>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2 text-secondary h-full'>
				<div>
					<p className='text-lg font-medium'>Name</p>
					<div className='w-full flex justify-between gap-x-4'>
						<div className='flex flex-col w-full gap-y-2 text-xs font-light'>
							<label htmlFor='firstName'>First Name (required)</label>
							<input
								{...register("firstName")}
								type='text'
								name='firstName'
								className='border border-secondary w-full h-8 py-4 px-1'
								placeholder='Enter first name'
							/>
						</div>
						<div className='flex flex-col  w-full gap-y-2 text-xs font-light'>
							<label htmlFor='lastname'>Last Name (required)</label>
							<input
								{...register("lastName")}
								type='text'
								name='lastName'
								className='border border-secondary w-full h-8 py-4 px-1'
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
						className='border border-secondary w-full h-8 py-4 px-1'
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
						className='border border-secondary w-full h-8 py-4 px-1'
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
						className='border border-secondary w-full py-2 px-1 resize-none '
					/>
				</div>
				<button className='border border-secondary rounded-md px-12 py-4 w-fit mt-8'>Submit</button>
			</form>
			<div className='border border-secondary'></div>
		</div>
	);
};
export default ContactPage;
