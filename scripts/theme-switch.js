const themeSwitchHeader = document.querySelector('.theme-switch_place_header')
const themeSwitchFooter = document.querySelector('.theme-switch_place_footer')
const themeSwitchBttn = document.querySelectorAll('.theme-switch__button')

themeSwitchBttn.forEach(button => {
  button.addEventListener('click', () => {
  document.querySelectorAll('.theme-switch__button').forEach(button => {button.classList.toggle('theme-switch__button_dark')})
  document.querySelector('.footer__title').classList.toggle('footer__title_theme_dark')
  document.querySelector('.footer__copyright').classList.toggle('footer__copyright_theme_dark')
  document.querySelector('.footer__user-subscription').classList.toggle('footer__user-subscription_theme_dark')
  document.querySelector('.page').classList.toggle('page_theme_dark')
  document.querySelector('.footer').classList.toggle('footer_theme_dark')
  document.querySelector('.additional-topic__quote-content').classList.toggle('additional-topic__quote-content_theme_dark')
  document.querySelector('.additional-topic__quote-author').classList.toggle('additional-topic__quote-author_theme_dark')
  document.querySelector('.additional-topic__quote-author-subline').classList.toggle('additional-topic__quote-author-subline_theme_dark')
  document.querySelector('.general-topic__title').classList.toggle('general-topic__title_theme_dark')
  document.querySelector('.general-topic__description').classList.toggle('general-topic__description_theme_dark')
  document.querySelector('.terrain-topic__title').classList.toggle('terrain-topic__title_theme_dark')
  document.querySelector('.terrain-topic__description').classList.toggle('terrain-topic__description_theme_dark')
  document.querySelectorAll('.pagination__button').forEach(item => {item.classList.toggle('pagination__button_theme_dark')})
  document.querySelector('.training-topic__title').classList.toggle('training-topic__title_theme_dark')
  document.querySelector('.training-topic__description').classList.toggle('training-topic__description_theme_dark')
  document.querySelector('.bikes-topic__title').classList.toggle('bikes-topic__title_theme_dark')
  document.querySelector('.bikes-topic__shadow-provider').classList.toggle('bikes-topic__shadow-provider_theme_dark')
  document.querySelectorAll('.bikes-topic__card-item').forEach(item => {item.classList.toggle('bikes-topic__card-item_theme_dark')})
  document.querySelectorAll('.bikes-topic__card-title').forEach(item => {item.classList.toggle('bikes-topic__card-title_theme_dark')})
  document.querySelectorAll('.bikes-topic__nav-item').forEach(item => {item.classList.toggle('bikes-topic__nav-item_theme_dark')}) 
  bikeTypeNavButton.forEach(item => {item.classList.remove('bikes-topic__nav-item_active')})
  bikeTypeNavButton.forEach(item => {item.classList.remove('bikes-topic__nav-item_theme_dark_active')})
  document.querySelectorAll('.training-topic__nav-link').forEach(item => {item.classList.toggle('training-topic__nav-link_theme_dark')})
  document.querySelectorAll('.header__link').forEach(item =>{item.classList.toggle('header__link_theme_dark')}) 
  document.querySelector('.popup__title').classList.add('popup__title_theme_dark')
  })
})