const repositorieCategories = require("../repo/categories");

const loadCategories = async (req, res) => {
  try {
    const foundCategories = await repositorieCategories.loadCategories();
    return res.status(200).json(foundCategories);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

module.exports = {
  loadCategories,
};
