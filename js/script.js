var $ = require('jquery');
jQuery = $;
var bootstrap = require('bootstrap');
var login = require('./login');

$(document).ready(function () {
// /*
// 	Smooth scroll functionality for anchor links (animates the scroll
// 	rather than a sudden jump in the page)
// */
// $('.js-anchor-link').click(function(e){
//   e.preventDefault();
//   var target = $($(this).attr('href'));
//   if(target.length){
//     var scrollTo = target.offset().top;
//     $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
//   }
// });

	$('#v-search').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('.search-result').addClass("active");
        }else if("#v-search".length < 0){
        	console.log("lessthan 0")
        }
    });

	$('.v-one').click(function(){
		$("#v-maps").attr('src',"images/map-1.png");
		return false;
	});
	$('.v-two').click(function(){
		$("#v-maps").attr('src',"images/map-2.png");
		return false;
	});
	$('.v-three').click(function(){
		$("#v-maps").attr('src',"images/map-3.png");
		return false;
	});
	$('.v-four').click(function(){
		$("#v-maps").attr('src',"images/map-4.png");
		return false;
	});
	$('.v-five').click(function(){
		$("#v-maps").attr('src',"images/map-5.png");
		return false;
	});

	login.init();
	
	$('#make-donation').on('click',function(){
		window.location = '/donate';
	});
});
