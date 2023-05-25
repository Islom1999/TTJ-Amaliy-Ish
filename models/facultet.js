const mongoose = require("mongoose");

const Facultet = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Facultet", Facultet);
