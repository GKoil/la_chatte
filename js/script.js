


jQuery(function () {
	var mobile = false;
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Touch/i.test(navigator.userAgent) ) {
		mobile = true;
	}

	$('.nav-main-js li').each(function(index){
		if (index+1 > 5) {
			$(this).hide();
		}
		if($('.nav-main-js li').length == index+1 && index+1 > 5) {
			$('.nav-main-js').append('<li class="show_all_nav show_all_nav_js"' +
				' style="background:#f46e60"><span>...</span></li>');
		}
	});

	$('.headerm-form-close-btn').on('click', function(){
		$('.slid-menu-top-js').removeClass('open_double-js');
	});
	$('.show_all_nav_js').on('click', function(){
		$('.slid-menu-top-js').addClass('open_double-js');
	});
	$('.header-r .contacts').on('click', function(e){
		e.preventDefault();
		$('.slid-menu-top-js').addClass('open-js');
	});
	$('.headerf-form-close-btn').on('click', function(){
		$('.slid-menu-top-js').removeClass('open-js');
	});

	var slider = $(".slider");
	var slider2 = $('.slider-nav');
	var scrollCount = null;
	var scroll= null;

	var scrollCount2 = null;
	var scroll2 = null;

	var scrollCount3 = null;
	var scroll3 = null;

	slider.slick({
		dots: false,
		vertical: true,
		infinite: false,
		prevArrow: $('.slids-prev'),
		nextArrow: $('.slids-next'),
		verticalSwiping: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: slider2,
		speed: 800
	});
	slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var slide = $('.slider__item' + nextSlide),
		color = slide.data('color'),
		hash = slide.data('hash');
		window.location.hash = hash;
		$('.slides-count').text(nextSlide+1);
		$('.slids-nav, .black-mode-ch-js, .show_all_nav').css({
			"background-color" : color
		});
		if(nextSlide > 0) {
			$('.scroll-mouse').fadeOut(800);
		} else {
			$('.scroll-mouse').fadeIn(800);
		}
	});

	slider2.slick({
		vertical: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: slider,
		dots: false,
		prevArrow: false,
		nextArrow: false,
		verticalSwiping: true,
		rtl: false,
		speed: 800
	});

	$('.scroll-mouse').on('wheel', function(e) {
		e.preventDefault();
		clearTimeout(scroll3);
		scroll3 = setTimeout(function(){scrollCount3=0;}, 100);
		if(scrollCount3) return 0;
		scrollCount3=1;

		if (e.originalEvent.deltaY < 0) {
			if(slider.slick('slickCurrentSlide') == 0) {
				return
			}
			e.preventDefault();
			slider.slick('slickPrev');
		} else {
			if(slider.slick('slickCurrentSlide') == slider.find('.slick-slide').length - 1) {
				return
			}
			e.preventDefault();
			slider.slick('slickNext');
		}
	});
	slider.on('wheel', function(e) {
		e.preventDefault();
		clearTimeout(scroll);
		scroll = setTimeout(function(){scrollCount=0;}, 100);
		if(scrollCount) return 0;
		scrollCount=1;

		if (e.originalEvent.deltaY < 0) {
			if($(this).slick('slickCurrentSlide') == 0) {
				return
			}
			e.preventDefault();
			$(this).slick('slickPrev');
		} else {
			if($(this).slick('slickCurrentSlide') == $(this).find('.slick-slide').length - 1) {
				return
			}
			e.preventDefault();
			$(this).slick('slickNext');
		}
	});

	slider2.on('wheel', function(e) {
		e.preventDefault();
		clearTimeout(scroll);
		scroll = setTimeout(function(){scrollCount2=0;}, 100);
		if(scrollCount2) return 0;
		scrollCount2=1;

		if (e.originalEvent.deltaY < 0) {
			if($(this).slick('slickCurrentSlide') == 0) {
				return
			}
			e.preventDefault();
			$(this).slick('slickPrev');
		} else {
			if($(this).slick('slickCurrentSlide') == $(this).find('.slick-slide').length - 1) {
				return
			}
			e.preventDefault();
			$(this).slick('slickNext');
		}
	});

	var hash = window.location.hash;

	if (hash) {
		hash = hash.substr(1);
		if($('[data-hash="'+ hash +'"]').length) {
			var elem =  $('[data-hash="'+ hash +'"]'),
			elemIn = elem.data('id');

			slider.slick('slickGoTo', elemIn);
		}
	}

	$('.nav-slider a').each(function(){
		$(this).html(function(index, html) {
			return html.replace(/\S/g, '<span>$&</span>');
		});
	});

	$('.nav-slider-js a').on('click', function(e){
		var hash = $(this).data('hash-slide');
		if (hash) {
			e.preventDefault();
			var elem =  $('[data-hash="'+ hash +'"]'),
			elemIn = elem.data('id');
			slider.slick('slickGoTo', elemIn);
		}
	});

	$('.scroll-mouse-img-js').on('click', function(){
		slider.slick('slickNext');
	});

	$('.nav-slider-js a').hover(
		function() {
			$(this).parent('li').siblings().addClass('fade-out');
		},
		function() {
			$(this).parent('li').siblings().removeClass('fade-out');
		}
		);
	$('.black-mode-controle').on('click', function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			setTimeout(function(){
				$('body').removeClass('dark');
				localStorage.removeItem('site_inverse');
			}, 300);
		} else {
			$(this).addClass('active');
			setTimeout(function(){
				$('body').addClass('dark');
				localStorage.setItem('site_inverse', 'true');
			}, 300);
		}
	});

