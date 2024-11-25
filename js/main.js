const buttonMenuMobileButton = document.querySelector('.nav-button')
const mobileMenu = document.querySelector('.nav-list')
const buttonCloseMobileMenu = document.querySelector('.close-nav-list')

buttonMenuMobileButton.addEventListener('click', () => {
  mobileMenu.classList.add('nav-list-mobile-active')
  document.querySelector('body').style.overflow = 'hidden'
})

buttonCloseMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('nav-list-mobile-active')
  document.querySelector('body').style.overflow = ''
})

