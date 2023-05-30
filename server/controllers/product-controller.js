const productService = require('../services/product-service');

class ProductController {
  async imgUpload(req, res, next) {
    try {
      const imgLink = await productService.imgUpload(req.file.buffer);
      res.send(imgLink.secure_url);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      const products = await productService.getAll();
      return res.send(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getByCategories(req, res, next) {
    try {
      const products = await productService.getByCategories();
      return res.send(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const product = await productService.create(req.body.product);
      res.send(product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      const product = await productService.edit(req.body.product);
      res.send(product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      console.log(req.body);
      const result = await productService.delete(req.body.id);
      res.send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = new ProductController();
