const Events = require("../../api/v1/events/model");
const { NotFound } = require("../../errors");
const { checkIsCategoryExist } = require("./categories");
const { checkIsImageExist } = require("./images");
const { checkIsTalentExist } = require("./talents");

const getAllEvents = async (req) => {
  const events = await Events.find().populate([
    { path: "image", select: "_id url" },
    { path: "categories", select: "_id name" },
    {
      path: "talent",
      select: "_id name role image",
      populate: { path: "image", select: "_id url" },
    },
  ]);

  return events;
};

const createEvents = async (req) => {
  const {
    title,
    date,
    about,
    tagline,
    keypoint,
    venue_name,
    status,
    tickets,
    categories,
    image,
    talent,
  } = req.body;

  await checkIsTalentExist(talent);
  await checkIsImageExist(image);
  for (let index = 0; index < categories.length; index++) {
    const element = categories[index];
    await checkIsCategoryExist(element);
  }

  const event = await Events.create({
    title,
    date,
    about,
    tagline,
    keypoint,
    venue_name,
    status,
    tickets,
    categories,
    image,
    talent,
  });

  return event;
};

const getOneEvents = async (req) => {
  const { id } = req.params;

  const event = await Events.findById(id).populate([
    { path: "image", select: "_id url" },
    { path: "categories", select: "_id name" },
    {
      path: "talent",
      select: "_id name role image",
      populate: { path: "image", select: "_id url" },
    },
  ]);

  if (!event) throw new NotFound("Event tidak ditemukan");

  return event;
};

const updateOneEvents = async (req) => {
  const { id } = req.params;

  const {
    title,
    date,
    about,
    tagline,
    keypoint,
    venue_name,
    status,
    tickets,
    categories,
    image,
    talent,
  } = req.body;

  await checkIsTalentExist(talent);
  await checkIsImageExist(image);
  for (let index = 0; index < categories.length; index++) {
    const element = categories[index];
    await checkIsCategoryExist(element);
  }

  const event = await Events.findByIdAndUpdate(
    id,
    {
      title,
      date,
      about,
      tagline,
      keypoint,
      venue_name,
      status,
      tickets,
      categories,
      image,
      talent,
    },
    { runValidators: true, new: true }
  ).populate([
    { path: "image", select: "_id url" },
    { path: "categories", select: "_id name" },
    {
      path: "talent",
      select: "_id name role image",
      populate: { path: "image", select: "_id url" },
    },
  ]);

  if (!event) throw new NotFound("Event tidak ditemukan");

  return event;
};

const deleteOneEvents = async (req) => {
  const { id } = req.params;

  const event = await Events.findByIdAndDelete(id);

  if (!event) throw new NotFound("Event tidak ditemukan");

  return event;
};

module.exports = {
  getAllEvents,
  createEvents,
  getOneEvents,
  updateOneEvents,
  deleteOneEvents,
};
