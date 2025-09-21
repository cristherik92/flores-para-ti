document.addEventListener("DOMContentLoaded", function () {
    var introScreen = document.getElementById("intro-screen");
    var surpriseButton = document.getElementById("surprise-button");
    var mainContent = document.getElementById("main-content");
    var finalMessage = document.getElementById("final-message");
    var backgroundMusic = document.getElementById("background-music");

    surpriseButton.addEventListener("click", function () {
        introScreen.classList.add("hidden");
        setTimeout(function() {
            introScreen.style.display = "none";
            mainContent.style.display = "block";
        }, 1000);

        backgroundMusic.play().catch(function(error) {
            console.error("Autoplay failed:", error);
            alert("Haz clic en la pantalla para iniciar la música.");
            document.body.addEventListener('click', function() {
                backgroundMusic.play();
            }, { once: true });
        });

        setTimeout(function() {
            finalMessage.textContent = "No podía dejar pasar este día sin enviarte estas flores amarillas. Te quiero ❤️";
            finalMessage.classList.add("active");
        }, 10000);
    });
});