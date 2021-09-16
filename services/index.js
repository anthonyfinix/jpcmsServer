const router = require('express').Router();
const Service = require('./model');
router.get('/', async (req, res) => {
    let result = await Service.find({});
    res.json({ result })
})
router.get('/:id', async (req, res) => {
    let id = req.params.id
    let result = await Service.findOne({ _id: id });
    res.json({ result })
})
router.post('/', async (req, res) => {
    let service = { ...req.body }
    let newService = new Service({ ...service, createdBy: req.user.username });
    try {
        let response = await newService.save();
        res.json(response)
    } catch (e) {
        res.send(e)
    }
})
router.put('/', async (req, res) => {
    let newData = { ...req.body };
    delete newData.id
    try {
        let response = await Service.findOneAndUpdate({ _id: req.body.id }, newData);
        res.json({ response })
    } catch (e) {
        return res.json({ error: e })
    }
})
router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    let response = await Service.findOneAndDelete({ _id: id })
    res.json(response)
})

module.exports = router;