"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacesServices = void 0;
const places_model_1 = __importDefault(require("./places.model"));
const createPlacesService = async (data) => {
    try {
        const newPlaces = await places_model_1.default.create(data);
        return newPlaces;
    }
    catch (error) {
        console.log(error);
    }
};
const getPlacesService = async (start_price, end_price) => {
    // Example: Fetch all places from the database
    const allPlaces = await places_model_1.default.find(); // Or wherever you get your data from
    if (isNaN(start_price) && isNaN(end_price)) {
        return allPlaces;
    }
    else {
        const filteredPlaces = allPlaces
            .map((place) => ({
            tag: place.tag,
            locations: place.locations.filter((loc) => loc.price >= start_price && loc.price <= end_price)
        }))
            .filter((place) => place.locations.length > 0);
        return filteredPlaces;
    }
    // return allPlaces;
};
exports.PlacesServices = {
    createPlacesService,
    getPlacesService
};
