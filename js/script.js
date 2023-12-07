$(".popup").css("display", "none");

// BURGER MENU-------------------------------------------
let menuBtn = document.querySelector(".btn-burger");
let menu = document.querySelector(".menu-burger");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

// PORTFOLIO GALLERY ---------------------------------
$(".portfolio-gallery-box img").click(function () {
  let src = $(this).attr("src");
  $(".popup img").attr("src", src);
  $(".popup").fadeIn();
});

$(".close").click(function () {
  $(".popup").fadeOut();
});

// POPUP CLICK CLOSER OBJECT-------------------
$(".popup-wrap").click(function () {
  $(".popup").fadeOut();
});

// Search
function toggleSearchInput() {
  var searchInput = document.querySelector(".search_input");
  var searchImg = document.querySelector(".search_img");

  if (searchInput.style.display === "block") {
    searchInput.style.display = "none";
    searchImg.classList.remove("clicked");
  } else {
    searchInput.style.display = "block";
    searchImg.classList.add("clicked");
  }
}

document.addEventListener("click", function (event) {
  var searchInput = document.querySelector(".search_input");
  var searchImg = document.querySelector(".search_img");

  if (
    !searchInput.contains(event.target) &&
    !searchImg.contains(event.target)
  ) {
    searchInput.style.display = "none";
    searchImg.classList.remove("clicked");
  }
});
