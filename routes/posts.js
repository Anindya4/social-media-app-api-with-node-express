const router = require("express").Router();

router.get("/", (req,res)=>{
  console.log("This is post page.")
})

module.exports= router;