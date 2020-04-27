document.addEventListener('DOMContentLoaded',() => {


//card Options

const cardArray = [
{
  name: 'dino',
  img: 'images/dino.png'
},
{
  name: 'facebook',
  img: 'images/facebook.png'
},
{
  name: 'instagram',
  img: 'images/instagram.png'
},
{
  name: 'heart',
  img: 'images/heart.png'
},
{
  name: 's',
  img: 'images/s.png'
},
{
  name: 'telegram',
  img: 'images/telegram.png'
},
{
  name: 'dino',
  img: 'images/dino.png'
},
{
  name: 'facebook',
  img: 'images/facebook.png'
},
{
  name: 'instagram',
  img: 'images/instagram.png'
},
{
  name: 'heart',
  img: 'images/heart.png'
},
{
  name: 's',
  img: 'images/s.png'
},
{
  name: 'telegram',
  img: 'images/telegram.png'
}
]
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardChosen = []
var cardChosenId = []
var cardsWon = []


// create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src','images/base.jpg')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipCard)
    grid.appendChild(card)
  }

}

cardArray.sort (() => 0.5 - Math.random())


//check for matches
function checkForMatch () {
  var cards = document.querySelectorAll('img')
  const optionOneID = cardChosenId[0]
  const optionTwoID = cardChosenId[1]
  if (cardChosen[0]=== cardChosen [1]) {
    alert('you found a match')
    cards[optionOneID].setAttribute('src','images/blank.png')
    cards[optionTwoID].setAttribute('src','images/blank.png')
    cardsWon.push(cardChosen)
  } else {
    cards[optionOneID].setAttribute('src','images/base.jpg')
    cards[optionTwoID].setAttribute('src','images/base.jpg')
    alert('Sorry Try again')
  }
  cardChosen = []
  cardChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.tectContent = 'Congrats!'
  }


}


//flip your cardA

function flipCard(){
  var cardId = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardChosenId.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if (cardChosen.length === 2){
    setTimeout(checkForMatch,500)
  }
}



createBoard()
})
