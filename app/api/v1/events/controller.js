const { StatusCodes } = require("http-status-codes");
const {
  createEvents,
  getAllEvents,
  getOneEvents,
  deleteOneEvents,
  updateOneEvents,
} = require("../../../services/mongoose/events");

const index = async (req, res, next) => {
  try {
    const events = await getAllEvents(req);

    res.status(StatusCodes.OK).json({ data: events });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const event = await createEvents(req);

    res.status(StatusCodes.CREATED).json({ data: event });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const event = await getOneEvents(req);

    res.status(StatusCodes.OK).json({ data: event });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const event = await updateOneEvents(req);

    res.status(StatusCodes.OK).json({ data: event });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const event = await deleteOneEvents(req);

    res.status(StatusCodes.OK).json({ data: event });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  index,
  create,
  find,
  destroy,
  update,
};
