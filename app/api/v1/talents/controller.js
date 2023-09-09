const { StatusCodes } = require("http-status-codes");
const {
  getAllTalents,
  createTalents,
  getOneTalents,
  updateOneTalents,
  deleteOneTalents,
} = require("../../../services/mongoose/talents");

const index = async (req, res, next) => {
  try {
    const talents = await getAllTalents(req);

    res.status(StatusCodes.OK).json({ data: talents });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const talent = await createTalents(req);

    res.status(StatusCodes.CREATED).json({ data: talent });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const talent = await getOneTalents(req);

    res.status(StatusCodes.OK).json({
      data: talent,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const talent = await updateOneTalents(req);

    res.status(StatusCodes.OK).json({
      data: talent,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const talent = await deleteOneTalents(req);

    res.status(StatusCodes.OK).json({ data: talent });
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
