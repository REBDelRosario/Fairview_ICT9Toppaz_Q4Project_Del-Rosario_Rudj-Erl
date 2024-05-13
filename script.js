const hamburger = document.getElementById('hamburger'); //Icon Bar
const menu = document.querySelector('.menu'); //Selection

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); //underline show in Navbar text
	const crossIcon = this.querySelector('.cross-icon');  //underline disapear in Navbar text
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
