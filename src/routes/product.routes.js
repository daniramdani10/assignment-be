const express = require('express');
const {
  addProduct,
  allProduct,
  productById,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const router = express.Router();

router.post('/', addProduct);
router.get('/all', allProduct);
router.get('/:id', productById);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
