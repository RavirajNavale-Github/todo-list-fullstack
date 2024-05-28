const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const cors = require('cors');

const { mongoConnect } = require('./config/MongoConnect');
const { router } = require('./routes/todoRoutes');

const app = express();
dotEnv.config();

app.use(cors());

//Database connection
mongoConnect(process.env.URL)
.then(() => {
    console.log('Database connected Successfully.')
})
.catch(() => {
    console.log("Unable to connect to MongoDB");
});

//Middleware
app.use(bodyParser.json());

//Route
app.use('/todo', router);

//Assigning port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})