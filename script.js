// JavaScript Document
function SetPalette() {
	var d = new Date();
	var n = d.getHours();
	// Night
	if (n >= 22 || n <= 5) {
		document.getElementById('githubLogo').src = 'images/github_logo/logo2.png';
		document.getElementById('headerImage').src = 'images/header_main/header2.png';
		document.getElementById('header').style.backgroundImage = 'url("images/header_bg/headerbg2.png")';
		document.body.style.backgroundColor = '#111227';
		document.getElementById('title').style.color = '#272652';
		document.getElementById('email').style.color = '#272652';
	}
	// Sunrise
	else if (n >= 6 && n <= 8) {
		document.getElementById('githubLogo').src = 'images/github_logo/logo3.png';
		document.getElementById('headerImage').src = 'images/header_main/header3.png';
		document.getElementById('header').style.backgroundImage = "url('images/header_bg/headerbg3.png')";
		document.body.style.backgroundColor = '#f66666';
		document.getElementById('title').style.color = '#f29a7f';
		document.getElementById('email').style.color = '#f29a7f';
	}
	// Day
	else if (n >= 9 && n <= 18) {
		document.getElementById('githubLogo').src = 'images/github_logo/logo4.png';
		document.getElementById('headerImage').src = 'images/header_main/header4.png';
		document.getElementById('header').style.backgroundImage = "url('images/header_bg/headerbg4.png')";
		document.body.style.backgroundColor = '#8bc34a';
		document.getElementById('title').style.color = '#43a047';
		document.getElementById('email').style.color = '#43a047';
	}
}