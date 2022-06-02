const CounterPlugin = function ({ startValue = 0, stepCounter = 1 } = {}) {
  this._value = startValue;
  this._step = stepCounter;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};
// const myCounter = new CounterPlugin({ stepCounter: 100 });

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
