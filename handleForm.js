const errorField = document.querySelector('.error-msg')
const usernameField = document.querySelector('#username')
const emailField = document.querySelector('#email')
const passwordField = document.querySelector('#password')
const gradeField = document.querySelector('#grade')
const modal = document.querySelector('dialog')
const resultsField = document.querySelector('.results')

function submitForm(event) {
	event.preventDefault()

	let errorMsg = ''

	if (!usernameField.value) {
		errorMsg += ' Invalid username.'
	}

	if (!emailField.value) {
		errorMsg += ' Invalid email.'
	}

	if (!passwordField.value || passwordField.value != 'sas17') {
		errorMsg += ' Invalid password.'
	}

	if (!gradeField.value || gradeField.value < 0 || gradeField.value > 100) {
		errorMsg += ' Invalid grade.'
	}

	if (errorMsg) {
		errorField.innerText = errorMsg.trim()
		return
	}

	errorMsg = ''
	errorField.innerText = errorMsg

	modal.showModal()
	resultsField.innerText = gradeField.value < 50 ? 'Failed' : 'Passed'
}

modal.addEventListener('click', (event) => {
	event.target === modal ? modal.close() : null
})