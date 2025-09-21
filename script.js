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
            
            // ¡Aquí se agrega la clase que activa la animación de las flores!
            flowers.classList.add("show-flowers");

            // Después de 10 segundos, se muestra el mensaje final
            setTimeout(function() {
                finalMessage.textContent = "No podía dejar pasar este día sin enviarte estas flores amarillas. Te quiero ❤️";
                finalMessage.classList.add("active");
            }, 10000); 

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
