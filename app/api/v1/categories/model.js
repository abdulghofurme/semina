const { model, Schema } = require("mongoose");

const categorySchema = Schema(
  {
    name: {
      type: String,
      minLength: [3, "Panjang nama kategori minimal 3 karakter"],
      maxLength: [20, "Panjang nama kategori maksimal 20 karakter"],
      required: [true, "Nama kategori wajib diisi"],
      unique: [true, 'Nama kategori sudah digunakan']
    },
  },
  { timestamps: true }
);

module.exports = model("Category", categorySchema);
