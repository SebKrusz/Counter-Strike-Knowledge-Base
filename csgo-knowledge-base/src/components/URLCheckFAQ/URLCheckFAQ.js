import "./URLCheckFAQ.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function URLCheckFAQ() {
	return (
		<main className="url-check">
			<div className="url-check__container">
				<div className="url-check__container-titlebox">
					<h1 className="url-check__container-title">
						How to use / Purpose For Counter-Strike URL Checker
					</h1>
					<div className="url-check__container-hero-form">
						<Link to="/URLCheck">
							<button className="url-check__container-FAQ-button">
								Back to previous page
							</button>
						</Link>
					</div>
				</div>
				<div className="url-check__FAQ-container">
					<div className="url-check__FAQ-card">
						<h2 className="url-check__FAQ-card-header">
							Down below you can find the most common questions
							and answers regarding use of this feature on the
							website.
						</h2>
						<p className="url-check__FAQ-card-question">
							What is a URL Checker and whats it's purpose?
						</p>
						<p className="url-check__FAQ-card-answer">
							A URL checker is to helps protect users from online
							scams by quickly analyzing web addresses and cross
							refrencing them with known sites alerting the user
							if the URL is valid, preventing potential exposure
							to fraudulent activities and enhancing overall
							online security.
						</p>
						<p className="url-check__FAQ-card-answer">
							One of the most common ways for account hijackers to
							get access to your account is by creating a fake
							page and tricking their victims into believing it is
							the real website. The URL and the site itself will
							usually look very similar to the original, e.g:
							steamcomnunity, steamcomuniity or staemcommunity.
							Hackers will usually spread these fake links via
							automated bots or already hijacked accounts which
							either add you or just comment the fake links. The
							chance of receiving these messages increases when
							using trading sites like TF2Backpack, CSGOLoungue
							and DOTA2Lounge. Such a message could for example
							look like this: [username]: Hi, my friend somehow
							can't add you as a friend. He always receives an
							error message, but he wants to trade with you. Can
							you please add him:
							steamscommuntiy.com/id/scammerusername/
						</p>
						<p className="url-check__FAQ-card-question">
							When should I be using a URL Checker?
						</p>
						<p className="url-check__FAQ-card-answer">
							You should use a URL checker when interacting with
							individuals online and receiving links related to
							Steam Marketplace, 3rd Party Trading Platforms,
							Gambling Sites, and Inventory Management Sites. This
							helps ensure that the provided URLs are safe and
							helps protect you from potential phishing or
							fraudulent activities associated with these online
							platforms.
						</p>
						<p className="url-check__FAQ-card-question">
							What to do if you already clicked a phising link?
						</p>
						<p className="url-check__FAQ-card-answer">
							If you suspect a security threat, take immediate
							action to reduce risks. Contact your bank, set up a
							fraud alert with credit bureaus, and back up your
							files to minimize potential damage. Strengthen your
							account security by enabling two-factor
							authentication (2FA) and regularly reviewing your
							account activity for any signs of unauthorized
							access. Additionally, educate yourself about common
							phishing tactics, scams, and security best practices
							to recognize and avoid potential threats. Be
							cautious about the personal information you share
							online, especially on social media platforms, and
							adjust privacy settings accordingly. Finally, use a
							virtual private network (VPN) to encrypt your
							internet connection for enhanced online privacy,
							especially when accessing sensitive information or
							public Wi-Fi.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default URLCheckFAQ;
