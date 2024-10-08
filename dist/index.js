"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
async function bootstrap() {
    try {
        await mongoose_1.default.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.b0di4c5.mongodb.net/airbnb`);
        console.log('database connected!');
    }
    catch (err) {
        console.log(err);
    }
}
bootstrap();
module.exports = bootstrap;
