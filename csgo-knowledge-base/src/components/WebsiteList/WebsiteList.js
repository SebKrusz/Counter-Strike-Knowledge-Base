import "./WebsiteList.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import deleteImage from "../../assets/icons/chevron_right-24px.svg";
import pencilImage from "../../assets/icons/edit-24px.svg";
import titleImage from "../../assets/icons/sort-24px.svg";
import inventoryIcon from "../../assets/icons/chevron_right-24px.svg";

function WebsiteList() {
	const [website, setWebsite] = useState([]);
	const [error, setError] = useState(null);

	const fetchWebsite = async () => {
		try {
			const response = await axios.get("http://localhost:8080/website");
			setWebsite(response.data);
			console.log(response.data);
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => {
		fetchWebsite();
	}, []);

	return (
		<div className="WebsiteList">
			<div className="WebsiteList__container">
				<div className="WebsiteList__container-titlebox">
					<h1 className="WebsiteList__container-title">Websites</h1>
					<form className="WebsiteList__container-form">
						<input
							type="text"
							name="search"
							className="WebsiteList__container-search"
							placeholder="Search..."
						/>
						<Link to={`/websiteFAQ`}>
							<button className="WebsiteList__container-button">
								How-to-use / F-A-Q
							</button>
						</Link>
					</form>
				</div>

				<div className="WebsiteList__table">
					<div className="WebsiteList__table-headers">
						<p className="WebsiteList__table-titles">
							Website Domain
							<img
								src={titleImage}
								alt=""
								className="WebsiteList__table-image"
							/>
						</p>
						<p className="WebsiteList__table-titles">
							Category
							<img
								src={titleImage}
								alt=""
								className="WebsiteList__table-image"
							/>
						</p>
						<p className="WebsiteList__table-titles">
							KYC REQUIRED OVER $1000 USD
							<img
								src={titleImage}
								alt=""
								className="WebsiteList__table-image"
							/>
						</p>
						<p className="WebsiteList__table-titles"></p>
						<p className="WebsiteList__table-titles">Actions</p>
					</div>

					{website.map((websiteData) => (
						<div
							key={websiteData.id}
							className="WebsiteList__table-itemlist">
							<div className="WebsiteList__table-columnbox">
								<div className="WebsiteList__table-column">
									<p className="WebsiteList__table-headertitle">
										{websiteData.website_domain}
									</p>
								</div>
								<div className="WebsiteList__table-column">
									<p className="WebsiteList__table-headertitle">
										{websiteData.category}
									</p>
									<p className="WebsiteList__table-headertitle">
										{websiteData.gambling ? "y" : "n"}
									</p>
								</div>
							</div>
							<div className="WebsiteList__table-items">
								<div className="WebsiteList__table-imagebox">
									<p className="WebsiteList__table-headertitle">
										Get Info
									</p>
									<Link
										to={`/website/${websiteData.id}`}
										className="WebsiteList__table-link">
										<img
											src={deleteImage}
											alt="Delete"
											className="WebsiteList__table-icons"
										/>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default WebsiteList;
