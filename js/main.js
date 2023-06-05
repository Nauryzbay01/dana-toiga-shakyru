// const anchors = document.querySelectorAll('a[href*="#]')

// for (let anchor of anchors){
//   anchor.addEventListener("click", function(event) {
//     event.preventDefault();
//     const blockID = anchor.getAttribute('href')
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: "smooth",
//       block: 'start'
//     })
//   })
// }

$('input[type="tel"]')
  .click(function () {
    $(this).setCursorPosition(3);
  })
  .mask("+7 (999) 999 99 99");

$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
};

let alertt = document.querySelector(".alert--fixed");

$(".way").waypoint({
  handler: function () {
    $(this.element).addClass("way--active");
  },
  offset: "90%",
});

// $('.background-images').slick({
//   dots: true,
//   infinite: true,
//   speed: 1000,
//   fade: true,
//   // cssEase: 'linear',
//   autoplay: 'true',
//   autoplaySpeed:'5000'

// });
