const { Schema, model } = require('mongoose');

const BannerSchema = new Schema({
  src: { type: String, required: true },
});

module.exports = model('Banner', BannerSchema);
