const Spot = require("../models/Spot");
const Booking = require("../models/Booking");

class BookingController {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });
    //retornando todas as informações do user e do spot é somente o id
    await booking
      .populate("spot")
      .populate("user")
      .execPopulate();

    return res.json(booking);
  }
}

module.exports = new BookingController();
