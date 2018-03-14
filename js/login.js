var $ = require('jquery');

function init () {
	$('.signup-btn').on('click',function(){
		window.location = '/register?role=' + $(this).data('usertype');
	});
	
	$('.login-btn').on('click',function(){
		var el = $(this);
		var username = '';
		var pass = '';
		
		if (el.hasClass('local-signup')) {
			username = $('#login-name').val();
			pass = $('#login-pass').val();
		}
		else if (el.hasClass('fb-signup'))  {
			username = 'fb-user';
			pass = "123";
		}
		else if (el.hasClass('google-signup'))  {
			username = 'google-user';
			pass = "123";
		}
	
		window.location = '/login?username=' + username + '&pass=' + pass;
	});
}

module.exports = {
	init: init
}