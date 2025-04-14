
        // Simple mobile menu toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const nav = document.querySelector('nav');
            
            mobileMenuBtn.addEventListener('click', function() {
                nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            });
            
            // Reset nav display on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    nav.style.display = 'block';
                } else {
                    nav.style.display = 'none';
                }
            });
        });
