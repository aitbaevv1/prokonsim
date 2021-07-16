$(document).ready(function() {

	$('.hero-catalog__list-img').click(function() {
		$(this).toggleClass('active').next().slideToggle(500);
	})
	$('.hero-catalog__list-sublist__item-top').click(function() {
		if ($('.hero-catalog__list-sublist').hasClass('one')) {
			$('.hero-catalog__list-sublist__item-sublist').not($(this).next()).slideUp(300);
			$('.hero-catalog__list-sublist__item-top').not($(this)).removeClass('active');
			// $('.hero-catalog__list-sublist__item-sublist').removeClass('active');
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.hero-content__promotions-slider').slick({
		arrows: false,
		dots: true,
        autoplay: true,
	});
	$('.hero-content__brands-slider').slick({
		slidesToShow: 7,
		slidesToScroll: 7,
		responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
	});

	$('.product-tabs__content-item__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 5,

		responsive:[
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
	});
	$('.partners-slider').slick({
		slidesToShow: 6,
		slidesToScroll: 6,

		responsive:[
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
	});

	$('.footer-item__city-title').click(function() {
		$(this).toggleClass('active').next().slideToggle(400);
	})


	$(".product-tabs__nav-item").click(function(event) {
		event.preventDefault();

		$(".product-tabs__nav-item, .product-tabs__content-item").removeClass("active");

		$(this).addClass("active");
		$($(this).attr('href')).addClass("active");

	});


	$(".footer-item__city-list-li").click(function() {
		let thisItem = $(this).text();
		$(".footer-item__city-title").text(thisItem);
		// $(".project-right__top-list, .project-right__arrow ").removeClass("active");
	});




	$('.product-tabs__content-item__slider-item__bottom-col__plus').click(function() {
		let col = $(this).parent().prev().text();
		let number = Number(col);
		number++;
		$(this).parent().prev().text(number);
	});
	$('.product-tabs__content-item__slider-item__bottom-col__minus').click(function() {
		let col = $(this).parent().prev().text();
        let number = Number(col);
        number--;
        $(this).parent().prev().text(number);
	});

	$('.header-mobile__burger').click(function() {
		$('.header-mobile__burger, .header-mobile__menu, body').toggleClass('active');
	})
})