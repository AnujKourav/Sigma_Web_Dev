console.log("This is Promises")

let prom1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let rand = Math.random();
        if(rand > 0.5){
            console.log("Yes I am done")
            resolve("Harry")
        }
        else{
            reject("Not done")
        }
    }, 3000);
})

prom1.then((a) =>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("this will run no matter what")
})