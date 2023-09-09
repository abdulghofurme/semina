const Images = require("../../api/v1/images/model");
const { BadRequest, NotFound } = require("../../errors");

const getAllImages = async () => {
  const images = await Images.find();

  return images;
};

const checkIsImageExist = async (id) => {
  const image = await Images.findById(id);

  return Boolean(image);
};

const createImages = async (req) => {
  if (!req.file) throw new BadRequest("Gambar tidak disertakan");

  const image = await Images.create({
    url: `images/u/${req.file.filename}`,
  });

  return image;
};

const getOneImagesAndDelete = async (req) => {
  const { id } = req.params;
  const image = await Images.findByIdAndDelete(id);

  if (!image) throw new NotFound(`Image tidak ditemukan`);

  return image;
};

const deleteAll = async () => {
  await Images.deleteMany();
};

module.exports = {
  getAllImages,
  createImages,
  getOneImagesAndDelete,
  deleteAll,
  checkIsImageExist,
};
