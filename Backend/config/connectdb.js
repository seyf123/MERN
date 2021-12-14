const mongoose = require("mongoose");

const connectdb = async() => { 
    try {
        await mongoose.connect("mongodb://localhost:27017/userdb");
        console.log('db connected succesfully')
} catch (error) {
    console.log(error)
}

};

module.exports = connectdb;
