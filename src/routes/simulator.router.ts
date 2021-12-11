import express from "express";
import { Simulator } from "../models/Simulator";
import { Types } from "mongoose";

export var router = express.Router();

router.get("/api/simulator", async (req, res) => {
  var simulator = await Simulator.find().lean();
  res.json({ simulator });
});

router.get("/api/simulator/:profile_id", async (req, res) => {
  const { profile_id } = req.params;
  const query = { profile_id };
  if (!Types.ObjectId.isValid(profile_id)) {
    return res.status(406).json({
      error: `[${profile_id}] is not a valid Object ID`,
    })
  }
  const data = await Simulator.find(query).lean();
  res.json(data);
});

router.post("/api/simulator/:profile_id", async (req, res) => {
  const { profile_id } = req.params;
  if (!Types.ObjectId.isValid(profile_id)) {
    return res.status(406).json({
      error: `[${profile_id}] is not a valid Object ID`,
    })
  }

  const simulator = new Simulator({
    ...req.body,
    profile_id,
  });
  await simulator.save();
  res.json({ simulator });
});
