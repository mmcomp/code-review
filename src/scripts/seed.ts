import mongoose from "mongoose";
import _ from "lodash";
import { Profile } from "../models/Profile";
import { Simulator } from "../models/Simulator";
import { Favorite } from "../models/Favorite";
import { DBURL } from "../config";

(async () => {

  await mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const profile = new Profile({
    name: `String`,
    email: `String`,
    capital: `123`,
    divisa: `String`,
    prefered_cryptocurrency: `String`,
  });
  await profile.save();

  const idProfile = profile._id;

  const simulator = new Simulator({
    profile_id: idProfile,
    cryptocurrency: `String`,
    dateRecorded: new Date(),
    euros: 100,
    price: 10.13,
    quantity: 2,
  });
  await simulator.save();

  const favorite = new Favorite({
    profile_id: idProfile,
    name: `String`,
    favorite1: `String`,
    favorite2: `String`,
    favorite3: `String`,
  });
  await favorite.save();

  await mongoose.disconnect();
})();
