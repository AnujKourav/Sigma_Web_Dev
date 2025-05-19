// console.log("Object Oriented Programming")


// let obj = {
//     a:1,
//     b:"Anuj"
// }

// console.log(obj)

// let animal = {
//     eats : true
// }
// let rabbit= {
//     jumps : true
// }

// rabbit.__proto__ = animal;

// console.log(rabbit)

// console.log(rabbit.eats)


class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created");
    }
    eats(){
        console.log("Kha raha hoon")
    }
    jump(){
        console.log("kood raha hoon")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name) //calling the constructor of parent class
        console.log("Object is Created and he is a lion")
    }
    eats(){ //methor overriding
        console.log("Kha raha hoon and roar")
    }
}

let a = new Animal("Bunny");
console.log(a);
console.log(a.eats())
console.log(a.name)

let l = new Lion("Shera");
console.log(l)
console.log(l.name)
console.log(l.eats())
