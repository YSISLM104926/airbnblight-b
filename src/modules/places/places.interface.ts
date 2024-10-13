import { Model } from "mongoose";

interface ILocation {
    title: string;
    distance: number;  
    date: string;
    price: number;
    images: string[];
}

export interface IPlaces {
    tag: string;
    locations: ILocation[];
}

export interface IProductsMethods {
     isProductExist(): string;
}

export type ProductModel = Model<IPlaces, {}, IProductsMethods>;

export default IPlaces;
