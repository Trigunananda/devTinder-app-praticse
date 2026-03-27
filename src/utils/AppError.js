// ROle: custom error object

class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // 🔥 VERY IMPORTANT
    this.statusCode = statusCode;
  }
}

module.exports = AppError;