let btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    alert("I was clicked. Yayy!!");
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!!";
})