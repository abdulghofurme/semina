const Talents = require("../../api/v1/talents/model");
const { NotFound } = require("../../errors");
const imagesService = require("./images");

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
  const { name, role } = req.body;
  const createdImage = await imagesService.createImages(req);
  const talent = await Talents.create({
    name,
    image: createdImage._id,
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

const getOneTalentsAndUpdate = async (req) => {
  const { id } = req.params;
  const { name, role } = req.body;

  const createdImage = await imagesService.createImages(req);

  const talent = await Talents.findByIdAndUpdate(
    id,
    {
      name,
      role,
      image: createdImage._id,
    },
    { runValidators: true, new: true }
  );

  if (!talent) throw new NotFound("Talent tidak ditemukan");

  return talent;
};

const getOneTalentAndDelete = async (req) => {
  const { id } = req.params;
  const talent = await Talents.findByIdAndDelete(id);

  if (!talent) throw new NotFound("Talent tidak ditemukan");

  return talent;
};

const deleteAll = async () => {
  await Talents.deleteMany();
};

module.exports = {
  getAllTalents,
  createTalents,
  deleteAll,
  getOneTalents,
  getOneTalentsAndUpdate,
  getOneTalentAndDelete,
};
