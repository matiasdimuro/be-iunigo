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

const animatedElementsOnLoad = document.querySelectorAll('.AnimatedOnLoad')
window.addEventListener('DOMContentLoaded', (e) => {
    animatedElementsOnLoad.forEach(animated => {
        animated.classList.add('Animation-LeftToRight')
        animated.classList.remove('BeforeAnimation-LeftToRight')
    })
})

const animatedElements = document.querySelectorAll('.Animated')
const animatedElementsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const classList = entry.target.classList
            const classesToHandle = []
            if (classList.contains("BeforeAnimation-LeftToRight")) {
                classesToHandle.push(
                    "BeforeAnimation-LeftToRight", 
                    "Animation-LeftToRight"
                )
            }
            else if (classList.contains("BeforeAnimation-RightToLeft")) {
                classesToHandle.push(
                    "BeforeAnimation-RightToLeft", 
                    "Animation-RightToLeft"
                )
            }
            else if (classList.contains("BeforeAnimation-TopToBottom")) {
                classesToHandle.push(
                    "BeforeAnimation-TopToBottom", 
                    "Animation-TopToBottom"
                )
            }
            entry.target.classList.add(classesToHandle[1])
            entry.target.classList.remove(classesToHandle[0])
            observer.unobserve(entry.target)
        }
    })
}, {
    root: null,
    rootMargin: '0px',
    threshold: .5
})
animatedElements.forEach(element => {
    animatedElementsObserver.observe(element)
})