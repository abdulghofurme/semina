const Talents = require("../../api/v1/talents/model");
const { NotFound } = require("../../errors");
const { checkIsImageExist } = require("./images");

const getAllTalents = async (req) => {
  const { name } = req?.query;
  const whereCondition = {};

  if (name) {
    whereCondition.name = {
      $regex: name,
      $options: "i", // incase-sensitif
    };
  }

  const talents = await Talents.find(whereCondition).populate("image", "url");

  return talents;
};

const createTalents = async (req) => {
  const { name, image, role } = req.body;

  const isImageIdValid = await checkIsImageExist(image);
  if (!isImageIdValid) throw new NotFound("Image tidak ditemukan");

  const talent = await Talents.create({
    name,
    image,
    role,
  });

  return talent;
};

const getOneTalents = async (req) => {
  const { id } = req.params;

  const talent = await Talents.findById(id);

  if (!talent) throw new NotFound("Talent tidak ditemukan");

  return talent;
};

const updateOneTalents = async (req) => {
  const { id } = req.params;
  const { name, image, role } = req.body;

  const isImageIdValid = await checkIsImageExist(image);
  if (!isImageIdValid) throw new NotFound("Image tidak ditemukan");

  const talent = await Talents.findByIdAndUpdate(
    id,
    {
      name,
      role,
      image,
    },
    { runValidators: true, new: true }
  );

  if (!talent) throw new NotFound("Talent tidak ditemukan");

  return talent;
};

const deleteOneTalents = async (req) => {
  const { id } = req.params;
  const talent = await Talents.findByIdAndDelete(id);

  if (!talent) throw new NotFound("Talent tidak ditemukan");

  return talent;
};

module.exports = {
  getAllTalents,
  createTalents,
  getOneTalents,
  updateOneTalents,
  deleteOneTalents
};
