const Categories = require("../../api/v1/categories/model");
const { NotFound } = require("../../errors");

const getAllCategories = async () => {
  const categories = await Categories.find();

  return categories;
};

const createCategories = async (req) => {
  const { name } = req.body;
  const cateogry = await Categories.create({ name });

  return cateogry;
};

const getOneCategories = async (req) => {
  const { id } = req.params;

  const category = await Categories.findById(id);

  if (!category) throw new NotFound(`Kategori tidak ditemukan`);

  return category;
};

const updateOneCategories = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

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

const deleteOneCategories = async (req) => {
  const { id } = req.params;
  const category = await Categories.findByIdAndDelete(id);

  if (!category) throw new NotFound(`Kategori tidak ditemukan`);

  return category;
};

module.exports = {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateOneCategories,
  deleteOneCategories,
};
