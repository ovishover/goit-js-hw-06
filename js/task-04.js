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
const myCounter = new CounterPlugin({ stepCounter: 100 });

myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();

console.log(myCounter);
