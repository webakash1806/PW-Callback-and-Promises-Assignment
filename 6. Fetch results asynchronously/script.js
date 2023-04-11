async function fetData() {
    let resp = await
        fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await resp.json()
    console.log(data)
}

fetData()