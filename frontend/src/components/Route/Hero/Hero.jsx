import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
	return (
		<div
			className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
			style={{
				backgroundImage:
					"url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
			}}>
			<div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
				<h1
					className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}>
					Home of Fresh <br /> Farm Products
				</h1>
				<p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
					Farmer's market is a lively marketplace where local farmers
					and <br />
					producers sell fresh, seasonal produce, artisanal foods, and
					handmade crafts <br /> directly to consumers. It fosters
					community connections, supports local <br /> businesses, and
					promotes sustainable agriculture practices.
				</p>
				<Link to="/products" className="inline-block">
					<div className={`${styles.button} mt-5`}>
						<span className="text-[#fff] font-[Poppins] text-[18px]">
							Shop Now
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
