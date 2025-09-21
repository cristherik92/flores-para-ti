document.addEventListener("DOMContentLoaded", function () {
    var introScreen = document.getElementById("intro-screen");
    var surpriseButton = document.getElementById("surprise-button");
    var mainContent = document.getElementById("main-content");
    var finalMessage = document.getElementById("final-message");
    var backgroundMusic = document.getElementById("background-music");
    var flowers = document.querySelector(".flowers");

    surpriseButton.addEventListener("click", function () {
        introScreen.classList.add("hidden");
        setTimeout(function() {
            introScreen.style.display = "none";
            mainContent.style.display = "block";
            
            // Agrega la clase para que las flores se muestren
            flowers.classList.add("show-flowers");

            // Agrega la clase 'active' al mensaje final después del tiempo que tarda la animación de las flores
            setTimeout(function() {
                finalMessage.classList.add("active");
            }, 10000); // 10 segundos, que es el tiempo para que todas las flores aparezcan

        }, 1000);

        backgroundMusic.play().catch(function(error) {
            console.error("Autoplay failed:", error);
            alert("Haz clic en la pantalla para iniciar la música.");
            document.body.addEventListener('click', function() {
                backgroundMusic.play();
            }, { once: true });
        });
    });
});
