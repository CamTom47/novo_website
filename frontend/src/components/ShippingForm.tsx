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

const ShippingForm = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	/** -------------------------EFFECTS------------------------- **/

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={"grid grid-cols-2 w-full h-fit rounded gap-x-12 gap-y-8"}>
			<h2 className='col-span-2 text-md border-b'>Shipping Address</h2>
			<Field label={"First Name"} error={errors.firstName} cols={1}>
				<input {...register("firstName", { required: true })} type='text' />
			</Field>
			<Field label={"Last Name"} error={errors.lastName} cols={1}>
				<input {...register("lastName", { required: true })} type='text' />
			</Field>
			<Field label={"Phone Number"} error={errors.phoneNumber}>
				<input {...register("phoneNumber", { required: true })} type='text' name='phoneNumber' />
			</Field>
			<Field label={"Email"} error={errors.email}>
				<input {...register("email", { required: true })} type='text' name='email' />
			</Field>
			<Field label={"Street"} error={errors.street}>
				<input {...register("street", { required: true })} type='text' />
			</Field>
			<Field label={"City"} error={errors.city} cols={1}>
				<input {...register("city", { required: true })} type='text' name='city' />
			</Field>
			<Field label={"State"} error={errors.state} cols={1}>
				<input {...register("state", { required: true })} type='text' />
			</Field>
			<Field label={"Zip Code"} error={errors.zipCode} cols={1}>
				<input {...register("zipCode", { required: true })} type='text' name='zipNumber' />
			</Field>
			<Field label={"Country"} error={errors.country} cols={1}>
				<input {...register("country", { required: true })} type='text' name='country' />
			</Field>
		</form>
	);
};
export default ShippingForm;
