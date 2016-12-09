$(function() {

		//Каруселька Owl-corusel
		//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items: 1,
		loop: true, //Зацикливаем слайдер работает во 2 версии
		margin: 15,
		autoplay: true, //Автозапуск слайдера работает во 2 версии
		smartSpeed: 1000, //Время движения слайда
		autoHeight: true, //атоматически подстроит высотку под нестандартную картинку, что бы не "поехал" слайдер
		animateOut: "fadeOut",
		smartSpeed: 450,
		navText : "",
		nav: true

		// autoplayTimeout: 2000, //Время смены слайда
		// margin: 10, //работае во 2 версии
		// autoplay: 3500,
		// slideSpeed : 700,
		// paginationSpeed : 1000,
		// singleItem: true,
	});
		// Перемещать колесиком мыши слайды
	// owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 	if (e.deltaY > 0) {
	// 		owl.trigger("owl.prev");
	// 	} else {
	// 		owl.trigger("owl.next");
	// 	}
	// 	e.preventDefault();
	// });
	// $(".next_button").click(function(){
	// 	owl.trigger("owl.next");
	// });
	// $(".prev_button").click(function(){
	// 	owl.trigger("owl.prev");

	// });
		// Подключаем magnificPopup при нажатии картинкаа выпадает на полный экран
	$(".popup").magnificPopup({type:"image"});

		//Каруселька Owl-corusel
	$(".carousel-2").owlCarousel({
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});

		//высота фона меняется равномерно при изменении размера окна
	function heightDetect() {
		$(".main_header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

		//Анимация на элементы
	$(".nav").animated("bounceInLeft");
	$(".logo h1").animated("flipInY", "fadeOutUp");
	$(".section_header").animated("fadeInUp", "fadeOutDown");
	$(".img_position").animated("slideInRight", "slideOutRight");
	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

		//плавная навигация по landing-page
	$(".main_menu ul a[href*='#']").mPageScroll2id();
	$(".main_footer .button_up a[href*='#']").mPageScroll2id();
		//кнопка сендвич-меню
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	// $(".main_menu ul a").click(function() {
	// 	// $(".main_menu").fadeOut(600);
	// 	$(".sandwich").toggleClass("active");
	// 	$(".logo").css("opacity", "1");
	// }).append("<span>");

	if (screen.width < 800){
		$(".main_menu ul a").click(function() {
			$(".main_menu").fadeOut(600);
			$(".sandwich").toggleClass("active");
			$(".logo").css("opacity", "1");
		}).append("<span>");
	}

	$(".toggle_mnu").click(function() {
		if ($(".main_menu").is(":visible")) {
			$(".logo").css("opacity", "1");
			$(".main_menu").fadeOut(600);
			$(".main_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".logo").css("opacity", ".1");
			$(".main_menu").fadeIn(600);
			$(".main_menu li a").addClass("fadeInUp animated");
		};
	});

});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
		//при скролле лендинга делает активным пункты меню
$(document).ready(function() {
	$('#nav').onePageNav();
});
