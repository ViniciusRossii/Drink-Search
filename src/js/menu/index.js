sessionStorage.clear() // Limpar sessionStorage assim que usuário entrar na página.

// Variáveis

const searchBox = document.getElementById('search-text')

var searchText

// Event Listener

searchBox.addEventListener('keydown', (event) => { // Realizar a pesquisa quando a tecla enter for pressionada.
    searchText = searchBox.value
    if (event.key == "Enter") {
        getData()
    }
})

searchBox.addEventListener('mouseout', () => { // Limpar input text quando o mouse for retirado
    searchBox.value = ""
    searchBox.blur()
})

// Funções

setTimeout(() => {searchBox.value = ""}, 1) // Correção de bug caso retorne a página.

function getData() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`) // Request
        .then(request => request.json())
        .then(request => {
            console.log(request)
            if (request.drinks == null) { // Verificação
                alert('That drink was not found.')
                return
            }
            sessionStorage.setItem('drinkData', JSON.stringify(request)) // Gerar bebidas
            for (var c = 0; c < request.drinks.length; c++) {
                sessionStorage.setItem(c, request.drinks[c].strDrink)
            }
            window.location.href = 'list.html'
        })
}