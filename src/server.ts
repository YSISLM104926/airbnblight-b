import express, { Request, Response, NextFunction } from 'express'
const app = express();
import cors from 'cors';
const port = process.env.PORT || 5000;
const placesRoutes = require("./modules/places/places.route")
require('./index');

// parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', placesRoutes)

app.get('/', async (req: Request, res: Response) => {
    res.send('server running')
})

app.all("*", async (req: Request, res: Response) => {
    res.status(404).json({
        message: "Route not found",
    });
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: error
    })
    next();
})

app.listen(port, () => {
    console.log(`server running on port 127.0.0.1:${port}`)
})