const bikeElements = [
  {
    name: "Cervelo Caledonia-5",
    link: "./images/bike_Cervelo_Caledonia-5.jpg",
    data: 'highway',
    href: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN',
  },
  {
    name: "Cannondale Systemsix Himod",
    link: "./images/bike_Cannondale_Systemsix_Himod.jpg",
    data: 'highway',
    href: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J',
  },
  {
    name: "Trek Domane SL-7",
    link: "./images/bike_Trek_Domane_SL-7.jpg",
    data: 'highway',
    href: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF',
  },
  {
    name: "Cervelo Aspero GRX 810",
    link: "./images/bike_Cervelo_Aspero_GRX_810.jpg",
    data: 'gravel',
    href: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE',
  },
  {
    name: "Specialized S-Works Diverge",
    link: "./images/bike_Specialized_S-Works_Diverge.jpg",
    data: 'gravel',
    href: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9'
  },
  {
    name: "Cannondale Topstone Lefty 3",
    link: "./images/bike_Cannondale_Topstone_Lefty_3.jpg",
    data: 'gravel',
    href: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8'
  },
  {
    name: "Specialized S-Works Shiv",
    link: "./images/bike_Specialized_S-Works_Shiv.jpg",
    data: 'tt',
    href: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9 '
  },
  {
    name: "BMC Timemachine 01 ONE",
    link: "./images/bike_BMC_Timemachine_01_ONE.jpg",
    data: 'tt',
    href: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835'
  },
  {
    name: "Cervelo P-Series",
    link: "./images/bike_Cervelo_P-Series.jpg",
    data: 'tt',
    href: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q'
  },
];

const articleContent = [
  {title: 'Шоссе', content: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.'},
  {title: 'Грэвел', content: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.'},
  {title: 'ТТ', content: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.'},
]

const bikeCardContainer = document.querySelector('.bikes-topic__card-list');
const bikeCardTemplate = document.querySelector('#bikes-cards');
const bikeTypeNavButton = document.querySelectorAll('.bikes-topic__nav-item');
const bikeTypeNavLink = document.querySelectorAll('.bikes-topic__nav-link');
const bikeCardPopup = document.querySelector('.popup');
const bikeCardPopupHref = document.querySelector('.popup__link')
const bikeCardPopupImage = document.querySelector('.popup__image');
const bikeCardPopupTitle = document.querySelector('.popup__title');

renderBikeCard = item => {
  const bikeCardItem = bikeCardTemplate.content.querySelector('.bikes-topic__card-item').cloneNode(true);
  const bikeCardItemImage = bikeCardItem.querySelector('.bikes-topic__card-image');
  const bikeCardItemTitle = bikeCardItem.querySelector('.bikes-topic__card-title');
  bikeCardItem.setAttribute('data-track', `${item.data}`);
  bikeCardItemImage.src = `${item.link}`;
  bikeCardItemImage.alt = `${item.name}`;
  bikeCardItemTitle.textContent = `${item.name}`;
  bikeCardItem.addEventListener('click', () => {
    bikeCardPopupHref.href = `${item.href}` 
    bikeCardPopupImage.src = `${item.link}`;
    bikeCardPopupImage.alt = `${item.name}`;
    bikeCardPopupTitle.textContent = `${item.name}`;
  })

  return bikeCardItem
}

bikeCardPopup.addEventListener('click', () => {
  removePopUp(bikeCardPopup)
})

addCard = (link, name, data) => {
  const cardRenderer = renderBikeCard (link, name, data)
  bikeCardContainer.append(cardRenderer) 
}

bikeElements.forEach(addCard)


bikeTypeNavButton.forEach(item => {
  item.addEventListener('click', function (evt) {
  bikeCards.forEach(item => {item.classList.remove('bikes-topic__card-item_inactive')})
  
  if (evt.target.closest('.bikes-topic__nav-item').dataset['track'] === 'highway') {
    
    terrainArticleItemtTitle.innerText = articleContent[0]['title']
    terrainArticleItemtDescription.innerText = articleContent[0]['content']
    if (terrainCardContainer.firstElementChild.dataset['track'] === 'gravel') {
      slideRight()
    } else if (terrainCardContainer.firstElementChild.dataset['track'] === 'tt') {
      slideLeft()
    } 
    bikeCards.forEach(item => {
     if (item.dataset['track'] !== 'highway') {
      item.classList.add('bikes-topic__card-item_inactive')
     } 
    })
  } else if (evt.target.closest('.bikes-topic__nav-item').dataset['track'] === 'gravel') {

    terrainArticleItemtTitle.textContent = articleContent[1]['title']
    terrainArticleItemtDescription.textContent = articleContent[1]['content']
    if (terrainCardContainer.firstElementChild.dataset['track'] === 'highway') {
      slideLeft()
    } else if (terrainCardContainer.firstElementChild.dataset['track'] === 'tt') {
      slideRight()
    }
    bikeCards.forEach(item => {
      if (item.dataset['track'] !== 'gravel') {
        item.classList.add('bikes-topic__card-item_inactive')
      } 
     })
  } else if (evt.target.closest('.bikes-topic__nav-item').dataset['track'] === 'tt') {

    terrainArticleItemtTitle.textContent = articleContent[2]['title']
    terrainArticleItemtDescription.textContent = articleContent[2]['content']
    if (terrainCardContainer.firstElementChild.dataset['track'] === 'highway') {
      slideRight()
    } else if (terrainCardContainer.firstElementChild.dataset['track'] === 'gravel') {
      slideLeft()
    }
    bikeCards.forEach(item => {
      if (item.dataset['track'] !== 'tt') {
        item.classList.add('bikes-topic__card-item_inactive')
      } 
     })
  }
})
})
