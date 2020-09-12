// gets the button through the DOM and stores it into a container to access it
var scrollBtn = getElementById('scroll-to-top');

// window.onscroll = function() {
// 	scroll()
// };

function scroll() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollBtn.style.display = 'block';
	} else {
		scrollBtn.style.display = 'none';
	}
};

function top() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};