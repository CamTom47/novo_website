/** -------------------------MODULES------------------------- **/
import React, { useState } from "react";
import ShippingForm from "../components/ShippingForm";
import OrderSummary from "../components/OrderSummary";
import BillingForm from "../components/BillingForm";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const CheckoutPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [isCollectingFormData, setIsCollectingFormData] = useState<boolean>(false);

	/** -------------------------FUNCTIONS------------------------- **/

	const handleSubmit = () => {
		setIsCollectingFormData(true);
		setTimeout(() => {
			setIsCollectingFormData(false);
		}, 2000);
	};

	const collectData = (formData) => {
		console.log("form data", formData);
	};

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='grid grid-cols-2 gap-x-12 items-start bg-beige w-full xl:px-100 xl:py-12 xl:h-fit'>
			<div className='flex flex-col gap-y-12'>
				<ShippingForm collectData={collectData} isCollectingFormData={isCollectingFormData}></ShippingForm>
				<BillingForm collectData={collectData} isCollectingFormData={isCollectingFormData}></BillingForm>
			</div>
			<OrderSummary></OrderSummary>
			<button className='relative h-10 mt-12 place-self-start' onClick={handleSubmit}>
				<img src='/assets/button_clay.svg' alt='Novo Shop Link' className='w-full h-full' />
				<p
					className='absolute flex items-center justify-center w-full h-full text-lg top-0 left-0 text-nowrap text-clay '
					style={{ fontFamily: "cheap-pine-sans, sans-serif", fontStyle: "normal", fontWeight: 400 }}>
					Submit Order
				</p>
			</button>
		</div>
	);
};
export default CheckoutPage;
