
// DEPENDENCIES
const { Router } = require("express");
const auth = require("../authmiddleware");


// CREATE ROUTER
const router = Router();


// ROUTES


//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});


// Export Router
module.exports = router;
