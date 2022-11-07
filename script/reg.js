let form = document.forms.form

form.onsubmit = (e) => {
    e.preventDeault()
}

let log = document.querySelector('.log')

log.onclick = () => {
    window.location = '../index.html'
}