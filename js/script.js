'use strict';
var popup = document.querySelector('.hotel-search_form');
var popupButton = document.querySelector('.hotel-search_btn');
popupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popup.classList.contains('popup-show')){
    popup.classList.remove('popup-show');
    popup.classList.add('popup-close');
  }else{
    popup.classList.add('popup-show');
    popup.classList.remove('popup-close');
  }
});


