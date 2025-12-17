// Set the date to Dec 27th, 2025 at 11:59:59 PM
var countDownDate = new Date("Dec 27, 2025 23:59:59").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update elements
  if(document.getElementById("d")) {
      document.getElementById("d").innerText = days < 10 ? '0'+days : days;
      document.getElementById("h").innerText = hours < 10 ? '0'+hours : hours;
      document.getElementById("m").innerText = minutes < 10 ? '0'+minutes : minutes;
      document.getElementById("s").innerText = seconds < 10 ? '0'+seconds : seconds;
  }

  // When countdown ends
  if (distance < 0) {
    clearInterval(x);
    if(document.querySelector(".timer-box")) {
        document.querySelector(".timer-box").innerHTML = "<h2 style='color:red'>REGISTRATION CLOSED</h2>";
    }
  }
}, 1000);