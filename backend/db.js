const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primaryPreferred"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;

//mongodb://localhost:27017/?readPreference=primaryPreferred
//mongodb://localhost:27017/?readPreference=primaryPreferred
//mongodb://localhost:27017/
//mongodb://localhost:27017/