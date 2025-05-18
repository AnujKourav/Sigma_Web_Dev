async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455);
        }, 4000);
    })
}

async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load Data")

    let data = await getData();

    console.log(data)

    console.log("Process data")

    console.log("task 2")
}

main()