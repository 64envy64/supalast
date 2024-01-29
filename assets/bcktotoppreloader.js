/*-- PRELOADER --*/
document.addEventListener("DOMContentLoaded", function () {
    // Добавляем класс "loading" при начале загрузки
    document.body.classList.add("loading");
  
    // Создаем дополнительный div для блокировки скролла
    const scrollBlocker = document.createElement('div');
    scrollBlocker.classList.add('scroll-blocker');
    document.body.appendChild(scrollBlocker);
  
    // Симулируем задержку загрузки контента (удалим это в реальном сценарии)
    setTimeout(function () {
      // Удаляем класс "loading" при завершении загрузки
      document.body.classList.remove("loading");
  
      // Скрываем прелоадер плавно
      fadeOut(document.querySelector('.preloader'), 500); // 
  
      // Удаляем блокировщик скролла
      document.body.removeChild(scrollBlocker);
    }, 1000); //
  });
  
  // Функция для плавного скрытия элемента
  function fadeOut(element, duration) {
    element.style.transition = `opacity ${duration / 1000}s ease-out`;
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.display = 'none';
    }, duration);
  }

  /*-- BACKTOTOP --*/
var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});