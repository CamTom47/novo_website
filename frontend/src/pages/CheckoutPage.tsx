/** -------------------------MODULES------------------------- **/
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

/** -------------------------COMPONENTS------------------------- **/
import ShippingForm from "../components/ShippingForm";
import OrderSummary from "../components/OrderSummary";
import BillingForm from "../components/BillingForm";

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const CheckoutPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [currentStep, setCurrentStep] = useState<number>(0);

	/** -------------------------FUNCTIONS------------------------- **/

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
		console.log("formData", data);
		// collectData(data);
	};

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='grid grid-cols-2 gap-x-12 items-start bg-beige w-full xl:px-80 2xl:px-100 xl:py-12 xl:h-fit'>
			<form
				onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
				className='col-span-1 flex flex-col gap-y-12'>
				<ShippingForm register={register} errors={errors}></ShippingForm>
				{/* <BillingForm
					register={register}
					collectData={collectData}
					isCollectingFormData={isCollectingFormData}></BillingForm> */}
				<button className='relative h-10 mt-12 place-self-start' onClick={handleSubmit}>
					<img src='/assets/button_clay.svg' alt='Novo Shop Link' className='w-full h-full' />
					<p
						className='absolute flex items-center justify-center w-full h-full text-lg top-0 left-0 text-nowrap text-clay '
						style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
						Submit Order
					</p>
				</button>
			</form>
			<OrderSummary></OrderSummary>
		</div>
	);
};
export default CheckoutPage;
