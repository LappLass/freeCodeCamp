var lastScroll = 0;
window.onscroll = function() {

	var scrolled = window.pageYOffset;
	if (scrolled > lastScroll) {
		document.querySelector('header').classList.add('fix');
		document.querySelector('.nav').style.display="none";
		lastScroll = scrolled;
	}
	if (scrolled < lastScroll) {
		document.querySelector('header').classList.remove('fix');
		
		lastScroll = scrolled;
	}
	if (scrolled < 500) {
		document.querySelector('#nav>li:last-child').classList.remove('active');
		document.querySelector('#nav>li:nth-child(2)').classList.remove('active');
		document.querySelector('#nav>li:first-child').classList.add('active');
	}
	if (scrolled >= 500) {
		document.querySelector('#nav>li:first-child').classList.remove('active');
		document.querySelector('#nav>li:last-child').classList.remove('active');
		document.querySelector('#nav>li:nth-child(2)').classList.add('active');
	}
	if (scrolled >= 1500) {
		document.querySelector('#nav>li:first-child').classList.remove('active');
		document.querySelector('#nav>li:nth-child(2)').classList.remove('active');
		document.querySelector('#nav>li:last-child').classList.add('active');
	}

}

$(function() {
	$('.menu-toggle').click(function() {
		$(this).toggleClass('active')
		$('.nav').slideToggle(400)
	})
})

/*
$(function() {$("body")
 .on("input propertychange", ".form-item",function(e) {
  $(this).toggleClass("input-target",!! $(e.target).val());})
 .on("focus", ".form-item",function() {
  $(this).addClass("input-focused");})
 .on("blur", ".form-item",function() {
  $(this).removeClass("input-focused");});
});
*/


feedback.onclick = function (event) {
	var target = event.target;

	while(true){

		if (target.tagName != 'INPUT' & target.tagName != 'TEXTAREA') return;

		showSpan(target);
		return;
	}
}

function showSpan (elem) {

		elem.onfocus = function() {
			
			elem.parentNode.classList.add('input-focused');
		}
		
		elem.onblur = function () {
			
			elem.parentNode.classList.remove('input-focused');
		}

		elem.oninput = function() {
			
			if(elem.value.length){elem.parentNode.classList.add('input-target', 'input-focused');}
			else elem.parentNode.classList.remove('input-target');
		}
}
