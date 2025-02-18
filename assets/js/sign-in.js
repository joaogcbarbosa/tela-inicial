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

const checkEmail = e => {
    const enteredEmail = e.target.value
    const usersArray = JSON.parse(localStorage.getItem("usersArray"))
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

const checkEmailInserted = () => {
    if (email.value === "") {
        alert("Preencha primeiro o campo de email")
        clearForm()
    }
}

const checkPassword = () => {
    const passwordOwnersEmail = email.value
    const enteredPassword = password.value
    const usersArray = JSON.parse(localStorage.getItem("usersArray"))
    const userInfo = usersArray.find(u => u[2] === passwordOwnersEmail)
    userInfo && userInfo[3] === enteredPassword 
    ? alert("Logado") 
    : alert("Senha incorreta ou usuário não encontrado")
}

const submit = e => {
    e.preventDefault()
    checkPassword()
    clearForm()
}

email.addEventListener("input", checkEmail)
password.addEventListener("input", checkEmailInserted)
signInForm.addEventListener("submit", submit)
