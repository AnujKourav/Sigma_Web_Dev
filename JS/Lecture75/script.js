
let div = document.createElement("div")
div.className = "alert"
div.innerHTML = "<p>Hello I am Created</p>"
document.body.append(div)
let id = document.getElementsByClassName("alert")


function func(){
    let d1 = document.querySelector(".container");
    d1.innerHTML = "<b>Hello i am changed</b>"
    alert("I am changed")
    console.log("changed")
}

// func()
// function 


let cont = document.createElement("div")
cont.className = "container"
cont.innerHTML = "<h1>Hey I am a box</h1>"
document.body.append(cont)
let change = document.getElementsByClassName("container")
cont.addEventListener("click", func);
    
//     () => {
//     alert("I am changed")
//     console.log("changed")
// })