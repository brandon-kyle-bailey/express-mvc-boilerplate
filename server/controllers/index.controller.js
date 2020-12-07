const ApiModel = require('../models/index.model');


// create
exports.postRequest = async (req, res) => {
    try {
        const {slug} = req.body;
        const foundSlug = await ApiModel.findOne({slug});
        if(foundSlug) {
            res.status(409).json({message: `Object ${slug} already exists...`});
        } else {
            const newApiModel = new ApiModel({slug});
            const response = await newApiModel.save();
            res.status(201).json(response);
        }
    } catch(error) {
        console.log(error);
    }
}

// read
exports.getRequest = async (req, res) => {
    try {
        const foundSlugs = await ApiModel.find();
        if(foundSlugs) {
            res.status(302).json(foundSlugs);
        } else {
            res.status(404).json({message: 'No data not found...'});
        }
    } catch(error) {
        console.log(error);
    }
}

// read one
exports.getOneRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const foundSlug = await ApiModel.findOne({_id: id});
        if(foundSlug) {
            res.status(302).json(foundSlug);
        } else {
        res.status(404).json({message: `Object ${id} not found...`});
        }
    } catch(error) {
        console.log(error);
    }

}

// update
exports.putRequest = async (req, res) => {
    try {
        const {id, slug} = req.body;
        const foundSlug = await ApiModel.findOne({_id: id});
        if(foundSlug) {
            const response = await foundSlug.updateOne({slug});
            res.status(301).json(response);
        } else {
        res.status(404).json({message: `Object ${id} not found...`});
        }
    } catch(error) {
        console.log(error);
    }
}

// delete
exports.deleteRequest = async (req, res) => {

    try {
        const {id} = req.params;
        const foundSlug = await ApiModel.findOne({_id: id});
        if(foundSlug) {
            const response = await foundSlug.deleteOne({_id: id});
            res.status(202).json(response);
        } else {
            res.status(404).json({message: `Object ${id} not found...`});
        }
    } catch(error) {
        console.log(error);
    }
}
