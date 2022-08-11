import express from "express";
const router = express.Router();
import UserModel from "../../models/userModel.mjs";

router.get("/", (_req, res) => {
  UserModel.find({}, (err, users) => {
    err ? res.send(err) : res.json(users);
  });
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  UserModel.findById(userId, (err, user) => {
    err ? res.send(err) : res.json(user);
  });
});

router.post("/", (req, res) => {
  const user = new UserModel();
  user.name = req.body.name;
  user.screen_name = req.body.screen_name;
  user.bio = req.body.bio;

  user.save((err) => {
    err ? res.send(err) : res.json({ message: "User create Success!!" });
  });
});

router.put("/:id", (req, res) => {
  const userId = req.params.id;
  UserModel.findById(userId, (err, user) => {
    if (err) {
      res.send(err);
      return;
    }
    user.name = req.body.name;
    user.screen_name = req.body.screen_name;
    user.bio = req.body.bio;

    user.save((err) => {
      err ? res.send(err) : res.json({ message: "User update Success!!" });
    });
  });
});

export { router };
