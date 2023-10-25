const knex = require("../config/connection");


const createOrder = async (orderData) => {
  const createdOrder = await knex("pedidos")
  .insert(orderData)
  .returning(["id", "cliente_id", "observacao", "valor_total"]);
  
  return createdOrder[0];
};

const createOrderProduct = async (orderProductData) => {
  const createdOrderProduct = await knex("pedido_produtos")
  .insert(orderProductData)
  .returning([
    "id",
      "pedido_id",
      "produto_id",
      "quantidade_produto",
      "valor_produto",
    ]);
    
  return createdOrderProduct[0];
};

const loadOrders = async () => {
  const foundOrdes = await knex("pedidos");
  return foundOrdes;
};

const loadOrdersProduct = async () => {
  const foundOrdes = await knex("pedido_produtos");
  return foundOrdes;
};

const getOrdersIdCostumer = async (cliente_id) => {
  const ordersIdCostumer = await knex("pedidos")
  .select("id", "cliente_id", "observacao", "valor_total")
  .where("cliente_id", cliente_id);
  
  return ordersIdCostumer;
};

const getOrdersProductIdCostumer = async (pedido_id) => {
  const getOrdersProductIdCostumer = await knex("pedido_produtos")
  .select(
    "id",
    "pedido_id",
    "produto_id",
    "quantidade_produto",
    "valor_produto"
    )
    .where("pedido_id", pedido_id);
    
    return getOrdersProductIdCostumer;
  };
  
  const getOrderByProductId = async (id) => {
    const order = await knex("pedido_produtos").where("produto_id", id).first();
    return order;
  };
  
  const checkProductExists = async (productId) => {
    const productExists = await isProductRegistered(productId);
    return productExists;
  }
  
  const checkProductStock = async (productId, productQuantity) => {
    const productStock = await isProductRegistered(productId);
  
    if (productQuantity > productStock.stockQuantity) {
      return false;
    }
    return true;
  }
  
  const updateProductQuantity = async (productId, productQuantity) => {
    const productStock = await isProductRegistered(productId);
  
    const productData = {
      stockQuantity: productStock.stockQuantity - productQuantity,
    };
  
    const updatedProduct = await modifyProduct(productId, productData);
    return updatedProduct;
  }
  
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
  