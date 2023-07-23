'use strict';
const open1 = document.querySelector('.open');
const open2 = document.querySelector('.open1');
const close1 = document.querySelector('.close');
const close2 = document.querySelector('.close1');
const btn = document.querySelector('.btn');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

const imgArea = document.querySelector('.img-area');

const addEvents = function (close, open, img) {
  close.classList.remove('hidden');
  open.classList.add('hidden');
  img.style.border = '2px solid #0074D9';
  img.style.backgroundColor = '#b6b4b7';
  console.log(close1);
};
const remEvents = function (close, open, img) {
  close.classList.add('hidden');
  open.classList.remove('hidden');
  img.style.border = '2px solid gray';
  img.style.backgroundColor = 'rgba(255, 255, 255, 0.97)';
};
const addClickEvent = function (close, open, img) {
  if (close.classList.contains('hidden')) {
    addEvents(close, open, img);
  } else {
    remEvents(close, open, img);
  }
};
img1.addEventListener('click', function () {
  addClickEvent(close1, open1, img1);
  remEvents(close2, open2, img2);
  btn.textContent = 'Join as a client';
  btn.style.backgroundColor = '#0074D9';
});
img2.addEventListener('click', function () {
  addClickEvent(close2, open2, img2);
  remEvents(close1, open1, img1);
  btn.textContent = 'Join as Freelancer';
  btn.style.backgroundColor = '#0074D9';
});
