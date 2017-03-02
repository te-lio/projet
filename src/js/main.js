var activeSection = "1-1";

function clickAction(event){
	event.preventDefault();
	var $elem = $(this);
	if (!$elem.hasClass('open')){
		$elem.addClass('open')
	} else {
		$elem.removeClass('open')
	}
}
function closeMenu(event){
	event.preventDefault();
	var $elem = $(this);
	var $menuContainer = $('.menu').closest('aside');
	if (! $menuContainer.hasClass('closed')){
		$menuContainer.addClass('closed')
		$elem.text('>')
	}
	else {
		$menuContainer.removeClass('closed')
		$elem.text('<')
	}
}

function clickContent(event) {
	event.preventDefault();
	var $elem = $(this);
	$('.lvl2 a').not($elem).removeClass('active');
	$elem.addClass('active');
	var target = $elem.attr('href');
	target = target.replace(/#/,'');
	var parent = $elem.closest('.lvl2').prev('a');

	$('.lvl1').removeClass('active');
	$('.lvl1').not(parent).removeClass('open');
	

	parent.addClass('active');

	$("section[rel='"+activeSection+"']").removeClass('active');	
	$("section[rel='"+target+"']").addClass('active');
	activeSection = target;
}



$().ready(function() {
	$('body').on('click','.lvl1',clickAction);
	$('body').on('click','.lvl2 a',clickContent);
	$('#closeMenu').on('click',closeMenu);
});