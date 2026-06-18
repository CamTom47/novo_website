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

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='grid grid-cols-2 gap-x-12 items-start bg-beige w-full xl:px-100 xl:py-12 xl:h-fit'>
			<div className="flex flex-col gap-y-12">
				<ShippingForm></ShippingForm>
				<BillingForm></BillingForm>
			</div>
			<OrderSummary></OrderSummary>
		</div>
	);
};
export default CheckoutPage;
