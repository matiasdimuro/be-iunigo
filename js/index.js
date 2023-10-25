const navLinks = document.querySelectorAll(".nav-link")
const toggleButton = document.querySelector('.navbar-toggler')

const checkIfNavbarIsHidden = () => {
    const buttonDisplay = getComputedStyle(toggleButton).display
    return buttonDisplay != 'none'
}

// Handle clicks and navlinks styles
navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => { 
        checkIfNavbarIsHidden() && toggleButton.click()
        navLinks.forEach(item => item.classList.remove('active'))
        navLink.classList.add('active')
    })
})

// Handle navbar background-color when scroll 
const headerNav = document.getElementsByTagName('header')[0]
window.addEventListener('scroll', () => {
    (window.scrollY > 100 && !checkIfNavbarIsHidden()) 
        ? headerNav.classList.add('headerOnScroll')
        : headerNav.classList.remove('headerOnScroll')
})