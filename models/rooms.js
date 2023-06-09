const mongoose = require("mongoose");

const Rooms = new mongoose.Schema(
  {
    title: {
      type: "number",
      required: true,
      trim: true,
    },
    status:{
      type: "string",
      default: 'bosh',
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Students'
      }
    ],
    stage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stages'
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Rooms", Rooms);
