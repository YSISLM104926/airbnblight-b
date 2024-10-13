"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placesController = void 0;
const places_services_1 = require("./places.services");
const createPlacesController = async (req, res) => {
    console.log('Received data:', req.body);
    try {
        const result = await places_services_1.PlacesServices.createPlacesService(req.body);
        res.status(201).send({
            success: true,
            message: 'Place Added Successfully',
            data: result
        });
    }
    catch (error) {
        console.error("Validation Error: ", error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong!',
            error: error
        });
    }
};
const getPlacesController = async (req, res) => {
    const start_price = parseFloat(req.query.start_price);
    const end_price = parseFloat(req.query.end_price);
    console.log(start_price, end_price);
    try {
        const result = await places_services_1.PlacesServices.getPlacesService(start_price, end_price);
        res.status(200).send({
            success: true,
            message: 'Place Fetched Successfully',
            data: result
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong!',
            error: error
        });
    }
};
exports.placesController = {
    createPlacesController,
    getPlacesController
};
