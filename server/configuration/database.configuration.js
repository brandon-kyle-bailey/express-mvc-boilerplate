// const mongoose = require('mongoose');
require('dotenv').config();


class Datebase {
    // this class can be instansiated with a variety of drivers. Mongoose has been provided
    // by default.

    
    constructor(driver='mongoose') {
        if(!this.instance) {
            this.createInstance(driver);
        }
    }

    createInstance(driver) {
	this.instance = require(driver);
    }

    getInstance() {
        if(!this.instance) {
	    return null;
	}
	return this.instance;
    }

    async connect(url, options) {
	console.log("Connecting to database");
	return await this.instance.connect(url, options);
    }
}

module.exports = Datebase;

