const knex = require("../config/connection");

const createProduct = async (productData) => {
  const registeredProduct = await knex("produtos")
    .insert(productData)
    .returning({
      id: "id",
      descricao: "descricao",
      quantidade_estoque: "quantidade_estoque",
      valor: "valor",
      categoria_id: "categoria_id",
      produto_imagem: "produto_imagem",
    });

  return registeredProduct[0];
};

const isProductRegistered = async (id) => {
  const product = await knex("produtos").where({ id }).first();

  return product;
};

const modifyProduct = async (id, productData) => {
  const updatedProduct = await knex("produtos")
    .where({ id })
    .update(productData)
    .returning({
      id: "id",
      descricao: "descricao",
      quantidade_estoque: "quantidade_estoque",
      valor: "valor",
      categoria_id: "categoria_id",
    });

  return updatedProduct[0];
};

const productDeleted = async (id) => {
  const deletedProduct = await knex("produtos").where({ id }).del();
  return deletedProduct;
};

const loadProduct = () => {
  const foundProdutos = knex("produtos");
  return foundProdutos;
};

const getProduct = async (id) => {
  const product = await knex("produtos")
    .select("id", "descricao", "quantidade_estoque", "valor", "categoria_id")
    .where("id", id)
    .first();

  return product;
};

const getProductIdCategory = async (id_categoria) => {
  const productsIdCategory = await knex("produtos")
    .select("id", "descricao", "quantidade_estoque", "valor", "categoria_id")
    .where("categoria_id", id_categoria);

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
