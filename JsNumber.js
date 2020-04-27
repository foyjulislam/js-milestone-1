// ***   Number.isNaN() method   ***

// The Number.isNaN() method determines whether the passed value is NaN and its type is Number.

const anyNumber = Number.isNaN(12);
console.log(anyNumber);

//  all true number for isNaN

const justNaN = Number.isNaN(NaN); //true
const numToNum1 = Number.isNaN(0 / 0); //true
const numDotNaN = Number.isNaN(100 / NaN); // true
const numDotNaN1 = Number.isNaN((100).NaN); // false
const numToNum2 = Number.isNaN(110 / 0); //false

console.log(justNaN);
console.log(numDotNaN);
console.log(numDotNaN1);
console.log(numToNum1);
console.log(numToNum2);

// false number for isNaN
const strNaN = Number.isNaN('NaN');
const undefinedNaN = Number.isNaN(undefined);
const carlyNaN = Number.isNaN({});
const stringNam = Number.isNaN('any string value');

/** *************************************** */

// ***   Number.parseFloat() method   ***

const piNum = Math.PI;
console.log(piNum);

const myParseFloatFunc = x => {
  if (Number.isNaN(Number.parseFloat(x))) {
    return 0;
  } else {
    return parseFloat(x) * 3.99 * Math.PI;
  }
};
console.log(myParseFloatFunc('4.02089Ajgslvjsh'));

/** *************************************** */

// ***   Number.parseInt() method   ***

const myParseIntFun = (xy, xBase) => {
  if (Number.isNaN(Number.parseInt(xy, xBase))) {
    return 0;
  } else {
    return parseInt(xy, xBase) * 10;
  }
};
console.log(myParseIntFun(' 0xT', 15));

const myParseIntFun1 = (xy, xBase) => {
  const myParseInt = Number.parseInt(xy, xBase);
  if (Number.isNaN(myParseInt)) {
    return 0;
  } else {
    return myParseInt * 50;
  }
};
console.log(myParseIntFun1('232', 15));
