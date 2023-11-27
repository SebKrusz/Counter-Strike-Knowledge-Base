import "./StreamerList.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import deleteImage from "../../assets/icons/chevron_right-24px.svg";
import pencilImage from "../../assets/icons/edit-24px.svg";
import titleImage from "../../assets/icons/sort-24px.svg";
import inventoryIcon from "../../assets/icons/chevron_right-24px.svg";

function StreamerList() {
	const [streamer, setStreamer] = useState([]);
	const [error, setError] = useState(null);

	const fetchStreamer = async () => {
		try {
			const response = await axios.get("http://localhost:8080/streamer");
			setStreamer(response.data);
			console.log(response.data);
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => {
		fetchStreamer();
	}, []);

	return (
		<div className="StreamerList">
			<div className="StreamerList__container">
				<div className="StreamerList__container-titlebox">
					<h1 className="StreamerList__container-title">Streamers</h1>
					<form className="StreamerList__container-form">
						<input
							type="text"
							name="search"
							className="StreamerList__container-search"
							placeholder="Search..."
						/>
						<Link to={`/streamerFAQ`}>
							<button className="StreamerList__container-button">
								How-to-use / F-A-Q
							</button>
						</Link>
					</form>
				</div>
				<div className="StreamerList__table">
					<div className="StreamerList__table-headers">
						<p className="StreamerList__table-titles">
							Streamers Handle
							<img
								src={titleImage}
								alt=""
								className="StreamerList__table-image"
							/>
						</p>
						<p className="StreamerList__table-titles">
							Category
							<img
								src={titleImage}
								alt=""
								className="StreamerList__table-image"
							/>
						</p>
						<p className="StreamerList__table-titles">
							Platform
							<img
								src={titleImage}
								alt=""
								className="StreamerList__table-image"
							/>
						</p>
						<p className="StreamerList__table-titles">Actions</p>
					</div>
					<>
						<div>
							{streamer.map((streamerData) => (
								<div
									key={streamerData.id}
									className="WebsiteList__table-itemlist">
									<div className="WebsiteList__table-columnbox">
										<div className="WebsiteList__table-column">
											<p className="WebsiteList__table-headertitle">
												{streamerData.streamer_domain}
											</p>
										</div>
										<div className="WebsiteList__table-column">
											<p className="WebsiteList__table-headertitle">
												{streamerData.category}
											</p>
											<p className="WebsiteList__table-headertitle">
												{streamerData.gambling}
											</p>
										</div>
									</div>
									<div className="WebsiteList__table-items">
										<div className="WebsiteList__table-imagebox">
											<p className="WebsiteList__table-headertitle">
												Get Info
											</p>
											<Link
												to={`/streamer/${streamerData.id}`}
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
					</>
				</div>
			</div>
		</div>
	);
}

export default StreamerList;
