class Person {
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log("hello I'm " + this.name)
    }
    

}

class Programmer extends Person{
    constructor(name,language){
        super(name);
        this.language = language
    }
    greet(){
        super.greet()
        console.log("I like " + this.language);
    }
}

// var bob = new Programmer("Bob","Javascript");
// bob.greet();
// console.log(bob.name)

var tom = new Person("Tom");
console.log(tom.name)
tom.greet()