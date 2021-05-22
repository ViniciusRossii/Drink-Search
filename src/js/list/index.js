if (sessionStorage.length == 0) {
    window.location.href = 'index.html' // Impedir do usuário voltar na lista caso o sessionStorage esteja vazio.
}

// Variáveis

const ul = document.getElementById('list')

// Loops

for (var c = 0; c < sessionStorage.length; c++) { // Criando lista de drinks
    if (sessionStorage.getItem(c) == null) {
        break
    }
    const li = document.createElement('li')
    li.innerHTML = sessionStorage.getItem(c)
    li.setAttribute('data-id', c)
    ul.appendChild(li)
}

for (var c = 0; c < document.getElementsByTagName('li').length; c++) { // Corrigindo o tamanho das 'li's
    document.getElementsByTagName('li')[c].style.width = 0 + '%'
}

for (var c = 0; c < document.getElementsByTagName('li').length; c++) {
    document.getElementsByTagName('li')[c].addEventListener('click', (event) => {
        sessionStorage.setItem('drinkNumber', event.target.getAttribute('data-id'))
        window.location.href = "instructions.html"
    })
}

// Eventos

document.getElementById('return').addEventListener('click', () => {
    window.location.href = "https://viniciusrossii.github.io/Drink-Search/"
})