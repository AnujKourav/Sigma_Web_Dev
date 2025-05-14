console.log("Faulty calculator");

function calc(a, op, b){
    const isFaulty = Math.random() < 0.1;
    const operators = ['+', '-', '*', '/', '**'];
    if (isFaulty) {
        let wrongOps = operators.filter(o => o !== op);
        op = wrongOps[Math.floor(Math.random() * wrongOps.length)];
        console.log("Faulty operation triggered! New operator:", op);
    }
    if(op == '+'){
        return a + b;
    }
    else if(op == '-'){
        return a - b;
    }
    else if(op == '*'){
        return a * b;
    }
    else if(op == '/'){
        return a / b;
    }
    else if(op == '**'){
        return a ** b;
    }
}

console.log(calc(3 ,'+', 4));
console.log(calc(3 ,'-', 4));
console.log(calc(3 ,'/', 4));
console.log(calc(3 ,'*', 4));
console.log(calc(3 ,'**', 4));
console.log(calc(3 ,'+', 4));
console.log(calc(3 ,'-', 4));
console.log(calc(3 ,'/', 4));
console.log(calc(3 ,'*', 4));
console.log(calc(3 ,'**', 4));
console.log(calc(3 ,'+', 4));
console.log(calc(3 ,'-', 4));
console.log(calc(3 ,'/', 4));
console.log(calc(3 ,'*', 4));
console.log(calc(3 ,'**', 4));
