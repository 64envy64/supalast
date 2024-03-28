document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const profiles = document.querySelectorAll('.profile');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Убираем активный класс у всех кнопок
      filterBtns.forEach(btn => btn.classList.remove('active'));
      // Добавляем активный класс текущей нажатой кнопке
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Показываем только карточки, соответствующие выбранному фильтру, скрываем остальные
      profiles.forEach(profile => {
        if (filterValue === 'all' || profile.getAttribute('data-category') === filterValue) {
          profile.classList.remove('hidden');
          profile.classList.add('visible');
        } else {
          profile.classList.remove('visible');
          profile.classList.add('hidden');
        }
      });
    });
  });
});
