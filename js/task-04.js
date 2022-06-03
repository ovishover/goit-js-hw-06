const counter = {
  value: 0,
  increment() {
    this.value += 1;
    // console.log(counter.value);
  },
  decrement() {
    this.value -= 1;
    // console.log(counter.value);
  },
};

const incrementBtn = document.querySelector("[data-action='increment']");
const decrementrBtn = document.querySelector("[data-action='decrement']");
const valueNum = document.querySelector('#value');

incrementBtn.addEventListener('click', function () {
  counter.increment();
  valueNum.textContent = counter.value;
});
decrementrBtn.addEventListener('click', function () {
  counter.decrement();
  valueNum.textContent = counter.value;
});
