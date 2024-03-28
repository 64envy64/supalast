document.addEventListener('DOMContentLoaded', function () {
  const revealOptions = {
    delay: 100,
    duration: 800,
    distance: '20px',
    easing: 'ease-in-out'
  };

  ScrollReveal().reveal('.course h2', { ...revealOptions, origin: 'top', distance: '20px' });
  ScrollReveal().reveal('.campus h2', { ...revealOptions, origin: 'top', distance: '50px' });
  ScrollReveal().reveal('#firstimg', { ...revealOptions, origin: 'left' });
  ScrollReveal().reveal('#secondimg', { ...revealOptions, origin: 'bottom' });
  ScrollReveal().reveal('#thirdimg', { ...revealOptions, origin: 'right' });
  ScrollReveal().reveal('.accordion-text .title', { ...revealOptions, origin: 'bottom' });
  ScrollReveal().reveal('.questions-container', { ...revealOptions, origin: 'bottom' });
  ScrollReveal().reveal('.partners', { ...revealOptions, origin: 'top' });
  ScrollReveal().reveal('#firstbox', { ...revealOptions, origin: 'right', distance: '50px' });
  ScrollReveal().reveal('#secondbox', { ...revealOptions, origin: 'top', distance: '50px' });
  ScrollReveal().reveal('#thirdbox', { ...revealOptions, origin: 'left', distance: '50px' });
  ScrollReveal().reveal('#firstcourse', { ...revealOptions, origin: 'left' });
  ScrollReveal().reveal('#secondcourse', { ...revealOptions, origin: 'bottom' });
  ScrollReveal().reveal('#thirdcourse', { ...revealOptions, origin: 'right' });
  ScrollReveal().reveal('.footer', { 
    delay: 100, 
    duration: 300,
    opacity: 0, 
    easing: 'ease-in-out'
});

  ScrollReveal().reveal('.wrapper', { ...revealOptions, opacity: 0 });
  ScrollReveal().reveal('.cta', { ...revealOptions, opacity: 0 });
  ScrollReveal().reveal('.cta h1', { ...revealOptions, opacity: 0, duration: 500 });
  ScrollReveal().reveal('.about-header h1', { ...revealOptions, origin: 'top', delay: 800 });
  ScrollReveal().reveal('.about-header p', { ...revealOptions, origin: 'bottom', delay: 900 });
  ScrollReveal().reveal('.num-header h1', { ...revealOptions, origin: 'top', delay: 700 });
  ScrollReveal().reveal('#firstset', { ...revealOptions, origin: 'left', distance: '200px' });
  ScrollReveal().reveal('#secondset', { ...revealOptions, origin: 'top', distance: '20px' });
  ScrollReveal().reveal('#thirdset', { ...revealOptions, origin: 'right', distance: '20px' });
  ScrollReveal().reveal('#fourthset', { ...revealOptions, origin: 'right', distance: '20px' });
  ScrollReveal().reveal('#fiveset', { ...revealOptions, origin: 'left', distance: '20px' });
  ScrollReveal().reveal('#firstcard', { ...revealOptions, origin: 'left', distance: '20px' });
  ScrollReveal().reveal('#secondcard', { ...revealOptions, origin: 'top', distance: '20px' });
  ScrollReveal().reveal('#thirdcard', { ...revealOptions, origin: 'right', distance: '20px' });

  /* CAMPUS */
  ScrollReveal().reveal('.homes', { ...revealOptions, origin: 'bottom', distance: '20px', delay: 800 });
  ScrollReveal().reveal('.about', { ...revealOptions, origin: 'bottom', distance: '35px' });
});
