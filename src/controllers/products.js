const { isCategoryRegistered } = require("../repo/categories");
const { getOrderByProductId } = require("../repo/orders");
const {
  createProduct,
  isProductRegistered,
  modifyProduct,
  productDeleted,
  loadProduct,
  getProduct,
  getProductIdCategory,
} = require("../repo/products");
const { deleteImage, uploadImage } = require("../services/awsImages");

const registerProduct = async (req, res) => {
  const { description, stock_quantity, value, category_id } = req.body;
  const { file } = req;

  try {
    const categoryExists = await isCategoryRegistered(category_id);
    if (!categoryExists) {
      return res.status(400).json({ message: "Category not found" });
    }

    const imageLink = await uploadImage(file);

    const productData = {
      description,
      stock_quantity: parseInt(stock_quantity),
      value: parseInt(value),
      category_id: parseInt(category_id),
      product_image: imageLink,
    };

    const registeredProduct = await createProduct(productData);

    if (!registeredProduct) {
      return res.status(400).json({ message: "Unable to create the product" });
    }

    return res.status(201).json(registeredProduct);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { description, stock_quantity, value, category_id } = req.body;
  const { file } = req;

  try {
    const idProductExists = await isProductRegistered(id);
    if (!idProductExists) {
      return res.status(400).json({ message: "Product not found" });
    }

    deleteImage(idProductExists.product_image);

    const categoryExists = await isCategoryRegistered(category_id);
    if (!categoryExists) {
      return res.status(400).json({ message: "Category not found" });
    }

    const imageLink = await uploadImage(file);

    const productData = {
      description,
      stock_quantity: parseInt(stock_quantity),
      value: parseInt(value),
      category_id: parseInt(category_id),
      product_image: imageLink,
    };

    const updatedProduct = await modifyProduct(id, productData);

    if (!updatedProduct) {
      return res.status(400).json({ message: "Unable to update the product" });
    }

    return res.status(201).json(productData);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const printProducts = async (req, res) => {
  const { category_id } = req.query;

  try {
    if (category_id) {
      const categoryExists = await isCategoryRegistered(category_id);
      if (!categoryExists) {
        return res.status(400).json({ message: "Category not found" });
      }

      const foundProducts = await getProductIdCategory(category_id);
      return res.status(200).json(foundProducts);
    } else {
      const foundProducts = await loadProduct();
      return res.status(200).json(foundProducts);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const productDetails = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ message: "Product not found" });
  }

  try {
    const product = await getProduct(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const productExist = await isProductRegistered(id);
    if (!productExist) {
      return res.status(400).json({ message: "Product not found" });
    }
    const productSold = await getOrderByProductId(id);

    if (productSold) {
      return res.status(400).json({
        message: "Cannot delete a product linked to an order",
      });
    }

    const excludedProduct = await productDeleted(id);
    const deletedImage = await deleteImage(productExist.product_image);

    if (!excludedProduct) {
      return res.status(400).json({ message: "Unable to delete the product" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerProduct,
  updateProduct,
  deleteProduct,
  printProducts,
  productDetails,
};
