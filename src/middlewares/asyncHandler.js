// BEST PRACTICE (Wrapper Function ✅)

// 👉 Instead of writing try-catch everywhere

// ✅ Create helper:
// Role: catches async errors

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
module.exports = asyncHandler;