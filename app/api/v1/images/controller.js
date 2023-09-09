const { StatusCodes } = require("http-status-codes");
const {
  createImages,
  getAllImages,
  getOneImagesAndDelete,
} = require("../../../services/mongoose/images");

const find = async (req, res, next) => {
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
    const image = await getOneImagesAndDelete(req);

    res.status(StatusCodes.OK).json({ data: image });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, find, destroy };
