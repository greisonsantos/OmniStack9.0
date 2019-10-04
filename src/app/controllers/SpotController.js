const Spot = require("../models/Spot");
const User = require("../models/User");

class SpotController {
  async index(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  }

  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    //verificando se o user existe
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ error: "user does not exists" });
    }

    const spot = await Spot.create({
      user: user_id,
      img: filename,
      company,
      // separa as strings por virgula e retira os espaços que sobram
      techs: techs.split(",").map(tech => tech.trim()),
      price
    });

    return res.json(spot);
  }
}

module.exports = new SpotController();
