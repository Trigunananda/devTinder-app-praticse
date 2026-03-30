// ROle: custom error object

// Error class = Parent 👨
// AppError = Child 👦

// super() = calling parent constructor

class AppError extends Error {
  // constructor = special function that runs when object is created
  constructor(message, statusCode) {
    // super() = calls parent class constructor,Here Parent is: Error
    super(message); // 🔥 VERY IMPORTANT

    // 👉 this = refers to the current object
    this.statusCode = statusCode;
  }
}
  
module.exports = AppError;
