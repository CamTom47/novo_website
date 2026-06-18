/** -------------------------MODULES------------------------- **/
import React from "react";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

interface FieldProps {
	label: string;
	error: {
		message: string;
	};
	children: React.JSX.Element;
	cols?: number;
}
const Field = ({ label, error, children, cols = 2 }: FieldProps): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className={`flex flex-col [&_input]:border [&_input]:border-light-gray [&_input]:rounded [&_input]:p-2 [&_input]:bg-white [&_div]:flex [&_div]:flex-col [&_label]:text-sm [&_input]:text-sm col-span-${cols}`}>
			<label>{label}</label>
			{children}
			{error && <p className='text-red-200 bg-red-500 rouded-md'>{error.message}</p>}
		</div>
	);
};
export default Field;
