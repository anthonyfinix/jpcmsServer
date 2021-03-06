const router = require('express').Router();
const pagination = require('../middleware/pagination');
const Service = require('./model');
router.get('/', pagination, async (req, res) => {
    let query = Service.find({ createdBy: req.user._id.toString() })
    query.skip(req.query.skip)
    query.limit(req.query.limit);
    let result = await query.sort({ 'updatedAt': -1 }).exec();
    res.json({ result, page: req.page })
})

router.get('/search', async (req, res) => {
    let query = req.query.q;
    let response = await Service.find({ customerName: { $regex: new RegExp(`\w*${query}\w*`, 'i') }, createdBy: req.user._id.toString() }).sort({ 'updatedAt': -1 });
    res.json({ result: response });
})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let result = await Service.findOne({ _id: id });
    res.json({ result })
})

router.post('/', async (req, res) => {
    let service = { ...req.body }
    let newService = new Service({ ...service, createdBy: req.user._id });
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