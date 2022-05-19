const categList = document.querySelectorAll('li.item');
console.log(categList);

const ulList = document.querySelectorAll('.item ul');
for (const liItem of ulList) {
  liItem.classList.add('itemsList');
}
console.log(ulList);
