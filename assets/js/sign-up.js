import { usersArray } from "./local-storage.js"

const signUpForm = document.querySelector("#sign-up-form")
const username = document.querySelector("#username")
const usernameDiv = document.querySelector("#username-div")
const email = document.querySelector("#email")
const emailDiv = document.querySelector("#email-div")
const password = document.querySelector("#password")
const passwordDiv = document.querySelector("#password-div")
const passwordConfirmation = document.querySelector("#password-confirmation")

const usernameAlert = document.createElement("span")
usernameAlert.textContent = "Nome de usuário já cadastrado"
usernameAlert.style.color = "red"

const emailAlert = document.createElement("span")
emailAlert.textContent = "Email já cadastrado"
emailAlert.style.color = "red"

const passwordStrengthAlert = document.createElement("span")
passwordStrengthAlert.textContent = "Senha fraca"
passwordStrengthAlert.style.color = "red"

const checkUsername = (e) => {
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

const checkEmail = (e) => {
    const enteredEmail = e.target.value
    const found = usersArray.some(u => u[2] === enteredEmail)

    if (found) {
        if (!emailDiv.contains(emailAlert)) {
            emailDiv.appendChild(emailAlert)
        }
    } else if (emailDiv.contains(emailAlert)) {
        emailDiv.removeChild(emailAlert)
    }
}

const checkPasswordStrength = (e) => {
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
    const enteredPassword = passwordConfirmation.value
}

const clearForm = () => {
    username.value = ""
    email.value = ""
    password.value = ""
    passwordConfirmation.value = ""
    username.focus()
}

// TODO: generic functios for both checkings
username.addEventListener("input", checkUsername)
email.addEventListener("input", checkEmail)
password.addEventListener("input", checkPasswordStrength)
passwordConfirmation.addEventListener("input", checkPasswordConfirmation)
signUpForm.addEventListener("submit", clearForm)
