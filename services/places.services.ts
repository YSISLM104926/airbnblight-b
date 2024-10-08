import IPlaces from "../interface/places.interface";
import Places from "../models/places.models";

const createPlacesService = async (data: IPlaces) => {
    try {
        const newPlaces = await Places.create(data);
        return newPlaces;
    } catch (error) {
        console.log(error);
    }
}

const getPlacesService = async (start_price: number, end_price: number) => {
    // Example: Fetch all places from the database
    const allPlaces = await Places.find(); // Or wherever you get your data from
    if (isNaN(start_price) && isNaN(end_price)) {
        return allPlaces;
    } else {
        const filteredPlaces = allPlaces
            .map((place: any) => ({
                tag: place.tag,
                locations: place.locations.filter((loc: any) => loc.price >= start_price && loc.price <= end_price)
            }))
            .filter((place: any) => place.locations.length > 0);
        return filteredPlaces;
    }
    // return allPlaces;
}


export const PlacesServices = {
    createPlacesService,
    getPlacesService
}