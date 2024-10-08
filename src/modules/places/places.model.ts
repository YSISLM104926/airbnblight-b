import mongoose, { Schema, Document } from 'mongoose';
import IPlaces from './places.interface';

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
            type: String, 
            required: true
        }
    ]
});


const placesSchema = new Schema({
    tag: {
        type: String,
        required: true,
        maxlength: 10
    },
    locations: [locationSchema]  
});

const Places = mongoose.model('Places', placesSchema) as mongoose.Model<IPlaces>;
export default Places;
