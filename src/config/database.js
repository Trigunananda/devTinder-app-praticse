const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://swaint214_db_user:DevTinder32132@devtinder-praticse.kq5dn7s.mongodb.net/devtinder-Practice");
};

module.exports = connectDB;