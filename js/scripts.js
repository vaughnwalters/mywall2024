document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
    }

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));

    // Initial logo fade out
    setTimeout(() => {
        const initialLogo = document.getElementById('initial-logo');
        initialLogo.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Enable scrolling after initial animation

        setTimeout(() => {
            initialLogo.style.display = 'none';
            document.querySelector('.container').classList.add('visible');
        }, 1000);
    }, 2000);

    // Single Page Application logic
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    const homeLink = document.getElementById('home-link');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection('photo-slides');
    });

    // Show the initial section
    showSection('photo-slides');

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('header nav').classList.toggle('active');
    });

    console.log('website by hans.')
});
