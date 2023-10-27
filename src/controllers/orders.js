const { findCustomerById } = require("../repo/customer");

const {
  createOrder,
  createOrderProduct,
  loadOrders,
  loadOrdersProduct,
  getOrdersIdCustomer,
  getOrdersProductBycustomer_id,
  checkProductExists,
  checkProductStock,
  updateProductQuantity,
} = require("../repo/orders");
const sendOrderConfirmationMail = require("../services/sendMail");

function groupProducts(order_products) {
  const groupedProducts = [];

  for (let i = 0; i < order_products.length; i++) {
    const existingProduct = groupedProducts.find(
      (item) => item.product_id === order_products[i].product_id
    );
    if (existingProduct) {
      existingProduct.product_quantity += order_products[i].product_quantity;
    } else {
      groupedProducts.push({ ...order_products[i] });
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
  const { customer_id, note, order_products } = req.body;

  try {
    const customerExists = await findCustomerById(customer_id);
    if (!customerExists) {
      return res.status(400).json({ message: "Customer not found" });
    }

    const groupedProducts = groupProducts(order_products);
    const productsInfo = [];

    for (let i = 0; i < groupedProducts.length; i++) {
      const { product_id, product_quantity } = groupedProducts[i];

      const productExists = await checkProductExists(product_id);
      if (!productExists) {
        return res
          .status(400)
          .json({ message: `Product with id ${product_id} not found` });
      }

      const infoProduct = {
        product_id: productExists.id,
        note: productExists.note,
        product_quantity,
        value: formatCurrency(productExists.value),
      };

      productsInfo.push(infoProduct);

      const productInStock = await checkProductStock(product_id, product_quantity);
      if (!productInStock) {
        return res.status(400).json({
          message: `Product with id ${product_id} has insufficient stock`,
        });
      }
    }

    const orderData = {
      customer_id,
      note,
      total_value: 0,
    };

    for (let i = 0; i < groupedProducts.length; i++) {
      const { product_id, product_quantity } = groupedProducts[i];
      const updatedProduct = await updateProductQuantity(product_id, product_quantity);
      orderData.total_value += updatedProduct.value * product_quantity;
    }

    const registeredOrder = await createOrder(orderData);

    for (let i = 0; i < groupedProducts.length; i++) {
      const { product_id, product_quantity } = groupedProducts[i];
      const productData = {
        order_id: registeredOrder.id,
        product_id,
        product_quantity,
        product_value: 0,
      };
      const product = await checkProductExists(product_id);
      productData.product_value = product.value;
      await createOrderProduct(productData);
    }

    const orderInfo = {
      user: customerExists.name,
      order_id: registeredOrder.id,
      ordered_products: productsInfo,
      total_value: formatCurrency(registeredOrder.total_value),
    };

    await sendOrderConfirmationMail(customerExists, orderInfo, productsInfo);

    return res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}

const printOrders = async (req, res) => {
  const { customer_id } = req.query;

  try {
    if (customer_id) {
      const customerExists = await findCustomerById(customer_id);
      if (!customerExists) {
        return res.status(400).json({ message: "Customer not found" });
      }

      const orders = await getOrdersIdCustomer(customer_id);

      let result = [];

      for (let i = 0; i < orders.length; i++) {
        const order_products = await getOrdersProductBycustomer_id(orders[i].id);

        result.push({ order: orders[i], order_products: order_products });
      }

      return res.status(200).json(result);
    } else {
      const orders = await loadOrders();
      const allorder_products = await loadOrdersProduct();

      let result = [];

      for (let i = 0; i < orders.length; i++) {
        let order_products = allorder_products.filter(
          (op) => op.order_id === orders[i].id
        );
        result.push({ order: orders[i], order_products });
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
