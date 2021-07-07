const showMenu = (iconMenuId, navId) => {
    const iconMenu = document.getElementById(iconMenuId)
    const nav = document.getElementById(navId)
    iconMenu.addEventListener('click', () => {
        nav.classList.toggle('open-nav');
        iconMenu.classList.toggle('icon-close')
    })
}

showMenu('icon-menu', 'nav')