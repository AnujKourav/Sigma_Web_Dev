let a = prompt("Enter the number");
let ans = 1;
function fact(a){
    if(a <= 1)return ans;
    if(a > 1){
        return a * fact(a-1);
    }
}
ans = fact(a);

alert(`factorial of a ${a} is ${ans}`);