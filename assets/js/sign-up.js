import { usersArray } from "./local-storage.js"

const signUpForm = document.querySelector("#sign-up-form")
const username = document.querySelector("#username")
const usernameDiv = document.querySelector("#username-div")
const email = document.querySelector("#email")
const emailDiv = document.querySelector("#email-div")
const password = document.querySelector("#password")
const passwordDiv = document.querySelector("#password-div")
const passwordConfirmation = document.querySelector("#password-confirmation")
const passwordConfirmationDiv = document.querySelector("#password-confirmation-div")

const usernameAlert = document.createElement("span")
usernameAlert.textContent = "Nome de usuário já cadastrado"
usernameAlert.style.color = "red"

const emailAlert = document.createElement("span")
emailAlert.textContent = "Email já cadastrado"
emailAlert.style.color = "red"

const passwordStrengthAlert = document.createElement("span")
passwordStrengthAlert.textContent = "Senha fraca"
passwordStrengthAlert.style.color = "red"

const passwordConfirmationAlert = document.createElement("span")
passwordConfirmationAlert.textContent = "As senhas inseridas devem ser iguais"
passwordConfirmationAlert.style.color = "red"

let userId = 0
const ALERT_TAG_NAME = "SPAN"

const checkUsername = e => {
    const enteredUsername = e.target.value
    const found = usersArray.some(u => u[1] === enteredUsername)

    if (found) {
        if (!usernameDiv.contains(usernameAlert)) {
            usernameDiv.appendChild(usernameAlert)
        }
    } else if (usernameDiv.contains(usernameAlert)) {
        usernameDiv.removeChild(usernameAlert)
    }
}

const checkEmail = e => {
    const enteredEmail = e.target.value
    const found = usersArray.some(u => u[2] === enteredEmail)

    if (found) {
        if (!emailDiv.contains(emailAlert)) {
            emailDiv.appendChild(emailAlert)
        }
    } else if (emailDiv.contains(emailAlert)) {
        emailDiv.removeChild(emailAlert)
    }

    enteredEmail.length === 0 ? emailDiv.removeChild(emailAlert) : null
}

const checkPasswordStrength = e => {
    const enteredPassword = e.target.value
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/
    if (!regex.test(enteredPassword)) {
        if (!passwordDiv.contains(passwordStrengthAlert)) {
            passwordDiv.appendChild(passwordStrengthAlert)
        }
    } else if (passwordDiv.contains(passwordStrengthAlert)) {
        passwordDiv.removeChild(passwordStrengthAlert)
    }

    enteredPassword.length === 0 ? passwordDiv.removeChild(passwordStrengthAlert) : null
}

const checkPasswordConfirmation = () => {
    const enteredPassword = password.value
    const enteredPasswordConfirmation = passwordConfirmation.value
    if (enteredPassword !== enteredPasswordConfirmation) {
        if (!passwordConfirmationDiv.contains(passwordConfirmationAlert)) {
            passwordConfirmationDiv.appendChild(passwordConfirmationAlert)
        }
    } else if (passwordConfirmationDiv.contains(passwordConfirmationAlert)) {
        passwordConfirmationDiv.removeChild(passwordConfirmationAlert)
    }

    enteredPasswordConfirmation.length === 0 ? passwordConfirmationDiv.removeChild(passwordConfirmationAlert) : null
}

const clearForm = () => {
    username.value = ""
    email.value = ""
    password.value = ""
    passwordConfirmation.value = ""
    username.focus()
}

const signUpUser = e => {
    e.preventDefault()
    const allDivsChildren = [
        ...usernameDiv.children,
        ...emailDiv.children,
        ...passwordDiv.children,
        ...passwordConfirmationDiv.children,
    ]
    const alertPresent = allDivsChildren.some(c => c.tagName === ALERT_TAG_NAME)

    if (alertPresent) {
        alert("Campo(s) não preenchido(s) corretamente")
    } else {
        usersArray.push([userId, username.value, email.value, password.value])
        userId++
        alert("Usuário cadastrado!")
    }
    clearForm()
}

username.addEventListener("input", checkUsername)
email.addEventListener("input", checkEmail)
password.addEventListener("input", checkPasswordStrength)
passwordConfirmation.addEventListener("input", checkPasswordConfirmation)
signUpForm.addEventListener("submit", signUpUser)
