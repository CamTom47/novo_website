/** -------------------------MODULES------------------------- **/
import React, { useEffect, useState } from "react";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const GalleryPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [imageArray, setImageArray] = useState<string[]>([]);

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	useEffect(() => {
		const tempArray = [];
		for (let i = 1; i < 72; i++) {
			tempArray.push(`novo-ceramics-product-photos-${i}.jpg`);
		}
		setImageArray(tempArray);
	}, []);

	const imageComponents = imageArray.map((image, idx) => (
		<img key={idx} src={`/products/${image}`} alt={`${image}`} className='w-auto h-fit' />
	));

	return (
		<div className='grid grid-cols-1 xl:grid-cols-3 gap-y-2 xl:gap-4 p-2 xl:p-12 rows-[200px]'>{imageComponents}</div>
	);
};
export default GalleryPage;
