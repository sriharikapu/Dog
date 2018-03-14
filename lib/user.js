var lowdb = require('lowdb');

var db = lowdb('db.json');

function User () {}

User.prototype = {
	name: null,
	username: null,
	email: null,
	role: null, // watchdog, researcher, donor
	loginType: 'local', // local, facebook, google
	phone: null,
	organisation: null,
	id: null,
	gender: null,
	pass: null
}

User.prototype.data = function () {
	return {
		name: this.name,
		username: this.username,
		email: this.email,
		role: this.role, // watchdog, researcher, donor
		loginType: this.loginType, // local, facebook, google
		phone: this.phone,
		organisation: this.organisation,
		id: this.id,
		gender: this.gender,
		pass: this.pass
	}
}

User.prototype.save = function () {
	this.id = db.get('users').size().value();
	db.get('users').push(this.data()).write();
}

User.login = function (username,password) {
	var user = new User();
	var data = db.get('users')
		.find({username:username, pass:password})
		.value();
		
	for (var x in data) {
		user[x] = data[x];
	}
	
	return user;
}

User.find = function (query) {
	var user = new User();
	var data = db.get('users')
		.find(query)
		.value();
		
	for (var x in data) {
		user[x] = data[x];
	}
	
	return user;
}

module.exports = User;
