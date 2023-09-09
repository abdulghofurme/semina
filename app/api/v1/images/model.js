const { Schema, model } = require("mongoose");

const imageSchema = Schema(
  {
    url: { type: String, unique: [true, "Url image sudah dipakai"] },
  },
  { timestamps: true }
);

const Images = model("Image", imageSchema);

module.exports = Images;
