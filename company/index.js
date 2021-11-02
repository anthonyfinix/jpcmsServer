const router = require('express').Router();
const pagination = require('../middleware/pagination');
const Company = require('./model');
const bcrypt = require("bcrypt");
router.get('/', pagination, async (req, res) => {
    let query = global.mainDb.models.Company.find({ createdBy: req.user._id.toString() })
    query.skip(req.query.skip)
    query.limit(req.query.limit);
    let result = await query.sort({ 'createdAt': -1 }).exec();
    res.json({ result, page: req.page })
})

router.get('/search', async (req, res) => {
    let query = req.query.q;
    let response = await global.mainDb.models.Company.find({ name: { $regex: new RegExp(`\w*${query}\w*`, 'i') }, createdBy: req.user._id.toString() }).sort({ 'createdAt': -1 });
    res.json({ result: response });
})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let result = await global.mainDb.models.Company.findOne({ _id: id });
    res.json({ result })
})

// create new company
router.post('/', async (req, res) => {
    try {
        let company = { ...req.body };
        let hashedPassword = bcrypt.hashSync(company.password, 10);
        let newCompany = new global.mainDb.models.Company({ ...company, password: hashedPassword, createdBy: req.user._id });
        let response = await newCompany.save();
        res.json(response)
    } catch (e) {
        res.json({ error: e.message })
    }
})

router.put('/', async (req, res) => {
    let newData = { ...req.body };
    delete newData.id
    try {
        let response = await global.mainDb.models.Company.findOneAndUpdate({ _id: req.body.id }, newData);
        res.json({ response })
    } catch (e) {
        return res.json({ error: e })
    }
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    let response = await global.mainDb.models.Company.findOneAndDelete({ _id: id })
    res.json(response)
})


module.exports = router;