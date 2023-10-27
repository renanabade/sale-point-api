const knex = require("../config/connection");
const { isProductRegistered, modifyProduct } = require("./products");

const createOrder = async (orderData) => {
  const createdOrder = await knex("orders")
    .insert(orderData)
    .returning(["id", "customer_id", "note", "total_value"]);

  return createdOrder[0];
};

const createOrderProduct = async (orderProductData) => {
  const createdOrderProduct = await knex("order_products")
    .insert(orderProductData)
    .returning([
      "id",
      "order_id",
      "product_id",
      "product_quantity",
      "product_value",
    ]);

  return createdOrderProduct[0];
};

const loadOrders = async () => {
  const foundOrdes = await knex("orders");
  return foundOrdes;
};

const loadOrdersProduct = async () => {
  const foundOrdes = await knex("order_products");
  return foundOrdes;
};

const getOrdersIdCostumer = async (customer_id) => {
  const ordersIdCostumer = await knex("orders")
    .select("id", "customer_id", "note", "total_value")
    .where("customer_id", customer_id);

  return ordersIdCostumer;
};

const getOrdersProductIdCostumer = async (order_id) => {
  const getOrdersProductIdCostumer = await knex("order_products")
    .select("id", "order_id", "product_id", "product_quantity", "product_value")
    .where("order_id", order_id);

  return getOrdersProductIdCostumer;
};

const getOrderByProductId = async (id) => {
  const order = await knex("order_products").where("product_id", id).first();
  return order;
};

const checkProductExists = async (product_id) => {
  const productExists = await isProductRegistered(product_id);
  return productExists;
};

const checkProductStock = async (product_id, product_quantity) => {
  const productStock = await isProductRegistered(product_id);

  if (product_quantity > productStock.stock_quantity) {
    return false;
  }
  return true;
};

const updateProductQuantity = async (product_id, product_quantity) => {

  const productStock = await isProductRegistered(product_id);

  const productData = {
    stock_quantity: productStock.stock_quantity - product_quantity,
  };

  const updatedProduct = await modifyProduct(product_id, productData);
  return updatedProduct;
};

module.exports = {
  createOrder,
  createOrderProduct,
  loadOrders,
  loadOrdersProduct,
  getOrdersIdCostumer,
  getOrdersProductIdCostumer,
  getOrderByProductId,
  checkProductExists,
  checkProductStock,
  updateProductQuantity,
};
