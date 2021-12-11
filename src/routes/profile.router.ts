import express from "express";
import { Profile } from "../models/Profile";

export var router = express.Router();

router.get("/api/profile", async (req, res) => {
  var profile = await Profile.find().lean();
  res.json({ profile });
});

router.post("/api/profile", async (req, res) => {
  const { email, name, nickname } = req.body;

  const found = await Profile.findOne({
    $or: [{ email }, { nickname }],
  }).lean();

  if (found) {
    return res.status(400).json({
      error: `[${email}] or [${nickname}] exists in database`,
    })
  }

  const profile = await Profile.create({ name, email, nickname });
  res.json({ profile });
});
