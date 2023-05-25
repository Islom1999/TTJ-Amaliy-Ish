const mongoose = require("mongoose");

const Courses = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Courses", Courses);
