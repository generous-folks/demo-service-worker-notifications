self.onmessage = function (msg) {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            response.json()
                .then(self.postMessage)
                .catch(e => console.log("merde", e))    
        .catch((e) => {
            self.postMessage(e)
        })
    })
}
