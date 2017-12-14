var score // score of current game
var recordScore // best overall score
var gameSequence = [] // array for game sequence
var userClickIndex = 0 //tracks total player console clicks per round

$(document).ready(function(){
    // make sure js file is loading
    // $('body').css('background-color','red')

     let lastUserClick //most recent player console click

    // listener for new game button
    $(`#newGame`).on({
        click: function(){
        console.log("new game button invoked")
        //reset gameOver variable
        gameRestart = true
        manageScore (gameRestart)
        }
    })

    // listener for top left console - green
    $(`#topLeftConsole`).on({
        click: function(){
        console.log("GREEN CONSOLE INVOKED")
        // record lastest click
        var lastUserClick = 1
        console.log("green click: "+lastUserClick)
        //increment user click index
        userClickIndex = userClickIndex + 1
        console.log("green click index: "+userClickIndex)
        validateLastClick(lastUserClick)
        }
    })

    // listener for top right console - red
    $(`#topRightConsole`).on({
        click: function(){
        console.log("RED CONSOLE INVOKED")        
        // record lastest click
        var lastUserClick = 2
        console.log("red click: "+lastUserClick)
        //increment click index
        userClickIndex = userClickIndex + 1
        console.log("red click index: "+userClickIndex)
        validateLastClick(lastUserClick)
        }
    })

    // listener for botton left console - yellow
    $(`#btmRightConsole`).on({
        click: function(){
        console.log("BLUE CONSOLE INVOKED")
        // record lastest click and increment click index
        var lastUserClick = 3
        console.log("blue click: "+lastUserClick)
        userClickIndex = userClickIndex + 1
        console.log("blue click index: "+userClickIndex)
        validateLastClick(lastUserClick)
        }
    })
    // listener for botton left console - yellow
    $(`#btmLeftConsole`).on({
        click: function(){
        console.log("YELLOE CONSOLE INVOKED")
        // record lastest click and increment click index
        var lastUserClick = 4
        console.log("yellow click: "+lastUserClick)
        userClickIndex = userClickIndex + 1
        console.log("yellow click index: "+userClickIndex)
        validateLastClick(lastUserClick)
        }
    })

    // declared, hoisted function for score management  
    function manageScore(gameRestart) {
        console.log("manageScore invoked")
        if (gameRestart === false) {
            console.log("game continues")
            console.log("score: "+score+ " record score: "+recordScore)
            if (typeof recordScore === 'undefined') {recordScore = 0}
            if (score > recordScore) {
                recordScore = score 
                $(`#recordScore`).html(recordScore) 
                // XXXXX add notification XXXX
            }
        }
        else if (gameRestart === true) {
            console.log("game restart ")
            // reset game
            score = 0
            $(`#score`).html("000")
            gameSequence = [] 
            $(`#sequenceLength`).html("000") 
        }
        buildSequence()
    }

    //declared, hoisted function that increments game pattern sequence
    function buildSequence() {
        console.log("buildSequence invoked")
        // get randome number between 1 and 4 to add to sequence
        var newRandomNumber = getRandomInt()
        gameSequence.push(newRandomNumber)
        console.log(gameSequence)
        // call presentGameSquence with first item in array
        presentGameSequence()
    }

    //declared, hoisted function that generate random number 1-4
    //code derived from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomInt() {
        console.log("getRandomInt invoked")
        var min = 1
        var max = 4
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    //declared, hoisted functon that presents game sequence to the player
    function presentGameSequence() {
        console.log("presentGameSequence invoked")
        for (let ndex=0; ndex<gameSequence.length; ndex++) {
            // check for "console on" classes and remove if they exist
            console.log("ndex before toggle check: "+ndex)
            console.log("checking for class toggles")
            if ($(`#topLeftConsole`).hasClass("tlcOn")){
                console.log("turning off tlcOn")
                $(`#topLeftConsole`).toggleClass("tlcOff tlcOn") 
            }
            if ($(`#topRightConsole`).hasClass("trcOn")){
                console.log("turning off trcOn")
                $(`#topRightConsole`).toggleClass("trcOff trcOn") 
            }
            if ($(`#btmRightConsole`).hasClass("brcOn")){
                console.log("turning off brcOn")
                $(`#btmRightConsole`).toggleClass("brcOff brcOn") 
            }
            if ($(`#btmLeftConsole`).hasClass("blcOn")){
                console.log("need to turn off blcOn")
                $(`#btmLeftConsole`).toggleClass("blcOff blcOn") 
            }
            console.log("ndex after toggle check: "+ndex)
            // run annimation
            setTimeout(function(){
                console.log("starting animations")
                console.log("ndex before animations: "+ndex)
                if (gameSequence[ndex] === 1) {
                    console.log("processing 1 in array")
                    console.log("gameSequence Length: "+gameSequence.length)
                    console.log ("Animation Index: "+ndex)
                    console.log ("Animation Element: "+gameSequence[ndex])
                    $(`#topLeftConsole`).toggleClass("tlcOff tlcOn")
                }
                else if (gameSequence[ndex] === 2) {
                    console.log("processing 2 in array")
                    console.log("gameSequence Length: "+gameSequence.length)
                    console.log ("Animation Index: "+ndex)
                    console.log ("Animation Element: "+gameSequence[ndex])
                    $(`#topRightConsole`).toggleClass("trcOff trcOn")
                }
                else if (gameSequence[ndex] === 3) {
                    console.log("processing 3 in array")
                    console.log("gameSequence Length: "+gameSequence.length)
                    console.log ("Animation Index: "+ndex)
                    console.log ("Animation Element: "+gameSequence[ndex])
                    $(`#btmRightConsole`).toggleClass("brcOff brcOn")
                }
                else {
                    console.log("processing 4 in array")
                    console.log("gameSequence Length: "+gameSequence.length)
                    console.log ("Animation Index: "+ndex)
                    console.log ("Animation Element: "+gameSequence[ndex])
                    $(`#btmLeftConsole`).toggleClass("blcOff blcOn")
                }
                console.log("ndex after animation: "+ndex)
            }, 1200*ndex)
        }
        // update displayed sequence length
        $(`#sequenceLength`).html(gameSequence.length) 
    }

    function validateLastClick(lastUserClick) {
        console.log("validateLastClick invoked")
        console.log("lastUserClick: "+lastUserClick)
        console.log("gameSequence element: "+gameSequence[userClickIndex -1])
        if (lastUserClick === gameSequence[userClickIndex-1]) {
            // XXXX display of correct player entry XXXX
            console.log("userClickIndex: "+userClickIndex)
            console.log("gameSequence.length: "+gameSequence.length)
            if (userClickIndex === gameSequence.length) {
                score = score + 1
                console.log("score increased to: "+score)
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

