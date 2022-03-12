const terrainCard = [
  {link: "./images/terrain_image_highway.jpg", alt: "Фотография шоссейной дороги", tag: "./images/terrain_image_highway_tag.svg", track: "highway"},
  {link: "./images/terrain_image_gravel.jpg", alt: "Фотография грунтовой дороги", tag: "./images/terrain_image_gravel_tag.svg", track: "gravel"},
  {link: "./images/terrain_image_TT.jpg", alt: "Фотография смешанной дороги", tag: "./images/terrain_image_TT_tag.svg", track: "tt"},
]

const terrainArticleItemtTitle = document.querySelector('.terrain-topic__title');
const terrainArticleItemtDescription = document.querySelector('.terrain-topic__description');
const terrainCardContainer = document.querySelector('.terrain-topic__slider');
const paginationButtonLeft = document.querySelector('#pagination-left');
const paginationButtonRight = document.querySelector('#pagination-right');
const bikeCards = document.querySelectorAll('.bikes-topic__card-item');



let offset = 0;
let step = 0;

initiateTerrainCard = () => {  
  const terrainCardImage = document.createElement('img');
  terrainCardImage.src = terrainCard[step]['link'];
  terrainCardImage.classList.add('terrain-topic__image');
  terrainCardImage.dataset['track'] = terrainCard[step]['track']
  terrainCardImage.style.left = offset * 53 + '%';
  terrainCardImage.alt = terrainCard[step]['alt']
  terrainCardContainer.append(terrainCardImage);
  if (step + 1 == terrainCard.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

  initiateTerrainCard();
  initiateTerrainCard(); 

let offset1 = 0;
let step1

appendTerrainCard = () => {
  const currentTrack = terrainCardContainer.firstElementChild.dataset['track'];
  
  if (currentTrack === 'gravel') {
    step1 = terrainCard.length - 1
  } else if (currentTrack === 'tt') {
    step1 = 0
  } else if (currentTrack === 'highway') {
    step1 = terrainCard.length - 2
  }  
  
  const terrainCardImage = document.createElement('img');
  terrainCardImage.src = terrainCard[step1]['link'];
  terrainCardImage.classList.add('terrain-topic__image');
  terrainCardImage.dataset['track'] = terrainCard[step1]['track']
  terrainCardImage.style.left = offset * 53 + '%';
  terrainCardImage.alt = terrainCard[step1]['alt']
  terrainCardContainer.append(terrainCardImage);
  if (step + 1 == terrainCard.length) {
    step = 0;
  } else {
    step1++;
  }
  offset1 = 1;
}

let step2

prependTerrainCard = () => {
  const currentTrack = terrainCardContainer.firstElementChild.dataset['track'];
  
  if (currentTrack === 'gravel') {
    step2 = 0
  } else if (currentTrack === 'tt') {
    step2 = terrainCard.length - 2
  } else if (currentTrack === 'highway') {
    step2 = terrainCard.length - 1
  }

  const terrainCardImage = document.createElement('img');
  terrainCardImage.src = terrainCard[step2]['link'];
  terrainCardImage.classList.add('terrain-topic__image');
  terrainCardImage.dataset['track'] = terrainCard[step2]['track']
  terrainCardImage.alt = terrainCard[step2]['alt']
  terrainCardContainer.prepend(terrainCardImage);
  if (step2 == 0) {
    step2 = 2;
  } else {
    step2--;
  }
}


slideLeft = () => {
  const slidesCurrent = document.querySelectorAll('.terrain-topic__image')
  let offsetCurrent = 0
  for (let i = 0; i < slidesCurrent.length; i++) {
    slidesCurrent[i].style.left = offsetCurrent*53 - 53 + '%';
    offsetCurrent++; 
  }
  
  setTimeout(function(){
    slidesCurrent[0].remove();
    appendTerrainCard()
    contentChanger()
    addMapImage()  
  }, 1000)
}


slideRight = () => {
  const slidesCurrent = document.querySelectorAll('.terrain-topic__image')
  let offsetCurrent = 0
  
  for (let i = 0; i < slidesCurrent.length; i++) {
    slidesCurrent[i].style.left = offsetCurrent*53 + 53 + '%';
    offsetCurrent++; 
  }
  
  setTimeout(function(){
    slidesCurrent[1].remove();
    prependTerrainCard()
    contentChanger()
    addMapImage()  
  }, 1000)
}


addMapImage = () => {
  const terrainMapImage = document.querySelector('.terrain-topic__map');
  const currentTrack = terrainCardContainer.firstElementChild.dataset['track'];
  
  if (currentTrack === 'highway') {
    terrainMapImage.src = terrainCard[2]['tag'];
    terrainMapImage.alt = terrainCard[2]['alt']
  } else if (currentTrack === 'gravel') {
    terrainMapImage.src = terrainCard[1]['tag'];
    terrainMapImage.alt = terrainCard[1]['alt']
  } else {
    terrainMapImage.src = terrainCard[0]['tag'];
    terrainMapImage.alt = terrainCard[0]['alt']
  }
}

contentChanger = () => {
  bikeCards.forEach(item => {item.classList.remove('bikes-topic__card-item_inactive')})
  bikeTypeNavButton.forEach(item => {item.classList.remove('bikes-topic__nav-item_active')})
  bikeTypeNavButton.forEach(item => {item.classList.remove('bikes-topic__nav-item_theme_dark_active')})
  const currentTrack = terrainCardContainer.firstElementChild.dataset['track'];
  
  if (currentTrack === "highway") {
    terrainArticleItemtTitle.innerText = articleContent[0]['title']
    terrainArticleItemtDescription.innerText = articleContent[0]['content']
    
    bikeCards.forEach(item => {
      if (item.dataset['track'] !== 'highway') {
        item.classList.add('bikes-topic__card-item_inactive')
      } 
    })
    
    bikeTypeNavButton.forEach(item => {
      if (item.dataset['track'] !== 'highway') {
        if (item.classList.contains('bikes-topic__nav-item_theme_dark')) {
        item.classList.add('bikes-topic__nav-item_theme_dark_active')
      } else {
        item.classList.add('bikes-topic__nav-item_active')
      }
      }
    })

  } else if (currentTrack === "gravel") {
    terrainArticleItemtTitle.innerText = articleContent[1]['title']
    terrainArticleItemtDescription.innerText = articleContent[1]['content']
    
    bikeCards.forEach(item => {
      if (item.dataset['track'] !== 'gravel') {
        item.classList.add('bikes-topic__card-item_inactive')
      } 
     })
     
     bikeTypeNavButton.forEach(item => {
      if (item.dataset['track'] !== 'gravel') {
        if (item.classList.contains('bikes-topic__nav-item_theme_dark')) {
        item.classList.add('bikes-topic__nav-item_theme_dark_active')
      } else {
        item.classList.add('bikes-topic__nav-item_active')
      }
      }
    })
    
    } else if (currentTrack === "tt") {
    terrainArticleItemtTitle.innerText = articleContent[2]['title']
    terrainArticleItemtDescription.innerText = articleContent[2]['content']
    
    bikeCards.forEach(item => {
      if (item.dataset['track'] !== 'tt') {
        item.classList.add('bikes-topic__card-item_inactive')
      } 
    })
    
    bikeTypeNavButton.forEach(item => {
      if (item.dataset['track'] !== 'tt') {
        if (item.classList.contains('bikes-topic__nav-item_theme_dark')) {
        item.classList.add('bikes-topic__nav-item_theme_dark_active')
      } else {
        item.classList.add('bikes-topic__nav-item_active')
      }
    }
  })
}
}
contentChanger()
addMapImage()

paginationButtonRight.onclick = slideLeft
paginationButtonLeft.onclick = slideRight

