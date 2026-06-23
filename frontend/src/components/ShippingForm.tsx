/** -------------------------MODULES------------------------- **/
import React, { useCallback, useEffect } from "react";
import type { UseFormRegister, SubmitHandler, FieldErrors } from "react-hook-form";
import Field from "./Field";

interface FormData {
	shippingAddress: {
		firstName: string;
		lastName: string;
		phoneNumber: string;
		email: string;
		street: string;
		city: string;
		state: string;
		zipCode: string;
		country: string;
	};
}

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/
interface ShippingFormProps {
	register: UseFormRegister<FormData>;
	errors: FieldErrors<FormData>;
}

const ShippingForm = ({ register, errors }: ShippingFormProps): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className={"grid grid-cols-2 w-full h-fit rounded gap-x-12 gap-y-8"}>
			<h2 className='col-span-2 text-md border-b'>Shipping Address</h2>
			<Field label={"First Name"} error={errors.shippingAddress?.firstName} cols={1}>
				<input {...register("shippingAddress.firstName", { required: true })} type='text' name='firstName' />
			</Field>
			<Field label={"Last Name"} error={errors.lastName} cols={1}>
				<input {...register("shippingAddress.lastName", { required: true })} type='text' name='lastName' />
			</Field>
			<Field label={"Phone Number"} error={errors.phoneNumber}>
				<input {...register("shippingAddress.phoneNumber", { required: true })} type='text' name='phoneNumber' />
			</Field>
			<Field label={"Email"} error={errors.email}>
				<input {...register("shippingAddress.email", { required: true })} type='text' name='email' />
			</Field>
			<Field label={"Street"} error={errors.street}>
				<input {...register("shippingAddress.street", { required: true })} type='text' name='street' />
			</Field>
			<Field label={"City"} error={errors.city} cols={1}>
				<input {...register("shippingAddress.city", { required: true })} type='text' name='city' />
			</Field>
			<Field label={"State"} error={errors.state} cols={1}>
				<input {...register("shippingAddress.state", { required: true })} type='text' name='state' />
			</Field>
			<Field label={"Zip Code"} error={errors.zipCode} cols={1}>
				<input {...register("shippingAddress.zipCode", { required: true })} type='text' name='zipCode' />
			</Field>
			<Field label={"Country"} error={errors.country} cols={1}>
				<input {...register("shippingAddress.country", { required: true })} type='text' name='country' />
			</Field>
		</div>
	);
};
export default ShippingForm;
