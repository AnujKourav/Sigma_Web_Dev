console.log("Getter & Setter")

class User{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        if(newName.length< 4){
            console.log("Name is too short")
            return;
        }
        this._name = newName;
    }
}

let user = new User("John"); //constructor eill be called and name is set to john
console.log(user.name); //get method will be called

user.name = "Anuj"; // calls setter
console.log(user)