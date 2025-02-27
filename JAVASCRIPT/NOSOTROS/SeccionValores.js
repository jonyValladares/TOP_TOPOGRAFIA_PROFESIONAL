
document.addEventListener('DOMContentLoaded', function() {
    const animatedTexts = document.querySelectorAll('.animated-textV');
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Ajusta este valor para cambiar cuándo se activa la animación
    });
  
    animatedTexts.forEach(text => {
        observer.observe(text);
    });
  });