import mongoose, { Schema, Document } from 'mongoose';
import IPlaces from '../interface/places.interface';

// Define the Image schema
const imageSchema = new Schema({
    url: {
        type: String,
        required: true
    }
});

// Define the Location schema
const locationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String, // Assuming the images are stored as URLs (strings)
            required: true
        }
    ]
});

// Define the main Places schema
const placesSchema = new Schema({
    tag: {
        type: String,
        required: true,
        maxlength: 10  // Assuming 'tag' has a maximum length of 10 characters as in your validation schema
    },
    locations: [locationSchema]  // An array of locations
});

// Create the Places model
const Places = mongoose.model('Places', placesSchema) as mongoose.Model<IPlaces>;

export default Places;
