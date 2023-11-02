export function renderTitle() {
   const titleContainer =
      document.getElementById('title') || document.createElement('div');
   const titleElement = document.createElement('p');
   titleElement.textContent = 'Testing The Dom with Vitest';
   titleContainer.append(titleElement);
}

renderTitle();
