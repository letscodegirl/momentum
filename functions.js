const calculator = {
  add: function (a, b) {
    return a + b; //function finishes its job
  },

  sub: function (a, b) {
    return a - b;
  },

  div: function (a, b) {
    return a / b;
  },

  multi: function (a, b) {
    return a * b;
  },

  power: function (a, b) {
    return a ** b;
  }

};

const addResult = calculator.add(4, 3);
const subResult = calculator.sub(addResult, 10);
const divResult = calculator.div(10, subResult);
const multiResult = calculator.multi(divResult, addResult);
const powerResult = calculator.power(divResult, subResult);

console.log(addResult);

//most of the time we dont want to console log
//function 외부에서 value 제공받기(망고주스)