fetch("https://jsonplaceholder.typicode.com/posts/123456789")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network Response was not ok")
        }
        return response.json()
    })