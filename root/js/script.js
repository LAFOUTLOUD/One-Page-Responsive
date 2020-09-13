// function for smooth scrolling
function myFunction() {

	const navLinks = document.querySelectorAll('nav a');
	
	for (let n in navLinks) {
		if (navLinks.hasOwnProperty(n)) {
			navLinks[n].addEventListener('click', function(e) {
				e.preventDefault();
				document.querySelector(navLinks[n].hash)
				.scrollIntoView({
					behavior: 'smooth'
				});
			});
		}
	}

};

// for scrollspy - change the active link as we scroll

var home = document.getElementById('home');
var aboutUs = document.getElementById('about-us');
var services = document.getElementById('services');
var contact = document.getElementById('contact');

window.addEventListener('scroll', function() {
	
	var windo = window.pageYOffset;
	
	if (aboutUs.offsetTop >= windo && services.offsetTop > windo) {
		console.log('About');
	}
	
	else if (services.offsetTop >= windo && contact.offsetTop > windo) {
		console.log('Services');
	}
	
	else if (contact.offsetTop >= windo) {
		console.log('Contact');
	}
	
	else {
		console.log('Home');
	}
	
});

// calls the smooth scrolling fn
myFunction();