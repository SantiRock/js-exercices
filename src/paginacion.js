// JavaScript

const itemsPerPage = 3; 
const pagesToShow = 5; 
let currentPage = 1; 
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]; 
const totalPages = Math.ceil(array.length / itemsPerPage); 

function displayItems(array, page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = array.slice(startIndex, endIndex);

  for (const item of itemsToDisplay) {
    const divElement = document.createElement('div');
    divElement.textContent = item;
    document.getElementById('items').appendChild(divElement);
  }
}

displayItems(array, currentPage);

function generatePaginationButtons(currentPage, totalPages) {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = ''; 

  // Add "previous" button
  const prevButton = document.createElement('button');
  prevButton.textContent = '<';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--; 
      document.getElementById('items').innerHTML = '';
      displayItems(array, currentPage); 
      generatePaginationButtons(currentPage, totalPages);
    }
  });
  paginationContainer.appendChild(prevButton);

  // Add page number buttons
  const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.disabled = i === currentPage; 
    pageButton.addEventListener('click', () => {
      currentPage = i; 
      displayItems(array, currentPage); // Display items for the selected page
      generatePaginationButtons(currentPage, totalPages); // Regenerate pagination buttons
    });
    paginationContainer.appendChild(pageButton);
  }

// Add "next" button
  const nextButton = document.createElement('button');
  nextButton.textContent = '>';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    if (currentPage > 1) {
    currentPage++;
    document.getElementById('items').innerHTML = '';
    displayItems(array, currentPage);
    generatePaginationButtons(currentPage, totalPages);
    }
  });
  paginationContainer.appendChild(nextButton);
}

generatePaginationButtons(currentPage, totalPages )
