const drinkNumber = sessionStorage.getItem('drinkNumber')

if (drinkNumber == null) {
    window.location.href = 'index.html'
}

// Variáveis

const drinkInformation = JSON.parse(sessionStorage.getItem('drinkData')).drinks
const drinkNameTitle = document.getElementById('drink-name')
const drinkImage = document.getElementById('drink-image')
const instructions = document.getElementById('instructions')
const tbody = document.getElementById('tbody')

// Loops

function generateData() {
    drinkNameTitle.innerHTML = drinkInformation[drinkNumber].strDrink
    drinkImage.src = drinkInformation[drinkNumber].strDrinkThumb
    instructions.innerHTML = drinkInformation[drinkNumber].strInstructions
    for (var c = 1; drinkInformation[drinkNumber][`strIngredient${c}`] != null; c++) {
        if (drinkInformation[drinkNumber][`strIngredient${c}`].length == 0) break
        const row = document.createElement('tr')
        const tdName = document.createElement('td')
        const tdMeasure = document.createElement('td')
        tdName.innerHTML = drinkInformation[drinkNumber][`strIngredient${c}`]
        tdMeasure.innerHTML = drinkInformation[drinkNumber][`strMeasure${c}`]
        if (tdMeasure.innerHTML == '') tdMeasure.innerHTML = "Measure to taste"
        row.appendChild(tdName)
        row.appendChild(tdMeasure)
        tbody.appendChild(row)
    }
}

// Eventos

document.getElementById('return').addEventListener('click', () => {
    window.location.href = "https://viniciusrossii.github.io/Drink-Search/list.html"
})

generateData()