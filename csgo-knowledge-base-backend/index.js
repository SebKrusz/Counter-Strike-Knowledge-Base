const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(express.json()); // Apply the middleware here

app.get("/", (req, res) => {
	res.send("Welcome to the CSGO knowledge base API");
});

const streamerRoutes = require("./routes/streamer-routes");
app.use("/streamer", streamerRoutes);

const websiteRoutes = require("./routes/website-routes");
app.use("/website", websiteRoutes);

const urlCheckRoutes = require("./routes/urlcheck-routes"); // Import the new urlcheck routes
app.use("/urlcheck", urlCheckRoutes); // Use the new urlcheck routes

const itemCheckRoutes = require("./routes/itemcheck-routes"); // Import the new urlcheck routes
app.use("/itemcheck", itemCheckRoutes); // Use the new urlcheck routes

app.listen(PORT, () => {
	console.log(`running at http://localhost:${PORT}`);
});
