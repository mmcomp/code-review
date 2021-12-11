import express from "express";
import { Favorite } from "../models/Favorite";
import { Types } from "mongoose";

export const router = express.Router();

router.get("/api/favorite", async (req, res) => {
  const favorite = await Favorite.find().lean();
  res.json({ favorite });
});

router.get("/api/favorite/:profile_id", async (req, res) => {
  const { profile_id } = req.params;
  const query = { profile_id };
  if (!Types.ObjectId.isValid(profile_id)) {
    return res.status(406).json({
      error: `[${profile_id}] is not a valid Object ID`,
    })
  }
  const data = await Favorite.find(query).lean();
  res.json(data);
});
