module.exports = {
  multipleMongooseObject(mongooseArray) {
    return mongooseArray.map((x) => x.toObject());
  },
  mongooseObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
