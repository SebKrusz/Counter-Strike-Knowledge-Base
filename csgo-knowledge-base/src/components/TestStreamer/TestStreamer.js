// TestWebsite.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function TestStreamer() {
	const { id } = useParams();
	const [streamerData, setStreamerData] = useState(null);

	useEffect(() => {
		const fetchStreamerData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8080/streamer/${id}`
				);
				setStreamerData(response.data);
				console.log(response.data);
			} catch (err) {
				console.error(err.message);
			}
		};

		fetchStreamerData();
	}, [id]);

	if (!streamerData) {
		return <div>Loading...</div>;
	}

	return (
		<main className="url-check">
			<div className="url-check__container">
				<div className="url-check__container-titlebox">
					<h1 className="url-check__container-title">
						Here is information for: {streamerData.streamer_domain}
					</h1>
					<div className="url-check__container-hero-form">
						<Link to="/streamers">
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
							and answers regarding {streamerData.streamer_domain}
							.
						</h2>
						<p className="url-check__FAQ-card-question">
							Has this streamer / influencer been reported for any
							scams?
						</p>
						<p className="url-check__FAQ-card-answer">
							{streamerData.streamer_general_description}
						</p>
						<p className="url-check__FAQ-card-question">
							What kind of impact has this streamer / influencer
							had on the community?
						</p>
						<p className="url-check__FAQ-card-answer">
							{streamerData.impact}
						</p>
						{/* <p className="url-check__FAQ-card-question">
							How have they attempted to resolve the issue and
							what is the conclusion?
						</p>
						<p className="url-check__FAQ-card-answer"> Answer 3</p> */}
					</div>
				</div>
			</div>
		</main>
	);
}

export default TestStreamer;
