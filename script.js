document.addEventListener("DOMContentLoaded", function() {
    
    /* --- 1. NAV LOGO ANIMATION --- */
    const logo = document.querySelector(".logo");
    if (logo) {
        const text = logo.innerText;
        logo.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement("span");
            span.innerText = text[i];
            span.style.animationDelay = `${i * 0.1}s`;
            logo.appendChild(span);
        }
    }

    /* --- 2. HERO TITLE ACTIONS (Entry & Split Click) --- */
    const heroWords = document.querySelectorAll(".hero-word");
    
    if (heroWords.length > 0) {
        let charCount = 0;

        heroWords.forEach(word => {
            const text = word.innerText;
            word.innerHTML = ""; 

            for (let i = 0; i < text.length; i++) {
                const span = document.createElement("span");
                span.classList.add("hero-char");
                span.innerText = text[i];
                
                // Entry Action
                span.style.animationDelay = `${charCount * 0.05}s`;
                span.classList.add("animate-entrance");

                // Click Action
                span.addEventListener("click", function() {
                    span.classList.remove("animate-click");
                    void span.offsetWidth; // Trigger reflow
                    span.classList.add("animate-click");
                });

                word.appendChild(span);
                charCount++;
            }
        });
    }
});

/* --- 3. COUNTDOWN TIMER --- */
var countDownDate = new Date("Dec 27, 2025 23:59:59").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(document.getElementById("d")) {
      document.getElementById("d").innerText = days < 10 ? '0'+days : days;
      document.getElementById("h").innerText = hours < 10 ? '0'+hours : hours;
      document.getElementById("m").innerText = minutes < 10 ? '0'+minutes : minutes;
      document.getElementById("s").innerText = seconds < 10 ? '0'+seconds : seconds;
  }

  if (distance < 0) {
    clearInterval(x);
    if(document.querySelector(".timer-box")) {
        document.querySelector(".timer-box").innerHTML = "<h2 style='color:#ff0050'>REGISTRATION CLOSED</h2>";
    }
  }
}, 1000);