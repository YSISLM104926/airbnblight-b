import { Request, Response } from 'express'
import { PlacesServices } from './places.services';


const createPlacesController = async (req: Request, res: Response) => {
    console.log('Received data:', req.body);
    try {
        const result = await PlacesServices.createPlacesService(req.body);
        res.status(201).send({
            success: true,
            message: 'Place Added Successfully',
            data: result
        });
    } catch (error) {
        console.error("Validation Error: ", error); 
        res.status(500).send({
            success: false,
            message: 'Something went wrong!',
            error: error
        });
    }
};


const getPlacesController = async (req: Request, res: Response) => {
    const start_price = parseFloat(req.query.start_price as string);
    const end_price = parseFloat(req.query.end_price as string);
    console.log(start_price, end_price);
    try {
        const result = await PlacesServices.getPlacesService(start_price, end_price);
        res.status(200).send({
            success: true,
            message: 'Place Fetched Successfully',
            data: result
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong!',
            error: error
        });
    }
}

export const placesController = {
    createPlacesController,
    getPlacesController
}