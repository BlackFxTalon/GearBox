/* alpine.js */

// import Alpine from 'alpinejs'
 
// window.Alpine = Alpine
 
// Alpine.start()

// import Atropos library
import Atropos from 'atropos';

function initAtroposEffectOnElems() {
 document.querySelectorAll('.my-atropos').forEach((element = '.img-parallax-effect') => {
   Atropos({
     // pass unique element here
     el: element,
     // rest of parameters
     highlight: false,
     shadowScale: 0,
     activeOffset: 2,
     alwaysActive: true,
     rotateXMax: 2,
     rotateYMax: 2,
   });
 })
}

initAtroposEffectOnElems();

// magicMouse.js

// import { magicMouse } from 'magicmouse.js';

// Aos.js

import AOS from 'aos';

AOS.init();

// toggleLabelAnimation function

function toggleLabelAnimation(el) {
  const label = el.parentElement.querySelector('label');

  el.addEventListener('focus',()=> {
      label.classList.add('active');
    });

    el.addEventListener('blur',()=> {

      label.classList.add('active');


      if (el.value == '') {
        label.classList.remove('active');
      } 

    });
}
document.querySelectorAll('.form-controls-wrapper input').forEach(toggleLabelAnimation);

// simpleClientSideFormValidation function

function simpleClientSideFormValidation(form) {
  const el = document.querySelector(form);

  const inputs = el.querySelectorAll('.form-controls-wrapper input');


  inputs.forEach(input => {
    input.addEventListener('blur',()=>{
      const parentEl = input.parentElement;

      if (input.value !== null) {
        parentEl.classList.remove('error');
        parentEl.classList.add('correct');
      } 

      if (input.value == '') {
        parentEl.classList.remove('correct');
        parentEl.classList.add('error');
      } 
    }) 
  }); 

    inputs.forEach(input => {
      input.addEventListener('change',()=>{
        const parentEl = input.parentElement;

        if (input.value !== null) {
          parentEl.classList.remove('error');
          parentEl.classList.add('correct');
        } 

        if (input.value == '') {
          parentEl.classList.remove('correct');
          parentEl.classList.add('error');
        } 
      }) 
    }); 
  
  el.addEventListener('submit',function(event){
      event.preventDefault();
      inputs.forEach(input => {
        const parentEl = input.parentElement;

        if (input.value !== '') {
          parentEl.classList.remove('error');
        parentEl.classList.add('correct');
        } 
  
        if (input.value == '') {
          parentEl.classList.remove('correct');
          parentEl.classList.add('error');
          document.querySelectorAll('.question-modal label').forEach((label)=>{
            label.classList.add('active');
          });
          input.value = 'Введен неправильный текст';
          el.querySelector('.form-controls-wrapper input').focus();
        } 
  
      });

   }, false);
}

simpleClientSideFormValidation('.header-favorites-modal__form');

simpleClientSideFormValidation('.ask-question-modal__form');

simpleClientSideFormValidation('.callback-modal__form');

simpleClientSideFormValidation('.tawk-modal__form');


// pwaInstall on non-desktop devices

function pwaInstallOnNonDesktopDevices() {
  // Detects if device is on iOS 
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
  }
  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
  
  // Checks if should display install popup notification:
  if (isIos() && !isInStandaloneMode()) {
    
  const pwaInstallToast = document.querySelector('.pwa-install-toast');
  
  pwaInstallToast.classList.add('active');

  setTimeout(() => {
    pwaInstallToast.classList.remove('active');
  }, 15000);

   }
  }
  
  pwaInstallOnNonDesktopDevices();