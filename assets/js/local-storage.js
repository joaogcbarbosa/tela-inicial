document.addEventListener("DOMContentLoaded", () => {
    let usersArray = localStorage.getItem("usersArray")
    if (!usersArray || usersArray === "null" || usersArray === "undefined") {
        localStorage.setItem("usersArray", JSON.stringify([]))
    }
})