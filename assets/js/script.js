const email = document.querySelector("#email")
const password = document.querySelector("#password")
const emailDiv = document.querySelector("#email-div")
const users = [[0, "joaogcb29@gmail.com", "123456"]]

const emailAlert = document.createElement("span")
emailAlert.textContent = "Email não cadastrado"
emailAlert.style.color = "red"

const checkEmail = (e) => {
    const emailDigitado = e.target.value
    const emailEncontrado = users.some(u => u[1] === emailDigitado)

    if (!emailEncontrado) {
        if (!emailDiv.contains(emailAlert)) {
            emailDiv.appendChild(emailAlert)
        }
    } else if (emailDiv.contains(emailAlert)) {
        emailDiv.removeChild(emailAlert)
    }
}

email.addEventListener("input", checkEmail)