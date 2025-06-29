<script>
    // Portfolio Filter
    const buttons = document.querySelectorAll('[data-filter]');
    const galleryItems = document.querySelectorAll('.portfolio-gallery .item');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        galleryItems.forEach(item => {
          item.style.display = filter === 'all' || item.classList.contains(filter) ? 'block' : 'none';
        });
      });
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    document.querySelectorAll('.portfolio-gallery img').forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
    });
    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

    // EmailJS contact form
    (function() {
      emailjs.init("dkYlsboD7bwh6rnCl");
    })();
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_4kaogka', 'template_nznyzhg', this)
        .then(function() {
          alert('Message sent successfully!');
        }, function(error) {
          alert('Failed to send message: ' + error);
        });
    });
  </script>
