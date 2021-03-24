// Include Router
const express = require("express");
const router = express.Router();

// Include dnsForm Controller
const { dnsForm } = require("../Controllers/DNS");

// Include dnsValidation Middleware
const { dnsValidation } = require("../Middlewares/dnsValidation");

// Post Request to senddata
router.post("/senddata", dnsValidation, dnsForm);

// Export the router
module.exports = router;
