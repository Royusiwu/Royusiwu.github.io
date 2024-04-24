function toggleMenu() {
    const menu = document.querySelector('.flex-container');
    menu.classList.toggle('show-menu');
  }
  
  document.querySelector('.menu').addEventListener('click', toggleMenu);
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
  
      document.querySelectorAll('.flex-container a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
  
  document.addEventListener('click', function (e) {
    const menu = document.querySelector('.flex-container');
    if (!menu.contains(e.target) && !e.target.classList.contains('menu')) {
      menu.classList.remove('show-menu');
    }
  });

  const scrollToTopButton = document.getElementById('scrollToTopButton');
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  scrollToTopButton.addEventListener('click', scrollToTop);
  
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });
  
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  
  document.getElementById('prevSlide').addEventListener('click', () => {
    showSlide(slideIndex - 1);
  });
  
  document.getElementById('nextSlide').addEventListener('click', () => {
    showSlide(slideIndex + 1);
  });
  
  function showSlide(index) {
    slides[slideIndex].style.display = 'none';
    slideIndex = (index + totalSlides) % totalSlides;
    slides[slideIndex].style.display = 'block';
  }
