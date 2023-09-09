const { Schema, model } = require("mongoose");

const imageSchema = Schema(
  {
    url: { type: String, unique: [true, "Url image sudah dipakai"] },
  },
  { timestamps: true }
);

module.exports = model("Image", imageSchema);
