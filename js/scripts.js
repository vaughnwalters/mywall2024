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
        document.body.style.overflowY = 'auto'; // Enable vertical scrolling
        document.body.style.overflowX = 'hidden'; // Prevent horizontal scrolling

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
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                event.preventDefault();
                showSection(sectionId);

                // Close the slide-out menu on small screens
                if (window.innerWidth <= 768) {
                    document.getElementById('hamburger').classList.remove('active');
                    document.querySelector('#slide-out-header nav').classList.remove('active');
                }
            }
        });
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection('photo-slides');
        
        // Close the slide-out menu on small screens
        if (window.innerWidth <= 768) {
            document.getElementById('hamburger').classList.remove('active');
            document.querySelector('#slide-out-header nav').classList.remove('active');
        }
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('#slide-out-header nav');
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('#slide-out-header nav');
        const hamburger = document.getElementById('hamburger');

        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Typing event to trigger LaCroix overlay
    let typedSequence = '';

    document.addEventListener('keyup', function(event) {
        typedSequence += event.key.toLowerCase();

        if (typedSequence.includes('die')) {
            const overlay = document.getElementById('lacroix-overlay');
            const lacroixImage = document.getElementById('lacroix-image');
            lacroixImage.classList.add('spin');
            overlay.classList.add('show');

            setTimeout(() => {
                lacroixImage.classList.remove('spin');
                setTimeout(() => {
                    overlay.classList.remove('show');
                    typedSequence = ''; // Reset the sequence
                }, 2000);
            }, 1000);  // Duration matches the spin animation
        }

        // Keep the last 3 characters in the sequence
        if (typedSequence.length > 3) {
            typedSequence = typedSequence.slice(-3);
        }
    });
});
