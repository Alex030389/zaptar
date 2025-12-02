const dropdowns = document.querySelectorAll('[data-dropdown]');

if (dropdowns.length) {
  dropdowns.forEach(dropdown => {
    const dropdownBtns = dropdown.querySelectorAll('[data-dropdown-btn]');
    const dropdownItems = document.querySelectorAll('[data-dropdown-item]');

    dropdownBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const elem = dropdown.getBoundingClientRect();

        dropdownItems[index].style.left = elem.left - 180 + 'px';
        dropdownItems[index].style.top = elem.bottom  +'px';
        dropdownItems[index].classList.toggle('dropdown--visible');
      })
    })


    // закрытие при клике вне селекта
    document.addEventListener('click', e => {
      if (!dropdown.contains(e.target)) dropdownItems.forEach(item => item.classList.remove('dropdown--visible'));
    });
  })
}
