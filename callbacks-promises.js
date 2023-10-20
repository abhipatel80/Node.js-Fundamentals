// In JavaScript, callbacks and promises are two common techniques used for handling asynchronous operations. They help you manage operations that may take some time to complete, such as reading a file, making an HTTP request, or querying a database. These techniques are especially important for preventing blocking behavior in single-threaded JavaScript.

// ----------------------------------callbacks----------------------------------
// Callbacks are a way to handle asynchronous operations in JavaScript. A callback is a function that is passed as an argument to another function and is executed after the completion of that function.
function fetchData(data, callback) {
    setTimeout(() => {
        callback(data);
    }, 1000);
}

fetchData("Hello Abhi", (data) => {
    console.log(data);
});

// ----------------------------------promises----------------------------------
// Promises were introduced to simplify working with asynchronous operations and to avoid callback hell.

const getData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
            // reject(new Error("Failed to fetch data")); 
        }, 1000);
    });
}

getData("Hello Abhi")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

// ----------------------------------call multiple promises----------------------------------
const first = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First");
        }, 2000);
    });
};

const second = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second");
        }, 1000);
    });
};

const third = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Third");
        }, 3000);
    });
};

// if promise rejected than its stop execute other promises
let all = Promise.all([first, second, third]);

// if promise rejected than also its run all promises
all = Promise.allSettled([first, second, third]);

// its run that promise which have less time to resolve and if promise rejected than its stop execute other promises
all = Promise.race([first, second, third]);

// its run that promise which have less time to resolve and if promise rejected than also its skip that one rejected promise and moved to another one
all = Promise.any([first, second, third]);

all.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(err);
})
