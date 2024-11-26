const slides = document.querySelector('.slides');
        let slideIndex = 0;
        
        function showSlides() {
            slideIndex++;
            if (slideIndex >= slides.children.length) slideIndex = 0;
            slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
        }
        setInterval(showSlides, 3000);