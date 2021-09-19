module.exports = (req, res, next) => {
    if (!req.query.page || (req.query.page <= 0)) req.query.page = 1;
    (!req.query.limit) ? req.query.limit = 10 : req.query.limit = parseInt(req.query.limit);
    (!req.query.skip) ? req.query.skip = 0 : req.query.skip = parseInt(req.query.skip);
    req.query.page = parseInt(req.query.page);
    req.query.skip = (parseInt(req.query.page) - 1) * parseInt(req.query.limit);
    return next()
}