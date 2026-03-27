// Role: sends error response

const errorHandler = (err, req, res, next) => {
//   console.log("ERROR OBJECT:", err);
  console.log("MESSAGE:", err.message);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;