let countDownDate = new Date("May 7, 2022 22:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Mint is Live now!";
  }
}, 1000);

function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// $("#slide").hover(function () {
//   $("other").attr("style", "transform: scale(1) !important");
//   $(this).css("heigth", "300px");
// });

// $("#slide").hover(function () {
//   $this.css("transform", "scale(1)", "!important");
//   $this.css("opasity", "1");
//   $this.css("width", "300px");
// });
