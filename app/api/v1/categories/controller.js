const Categories = require("./model");

const index = async (req, res, next) => {
  try {
    const categories = await Categories.find();
    res.status(200).json({ data: categories });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const cateogry = await Categories.create({ name });

    res.status(201).json({
      data: cateogry,
    });
    j;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Categories.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Kategori tidak ditemukan" });
    }

    res.status(200).json({
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Categories.findByIdAndUpdate(
      id,
      {
        name,
      },
      { runValidators: true, new: true }
    );

    if (!category) {
      return res.status(404).json({ message: "Kategori tidak ditemukan" });
    }

    res.status(200).json({ data: category });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Categories.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({ message: "Kategori tidak ditemukan" });
    }

    res.status(200).json({ data: category });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  index,
  create,
  find,
  update,
  destroy,
};
