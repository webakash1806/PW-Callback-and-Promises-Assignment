async function getData() {
    let [data1, data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
            response.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
            response.json())
    ])

    let combData = {
        todo: data1,
        post: data2
    }
    return combData
}

getData().then((data) =>
    console.log(data))