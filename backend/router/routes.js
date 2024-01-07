// Use Express Router advanced api routes
const routes = require("express").Router();

// Import the controllers
const get = require("../controllers/get");

// Use the routes

// GET
routes.get("/api", get);

// Export the routes
module.exports = routes;
