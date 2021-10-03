const router = require('express').Router();
const User = require('./modal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.get('/login', (req, res) => {
    if (!req.user) return res.json({ error: "not logged in" });
    return res.json({ username: req.user.username })
})
router.post('/login', async (req, res) => {
    let reqUser = req.body;
    try {
        let dbUser = await User.findOne({ username: reqUser.username });
        if (!dbUser) return res.json({ error: "no user found" });
        console.log()
        if (!bcrypt.compareSync(reqUser.password, dbUser.password)) return res.json({ error: "Password does not match" });
        let accessToken = jwt.sign({ username: dbUser.username }, "secret");
        res.set("Access-Control-Expose-Headers", "Authorization");
        res.set("Authorization", `Bearer ${accessToken}`)
        return res.json({ message: "success", user: { username: dbUser.username } })
    } catch (e) {
        return res.json({ error: e })
    }
})
router.post('/register', async (req, res) => {
    let reqUser = req.body;
    try {
        let hashedPassword = bcrypt.hashSync(reqUser.password, 10);
        let newUser = new User({ username: reqUser.username, password: hashedPassword });
        let response = await newUser.save();
        return res.json({ response });
    } catch (e) {
        return res.json({ error: e })
    }
})

module.exports = router;