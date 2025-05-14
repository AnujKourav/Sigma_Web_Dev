let random = Math.random();
console.log(random);
let a = prompt("Enter first number ");
let op = prompt("Enter operation ");
let b = prompt("Enter second number ");

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
    "**": "+"
}

if(random > 0.1){
    if(op == '+'){
        alert(a + b);
    }
    else if(op == '-'){
        alert(a - b);
    }
    else if(op == '*'){
        alert(a * b);
    }
    else if(op == '/'){
        alert(a / b);
    }
    else if(op == '**'){
        alert(a ** b);
    }
}
else{
    op = obj[op];
    alert(`the result is ${eval(`${a} ${op} ${b}`)}`)
}