import mongoose from "mongoose";
require('dotenv').config();

async function bootstrap() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.b0di4c5.mongodb.net/airbnb`);
        console.log('database connected!');
    } catch (err) {
        console.log(err);
    }
}

bootstrap();

module.exports = bootstrap;