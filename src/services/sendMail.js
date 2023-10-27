const compilerMail = require("../services/compiler");
const transporterMailer = require("../config/nodemailer");

async function sendOrderConfirmationMail(client, orderInfo, productsInfo) {
  const htmlOrder = await compilerMail("src/templates/orderCreated.html", {
    user: client.name,
    text: "Your order has been successfully placed!",
    ordered_products: orderInfo.ordered_products,
    total_value: orderInfo.total_value,
    order_id: orderInfo.order_id,
  });

  await transporterMailer.sendMail({
    from: process.env.MAIL_USER,
    to: `${client.name} <${client.email}>`,
    subject: "Order placed successfully!",
    html: htmlOrder,
  });
}

module.exports = sendOrderConfirmationMail;
