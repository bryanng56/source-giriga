const body = document.querySelector('body');
const fullscreenElement = document.getElementById('fullscreen');
const swiperPopular = document.getElementById('swiper-element');
const closeElement = document.getElementById('fullscreen-close');










const getCurrentIndex = (swiperTag) => {
  swiperTag.addEventListener('click', (e) => {
    if (e.target.classList.contains('popular__img')) {
      //Busca el numero del data atribute para identificar el numero de foto seleccionado.
      const currentIndex = e.target.dataset.indexNumber - 1;
      // let nameImage = e.target.attributes[1].textContent.replace('.webp', '');
      console.log(currentIndex)
      
      
      createFullScreen(swiper); //Introducir objeto const swiper.
      addSwiperObject(currentIndex)
          
    }
  })
}

const getImages = (swiperObj) => {
  //Swiper dv el padre contedenor (.swiper) y la siguiente propiedad permiten obtener todas la imagenes en él (incluso duplicadas por el loop)
  const swiperImages = swiperObj.imagesToLoad;
  const images = [];
  let result;
  
  for (const img of swiperImages){
    //Buscamos la ruta src optimizada de cada imagen y eliminamos su extension .webp
    images.push(img.attributes[1].textContent.replace('.webp', ''))
    //Elimina duplicados en un array por el loop
    result = images.filter((item,index)=>{
      return images.indexOf(item) === index;
    })
  }
  return result
}

const createFullScreen = (swiperObj) => {
    const fullscreenElement = document.getElementById('fullscreen');
    const fragment = document.createDocumentFragment();

    const divSwiper = document.createElement('div');
    const divWrapper = document.createElement('div');
  
    divSwiper.classList.add('swiper', 'fullscreen__swiper');
    divWrapper.classList.add('swiper-wrapper');
    divSwiper.appendChild(divWrapper);

    const images = getImages(swiperObj);
  
    for (let image of images){
      const divSlide = document.createElement('div');
      const picture = document.createElement('picture');
      const source = document.createElement('source');
      const imageElement = document.createElement('img');
  
      divSlide.classList.add('swiper-slide');
      picture.classList.add('fullscreen__picture');
      source.setAttribute('srcset', `${image}-laptop.webp`);
      source.setAttribute('media', "(min-width:1024px)");
      imageElement.setAttribute('src', `${image}-mobile.webp`);

      divWrapper.appendChild(divSlide);
      divSlide.appendChild(picture);
      picture.appendChild(source);
      picture.appendChild(imageElement);
    }

    const nextButton = document.createElement('div');
    const pevButton = document.createElement('div');
    const pagination = document.createElement('div');
  
    nextButton.classList.add('swiper-button-next', 'fullscreen__arrows');
    pevButton.classList.add('swiper-button-prev', 'fullscreen__arrows');
    pagination.classList.add('swiper-pagination');
  
    divSwiper.appendChild(nextButton);
    divSwiper.appendChild(pevButton);
    divSwiper.appendChild(pagination);
    
    fragment.appendChild(divSwiper);
    fullscreenElement.appendChild(fragment);
    fullscreenElement.style.display = "block";
    body.style.overflow = 'hidden';
}

window.addEventListener('load', getCurrentIndex(swiperPopular));

// console.log(getImages(swiper))
// console.log(getCurrentIndex(swiperPopular))
















// for (let i=0; i<swiperCube.length; i++){
//   swiperCube[i].on('click', (e) =>{
//     //Parámetro "e" devuelve el obejeto del swpiper seleccionado
//     let images = getSwiperImages(e);
//     let indexSlide = e.realIndex;
    
//     createFullscreen(images);    
//     let swiperFullscreenObj = addSwiperObject(indexSlide);

//     //Correncion-- Elimina mas de una vez el elemento fullscreenElement!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     closeElement.addEventListener('click', () => {
//       e.slideToLoop(swiperFullscreenObj.realIndex, 0, false);
//       //Dado que se ejecuta mas de una vez "i++" condicionamos a que elimine solo si existe
//       if (fullscreenElement.children[1]){
//         fullscreenElement.removeChild(fullscreenElement.children[1]);
//         fullscreenElement.style.display = 'none';
//         body.style.overflow = 'scroll';
//       }
//     });
//   });
// }




// const getSwiperImages = (swiperObject) => {
//   //Array de slides con duplicados del efecto loop de "swiperjs"
//   let slideElements = swiperObject.slides;
//   let images = [];

//   for (let element of slideElements){
//     images.push(element.firstChild.src);
//   }
//   //Elimina el primer y ultimo elemento duplicado por el efecto "loop"
//   images.shift();
//   images.pop();
//   return images
// }

// const createFullscreen = (images) => {
//   const fragment = document.createDocumentFragment();
//   const divSwiper = document.createElement('div');
//   const divWrapper = document.createElement('div');

//   divSwiper.classList.add('swiper', 'fullscreen__gallery');
//   divWrapper.classList.add('swiper-wrapper');
//   divSwiper.appendChild(divWrapper);

//   for (let image of images){
//     const divSlide = document.createElement('div');
//     const imageElement = document.createElement('img');

//     divSlide.setAttribute('class', 'swiper-slide');
//     imageElement.setAttribute('src', image);

//     divWrapper.appendChild(divSlide);
//     divSlide.appendChild(imageElement);
//   }
  
//   const nextButton = document.createElement('div');
//   const pevButton = document.createElement('div');
//   const pagination = document.createElement('div');

//   nextButton.classList.add('swiper-button-next');
//   pevButton.classList.add('swiper-button-prev');
//   pagination.classList.add('swiper-pagination');

//   divSwiper.appendChild(nextButton);
//   divSwiper.appendChild(pevButton);
//   divSwiper.appendChild(pagination);

//   fragment.appendChild(divSwiper);
//   fullscreenElement.appendChild(fragment);
//   fullscreenElement.style.display = "block";
//   body.style.overflow = 'hidden';
// }






const addSwiperObject = (indexSlide) => {
    let swiperFullscreen = new Swiper(".fullscreen__swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    swiperFullscreen.slideToLoop(indexSlide, 0, false);

    closeElement.addEventListener('click', () => {
      console.log(swiperFullscreen.realIndex)
      swiper.slideToLoop(swiperFullscreen.realIndex, 0, false);
      //Dado que se ejecuta mas de una vez "i++" condicionamos a que elimine solo si existe
      if (fullscreenElement.children[1]){
        fullscreenElement.removeChild(fullscreenElement.children[1]);
        fullscreenElement.style.display = 'none';
        body.style.overflowY = 'scroll';
      }
    });


    // return swiperFullscreen
}
