if(('serviceWorker' in navigator && "Worker" in window) === false) {
    alert("Tu vas me faire le plaisir de mettre à jour ton navigateur ! Sinon, je te brise")
    return
}

navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("SW registered"))

const fetchWorker = new Worker('./workers/fetch.js');
const button = document.querySelector("button")

button.onclick = function () {
    fetchWorker.postMessage(["foo", "bar"])
}

fetchWorker.onmessage = function(message) {
    console.log("--> ", message.data)

    message.data.forEach(user => {
        const p = document.createElement("p")
        p.textContent = user.name
        document.body.appendChild(p)
    })
}
