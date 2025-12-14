"use strict";
//when you define any array in TS
Object.defineProperty(exports, "__esModule", { value: true });
let array1 = ["Item1", "Item2", "Item3", true];
let array2 = ["10, 20, 30, 40, 50", ...array1];
//Spread operator ...  acts as PARAMS - 
function addition(a, b, ...nums) {
    let sum = a + b;
    for (let num of nums) {
        sum += num;
    }
    console.log("Sum: " + sum);
}
addition(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
//# sourceMappingURL=list.js.map