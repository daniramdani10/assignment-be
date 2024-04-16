const { products } = require('../models');

const addProduct = async (req, res) => {
  const { title, price, image, description, rate, count } = req.body;

  if (!title || !price || !image || !description || !rate || !count) {
    return res.status(400).send({
      message: 'All fields are required',
    });
  }
  try {
    const newProduct = await products.create({
      title: title,
      price: price,
      image: image,
      description: description,
      rate: rate,
      count: count,
    });
    return res
      .status(200)
      .send({ message: 'product created', data: newProduct });
  } catch (error) {
    return res.status(500).json({
      message: "product can't be created",
      error: 'Internal server error',
    });
  }
};

const allProduct = async (req, res) => {
  const allProducts = await products.findAll();
  res.send({ message: 'all products', data: allProducts });
};

const productById = async (req, res) => {
  const id = req.params.id;
  const product = await products.findOne({ where: { id: id } });
  res.send({ message: 'product by id', data: product });
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await products.update(req.body, { where: { id: id } });
  res.send({ message: 'product updated', data: product });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await products.destroy({ where: { id: id } });
  res.send({ message: 'product deleted', data: product });
};

module.exports = {
  addProduct,
  allProduct,
  productById,
  updateProduct,
  deleteProduct,
};
