const handleMongooseError = (error, data, next) => {
  const { name, code } = error;
  const stutus = name === "MongoServerError" && code === 11000 ? 409 : 400;
  error.status = stutus;
  next();
};

module.exports = handleMongooseError;
