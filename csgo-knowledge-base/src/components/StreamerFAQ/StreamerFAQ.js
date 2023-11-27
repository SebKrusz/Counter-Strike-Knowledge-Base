import "./StreamerFAQ.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StreamerFAQ() {
	return (
		<main className="url-check">
			<div className="url-check__container">
				<div className="url-check__container-titlebox">
					<h1 className="url-check__container-title">
						How to use / Purpose For Counter-Strike Streamer
						Knowledge
					</h1>
					<form className="url-check__container-hero-form">
						<Link to="/streamers">
							<button className="url-check__container-button">
								Back to previous page
							</button>
						</Link>
					</form>
				</div>
				<div className="url-check__FAQ-container">
					<div className="url-check__FAQ-card">
						<h2 className="url-check__FAQ-card-header">
							Down below you can find the most common questions
							and answers regarding use of this feature on the
							website.
						</h2>
						<p className="url-check__FAQ-card-question">
							What is the Streamer Knowledge Section and whats
							it's purpose?
						</p>
						<p className="url-check__FAQ-card-answer">
							The Streamer Knowledge is to helps protect users
							from online scams by catologing known scammers and
							keeping a database of their information. This allow
							users to quickly identify potential scammers and
							prevent potential exposure to fraudulent activities
							and enhancing overall online security.
						</p>
						<p className="url-check__FAQ-card-answer">
							Although Counter-Strike has been out for well over
							20 years, there is still a constant influx of new
							players. This section is to help new and old players
							educate themselves on the content they are consuming
							and to help them make better decisions when
							interacting with the explict and implicit
							advertisments that are on many streams.
						</p>
						<p className="url-check__FAQ-card-question">
							When should I be using the Streamer Knowledge
							Section?
						</p>
						<p className="url-check__FAQ-card-answer">
							You should use a Streamer Knowledge Section when
							interacting with advertisments from Streamers or are
							planning on using similar services to them and are
							looking to have similar results. This section will
							help you identify if the Streamer you are watching
							has been reported for scamming or other malicious
							activities.
							<p className="url-check__FAQ-card-answer">
								Examples: Advertising without disclosure, using
								fake or "in-house" money while gambling, or
								other activities that are inherently misleading
								to the viewer / consumer.
							</p>
						</p>
						<p className="url-check__FAQ-card-question">
							What to do if I have some information regarding a
							Streamer scamming or partaking in other malicious
							activities?
						</p>
						<p className="url-check__FAQ-card-answer">
							If you suspect a Streamer is scamming or partaking
							in other malicious activities, take immediate action
							to reduce risks to yourself and others around you.
							Contact your friends in the community and spread the
							word. If you have any evidence, please contact us
							using the email on the "Contact Us" page and we will
							make changes to the database.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default StreamerFAQ;
