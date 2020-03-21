var express = require('express');
var router = express.Router();
const users = require("../controllers/user.controller.js");

/* Create a user*/
router.post('/', users.create);

module.exports = router;
