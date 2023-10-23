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
const deleteImage = require("../utils/deleteImage");
const uploadImage = require("../utils/uploadImage");

const registerProduct = async (req, res) => {
  const { description, stockQuantity, value, categoryId } = req.body;
  const { file } = req;

  try {
    const categoryExists = await isCategoryRegistered(categoryId);
    if (!categoryExists) {
      return res.status(400).json({ message: "Category not found" });
    }

    const imageLink = await uploadImage(file);

    const productData = {
      description,
      stockQuantity: parseInt(stockQuantity),
      value: parseInt(value),
      categoryId: parseInt(categoryId),
      productImage: imageLink,
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
  const { description, stockQuantity, value, categoryId } = req.body;
  const { file } = req;

  try {
    const idProductExists = await isProductRegistered(id);
    if (!idProductExists) {
      return res.status(400).json({ message: "Product not found" });
    }

    deleteImage(idProductExists.productImage);

    const categoryExists = await isCategoryRegistered(categoryId);
    if (!categoryExists) {
      return res.status(400).json({ message: "Category not found" });
    }

    const imageLink = await uploadImage(file);

    const productData = {
      description,
      stockQuantity: parseInt(stockQuantity),
      value: parseInt(value),
      categoryId: parseInt(categoryId),
      productImage: imageLink,
    };

    const updatedProduct = await modifyProduct(id, productData);

    if (!updatedProduct) {
      return res.status(400).json({ message: "Unable to update the product" });
    }

    return res.status(204).send();
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
    const deleteImg = await deleteImage(productExist.productImage);

    if (!excludedProduct) {
      return res.status(400).json({ message: "Unable to delete the product" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const printProducts = async (req, res) => {
  const { categoryId } = req.query;

  try {
    if (categoryId) {
      const categoryExists = await isCategoryRegistered(categoryId);
      if (!categoryExists) {
        return res.status(400).json({ message: "Category not found" });
      }

      const foundProducts = await getProductIdCategory(categoryId);
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

module.exports = {
  registerProduct,
  updateProduct,
  deleteProduct,
  printProducts,
  productDetails,
};
