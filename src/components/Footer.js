import React from "react";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

const Footer = () => {
	return (
		<div className=" flex flex-col lg:flex-row bg-slate-100 p-10 ">

			<div className=" flex justify-center items-center p-16 lg:p-2 lg:w-1/4 ">
				<div className=" w-40 h-32">
          <h1 className=" text-3xl font-bold text-blue-700">Logo</h1>
        </div>
			</div>

			<div className=" flex flex-col  space-y-3 lg:w-1/4 p-10 ">
				<h2 className=" font-semibold text-[#0E2368] text-xl">Contact Us</h2>
				<ul className=" flex flex-col space-y-3 ">
					<li className=" font-normal text-[#646874] text-sm ">
						SaaS Pvt Ltd, Patna, Bihar-800014
					</li>
					<li className=" text-[#646874] text-sm ">singhvivekkumar309@gmail.com</li>
					<li className=" text-[#646874] text-sm ">(+91) 9797979797</li>
				</ul>
			</div>

			<div className=" flex flex-col space-y-3 lg:w-1/4 p-10 lg:pl-40">
				<h2 className=" font-semibold text-[#0E2368] text-xl ">More</h2>
				<ul className=" flex flex-col space-y-3">
					<li className=" text-[#646874] text-sm ">About Us</li>
					<li className=" text-[#646874] text-sm ">Products</li>
					<li className=" text-[#646874] text-sm ">Career</li>
					<li className=" text-[#646874] text-sm ">Contact Us</li>
				</ul>
			</div>

			<div className=" flex flex-col lg:flex-col-reverse lg:w-1/4 items-center space-y-2 justify-evenly p-10 ">
				<p className=" text-sm my-4 text-slate-500">© 2023 SaaS Example</p>
				<h2 className=" text-xl font-semibold hidden lg:block text-[#0E2368] order-2 ">Social Media</h2>
				<ul className=" flex justify-center space-x-5 ">
					<li className=" h-4 w-4 text-lg " ><BsInstagram/></li>
					<li className=" h-4 w-4 text-lg " ><BsTwitter/></li>
					<li className=" h-4 w-4 text-lg " ><BsFacebook/></li>
					
				</ul>
			</div>
		</div>
	);
};

export default Footer;
