const incrBtn = document.querySelector("[data-action='increment']");
const decrBtn = document.querySelector("[data-action='decrement']");
const valueNum = document.querySelector('#value');
valueNum.textContent = 0;
incrBtn.addEventListener('click', () => {
  valueNum.textContent = new Number(valueNum.textContent) + 1;
});
decrBtn.addEventListener('click', () => {
  valueNum.textContent = new Number(valueNum.textContent) - 1;
});
