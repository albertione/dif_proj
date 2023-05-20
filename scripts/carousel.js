let pos = 2
let cards = document.querySelectorAll('.card')

resetCards()

function resetCards(){
    if(document.body.contains(document.querySelector('.focus'))){
        document.querySelector('.focus').classList.remove('focus')
    }

    if(document.body.contains(document.querySelector('.reveal-right'))){
        document.querySelector('.reveal-right').classList.remove('reveal-right')
    }

    if(document.body.contains(document.querySelector('.reveal-left'))){
        document.querySelector('.reveal-left').classList.remove('reveal-left')
    }

    cards[pos].classList.remove('hide-left')
    cards[pos].classList.remove('hide-right')
    cards[pos].classList.remove('hide')

    cards[pos].classList.add('focus')

    cards.forEach( (card, index) => {
        if(index > pos) {
            card.classList.add('hide')
            card.classList.add('hide-right')
        }else if(index < pos){
            card.classList.add('hide')
            card.classList.add('hide-left')
        }
    })
}

document.querySelector('.button-left').addEventListener('click', event => {
    pos === 0
        ? pos = cards.length-1
        : pos--

    resetCards()
    cards[pos].classList.add('reveal-left')
})

document.querySelector('.button-right').addEventListener('click', event => {
    pos === cards.length-1
        ? pos = 0
        : pos++

    resetCards()
    cards[pos].classList.add('reveal-right')
})
