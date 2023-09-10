const Events = require("../../api/v1/events/model");
const { NotFound } = require("../../errors");
const { checkIsImageExist } = require("./images");

const getAllEvents = async (req) => {
  //   const events = await Events.find()
  //     .populate("image")
  //     .populate("category")
  //     .populate({ path: "talent", populate: { path: "image" } });

  //   const events = await Events.find()
  //     .populate(["image", "category"])
  //     .populate({ path: "talent", populate: { path: "image" } });

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

  const isImagevalid = await checkIsImageExist(image);
  if (!isImagevalid) throw new NotFound("Image tidak ditemukan");

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

  const isImagevalid = await checkIsImageExist(image);
  if (!isImagevalid) throw new NotFound("Image tidak ditemukan");

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
