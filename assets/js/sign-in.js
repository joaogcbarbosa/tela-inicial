const email = document.querySelector("#email")
const password = document.querySelector("#password")
const emailDiv = document.querySelector("#email-div")
const passwordDiv = document.querySelector("#password-div")
const users = [[0, "joaogcb29@gmail.com", "123456"]]

const emailAlert = document.createElement("span")
emailAlert.textContent = "Email não cadastrado"
emailAlert.style.color = "red"

const passwordAlert = document.createElement("span")
passwordAlert.textContent = "Senha incorreta"
passwordAlert.style.color = "red"

const checkEmail = (e) => {
    const emailAddress = e.target.value
    const emailFound = users.some(u => u[1] === emailAddress)

    if (!emailFound) {
        if (!emailDiv.contains(emailAlert)) {
            emailDiv.appendChild(emailAlert)
        }
    } else if (emailDiv.contains(emailAlert)) {
        emailDiv.removeChild(emailAlert)
    }
}

const checkPassword = (e) => {
    const enteredPasswd = e.target.value
    const passwdFound = users.some(u => u[2] === enteredPasswd)
    if (!passwdFound) {
        if (!passwordDiv.contains(passwordAlert)) {
            passwordDiv.appendChild(passwordAlert)
        }
    } else if (passwordDiv.contains(passwordAlert)) {
        passwordDiv.removeChild(passwordAlert)
    }
}

email.addEventListener("input", checkEmail)
password.addEventListener("input", checkPassword)
