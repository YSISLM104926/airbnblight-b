import express from 'express'
import { placesController } from './places.controller';
const router = express.Router();

router.post('/places-post', placesController.createPlacesController)
router.get('/places', placesController.getPlacesController)

module.exports = router;