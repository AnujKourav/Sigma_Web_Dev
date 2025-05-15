
let random = Math.random();
let first, second , third;

if(random< 0.33){
    first = "Fire";
}
else if(random >= 0.33 && random < 0.66){
    first = "Crazy";
}
else{
    first = "Amazing";
}

random = Math.random();
if(random< 0.33){
    second = "Engine";
}
else if(random >= 0.33 && random < 0.66){
    second = "foods";
}
else{
    second = "garments";
}

random = Math.random();
if(random< 0.33){
    third = "Bros";
}
else if(random >= 0.33 && random < 0.66){
    third = "limited";
}
else{
    third = "hub";
}

document.writeln(first + second + third);