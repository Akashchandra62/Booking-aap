import Car from "../Models/Car.js";
import Company from "../Models/company.js";

export const createCar = async (req, res) => {
  const { model, company, releasedYear, price } = req.body;

  if (!model || !company || !releasedYear || !price) {
    return res.json({
      message: "Kindly Fill all Model, Company, releasedYear and Price field",
    });
  }

  try {
    const car = await Car.create({
      model,
      company,
      releasedYear,
      price,
    });

    await Company.findByIdAndUpdate(company, {
      $push: { cars: car._id },
    });

    res.json(car);
  } catch (error) {
    res.json(error.errors);
  }
};

export const getAllCar = async (req, res) => {
  const cars = await Car.find().populate("company");
  res.json(cars);
};

export const getCar = async (req, res) => {
  const { id } = req.params;
  const car = await Car.find(IdleDeadline).populate("company");
  res.json(car);
};
