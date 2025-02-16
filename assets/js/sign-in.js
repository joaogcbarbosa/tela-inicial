const email = document.querySelector("#email")
const password = document.querySelector("#password")
const emailDiv = document.querySelector("#email-div")
const passwordDiv = document.querySelector("#password-div")
const usersArray = [[0, "joaogcb29@gmail.com", "123456"]]

const emailAlert = document.createElement("span")
emailAlert.textContent = "Email não cadastrado"
emailAlert.style.color = "red"

const passwordAlert = document.createElement("span")
passwordAlert.textContent = "Senha incorreta"
passwordAlert.style.color = "red"

const checkUserInfo = (usersArrayColumn, e) => {
    let infoDiv
    let infoAlert
    if (usersArrayColumn === 1) {
        infoDiv = emailDiv
        infoAlert = emailAlert
    } else {
        infoDiv = passwordDiv
        infoAlert = passwordAlert
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
}

const checkWhichField = e => e.target.id === email.id ? checkUserInfo(1, e) : checkUserInfo(2, e)

email.addEventListener("input", checkWhichField)
password.addEventListener("input", checkWhichField)
