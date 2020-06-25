/**
 * selects a random background image for the home 
 */
function randomBG() {
	var path = '../images/background/';
	var bgArray = ['background1.jpeg', 'background2.jpeg', 'background3.jpeg'];
	var selectedBG = bgArray[Math.floor(Math.random() * bgArray.length)];
	document.getElementById('home').style.backgroundImage = 'url(' + path + selectedBG + ')';
}

/**
 * Typed function for the <h2> on home.
 */
(function ($) {
	var typed = new Typed('span.txt-rotate', {
		strings: ['Software Developer.', 'Web Developer.', 'git push --force^1000\n `pushed to origin with option force`'],
		typeSpeed: 80,
		fadeOut: true,
		loop: true
	});
})(jQuery);

/**
 * small trick to hide the menu once an item is clicked on the dropdown menu (<768px).
 */
$('.nav-links').click(function () {
	$('#chkToggle').click();
});

// When the user scrolls down 200px from the top of the document, add a small shade on the navbar. After 800px, change background to the default of the page.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
		document.getElementById("navbar").style.backgroundColor = "rgb(24, 26, 27)";
	} else if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
	  document.getElementById("navbar").style.backgroundColor = "rgba(24, 26, 27, 0.5)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

//TODO move scroll function to jquery ---- fix rules to navbar (<768px)
// $(window).scroll(function () {
// 	//FIX SMALLER SIZE
// });