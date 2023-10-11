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
let alertClose = document.querySelectorAll(".alert--close");
for (let item of alertClose) {
  item.addEventListener("click", function (event) {
    alertt.classList.remove("alert--active");
    alertt.classList.remove("alert--warning");
    alertt.classList.remove("alert--error");
  });
}
$(".way").waypoint({
  handler: function () {
    $(this.element).addClass("way--active");
  },
  offset: "90%",
});
var audio = document.getElementById("player");
var playPauseBTN = document.getElementById("playPauseBTN");
let count = 0;
function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playPauseBTN.querySelector(".play").classList.add("hidden");
    playPauseBTN.querySelector(".stop").classList.remove("hidden");
  } else {
    count = 0;
    audio.pause();
    playPauseBTN.querySelector(".stop").classList.add("hidden");
    playPauseBTN.querySelector(".play").classList.remove("hidden");
  }
}

// function stop(){
// 	playPause()
// 	audio.pause();
// 	audio.currentTime = 0;
// 	playPauseBTN.innerHTML = "Play ►";
// }

// $('.background-images').slick({
//   dots: true,
//   infinite: true,
//   speed: 1000,
//   fade: true,
//   // cssEase: 'linear',
//   autoplay: 'true',
//   autoplaySpeed:'5000'

// });
// window.onscroll = () => {
//   if (window.pageYOffset > 50) {
//     playPause();
//   }
// };
// window.onload = function () {
//   var audio = new Audio();
//   audio.src = "../fonts/Қазыбек Құрайыш - Махаббат деген.mp3";
//   audio.oncanplaythrough = (event) => {
//     var playedPromise = audio.play();
//     if (playedPromise) {
//       playedPromise
//         .catch((e) => {
//           console.log(e);
//           if (e.name === "NotAllowedError" || e.name === "NotSupportedError") {
//             console.log(e.name);
//           }
//         })
//         .then(() => {});
//     }
//   };
// };
const func = () => {
  var alll = 5;
};
func();
alll = 3;
console.log(alll);





