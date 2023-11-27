import "./URLCheck.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function URLCheck() {
	const [urls, setUrls] = useState([]);
	const [results, setResults] = useState([]);

	const handleURLCheck = async (e) => {
		e.preventDefault(); // Prevent the default form submission behavior

		try {
			const response = await axios.post(
				"http://localhost:8080/urlcheck/checkurls",
				{ urls }
			);
			setResults(response.data);
			console.log(response.data);
		} catch (error) {
			console.error("Error checking URLs:", error);
		}
	};

	return (
		<main className="url-check">
			<div className="url-check__container">
				<div className="url-check__container-titlebox">
					<h1 className="url-check__container-title">URL CHECKER</h1>
					<form className="url-check__container-hero-form">
						<Link to="/URLCheckFAQ">
							<button className="url-check__container-button">
								How-to-use / F-A-Q
							</button>
						</Link>
					</form>
				</div>
				<div className="url-check__container-table">
					<div className="url-check__container-headers">
						<form className="url-check__container-main-form">
							<input
								type="text"
								name="search"
								className="url-check__container-search"
								placeholder="Insert received URL..."
								onChange={(e) => setUrls([e.target.value])}
							/>
							<button
								className="url-check__container-button"
								onClick={handleURLCheck}>
								CHECK URL
							</button>
						</form>
						{results &&
							results.map((result, index) => (
								<div
									key={index}
									className={`url-check__container-card ${
										result.status === "No Match"
											? "no-match"
											: result.status
									}`}>
									<div className="url-check__container-website-info">
										<p
											className={`url-check__container-website-info-title ${
												result.status === "No Match"
													? "red-text"
													: ""
											}`}>
											Status: {result.status}
										</p>
										{/* Apply the conditional class specifically on the Link element */}
										<p
											className={`url-check__container-website-info-title ${
												result.status === "No Match"
													? ""
													: ""
											}`}>
											Domain:{" "}
											<Link
												to={`${result.domain}`}
												className={`url-check__container-website-info-title--domain ${
													result.status === "No Match"
														? "red-text"
														: ""
												}`}>
												{result.domain}
											</Link>
										</p>
										<p className="url-check__container-website-info-title">
											Category: {result.category}
										</p>
										<p className="url-check__container-website-info-title">
											General Information:{" "}
											{result.information}
										</p>
										<p
											className={`url-check__container-website-info-title ${
												result.status === "No Match"
													? ""
													: ""
											}`}>
											For more info:{" "}
											{result.status === "No Match" ? (
												<Link
													to="/URLCheckFAQ"
													className="url-check__container-website-info-title--FAQ">
													FAQ
												</Link>
											) : (
												<Link
													className="url-check__container-website-info-title--domain"
													to={`/website/${result.id}`}>
													CLICK HERE
												</Link>
											)}
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</main>
	);
}

export default URLCheck;
