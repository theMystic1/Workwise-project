'use strict';

const topBar = document.querySelector('.top-bar');
const btn = document.querySelector('.btn-mobile-nav');
const closeSrch = document.querySelector('.rmv');
const textEl = document.getElementById('text');

btn.addEventListener('click', function () {
  topBar.classList.toggle('nav-open');
});

closeSrch.addEventListener('click', function () {
  textEl.value = '';
});
