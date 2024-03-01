const form = document.getElementById('form')
const formName = document.getElementById('name')
const formEmail = document.getElementById('email')
const formMessage = document.getElementById('message')

form.addEventListener('submit', e => {
    e.preventDefault()

    validateInputs()
})

const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValidEmail = formEmail => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(formEmail).toLowerCase())
}

const validateInputs = () => {
    const formNameValue = formName.value.trim()
    const formEmailValue = formEmail.value.trim()
    const formMessageValue = formMessage.value.trim()

    if(formNameValue === '') {
        setError(formName, 'Veuillez renseigner votre nom !')
    } else {
        setSuccess(formName)
    }

    if(formEmailValue === '') {
        setError(formEmail, 'Veuillez renseigner votre email !')
    }  else if (!isValidEmail(formEmailValue)) {
        setError(formEmail, 'Votre adresse mail est invalide !')
    } else {
        setSuccess(formEmail)
    }

    if(formMessageValue === '') {
        setError(formMessage, 'Veuillez écrire votre message !')
    } else {
        setSuccess(formMessage)
    }
}
