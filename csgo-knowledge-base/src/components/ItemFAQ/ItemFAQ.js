import "./ItemFAQ.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemFAQ() {
	return (
		<main className="url-check">
			<div className="url-check__container">
				<div className="url-check__container-titlebox">
					<h1 className="url-check__container-title">
						How to use / Purpose For Counter-Strike Item Knowledge
					</h1>
					<form className="url-check__container-hero-form">
						<Link to="/Skincheck">
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
							What is this Counter-Strike Item Checker and whats
							it's purpose?
						</p>
						<p className="url-check__FAQ-card-answer">
							This Item Check was made to help users identify rare
							characteristics of their Counter-Strike items. This
							helps users identify the value of their items and
							helps protect users from online scams by quickly
							analyzing item characteristics and cross refrencing
							them with known items alerting the user if the item
							is rare, preventing potential exposure to fraudulent
							activities and enhancing overall online security.
						</p>
						<p className="url-check__FAQ-card-question">
							When should I be using a Counter-Strike Item
							Checker?
						</p>
						<p className="url-check__FAQ-card-answer">
							Using a Counter-Strike Item Checker is essential
							when engaging in trading, buying, or selling new
							items. It aids in determining the value of your
							item, safeguarding you from potential scams, and
							enabling opportunities for additional profit in your
							transactions.
						</p>
						<p className="url-check__FAQ-card-question">
							How do I get the required info such as float or
							pattern?
						</p>
						<p className="url-check__FAQ-card-answer">
							To get the required information about your item,
							please follow the steps below:
							<ol>
								<li>
									Open your Steam Inventory and select the
									item you want to check.
								</li>
								<li>
									Right-Click on the "Inspect in Game" button.
								</li>
								<li>
									Select "Copy Link Address" and paste it in
									the URL field on any of these 3 websites.
								</li>
								<ol>
									<li>https://csfloat.com/checker</li>
									<li>
										https://broskins.com/index.php?pages/csgo-skin-screenshot/
									</li>
									<li>https://float.cs.trade/</li>
								</ol>
								<li>
									Click the "Check" button and wait for the
									results.
								</li>
							</ol>
							<p className="url-check__FAQ-card-answer">
								Note: If you are using the Steam Web Client, you
								can use the CSFloat Inventory Helper extension
								to get float and pattern index immediately from
								your inventory page.
							</p>
						</p>
						<p className="url-check__FAQ-card-question">
							What to do if I notice missing information about my
							skins?
						</p>
						<p className="url-check__FAQ-card-answer">
							If you concerned about your item not having all the
							characteristics listed, please contact us.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default ItemFAQ;
