const Categories = require("../../api/v1/categories/model");
const { NotFound, BadRequest } = require("../../errors");

const getAllCategories = async () => {
  const categories = await Categories.find();

  return categories;
};

const createCategories = async (req) => {
  const { name } = req.body;
  const cateogry = await Categories.create({ name });

  return cateogry;
};

const getCategoryById = async (req) => {
  const { id } = req.params;

  const category = await Categories.findById(id);

  if (!category) throw new NotFound(`Kategori tidak ditemukan`);

  return category;
};

const getCategoryByIdAndUpdate = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  // already handled by unique mongoose
  //   const check = await Categories.findOne({
  //     name,
  //     _id: { $ne: id },
  //   });
  //   if (check) throw new BadRequest("Nama kategori sudah dipakai");

  const category = await Categories.findByIdAndUpdate(
    id,
    {
      name,
    },
    { runValidators: true, new: true }
  );

  if (!category) throw new NotFound(`Kategori tidak ditemukan`);

  return category;
};

const getCategoryByIdAndDelete = async (req) => {
  const { id } = req.params;
  const category = await Categories.findByIdAndDelete(id);

  if (!category) throw new NotFound(`Kategori tidak ditemukan`);

  return category;
};

module.exports = {
  getAllCategories,
  createCategories,
  getCategoryById,
  getCategoryByIdAndUpdate,
  getCategoryByIdAndDelete,
};
