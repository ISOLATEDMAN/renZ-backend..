const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const cors = require('cors');
const bodyparser = require('body-parser');
const usermodel = require('./models/userModel');
const userRouter = require('./routes/userRoutes');
const app = express();
dotenv.config(); 

app.use(express.json()); 
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/',userRouter);


const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

