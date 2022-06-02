const countCatagory = document.querySelectorAll('.item');
console.log(`Number of categories: ${countCatagory.length}`);

// for (const item of countCatagory) {
//   console.log(`Categore: ${item.firstElementChild.textContent}`);
//   const countItems = item.querySelectorAll('li');
//   console.log(`Elements: ${countItems.length}`);
// }

countCatagory.forEach(item => {
  console.log(`Categore: ${item.firstElementChild.textContent}`);
  const countItems = item.querySelectorAll('li');
  console.log(`Elements: ${countItems.length}`);
});
