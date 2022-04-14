const app = require('./server');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
  
dotenv.config();

const PORT = process.env.PORT || 8000;
const URI = process.env.REST_POST_DB_URI || "mongodb://username:password@localhost:27017";
// const URI = "mongodb://username:password@localhost:27017";

mongoose.connect(URI)
    .then(() => {
        console.log('Successfully Connnect to MongoDB');
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        }); 
    })
    .catch((err) => {
        console.log(err);
    });