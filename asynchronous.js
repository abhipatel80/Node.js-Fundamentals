// Async/await is introdiuced in ES6 in JavaScript, making asynchronous code look more like synchronous code, which is easier to read and understand. It is built on top of promises. 
// Async/await is widely used in modern JavaScript development because of its readability and ease of use.

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

console.log(10);
fetchData("https://jsonplaceholder.typicode.com/todos");
console.log(30);

// its called asynchronous nature of js

// javascript is not blocking. so, its give first output of 10 and 30 because api data take time to load

// => output 10, 30, allApiData 
