var currentIndex = 0;
        var slides = document.querySelectorAll('#imgscroll img');
        
        slides[currentIndex].style.display = 'block';
        function showSlide(index) {
            slides[currentIndex].style.display = 'none';
            currentIndex = (index + slides.length) % slides.length;
            slides[currentIndex].style.display = 'block';
        }
        
        // Automatically advance to the next slide every 3 seconds
        setInterval(function() {
            showSlide(currentIndex + 1);
        }, 3000);

