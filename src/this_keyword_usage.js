'use strict';

console.log(this); // global this

const calcAge = function (birthYear) {
  console.log(this); // undefined in strict mode, global object in non-strict mode
  return 2025 - birthYear;
}

console.log(calcAge(1991));

// ===========================================

const calcAgeArrow = (birthYear) => {
  console.log(this); // this is lexically bound, undefined in strict mode, and global object in non-strict mode
  return 2025 - birthYear;
}
console.log(calcAgeArrow(1991));


// =========================================

// using object method
const Rama = {
    year: 2025,
    calcAge: function (birthYear) {
        console.log(this); // 'this' refers to the 'name' object as we calling this method with 'Rama' object
        // 'this' refers to the object that calls the method, in this case, 'Rama'
        // In strict mode, 'this' will be undefined if the function is called without an object context.
        // In non-strict mode, 'this' will refer to the global object.
        return this.year - birthYear;
    }
}

console.log(Rama.calcAge(1991)); // 34
// =========================================
const RamaArrow = {
    year: 2025,
    calcAge: (birthYear) => {
        console.log(this); // 'this' refers to the global object, not the 'RamaArrow' object
        return this.year - birthYear; // this.year is undefined as we are using an arrow function in strict mode.
    }
}
console.log(RamaArrow.calcAge(1991)); // NaN, because this.year is undefined

