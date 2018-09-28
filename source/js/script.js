var menuBtn = $(".button-to-top");
menuBtn.hide()

$(document).scroll(function() {

  if (window.pageYOffset > window.innerHeight) {
    menuBtn.show()
  } else {
    menuBtn.hide()
  }
});

$(menuBtn).click(function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

