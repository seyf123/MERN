const express = require("express");
const router = express.Router();
const User = require("../models/User");
//get all users
router.get("/test", (req, res) => {
  res.send("Hello MERN");
});
router.get("/", async (req, res) => {
  try {
    const Users = await User.find();
    res.send({ Users, msg: "this is all the users" });
  } catch (error) {
    console.log(error);
    res.status(400).send("cannot get users");
  }
});
//delete user
router.delete("/:id", async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    if (result.deletedCount) {
      return res.send({ msg: "user succesfully deleted" });
    }
    res.status(400).send("user already removed");
  } catch (error) {
    console.log(error);
    res.status(400).send("user doesn't exist");
  }
});
//add new user
router.post("/", async (req, res) => {
  try {
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      return res.status(400).send({ msg: "user already exist" });
    }
    const newUser = new User({ ...req.body });
    await newUser.save();
    res.send({ newUser, msg: "user added succesfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send("cannot save user");
  }
});
//update user
router.put("/:id", async (req, res) => {
  try {
    const existUser = await User.findOne({ _id: req.params.id });
    if (!existUser) {
      return res.status(400).send({ msg: "no user with this id" });
    }
    
    const result = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    ); console.log(result)
    if (result.modifiedCount){ return res.send({msg:"user seccesfully apdated"})}
    res.status(400).send({msg : "user already apdated"})
  } 
   catch (error) {
    console.log(error);
    res.status(400).send({msg: error.message})
  }
});
// get one user
router.get("/oneUser/:id", async (req, res) => {
  try {
    const result = await User.findOne({ _id: req.params.id });
      return res.send({ msg: "user get with succes", user : result });
  } catch (error) {
    console.log(error);
    res.status(400).send("user doesn't exist");
  }
});
module.exports = router;
