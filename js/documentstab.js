document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tabItems = document.querySelectorAll('.tab-item');
  const buttons = document.querySelectorAll(".buttontab");
  let isCooldown = false;


  filterBtns.forEach((filterBtn, index) => {
    filterBtn.addEventListener('click', function () {

      filterBtns.forEach(btn => btn.classList.remove('active'));

      filterBtn.classList.add('active');
      let selectTab = filterBtn.getAttribute('data-tab');

      tabItems.forEach(tabItem => {
        document.querySelector('.tab-filter-item-container').style.height = tabItem.scrollHeight + 'px';
        if (tabItem.classList.contains(selectTab)) {
          tabItem.classList.add('select_tab');
        } else {
          tabItem.classList.remove('select_tab');
        }
      });
    });
  });


  tabItems.forEach(tabItem => {
    document.querySelector('.tab-filter-item-container').style.height = tabItem.scrollHeight + 'px';
  });


  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (!isCooldown) {
        isCooldown = true;
        button.disabled = true;
        addClassWithTimeout(button, "clicked", 2250, () =>
          addClassWithTimeout(button, "validate", 2250)
        );
        setTimeout(() => {
          isCooldown = false;
          button.disabled = false;
        }, 5000);
      }
    });
  });


  function addClassWithTimeout(element, className, timeout, callback) {
    element.classList.add(className);
    setTimeout(() => {
      element.classList.remove(className);
      callback && callback();
    }, timeout);
  }
});
