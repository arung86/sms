

module.exports.layout = layout;
function layout(req, res, next) {
    res.render('index', {});
};

module.exports.apply_now = apply_now;
function apply_now(req, res, next) {
    res.render('pages/apply_now', {})
};

module.exports.blog = blog;
function blog(req, res, next) {
    res.render('pages/blog', {})
};

module.exports.events = events;
function events(req, res, next) {
    res.render('pages/events', {})
};

