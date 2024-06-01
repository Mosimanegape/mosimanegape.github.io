document.addEventListener('DOMContentLoaded', () => {
    const animationContainer = document.querySelector('.space-animation');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        animationContainer.appendChild(star);
    }
});
