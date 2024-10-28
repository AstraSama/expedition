import Species from "../../database/models/species_model.js";

const store = async (req, res) => {
  try {
    const { name, discovery_location, rarity, documented } = req.body;

    await Species.create({name, discovery_location, rarity, documented});

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Species.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Species.findById(req.params.id)
    .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { name, discovery_location, rarity, documented } = req.body;

    await Species.findByIdAndUpdate(req.params.id, {
        name,
        discovery_location,
        rarity,
        documented
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Species.findByIdAndDelete(req.params.id)
    .exec();

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