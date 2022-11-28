$(".popup").css("display", "none");

// BURGER MENU-------------------------------------------
let menuBtn = document.querySelector('.btn-burger');
let menu = document.querySelector('.menu-burger');

menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

// PORTFOLIO GALLERY ---------------------------------
$('.portfolio-gallery-box img').click(function() {
    let src = $(this).attr('src');
    $('.popup img').attr('src',src);
    $('.popup').fadeIn();
});

$('.close').click(function() {
    $('.popup').fadeOut();
});


// POPUP CLICK CLOSER OBJECT-------------------
$('.popup-wrap').click(function() {
    $('.popup').fadeOut();
});




