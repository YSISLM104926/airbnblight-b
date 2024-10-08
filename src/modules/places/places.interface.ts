interface ILocation {
    title: string;
    distance: number;  
    date: string;
    price: number;
    images: string[];
}

interface IPlaces {
    tag: string;
    locations: ILocation[];
}

export default IPlaces;
