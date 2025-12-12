var x = 10;
var str = "Hello, TypeScript!";
var isValid = true;
var avl = "Can be any type";
avl = 10;
var unk = "Unknown type";
unk = 20;
//unknown datatype can be assigned to only unknown datatype ONLY
// any datatype can be assigned to any datatype
console.log(x);
console.log(str);
console.log(isValid);
var x1 = 20;
var y1 = 200;
if (true) {
    var x1_1 = 30; //block scope
    var y1 = 300; //function or global scope
    console.log(x1_1); //30
    console.log(y1); //300
}
console.log(x1); //20
console.log(y1); //300
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Outside loop: " + i); //5
for (var j = 0; j < 5; j++) {
    console.log(j);
}
//console.log("Outside loop: " + j); //Error: j is not defined
//Hoisting in JS
console.log(a); //undefined
var a = 10;
//console.log(b); //Error: b is not defined
var b = 20;
// To run the above code I need a TypeScript compiler
//To download TypeScript compiler use the following command in terminal - I need NodeJS
//What is NodeJS ? - NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine.
//  It allows developers to run JavaScript code outside of a web browser, enabling server-side scripting and the
//  development of scalable network applications.
//  - cross-platform runtime environment for executing JavaScript code
//- Nodejs provides a tool called npm (Node Package Manager) to manage libraries and packages for your projects.
//Similar to IIS server you can use NodeJS to create/host your JavaScript applications on your local machine or on a server.
// What is npm ? - npm (Node Package Manager) is a package manager for JavaScript programming language. it is a command 
//line tool that helps developers to install, share, and manage libraries and packages for their JavaScript projects. -- In a simple way
// allows you to download and install reusable code modules from an online repository to use in your own projects. ex: jquery, react, express etc
//- It resolves interdependencies between packages and ensures that the correct versions are installed.
//Install NodeJS on your machine from https://nodejs.org/
// run npm install typescript  -- this will install the TypeScript compiler  on your machine
//npx tsc  -- this will compile the TypeScript code to JavaScript code
// Save the file
//npx tsc firstsample.ts  -- this will compile only firstsample.ts file
//node firstsample.js  -- this will run the generated JavaScript code using NodeJS runtime
