import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState();

	return (
		<>
			<button
				onClick={() => setSelectedColor("")}
				type="button"
				className={
					"btn btn-outline-dark" + (selectedColor === "" ? "" : "")
				}>
				Chocar carros
			</button>
			<div className="traffic-light">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"Light red" +
						(selectedColor === "red" ? " glow-red" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"Light yellow" +
						(selectedColor === "yellow" ? " glow-yellow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"Light green" +
						(selectedColor === "green" ? " glow-green" : "")
					}></div>
			</div>
		</>
	);
};

export default Home;
