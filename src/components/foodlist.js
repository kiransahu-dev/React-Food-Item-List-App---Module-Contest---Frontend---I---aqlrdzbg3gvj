import React, { useState } from "react";
import "../styles/App.css";

function FoodList() {
	const [foods, setFoods] = useState([]);
	const [itemName, setItemName] = useState("");
	const [foodType, setFoodType] = useState("");
	const [spicinessLevel, setSpicinessLevel] = useState("");
	const [isFirstCardEnabled, setIsFirstCardEnabled] = useState(false);
	const [isSecondCardEnabled, setIsSecondCardEnabled] = useState(false);
	const [isFormEnabled, setIsFormEnabled] = useState(false);

	return (
		<>
			<div className="container">
				<h1>Food Items List</h1>
				<button>Add Food</button>

				<div className="card-container">
                        <>
							<h2>Item Name:</h2>
							<input
								name="itemName"
								type="text"
								disabled={!isFirstCardEnabled}
							/>
							<h2>Food Type:</h2>
							<input
								name="foodType"
								type="text"
								disabled={!isFirstCardEnabled}
							/>
							<div className={`card`}>
								<form>
									<h2>Spiciness Level:</h2>
									<input
										name="spicinessLevel"
										type="text"
										disabled={!isFormEnabled}
									/>
								</form>
							</div>
						</>
				</div>
                <div className={`card ${isSecondCardEnabled ? "" : "disabled"}`}>
						<button>Save</button>
				</div>

				<ul className="list">
                        <li>
							{itemName} ({foodType}) - Spiciness Level:{" "}
							{spicinessLevel}
							<button>Delete</button>
						</li>
				</ul>
			</div>
		</>
	);
}

export default FoodList;