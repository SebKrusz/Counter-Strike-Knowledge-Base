import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Skinchecker from "./components/ItemChecker/SkinChecker";
import URLCheck from "./components/URLCheck/URLCheck";
import WarehouseDetails from "./components/WebsiteDetails/WarehouseDetails";
import TestWebsite from "./components/TestWebsite/TestWebsite";
import StreamerList from "./components/StreamerList/StreamerList";
import WebsiteList from "./components/WebsiteList/WebsiteList";
import WebsiteFAQ from "./components/WebsiteFAQ/WebsiteFAQ";
import StreamerFAQ from "./components/StreamerFAQ/StreamerFAQ";
import ItemFAQ from "./components/ItemFAQ/ItemFAQ";
import URLCheckFAQ from "./components/URLCheckFAQ/URLCheckFAQ";
import TestStreamer from "./components/TestStreamer/TestStreamer";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/websites" element={<WebsiteList />} />
				<Route path="/website/:id" element={<TestWebsite />} />
				<Route path="/websiteFAQ" element={<WebsiteFAQ />} />
				<Route path="/streamers" element={<StreamerList />} />
				<Route path="/streamer/:id" element={<TestStreamer />} />
				<Route path="/streamerFAQ" element={<StreamerFAQ />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/skincheck" element={<Skinchecker />} />
				<Route path="/itemFAQ" element={<ItemFAQ />} />
				<Route path="*" element={<PageNotFound />} />
				<Route path="/URLCheck" element={<URLCheck />} />
				<Route path="/URLCheckFAQ" element={<URLCheckFAQ />} />
				<Route path="/test-website-info" element={<TestWebsite />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
export default App;
