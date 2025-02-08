
const indicators = document.querySelectorAll('.carousel-indicators li');
const slides = document.querySelector('.slides');
let currentIndex = 0;

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        // Update the active indicator
        document.querySelector('.carousel-indicators .active').classList.remove('active');
        indicator.classList.add('active');

        // Move the slides to the corresponding image
        slides.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    });
});

// Auto-slide functionality (optional)
let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % indicators.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel-indicators .active').classList.remove('active');
    indicators[currentIndex].classList.add('active');
}, 4000); // Slide every 4 seconds

// Pause auto-slide on hover
slides.addEventListener('mouseover', () => clearInterval(autoSlide));
slides.addEventListener('mouseout', () => {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % indicators.length;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelector('.carousel-indicators .active').classList.remove('active');
        indicators[currentIndex].classList.add('active');
    }, 4000);
});
