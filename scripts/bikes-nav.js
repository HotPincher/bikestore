const bikesNavOpenButton = document.querySelector('.bikes-topic__shevron')

bikesNavOpenButton.addEventListener('click', () => {
  document.querySelector('.bikes-topic__nav').classList.toggle('bikes-topic__nav_unfolded')
  document.querySelector('.bikes-topic__nav').classList.toggle('bikes-topic__nav_folded')
  bikesNavOpenButton.classList.toggle('bikes-topic__shevron_active')
})