const express = require("express");
const router = express.Router();
const Conatct = require("../Models/contact");
router.post(
    "/contact",
   
    async (req, res) => {
    
      try {
        await Conatct.create({
          name: req.body.name,
          email: req.body.email,
          phone:req.body.phone,
          messsage:req.body.message
        });
        res.json({ success: true , });
      } catch (err) {
        console.log("error", err);
        res.json({ success: false });
      }
    } 
  ); 
  module.exports = router; 
