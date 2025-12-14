//when you define any array in TS

let array1: Array<string|boolean> = ["Item1", "Item2", "Item3", true];

let array2: Array<string|boolean>= ["10, 20, 30, 40, 50", ...array1]; 
//Spread operator ...  acts as PARAMS - 

function addition(a:number, b:number, ...nums:number[]){
    let sum = a + b;

    for(let num of nums){
        sum += num;
    }

console.log("Sum: " + sum);
}

addition(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);



//npx tsc -init  generates a tsconfig.json file in your project folder