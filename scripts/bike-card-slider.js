const cardToggler = document.querySelector('.bikes-topic__card-toggler')
const cardTogglerDotOne = document.querySelector('#dot_one')
const cardTogglerDotTwo = document.querySelector('#dot_two')
const cardTogglerDotThree = document.querySelector('#dot_three')
const bikesCardList = document.querySelectorAll('.bikes-topic__card-list')

cardTogglerDotOne.setAttribute('src', './images/dot_dark.svg')
cardTogglerDotTwo.setAttribute('src', './images/dot_light.svg')
cardTogglerDotThree.setAttribute('src', './images/dot_light.svg')

let counter = 0;
let shifter = 1;

cardToggler.addEventListener('click', () => {
  for (let i = 0; i < 2; i++) {
    bikesCardList[i].style.left = shifter * -100 + '%';
    shifter++
    if (shifter === 1) {
      cardTogglerDotOne.setAttribute('src', './images/dot_dark.svg')
      cardTogglerDotTwo.setAttribute('src', './images/dot_light.svg')
      cardTogglerDotThree.setAttribute('src', './images/dot_light.svg')
    } else if (shifter === 2) {
      cardTogglerDotOne.setAttribute('src', './images/dot_light.svg')
      cardTogglerDotTwo.setAttribute('src', './images/dot_dark.svg')
      cardTogglerDotThree.setAttribute('src', './images/dot_light.svg')
    } else if (shifter === 3) {
      cardTogglerDotOne.setAttribute('src', './images/dot_light.svg')
      cardTogglerDotTwo.setAttribute('src', './images/dot_light.svg')
      cardTogglerDotThree.setAttribute('src', './images/dot_dark.svg')
      shifter = 0
    }
  }
})