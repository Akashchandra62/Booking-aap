import Booking from "../Models/booking.js";
import Car from "../Models/Car.js";
import Company from "../Models/company.js";

export const createBooking = async (req, res) => {
  const { name, email, phone, model, company } = req.body;

  try {
    const car = await Car.findOne({
      model: { $regex: model, $options: "i" },
    }).populate("company");
    if (!car || car.company.name !== company) {
      return res.json({
        message: `${company} don't manufacture ${model},Try Booking for other model or company`,
      });
    }
    const booking = await Booking.create({
      name,
      email,
      phone,
      model,
      company,
    });

    res.json({ message: "Booking Done, Safe Drive!!", booking });
  } catch (error) {
    res.json(error.errors);
  }
};

export const getAllBooking = async (req, res) => {
  const bookings = await Booking.find({ isActive: true }).sort("bookedOn");
  res.json({ message: "All Active Bookings", bookings });
};

export const getBooking = async (req, res) => {
  const id = req.params;
  const booking = await Booking.findById(id);
  res.json({ message: "Your Booking..", booking });
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  await Booking.findByIdAndUpdate(id, { isActive: false });
  res.json({ message: "Booking Deleted Successfully..." });
};
