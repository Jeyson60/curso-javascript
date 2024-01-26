const express = require("express");
const userSchema = require('../models/user');
const router = express.Router();

router.post("/user",(req,res) =>{
  const user = new userSchema(req.body);
  user.save().then((data) =>{
    res.json(data);
  }).catch((error) => {
    res.json({ message: error});
  });
});


router.get("/user",(req,res) =>{
  userSchema.find().then((data) =>{
      rest.json(data);
  }).catch((error) =>{
      rest.json({messsage:error});

  });
  
});


router.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});


router.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = router;