const bannerModel = require('../models/banner-model');
const BannerDto = require('../dtos/banner-dto');

class BannerService {
  async getAll(){
    const banners = (await bannerModel.find()).map(banner => new BannerDto(banner));
    return banners;
  }
  async create(src) {
    const banner = await bannerModel.create({
      src,
    });
    const bannerDto = new BannerDto(banner);
    return bannerDto;
  }
  async delete(id) {
    const banner = await bannerModel.deleteOne({ _id: id });
    if (!banner) {
      throw ApiError.BadRequest('Баннер не найден');
    } else {
      return banner;
    }
  }
}
module.exports = new BannerService();
