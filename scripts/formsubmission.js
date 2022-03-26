const emailSubmitForm = document.querySelector('.footer__user-subscription')
const emailSubmitInput = document.querySelector('.footer__user-email-input')
const emailSubmitButton = document.querySelector('.footer__submit-button')

emailSubmitInput.addEventListener('focus', () => {
  emailSubmitInput.value = '';
  emailSubmitButton.removeAttribute('disabled', 'true');
})

emailSubmitButton.addEventListener('click', () => {
  if (!emailSubmitInput.value == '') {
  emailSubmitInput.value = 'Круто!';
  emailSubmitButton.setAttribute('disabled', 'true');
  }
})
