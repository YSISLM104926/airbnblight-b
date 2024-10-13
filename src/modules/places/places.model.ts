import mongoose, { Schema, Document } from 'mongoose';
import IPlaces, { IProductsMethods, ProductModel } from './places.interface';

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


const placesSchema = new Schema<IPlaces, ProductModel, IProductsMethods>({
    tag: {
        type: String,
        required: true,
        maxlength: 10
    },
    locations: [locationSchema]  
});

// placesSchema.me

const Places = mongoose.model('Places', placesSchema) as mongoose.Model<IPlaces>;
export default Places;
