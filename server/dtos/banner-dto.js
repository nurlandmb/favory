class UserDto {
  src;
  id;
  constructor(model) {
    this.src = model.src;
    this.id = model._id;
  }
}
module.exports = UserDto;
