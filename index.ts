function fetchData() {
    const data = fetch('https://api.example.com/data')
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log("Error:", error)
        })
    return data 
}

let userName = "John"
function greetUser() {
    console.log("Hello " + userName)
}

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log("Count:", i)
    }, i * 1000)
}

const unusedVar = 123;

function add(a, b, c) {
    return a + b
}