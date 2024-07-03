const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = async()=>{
    try {
        const connection_uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3g7cuab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        await mongoose.connect(connection_uri,{dbName:'collegeCorner'});
        console.log('server connected with database successfully')

    } catch (error) {
        console.log(error.message) 
    }
};
module.exports = dbConnection;