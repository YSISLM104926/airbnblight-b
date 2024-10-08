import express from 'express'
const router = express.Router();
const { placesController } = require('../controllers/places.controller')

router.post('/places-post', placesController.createPlacesController)
router.get('/places', placesController.getPlacesController)

module.exports = router;