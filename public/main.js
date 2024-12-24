// Author: acedinh.dev

const topMenu = document.getElementById('ace-top-menu')
const topMenuToggle = document.getElementById('ace-top-menu-toggle')

topMenuToggle.addEventListener('click', (e) => {
    if (topMenuToggle.contains(e.target)) {
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ace-top-menu-expanded')
    }
})
