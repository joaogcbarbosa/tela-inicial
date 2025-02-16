import { usersArray } from "./local-storage.js"

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const emailDiv = document.querySelector("#email-div")

const emailAlert = document.createElement("span")
emailAlert.textContent = "Email não cadastrado"
emailAlert.style.color = "red"

const checkEmail = (e) => {
    const enteredEmail = e.target.value
    const found = usersArray.some(u => u[1] === enteredEmail)

    if (!found) {
        if (!emailDiv.contains(emailAlert)) {
            emailDiv.appendChild(emailAlert)
        }
    } else if (emailDiv.contains(emailAlert)) {
        emailDiv.removeChild(emailAlert)
    }

    enteredEmail.length === 0 ? emailDiv.removeChild(emailAlert) : null
}

email.addEventListener("input", checkEmail)
