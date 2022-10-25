const express = require("express");

const router = express.Router();
const registerUser = require("./UserController");

router.route("/register").post(registerUser).get(
    (req, res) => {
        res.send("Successfully registered!");
    }
);

module.exports = router;