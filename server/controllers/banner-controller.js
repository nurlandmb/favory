const bannerService = require('../services/banner-service');

class BannerController {
  async getAll(req, res, next) {
    try {
      const banners = await bannerService.getAll();
      res.send(banners);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const banner = await bannerService.create(req.body.src);
      res.send(banner);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const banner = await bannerService.delete(req.body.id);
      res.send(banner);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
module.exports = new BannerController();
