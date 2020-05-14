function showMessage(callback) {
    setTimeout(() => {
        console.log("This is first line");
        callback();
        // will be called when the task will be finished
    }, 3000);

}

function Demo1(callback) {
    setTimeout(() => {
        console.log("this is second line");
        callback();
    }, 4000)
}

function Demo2(callback) {
    setTimeout(() => {
        console.log("this is third line");
        callback();
    }, 5000)
}

function Demo3(callback) {
    setTimeout(() => {
        console.log("this is fourth line");
        callback();
    }, 6000)
}

function Demo4(callback) {
    setTimeout(() => {
        console.log("this is fifth line");
        callback();
    }, 7000)
}

function demo() {
    showMessage(function () {
        Demo1(function () {
            Demo2(function () {
                Demo3(function () {
                    Demo4(function () {

                    })
                })
            })
        })
    })

}

demo();
