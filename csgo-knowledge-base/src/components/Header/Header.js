import "./Header.scss";
import { Link } from "react-router-dom";
import InstockLogo from "../../assets/logos/Half-Life_lambda_logo.svg";
import { useState } from "react";

const Header = () => {
	const [selectedLink, setSelectedLink] = useState(null);

	const handleLinkClick = (link) => {
		setSelectedLink(link);
	};

	return (
		<header className="header">
			<div className="header__box">
				<Link to="/URLCheck">
					<div className="header__box-logo">
						<img src={InstockLogo} alt="Instock Logo"></img>
					</div>
				</Link>
				<h1 className="header__logo-text">CSKB</h1>
			</div>
			<nav className="header__container">
				<ul className="header__container-nav">
					<li className="header__container-nav-box">
						<Link
							to={`/URLCheck`}
							className="header__container-nav-box-link">
							<button
								className={`header__container-nav-box-link`}
								onClick={() => handleLinkClick("warehouses")}>
								URL CHECKER
							</button>
						</Link>
					</li>
					<li className="header__container-nav-box">
						<Link
							to={`/Skincheck`}
							className="header__container-nav-box-link">
							<button
								className={`header__container-nav-box-link`}
								onClick={() => handleLinkClick("inventory")}>
								SKIN CHECKER
							</button>
						</Link>
					</li>
					<li className="header__container-nav-box">
						<Link
							to={`/streamers`}
							className="header__container-nav-box-link">
							<button
								className={`header__container-nav-box-link `}
								onClick={() => handleLinkClick("inventory")}>
								STREAMER CHECKER
							</button>
						</Link>
					</li>
					<li className="header__container-nav-box">
						<Link
							to={`/websites`}
							className="header__container-nav-box-link">
							<button
								className={`header__container-nav-box-link`}
								onClick={() => handleLinkClick("inventory")}>
								WEBSITE CHECKER
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
