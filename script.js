// Selecting elements
const button = document.getElementById("fetchData");
const output = document.getElementById("output");

// Fetch API Example
button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            output.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
        })
        .catch(error => {
            output.textContent = `Error: ${error.message}`;
        });
});
