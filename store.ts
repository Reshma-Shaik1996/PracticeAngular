type myType = number | string; //Custom Type using type aliasing
//class Store<myType>{ //Using custom type

class Store<T>{

    //Generics: T can be any type. Generics allow me to create reusable components. Created without assigning a specific data type.
      //  private list: Array<T>; //More traditional way of defining array of generics

    private list: T[] ; //Array of generics

    constructor(){
        this.list = [];
    }
additemsinStore(item: T): void{
    this.list.push(item);   
    console.log("Item added: " + item);
}

removeItemsFromStore():void{
    this.list.shift();
    console.log("Item removed from store");
}

displayAllItems(): void{

    //Foreach Loop
    for(let item of this.list){
        console.log("Item: " + item);
    }

    //For loop
    // for(let i in this.list){
    //     console.log("Item in for loop "  + this.list[i]);
    // }
}

}

let storeObj = new Store<string>();

storeObj.additemsinStore("Item1");
storeObj.additemsinStore("Item2");
storeObj.additemsinStore("Item3");

storeObj.removeItemsFromStore();

storeObj.displayAllItems();