'use strict'
 
const searchInput = document.getElementById('search-input');
const searchList = document.getElementById('search-list');
const croptop = document.getElementById('product-ct');
const tanktop = document.getElementById('product-tp');
const leathertop = document.getElementById('product-ld');
const bottoms = document.getElementById('product-bt');
const shoes = document.getElementById('product-sh');


croptop.addEventListener('click',function(event) {
  event.preventDefault();

  document.writeln('searching catalog');

  sessionStorage.setItem('searchpara',croptop.innerText);
  window.location.assign('searchresult.html');
});

tanktop.addEventListener('click',function(event) {
  event.preventDefault();

  document.writeln('searching catalog');

  sessionStorage.setItem('searchpara',tanktop.innerText);
  window.location.assign('searchresult.html');
});

leathertop.addEventListener('click',function(event) {
  event.preventDefault();

  document.writeln('searching catalog');

  sessionStorage.setItem('searchpara',leathertop.innerText);
  window.location.assign('searchresult.html');
});

bottoms.addEventListener('click',function(event) {
  event.preventDefault();

  document.writeln('searching catalog');

  sessionStorage.setItem('searchpara',bottoms.innerText);
  window.location.assign('searchresult.html');
});

shoes.addEventListener('click',function(event) {
  event.preventDefault();

  document.writeln('searching catalog');

  sessionStorage.setItem('searchpara',shoes.innerText);
  window.location.assign('searchresult.html');
});

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const listItems = searchList.children;

  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    const text = item.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
});

searchInput.addEventListener('change', (event) => {
  console.log('Text changed:', event.target.value);
  const searchTerm = searchInput.value.toLowerCase();
  sessionStorage.setItem('searchpara',searchTerm);
});


searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Code to execute when Enter is pressed
    if (sessionStorage.getItem('searchpara') !== null) {
      window.location.assign('searchresult.html');
    }
    console.log('Enter key pressed');
	alert('key pressed');
  }
});
