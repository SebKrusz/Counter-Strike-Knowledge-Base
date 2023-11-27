// TestWebsite.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function TestWebsite() {
	const { id } = useParams();
	const [websiteData, setWebsiteData] = useState(null);

	useEffect(() => {
		const fetchWebsiteData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8080/website/${id}`
				);
				setWebsiteData(response.data);
				console.log(response.data);
			} catch (err) {
				console.error("Error fetching website data:", err);
			}
		};

		fetchWebsiteData();
	}, [id]);

	if (!websiteData) {
		return <div>Loading...</div>;
	}

	return (
		<main className="url-check">
			<div className="url-check__container">
				<div className="url-check__container-titlebox">
					<h1 className="url-check__container-title">
						Here is information for: {websiteData.website_domain}
					</h1>
					<div className="url-check__container-hero-form">
						<Link to="/websites">
							<button className="url-check__container-FAQ-button">
								Back to the previous page
							</button>
						</Link>
					</div>
				</div>
				<div className="url-check__container-table">
					<div className="url-check__container-headers">
						<h2 className="url-check__FAQ-card-header">
							Down below you can find the most common questions
							and answers regarding {websiteData.website_domain}.
						</h2>
						<p className="url-check__FAQ-card-question">
							Brief description of {websiteData.website_domain}:
						</p>
						<p className="url-check__FAQ-card-answer">
							{websiteData.description}
						</p>
						<p className="url-check__FAQ-card-question">
							What is the seller fee on{" "}
							{websiteData.website_domain} ?
						</p>
						<p className="url-check__FAQ-card-answer">
							The seller fee is {websiteData.fee}{" "}
						</p>
						<p className="url-check__FAQ-card-question">
							How old is {websiteData.website_domain} ?
						</p>
						<p className="url-check__FAQ-card-answer">
							{" "}
							{websiteData.age}
						</p>
						<p className="url-check__FAQ-card-question">
							Where is {websiteData.website_domain} located?
						</p>
						<p className="url-check__FAQ-card-answer">
							{" "}
							{websiteData.location}
						</p>
						<p className="url-check__FAQ-card-question">
							Which payment methods are available on{" "}
							{websiteData.website_domain} ?
						</p>
						<p className="url-check__FAQ-card-answer">
							{" "}
							{websiteData.payment}
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default TestWebsite;
