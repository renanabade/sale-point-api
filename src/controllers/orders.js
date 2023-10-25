const { findCustomerById } = require("../repo/customer");

const {
  createOrder,
  createOrderProduct,
  loadOrders,
  loadOrdersProduct,
  getOrdersIdCustomer,
  getOrdersProductByCustomerId,
  checkProductExists,
  checkProductStock,
  updateProductQuantity,
} = require("../repo/orders");
const sendOrderConfirmationMail = require("../utils/sendMail");

function groupProducts(orderProducts) {
  const groupedProducts = [];

  for (let i = 0; i < orderProducts.length; i++) {
    const existingProduct = groupedProducts.find(
      (item) => item.productId === orderProducts[i].productId
    );
    if (existingProduct) {
      existingProduct.quantity += orderProducts[i].quantity;
    } else {
      groupedProducts.push({ ...orderProducts[i] });
    }
  }
  return groupedProducts;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value / 100);
}

async function registerOrder(req, res) {
  const { customerId, observation, orderProducts } = req.body;

  try {
    const customerExists = await findCustomerById(customerId);
    if (!customerExists) {
      return res.status(400).json({ message: "Customer not found" });
    }

    const groupedProducts = groupProducts(orderProducts);
    const productsInfo = [];

    for (let i = 0; i < groupedProducts.length; i++) {
      const { productId, quantity } = groupedProducts[i];

      const productExists = await checkProductExists(productId);
      if (!productExists) {
        return res
          .status(400)
          .json({ message: `Product with id ${productId} not found` });
      }

      const infoProduct = {
        productId: productExists.id,
        description: productExists.description,
        quantity,
        value: formatCurrency(productExists.value),
      };

      productsInfo.push(infoProduct);

      const productInStock = await checkProductStock(
        productId,
        quantity
      );
      if (!productInStock) {
        return res.status(400).json({
          message: `Product with id ${productId} has insufficient stock`,
        });
      }
    }

    const orderData = {
      customerId,
      observation,
      totalValue: 0,
    };

    for (let i = 0; i < groupedProducts.length; i++) {
      const { productId, quantity } = groupedProducts[i];
      const updatedProduct = await updateProductQuantity(
        productId,
        quantity
      );
      orderData.totalValue += updatedProduct.value * quantity;
    }

    const registeredOrder = await createOrder(orderData);

    for (let i = 0; i < groupedProducts.length; i++) {
      const { productId, quantity } = groupedProducts[i];
      const productData = {
        orderId: registeredOrder.id,
        productId,
        quantity,
        productValue: 0,
      };
      const product = await checkProductExists(productId);
      productData.productValue = product.value;
      await createOrderProduct(productData);
    }

    const orderInfo = {
      user: customerExists.name,
      orderId: registeredOrder.id,
      orderedProducts: productsInfo,
      totalValue: formatCurrency(registeredOrder.totalValue),
    };

    await sendOrderConfirmationMail(customerExists, orderInfo, productsInfo);

    return res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

const printOrders = async (req, res) => {
  const { customerId } = req.query;

  try {
    if (customerId) {
      const customerExists = await findCustomerById(customerId);
      if (!customerExists) {
        return res.status(400).json({ message: "Customer not found" });
      }

      const orders = await getOrdersIdCustomer(customerId);

      let result = [];

      for (let i = 0; i < orders.length; i++) {
        const orderProducts = await getOrdersProductByCustomerId(orders[i].id);

        result.push({ order: orders[i], orderProducts: orderProducts });
      }

      return res.status(200).json(result);
    } else {
      const orders = await loadOrders();
      const allOrderProducts = await loadOrdersProduct();

      let result = [];

      for (let i = 0; i < orders.length; i++) {
        let orderProducts = allOrderProducts.filter(
          (op) => op.orderId === orders[i].id
        );
        result.push({ order: orders[i], orderProducts });
      }

      return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerOrder,
  printOrders,
};
