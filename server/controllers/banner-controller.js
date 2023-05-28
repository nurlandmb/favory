const bannerService = require('../services/banner-service');

class BannerController {
  async getAll(req, res){
    const banners = await bannerService.getAll();
    res.send(banners);
  }
  async create(req, res) {
    const banner = await bannerService.create(req.body.src);
    res.send(banner);
  }
  async delete(req, res) {
    const banner = await bannerService.delete(req.body.id);
    res.send(banner);
  }
}
module.exports = new BannerController();
