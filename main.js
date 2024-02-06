// document.addEventListener('DOMContentLoaded', function() {
//     const partcleContainer = document.querySelector('.boxes');

//     const particle = document.createElement('div');
//     particle.className = 'particle' ;
//     particle.style.left = Math.random() * window.innerWidth + 'px' ;
//     particle.style.top = Math.random() * window.innerHeight + 'px' ;
//     particle.style.animationDuration = Math.random() * 2 + 1 + 's' ;
//     partcleContainer.appendChild(particle) ;

//     particle.addEventListener('animationend', () => {
//         particle.remove() ;
//     }) ;
// } ;

// const spawnParticles = () => {
//     setInterval (createParticle, 500) ;
// } ;
// })



document.addEventListener('DOMContentLoaded', function() {
    const particleContainer = document.querySelector('.boxes');

    const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particle.style.animationDuration = Math.random() * 2 + 1 + 's';
        particleContainer.appendChild(particle);

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    };

    const spawnParticles = () => {
        setInterval(createParticle, 500);
    };

    spawnParticles();
});