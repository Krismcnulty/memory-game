document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'wolverine',
        img: 'images/wolverine.png'
      },
      {
        name: 'wolverine',
        img: 'images/wolverine.png'
      },
      {
        name: 'hulk',
        img: 'images/hulk.png'
      },
      {
        name: 'hulk',
        img: 'images/hlk.png'
      },
      {
        name: 'thor',
        img: 'images/thor.png'
      },
      {
        name: 'thor',
        img: 'images/thor.png'
      },
      {
        name: 'daredevil',
        img: 'images/daredevil.png'
      },
      {
        name: 'daredevil',
        img: 'images/daredevil.png'
      },
      {
        name: 'spider-man',
        img: 'images/spider-man.png'
      },
      {
        name: 'spider-man',
        img: 'images/spider-man.png'
      },
      {
        name: 'captain america',
        img: 'images/captain america.png'
      },
      {
        name: 'captain america',
        img: 'images/captain america.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/avengers.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/avengers.png')
        cards[optionTwoId].setAttribute('src', 'images/avengers.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/wham.png')
        cards[optionTwoId].setAttribute('src', 'images/wham.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/avengers.png')
        cards[optionTwoId].setAttribute('src', 'images/avengers.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
    
    


