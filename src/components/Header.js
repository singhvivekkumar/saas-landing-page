import React from "react";
import { BsFillMenuAppFill, BsMenuApp } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
	return (
		<header className=" sticky flex justify-between lg:justify-around items-center p-1 md:p-4 border-b border-slate-200 bg-slate-100/90 ">
			<div className=" flex md:hidden justify-center items-center ">
				<BsFillMenuAppFill/>
			</div>
			{/* logo */}
			<div className="">
				<h1 className=" text-4xl font-bold text-blue-700">Logo</h1>
			</div>

			{/* nav */}
			
			<nav className="hidden lg:block  ">
				<ul className=" text-xl font-semibold flex items-center text-sky-800 justify-evenly gap-1 lg:gap-6">
					<li>Home</li>
					<li>About</li>
					<li>Help</li>
					<li>Contact us</li>
				</ul>
			</nav>

			{/*  */}
			<div className=" text-lg ">
				{" "}
				<FaUserAlt />{" "}
			</div>
		</header>
	);
};

export default Header;
