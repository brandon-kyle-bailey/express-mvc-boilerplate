const express = require('express');
const Datebase = require('./configuration/database.configuration');
require('dotenv').config();

const apiRouter = require('./routes/index.routes');
const { logGlobalRequest } = require('./middlewares/logging.middleware');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/db';
const PORT = process.env.PORT || 8080;

const db = new Datebase('mongoose').connect(
	DB_URL, {
	    useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
	}
);

const app = express();

app.use(express.json());

app.use(logGlobalRequest);

// if you are utilizing server side rendering, a static directory will need to be provided
// // ejs comes pre installed.
// app.use(express.static('public'));

app.use('/', apiRouter);


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});


