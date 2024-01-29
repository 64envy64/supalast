$(document).ready(function () {
  $(".lang-dropdown-btn").click(function () {
    var dropdownList = $(".lang-dropdown-list");

    // Перед выполнением slideToggle проверяем, есть ли у элемента класс "active"
    if (!dropdownList.hasClass("active")) {
      dropdownList.slideDown(300, function () {
        dropdownList.addClass("active");
      });
    } else {
      dropdownList.slideUp(300, function () {
        dropdownList.removeClass("active");
      });
    }

    $(this).toggleClass("active");
  });

  // Закрытие дроп-дауна при клике вне его
  $(document).mouseup(function (e) {
    var container = $(".lang-dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".lang-dropdown-list").removeClass("active").slideUp(300);
      $(".lang-dropdown-btn").removeClass("active");
    }
  });
});
