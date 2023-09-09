const { Schema, model } = require("mongoose");

const talentSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama wajib diisi"],
    },
    role: {
      type: String,
      default: "-",
    },
    // organizer: {}
    image: {
      type: Schema.Types.ObjectId,
      ref: "Image",
      required: [true, "Image wajib diisi"],
    },
  },
  { timestamps: true }
);

const Talents = model("Talent", talentSchema);

module.exports = Talents;
