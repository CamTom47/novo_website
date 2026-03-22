/** -------------------------MODULES------------------------- **/
import React from "react";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const AboutPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className="flex flex-col items-center gap-y-18 w-full px-140 py-24 bg-accent">
			<h1 className="text-5xl font-medium text-primary">My name is Frankie</h1>
			<p className=" text-primary">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
				dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
				suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
				vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
				iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
			</p>
			<div className='flex items-baseline gap-x-12'>
				<div className='size-12 border border-black'></div>
				<div className='size-20 border border-black'></div>
				<div className='size-32 border border-black'></div>
			</div>
			<p className="text-primary">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
				dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
				molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
				qui blandit praesent lup<br></br><br></br>tatum zzril delenit augue duis dolore te feugait nulla facilisi. Ut wisi enim ad minim
				veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
				autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
				nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
				augue duis dolore te feugait nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
			</p>
            <button className='border border-secondary rounded-md px-12 py-4'>Shop Now</button>
		</div>
	);
};
export default AboutPage;
