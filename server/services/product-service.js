const ProductModel = require('../models/product-model');
const ProductDto = require('../dtos/product-dto');
const { v2 } = require('cloudinary');
const streamifier = require('streamifier');
const ApiError = require('../exceptions/api-error');

class ProductService {
  async imgUpload(buffer) {
    v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const streamUpload = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = v2.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(buffer).pipe(stream);
      });
    };
    const result = await streamUpload(buffer);
    return result;
  }
  async getAll(){
    const products = await ProductModel.find();
    const productDtos = products.map((product) => new ProductDto(product));
    return productDtos;
  }
  async getByCategories() {
    const products = await ProductModel.find();
    const productDtos = products.map(product => new ProductDto(product));
    const categories = await ProductModel.distinct('category');
    const subCategories = await ProductModel.distinct('subcategory');
    const readyProducts = categories.reduce((accumulator, category, i) => {
      return [
        ...accumulator,
        {
          category,
          products: this.filterByCategories(
            category,
            subCategories,
            productDtos
          )
        },
      ];
    }, []);
    return readyProducts;
  }
  filterByCategories(category, subCategories, products) {
    const readyProducts = {};
    for (let i = 0; i < subCategories.length; i++) {
      const catProducts = products.filter(
        (product) =>
          product.category === category &&
          product.subcategory === subCategories[i]
      );
      if (catProducts.length) {
        readyProducts[subCategories[i]] = catProducts;
      }
    }
    return readyProducts;
  }
  async create(product) {
    const newProduct = await ProductModel.create({
      ...product,
    });
    const productDto = new ProductDto(newProduct);
    return productDto;
  }
  async edit(product) {
    const newProduct = await ProductModel.findById(product.id);
    if (!newProduct) {
      throw ApiError.BadRequest('Товар не найден');
    }
    newProduct.title = product.title;
    newProduct.sku = product.sku;
    newProduct.price = product.price;
    newProduct.category = product.category;
    newProduct.subcategory = product.subcategory;
    newProduct.img = product.img;
    newProduct.info = product.info;
    const updatedProduct = await newProduct.save();
    const productDto = new ProductDto(updatedProduct);
    return productDto;
  }
  async delete(id) {
    const product = await ProductModel.deleteOne(id);
    if (!product) {
      throw ApiError.BadRequest('Товар не найден');
    } else {
      return product;
    }
  }
}

module.exports = new ProductService();
