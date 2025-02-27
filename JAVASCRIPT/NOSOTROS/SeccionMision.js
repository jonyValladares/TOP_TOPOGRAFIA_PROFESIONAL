// document.addEventListener('DOMContentLoaded', function() {
//     const imageSection = document.querySelector('.image-section');
  
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('in-view');
//         }
//       });
//     }, { threshold: 0.5 });
  
//     observer.observe(imageSection);
//   });




document.addEventListener('DOMContentLoaded', function() {
  const animatedTexts = document.querySelectorAll('.animated-text');

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