// popups

jQuery(document).ready(function($) {
	if ($('.popup').length) {
		let popup_wrap = $('.popup');
		$('.button--popup').click(function(event) {
			let popupName = $(this).attr('data-popup');
			$('#popup-' + popupName + '').fadeIn('100');
			popup_wrap.fadeIn('400');
			$(window).trigger('resize');
		});
		$('.popup-close').click(function(event) {
			if ($(this).hasClass('button')) {
				$(this).parent().fadeOut('300');
				popup_wrap.fadeOut('300');
			}else{
				popup_wrap.fadeOut('300');
				$(this).siblings().fadeOut('300');
			}
		});
	}
}(jQuery));



//mobile
var scrollDisabled = false;
var scrollTop, scrollCenter;
function disablePageScroll(keepScrollPosition) {
	if (scrollDisabled) return;
	scrollDisabled = true;
	scrollTop = document.scrollingElement.scrollTop;
	scrollCenter = scrollTop + (window.innerHeight / 2);
	var scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;
	document.documentElement.style.cssText = 'height: 100%; overflow: hidden; position: fixed; width: calc(100%' +
	' - ${scrollbarWidth}px);';
	document.body.style.cssText = 'height: 100%; overflow: hidden;';
	document.querySelector('.mobile-show').style.cssText = 'height: 100%; overflow: hidden;';
	if (keepScrollPosition) {
		document.querySelector('.mobile-show').scrollTop = scrollTop;
		document.querySelector('.main__inner').style.cssText = 'transform-origin: 50% ${scrollCenter}px;';
	}
}

function enableScroll() {
	if (!scrollDisabled) return;
	scrollDisabled = false;
	document.documentElement.style.cssText = '';
	document.body.style.cssText = '';
	document.querySelector('.mobile-show').style.cssText = '';
	document.querySelector('.header-l').style.cssText = '';
	document.scrollingElement.scrollTop = scrollTop;
}
function menuOpen() {
	$('.menu').addClass('shown');
	$('.mobile-show').addClass('menu-shown');
	$('.header-l').addClass('menu-shown');
}

function menuClose() {
	$('.menu').removeClass('shown');
	$('.mobile-show').removeClass('menu-shown');
	$('.header-l').removeClass('menu-shown');
}

function initMenu() {
	var $menuItems = $('.menu .large-menu .item');
	var $menuImages = $('.menu .menu__images div');
	$(document).on("click", ".menu-btn", function(e) {
		if ($('.menu').hasClass('shown')) {
			menuClose();
			enableScroll();
		} else {
			menuOpen();
			disablePageScroll(true);
		}
	});
	$menuItems.each(function(i) {
		$(this).hover(function() {
			$menuImages.eq(i + 1).addClass('visible');
		}, function() {
			$menuImages.eq(i + 1).removeClass('visible');
		})
	})
}
function initDrops() {
	var $navMenus = $('.nav .item');
	$navMenus.each(function() {
		$(this).hover(function() {
			$(this).addClass('expanded');
			var $dropItems = $(this).find('a');
			var $dropImages = $(this).find('img');
			$dropImages.removeClass("visible");
			$dropImages.eq(0).addClass("visible");
			$dropItems.each(function(i) {
				$(this).hover(function() {
					$dropImages.removeClass("visible");
					$dropImages.eq(i).addClass('visible');
				}, function() {})
			});
		}, function() {
			$(this).removeClass('expanded');
		});
		$(this).find('.item__head').click(function() {
			if ($(this).closest('.item').hasClass('expanded')) {
				$(this).closest('.item').removeClass('expanded');
			} else {
				$(this).closest('.item').addClass('expanded');
			}
		});
	})
}

function initilizeScripts() {
	initMenu();
	initDrops();
}
$(function() {
	initilizeScripts();
});

$(document).on('click', '.t-b-nav a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});
$(".modal").each( function(){
	$(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;

	var $this = $(this),
	modal = $($this).data("modal");

	$(modal).parents(".overlay").addClass("open");
	setTimeout( function(){
		$(modal).addClass("open");
	}, 350);

	$(document).on('click', function(e){
		var target = $(e.target);

		if ($(target).hasClass("overlay")){
			$(target).find(".modal").each( function(){
				$(this).removeClass("open");
			});
			setTimeout( function(){
				$(target).removeClass("open");
			}, 350);
		}

	});

});

$(".close-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;

	var $this = $(this),
	modal = $($this).data("modal");

	$(modal).removeClass("open");
	setTimeout( function(){
		$(modal).parents(".overlay").removeClass("open");
	}, 350);

});
});



$(window).on('load', function(){
	setTimeout(function(){
		if(localStorage.getItem('site_inverse') == 'true') {
			$('body').addClass('dark');
			$('.black-mode-controle').addClass('active');
		}
		$('.preloader').hide();
	}, 300);
});




