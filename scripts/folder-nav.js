const navOpenButton = document.querySelector('.header__menu-open-button')
const navCloseButton = document.querySelector('.header__menu-close-button')

navOpenButton.classList.remove('header__menu-open-button_disabled')
navCloseButton.classList.add('header__menu-close-button_disabled')

document.querySelector('.header').classList.remove('header_unfolded')
document.querySelector('.header').classList.add('header_folded')
document.querySelector('.header__nav').classList.add('header__nav_folded')
document.querySelector('.theme-switch_place_header').classList.add('theme-switch_place_header_folded')

navOpenButton.addEventListener('click', () => {
  navOpenButton.classList.add('header__menu-open-button_disabled')
  navCloseButton.classList.remove('header__menu-close-button_disabled')
  document.querySelector('.header').classList.remove('header_folded')
  document.querySelector('.header').classList.add('header_unfolded')
  document.querySelector('.header__nav').classList.remove('header__nav_folded')
  document.querySelector('.theme-switch_place_header').classList.remove('theme-switch_place_header_folded')
})

navCloseButton.addEventListener('click', () => {
  navCloseButton.classList.add('header__menu-close-button_disabled')
  navOpenButton.classList.remove('header__menu-open-button_disabled')
  document.querySelector('.header').classList.remove('header_unfolded')
  document.querySelector('.header').classList.add('header_folded')
  document.querySelector('.header__nav').classList.add('header__nav_folded')
  document.querySelector('.theme-switch_place_header').classList.add('theme-switch_place_header_folded')
})