import Expedition from "../../database/models/expedition_model.js";

const store = async (req, res) => {
  try {
    const { location, date, participants, species_found } = req.body;

    await Expedition.create({ location, date, participants, species_found });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Expedition.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Expedition.findById(req.params.id)
    .populate("participants")
    .populate("species_found")
    .exec();

    if (!content) {
        return res.status(404).send("Expedition não encontrada");
    }

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { location, date, participants, species_found } = req.body;

    await Expedition.findByIdAndUpdate(req.params.id, {
        location,
        date,
        participants,
        species_found
    }).exec();

    if (!content) {
        return res.status(404).send("Expedition não encontrada");
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Expedition.findByIdAndDelete(req.params.id)
    .exec();

    if (!content) {
        return res.status(404).send("Expedition não encontrada");
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  store,
  index,
  show,
  update,
  destroy,
};