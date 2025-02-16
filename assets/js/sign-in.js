import { usersArray } from "./local-storage.js"

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const emailDiv = document.querySelector("#email-div")
const signInForm = document.querySelector("#sign-in-form")

const emailAlert = document.createElement("span")
emailAlert.textContent = "Email não cadastrado"
emailAlert.style.color = "red"

const clearForm = () => {
    email.value = ""
    password.value = ""
    email.focus()
}

const checkEmail = (e) => {
    const enteredEmail = e.target.value
    const found = usersArray.some(u => u[2] === enteredEmail)

    if (!found) {
        if (!emailDiv.contains(emailAlert)) {
            emailDiv.appendChild(emailAlert)
        }
    } else if (emailDiv.contains(emailAlert)) {
        emailDiv.removeChild(emailAlert)
    }

    enteredEmail.length === 0 ? emailDiv.removeChild(emailAlert) : null
}

const checkPassword = (e) => {
    e.preventDefault()
    const enteredPassword = password.value
    const found = usersArray.some(u => u[3] === enteredPassword)
    found ? alert("Logado") : alert("Senha incorreta")
    clearForm()
}

// TODO: try to use querySelectorAll so as to not use div for email
email.addEventListener("input", checkEmail)
signInForm.addEventListener("submit", checkPassword)
