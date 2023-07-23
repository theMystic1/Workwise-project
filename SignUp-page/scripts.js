'use strict';
const open1 = document.querySelector('.open');
const open2 = document.querySelector('.open1');
const close1 = document.querySelector('.close');
const close2 = document.querySelector('.close1');
const btnn = document.querySelector('.btnn');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

const imgArea = document.querySelector('.img-area');

const signupBtn = document.querySelector('.signup-btn');
const signupPage = document.querySelector('.type-hero');
const overlay = document.querySelector('.overlay');
const closedBtn = document.querySelector('.closed');

const addEvents = function (close, open, img) {
  if (img === img1) {
    btnn.textContent = 'Join as a client';
    btnn.style.backgroundColor = '#0074D9';
  } else if (img === img2) {
    btnn.textContent = 'Join as Freelancer';
    btnn.style.backgroundColor = '#0074D9';
  }
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
    btnn.textContent = 'Create account';
    btnn.style.backgroundColor = 'gray';
  }
};
img1.addEventListener('click', function () {
  addClickEvent(close1, open1, img1);
  remEvents(close2, open2, img2);
});
img2.addEventListener('click', function () {
  addClickEvent(close2, open2, img2);
  remEvents(close1, open1, img1);
});

// popup window

const openSignup = function () {
  signupPage.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeSignup = function () {
  signupPage.classList.add('hidden');
  overlay.classList.add('hidden');
};
signupBtn.addEventListener('click', openSignup);

closedBtn.addEventListener('click', closeSignup);
overlay.addEventListener('click', closeSignup);
