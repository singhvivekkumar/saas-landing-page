import React from "react";

const myStyle = {
	backgroundImage:"url('/image/heroBackground.png')",
	height: "90vh",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat"
};

const Banner = () => {
	return (
		<div
			className=" h-full w-full m-0 flex justify-center "
			style={myStyle}>

			{/* second container */}
			<div className=" w-full lg:w-2/3 flex flex-col lg:space-y-16 py-10 ">

				{/* content */}
				<div className=" flex flex-col items-center space-y-28">
					<span className=" text-center text-4xl text-[#0E2368] lg:text-6xl font-bold w-full">
						Discover the Best{" "}
						<span className=" font-sans text-red-500 ">SaaS</span>{" "}
						Platform
					</span>
					<span className=" text-xs text- text-justify lg:pl-14 lg:w-2/3 lg:pt-14 lg:text-xl text-zinc-700-800/80 shadow-inner  ">
					SaaS (Software as a Service) landing page with features, pricing, and FAQ sections.,  that displays information about a product. Incorporate some sort of stateful component whether that be a product card with a buy now or something else/ (use your imagination)
					</span>
					<button className=" bg-red-500 text-white active:bg-red-700/70 transition-all text-lg p-3 px-4 w-44 rounded-full">
						Explore Now!
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
