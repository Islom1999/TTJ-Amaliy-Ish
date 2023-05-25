const mongoose = require("mongoose");

const Groups = new mongoose.Schema(
  {
    title: {
      type: "number",
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Groups", Groups);
