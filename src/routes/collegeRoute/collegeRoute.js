const express = require('express');
const mongoose = require('mongoose');
const collegeDataModel = require('../../models/collegeDataModel/collegeDataModel');
const collegeRoute = express.Router();

//get all colleges:
collegeRoute.get('/all', async (req, res) => {
    try {
        const result = await collegeDataModel.find();
        res.send(result)
    } catch (error) {

    }
});

// get top colleges:
collegeRoute.get('/top', async (req, res) => {
    try {
        // const result = await topCollegeModel.find();
        const result = await collegeDataModel.find();
        if (result?.length > 3) {
            const responsedData = result?.slice(0, 3)
            res.send(responsedData)
        }
        else {
            res.send(result)
        }
    } catch (error) {

    }
});


//get a college :
collegeRoute.get('/:id', async (req, res) => {
    try {
        const result = await collegeDataModel.findOne({ _id: req?.params?.id });
        res.send(result)
    } catch (error) {

    }
});

module.exports = collegeRoute;