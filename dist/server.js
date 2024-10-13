"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const port = process.env.PORT || 5000;
const placesRoutes = require("./modules/places/places.route");
require('./index');
// parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', placesRoutes);
app.get('/', async (req, res) => {
    res.send('server running');
});
app.all("*", async (req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});
app.use((error, req, res, next) => {
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: error
    });
    next();
});
app.listen(port, () => {
    console.log(`server running on port 127.0.0.1:${port}`);
});
