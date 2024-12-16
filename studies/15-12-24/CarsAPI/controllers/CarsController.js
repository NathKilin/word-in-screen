const Joke = require("../models/car.model.js");

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createCar = async (req, res) => {
  try {
    console.log(req.body);
    const result = await Car.create(req.body);
    console.log(result);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await Car.findById(id);
    if (!car) throw new Error("Car not found");

    return res.json(car);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndUpdate(id, req.body, { new: true });

    if (!car) throw new Error("car not found");

    res.send({
      message: "car updated successfully",
      car,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndDelete(id);

    if (!car) throw new Error("Car not found");

    res.send({
      message: "Car deleted successfully",
    });
  } catch (error) {}
};

module.exports = {
    getAllCars,
    createCar,
    getCarById,
    updateCar,
    deleteCar,
}