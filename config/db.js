const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database server connected...');
}).catch((error) => {
    console.log('Error, server can\'t connect:', error);
});

module.exports = mongoose;
