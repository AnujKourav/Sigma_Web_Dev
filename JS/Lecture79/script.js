let a = prompt("Enter first number")

let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Invalid Number")
}
else{
    let sum = parseInt(a) + parseInt(b);
    alert("Sum is : " + sum)
}
try {
    // in set time out the below catch script won't work
    // setTimeout(()=>{
    //     console.log(sum * x)
    // } , 1000)

    console.log(sum * x)
} catch (error) {
    console.log(error.message)
}

// finally{
//  it works everytime but it is mainly used in functions
// where we have to return something 
// because after return statement the below statment in the function will not work so then we can use finally there
// }