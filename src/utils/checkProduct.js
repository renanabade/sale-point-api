// src\utils\checkProduct.js
const { isProductRegistered, modifyProduct } = require("../repo/products");

async function checkProductExists(productId) {
  const productExists = await isProductRegistered(productId);
  return productExists;
}

async function checkProductStock(productId, productQuantity) {
  const productStock = await isProductRegistered(productId);

  if (productQuantity > productStock.stockQuantity) {
    return false;
  }
  return true;
}

async function updateProductQuantity(productId, productQuantity) {
  const productStock = await isProductRegistered(productId);

  const productData = {
    stockQuantity: productStock.stockQuantity - productQuantity,
  };

  const updatedProduct = await modifyProduct(productId, productData);
  return updatedProduct;
}

module.exports = {
  checkProductExists,
  checkProductStock,
  updateProductQuantity,
};
