const { model, Schema } = require("mongoose");

const categorySchema = Schema(
  {
    name: {
      type: String,
      minLength: [3, "Panjang nama kategori minimal 3 karakter"],
      maxLength: [20, "Panjang nama kategori maksimal 20 karakter"],
      required: [true, "Nama Kategori wajib diisi"],
    },
  },
  { timestamps: true }
);

module.exports = model("Category", categorySchema);
