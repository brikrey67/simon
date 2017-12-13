var score = 20 // score of current game
var recordScore = 15 // best overall score
var gameOver = false  // game over flag
var gameSequence = [] // array for game sequence
var userSequence = [] //array of user-entered sequence

$(document).ready(function(){
    // make sure js file is loading
    // $('body').css('background-color','red')

    // listener for new game button
    $(`#newGame`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("button listening")
        //reset gameOver variable
        gameOver = false
        // update score records
        manageScore ()
        }
    })

    // listener for top left console - green
    $(`#tlc`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("green - listening")
        
        }
    })

    // listener for top right console - red
    $(`#trc`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("red - listening")
        
        }
    })

    // listener for botton right console - blue
    $(`#brc`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("blue - listening")
        
        }
    })
    // listener for botton left console - yellow
    $(`#blc`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("yellow - listening")
        
        }
    })
})

// declared, hoisted function
function manageScore() {
    // verify function call
    console.log("score: "+score+"; Record Score: "+recordScore)
    // this function updates the record Score variable and the on-page scoreboard
    if (score > recordScore) {
        // update recordScore variable
        recordScore = score 
        // verify function call
        console.log("Record Score: "+recordScore)
        // update displayed recordScore
        $(`#recordScore`).html(recordScore) 
    }
    if (gameOver === true) {
        // reset game score
        score = 0 
        $(`#score`).html(score) 
        // verify handling of game record update
        console.log("score: "+score)
        // reset game sequence
        gameSequence = [] 
        // verify gane sequence reset
        console.log(gameSequence)
        return
    }
    buildSequence()
}

//declared, hoisted function that generate random number 1-4
//code derived from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt() {
    var min = 1
    var max = 4
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//declared, hoisted functon that presents game sequence to the player
function presentGameSequence(element, index, array) {
    if (element === 1) {
        // $(`#tlc`).css(background="red").delay(200).css(background="yellow")
        console.log ("Element: "+element)
        $(`#topLeftConsole`).toggleClass("tlcOff tlcOn")      
    }
    else if (element === 2) {
        // $(`#trc`).css(background="red").delay(200).css(background="yellow")
        console.log ("Element: "+element)
        $(`#topRightConsole`).toggleClass("trcOff trcOn")
    }
    else if (element === 3) {
        // $(`#brc`).css(background="red").delay(200).css(background="yellow")
        console.log ("Element: "+element)
        $(`#btmRightConsole`).toggleClass("brcOff brcOn")
    }
    else {
        // $(`#blc`).css(background="red").delay(200).css(background="yellow")
        console.log ("Element: "+element)
        $(`#btmLeftConsole`).toggleClass("blcOff blcOn")
    }
}

//declared, hoisted function that increments game pattern sequence
function buildSequence() {
    // get randome number between 1 and 4 to add to sequence
    var newRandomNumber = getRandomInt()
    gameSequence.push(newRandomNumber)
    console.log(gameSequence)
    //present array to player
    gameSequence.forEach(presentGameSequence)
}