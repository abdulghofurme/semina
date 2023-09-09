const Images = require("../../api/v1/images/model");
const { BadRequest } = require("../../errors");

const getAllImages = async () => {
  const images = await Images.find();

  return images;
};

const createImages = async (req) => {
  if (!req.file) throw new BadRequest("Gambar tidak disertakan");

  const image = await Images.create({
    url: `images/u/${req.file.filename}`,
  });

  return image;
};

const getImageAndDelete = async (req) => {
  const { id } = req.params;
  const image = await Images.findByIdAndDelete(id);

  if (!image) throw new NotFound(`Image tidak ditemukan`);

  return image;
};

module.exports = {
  getAllImages,
  createImages,
  getImageAndDelete,
};
