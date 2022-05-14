const elementUa = document.querySelector(".reviews__ua");
const elementNotUa = document.querySelector(".reviews__not-ua");

const infoUa = document.querySelector(".reviews__items1");
const infoNotUa = document.querySelector(".reviews__items2");

elementUa.addEventListener("click", function (e) {
   if (!elementUa.classList.contains('reviews__menu-active')) {
      elementUa.classList.add('reviews__menu-active');
      elementNotUa.classList.remove('reviews__menu-active');

      infoUa.classList.add('reviews__items-active')
      infoNotUa.classList.remove('reviews__items-active')
   }
});

elementNotUa.addEventListener("click", function (e) {
   if (!elementNotUa.classList.contains('reviews__menu-active')) {
      elementNotUa.classList.add('reviews__menu-active');
      elementUa.classList.remove('reviews__menu-active');

      infoNotUa.classList.add('reviews__items-active')
      infoUa.classList.remove('reviews__items-active')
   }
});