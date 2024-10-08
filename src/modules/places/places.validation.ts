import { z } from 'zod';

const locationSchema = z.object({
    title: z.string(),
    distance: z.number(),
    date: z.string(),
    price: z.number(),
    images: z.array(z.string())
})

const placesValidationSchema = z.object({
    tag: z.string().trim().max(10, "tag can't be more than 10 characters"),
    locations: z.array(locationSchema)
});

export default placesValidationSchema;