import express from 'express';

const router = express.Router();

// Getting all
router.get('/', (req, res) => {
res.send('Hello World');
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