//Classes, constructor overloading, Inheritance

class person{
     personId: number;
     personName: string | undefined; // This is union type taking multiple data types

     constructor();
     constructor(id: number, name: string);
   
//Constructor overloading using optional parameters
//? allows me to use either number Type or undefined type
constructor(id?: number, name?: string){

    if(id != undefined ){
    this.personId = id;
    this.personName = name;
   // this.personName = name ?? ""; //Nullish coalescing operator
   //what is nullish coalescing operator ?? - It is used to provide a default value when dealing with null or undefined values.

    console.log("Constructor with parameters called");
}
    else{
         console.log("Default constructor called");
    }
}
        //Method to show person details
        showDetails(name?:string): void{
            console.log("Person ID: " + this.personId);
            console.log("Person Name: " + this.personName);
        }

        
}
 let p1 = new person(1, "John Doe");
    p1.showDetails();
    p1.showDetails("Optional Name");
    

//Inheritance


class Employee extends person{
 
    empId:string;

constructor(){
    super(); //Calling the base class constructor
    this.empId = "E001";
    console.log("Employee default constructor called");
}


}

let empObj = new Employee();

empObj.personId = 101;
empObj.personName = "Jane S";
empObj.showDetails();





//Protected access modifier - Members declared as protected are accessible within the class and its subclasses, but not from outside the class hierarchy.
//By default all the members of a class are public
//by deafult if you do not give return type to a function it is considered as void

//Overloading- Creating multiple methods with the same name but different parameters
//constructor overloading is not allowed in TypeScript
//In TS you can declare mutliple constructor signatures but only one implementation. you cannot have multiple constructor implementations.
//You can achieve constructor overloading using optional parameters or union types.

//Inheritance - Creating a new class based on an existing class
//Inheritance in Ts is achieved using the 'extends' keyword. super() is used to call the constructor of the base class.