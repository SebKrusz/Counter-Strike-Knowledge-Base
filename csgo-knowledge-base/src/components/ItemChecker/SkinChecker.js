import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./SkinChecker.scss";

function SkinChecker() {
	const [formData, setFormData] = useState({
		weapon: "",
		skin: "",
		float: "",
		pattern: "",
	});

	const [results, setResults] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Form Data:", formData);

		try {
			const response = await axios.post(
				"http://localhost:8080/itemcheck",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			setResults(response.data ? response.data : null);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="skin-checker">
			<div className="skin-checker__container">
				<div className="skin-checker__container-titlebox">
					<h1 className="skin-checker__container-title">
						SKIN CHECKER
					</h1>
					<form className="skin-checker__container-form">
						<Link to={`/itemFAQ`}>
							<button className="skin-checker__container-button">
								How-to-use / F-A-Q
							</button>
						</Link>
					</form>
				</div>
				<section className="skin-checker__main-content">
					<div className="skin-checker__table-headers">
						<div>
							<p>Weapon</p>
							<select
								className="skin-checker__item-select"
								name="weapon"
								value={formData.weapon}
								onChange={handleChange}>
								<option>Talon Knife</option>
								<option>Bayonet</option>
								<option>AK-47</option>
							</select>
							<p>Skin</p>
							<select
								className="skin-checker__item-select"
								name="skin"
								value={formData.skin}
								onChange={handleChange}>
								<option>Case-Hardened</option>
								<option>Asiimov</option>
								<option>Doppler</option>
							</select>
							<p>Float</p>
							<input
								className="skin-checker__item-float-input"
								name="float"
								value={formData.float}
								onChange={handleChange}
							/>
							<p>Pattern</p>
							<input
								className="skin-checker__item-pattern-input"
								name="pattern"
								value={formData.pattern}
								onChange={handleChange}
							/>
							<button onClick={handleSubmit}>Check</button>
						</div>
					</div>
					<div className="skin-checker__table-headers--two">
						<p>Results:</p>
						<div className="skin-checker__results">
							{results && (
								<div className="skin-checker__results-card">
									<p>
										This {results.weapon} | {results.skin}{" "}
										has a float of {results.float} and a
										pattern index of {results.pattern}
									</p>
									<p>
										This {results.price_factor} the price
										because {results.reason}
									</p>
								</div>
							)}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default SkinChecker;
