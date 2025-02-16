import { usersArray } from "./local-storage.js"

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const emailDiv = document.querySelector("#email-div")
const passwordDiv = document.querySelector("#password-div")

const emailAlert = document.createElement("span")
emailAlert.textContent = "Email não cadastrado"
emailAlert.style.color = "red"

const checkUserInfo = (usersArrayColumn, e) => {
    let infoDiv
    let infoAlert

    switch (usersArrayColumn) {
        case(1):
            infoDiv = emailDiv
            infoAlert = emailAlert
            break
        case(2):
            infoDiv = passwordDiv
            infoAlert = passwordAlert
            break
    }

    const entered = e.target.value
    const found = usersArray.some(u => u[usersArrayColumn] === entered)

    if (!found) {
        if (!infoDiv.contains(infoAlert)) {
            infoDiv.appendChild(infoAlert)
        }
    } else if (infoDiv.contains(infoAlert)) {
        infoDiv.removeChild(infoAlert)
    }

    entered.length === 0 ? infoDiv.removeChild(infoAlert) : null
}

const checkWhichField = e => e.target.id === email.id ? checkUserInfo(1, e) : checkUserInfo(2, e)

email.addEventListener("input", checkWhichField)
password.addEventListener("input", checkWhichField)
