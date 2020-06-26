/**
 * selects a random background image for the home 
 */
function randomBG() {
	var path = './images/background/';
	var bgArray = ['background1.jpeg', 'background2.jpeg', 'background3.jpeg'];
	var selectedBG = bgArray[Math.floor(Math.random() * bgArray.length)];
	document.getElementById('home').style.backgroundImage = 'url(' + path + selectedBG + ')';
}

/**
 * Typed function for the <h2> on home.
 */
(function ($) {
	var typed = new Typed('span.txt-rotate', {
		strings: ['Software Developer.', 'Web Developer.', 'Lorem ipsum dolor sit amet.'],
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
window.onscroll = function () {
	scrollFunction()
};

//TODO this has to be not pixel based but once it reaches to next section
function scrollFunction() {
	if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
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

$(document).ready(function () {
	$('.popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		gallery: {
			enabled: true,
			navigateByImgClick: true
		}
	});

	$('.contact-form .form-input-box label').toggleClass('active', function (element) {
		console.log(element);
		// if (element.) {

		// }
	});

	function checkActive(element) {
		const input = $('.form-input', element);
		const label = $('label', element);

		label.toggleClass('active', input.is(':focus') || input.val().length > 0);
	}

	// The lines below are executed on page load
	$('.form-input-box').each(function () {
		checkActive(this);
	});

	// The lines below (inside) are executed on change & keyup
	$('.form-input-box').on('focusout change keyup', function () {
		checkActive(this);
	});

	//hack because couldnt make it work properly straight with focus
	$('.form-input-box .form-input').focus(function () {
		var input = $(this);
		$('label', input.parent()).addClass('active');
	});
});