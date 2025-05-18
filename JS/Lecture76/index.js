console.log("1")

function func(){
    console.log("2")
}

setTimeout(func, 4000);

console.log("3")

setTimeout(() => {
    alert("4")
}, 2000);