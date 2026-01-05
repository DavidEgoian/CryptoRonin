document.addEventListener('DOMContentLoaded', () => {
  // AOS Init
  if (typeof AOS !== 'undefined') {
    AOS.init({
      offset: 280,
      duration: 400,
    });
  }

  // Countdown
  const countDownDate = new Date("May 22, 2022 22:00:00").getTime();
  const demo = document.getElementById("demo");

  if (demo) {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      demo.innerHTML = "Mint was canceled :(";
    } else {
      const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        demo.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

        if (distance < 0) {
          clearInterval(x);
          demo.innerHTML = "Mint was canceled :(";
        }
      }, 1000);
    }
  }
});
