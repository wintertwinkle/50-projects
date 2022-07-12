const btn = document.querySelector(".btn")
const toasts = document.querySelector(".toasts")

const messages = [
    "Message one",
    "Message two",
    "Message three",
    "Message four",
    "Message five",
]

let msg_index = 0

btn.addEventListener("click", () =>
    createNotification("This is an invalid data", "error", 3000)
)

function createNotification(message = null, type, delay = 3000) {
    const toast = document.createElement("div")
    toast.classList.add("toast")
    toast.classList.add(type ? type : "")
    message = message ? message : messages[msg_index % messages.length]
    msg_index++
    const text = document.createTextNode(message)
    toast.appendChild(text)
    toasts.appendChild(toast)
    setTimeout(() => {
        toasts.removeChild(toast)
    }, delay)
}
