const articleLinkButton = document.querySelector('.general-topic__link')

articleLinkButton.addEventListener('mouseenter', () =>{
  document.querySelector('.general-topic__button-background').classList.add('general-topic__button-background_active')
})

articleLinkButton.addEventListener('mouseleave', () =>{
  document.querySelector('.general-topic__button-background').classList.remove('general-topic__button-background_active')
})