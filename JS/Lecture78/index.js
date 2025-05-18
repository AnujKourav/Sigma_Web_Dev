console.log("Hacker's Terminal")


async function hack(){
    let rand = Math.random();
    let prom1 = await new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.writeln("Initializing Hacking...<br>")
            resolve();
        }, rand * 6 * 1000);
    })
    rand = Math.random();
    let prom2 = await new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.writeln("Reading your Files...<br>")
            resolve();
        }, rand * 6 * 1000);
    })
    rand = Math.random();
    let prom3 = await new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.writeln("Password files Detected...<br>")
            resolve();
        }, rand * 6 * 1000);
    })
    rand = Math.random();
    let prom4 = await new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.writeln("Sending all passwords and personal files to server...<br>")
            resolve();
        }, rand * 6 * 1000);
    })
    rand = Math.random();
    let prom5 = await new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.writeln("Cleaning up...<br>")
            resolve();
        }, rand * 6 * 1000);
    })

    document.writeln("✅ Hack Completed!");
}

hack()