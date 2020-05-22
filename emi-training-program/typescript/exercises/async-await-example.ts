async function doubleAfter2Seconds(x: number): Promise<number> {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Doubling ${x}`);
            resolve(x * 2);
        }, 2000);
    });
}

async function add(x: number): Promise<number> {
    try {
        let a = await doubleAfter2Seconds(10);
        let b = await doubleAfter2Seconds(a); // can even use 'a' here
        let c = await doubleAfter2Seconds(30);
        return (x + a + b + c);
    }
    catch (err) {
        console.log(err);
    }
}

add(10).then(resolve => {
    console.log(`Result: ${ resolve }`)
});
