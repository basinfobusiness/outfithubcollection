'use strict'
 
const searchInput = document.getElementById('search-input');
const searchList = document.getElementById('search-list');

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
