/**
 * selects a random background image for the home 
 */
function randomBG() {
	var path = '../images/background/';
	var bgArray = ['background1.jpeg', 'background2.jpeg', 'background3.jpeg'];
	var selectedBG = bgArray[Math.floor(Math.random() * bgArray.length)];
	document.getElementById('home').style.backgroundImage = 'url(' + path + selectedBG + ')';
}

(function ($) {
	var typed = new Typed('span.txt-rotate', {
		strings: ['Software Developer.', 'Web Developer.', 'git push --force ^1000\n `pushed to origin with option force`'],
		typeSpeed: 80,
		fadeOut: true,
		loop: true
	});
})(jQuery);