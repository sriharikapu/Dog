var express = require('express');
var hbs = require('express-hbs');
var lowdb = require('lowdb');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var registerLoginRoutes = require('./lib/routes/login');
 
var site = express();

site.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/lib'
}));
site.set('view engine', 'hbs');
site.set('views', __dirname + '/views');

site.get('/favicon.*',function(req,res){
	res.send('');
});

site.use(session({
	secret: '0o1q9i2w8u3e7y4r6t5',
	resave: false,
	store: new FileStore({}),
	saveUninitialized: true,
	cookie: {}
}));

site.get('/', (req,res) => {
	var loginFail = req.session.loginFail;

	req.session.loginFail = 0;
	res.render('index.hbs',{
		session: req.session,
		loginFail: loginFail
	});
});

site.get('/watch', (req,res) => {
	if (req.session.loggedIn) {
		res.render('watch.hbs',{
			session: req.session
		});
	}
	else {
		res.status(401).send('Unauthorized');
	}
});

site.get('/research', (req,res) => {
	if (req.session.loggedIn) {
		res.render('research.hbs',{
			session: req.session
		});
	}
	else {
		res.status(401).send('Unauthorized');
	}
});

site.get('/donate', (req,res) => {
	if (req.session.loggedIn) {
		res.render('donate.hbs',{
			session: req.session
		});
	}
	else {
		res.status(401).send('Unauthorized');
	}
});

registerLoginRoutes(site);

site.listen(3003);
