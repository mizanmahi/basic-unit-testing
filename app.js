function renderTitle() {
   const errorContainerElement = document.getElementById('title');
   const errorMessageElement = document.createElement('p');
   errorMessageElement.textContent = 'Testing The Dom with Vitest';
   errorContainerElement.innerHTML = '';
   errorContainerElement.append(errorMessageElement);
}

renderTitle();
