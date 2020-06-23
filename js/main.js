/**
 * selects a random background image for the home 
 */
function randomBG() {
	var path = '../images/background/';
	var bgArray = ['background1.jpeg', 'background2.jpeg', 'background3.jpeg'];
	var selectedBG = bgArray[Math.floor(Math.random() * bgArray.length)];
	document.getElementById('home').style.backgroundImage = 'url(' + path + selectedBG + ')';
}