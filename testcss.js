let style = document.createElement('style')

let textarea = document.createElement('textarea')

textarea.style.position = 'absolute'
textarea.style.left = '0px'
textarea.style.top = '0px'
textarea.style.zIndex = '99'

textarea.oninput = (e) => {
    style.innerHTML = textarea.value
}

document.head.appendChild(style)

document.body.appendChild(textarea)
