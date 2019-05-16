$(function() {
	$("#Primary,#Success,#Orange").hide().show(1000);
	$("#card1,#card3").hide();

	$('#Primary,#Success,#Orange').hover(
		function() {
			$(this).animate({marginTop:"-=1%",},100);
		}, 

		function() {
			$(this).animate({marginTop:"0%",},100);
		}
	);	

	$('#MoreB').on('click', function(){
			$('#card1').slideToggle(1000);
	});

	$('#Orange').hover(function(){
			$('#card3').fadeToggle();
	});

	$('#card3').hover(function(){
		$(this).fadeToggle();
	});

	//settings for slider
    var width = 600;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


	var home = document.getElementById("HomeLink");
	home.addEventListener("click", function(){
		location.reload();
	});
	
	$('#ResumeB').on('click', function() {
		$(".show").fadeIn();
		$("body").css("overflow", "hidden");
	});

	$("span, .overlay").click(function () {
	        $(".show").fadeOut();
	        $("body").css("overflow", "auto");
	});
	//$('#hidden').css("margin-top", $(window).height() / 2 - $('.modal-content').height() / 2);

});