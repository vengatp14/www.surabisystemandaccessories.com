// Animated Background Particles
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = particle.style.height = (Math.random() * 4 + 2) + 'px';
            particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            document.getElementById('particles').appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 35000);
        }

        // Create continuous particles
        setInterval(createParticle, 300);

        // FAQ Toggle
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const item = this.parentElement;
                item.classList.toggle('active');
                
                const icon = this.querySelector('i');
                icon.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
                icon.style.transition = 'transform 0.3s ease';
            });
        });

        // Mobile Nav Active States
        document.querySelectorAll('.nav-item[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
                this.classList.add('active');
                
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Navbar scroll spy
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-item').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent. We will contact you soon.');
        });

        // Parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.bg-particles');
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        });

        document.getElementById('openServiceModal').addEventListener('click', function () {
  const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
  modal.show();
});

document.addEventListener("DOMContentLoaded", function () {
    // Get carousel element
    var carouselEl = document.getElementById('assembledCarousel');

    // Initialize Bootstrap Carousel
    var carousel = new bootstrap.Carousel(carouselEl, {
        interval: 6000,    
        ride: 'carousel',  
        wrap: true         
    });

    //Next/Prev controls 
    document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('shown.bs.modal', function () {
    const carousels = modal.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      bootstrap.Carousel.getOrCreateInstance(carousel, {
        interval: false,
        ride: false,
        touch: true,
        wrap: true
      });
    });
  });
});
});

var modals = document.querySelectorAll('.modal');
modals.forEach(function(modal) {
  modal.addEventListener('shown.bs.modal', function (event) {
    var carouselEl = modal.querySelector('.carousel');
    if (carouselEl) {
      var carousel = bootstrap.Carousel.getInstance(carouselEl);
      if (!carousel) {
        new bootstrap.Carousel(carouselEl);
      }
    }
  });
});

document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => e.preventDefault()); 
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const modal = document.querySelector('.modal.show');
    if (modal) {
      bootstrap.Modal.getInstance(modal).hide();
    }
  }
});

document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('map-active');
    });
});