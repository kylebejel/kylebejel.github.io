const burger = document.querySelector('.burger');
const overlay = document.querySelector('.active-menu');
const link = document.querySelector('.active-menu-link');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    overlay.classList.toggle('is-active');
})

function closeMenu(e) {
    var e = window.e || e;

    if (e.target.className !== 'active-menu-link')
        return;

    overlay.classList.toggle('is-active');
    burger.classList.toggle('is-active');
}

if (document.addEventListener)
    document.addEventListener('click', closeMenu, false);
else
    document.attachEvent('onclick', closeMenu);