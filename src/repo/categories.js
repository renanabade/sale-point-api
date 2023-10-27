const knex = require("../config/connection");

const loadCategories = () => {
  const foundCategories = knex("categories");
  return foundCategories;
};

const isCategoryRegistered = async (categoryId) => {
  const foundCategory = await knex("categories")
    .where({ id: categoryId })
    .first();

  return foundCategory;
};

module.exports = {
  loadCategories,
  isCategoryRegistered,
};
