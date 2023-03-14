import Company from "../Models/company.js";

export const createCompany = async (req, res) => {
  const { name, location, founder } = req.body;
  try {
    const company = await Company.create({
      name,
      location,
      founder,
    });

    res.json(company);
  } catch (error) {
    res.json(error.errors);
  }
};

export const getAllCompany = async (req, res) => {
  const companies = await Company.find().populate("cars");
  res.json(companies);
};

export const getCompany = async (req, res) => {
  const { id } = req.params;
  const company = await Company.findById(id).populate("cars");
  res.json(company);
};
