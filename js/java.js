document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
            console.log('Hamburger clicked, menu active:', menu.classList.contains('active'));
        });
    } else {
        console.error('Error: hamburger or menu element not found. Check IDs in HTML.');
    }

    // Animación de frases cambiantes
    const phrases = ['Kevin Jayo','Sobre mí', 'About me', 'Detrás del teclado'];
    let currentPhraseIndex = 0;
    const changingText = document.getElementById('changing-text');

    if (changingText) {
        function changePhrase() {
            changingText.style.opacity = 0;
            setTimeout(() => {
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                changingText.textContent = phrases[currentPhraseIndex];
                changingText.style.opacity = 1;
            }, 500);
        }

        setInterval(changePhrase, 3000);
    } else {
        console.error('Error: changing-text element not found. Check ID in HTML.');
    }

    // Animación al hacer scroll
    const observerOptions = {
        root: null, // Observa el viewport
        rootMargin: '0px', // Margen alrededor del viewport
        threshold: 0.1 // Activa cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Opcional: Desactiva la observación después de que se muestre
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa todas las secciones y tarjetas con la clase 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => observer.observe(element));
});