const express = require('express');
const apiRoutes = express.Router();

const controller = require('../controllers/index.controller');
const loggingMiddleware = require('../middlewares/logging.middleware');

// CRUD routes

// create
apiRoutes.post('/', loggingMiddleware.logRequest, controller.postRequest);

// read
apiRoutes.get('/', loggingMiddleware.logRequest, controller.getRequest);
apiRoutes.get('/:id', loggingMiddleware.logRequest, controller.getOneRequest);

// update
apiRoutes.put('/', loggingMiddleware.logRequest, controller.putRequest);

// delete
apiRoutes.delete('/:id', loggingMiddleware.logRequest, controller.deleteRequest);

module.exports = apiRoutes;
