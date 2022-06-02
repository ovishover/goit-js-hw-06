const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('#ingredients');

// const array = [];
// for (const item of ingredients) {
//   const liItem = document.createElement('li');
//   liItem.textContent = item;
//   liItem.classList.add('item');
//   array.push(liItem);
// }

// ulList.append(...array);

// const array = [];
// ingredients.forEach(function (ingredient) {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item");
//   array.push(listItem);
// });
// const list = document.querySelector("#ingredients");
// list.append(...array);

const result = ingredients.map(e => {
  const ads = document.createElement('li');
  ads.textContent = e;
  ads.classList.add('item');
  return ads;
});
ulList.append(...result);
