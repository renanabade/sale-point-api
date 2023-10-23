const knex = require("../config/connection");

const loadCategories = () => {
  const foundCategories = knex("categorias");
  return foundCategories;
};

const isCategoryRegistered = async (categoryId) => {
  const foundCategory = await knex("categorias")
    .where({ id: categoryId })
    .first();

  return foundCategory;
};

module.exports = {
  loadCategories,
  isCategoryRegistered,
};
