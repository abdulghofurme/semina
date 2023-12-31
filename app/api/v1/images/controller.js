const { StatusCodes } = require("http-status-codes");
const {
  createImages,
  getAllImages,
  deleteOneImages,
} = require("../../../services/mongoose/images");

const index = async (req, res, next) => {
  try {
    const images = await getAllImages();

    res.status(StatusCodes.OK).json({ data: images });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const image = await createImages(req);

    res.status(StatusCodes.CREATED).json({ data: image });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const image = await deleteOneImages(req);

    res.status(StatusCodes.OK).json({ data: image });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, index, destroy };
