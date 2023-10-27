const express = require("express");
const { loadCategories } = require("./controllers/categories");
const {
  validateRequestBody,
  validateRequestParams,
  validateQueryParams,
} = require("./middlewares/validateRequest");
const {
  registerUser,
  loginUser,
  printLoggedUser,
  updateUser,
} = require("./controllers/users");
const verifyLoggedInUser = require("./middlewares/authentication");
const {
  registerProduct,
  updateProduct,
  deleteProduct,
  printProducts,
  productDetails,
} = require("./controllers/products");
const { userSchema, loginSchema } = require("./schema/user");
const { productSchema } = require("./schema/products");
const { idNumericSchema } = require("./schema/params");
const {
  insertCustomer,
  updateCustomer,
  printCustomers,
  printSelectedCustomer,
} = require("./controllers/customer");
const { customerSchema } = require("./schema/customer");
const { registerOrder, printOrders } = require("./controllers/orders");
const { orderSchema } = require("./schema/orders");
const multer = require("./config/multer");
const { customerIdSchema, categoryIdSchema } = require("./schema/querys");
const router = express();

router.get("/category", loadCategories);

router.post("/user", validateRequestBody(userSchema), registerUser);
router.post("/login", validateRequestBody(loginSchema), loginUser);

router.use(verifyLoggedInUser);

router.get("/user", printLoggedUser);
router.put("/user", validateRequestBody(userSchema), updateUser);

router.post(
  "/product",
  multer.single("image"),
  validateRequestBody(productSchema),
  registerProduct
);

router.put(
  "/product/:id",
  multer.single("image"),
  validateRequestParams(idNumericSchema),
  validateRequestBody(productSchema),
  updateProduct
);

router.get("/product", validateQueryParams(categoryIdSchema), printProducts);

router.get(
  "/product/:id",
  validateRequestParams(idNumericSchema),
  productDetails
);

router.delete(
  "/product/:id",
  validateRequestParams(idNumericSchema),
  deleteProduct
);

router.post("/customer", validateRequestBody(customerSchema), insertCustomer);
router.put(
  "/customer/:id",
  validateRequestParams(idNumericSchema),
  validateRequestBody(customerSchema),
  updateCustomer
);

router.get("/customer", printCustomers);
router.get(
  "/customer/:id",
  validateRequestParams(idNumericSchema),
  printSelectedCustomer
);

router.post("/order", validateRequestBody(orderSchema), registerOrder);

router.get("/order", validateQueryParams(customerIdSchema), printOrders);

module.exports = router;
