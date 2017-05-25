
var jack = require('./jack')

function initApp(app) {

	// website pages
	app.get("/", jack.layout);
	app.get("/apply-now", jack.apply_now);
	app.get("/blog", jack.blog);
	app.get("/events", jack.events);
}


module.exports = initApp;
