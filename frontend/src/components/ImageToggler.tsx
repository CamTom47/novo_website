/** -------------------------MODULES------------------------- **/
import React from "react";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/
interface ImageTogglerProps {
	selectNextPhoto: () => void;
	selectPreviousPhoto: () => void;
}

const ImageToggler = ({ selectNextPhoto, selectPreviousPhoto }: ImageTogglerProps): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='absolute top-1/2 -translate-y-1/4 flex justify-between w-full h-fit'>
			<div className='bg-beige/10 text-beige/30'>
				<svg
					onClick={selectNextPhoto}
					xmlns='http://www.w3.org/2000/svg'
					width='4em'
					height='4em'
					viewBox='0 0 1024 1024'>
					<path d='M0 0h1024v1024H0z' fill='none' />
					<path
						fill='currentColor'
						d='M609.4 149.4L277.8 489.6a32 32 0 0 0 0 44.7l331.6 340.3a29 29 0 0 0 41.7 0a30.6 30.6 0 0 0 0-42.7l-311.8-320L651 192.1a30.6 30.6 0 0 0 0-42.7a29 29 0 0 0-41.7 0'
					/>
				</svg>
			</div>
			<div className='bg-beige/10 text-beige/30'>
				<svg
					onClick={selectPreviousPhoto}
					xmlns='http://www.w3.org/2000/svg'
					width='4em'
					height='4em'
					viewBox='0 0 1024 1024'>
					<path d='M0 0h1024v1024H0z' fill='none' />
					<path
						fill='currentColor'
						d='M340.9 149.3a30.6 30.6 0 0 0 0 42.8L652.7 512L341 831.9a30.6 30.6 0 0 0 0 42.7a29 29 0 0 0 41.7 0l331.6-340.3a32 32 0 0 0 0-44.6L382.6 149.4a29 29 0 0 0-41.7 0z'
					/>
				</svg>
			</div>
		</div>
	);
};
export default ImageToggler;
