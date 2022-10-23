(() => {
    const menuContent = document.querySelector('.menu-content');
    const menuBtn = document.querySelector('.menu__button');
    const content = document.querySelector('.upper-header__content');

    const toggleMenu = () => {
        const isMenuOpen =
        menuBtn.getAttribute('aria-expanded') === 'true' || false;
        menuBtn.setAttribute('aria-expanded', !isMenuOpen);
        menuContent.classList.toggle('is-open');
        menuBtn.classList.toggle('is-open');
        content.classList.toggle('is-open');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };

    menuBtn.addEventListener('click', toggleMenu);

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        menuContent.classList.remove('is-open');
        menuBtn.classList.remove('is-open');
        content.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();