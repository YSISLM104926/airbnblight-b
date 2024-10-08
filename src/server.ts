import express, { Request, Response } from 'express'
const app = express();
import cors from 'cors';
const port = process.env.PORT || 5000;
const placesRoutes = require("../routes/places.routes")
require('./index');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', placesRoutes)

app.get('/', async (req: Request, res: Response) => {
    res.send('server running')
})

app.listen(port, () => {
    console.log(`server running on port 127.0.0.1:${port}`)
})