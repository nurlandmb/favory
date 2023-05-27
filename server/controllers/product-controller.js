const productService = require('../services/product-service');

class ProductController {
  async imgUpload(req, res) {
    const imgLink = await productService.imgUpload(req.file.buffer);
    res.send(imgLink.secure_url);
  }
  async getAll(req, res) {
    const products = await productService.getAll();
    return res.send(products);
  }
  async getByCategories(req, res){
    const products = await productService.getByCategories();
    return res.send(products);
  }
  async create(req, res) {
    const product = await productService.create(req.body.product);
    res.send(product);
  }
  async edit(req, res) {
    const product = await productService.edit(req.body.product);
    res.send(product);
  }
  async delete(req, res) {
    console.log(req.body.id);
    const result = await productService.delete(req.body.id);
    res.send(result);
  }
}

module.exports = new ProductController();
