'use strict';

// const sideBar = document.querySelector('.side-bar');
// const listOutline = document.querySelector('.lstoo');
// const overLay = document.querySelector('.overlay');

// const openSideBar = function () {
//   sideBar.classList.remove('hidden');
//   overLay.classList.remove('hidden');
// };
// const closeSideBar = function () {
//   sideBar.classList.add('hidden');
//   overLay.classList.add('hidden');
// };
// listOutline.addEventListener('click', openSideBar);

// overLay.addEventListener('click', closeSideBar);
// console.log(sideBar);
const topBar = document.querySelector('.top-bar');
const btn = document.querySelector('.btn-mobile-nav');

btn.addEventListener('click', function () {
  topBar.classList.toggle('nav-open');
});
