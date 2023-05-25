const mongoose = require("mongoose");

const Stages = new mongoose.Schema(
  {
    title: {
      type: "number",
      required: true,
      trim: true,
    },
    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rooms'
        }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stages", Stages);
