fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Response) => Response.json())
    .then((data) => console.log(data)
        .catch((error) => console.error(error)))