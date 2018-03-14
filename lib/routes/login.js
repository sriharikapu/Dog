var User = require('../user');

var mapRole = {
	'donor': 'donate',
	'watchdog': 'watch',
	'researcher': 'research',
	'donate': 'donor',
	'watch': 'watchdog',
	'research': 'researcher'
};

function loginRoutes (site) {

	// To fake register request /register?role=watch or research or donate
	site.get('/register', (req,res) => {
		req.session.loggedIn = 1;
		res.redirect(req.query.role);
	});
	
	// To fake login request /login?role=watch or research or donate
	site.get('/login', (req,res) => {
		var username = req.query.username;
		var pass = req.query.pass;
		
		var user = User.login(username,pass);
		
		console.log(user.data());
		
		if (user.role && user.id) {
			req.session.loggedIn = 1;
			req.session.user = user.data();
			res.redirect(mapRole[user.role]);
		}
		else {
			req.session.loginFail = 1;
			res.redirect('/');
		}
	});
	
	site.get('/logout', (req,res) => {
		req.session.destroy(()=>{
			res.redirect('/');
		});
	});
}

module.exports = loginRoutes;
