const { Schema, model } = require("mongoose");

const ticketTypeSchema = Schema({
  name: {
    type: String,
    required: [true, "Nama tiket wajb diisi"],
  },
  price: {
    type: Number,
    default: 0,
    min: [0, "Harga tidak boleh kurang dari 0"],
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, "Stok tidak boleh kurang dari 0"],
  },
  status: {
    type: Boolean,
    enum: [true, false],
    default: true,
  },
  expired: {
    type: Date,
  },
});

const eventSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Judul acara wajib diisi"],
    },
    date: {
      type: Date,
      required: [true, "Tanggal acara waijb diisi"],
    },
    about: {
      type: String,
      default: "",
    },
    tagline: {
      type: String,
      required: [true, "Tagline acara wajib diisi"],
    },
    keypoint: [
      {
        type: String,
      },
    ],
    venue_name: {
      type: String,
      required: [true, "Tempat wajib diisi"],
    },
    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },
    tickets: {
      type: [ticketTypeSchema],
      required: [true, "Tiket wajib diisi"],
    },
    categories: [
      {
        type: Schema.ObjectId,
        ref: "Category",
        required: [true, "Event wajib memiliki kategori"],
      },
    ],
    image: {
      type: Schema.ObjectId,
      ref: "Image",
      required: [true, "Gambar wajbi diisi"],
    },
    talent: {
      type: Schema.ObjectId,
      ref: "Talent",
      required: [true, "Event wajib memiliki talent"],
    },
  },
  {
    timestamps: true,
  }
);

const Events = model("Event", eventSchema);

module.exports = Events;
