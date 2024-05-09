import express from 'express';
import Subscriber from '../models/subscriber.js';

const router = express.Router();


// Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
//Creating one
router.post('/', (req, res) => {

})
// Updating one
router.patch('/', (req, rest) => {

})
// Deleting one
router.delete('/:id', (req, res) => {

})

export default router;
