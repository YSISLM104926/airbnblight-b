"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const locationSchema = zod_1.z.object({
    title: zod_1.z.string(),
    distance: zod_1.z.number(),
    date: zod_1.z.string(),
    price: zod_1.z.number(),
    images: zod_1.z.array(zod_1.z.string())
});
const placesValidationSchema = zod_1.z.object({
    tag: zod_1.z.string().trim().max(10, "tag can't be more than 10 characters"),
    locations: zod_1.z.array(locationSchema)
});
exports.default = placesValidationSchema;
