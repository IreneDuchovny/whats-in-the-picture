'use strict'

var gQuest = createQuests()
console.log('', gQuest)
var gCurrQuestIdx = 0


function initGame() {
    gCurrQuestIdx = 0
    renderQuest()


}
function createQuests() {
    var Quest = [
        { id: 0, opts: ["Super mario ", "Pacman", "Zelda"], correctOptsIndex: 0 },
        { id: 1, opts: ["Sonic", "Donkey Kong", "Godzilla"], correctOptsIndex: 1 },
        { id: 2, opts: ["Rayman", "Kirby", "Pokemon"], correctOptsIndex: 2 }
    ]
    return Quest
}


function renderQuest() {
    var strHTML = ''
    var currQ = gQuest[gCurrQuestIdx]
    // console.log('currQ', currQ)
    for (var i = 0; i < currQ.opts.length; i++) {
        var currOption = currQ.opts[i]
        console.log('', currOption)
        console.log('"button" + i', "button" + i)
        strHTML +=
            `<button class="button" onclick="checkAnswer(${i})">${currOption} </button>`
    }
    var elImg = document.querySelector("img")
    // console.log('', elImg)
    elImg.style.display = 'block'
    elImg.src = `img/${gCurrQuestIdx}.jpg`
    var eldivGame = document.querySelector(".game")
    eldivGame.innerHTML = strHTML

}

//Victorious MSG
// restart button at 3rd Q
function endMsg() {
    alert('You are a 🧠 GENIUS 🤯')
    var eldivGame = document.querySelector(".game")
    eldivGame.innerHTML = `<button class="button" onclick="initGame()">Restart</button>`
    var elImg = document.querySelector("img")
    elImg.style.display = 'none'
    console.log('', elImg)
}



function checkAnswer(optIdx) {
    
    console.log('', optIdx)
    var currQuest = gQuest[gCurrQuestIdx]
    // console.log('',currQuest )
    var rightAnswer = currQuest.correctOptsIndex
    // console.log('', rightAnswer)
    if (optIdx === rightAnswer) {
        var elPopOnClick= document.querySelector(".player")
    elPopOnClick.play()
        gCurrQuestIdx++
        console.log('gCurrQuestIdx', gCurrQuestIdx)
        if (gCurrQuestIdx === 3) {
            endMsg()
        } else {
            renderQuest()
        }


    }

}
