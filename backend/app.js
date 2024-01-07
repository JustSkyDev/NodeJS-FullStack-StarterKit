// Import the depencencies
const express = require("express"),
  cors = require("cors");

// Call the routes
const routes = require("./router/routes");

// Create the app
const app = express();

// Application Port
const PORT = 3000;

// Use Cors plugin
app.use(cors());

// Parsing request body data
app.use(express.json()); // Parse JSON Data
app.use(express.urlencoded({ extended: true })); // Parse URL Encodeed Data

// Use the routes
app.use(routes);

// Listen to the server
app.listen(PORT, () => console.log("Backend started at PORT", PORT));
