"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class Store<myType>{ //Using custom type
class Store {
    //Generics: T can be any type. Generics allow me to create reusable components. Created without assigning a specific data type.
    //  private list: Array<T>; //More traditional way of defining array of generics
    list; //Array of generics
    constructor() {
        this.list = [];
    }
    additemsinStore(item) {
        this.list.push(item);
        console.log("Item added: " + item);
    }
    removeItemsFromStore() {
        this.list.shift();
        console.log("Item removed from store");
    }
    displayAllItems() {
        //Foreach Loop
        for (let item of this.list) {
            console.log("Item: " + item);
        }
        //For loop
        // for(let i in this.list){
        //     console.log("Item in for loop "  + this.list[i]);
        // }
    }
}
let storeObj = new Store();
storeObj.additemsinStore("Item1");
storeObj.additemsinStore("Item2");
storeObj.additemsinStore("Item3");
storeObj.removeItemsFromStore();
storeObj.displayAllItems();
//# sourceMappingURL=store.js.map