/** -------------------------MODULES------------------------- **/
import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface CheckoutProps {
	children: ReactNode;
}

interface ShippingFormData {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	street: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
}

interface BillingFormData extends ShippingFormData {
	matchShipping: boolean;
}

export const CheckoutContext = createContext(null);
const [shippingData, setShippingData] = useState<ShippingFormData>({
	firstName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
	street: "",
	city: "",
	state: "",
	zipCode: "",
	country: "",
});

const [billingData, setBillingData] = useState<BillingFormData>({
	matchShipping: false,
	firstName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
	street: "",
	city: "",
	state: "",
	zipCode: "",
	country: "",
});

export function CheckoutProvider({ children }: CheckoutProps) {
	return <CheckoutContext.Provider value={{shippingData, setShippingData, billingData, setBillingData}}>{children}</CheckoutContext.Provider>;
}
