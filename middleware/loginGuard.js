const loginGuard = (req, res, next) => {
    if (!req.user) return res.json({ error: "login required" })
    next();
}
module.exports = loginGuard