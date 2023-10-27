const knex = require("../config/connection");

const createProduct = async (productData) => {
  const registeredProduct = await knex("products")
    .insert(productData)
    .returning({
      id: "id",
      description: "description",
      stock_quantity: "stock_quantity",
      value: "value",
      category_id: "category_id",
      product_image: "product_image",
    });

  return registeredProduct[0];
};

const isProductRegistered = async (id) => {
  const product = await knex("products").where({ id }).first();
  return product;
};

const modifyProduct = async (id, productData) => {
  const updatedProduct = await knex("products")
    .where({ id })
    .update(productData)
    .returning({
      id: "id",
      description: "description",
      stock_quantity: "stock_quantity",
      value: "value",
      category_id: "category_id",
    });

  return updatedProduct[0];
};

const productDeleted = async (id) => {
  const deletedProduct = await knex("products").where({ id }).del();
  return deletedProduct;
};

const loadProduct = () => {
  const foundproducts = knex("products");
  return foundproducts;
};

const getProduct = async (id) => {
  const product = await knex("products")
    .select(
      "id",
      "description",
      "stock_quantity",
      "value",
      "category_id",
      "product_image"
    )
    .where("id", id)
    .first();

  return product;
};

const getProductIdCategory = async (id_categoria) => {
  const productsIdCategory = await knex("products")
    .select(
      "id",
      "description",
      "stock_quantity",
      "value",
      "category_id",
      "product_image"
    )
    .where("category_id", id_categoria);

  return productsIdCategory;
};

module.exports = {
  createProduct,
  isProductRegistered,
  modifyProduct,
  productDeleted,
  loadProduct,
  getProduct,
  getProductIdCategory,
};
