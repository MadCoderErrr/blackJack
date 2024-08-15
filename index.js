// javascript

let sum = 0
let cards = []

let hasBlackJack = false
let isAlive = false

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

let message = ""

let player = {
    name: "Navia",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >= 11) {
        return 10
    } else {
        return randomNumber
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack!"
            hasBlackJack = true
        } else {
            message = "You're out of the game!"
            isAlive = false
        }
        messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        cards.push(thirdCard)
        sum += thirdCard
        renderGame()
    }
}