/** -------------------------MODULES------------------------- **/
import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Field from "./Field";

interface Inputs {
	example: string;
	exampleRequired: string;
}

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/
interface BillingFormProps {
	isCollectingFormData: boolean;
}

const BillingForm = ({ isCollectingFormData }: BillingFormProps): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/
	const {
		register,
		handleSubmit,
		watch,
		getValues,
		formState: { errors },
	} = useForm({
		defaultValues: {
			matchShipping: true,
		},
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	watch("matchShipping");

	/** -------------------------EFFECTS------------------------- **/

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={"grid grid-cols-2 w-full h-fit rounded gap-x-12 gap-y-8"}>
			<div className='flex justify-between items-center col-span-2 border-b pb-2'>
				<h2 className='col-span-2 text-md '>Billing Address</h2>
				<div className='flex gap-x-4'>
					<input {...register("matchShipping", { required: true })} type='checkbox' className='accent-light-gray' />
					<label htmlFor=''>Same As Shipping Address</label>
				</div>
			</div>
			{!getValues("matchShipping") && (
				<div className='grid grid-cols-2 gap-x-12 gap-y-8 h-fit w-full col-span-2'>
					<Field label={"First Name"} error={errors.firstName} cols={1}>
						<input {...register("firstName", { required: true })} type='text' />
					</Field>
					<Field label={"Last Name"} error={errors.lastName} cols={1}>
						<input {...register("lastName", { required: true })} type='text' />
					</Field>
					<Field label={"Phone Number"} error={errors.phoneNumber}>
						<input type='text' name='phoneNumber' />
					</Field>
					<Field label={"Email"} error={errors.email}>
						<input type='text' name='email' />
					</Field>
					<Field label={"Street"} error={errors.street}>
						<input {...register("street", { required: true })} type='text' />
					</Field>
					<Field label={"City"} error={errors.city} cols={1}>
						<input type='text' name='city' />
					</Field>
					<Field label={"State"} error={errors.state} cols={1}>
						<input type='text' />
					</Field>
					<Field label={"Zip Code"} error={errors.zipCode} cols={1}>
						<input type='text' name='zipNumber' />
					</Field>
					<Field label={"Country"} error={errors.country} cols={1}>
						<input type='text' name='country' />
					</Field>
				</div>
			)}
		</form>
	);
};
export default BillingForm;
