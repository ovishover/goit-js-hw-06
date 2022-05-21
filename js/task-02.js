const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const array = [];
for (const item of ingredients) {
  const liItem = document.createElement('li');
  liItem.textContent = item;
  liItem.classList.add('item');
  array.push(liItem);
}

const ulList = document.querySelector('#ingredients');
ulList.append(...array);
