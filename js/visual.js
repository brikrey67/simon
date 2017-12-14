let score // score of current game
let recordScore // best overall score
let gameSequence = [] // array for game sequence
let userClickIndex = 0 //tracks total player console clicks per round
let userClickSequence = "" // tracks player click sequence

$(document).ready(function(){

     let lastUserClick //most recent player console click

    // listener for new game button
    $(`#newGame`).on({
        click: function(){
            gameRestart = true
            manageScore (gameRestart)
        }
    })

    // listener for top left console - green
    $(`#topLeftConsole`).on({
        click: function(){
        $(`#topLeftConsole`).addClass("tlcInputOn")

        setTimeout(function(){
            let lastUserClick = 1
            userClickIndex = userClickIndex + 1
            validateLastClick(lastUserClick)
            $(`#topLeftConsole`).removeClass("tlcInputOn") 
            }, 600)  
        }
    })
    
    // listener for top right console - red
    $(`#topRightConsole`).on({
        click: function(){
        $(`#topRightConsole`).toggleClass("trcInputOn")
        
        setTimeout(function(){
            let lastUserClick = 2
            userClickIndex = userClickIndex + 1
            validateLastClick(lastUserClick)
            $(`#topRightConsole`).removeClass("trcInputOn") 
        }, 600) 
        }
    })

    // listener for botton left console - blue
    $(`#btmRightConsole`).on({
        click: function(){
        $(`#btmRightConsole`).addClass("brcInputOn")

        setTimeout(function(){
            let lastUserClick = 3
            userClickIndex = userClickIndex + 1
            validateLastClick(lastUserClick)
            $(`#btmRightConsole`).removeClass("brcInputOn") 
        }, 600) 
        }
    })
    // listener for botton left console - yellow
    $(`#btmLeftConsole`).on({
        click: function(){
        $(`#btmLeftConsole`).addClass("blcInputOn")
        
        setTimeout(function(){
            let lastUserClick = 4
            userClickIndex = userClickIndex + 1
            validateLastClick(lastUserClick)
            $(`#btmLeftConsole`).toggleClass("blcInputOn") 
        }, 600) 
        }
    })

    function manageScore(gameRestart) {
        if (gameRestart === false) {
            if (typeof recordScore === 'undefined') {recordScore = 0}
            if (score > recordScore) {
                recordScore = score 
                $(`#recordScore`).html(recordScore) 
            }
        }
        else if (gameRestart === true) {
            score = 0
            $(`#score`).html("000")
            gameSequence = [] 
            userClickIndex = 0
            userClickSequence = ""
            $(`#sequenceLength`).html("000") 
            $(`#sequence`).html("") 
            $(`#userSequence`).html("") 
        }
        buildSequence()
    }

    function buildSequence() {
        let newRandomNumber = getRandomInt()
        gameSequence.push(newRandomNumber)
        $(`#sequence`).html(gameSequence)
        presentGameSequence()
    }

    //declared, hoisted function that generate random number 1-4
    //code derived from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomInt() {
        let min = 1
        let max = 4
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function presentGameSequence() {
        for (let ndex=0; ndex<gameSequence.length; ndex++) {
            setTimeout(function(){
                if (gameSequence[ndex] === 1) {
                    $(`#topLeftConsole`).removeClass("tlcOn")
                    $(`#topLeftConsole`).addClass("tlcOn") 
                }
                else if (gameSequence[ndex] === 2) {
                    $(`#topRightConsole`).removeClass("trcOn") 
                    $(`#topRightConsole`).addClass("trcOn") 
                }
                else if (gameSequence[ndex] === 3) {
                    $(`#topLeftConsole`).removeClass("brcOn") 
                    $(`#btmRightConsole`).addClass("brcOn") 
                }
                else {
                    $(`#topLeftConsole`).removeClass("blcOn") 
                    $(`#btmLeftConsole`).addClass("blcOn")
                }
                $(`#sequenceLength`).html(gameSequence.length)
            }, 600*ndex)
        } 
    }

    function validateLastClick(lastUserClick) {
        if (lastUserClick === gameSequence[userClickIndex-1]) {
            $(`#userSequence`).html(userClickSequence)
            if (userClickIndex === gameSequence.length) {
                score = score + 1
                $(`#score`).html(score)
                gameRestart = false
                userClickIndex = 0
                manageScore(gameRestart)
            }
        }
        else {
            alert("Sorry. Game over!... You did not match the game pattern.")
        }
    }
})

