/** -------------------------MODULES------------------------- **/
import React from "react";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const PaymentPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div>
			<PaymentForm
				applicationId={import.meta.env.VITE_APP_ID}
				locationId={import.meta.env.VITE_LOCATION_ID}
				cardTokenizeResponseReceived={async (token) => {
					// Send 'token' to your backend to process the actual payment
					console.log("Payment Token:", token.token);
				}}>
				<CreditCard />
			</PaymentForm>
		</div>
	);
};
export default PaymentPage;
