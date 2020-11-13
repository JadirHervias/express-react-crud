require('./config');
require('./config/db');
const express = require('express');
const registerRoutes = require('./routes');
const app = express();
const cors = require('cors');
const { urlencoded, json } = require('body-parser');

// Upload folder
app.use('/uploads', express.static('uploads'));
// data type middleware
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

// app.use(require('./User'));
// app.use(require('./Login'));
// app.use(require('./Product'));

// Routes
const router = express.Router();
app.use('/api/v1', router);
registerRoutes(router);

module.exports = app;
