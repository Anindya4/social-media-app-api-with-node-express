const router = require("express").Router();
const User = require("../models/User");

//Register:
router.get("/register", async (req, res) => {
  const user = await new User({
    username: "Anindya",
    email: "anindya@gmail.com",
    password: "0123456789",
  });

  await user.save();
  res.send("okayy.")
});

module.exports = router;
