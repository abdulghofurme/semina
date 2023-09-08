const { StatusCodes } = require("http-status-codes");
const {
  getAllCategories,
  createCategories,
  getCategoryById,
  getCategoryByIdAndUpdate,
  getCategoryByIdAndDelete,
} = require("../../../services/mongoose/categories");

const index = async (req, res, next) => {
  try {
    const categories = await getAllCategories();
    res.status(StatusCodes.OK).json({ data: categories });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const category = await createCategories(req);

    res.status(StatusCodes.CREATED).json({
      data: category,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const category = await getCategoryById(req);

    res.status(StatusCodes.OK).json({
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const category = await getCategoryByIdAndUpdate(req);

    res.status(StatusCodes.OK).json({ data: category });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const category = await getCategoryByIdAndDelete(req);

    res.status(StatusCodes.OK).json({ data: category });
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
